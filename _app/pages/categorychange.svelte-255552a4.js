import{S as pe,i as ge,s as me,e as _,t as B,c as f,a as p,g as K,d as u,f as te,E as t,F as ve,k as R,j as be,P as Ie,n as T,m as Ee,b as E,$ as Se,a0 as ue,a1 as de,o as ye,H as ae,x as Ue,u as Ce,I as De,v as Oe,U as Ne,J as ke,a2 as Re}from"../chunks/vendor-9fc4b0a7.js";import{C as Te}from"../chunks/stores-1663c3e2.js";import{i as Le}from"../chunks/utils-dd30e544.js";import{c as _e,a as Ge}from"../chunks/config-8bce724e.js";import{a as Ve,S}from"../chunks/Status-10cd6735.js";function fe(a,o,s){const l=a.slice();return l[9]=o[s],l[11]=s,l}function he(a){let o,s=Ge[a[11]]+"",l,n;return{c(){o=_("option"),l=B(s),this.h()},l(r){o=f(r,"OPTION",{});var g=p(o);l=K(g,s),g.forEach(u),this.h()},h(){o.__value=n=a[9],o.value=o.__value},m(r,g){te(r,o,g),t(o,l)},p:ve,d(r){r&&u(o)}}}function je(a){let o,s,l,n,r,g,y,m,C,P,W,v,i,L,F,D,G,H,J,M,h,O,Q,X,V,N,Y,q,Z,k,j,$,se,A=_e,d=[];for(let e=0;e<A.length;e+=1)d[e]=he(fe(a,A,e));return k=new Ve({props:{status:a[1]}}),{c(){o=R(),s=_("main"),l=_("div"),n=_("fieldset"),r=_("legend"),g=B("Change segment category"),y=R(),m=_("div"),C=_("label"),P=B("Segment UUID:"),W=_("br"),v=R(),i=_("input"),F=R(),D=_("div"),G=_("label"),H=B("Category:"),J=_("br"),M=R(),h=_("select"),O=_("option"),Q=B("--- Select category ---");for(let e=0;e<d.length;e+=1)d[e].c();X=R(),V=_("div"),N=_("button"),Y=B(`Change
          category`),Z=R(),be(k.$$.fragment),this.h()},l(e){Ie('[data-svelte="svelte-1gjpzbo"]',document.head).forEach(u),o=T(e),s=f(e,"MAIN",{});var U=p(s);l=f(U,"DIV",{class:!0});var c=p(l);n=f(c,"FIELDSET",{});var I=p(n);r=f(I,"LEGEND",{});var le=p(r);g=K(le,"Change segment category"),le.forEach(u),y=T(I),m=f(I,"DIV",{});var w=p(m);C=f(w,"LABEL",{for:!0});var oe=p(C);P=K(oe,"Segment UUID:"),oe.forEach(u),W=f(w,"BR",{}),v=T(w),i=f(w,"INPUT",{id:!0,type:!0,size:!0,pattern:!0,placeholder:!0}),w.forEach(u),F=T(I),D=f(I,"DIV",{});var z=p(D);G=f(z,"LABEL",{for:!0});var ne=p(G);H=K(ne,"Category:"),ne.forEach(u),J=f(z,"BR",{}),M=T(z),h=f(z,"SELECT",{id:!0,class:!0});var x=p(h);O=f(x,"OPTION",{});var re=p(O);Q=K(re,"--- Select category ---"),re.forEach(u);for(let ee=0;ee<d.length;ee+=1)d[ee].l(x);x.forEach(u),z.forEach(u),X=T(I),V=f(I,"DIV",{class:!0});var ie=p(V);N=f(ie,"BUTTON",{});var ce=p(N);Y=K(ce,`Change
          category`),ce.forEach(u),ie.forEach(u),I.forEach(u),Z=T(c),Ee(k.$$.fragment,c),c.forEach(u),U.forEach(u),this.h()},h(){document.title="Category change | SponsorBlockControl",E(C,"for","uuid"),E(i,"id","uuid"),E(i,"type","text"),E(i,"size","64"),E(i,"pattern","[a-f0-9]{64}"),E(i,"placeholder","Segment UUID ..."),i.disabled=L=a[1]===S.WORKING,E(G,"for","category"),O.__value="",O.value=O.__value,E(h,"id","category"),E(h,"class","svelte-1slb73m"),a[3]===void 0&&Se(()=>a[6].call(h)),N.disabled=q=a[1]===S.WORKING||!a[2]||a[1]===S.WORKING,E(V,"class","actions"),E(l,"class","container")},m(e,b){te(e,o,b),te(e,s,b),t(s,l),t(l,n),t(n,r),t(r,g),t(n,y),t(n,m),t(m,C),t(C,P),t(m,W),t(m,v),t(m,i),ue(i,a[0]),t(n,F),t(n,D),t(D,G),t(G,H),t(D,J),t(D,M),t(D,h),t(h,O),t(O,Q);for(let U=0;U<d.length;U+=1)d[U].m(h,null);de(h,a[3]),t(n,X),t(n,V),t(V,N),t(N,Y),t(l,Z),ye(k,l,null),j=!0,$||(se=[ae(i,"input",a[5]),ae(h,"change",a[6]),ae(N,"click",a[7])],$=!0)},p(e,[b]){if((!j||b&2&&L!==(L=e[1]===S.WORKING))&&(i.disabled=L),b&1&&i.value!==e[0]&&ue(i,e[0]),b&0){A=_e;let c;for(c=0;c<A.length;c+=1){const I=fe(e,A,c);d[c]?d[c].p(I,b):(d[c]=he(I),d[c].c(),d[c].m(h,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=A.length}b&8&&de(h,e[3]),(!j||b&6&&q!==(q=e[1]===S.WORKING||!e[2]||e[1]===S.WORKING))&&(N.disabled=q);const U={};b&2&&(U.status=e[1]),k.$set(U)},i(e){j||(Ue(k.$$.fragment,e),j=!0)},o(e){Ce(k.$$.fragment,e),j=!1},d(e){e&&u(o),e&&u(s),De(d,e),Oe(k),$=!1,Ne(se)}}}function Ae(a,o,s){let l;ke(a,Te,v=>s(8,l=v));let n=S.IDLE,r="",g=!1,y="";async function m(){s(1,n=S.WORKING);const v=new URLSearchParams;v.set("UUID",r),v.set("userID",l.privateUUID),v.set("category",y);const i=await fetch(`${l.sponsorBlockApi}/api/voteOnSponsorTime?${v}`,{method:"POST"}).then(L=>L.status);i===200&&(s(1,n=S.SUCCESS),s(0,r=""),s(3,y="")),i===400&&s(1,n=S.ERROR_INVALID),i===405&&s(1,n=S.DUPLICATE)}function C(){r=this.value,s(0,r)}function P(){y=Re(this),s(3,y)}const W=v=>{m()};return a.$$.update=()=>{a.$$.dirty&1&&s(2,g=Le(r))},[r,n,g,y,m,C,P,W]}class ze extends pe{constructor(o){super();ge(this,o,Ae,je,me,{})}}export{ze as default};
