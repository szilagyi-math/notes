---
title: Integrálszámítás
description: Integrálszámítás
---

<Definition title="Primitív függvény" id="definition.3.19" >
  Legyen $H \subset \Reals^n$ nyílt halmaz, $\rvec f: H \to \Reals^n$. Az
  $F: \Reals^n \to \Reals$ függvényt az $\rvec f$ függvény primitív
  függvényének nevezzük, ha $\forall \rvec x \in H$-ra
  $F'(\rvec x) = \rvec f(\rvec x)$ teljesül, azaz
  $$
    \begin{pmatrix}
      \dfrac{\partial F(\rvec{x})}{\partial x_{1}} &
      \dfrac{\partial F(\rvec{x})}{\partial x_{1}} &
      \cdots                             &
      \dfrac{\partial F(\rvec{x})}{\partial x_{1}} &
    \end{pmatrix}
    =
    \begin{pmatrix}
      f_1(\rvec x) &
      f_2(\rvec x) &
      \cdots       &
      f_n(\rvec x)
    \end{pmatrix}
    \text.
  $$
</Definition>

<Theorem title="Primitív függvény létezésének szükséges feltétele" id="theorem.3.11">
  Ha $D \in \Reals^n$ nyílt halmaz, $\rvec f: D \to \Reals^n$ és
  $F: \Reals^n \to \Reals$ az $\rvec f$ primitív függvénye, akkor
  $\partial_i f_j = \partial_j f_i$, ahol $i;j \in \{1;2;\ldots;n\}$.

  <Proof>
    Ha $f$-nek létetik a primiv függvénye, akkor $\partial_i F = f_i$, valamint
    $\partial_j F = f_j$. Alkalmazzuk a Young-tételt:
    $$
      \partial_j f_i
      = \partial_j \partial_i F
      = \partial_i \partial_j F
      = \partial_i f_j
      \text.
    $$
  </Proof>
</Theorem>

<Theorem title="Primitív függvény létezésének elégséges feltétele" id="theorem.3.12">
  Legyen $D \in \Reals^n$ konvex, nyílt halmaz. Ha $\rvec f: D \to \Reals^n$
  folytonosan differenciálható és $\forall i;j \in \{1;2;\ldots;n\}$-re
  $\partial_i f_j = \partial_j f_i$, akkor $\rvec f$-nek létezik primitív
  függvénye.
</Theorem>

<Definition id="definition.3.20">
  Ha $a_1 < b_1$, $a_2 < b_2$, \ldots, $a_n < b_n$, $a_i; b_i \in \Reals^n$,
  $i;j \in \{1;2;\ldots;n\}$, akkor az
  $$
    [a_1; b_1] \times [a_2; b_2] \times \cdots \times [a_n; b_n]
  $$
  sorozatot $\Reals^n$-beli zárt intervallumnak nevezzük. Az
  $$
    (a_1; b_1) \times (a_2; b_2) \times \cdots \times (a_n; b_n)
  $$
  sorozatot $\Reals^n$-beli nyílt intervallumnak hívjuk.
</Definition>

<Note>
  Legyen $\rvec a \in \Reals^n$, $\rvec a(a_1; a_2; \ldots; a_n)$ és
  $\rvec b \in \Reals^n$, $\rvec b(b_1; b_2; \ldots; b_n)$. Ekkor
  $$
    [a_1; b_1] \times [a_2; b_2] \times \cdots \times [a_n; b_n] = [\rvec a; \rvec b]
    \text.
  $$
</Note>

<Note>
  Legyen $\rvec a \in \Reals^n$, $\rvec a(a_1; a_2; \ldots; a_n)$ és
  $\rvec b \in \Reals^n$, $\rvec b(b_1; b_2; \ldots; b_n)$. Ekkor
  $$
    (\rvec a; \rvec b) = \inner [\rvec a; \rvec b]
    \text.
  $$
</Note>

