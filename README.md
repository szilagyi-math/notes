# Math notes monorepo

[Magyar](README.hu.md) · [Website](https://szilagyi-math.hu/)

Hungarian university mathematics notes, exercises and solutions for G1, G2 and
G3. Next.js statically exports the Velite/MDX website; LuaLaTeX compiles the PDFs.

## Local setup

Use the Node version in `.nvmrc` and pnpm 9.15.4 (the `packageManager` field).
Install Python 3.12, ExifTool, Gitleaks 8.30.1, Pandoc and a complete TeX Live
with LuaLaTeX, latexmk and gnuplot. On macOS the non-TeX tools are available with
`brew install exiftool gitleaks pandoc`; install TeX Live separately.

```sh
pnpm install --frozen-lockfile
python3 -m venv .venv
.venv/bin/python -m pip install -r tools/privacy/requirements.txt
pnpm latex
.venv/bin/python tools/privacy/clean.py latex-docs
pnpm build
pnpm practice:html
pnpm site:assemble
pnpm check:links
pnpm check:privacy
python3 tools/privacy/check.py --directory out
pnpm start
```

Open http://localhost:3000 after the final command. `pnpm dev` starts development;
`pnpm generate` produces the ignored `generate/` configuration first. `pnpm build`
automatically regenerates this configuration and the Velite collection.
`pnpm start` serves `out/` as static files; there is no Next.js server deployment.

Tracked build tools live under `tools/build/`. The compiler searches
`latex-packages/` with `TEXINPUTS`; it does not install/delete user TeX packages.
Some existing gnuplot figures require TeX shell escape: run local LaTeX builds
only for source you have reviewed. CI compiles in a separate container without
repository write credentials. `scripts/`, `latex-linker.*` and `.vscode/` are
ignored legacy machine-local helpers and are not required. An optional editor
example is in `examples/vscode.settings.json`; copy it to your private editor
configuration. No environment file is required for the static build. See
[CONTRIBUTING.md](CONTRIBUTING.md) before adding configuration or media.

## Checks and deployment

`pnpm install` installs the local pre-commit hook if no different hooks path is
configured. It checks staged bytes with Gitleaks and the metadata/10 MiB binary
policy. Existing custom hooks must invoke `.githooks/pre-commit` themselves.
`pnpm lint`, `pnpm test:privacy`, and the build/link/privacy commands above also
run in PR CI. See [the workflow](.github/workflows/page.yaml).

PRs target `main`. Only a successful push build on `main` can publish to
`gh-pages`; PR and manual runs cannot deploy. The required checks are
`Privacy and lint`, `LaTeX build`, and `Web build and links`. The site artifact
preserves `public/CNAME` (`szilagyi-math.hu`) and `.nojekyll`. GitHub Pages must
serve `gh-pages` at `/` with HTTPS enforced. Node, action commits, the TeX image
digest and the secret-scanner checksum are pinned; Dependabot proposes updates.

## Privacy status and contribution

[CONTRIBUTING.md](CONTRIBUTING.md) defines privacy, permissions and review rules;
[SECURITY.md](SECURITY.md) explains private reporting. There are 27 unchanged
legacy handwritten PDFs awaiting full page-content and rights review. Some
contain names in the visible page content. Their exact byte hashes are the only
metadata exceptions in `tools/privacy/legacy-handwritten.json`; this is not a
privacy clearance. New/changed media must pass without those exceptions.
See [remaining maintainer tasks](docs/repo-hardening.md).

## Licensing and attribution

Code is MIT; original notes with confirmed contributor rights are CC BY-SA 4.0.
Credit `szilagyi-math/notes contributors`, link to the source and license, and
identify changes when reusing the notes. Third-party logos/material and pending
legacy handwritten PDFs retain their existing rights; see [LICENSE](LICENSE).
