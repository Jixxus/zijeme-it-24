(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{7715:(e,t,n)=>{Promise.resolve().then(n.bind(n,23388))},23388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var i=n(95155),r=n(18081),s=n(45393),o=n(63197),a=n(70358),l=n(6062),u=n(38698),c=n(39884),d=n(60846),x=n(12115),h=n(27274),m=n(37023);function f(e){let{name:t,orientation:n,position:r}=e,s=(0,x.useRef)(),o=(0,m.zh)({from:{t:0},to:{t:1},reset:!0,config:{duration:1e3}}),[a,l]=(0,x.useState)(new h.Quaternion(0,0,0,1));return(0,x.useEffect)(()=>{null!=s&&null!=s.current&&l(new h.Quaternion().fromArray(n).invert())},[s,n]),(0,d.C)(()=>{null!=s&&null!=s.current&&s.current.quaternion.slerp(a,o.t.get())}),(0,i.jsxs)("group",{rotation:[Math.PI/2,0,0],position:new h.Vector3(r[0],r[1],r[2]),children:[(0,i.jsx)(c.E,{as:"div",position:[0,0,2],children:(0,i.jsx)("h1",{className:"-translate-x-1/2 bg-slate-500 py-2 px-4 rounded-xl text-white",children:t})}),(0,i.jsxs)("mesh",{ref:s,children:[(0,i.jsx)("boxGeometry",{args:[1.6,3.8,.1]}),(0,i.jsx)("meshStandardMaterial",{color:"#666666"})]})]})}function j(){let e=(0,l.tm)(),t=(0,u.KR)(e,"users"),{status:n,data:c}=(0,l.o_)(t,{idField:"id"});if("success"!==n||null===c)return(0,i.jsx)(i.Fragment,{});let d=Object.entries(c).filter(e=>"id"!==e[0]&&null!=e[1].orientation).map(e=>({name:e[1].name,orientation:e[1].orientation}));return(0,i.jsxs)(r.Hl,{children:[(0,i.jsx)(s.u,{makeDefault:!0,position:[0,20,0]}),(0,i.jsx)(o.x,{infiniteGrid:!0,sectionColor:"#059b39"}),(0,i.jsx)(a.a,{}),(0,i.jsx)("ambientLight",{intensity:.1}),(0,i.jsx)("directionalLight",{position:[0,5,0]}),d.map((e,t)=>(0,i.jsx)(f,{name:e.name,orientation:e.orientation,position:[6*t,0,0]},t))]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,507,371,367,413,217,398,441,517,358],()=>t(7715)),_N_E=e.O()}]);