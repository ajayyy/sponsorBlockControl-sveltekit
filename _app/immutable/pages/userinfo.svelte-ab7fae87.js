import{S as he,i as de,s as _e,e as m,t as C,k as B,c as g,a as b,h as T,d as c,m as V,b as y,g as $,H as e,j as H,w as me,a4 as ge,x as ve,I as le,ab as re,y as pe,J as ie,q as be,o as we,K as Ie,B as ke,V as Ee,L as oe,v as De}from"../chunks/index-6cd0ee1a.js";import{C as ye}from"../chunks/config-68cbb0a0.js";import{S as Ue,a as M}from"../chunks/Status-3ba30f11.js";import{p as Se}from"../chunks/stores-78f3fed7.js";import{g as Ce}from"../chunks/navigation-0e6511d1.js";import"../chunks/index-b67d38aa.js";import"../chunks/singletons-d1fb5791.js";function ce(r,a,t){const l=r.slice();return l[9]=a[t],l}function ue(r){let a,t,l,f=r[1].warnings+"",o,v,_=r[1].warnings===1?"warning":"warnings",h,d,w,u,n=r[1].warningReason+"",I;return{c(){a=m("div"),t=m("b"),l=C("This UserID has "),o=C(f),v=C(" active "),h=C(_),d=C("!"),w=B(),u=m("blockquote"),I=C(n),this.h()},l(i){a=g(i,"DIV",{class:!0});var D=b(a);t=g(D,"B",{});var U=b(t);l=T(U,"This UserID has "),o=T(U,f),v=T(U," active "),h=T(U,_),d=T(U,"!"),U.forEach(c),w=V(D),u=g(D,"BLOCKQUOTE",{class:!0});var q=b(u);I=T(q,n),q.forEach(c),D.forEach(c),this.h()},h(){y(u,"class","svelte-m363ib"),y(a,"class","warning svelte-m363ib")},m(i,D){$(i,a,D),e(a,t),e(t,l),e(t,o),e(t,v),e(t,h),e(t,d),e(a,w),e(a,u),e(u,I)},p(i,D){D&2&&f!==(f=i[1].warnings+"")&&H(o,f),D&2&&_!==(_=i[1].warnings===1?"warning":"warnings")&&H(h,_),D&2&&n!==(n=i[1].warningReason+"")&&H(I,n)},d(i){i&&c(a)}}}function fe(r){var w;let a,t,l=r[9].title+"",f,o,v,_=((w=r[1][r[9].key])!=null?w:"")+"",h,d;return{c(){a=m("tr"),t=m("th"),f=C(l),o=B(),v=m("td"),h=C(_),d=B(),this.h()},l(u){a=g(u,"TR",{class:!0});var n=b(a);t=g(n,"TH",{class:!0});var I=b(t);f=T(I,l),I.forEach(c),o=V(n),v=g(n,"TD",{class:!0});var i=b(v);h=T(i,_),i.forEach(c),d=V(n),n.forEach(c),this.h()},h(){y(t,"class","svelte-m363ib"),y(v,"class","svelte-m363ib"),y(a,"class","svelte-m363ib")},m(u,n){$(u,a,n),e(a,t),e(t,f),e(a,o),e(a,v),e(v,h),e(a,d)},p(u,n){var I;n&2&&_!==(_=((I=u[1][u[9].key])!=null?I:"")+"")&&H(h,_)},d(u){u&&c(a)}}}function Te(r){var Z;let a,t,l,f,o,v,_,h,d,w,u,n,I,i,D,U,q,F,W,G,A,P,J,N,z,Q,X,k=((Z=r[1])==null?void 0:Z.warnings)>0&&ue(r),K=r[3],E=[];for(let s=0;s<K.length;s+=1)E[s]=fe(ce(r,K,s));return N=new Ue({props:{status:r[2]}}),{c(){a=B(),t=m("main"),l=m("div"),f=m("fieldset"),o=m("legend"),v=C("User Info:"),_=B(),h=m("div"),d=m("div"),w=m("label"),u=C("Public UserID:"),n=m("br"),I=B(),i=m("input"),D=B(),U=m("button"),q=C("View"),F=B(),k&&k.c(),W=B(),G=m("div"),A=m("table"),P=m("tbody");for(let s=0;s<E.length;s+=1)E[s].c();J=B(),me(N.$$.fragment),this.h()},l(s){ge('[data-svelte="svelte-ir5jg7"]',document.head).forEach(c),a=V(s),t=g(s,"MAIN",{});var L=b(t);l=g(L,"DIV",{class:!0});var S=b(l);f=g(S,"FIELDSET",{});var p=b(f);o=g(p,"LEGEND",{});var j=b(o);v=T(j,"User Info:"),j.forEach(c),_=V(p),h=g(p,"DIV",{class:!0});var x=b(h);d=g(x,"DIV",{});var O=b(d);w=g(O,"LABEL",{for:!0});var ee=b(w);u=T(ee,"Public UserID:"),ee.forEach(c),n=g(O,"BR",{}),I=V(O),i=g(O,"INPUT",{id:!0,type:!0,size:!0,placeholder:!0}),D=V(O),U=g(O,"BUTTON",{});var te=b(U);q=T(te,"View"),te.forEach(c),O.forEach(c),x.forEach(c),p.forEach(c),F=V(S),k&&k.l(S),W=V(S),G=g(S,"DIV",{});var se=b(G);A=g(se,"TABLE",{class:!0});var ae=b(A);P=g(ae,"TBODY",{class:!0});var ne=b(P);for(let Y=0;Y<E.length;Y+=1)E[Y].l(ne);ne.forEach(c),ae.forEach(c),se.forEach(c),J=V(S),ve(N.$$.fragment,S),S.forEach(c),L.forEach(c),this.h()},h(){document.title="UserInfo | SponsorBlockControl",y(w,"for","userid"),y(i,"id","userid"),y(i,"type","search"),y(i,"size","64"),y(i,"placeholder","Public UserID..."),y(h,"class","form svelte-m363ib"),le(h,"working",r[2]===M.WORKING),y(P,"class","svelte-m363ib"),y(A,"class","svelte-m363ib"),y(l,"class","container")},m(s,R){$(s,a,R),$(s,t,R),e(t,l),e(l,f),e(f,o),e(o,v),e(f,_),e(f,h),e(h,d),e(d,w),e(w,u),e(d,n),e(d,I),e(d,i),re(i,r[0]),e(d,D),e(d,U),e(U,q),e(l,F),k&&k.m(l,null),e(l,W),e(l,G),e(G,A),e(A,P);for(let L=0;L<E.length;L+=1)E[L].m(P,null);e(l,J),pe(N,l,null),z=!0,Q||(X=[ie(i,"input",r[5]),ie(U,"click",r[4])],Q=!0)},p(s,[R]){var S;if(R&1&&re(i,s[0]),R&4&&le(h,"working",s[2]===M.WORKING),((S=s[1])==null?void 0:S.warnings)>0?k?k.p(s,R):(k=ue(s),k.c(),k.m(l,W)):k&&(k.d(1),k=null),R&10){K=s[3];let p;for(p=0;p<K.length;p+=1){const j=ce(s,K,p);E[p]?E[p].p(j,R):(E[p]=fe(j),E[p].c(),E[p].m(P,null))}for(;p<E.length;p+=1)E[p].d(1);E.length=K.length}const L={};R&4&&(L.status=s[2]),N.$set(L)},i(s){z||(be(N.$$.fragment,s),z=!0)},o(s){we(N.$$.fragment,s),z=!1},d(s){s&&c(a),s&&c(t),k&&k.d(),Ie(E,s),ke(N),Q=!1,Ee(X)}}}function Re(r,a,t){let l,f;oe(r,ye,n=>t(6,l=n)),oe(r,Se,n=>t(7,f=n));let o="",v={warnings:0,warningReason:""},_=M.IDLE;const h=[{title:"Public User ID",key:"userID"},{title:"Username",key:"userName"},{title:"Minutes saved",key:"minutesSaved"},{title:"Segment count",key:"segmentCount"},{title:"ignoredSegmentCount",key:"ignoredSegmentCount"},{title:"viewCount",key:"viewCount"},{title:"ignoredViewCount",key:"ignoredViewCount"},{title:"warnings",key:"warnings"},{title:"warningReason",key:"warningReason"},{title:"reputation",key:"reputation"},{title:"vip",key:"vip"},{title:"lastSegmentID",key:"lastSegmentID"}];De(async()=>{const n=new URLSearchParams(window.location.search);n.has("publicUserID")&&(t(0,o=n.get("publicUserID")),await w())});async function d(){f.url.searchParams.set("publicUserID",o),Ce(`./userinfo/?publicUserID=${o}`),await w()}async function w(){t(2,_=M.WORKING);const n=await fetch(`${l.sponsorBlockApi}/api/userInfo?publicUserID=${o}`,{method:"get"}).then(async function(I){return await I.json()});t(2,_=M.SUCCESS),t(1,v=n)}function u(){o=this.value,t(0,o)}return[o,v,_,h,d,u]}class Ae extends he{constructor(a){super(),de(this,a,Re,Te,_e,{})}}export{Ae as default};
