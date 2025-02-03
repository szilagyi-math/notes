---
title: Lineáris leképezések
description: Lineáris leképezések
---

<Definition title="Lineáris leképezés" id="definition.1.27" >
  Legyenek $V_1$ és $V_2$ ugyanazon $T$ test feletti vektorterek. Legyen
  $\varphi: V_1 \rightarrow V_2$ leképezés, melyet lineáris leképezésnek
  nevezünk, ha tetszőleges két $V_1$-beli vektor ($\forall \rvec a; \rvec b \in
    V_1$) és $T$-beli skalár ($\lambda \in T$) esetén teljesülnek az alábbiak:

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
  Véges dimenziós vektorterek esetén az egymással izomorf vektorterek dimenziója
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
  \end{bmatrix}_{k \times n}
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
  leképezés ($\psi \circ \varphi: V_1 \rightarrow V_3$) olyan, hogy ha
  $\varphi \leftrightarrow \rmat A \in \mathcal M_{m \times k}$ és
  $\psi \leftrightarrow \rmat B \in \mathcal M_{n \times m}$, akkor
  $\psi \circ \varphi \leftrightarrow \rmat C \in \mathcal M_{n \times k}$, ahol
  $\rmat C = \rmat B \cdot \rmat A$.

  Speciálisan, ha $V_1 = V_2 = V_3 = V$, $\dim V = n$, akkor
  $\rmat A; \rmat B; \rmat C \in \mathcal M_{n \times n}$.

  **Következény:**
  Invertálható lineáris leképezés mátrixa invertálható.
</Statement>