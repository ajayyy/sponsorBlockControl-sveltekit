import{S as re,i as le,s as ie,k as R,e as i,t as B,w as de,R as ue,d as o,m as V,c as d,a as f,h as C,x as ce,b as h,I as ae,g as ne,H as e,ab as oe,y as fe,J as Q,q as _e,o as pe,B as me,W as ve,L as he}from"../chunks/index-dfbae117.js";import{C as Ie}from"../chunks/config-fe9b9627.js";import{a as Ue}from"../chunks/utils-fa7e4892.js";import{S as be,a as S}from"../chunks/Status-73b605ec.js";import"../chunks/index-9cf52d15.js";import"../chunks/userInfo-8e2fd6d8.js";function Ee(r){let D,s,a,u,A,p,m,g,N,P,n,l,_,T,z,H,c,$,I,U,F,q,J,b,M,w,Z,E,O,j,X;return E=new be({props:{status:r[2]}}),{c(){D=R(),s=i("main"),a=i("div"),u=i("p"),A=B("Only admins can do this!"),p=R(),m=i("fieldset"),g=i("legend"),N=B("Add/Remove VIP"),P=R(),n=i("div"),l=i("div"),_=i("label"),T=B("User UUID:"),z=i("br"),H=R(),c=i("input"),$=R(),I=i("div"),U=i("button"),F=B("Remove"),J=R(),b=i("button"),M=B("Add"),Z=R(),de(E.$$.fragment),this.h()},l(t){ue('[data-svelte="svelte-g4qqnd"]',document.head).forEach(o),D=V(t),s=d(t,"MAIN",{});var L=f(s);a=d(L,"DIV",{class:!0});var y=f(a);u=d(y,"P",{class:!0});var Y=f(u);A=C(Y,"Only admins can do this!"),Y.forEach(o),p=V(y),m=d(y,"FIELDSET",{});var G=f(m);g=d(G,"LEGEND",{});var x=f(g);N=C(x,"Add/Remove VIP"),x.forEach(o),P=V(G),n=d(G,"DIV",{class:!0});var W=f(n);l=d(W,"DIV",{});var k=f(l);_=d(k,"LABEL",{for:!0});var ee=f(_);T=C(ee,"User UUID:"),ee.forEach(o),z=d(k,"BR",{}),H=V(k),c=d(k,"INPUT",{id:!0,type:!0,size:!0,placeholder:!0}),k.forEach(o),$=V(W),I=d(W,"DIV",{class:!0});var K=f(I);U=d(K,"BUTTON",{});var te=f(U);F=C(te,"Remove"),te.forEach(o),J=V(K),b=d(K,"BUTTON",{});var se=f(b);M=C(se,"Add"),se.forEach(o),K.forEach(o),W.forEach(o),G.forEach(o),Z=V(y),ce(E.$$.fragment,y),y.forEach(o),L.forEach(o),this.h()},h(){document.title="VIP | SponsorBlockControl",h(u,"class","viprequired"),h(_,"for","uuid"),h(c,"id","uuid"),h(c,"type","text"),h(c,"size","64"),h(c,"placeholder","Users UUID..."),U.disabled=q=!r[1],b.disabled=w=!r[1],h(I,"class","actions"),h(n,"class","form svelte-fndrlu"),ae(n,"working",r[2]===S.WORKING),h(a,"class","container")},m(t,v){ne(t,D,v),ne(t,s,v),e(s,a),e(a,u),e(u,A),e(a,p),e(a,m),e(m,g),e(g,N),e(m,P),e(m,n),e(n,l),e(l,_),e(_,T),e(l,z),e(l,H),e(l,c),oe(c,r[0]),e(n,$),e(n,I),e(I,U),e(U,F),e(I,J),e(I,b),e(b,M),e(a,Z),fe(E,a,null),O=!0,j||(X=[Q(c,"input",r[5]),Q(U,"click",r[4]),Q(b,"click",r[3])],j=!0)},p(t,[v]){v&1&&c.value!==t[0]&&oe(c,t[0]),(!O||v&2&&q!==(q=!t[1]))&&(U.disabled=q),(!O||v&2&&w!==(w=!t[1]))&&(b.disabled=w),v&4&&ae(n,"working",t[2]===S.WORKING);const L={};v&4&&(L.status=t[2]),E.$set(L)},i(t){O||(_e(E.$$.fragment,t),O=!0)},o(t){pe(E.$$.fragment,t),O=!1},d(t){t&&o(D),t&&o(s),me(E),j=!1,ve(X)}}}function De(r,D,s){let a;he(r,Ie,n=>s(6,a=n));let u="",A=!1,p=S.IDLE;function m(){N("add")}function g(){N("remove")}async function N(n="add"){s(2,p=S.WORKING);const l=new URLSearchParams;l.set("adminUserID",a.privateUUID),l.set("userID",u),l.set("enabled",(n==="add").toString());const _=await fetch(`${a.sponsorBlockApi}/api/addUserAsVIP?${l}`,{method:"post"}).then(function(T){return T.status});_===200&&s(2,p=S.SUCCESS),_===400&&s(2,p=S.ERROR_INVALID),_===403&&s(2,p=S.ERROR_UNAUTHORIZED)}function P(){u=this.value,s(0,u)}return r.$$.update=()=>{r.$$.dirty&1&&s(1,A=Ue(u))},[u,A,p,m,g,P]}class Oe extends re{constructor(D){super(),le(this,D,De,Ee,ie,{})}}export{Oe as default};
