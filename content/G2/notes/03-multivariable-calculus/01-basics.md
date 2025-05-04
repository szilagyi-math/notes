---
title: Alapfogalmak
description: Alapfogalmak
---

<Definition title="Gömbkörnyezet" id="definition.3.1" >
  Legyen $\rvec p \in \Reals^n$. Ekkor a $\rvec p$ pont $\varepsilon$ sugarú
  nyílt környezetén (gömbkörnyezetén) a
  $$
    B_\varepsilon(\rvec p) := \{
    \rvec x \in \Reals^n \mid | \rvec x - \rvec p | < \varepsilon
    \}
    \text{ halmazt értjük.}
  $$
</Definition>

<Note>
  A tobábbiakban $\mathbb E^n$ jelölje az $n$ dimenziós euklideszi teret.
</Note>

<Definition title="Pontsorozat konvergenciája" id="definition.3.2" >
  A $(\rvec p_n)$ $\mathbb E^n$-beli pontsorozat konvergens, ha
  $\exists \rvec p \in \mathbb E^n$, hogy $\forall \varepsilon > 0$ esetén
  $\exists N(\varepsilon)$ küszöbindex, hogy $n > N(\varepsilon)$ esetén
  $\rvec p_n \in B_\varepsilon(\rvec p)$.

  Ekkor a $\rvec p$ pontot a sorozat határértékének, vagy határpontjának
  nevezzük.
</Definition>

<Theorem title="Bolzano-Weierstrass-féle kiválasztási tétel" id="theorem.3.1" >
  Végtelen, korlátos, $\Reals^n$-beli ponthalmazból kiválasztható konvergens
  pontsorozat részsorozata. Ezen sorozat határértéke (határpontja) a ponthalmaz
  torlódási pontja.
</Theorem>

<BlueBox>
  **Többváltozós függvények jelölése:**

  Legyen $\rvec f: \Reals^n \to \Reals^k$ függvény. Ekkor a függvény az alábbi
  formában írható fel:
  $$
    \begin{bmatrix}
      x_1 \\ x_2 \\ \vdots \\ x_n
    \end{bmatrix} \mapsto \rvec f(x_1; x_2; \ldots; x_n) = \begin{bmatrix}
      f_1 (x_1; x_2; \ldots; x_n) \\
      f_2 (x_1; x_2; \ldots; x_n) \\
      \vdots                      \\
      f_k (x_1; x_2; \ldots; x_n)
    \end{bmatrix}
    \text,
  $$
  ahol az $f_i: \Reals^n \to \Reals, i \in \{1;2;\dots;k\}$ függvényeket
  komponensfüggvényeknek nevezzük.

  **Speciális elnevezések:**

  <table className="-mt-4 ml-2" >
    <tbody>
      <tr>
        <td>$\Reals^n \to \Reals^k$</td>
        <td>vektor-vektor függvény</td>
      </tr>
      <tr>
        <td>$\Reals^n \to \Reals^{\phantom{k}}$</td>
        <td>vektor-skalár függvény</td>
      </tr>
      <tr>
        <td>$\Reals^{\phantom{n}} \to \Reals^k$</td>
        <td>skálár-vektor függvény</td>
      </tr>
    </tbody>
  </table>
</BlueBox>

<Definition title="Többváltozós függvény határértéke" id="definition.3.3" >
  Tekintsük az $\rvec f: \Reals^n \to \Reals^k$ leképezést. Azt mondjuk, hogy az
  $f$ határértéke $\rvec a \in \Reals^n$ pontban $\rvec A \in \Reals^k$, ha az
  $\rvec A$ tetszőleg $\varepsilon > 0$ sugarú gömbkörnyezetéhez létezik az
  $\rvec a$-nak olyan $\delta(\varepsilon)$ sugarú gömbkörnyezete, hogy
  $$
    \rvec x \in B_{\delta(\varepsilon)}(\rvec a) \setminus \{\rvec a\}
    \quad \Rightarrow \quad
    \rvec f(\rvec x) \in B_\varepsilon(\rvec A)
    \text.
  $$
</Definition>

