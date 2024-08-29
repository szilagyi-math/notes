---
title: A számfogalom kiépítése
---

## Peano axiómák

Legyen $\mathbb N \neq \emptyset$, $\mathbb N$-t a természetes számok
halmazának, elemeit természetes számoknak mondjuk, ha teljesülnek az
alábbiak:

1.  legyen adva egy $\varphi : \mathbb N \rightarrow \mathbb N$
    leképezés,
2.  $\varphi$ injektív : $\varphi(a) = \varphi(b) \Rightarrow a = b$,
3.  $\exists$ $\mathbb N$-nek egy kitüntetett eleme, ez a $0$,
4.  a $0$-nak nincs ősképe, azaz $\nexists n \in \mathbb N : \varphi(n) = 0$,
5.  a teljes indukció elve teljesül, azaz ha $H \subseteq \mathbb N$ és
    1.  $0 \in H$,
    2.  $n \in H \Rightarrow \varphi(n) \in H$,
    
    akkor $H = \mathbb N$.

## Természetes számok halmazának bővítése

A természetes számok halmazát ekvivalenciarelációkkal ellátva megkapjuk
a középiskolában megismert számhalmazokat:

-   $\mathbb Z$ : az egész számok halmaza ($\mathbb N \times \mathbb N$),
-   $\mathbb Q$ : a racionális számok halmaza ($\mathbb Z \times \mathbb Z$),
-   $\mathbb Q^*$ : az irracionális számok halmaza,
-   $\Reals$ : a valós számok halmaza ($\mathbb Q \cup \mathbb Q^*$).

TODO: Tikz picture

<Note>
  A **transzcendens** számok olyan irracionális valós számok, amelyek nem
  algebraiak, azaz nem valamilyen algebrai egyenlet gyökei. Ilyen szám
  pélául a $\pi$ vagy az $e$.
</Note>

## A valós számok axiómarendszere

Értelmezzük két bináris műveletet, az összeadást ($+$) és a szorzást
($\cdot$), valamint egy relációt ($>$).

|     |                                                                                                                   |                           |
| :-: | :---------------------------------------------------------------------------------------------------------------: | :-----------------------: |
|  1  |                                                 $a + b = b + 1 $                                                  |     a $+$ kommutatív      |
|  2  |                                            $a + (b + c) = (a + b) + c$                                            |     a $+$ asszociatív     |
|  3  |                                        $!\exists 0 \in \Reals : a + 0 = a$                                        |     a $+$ egységelem      |
|  4  |                           $\forall a \in \Reals : \exists -a \in \Reals : a + (-a) = 0$                           |     a $+$ inverz elem     |
|  5  |                                              $a \cdot b = b \cdot a$                                              |    $\cdot$ kommutatív     |
|  6  |                                    $(a \cdot b) \cdot c = a \cdot (b \cdot c)$                                    |    $\cdot$ asszociatív    |
|  7  |                                      $!\exists 1 \in \Reals : a \cdot 1 = a$                                      |    $\cdot$ egységelem     |
|  8  |              $\forall a \in \Reals \setminus \{0\} : \exists a^{-1} \in \Reals : a \cdot a^{-1} = 1$              |    $\cdot$ inverz elem    |
|  9  |                                     $a \cdot (b + c) = a \cdot b + a \cdot c$                                     |     disztributivitás      |
| 10  |                              $\forall a, b \in \Reals : a < b \vee a = b \vee b < a$                              |        trichotómia        |
| 11  |                        $\forall a, b, c \in \Reals : a < b \land b < c \Rightarrow a < c$                         |     $<$ tranzitivitás     |
| 12  |                          $\forall a, b, c \in \Reals : a < b \Rightarrow a + c < b + c$                           |    $+$ monotonitás???     |
| 13  |                $\forall a, b, c \in \Reals : a < b \land 0 < c \Rightarrow a \cdot c < b \cdot c$                 |  $\cdot$ monotonitás???   |
| 14  |                             $\forall a \in \Reals : \exists b \in \mathbb N : a < b$                              | Arkhimédész-féle rendezés |
| 15  | $a_n \leq a_{n+1} \land b_n \geq b_{n+1}: \bigcap\limits_{n = 1}^{\infty} \left[ a_n; b_n \right] \neq \emptyset$ |       Cantor-axióma       |

- $2 - 4$: csoport,
- $1 - 4$: Abel-csoport,
- $1 - 9$: test,
- $1 - 13$: rendezett test,
- $1 - 14$: arkhimédészien rendezett test,
- $1 - 15$: teljes rendezett test.

<Statement>
  A $\mathbb Q$ és $\mathbb Q^*$ sűrű.
</Statement>