(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{95119:(e,r,t)=>{Promise.resolve().then(t.bind(t,15866))},15866:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(95155),a=t(85060),n=t(69606),l=t(43415),i=t(44035),o=t(10332),c=t(14085),d=t(6062),u=t(38698);let m={angular:"Angular",htmx:"HTMX",react:"React",svelte:"Svelte",jquery:"jQuery",vue:"Vue",rest:"REST",graphql:"GraphQL",nodejs:"Node.js",deno:"Deno",azure:"Azure",firebase:"Firebase",aws:"AWS",docker:"Docker",kubernetes:"Kubernetes",github:"GitHub",gitlab:"GitLab",bitbucket:"Bitbucket"},f=l.z.object(Object.keys(m).reduce((e,r)=>(e[r]=l.z.enum(["a","b","c"],{required_error:"Chyb\xed volba."}),e),{}));function x(){let e=(0,d.tm)(),{status:r,data:t}=(0,d.aB)(),l=(0,n.mN)({resolver:(0,a.u)(f)}),x=(0,u.KR)(e,"users/".concat(null==t?void 0:t.uid,"/technologies")),{status:b,data:p}=(0,d.o_)(x);if("loading"===r||"loading"===b||null===t)return(0,s.jsx)("div",{className:"p-4",children:"Nač\xedt\xe1n\xed..."});if(null!==p)return(0,s.jsx)("div",{className:"p-4",children:"Prozat\xedm sledujte předn\xe1šku."});async function h(e){await (0,u.hZ)(x,e)}return(0,s.jsx)(i.lV,{...l,children:(0,s.jsxs)("form",{onSubmit:l.handleSubmit(h),className:"m-2 pr-6 w-full space-y-3",children:[Object.keys(m).map(e=>(0,s.jsx)(i.zB,{control:l.control,name:e,defaultValue:"a",render:e=>{let{field:r}=e;return(0,s.jsxs)(i.eI,{children:[(0,s.jsx)(i.lR,{children:m[r.name]}),(0,s.jsx)(i.MJ,{children:(0,s.jsxs)(o.z,{onValueChange:r.onChange,defaultValue:"a",className:"flex justify-between w-full",children:[(0,s.jsxs)(i.eI,{className:"flex items-center space-x-3 space-y-0",children:[(0,s.jsx)(i.MJ,{children:(0,s.jsx)(o.C,{value:"a"})}),(0,s.jsx)(i.lR,{className:"font-normal",children:"Nezn\xe1m"})]}),(0,s.jsxs)(i.eI,{className:"flex items-center space-x-3 space-y-0",children:[(0,s.jsx)(i.MJ,{children:(0,s.jsx)(o.C,{value:"b"})}),(0,s.jsx)(i.lR,{className:"font-normal",children:"Zn\xe1m"})]}),(0,s.jsxs)(i.eI,{className:"flex items-center space-x-3 space-y-0",children:[(0,s.jsx)(i.MJ,{children:(0,s.jsx)(o.C,{value:"c"})}),(0,s.jsx)(i.lR,{className:"font-normal",children:"Použil(a) jsem"})]})]})}),(0,s.jsx)(i.C5,{})]})}},e)),(0,s.jsx)(c.$,{type:"submit",children:"Potvrdit"})]})})}},14085:(e,r,t)=>{"use strict";t.d(r,{$:()=>c});var s=t(95155),a=t(12115),n=t(12317),l=t(40652),i=t(29602);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:l,asChild:c=!1,...d}=e,u=c?n.DX:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:a,size:l,className:t})),ref:r,...d})});c.displayName="Button"},44035:(e,r,t)=>{"use strict";t.d(r,{lV:()=>u,MJ:()=>v,Rr:()=>g,zB:()=>f,eI:()=>p,lR:()=>h,C5:()=>j});var s=t(95155),a=t(12115),n=t(12317),l=t(69606),i=t(29602),o=t(46195);let c=(0,t(40652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(o.b,{ref:r,className:(0,i.cn)(c(),t),...a})});d.displayName=o.b.displayName;let u=l.Op,m=a.createContext({}),f=e=>{let{...r}=e;return(0,s.jsx)(m.Provider,{value:{name:r.name},children:(0,s.jsx)(l.xI,{...r})})},x=()=>{let e=a.useContext(m),r=a.useContext(b),{getFieldState:t,formState:s}=(0,l.xW)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},b=a.createContext({}),p=a.forwardRef((e,r)=>{let{className:t,...n}=e,l=a.useId();return(0,s.jsx)(b.Provider,{value:{id:l},children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...n})})});p.displayName="FormItem";let h=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:n,formItemId:l}=x();return(0,s.jsx)(d,{ref:r,className:(0,i.cn)(n&&"text-destructive",t),htmlFor:l,...a})});h.displayName="FormLabel";let v=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:l,formDescriptionId:i,formMessageId:o}=x();return(0,s.jsx)(n.DX,{ref:r,id:l,"aria-describedby":a?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!a,...t})});v.displayName="FormControl";let g=a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:n}=x();return(0,s.jsx)("p",{ref:r,id:n,className:(0,i.cn)("text-sm text-muted-foreground",t),...a})});g.displayName="FormDescription";let j=a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e,{error:l,formMessageId:o}=x(),c=l?String(null==l?void 0:l.message):a;return c?(0,s.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",t),...n,children:c}):null});j.displayName="FormMessage"},10332:(e,r,t)=>{"use strict";t.d(r,{C:()=>c,z:()=>o});var s=t(95155),a=t(12115),n=t(61945),l=t(33565),i=t(29602);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.bL,{className:(0,i.cn)("grid gap-2",t),...a,ref:r})});o.displayName=n.bL.displayName;let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.q7,{ref:r,className:(0,i.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:(0,s.jsx)(n.C1,{className:"flex items-center justify-center",children:(0,s.jsx)(l.A,{className:"h-2.5 w-2.5 fill-current text-current"})})})});c.displayName=n.q7.displayName},29602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(43463),a=t(69795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[992,507,371,217,181,877,333,441,517,358],()=>r(95119)),_N_E=e.O()}]);