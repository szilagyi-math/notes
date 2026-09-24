---
title: "Határozott integrál"
description: "Határozott integrál"
---

## A Riemann-integrál

<Definition id="definition.7.3" title="Intervallum beosztása">

Legyen $a < b \in \Reals$, ekkor az $[a;b]$ egy beosztásán egy
$$
d := \Big\{ \;
    x_i \in \Reals
    \; | \;
    i = 0; 1; \dots; n,
    a = x_0 < x_1 < \dots < x_n  = b
    \; \Big\}
$$
ponthalmazt értjük. Az $x_i$ a beosztás egy osztópontja, az $[x_{i - 1}; x_i]$ a beosztás egy részintervalluma, $||d|| := \max \{x_1 - x_0, x_2 - x_1, \dots     x_n - x_{n-1} \}$ a beosztás finomsága.

</Definition>

<Note>

A $d_2$ a $d_1$ beosztás **továbbosztása**, ha $d_1 \subset d_2$. A $d_1     \cup d_2$ a két beosztás **egyesítése**. Azt mondjuk, hogy a $d_2$ beosztása **finomabb**, mint a $d_1$, ha $||d_2|| < ||d_1||$.

</Note>

<Note>

Legyen $(d_k)$, ahol $k \in \mathbb N$, az $[a; b]$ intervallum beosztásának egy sorozata. A $(d_k)$-t egy normális beosztás sorozatnak hívjuk, ha $||d_k||     \rightarrow 0$, ha $k \rightarrow \infty$. A $(d_k)$ normális beosztás sorozatot minden határon túl finomodó beosztás sorozatnak is nevezzük.

</Note>

<Definition id="definition.7.4" title="Alsó és felső integrálközelítő összeg">

Legyen $f: [a;b] \rightarrow \Reals$ korlátos függvény, valamint $d$ a függvény értelmezési tartományának egy beosztása,
$$
\begin{aligned}

    m_i & := \inf & \; & \Big\{\; f(x) \; | \; x \in [x_{i}; x_{i+1}] \;\Big\}
    \text,
    \\
    M_i & := \sup & \; & \Big\{\; f(x) \; | \; x \in [x_{i}; x_{i+1}] \;\Big\}
    \text.
  
\end{aligned}
$$
Az $f$ függvény $d$ beosztásához tartozó alsó és felső integrálközelítő összege
$$
\begin{aligned}
    s(f, d) & := \sum_{i=0}^{n-1} m_i \cdot (x_{i+1} - x_i)
    \text,
    \\
    S(f, d) & := \sum_{i=0}^{n-1} M_i \cdot (x_{i+1} - x_i)
    \text.
  
\end{aligned}
$$

</Definition>

<Definition id="definition.7.5" title="Közbeeső érték vektorhoz tartozó integrálközelítő összeg">

Legyen $t_i \in [x_i; x_{i +1}]$. Ekkor a $t(t_1, t_2, \dots, t_n)$ neve közbeeső érték vektor, a hozzá tartozó integrálközelítő összeg
$$
\sigma(f,d,t) := \sum_{i=0}^{n-1} f(t_i) (x_{i + 1} - x_i)
    \text.
$$
Az oszcillációs összeg
$$
o(f,d) := S(f,d) - s(f,d)
    \text.
$$

</Definition>

<BlueBox>

Legyen $f: [a;b] \rightarrow \Reals$ korlátos függvény:

1.  Ha $d$ az $[a;b]$ intervallum egy beosztása, valamint $t$ tetszőleges közbeeső érték vektor, akkor
$$
s(f,d) \leq \sigma(f,d,t) \leq S(f,d)
                \text.
$$

2.  Ha $d_2 \subset d_1$, azaz $d_2$ a $d_1$ továbbosztása, akkor
$$
s(f,d_1) \leq s(f,d_2) \leq S(f,d_2) \leq S(f,d_1)
                \text.
$$

3.  Ha $d_1$ és $d_2$ tetszőleges beosztása az $[a;b]$ intervallumnak, akkor
$$
s(f,d_1) \leq S(f,d_2)
                \text.
$$

</BlueBox>

<Note>

Ha az $f: [a;b] \rightarrow \Reals$ függvény korlátos, azaz $\exists K$, hogy $|f(x)| \leq K$, ekkor
$$
s(f, d)
    
    \leq \sum_{i=0}^{n-1} |m_i| \cdot (x_{i+1} - x_i)
    \leq \sum_{i=0}^{n-1} K \cdot (x_{i+1} - x_i)
    
    = K \cdot (b - a)
    \text.
