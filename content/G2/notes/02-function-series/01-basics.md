---
title: Alapfogalmak
description: Alapfogalmak
---

<Definition title="Függvénysorozat" id="definition.2.1" >
  Az $f_n : I \subset \mathbb R \to \mathbb R$ sorozatot függvénysorozatnak
  nevezzük.
</Definition>

<Example>
  - $f_n : \mathbb R \to [-1; 1], \quad f_n(x) = \sin nx$
  - $g_n: [0; \infty] \to \mathbb R, \quad g_n(x) = x^n$
</Example>

<Definition title="Függvénysorozat pontbeli konvergenciája" id="definition.2.2" >
  Ha az $x_0 \in I$ pontban az $(f_n(x_0))$ számsorozat konvergens, akkor azt
  mondjuk, hogy az $(f_n)$ függvénysorozat konvergens az $x_0$-ban. A
  konvergenciahalmaz:
  $$
    H := \big\{\;
    x \mid x \in I \land (f_n) \text{ konvergens az } x \text{ pontban}
    \;\big\}
    \text.
  $$
</Definition>

<Example>
  - $f_n(x) = \sin nx, \quad H_{f_n} = \{ k\pi; k \in \mathbb Z \}$,
  - $g_n(x) = x^n, \quad H_{g_n} = [0; 1]$.
</Example>
  
<Definition title="Függvénysorozat határfüggvénye" id="definition.2.3" >
  Az $f$ függvényt az $(f_n)$ függvénysorozat határfüggvényének nevezzük:
  $$
    f(x) := \lim_{n \to \infty} f_n(x)
    \text,\quad
    x \in H
    \text.
  $$
  Azt mondjuk, hogy az $(f_n)$ függvénysorozat pontonként konvergál az $f$
  határfüggvényhez a $H$-n, ha $\forall \varepsilon > 0$ esetén
  $\exists N(\varepsilon; x)$, hogy $|f_n(x) - f(x)| < \varepsilon$, ha
  $n > N(\varepsilon; x)$.
</Definition>

<Definition title="Függvénysorozat egyenletes konvergenciája" id="definition.2.4" >
  Az  $(f_n)$ egyenletesen konvergens az $E \subset H$ halmazon, ha
  $\forall\varepsilon > 0$ esetén létezik $N(\varepsilon)$ úgy, hogy
  $|f_n(x) - f(x)| < \varepsilon$, ha $n > N(\varepsilon)$ minden $x \in E$
  esetén.
</Definition>

<Note>
  Az egyenletes konvergenciából következik a pontonkénti konvergencia.
  Az állítás azonban megfordítva nem igaz.
</Note>

<Theorem title="Cauchy-kritérium függvénysorozatok konvergenciájára" id="theorem.2.1" >
  - Az $(f_n)$ akkor és csak akkor konvergens az $x_0 \in H$ pontban,
    ha $\forall \varepsilon > 0$ esetén $\exists N(\varepsilon)$, hogy
    $|f_n(x_0) - f_m(x_0)| < \varepsilon$, ha $n; m > N(\varepsilon)$.

  - Az $(f_n)$ akkor és csak akkor konvergens az $H \subset I$ halmazon,
    ha $\forall \varepsilon > 0$ esetén $\exists N(\varepsilon, x)$, hogy
    ha $n; m > N(\varepsilon, x)$, akkor $\forall x \in H$ esetén
    $|f_n(x) - f_m(x)| < \varepsilon$.

  - Az $(f_n)$ akkor és csak akkor egyenletesen konvergens az
    $E \subset H$ halmazon, ha $\forall \varepsilon > 0$ esetén
    $\exists N(\varepsilon)$, hogy ha $n; m > N(\varepsilon)$, akkor
    $\forall x \in E$ esetén ${|f_n(x) - f_m(x)| < \varepsilon}$.
</Theorem>