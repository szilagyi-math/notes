# Karbantartói teendők / Maintainer follow-up

## Megmaradó adatvédelmi kérdések / Remaining privacy work

- 27 változatlan kéziratos PDF, 186 oldal teljes vizuális és jogosultsági
  ellenőrzése szükséges. Legalább 18 első oldalon személynév látható; 21 PDF
  szövegréteg nélküli. Nevezett személyek adatait ez a dokumentum nem idézi.
  A `tools/privacy/legacy-handwritten.json` felsorolja az érintett fájlokat,
  a pontos megengedett bájthashsel. A kivétel nem teljes adatvédelmi jóváhagyás.
  A lapok javításához, eltávolításához és a régi példányok kezeléséhez külön
  tulajdonosi döntés kell. / Review all pages and rights before changing these
  files; exact hash exceptions are temporary and do not clear visible data.
- `google-apps-script/g1-results/Code.gs` eredménylekérése Neptun-kód alapú.
  Rate limit van, külön személyazonosítás a forrásban nem látható. A telepített
  Apps Script hozzáférését és az azonosítási modellt a karbantartónak külön
  felül kell vizsgálnia. Éles hallgatói lekérdezés nem történt. / Review live
  access controls separately; no student data was queried in this work.
- A commitokban régi, nem noreply e-mail-címek maradnak. A közreműködők
  váltsanak noreply címre. A történet nem lett átírva. / Historical commit
  identities remain; use GitHub noreply for future commits.

## Történettisztítás csak külön döntéssel / History rewrite only by approval

1. Értesítsd a karbantartókat és közreműködőket, állítsátok meg a párhuzamos
   pushokat; szivárgott kulcsot előbb vonjatok vissza/cseréljetek.
2. Készíts privát, hozzáférés-védett biztonsági másolatot, és külön tükörklónt
   a tisztításhoz. A másolat is érzékeny adatot tartalmazhat.
3. Határozzátok meg a pontos eltávolítandó útvonalakat/azonosságokat. Előbb
   a külön klónon tervezzétek meg és ellenőrizzétek a `git filter-repo` lépést.
4. A változó commit-azonosítók, aláírások, tagek, régi PR-hivatkozások és
   együttműködő klónok hatását vizsgáljátok meg. Teljes titok- és tartalmi
   ellenőrzés, illetve build után kérjetek explicit jóváhagyást a pushhoz.
5. Csak ezután, egyeztetett ablakban történhet történetcsere. Minden érintett
   újraklónoz/egyeztet; régi ág visszamerge-elése visszahozhatja az adatot.
6. Forkok, cache-ek és letöltött anyagok ettől nem tűnnek el. Szükség esetén
   kérjetek GitHub-támogatást; a már megosztott adatot tekintsétek kiszivárgottnak.

No filter-repo command, force push, branch deletion or history rewrite was run.

## GitHub-beállítások ellenőrzése / Verify settings

Settings → Pages: `gh-pages`, `/`, `szilagyi-math.hu`, Enforce HTTPS.
Settings → Branches: protect `main`, require one approval/code-owner review and
`Privacy and lint`, `LaTeX build`, `Web build and links`; disallow force push and
deletion. Settings → Security: enable private vulnerability reporting. About:
repository description, website and mathematics/education topics.

## Utóellenőrzés / Validation checklist

- Új PR-ban mindhárom kötelező CI-job sikeres; PR nem deployol.
- Metaadatos új média, módosított kézirat, `.env` és 10 MiB feletti bináris bukik.
- A 27 régi kézirat hash-e az eredeti maradt; nincs kinyomtatott személyes érték.
- A tisztított logók és PDF-ek renderképe változatlan.
- `pnpm build`, teljes LaTeX-build, összeállítás, linkek és privacy check sikeres.
- Jóváhagyott merge után main deploy szolgálja ki a domaint HTTPS-en.
- A fennmaradó kézirat-, jogosultság- és eredménylekérdezési kérdések gazdát kapnak.
