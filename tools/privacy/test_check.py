import contextlib
import io
import hashlib
import importlib.util
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest
from unittest import mock

spec = importlib.util.spec_from_file_location('privacy', Path(__file__).with_name('check.py'))
privacy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(privacy)


class PrivacyTests(unittest.TestCase):
    def test_legacy_exception_requires_identical_bytes_and_path(self):
        data = b'existing handwritten PDF'
        baseline = {'content/legacy.pdf': {'sha256': hashlib.sha256(data).hexdigest()}}
        self.assertEqual(privacy.inspect('content/legacy.pdf', data, baseline), ([], True))
        self.assertEqual(privacy.inspect('content/copy.txt', data, baseline), ([], False))
        # Changed or renamed PDFs must reach the parser, never the exception.
        with unittest.mock.patch.object(privacy, 'metadata_fields', return_value=['PDF:Author']):
            self.assertTrue(privacy.inspect('content/legacy.pdf', data + b'changed', baseline)[0])
            self.assertTrue(privacy.inspect('content/renamed.pdf', data, baseline)[0])

    def test_private_config_and_binary_size(self):
        for name in ['.env', '.env.production', 'x/.vscode/settings.json', 'scripts/local.sh']:
            self.assertTrue(privacy.inspect(name, b'', {})[0])
        self.assertFalse(privacy.inspect('.env.example', b'', {})[0])
        self.assertTrue(privacy.inspect('large.bin', b'\0' * (privacy.LIMIT + 1), {})[0])

    def test_metadata_values_are_not_reported(self):
        with unittest.mock.patch.object(privacy, 'metadata_fields', return_value=['PDF:Author', 'XMP-exif:GPSLatitude']):
            problems, legacy = privacy.inspect('new.pdf', b'new file', {})
        self.assertFalse(legacy)
        self.assertIn('PDF:Author', problems[0])
        self.assertNotIn('new file', problems[0])

    def test_file_group_comments_and_arbitrary_xmp_are_checked(self):
        result = subprocess.CompletedProcess([], 0, stdout=b'[{"File:Comment":"private-value", "XMP-custom:Unfamiliar":"private-value", "System:FileModifyDate":"technical-date"}]')
        with unittest.mock.patch.object(privacy.subprocess, 'run', return_value=result):
            fields = privacy.metadata_fields(Path('example.jpg'))
        self.assertEqual(fields, ['File:Comment', 'XMP-custom:Unfamiliar'])
        self.assertNotIn('private-value', str(fields))

    def test_index_snapshot_cannot_be_hidden_by_clean_worktree(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            subprocess.run(['git', 'init', '-q', directory], check=True)
            policy = root / 'tools/privacy/legacy-handwritten.json'
            policy.parent.mkdir(parents=True)
            policy.write_text('{}')
            (root / '.env').write_text('placeholder')
            subprocess.run(['git', '-C', directory, 'add', '.'], check=True)
            (root / '.env').write_text('')
            with unittest.mock.patch.object(privacy, 'ROOT', root), unittest.mock.patch('sys.argv', ['check.py', '--staged']), contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
                self.assertTrue(privacy.main())


if __name__ == '__main__':
    from unittest import mock
    unittest.main()
