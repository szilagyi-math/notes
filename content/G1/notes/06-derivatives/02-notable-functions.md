---
title: "Nevezetes függvények deriváltjai"
description: "Nevezetes függvények deriváltjai"
---

<BlueBox>

## Trigonometrikus függvények

Az egységkör $x$ szöghöz tartozó pontja $(\cos x;\sin x)$. A tangens és a kotangens az egységkör megfelelő érintőszakaszaival szemléltethető.

|  $f(x)$  |                   $f'(x)$                    |
|:----------:|:----------------------------------------------:|
| $\sin x$ | $\cos x \vphantom{\dfrac{1}{\sqrt{1-x^2}}}$  |
| $\cos x$ | $-\sin x \vphantom{\dfrac{1}{\sqrt{1-x^2}}}$ |
| $\tan x$ |            $\dfrac{1}{\cos^2 x}$             |
| $\cot x$ |            $-\dfrac{1}{\sin^2 x}$            |

|   $f(x)$    |                $f'(x)$                |
|:-------------:|:---------------------------------------:|
| $\arcsin x$ |       $\dfrac{1}{\sqrt{1-x^2}}$       |
| $\arccos x$ |      $-\dfrac{1}{\sqrt{1-x^2}}$       |
| $\arctan x$ | $\dfrac{1}{1+x^2 \vphantom{\cos^2}}$  |
| $\arccot x$ | $-\dfrac{1}{1+x^2 \vphantom{\sin^2}}$ |

</BlueBox>

<BlueBox>

## Hiperbolikus függvények

Az egységhiperbola pontjai $(\cosh x;\sinh x)$ alakban paraméterezhetők, és teljesítik a $\cosh^2x-\sinh^2x=1$ azonosságot.

|  $f(x)$   |                   $f'(x)$                    |
|:-----------:|:----------------------------------------------:|
| $\sinh x$ | $\cosh x \vphantom{\dfrac{1}{\sqrt{x^2-1}}}$ |
| $\cosh x$ | $\sinh x \vphantom{\dfrac{1}{\sqrt{x^2-1}}}$ |
| $\tanh x$ |            $\dfrac{1}{\cosh^2 x}$            |
| $\coth x$ |           $-\dfrac{1}{\sinh^2 x}$            |

| $f(x)$ | $\;\;\;f'(x)$ |
|:--:|:---|
| $\arcsinh x$ | $\dfrac{1}{\sqrt{x^2+1}}$ |
| $\arccosh x$ | $\dfrac{1}{\sqrt{x^2-1}} \;\;\;\, (x > 1)$ |
| $\arctanh x$ | $\;\;\dfrac{1}{1-x^2 \vphantom{\cosh^2}} \quad (\lvert x \rvert < 1)$ |
| $\arccoth x$ | $\;\;\dfrac{1}{1-x^2 \vphantom{\sinh^2}} \quad (\lvert x \rvert > 1)$ |

</BlueBox>

<BlueBox>

## Hiperbolikus azonosságok

$$
\begin{aligned}

    \sinh x   & = \frac{e^x - e^{-x}}{2}
    
              & \cosh x                  & = \frac{e^x + e^{-x}}{2}
    \\[1mm]
    \sinh x   & = - \iu \sin(\iu x)
    
              & \cosh x                  & = \cos(\iu x)
    \\[1mm]
    \sinh^2 x & = \frac{\cosh 2x - 1}{2}
    
              & \cosh^2 x                & = \frac{\cosh 2x + 1}{2}
    \\[1mm]
    \sinh 2x  & = 2 \sinh x \cosh x
    
              & \cosh 2x                 & = \cosh^2 x + \sinh^2 x
  
\end{aligned}
$$

</BlueBox>

<Note>

## Osborne-szabály

Minden trigonometrikus azonosság egy hiperbolikus azonossággá alakítható, és fordítva, ha végrehajtjuk a következő cseréket:

- $\cos x \phantom{\sin^2} \to \quad \phantom{-} \cosh x$,

- $\sin x \phantom{\cos^2} \to \quad \phantom{-} \sinh x$,

- $\sin^2 x \phantom{\cos} \to \quad -\sinh^2 x$.

Például:
$$
\cos^2 x + \sin^2 x = 1 \quad \to \quad \cosh^2 x - \sinh^2 x = 1
    \text.
$$

</Note>

<BlueBox>

## További függvények

| $f(x)$  |                          $f'(x)$                          |
|:---------:|:-----------------------------------------------------------:|
|  $e^x$  |                           $e^x$                           |
| $\ln x$ | $\dfrac{1}{x} \vphantom{\dfrac{x^{\frac{1}{n} - 1}}{n}}$ |

| $f(x)$ | $f'(x)$ |
|:--:|:--:|
| $a^x$ | $a^x \ln a$ |
| $\log_a x$ | $\dfrac{1}{x \ln a} \vphantom{\dfrac{x^{\frac{1}{n} - 1}}{n}}$ |

|    $f(x)$     |              $f'(x)$              |
|:---------------:|:-----------------------------------:|
|     $x^n$     |        $n \cdot x^{n - 1}$        |
| $\sqrt[n]{x}$ | $\dfrac{x^{\frac{1}{n} - 1}}{n}$ |

</BlueBox>
