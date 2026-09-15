---
title: "Határozatlan integrál"
description: "Határozatlan integrál"
---

<Definition id="definition.7.1" title="Primitív függvény">

Legyen $f: I \rightarrow \Reals$, ekkor az $F : I \rightarrow \Reals$ függvényt az $f$ függvény primitív függvényének nevezzük $I$-n, ha $F$ differenciálható $I$-n és $F'(x) = f(x) \quad \forall x \in I$.

</Definition>

<Note>

Ha az $F$ függvény primitív függvénye az $f$-nek, akkor $G(x) = F(x) + C$ ugyancsak primitív függvénye az $f$-nek, ahol $C \in \Reals$.

</Note>

<Note>

Ha $F$ és $G$ is $f$ primitív függvényei, akkor $\exists C \in \Reals$, hogy $F(x) = G(x) + C$.

</Note>

<Definition id="definition.7.2" title="Határozatlan integrál">

Az $f$ primitív függvényeinek összességét $f$ határozatlan integráljának nevezzük az $I$-n. Jelölése:
$$
\int f(x) \dd x = F(x) + C
    \text.
$$

</Definition>

<BlueBox>

Az $\; 1,\; x,\; e^x,\; \ln x,\; \sin x,\; \arcsin x \;$ függvényekből a négy alapművelet, az összetett függvényképzés és a nyílt halmazra való leszűkítés véges sokszori alkalmasával keletkező függvényeket **elemi függvényeknek** nevezzük.

A $\cos x$, $\tan x$, $\cot x$, $\sinh x$, $\cosh x$, $\tanh x$, $\coth x$, $\arccos x$, $\arctan x$, $\arccot x$, $\arccosh x$, $\arccosh x$, $\arctanh     x$, $\arccoth x$, $x^\alpha$, polinom, racionális függvények elemi függvények.

A négy alapművelet, az összetett függvényképzés, a nyílt halmazra való leszűkítés megőrzi a differenciálhatóságot, tehát az elemi függvények az értelmezési tartományuk belső pontjában differenciálhatóak. A primitív függvények megkeresése azonban kivezet az elemi függvények köréből, ez indokolja az **elemien integrálható függvények** elnevezés bevezetését.

**Elemien integrálható függvény** olyan elemi függvény, amelynek primitív függvénye ugyancsak elemi függvény.

Elemien integrálható függvények például:
$$
x^2 \text, \quad
    \frac{1}{x + 2} \text, \quad
    \frac{1}{x^2 + 1} \text.
$$

Nem elemien integrálható függvény például:
$$
e^{-x^2} \text, \quad
    \frac{\sin x}{x} \text, \quad
    \frac{1}{\ln x} \text.
$$

</BlueBox>