<Definition id="definition.3.21">
  Legyen $I = [\rvec a; \rvec b]$, $\rvec a; \rvec b \in \Reals^n$.
    - Az intervallum térfogata:
      $$
        \Vol I = \prod_{i = 1}^n (b_i - a_i)
        \text.
      $$

    - Az intervallum térfogata:
      $$
        \diam I
        = \|\rvec b - \rvec a\|
        = \sqrt{\displaystyle\sum_{i = 1}^n(b_i - a_i)^2}
        \text.
      $$

    - Az intervallum beosztásán egy olyan $\{ I_1; I_2; \dots; I_k\}$
      sorozatot értünk, melyre
      $$
        \bigcup_{i = 1}^k I_i = I
        \text{ és }
        \inner I_i \cap \inner I_j = \emptyset
        \text{, ha } i \neq j
        \text.
      $$

    - Az intervallum egy $d := \{I_1; I_2; \ldots; I_k\}$ egy beosztásának
      $\sigma$ finomságán a legnagyobb átmérőjű részintervallum átmérőjét
      értjük:
      $$
        \sigma(d) = \max \{ \diam I_i \}
        \text.
      $$

    - Az $e: \{J_1; J_2; \ldots; J_k\}$ beosztást a $d$ beosztás
      finomításának nevezzük, ha létezik olyan $J_m$
      $m \in \{ 1; 2; \ldots n \}$, melyre  $J_m \subset I_n$
      $n \in \{ 1; 2; \ldots k \}$.
</Definition>

<Statement>
  Legyen $\{ I_1; I_2; \ldots; I_k \}$ az $I$ intervallum egy beosztása, ekkor:
  $$
    \Vol I = \sum_{i = 1}^k \Vol I_i
    \text.
  $$
</Statement>

<Statement>
  Bármely beosztás normál beosztássá tehető.
</Statement>

<Definition id="definition.3.22">
  Legyen $I \subset \Reals^n$ zárt intervallum és $f: I \to \Reals$ korlátos
  függvény. Ha $d := \{ I_1; I_2; \ldots; I_k \}$ egy beosztása $I$-nek, akkor
  $\dots$

  - a $d$ beosztáshoz tartozó alsó integrálközelítő összeg:
    $$
      \underbar S(f; d) := \sum_{i = 1}^k \inf \{ f(I_i) \} \Vol I_i
      \text.
    $$

  - a $d$ beosztáshoz tartozó felső integrálközelítő összeg:
    $$
      \overline S(f; d) := \sum_{i = 1}^k \sup \{ f(I_i) \} \Vol I_i
      \text.
    $$

  - a $d$ beosztáshoz tartozó oszcillációs összeg:
    $$
      \Omega(f; d) = \underbar S(f; d) - \overline S(f; d)
      \text.
    $$

  - Legyen $\rvec x_i \in I_i$, ekkor a $d$ beosztáshoz tartozó
    integrálközelítő összeg:
    $$
      \sum_{i = 1}^k f(\rvec x_i) \Vol I_i
      \text.
    $$
</Definition>

<Statement>
  Legyen $d := \{ I_1; I_2; \ldots; I_k \}$ és
  $e := \{ J_1; J_2; \ldots; J_k \}$ az $I$ intervallum egy beosztása, ekkor
  ha $e$ finomabb beosztás mint $d$ igazak az alábbiak:
  - $\underbar S(f; d) \leq \underbar S(f; e)$
  - $\overline S(f; d) \geq \overline S(f; e)$
  - $\Omega(f; d) \leq \Omega(f; e)$
</Statement>

<Statement>
  Az $I$ tetszőleges $d_1$ és $d_2$ beosztása esetén
  $\underbar S(f; d_1) \leq \overline S(f; d_2)$.
</Statement>

<Note>
  Mivel ezen állítás szerint egy tetszőleges beosztáshoz tartozó alsó
  integrálközelítő összeg nem nagyobb egy másik tetszőlegesen választott
  beosztáshoz tartozó felső integrálközelítő összegnél, ezért az alsó illetve
  felső integrálközelítő összegek halmaza felülről illetve alulról korlátos.
</Note>

<Definition id="definition.3.23">
  Az $\underbar S(f) := \sup \{ \underbar S(f; d) \}$, ahol $d$ beosztása
  $I$-nek. Az $\underbar S(f)$-t alsó Darboux-integrálnak nevezzük.

  Az $\overline S(f) := \inf \{ \overbar S(f; d) \}$, ahol $d$ beosztása
  $I$-nek. Az $\overline S(f)$-t felső Darboux-integrálnak nevezzük.
</Definition>

<Definition id="definition.3.24">
  Legyen $f: I \subset \Reals^n \to \Reals$ korlátos függvény. Az $f$ függvényt
  Riemann-integrálhatónak mondjuk, ha $\underbar S(f) = \overline S(f)$. Ezt a
  közös értéket
  $$
    \int_I f(\rvec x) \dd \rvec x
    \text{-szel vagy }
    \int_I f
    \text{-fel jelöljük.}
  $$
  Az $I$ intervallumon vett Riemann-integrálható függvények összességét
  $\mathcal R(I)$-vel jelöljük.