$$

</Note>

<Definition id="definition.7.6" title="Darboux-féle alsó és felső integrál">

Legyen $f: [a;b] \rightarrow \Reals$ korlátos függvény.

Az $\underline{I} := \sup \{ s(f, d) \}$ valós számot az $f$ függvény Darboux-féle alsó integráljának mondjuk. Jele:
$$
\underline I =
    \underline{\int}_{a}^{b} f
    \text.
$$

Az $\overline{I} := \inf \{ S(f, d) \}$ valós számot az $f$ függvény Darboux-féle felső integráljának mondjuk. Jele:
$$
\overline I =
    \overline{\int}_{a}^{b} f
    \text.
$$

</Definition>

<Definition id="definition.7.7" title="Riemann-integrálhatóság">

Az $f$ függvényt Riemann-integrálhatónak nevezzük $[a; b]$-n, ha a Darboux-féle alsó és felső integrálja az $[a; b]$ intervallumon egyenlő. Ezt a közös értéket az $f$ függvény Riemann-integráljának mondjuk. Jele:
$$
I
    = \underline I
    = \overline I
    = \int_{a}^{b} f
$$
ahol $\underline I$ és $\overline I$ a függvény alsó és felső Darboux integrálja.

</Definition>

<Theorem id="theorem.7.1">

Legyen $f: [a;b] \rightarrow \Reals$ korlátos függvény, ekkor $\forall     \varepsilon > 0$ esetén $\exists \delta(\varepsilon)$, hogy ha az $[a; b]$ intervallum egy beosztására teljesül, hogy $||d|| < \delta(\varepsilon)$, akkor:

1.  $0 < \underline I = |s(f, d) - I| < \varepsilon$,

2.  $0 < \overline I = |S(f, d) - I| < \varepsilon$,

ahol $\underline I$ és $\overline I$ a függvény alsó és felső Darboux integrálja.

</Theorem>

<Note>

Ha az $f: [a;b] \rightarrow \Reals$ függvény korlátos, $(d_k)$ pedig az $[a; b]$ intervallum normál beosztása, akkor

1.  $\displaystyle \lim_{k \rightarrow \infty} s(f, d_k) = \underline I$

2.  $\displaystyle \lim_{k \rightarrow \infty} S(f, d_k) = \overline I$

</Note>

<Note>

Ha az $f: [a;b] \rightarrow \Reals$ függvény Riemann-integrálható az $[a;b]$ intervallumon, $(d_k)$ normális beosztássorozat, $(t_k)$ pedig tetszőleges körbeeső érték vektor, akkor
$$
\sigma(f, d_k, t_k) \rightarrow
    \underline I =
    \overline I =
    \int_{a}^{b} f
    \text{, ha }
    k \rightarrow \infty
    \text.
$$

</Note>

<Note>

## Riemann-integrálhatóság jelölése:

$$
\mathcal R [a; b] = \Big\{\;
    f: [a;b] \rightarrow \Reals
    \text{, }
    f
    \text{ Riemann-integrálható az }
    [a; b]
    \text{-n}
    \;\Big\}
    \text.
$$

</Note>

<Theorem id="theorem.7.2" title="Első kritérium (oszcillációs összeggel)">

Legyen $f: [a; b] \rightarrow \Reals$ korlátos függvény, $f \in \mathcal R       [a; b]$ akkor és csak akkor, ha $\forall \varepsilon > 0$ esetén létezik olyan $d$ beosztása az $[a; b]$ intervallumnak, hogy $o(f, d) <     \varepsilon$.

</Theorem>

<Theorem id="theorem.7.3" title="Második kritérium (integrálközelítő összeggel)">

Legyen $f: [a; b] \rightarrow \Reals$ korlátos függvény, $f \in \mathcal R       [a; b]$ akkor és csak akkor, ha $\exists I \subset \Reals$, hogy $\forall     \varepsilon$ esetén $\exists \delta(\varepsilon)$, hogy ha $||d_k|| <     \delta(\varepsilon)$, $t(t_1, t_2, \dots, t_n)$ tetszőleges közbeeső érték vektor, akkor $|\sigma(f, d_k, t_k) - I| < \varepsilon$.

</Theorem>

<Theorem id="theorem.7.4" title="Harmadik kritérium (normális beosztás sorozattal)">

