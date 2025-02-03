---
title: Alapfogalmak
description: A lineáris algebra alapfogalmai
---

<Definition title="Csoport" id="definition.1.1" >
  Legyen $G$ nemüres halmaz, és $\circ$ egy művelet. Ekkor a $(G; \circ)$ 
  csoport, ha teljesülnek az alábbiak:

  1. $\forall a; b; c \in G: (a \circ b) \circ c = a \circ (b \circ c)$,
     <span style={{float: "right"}}>(**asszociativitás**)</span>
  2. $\exists e \in G: \forall a \in G: e \circ a = a \circ e = a$,
     <span style={{float: "right"}}>(**egységelem**)</span>
  3. $\forall a \in G: \exists a^{-1} \in G: a \circ a^{-1} = a^{-1} \circ a = e$.
     <span style={{float: "right"}}>(**inverz elem**)</span>
</Definition>

<Note>
  Ha a $\circ$ művelet kommutatív, azaz $\forall a, b \in G: a \circ b = b \circ
    a$, , akkor a csoportot **Abel-csoport**nak nevezzük.
</Note>

<Example>
  A $(\mathbb R; \cdot)$, $(\mathbb Q; +)$, $(\mathbb C; +)$ mindegyike
  Abel-csoport.

  Nem csoport $(\mathbb N; +)$, hiszen nincs inverz elem.

  $(\mathbb Q^*; +)$ sem csoport, mert nem létezik egységelem.
</Example>

<Definition title="Gyűrű" id="definition.1.2" >
  Legyen $R$ nemüres halmaz, és $\circ, +$ két művelet. Ekkor a $(R; +, \circ)$
  gyűrű, ha teljesülnek az alábbiak:

  - $(R; +)$ **Abel-csoport**,
  - $\forall a; b; c \in R: (a \circ b) \circ c = a \circ (b \circ c)$,
    <span style={{float: "right"}}>(**asszociativitás**)</span>
  - teljesül a disztributivitás:
    - $\forall a; b; c \in R: a \circ (b + c) = a \circ b + a \circ c$,
      <span style={{float: "right"}}>(**$\circ$ disztributív $+$-ra**)</span>
    - $\forall a; b; c \in R: (a + b) \circ c = a \circ c + b \circ c$.
      <span style={{float: "right"}}>(**$+$ disztributív $\circ$-ra**)</span>
</Definition>

<Definition title="Test" id="definition.1.3" >
  Legyen $T$ nemüres halmaz, és $\circ, +$ két művelet. Ekkor a $(T; +, \circ)$
  test, ha teljesülnek az alábbiak:

  1. $(T; +)$ **Abel-csoport**,
  2. $\forall a; b; c \in T: (a \circ b) \circ c = a \circ (b \circ c)$,
     <span style={{float: "right"}}>(**asszociativitás**)</span>
  3. $\exists e \in T: \forall a \in F: e \circ a = a \circ e = a$,
     <span style={{float: "right"}}>(**egységelem**)</span>
  4. $\forall a \in T \exists a^{-1} \in T:
        a \circ a^{-1} = a^{-1} \circ a = e$,
     <span style={{float: "right"}}>(**inverzelem**)</span>
  5. teljesül a **disztributivitás**.
</Definition>

<Example>
  A $(\mathbb R; +, \cdot)$, $(\mathbb Q; +, \cdot)$, $(\mathbb C; +, \cdot)$
  mindegyike test.
</Example>

<Definition title="Vektortér" id="definition.1.4" >
  Legyen $V$ nemüres halmaz, és $\circ, +$ két művelet, $T$ test.
  A $(V; +, \circ)$ a $T$ test feletti vektortér, ha teljesülnek az alábbiak:

  1. $(V; +)$ Abel-csoport,
  2. $\forall \lambda; \mu \in T \; \land \; \forall \rvec x \in V:
        (\lambda \circ \mu) \circ \rvec x
        = \lambda \circ (\mu \circ \rvec x)$,
  3. ha $\varepsilon$ a $T$-beli egységelem, akkor
      $\forall \rvec x \in V: \varepsilon \circ \rvec x = \rvec x$,
  4. teljesül a disztributivitás:
    - $\forall \lambda; \mu \in T \; \land \; \forall \rvec x \in V:
        \lambda \circ (\rvec x + \rvec y)
        = \lambda \circ \rvec x + \lambda \circ \rvec y$,
    - $\forall \lambda; \mu \in T \; \land \; \forall \rvec x \in V:
        (\lambda + \mu) \circ \rvec x
        = \lambda \circ \rvec x + \mu \circ \rvec x$.
