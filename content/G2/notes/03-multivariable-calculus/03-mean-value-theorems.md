---
title: Középértéktételek
description: Középértéktételek
---

<Definition title="Konvex halmaz" id="definition.3.10">
  Legyen $H \subset \Reals^n$. Az $H$ halmazt konvexnek mondjuk, ha minden
  $\rvec a; \rvec b \in H$ és $\lambda \in [0; 1]$ esetén
  $\lambda \rvec a + (1 - \lambda) \rvec b \in H$ teljesül.
</Definition>

<Note>
  Ami konvex, az összefüggő, de fordítva nem igaz.
</Note>

<Theorem title="Lagrange-tétel" id="theorem.3.5">
  Legyen $f: [a; b] \to \Reals^n$ folytonos és (totálisan) differenciálható
  az $(a; b)$-n. Ekkor létezik $\xi \in (a; b)$, hogy
  $$
    \|f(b) - f(a)\| = \|f'(\xi)\| \cdot (b - a)
    \text.
  $$
  
  <Proof>
    Legyen $\varphi: [a; b] \to \Reals$ és
    $\varphi(t) := \langle f(b) - f(a); f(t) \rangle$. Ekkor
    $$
    \begin{align*}
      \varphi(b) - \varphi(a)
       & = \langle f(b) - f(a); f(b) \rangle - \langle f(b) - f(a); f(a) \rangle = \\
       & = \langle f(b) - f(a); f(b) - f(a) \rangle
      = \|f(b) - f(a)\|^2
      \text.
    \end{align*}
    $$
    A Lagrange-féle középértéktétel felírva $\varphi$-re,
    $\exists\xi \in (a; b)$, hogy
    $$
      \varphi(b) - \varphi(a) = \varphi'(\xi) \cdot (b - a)
      \quad \text{és} \quad
      \varphi'(t) = \langle f(b) - f(a); f'(t) \rangle
      \text.
    $$
    Ekkor
    $$
      \varphi(b) - \varphi(a) = \langle f(b) - f(a), f'(\xi) \rangle \cdot (b - a)
      \leq
      \|f(b) - f(a)\| \cdot \|f'(\xi)\| \cdot (b - a)
      \text.
    $$
    Tehát
    $$
      \|f(b) - f(a)\|^2 \leq \|f(b) - f(a)\| \cdot \|f'(\xi)\| \cdot (b - a)
    $$
    Az egyszerűsítés után következik, hogy
    $$
      \|f(b) - f(a)\| \leq \|f'(\xi)\| \cdot (b - a)
      \text.
    $$
  </Proof>
</Theorem>

<Theorem title="Lagrange-tétel többváltozós függvényekre" id="theorem.3.6">
  Legyen $H \subset \Reals^l$, $f: H \to \Reals^m$ továbbá $H$ konvex és nyílt,
  valamint $f$ differenciálható $H$-n. Ekkor minden $\rvec a; \rvec b \in H$
  esetén létezik $\xi \in H$ az $\rvec a$ és $\rvec b$-t összekötő szakaszon,
  hogy
  $$
    \|f(\rvec b) - f(\rvec a)\| \leq \|f'(\xi)\| \cdot \|\rvec b - \rvec a\|
    \text.
  $$
  
  <Proof>
    Legyen $\gamma: [0; 1] \to H$ az $\rvec a$ és $\rvec b$-t összekötő szakasz.
    Azaz $\gamma(t) = t \rvec a + (1 - t) \rvec b$. Az $f \circ \gamma$-ra
    alkalmazva a Lagrange-tételt adódik a bizonyítás állítása.
  </Proof>
</Theorem>

<Definition title="Lipschitz-feltétel" id="definition.3.11">
  Legyen $f: H \subset \Reals^m \to \Reals^n$ leképezés, melyre
  $\forall \rvec x \in H$-ra $\|f'(\rvec x)\| M$ teljesül. Ekkor
  $\|f(\rvec b) - f(\rvec a)\| \leq M \|\rvec b - \rvec a\|$ a Lagrange-féle
  középértéktétel miatt adódik. Az ilyen $f$ leképezést Lipschitz-feltételnek
  eleget tevőnek mondjuk.
</Definition>

<Theorem title="Cauchy-tétel" id="theorem.3.7">
  Legyen adott $\rvec a \in \Reals^n$ és annak $r$ sugarú környezete
  $B_r(\rvec a)$, valamint az $f : B_r(\rvec a) \to \Reals$ leképezés. Tegyük
  fel, hogy létezik az összes parciális derivált $B_r(\rvec a)$-n. Ekkor minden
  $\rvec b \in B_r(\rvec a)$ esetén létezik $\xi \in B_r(\rvec a)$, melyre
  $$
    \|\rvec b - \rvec a\| > \|\xi - \rvec a\|
    \quad \text{és} \quad
    \|\rvec f(\rvec b) - \rvec f(\rvec a)\| = \sum_{i=1}^n \partial_i f(\xi) (b_i - a_i)
    \text,
  $$
  ahol $\rvec b = (b_1; b_2; \ldots; b_n)$ és
  $\rvec a = (a_1; a_2; \ldots; a_n)$.
</Theorem>