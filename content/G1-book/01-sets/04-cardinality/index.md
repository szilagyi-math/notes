---
title: A halmazok számossága
---

<Definition title="Azonos számosságú halmazok" id="defininition.1.13">
  Ha két halmaz, $A$ és $B$ között kölcsönösen egyértelmű megfeleltetés hozható
  létre, akkor azt mondjuk, hogy a két halmaz számossága azonos. Jelölése:
  $\card A = \card B$.
</Definition>

<Note>
  A számosság ekvivalenciareláció.
</Note>

<Definition title="Véges halmaz" id="definition.1.14">
  Az $A$ halmaz véges, ha $\exists n \in \mathbb N$, hogy $\card A = \card \; \{
    1; 2; \dots; n \}$, vagy ha $A = \emptyset$.
</Definition>

<Note>
  Ha nincs olyan $n$ természetes szám, amelyre az $A \neq \emptyset$ halmaz
  ekvivalens volna az $\{ 1; 2; \dots; n \}$ halmazzal, akkor az $A$ halmazt
  végtelen számosságúnak mondjuk. Létezik megszámlálhatóan és
  megszámlálhatatlanul végtelen halmaz.

  TODO: Tikz diagram
</Note>

<Theorem title="Racionális számok halmazának számossága" id="theorem.1.4.3">
  A racionális számok halmaza megszámlálhatóan végtelen.

  <Proof title="Cantor átlós módszere" >
    Minden pozitív racionális szám felírható tört alakban, ahol a nevező és a
    számláló is egész szám, ráadásul ezek egymás relatív prímjei.

    Ezeket a törteket rendezzük egy olyan táblázatba, ahol az $n$ sorban az
    $m$ oszlopban az $m/n$ tört áll. Ezeket a törteket az ábrán jelöl módszerrel
    sorba állítjuk, sorrendjük szerint pedig egyértelműen megfeleltethetők a 
    természetes számoknak.

    Könnyen belátható, hogy ez a módszer az összes racionális számra
    is kiterjeszthető, tehát a racionális számok halmaza valóban
    megszámlálhatóan végtelen.

    TODO: Tikz diagram
  </Proof>
</Theorem>

<Theorem title="Valós számok halmazának számossága" id="theorem.1.4.4">
  A valós számok halmaza nem megszámlálhatóan végtelen.
</Theorem>

## Fontosabb jelölések

- Nyílt halmaz jelölése: $(x; y) = ]x; y[ = \langle x; y \rangle$.
- Zárt halmaz jelölése: $[x; y]$.
- Az $a$ pont $\varepsilon$ sugarú környezete: 
  $K(a; \varepsilon) := (a - \varepsilon; a + \varepsilon)$
  (ezzel ekvivalens: $|x-a| < \varepsilon$).

TODO: Tikz diagram

<Definition title="Alsó és felső korlát" id="definition.1.15">
  A felülről korlátos $H$ halmaz legkisebb felső korlátja: supremum, jele: $\sup
  H$.

  Az alulról korlátos $H$ halmaz legnagyobb alsó korlátja: infimum, jele: $\inf
  H$.
</Definition>

<Theorem title="Korlátos halmaz szuprémuma" id="theorem.1.4.5">
  Felülről korlátos nemüres halmaznak mindig van szuprémuma.
</Theorem>

<Theorem title="Korlátos halmaz infimuma" id="theorem.1.4.6">
  Alulról korlátos nemüres halmaznak mindig van infimuma.
</Theorem>
