import{S as be,i as De,s as Se,a as b,k as r,q as P,W as me,h as l,c as D,l as a,m as u,r as T,n as o,b as H,D as e,a8 as J,I as K,u as he,E as Ie,R as Be,G as Ue,U as le}from"../../../chunks/index-a74698fd.js";import{C as re}from"../../../chunks/config-1a541b95.js";import{U as Ee}from"../../../chunks/userInfo-4f0250e6.js";import{u as ke}from"../../../chunks/utils-00bd27bd.js";function ye(v){let m,t,n,B,I,p,c,k,V,d,S,Y,U,q,i,M,w,L,z=v[1]?"Saved!":"Save",O,W,E,R,Q,X,f,g,x,$,ee,_,te,N,C,F=v[3]?"Saved!":"Save",Z,se,ae;return{c(){m=b(),t=r("fieldset"),n=r("legend"),B=P("Private userID:"),I=b(),p=r("div"),c=r("p"),k=P(`Your private userID will only be stored in your Browser and only
      send to the SponsorBlock API.`),V=b(),d=r("div"),S=r("label"),Y=P("Your private userID:"),U=r("br"),q=b(),i=r("input"),M=b(),w=r("div"),L=r("button"),O=P(z),W=b(),E=r("fieldset"),R=r("legend"),Q=P("API Server:"),X=b(),f=r("div"),g=r("label"),x=P("SponsorBlock Server:"),$=r("br"),ee=b(),_=r("input"),te=b(),N=r("div"),C=r("button"),Z=P(F),this.h()},l(s){me('[data-svelte="svelte-uaxvgn"]',document.head).forEach(l),m=D(s),t=a(s,"FIELDSET",{class:!0});var G=u(t);n=a(G,"LEGEND",{});var oe=u(n);B=T(oe,"Private userID:"),oe.forEach(l),I=D(G),p=a(G,"DIV",{class:!0});var ne=u(p);c=a(ne,"P",{});var ie=u(c);k=T(ie,`Your private userID will only be stored in your Browser and only
      send to the SponsorBlock API.`),ie.forEach(l),ne.forEach(l),V=D(G),d=a(G,"DIV",{});var y=u(d);S=a(y,"LABEL",{for:!0});var ue=u(S);Y=T(ue,"Your private userID:"),ue.forEach(l),U=a(y,"BR",{}),q=D(y),i=a(y,"INPUT",{id:!0,type:!0,size:!0,pattern:!0,spellcheck:!0,placeholder:!0,class:!0}),M=D(y),w=a(y,"DIV",{class:!0});var ve=u(w);L=a(ve,"BUTTON",{});var de=u(L);O=T(de,z),de.forEach(l),ve.forEach(l),y.forEach(l),G.forEach(l),W=D(s),E=a(s,"FIELDSET",{class:!0});var j=u(E);R=a(j,"LEGEND",{});var pe=u(R);Q=T(pe,"API Server:"),pe.forEach(l),X=D(j),f=a(j,"DIV",{});var A=u(f);g=a(A,"LABEL",{for:!0});var ce=u(g);x=T(ce,"SponsorBlock Server:"),ce.forEach(l),$=a(A,"BR",{}),ee=D(A),_=a(A,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),te=D(A),N=a(A,"DIV",{class:!0});var fe=u(N);C=a(fe,"BUTTON",{});var _e=u(C);Z=T(_e,F),_e.forEach(l),fe.forEach(l),A.forEach(l),j.forEach(l),this.h()},h(){document.title="Lock categories | SponsorBlockControl",o(p,"class","info"),o(S,"for","privateUUID"),o(i,"id","privateUUID"),o(i,"type","text"),o(i,"size","36"),o(i,"pattern","^[A-Za-z0-9]"+36+"$"),o(i,"spellcheck","false"),o(i,"placeholder","Private UUID"),o(i,"class","svelte-7nw3ib"),o(w,"class","actions"),o(t,"class","svelte-7nw3ib"),o(g,"for","serveraddr"),o(_,"type","url"),o(_,"id","serveraddr"),o(_,"class","serveraddr svelte-7nw3ib"),o(_,"placeholder","https://..."),o(N,"class","actions"),o(E,"class","svelte-7nw3ib")},m(s,h){H(s,m,h),H(s,t,h),e(t,n),e(n,B),e(t,I),e(t,p),e(p,c),e(c,k),e(t,V),e(t,d),e(d,S),e(S,Y),e(d,U),e(d,q),e(d,i),J(i,v[0]),e(d,M),e(d,w),e(w,L),e(L,O),H(s,W,h),H(s,E,h),e(E,R),e(R,Q),e(E,X),e(E,f),e(f,g),e(g,x),e(f,$),e(f,ee),e(f,_),J(_,v[2]),e(f,te),e(f,N),e(N,C),e(C,Z),se||(ae=[K(i,"input",v[6]),K(L,"click",v[5]),K(_,"input",v[7]),K(C,"click",v[4])],se=!0)},p(s,[h]){h&1&&i.value!==s[0]&&J(i,s[0]),h&2&&z!==(z=s[1]?"Saved!":"Save")&&he(O,z),h&4&&J(_,s[2]),h&8&&F!==(F=s[3]?"Saved!":"Save")&&he(Z,F)},i:Ie,o:Ie,d(s){s&&l(m),s&&l(t),s&&l(W),s&&l(E),se=!1,Be(ae)}}}function Ae(v,m,t){let n,B;Ue(v,re,U=>t(8,n=U)),Ue(v,Ee,U=>t(9,B=U));let I=n.privateUUID,p=!1,c=n.sponsorBlockApi,k=!1;function V(U){le(re,n.sponsorBlockApi=c,n),t(3,k=!0),setTimeout(q=>{t(3,k=!1)},3e3)}async function d(U){n.privateUUID!=I&&le(Ee,B=null,B),le(re,n.privateUUID=I,n),t(1,p=!0),await ke(!0),setTimeout(q=>{t(1,p=!1)},3e3)}function S(){I=this.value,t(0,I)}function Y(){c=this.value,t(2,c)}return[I,p,c,k,V,d,S,Y]}class ge extends be{constructor(m){super(),De(this,m,Ae,ye,Se,{})}}export{ge as default};
