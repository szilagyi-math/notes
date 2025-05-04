---
title: Szélsőértékszámítás
description: Szélsőértékszámítás
---

<Definition title="Többváltozós függvény maximuma" id="definition.3.12">
  Legyen $f: H \subset \Reals^n \to \Reals$. Azt mondjuk, hogy az $f$-nek
  az $\rvec a \in \inner H$ pontban lokális maximuma van, ha létezik az
  $\rvec a \in U \subset H$ környetzete, hogy $f(\rvec a) \geq f(\rvec x)$
  $\;\forall \rvec x \in U$-ra.
</Definition>

<Definition title="Többváltozós függvény minimuma" id="definition.3.13">
  Legyen $f: H \subset \Reals^n \to \Reals$. Azt mondjuk, hogy az $f$-nek
  az $\rvec a \in \inner H$ pontban lokális minimuma van, ha létezik az
  $\rvec a \in U \subset H$ környetzete, hogy $f(\rvec a) \leq f(\rvec x)$
  $\;\forall \rvec x \in U$-ra.
</Definition>

<Definition title="Stacionárius pont" id="definition.3.14">
  Legyen $f: H \subset \Reals^n \to \Reals$, $\rvec a \in \inner H$ és
  léteznek az $f$ parciális deriváltjai az $\rvec a$ pontban. Ha
  $\forall i \in \{1;2;\ldots;n\}$-re $\partial_i f(\rvec a) = 0$, akkor
  az $\rvec a$ a függvény stacionárius pontja.
</Definition>

<Theorem title="Stacionárius pont létezése" id="theorem.3.8">
  Legyen $f: H \subset \Reals^n \to \Reals$. Ha az $f$ függvény az összes
  változója szerint parciálisan differenciálható az $\rvec a \in \inner H$
  pontban, és ott lokális szelsőértéke van, akkor az $\rvec a$ stacionárius
  pontja az $f$ függvénynek.
</Theorem>

<Definition title="Lineáris forma" id="definition.3.15">
  Legyen a $V$ a $T$ test feletti vektortér. Ha a $\varphi: V \to \Reals$
  leképezés lineáris, vagyis
  $$
    \varphi(\lambda \rvec x + \mu \rvec y)
    = \lambda \varphi(\rvec x) + \mu \varphi(\rvec y)
    \qquad \forall \rvec x; \rvec y \in V, \lambda; \mu \in \Reals
    \text,
  $$
  akkor a $\varphi$-t lineáris formának is hívjuk.
</Definition>

<Definition title="Billineáris forma" id="definition.3.16" >
  Legyen $\psi: V \times V \to \Reals$ mindkét változójában lineáris, azaz
  $$
  \begin{alignat*}{9}
    \psi(\lambda_1 \rvec x_1 + \lambda_2 \rvec x_2; \rvec y)
     & = \lambda_1 \psi(\rvec x_1; \rvec y) + \lambda_2 \psi(\rvec x_2; \rvec y)           &
     & \qquad \forall \rvec x_1; \rvec x_2; \rvec y \in V, \lambda_1; \lambda_2 \in \Reals
    \text,
    \\
    \psi(\rvec x; \mu_1 \rvec y_1 + \mu_2 \rvec y_2)
     & = \mu_1 \psi(\rvec x; \rvec y_1) + \mu_2 \psi(\rvec x; \rvec y_2)                   &
     & \qquad \forall \rvec x; \rvec y_1; \rvec y_2 \in V, \mu_1; \mu_2 \in \Reals
    \text.
  \end{alignat*}
  $$
  Ekkor a $\psi$-t bilineáris formának mondjuk.
</Definition>

<Note>
  A $\psi$ bilineáris forma szimmetrikus, ha
  $\psi(\rvec x; \rvec y) = \psi(\rvec y; \rvec x)
    \quad \forall \rvec x; \rvec y \in V$-re.
</Note>

<Note>
  A $\psi$ bilineáris forma antiszimmetrikus, ha
  $\psi(\rvec x; \rvec y) = -\psi(\rvec y; \rvec x)
    \quad \forall \rvec x; \rvec y \in V$-re.
</Note>

<Definition title="Kvadratikus forma" id="definition.3.17">
  Legyen $\eta: V \to \Reals$. Ha létezik olyan $\psi: V \times V \to \Reals$
  szimmetrikus bilineáris forma, hogy $\eta(\rvec x) = \psi(\rvec x; \rvec x) \quad \forall \rvec x \in V$-re, akkor az $\eta$-t kvadratikus formának,
  vagy kvadratikus alaknak nevezzük.

  Az $\eta$ kvadratikus forma$\dots$

  - pozitív definit, ha $\eta(\rvec x) > 0 \quad \forall \rvec x \in V \setminus \{\nvec\}$.
  - negatív definit, ha $\eta(\rvec x) < 0 \quad \forall \rvec x \in V \setminus \{\nvec\}$.
  - pozitív szemidefinit, ha $\eta(\rvec x) \geq 0 \quad \forall \rvec x \in V$.
  - negatív szemidefinit, ha $\eta(\rvec x) \leq 0 \quad \forall \rvec x \in V$.

  Ha ezek egyike sem teljesül, indefinit kvadratikus formáról beszélünk.
</Definition>

