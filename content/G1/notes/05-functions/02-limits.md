---
title: "Függvények határértéke"
description: "Függvények határértéke"
---

<Definition id="definition.5.2" title="Függvény határértéke">

Azt mondjuk, hogy az $f$ függvény határértéke az $a$ pontban $A$, ha $\forall     \varepsilon > 0$ esetén $\exists \delta(\varepsilon) > 0$, hogy $|f(x) - A|     < \varepsilon$, ha $0 < |x - a| < \delta(\varepsilon)$. Jele:
$$
\lim_{x \rightarrow a} f(x) = A
    \text.
$$

</Definition>

<Theorem id="theorem.5.1" title="Átviteli elv">

Az $f$ függvény határértéke az $a$ pontban akkor és csak akkor $A$, ha $\forall x_n \rightarrow a$ sorozat esetén $f(x_n) \rightarrow A$.

</Theorem>

<Theorem id="theorem.5.2">

Legyen az $f$ függvény határértéke az $a \in \Domain_f \cap \Domain_g$ pontban $A$, a $g$ függvény $a$ pontbeli határértéke pedig $B$. Ekkor:

- $\displaystyle \lim_{x \rightarrow a} f(x) + g(x) = A + B$,

- $\displaystyle \lim_{x \rightarrow a} f(x) \cdot g(x) = A \cdot B$,

- $\displaystyle \lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \frac{A}{B}$, ha $B \neq 0$.

</Theorem>

<Definition id="definition.5.3" title="Baloldali határérték">

Azt mondjuk, hogy az $f$ függvény baloldali határértéke az $a$ pontban $A$, ha $\forall \varepsilon > 0$ esetén $\exists \delta(\varepsilon) > 0$, hogy $|f(x) - A| < \varepsilon$, ha $0 < a - x < \delta(\varepsilon)$. Jele:
$$
\lim_{\phantom{{}^-}x \rightarrow a^-} f(x) = A
    \text.
$$

</Definition>

<Definition id="definition.5.4" title="Jobboldali határérték">

Azt mondjuk, hogy az $f$ függvény jobboldali határértéke az $a$ pontban $A$, ha $\forall \varepsilon > 0$ esetén $\exists \delta(\varepsilon) > 0$, hogy $|f(x) - A| < \varepsilon$, ha $0 < x - a < \delta(\varepsilon)$. Jele:
$$
\lim_{\phantom{{}^+}x \rightarrow a^+} f(x) = A
    \text.
$$

</Definition>

<Theorem id="theorem.5.3">

Az $f$ függvény határértéke az $a$ pontban, akkor és csak akkor $A$, ha
$$
\lim_{\phantom{{}^-}x \rightarrow a^-} f(x) = A
    \quad\text{és}\quad
    \lim_{\phantom{{}^+}x \rightarrow a^+} f(x) = A
    \text.
$$

</Theorem>

<Definition id="definition.5.5">

- Az $f$ függvény határértéke a $+\infty$-ben $A$, ha $\forall               \varepsilon > 0$ esetén $\exists \delta(\varepsilon) > 0$,  
  hogy $|f(x) - A| < \varepsilon$, ha $x > \delta(\varepsilon)$.

- Az $f$ függvény határértéke a $-\infty$-ben $A$, ha $\forall               \varepsilon > 0$ esetén $\exists \delta(\varepsilon) > 0$,  
  hogy $|f(x) - A| < \varepsilon$, ha $x < \delta(\varepsilon)$.

- Az $f$ függvény határértéke a $a$-ban $+\infty$, ha $\forall N$ esetén $\exists \delta(N) > 0$, hogy $f(x) > N$, ha $0 < |x - a| <               \delta(N)$.

- Az $f$ függvény határértéke a $a$-ban $-\infty$, ha $\forall N$ esetén $\exists \delta(N) > 0$, hogy $f(x) < N$, ha $0 < |x - a| <               \delta(N)$.

</Definition>

<Statement>

Legyen az $f$ függvény határértéke az $a \in \Domain_f$ pontban $A$, a $g$ függvény $a \in \Domain_g$ pontbeli határértéke pedig $B$. Az $a$ pont egy $x \neq a$ környezetében pedig $g(x) \neq A$. Ekkor:
$$
\lim_{x \rightarrow a} (g \circ f)(x) = B
    \text.
$$

</Statement>
