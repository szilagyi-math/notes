---
title: Mátrixok
description: Mátrixok
---

<Definition title="Mátrix" id="definition.1.11" >
  Egy mátrix vízszintes vonalban elhelyezkedő elemei **sorok**at,
  míg függőlegesen elhelyezkedő elemei **oszlop**okat alkotnak.

  Egy $m$ sorból és $n$ oszlopból álló mátrix jelölése:
  $$
    \rmat A = \begin{bmatrix}
      a_{11} & a_{12} & \ldots & a_{1n} \\
      a_{21} & a_{22} & \ldots & a_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{m1} & a_{m2} & \ldots & a_{mn}
    \end{bmatrix}
    \text.
  $$

  Mátrixok jelölése nyomtatott szövegben: $\rmat A$.

  Mátrixok jelölése írásban: $\underline{\underline A}$.

  Az $m \times n$-es mátrixok halmazának jelölései: $\mathcal M_{m \times n}
    = \mathbb R^m \times \mathbb R^n = \mathbb R^{m \times n}$.

  A mátrix $i$-edik sorában és $j$-edik oszlopában található elemet
  $a_{ij}$-vel jelöljük.
</Definition>

<Note>
  A mátrix dimenzióit mindig először a sorok számával, majd azt követően az
  oszlopok számával adják meg.
</Note>

**Speciális mátrixstruktúrák:**

$$
  \begin{array}{rccl}
     & \begin{bmatrix}
         a_{11} \\ a_{21} \\ \vdots \\ a_{n1}
       \end{bmatrix}
     & \in \; \mathcal M_{n \times 1}
     & \sim\;\;\text{oszlopvektor / oszlopmátrix}
    \\[12mm]
     & \begin{bmatrix}
         \;a_{11} & a_{12} & \ldots & a_{1n}\;
       \end{bmatrix}
     & \in \; \mathcal M_{1 \times n}
     & \sim\;\;\text{sorvektor / sormátrix}
    \\[4mm]
     & \begin{bmatrix}
         a_{11} & a_{12} & \ldots & a_{1n} \\
         a_{21} & a_{22} & \ldots & a_{2n} \\
         \vdots & \vdots & \ddots & \vdots \\
         a_{n1} & a_{n2} & \ldots & a_{nn}
       \end{bmatrix}
     & \in \; \mathcal M_{n \times n}
     & \sim\;\;\text{kvadratikus / négyzetes mátrix}
    \\[12mm]
        \imat =
     & \begin{bmatrix}
         \hphantom{a_{n1}} & \hphantom{a_{n2}} & \hphantom{\ldots} & \hphantom{a_{nn}} \\[-14pt]
         1      & 0      & \ldots & 0      \\
         0      & 1      & \ldots & 0      \\
         \vdots & \vdots & \ddots & \vdots \\
         0      & 0      & \ldots & 1
       \end{bmatrix}
     & \in \; \mathcal M_{n \times n}
     & \sim\;\;\text{egységmátrix}
    \\[12mm]
    \nmat =
     & \begin{bmatrix}
         \hphantom{a_{n1}} & \hphantom{a_{n2}} & \hphantom{\ldots} & \hphantom{a_{nn}} \\[-14pt]
         0      & 0      & \ldots & 0      \\
         0      & 0      & \ldots & 0      \\
         \vdots & \vdots & \ddots & \vdots \\
         0      & 0      & \ldots & 0
       \end{bmatrix}
     & \in \; \mathcal M_{m \times n}
     & \sim\;\;\text{nullmátrix}
  \end{array}
$$

<Definition title="Mátrixok transzponáltja" id="definition.1.12" >
  Egy $\rmat A \in \mathcal M_{m \times n}$ mátrix transzponáltja a főátlójára
  vett tükörképe. Jele: $\rmat A^\T \in \mathcal M_{n \times m}$.
</Definition>

<Example>
  Határozzuk meg az $\rmat A = \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix}$ mátrix transzponáltját!

  $$
    \rmat A = \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix} \in \mathcal M_{2 \times 3}
    \quad \Rightarrow \quad
    \rmat A^\T = \begin{bmatrix}
      1 & 4 \\
      2 & 5 \\
      3 & 6
    \end{bmatrix} \in \mathcal M_{3 \times 2}
  $$
