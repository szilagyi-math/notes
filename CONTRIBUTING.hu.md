# Közreműködés

[English](CONTRIBUTING.md)

- A commit neve, e-mail-címe és a GitHub-azonosság nyilvános lesz, és forkokban
  végleg megmaradhat. Kapcsold be: **Settings → Emails → Keep my email addresses
  private**, és állítsd be a GitHub noreply címedet a Gitben.
- Titkot, kulcsot, `.env` fájlt, szerkesztőkonfigot vagy gépfüggő scriptet ne
  commitolj. Valódi érték nélküli `.example` mintát használj; a privát fájlok
  ignoráltak. Issue-ba, PR-ba és naplóba se másolj személyes adatot.
- PDF/kép feltöltése előtt töröld a szerzői, készítői, hely-, előzmény- és más
  beágyazott metaadatokat. Támogatott képnél használható az ExifTool `-all=`.
  PDF-nél teljes újraírás kell, például `python3 tools/privacy/clean.py file.pdf`
  a `tools/privacy/requirements.txt` telepítése után. Az ExifTool PDF-módosítása
  inkrementális: önmagában nem törli a régi metaadatbájtokat. Hasonlítsd össze
  a renderképet és oldalszámot, majd vizsgálj ExifTool-lal. Az eredetit őrizd
  privát helyen.
- Kézzel írt anyagban nem lehet név, Neptun-kód, aláírás vagy személyes adat.
  A beküldő felel minden lap ellenőrzéséért, a szövegkinyeréssel nem olvasható
  szkennelt lapokon is. A látható személyes adat eltávolítása külön, jóváhagyott
  tartalmi javítás, nem metaadattisztítás.
- Kurzusanyag csak az oktató engedélyével és csak akkor tölthető fel, ha
  nyilvános lehet. A PR beküldője nyilatkozik a repó alkalmazandó licence alatti
  közlés jogáról. Kód: MIT; eredeti jegyzet: CC BY-SA 4.0. Más tulajdonos
  anyagához külön jogosultságigazolás kell.
- Külső PR célja `main`; merge csak review és zöld CI után. Fork CI nem kap
  titkot; `pull_request_target` alatt külső PR-kód nem futtatható.
- Új függőség és workflow-módosítás külön PR-ban, indoklással és ellenőrzéssel
  történjen. A verziórögzítést és a szükséges jogokat dokumentálni kell.
- Érzékeny adat bekerülésekor azonnal privát jelzés a karbantartónak, majd
  kulcsvisszavonás/csere. A `git filter-repo` történettisztítás csak a
  karbantartóval és közreműködőkkel egyeztetve történhet. A forkok/másolatok
  miatt az adat kiszivárgottnak tekintendő. Közös történet átírása és force push
  csak külön, kifejezett jóváhagyással végezhető.

## Ellenőrzés PR előtt

Kövesd a README beállításait. A `pnpm install` beállítja a `.githooks` hookot,
ha nem ír felül meglévő saját hookot. Telepíts Gitleaks-et és ExifTool-t;
hiányukban a hook megáll. Futtasd: `pnpm lint`, `pnpm test:privacy`, teljes
build/assemble és `pnpm check:links`. Stage-eld a kívánt fájlokat, majd
`pnpm check:privacy:staged`: ez a Git indexet olvassa, az unstaged módosításokat
nem. A bináris korlát 10 MiB. A Gitleaks helyben a staged változást, CI-ban a
lekért teljes történetet ellenőrzi. A metaadatértékek nem kerülnek a naplóba.

A 27 régi kézirat külön döntésig érintetlen marad. A pontos útvonal/SHA-256
manifest csak átmeneti kivétel, nem engedély új vagy megváltoztatott feltöltésre.
Hibás check elfedésére ne bővítsd, nevezd át vagy frissítsd a kivételeket.
Szabálymódosításhoz code-owner review kell.
