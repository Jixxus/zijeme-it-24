(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{18546:(e,t,r)=>{Promise.resolve().then(r.bind(r,71246))},71246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var i=r(95155),n=r(14085),s=r(35007),a=r(44035),o=r(12115),u=r(29602);let d=o.forwardRef((e,t)=>{let{className:r,type:n,...s}=e;return(0,i.jsx)("input",{type:n,className:(0,u.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...s})});d.displayName="Input";var c=r(85060),l=r(14565),f=r(38698),m=r(76046),g=r(69606),h=r(6062),p=r(5565),v=r(43415),b=r(55900);let M=v.z.object({name:v.z.string().min(3,"Přezd\xedvka mus\xed b\xfdt alespoň 3 znaky dlouh\xe9.").max(20,"Přezd\xedvka mus\xed m\xedt maxim\xe1lně 20 znaků.")});function w(){let e=(0,m.useRouter)(),t=(0,h.tm)(),r=(0,h.aB)(),u=(0,h.As)(),[v,w]=(0,o.useState)(!1),S=(0,g.mN)({resolver:(0,c.u)(M),defaultValues:{name:""}});async function _(e){w(!0);let r=await (0,l.zK)(u),i=(0,f.KR)(t,"users/"+r.user.uid+"/name");await (0,f.hZ)(i,e.name);let n=(0,b.getParser)(window.navigator.userAgent),s=(0,f.KR)(t,"users/"+r.user.uid+"/browser");await (0,f.hZ)(s,n.getBrowser().name);let a=(0,f.KR)(t,"users/"+r.user.uid+"/system");await (0,f.hZ)(a,n.getOS().name),w(!1)}return((0,o.useEffect)(()=>{"success"===r.status&&null!==r.data&&!1===v&&e.replace("/interactive")},[e,r,v]),"loading"===r.status)?(0,i.jsx)("div",{className:"mb-[92px]",children:"Loading..."}):(0,i.jsxs)("div",{className:"w-full h-full flex flex-col items-center ",children:[(0,i.jsxs)("div",{className:"flex flex-col pt-20 pb-10 gap-4",children:[(0,i.jsx)(p.default,{src:"https://backend.sewio.net/storage/app/media/brand/Logotypes/sewio-hid-logo-color-safe-zone-rgb.svg",width:200,height:200,alt:"Sewio Logo"}),(0,i.jsx)(p.default,{src:"https://www.zijemeit.cz/images/zijemeit.svg",width:200,height:200,alt:"ŽijemeIT Logo"})]}),(0,i.jsx)(s.Zp,{className:"mb-[92px] p-2 !bg-center !bg-cover max-w-[400px] w-[90%]",style:{background:"var(--gradient)"},children:(0,i.jsx)(a.lV,{...S,children:(0,i.jsxs)("form",{autoComplete:"off",onSubmit:S.handleSubmit(_),children:[(0,i.jsx)(s.Wu,{className:"pt-6",children:(0,i.jsx)(a.zB,{control:S.control,name:"name",render:e=>{let{field:t}=e;return(0,i.jsxs)(a.eI,{children:[(0,i.jsx)(a.lR,{children:"Zvolte si přezd\xedvku:"}),(0,i.jsx)(a.MJ,{children:(0,i.jsx)(d,{...t})}),(0,i.jsx)(a.C5,{}),(0,i.jsx)(a.Rr,{children:"Přezd\xedvku můžou vidět ostatn\xed!"})]})}})}),(0,i.jsx)(s.wL,{children:(0,i.jsx)(n.$,{className:"w-full",type:"submit",children:"Potvrdit"})})]})})})]})}},14085:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var i=r(95155),n=r(12115),s=r(12317),a=r(40652),o=r(29602);let u=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:d=!1,...c}=e,l=d?s.DX:"button";return(0,i.jsx)(l,{className:(0,o.cn)(u({variant:n,size:a,className:r})),ref:t,...c})});d.displayName="Button"},35007:(e,t,r)=>{"use strict";r.d(t,{Wu:()=>o,Zp:()=>a,wL:()=>u});var i=r(95155),n=r(12115),s=r(29602);let a=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});a.displayName="Card",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})}).displayName="CardHeader",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})}).displayName="CardTitle",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})}).displayName="CardDescription";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});o.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},44035:(e,t,r)=>{"use strict";r.d(t,{lV:()=>l,MJ:()=>b,Rr:()=>M,zB:()=>m,eI:()=>p,lR:()=>v,C5:()=>w});var i=r(95155),n=r(12115),s=r(12317),a=r(69606),o=r(29602),u=r(46195);let d=(0,r(40652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)(u.b,{ref:t,className:(0,o.cn)(d(),r),...n})});c.displayName=u.b.displayName;let l=a.Op,f=n.createContext({}),m=e=>{let{...t}=e;return(0,i.jsx)(f.Provider,{value:{name:t.name},children:(0,i.jsx)(a.xI,{...t})})},g=()=>{let e=n.useContext(f),t=n.useContext(h),{getFieldState:r,formState:i}=(0,a.xW)(),s=r(e.name,i);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},h=n.createContext({}),p=n.forwardRef((e,t)=>{let{className:r,...s}=e,a=n.useId();return(0,i.jsx)(h.Provider,{value:{id:a},children:(0,i.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});p.displayName="FormItem";let v=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:a}=g();return(0,i.jsx)(c,{ref:t,className:(0,o.cn)(s&&"text-destructive",r),htmlFor:a,...n})});v.displayName="FormLabel";let b=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:a,formDescriptionId:o,formMessageId:u}=g();return(0,i.jsx)(s.DX,{ref:t,id:a,"aria-describedby":n?"".concat(o," ").concat(u):"".concat(o),"aria-invalid":!!n,...r})});b.displayName="FormControl";let M=n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=g();return(0,i.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})});M.displayName="FormDescription";let w=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e,{error:a,formMessageId:u}=g(),d=a?String(null==a?void 0:a.message):n;return d?(0,i.jsx)("p",{ref:t,id:u,className:(0,o.cn)("text-sm font-medium text-destructive",r),...s,children:d}):null});w.displayName="FormMessage"},29602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var i=r(43463),n=r(69795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,i.$)(t))}},55900:function(e){var t;t=function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,(function(t){return e[t]}).bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(18),n=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,i){void 0===i&&(i=!1);var n=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(n,s),o=0,u=e.map([t,r],function(t){var r=a-e.getVersionPrecision(t),i=t+Array(r+1).join(".0");return e.map(i.split("."),function(e){return Array(20-e.length).join("0")+e}).reverse()});for(i&&(o=a-Math.min(n,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return -1}},e.map=function(e,t){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i},e.find=function(e,t){var r,i;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,i=e.length;r<i;r+=1){var n=e[r];if(t(n,r))return n}},e.assign=function(e){for(var t,r,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];if(Object.assign)return Object.assign.apply(Object,[e].concat(n));for(t=0,r=n.length;t<r;t+=1)(function(){var r=n[t];"object"==typeof r&&null!==r&&Object.keys(r).forEach(function(t){e[t]=r[t]})})();return e},e.getBrowserAlias=function(e){return i.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return i.BROWSER_MAP[e]||""},e}();t.default=n,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(91))&&i.__esModule?i:{default:i},s=r(18),a=function(){function e(){}return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw Error("UserAgent should be a string");return new n.default(e,t)},e.parse=function(e){return new n.default(e).getResult()},function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e,[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}]),e}();t.default=a,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=u(r(92)),n=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(i.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(n.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},i=0,n={},s=0;if(Object.keys(e).forEach(function(t){var a=e[t];"string"==typeof a?(n[t]=a,s+=1):"object"==typeof a&&(r[t]=a,i+=1)}),i>0){var a=Object.keys(r),u=o.default.find(a,function(e){return t.isOS(e)});if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,function(e){return t.isPlatform(e)});if(c){var l=this.satisfies(r[c]);if(void 0!==l)return l}}if(s>0){var f=Object.keys(n),m=o.default.find(f,function(e){return t.isBrowser(e,!0)});if(void 0!==m)return this.compareVersion(n[m])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),i=e.toLowerCase(),n=o.default.getBrowserTypeByAlias(i);return t&&n&&(i=n.toLowerCase()),i===r},t.compareVersion=function(e){var t=[0],r=e,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(i=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(i=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(n,r,i))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some(function(e){return t.is(e)})},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=n.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=n.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18),a=[{test:[/Roku\/DVP/],describe:function(e){var t=n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=n.default.getMacOSVersionName(t),i={name:s.OS_MAP.MacOS,version:t};return r&&(i.versionName=r),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),i={name:s.OS_MAP.Android,version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18),a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18),a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})},e.exports=t()}},e=>{var t=t=>e(e.s=t);e.O(0,[992,507,371,217,181,877,738,441,517,358],()=>t(18546)),_N_E=e.O()}]);