</Definition>

<Theorem title="Darboux-tétel" id="theorem.3.13">
  Legyen $f: I \subset \Reals^n \to \Reals$ korlátos függvény. Ekkor
  $\forall \varepsilon > 0$ esetén létezik $\delta(\varepsilon) > 0$, hogy ha a
  $d$ beosztás finomsága kisebb $\delta(\varepsilon)$-nál
  ($\sigma(d) < \delta(\varepsilon)$), akkor
  $\underbar S(f) - \underbar S(f; d) < \varepsilon$ és
  $\overbar S(f; d) - \overbar S(f) < \varepsilon$.
</Theorem>

<Theorem id="theorem.3.14">
  Legyen $I \subset \Reals^n$ zárt intervallum, $f: I \to \Reals$ korlátos
  függvény. Ekkor az alábbi állítások igazak:
  - $f \in \mathcal R(I)$.
  - Oszcillációs kritérium: $\forall \varepsilon > 0$ esetén létezik
    $\delta(\varepsilon) > 0$, hogy ha $\sigma(d) < \delta$, akkor
    $\Omega(f; d) < \varepsilon$.
  - A Darboux-tételből levezethető, hogy létezik $A \in \mathcal R$, hogy
    minden $\varepsilon > 0$ esetén létezik $\delta(\varepsilon) > 0$,
    hogy ha $d := \{ I_1; I_2; \ldots; I_k \}$ beosztása $I$-nek, melyre
    $\sigma(d) < \delta(\varepsilon)$, akkor
    $$
      \left|\sum_{i = 1}^k f(t_i) \Vol I_i - A\right| < \varepsilon
      \text{, ahol } t_i \in I_i
      \text.
    $$
</Theorem>

<Note>
  A harmadik pontban szereplő $A$ érték az $f$ függvény $I$-n vett
  Riemann-integrálja.
</Note>

<Definition id="definition.3.25" >
  Az $H \subset \Reals^n$ halmazt Lebesgue szerint nullmérékűnek mondjuk, ha
  $\forall \varepsilon > 0$ esetén megadható olyan $\{ I_1; I_2; \ldots; I_k \}$
  intervallumrendszer, melyre az intervallumok uniója lefedi $H$-t
  ($H \subset \bigcup I_i$), és $\Vol I_i < \varepsilon$ teljesül.
</Definition>

<Statement>
  Legyen $H_1; H_2; \ldots; H_n \subset \Reals^n$ Lebesgue szerint nullmérékű
  halmazok sorozata. Ekkor $$\bigcup H_i \text{ugyancsak nullmérékű.}$$
</Statement>

<Definition id="definition.3.26">
  Legyen $f: I \subset \Reals^n \to \Reals$ korlátos függvény és
  $I_r(\rvec a)$ jelölje az $\rvec a$ körüli $r$ sugarú nyílt kockát, ahol
  $$
    \rvec a = (a_1; a_2; \ldots; a_n)
    \text{ és }
    I_r(\rvec a) = \bigcup_i (a_i - r; a_i + r)
    \text.
  $$
  Ekkor:
  $$
  \begin{align*}
    m_r(\rvec a) & := \inf \{ f(\rvec x) | I \cap I_r(\rvec a) \} \text, \\
    M_r(\rvec a) & := \sup \{ f(\rvec x) | I \cap I_r(\rvec a) \} \text.
  \end{align*}
  $$
  Megállapíthatjuk, hogy ha $r$ csökken, akkor $m_r$ nem csökkenhet és $M_r$ nem
  nőhet, azaz $m_r$ monoton növekvő és $M_r$ monoton csökkenő ha $r$ csökken. Ez
  alapján:
  $$
  \begin{align*}
    m(\rvec x) & := \lim_{r \to 0} m_r(\rvec x) \text, \\
    M(\rvec x) & := \lim_{r \to 0} M_r(\rvec x) \text.
  \end{align*}
  $$
  Az $m: I \subset \Reals^n \to \Reals$ függvényt alsó burkológörbének, és az
  $M: I \subset \Reals^n \to \Reals$ függvényt felső burkológörbének nevezzük.
</Definition>

<Statement>
  Az $f$ függvény folytonos az $\rvec x_0 \in D_f$ pontban, akkor és csak akkor,
  ha $m(\rvec x_0) = M(\rvec x_0)$.