Legyen $f: [a; b] \rightarrow \Reals$ korlátos függvény, $f \in \mathcal R       [a; b]$ akkor és csak akkor, ha $\forall (d_k)$ és $\forall (t_k)$ esetén:
$$
(d_k) \text{ konvergens, valamint }
    \lim_{k \rightarrow \infty} \sigma(f, d_k, t_k) = \int_{a}^{b} f
    \text.
$$

</Theorem>

<Theorem id="theorem.7.5" title="Monoton függvény integrálhatósága">

Korlátos, zárt intervallumon monoton függvény ott Riemann-integrálható.

</Theorem>

<Theorem id="theorem.7.6" title="Korlátos függvény integrálhatósága">

Korlátos, zárt intervallumon folytonos függvény ott Riemann-integrálható.

</Theorem>

<Definition id="definition.7.8" title="Nullmértékű halmaz">

Egy $H \subset \Reals$ halmazt Lebesgue szerint nullmértékűnek nevezünk, ha lefedhető megszámlálhatóan sok tetszőlegesen kicsi összhosszúságú intervallumrendszer uniójával, azaz $\forall \varepsilon > 0$ esetén $\exists     I_k$, ahol $k \in A$ (megszámlálható halmaz), hogy
$$
H \subset \bigcup_{k \in A} I_k
    \text{ és }
    \sum_{k \in A} |I_k| < \varepsilon
    \text.
$$

Nullmértékű halmazok tulajdonságai:

1.  véges halmaz Lebesgue szerint nullmértékű,

2.  megszámlálhatóan végtelen halmaz Lebesgue szerint nullmértékű,

3.  létezik kontinuum számosságú Lebesgue szerint nullmértékű halmaz, (pl. Cantor-féle halmaz,)

4.  Lebesgue szerint nullmértékű halmaz minden részhalmaza is nullmértékű,

5.  megszámlálhatóan sok Lebesgue szerint nullmértékű halmaz uniója ugyancsak Lebesgue szerint nullmértékű.

</Definition>

<Theorem id="theorem.7.7" title="Lebesgue tétele">

Egy zárt intervallumon korlátos függvény ott Riemann-integrálható akkor és csak akkor, ha a függvény egy Lebesgue szerint nullmértékű halmaz pontjaitól eltekintve folytonos, ilyenkor azt is mondjuk, hogy a függvény majdnem folytonos.

</Theorem>

<Theorem id="theorem.7.8" title="A Riemann-integrál tulajdonságai">

Ha $f, g \in \mathcal R[a;b]$, $\lambda \in \Reals$, $c \in (a; b)$, akkor

|  |  |
|:---|:---|
| additív: | $\displaystyle \int_a^b f + g \dd x = \int_a^b f \dd x + \int_a^b g \dd x$, |
| homogén: | $\displaystyle \int_a^b \lambda \cdot f \dd x = \lambda \cdot \int_a^b f \dd x$, |
| additív az integrációs intervallumra: | $\displaystyle \int_a^b f \dd x = \int_a^c f \dd x + \int_c^b f \dd x$. |

</Theorem>

<Theorem id="theorem.7.9" title="Integrálszámítás alaptétele">

Ha $f \in \mathcal R [a; b]$, valamint $f$ korlátos ($\forall x \in [a; b]$ esetén $m \leq     f(x) \leq M$), akkor
$$
m(b - a) \leq \int_a^b f \leq M(b - a)
$$

1.  Ha $f > 0$, $f \in \mathcal R [a; b]$, akkor $\displaystyle \int_a^b f                 > 0$.

2.  Ha $f \geq g$, $f, g \in \mathcal R [a; b]$, akkor $\displaystyle                 \int_a^b f \geq \int_a^b g$.

3.  Ha $f \in \mathcal R [a; b]$, akkor $|f| \in \mathcal R [a; b]$ és $\displaystyle \left| \int_a^b f \right| \leq \int_a^b |f|$

</Theorem>

<Theorem id="theorem.7.10" title="Középértéktétel folytonos függvényekre">

Ha $f: [a; b] \rightarrow \Reals$ folytonos az \[a; b\] intervallumon, akkor $\exists c \in [a; b]$ hogy:
$$
\int_a^b f = f(c) \cdot (b - a)
    \text.
$$

</Theorem>

## A Newton-Leibniz-formula

<Definition id="definition.7.9">

Ha $f \in \mathcal R [a; b]$, akkor
$$
\int_a^a f := 0
    \quad \text{ és } \quad
    \int_a^b f = - \int_b^a f
    \text.
$$

</Definition>

