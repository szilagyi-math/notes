---
title: "Bevezetés"
description: "Bevezetés"
---

<Definition id="definition.6.1" title="Differenciahányados">

Legyen $f: I \subset \Reals \rightarrow \Reals$ értelmezve az $x \in I$ pontban és annak környezetében. Ha $x \neq a$, akkor az
$$
\frac{f(x) - f(a)}{x - a}
$$
hányadost különbséghányadosnak vagy differenciahányadosnak nevezzük. Jelölése:
$$
\frac{\Delta f(a)}{\Delta x}
    \quad \text{ vagy } \quad
    \frac{f(a + \Delta x) - f(a)}{\Delta x}
    \text.
$$

</Definition>

<Definition id="definition.6.2" title="Differenciálhányados">

Ha létezik és véges a
$$
\lim_{x \rightarrow a} \frac{f(x) - f(a)}{x - a}
$$
határérték, akkor azt az $f$ függvény $a$ pontbeli differenciálhányadosának, vagy az $a$ pontbeli deriváltjának mondjuk. Jelölése:
$$
f'(a)
    \quad \text{ vagy } \quad
    \odv{f(a)}{x}
    \text.
$$

</Definition>

<BlueBox>

Az $f$ függvény $a$ pontbeli **érintő**jének **egyenlete** onnan következik, hogy $f' = m$, ahol $m$ a meredekséget jelöli, az $y = m \cdot x     + b$ egyenes egyenletéből levezetve:
$$
f(a) = f'(a) \cdot a + b
    \quad \rightarrow \quad
    b = f(a) - f'(a) \cdot a
    \text,
$$
és mivel
$$
\begin{gathered}
    (a; f(a)) \in y = m \cdot x + b
    \\
    \downarrow
    \\
    y = f'(a) \cdot x + f(a) - f'(a) \cdot a
  
\end{gathered}
$$
Ebből átalakítva:
$$
\boxed{
      y = f'(a)\cdot (x-a) + f(a)
      \text.
    }
