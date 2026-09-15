---
title: "Fogalmak, definíciók"
description: "Fogalmak, definíciók"
---

<Definition id="definition.4.1" title="Numerikus sor">

$!(a_n) : \mathbb{N} \rightarrow \Reals$ numerikus sorozat, amelyből képezzük az alábbi sorozatot:
$$
\begin{aligned}
    s_1 & = a_1                                          \\
    s_2 & = a_1 + a_2                                    \\
        & \vdots                                         \\
    s_n & = a_1 + a_2 + \dots + a_n = \sum_{i=1}^{n} a_i \\
  
\end{aligned}
$$
Az így képzett $(s_n)$-t az $(a_n)$ sorozatból képzett numerikus sornak mondjuk. Jele:
$$
s_n = \sum a_n
    \text,
$$
ahol $a_n$ a sor $n$-edik/általános tagja, $s_n$ pedig a sor $n$-edik részletösszege.

Azt mondjuk, hogy a $\sum a_n$ sor konvergens, ha az $s_n$ sorozat konvergens, továbbá $\sum a_n$ sor divergens, ha $s_n$ sorozat divergens.

Az $s_n$ sorozat határértékét a $\sum a_n$ sor összegének hívjuk:
$$
\lim_{n \rightarrow \infty} s_n = \lim_{n \rightarrow \infty}
    \sum_{i=1}^n a_i=\sum_{i=1}^\infty a_i
    \text.
$$

</Definition>

<Theorem id="theorem.4.1" title="A numerikus sor konvergenciájának szükséges feltétele">

Ha a $\sum a_n$ numerikus sor konvergens, akkor az $(a_n)$ nullsorozat, azaz $\lim_{n\rightarrow\infty} a_n=0$, sőt $a_n+a_{n+1}+...+a_{n+p} \rightarrow     0$, ha $n\rightarrow \infty$ (ekkor $p\in\mathbb{N}$ rögzített).

</Theorem>

<Note>

A $\sum_0 a q^n$ végtelen geometriai sor konvergens $\Leftrightarrow$ ha $|q|<1$, ekkor a sorösszeg $a\cdot \frac{1}{1-q}$.

</Note>

<Theorem id="theorem.4.2" title="A numerikus sor konvergenciájának elégséges feltétele">

$\sum a_n$ numerikus sor akkor és csak akkor konvergens ha $\forall     \varepsilon > 0$ esetén
$$
\exists N(\varepsilon): |a_{n + 1} + a_{n + 2} + \dots + a_m| < \varepsilon
    \text,
$$
ha $n, m > N(\varepsilon)$ és $m > n$.

</Theorem>

<Note>

Véges sok tag elhagyása/megváltoztatása a sorozatban a konvergenciát nem változtatja meg, de a sorösszeget igen.

</Note>

<Note>

Legyen $\sum a_n$ és $\sum b_n$ konvergens numerikus sor, ekkor $\sum (a_n +     b_n)$ is konvergens és

$$
\sum_{n=1}^\infty (a_n + b_n)
    = \sum_{n=1}^\infty a_n + \sum_{n=1}^\infty b_n
$$

</Note>

<Note>

Legyen $\sum a_n$ konvergens numerikus sor és $\lambda$ valós szám, ekkor

$$
\sum_{n=1}^\infty \lambda a_n
    = \lambda \sum_{n=1}^\infty a_n
    \text.
$$

</Note>

<Theorem id="theorem.4.3" title="Csoportosított sor konvergenciája">

Ha $\sum a_n$ konvergens, úgy bármely csoportosított sora is konvergens és a két sor összege megegyezik.

</Theorem>

<Note>

A tétel visszafelé is igaz.

</Note>

<Definition id="definition.4.2" title="Sor abszolút konvergencia">

A $\sum a_n$-t abszolút konvergensnek hívjuk, ha $\sum |a_n|$ konvergens.

</Definition>

<Note>

Ha egy nemnegatív tagú sor konvergens, akkor abszolút konvergens. Ha a $\sum a_n$ sor konvergens, de nem abszolút konvergens, akkor feltételes konvergenciáról beszélünk.

</Note>

<Theorem id="theorem.4.4" title="Feltételes konvergencia">

Abszolút konvergens sor feltételesen is konvergens.

</Theorem>

<Note>

Az állítás visszafelé nem igaz.

</Note>

<Theorem id="theorem.4.5" title="Riemann-tétel">

Legyen $\sum a_n$ feltételesen konvergens, de nem abszolút konvergens numerikus sor és legyen $\alpha$ egy tetszőleges bővített valós szám, ekkor $\sum a_n$-nek van olyan átrendezése, hogy az átrendezett sor összege éppen $\alpha$.

</Theorem>

