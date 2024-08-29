---
title: Relációk, leképezések, függvények
---

<Definition title="Descartes szorzat" id="definition.1.6" >
  Az $A$ és $B$ halmazok Descartes-szorzatán az $A$ és $B$ halmaz elemeiből álló
  **összes rendezett elempár**ok halmazát értjük:

  $$
    A \times B := \Big\{\;
      (a; b) \;\Big|\; (a \in A) \land (b \in B)
    \;\Big\}
    \text.
  $$
</Definition>

<Example>
  Legyen $A = \{1;2\}$ és $B = \{a;b\}$, ekkor az $A \times B$ 
  Descartes-szorzat:

  $$
    A \times B = \Big\{\;
      (1; a); (1; b); (2; a); (2; b)
    \;\Big\}
    \text.
  $$
</Example>

<Definition title="Binér reláció" id="definition.1.7" >
  Az $A \times B$ szorzathalmaz $T \subset A \times B$ részhalmazát az $A$ és
  $B$ közötti binér (kételemű) relációnak hívjuk. Ha $(a; b) \in T$, akkor azt
  mondjuk, hogy $a$ és $b$ relációban vannak, és ezt $aTb$-vel jelöljük.
</Definition>

<Definition title="Reláció értelmezési tartománya, értékkészlete és inverze" id="definition.1.8" >
  Legyen $ T\subset A\times B$ egy reláció, ekkor

  $$
    \begin{aligned}
      \Domain_T = & \big\{\; a \in A \;\big|\; \exists b \in B: (a; b) \in T \;\big\}
      \\
      \Range_T  = & \big\{\; b \in B \;\big|\; \exists a \in A: (a; b) \in T \;\big\}
      \\
      T^{-1}    = & \big\{\; (b;a)   \;\big|\; (a;b) \in T \;\big\}
    \end{aligned}
  $$
</Definition>

<Definition title="Ekvivalenciareláció" id="definition.1.9" >
  Legyen $A \neq \emptyset$, a $T \subset A \times A$ relációt ekvivalencia
  relációnak mondjuk, ha teljesülnek az alábbiak:

  - **reflexivitás** -- $\forall A \in A$ esetén $(a; a) \in T$,
  - **szimmetria** -- ha $(a; b) \in T$, akkor $(b; a) \in T$,
  - **tranzitivitás** -- ha $(a; b) \in T$ és $(b; c) \in T$, akkor
    $(a; c) \in T$.
</Definition>

<Example>
  TODO: TIKZ diagram
</Example>

<Definition title="Függvény" id="definition.1.10">
  A $T \subset A \times B$ binér relációt leképezésnek/függvénynek mondjuk, ha

  $$
    (a; b) \in T \land (a; c)\in T \Rightarrow b = c
    \text.
  $$

  Jelölés: $f: A \rightarrow B$, ahol $A$ az értelmezési tartomány ($\Domain_f$)
  és $B$ az értékkészlet ($\Range_f$).
</Definition>

<Definition title="Bijekció" id="definition.1.11">
  Az $f : A \rightarrow B$ kölcsönösen egyértelmű (egy-egyértelmű, bijektív), ha

  - **injektív**, vagyis $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$, valamint
  - **szürjektív**, vagyis $\forall b \in B$ esetén $\exists a \in A: f(a) = b$.
</Definition>

<Note>
  Ha az $f: A \rightarrow B$ bijektív, akkor az $f^{-1}: B \rightarrow A$
  leképezést $f$ **inverz leképezés**ének hívjuk.
</Note>

<Example>
  TODO: TIKZ diagram
</Example>
