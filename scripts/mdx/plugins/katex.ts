import rehypeKatex from 'rehype-katex'

const katex = [
  rehypeKatex,
  {
    macros: {
      "\\Reals": "\\mathbb{R}",
      "\\rvec": "\\boldsymbol{#1}",
      "\\uvec": "\\boldsymbol{\\hat{#1}}",
      "\\dd": "\\mathop{}\\!\\mathrm{d}",
      "\\iu": "{i\\mkern1mu}",
      "\\Domain": "\\mathcal{D}",
      "\\Range": "\\mathcal{R}",
      "\\abs": "\\left|{#1}\\right|",
      "\\odv": "\\frac{\\dd{#1}}{\\dd{#2}}",

      "\\arccot": "\\operatorname{arccot}",
      "\\arcsinh": "\\operatorname{arcsinh}",
      "\\arccosh": "\\operatorname{arccosh}",
      "\\arctanh": "\\operatorname{arctanh}",
      "\\arccoth": "\\operatorname{arccoth}",
      "\\card": "\\operatorname{card}",
    },
  },
]

export {
  katex
}
  