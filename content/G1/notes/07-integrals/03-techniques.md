---
title: "Integrálási módszerek, speciális esetek"
description: "Integrálási módszerek, speciális esetek"
---

## Helyettesítéses integrálás

<BlueBox>

A **helyettesítéses integrálás** módszerének bevezetéséhez tekintsük az alábbi példát:
$$
\int 2x \cdot (x^2 + 1)^3 \dd x
    \text.
$$
Vegyük észre, hogy a zárójelben szereplő kifejezés deriváltja megjelenik a szorzatban. Vezessük be a $t = x^2 + 1$ helyettesítést, majd számoljuk ki a kifejezés deriváltját:
$$
\odv{t}{x} = 2x
    \quad \rightarrow \quad
    \dd x = \frac{1}{2x} \dd t
    \text.
$$
Helyettesítsük be a kifejezést:
$$
\int 2x \cdot (x^2 + 1)^3 \dd x
    = \int 2x \cdot t^3 \cdot \frac{1}{2x} \dd t
    = \int t^3 \dd t
    = \frac{t^4}{4} + C
    = \frac{(x^2 + 1)^4}{4} + C
    \text.
$$

</BlueBox>

<Note>

## A helyettesítéses integrálás speciális esetei:

- $\displaystyle \int f^\alpha \cdot f' = \frac{f^{\alpha + 1}}               {\alpha + 1}$, ahol $\alpha \neq -1$,

