---
title: "Fogalmak, definíciók"
description: "Fogalmak, definíciók"
---

<Definition id="definition.3.1" title="Sorozat">

A pozitív egész számok halmazán értelmezett $a_n:\mathbb{N}\rightarrow     \Reals$ függvényt **valós sorozat**nak hívjuk, az $a_n:\mathbb{N}\rightarrow \mathbb{C}$ függvényt **komplex sorozat**nak nevezzük.

</Definition>

<Definition id="definition.3.2" title="Konvergencia">

Az $(a_n)$ sorozatot konvergensnek mondjuk, ha $\exists a \in \Reals$ valós szám, hogy $\forall \varepsilon > 0$ esetén $\exists N(\varepsilon)$ küszöbszám, hogy $|a_n - a| < \varepsilon$, ha $n > N(\varepsilon)$. Jelölése:
$$
\lim_{n \rightarrow \infty} a_n = a
    \text{, ahol $a$ a sorozat határértéke.}
$$

</Definition>

<Definition id="definition.3.3" title="Divergencia">

Az $(a_n)$ sorozatot divergensnek mondjuk, ha nem konvergens.

</Definition>

<Note>

Egy konvergens sorozatnak pontosan egy határértéke van.

</Note>

<Note>

Szükséges és elégséges feltételek egy sorozat konvergenciájára.

Következmény: ha egy sorozatban véges sok elemet megváltoztatunk, vagy egy sorozathoz véges sok elemet hozzáveszünk, vagy belőle véges sok elemet elveszünk, akkor az sem a sorozat határértékét, sem a konvergenciáját nem változtatja meg.

</Note>

<Definition id="definition.3.4" title="Sorozat korlátossága">

- Az $(a_n)$-t **alulról korlátos**nak nevezzük, ha értékkészlete alulról korlátos.

- Az $(a_n)$-t **felülről korlátos**nak nevezzük, ha értékkészlete felülről korlátos.

- Az $(a_n)$ sorozat **korlátos**, ha alulról és felülről is korlátos.

</Definition>

<Note>

Konvergens sorozat korlátos. (Az állítás megfordítása nem igaz.)

</Note>

<Definition id="definition.3.5" title="Műveletek sorozatokkal">

Legyenek $(a_n)$ és $(b_n)$ sorozatok, $\lambda \in \Reals$, ekkor:

- $(a_n) + (b_n) := (a_n + b_n)$,

- $\lambda \cdot (a_n) := (\lambda \cdot a_n)$,

- $(a_n)\cdot (b_n):=(a_n\cdot b_n)$,

- $(a_n) / (b_n) = (a_n / b_n)$, ha $b_n \neq 0$.

</Definition>

<Note>

Legyenek $(a_n)$ és $(b_n)$ konvergens sorozatok $a_n \rightarrow a$, $b_n \rightarrow b$, ha $n \rightarrow \infty$ és legyen ${\lambda \in       \Reals}$, ekkor ezen sorozatok összege, számszorosa, szorzata és hányadosa is konvergens, és:

- $a_n + b_n \rightarrow{a + b}$,

- $\lambda \cdot a_n \rightarrow \lambda \cdot a$,

- $a_n \cdot b_n\rightarrow a \cdot b$,

- $(a_n / b_n) \rightarrow (a / b)$, ha $b \neq 0$

</Note>

<Note>

Konvergens sorozat jeltartó, ha
$$
\lim_{n \rightarrow\infty} a_n=a\neq 0
    \text,
$$
akkor $\exists N_0$ index, hogy $\sgn a_n = \sgn a$, ha $n > N_0$.

Következmény:
$$
\lim_{n \rightarrow \infty} a_n = a
    \text{ és }
    \lim_{n \rightarrow \infty} b_n = b
    \text{ és }
    a_n \geq b_n
    \quad \Rightarrow \quad
    a \geq b
    \text,
$$
azaz a határátmenet rendezéstartó.

</Note>

<Theorem id="theorem.3.1" title="Rendőr tétel">

Tegyük fel, hogy $(a_n)$, $(b_n)$ és $(x_n)$ sorozatokra teljesül, hogy $a_n     \leq x_n \leq b_n : \forall n$-re vagy $n > N_0$, továbbá
$$
\lim_{n \rightarrow \infty} a_n = \lim_{n \rightarrow \infty} b_n = a
    \text{, ekkor:}
    \lim_{n \rightarrow \infty} x_n = a
    \text.