</Example>

<Definition title="Szimmertikus mátrix" id="definition.1.13" >
  Egy $\rmat A \in \mathcal M_{n \times n}$ mátrix szimmetrikus, ha
  $\rmat A = \rmat A^\T$.
</Definition>

<Definition title="Antiszimmertikus mátrix" id="definition.1.14" >
  Egy $\rmat A \in \mathcal M_{n \times n}$ mátrix antiszimmertikus, ha
  $\rmat A = -\rmat A^\T$.
</Definition>

<Note>
  Antiszimmertikus mátrixok főátlójában csak nullák szerepelnek.
</Note>

<Definition title="Mátrixok egyenlősége" id="definition.1.15" >
  Két mátrix akkor és csak akkor egyenlő, ha a megfelelő helyeken álló elemei
  egyenlőek.
  $$
    !A, B \in \mathcal M_{m \times n}: A = B
    \quad \Longleftrightarrow \quad
    \forall i \in \{1, 2, \ldots, m\}
    \; \land \;
    \forall j \in \{1, 2, \ldots, n\}:
    a_{ij} = b_{ij}
  $$
</Definition>

<Definition title="Mátrixok összege" id="definition.1.16" >
  Két mátrix összegén azt a mátrixot értjük, melyet a két mátrix elemenkénti
  összeadásával kapunk, azaz, ha $\rmat A, \rmat B \in \mathcal M_{m \times n}$,
  akkor $\rmat C := \rmat A + \rmat B \in \mathcal M_{m \times n}$, ahol
  $c_{ij} := a_{ij} + b_{ij}$.
</Definition>

<Example>
  Határozzuk meg az $\rmat A = \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix}$ és a $\rmat B = \begin{bmatrix}
      6 & 5 & 4 \\
      3 & 2 & 1
    \end{bmatrix}$ mátrixok összegét!

  $$
    \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix}
    +
    \begin{bmatrix}
      6 & 5 & 4 \\
      3 & 2 & 1
    \end{bmatrix}
    =
    \begin{bmatrix}
      1 + 6 & 2 + 5 & 3 + 4 \\
      4 + 3 & 5 + 2 & 6 + 1
    \end{bmatrix}
    =
    \begin{bmatrix}
      7 & 7 & 7 \\
      7 & 7 & 7
    \end{bmatrix}
  $$
</Example>

<Definition title="Mátrix és skalár szorzata" id="definition.1.17" >
  Egy mátrix és egy skalár szorzata olyan mátrix, melynek minden eleme
  skalárszorosa az eredeti mátrix elemeinek, azaz ha
  $\rmat A \in \mathcal M_{m \times n}$ és $\lambda \in \mathbb R$, akkor
  $C := \lambda \rmat A$, ahol $c_{ij} := \lambda a_{ij}$.
</Definition>

<Example>
  Határozzuk meg a $\lambda = 2$ skalár és az $\rmat A = \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix}$ mátrix szorzatát!

  $$
    \lambda \cdot \rmat A
    = 2 \cdot
    \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{bmatrix}
    =
    \begin{bmatrix}
      2 \cdot 1 & 2 \cdot 2 & 2 \cdot 3 \\
      2 \cdot 4 & 2 \cdot 5 & 2 \cdot 6
    \end{bmatrix}
    =
    \begin{bmatrix}
      2 & 4  & 6  \\
      8 & 10 & 12
    \end{bmatrix}
  $$
</Example>

<Definition title="Mátrixok szorzata" id="definition.1.18" >
  Legyen $\rmat A \in \mathcal M_{m \times n}$ és
  $\rmat B \in \mathcal M_{n \times p}$. Ekkor a két mátrix szorzata
  $$
    \rmat C := \rmat A \cdot \rmat B
    \text{, ahol }
    c_{ij}
    = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}
    = a_{i1} \cdot b_{1j} + a_{i2} \cdot b_{2j} + \ldots + a_{in} \cdot b_{nj}
    \text.
  $$
</Definition>

**A mátrixszorzás vizualizálása:**