<Definition title="Többváltozós függvény folytonossága" id="definition.3.4" >
  Azt mondjuk, hogy az $\rvec f: \Domain_f \subset \Reals^n \to \Reals^k$ leképezés
  folytonos az értelmezési tartományának egy belső pontjában
  ($\rvec a \in \Domain_f$), ha az adott pontbeli határértéke megegyezik
  az adott pontbeli függvényértékkel, vagyis
  $$
    \lim_{\rvec x \to \rvec a} \rvec f(\rvec x) = \rvec f(\rvec a)
    \text.
  $$
</Definition>

<Theorem title="Átviteli elv egyváltozós függvényekre" id="theorem.3.2" >
  Az $f$ függvény határértéke az $a \in \Domain_f$ pontban akkor és csak akkor
  $A$, ha $\forall x_n \to a$ sorozat esetén $f(x_n) \to A$.
</Theorem>

<Theorem title="Az átviteli elv általánosítása" id="theorem.3.3" >
  Az $\rvec f: \Reals^n \to \Reals^k$ függvény határértéke az $\rvec a \in \Reals^n$
  pontban akkor és csak akkor $\rvec A \in \Reals^k$, ha
  $\forall \rvec x_n \to \rvec a$ sorozat esetén
  $\rvec f(\rvec x_n) \to \rvec A$.
</Theorem>

<Definition title="Többváltozós függvény differenciálhatósága" id="definition.3.5" >
  Legyen $I \in \Reals^n$ nyílt halmaz, $\rvec f: I \to \Reals^k$ leképezés.
  Azt mondjuk, hogy az $\rvec f$ differenciálható az $\rvec a \in I$ pontban, ha
  $\exists \mathscr A: \Reals^n \to \Reals^k$ lineáris leképezés és
  $\rvec w: \Reals^n \to \Reals^k$ függvény, hogy
  $$
    \rvec w(\nvec) = \nvec
    \quad\text{és}\quad
    \lim_{\rvec \|h\| \to 0} \frac{
      \|\rvec w(\rvec h)\|
    }{
      \|\rvec h\|
    }
    \text,\quad \text{hogy} \quad
    \rvec f(\rvec x) - \rvec f(\rvec A)
    = \mathscr A(\rvec x - \rvec a) + \rvec w(\rvec x - \rvec a)
    \text.
  $$
</Definition>

<Statement>
  Ha az $\rvec f: I \subset \Reals^n \to \Reals^k$ függvény differenciálható az
  $\rvec a \in I$ pontban, akkor ott folytonos is.

  <Proof>
    Legyen $\rvec h = \rvec x - \rvec a$, ekkor
    $\displaystyle
      \rvec f(\rvec x) - \rvec f(\rvec a)
      = \mathscr A(\rvec h) + \rvec w(\rvec h)
      = \mathscr A(\rvec h) + \frac{\rvec w(\rvec h) \|\rvec h\|}{\|\rvec h\|}
      \text.
    $
    Ha $\rvec h \to \nvec$, akkor $\rvec w(\rvec h) / \|\rvec h\| \to \nvec$,
    azaz $\|\rvec f(\rvec a + \rvec h) - \rvec f(\rvec a)\|$ tetszőlegesen
    kicsivé tehető, hiszen $\mathscr A(\nvec) = \nvec$ tetszőleges lineáris
    leképezésre igaz. Az állítás így igaz.
  </Proof>
</Statement>