$$

</Theorem>

<Note>

Ha $(a_n)$ és $(b_n)$ sorozatok nullsorozatok, akkor a rendőr tételből következik, hogy szorzatuk is nullsorozat.

</Note>

<Note>

Ha $(a_n)$ sorozat konvergens és határértéke $a$, akkor
$$
\lim\limits_{n \rightarrow \infty} |a_n|=|a|
    \text.
$$
Visszafelé ez nem igaz (csak nullsorozatokra).

</Note>

<Definition id="definition.3.6" title="Kibővített valós számok halmaza">

Az $\Reals_b := \Reals \cup \{-\infty; \infty\}$ halmazt kibővített valós számok halmazának nevezzük.

</Definition>

<Definition id="definition.3.7" title="Sorozat határértéke $\pm\infty$">

Azt mondjuk, hogy az $(a_n)$ határértéke $\infty$, ha $\forall K \in \Reals$ esetén $\exists N_K$ : $a_n > K$, ha $n > N_K$.

Azt mondjuk, hogy az $(a_n)$ határértéke $-\infty$, ha $\forall K \in \Reals$ esetén $\exists N_K$ : $a_n < K$, ha $n > N_K$.

</Definition>

<Definition id="definition.3.8" title="Sorozat monotonitása">

Az $(a_n)$ sorozat monotonitása:

- monoton növekvő, ha $a_n \geq a_{n-1}$,

- monoton csökkenő, ha $a_n \leq a_{n-1}$,

- szigorúan monoton növekvő, ha $a_n > a_{n-1}$,

- szigorúan monoton csökkenő, ha $a_n < a_{n-1}$.

</Definition>

<Note>

Ha az $(a_n)$ monoton növekvő, akkor alulról korlátos, illetve ha monoton csökkenő, akkor felülről korlátos.

</Note>

<Statement>

1.  Monoton, korlátos sorozat konvergens.

2.  Monoton, nem korlátos sorozatnak van határértéke.

3.  Ha egy sorozat divergens, akkor vagy nem létezik a határértéke, vagy a határértéke $\infty$ vagy $-\infty$.

</Statement>

<Definition id="definition.3.9" title="Részsorozat">

$!(k_n)$ a természetes számok egy szigorúan növekvő sorozata és $(a_n)$ egy valós számsorozat, ekkor a $b_n = a_{k_n}$ sorozatot az $a_n$ sorozat $k_n$ indexsorozathoz tartozó részsorozatának nevezzük.

</Definition>

<Theorem id="theorem.3.2" title="Sorozat határértékének létezése">

Ha az $a_n$ sorozatnak van határértéke, akkor bármely részsorozatának is van határértéke, és ez a két határérték megegyezik.

</Theorem>

<Theorem id="theorem.3.3" title="Monoton részsorozat létezése">

Bármely sorozatnak van monoton részsorozata.

</Theorem>

<Theorem id="theorem.3.4" title="Bolzano--Weierstrass-tétel">

Minden korlátos sorozatnak van konvergens részsorozata.

</Theorem>

<Definition id="definition.3.10" title="Limesz szuperior és inferior">

Az $(a_n)$ sorozat limesz szuperiorjának nevezzük az alábbi mennyiséget:
$$
\lim \sup a_n
    = \overline{\lim} \; a_n
    := \lim_{n \rightarrow \infty} \sup \{\;
    a_{n + 1}; a_{n + 2}; \dots
    \;\}
    \text.
$$

Az $(a_n)$ sorozat limesz inferiorjának nevezzük az alábbi mennyiséget:
$$
\lim \inf a_n
    = \underline{\lim} \; a_n
    := \lim_{n \rightarrow \infty} \inf \{\;
    a_{n + 1}; a_{n + 2}; \dots
    \;\}
    \text.
$$

</Definition>

<Definition id="definition.3.11" title="Cauchy-sorozat">

Az $(a_n)$ sorozatot Cauchy-sorozatnak nevezzük, ha $\forall \varepsilon > 0$ esetén $\exists N(\varepsilon)$, hogy $|a_n - a_m| < \varepsilon$, ha $n, m >     N(\varepsilon)$.

</Definition>

<Theorem id="theorem.3.5" title="Cauchy-féle konvergencia kritérium">

Az $(a_n)$ konvergens $\Leftrightarrow$ ha Cauchy-sorozat.

</Theorem>