$$
  \begin{align*}
     & \left[\begin{array}{ccc}
                 \phantom{\sum a_{mi} b_{i1}} & \phantom{\dots} & \phantom{\sum a_{mi} b_{ip}} \\[-14pt]
                 b_{11} & \dots  & b_{1p} \\
                 b_{21} & \dots  & b_{2p} \\
                 \vdots & \ddots & \vdots \\
                 b_{n1} & \dots  & b_{np}
               \end{array}\right]
    \\
    \left[\begin{array}{cccc}
              a_{11} & a_{12} & \dots  & a_{1n} \\
              a_{21} & a_{22} & \dots  & a_{2n} \\
              \vdots & \vdots & \ddots & \vdots \\
              a_{m1} & a_{m2} & \dots  & a_{mn}
            \end{array}\right]
     & \left[\begin{array}{ccc}
                 \sum a_{1i} b_{i1} & \dots  & \sum a_{1i} b_{ip} \\
                 \sum a_{2i} b_{i1} & \dots  & \sum a_{2i} b_{ip} \\
                 \vdots             & \ddots & \vdots             \\
                 \sum a_{mi} b_{i1} & \dots  & \sum a_{mi} b_{ip}
               \end{array}\right]
  \end{align*}
$$

<Example>
  Határozzuk meg az $\rmat A = \begin{bmatrix}
      1  & 0  \\
      -2 & -1 \\
      3  & 4
    \end{bmatrix}$ és a $\rmat B = \begin{bmatrix}
      1  & 0 & 2 \\
      -1 & 2 & 0
    \end{bmatrix}$ mátrixok szorzatát!
  $$
    \begin{align*}
       & \left[\begin{array}{cc}
                   \phantom{-1 \cdot 1 + 2 \cdot (-2) + 0 \cdot 3} & \phantom{-1 \cdot 0 + 2 \cdot (-1) + 0 \cdot 4} \\[-14pt]
                   1  & 0  \\
                   -2 & -1 \\
                   3  & 4
                 \end{array}\right]
      \\
      \left[\begin{array}{ccc}
                1  & 0 & 2 \\
                -1 & 2 & 0
              \end{array}\right]
       & \left[\begin{array}{cc}
                   1 \cdot 1 + 0 \cdot (-2) + 2 \cdot 3  & 1 \cdot 0 + 0 \cdot 2 + 2 \cdot 4     \\
                   -1 \cdot 1 + 2 \cdot (-2) + 0 \cdot 3 & -1 \cdot 0 + 2 \cdot (-1) + 0 \cdot 4
                 \end{array}\right] = \begin{bmatrix}
                                      7  & 8  \\
                                      -5 & -2
                                    \end{bmatrix}
    \end{align*}
  $$
</Example>

<Statement>
  Ha $\rmat A$, $\rmat B$ és $\rmat C$ olyan mátrixok, hogy létezik az
  $(\rmat A \cdot \rmat B) \cdot \rmat C$ mátrixszorzat, akkor az
  $\rmat A \cdot (\rmat B \cdot \rmat C)$ mátrixszorzat is létezik, és
  ezek egyenlőek.

  A mátrixszorzás tehát **asszociativív**.
</Statement>

<Definition title="Determináns" id="definition.1.19" >
  Legyen $\rmat A \in \mathcal M_{n \times n}$ kvadratikus mátrix, és
  $\det: \mathcal M_{n \times n} \rightarrow \mathbb R$ függvény. A mátrix
  $i$-edik oszlopának elemeit tartalmazó oszlopvektorokat $\rvec a_i$-vel
  jelöljük. Az $\rmat A$ determinánsának nevezzük $\det \rmat A$-t, a
  hozzárendelést pedig az alábbi négy axióma írja le:

  - homogén:
    $$
      \edet{\lambda \rvec a_i} = \lambda \edet{\rvec a_i}
      \text,
    $$
  - additív:
    $$
      \edet{\rvec a_i + \rvec b_i} =
      \edet{\rvec a_i} + \edet{\rvec b_i}
      \text,
    $$
  - alternáló:
    $$
      \edet{\rvec a_i & \dots & \rvec a_j} =
      - \edet{\rvec a_j & \dots & \rvec a_i}
      \text,
    $$
  - $\imat$ determinánsa
    $$
      \det \imat =\det \begin{pmatrix}
        \uvec e_1 & \uvec e_2 & \cdots & \uvec e_n
      \end{pmatrix} = 1
      \text,
    $$
