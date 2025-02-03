import rehypeKatex from 'rehype-katex';

const katex = [
  rehypeKatex,
  {
    macros: {
      '\\Reals': '\\mathbb{R}',
      '\\rvec': '\\boldsymbol{#1}',
      '\\uvec': '\\boldsymbol{\\hat{#1}}',
      '\\nvec': '\\text{\\textbf{\\textit{0}}}',
      '\\dd': '\\mathop{}\\!\\mathrm{d}',
      '\\iu': '{i\\mkern1mu}',
      '\\Domain': '\\mathcal{D}',
      '\\Range': '\\mathcal{R}',
      '\\abs': '\\left|{#1}\\right|',
      '\\odv': '\\frac{\\dd{#1}}{\\dd{#2}}',
      '\\rmat': '\\mathbf{#1}',
      '\\imat': '\\mathbb{E}',
      '\\nmat': '\\mathbb{0}',
      '\\T': '\\intercal',
      '\\edet':
        '\\det \\begin{pmatrix} \\phantom{i}\\cdots & #1 & \\cdots\\phantom{i} \\end{pmatrix}',
      '\\noskp': '\\vspace{-3mm}',

      '\\arccot': '\\operatorname{arccot}',
      '\\arcsinh': '\\operatorname{arcsinh}',
      '\\arccosh': '\\operatorname{arccosh}',
      '\\arctanh': '\\operatorname{arctanh}',
      '\\arccoth': '\\operatorname{arccoth}',
      '\\card': '\\operatorname{card}',
      '\\iRe': '\\operatorname{Re}',
      '\\iIm': '\\operatorname{Im}',
      '\\sgn': '\\operatorname{sgn}',
      '\\inner': '\\operatorname{int}',
      '\\adj': '\\operatorname{adj}',
      '\\rg': '\\operatorname{rg}',
      '\\grad': '\\operatorname{grad}',
      '\\trace': '\\operatorname{tr}',
      '\\Vol': '\\operatorname{vol}',
      '\\diam': '\\operatorname{diam}',
    },
  },
];

export { katex };
