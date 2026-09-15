---
title: "Differenciálható függvények vizsgálata"
description: "Differenciálható függvények vizsgálata"
---

<Theorem id="theorem.6.8">

Ha $f : I \subset \Reals \rightarrow \Reals$ differenciálható a $J \subset I$ intervallumon, akkor ahhoz, hogy $f$ a $J$-n monoton növekvő legyen, szükséges és elégséges feltétel, hogy $\forall x \in J$ esetén $f'(x)\geq 0$ fennálljon.

</Theorem>

<Theorem id="theorem.6.9">

Ha $f : I \subset \Reals \rightarrow \Reals$ differenciálható a $J \subset I$ intervallumon, akkor ahhoz, hogy $f$ a $J$-n monoton csökkenő legyen, szükséges és elégséges feltétel, hogy $\forall x \in J$ esetén $f'(x)\leq 0$ fennálljon.

</Theorem>

<Note>

Ha $f'(x) \geq 0$ $\forall x \in J$ esetén és véges sok pont kivételével $f'(x)\geq 0$, akkor $f$ a $J$ intervallumon szigorúan monoton növekvő.

</Note>

<Theorem id="theorem.6.10">

Ha $f$ a $J$ intervallumon differenciálható, akkor ahhoz, hogy a $J$-n konvex legyen, szükséges és elégséges feltétel, hogy $f'(x)$ a $J$-n monoton növekvő legyen.

</Theorem>

<Theorem id="theorem.6.11">

Ha $f$ a $J$ intervallumon differenciálható, akkor ahhoz, hogy a $J$-n konkáv legyen, szükséges és elégséges feltétel, hogy $f'(x)$ a $J$-n monoton csökkenő legyen.

</Theorem>

<Theorem id="theorem.6.12">

Ha $f$ a $J$-n kétszer differenciálható, akkor ahhoz, hogy itt konvex legyen, szükséges és elégséges feltétel, hogy $f''(x)\geq 0$ $\forall x\in J$.

</Theorem>

<Theorem id="theorem.6.13">

Ha $f$ a $J$-n kétszer differenciálható, akkor ahhoz, hogy itt konkáv legyen, szükséges és elégséges feltétel, hogy $f''(x)\leq 0$ $\forall x\in J$.

</Theorem>

<Theorem id="theorem.6.14" title="Taylor-formula">

Legyen $f$ $[a; b]$ $\rightarrow \Reals$ és $n$ természetes szám, tegyük fel, hogy $f^{(n)}$ folytonos az $[a; b]$ intervallumon és differenciálható az $(a; b)$ intervallumon, ekkor $\forall x$ és $\alpha \in [a; b]$ mellett $\exists \xi$ $x$ és $\alpha$ között úgy, hogy
$$
f(x)=\sum\limits_{k=0}^n \frac{f^{(k)}(\alpha)}{k!}\cdot
    (x-\alpha)^k+\frac{f^{(n+1)}(\xi)}{(n+1)!}\cdot (x-\alpha)^{n+1}
    \text.
$$

</Theorem>

<Definition id="definition.6.11" title="Szélsőérték számítás">

Legyen $f$ $I \subset \Reals \rightarrow \Reals$ és $a\in I$, azt mondjuk, hogy:

- $f$-nek $a$ pontban lokális

  - maximuma van, ha $\exists \delta>0$, hogy $f(x)\leq f(a)$, ha $x\in K(a,\delta)$,

  - minimuma van, ha $\exists \delta>0$, hogy $f(x)\geq f(a)$, ha $x\in K(a,\delta)$.

- $f$-nek $a$ pontban

  - szigorú lokális maximuma van, ha $f(x)<f(a)$,

  - szigorú lokális minimuma van, $f(x)>f(a)$.

- $f$-nek $a$ pontban

  - abszolút maximuma van, ha $f(x)\leq f(a)$, $\forall x\in I$,

  - abszolút minimuma van, ha $f(x)\geq f(a)$, $\forall x\in I$.

- $f$-nek $a$ pontban

  - szigorú abszolút maximuma van, ha $f(x)<f(a)$, $\forall x\in I                         \setminus \{a\}$,

  - szigorú abszolút minimuma van, ha $f(x)>f(a)$, $\forall x\in I                         \setminus \{a\}$.

</Definition>

<Note>

Zárt intervallumon valós értékű folytonos függvény felveszi a szuprémumát, illetve infimumát függvényértékként.

</Note>

<Theorem id="theorem.6.15" title="Szélsőérték létezésének szükséges feltétele">

Ha $f$: $I\in\Reals \rightarrow \Reals$ differenciálható $I$-n és $f$-nek az $\alpha \in \inner I$ pontban szélsőértéke van, akkor $f'(\alpha)=0$.

</Theorem>

<Theorem id="theorem.6.16" title="Szélsőérték létezésének elégséges feltétele">

Ha $f: I \in\Reals \rightarrow \Reals$ differenciálható $I$-n és $f$-nek az $\alpha \in \inner I$, akkor ha $\exists r>0$, hogy:

- $f'(x)\geq0$, ha $x\in (\alpha-r;\alpha)$ és $f'(x)\leq0$, ha $x\in (\alpha;\alpha+r)$,  
  akkor $f$-nek lokális maximuma van $\alpha$-ban,

