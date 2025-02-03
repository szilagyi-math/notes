---
title: Lineáris leképezések
description: Lineáris leképezések
---

<Definition title="Lineáris leképezés" id="definition.1.27" >
  Legyenek $V_1$ és $V_2$ ugyanazon $T$ test feletti vektorterek. Legyen
  $\varphi: V_1 \rightarrow V_2$ leképezés, melyet lineáris leképezésnek
  nevezünk, ha tetszőleges két $V_1$-beli vektor $(\forall \rvec a; \rvec b \in
    V_1)$ és $T$-beli skalár $(\lambda \in T)$ esetén teljesülnek az alábbiak:

  - $\varphi(\rvec a + \rvec b) = \varphi(\rvec a) + \varphi(\rvec b)$
    <span style={{float: "right"}}>(**additív**)</span>
  - $\varphi(\lambda \rvec a) = \lambda \varphi(\rvec a)$
    <span style={{float: "right"}}>(**homogén**)</span>
</Definition>

<Note>
  $\varphi(\nvec) = \nvec$ minden lineáris leképezés esetén.
</Note>

<Note>
  A linearitás miatt $\varphi(-\rvec a) = - \varphi(\rvec a)$.
</Note>

<Definition title="Homomorfizmus" id="definition.1.28" >
  $$
    \operatorname{Hom} (V_1; V_2) := \big\{\;
    \varphi: V_1 \to V_2 \; \big| \; \varphi \text{ lineáris}
    \;\big\}
  $$
</Definition>

<Definition title="Endomorfizmus" id="definition.1.29" >
  $$
    \operatorname{End} (V) := \operatorname{Hom} (V; V)
  $$
</Definition>

<Statement>
  $(\operatorname{Hom} (V_1; V_2), +, \lambda)$  vektortér $\Reals$ vagy
  $\mathbb C$ felett.
</Statement>

<Definition title="Izomorfizmus" id="definition.1.30" >
  A $\varphi: V_1 \to V_2$ leképezés izomorfizmus, ha lineáris és bijektív.
</Definition>

<Statement>
  Véges dimenziójú vektorterek esetén az egymással izomorf vektorterek dimenziója
  azonos.
</Statement>

<Statement>
  Legyenek $V_1$ és $V_2$ ugyanazon test feletti vektorterek, és
  $\dim V_1 = \dim V_2$. Ekkor $V_1 \simeq V_2$
</Statement>

<Theorem title="Lineáris leképezések alaptétele" id="theorem.1.7" >
  Legyenek $V_1$ és $V_2$ ugyanazon test feletti vektorterek, és legyen
  $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$ bázis $V_1$-ben, és
  $\{ \rvec a_1; \rvec a_2; \ldots; \rvec a_n \}$ tetszőleges vektorrendszer
  $V_2$-ben. Ekkor egyetlen lineáris leképezés létezik, melyre
  $\varphi(\rvec b_i) = \rvec a_i$, ahol $i \in \{1, 2, \ldots, n\}$.

  <Proof title="Unicitás, indirekt módon" >
    Legyenek $\varphi \neq \psi$ lineáris leképezések, melyekre
    $\varphi(\rvec b_i) = \rvec a_i$ és $\psi(\rvec b_i) = \rvec a_i$,
    $i \in \{1, 2, \ldots, n\}$. Legyen $\rvec x \in V_1$ tetszőleges,
    $\rvec x = \sum_{i=1}^{n} \xi_i \rvec b_i$. Hattassuk $\varphi$-t
    $\rvec x$-re:
    $$
    \begin{align*}
      \varphi(\rvec x)
       & = \varphi\left(
      \sum_{i = 1}^{n} \xi_i \rvec b_i
      \right)
      = \sum_{i = 1}^{n} \xi_i \varphi(\rvec b_i)
      = \xi_1 \varphi(\rvec b_1) + \ldots + \xi_n \varphi(\rvec b_n) \\
      =
      \\
       & = \xi_1 \rvec a_1 + \ldots + \xi_n \rvec a_n
      = \xi_1 \psi(\rvec b_1) + \ldots + \xi_n \psi(\rvec b_n)
      = \psi\left(
      \sum_{i = 1}^{n} \xi_i \rvec b_i
      \right)
      = \psi(\rvec x)
    \end{align*}
    $$
    Ezzel $\varphi = \psi$, ami ellentmond a feltételnek, tehát a feltevés nem
    igaz.
  </Proof>

  <Proof title="Egzisztencia, konstruktív bizonyítás" >
    Legyen $\varphi: V_1 \rightarrow V_2$ leképezés, és
    $\rvec x \mapsto \varphi(\rvec x)$. Ha $(\xi_1; \xi_2; \ldots; \xi_n)$
    az $\rvec x$ koordinátái, akkor $\varphi(\rvec x) = \xi_1 \rvec a_1 +
      \ldots + \xi_n \rvec a_n$. Hasonló módon legyen $(\eta_1; \eta_2; \ldots;
      \eta_n)$ az $\rvec y$ koordinátái. Ekkor:
    $$
    \begin{align*}
      \varphi(\rvec x + \rvec y)
       & = (\xi_1 + \eta_1) \rvec a_1 + \ldots + (\xi_n + \eta_n) \rvec a_n
      \\
       & = \xi_1 \rvec a_1 + \ldots + \xi_n \rvec a_n
      + \eta_1 \rvec a_1 + \ldots + \eta_n \rvec a_n
      = \varphi(\rvec x) + \varphi(\rvec y)
      \text,
      \\[3mm]
      \varphi(\lambda \rvec x)
       & = \lambda \xi_1 \rvec a_1 + \ldots + \lambda \xi_n \rvec a_n
      = \lambda (\xi_1 \rvec a_1 + \ldots + \xi_n \rvec a_n)
      = \lambda \varphi(\rvec x)
      \text.
    \end{align*}
    $$
  </Proof>
