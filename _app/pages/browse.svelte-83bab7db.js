import{S as nt,i as rt,s as ot,e as f,t as b,c as d,a as m,h as S,d as c,b as h,I as Xe,g as j,G as a,j as Se,H as Ke,J as je,P as Zt,ab as Ht,T as xt,U as es,V as ts,q,o as Y,C as Pt,aa as Mt,ac as ss,D as ls,w as me,k as T,x as _e,m as k,y as ge,ad as We,n as Rt,p as Ot,B as pe,W as jt,L as kt,l as pt,K as qt,ae as as,a4 as ns,a5 as rs,R as os,a0 as is,a2 as zt,a9 as cs,a6 as us,v as fs,a3 as ds}from"../chunks/vendor-029251f6.js";import{C as hs}from"../chunks/config-b3d4a71f.js";import{a as ms,S as mt}from"../chunks/Status-95729226.js";/* empty css                                                          */import{g as _s}from"../chunks/navigation-b10cf5bf.js";import{p as gs}from"../chunks/stores-4307d1b5.js";import{V as ps}from"../chunks/VideoInput-269e9c3d.js";import"../chunks/singletons-4a680913.js";function vs(s){let e,t,l,n,i,o=s[1].toString().padStart(2,"0")+"",u,r,_,I=s[2].toString().padStart(2,"0")+"",N,ue,w,C;return{c(){e=f("span"),t=f("span"),l=b(s[0]),n=b(":"),i=f("span"),u=b(o),r=b(":"),_=f("span"),N=b(I),ue=b("."),w=f("span"),C=b(s[3]),this.h()},l(L){e=d(L,"SPAN",{class:!0});var D=m(e);t=d(D,"SPAN",{class:!0});var H=m(t);l=S(H,s[0]),n=S(H,":"),H.forEach(c),i=d(D,"SPAN",{class:!0});var ae=m(i);u=S(ae,o),r=S(ae,":"),ae.forEach(c),_=d(D,"SPAN",{class:!0});var E=m(_);N=S(E,I),ue=S(E,"."),E.forEach(c),w=d(D,"SPAN",{class:!0});var V=m(w);C=S(V,s[3]),V.forEach(c),D.forEach(c),this.h()},h(){h(t,"class","svelte-58feot"),Xe(t,"inactive",s[0]===0),h(i,"class","svelte-58feot"),Xe(i,"inactive",s[1]===0),h(_,"class",""),h(w,"class","milliseconds svelte-58feot"),h(e,"class","time svelte-58feot")},m(L,D){j(L,e,D),a(e,t),a(t,l),a(t,n),a(e,i),a(i,u),a(i,r),a(e,_),a(_,N),a(_,ue),a(e,w),a(w,C)},p(L,[D]){D&1&&Se(l,L[0]),D&1&&Xe(t,"inactive",L[0]===0),D&2&&o!==(o=L[1].toString().padStart(2,"0")+"")&&Se(u,o),D&2&&Xe(i,"inactive",L[1]===0),D&4&&I!==(I=L[2].toString().padStart(2,"0")+"")&&Se(N,I),D&8&&Se(C,L[3])},i:Ke,o:Ke,d(L){L&&c(e)}}}let Dt=3;function bs(s,e,t){let{value:l=0}=e,n=0,i=0,o=0,u="0";return s.$$set=r=>{"value"in r&&t(4,l=r.value)},s.$$.update=()=>{if(s.$$.dirty&16){let r=Number(l),_=r.toString();t(3,u="0".repeat(Dt)),_.includes(".")&&t(3,u=_.split(".")[1].padEnd(Dt,"0").slice(0,Dt)),r=Math.floor(l),t(0,n=Math.floor(r/3600)),t(1,i=Math.floor(r/60%60)),t(2,o=Math.floor(r%60))}},[n,i,o,u,l]}class It extends nt{constructor(e){super();rt(this,e,bs,vs,ot,{value:4})}}function Ft(s){let e,t;return{c(){e=f("div"),t=b("Copied!"),this.h()},l(l){e=d(l,"DIV",{class:!0});var n=m(e);t=S(n,"Copied!"),n.forEach(c),this.h()},h(){h(e,"class","success svelte-1f7dggz")},m(l,n){j(l,e,n),a(e,t)},d(l){l&&c(e)}}}function Ss(s){let e,t,l,n,i=s[1]&&Ft();return{c(){e=f("button"),i&&i.c(),t=b(`
  \u2702`),this.h()},l(o){e=d(o,"BUTTON",{title:!0,class:!0});var u=m(e);i&&i.l(u),t=S(u,`
  \u2702`),u.forEach(c),this.h()},h(){h(e,"title",s[0]),h(e,"class","svelte-1f7dggz")},m(o,u){j(o,e,u),i&&i.m(e,null),a(e,t),l||(n=je(e,"click",s[4]),l=!0)},p(o,[u]){o[1]?i||(i=Ft(),i.c(),i.m(e,t)):i&&(i.d(1),i=null),u&1&&h(e,"title",o[0])},i:Ke,o:Ke,d(o){o&&c(e),i&&i.d(),l=!1,n()}}}function $s(s,e,t){let{value:l=""}=e,{title:n="Copy to clipboard"}=e,i=!1;function o(){navigator.clipboard.writeText(l).then(()=>{console.log("Copied to clipboard"),t(1,i=!0),setTimeout(r=>{t(1,i=!1)},2e3)},r=>{console.log("Failed to copy into clipboard",r)})}const u=r=>o();return s.$$set=r=>{"value"in r&&t(3,l=r.value),"title"in r&&t(0,n=r.title)},[n,i,o,l,u]}class Yt extends nt{constructor(e){super();rt(this,e,$s,Ss,ot,{value:3,title:0})}}function Es(s){let e,t,l,n,i,o;const u=s[5].default,r=Zt(u,s,s[4],null);return{c(){e=f("span"),r&&r.c(),this.h()},l(_){e=d(_,"SPAN",{class:!0,title:!0});var I=m(e);r&&r.l(I),I.forEach(c),this.h()},h(){h(e,"class",t=""+(Ht(`header ${s[3].class}`)+" svelte-1s8upei")),h(e,"title",l=`Sort by ${s[0]}`),Xe(e,"active",s[2]===s[0]),Xe(e,"sort--asc",s[1]==="ASC")},m(_,I){j(_,e,I),r&&r.m(e,null),n=!0,i||(o=je(e,"click",s[6]),i=!0)},p(_,[I]){r&&r.p&&(!n||I&16)&&xt(r,u,_,_[4],n?ts(u,_[4],I,null):es(_[4]),null),(!n||I&8&&t!==(t=""+(Ht(`header ${_[3].class}`)+" svelte-1s8upei")))&&h(e,"class",t),(!n||I&1&&l!==(l=`Sort by ${_[0]}`))&&h(e,"title",l),I&13&&Xe(e,"active",_[2]===_[0]),I&10&&Xe(e,"sort--asc",_[1]==="ASC")},i(_){n||(q(r,_),n=!0)},o(_){Y(r,_),n=!1},d(_){_&&c(e),r&&r.d(_),i=!1,o()}}}function Ts(s,e,t){let{$$slots:l={},$$scope:n}=e,{name:i}=e,{sorting:o="DESC"}=e,{current:u=""}=e;function r(_){ss.call(this,s,_)}return s.$$set=_=>{t(3,e=Pt(Pt({},e),Mt(_))),"name"in _&&t(0,i=_.name),"sorting"in _&&t(1,o=_.sorting),"current"in _&&t(2,u=_.current),"$$scope"in _&&t(4,n=_.$$scope)},e=Mt(e),[i,o,u,e,n,l,r]}class Je extends nt{constructor(e){super();rt(this,e,Ts,Es,ot,{name:0,sorting:1,current:2})}}const ks=ls([{id:"sponsor",color:"#00d400"},{id:"intro",color:"#00ffff"},{id:"outro",color:"#0202ed"},{id:"interaction",color:"#cc00ff"},{id:"selfpromo",color:"#ffff00"},{id:"music_offtopic",color:"#ff9900"},{id:"preview",color:"#0b9d65"},{id:"poi_highlight",color:"#ff1684"},{id:"filler",color:"#7300ff"}]);function Gt(s,e,t){const l=s.slice();return l[10]=e[t],l}function Ds(s){let e;return{c(){e=b("Submitted")},l(t){e=S(t,"Submitted")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Is(s){let e;return{c(){e=b("Start/End")},l(t){e=S(t,"Start/End")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function ws(s){let e;return{c(){e=b("Votes")},l(t){e=S(t,"Votes")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Cs(s){let e;return{c(){e=b("Views")},l(t){e=S(t,"Views")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function ys(s){let e;return{c(){e=b("Category")},l(t){e=S(t,"Category")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Bs(s){let e;return{c(){e=b("Hidden")},l(t){e=S(t,"Hidden")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Ls(s){let e;return{c(){e=b("Actiontype")},l(t){e=S(t,"Actiontype")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function As(s){let e;return{c(){e=b("ShadowHidden")},l(t){e=S(t,"ShadowHidden")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Us(s){let e;return{c(){e=b("Locked")},l(t){e=S(t,"Locked")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Vs(s){let e,t,l=s[2],n=[];for(let o=0;o<l.length;o+=1)n[o]=Wt(Gt(s,l,o));const i=o=>Y(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=pt()},l(o){for(let u=0;u<n.length;u+=1)n[u].l(o);e=pt()},m(o,u){for(let r=0;r<n.length;r+=1)n[r].m(o,u);j(o,e,u),t=!0},p(o,u){if(u&52){l=o[2];let r;for(r=0;r<l.length;r+=1){const _=Gt(o,l,r);n[r]?(n[r].p(_,u),q(n[r],1)):(n[r]=Wt(_),n[r].c(),q(n[r],1),n[r].m(e.parentNode,e))}for(Rt(),r=l.length;r<n.length;r+=1)i(r);Ot()}},i(o){if(!t){for(let u=0;u<l.length;u+=1)q(n[u]);t=!0}},o(o){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)Y(n[u]);t=!1},d(o){qt(n,o),o&&c(e)}}}function Ns(s){let e,t,l,n;return{c(){e=f("tr"),t=f("td"),l=f("div"),n=b("Loading data..."),this.h()},l(i){e=d(i,"TR",{});var o=m(e);t=d(o,"TD",{colspan:!0,class:!0});var u=m(t);l=d(u,"DIV",{class:!0});var r=m(l);n=S(r,"Loading data..."),r.forEach(c),u.forEach(c),o.forEach(c),this.h()},h(){h(l,"class","loading svelte-19x84r4"),h(t,"colspan","12"),h(t,"class","svelte-19x84r4")},m(i,o){j(i,e,o),a(e,t),a(t,l),a(l,n)},p:Ke,i:Ke,o:Ke,d(i){i&&c(e)}}}function Kt(s){let e,t;return{c(){e=f("span"),t=b("\u274C"),this.h()},l(l){e=d(l,"SPAN",{class:!0,title:!0});var n=m(e);t=S(n,"\u274C"),n.forEach(c),this.h()},h(){h(e,"class","removed svelte-19x84r4"),h(e,"title","Segment removed")},m(l,n){j(l,e,n),a(e,t)},d(l){l&&c(e)}}}function Hs(s){let e;return{c(){e=b("\u2014")},l(t){e=S(t,"\u2014")},m(t,l){j(t,e,l)},d(t){t&&c(e)}}}function Ps(s){let e,t;return{c(){e=f("span"),t=b("\u{1F512}"),this.h()},l(l){e=d(l,"SPAN",{class:!0,title:!0});var n=m(e);t=S(n,"\u{1F512}"),n.forEach(c),this.h()},h(){h(e,"class","locked svelte-19x84r4"),h(e,"title","Locked by VIP/Moderator")},m(l,n){j(l,e,n),a(e,t)},d(l){l&&c(e)}}}function Wt(s){let e,t,l=Jt(s[10].timeSubmitted)+"",n,i,o,u,r,_,I,N,ue,w,C,L,D,H,ae=s[10].votes+"",E,V,Q,ne=s[10].views+"",R,Be,X,z,G=s[10].category+"",K,O,Le,Z,U=(s[10].hidden||"\u2014")+"",A,$e,fe,re=(s[10].actionType in s[4]?s[4][s[10].actionType]:s[10].actionType)+"",M,Ue,Ce,oe=(s[10].shadowHidden||"\u2014")+"",x,ie,ee,Ve,Ee,F,te=s[10].UUID+"",Ne,g,v,ce,y,se,P,de=s[10].userID+"",ve,ke,be,le,ye,W;r=new It({props:{value:s[10].startTime}}),I=new It({props:{value:s[10].endTime}}),C=new It({props:{value:s[10].endTime-s[10].startTime}});let J=s[10].votes<-1&&Kt();function De(p,$){return p[10].locked?Ps:Hs}let He=De(s),Te=He(s);return ce=new Yt({props:{value:s[10].UUID}}),le=new Yt({props:{value:s[10].userID}}),{c(){e=f("tr"),t=f("td"),n=b(l),i=T(),o=f("td"),u=f("a"),me(r.$$.fragment),_=f("br"),me(I.$$.fragment),ue=T(),w=f("td"),me(C.$$.fragment),L=T(),D=f("td"),J&&J.c(),H=T(),E=b(ae),V=T(),Q=f("td"),R=b(ne),Be=T(),X=f("td"),z=f("span"),K=b(G),Le=T(),Z=f("td"),A=b(U),$e=T(),fe=f("td"),M=b(re),Ue=T(),Ce=f("td"),x=b(oe),ie=T(),ee=f("td"),Te.c(),Ve=T(),Ee=f("td"),F=f("span"),Ne=b(te),g=f("br"),v=T(),me(ce.$$.fragment),y=T(),se=f("td"),P=f("span"),ve=b(de),ke=f("br"),be=T(),me(le.$$.fragment),ye=T(),this.h()},l(p){e=d(p,"TR",{});var $=m(e);t=d($,"TD",{class:!0});var Fe=m(t);n=S(Fe,l),Fe.forEach(c),i=k($),o=d($,"TD",{class:!0});var Ie=m(o);u=d(Ie,"A",{href:!0,class:!0});var Pe=m(u);_e(r.$$.fragment,Pe),_=d(Pe,"BR",{}),_e(I.$$.fragment,Pe),Pe.forEach(c),Ie.forEach(c),ue=k($),w=d($,"TD",{class:!0});var Me=m(w);_e(C.$$.fragment,Me),Me.forEach(c),L=k($),D=d($,"TD",{class:!0});var we=m(D);J&&J.l(we),H=k(we),E=S(we,ae),we.forEach(c),V=k($),Q=d($,"TD",{class:!0});var et=m(Q);R=S(et,ne),et.forEach(c),Be=k($),X=d($,"TD",{class:!0});var Qe=m(X);z=d(Qe,"SPAN",{class:!0,style:!0});var Ze=m(z);K=S(Ze,G),Ze.forEach(c),Qe.forEach(c),Le=k($),Z=d($,"TD",{class:!0});var tt=m(Z);A=S(tt,U),tt.forEach(c),$e=k($),fe=d($,"TD",{class:!0});var st=m(fe);M=S(st,re),st.forEach(c),Ue=k($),Ce=d($,"TD",{class:!0});var Re=m(Ce);x=S(Re,oe),Re.forEach(c),ie=k($),ee=d($,"TD",{class:!0});var Ae=m(ee);Te.l(Ae),Ae.forEach(c),Ve=k($),Ee=d($,"TD",{class:!0});var Ye=m(Ee);F=d(Ye,"SPAN",{class:!0});var it=m(F);Ne=S(it,te),it.forEach(c),g=d(Ye,"BR",{}),v=k(Ye),_e(ce.$$.fragment,Ye),Ye.forEach(c),y=k($),se=d($,"TD",{class:!0});var xe=m(se);P=d(xe,"SPAN",{class:!0});var ct=m(P);ve=S(ct,de),ct.forEach(c),ke=d(xe,"BR",{}),be=k(xe),_e(le.$$.fragment,xe),xe.forEach(c),ye=k($),$.forEach(c),this.h()},h(){h(t,"class","cell-text svelte-19x84r4"),h(u,"href",N=`https://www.youtube.com/watch?v=${s[10].videoID}${s[10].startTime>2?`&t=${Math.floor(Math.max(0,s[10].startTime-2))}s`:""}#requiredSegment=${s[10].UUID}`),h(u,"class","svelte-19x84r4"),h(o,"class","cell-number svelte-19x84r4"),h(w,"class","cell-number svelte-19x84r4"),h(D,"class","cell-number nowrap svelte-19x84r4"),h(Q,"class","cell-number svelte-19x84r4"),h(z,"class","category svelte-19x84r4"),h(z,"style",O=`background-color:${s[5](s[10].category)}`),h(X,"class","cell-text svelte-19x84r4"),h(Z,"class","cell-text svelte-19x84r4"),h(fe,"class","cell-text svelte-19x84r4"),h(Ce,"class","cell-text svelte-19x84r4"),h(ee,"class","cell-text svelte-19x84r4"),h(F,"class","wordbreak wordbreak--uuid svelte-19x84r4"),h(Ee,"class","cell-text svelte-19x84r4"),h(P,"class","wordbreak wordbreak--uuid svelte-19x84r4"),h(se,"class","cell-text svelte-19x84r4")},m(p,$){j(p,e,$),a(e,t),a(t,n),a(e,i),a(e,o),a(o,u),ge(r,u,null),a(u,_),ge(I,u,null),a(e,ue),a(e,w),ge(C,w,null),a(e,L),a(e,D),J&&J.m(D,null),a(D,H),a(D,E),a(e,V),a(e,Q),a(Q,R),a(e,Be),a(e,X),a(X,z),a(z,K),a(e,Le),a(e,Z),a(Z,A),a(e,$e),a(e,fe),a(fe,M),a(e,Ue),a(e,Ce),a(Ce,x),a(e,ie),a(e,ee),Te.m(ee,null),a(e,Ve),a(e,Ee),a(Ee,F),a(F,Ne),a(Ee,g),a(Ee,v),ge(ce,Ee,null),a(e,y),a(e,se),a(se,P),a(P,ve),a(se,ke),a(se,be),ge(le,se,null),a(e,ye),W=!0},p(p,$){(!W||$&4)&&l!==(l=Jt(p[10].timeSubmitted)+"")&&Se(n,l);const Fe={};$&4&&(Fe.value=p[10].startTime),r.$set(Fe);const Ie={};$&4&&(Ie.value=p[10].endTime),I.$set(Ie),(!W||$&4&&N!==(N=`https://www.youtube.com/watch?v=${p[10].videoID}${p[10].startTime>2?`&t=${Math.floor(Math.max(0,p[10].startTime-2))}s`:""}#requiredSegment=${p[10].UUID}`))&&h(u,"href",N);const Pe={};$&4&&(Pe.value=p[10].endTime-p[10].startTime),C.$set(Pe),p[10].votes<-1?J||(J=Kt(),J.c(),J.m(D,H)):J&&(J.d(1),J=null),(!W||$&4)&&ae!==(ae=p[10].votes+"")&&Se(E,ae),(!W||$&4)&&ne!==(ne=p[10].views+"")&&Se(R,ne),(!W||$&4)&&G!==(G=p[10].category+"")&&Se(K,G),(!W||$&4&&O!==(O=`background-color:${p[5](p[10].category)}`))&&h(z,"style",O),(!W||$&4)&&U!==(U=(p[10].hidden||"\u2014")+"")&&Se(A,U),(!W||$&4)&&re!==(re=(p[10].actionType in p[4]?p[4][p[10].actionType]:p[10].actionType)+"")&&Se(M,re),(!W||$&4)&&oe!==(oe=(p[10].shadowHidden||"\u2014")+"")&&Se(x,oe),He!==(He=De(p))&&(Te.d(1),Te=He(p),Te&&(Te.c(),Te.m(ee,null))),(!W||$&4)&&te!==(te=p[10].UUID+"")&&Se(Ne,te);const Me={};$&4&&(Me.value=p[10].UUID),ce.$set(Me),(!W||$&4)&&de!==(de=p[10].userID+"")&&Se(ve,de);const we={};$&4&&(we.value=p[10].userID),le.$set(we)},i(p){W||(q(r.$$.fragment,p),q(I.$$.fragment,p),q(C.$$.fragment,p),q(ce.$$.fragment,p),q(le.$$.fragment,p),W=!0)},o(p){Y(r.$$.fragment,p),Y(I.$$.fragment,p),Y(C.$$.fragment,p),Y(ce.$$.fragment,p),Y(le.$$.fragment,p),W=!1},d(p){p&&c(e),pe(r),pe(I),pe(C),J&&J.d(),Te.d(),pe(ce),pe(le)}}}function Ms(s){let e,t,l,n,i,o,u,r,_,I,N,ue,w,C,L,D,H,ae,E,V,Q,ne,R,Be,X,z,G,K,O,Le,Z,U,A,$e,fe,re,M,Ue,Ce,oe,x,ie,ee,Ve,Ee;i=new Je({props:{sortBy:"timeSubmitted",name:"timeSubmitted",sorting:s[0],current:s[3],$$slots:{default:[Ds]},$$scope:{ctx:s}}}),r=new Je({props:{name:"startTime",sorting:s[0],current:s[3],$$slots:{default:[Is]},$$scope:{ctx:s}}}),C=new Je({props:{name:"votes",sorting:s[0],current:s[3],$$slots:{default:[ws]},$$scope:{ctx:s}}}),H=new Je({props:{name:"views",sorting:s[0],current:s[3],$$slots:{default:[Cs]},$$scope:{ctx:s}}}),V=new Je({props:{name:"category",sorting:s[0],current:s[3],$$slots:{default:[ys]},$$scope:{ctx:s}}}),R=new Je({props:{name:"hidden",sorting:s[0],current:s[3],$$slots:{default:[Bs]},$$scope:{ctx:s}}}),z=new Je({props:{name:"hidden",sorting:s[0],current:s[3],$$slots:{default:[Ls]},$$scope:{ctx:s}}}),O=new Je({props:{name:"shadowHidden",sorting:s[0],current:s[3],$$slots:{default:[As]},$$scope:{ctx:s}}}),U=new Je({props:{name:"locked",sorting:s[0],current:s[3],$$slots:{default:[Us]},$$scope:{ctx:s}}});const F=[Ns,Vs],te=[];function Ne(g,v){return g[1]?0:1}return x=Ne(s),ie=te[x]=F[x](s),{c(){e=f("table"),t=f("thead"),l=f("tr"),n=f("th"),me(i.$$.fragment),o=T(),u=f("th"),me(r.$$.fragment),_=T(),I=f("th"),N=b("Length"),ue=T(),w=f("th"),me(C.$$.fragment),L=T(),D=f("th"),me(H.$$.fragment),ae=T(),E=f("th"),me(V.$$.fragment),Q=T(),ne=f("th"),me(R.$$.fragment),Be=T(),X=f("th"),me(z.$$.fragment),G=T(),K=f("th"),me(O.$$.fragment),Le=T(),Z=f("th"),me(U.$$.fragment),A=T(),$e=f("th"),fe=b("UUID"),re=T(),M=f("th"),Ue=b("Submitter UUID"),Ce=T(),oe=f("tbody"),ie.c(),this.h()},l(g){e=d(g,"TABLE",{class:!0});var v=m(e);t=d(v,"THEAD",{class:!0});var ce=m(t);l=d(ce,"TR",{});var y=m(l);n=d(y,"TH",{class:!0,"data-sortby":!0});var se=m(n);_e(i.$$.fragment,se),se.forEach(c),o=k(y),u=d(y,"TH",{class:!0,"data-sortby":!0});var P=m(u);_e(r.$$.fragment,P),P.forEach(c),_=k(y),I=d(y,"TH",{class:!0});var de=m(I);N=S(de,"Length"),de.forEach(c),ue=k(y),w=d(y,"TH",{class:!0,"data-sortby":!0});var ve=m(w);_e(C.$$.fragment,ve),ve.forEach(c),L=k(y),D=d(y,"TH",{class:!0,"data-sortby":!0});var ke=m(D);_e(H.$$.fragment,ke),ke.forEach(c),ae=k(y),E=d(y,"TH",{class:!0,"data-sortby":!0});var be=m(E);_e(V.$$.fragment,be),be.forEach(c),Q=k(y),ne=d(y,"TH",{class:!0,"data-sortby":!0});var le=m(ne);_e(R.$$.fragment,le),le.forEach(c),Be=k(y),X=d(y,"TH",{class:!0,"data-sortby":!0});var ye=m(X);_e(z.$$.fragment,ye),ye.forEach(c),G=k(y),K=d(y,"TH",{class:!0,"data-sortby":!0});var W=m(K);_e(O.$$.fragment,W),W.forEach(c),Le=k(y),Z=d(y,"TH",{class:!0,"data-sortby":!0});var J=m(Z);_e(U.$$.fragment,J),J.forEach(c),A=k(y),$e=d(y,"TH",{class:!0});var De=m($e);fe=S(De,"UUID"),De.forEach(c),re=k(y),M=d(y,"TH",{class:!0});var He=m(M);Ue=S(He,"Submitter UUID"),He.forEach(c),y.forEach(c),ce.forEach(c),Ce=k(v),oe=d(v,"TBODY",{});var Te=m(oe);ie.l(Te),Te.forEach(c),v.forEach(c),this.h()},h(){h(n,"class","cell-text svelte-19x84r4"),h(n,"data-sortby","timeSubmitted"),h(u,"class","cell-number svelte-19x84r4"),h(u,"data-sortby","startTime"),h(I,"class","cell-number svelte-19x84r4"),h(w,"class","cell-number svelte-19x84r4"),h(w,"data-sortby","votes"),h(D,"class","cell-number svelte-19x84r4"),h(D,"data-sortby","views"),h(E,"class","cell-text svelte-19x84r4"),h(E,"data-sortby","category"),h(ne,"class","cell-number svelte-19x84r4"),h(ne,"data-sortby","hidden"),h(X,"class","cell-text svelte-19x84r4"),h(X,"data-sortby","actiontype"),h(K,"class","cell-number svelte-19x84r4"),h(K,"data-sortby","shadowHidden"),h(Z,"class","cell-number svelte-19x84r4"),h(Z,"data-sortby","locked"),h($e,"class","cell-text svelte-19x84r4"),h(M,"class","cell-text svelte-19x84r4"),h(t,"class","svelte-19x84r4"),h(e,"class","svelte-19x84r4")},m(g,v){j(g,e,v),a(e,t),a(t,l),a(l,n),ge(i,n,null),a(l,o),a(l,u),ge(r,u,null),a(l,_),a(l,I),a(I,N),a(l,ue),a(l,w),ge(C,w,null),a(l,L),a(l,D),ge(H,D,null),a(l,ae),a(l,E),ge(V,E,null),a(l,Q),a(l,ne),ge(R,ne,null),a(l,Be),a(l,X),ge(z,X,null),a(l,G),a(l,K),ge(O,K,null),a(l,Le),a(l,Z),ge(U,Z,null),a(l,A),a(l,$e),a($e,fe),a(l,re),a(l,M),a(M,Ue),a(e,Ce),a(e,oe),te[x].m(oe,null),ee=!0,Ve||(Ee=[We(s[6].call(null,n)),We(s[6].call(null,u)),We(s[6].call(null,w)),We(s[6].call(null,D)),We(s[6].call(null,E)),We(s[6].call(null,ne)),We(s[6].call(null,X)),We(s[6].call(null,K)),We(s[6].call(null,Z))],Ve=!0)},p(g,[v]){const ce={};v&1&&(ce.sorting=g[0]),v&8&&(ce.current=g[3]),v&8192&&(ce.$$scope={dirty:v,ctx:g}),i.$set(ce);const y={};v&1&&(y.sorting=g[0]),v&8&&(y.current=g[3]),v&8192&&(y.$$scope={dirty:v,ctx:g}),r.$set(y);const se={};v&1&&(se.sorting=g[0]),v&8&&(se.current=g[3]),v&8192&&(se.$$scope={dirty:v,ctx:g}),C.$set(se);const P={};v&1&&(P.sorting=g[0]),v&8&&(P.current=g[3]),v&8192&&(P.$$scope={dirty:v,ctx:g}),H.$set(P);const de={};v&1&&(de.sorting=g[0]),v&8&&(de.current=g[3]),v&8192&&(de.$$scope={dirty:v,ctx:g}),V.$set(de);const ve={};v&1&&(ve.sorting=g[0]),v&8&&(ve.current=g[3]),v&8192&&(ve.$$scope={dirty:v,ctx:g}),R.$set(ve);const ke={};v&1&&(ke.sorting=g[0]),v&8&&(ke.current=g[3]),v&8192&&(ke.$$scope={dirty:v,ctx:g}),z.$set(ke);const be={};v&1&&(be.sorting=g[0]),v&8&&(be.current=g[3]),v&8192&&(be.$$scope={dirty:v,ctx:g}),O.$set(be);const le={};v&1&&(le.sorting=g[0]),v&8&&(le.current=g[3]),v&8192&&(le.$$scope={dirty:v,ctx:g}),U.$set(le);let ye=x;x=Ne(g),x===ye?te[x].p(g,v):(Rt(),Y(te[ye],1,1,()=>{te[ye]=null}),Ot(),ie=te[x],ie?ie.p(g,v):(ie=te[x]=F[x](g),ie.c()),q(ie,1),ie.m(oe,null))},i(g){ee||(q(i.$$.fragment,g),q(r.$$.fragment,g),q(C.$$.fragment,g),q(H.$$.fragment,g),q(V.$$.fragment,g),q(R.$$.fragment,g),q(z.$$.fragment,g),q(O.$$.fragment,g),q(U.$$.fragment,g),q(ie),ee=!0)},o(g){Y(i.$$.fragment,g),Y(r.$$.fragment,g),Y(C.$$.fragment,g),Y(H.$$.fragment,g),Y(V.$$.fragment,g),Y(R.$$.fragment,g),Y(z.$$.fragment,g),Y(O.$$.fragment,g),Y(U.$$.fragment,g),Y(ie),ee=!1},d(g){g&&c(e),pe(i),pe(r),pe(C),pe(H),pe(V),pe(R),pe(z),pe(O),pe(U),te[x].d(),Ve=!1,jt(Ee)}}}const wt="ASC",vt="DESC";function Jt(s){const e=new Date(s);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}function Rs(s,e,t){let l;kt(s,ks,w=>t(9,l=w));let{segments:n=[]}=e,{isLoading:i=!1}=e,{sortDirection:o="DESC"}=e,{sortBy:u="timeSubmitted"}=e,r;const _={skip:"\u23ED\uFE0F",mute:"\u{1F507}"};let I=u;o=o==="DESC"?vt:wt;function N(w){var C;return((C=l.find(L=>L.id===w))===null||C===void 0?void 0:C.color)||"transparent"}function ue(w){const C=w.getAttribute("sortBy");w.addEventListener("click",L=>{I===C?t(0,o=o===vt?wt:vt):(t(0,o=vt),t(3,I=C)),t(2,r=[...n].sort((D,H)=>D[C]===H[C]?0:D[C]>H[C]?-1:1)),o===wt&&t(2,r=[...r].reverse())})}return s.$$set=w=>{"segments"in w&&t(7,n=w.segments),"isLoading"in w&&t(1,i=w.isLoading),"sortDirection"in w&&t(0,o=w.sortDirection),"sortBy"in w&&t(8,u=w.sortBy)},s.$$.update=()=>{s.$$.dirty&128&&t(2,r=[...n])},[o,i,r,I,_,N,ue,n,u]}class Os extends nt{constructor(e){super();rt(this,e,Rs,Ms,ot,{segments:7,isLoading:1,sortDirection:0,sortBy:8})}}function Qt(s,e,t){const l=s.slice();return l[7]=e[t],l[9]=t,l}function Xt(s){let e,t=s[9]+1+"",l,n,i,o;function u(){return s[3](s[9])}return{c(){e=f("button"),l=b(t),this.h()},l(r){e=d(r,"BUTTON",{});var _=m(e);l=S(_,t),_.forEach(c),this.h()},h(){e.disabled=n=s[0]===s[9]+1},m(r,_){j(r,e,_),a(e,l),i||(o=je(e,"click",u),i=!0)},p(r,_){s=r,_&1&&n!==(n=s[0]===s[9]+1)&&(e.disabled=n)},d(r){r&&c(e),i=!1,o()}}}function js(s){let e,t=Array(s[1]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Xt(Qt(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=pt()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=pt()},m(n,i){for(let o=0;o<l.length;o+=1)l[o].m(n,i);j(n,e,i)},p(n,[i]){if(i&7){t=Array(n[1]);let o;for(o=0;o<t.length;o+=1){const u=Qt(n,t,o);l[o]?l[o].p(u,i):(l[o]=Xt(u),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},i:Ke,o:Ke,d(n){qt(l,n),n&&c(e)}}}function qs(s,e,t){let{current:l=1}=e,{last:n=1}=e;const i=as();function o(r){i("click",{page:r})}const u=r=>o(r+1);return s.$$set=r=>{"current"in r&&t(0,l=r.current),"last"in r&&t(1,n=r.last)},s.$$.update=()=>{s.$$.dirty&3,s.$$.dirty&1},[l,n,o,u]}class zs extends nt{constructor(e){super();rt(this,e,qs,js,ot,{current:0,last:1})}}function Fs(s){let e,t,l,n,i,o,u,r,_,I,N,ue,w,C,L,D,H,ae,E,V,Q,ne,R,Be,X,z,G,K,O,Le,Z,U,A,$e,fe,re,M,Ue,Ce,oe,x,ie,ee,Ve,Ee,F,te,Ne,g=s[2].segmentCount+"",v,ce,y,se,P,de=s[0]+1+"",ve,ke,be=Math.ceil(s[2].segmentCount/bt)+"",le,ye,W,J,De,He,Te,p,$,Fe,Ie,Pe,Me,we,et,Qe=Math.round(s[10])+"",Ze,tt,st,Re,Ae,Ye,it;function xe(B){s[16](B)}let ct={type:"text",id:"videoid",placeholder:"VideoID"};return s[4]!==void 0&&(ct.value=s[4]),N=new ps({props:ct}),ns.push(()=>rs(N,"value",xe)),y=new Os({props:{segments:s[12],isLoading:!1,sortDirection:"ASC"}}),Ie=new zs({props:{current:s[0]+1,last:s[1]+1}}),Ie.$on("click",s[15]),Re=new ms({props:{status:s[11]}}),{c(){e=T(),t=f("main"),l=f("div"),n=f("form"),i=f("div"),o=f("div"),u=f("label"),r=b("VideoID:"),_=f("br"),I=T(),me(N.$$.fragment),w=T(),C=f("div"),L=f("label"),D=b("Service:"),H=f("br"),ae=T(),E=f("select"),V=f("option"),Q=b("YouTube"),ne=T(),R=f("div"),Be=b("Include:"),X=f("br"),z=T(),G=f("div"),K=f("label"),O=f("input"),Le=b(`
              Locked`),Z=T(),U=f("label"),A=f("input"),$e=b(`
              hidden`),fe=T(),re=f("label"),M=f("input"),Ue=b(`
              ignored`),Ce=T(),oe=f("div"),x=f("br"),ie=T(),ee=f("button"),Ve=b("Search"),Ee=T(),F=f("div"),te=f("h2"),Ne=b("SegmentCount: "),v=b(g),ce=T(),me(y.$$.fragment),se=T(),P=f("div"),ve=b(de),ke=b(" of "),le=b(be),ye=T(),W=f("br"),J=T(),De=f("button"),He=b("prev page"),Te=T(),p=f("button"),$=b("next page"),Fe=T(),me(Ie.$$.fragment),Pe=T(),Me=f("div"),we=f("sub"),et=b("(Loadtime: "),Ze=b(Qe),tt=b("ms)"),st=T(),me(Re.$$.fragment),this.h()},l(B){os('[data-svelte="svelte-40ey8a"]',document.head).forEach(c),e=k(B),t=d(B,"MAIN",{});var ut=m(t);l=d(ut,"DIV",{class:!0});var Ge=m(l);n=d(Ge,"FORM",{});var lt=m(n);i=d(lt,"DIV",{class:!0});var Oe=m(i);o=d(Oe,"DIV",{});var ft=m(o);u=d(ft,"LABEL",{for:!0});var Ct=m(u);r=S(Ct,"VideoID:"),Ct.forEach(c),_=d(ft,"BR",{}),I=k(ft),_e(N.$$.fragment,ft),ft.forEach(c),w=k(Oe),C=d(Oe,"DIV",{});var dt=m(C);L=d(dt,"LABEL",{for:!0});var yt=m(L);D=S(yt,"Service:"),yt.forEach(c),H=d(dt,"BR",{}),ae=k(dt),E=d(dt,"SELECT",{id:!0,name:!0});var Bt=m(E);V=d(Bt,"OPTION",{});var Lt=m(V);Q=S(Lt,"YouTube"),Lt.forEach(c),Bt.forEach(c),dt.forEach(c),ne=k(Oe),R=d(Oe,"DIV",{});var ht=m(R);Be=S(ht,"Include:"),X=d(ht,"BR",{}),z=k(ht),G=d(ht,"DIV",{class:!0});var at=m(G);K=d(at,"LABEL",{});var St=m(K);O=d(St,"INPUT",{type:!0,name:!0}),Le=S(St,`
              Locked`),St.forEach(c),Z=k(at),U=d(at,"LABEL",{});var $t=m(U);A=d($t,"INPUT",{type:!0,name:!0}),$e=S($t,`
              hidden`),$t.forEach(c),fe=k(at),re=d(at,"LABEL",{});var Et=m(re);M=d(Et,"INPUT",{type:!0,name:!0}),Ue=S(Et,`
              ignored`),Et.forEach(c),at.forEach(c),ht.forEach(c),Ce=k(Oe),oe=d(Oe,"DIV",{});var _t=m(oe);x=d(_t,"BR",{}),ie=k(_t),ee=d(_t,"BUTTON",{type:!0,class:!0});var At=m(ee);Ve=S(At,"Search"),At.forEach(c),_t.forEach(c),Oe.forEach(c),lt.forEach(c),Ee=k(Ge),F=d(Ge,"DIV",{});var qe=m(F);te=d(qe,"H2",{});var Tt=m(te);Ne=S(Tt,"SegmentCount: "),v=S(Tt,g),Tt.forEach(c),ce=k(qe),_e(y.$$.fragment,qe),se=k(qe),P=d(qe,"DIV",{});var ze=m(P);ve=S(ze,de),ke=S(ze," of "),le=S(ze,be),ye=k(ze),W=d(ze,"BR",{}),J=k(ze),De=d(ze,"BUTTON",{class:!0});var Ut=m(De);He=S(Ut,"prev page"),Ut.forEach(c),Te=k(ze),p=d(ze,"BUTTON",{class:!0});var Vt=m(p);$=S(Vt,"next page"),Vt.forEach(c),ze.forEach(c),Fe=k(qe),_e(Ie.$$.fragment,qe),Pe=k(qe),Me=d(qe,"DIV",{});var Nt=m(Me);we=d(Nt,"SUB",{});var gt=m(we);et=S(gt,"(Loadtime: "),Ze=S(gt,Qe),tt=S(gt,"ms)"),gt.forEach(c),Nt.forEach(c),qe.forEach(c),st=k(Ge),_e(Re.$$.fragment,Ge),Ge.forEach(c),ut.forEach(c),this.h()},h(){document.title="Browse | SponsorBlockControl",h(u,"for","videoid"),h(L,"for","service"),V.__value="youtube",V.value=V.__value,h(E,"id","service"),h(E,"name","service"),s[3]===void 0&&is(()=>s[17].call(E)),h(O,"type","checkbox"),h(O,"name","locked"),h(A,"type","checkbox"),h(A,"name","hidden"),h(M,"type","checkbox"),h(M,"name","ignored"),h(G,"class","filters svelte-1z0tix8"),h(ee,"type","submit"),h(ee,"class","svelte-1z0tix8"),h(i,"class","filters svelte-1z0tix8"),De.disabled=s[6],h(De,"class","svelte-1z0tix8"),p.disabled=s[5],h(p,"class","svelte-1z0tix8"),h(l,"class","container")},m(B,he){j(B,e,he),j(B,t,he),a(t,l),a(l,n),a(n,i),a(i,o),a(o,u),a(u,r),a(o,_),a(o,I),ge(N,o,null),a(i,w),a(i,C),a(C,L),a(L,D),a(C,H),a(C,ae),a(C,E),a(E,V),a(V,Q),zt(E,s[3]),a(i,ne),a(i,R),a(R,Be),a(R,X),a(R,z),a(R,G),a(G,K),a(K,O),O.checked=s[7],a(K,Le),a(G,Z),a(G,U),a(U,A),A.checked=s[8],a(U,$e),a(G,fe),a(G,re),a(re,M),M.checked=s[9],a(re,Ue),a(i,Ce),a(i,oe),a(oe,x),a(oe,ie),a(oe,ee),a(ee,Ve),a(l,Ee),a(l,F),a(F,te),a(te,Ne),a(te,v),a(F,ce),ge(y,F,null),a(F,se),a(F,P),a(P,ve),a(P,ke),a(P,le),a(P,ye),a(P,W),a(P,J),a(P,De),a(De,He),a(P,Te),a(P,p),a(p,$),a(F,Fe),ge(Ie,F,null),a(F,Pe),a(F,Me),a(Me,we),a(we,et),a(we,Ze),a(we,tt),a(l,st),ge(Re,l,null),Ae=!0,Ye||(it=[je(E,"change",s[17]),je(O,"change",s[18]),je(A,"change",s[19]),je(M,"change",s[20]),je(ee,"click",s[21]),je(n,"submit",cs(s[14])),je(De,"click",s[22]),je(p,"click",s[23])],Ye=!0)},p(B,[he]){const ut={};!ue&&he&16&&(ue=!0,ut.value=B[4],us(()=>ue=!1)),N.$set(ut),he&8&&zt(E,B[3]),he&128&&(O.checked=B[7]),he&256&&(A.checked=B[8]),he&512&&(M.checked=B[9]),(!Ae||he&4)&&g!==(g=B[2].segmentCount+"")&&Se(v,g);const Ge={};he&4096&&(Ge.segments=B[12]),y.$set(Ge),(!Ae||he&1)&&de!==(de=B[0]+1+"")&&Se(ve,de),(!Ae||he&4)&&be!==(be=Math.ceil(B[2].segmentCount/bt)+"")&&Se(le,be),(!Ae||he&64)&&(De.disabled=B[6]),(!Ae||he&32)&&(p.disabled=B[5]);const lt={};he&1&&(lt.current=B[0]+1),he&2&&(lt.last=B[1]+1),Ie.$set(lt),(!Ae||he&1024)&&Qe!==(Qe=Math.round(B[10])+"")&&Se(Ze,Qe);const Oe={};he&2048&&(Oe.status=B[11]),Re.$set(Oe)},i(B){Ae||(q(N.$$.fragment,B),q(y.$$.fragment,B),q(Ie.$$.fragment,B),q(Re.$$.fragment,B),Ae=!0)},o(B){Y(N.$$.fragment,B),Y(y.$$.fragment,B),Y(Ie.$$.fragment,B),Y(Re.$$.fragment,B),Ae=!1},d(B){B&&c(e),B&&c(t),pe(N),pe(y),pe(Ie),pe(Re),Ye=!1,jt(it)}}}let Ys=0;const bt=10;function Gs(s,e,t){let l,n,i;kt(s,hs,U=>t(24,n=U)),kt(s,gs,U=>t(25,i=U));let o="youtube",u="",r=0,_=!1,I=!0,N=0,ue=-2,w=1/0,C=1/0,L=!0,D=!0,H=!0,ae=0,E={segmentCount:0,page:0,segments:[]},V=mt.IDLE;fs(async()=>{i.url.searchParams.has("videoID")&&(t(4,u=i.url.searchParams.get("videoID")),await Q())});async function Q(U=0){console.log("Sending fetch request"),t(11,V=mt.WORKING);const A=new URLSearchParams;A.append("videoID",u),A.append("service",o),A.append("page",U.toString()),A.append("minVotes",ue.toString()),A.append("maxVotes",w.toString()),A.append("minViews",Ys.toString()),A.append("maxViews",C.toString()),A.append("locked",L.toString()),A.append("hidden",D.toString()),A.append("ignored",H.toString());const $e=performance.now(),fe=await fetch(`${n.sponsorBlockApi}/api/searchSegments?${A}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(t(10,ae=performance.now()-$e),fe.status===200){t(11,V=mt.SUCCESS);const re=await fe.json();t(2,E.segmentCount=re.segmentCount,E),t(2,E.page=re.page,E),t(2,E.segments=[...re.segments].map(M=>(M.duration=M.endTime-M.startTime,M.videoID=u,M)),E)}else t(2,E.segmentCount=0,E),t(2,E.page=0,E),t(2,E.segments=[],E),fe.status===400&&t(11,V=mt.ERROR_INVALID),fe.status===404&&t(11,V=mt.NOT_FOUND)}async function ne(){_s(`./browse/?videoID=${u}`)}async function R(U){const A=U.detail.page-1;console.log("paginationHandler",A),await Q(A),t(0,r=A)}function Be(U){u=U,t(4,u)}function X(){o=ds(this),t(3,o)}function z(){L=this.checked,t(7,L)}function G(){D=this.checked,t(8,D)}function K(){H=this.checked,t(9,H)}const O=async()=>await Q(0),Le=()=>Q(t(0,r=Math.max(0,r-1))),Z=()=>Q(t(0,r=Math.min(Math.floor(E.segmentCount/bt),r+1)));return s.$$.update=()=>{s.$$.dirty&4&&t(1,N=Math.floor(E.segmentCount/bt)),s.$$.dirty&3&&t(5,_=r===N),s.$$.dirty&1&&t(6,I=r===0),s.$$.dirty&4&&t(12,l=[...E.segments])},[r,N,E,o,u,_,I,L,D,H,ae,V,l,Q,ne,R,Be,X,z,G,K,O,Le,Z]}class tl extends nt{constructor(e){super();rt(this,e,Gs,Fs,ot,{})}}export{tl as default};
