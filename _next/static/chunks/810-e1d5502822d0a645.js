(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{1643:(e,r,t)=>{"use strict";var o=t(6211);t.o(o,"usePathname")&&t.d(r,{usePathname:function(){return o.usePathname}})},3946:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=t(470);function n(e,r){let t=(0,o.useRef)(()=>{}),n=(0,o.useRef)(()=>{});return(0,o.useMemo)(()=>e&&r?o=>{null===o?(t.current(),n.current()):(t.current=l(e,o),n.current=l(r,o))}:e||r,[e,r])}function l(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},6329:e=>{e.exports={style:{fontFamily:"'Space Grotesk', 'Space Grotesk Fallback'",fontStyle:"normal"},className:"__className_0aa4ae",variable:"__variable_0aa4ae"}},8610:(e,r,t)=>{"use strict";function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{$:()=>o})},7295:(e,r,t)=>{"use strict";t.d(r,{o:()=>p});var o=t(9654),n=t(470),l=t(5478);let s=(0,n.createContext)(null);var a=t(8507),i=t(7515);let d=e=>!e.isLayoutDirty&&e.willUpdate(!1),c=e=>!0===e,u=e=>c(!0===e)||"id"===e,p=e=>{let{children:r,id:t,inherit:p=!0}=e,b=(0,n.useContext)(l.L),m=(0,n.useContext)(s),[f,g]=function(){let e=function(){let e=(0,n.useRef)(!1);return(0,a.E)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}(),[r,t]=(0,n.useState)(0),o=(0,n.useCallback)(()=>{e.current&&t(r+1)},[r]);return[(0,n.useCallback)(()=>i.Gt.postRender(o),[o]),r]}(),h=(0,n.useRef)(null),y=b.id||m;null===h.current&&(u(p)&&y&&(t=t?y+"-"+t:y),h.current={id:t,group:c(p)&&b.group||function(){let e=new Set,r=new WeakMap,t=()=>e.forEach(d);return{add:o=>{e.add(o),r.set(o,o.addEventListener("willUpdate",t))},remove:o=>{e.delete(o);let n=r.get(o);n&&(n(),r.delete(o)),t()},dirty:t}}()});let v=(0,n.useMemo)(()=>({...h.current,forceRender:f}),[g]);return(0,o.jsx)(l.L.Provider,{value:v,children:r})}},9052:(e,r,t)=>{"use strict";t.d(r,{D:()=>c,N:()=>u});var o=t(470),n=(e,r,t,o,n,l,s,a)=>{let i=document.documentElement,d=["light","dark"];function c(r){(Array.isArray(e)?e:[e]).forEach(e=>{let t="class"===e,o=t&&l?n.map(e=>l[e]||e):n;t?(i.classList.remove(...o),i.classList.add(r)):i.setAttribute(e,r)}),a&&d.includes(r)&&(i.style.colorScheme=r)}if(o)c(o);else try{let e=localStorage.getItem(r)||t,o=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(o)}catch(e){}},l=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=o.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=o.useContext(i))?e:d},u=e=>o.useContext(i)?o.createElement(o.Fragment,null,e.children):o.createElement(b,{...e}),p=["light","dark"],b=e=>{let{forcedTheme:r,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:d="theme",themes:c=p,defaultTheme:u=n?"system":"light",attribute:b="data-theme",value:y,children:v,nonce:w,scriptProps:x}=e,[k,z]=o.useState(()=>f(d,u)),[S,C]=o.useState(()=>f(d)),j=y?Object.values(y):c,E=o.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let o=y?y[r]:r,s=t?g(w):null,i=document.documentElement,d=e=>{"class"===e?(i.classList.remove(...j),o&&i.classList.add(o)):e.startsWith("data-")&&(o?i.setAttribute(e,o):i.removeAttribute(e))};if(Array.isArray(b)?b.forEach(d):d(b),a){let e=l.includes(u)?u:null,t=l.includes(r)?r:e;i.style.colorScheme=t}null==s||s()},[w]),P=o.useCallback(e=>{let r="function"==typeof e?e(k):e;z(r);try{localStorage.setItem(d,r)}catch(e){}},[k]),_=o.useCallback(e=>{C(h(e)),"system"===k&&n&&!r&&E("system")},[k,r]);o.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),o.useEffect(()=>{let e=e=>{e.key===d&&(e.newValue?z(e.newValue):P(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),o.useEffect(()=>{E(null!=r?r:k)},[r,k]);let M=o.useMemo(()=>({theme:k,setTheme:P,forcedTheme:r,resolvedTheme:"system"===k?S:k,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[k,P,r,S,n,c]);return o.createElement(i.Provider,{value:M},o.createElement(m,{forcedTheme:r,storageKey:d,attribute:b,enableSystem:n,enableColorScheme:a,defaultTheme:u,value:y,themes:c,nonce:w,scriptProps:x}),v)},m=o.memo(e=>{let{forcedTheme:r,storageKey:t,attribute:l,enableSystem:s,enableColorScheme:a,defaultTheme:i,value:d,themes:c,nonce:u,scriptProps:p}=e,b=JSON.stringify([l,t,i,r,c,d,s,a]).slice(1,-1);return o.createElement("script",{...p,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(b,")")}})}),f=(e,r)=>{let t;if(!a){try{t=localStorage.getItem(e)||void 0}catch(e){}return t||r}},g=e=>{let r=document.createElement("style");return e&&r.setAttribute("nonce",e),r.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(r)},1)}},h=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},5168:(e,r,t)=>{"use strict";t.d(r,{QP:()=>Q});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{i(t,o,e,r)}),o},i=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){i(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,s=e=>{let t;let s=[],a=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(o||e.slice(d,d+l)===r)){s.push(e.slice(i,d)),i=d+l;continue}if("/"===c){t=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===s.length?e:e.substring(i),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:t&&t>i?t-i:void 0}};return t?e=>t({className:e,parseClassName:s}):s},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},f=e=>({cache:p(e.cacheSize),parseClassName:b(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:i,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(r),p=!!u,b=o(p?c.substring(0,u):c);if(!b){if(!p||!(b=o(c))){a=r+(a.length>0?" "+a:a);continue}p=!1}let f=m(i).join(":"),g=d?f+"!":f,h=g+b;if(l.includes(h))continue;l.push(h);let y=n(b,p);for(let e=0;e<y.length;++e){let r=y[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function y(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),S=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_=e=>T(e)||z.has(e)||k.test(e),M=e=>D(e,"length",H),T=e=>!!e&&!Number.isNaN(Number(e)),G=e=>D(e,"number",T),N=e=>!!e&&Number.isInteger(Number(e)),L=e=>e.endsWith("%")&&T(e.slice(0,-1)),O=e=>x.test(e),A=e=>S.test(e),I=new Set(["length","size","percentage"]),R=e=>D(e,I,U),$=e=>D(e,"position",U),W=new Set(["image","url"]),F=e=>D(e,W,J),K=e=>D(e,"",V),q=()=>!0,D=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},H=e=>C.test(e)&&!j.test(e),U=()=>!1,V=e=>E.test(e),J=e=>P.test(e);Symbol.toStringTag;let Q=function(e,...r){let t,o,n;let l=function(a){return o=(t=f(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(a)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),a=w("borderWidth"),i=w("contrast"),d=w("grayscale"),c=w("hueRotate"),u=w("invert"),p=w("gap"),b=w("gradientColorStops"),m=w("gradientColorStopPositions"),f=w("inset"),g=w("margin"),h=w("opacity"),y=w("padding"),v=w("saturate"),x=w("scale"),k=w("sepia"),z=w("skew"),S=w("space"),C=w("translate"),j=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",O,r],I=()=>[O,r],W=()=>["",_,M],D=()=>["auto",T,O],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",O],B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[T,O];return{cacheSize:500,separator:":",theme:{colors:[q],spacing:[_,M],blur:["none","",A,O],brightness:X(),borderColor:[e],borderRadius:["none","","full",A,O],borderSpacing:I(),borderWidth:W(),contrast:X(),grayscale:Q(),hueRotate:X(),invert:Q(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[L,M],inset:P(),margin:P(),opacity:X(),padding:I(),saturate:X(),scale:X(),sepia:Q(),skew:X(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),O]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,O]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",N,O]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",N,O]},O]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[N,O]},O]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,r]}],"min-w":[{"min-w":[O,r,"min","max","fit"]}],"max-w":[{"max-w":[O,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[O,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",T,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_,M]}],"underline-offset":[{"underline-offset":["auto",_,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),$]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",R]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},F]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:U()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[_,O]}],"outline-w":[{outline:[_,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[_,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,K]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",A,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[N,O]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[_,M,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);