<Definition id="definition.7.10" title="Területmérő függvény">

Az $f$ függvény területmérő függvénye:
$$
F(x) := \int_a^x f(t) \dd t
    \text.
$$

</Definition>

<Theorem id="theorem.7.11">

Legyen $f \in \mathcal R [a; b]$ és $F$ az $f$ függvény területmérő függvénye, akkor $F$ egyenletesen folytonos az $[a; b]$ intervallumon és ha $f$ folytonos az $x$ pontban és $F$ differenciálható az $x$ pontban, akkor $F'(x) = f(x)$.

</Theorem>

<Theorem id="theorem.7.12" title="Newton-Leibniz-formula">

Legyen $f \in \mathcal R [a; b]$ $F: [a; b] \rightarrow \Reals$ folytonos az $[a; b]$-n és differenciálható az $(a; b)$-n, valamint $F'(x) = f(x)$ $\forall     x \in [a; b]$, ekkor
$$
\int_a^b f(x) \dd x = F(b) - F(a) = F(x) \Big|_a^b = \Big[ F(x) \Big]_a^b
    \text.
$$

</Theorem>

<Note>

Ha az $G$ függvény az $f$ függvény primitív függvénye, akkor az alábbi egyenlőség is igaz:
$$
G(b) - G(a) = \int_a^b f(x) \dd x
    \text.
$$

</Note>

<Theorem id="theorem.7.13" title="Helyettesítéses integrálás">

Tegyük fel, hogy $g: [a; b] \rightarrow [c; d]$ és $f: [c; d] \rightarrow     \Reals$, továbbá $g'(x)$ folytonos az $[a; b]$-n $f$ pedig folytonos a $[c; d]$-n. Ekkor:
$$
\int_a^b f(g(x)) \cdot g'(x) \dd x = \int_{g(a)}^{g(b)} f(t) \dd t
    \text.
$$

</Theorem>

## Improprius integrál

<Definition id="definition.7.11" title="Impropius Riemann-integrál">

Legyen $a, b \in  \Reals_b$, $a < b$, és tegyük fel, hogy $\forall [x; y]     \subset (a; b)$ esetén $f \in \mathcal R [x; y]$ ($x, y \in \Reals$), és $\exists c \in (a; b)$, hogy
$$
\lim_{x \rightarrow a} \int_x^c f(t) \dd t
    \quad \text{ és } \quad
    \lim_{y \rightarrow b} \int_c^y f(t) \dd t
$$
határértékek végesek, ekkor az
$$
I
    = \lim_{x \rightarrow a} \int_x^c f(t) \dd t
    + \lim_{x \rightarrow b} \int_c^x f(t) \dd t
$$
összeget az $f$ függvény improprius integráljának nevezzük az $[a; b]$-n.

Azt is mondjuk, hogy az $f$ függvény improprius Riemann-integrálja konvergens az $(a; b)$-n.

Ha az első feltétel teljesül, viszont a határértékek divergensek, akkor az $f$ függvény improprius Riemann-integrálja divergens.

</Definition>

<Note>

Az integrál értéke nem függ $c$ megválasztásától.

</Note>

<Note>

Ha az $f$ nem korlátos a $\gamma \in (a;b)$ pont környezetében, akkor az $[a; b]$-t két részre bontjuk úgy, hogy $\gamma$ osztópont legyen:
$$
\int_a^b f = \int_a^\gamma f + \int_\gamma^b f
    \text.
$$

</Note>

<Example>

Számítsuk ki az alábbi integrálok értékét:
$$
\int_0^\infty e^{-x} \dd x
    \text, \quad
    \int_1^\infty \frac{1}{x^2} \dd x
$$
Az első integrál értéke:
$$
\int_0^\infty e^{-x} \dd x
    = \lim_{a \rightarrow \infty} \int_0^a e^{-x} \dd x
    = \lim_{a \rightarrow \infty} \Big[ -e^{-x} \Big]_0^a
    = \lim_{a \rightarrow \infty} -e^{-a} + e^0
    = 0 + 1
    = 1
    \text.
$$
A második integrál értéke:
$$
\int_1^\infty \frac{1}{x} \dd x
    = \lim_{a \rightarrow \infty} \int_1^a \frac{1}{x^2} \dd x
    = \lim_{a \rightarrow \infty} \left[ -\frac{1}{x} \right]_1^a
    = \lim_{a \rightarrow \infty} -\frac{1}{a} + 1
    = 0 + 1
    = 1
    \text.
$$

</Example>
