#!/usr/bin/env python3
"""Check Git snapshots without logging metadata values or secret contents."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile

MEDIA = {'.pdf', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.tif', '.tiff', '.svg', '.docx', '.heic', '.avif', '.eps'}
SENSITIVE = re.compile(r'author|creator|producer|gps|artist|owner|software|comment|description|title|subject|keywords|createdate|modifydate|metadatadate|documentid|instanceid|history|filepath|username|company|manager|lastmodifiedby|copyright|by-line|credit|caption|contact|serialnumber|person|email|address|phone|location', re.I)
LIMIT = 10 * 1024 * 1024
ROOT = Path(__file__).resolve().parents[2]


def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT)


def metadata_fields(path):
    result = subprocess.run([os.environ.get('EXIFTOOL', 'exiftool'), '-json', '-G1', '-a', str(path)], capture_output=True, check=True)
    row = json.loads(result.stdout)[0]
    if row.get('ExifTool:Error') or row.get('ExifTool:Warning'):
        # A parser failure must not turn into a clean result.
        raise ValueError('Metadata could not be completely inspected')
    return sorted(key for key, value in row.items()
                  if value not in (None, '') and (SENSITIVE.search(key) or key.startswith('XMP-'))
                  and not key.startswith(('System:', 'ICC-header:', 'ICC_Profile:')))


def forbidden(path):
    parts = Path(path).parts
    name = parts[-1]
    env = (name == '.env' or name.startswith('.env.')) and not name.endswith('.example')
    return env or '.vscode' in parts or parts[0] == 'scripts' or name in {'latex-linker.sh', 'latex-linker.bat'}


def inspect(path, data, baseline, mode='100644'):
    problems = []
    if forbidden(path):
        problems.append('private/local configuration must not be tracked')
    suffix = Path(path).suffix.lower()
    # Renaming a PDF/image to .txt must not bypass metadata inspection.
    detected = None
    head = data[:8192].lstrip()
    for magic, extension in [(b'%PDF-', '.pdf'), (b'\x89PNG\r\n\x1a\n', '.png'),
                             (b'\xff\xd8\xff', '.jpg'), (b'GIF87a', '.gif'),
                             (b'GIF89a', '.gif'), (b'II*\x00', '.tif'),
                             (b'MM\x00*', '.tif'), (b'\xc5\xd0\xd3\xc6', '.eps'),
                             (b'%!PS', '.eps')]:
        if head.startswith(magic):
            detected = extension
            break
    if head.startswith(b'RIFF') and head[8:12] == b'WEBP':
        detected = '.webp'
    if head.startswith(b'<svg') or (head.startswith(b'<?xml') and b'<svg' in head):
        detected = '.svg'
    if head.startswith(b'PK\x03\x04') and b'word/' in data:
        detected = '.docx'
    if detected and suffix not in MEDIA:
        problems.append('media requires an appropriate file extension')
        suffix = detected
    if len(data) > LIMIT and (suffix in MEDIA or b'\0' in data[:8192]):
        problems.append('binary exceeds 10 MiB')
    if suffix not in MEDIA:
        return problems, False
    if mode not in {'100644', '100755'}:
        return problems + ['media must be a regular file'], False
    allowed = baseline.get(path)
    if allowed and hashlib.sha256(data).hexdigest() == allowed['sha256']:
        return problems, True
    with tempfile.TemporaryDirectory(prefix='notes-metadata-') as directory:
        target = Path(directory) / ('media' + suffix)
        target.write_bytes(data)
        fields = metadata_fields(target)
    if fields:
        problems.append('embedded metadata: ' + ', '.join(fields))
    return problems, False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--staged', action='store_true', help='inspect index bytes, never unstaged working-tree bytes')
    parser.add_argument('--directory', type=Path, help='also check generated/published media without changing them')
    args = parser.parse_args()
    # Read policy from the index: unstaged edits cannot affect a pre-commit check.
    baseline = json.loads(git('show', ':tools/privacy/legacy-handwritten.json'))
    selected = None
    if args.staged:
        selected = set(git('diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z').decode().split('\0'))
    failures = []
    exempt = 0
    checked = 0
    for record in git('ls-files', '--stage', '-z').decode().split('\0'):
        if not record:
            continue
        info, path = record.split('\t', 1)
        mode, oid, stage = info.split()
        if stage != '0':
            failures.append((path, ['resolve merge conflict before checking']))
            continue
        if selected is not None and path not in selected:
            continue
        data = git('cat-file', 'blob', oid)
        problems, legacy = inspect(path, data, baseline, mode)
        checked += 1
        exempt += legacy
        if problems:
            failures.append((path, problems))
    if args.directory:
        # Exported handwritten aliases are allowed only for the same exact bytes.
        hashes = {item['sha256'] for item in baseline.values()}
        for path in sorted(args.directory.rglob('*')):
            if not path.is_file() or path.suffix.lower() not in MEDIA:
                continue
            data = path.read_bytes()
            digest = hashlib.sha256(data).hexdigest()
            alias = {str(path): {'sha256': digest}} if digest in hashes else {}
            problems, legacy = inspect(str(path), data, alias)
            checked += 1
            exempt += legacy
            if problems:
                failures.append((str(path), problems))
    for path, problems in failures:
        print(path + ': ' + '; '.join(problems), file=sys.stderr)
    print(f'Privacy check: {checked} files, {exempt} unchanged legacy handwritten PDFs, {len(failures)} failures.')
    return bool(failures)


if __name__ == '__main__':
    try:
        sys.exit(main())
    except (OSError, ValueError, subprocess.SubprocessError):
        print('Privacy check failed to run. Install exiftool and stage the policy manifest; metadata values suppressed.', file=sys.stderr)
        sys.exit(2)