</Definition>

<Example>
  A legfeljebb $n$-edfokú polinomok a skalárral való szorzásra és az összeadásra
  vektorteret alkotnak.

  A függvények az összeadásra és a skalárral való szorzásra vektorteret alkotnak.
</Example>

<Definition title="Vektor" id="definition.1.5" >
  A vektortér elemeit vektoroknak nevezzük.
  Jelölés: $\rvec x$, vagy $\underbar x$.
</Definition>

<Statement>
  A zéruselem és ellentett elem létezése egyértelmű.

  <Proof title="A zéruselem létezése egyértelmű" >
    Tegyük fel, hogy $\nvec$ és $\hat \nvec$ különböző
    zéruselemek, vagyis $\nvec \neq \hat \nvec$. Ebben az esetben
    $$
      \nvec = \nvec + \hat \nvec = \hat \nvec
      \text.
    $$
    Ez ellentmondás, tehát a zéruselem egyértelmű.
  </Proof>

  <Proof title="Az ellentett elem létezése egyértelmű" >
    Tegyük fel, hogy $-\rvec v$ és $-\hat{\rvec v}$ egyaránt
    $\rvec v$ ellentettjei, valamint $-\rvec v \neq -\hat{\rvec v}$.
    Ebben az esetben
    $$
      -\hat{\rvec v}
      = (-\rvec v + \rvec v) + (-\hat{\rvec v})
      = (-\rvec v) + (\rvec v + (-\hat{\rvec v}))
      = -\rvec v
      \text.
    $$
    Ez ellentmondás, tehát az ellentett elem egyértelmű.
  </Proof>
</Statement>

<Statement>
  0-val való szorzás:
  $\forall \rvec v \in V: 0 \cdot \rvec v = \nvec$.
</Statement>

<Statement>
  Nullvektorral való szorzás:
  $\forall \lambda \in T: \lambda \cdot \nvec = \nvec$.
</Statement>

<Statement>
  $\lambda \cdot \rvec v = \nvec \quad \Longleftrightarrow \quad
    \lambda = 0 \; \lor \; \rvec v = \nvec$
</Statement>

<Definition title="Lineáris függetlenség" id="definition.1.6" >
  A $(V; +; \lambda)$ vektortér $\rvec v_1, \rvec v_2, \ldots, \rvec v_n$
  vekrorait lineárisan függetlennek mondjuk, ha a
  $$
    \lambda_1 \rvec v_1
    + \lambda_2 \rvec v_2
    + \ldots
    + \lambda_n \rvec v_n
    = \nvec
  $$
  vektoregyenletnek **csak a triviális megoldása** létezik, azaz
  $\lambda_1 = \lambda_2 = \ldots = \lambda_n = 0$.

  Ha az egyenletnek nem csak a triviális megoldása létezik, akkor a vektorok
  lineárisan függők.
</Definition>

<Definition title="Altér" id="definition.1.7" >
  Legyen $(V; +; \lambda)$ $\mathbb R$ feletti vektortér, valamint
  $\emptyset \neq L \subset V$. $L$-t altérnek nevezzük a $V$-ben, ha
  $(L; +; \lambda)$ ugyancsak vektortér.
</Definition>

<Example>
  A polinomok vektorterének alterte a legfeljebb $n$-edfokú polinomok
  vektortere.
</Example>

<Statement>
  Alterek metszete ugyancsak altér. Alterek uniója azonban általában nem altér.
</Statement>

<Definition title="Generátorrendszer" id="definition.1.8" >
  Legyen $V$ vektortér, valamint $\emptyset \neq G \subset V$. $G$ által
  generált altérnek nevezzük azt a legszűkebb alteret, amely tartalmazza $G$-t.
  Jele: $\mathcal L(G)$.

  $G$ generátorrendszere $V$-nek, ha $\mathcal L(G) = V$.
</Definition>

