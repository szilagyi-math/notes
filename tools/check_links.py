#!/usr/bin/env python3
"""Validate local export targets, case, fragments, and document metadata."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import sys

ROOT = Path('out')
ORIGIN = 'https://szilagyi-math.hu'


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.lang = None
        self.title = False
        self.description = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'html':
            self.lang = attrs.get('lang')
        if tag == 'title':
            self.title = True
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = bool(attrs.get('content', '').strip())
        for attr in ('href', 'src'):
            if attrs.get(attr):
                self.links.append(attrs[attr])


def check(root=ROOT):
    files = {str(p.relative_to(root)) for p in root.rglob('*') if p.is_file()}
    pages = {}
    for path in sorted(files):
        if path.endswith('.html'):
            page = Page()
            page.feed((root / path).read_text())
            pages[path] = page
    errors = []
    if not pages:
        errors.append('No exported HTML pages found')
    for path, page in pages.items():
        if page.lang != 'hu' or not page.title or not page.description:
            errors.append(f'{path}: require lang=hu, title and non-empty description')
        base = ORIGIN + '/' + (path[:-10] if path.endswith('index.html') else path)
        for link in page.links:
            url = urlsplit(urljoin(base, link))
            if url.scheme not in ('http', 'https') or url.hostname not in ('szilagyi-math.hu', 'www.szilagyi-math.hu'):
                continue
            raw = unquote(url.path).lstrip('/')
            candidates = [raw, raw.rstrip('/') + '/index.html' if raw else 'index.html']
            target = next((p for p in candidates if p in files), None)
            if target is None:
                errors.append(f'{path}: missing local target {raw}')
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f'{path}: missing fragment in {target}')
    if '.nojekyll' not in files or 'CNAME' not in files or (root / 'CNAME').read_text().strip() != 'szilagyi-math.hu':
        errors.append('Export requires .nojekyll and the expected CNAME')
    for error in sorted(set(errors)):
        print(error, file=sys.stderr)
    print(f'Export check: {len(pages)} HTML pages, {len(set(errors))} errors. External destinations are not fetched.')
    return bool(errors)


if __name__ == '__main__':
    sys.exit(check())