<Statement>
  Ha létezik az $\rvec f: I \subset \Reals^n \to \Reals^k$ függvénynek az
  $\rvec a \in I$ pontbeli deriváltja, akkor az $\mathscr A$ lineáris lekézezés
  egyértelmű.

  <Proof title="Indirekt bizonyítás" >
    Tegyük fel, hogy $\mathscr A_1: \Reals^n \to \Reals^k$ és
    $\mathscr A_2: \Reals^n \to \Reals^k$ két különböző lineáris leképezés
    egyaránt az $\rvec f$ függvénynek az $\rvec a$ pontbeli deriváltja. Ekkor
    $$
      \lim_{\|\rvec h\| \to 0} \frac{
        \|\rvec f(\rvec a + \rvec h) - \rvec f(\rvec a) - \mathscr A_1(\rvec h)\|
      }{
        \|\rvec h\|
      }
      \quad\text{ és }\quad
      \lim_{\|\rvec h\| \to 0} \frac{
        \|\rvec f(\rvec a + \rvec h) - \rvec f(\rvec a) - \mathscr A_2(\rvec h)\|
      }{
        \|\rvec h\|
      }
      \text.
    $$
    Vonjuk ki egymásból a két kifejezést:
    $$
      \lim_{\|\rvec h\| \to 0} \frac{
        \|\mathscr A_1(\rvec h) - \mathscr A_2(\rvec h)\|
      }{
        \|\rvec h\|
      }
      = 0
      \text.
    $$
    Mivel $\mathscr A_1$ és $\mathscr A_2$ lineáris leképezések,
    ezért a különbségük is az, ebből
    $$
      \mathscr A_1(\rvec h) - \mathscr A_2(\rvec h)
      = \underbrace{(\mathscr A_1 - \mathscr A_2)}_{\mathscr B}(\rvec h)
      \text.
    $$
    Vizsgáljuk a $\rvec h = \lambda \rvec u$ esetet. Ekkor, ha
    $\rvec h \to \nvec$, akkor $\lambda \to 0$ is igaz. Tehát
    $$
      \lim_{\lambda \to 0} \frac{\mathscr B(\lambda \rvec u)}{\|\lambda \rvec u\|}
      = \lim_{\lambda \to 0} \frac{\lambda \mathscr B(\rvec u)}{|\lambda| \, \|\rvec u\|}
      = \nvec
      \text.
    $$
    Mivel tetszőleges $\rvec u \in \Reals^n$ esetén a
    $\lambda / |\lambda| = \pm 1$, ezért $\mathscr B(\rvec u) = \nvec$.
    Azaz $\mathscr B$ lineáris leképezés, méghozzá a nulla leképezés, ezért
    $\mathscr A_1 = \mathscr A_2$, ami ellentmond a feltételezésnek.
  </Proof>
</Statement>

<Definition title="Többváltozós függvény differenciálhatósága" id="definition.3.6" >
  Az $\rvec f: \Reals^n \to \Reals^k$ leképezés differenciálható az értelmezési
  tartományának egy adott pontjában, ha ebben a pontban a komponensfüggvényei
  is differenciálhatóak.
</Definition>

<Statement>
  Legyen $\rvec f: \Reals^n \to \Reals^k$ és $\rvec g: \Reals^k \to \Reals^m$
  differenciálhatóak az $\rvec a \in \Domain_f \cap \Domain_g$ pontban. Ekkor
  az $\rvec f + \rvec g$ is differenciálható az $\rvec a$ pontban, és
  $$
    (\rvec f + \rvec g)'(\rvec a) = \rvec f'(\rvec a) + \rvec g'(\rvec a)
    \text.
  $$
</Statement>

<Statement>
  Legyen $\rvec f: \Reals^n \to \Reals^k$ differenciálható az
   $\rvec a \in \Domain_f$ pontban, és $\lambda \in \Reals$. Ekkor a
  $\lambda \rvec f$ is differenciálható az $\rvec a$ pontban, és
  $$
    (\lambda \rvec f)'(\rvec a) = \lambda \rvec f'(\rvec a)
    \text.
  $$
</Statement>

<Statement>
  Legyen $\rvec f: \Reals^n \to \Reals^k$ és $\rvec g: \Reals^k \to \Reals^m$
  leképezések, $\forall x \in \Domain_f$-re $f(x) \in \Domain_g$, továbbá
  $\rvec f$ differenciálható az $\rvec a \in \Domain_f$ pontban és
  $\rvec g$ differenciálható az $\rvec f(\rvec a)$ pontban. Ekkor a
  $\rvec g \circ \rvec f$ is differenciálható az $\rvec a$ pontban, és
  $$
    (\rvec g \circ \rvec f)'(\rvec a) = \rvec g'(\rvec f(\rvec a)) \circ \rvec f'(\rvec a)
    \text.
  $$
</Statement>