- $f'(x)\leq0$, ha $x\in (\alpha;\alpha+r)$ és $f'(x)\geq0$, ha $x\in (\alpha-r;\alpha)$,  
  akkor $f$-nek lokális minimuma van $\alpha$-ban.

</Theorem>

<Theorem id="theorem.6.17">

Legyen $f$ $[a; b] \rightarrow \Reals$ $a$-ban jobbról, $b$-ben balról differenciálható függvény.

- Ha $f'(b)>0$, akkor $f$-nek $b$-ben szigorú helyi maximuma van.

- Ha $f'(b)<0$, akkor $f$-nek $b$-ben szigorú helyi minimuma van.

- Ha $f'(a)>0$, akkor $f$-nek $a$-ban szigorú helyi minimuma van.

- Ha $f'(a)<0$, akkor $f$-nek $a$-ban szigorú helyi maximuma van.

</Theorem>

<Theorem id="theorem.6.18">

Legyen $f: I\subset \Reals \rightarrow \Reals$, $n>1$-szer differenciálható $I$-n, $\alpha \in \inner I$, ha
$$
f'(\alpha)=f''(\alpha)=\dots =f^{(n-1)}
    (\alpha)=0
    \quad \text{és}\quad
    f^{(n)}(\alpha)\neq 0
    \text,
$$
akkor, ha

- $n$ páratlan, akkor nincs szélsőérték $\alpha$-ban,

- $n$ páros, akkor van szélsőérték $\alpha$-ban, és

  - $f^{(n)}(b)>0$ esetén lokális minimuma van,

  - $f^{(n)}(b)<0$ esetén lokális maximuma van.

</Theorem>

<Theorem id="theorem.6.19">

Legyen $f: I\subset \Reals \rightarrow \Reals$, $n>1$-szer differenciálható az $I$-n, $\alpha \in \inner I$, valamint
$$
f'(\alpha)=f''(\alpha)=\dots =f^{(n-1)}
    (\alpha)=0
    \quad \text{és}\quad
    f^{(n)}(\alpha)\neq 0
    \text,
$$
akkor, ha

- $f^{(n)}(b)>0$ és $n$ páratlan, akkor szigorú helyi maximuma van $b$-ben,

- $f^{(n)}(b)>0$ és $n$ páros, akkor szigorú helyi minimuma van $b$-ben.

</Theorem>

<Definition id="definition.6.12">

Legyen $f : I \rightarrow \Reals$ és $\alpha \in \inner I$, $\alpha$-t $f$ inflexiós pontjának mondjuk, ha $\exists \delta >0$, hogy $f$ függvény $(\alpha,\alpha+ \delta)$ intervallumon konvex és az $(\alpha - \delta,     \alpha)$ intervallumon konkáv, vagy ha $(\alpha,\alpha+ \delta)$ intervallumon konkáv és az $(\alpha - \delta,\alpha)$ intervallumon konvex.

</Definition>

<Note>

Ha $f$ kétszer differenciálható és $\alpha$ inflexiós pont, akkor $f''(\alpha)=0$.

</Note>

<Definition id="definition.6.13">

Ha van olyan $y=A\cdot x+B$ lineáris függvény, melyre
$$
\lim\limits_{x \rightarrow \infty} f(x)-(A\cdot x+B)=0
    \text{, vagy }
    \lim\limits_{x \rightarrow -\infty} f(x)-(A\cdot x+B)=0
    \text,
$$
akkor az $y=A\cdot x+B$ egyenest az $f$ függvény aszimptotájának nevezzük.

</Definition>

<Note>

## Aszimptota létezésének szükséges feltétele:

Ha $f$-nek létezik a fenti definícióban szereplő aszimptotája, akkor
$$
\lim_{x \rightarrow \infty} \frac{f(x)}{x}=A
    \text,
    \quad\text{vagy}\quad
    \lim_{x \rightarrow -\infty} \frac{f(x)}{x}=A
    \text.
    \quad
    (A \in \Reals)
$$

</Note>

<Note>

## Aszimptota létezésének elégséges feltétele:

$$
\lim\limits_{x \rightarrow \infty} (f(x)-A\cdot x)\; \text{vagy}
    \lim\limits_{x \rightarrow \infty} (f(x)-A\cdot x)
$$
határérték végessége, ami a $B$ értékét adja.

</Note>

<Theorem id="theorem.6.20" title="L'Hôpital-szabály">

Legyenek $f$ és $g$ differenciálhatóak az $\alpha \in \Reals_b$ pont egy környezetében ($\alpha$-ban nem szükségképpen), továbbá $g(x) \neq 0$ és $g'(x) \neq 0$ és
$$
\lim\limits_{x \rightarrow \alpha} f(x) = \lim\limits_{x \rightarrow \alpha} g(x)=0
    \text{, vagy}
    \lim\limits_{x \rightarrow \alpha} |f(x)|=\lim\limits_{x \rightarrow \alpha}|g(x)|=\infty
    \text,
$$
$$
\text{ekkor, ha}
    \lim\limits_{x \rightarrow \alpha} \frac{f'(x)}{g'(x)}=B
    \text{, akkor }
    \lim\limits_{x \rightarrow \alpha} \frac{f(x)}{g(x)}=B
    \text.
$$

</Theorem>
