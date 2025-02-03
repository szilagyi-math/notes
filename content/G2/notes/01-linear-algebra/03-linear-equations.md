---
title: Lineáris egyenletrendszerek
description: Lineáris egyenletrendszerek
---

<Definition title="Lineáris egyenletrendszer" id="definition.1.24" >
  Véges sok elsőfokú egyenletet és véges sok ismeretlent tartalmazó
  egyenletrendszert lineáris egyenletrendszernek nevezünk.

  Az $m$ egyenletből és $n$ ismeretlenből álló lineáris egyenletrendszer
  általános alakja:
  $$
    \begin{array}{ccccccccc}
      a_{11} x_{1} & + & a_{12} x_{2} & + & \dots  & + & a_{1n} x_{n} & = & b_{1}\text, \\[1mm]
      a_{21} x_{1} & + & a_{22} x_{2} & + & \dots  & + & a_{2n} x_{n} & = & b_{2}\text, \\[1mm]
      \vdots       &   & \vdots       &   & \vdots &   & \vdots       &   & \vdots      \\[1mm]
      a_{m1} x_{1} & + & a_{m2} x_{2} & + & \dots  & + & a_{mn} x_{n} & = & b_{m}\text,
    \end{array}
  $$
  ahol $a_{ij}$ együtthatók, $b_{j}$ konstansok, $x_{j}$ ismeretlenek.
</Definition>

**Lineáris egyenletrendszerek csoportosítása:**

-  A lineáris egyenletrendszert **megoldható**nak nevezzük,
  ha létezik megoldása.
-  A lineáris egyenletrendszert **ellentmondó**nak nevezzük,
  ha nincs megoldása.
-  A lineáris egyenletrendszert **határozott**nak nevezzük,
  ha csupán egyetlen megoldása van.
-  A lineáris egyenletrendszert **határozatlan**nak nevezzük,
  ha végtelen sok megoldása van.

<Definition title="Ekvivalens lineáris egyenletrendszerek" id="definition.1.25" >
  Két lineáris egyenletrendszer ekvivalens, ha a megoldáshalmazuk megegyezik.
</Definition>

<Note>
  Az ekvivalencia szemponjából az egyenletek és az ismeretlenek sorrendje nem
  számít.
</Note>

<Statement>
  Az eredetivel ekvivalens lineáris egyenletrendszert kapunbk, ha az
  egyenletrendszer valamelyik egyenletét egy nemnulla számmal szorozzuk, vagy
  valamelyik egyenlethet a lineáris egyenletrendszer egy másik egyenletét
  hozzáadjuk.
</Statement>

**Lineáris egyenletrendszer mátrixos alakja:**

Egy lineáris egyenletrendszer felírható $\rmat A \rvec x = \rmat b$
alakban, ahol $\rmat A$ az együttható mátrix, $\rvec x$ az ismeretlenek
vektora, $\rvec b$ pedig a konstans vektor.
$$
  \underbrace{\begin{bmatrix}
      a_{11} & a_{12} & \cdots & a_{1n} \\
      a_{21} & a_{22} & \cdots & a_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{bmatrix}}_{\rmat A} \underbrace{\begin{bmatrix}
      x_{1} \\ x_{2} \\ \vdots \\ x_{n}
    \end{bmatrix}}_{\rvec x} = \underbrace{\begin{bmatrix}
      b_{1} \\ b_{2} \\ \vdots \\ b_{n}
    \end{bmatrix}}_{\rvec b}
$$

<Theorem title="LER megoldhatósága" id="theorem.1.6" >
  Az $\rmat A \rvec x = \rvec b$ lineáris egyenletrendszer akkor és csak
  akkor oldható meg, ha $\rg(\rmat A) = \rg(\rmat A | \rvec b)$, ahol az
  $(\rmat A | \rvec b)$ mátrixot kibővített mátrixnak nevezzük.

  A feltétel mátrixosan:
  $$
    \rg \begin{bmatrix}
      a_{11} & a_{12} & \cdots & a_{1n} \\
      a_{21} & a_{22} & \cdots & a_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{bmatrix} = \rg \left[\begin{array}{cccc|c}
        a_{11} & a_{12} & \cdots & a_{1n} & b_1    \\
        a_{21} & a_{22} & \cdots & a_{2n} & b_2    \\
        \vdots & \vdots & \ddots & \vdots & \vdots \\
        a_{m1} & a_{m2} & \cdots & a_{mn} & b_n
      \end{array}\right]\text.
  $$
</Theorem>

<Definition title="Homogén lineáris egyenletrendszer" id="definition.1.26" >
  Az $\rmat A \rvec x = \rvec b$ lineáris egyenletrendszer homogénnek mondjuk,
  ha $\rvec b = \nvec$.

  Ha $\rvec b \neq \nvec$, akkor a lineáris egyenletrendszer inhomogén.
</Definition>

<Note>
  A feltételből következik, hogy homogén lineáris egyenletrendszer
  ($\rvec b = \nvec$) mindig megoldható, hiszen az együttható mátrixból és egy
  nullvektorból képzett kibővített mátrix rangja mindig meg fog egyezni az
  együttható mátrix rangjával.
</Note>

<Note>
  Tekintsük az $n$ egyenletből és $n$ ismeretlenből álló homogén lineáris
  egyenletrendszert. Ekkor ha az $\rmat A$ mátrix reguláris, akkor az
  egyenletrendszernek csak a triviális megoldása létezik. Ha az $\rmat A$
  szinguláris, akkor létezik nemtriviális megoldás is.
</Note>

**Megoldási módszerek:**

- Ha az $\rmat A$ mátrix reguláris, akkor invertálható és az
  $\rvec x = \rmat A^{-1} \rvec b$.
- Cramer-szabály: ha az $\rmat A$ mátrix reguláris, akkor az
  együtthatók az alábbi módon számíthatóak:
  $$
    x_i = \frac{\det \rmat A_i}{\det \rmat A}
    \text,
  $$
  ahol az $\rmat A_i$ mátrixot úgy képezzük, hogy az $i$-edik oszlopába
  $\rvec b$ vektort írjuk be.
- Gauss-elimináció: sorműveletekkel alakítjuk a kibővített mátrixot:
  $$
    \left[\begin{array}{cccc|c}
        a_{11} & a_{12} & \cdots & a_{1n} & b_1    \\
        a_{21} & a_{22} & \cdots & a_{2n} & b_2    \\
        \vdots & \vdots & \ddots & \vdots & \vdots \\
        a_{m1} & a_{m2} & \cdots & a_{mn} & b_n
      \end{array}\right]
    \quad\sim\quad
    \left[\begin{array}{cccc|c}
        \square & \square & \cdots & \square & \square \\
        0       & \square & \cdots & \square & \square \\
        \vdots  & \vdots  & \ddots & \vdots  & \vdots  \\
        0       & 0       & \cdots & \circ   & \circ
      \end{array}\right]
  $$