</Theorem>

<BlueBox>
  **Lineáris leképezések mátrixreprezentációja:**

  Legyenek $V_1$ és $V_2$ ugyanazon test feletti vektorterek, és $\dim V_1 = n$,
  valamint $\dim V_2 = k$. Legyen $\{ \rvec a_1; \rvec a_2; \ldots; \rvec a_n \}$
  bázis $V_1$-ben, és $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$ bázis
  $V_2$-ben. Legyen $\varphi: V_1 \rightarrow V_2$ lineáris leképezés, ekkor
  $$
    \varphi(\rvec a_i)
    = \alpha_{1i} \rvec b_1
    + \alpha_{2i} \rvec b_2
    + \ldots
    + \alpha_{ki} \rvec b_k
    = \sum_{j=1}^{k} \alpha_{ji} \rvec b_j
    \quad\Rightarrow\quad
    \rmat A := \begin{bmatrix}
      \alpha_{11} & \alpha_{2i} & \cdots & \alpha_{1n} \\
      \alpha_{21} & \alpha_{2i} & \cdots & \alpha_{2n} \\
      \vdots      & \vdots      & \ddots & \vdots      \\
      \alpha_{k1} & \alpha_{ki} & \cdots & \alpha_{kn}
    \end{bmatrix}
    \text.
  $$
  Az $\rmat A$ mátrixot $\varphi$ leképezést reprezentáló mátrixnak hívjuk,
  segítségével tetszőleges $\rvec x \in V_1$ képét meghatározhatjuk. Legyenek
  $(\xi_1, \xi_2, \ldots, \xi_n)$ az $\rvec x$ koordinátái, ekkor a képét az
  alábbi módon számíthatjuk:
  $$
    \varphi(\rvec x)
    = \varphi\left( \sum_{i=1}^{n} \xi_i \rvec a_i \right)
    = \sum_{i=1}^{n} \xi_i \varphi(\rvec a_i)
    = \begin{bmatrix}
      \alpha_{11} & \alpha_{2i} & \cdots & \alpha_{1n} \\
      \alpha_{21} & \alpha_{2i} & \cdots & \alpha_{2n} \\
      \vdots      & \vdots      & \ddots & \vdots      \\
      \alpha_{k1} & \alpha_{ki} & \cdots & \alpha_{kn}
    \end{bmatrix} \begin{bmatrix}
      \xi_1  \\
      \xi_2  \\
      \vdots \\
      \xi_n
    \end{bmatrix}
    \text.
  $$
