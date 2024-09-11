---
title: Alapfogalmak, Alapműveletek
---

Alapfogalmak:

- axióma / posztulátum,
- definíció,
- nem definiált alapfogalom,
- állítás / tétel / lemma / segédtétel.

A halmaz egy nem definiált alapfogalom:

- A halmazokat nagybetűvel jelöljük: $A$, $B$, ...
- Az elemeket kisbetűvel: $a$, $b$, ...
- Halmaz eleme jelölés: $\in$, pl.: $x \in Y$, $x$ eleme az $Y$ halmaznak.
- Halmaznak nem eleme: $\notin$, pl.: $x \notin Y$, $x$ nem eleme az $Y$
  halmaznak.

<Note>
  Egy halmaz akkor **jól megadott**, ha bármely elemről eldönthető, hogy hozzá
  tartozik-e a halmazhoz, vagy nem.
</Note>

<Definition title="Üreshalmaz" id="definition.1.1" >
  Azt a halmazt, amelynek egyetlen eleme sincs, **üreshalmaz**nak nevezzük,
  jele: $\emptyset$ vagy $\{\}$.
</Definition>

<Note>
  A **nemüres halmaz**: olyan halmaz, melynek legalább egy eleme van.
</Note>

<Note>
  A halmazok megadási módjai:

  - felsorolással: $A = \{1, 2, 3\}$,
  - utasítással: $A = \{x \mid x \text{ egész szám és } 1 \leq x \leq 3\}$.
</Note>

<Note>
  Nevezetes halmazok:

  - természetes számok: $\mathbb{N}$,
  - egész számok: $\mathbb{Z}$,
  - racionális számok: $\mathbb{Q}$,
  - valós számok: $\mathbb{R}$,
  - komplex számok: $\mathbb{C}$.
</Note>

<Definition title="Részhalmaz" id="definition.1.2" >
  Legyenek $A$ és $B$ halmazok. Ha $A$ minden eleme eleme $B$-nek is, akkor azt
  mondjuk, hogy az $A$ a $B$ részhalmaza, jele: $\subseteq$, vagy $\subset$
  (valódi részhalmaza).
</Definition>

<Note>
  $A = B$, ha $A \subseteq B$ és $B \subseteq A$ is teljesül.
</Note>

<Statement>
  Legyenek $A$, $B$ és $C$ halmazok, ekkor teljesülnek az alábbiak:

  1. $A \subseteq A$, azaz minden halmaz részhalmaza önmagának.
     (**reflexív**)
  2. Ha $A \subseteq B$ és $B \subseteq A$, akkor $A = B$. 
     (**antiszimmetrikus**)
  3. Ha $A \subseteq B$ és $B \subseteq C$, akkor $A \subseteq C$. 
     (**tranzitív**)
</Statement>

<Definition title="Metszet, Unió, Különbség" id="definition.1.3" >
  Legyenek $A$ és $B$ az $C$ alaphalmaz részhalmazai, ekkor:

  $$
    \begin{align*}
      A \cup B & = \{x \mid x \in A \text{ vagy } x \in B\}, \\
      A \cap B & = \{x \mid x \in A \text{ és } x \in B\}, \\
      A \setminus B & = \{x \mid x \in A \text{ és } x \notin B\}, \\
    \end{align*}
  $$
</Definition>

<Definition title="Diszjunkt halmaz" id="definition.1.4" >
  Két halmaz diszjunkt, ha metszetük üreshalmaz.
</Definition>

<Definition title="Komplementer halmaz" id="definition.1.5" >
  Ha $A \subset B$, akkor az $A$ halmaznak a $B$-re vonatkozó komplementere:
  $B \setminus A$, jele: $\overline A$.
</Definition>

<Statement>
  Halmaz komplenterének komplementere önmaga, vagyis

  $$
    \overline{\overline A} = A \text.
  $$
</Statement>

<Theorem title="Halmazműveletek tulajdonságai" id="theorem.1.1.1">
  Legyenek $A, B, C \in X$
 
  |                     Tulajdonság                      |      Kifejezés       |                     Tulajdonság                      |
  | :--------------------------------------------------: | :------------------: | :--------------------------------------------------: |
  |                $A \cup B = B \cup A $                |    Kommutativitás    |                $A \cap B = B \cap A$                 |
  |       $A \cup (B \cup C) = (A \cup B) \cup C$        |   Asszociativitás    |       $A \cap (B \cap C) = (A \cap B) \cap C$        |
  |                    $A \cup A = A$                    |     Idempotencia     |                    $A \cap A = A$                    |
  |   $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$   |   Disztributivitás   |   $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$   |
  |                $A \cup \emptyset = A$                | Abszorpciós törvény  |            $A \cap \emptyset = \emptyset$            |
  |               $A \cup \overline A = X$               | Komplementer törvény |           $A \cap \overline A = \emptyset$           |
  | $\overline{A \cup B} = \overline A \cap \overline B$ |      De Morgan       | $\overline{A \cap B} = \overline A \cup \overline B$ |

  <Proof title="De Morgan azonosságok">
    <div className="flex">
      <div className="flex-1">
        $$
          \begin{gathered}
            x \in \overline{A \cup B}
            \\
            \downarrow
            \\
            x \notin A \cup B
            \\
            x \notin A \land x \notin B
            \\
            x \in \overline A \land x \in \overline B
            \\
            x \in \overline A \cap \overline B
          \end{gathered}
        $$
      </div>

      <div className="flex-1">
        $$
          \begin{gathered}
            x \in \overline{A \cap B}
            \\
            \downarrow
            \\
            x \notin A \cap B
            \\
            x \notin A \lor x \notin B
            \\
            x \in \overline A \lor x \in \overline B
            \\
            x \in \overline A \cup \overline B
          \end{gathered}
        $$
      </div>
    </div>
  </Proof>
</Theorem>

<Definition title="Hatványhalmaz" id="definition.1.6" >
  Egy $A$ halmaz összes részhalmazainak halmazát az $A$ halmaz hatványhalmazának
  nevezzük.
</Definition>

<Statement >
  Egy $A$ véges halmaz összes részhalmazainak száma: $2^{|A|}$.

  <Proof>
    A binomiális tétel:
    $$
      (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} \, a^{n-k} \, b^k
      \text.
    $$
    Vegyük észre, hogy a binomiális tételben $a = b = 1$, és $n = |A|$ esetén:
    $$
      2^n
      = (1 + 1)^n
      = \sum_{k=0}^{n} \binom{n}{k} \, 1^{n-k} \, 1^k
      = \sum_{k=0}^{n} \binom{n}{k}
      = \underbrace{
        \binom n0 + \binom n1 + \binom n2 + \dots + \binom nn
      }_\text{az összes részhalmaz száma}
      \text.
    $$
  </Proof>
</Statement>