<Note>
  Ha $G$ véges generátorrendszere $V$-nek, akkor $G$-t végesen generált
  vektorrendszernek nevezzük.
</Note>

<Definition title="Bázis" id="definition.1.9" >
  A $V$ vektorrendszer egy lineárisan független generátorrendszerét a $V$
  bázisának nevezzük.
</Definition>

<Statement>
  Végesen generált vektortérben bármely két bázis azonos tagszámú.
</Statement>

<Definition title="Vektortér dimenziója" id="definition.1.10" >
  Végesen generált vektortér dimenzióján a bázisainak közös tagszámát értjük.
</Definition>

<Statement>
 Legyen $\{ \rvec b_1; \rvec b_2; \dots; \rvec b_n \}$ a $V$ vektortér egy
  bázisa. Ekkor tetszőleges $V$-beli vektor egyértelműen eéőállítható a
  bázisvektorok lineáris kombinációjaként.
  Azaz $\forall \rvec v \in V: \exists! (\lambda_1; \lambda_2; \dots; \lambda_n)$,
  hogy
  $$
    \rvec v
    = \lambda_1 \rvec b_1
    + \lambda_2 \rvec b_2
    + \ldots
    + \lambda_n \rvec b_n
    \text.
  $$
  A ($\lambda_1; \lambda_2; \dots; \lambda_n$) szám $n$-est az $\rvec v$ vektor
  $\{ \rvec b_1; \rvec b_2; \dots; \rvec b_n \}$ bázisaira vonatkozó
  koordinátáinak nevezzük.

  <Proof title="Egzisztencia">
    $\{ \rvec b_1; \rvec b_2; \dots; \rvec b_n \}$ lineárisan
    függetlenek, mert bázis. Ezért $\{ \rvec v, \rvec b_1; \rvec b_2;
      \ldots; \rvec b_n \}$ már lineárisan függő, így a
    $\mu \rvec v + \xi_1 \rvec b_1 + \xi_2 \rvec b_2 + \ldots \xi_n \rvec b_n
     = \nvec$ vektoregyenletnek létezik triviálistól különböző megoldása, azaz
      nem lehet $(\mu; \xi_1; \xi_2; \ldots; \xi_n)$ minden eleme egyszerre 0.

    Tehát $\mu \neq 0$, mert ellenkező esetben $\xi_1 = \xi_2
      = \ldots = \xi_n = 0$ állna fent, így oszthatjuk az egyenletet
    $\mu$-vel:
    $$
      \rvec v
      = \underbrace{\left(-\frac{\xi_1}{\lambda}\right)}_{:= \lambda_1} \rvec b_1
      + \underbrace{\left(-\frac{\xi_2}{\lambda}\right)}_{:= \lambda_2} \rvec b_2
      + \dots
      + \underbrace{\left(-\frac{\xi_n}{\lambda}\right)}_{:= \lambda_n} \rvec b_n
      \text.
    $$
  </Proof>

  <Proof title="Unicitás">
    Tegyük fel, hogy a $(\lambda_1; \lambda_2; \ldots; \lambda_n)$ és a
    $(\mu_1; \mu_2; \ldots; \mu_n)$ is a $\rvec v$
    koordinátái a $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$
    bázisban, azaz
    $$
      \rvec v = \sum_{i=1}^n \lambda_i \rvec b_i
      \text{ és }
      \rvec v = \sum_{i=1}^n \mu_i \rvec b_i
      \text.
    $$
    Vonjuk ki egymásból a két egyenletet:
    $$
      \nvec
      = \underbrace{(\lambda_1 - \mu_1)}_{0} \rvec b_1
      + \underbrace{(\lambda_2 - \mu_2)}_{0} \rvec b_2
      + \ldots
      + \underbrace{(\lambda_n - \mu_n)}_{0} \rvec b_n
      \text.
    $$
    Ezzel ellentmondásra jutunk, mivel $\{ \rvec b_1; \rvec b_2;
      \ldots; \rvec b_n \}$ bázis, ezért a nullvektornak csak triviális
    előállítása létezik, ami az együtthatók 0 voltát vonná maga után,
    az pedig a megfelelő koordináták egyenlőségével ekvivalens. A
    feltevés tehát hamis.
  </Proof>
</Statement>