</BlueBox>

<Statement>
  $\varphi: \operatorname{Hom} (V_1; V_2) \rightarrow \mathcal M_{k \times n}$
  izomorfizmus, ahol $\dim V_1 = k$ és $\dim V_2 = n$.

  **Következény:**
  $\dim(\operatorname{Hom} (V_1; V_2)) = n \cdot k = \dim V_1 \cdot \dim V_2$.
</Statement>

<Statement>
  Legyenek $V_1$, $V_2$ és $V_3$ vektorterek, $\dim V_1 = k$, $\dim V_2 = m$ és
  $\dim V_3 = n$. Legyenek $\varphi: V_1 \rightarrow V_2$ és $\psi: V_2
    \rightarrow V_3$ lineáris leképezések, ekkor a $V_1$-ből $V_3$-ra való
  leképezés $(\psi \circ \varphi: V_1 \rightarrow V_3)$ olyan, hogy ha
  $\varphi \leftrightarrow \rmat A \in \mathcal M_{m \times k}$ és
  $\psi \leftrightarrow \rmat B \in \mathcal M_{n \times m}$, akkor
  $\psi \circ \varphi \leftrightarrow \rmat C \in \mathcal M_{n \times k}$, ahol
  $\rmat C = \rmat B \cdot \rmat A$.

  Speciálisan, ha $V_1 = V_2 = V_3 = V$, $\dim V = n$, akkor
  $\rmat A; \rmat B; \rmat C \in \mathcal M_{n \times n}$.

  **Következény:**
  Invertálható lineáris leképezés mátrixa invertálható.
</Statement>

<Definition title="Leképezés magtere" id="definition.1.31" >
  Legyen $\varphi: V_1 \rightarrow V_2$ lineáris leképezés, ekkor a
  $$
    \ker \varphi := \{
    \rvec v \; | \; \rvec v \in V_1 \land \varphi(\rvec v) = \nvec
    \}
  $$
  halmazt a leképezés magterének nevezzük.
</Definition>

<Statement>
  $\ker \varphi$ altér $V_1$-ben.
</Statement>

<Definition title="Leképezés defektusa" id="definition.1.32" >
  A magtér dimenzióját defektusnak nevezzük, és $\operatorname{def} \varphi$-vel
  jelöljük.
</Definition>

<Note>
  Nem létezik olyan vektortér, melynek magtere az üreshalmaz (a nullvektor
  mindig benne van, mert a nullvektor képe mindig nullvektor).
</Note>

<Note>
  Invertálható lineáris leképezés magtere a nullvektor.
</Note>

<Statement>
  A $\varphi$ leképezés injektív, akkor és csak akkor, ha
  $\ker \varphi = \{ \nvec \} \Leftrightarrow \operatorname{def} \varphi = 0$.
</Statement>

<Definition title="Lineáris leképezés rangja" id="definition.1.33" >
  Egy lineáris leképezés rangjának nevezzük a képtér dimenzióját.
  $\rg \varphi = \dim \varphi(V_1)$.
</Definition>

<Theorem title="Rang-nullitás tétele" id="theorem.1.8" >
  Legyen $V_1$ véges dimenziós vektortér, $\varphi: V_1 \rightarrow V_2$
  lineáris leképezés, ekkor
  $$
    \rg \varphi + \operatorname{def} \varphi = \dim V_1
    \text.
  $$
</Theorem>

<Statement>
  Tetszőleges lineáris leképezés rangja megegyezik bármely bázisra vonatkozó
  mátrixreprezentációjának rangjával. $\varphi: V_1 \rightarrow V_2$, $\dim V_1
    = m$, $\dim V_2 = n \Rightarrow \varphi \leftrightarrow \rmat A$, $\rmat A
    \in \mathcal M_{n \times m}$, $\rg \varphi = \rg \rmat A$.
</Statement>

