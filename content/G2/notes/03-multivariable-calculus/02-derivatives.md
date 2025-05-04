---
title: Iránymenti és parciális deriváltak
description: Iránymenti és parciális deriváltak
---

<Definition title="Iránymenti derivált" id="definition.3.7">
  Legyen $I \in \Reals^n$ nyílt halmaz, $f: I \to \Reals$ függvény és
  legyen adva egy $\rvec v \in \Reals^n$ egységvektor. Ha létezik a
  $$
    \lim_{\lambda \to 0^+} \frac{
      f(\rvec x + \lambda \rvec v) - f(\rvec x)
    }{
      \lambda
    }
  $$
  határérték és ez egy valós szám, akkor ezt az $f$ függvény $\rvec a$
  pontbeli $\rvec v$ irányú, iránymenti deriváltjának nevezzük. Jele:
  $$
    \partial_{\rvec v} f(\rvec x) = \lim_{\lambda \to 0^+} \frac{
      f(\rvec x + \lambda \rvec v) - f(\rvec x)
    }{
      \lambda
    }
    \text.
  $$
</Definition>

<Note>
  Amennyiben $\rvec v$ az $n$-dimenziós téren az $i$-edik irányba mutat,
  akkor azt parciális deriváltnak nevezzük, jelölései:
  $$
    \dfrac{\partial f_{1}(\rvec{x})}{\partial x_{i}}
    = \partial_i f(\rvec x)
    = \partial_{x_i} f(\rvec x)
    = f'_{x_i}(\rvec x)
    = \lim_{\lambda \to 0^+} \frac{
      f(x_1, \ldots, x_{i-1}, x_i - \lambda, x_{i+1}, \ldots, x_n) - f(\rvec x)
    }{
      \lambda
    }
    \text.
  $$
</Note>

<Example>
  Adjuk meg az $f(x; y) = x^3 + 5x^2y + 3xy^2 - 12y^3 + 5x - 6y + 7$ függvény
  parciális deriváltjait az $(1;2)$ pontban!

  Először határozzuk meg a parciális deriváltakat parametrikusan, majd
  számoljuk ki az $(1;2)$ pontbeli értékeket:

  $$
  \begin{aligned}
\frac{\partial f(x,y)}{\partial x} & = 3x^{2}+10xy+3y^{2}+5
      && \qquad\Rightarrow\qquad
   \left.\frac{\partial f(x,y)}{\partial x}\right|_{(1,2)} = 3+20+12+5 = 40,\\[6pt]
\frac{\partial f(x,y)}{\partial y} & = 5x^{2}+6xy-36y^{2}-6
      && \qquad\Rightarrow\qquad
   \left.\frac{\partial f(x,y)}{\partial y}\right|_{(1,2)} = 5+12-144-6 = -133.
\end{aligned}
  $$
</Example>

<Definition title="Gradiens" id="definition.3.8">
  Legyen $f: \Reals^n \to \Reals$. Az $f$ függvény
  $\rvec a(a_{1}; a_{2}; \ldots; a_{n})$ pontbeli gradiensén az alábbi
  oszlopvektort értjük:

  $$
    \grad f(\rvec a) = \nabla f(\rvec a) = \begin{bmatrix}
      \partial_1 f(\rvec a) \\
      \partial_2 f(\rvec a) \\
      \vdots                \\
      \partial_n f(\rvec a)
    \end{bmatrix} = \begin{pmatrix}
      \dfrac{\partial f(\rvec{a})}{\partial x_{1}} &
      \dfrac{\partial f(\rvec{a})}{\partial x_{2}} &
      \cdots &
      \dfrac{\partial f(\rvec{a})}{\partial x_{n}}
    \end{pmatrix}^\T
  $$
</Definition>

<Note>
  A gyakrolatban az iránymenti deriváltakat a gradiens segítségével számítjuk:
  $$
    \partial_{\rvec v} f(\rvec a) = \grad f(\rvec a) \cdot \rvec v
    \text.
  $$
</Note>