- $\displaystyle \int \frac{f'}{f} = \ln |f| + C$,

- $\displaystyle \int e^f \cdot f' = e^f + C$,

- $\displaystyle \int (f \circ g) \cdot g' \dd x = \left( \int f \right)               \circ g$.

</Note>

<Example>

Integráljuk az alábbi kifejezést:
$$
\int \frac{2x}{x^2 + 1} \dd x
    \text.
$$
A nevezőben szereplő kifejezés deriváltja megegyezik a számlálóval, ezért az integrálás eredménye a következő:
$$
\int \frac{2x}{x^2 + 1} \dd x = \ln |x^2 + 1| + C
    \text.
$$
Ellenőrizzük az eredményt! Vezessük be a $t = x^2 + 1$ helyettesítést, majd számoljuk ki a kifejezés deriváltját:
$$
\odv{t}{x} = 2x
    \quad \rightarrow \quad
    \dd x = \frac{1}{2x} \dd t
    \text.
$$
Helyettesítsük be a kifejezést:
$$
\int \frac{2x}{x^2 + 1} \dd x
    = \int \frac{1}{t} \dd t
    = \ln |t| + C
    = \ln |x^2 + 1| + C
    \text.
$$
A két eredmény megegyezik, tehát az integrálás helyes.

</Example>

<Example>

Integráljuk az alábbi kifejezést:
$$
\int 6x^2 \cdot e^{x^3} \dd x
    \text.
$$
Az exponenciális függvény kitevőjének a deriváltja megjelenik a szorzatban, ezért az integrálás eredménye a következő:
$$
\int 6x^2 \cdot e^{x^3} \dd x
    = 2 \int 3x^2 \cdot e^{x^3} \dd x
    = 2 e^{x^3} + C
    \text.
$$
Ellenőrizzük az eredményt! Vezessük be a $t = x^3$ helyettesítést, majd számoljuk ki a kifejezés deriváltját:
$$
\odv{t}{x} = 3x^2
    \quad \rightarrow \quad
    \dd x = \frac{1}{3x^2} \dd t
    \text.
$$
Helyettesítsük be a kifejezést:
$$
\int 6x^2 \cdot e^{x^3} \dd x
    = 2 \int 3x^2 \cdot e^{x^3} \dd x
    = 2 \int 3x^2 \cdot e^t \cdot \frac{1}{3x^2} \dd t
    = 2 e^t + C
    = 2 e^{x^3} + C
    \text.
$$
A két eredmény megegyezik, tehát az integrálás helyes.

</Example>

<Example>

Integráljuk az alábbi kifejezést:
$$
\int x \cdot \cos (x^2 + 3) \dd x
    \text.
$$
A koszinusz argumentumának deriváltja megjelenik a szorzatban, ezért az integrálás eredménye a következő:
$$
\int x \cdot \cos (x^2 + 3) \dd x
    = \frac{1}{2} \int 2x \cdot \cos (x^2 + 3) \dd x
    = \frac{1}{2} \sin(x^2 + 3) + C
    \text.
$$
Ellenőrizzük az eredményt! Vezessük be a $t = x^2 + 3$ helyettesítést, majd számoljuk ki a kifejezés deriváltját:
$$
\odv{t}{x} = 2x
    \quad \rightarrow \quad
    \dd x = \frac{1}{2x} \dd t
    \text.
$$
Helyettesítsük be a kifejezést:
$$
\int x \cdot \cos (x^2 + 3) \dd x
    = \int x \cdot \cos t \cdot \frac{1}{2x} \dd t
    = \frac{1}{2} \int \cos t \dd t
    = \frac{1}{2} \sin t + C
    = \frac{1}{2} \sin(x^2 + 3) + C
    \text.
$$
A két eredmény megegyezik, tehát az integrálás helyes.

</Example>

## Parciális integrálás

<BlueBox>

A **parciális integrálás** módszerének bevezetéséhez írjuk fel két függvény szorzatának deriváltját:
$$
(f(x) \cdot g(x))' = f'(x) \cdot g(x) + f(x) \cdot g'(x)
    \text.
$$
Integráljuk $x$ szerint az egyenlet mindkét oldalát:
$$
\int (f(x) \cdot g(x))' \dd x = \int f'(x) \cdot g(x) \dd x +
    \int f(x) \cdot g'(x) \dd x
    \text.
$$
Az integrálás és a deriválás műveletei egymás inverzei, így az egyenlet bal oldala az alábbi alakot ölti:
$$
f(x) \cdot g(x) = \int f'(x) \cdot g(x) \dd x + \int f(x) \cdot g'(x) \dd x
$$
Rendezzük át az egyenletet:
$$
\int f(x) \cdot g'(x) \dd x = f(x) g(x) - \int f'(x) \cdot g(x) \dd x
    \text.
$$

</BlueBox>

<Example>

Integráljuk az $f(x) = e^{2x} \cdot 3x^2$ függvényt.  
A függvény egy **polinom** és egy **trigonometrikus függvény** szorzataként áll elő, ezért célszerű a parciális integrálás módszerét alkalmazni.  
Válasszuk meg az $f$ és $g$ függvényeket! Mivel a parciális integrálás során $f$ függvényt deriválni fogjuk, ezért legyen $f = 3x^2$, hiszen ez kétszeri differenciálása után konstans függvénnyé szelídül:
$$
\begin{array}{cc}
      f(x) = 3x^2 \text, &
      g(x) = e^{2x} / 2 \text, \\
      f'(x) = 6x \text,  &
      g'(x) = e^{2x} \text.
    \end{array}
$$
Használjuk tehát a parciális integrálás képletét:
$$
\int e^{2x} \cdot 3x^2 \dd x
    = 3x^2 \cdot \frac{e^{2x}}{2}
    - \int 6x \cdot  \frac{e^{2x}}{2} \dd x
    = \frac{3 x^2 e^{2x}}{2}
    - \int 3x \, e^{2x} \dd x
    \text.
$$
Az utolsó integrálásnál ismételjük meg a parciális integrálás módszerét:
$$
\begin{array}{cc}
      f(x) = 3x \text, &
      g(x) = e^{2x} / 2 \text, \\
      f'(x) = 3 \text, &
      g'(x) = e^{2x} \text.    \\
    \end{array}
$$
Használjuk ismét a tanult képletet:
$$
\int 3x \, e^{2x} \dd x
    = 3x \cdot \frac{e^{2x}}{2}
    - \int 3 \cdot  \frac{e^{2x}}{2} \dd x
    = \frac{3 x e^{2x}}{2}
    - \int \frac{3 e^{2x}}{2} \dd x
    = \frac{3 x e^{2x}}{2}
    - \frac{3 e^{2x}}{4}
    + C
    \text.
$$
A végeredmény tehát:
$$
\int e^{2x} \cdot 3x^2 \dd x
    = \frac{3 x^2 e^{2x}}{2}
    - \frac{3 x e^{2x}}{2}
    + \frac{3 e^{2x}}{4}
    + C
    \text.
$$

</Example>

<BlueBox data-title="Táblázatos módszer">

**Táblázatos módszer**

Exponenciális függvény és polinom szorzatának integrálását **táblázatos módszerrel** is elvégezhetjük. Integráljuk az $f(x) = e^{2x} \cdot 3x^2$ most ezzel a módszerrel!

A táblázat első oszlopába írjuk be a polinom függvényt, majd ezt annyiszor deriváljuk, ameddig az el nem tűnik. Az exponenciális függvényt pedig pontosan ugyanennyiszer integráljuk.

| D                  | I                       |
|:-------------------|:------------------------|
| (Left 1) $3x^2$; | (Right 1) $e^{2x}$;   |
| (Left 2) $6x$;   | (Right 2) $e^{2x}/2$; |
| (Left 3) $6$;    | (Right 3) $e^{2x}/4$; |
| (Left 4) $0$;    | (Right 4) $e^{2x}/8$; |

Az első oszlop első elemét szorozzuk össze a második oszlop második elemével, majd rendeljünk hozzá pozitív előjelet. Ezután az első oszlop második elemét szorozzuk össze a második oszlop harmadik elemével, majd rendeljünk hozzá negatív előjelet. Az első oszlop harmadik elemét pedig a második oszlop negyedik elemével szorozzuk össze, a szorzathoz most újra pozitív előjelet rendelünk. Az eredményeket összegezzük és hozzáadjuk a konstans tagot:
$$
\int e^{2x} \cdot 3x^2 \dd x
    = \frac{3 x^2 e^{2x}}{2}
    - \frac{3 x e^{2x}}{2}
    + \frac{3 e^{2x}}{4}
    + C
    \text.
$$

</BlueBox>

<Example>

Integráljuk az $f(x) = \ln x$ függvényt! A természetes alapú logaritmus primitív függvénye nem található meg az integrálási segédletben, ezért egy trükkhöz kell folyamodnunk:
$$
\int \ln x \dd x = \int 1 \cdot \ln x \dd x
    \text.
$$
Válasszuk meg $f$ és $g'$ függvényeket az alábbi módon:
$$
\begin{array}{ll}
      f(x) = \ln x  \text, &
      g(x) = x      \text,   \\[2mm]
      f'(x) = 1 / x \text, &
      g'(x) = 1     \text.   \\
    \end{array}
$$
Végezzük el az integrálást:
$$
\int \ln x \dd x
    = x \cdot \ln x
    - \int \frac1x \cdot x \dd x
    = x \cdot \ln x - x + C
    = x \cdot (\ln x - 1) + C
    \text.
$$

</Example>

<Example>

Most integráljuk az $f(x) = e^{2x} \cdot \sin 3x$ függvényt a parciális integrálás módszerével. Mivel sem a trigonometrikus tag, sem pedig az exponenciális tag nem tűnik el differenciálás során, ezért tetszőlegesen megválaszthatjuk, hogy melyik lesz $f$ és melyik lesz $g'$ függvény:
$$
\begin{array}{ll}
      f(x) = e^{2x}          \text, &
      g(x) = - \cos (3x) / 3 \text,   \\[2mm]
      f'(x) = 2 e^{2x}       \text, &
      g'(x) = \sin 3x        \text.   \\
    \end{array}
$$
Helyettesítsük be a képletekbe:
$$
\begin{aligned}
    I = \int e^{2x} \cdot \sin 3x \dd x
     & = \frac{-e^{2x} \cdot \cos 3x}{3}
    - \int - \frac{2 e^{2x} \cdot \cos 3x}{3} \dd x
    \\
     & = \frac{-e^{2x} \cdot \cos 3x}{3}
    + \frac{2}{3} \underbrace{\int e^{2x} \cdot \cos 3x \dd x}_{=:J}
    \\
     & = \frac{-e^{2x} \cdot \cos 3x}{3}
    + \frac{2}{3} \cdot J
    \text.
  
\end{aligned}
$$
Az utolsó integrálásnál ismételjük meg a parciális integrálás módszerét:
$$
\begin{array}{ll}
      f(x) = e^{2x}        \text, &
      g(x) = \sin (3x) / 3 \text,   \\
      f'(x) = 2 e^{2x}     \text, &
      g'(x) = \cos 3x      \text.   \\
    \end{array}
$$
Helyettesítsünk be ismét a parciális integrálás képletébe:
$$
\begin{aligned}
    J = \int e^{2x} \cdot \cos 3x \dd x
     & = \frac{e^{2x} \cdot \sin 3x}{3}
    - \int \frac{2 e^{2x} \cdot \sin 3x}{3} \dd x
    \\
     & = \frac{e^{2x} \cdot \sin 3x}{3}
    - \frac{2}{3} \underbrace{\int e^{2x} \cdot \sin 3x \dd x}_{I}
    \\
     & = \frac{e^{2x} \cdot \sin 3x}{3}
    - \frac{2}{3} \cdot I
    \text.
  
\end{aligned}
$$
Az integrálok alapján egy két ismeretlent tartalmazó egyenletrendszer írható fel:
$$
\; I = \dfrac{-e^{2x} \cdot \cos 3x}{3}
    + \dfrac{2}{3} \cdot J
    
    \; J = \dfrac{+e^{2x} \cdot \sin 3x}{3}
    - \dfrac{2}{3} \cdot I
    \text,
$$
ebből pedig
$$
I = \frac{-e^{2x} \cdot \cos 3x}{3}
    + \frac{2}{3} \cdot \left( \frac{e^{2x} \cdot \sin 3x}{3}
    - \frac{2}{3} \cdot I \right)
    \text.
$$
Bontsuk fel a zárójeleket, és rendezzük az egyenletet:
$$
I + \frac{4}{9} \cdot I
    = \frac{13}{9} \cdot I
    = \frac{-e^{2x} \cdot \cos 3x}{3}
    + \frac{2 e^{2x} \cdot \sin 3x}{9}
    \text.
$$
Ekkor
$$
I = \int e^{2x} \sin 3x \dd x
    = \frac{e^{2x} \cdot (2 \sin 3x - 3 \cos 3x)}{13}
    + C
    \text.
$$

</Example>

## Racionális törtfüggvények integrálása

<BlueBox>

Egy **racionális törtfüggvény** polinomok hányadosaként áll elő. Általános alakja:
$$
R(x) = \frac{P(x)}{Q(x)}
    \text.
$$

Amennyiben a nevező fokszáma kisebb, mint a számlálóé, vagyis ${\deg P(x) \geq       \deg Q(x)}$, akkor a **polinomosztás** módszeréhez kell folyamodnunk, mely elvégzése után a törtfüggvény az alábbi alakot ölti:
$$
R(x) = T(x) + \frac{S(x)}{Q(x)}
    \text,
$$
hol $T(x)$ egy újabb polinom, $S(x)$ fokszáma pedig már kisebb, mint $Q(x)$ fokszáma.

Ezután **parciális törtekké** bontjuk a $S(x) / Q(x)$ hányadost, majd ezeket, illetve a $T(x)$ polinomot integráljuk.

Amennyiben a nevező fokszáma nagyobb, mint a számláló fokszáma, vagyis $\deg P(x) < \deg Q(x)$, akkor polinomosztás nélkül tudjuk parciális törtekké bontani a függvényt.

A parciális törtekre való bontáshoz az **algebra alaptételét** használjuk fel, miszerint bármely valós együtthatós polinom felbontható első és másodrendű kifejezések szorzatára, vagyis
$$
p(x) = A
    \cdot
    \underbrace{\prod (x - a_i)}_{\text{valós gyökök}}
    \cdot
    \underbrace{\prod (x^2 + p_i x + q_i)}_{\text{komplex gyökök}}
    \text.
$$

</BlueBox>

<Example>

Hozzuk $R(x) = T(x) + S(x) / Q(x)$ alakra ($\deg S < \deg Q$) azt $R(x) =     P(x) / Q(x)$ függvényt, ahol ${P(x)=x^3 - 12x^2 - 42}$ és $Q(x) = x - 3$.

Végezzük el az alábbi polinomosztást:
$$
\begin{array}{rrr}
      \begin{array}{l}
        \\{x^2} \cdot (x - 3) \rightarrow
      \end{array}
       &
      \begin{array}{lrlll}
          & (x^3 & -12x^2 & {+0x}\phantom2 & -42)               \\
        - & (x^3 & -3x^2  & {+0x}\phantom2 & {+0x}) \\ \hline
      \end{array}
       &
      \begin{array}{llll}
        \div & (x-3) & = &
        {x^2}
          {\;-\;9x}
          {\;-\;27}
        \text.                          \\\\
      \end{array}
      \\
      \begin{array}{l}
        \\{-9x} \cdot (x - 3) \rightarrow
      \end{array}
       &
      \begin{array}{lrll}
          & -9x^2\phantom2  & {+0x} & -42                        \\
        - & (-9x^2\phantom2 & +27x              & {+0\phantom2}) \\ \hline
      \end{array}
       &
      \\
      \begin{array}{l}
        \\{-27} \cdot (x - 3) \rightarrow
      \end{array}
       &
      \begin{array}{lrl}
          & -27x  & -42  \\
        - & (-27x & +81) \\ \hline
      \end{array}
       &
      \\
       &
      -123
    \end{array}
$$
Az eredmény tehát:
$$
R(x) = x^2 - 9x - 27 - \frac{123}{x - 3}
    \text.
$$

</Example>

<Example>

Integráljuk az előző feladatban szereplő $R(x)$ polinomot!
$$
\int R(x) \dd x
    = \int \left( x^2 - 9x - 27 - \frac{123}{x - 3} \right) \dd x
    = \frac{x^3}{3} - \frac{9x^2}{2} - 27x - 123 \ln |x - 3| + C
    \text.
$$

</Example>

<BlueBox data-title="Parciális törtekre bontás a letakarós módszerrel">

**Parciális törtekre bontás a letakarós módszerrel**

Amennyiben a nevező gyökei tisztán valósak, és nincsen többszörös gyök, akkor a parciális törtekre bontást a **letakarós módszerrel** is elvégezhetjük.

A racionális törtfüggvény eredeti alakja:
$$
R(x) = \frac{P(x)}{Q(x)}
    \text{, ahol }
    Q(x) = \prod_{i = 1}^n (x - a_i)
    \text.
$$

Az egyes gyökökhöz tartozó együtthatókat a következő módon határozhatjuk meg:
$$
A_i = \lim_{x \to a_i} (x - a_i) \frac{P(x)}{Q(x)}
    \text.
$$

Az együtthatók meghatározása után a racionális törtfüggvény az alábbi alakban írható fel:
$$
R(x)
    = \sum_{i = 1}^n \frac{A_i}{(x - a_i)}
    = \frac{A_1}{(x - a_1)} + \frac{A_2}{(x - a_2)} + \ldots + \frac{A_n}{(x - a_n)}
    \text.
$$

Vegyük például az alábbi racionális törtfüggvényt:
$$
R(x) = \frac{6 x^2 - 10 x + 2}{x \cdot (x - 1) \cdot (x - 2)}
    \text.
$$

A parciális törteket az alábbi alakban keressük:
$$
R(x)
    = \underbrace{\frac{A}{\phantom{a}x\phantom{a}}}_{a_0 = 0}
    + \underbrace{\frac{B}{x - 1}}_{a_1 = 1}
    + \underbrace{\frac{C}{x - 2}}_{a_2 = 2}
    \text.
$$

Az együtthatók a képlet alapján:
$$
\begin{aligned}
    A_1
     & = \lim_{x \rightarrow 0}
    (x - 0) \frac{6 x^2 - 10 x + 2}{x \cdot (x - 1) \cdot (x - 2)}
    = \lim_{x \rightarrow 0}
    \frac{6 x^2 - 10 x + 2}{(x - 1) \cdot (x - 2)}
    = 1
    \text,                      \\[2mm]
    A_2
     & = \lim_{x \rightarrow 1}
    (x - 1) \frac{6 x^2 - 10 x + 2}{x \cdot (x - 1) \cdot (x - 2)}
    = \lim_{x \rightarrow 1}
    \frac{6 x^2 - 10 x + 2}{x \cdot (x - 2)}
    = 2
    \text,                      \\[2mm]
    A_3
     & = \lim_{x \rightarrow 2}
    (x - 2) \frac{6 x^2 - 10 x + 2}{x \cdot (x - 1) \cdot (x - 2)}
    = \lim_{x \rightarrow 2}
    \frac{6 x^2 - 10 x + 2}{x \cdot (x - 1)}
    = 3
    \text.
  
\end{aligned}
$$
A kapott együtthatók alapján a racionális törtfüggvény parciális törtekké bontva:
$$
R(x)
    = \frac{1}{x} + \frac{2}{x - 1} + \frac{3}{x - 2}
    \text.
$$
Ennek az integrálja:
$$
\int R(x) \dd x
    = \int \left( \frac{1}{x} + \frac{2}{x - 1} + \frac{3}{x - 2} \right) \dd x
    = \ln \lvert x \rvert + 2 \ln |x - 1| + 3 \ln |x - 2| + C
    \text.
$$

</BlueBox>

<Example>

Integráljuk az alábbi törtfüggvényt:
$$
R(x) = \frac{x - 2}{(2x - 1)^2 (x - 1)}
    \text.
$$
A nevező fokszáma nagyobb, mint a számlálóé, ezért rögtön parciális törtekre bonthatjuk a függvényt. Mivel a nevezőben lévő $(2x - 1)$ faktor fokszáma 2, ezért ezt a parciális törtekké bontásnál is figyelembe kell vennünk:
$$
R(x)
    = \frac{x - 2}{(2x - 1)^2 (x - 1)}
    = \frac{A}{2x - 1} + \frac{B}{(2x - 1)^2} + \frac{C}{x - 1}
    \text.
$$
A bal és jobb oldal egyenlőségéből következik, hogy:
$$
\begin{aligned}
    x - 2
     & = A(x - 1)(2x - 1) + B(x - 1) + C(2x - 1)^2
    \\
     & = A(2 x^2 - 3 x + 1) + B(x - 1) + C (4x^2 - 4 x + 1)
    \\
     & = (2A + 4C) x^2 + (-3A + B - 4C) x + (A - B + C)
    \text.
  
\end{aligned}
$$
Ezek alapján egy három ismeretlenes egyenletrendszer írható fel:
$$
\begin{cases}
      \phantom-0 = 2 A + 4 C \text,    \\
      \phantom-1 = -3A + B - 4C \text, \\
      -2 = A - B + C \text.
    \end{cases}
$$

Ebből $C = -1$, $A = 2$ és $B = 3$ következik, tehát az eredeti törtfüggvényt a következő alakban írhatjuk fel:
$$
R(x) = \frac{2}{2x - 1} + \frac{3}{(2x - 1)^2} - \frac{1}{x - 1}
$$
A határozatlan integrálás megoldása tehát:
$$
\int R(x) \dd x
    = \ln |2x - 1| - \frac{3}{2(2x - 1)} - \ln |x - 1| + C
    \text.
$$

</Example>

<Example>

Integráljuk az alábbi törtfüggvényt:
$$
R(x) = \frac{x^2 + 3x + 1}{x^2 - 4}
    \text.
$$
A nevező fokszáma megegyezik a számláló fokszámával, ezért a parciális törtekké való bontás előtt át kell alakítanunk a törtet:
$$
R(x)
    = \frac{x^2 + 3x + 1}{x^2 - 4}
    = \frac{x^2 - 4 + 3x + 5}{x^2 - 4}
    = 1 + \frac{3x + 5}{x^2 - 4}
    = 1 + \frac{3x + 5}{(x - 2)(x + 2)}
    \text.
$$
Határozzuk meg a parciális törteket:
$$
\frac{3x + 5}{(x - 2)(x + 2)}
    = \frac{A}{x - 2} + \frac{B}{x + 2}
    = \frac{A(x + 2) + B(x - 2)}{(x - 2)(x + 2)}
    \text.
$$
A bal és jobb oldal egyenlőségéből következik, hogy:
$$
3x + 5 = A(x + 2) + B(x - 2)
    \text.
$$
Ezek alapján egy két ismeretlenes egyenletrendszer írható fel:
$$
\begin{cases}
      \;3 = A + B \text, \\
      \;5 = 2A - 2B \text.
    \end{cases}
$$
Az egyenletrendszer megoldásából $A = 11/4$ és $B = 1/4$ következik, tehát az eredeti törtfüggvényt a következő alakban írhatjuk fel:
$$
R(x) = 1 + \frac{11/4}{x - 2} + \frac{1/4}{x + 2}
    \text.
$$
A határozatlan integrálás megoldása tehát:
$$
\int R(x) \dd x
    = x + \frac{11}{4} \ln |x - 2| + \frac{1}{4} \ln |x + 2| + C
    \text.
$$

</Example>

<Example>

Bontsuk fel a következő racionális törtfüggvényt parciális törtekké, majd integráljuk az egyes tagokat:
$$
R(x) = \frac{
      -20 + 77 x - 57 x^2 + 21 x^3 - 3 x^4
    }{
      x^5 - 13 x^4 + 73 x^3 - 193 x^2 + 232 x - 100
    }
    \text.
$$
A nevezőben szereplő kifejezést már korábban felbontottuk:
$$
R(x) = \frac{
      -20 + 77 x - 57 x^2 + 21 x^3 - 3 x^4
    }{
      (x - 1) \cdot (x - 2)^2 \cdot (x^2 - 6x + 25)
    }
    \text.
$$
Írjuk fel paraméteresen a parciális törteket:
$$
R(x)
    = \frac{A}{x - 1}
    + \frac{B}{x - 2}
    + \frac{Cx + D}{(x - 2)^2}
    + \frac{Ex + F}{x^2 - 6x + 25}
    \text.
$$
Ezek alapján:
$$
\begin{aligned}
    -20 + 77 x - 57 x^2 + 21 x^3 - 3 x^4
     & = A \cdot (x - 2)^3 \cdot (x^2 - 6x + 25) +
    \\
     & \phantom= + B \cdot (x - 1) \cdot (x - 2)^2 \cdot (x^2 - 6x + 25) +
    \\
     & \phantom= + (Cx + D) \cdot (x - 1) \cdot (x - 2) \cdot (x^2 - 6x + 25) +
    \\
     & \phantom= + (Ex + F) \cdot (x - 1) \cdot (x - 2)^3
    \\[2mm]
    
    
    
    
    
    
    
    
    
    
    
     & = A (x^5 - 12 x^4 + 73 x^3 - 230 x^2 + 348 x - 200)
    \\
     & \phantom= + B (x^5 - 11 x^4 + 63 x^3 - 177 x^2 + 224 x - 100)
    \\
     & \phantom= + C (x^5 - 9 x^4 + 45 x^3 - 87 x^2 + 50 x)
    \\
     & \phantom= + D (x^4 - 9 x^3 + 45 x^2 - 87 x + 50)
    \\
     & \phantom= + E (x^5 - 7 x^4 + 18 x^3 - 20 x^2 + 8 x)
    \\
     & \phantom= + F (x^4 - 7 x^3 + 18 x^2 - 20 x + 8)
  
\end{aligned}
$$
Az együtthatók összevetésével az alábbi egyenletrendszer írható fel:
$$
\left\{
    \begin{array}{lll>{\quad}l}
      \phantom-0  & = & A + B + C + E                        & (x^5) \\
      -3          & = & -12A - 11B - 9C + D - 7E + F         & (x^4) \\
      \phantom-21 & = & 73A + 63B + 45C -9D + 18E - 7F       & (x^3) \\
      -57         & = & -230A - 177B - 87C + 45D - 20E + 18F & (x^2) \\
      \phantom-77 & = & 348A + 224B + 50C - 87D + 8E - 20F   & (x^1) \\
      -20         & = & -200A - 100B + 50D + 8F              & (x^0)
    \end{array}
    \right.
$$
Az egyenletrendszer megoldásával az együtthatók értékei:
$$
A = 1 \text, \quad
    B = -2 \text, \quad
    C = 1 \text, \quad
    D = 0 \text, \quad
    E = -3 \text, \quad
    F = 5
    \text.
$$
Az eredmény tehát:
$$
R(x) = \frac{1}{x - 1}
    + \frac{-2}{x - 2}
    + \frac{x}{(x - 2)^2}
    + \frac{-3x + 5}{x^2 - 6x + 25}
    \text.
$$
Az egyes tagok integrálása:
$$
\begin{aligned}
    \int \frac{1}{x - 1} \dd x
     & = \ln |x - 1| + C_1
    \\
    \int \frac{-2}{x - 2} \dd x
     & = -2 \ln |x - 2| + C_2
    \\
    \int \frac{x}{(x - 2)^2} \dd x
     & = \int \frac{t + 2}{t^2} \dd t
    = \int \frac{1}{t} + \frac{2}{t^2} \dd t
    \\
     & = \ln |t| - \frac{2}{t} + C_3
    = \ln |x - 2| - \frac{2}{x - 2} + C_3
    \\
    \int \frac{-3x + 5}{x^2 - 6x + 25} \dd x
     & = - \frac{3}{2} \int \frac{2x - 6}{x^2 - 6x + 25} \dd x
    - 4 \int \frac{1}{x^2 - 6x + 25} \dd x
    \\
     & = - \frac{3}{2} \ln |x^2 - 6x + 25|
    - 4 \int \frac{1}{(x - 3)^2 + 4^2} \dd x
    \\
     & =
    - \frac{3}{2} \ln |x^2 - 6x + 25|
    - \arctan \left(\frac{x - 3}{4}\right) + C_4
    \text.
  
\end{aligned}
$$

</Example>

## Trigonometrikus függvények integrálása

<BlueBox>

**Trigonometrikus függvények** integrálásakor a tanult trigonometrikus azonosságokat kell alkalmaznunk. Ezek közül a legfontosabbak:
$$
\begin{aligned}
    1        & = \sin^2 x + \cos^2 x \text,   \\
    \sin^2 x & = \frac{1 - \cos 2x}{2} \text, \\
    \cos^2 x & = \frac{1 + \cos 2x}{2} \text, \\
    \sin 2x  & = 2 \sin x \cos x \text,       \\
    \cos 2x  & = \cos^2 x - \sin^2 x \text.
  
\end{aligned}
$$

Amennyiben a szögfüggvény fokszáma páros, akkor a függvényt a fenti trigonometrikus azonosságok segítségével át tudjuk alakítani.

Amennyiben a szögfüggvény fokszáma páratlan ($2k + 1$), akkor azt felbontjuk egy $2k$-s és egy $1$-es szögfüggvény szorzataként, majd a már páros fokszámú tagot az előbbi módszerrel tudjuk integrálni.

</BlueBox>

<Example>

Integráljuk a $\sin^2 x$ függvényt!
$$
\int \sin^2 x \dd x
    = \int \frac{1 - \cos 2x}{2} \dd x
    = \int \frac{1}{2} - \frac{\cos 2x}{2} \dd x
    = \frac{x}{2} - \frac{\sin 2x}{4} + C
    \text.
$$

</Example>

<Example>

Integráljuk a $\cos^4 x$ függvényt!
$$
\begin{aligned}
    \int \cos^4 x \dd x
     & = \int \left( \frac{1 + \cos 2x}{2} \right)^2 \dd x
    = \int \frac{1}{4} + \frac{\cos 2x}{2} + \frac{\cos^2 2x }{4} \dd x
    \\
     & = \int \frac{1}{4} + \frac{\cos 2x}{2} + \frac{1 + \cos 4x}{8} \dd x
    = \int \frac{3}{8} + \frac{\cos 2x}{2} + \frac{\cos 4x}{8} \dd x
    \\
     & = \frac{3x}{8} + \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C
    \text.
  
\end{aligned}
$$

</Example>

<Example>

Integráljuk az $\sin^7 x$ függvényt!
$$
\begin{aligned}
    \int \sin^7 x \dd x
     & = \int \sin^6 x \cdot \sin x \dd x
    = \int (\sin^2 x)^3 \cdot \sin x \dd x
    = \int (1 - \cos^2 x)^3 \cdot \sin x \dd x
    \\
     & = \int (1 - 3 \cos^2 x + 3 \cos^4 x - \cos^6 x) \cdot \sin x \dd x
    \\
     & = -\cos x - \cos^3 x - \frac{3\cos^5 x}{5} + \frac{\cos^7 x}{7} + C
    \text.
  
\end{aligned}
$$

</Example>