<Theorem title="" id="theorem.1.9" >
  Legyen $\varphi: V \rightarrow V$ lineáris leképezés,
  $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$ és $\{ \hat{\rvec b}_1;
    \hat{\rvec b}_2; \ldots; \hat{\rvec b}_n \}$ bázisok $V$-ben. A
  $\varphi \{ \rvec b_1; \rvec b_2; \ldots \rvec b_n \}$ bázisra vonatkozó
  mátrixa $\rmat A$, a $\varphi \{ \hat{\rvec b}_1; \hat{\rvec b}_2; \ldots;
    \hat{\rvec b}_n \}$ bázisra vonatkozó mátrixa $\hat{\rmat A}$. Jelölje
  $\rmat S$ a $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$ bázisról a
  $\{ \hat{\rvec b}_1; \hat{\rvec b}_2; \ldots; \hat{\rvec b}_n \}$ bázisra
  való áttérés mátrixát, ekkor
  $$
    \hat{\rmat A} = \rmat S^{-1} \rmat A \rmat S
    \text.
  $$
</Theorem>

<Note>
  A fenti tételben szereplő $\rmat A$ és $\hat{\rmat A}$ mátrixok hasonlóak.
</Note>

<Note>
  Hasonló mátrixok determinánsa megegyezik.
</Note>

<Note>
  Hasonló mátrixok rangja egyenlő.
</Note>

<Definition title="Sajátértékek és sajátvektorok" id="definition.1.34" >
  Legyen $V$ a $T$ test feletti vektortér, $\rvec v \in V$, $\rvec v \neq
    \nvec$. $\rvec v$-t a $\varphi: V \rightarrow V$ lineáris leképezés
  sajátvektorának mondjuk, ha önmaga skalárszorosába megy át a leképezés
  során, azaz $\varphi(\rvec v) = \lambda \rvec v,$ $\lambda \in T$.
  $\lambda$-t a $\rvec v$ sajátvektorhoz tartozó sajátértéknek mondjuk.
</Definition>

<Note>
  Ha a $\rvec v$ sajátvektora a $\varphi$-nek, akkor annak skalárszorosa is.
</Note>

<Theorem title="Sajátértékek számítása" id="theorem.1.10" >
  Az $\rmat A \in \mathcal M_{n \times n}$ mátrix sajátértékeit a
  $$
    \det(\rmat A - \lambda \imat) = 0
  $$
  karakterisztikus egyenlet gyökei.

  <Proof>
    Legyen $\rvec v$ az $\rmat A$ sajátvektora. Ekkor teljesül az
    $\rmat A \rvec v = \lambda \rvec v$ egyenlet. Ezt átalakítva:
    $$
      \rmat A \rvec v - \lambda \rvec v = \nvec
      \quad \Rightarrow \quad
      \rmat A \rvec v - \lambda \imat \rvec v = \nvec
      \quad \Rightarrow \quad
      (\rmat A - \lambda \imat) \rvec v = \nvec
      \text.
    $$
    Így egy olyan homogén lineáris egyenletrendszert kapunk, amelynek létezik
    a triviálistól eltérő $(\rvec v \neq \nvec)$ megoldása, tehát
    $\det(\rmat A - \lambda \imat) = 0$.
  </Proof>
</Theorem>

<Note>
  A $\det(\rmat A - \lambda \imat) = 0$ egyenletet 
  **karakterisztikus egyenlet**nek nevezzük.

  A $\det(\rmat A - \lambda \imat)$ polinomot
  **karakterisztikus polinom**nak nevezzük.
</Note>

<Statement>
  Különböző sajátértékekhez tartozó sajátvektorok lineárisan függetlenek.
</Statement>

<Statement>
  Szimmetrikus mátrix sajátértékei valósak.
</Statement>

<Statement>
  Az $n$-edrendű szimmetrikus mátrixnak van $n$ darab, páronként egymásra
  merőleges sajátvektora.
</Statement>

