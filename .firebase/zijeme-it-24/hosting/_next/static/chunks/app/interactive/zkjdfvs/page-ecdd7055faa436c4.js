(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{66463:(e,n,t)=>{Promise.resolve().then(t.bind(t,33911))},33911:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var r=t(95155),l=t(12115);let a=()=>{let[e,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{try{let e=new AbsoluteOrientationSensor({frequency:1});e.addEventListener("reading",()=>{n(e.quaternion)}),e.start()}catch(e){console.error(e)}},[]),e};var s=t(6062),u=t(38698);function i(){let e=(0,s.tm)(),{data:n}=(0,s.aB)(),t=a(),i=(0,u.KR)(e,"users/".concat(null==n?void 0:n.uid,"/orientation"));return((0,l.useEffect)(()=>{null!==n&&null!==t&&(0,u.hZ)(i,t)},[n,t]),null===t)?(0,r.jsx)("div",{className:"p-4",children:"API nen\xed dostupn\xe9."}):(0,r.jsx)("div",{className:"p-4",children:"Sledujte orientaci telefonu na prezentaci."})}}},e=>{var n=n=>e(e.s=n);e.O(0,[992,507,371,598,441,517,358],()=>n(66463)),_N_E=e.O()}]);