# Matematika jegyzetek monorepo

[English](README.md) · [Weboldal](https://szilagyi-math.hu/)

Magyar egyetemi matematika jegyzetek, feladatok és megoldások G1, G2 és G3
 tárgyakhoz. A Next.js statikusan exportálja a Velite/MDX-oldalt; a PDF-eket
LuaLaTeX fordítja.

## Helyi beállítás

Használd a `.nvmrc` Node-verzióját és a `packageManager` mező szerinti pnpm
9.15.4-et. Szükséges: Python 3.12, ExifTool, Gitleaks 8.30.1, Pandoc és teljes
TeX Live LuaLaTeX, latexmk és gnuplot eszközökkel. macOS-en a nem TeX eszközök:
`brew install exiftool gitleaks pandoc`; a TeX Live külön telepítendő.

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

Az utolsó parancs után: http://localhost:3000. A fejlesztői mód `pnpm dev`;
előtte a `pnpm generate` létrehozza az ignorált `generate/` konfigurációt.
A `pnpm build` automatikusan újragenerálja ezt és a Velite-gyűjteményt.
A `pnpm start` az `out/` statikus tartalmát szolgálja ki; az éles oldal nem
Next.js-szervert futtat.

A követett buildeszközök a `tools/build/` alatt vannak. A fordító `TEXINPUTS`
segítségével keresi a `latex-packages/` fájljait; nem telepít vagy töröl a
felhasználói TeX-könyvtárban. Egyes meglévő gnuplot-ábrákhoz TeX shell escape
kell: helyben csak átnézett forrást fordíts. A CI külön konténerben, repóírási
jog nélkül fordít. A `scripts/`, `latex-linker.*` és `.vscode/` ignorált régi
helyi segédeszköz; a buildhez nem szükséges. Az opcionális szerkesztőminta:
`examples/vscode.settings.json`, ezt a saját privát beállításaid közé másold.
A statikus buildhez env-fájl nem kell. Feltöltés előtt olvasd el a
[CONTRIBUTING.hu.md](CONTRIBUTING.hu.md) szabályait.

## Ellenőrzés és publikálás

A `pnpm install` telepíti a helyi pre-commit hookot, ha nincs más hooksPath
beállítva. A hook a staged bájtokat vizsgálja Gitleaks-szel, metaadat- és
10 MiB binárisméret-ellenőrzéssel. Saját hookból hívd a
`.githooks/pre-commit` fájlt. A `pnpm lint`, `pnpm test:privacy` és a fenti
build/link/privacy ellenőrzések PR-ban is futnak. Lásd a
[workflow-t](.github/workflows/page.yaml).

A PR célja `main`. Csak a `main` push sikeres buildje publikálhat a `gh-pages`
ágra; PR és kézi futtatás nem deployol. A kötelező checkek:
`Privacy and lint`, `LaTeX build`, `Web build and links`. Az artifact megőrzi a
`public/CNAME` (`szilagyi-math.hu`) és `.nojekyll` fájlokat. GitHub Pages:
`gh-pages`, `/`, kötelező HTTPS. A Node-verzió, action-commitok, TeX-konténer
digestje és a titokkereső checksumja rögzített; Dependabot javasol frissítést.

## Adatvédelmi állapot és közreműködés

A [CONTRIBUTING.hu.md](CONTRIBUTING.hu.md) tartalmazza az adatvédelmi,
engedélyezési és review-szabályokat; a [SECURITY.md](SECURITY.md) a privát
hibabejelentést. 27 változatlan régi kéziratos PDF teljes lap- és jogellenőrzése
hátravan. Egyes lapokon név is szerepel. A metaadat-kivételek csak pontos
bájthashhez kötöttek a `tools/privacy/legacy-handwritten.json` fájlban; ez nem
adatvédelmi jóváhagyás. Új/módosított média nem használhatja ezeket a kivételeket.
Lásd a [hátralévő karbantartói teendőket](docs/repo-hardening.md).

## Licenc és forrásmegjelölés

A kód MIT; az igazolt jogosultsággal közölt eredeti jegyzet CC BY-SA 4.0.
Újrafelhasználáskor jelöld a `szilagyi-math/notes contributors` forrást,
linkeld a repót és a licencet, és jelezd a változtatásokat. Harmadik fél
logóinak/anyagainak és a még ellenőrzendő kéziratoknak megmaradnak az eredeti
jogai; lásd a [LICENSE](LICENSE) fájlt.
