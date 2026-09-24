---
title: "Integrálási segédlet"
description: "Integrálási segédlet"
---

<BlueBox>

$$
  \int f(x) \dd x = F(x) + C
$$

| $f(x)$ | $F(x)$ |
|---|---|
| $k$ | $kx$ |
| $x^{\alpha}$ | $\dfrac{x^{\alpha+1}}{\alpha+1}$, $\alpha \ne -1$ |
| $\dfrac{1}{x}$ | $\ln|x|$ |
| $e^x$ | $e^x$ |
| $a^x$ | $\dfrac{a^x}{\ln a}$ |
| $\sin x$ | $-\cos x$ |
| $\cos x$ | $\sin x$ |
| $\dfrac{1}{\cos^2x}$ | $\tan x$ |
| $\dfrac{1}{\sin^2x}$ | $-\cot x$ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x$ |
| $-\dfrac{1}{\sqrt{1-x^2}}$ | $\arccos x$ |
| $\dfrac{1}{1+x^2}$ | $\arctan x$ |
| $-\dfrac{1}{1+x^2}$ | $\arccot x$ |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\dfrac{1}{\cosh^2x}$ | $\tanh x$ |
| $\dfrac{1}{\sinh^2x}$ | $-\coth x$ |
| $\dfrac{1}{\sqrt{x^2+1}}$ | $\arcsinh x$ |
| $\dfrac{1}{\sqrt{x^2-1}}$ | $\arccosh x$ |
| $\dfrac{1}{1-x^2}$ | $\arctanh x$ |
| $\dfrac{1}{1-x^2}$ | $\arccoth x$ |

## Linearitás

$$
  \int \lambda f(x)\,\dd x
  = \lambda \int f(x)\,\dd x
$$

$$
  \int (f(x) \pm g(x))\,\dd x
  = \int f(x)\,\dd x \pm \int g(x)\,\dd x
$$

$$
  \int_a^b f(x)\,\dd x
  = \int_a^c f(x)\,\dd x + \int_c^b f(x)\,\dd x
$$

## Parciális integrálás

$$
  \int u\,\dd v = uv - \int v\,\dd u
$$

$$
  \int f'(x)g(x)\,\dd x
  = f(x)g(x)-\int f(x)g'(x)\,\dd x
$$

## Helyettesítéses integrálás

$$
  \int e^{f(x)}f'(x)\,\dd x=e^{f(x)}+C
$$

$$
  \int \frac{f'(x)}{f(x)}\,\dd x=\ln|f(x)|+C
$$

$$
  \int f^\alpha(x)f'(x)\,\dd x
  =\frac{f^{\alpha+1}(x)}{\alpha+1}+C,
  \qquad \alpha\ne-1
$$

$$
  \int f(g(x))g'(x)\,\dd x=F(g(x))+C
$$

</BlueBox>