</Statement>

<Theorem title="Lebesgue-tétel" id="theorem.3.15">
  Legyen $I \subset \Reals^n$ intervallum és $f: I \to \Reals$ korlátos
  függvény. Az $f$ függvény Riemann-integrálható, akkor és csak akkor, ha $f$
  szakadási helyeinek halmaza Lebesgue szerint nullmérékű.
</Theorem>

<Statement>
  Legyenek $f, g \in \mathcal R(I)$, ekkor
  $\alpha f + \beta g \in \mathcal R(I)$, ahol $\lambda; \mu \in \Reals$ és
  $$
    \int_I (\lambda f + \mu g) = \lambda \int_I f + \mu \int_I g
    \text.
  $$
</Statement>

<Statement>
  Legyen $f \leq g$ és $f; g \in \mathcal R(I)$, ekkor
  $$
    \int_I f \leq \int_I g
    \text.
  $$
</Statement>

<Note>
  Az előző állításból következik, hogy ha $f \in \mathcal R(I)$, akkor
  $f \in \mathcal R(I)$, valamint
  $$
    \left| \int_I f \right| \leq \int_I |f|
    \text.
  $$
</Note>

<Statement>
  A teljes felbontáshoz tartozó integrál a részintervallumokhoz tartozó
  integrálok összege. Legyen $f: I \subset \Reals^n \to \Reals$ és
  $\{ I_1; I_2; \ldots; I_k \}$ egy beosztása. Ekkor $f \in \mathcal R(I)$
  akkor és csak akkor, ha
  $$
    f|_{I_i} \in \mathcal R(I)
    \quad
    \forall i \in \{1; 2; \ldots; k\}
    \text{-re és}
    \quad
    \int_I f = \sum_{i = 1}^k \int_{I_i} f|_{I_i}
  $$
</Statement>

<Theorem title="Középértéktétel" id="theorem.3.16">
  Legyen $f: I \subset \Reals^n \to \Reals$ korlátos integrálható függvény,
  $m = \inf f(I)$ és $M = \sup f(I)$. Ekkor
  $$
    m \Vol I \leq \int_I f \leq M \Vol I
    \text.
  $$
</Theorem>

<Definition id="definition.3.27">
  Legyen $H \subset \Reals^n$ korlátos halmaz, és $I_H$ a $H$-t tartalmazó
  legszűkebb tégla. Ekkor értelmezhetjük az $f$-nek $I_H$-ra való
  kiterjesztését: $\hat f: I_H \to \Reals$, melyre
  $$
    \hat f(x) :=
    \begin{cases}
      f(x), & \text{ha } x \in H \text{,} \\
      0,    & \text{egyébként.}
    \end{cases}
  $$
</Definition>

<Statement>
  Legyen $f: H \to \Reals$ integrálható függvény, és legyen $I \supset H$ zárt
  intervallum. Továbbá legyen $\hat f: I \to \Reals$, melyre
  $$
    \hat f(x) :=
    \begin{cases}
      f(x), & \text{ha } x \in H \text{,} \\
      0,    & \text{egyébként.}
    \end{cases}
    \qquad \Rightarrow \qquad
    \int_H f = \int_I \hat f
    \text.
  $$

  <Proof>
    Ha $I$ legszűkebb tégla, akkor a definíció szerint igaz az egyenlőség. Ha
    $I$ nem a legszűkebb tégla, akkor az intervallum additivitást alkalmazva
    belátható hogy a hozzávett részek integrálközelítő értéke $0$, azaz igaz az
    állítás.
  </Proof>
</Statement>


<Definition title="Diffeomorfizmus" id="definition.3.28">
  Legyen $D \subset \Reals^n$ és $G \subset \Reals^n$ két nemüres tartomány,
  valamint $\varphi: D \to G$ leképezést diffeomorfizmusnak nevezzük, ha
  $\varphi$ bijekció (kölcsönösen egyértelmű), folytonosan differenciálható és
  $\forall \rvec x \in D$-re $|\varphi'(\rvec x)| \neq 0$.
</Definition>

<Statement>
  Legyen $f: D \to \Reals$ Reimann-integrálható függvény, továbbá
  $\varphi: G \to D$ diffeomorfizmus. Ekkor
  $$
    \int_D f = \int_G f \circ \varphi \cdot |\varphi'|
    \text,
  $$
  ahol $|\varphi'|$ a Jacobi-mátrix determinánsa.
</Statement>