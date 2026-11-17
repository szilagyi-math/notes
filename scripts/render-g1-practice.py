"""Render each G1 exercise and solution as inline images from the original typesetting."""

import io
import json
import re
import subprocess
import sys
from pathlib import Path
from xml.etree import ElementTree

from PIL import Image, ImageChops, ImageOps

DPI = 160
SCALE = DPI / 72
DESTINATION = re.compile(r'^\s*(\d+)\s+\[ XYZ\s+\S+\s+([\d.]+)\s+\S+\s+\]\s+"([^"]+)"$', re.M)


def capture(*command):
    return subprocess.check_output(command)


def whitespace_boundary(image, y, left, right):
    """Use inter-line whitespace if an anchor falls on an ascender or accent."""
    target = round(y * SCALE)
    radius = round(12 * SCALE)
    band = image.crop((left, target - radius, right, target + radius + 1))
    ink = ImageChops.difference(band, Image.new('RGB', band.size, 'white'))
    offsets = list(range(0, -radius - 1, -1)) + list(range(1, radius + 1))
    for offset in offsets:
        row = radius + offset
        if not ink.crop((0, row, ink.width, row + 1)).getbbox():
            return target + offset
    return target


class Document:
    def __init__(self, path):
        self.path = path
        info = capture('pdfinfo', '-dests', path).decode()
        self.destinations = {
            name: (int(page), float(y))
            for page, y, name in DESTINATION.findall(info)
        }
        tree = ElementTree.fromstring(capture('pdftotext', '-bbox-layout', path, '-'))
        self.pages = tree.findall('.//{*}page')
        self.images = {}

    def image(self, page):
        if page not in self.images:
            data = capture(
                'pdftoppm', '-f', str(page), '-l', str(page),
                '-r', str(DPI), '-png', '-singlefile', self.path,
            )
            self.images[page] = Image.open(io.BytesIO(data)).convert('RGB')
        return self.images[page]

    def render(self, start, stop, directory, name, heading_offset):
        first_page, _ = start
        last_page = stop[0] if stop else len(self.pages)
        images = []
        for page in range(first_page, last_page + 1):
            layout = self.pages[page - 1]
            height = float(layout.get('height'))
            width = float(layout.get('width'))
            # Match the document's symmetric page margins, omitting the running footer.
            top = height - start[1] - heading_offset if page == first_page else 57
            bottom = height - stop[1] - heading_offset if stop and page == last_page else height - 60
            if bottom <= top:
                continue
            page_image = self.image(page)
            left = round(36 * SCALE)
            right = round((width - 36) * SCALE)
            top_px = whitespace_boundary(page_image, top, left, right) if page == first_page else round(top * SCALE)
            bottom_px = whitespace_boundary(page_image, bottom, left, right) if stop and page == last_page else round(bottom * SCALE)
            if bottom_px <= top_px:
                continue
            image = page_image.crop((left, top_px, right, bottom_px))
            ink = ImageChops.difference(image, Image.new('RGB', image.size, 'white')).getbbox()
            if not ink:
                continue
            image = ImageOps.expand(image.crop((0, ink[1], image.width, ink[3])), border=(0, 5), fill="white")
            filename = f'{name}-{len(images) + 1}.webp'
            image.save(directory / filename, 'WEBP', lossless=True, method=4)
            words = [
                word.text for word in layout.findall('.//{*}word')
                if word.text and top_px <= (float(word.get('yMin')) + float(word.get('yMax'))) * SCALE / 2 < bottom_px
            ]
            images.append({'file': filename, 'width': image.width, 'height': image.height, 'text': ' '.join(words)})
        if not images:
            raise ValueError(f'{self.path}: empty rendering for {name}')
        return images


def render_worksheet(row, pdf_dir, output_dir, show_solution):
    count = len(row['exerciseLines'])
    worksheet = Document(pdf_dir / f"{row['target']}.pdf")
    question_points = [worksheet.destinations[f'practice-{number}'] for number in range(1, count + 1)]
    solutions = None
    solution_points = []
    if show_solution and row.get('latexSolutionTarget'):
        solutions = Document(pdf_dir / f"{row['latexSolutionTarget']}.pdf")
        names = [f"subsection.{row['week']}.{number}" for number in range(1, count + 1)]
        actual = {name for name in solutions.destinations if name.startswith('subsection.')}
        if actual != set(names):
            raise ValueError(f'{solutions.path}: solution sections do not match the {count} exercises')
        solution_points = [solutions.destinations[name] for name in names]

    directory = output_dir / row['target']
    directory.mkdir(parents=True, exist_ok=True)
    items = []
    for index, question in enumerate(question_points):
        question_end = question_points[index + 1] if index + 1 < count else None
        item = {
            'question': worksheet.render(question, question_end, directory, f'{index + 1}-feladat', 10),
        }
        if solutions:
            solution_end = solution_points[index + 1] if index + 1 < count else None
            item['solution'] = solutions.render(
                solution_points[index], solution_end, directory, f'{index + 1}-megoldas', 1,
            )
        items.append(item)

    (directory / 'index.json').write_text(json.dumps(items, ensure_ascii=False), encoding='utf-8')
    return count


def main():
    pdf_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    weeks = {int(week) for week in sys.argv[3:]}
    config = json.loads(Path('generate/config.json').read_text())['G1']['practiceMaterial']
    total = 0
    for row in config['files']:
        if not row.get('exerciseLines') or (weeks and row['week'] not in weeks):
            continue
        show_solution = all(
            setting not in ('no-copy', 'no-link')
            for setting in (config.get('hideSolutions'), row.get('hideSolution'))
        )
        total += render_worksheet(row, pdf_dir, output_dir, show_solution)
    print(f'Rendered {total} G1 exercises and solutions.')


if __name__ == '__main__':
    main()
