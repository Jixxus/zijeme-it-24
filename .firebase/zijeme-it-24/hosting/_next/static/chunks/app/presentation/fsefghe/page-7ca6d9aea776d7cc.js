(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{58815:(e,t,r)=>{Promise.resolve().then(r.bind(r,1224))},1224:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var l=r(95155),a=r(30387),n=r(38698),s=r(6062),o=r(22175),i=r(90457),c=r(40654),d=r(33084);function u(){let e=(0,s.tm)(),t=(0,n.KR)(e,"users"),{status:r,data:u}=(0,s.o_)(t,{idField:"id"});if("success"!==r||null===u)return(0,l.jsx)("div",{className:"flex w-full h-full justify-center items-center",children:(0,l.jsx)(d.X,{value:"https://zijeme-it-24.web.app",size:500,className:"w-full"})});let f=Object.entries(Object.entries(u).filter(e=>{let[t,r]=e;return"id"!==t&&"string"==typeof r.browser}).reduce((e,t)=>{let[,r]=t;return{...e,[r.browser]:(e[r.browser]||0)+1}},{})).map((e,t)=>{let[r,l]=e;return{browser:r,value:l,fill:"var(--chart-".concat(t+1,")")}}),h=Object.entries(Object.entries(u).filter(e=>{let[t,r]=e;return"id"!==t&&"string"==typeof r.system}).reduce((e,t)=>{let[,r]=t;return{...e,[r.system]:(e[r.system]||0)+1}},{})).map((e,t)=>{let[r,l]=e;return{system:r,value:l,fill:"var(--chart-".concat(t+1,")")}}),m={},x=Math.PI/180,v=e=>{let{cx:t,cy:r,midAngle:a,innerRadius:n,outerRadius:s,percent:o}=e,i=n+(s-n)*.5,c=t+i*Math.cos(-a*x),d=r+i*Math.sin(-a*x);return(0,l.jsx)("text",{x:c+25,y:d+40,fill:"white",textAnchor:c>t?"start":"end",dominantBaseline:"central",fontSize:25,children:"".concat((100*o).toFixed(0),"%")})};return(0,l.jsxs)("div",{className:"flex w-full h-full",children:[(0,l.jsx)("div",{className:"flex w-1/2 h-full justify-center items-center",children:(0,l.jsx)(d.X,{value:"https://zijeme-it-24.web.app/",size:500,className:"w-full"})}),(0,l.jsxs)("div",{className:"flex flex-col w-1/2 p-10",children:[(0,l.jsx)(a.at,{config:m,className:"w-full h-1/2",children:(0,l.jsx)(o.r,{children:(0,l.jsx)(i.F,{data:f,dataKey:"value",nameKey:"browser",innerRadius:0,strokeWidth:5,labelLine:!1,label:v,children:(0,l.jsx)(c.Z,{dataKey:"browser",position:"middle",className:"fill-[#fff]",stroke:"none",offset:0,fontSize:25,formatter:e=>e})})})}),(0,l.jsx)(a.at,{config:m,className:"w-full h-1/2",children:(0,l.jsx)(o.r,{children:(0,l.jsx)(i.F,{data:h,dataKey:"value",nameKey:"system",innerRadius:0,strokeWidth:5,labelLine:!1,label:v,children:(0,l.jsx)(c.Z,{dataKey:"system",position:"middle",className:"fill-[#fff]",stroke:"none",offset:0,fontSize:25,formatter:e=>e})})})})]})]})}},30387:(e,t,r)=>{"use strict";r.d(t,{at:()=>f});var l=r(95155),a=r(12115),n=r(58581),s=r(27112),o=r(86354),i=r(29602);let c={light:"",dark:".dark"},d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let f=a.forwardRef((e,t)=>{let{id:r,className:s,children:o,config:c,...u}=e,f=a.useId(),m="chart-".concat(r||f.replace(/:/g,""));return(0,l.jsx)(d.Provider,{value:{config:c},children:(0,l.jsxs)("div",{"data-chart":m,ref:t,className:(0,i.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...u,children:[(0,l.jsx)(h,{id:m,config:c}),(0,l.jsx)(n.u,{children:o})]})})});f.displayName="Chart";let h=e=>{let{id:t,config:r}=e,a=Object.entries(r).filter(e=>{let[,t]=e;return t.theme||t.color});return a.length?(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(c).map(e=>{let[r,l]=e;return"\n".concat(l," [data-chart=").concat(t,"] {\n").concat(a.map(e=>{var t;let[l,a]=e,n=(null===(t=a.theme)||void 0===t?void 0:t[r])||a.color;return n?"  --color-".concat(l,": ").concat(n,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null};function m(e,t,r){if("object"!=typeof t||null===t)return;let l="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,a=r;return r in t&&"string"==typeof t[r]?a=t[r]:l&&r in l&&"string"==typeof l[r]&&(a=l[r]),a in e?e[a]:e[r]}s.m,a.forwardRef((e,t)=>{let{active:r,payload:n,className:s,indicator:o="dot",hideLabel:c=!1,hideIndicator:d=!1,label:f,labelFormatter:h,labelClassName:x,formatter:v,color:p,nameKey:b,labelKey:g}=e,{config:j}=u(),y=a.useMemo(()=>{var e;if(c||!(null==n?void 0:n.length))return null;let[t]=n,r="".concat(g||t.dataKey||t.name||"value"),a=m(j,t,r),s=g||"string"!=typeof f?null==a?void 0:a.label:(null===(e=j[f])||void 0===e?void 0:e.label)||f;return h?(0,l.jsx)("div",{className:(0,i.cn)("font-medium",x),children:h(s,n)}):s?(0,l.jsx)("div",{className:(0,i.cn)("font-medium",x),children:s}):null},[f,h,n,c,x,j,g]);if(!r||!(null==n?void 0:n.length))return null;let w=1===n.length&&"dot"!==o;return(0,l.jsxs)("div",{ref:t,className:(0,i.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",s),children:[w?null:y,(0,l.jsx)("div",{className:"grid gap-1.5",children:n.map((e,t)=>{let r="".concat(b||e.name||e.dataKey||"value"),a=m(j,e,r),n=p||e.payload.fill||e.color;return(0,l.jsx)("div",{className:(0,i.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:v&&(null==e?void 0:e.value)!==void 0&&e.name?v(e.value,e.name,e,t,e.payload):(0,l.jsxs)(l.Fragment,{children:[(null==a?void 0:a.icon)?(0,l.jsx)(a.icon,{}):!d&&(0,l.jsx)("div",{className:(0,i.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":w&&"dashed"===o}),style:{"--color-bg":n,"--color-border":n}}),(0,l.jsxs)("div",{className:(0,i.cn)("flex flex-1 justify-between leading-none",w?"items-end":"items-center"),children:[(0,l.jsxs)("div",{className:"grid gap-1.5",children:[w?y:null,(0,l.jsx)("span",{className:"text-muted-foreground",children:(null==a?void 0:a.label)||e.name})]}),e.value&&(0,l.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})}).displayName="ChartTooltip",o.s,a.forwardRef((e,t)=>{let{className:r,hideIcon:a=!1,payload:n,verticalAlign:s="bottom",nameKey:o}=e,{config:c}=u();return(null==n?void 0:n.length)?(0,l.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center justify-center gap-4","top"===s?"pb-3":"pt-3",r),children:n.map(e=>{let t="".concat(o||e.dataKey||"value"),r=m(c,e,t);return(0,l.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==r?void 0:r.icon)&&!a?(0,l.jsx)(r.icon,{}):(0,l.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==r?void 0:r.label]},e.value)})}):null}).displayName="ChartLegend"},29602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var l=r(43463),a=r(69795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,l.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,507,371,217,181,205,775,441,517,358],()=>t(58815)),_N_E=e.O()}]);