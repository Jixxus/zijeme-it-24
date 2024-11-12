"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{67401:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(12115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:s="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:l?24*Number(a)/Number(o):a,className:u("lucide",s),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:l,...s}=r;return(0,n.createElement)(a,{ref:i,iconNode:t,className:u("lucide-".concat(o(e)),l),...s})});return r.displayName="".concat(e),r}},33565:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(67401).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},61945:(e,t,r)=>{r.d(t,{C1:()=>ei,q7:()=>eu,bL:()=>eo});var n=r(12115),o=r.t(n,2);function u(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}var i=r(88068),a=r(95155);function l(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),i=r.length;r=[...r,o];let l=t=>{let{scope:r,children:o,...l}=t,s=r?.[e]?.[i]||u,c=n.useMemo(()=>l,Object.values(l));return(0,a.jsx)(s.Provider,{value:c,children:o})};return l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e]?.[i]||u,s=n.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}var s=r(23360),c=r(12317),d=globalThis?.document?n.useLayoutEffect:()=>{},f=o["useId".toString()]||(()=>void 0),p=0;function m(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}function v({prop:e,defaultProp:t,onChange:r=()=>{}}){let[o,u]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[o]=r,u=n.useRef(o),i=m(t);return n.useEffect(()=>{u.current!==o&&(i(o),u.current=o)},[o,u,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,a=i?e:o,l=m(r);return[a,n.useCallback(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&l(r)}else u(t)},[i,e,u,l])]}var w=n.createContext(void 0);function h(e){let t=n.useContext(w);return e||t||"ltr"}var y="rovingFocusGroup.onEntryFocus",N={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[b,x,R]=function(e){let t=e+"CollectionProvider",[r,o]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),i=r.length;function l(t){let{scope:r,children:o,...l}=t,s=r?.[e][i]||u,c=n.useMemo(()=>l,Object.values(l));return(0,a.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e][i]||u,s=n.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(t),[u,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,o=n.useRef(null),i=n.useRef(new Map).current;return(0,a.jsx)(u,{scope:t,itemMap:i,collectionRef:o,children:r})};s.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=l(d,r),u=(0,i.s)(t,o.collectionRef);return(0,a.jsx)(c.DX,{ref:u,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",m="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:o,...u}=e,s=n.useRef(null),d=(0,i.s)(t,s),f=l(p,r);return n.useEffect(()=>(f.itemMap.set(s,{ref:s,...u}),()=>void f.itemMap.delete(s))),(0,a.jsx)(c.DX,{[m]:"",ref:d,children:o})});return v.displayName=p,[{Provider:s,Slot:f,ItemSlot:v},function(t){let r=l(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},o]}(g),[E,C]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),i=r.length;function l(t){let{scope:r,children:o,...l}=t,s=r?.[e][i]||u,c=n.useMemo(()=>l,Object.values(l));return(0,a.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e][i]||u,s=n.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(g,[R]),[A,k]=E(g),M=n.forwardRef((e,t)=>(0,a.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(j,{...e,ref:t})})}));M.displayName=g;var j=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:o,loop:l=!1,dir:c,currentTabStopId:d,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:p,onEntryFocus:w,preventScrollOnEntryFocus:g=!1,...b}=e,R=n.useRef(null),E=(0,i.s)(t,R),C=h(c),[k=null,M]=v({prop:d,defaultProp:f,onChange:p}),[j,S]=n.useState(!1),I=m(w),_=x(r),T=n.useRef(!1),[P,D]=n.useState(0);return n.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(y,I),()=>e.removeEventListener(y,I)},[I]),(0,a.jsx)(A,{scope:r,orientation:o,dir:C,loop:l,currentTabStopId:k,onItemFocus:n.useCallback(e=>M(e),[M]),onItemShiftTab:n.useCallback(()=>S(!0),[]),onFocusableItemAdd:n.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>D(e=>e-1),[]),children:(0,a.jsx)(s.sG.div,{tabIndex:j||0===P?-1:0,"data-orientation":o,...b,ref:E,style:{outline:"none",...e.style},onMouseDown:u(e.onMouseDown,()=>{T.current=!0}),onFocus:u(e.onFocus,e=>{let t=!T.current;if(e.target===e.currentTarget&&t&&!j){let t=new CustomEvent(y,N);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=_().filter(e=>e.focusable);O([e.find(e=>e.active),e.find(e=>e.id===k),...e].filter(Boolean).map(e=>e.ref.current),g)}}T.current=!1}),onBlur:u(e.onBlur,()=>S(!1))})})}),S="RovingFocusGroupItem",I=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:o=!0,active:i=!1,tabStopId:l,...c}=e,m=function(e){let[t,r]=n.useState(f());return d(()=>{r(e=>e??String(p++))},[void 0]),t?`radix-${t}`:""}(),v=l||m,w=k(S,r),h=w.currentTabStopId===v,y=x(r),{onFocusableItemAdd:N,onFocusableItemRemove:g}=w;return n.useEffect(()=>{if(o)return N(),()=>g()},[o,N,g]),(0,a.jsx)(b.ItemSlot,{scope:r,id:v,focusable:o,active:i,children:(0,a.jsx)(s.sG.span,{tabIndex:h?0:-1,"data-orientation":w.orientation,...c,ref:t,onMouseDown:u(e.onMouseDown,e=>{o?w.onItemFocus(v):e.preventDefault()}),onFocus:u(e.onFocus,()=>w.onItemFocus(v)),onKeyDown:u(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){w.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return _[o]}(e,w.orientation,w.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=y().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=w.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>O(r))}})})})});I.displayName=S;var _={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function O(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var T=e=>{let{present:t,children:r}=e,o=function(e){var t,r;let[o,u]=n.useState(),i=n.useRef({}),a=n.useRef(e),l=n.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=P(i.current);l.current="mounted"===s?e:"none"},[s]),d(()=>{let t=i.current,r=a.current;if(r!==e){let n=l.current,o=P(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):r&&n!==o?c("ANIMATION_OUT"):c("UNMOUNT"),a.current=e}},[e,c]),d(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=P(i.current).includes(e.animationName);if(e.target===o&&n&&(c("ANIMATION_END"),!a.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},u=e=>{e.target===o&&(l.current=P(i.current))};return o.addEventListener("animationstart",u),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",u),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:n.useCallback(e=>{e&&(i.current=getComputedStyle(e)),u(e)},[])}}(t),u="function"==typeof r?r({present:o.isPresent}):n.Children.only(r),a=(0,i.s)(o.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof r||o.isPresent?n.cloneElement(u,{ref:a}):null};function P(e){return(null==e?void 0:e.animationName)||"none"}T.displayName="Presence";var D="Radio",[L,F]=l(D),[$,U]=L(D),G=n.forwardRef((e,t)=>{let{__scopeRadio:r,name:o,checked:l=!1,required:c,disabled:d,value:f="on",onCheck:p,form:m,...v}=e,[w,h]=n.useState(null),y=(0,i.s)(t,e=>h(e)),N=n.useRef(!1),g=!w||m||!!w.closest("form");return(0,a.jsxs)($,{scope:r,checked:l,disabled:d,children:[(0,a.jsx)(s.sG.button,{type:"button",role:"radio","aria-checked":l,"data-state":B(l),"data-disabled":d?"":void 0,disabled:d,value:f,...v,ref:y,onClick:u(e.onClick,e=>{l||null==p||p(),g&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())})}),g&&(0,a.jsx)(z,{control:w,bubbles:!N.current,name:o,value:f,checked:l,required:c,disabled:d,form:m,style:{transform:"translateX(-100%)"}})]})});G.displayName=D;var K="RadioIndicator",W=n.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:n,...o}=e,u=U(K,r);return(0,a.jsx)(T,{present:n||u.checked,children:(0,a.jsx)(s.sG.span,{"data-state":B(u.checked),"data-disabled":u.disabled?"":void 0,...o,ref:t})})});W.displayName=K;var z=e=>{let{control:t,checked:r,bubbles:o=!0,...u}=e,i=n.useRef(null),l=function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r),s=function(e){let[t,r]=n.useState(void 0);return d(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let u=t[0];if("borderBoxSize"in u){let e=u.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(t);return n.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[l,r,o]),(0,a.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...u,tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function B(e){return e?"checked":"unchecked"}var q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],H="RadioGroup",[V,X]=l(H,[C,F]),Z=C(),J=F(),[Q,Y]=V(H),ee=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:n,defaultValue:o,value:u,required:i=!1,disabled:l=!1,orientation:c,dir:d,loop:f=!0,onValueChange:p,...m}=e,w=Z(r),y=h(d),[N,g]=v({prop:u,defaultProp:o,onChange:p});return(0,a.jsx)(Q,{scope:r,name:n,required:i,disabled:l,value:N,onValueChange:g,children:(0,a.jsx)(M,{asChild:!0,...w,orientation:c,dir:y,loop:f,children:(0,a.jsx)(s.sG.div,{role:"radiogroup","aria-required":i,"aria-orientation":c,"data-disabled":l?"":void 0,dir:y,...m,ref:t})})})});ee.displayName=H;var et="RadioGroupItem",er=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:o,...l}=e,s=Y(et,r),c=s.disabled||o,d=Z(r),f=J(r),p=n.useRef(null),m=(0,i.s)(t,p),v=s.value===l.value,w=n.useRef(!1);return n.useEffect(()=>{let e=e=>{q.includes(e.key)&&(w.current=!0)},t=()=>w.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,a.jsx)(I,{asChild:!0,...d,focusable:!c,active:v,children:(0,a.jsx)(G,{disabled:c,required:s.required,checked:v,...f,...l,name:s.name,ref:m,onCheck:()=>s.onValueChange(l.value),onKeyDown:u(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:u(l.onFocus,()=>{var e;w.current&&(null===(e=p.current)||void 0===e||e.click())})})})});er.displayName=et;var en=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...n}=e,o=J(r);return(0,a.jsx)(W,{...o,...n,ref:t})});en.displayName="RadioGroupIndicator";var eo=ee,eu=er,ei=en}}]);