#!/usr/bin/env python3
"""Rewrite PDF containers; unchanged legacy handwritten documents are never rewritten."""
import argparse
import hashlib
import json
from pathlib import Path
import os
import tempfile

from pypdf import PdfReader, PdfWriter
from pypdf.generic import DictionaryObject, NameObject

ROOT = Path(__file__).resolve().parents[2]


def clean(path):
    reader = PdfReader(path)
    if reader.is_encrypted:
        raise ValueError('Encrypted PDF requires manual review')
    writer = PdfWriter(clone_from=reader)
    writer.metadata = None
    # Drop document/page/image XMP streams and application editing history.
    for obj in writer._objects:
        if isinstance(obj, DictionaryObject):
            obj.pop(NameObject('/Metadata'), None)
            obj.pop(NameObject('/PieceInfo'), None)
    writer.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    with tempfile.NamedTemporaryFile(dir=path.parent, prefix='.clean-', suffix='.pdf', delete=False) as stream:
        writer.write(stream)
        temp = Path(stream.name)
    if len(PdfReader(temp).pages) != len(reader.pages):
        raise ValueError('Page count changed; original PDF preserved')
    os.replace(temp, path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('paths', nargs='+', type=Path)
    args = parser.parse_args()
    baseline = json.loads((ROOT / 'tools/privacy/legacy-handwritten.json').read_text())
    hashes = {item['sha256'] for item in baseline.values()}
    for argument in args.paths:
        paths = sorted(argument.rglob('*.pdf')) if argument.is_dir() else [argument]
        for path in paths:
            if path.suffix.lower() != '.pdf':
                raise ValueError('Only PDF files are accepted')
            if hashlib.sha256(path.read_bytes()).hexdigest() in hashes:
                print(f'Preserved unchanged handwritten PDF: {path}')
                continue
            clean(path)
            print(f'Rewritten PDF metadata: {path}')


if __name__ == '__main__':
    main()