</Definition>

<Statement>
  Ha egy mátrixban van két azonos oszlop, akkor a determinánsa nulla.
</Statement>

<Statement>
  Egy mátrix determinánsa nem változik, ha az egyik oszlopához hozzáadjuk egy
  másik oszlopának skalárszorosát.
</Statement>

<Theorem title="Kifejtési tétel" id="theorem.1.1" >
  $$
  \begin{align*}
    \det & \rmat A
     = \det \left( \rvec a_1; \rvec a_2; \dots; \rvec a_n \right)
    = \begin{vmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        a_{21} & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
      \end{vmatrix}
    = \det \left(
    \sum_{j = 1}^{n} a_{j1} \uvec e_j; \rvec a_2; \dots; \rvec a_n
    \right)
    \\[2mm]
     & = a_{11} \det \left( \uvec e_1; \rvec a_2; \dots; \rvec a_n \right)
    + a_{21} \det \left( \uvec e_2; \rvec a_2; \dots; \rvec a_n \right)
    + \ldots
    + a_{n1} \det \left( \uvec e_n; \rvec a_2; \dots; \rvec a_n \right)
    \\[2mm]
     & = a_{11}\; \begin{vmatrix}
                                         1      & 0      & \cdots & 0      \\
                                         0      & a_{22} & \cdots & a_{2n} \\
                                         \vdots & \vdots & \ddots & \vdots \\
                                         0      & a_{n2} & \cdots & a_{nn}
                                       \end{vmatrix}
    + a_{21}\; \begin{vmatrix}
                                      0      & a_{12} & \cdots & a_{1n} \\
                                      1      & 0      & \cdots & 0      \\
                                      \vdots & \vdots & \ddots & \vdots \\
                                      0      & a_{n2} & \cdots & a_{nn}
                                    \end{vmatrix} +
    \\[2mm]
     & \phantom{= a_{11}\; \begin{vmatrix}
                                         1      & 0      & \cdots & 0      \\
                                         0      & a_{22} & \cdots & a_{2n} \\
                                         \vdots & \vdots & \ddots & \vdots \\
                                         0      & a_{n2} & \cdots & a_{nn}
                                       \end{vmatrix}} 
    + \dots
    + a_{n1}\; \begin{vmatrix}
                                      0      & a_{12} & \cdots & a_{1n} \\
                                      0      & a_{22} & \cdots & a_{2n} \\
                                      \vdots & \vdots & \ddots & \vdots \\
                                      1      & 0      & \cdots & 0
                                    \end{vmatrix}
    =
    \\[2mm]
     & = a_{11}\; \begin{vmatrix}
                                         1      & 0      & \cdots & 0      \\
                                         0      & a_{22} & \cdots & a_{2n} \\
                                         \vdots & \vdots & \ddots & \vdots \\
                                         0      & a_{n2} & \cdots & a_{nn}
                                       \end{vmatrix}
    - a_{21}\; \begin{vmatrix}
                                      a_{12} & 0      & \cdots & a_{1n} \\
                                      0      & 1      & \cdots & 0      \\
                                      \vdots & \vdots & \ddots & \vdots \\
                                      a_{n2} & 0      & \cdots & a_{nn}
                                    \end{vmatrix}
    + \\[2mm]
    & \phantom{= a_{11}\; \begin{vmatrix}
                                         1      & 0      & \cdots & 0      \\
                                         0      & a_{22} & \cdots & a_{2n} \\
                                         \vdots & \vdots & \ddots & \vdots \\
                                         0      & a_{n2} & \cdots & a_{nn}
                                       \end{vmatrix}}
    + \dots
    + (-1)^{n-1} a_{n1}\; \begin{vmatrix}
                                                 a_{12} & \cdots & a_{1n} & 0      \\
                                                 a_{22} & \cdots & a_{2n} & 0      \\
                                                 \vdots & \ddots & \vdots & \vdots \\
                                                 a_{n2} & \cdots & a_{nn} & 1
                                               \end{vmatrix}
  \end{align*}
  $$

  Jelölje a $k$. sor és $j$. oszlop kitakarásával kapott aldeterminánst
  $\rmat A_{kj}$, ekkor az egyenlőség a következőképpen írható át:
  $$
    a_{11} \rmat A_{11}
    - a_{21} \rmat A_{21}
    + \ldots
    + (-1)^{n-1} a_{n1} \rmat A_{n1}
    \text.
  $$

  Vezessük be a következő jelölést:
  $\rmat{\overline A}_{kj} = (-1)^{k-1} \rmat A_{kj}$. Így:
  $$
    a_{11} \rmat{\overline A}_{11}
    + a_{21} \rmat{\overline A}_{21}
    + \ldots
    + a_{n1} \rmat{\overline A}_{n1}
    =
    \sum_{j=1}^{n} a_{j1} \rmat A_{j1}
    =
    \cdots
    =
    \sum_{k = 1}^{n} (-1)^{\varepsilon} a_{k1} a_{k2} \ldots a_{kn} \det \imat
    \text,
  $$
  ahol $\varepsilon$ az inverziók száma és $\imat$ az egységmátrix.
</Theorem>

<Note>
  A kifejtési tételből következményei:

  - Nem lényeges, hogy sorról vagy oszlopról beszélünk a determinánssal
    kapcsolatban:
    $$
      \det \rmat A = \det \rmat A^\T
      \text.
    $$
  - A determináns bármely sora vagy oszlopa alapján kifejthető:
    $$
      \det \rmat A
      = \underbrace{
        \sum_{k = 1}^n a_{kj} \rmat{\overline A}_{kj}
      }_{\text{$j$-edik oszlop szerint}}
      = \underbrace{
        \sum_{k = 1}^n a_{ik} \rmat{\overline A}_{ik}
      }_{\text{$i$-edik sor szerint}}
    $$
</Note>


<Example>
  Adjuk meg az $\rmat A = \begin{bmatrix}
      1 & 2 \\ 6 & 7
    \end{bmatrix}$ mátrix determinánsát!

  $$
    \det A = \begin{vmatrix}
      1 & 2 \\ 6 & 7
    \end{vmatrix} = 1 \cdot 7 - 2 \cdot 6 = 7 - 12 = -5
  $$
</Example>

<Theorem title="Lineárisan független vektorok" id="theorem.1.2" >
  Az $\{\rvec a_1; \rvec a_2; \ldots; \rvec a_n\}$ vektorok lineárisan
  függetlenek, ha $\det(\rvec a_1; \rvec a_2; \ldots; \rvec a_n) \neq 0$.
</Theorem>

<Definition title="Mátrix rangja" id="definition.1.20" >
  A mátrix rangjának nevezzük az oszlopvektorai közül a lineárisan függetlenek
  maximális számát.
</Definition>

<Example>
  Határozzuk meg az $\rmat A = \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      7 & 8 & 9
    \end{bmatrix}$ mátrix rangját!

  Az $\rmat A$ mátrix rangja 2, mivel a harmadik oszlop a második oszlop
  skalárszorosaként áll elő.
</Example>

<Theorem title="Mátrixok rangszámának tétele" id="theorem.1.3" >
  Egy mátrix rangja megegyezik maximális el nem tűnő aldeterminánsának
  rendjével.
</Theorem>

<Definition title="Mátrix elemi átalakításai" id="definition.1.21" >
  Egy mátrix elemi átalakításainak nevezzük a következőket:

  - A mátrix egy tetszőleges sorát vagy oszlopát egy 0-tól különböző
    számmal megszorozzuk.
  - A mátrix egy tetszőleges sorát vagy oszlopát felcseréljük.
  - A mátrix egy tetszőleges sorához vagy oszlopához egy másik tetszőleges
    sorát vagy oszlopát adjuk.
</Definition>

<Statement>
  Egy mátrix rangja elemi átalakítások során nem változik.

  <Proof>
    A determináns axiómáit figyelembe véve látható, hogy az elemi
    átalakítások nem változtatják meg a determináns 0 voltát.
  </Proof>
</Statement>

<Definition title="Kvadratikus és szinguláris mátrix" id="definition.22" >
  Egy kvadratikus (négyzetes) mátrixot **regulárisnak** mondunk, ha
  determinánsa nem zérus.

  Ha a kvadratikus mátrix determinánsa 0, **szinguláris** mátrixról
  beszélünk.
</Definition>

<Theorem title="A determinánsok szorzástétele" id="theorem.1.4" >
  Legyen $\rmat A; \rmat B \in \mathcal M_{n \times n}$ mátrix, ekkor
  $\det(\rmat A \cdot \rmat B) = \det \rmat A \cdot \det \rmat B$.
</Theorem>

<Statement>
  $(\mathcal M_{n \times n}; +; \cdot)$ egységelemes gyűrű, mert\dots
  -  $(\mathcal M_{n \times n}; +)$ Abel-csoport,
  - $(\mathcal M_{n \times n}; \cdot)$ asszociatív,
  - teljesül a disztributivitás,
  - létezik a szorzás egységeleme, amely maga az egységmátrix.
</Statement>

<Definition title="Inverz mátrix" id="definition.1.23" >
  Az $\rmat A \in \mathcal M_{n \times n}$ mátrix inverzét az $\rmat A^{-1}$
  jelöli, és az a mátrix, melyre $\rmat A \cdot \rmat A^{-1} = \imat$
  teljesül.
</Definition>

<Theorem title="Ferde kifejtési tétel" id="theorem.1.5" >
  Legyen $\rmat A \in \mathcal M_{n \times n}$, ekkor
  $$
    \sum_{i=1}^{n} a_{ji} \rmat A_{ki} = 0
    \text{, ha}
    j \neq k
    \text.
  $$
</Theorem>

<Statement>
  Egy szinguláris mátrixnak nem létezik inverze.

  <Proof title="Indirekt módon" >
    Legyen $\rmat A \in \mathcal M_{n \times n}$ szinguláris mátrix. Tegyük fel,
    hogy létezik az inverze. Ekkor igaz, hogy
    $\rmat A \cdot \rmat A^{-1} = \imat$.
    Vigzgáljuk meg a következő egyenlőséget:
    $$
      \underbrace{\det \rmat A}_{=0} \cdot \det \rmat A^{-1}
      = \det \left( \rmat A \cdot \rmat A^{-1} \right)
      = \underbrace{\det \imat}_{=1}
      \text.
    $$
    Látjuk, hogy ezzel ellenmondásra jutunk.
  </Proof>
</Statement>

<Statement>
  Reguláris mátrix inverze egyértelmű. Ha $\rmat A \in \mathcal M_{n \times n}$,
  akkor
  $$
    \rmat A^{-1} := \frac{\adj \rmat A}{\det \rmat A}
    \text.
  $$
</Statement>

Egy $3 \times 3$-as mátrix adjugáltja:

$$
  \rmat A = \begin{bmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
  \end{bmatrix}
  \quad
  \Rightarrow
  \quad
  \adj \rmat A = \begin{bmatrix}
    + \begin{vmatrix}
        a_{22} & a_{23} \\
        a_{32} & a_{33}
      \end{vmatrix}
     &
    - \begin{vmatrix}
        a_{12} & a_{13} \\
        a_{32} & a_{33}
      \end{vmatrix}
     &
    +\begin{vmatrix}
       a_{12} & a_{13} \\
       a_{22} & a_{23}
     \end{vmatrix}
    \\[10pt]
    - \begin{vmatrix}
        a_{21} & a_{23} \\
        a_{31} & a_{33}
      \end{vmatrix}
     &
    + \begin{vmatrix}
        a_{11} & a_{13} \\
        a_{31} & a_{33}
      \end{vmatrix}
     &
    - \begin{vmatrix}
        a_{11} & a_{13} \\
        a_{21} & a_{23}
      \end{vmatrix}
    \\[10pt]
    + \begin{vmatrix}
        a_{21} & a_{22} \\
        a_{31} & a_{32}
      \end{vmatrix}
     &
    - \begin{vmatrix}
        a_{11} & a_{12} \\
        a_{31} & a_{32}
      \end{vmatrix}
     &
    +\begin{vmatrix}
       a_{11} & a_{12} \\
       a_{21} & a_{22}
     \end{vmatrix}
  \end{bmatrix}
$$