(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{96913:(e,r,t)=>{Promise.resolve().then(t.bind(t,6546))},6546:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var l=t(95155),a=t(30387),n=t(38698),s=t(6062),o=t(394),c=t(66963),i=t(12800),d=t(23021),u=t(40654);function h(){let e=(0,s.tm)(),r=(0,n.KR)(e,"users"),{status:t,data:h}=(0,s.o_)(r,{idField:"id"});if("success"!==t||null===h)return(0,l.jsx)(l.Fragment,{});let f=Object.entries(Object.entries(h).filter(e=>{let[r,t]=e;return"id"!==r&&"string"==typeof t.year}).reduce((e,r)=>{let[,t]=r;return{...e,[t.year]:(e[t.year]||0)+1}},{})).map((e,r)=>{let[t,l]=e;return{year:t,value:l,fill:"var(--chart-".concat(r+1,")")}}),m={bc_1:{label:"Prv\xe1k (Bc.)",color:"#000000"},bc_2:{label:"Druh\xe1k (Bc.)"},bc_3:{label:"Třeť\xe1k (Bc.)"},mgr_1:{label:"Prv\xe1k (Mgr. / Ing.)"},mgr_2:{label:"Druh\xe1k (Mgr. / Ing.)"},other_1:{label:"Nestuduji"},other_2:{label:"Absolvent (Bc.)"},other_3:{label:"Absolvent (Mgr. / Ing.)"}};return(0,l.jsx)("div",{className:"p-10",children:(0,l.jsx)(a.at,{config:m,className:"min-h-[200px] w-full",children:(0,l.jsxs)(o.E,{accessibilityLayer:!0,data:f,layout:"vertical",margin:{left:0},children:[(0,l.jsx)(c.h,{dataKey:"year",type:"category",tickLine:!1,tickMargin:20,fontSize:20,width:250,axisLine:!1,tickFormatter:e=>{var r;return null===(r=m[e])||void 0===r?void 0:r.label}}),(0,l.jsx)(i.W,{dataKey:"value",type:"number",hide:!0}),(0,l.jsx)(d.y,{dataKey:"value",layout:"horizontal",radius:10,maxBarSize:50,children:(0,l.jsx)(u.Z,{position:"center",className:"fill-[#fff]",offset:12,fontSize:20})})]})})})}},30387:(e,r,t)=>{"use strict";t.d(r,{at:()=>h});var l=t(95155),a=t(12115),n=t(58581),s=t(27112),o=t(86354),c=t(29602);let i={light:"",dark:".dark"},d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let h=a.forwardRef((e,r)=>{let{id:t,className:s,children:o,config:i,...u}=e,h=a.useId(),m="chart-".concat(t||h.replace(/:/g,""));return(0,l.jsx)(d.Provider,{value:{config:i},children:(0,l.jsxs)("div",{"data-chart":m,ref:r,className:(0,c.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...u,children:[(0,l.jsx)(f,{id:m,config:i}),(0,l.jsx)(n.u,{children:o})]})})});h.displayName="Chart";let f=e=>{let{id:r,config:t}=e,a=Object.entries(t).filter(e=>{let[,r]=e;return r.theme||r.color});return a.length?(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(i).map(e=>{let[t,l]=e;return"\n".concat(l," [data-chart=").concat(r,"] {\n").concat(a.map(e=>{var r;let[l,a]=e,n=(null===(r=a.theme)||void 0===r?void 0:r[t])||a.color;return n?"  --color-".concat(l,": ").concat(n,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null};function m(e,r,t){if("object"!=typeof r||null===r)return;let l="payload"in r&&"object"==typeof r.payload&&null!==r.payload?r.payload:void 0,a=t;return t in r&&"string"==typeof r[t]?a=r[t]:l&&t in l&&"string"==typeof l[t]&&(a=l[t]),a in e?e[a]:e[t]}s.m,a.forwardRef((e,r)=>{let{active:t,payload:n,className:s,indicator:o="dot",hideLabel:i=!1,hideIndicator:d=!1,label:h,labelFormatter:f,labelClassName:v,formatter:g,color:x,nameKey:b,labelKey:p}=e,{config:y}=u(),j=a.useMemo(()=>{var e;if(i||!(null==n?void 0:n.length))return null;let[r]=n,t="".concat(p||r.dataKey||r.name||"value"),a=m(y,r,t),s=p||"string"!=typeof h?null==a?void 0:a.label:(null===(e=y[h])||void 0===e?void 0:e.label)||h;return f?(0,l.jsx)("div",{className:(0,c.cn)("font-medium",v),children:f(s,n)}):s?(0,l.jsx)("div",{className:(0,c.cn)("font-medium",v),children:s}):null},[h,f,n,i,v,y,p]);if(!t||!(null==n?void 0:n.length))return null;let _=1===n.length&&"dot"!==o;return(0,l.jsxs)("div",{ref:r,className:(0,c.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",s),children:[_?null:j,(0,l.jsx)("div",{className:"grid gap-1.5",children:n.map((e,r)=>{let t="".concat(b||e.name||e.dataKey||"value"),a=m(y,e,t),n=x||e.payload.fill||e.color;return(0,l.jsx)("div",{className:(0,c.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:g&&(null==e?void 0:e.value)!==void 0&&e.name?g(e.value,e.name,e,r,e.payload):(0,l.jsxs)(l.Fragment,{children:[(null==a?void 0:a.icon)?(0,l.jsx)(a.icon,{}):!d&&(0,l.jsx)("div",{className:(0,c.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":_&&"dashed"===o}),style:{"--color-bg":n,"--color-border":n}}),(0,l.jsxs)("div",{className:(0,c.cn)("flex flex-1 justify-between leading-none",_?"items-end":"items-center"),children:[(0,l.jsxs)("div",{className:"grid gap-1.5",children:[_?j:null,(0,l.jsx)("span",{className:"text-muted-foreground",children:(null==a?void 0:a.label)||e.name})]}),e.value&&(0,l.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})}).displayName="ChartTooltip",o.s,a.forwardRef((e,r)=>{let{className:t,hideIcon:a=!1,payload:n,verticalAlign:s="bottom",nameKey:o}=e,{config:i}=u();return(null==n?void 0:n.length)?(0,l.jsx)("div",{ref:r,className:(0,c.cn)("flex items-center justify-center gap-4","top"===s?"pb-3":"pt-3",t),children:n.map(e=>{let r="".concat(o||e.dataKey||"value"),t=m(i,e,r);return(0,l.jsxs)("div",{className:(0,c.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==t?void 0:t.icon)&&!a?(0,l.jsx)(t.icon,{}):(0,l.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==t?void 0:t.label]},e.value)})}):null}).displayName="ChartLegend"},29602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var l=t(43463),a=t(69795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,l.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[992,507,371,217,181,205,394,441,517,358],()=>r(96913)),_N_E=e.O()}]);