<Theorem id="theorem.4.6" title="Abszolút konvergens sor átrendezése">

Abszolút konvergens sor bármely átrendezett sora is abszolút konvergens és a sorösszeg azonos.

</Theorem>

<Theorem id="theorem.4.7" title="Majoráns (felülről becsül) és minoráns (alulról becsül)     kritérium">

Legyenek $\sum a_n$ és $\sum b_n$ nemnegatív tagú sorok, melyekre az $a_n <     b_n : \forall n \in \mathbb{N}$-re vagy $n_0 < n$ esetén:

1.  ha $\sum a_n$ divergens, akkor $\sum b_n$ is az (minoráns kritérium),

2.  ha $\sum b_n$ konvergens, akkor $\sum a_n$ is az (majoráns kritérium).

</Theorem>

<Theorem id="theorem.4.8" title="A hányados vagy D'Alambert-teszt">

$\sum a_n$ egy pozitív tagú numerikus sor, ha $\exists 0 \leq q < 1$ valós szám, hogy $\frac{a_{n+1}}{a_n} \leq q$, ha $n>n_0$ vagy $\forall n$ esetén, akkor a $\sum a_n$ konvergens.

</Theorem>

<Theorem id="theorem.4.9" title="Gyök/Cauchy-teszt">

Legyen $\sum a_n$ egy nemnegatív tagú sor, ha $\exists 0 \leq q < 1$, hogy $\sqrt[n]{a_n} \leq q$, ha $n>n_0$ vagy $\forall n$-re, akkor $\sum a_n$ konvergens.

</Theorem>

<Note>

Vegyük észre, hogy a majoráns illetve minoráns kritérium és az előző két teszt az abszolút konvergencia eldöntésére szolgál, a feltételes konvergenciáról nem ad információt.

</Note>

<Theorem id="theorem.4.10" title="Integrál kritérium">

Ha $x \geq 1$ esetén az $f$ függvény folytonos, nemnegatív és csökkenő, akkor a $\sum |f_n|$ numerikus sor konvergens vagy divergens aszerint, hogy
$$
\int_1^\infty f(x) \dd x
    \text{ konvergens vagy divergens.}
$$

</Theorem>

<Definition id="definition.4.3" title="Alternáló sor">

A $\sum (-1)^{n+1} \cdot b_n$, $b_n > 0$ numerikus sort alternáló sornak nevezzük.

</Definition>

<Theorem id="theorem.4.11" title="Leibniz sor">

A $\sum  (-1)^{n+1} \cdot b_n$ alternáló numerikus sor konvergens akkor és csakis akkor, ha $(b_n)$ monoton csökkenő nullsorozat, ekkor az $|s - s_n|     \leq b_{n + 1}$.

</Theorem>

<Definition id="definition.4.4" title="Cauchy-féle szorzatsor">

Legyenek $(a_n)$ és $(b_n)$ a nemnegatív egészek halmazán értelmezett numerikus sorozatok és

$$
c_n:=\sum_{k=0}^n a_k b_{n-k}
    \text,
$$
ekkor a $\sum c_n$-t a $\sum a_n$ és $\sum b_n$ numerikus sorok Cauchy-féle szorzatsorának hívjuk.

</Definition>

<Theorem id="theorem.4.12" title="Cauchy-féle szorzatsorok konvergenciája I">

Abszolút konvergens sorok Cauchy-féle szorzatsora is abszolút konvergens és a szorzatsor összege a tényezősorok összegének szorzata.

</Theorem>

<Theorem id="theorem.4.13" title="Cauchy-féle szorzatsorok konvergenciája II">

Tegyük fel, hogy a $\sum a_n$ abszolút konvergens és sorösszege $A$ és a $\sum b_n$ feltételesen konvergens és a sorösszege $B$, ekkor a Cauchy-féle szorzatsorok sorösszege $A\cdot B$.

</Theorem>

<Theorem id="theorem.4.14" title="Cauchy-féle kondenzációs kritérium">

Legyen $(a_n)$ monoton csökkenő nemnegatív tagú sorozat, a belőle képzett numerikus sor akkor és csak akkor konvergens, ha
$$
\sum_{k = 0} 2^k a_{2k} =
    a_1 + 2 \cdot a_2 + 2^2 \cdot a_4 + \dots
$$
is konvergens.

</Theorem>

<Statement>

$\displaystyle \sum \dfrac{1}{n^\alpha}$ konvergens, ha $\alpha > 1$ és divergens, ha $\alpha \leq 1$.

</Statement>

<Statement>

$\displaystyle \sum \dfrac{1}{n \cdot (\ln n)^P}$ konvergens, ha $P>1$ és divergens, ha $P \leq 1$.

</Statement>
