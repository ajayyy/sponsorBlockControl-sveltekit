var nt=Object.defineProperty,at=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(n,t,e)=>t in n?nt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,L=(n,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(n,e,t[e]);if(D)for(var e of D(t))W.call(t,e)&&G(n,e,t[e]);return n},X=(n,t)=>at(n,ot(t));var x=(n,t)=>{var e={};for(var s in n)J.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&D)for(var s of D(n))t.indexOf(s)<0&&W.call(n,s)&&(e[s]=n[s]);return e};import{S as lt,i as ct,s as ut,e as ft,c as ht,a as dt,d as $,b as C,f as S,t as _t,g as pt,h as gt,j,k as mt,l as E,m as B,n as wt,o as q,p as H,q as M,r as I,u as R,v as P,w as U,x as v,y as vt,z as bt,A as yt,B as K,C as Y}from"./chunks/vendor-9fba9fd8.js";import{i as Et}from"./chunks/singletons-12a22614.js";import{s as Rt}from"./chunks/paths-28a87002.js";function F(n){let t,e,s;const r=[n[2]||{}];var a=n[0][1];function i(o){let l={$$slots:{default:[$t]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(i(n))),{c(){t&&j(t.$$.fragment),e=E()},l(o){t&&B(t.$$.fragment,o),e=E()},m(o,l){t&&q(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&4?H(r,[M(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){I();const u=t;R(u.$$.fragment,1,0,()=>{P(u,1)}),U()}a?(t=new a(i(o)),j(t.$$.fragment),v(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&v(t.$$.fragment,o),s=!0)},o(o){t&&R(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&P(t,o)}}}function Q(n){let t,e,s;const r=[n[3]||{}];var a=n[0][2];function i(o){let l={};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(i())),{c(){t&&j(t.$$.fragment),e=E()},l(o){t&&B(t.$$.fragment,o),e=E()},m(o,l){t&&q(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&8?H(r,[M(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){I();const u=t;R(u.$$.fragment,1,0,()=>{P(u,1)}),U()}a?(t=new a(i()),j(t.$$.fragment),v(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&v(t.$$.fragment,o),s=!0)},o(o){t&&R(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&P(t,o)}}}function $t(n){let t,e,s=n[0][2]&&Q(n);return{c(){s&&s.c(),t=E()},l(r){s&&s.l(r),t=E()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&v(s,1)):(s=Q(r),s.c(),v(s,1),s.m(t.parentNode,t)):s&&(I(),R(s,1,1,()=>{s=null}),U())},i(r){e||(v(s),e=!0)},o(r){R(s),e=!1},d(r){s&&s.d(r),r&&$(t)}}}function kt(n){let t,e,s=n[0][1]&&F(n);return{c(){s&&s.c(),t=E()},l(r){s&&s.l(r),t=E()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&v(s,1)):(s=F(r),s.c(),v(s,1),s.m(t.parentNode,t)):s&&(I(),R(s,1,1,()=>{s=null}),U())},i(r){e||(v(s),e=!0)},o(r){R(s),e=!1},d(r){s&&s.d(r),r&&$(t)}}}function Z(n){let t,e=n[5]&&tt(n);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=dt(t);e&&e.l(r),r.forEach($),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-1j55zn5")},m(s,r){S(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&$(t),e&&e.d()}}}function tt(n){let t;return{c(){t=_t(n[6])},l(e){t=pt(e,n[6])},m(e,s){S(e,t,s)},p(e,s){s&64&&gt(t,e[6])},d(e){e&&$(t)}}}function Lt(n){let t,e,s,r;const a=[n[1]||{}];var i=n[0][0];function o(c){let u={$$slots:{default:[kt]},$$scope:{ctx:c}};for(let d=0;d<a.length;d+=1)u=K(u,a[d]);return{props:u}}i&&(t=new i(o(n)));let l=n[4]&&Z(n);return{c(){t&&j(t.$$.fragment),e=mt(),l&&l.c(),s=E()},l(c){t&&B(t.$$.fragment,c),e=wt(c),l&&l.l(c),s=E()},m(c,u){t&&q(t,c,u),S(c,e,u),l&&l.m(c,u),S(c,s,u),r=!0},p(c,[u]){const d=u&2?H(a,[M(c[1]||{})]):{};if(u&525&&(d.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){I();const h=t;R(h.$$.fragment,1,0,()=>{P(h,1)}),U()}i?(t=new i(o(c)),j(t.$$.fragment),v(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else i&&t.$set(d);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&v(t.$$.fragment,c),r=!0)},o(c){t&&R(t.$$.fragment,c),r=!1},d(c){t&&P(t,c),c&&$(e),l&&l.d(c),c&&$(s)}}}function St(n,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:i=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;vt("__svelte__",s),bt(s.page.notify);let c=!1,u=!1,d=null;return yt(()=>{const h=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,d=document.title||"untitled page"))});return e(4,c=!0),h}),n.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,r=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,i=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[a,i,o,l,c,u,d,s,r]}class At extends lt{constructor(t){super();ct(this,t,St,Lt,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Ot="modulepreload",et={},jt="/sponsorBlockControl-sveltekit/_app/",g=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${jt}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":Ot,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>t())},f=[()=>g(()=>import("./pages/__layout.svelte-8d99446c.js"),["pages/__layout.svelte-8d99446c.js","assets/pages/__layout.svelte-6b04007f.css","chunks/vendor-9fba9fd8.js","chunks/stores-3abfd37d.js","chunks/config-c3a6b1a1.js","chunks/userInfo-65a70c4e.js","chunks/paths-28a87002.js"]),()=>g(()=>import("./error.svelte-092e08b4.js"),["error.svelte-092e08b4.js","chunks/vendor-9fba9fd8.js"]),()=>g(()=>import("./pages/index.svelte-34062331.js"),["pages/index.svelte-34062331.js","assets/pages/index.svelte-7bc97ec5.css","assets/SegmentTime.svelte_svelte_type_style_lang-543bd75d.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/userInfo-65a70c4e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/utils-5593b12d.js"]),()=>g(()=>import("./pages/categorychange.svelte-4918086f.js"),["pages/categorychange.svelte-4918086f.js","assets/pages/categorychange.svelte-690e5565.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js","chunks/config-8bce724e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"]),()=>g(()=>import("./pages/lockcategories.svelte-0703c1a5.js"),["pages/lockcategories.svelte-0703c1a5.js","assets/pages/lockcategories.svelte-274363b3.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/config-8bce724e.js","chunks/stores-3abfd37d.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/VideoInput-cd7417ae.js"]),()=>g(()=>import("./pages/voteonsegment.svelte-bf49b8b1.js"),["pages/voteonsegment.svelte-bf49b8b1.js","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"]),()=>g(()=>import("./pages/cachepurge.svelte-365d9419.js"),["pages/cachepurge.svelte-365d9419.js","assets/pages/cachepurge.svelte-6fdeb9e5.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/VideoInput-cd7417ae.js"]),()=>g(()=>import("./pages/shadowban.svelte-9a68267e.js"),["pages/shadowban.svelte-9a68267e.js","assets/pages/shadowban.svelte-ffa59b2f.css","chunks/vendor-9fba9fd8.js","chunks/config-8bce724e.js","chunks/config-c3a6b1a1.js","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"]),()=>g(()=>import("./pages/settings.svelte-12b8a3bd.js"),["pages/settings.svelte-12b8a3bd.js","assets/pages/settings.svelte-678b93ba.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/userInfo-65a70c4e.js","chunks/utils-5593b12d.js"]),()=>g(()=>import("./pages/userinfo.svelte-8fe79e30.js"),["pages/userinfo.svelte-8fe79e30.js","assets/pages/userinfo.svelte-4deff412.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/stores-3abfd37d.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"]),()=>g(()=>import("./pages/username.svelte-1880cdee.js"),["pages/username.svelte-1880cdee.js","assets/pages/username.svelte-302ba4dc.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/userInfo-65a70c4e.js","chunks/utils-5593b12d.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"]),()=>g(()=>import("./pages/warnuser.svelte-9bb0dc93.js"),["pages/warnuser.svelte-9bb0dc93.js","assets/pages/cachepurge.svelte-6fdeb9e5.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"]),()=>g(()=>import("./pages/browse.svelte-977fdbbf.js"),["pages/browse.svelte-977fdbbf.js","assets/pages/browse.svelte-cbb2641e.css","assets/SegmentTime.svelte_svelte_type_style_lang-543bd75d.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-3abfd37d.js","chunks/VideoInput-cd7417ae.js"]),()=>g(()=>import("./pages/stats.svelte-19386561.js"),["pages/stats.svelte-19386561.js","assets/pages/stats.svelte-a1f98dc1.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js"]),()=>g(()=>import("./pages/vip.svelte-2ac347f5.js"),["pages/vip.svelte-2ac347f5.js","assets/pages/cachepurge.svelte-6fdeb9e5.css","chunks/vendor-9fba9fd8.js","chunks/config-c3a6b1a1.js","chunks/utils-5593b12d.js","chunks/userInfo-65a70c4e.js","chunks/Status-de6d2c9d.js","assets/Status-06a94270.css"])],qt=[[/^\/$/,[f[0],f[2]],[f[1]]],[/^\/categorychange\/?$/,[f[0],f[3]],[f[1]]],[/^\/lockcategories\/?$/,[f[0],f[4]],[f[1]]],[/^\/voteonsegment\/?$/,[f[0],f[5]],[f[1]]],[/^\/cachepurge\/?$/,[f[0],f[6]],[f[1]]],[/^\/shadowban\/?$/,[f[0],f[7]],[f[1]]],[/^\/settings\/?$/,[f[0],f[8]],[f[1]]],[/^\/userinfo\/?$/,[f[0],f[9]],[f[1]]],[/^\/username\/?$/,[f[0],f[10]],[f[1]]],[/^\/warnuser\/?$/,[f[0],f[11]],[f[1]]],[/^\/browse\/?$/,[f[0],f[12]],[f[1]]],[/^\/stats\/?$/,[f[0],f[13]],[f[1]]],[/^\/vip\/?$/,[f[0],f[14]],[f[1]]]],Pt=[f[0](),f[1]()];function Tt(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function st(n){return n.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()==="A")}function rt(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class It{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=X(L({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const i=st(a);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(i))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=st(a);if(!i||!i.href)return;const o=rt(i),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const u=i.hasAttribute("sveltekit:noscroll"),d=l.indexOf("#"),h=location.href.indexOf("#"),y=d>=0?l.substring(0,d):l,m=h>=0?location.href.substring(0,h):location.href;history.pushState({},"",o.href),y===m&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?z():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},i){const o=new URL(t,Tt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?z():null,r,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function it(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Ut(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function Vt(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Dt(n){const t=Y(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function a(i){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&i(o=l)})}return{notify:s,set:r,subscribe:a}}function Ct(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Ut(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:i}=a,o=x(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(n,t)}class Nt{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Dt({}),navigating:Y(null),session:Y(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let i={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,d=await this._load_node({module:await s[c],page:r,stuff:i,status:u?t:void 0,error:u?e:void 0});if(a.push(d),d&&d.loaded)if(d.loaded.error){if(e)throw d.loaded.error;l={status:d.loaded.status,error:d.loaded.error,path:r.path,query:r.query}}else d.loaded.stuff&&(i=L(L({},i),d.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:it(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){var l;const a=this.token={};let i=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),r){const{hash:c,scroll:u,keepfocus:d}=r;d||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const h=Math.round(pageYOffset),y=document.documentElement.scrollHeight-innerHeight;await 0;const m=Math.round(pageYOffset),k=document.documentElement.scrollHeight-innerHeight;if(m===Math.min(h,k)||y-h==k-m){const A=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):A?A.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=i.state.branch[i.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:L({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),h(),clearTimeout(d)},d=setTimeout(u,o*1e3),h=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,L({},a)},fetch(h,y){const m=typeof h=="string"?h:h.url,{href:k}=new URL(m,new URL(r.path,document.baseURI));return i.uses.dependencies.push(k),c?fetch(h,y):Ct(h,y)}};e&&(u.status=t,u.error=e);const d=await s.load.call(null,u);if(!d)return;i.loaded=Vt(d),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const i=`${s}?${r}`;if(!a){const _=this.cache.get(i);if(_)return _}const[o,l,c,u]=t,d=u?u(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(d).filter(_=>this.current.page.params[_]!==d[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},y={host:this.host,path:e,query:r,params:d};let m=[],k={},N=!1,A=200,T;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const b=await l[_](),w=this.current.branch[_];if(!w||b!==w.module||h.path&&w.uses.path||h.params.some(O=>w.uses.params.has(O))||h.query&&w.uses.query||h.session&&w.uses.session||w.uses.dependencies.some(O=>this.invalid.has(O))||N&&w.uses.stuff){p=await this._load_node({module:b,page:y,stuff:k});const O=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(A=p.loaded.status,T=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(N=!0)}else if(O&&b.load)return}else p=w}catch(b){A=500,T=it(b)}if(T){for(;_--;)if(c[_]){let b,w,V=_;for(;!(w=m[V]);)V-=1;try{if(b=await this._load_node({status:A,error:T,module:await c[_](),page:y,stuff:w.stuff}),b&&b.loaded&&b.loaded.error)continue;m=m.slice(0,V+1).concat(b);break t}catch{continue}}return await this._load_error({status:A,error:T,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(k=L(L({},k),p.loaded.stuff)),m.push(p)}return await this._get_navigation_result_from_branch({page:y,branch:m})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Yt({paths:n,target:t,session:e,host:s,route:r,spa:a,trailing_slash:i,hydrate:o}){const l=new Nt({Root:At,fallback:Pt,target:t,session:e,host:s}),c=r?new It({base:n.base,routes:qt,trailing_slash:i,renderer:l}):null;Et(c),Rt(n),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Yt as start};