<Theorem title="Kritériumok a lokális szélsőértékekhez" id="theorem.3.9">
  Legyen $f: H \subset \Reals^n \to \Reals$. Tegyük fel, hogy az $f$ függvény
  az összes változója szerint parciálisan differenciálható az
  $\rvec a \in \inner H$ pont valamely környezetében. Legyen továbbá az
  $\rvec a$ stacionárius pontja az $f$-nek és $Q: \Reals^n \to \Reals$ olyan
  kvadratikus forma, melynek mátrixa:
  \def\arraystretch{1.5}
  $$
    \rmat Q(\rvec a) = \begin{bmatrix}
      \partial_1^2 f(\rvec a)          & \partial_1 \partial_2 f(\rvec a) & \cdots & \partial_1 \partial_n f(\rvec a) \\
      \partial_2 \partial_1 f(\rvec a) & \partial_2^2 f(\rvec a)          & \cdots & \partial_2 \partial_n f(\rvec a) \\
      \vdots                           & \vdots                           & \ddots & \vdots                           \\
      \partial_n \partial_1 f(\rvec a) & \partial_n \partial_2 f(\rvec a) & \cdots & \partial_n^2 f(\rvec a)
    \end{bmatrix}
    \in \mathscr M_{n \times n}
    \text.
  $$

  - Ha $Q$ pozitív definit, akkor az $\rvec a$ pontban az $f$-nek lokális minimuma van.
  - Ha $Q$ negatív definit, akkor az $\rvec a$ pontban az $f$-nek lokális maximuma van.
  - Ha $Q$ indefinit, akkor az $\rvec a$ pontban az $f$-nek nincs szélsőértéke.
</Theorem>

<Theorem title="Kritériumok a lokális szélsőértékekhez 2" id="theorem.3.10">
  Legyen $n = 2$ és teljesüljenek az előző tétel feltételei. Ekkor
  $$
    \mathscr D(\rvec a)
    = \det \rmat Q(\rvec a)
    = \begin{vmatrix}
      \partial_1^2 f(\rvec a)          & \partial_1 \partial_2 f(\rvec a) \\
      \partial_2 \partial_1 f(\rvec a) & \partial_2^2 f(\rvec a)
    \end{vmatrix}
    \quad\text{ és }\quad
    \mathscr S(\rvec a)
    = \trace \rmat Q(\rvec a)
    = \partial_1^2 f(\rvec a) + \partial_2^2 f(\rvec a)
  $$

  - Ha $\mathscr D(\rvec a) > 0$ és $\mathscr S(\rvec a) > 0$ akkor az $\rvec a$ pontban az $f$-nek lokális minimuma van.
  - Ha $\mathscr D(\rvec a) > 0$ és $\mathscr S(\rvec a) < 0$ akkor az $\rvec a$ pontban az $f$-nek lokális maximuma van.
  - Ha $\mathscr D(\rvec a) < 0$                              akkor az $\rvec a$ pontban az $f$-nek nincs szélsőértéke.  
</Theorem>

<Definition title="Feltételes szélsőérték" id="definition.3.18">
  Legyen $m;n \in \mathbb Z^+$, $m > n$, $H \in \Reals^m$ nyílt halmaz,
  $f: H \to \Reals$ és $\rvec g : H \to \Reals^n$ leképezések, továbbá
  $H_0 := \{ \rvec x \mid \rvec x \in H \land \rvec g (\rvec x) = \nvec\}$.
  Ha az $f$ függvény $H_0$-ra való leszűkítésének ($f|_{H_0}$) az
  $\rvec a$ pontban lokális szélsőértéke van, akkor azt mondjuk, hogy az $f$-nek
  az $\rvec a$ pontban feltételes szélsőértéke van a $\rvec g(\rvec a) = \nvec$
  feltétellel.
</Definition>

<Definition title="Lagrange féle multiplikátor" id="definition.3.19">
  Legyen $m;n \in \mathbb Z^+$, $m > n$, $H \in \Reals^m$ nyílt halmaz,
  $f: H \to \Reals$ és $\rvec g : H \to \Reals^n$ leképezések, továbbá
  $H_0 := \{ \rvec x \mid \rvec x \in H \land \rvec g (\rvec x) = \nvec\}$.
  Tegyük fel, hogy az $f$ és $\rvec g_i$ függvények minden parciális deriváltja
  folytonos a $H$ halmazon. Ha az $f$ függvény az $\rvec a \in H_0$ pontban
  feltételes szélsőértéke van a $\rvec g(\rvec a) = \nvec$ feltétellel és a
  \def\arraystretch{1.5}
  $$
    \rg \begin{bmatrix}
      \partial_1 g_1 (\rvec a) & \partial_2 g_1 (\rvec a) & \cdots & \partial_n g_1 (\rvec a) \\
      \partial_1 g_2 (\rvec a) & \partial_2 g_2 (\rvec a) & \cdots & \partial_n g_2 (\rvec a) \\
      \vdots                   & \vdots                   & \ddots & \vdots                   \\
      \partial_1 g_n (\rvec a) & \partial_2 g_n (\rvec a) & \cdots & \partial_n g_n (\rvec a)
    \end{bmatrix} = n
    \text{ (maximális)},
  $$
  akkor léteznek olyan $\lambda_1; \lambda_2; \ldots \lambda_n$ skalárok, hogy
  $$
    \partial_i f(\rvec a)
    + \sum_{k = 1}^{n} \lambda_k \,\partial_i g_k(\rvec a) = 0
    \quad
    \forall i \in \{1;2;\ldots;m\}
    \text.
  $$
  A $\lambda_1; \lambda_2; \ldots \lambda_n$ skalárokat Lagrange-féle
  multiplikátoroknak nevezzük.
</Definition>