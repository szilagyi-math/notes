(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2364:function(e,a,t){Promise.resolve().then(t.bind(t,3073))},3073:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var l=t(7949),s=t(4571),r=t(6265);t(3550);let n=e=>{let{children:a}=e;return(0,l.jsx)("main",{id:"main",className:"mx-auto max-w-content-width min-h-screen",children:a})};t(7924),t(1285),t(8303),t(2558),t(5894),t(2357);var i=t(1273),m=t(6491);let c=r.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,l.jsx)(i.Root,{ref:a,className:(0,m.W)("label",t),...s})});c.displayName="Label";let d=r.forwardRef((e,a)=>{let{className:t,type:s,...r}=e;return(0,l.jsx)("input",{ref:a,className:(0,m.Z)("input form-field",t),type:s,...r})});d.displayName="Input";var o=t(4173),u=t(8759);r.forwardRef((e,a)=>{let{className:t,asChild:s,size:r="md",appearance:n="solid",...i}=e,c=s?u.g7:"button";return(0,l.jsx)(c,{ref:a,className:(0,m.Z)("btn",t),"data-size":r,"data-appearance":n,...i})}).displayName="Button",t(2930);let x=[{title:"K\xf6telező t\xe1rgyak",value:"mandatory",subjects:[{name:"Matematika G1",code:"BMETE94BG01",semester:1,href:"/subjects/G1"},{name:"Matematika G2",code:"BMETE94BG02",semester:2},{name:"Matematika G3",code:"BMETE94BG03",semester:3}]},{title:"Felz\xe1rk\xf3ztat\xf3 t\xe1rgyak",value:"catch-up",subjects:[{name:"Matematika G1F",code:"BMETE94BG11",semester:1},{name:"Matematika G2F",code:"BMETE94BG12",semester:2},{name:"Matematika G3F",code:"BMETE94BG13",semester:3}]},{title:"Szabadon v\xe1laszthat\xf3 t\xe1rgyak",value:"optional",subjects:[{name:"Az egyv\xe1ltoz\xf3s anal\xedzis m\xe9rn\xf6ki alkalmaz\xe1sai",code:"BMETE90AX41",semester:1},{name:"A t\xf6bbv\xe1ltoz\xf3s anal\xedzis m\xe9rn\xf6ki alkalmaz\xe1sai",code:"BMETE90AX42",semester:2},{name:"G\xf6rb\xe9k, fel\xfcletek \xe9s transzform\xe1ci\xf3k geometri\xe1ja m\xe9rn\xf6k\xf6knek",code:"BMETE94AX11",semester:3},{name:"A differenci\xe1legyenletek \xe9s a vektoranal\xedzis m\xe9rn\xf6ki alkalmaz\xe1sai 1",code:"BMETE90AX43",semester:3},{name:"A differenci\xe1legyenletek \xe9s a vektoranal\xedzis m\xe9rn\xf6ki alkalmaz\xe1sai 2",code:"BMETE90AX44",semester:4},{name:"A val\xf3sz\xednűs\xe9gsz\xe1m\xedt\xe1s \xe9s a statisztika m\xe9rn\xf6ki alkalmaz\xe1sai 1",code:"BMETE90AX45",semester:4},{name:"Matematika G4",code:"BMETE94BG43",semester:4}]}],h=[{value:"all",label:"\xd6sszes"},{value:"mandatory",label:"K\xf6telező"},{value:"catch-up",label:"Felz\xe1rk\xf3ztat\xf3"},{value:"optional",label:"Szabadon v\xe1laszthat\xf3"}],k=[{value:0,label:"\xd6sszes"},{value:1,label:"1. f\xe9l\xe9v"},{value:2,label:"2. f\xe9l\xe9v"},{value:3,label:"3. f\xe9l\xe9v"},{value:4,label:"4. f\xe9l\xe9v"}];var v=()=>{let[e,a]=(0,r.useState)(""),[t,i]=(0,r.useState)(""),[m,u]=(0,r.useState)(0),[v,b]=(0,r.useState)("all"),f=e||t||m||"all"!==v,j=!1,p=(0,r.useCallback)(()=>{a(""),i(""),u(0),b("all")},[]),z=(0,r.useCallback)(e=>{a(e.target.value)},[a]),E=(0,r.useCallback)(e=>{i(e.target.value)},[i]);return(0,l.jsxs)(n,{children:[(0,l.jsx)("h1",{className:"text-3xl font-semibold mt-8 border-b-2 pb-2 mx-4",children:"Tant\xe1rgyak"}),(0,l.jsxs)("h2",{className:"text-xl mt-4 border-b-2 py-2 mb-2 mx-4",children:["Szűr\xe9s",f?(0,l.jsx)("button",{className:"text-accent-9 text-sm ml-2",onClick:p,children:"(Szűrők t\xf6rl\xe9se)"}):null]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 border-b-2 pb-4 mx-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{htmlFor:"name",children:"T\xe1rgy neve"}),(0,l.jsx)(d,{id:"name",value:e,onChange:z,placeholder:"Matematika G1"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{htmlFor:"code",children:"T\xe1rgyk\xf3d"}),(0,l.jsx)(d,{id:"code",value:t,onChange:E,placeholder:"BMETE94BG01"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{htmlFor:"semester",children:"Aj\xe1nlott f\xe9l\xe9v"}),(0,l.jsx)(o.RadioGroup,{name:"semester",items:k,value:m,onValueChange:u})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{htmlFor:"type",children:"T\xedpus"}),(0,l.jsx)(o.RadioGroup,{name:"type",items:h,value:v,onValueChange:b})]})]}),x.map(a=>{let{title:r,subjects:n,value:i}=a;if("all"!==v&&v!==i)return null;let c=n;return(m&&(c=c.filter(e=>{let{semester:a}=e;return a===m})),e&&(c=c.filter(a=>{let{name:t}=a;return t.toLowerCase().includes(e.toLowerCase())})),t&&(c=c.filter(e=>{let{code:a}=e;return a.toLowerCase().includes(t.toLowerCase())})),c.length)?(j=!0,(0,l.jsxs)("div",{className:"mx-4",children:[(0,l.jsx)("h2",{className:"text-xl mt-4",children:r}),(0,l.jsx)("div",{className:"overflow-x-auto w-full max-w-full py-2",children:(0,l.jsxs)("table",{className:"mt-2 min-w-[500px] w-full",children:[(0,l.jsx)("thead",{className:"bg-accent-9 text-accent-contrast border-2 border-accent-9",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"text-left p-2",children:"T\xe1rgy neve"}),(0,l.jsx)("th",{className:"w-[150px] p-2",children:"K\xf3d"}),(0,l.jsx)("th",{className:"w-[100px] p-2",children:"F\xe9l\xe9v"})]})}),(0,l.jsx)("tbody",{children:c.map(e=>{let{name:a,code:t,semester:r,href:n}=e;return(0,l.jsxs)("tr",{className:"border-2",children:[(0,l.jsx)("td",{className:"p-2",children:n?(0,l.jsx)(s.default,{className:"transition duration-300\n                              hover:text-accent-9 underline\n                              ",href:n,children:a}):a}),(0,l.jsx)("td",{className:"p-2 text-center font-mono",children:t}),(0,l.jsx)("td",{className:"p-2 text-center font-bold",children:r})]},t)})})]})})]},i)):null}),!j&&(0,l.jsx)("div",{className:"text-lg mt-4",children:"Nincs tal\xe1lat a keres\xe9si felt\xe9teleknek."})]})}}},function(e){e.O(0,[142,104,387,47,623,744],function(){return e(e.s=2364)}),_N_E=e.O()}]);