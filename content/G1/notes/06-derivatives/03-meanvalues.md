---
title: "Középértéktételek"
description: "Középértéktételek"
---

<Theorem id="theorem.6.3" title="Rolle-tétel">

Legyen $f$ folytonos $[a; b]$ intervallumon és differenciálható $(a; b)$ intervallumon, továbbá $f(a) = f(b) = 0$, ekkor létezik $\xi \in (a; b)$, melyre teljesül, hogy
$$
f'(\xi) = 0
    \text.
$$

<Proof>

</Proof>

</Theorem>

<Theorem id="theorem.6.4" title="Lagrange-féle középértéktétel">

Legyen $f : I \subset R \to R$ folytonos $[a; b]$ intervallumon és differenciálható $(a; b)$ intervallumon, ekkor létezik olyan $\delta \in     (a; b)$ hogy
$$
f'(\delta) = \frac{f(b)-f(a)}{b-a}
    \text.
$$

<Proof>

</Proof>

</Theorem>

<Theorem id="theorem.6.5">

Ha $f$ folytonos $[a; b]$ intervallumon és differenciálható $(a; b)$ intervallumon, továbbá $\forall x \in (a; b)$ esetén $f'(x) = 0$, akkor $f(x) = c$ (a függvény konstans).

</Theorem>

<Theorem id="theorem.6.6">

Ha $f$ és $g$ folytonos az $[a; b]$ intervallumon és differenciálható a $(a; b)$ intervallumon, továbbá $f'(x) = g'(x) \; \forall x\in (a; b)$-re, akkor
$$
g(x) = f(x) +c
    \text.
$$

</Theorem>

<Theorem id="theorem.6.7" title="Cauchy-féle középértéktétel">

Legyen $f$ és $g$ függvények folytonosak $[a; b]$ intervallumon és differenciálhatóak $(a; b)$ intervallumon, valamint tegyük fel, hogy $g'(x)     \neq 0$ bármely $x \in (a; b)$ esetén. Ekkor létezik olyan $\eta \in     (a; b)$ hogy
$$
\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(\eta)}{g'(\eta)}
    \text.
$$

<Proof>

</Proof>

</Theorem>

<Note>

$g(x) = x$ választással speciális esetként visszakapjuk a Lagrange-féle középértéktételt.

</Note>

<Note>

A Cauchy-féle középértéktétel nem ekvivalens azzal, hogy külön-külön az $f$ és $g$ függvényekre alkalmazzuk a Lagrange-féle középértéktételt, majd vesszük ezek hányadosát.

</Note>
