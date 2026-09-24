---
title: "Folytonosság"
description: "Folytonosság"
---

<Definition id="definition.5.6" title="Folytonosság">

Egy $f : \Domain_f \rightarrow \Reals$ függvény folytonos egy $a \in     \Domain_f$ pontban, ha $\forall \varepsilon > 0$ esetén $\exists \delta(     \varepsilon) > 0$, hogy $|f(x) - f(a)| < \varepsilon$, ha $|x - a| < \delta(     \varepsilon)$.

</Definition>

<Statement>

A folytonosság definíciója ekvivalens a következővel: $f$ függvény folytonos egy ${a \in \Domain_f}$ pontban, ha
$$
\lim_{x \to a} f(x) = f(a)
    \text.
$$

</Statement>

<Note>

Ha $f$ és $g$ folytonosak az $a \in \Domain_f \cap \Domain_g$ pontban, akkor $f + g$, $f - g$, $f \cdot g$ és $g \neq 0$ esetén $f / g$ is folytonosak az $a$ pontban.

</Note>

<Note>

Ha $f$ folytonos az $a \in \Domain_f$ pontban és $g$ folytonos az $f(a) \in     \Domain_g$ pontban, akkor $g \circ f$ is folytonos az $a$ pontban.

</Note>

<Definition id="definition.5.7" title="Baloldali folytonosság">

Az $f$ függvény balról folytonos az értelmezési tartományának egy $a$ pontjában, ha a bal oldali határértéke megegyezik az adott pontbeli függvényértékkel, vagyis:
$$
\lim_{\phantom{{}^{-}} x \rightarrow a^-} f(x) = f(a)
    \text.
$$

</Definition>

<Definition id="definition.5.8" title="Jobboldali folytonosság">

Az $f$ függvény jobbról folytonos az értelmezési tartományának egy $a$ pontjában, ha a jobb oldali határértéke megegyezik az adott pontbeli függvényértékkel, vagyis:
$$
\lim_{\phantom{{}^{+}} x \rightarrow a^+} f(x) = f(a)
    \text.
$$

</Definition>

<Note>

Az $f$ függvény folytonos az értelmezési tartományának egy pontjában, ha ott jobbról és balról is folytonos.

</Note>

<Definition id="definition.5.9" title="Függvény folytonossága nyílt intervallumon">

Az $f$ függvény folytonos az $(a; b)$ intervallumon, ha ennek az intervallumnak minden pontjában folytonos.

</Definition>

<Definition id="definition.5.10" title="Függvény folytonossága zárt intervallumon">

Az $f$ függvény folytonos az $[a; b]$ intervallumon, ha folytonos az $(a; b)$ intervallumon, valamint jobbról folytonos az $a$-ban, illetve balról folytonos a $b$-ben.

</Definition>

<Theorem id="theorem.5.4" title="Bolzano-tétel">

Ha az $f$ folytonos az $[a;b]$ intervallumon, akkor itt felvesz minden $f(a)$ és $f(b)$ közé eső értéket.

</Theorem>

<Note>

A Bolzano-tétel megfordítása nem igaz.

</Note>

<Note>

A Bolzano-tételből következik, hogy ha valamely $[a; b]$ intervallumon folytonos függvény esetén $f(a) \cdot f(b) < 0$, akkor $\exists \xi \in     (a;b)$, hogy $f(\xi) = 0$.

</Note>

<Theorem id="theorem.5.5">

Ha az $f$ függvény folytonos az $[a; b]$ intervallumon, akkor ott korlátos. (Zárt intervallumon folytonos függvény korlátos.)

</Theorem>

<Definition id="definition.5.11">

Legyen $T \subset \Domain_f$ és $H := f(T) \subset \Range_f$

- Ha $H$-nak van legnagyobb értéke, akkor ezt az f függvény $T$-n felvett maximumának mondjuk.

- Ha $H$-nak van legkisebb értéke, akkor ezt az f függvény $T$-n felvett minimumának mondjuk.

</Definition>

<Theorem id="theorem.5.6" title="Weierstrass-tétel">

Zárt intervallumon folytonos függvény felveszi a szélsőértékeit függvényértékként.

</Theorem>

<Definition id="definition.5.12" title="Egyenletes folytonosság">

Az $f$ függvény egyenletesen folytonos a $H$ halmazon, ha $\forall     \varepsilon > 0$ esetén $\exists \delta(\varepsilon)$, hogy ${|f(x_1) -       f(x_2)| < \varepsilon}$, ha $|x_1 - x_2| < \delta(\varepsilon)$, $\forall x_1, x_2 \in H$ esetén.

</Definition>

<Theorem id="theorem.5.7">

Zárt intervallumon folytonos függvény ott egyenletesen folytonos.

</Theorem>

<Theorem id="theorem.5.8">

Zárt intervallumon folytonos szigorúan monoton függvény inverze ugyancsak folytonos és az eredeti függvénnyel megegyező monotonitású.

</Theorem>

<Theorem id="theorem.5.9">

$$
\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1
$$

</Theorem>