$$
Az $(a; f(a))$ pontbeli **normális egyenlete**:
$$
\begin{gathered}
    M = \frac{-1}{f'(a)}
    \text, \quad \text{és} \quad
    (a; f(a)) \in Y = M \cdot X + B
    \text,
    \\
    \boxed{
      y = \frac{-1}{f'(a)} \cdot (x-a) + f(a)
      \text.
    }
  
\end{gathered}
$$

</BlueBox>

<Definition id="definition.6.3" title="Derivált">

Legyen $f : I \subset \Reals \rightarrow \Reals$ értelmezve $a$ pontban és annak egy környezetében. Ekkor $f$-t differenciálhatónak mondjuk $a$ pontban, ha $\exists A \in \Reals$ és $\varepsilon : \Reals \rightarrow \Reals$ függvény, melyre
$$
\lim\limits_{x\to a} \varepsilon(x) = 0
    \text{, hogy }
    f(x) - f(a) = A \cdot (x-a) + \varepsilon(x)\cdot (x-a)
    \text.
$$

</Definition>

<Definition id="definition.6.4" title="Jobboldali derivált">

Legyen $f:[a; b] \rightarrow \Reals$, ekkor a
$$
\lim_{\phantom{{}^{+}}x \to a^+} \frac{f(x)-f(a)}{x-a}
$$
határértékét, ha létezik és véges, az $f$ függvény $a$ pontbeli jobboldali deriváltjának mondjuk.

</Definition>

<Definition id="definition.6.5" title="Baloldali derivált">

Legyen $f:[a; b] \rightarrow \Reals$, ekkor a
$$
\lim_{\phantom{{}^{-}}x \to a^-} \frac{f(x)-f(a)}{x-a}
$$
határértékét, ha létezik és véges, az $f$ függvény $a$ pontbeli baloldali deriváltjának mondjuk.

</Definition>

<Note>

Az $f: I\subset \Reals \rightarrow \Reals$ függvény az $x_0\in I$ pontban differenciálható $\Leftrightarrow$, ha ott balról és jobbról is differenciálható és a bal és jobb oldali deriváltak egyenlőek.

</Note>

<Example>

$f(x) = \lvert x \rvert$ függvény az $x = 0$ pontban:
$$
\lim_{\phantom{{}^{+}}x \to 0^+} f(x) = \frac{x-0}{x-0} = 1
    \quad \text{és} \quad
    \lim_{\phantom{{}^{+}}x \to 0^-} f(x) = \frac{-x-0}{x-0} = -1
    \text.
$$
A két derivált nem egyezik meg, tehát az $x = 0$ pontban a függvény nem deriválható. A folytonosság szükséges, de nem elégséges feltétele a differenciálhatóságnak.

</Example>

<Theorem id="theorem.6.1">

Ha az $f$ függvény differenciálható egy adott pontban, akkot ott folytonos is.

</Theorem>

<Definition id="definition.6.6" title="Függvény differenciálhatósága nyílt intervallumon">

Az $f$ függvény differenciálható az $(a; b)$ intervallumon, ha annak minden pontjában differenciálható.

</Definition>

<Definition id="definition.6.7" title="Függvény differenciálhatósága zárt intervallumon">

Az $f$ függvény differenciálható az $[a; b]$ intervallumon, ha differenciálható az $(a; b)$ intervallumon, továbbá jobbról differenciálható $a$-ban és balról differenciálható $b$-ben.

</Definition>

<Definition id="definition.6.8" title="Differenciálhányados függvény">

Az $f$ függvény differenciahányados függvényének nevezzük és $f'$-vel jelöljük azt a függvényt, amelynek értelmezési tartománya azon pontok halmaza, ahol $f$ differenciálható és $\forall x \in \Domain_{f'}$ esetén a függvényérték $f'(x)$.

</Definition>

<Definition id="definition.6.9" title="Másodrendű derivált">

Ha az $f'$ függvény differenciálható az $x_0$ helyen, akkor a derivált az $f$ függvény $x_0$ pontbeli másodrendű deriváltjának nevezzük, jele:
$$
\odv[order = 2]{f(x_0)}{x}
    \quad\text{vagy}\quad
    f''(x_0)
    \text.
$$
Ha $f''(x_0)$ létezik, akkor azt is mondjuk, hogy $f$ kétszer differenciálható $x_0$-ban.

</Definition>

<Note>

Hasonlóan értelmezhetőek a többedrendű deriváltakat is. Harmadik derivált utána jelölés $f^{(k)}$.

</Note>

<Example>

## Példák függvények deriváltjára:

1.  $f(x) = x                 \phantom{cx^n}\rightarrow\quad                 \lim\limits_{x \rightarrow x_0} \dfrac{f(x)-f(x_0)}{x-x_0} =                 \lim\limits_{x \rightarrow x_0} \dfrac{x-x_0}{x-x_0} = 1$,

2.  $f(x) = x^n                 \phantom{cx}\rightarrow\quad                 \lim\limits_{x \rightarrow x_0} \dfrac{f(x)-f(x_0)}{x-x_0} =                 \lim\limits_{x \rightarrow x_0} \dfrac{x^n-x_0^n}{x-x_0} =$  
    $\phantom{f(x) = cxx^n\rightarrow\quad}                 \lim\limits_{x \rightarrow x_0}                 \dfrac{(x-x_0)(x^{n-1}+x^{n-2}x_0+\ldots+x_0^{n-1})}{x-x_0} =$  
    $\phantom{f(x) = cxx^n\rightarrow\quad}                 \lim\limits_{x \rightarrow x_0}                 \underbrace{x^{n-1}+x^{n-2}x_0+\ldots+x_0^{n-1}}_{n\text{ darab}} =                 n\cdot x_0^{n-1}$.

</Example>

<Statement>

## Függvény konstansszorosának deriváltja

Legyen $f: I \subset \Reals \rightarrow \Reals$ differenciálható az $x_0$ pontban, ekkor $c\cdot f$ is differenciálható $x_0$-ban és
$$
(c \cdot f(x_0))' = c\cdot f'(x_0)
    \text{, ahol }
    c \in \Reals
    \text.
$$

</Statement>

<Statement>

## Összegfüggvény deriváltja

Legyenek $f$ és $g$ differenciálható az $x_0 \in \Domain_f \cap \Domain_g$ pontban, ekkor $f + g$ is differenciálható $x_0$-ban és
$$
(f+g)'(x_0) = f'(x_0)+ g'(x_0)
    \text.
$$

</Statement>

<Statement>

## Szorzatfüggvény deriváltja

Legyenek $f$ és $g$ differenciálható az $x_0 \in \Domain_f \cap \Domain_g$ pontban, ekkor $f \cdot g$ is differenciálható $x_0$-ban és
$$
(f\cdot g)'(x_0) = f'(x_0)\cdot g(x_0) + f(x_0)\cdot g'(x_0)
    \text.
$$

</Statement>

<Statement>

## Hányadosfüggvény deriváltja

Legyenek $f$ és $g$ differenciálható az $x_0 \in \Domain_f \cap \Domain_g$ pontban, ekkor $f/g$ is differenciálható $x_0$-ban és:
$$
\frac{f'}{g'}(x_0) = \frac{
      f'(x_0)\cdot g(x_0) - f(x_0)\cdot g'(x_0)
    }{
      (g(x_0))^2
    }
    \text.
$$

</Statement>

<Statement>

## Láncszabály

Legyen $f$ differenciálható az $x_0 \in \Domain_f$ pontban és $g$ differenciálható az $f(x_0)\in \Domain_g$ pontban, ekkor $f \circ g$ is differenciálható $x_0$-ban és:
$$
(g \circ f(x_0))' = g'(f(x_0))\cdot f'(x_0)
    \text.
$$

</Statement>

<Definition id="definition.6.10" title="Inverz függvény">

Legyen $f: I \subset \Reals \rightarrow J \subset \Reals$ és $J:= f(I)$, kölcsönösen egyértelmű leképezése $I$-nek $f$-re, ekkore az $f^{-1} : J     \rightarrow I$ függvényt $f$ inverzének hívjuk, ha $\forall y \in J$ esetén $\exists x \in I$, hogy $y = f(x)$.

A függvény és inverze ellentétes irányú megfeleltetést ad ugyanazon két halmaz között:

$
  I \xrightarrow{\;f\;} J,
  \qquad
  J \xrightarrow{\;f^{-1}\;} I,
  \qquad
  f^{-1}(f(x))=x.
$

</Definition>

<Theorem id="theorem.6.2">

Legyen $f: [a;b] \rightarrow \Reals$ szigorúan monoton, folytonos függvény $[a;b]$ intervallumon, ekkor teljesülnek az alábbiak:

- $f$ értékkészlete:

  - $[f(a), f(b)]$, ha szigorúan monoton növekvő,

  - $[f(a), f(b)]$, ha szigorúan monoton csökkenő.

- $f$ invertálható.

- $f$ inverze is szogorúan monoton, éppen olyan értelemben, ahogyan $f$.

- az $f^{-1}$ folytonos $[f(a), f(b)]$-n vagy $[f(b), f(a)]$-n.

</Theorem>

<Statement>

Inverz függvény deriválási szabály: Legyen $f: I \subset \Reals \rightarrow     \Reals$ szigorúan monoton és folytonos az $x_0$ pont egy környezetében, továbbá $f'(x_0) \neq 0$, ekkor $f$ inverze is differenciálható a $b = f(x_0)$ pontban és:
$$
(f^{-1}(b))' = \frac{1}{f'(x_0)}
$$

</Statement>