<Example>
  Határozzuk meg az $\rmat A$ mátrix sajátértékeit és sajátvektorait!

  $$
    \rmat A = \begin{bmatrix}
      2  & -1 \\
      -1 & 2
    \end{bmatrix}
    \qquad
    \rmat A - \lambda \imat = \begin{bmatrix}
      2  & -1 \\
      -1 & 2
    \end{bmatrix} - \lambda \begin{bmatrix}
      1 & 0 \\
      0 & 1
    \end{bmatrix} = \begin{bmatrix}
      2 - \lambda & -1          \\
      -1          & 2 - \lambda
    \end{bmatrix}
  $$

  A karakterisztikus egyenlet, és ennek alapján a sajátértékek:
  $$
    \det(\rmat A - \lambda \imat) = (2 - \lambda)^2 - 1 = 0
    \quad \Rightarrow \quad
    \lambda_1 = 1 \text, \quad \lambda_2 = 3 \text.
  $$

  A sajátvektorokat az $(\rmat A - \lambda_i \imat) \rvec v_i = 0$
  egyenlet segítségével számíthatjuk ki:

  - A $\lambda_1 = 1$ sajátértékhez tartozó sajátvektor:
    $$
      \begin{bmatrix}
        1  & -1 \\
        -1 & 1
      \end{bmatrix} \begin{bmatrix}
        x \\
        y
      \end{bmatrix} = \begin{bmatrix}
        0 \\
        0
      \end{bmatrix}
      \quad \Rightarrow \quad
      x = y
      \quad \Rightarrow \quad
      \rvec v_1 = t_1 \begin{bmatrix}
        1 \\
        1
      \end{bmatrix}
    $$

  - A $\lambda_2 = 3$ sajátértékhez tartozó sajátvektor:
    $$
      \begin{bmatrix}
        -1 & -1 \\
        -1 & -1
      \end{bmatrix} \begin{bmatrix}
        x \\
        y
      \end{bmatrix} = \begin{bmatrix}
        0 \\
        0
      \end{bmatrix}
      \quad \Rightarrow \quad
      x = -y
      \quad \Rightarrow \quad
      \rvec v_2 = t_2 \begin{bmatrix}
        1 \\
        -1
      \end{bmatrix}
    $$
</Example>

<Definition title="Skaláris szorzat" id="definition.1.35" >
  Legyen $V$ egy $\Reals$ feletti vektortér, és $\langle \phantom{x} \rangle: V
    \times V \rightarrow \Reals$ függvény, melyet skaláris szorzatnak nevezünk,
  ha teljesülnek az alábbiak:
  
  1. $\langle \rvec x; \rvec y \rangle = \langle \rvec y;
       \rvec x \rangle$ minden $\rvec x; \rvec y \in V$ esetén,
     <span style={{float: "right"}}>(**szimmetrikus**)</span>
      

  2. $\langle \lambda \rvec x; \rvec y \rangle = \lambda \langle \rvec x;
     \rvec y \rangle$ minden $\rvec x; \rvec y \in V$ és $\lambda \in
     \Reals$ esetén,
     <span style={{float: "right"}}>(**homogén**)</span>

  3. $\langle \rvec x_1 + \rvec x_2; \rvec y \rangle = \langle \rvec x_1;
       \rvec y \rangle + \langle \rvec x_2; \rvec y \rangle$ minden $\rvec
       x_1; \rvec x_2; \rvec y \in V$ esetén,
     <span style={{float: "right"}}>(**additív**)</span>

  4. $\langle \rvec x; \rvec x \rangle \geq 0$,
      egyenlőség akkor és csak akkor, ha $\rvec x = \nvec$.
     <span style={{float: "right"}}>(**nemnegatív**)</span>
</Definition>

<Definition title="Euklideszi tér" id="definition.1.36" >
  Legyen $\{ \rvec e_1; \rvec e_2; \ldots; \rvec e_n \}$ kanonikus bázis,
  melyben
  $$
    \rvec x = \begin{bmatrix}
      \xi_1  \\
      \xi_2  \\
      \vdots \\
      \xi_n
    \end{bmatrix}
    \quad\text{és}\quad
    \rvec y = \begin{bmatrix}
      \eta_1 \\
      \eta_2 \\
      \vdots \\
      \eta_n
    \end{bmatrix}
    \text,\quad\text{ekkor}\quad
    \langle \rvec x; \rvec y \rangle := \sum_{i=1}^{n} \xi_i \eta_i
    \text.
  $$
  Az így előállított $(V, \langle \phantom{x} \rangle)$ valós euklideszi tér.

  Jelölése: $\mathbb E^n$: $n$ dimenziós euklideszi tér.

  A valós euklideszi térben értelmezhetjük a vektorok hosszát:
  $\|\rvec x\| = \sqrt{\langle \rvec x; \rvec x \rangle}$.

  Valamint értelmezhetjük $\rvec x$ és $\rvec y$ vektorok szögét:
  $\displaystyle
    \cos \angle(\rvec x; \rvec y)
    = \frac{\langle \rvec x; \rvec y \rangle}{\|\rvec x\| \|\rvec y\|}
    \in [-1;1]
  $.