<Example>
  Számítsuk ki az $f(x; y) = x^3 + 5x^2y + 3xy^2 - 12y^3 + 5x - 6y + 7$
  függvény $\rvec v(3;4)$ irányú deriváltját az $(1;2)$ pontban!

  A gradiens az előző példában számolt parciális deriváltak alapján:
  $$
    \grad f(1;2) = \begin{bmatrix}
      40 \\ -133
    \end{bmatrix}
    \text.
  $$
  Az iránymenti derivált számításához még szükségünk van az $\rvec v$ irányú
  egységvektorra:
  $$
    \|\rvec v\| = \sqrt{3^2 + 4^2} = 5
    \quad\Rightarrow\quad
    \uvec e_v = \frac{\rvec v}{\|\rvec v\|} = \frac{1}{5} \begin{bmatrix}
      3 \\ 4
    \end{bmatrix} = \begin{bmatrix}
      3/5 \\ 4/5
    \end{bmatrix}
    \text.
  $$
  Az iránymenti derivált:
  $$
    \partial_{\rvec v} f(1;2) = \grad f(1;2) \cdot \rvec v = \begin{bmatrix}
      40 \\ -133
    \end{bmatrix} \cdot \begin{bmatrix}
      3/5 \\ 4/5
    \end{bmatrix} = 40 \cdot 3/5 - 133 \cdot 4/5 = -82{,}4
    \text.
  $$
</Example>

<Definition title="Jacobi mátrix" id="definition.3.9">
  Legyen $\rvec f: \Reals^n \to \Reals^k$ leképezés.
  Ekkor $\rvec f'(\rvec a) = \rmat J \rvec f(\rvec a)$,
  ahol $\rmat J \in \mathscr M_{k \times n}$. A $\rmat J$ mátrixot az
  $\rvec f$ függvény Jacobi-mátrixának nevezzük, melynek elemei:
  $$
    \rmat J(\rvec a) = \begin{bmatrix}
      \dfrac{\partial f_{1}(\rvec{x})}{\partial x_{1}} &
      \dfrac{\partial f_{1}(\rvec{x})}{\partial x_{2}} &
      \cdots &
      \dfrac{\partial f_{1}(\rvec{x})}{\partial x_{n}} \\[12pt]
      \dfrac{\partial f_{2}(\rvec{x})}{\partial x_{1}} &
      \dfrac{\partial f_{2}(\rvec{x})}{\partial x_{2}} &
      \cdots &
      \dfrac{\partial f_{2}(\rvec{x})}{\partial x_{n}} \\[12pt]
      \vdots & \vdots & \ddots & \vdots \\[12pt]
      \dfrac{\partial f_{k}(\rvec{x})}{\partial x_{1}} &
      \dfrac{\partial f_{k}(\rvec{x})}{\partial x_{2}} &
      \cdots &
      \dfrac{\partial f_{k}(\rvec{x})}{\partial x_{n}} \\
    \end{bmatrix}_{|\rvec x = \rvec a} = \begin{bmatrix}
      \grad^\T f_1(\rvec a) \vphantom{\dfrac{\partial f_{1}(\rvec{x})}{\partial x_{1}}} \\[12pt]
      \grad^\T f_2(\rvec a) \vphantom{\dfrac{\partial f_{1}(\rvec{x})}{\partial x_{1}}} \\[12pt]
      \vdots                                                       \\[12pt]
      \grad^\T f_k(\rvec a) \vphantom{\dfrac{\partial f_{1}(\rvec{x})}{\partial x_{1}}} \\
    \end{bmatrix}
  $$
</Definition>

<Theorem title="Young-tétel" id="theorem.3.4">
  Legyen adott az $I \subset \Reals^n$ nyílt halmaz, $f: H \to \Reals$ és
  $\rvec a \in I$, továbbá $\rvec a$-nak létezik olyan környezete, amelyben
  $f$ összes $p$-edrendű parciális deriváltja létezik és folytonos. Ekkor
  $$
    \partial_i \partial_j f(\rvec a) = \partial_j \partial_i f(\rvec a)
    \text,\quad
    i;j \in \{1;2;\ldots;n\}
    \text,
  $$
  azaz a parciális deriváltak sorrendje $p$-ed rendig felcserélhető.
</Theorem>