</Definition>

<Note>
  Valós euklideszi térekben érvényesek a
  Cauchy-Bunyakovszkij-Schwartz-egyenlőtlenség:
  $$
    \langle \rvec x; \rvec y \rangle^2
    \leq \|\rvec x\|^2 \cdot \|\rvec y\|^2
    = \langle \rvec x; \rvec x \rangle \cdot \langle \rvec y; \rvec y \rangle
    \text.
  $$

  Ebből következik, hogy a háromszög egyenlőtlenség is teljesül:
  $$
    \|\rvec x + \rvec y\| \leq \|\rvec x\| + \|\rvec y\|
    \text.
  $$
</Note>

<Definition title="Ortonormált bázis" id="definition.1.37" >
  A $(V, \langle \phantom{x} \rangle)$ $n$ dimenziós euklideszi tér
  $\{ \rvec e_1; \rvec e_2; \ldots; \rvec e_n \}$ bázisát
  ortonormáltnak mondjuk, ha $\langle \rvec e_i; \rvec e_j \rangle =
    \delta_{ij}$, ahol
  $$
    \delta_{ij} = \begin{cases}
      1, & \text{ha } i = j    \text, \\
      0, & \text{ha } i \neq j \text,
    \end{cases}
  $$
  az úgynevezett Kronecker-delta.
</Definition>


<Definition title="Ortogonális transzformáció" id="definition.1.38" >
  Az $n$ dimenziós  euklideszi tér $\mathcal A: V \rightarrow V$ lineáris
  transzformációját ortogonálisnak mondjuk, ha $\langle \mathcal A \rvec x;
    \mathcal A \rvec y \rangle = \langle \rvec x; \rvec y \rangle$, minden
  $\rvec x; \rvec y \in V$ esetén.
</Definition>

<Note>
  - Ortogonális transzformáció normatartó.

  - Ortogonális transzformáció szögtartó.

  - Ortogonális transzformáció ortonormált bázist ortonormált bázisba visz át.
</Note>

<Definition title="Bázistranszformáció" id="definition.1.39" >
  Legyenek $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \}$ és
  $\{ \hat{\rvec b}_1; \hat{\rvec b}_2; \ldots; \hat{\rvec b}_n \}$ bázisok
  $V$-ben. Ekkor a $\{ \rvec b_1; \rvec b_2; \ldots; \rvec b_n \} \rightarrow
    \{ \hat{\rvec b}_1; \hat{\rvec b}_2; \ldots; \hat{\rvec b}_n \}$
  bázistranszformáció $\rmat S$ mátrixa a következőképpen írható fel:
  $$
    \left.\begin{array}{rl}
      \hat{\rvec b}_1 & = s_{11} \rvec b_1 + s_{21} \rvec b_2 + \ldots + s_{n1} \rvec b_n \\
      \hat{\rvec b}_2 & = s_{12} \rvec b_1 + s_{22} \rvec b_2 + \ldots + s_{n2} \rvec b_n \\
                      & \vdots                                                            \\
      \hat{\rvec b}_j & = s_{1j} \rvec b_1 + s_{2j} \rvec b_2 + \ldots + s_{nj} \rvec b_n \\
                      & \vdots                                                            \\
      \hat{\rvec b}_n & = s_{1n} \rvec b_1 + s_{2n} \rvec b_2 + \ldots + s_{nn} \rvec b_n
    \end{array}\right\}
    \quad\Rightarrow\quad
    \rmat S = \begin{bmatrix}
      s_{11} & s_{12} & \cdots & s_{1n} \\
      s_{21} & s_{22} & \cdots & s_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      s_{n1} & s_{n2} & \cdots & s_{nn}
    \end{bmatrix}
  $$
</Definition>
  
<Statement>
  A bázistranszformáció mátrixa mindig invertálható.
</Statement>