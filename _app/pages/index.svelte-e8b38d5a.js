import{S as h,i as g,s as x,t as p,k as M,e as I,g as v,n as V,c as S,a as N,d as i,b as ee,G as te,f as o,E,h as R,F as le,J as se,A as oe,j as ae,P as me,m as _e,Z as pe,o as ve,x as Ue,u as Ie,v as Se}from"../chunks/vendor-9fc4b0a7.js";import{U as be,C as ce}from"../chunks/stores-1663c3e2.js";import{S as c}from"../chunks/Status-10cd6735.js";import{m as ie,u as De}from"../chunks/utils-dd30e544.js";function fe(m){let t,l,a=m[1].userName+"",r,u,n,f=m[1].viewCount.toLocaleString()+"",_,b,k,w,P=ie(m[1].minutesSaved,!0)+"",T,Y,j,q,G=m[1].segmentCount.toLocaleString()+"",L,W,$,K,D,d=m[1].warnings+"",O,F,A=m[1].userID+"",B,H,J,Z,C,Q,y=m[2].format(-Math.round((Date.now()-m[1]._lastUpdateTime)/6e4),"minute")+"",z,U=m[1].vip===!0&&re();return{c(){t=p("Hello "),U&&U.c(),l=M(),r=p(a),u=I("br"),n=p(`
    You have saved people from `),_=p(f),b=p(" segments."),k=I("br"),w=p(`
    You have saved people `),T=p(P),Y=p(" of their lives."),j=I("br"),q=p(`
    You submitted `),L=p(G),W=p(" segments!"),$=I("br"),K=p(`
    There is currently `),D=I("b"),O=p(d),F=p(" warnings for your UserID ("),B=p(A),H=p(")"),J=I("br"),Z=M(),C=I("sub"),Q=p("Last update: "),z=p(y),this.h()},l(e){t=v(e,"Hello "),U&&U.l(e),l=V(e),r=v(e,a),u=S(e,"BR",{}),n=v(e,`
    You have saved people from `),_=v(e,f),b=v(e," segments."),k=S(e,"BR",{}),w=v(e,`
    You have saved people `),T=v(e,P),Y=v(e," of their lives."),j=S(e,"BR",{}),q=v(e,`
    You submitted `),L=v(e,G),W=v(e," segments!"),$=S(e,"BR",{}),K=v(e,`
    There is currently `),D=S(e,"B",{class:!0});var s=N(D);O=v(s,d),s.forEach(i),F=v(e," warnings for your UserID ("),B=v(e,A),H=v(e,")"),J=S(e,"BR",{}),Z=V(e),C=S(e,"SUB",{});var X=N(C);Q=v(X,"Last update: "),z=v(X,y),X.forEach(i),this.h()},h(){ee(D,"class","svelte-1wk05qc"),te(D,"hasWarnings",m[1].warnings>0)},m(e,s){o(e,t,s),U&&U.m(e,s),o(e,l,s),o(e,r,s),o(e,u,s),o(e,n,s),o(e,_,s),o(e,b,s),o(e,k,s),o(e,w,s),o(e,T,s),o(e,Y,s),o(e,j,s),o(e,q,s),o(e,L,s),o(e,W,s),o(e,$,s),o(e,K,s),o(e,D,s),E(D,O),o(e,F,s),o(e,B,s),o(e,H,s),o(e,J,s),o(e,Z,s),o(e,C,s),E(C,Q),E(C,z)},p(e,s){e[1].vip===!0?U||(U=re(),U.c(),U.m(l.parentNode,l)):U&&(U.d(1),U=null),s&2&&a!==(a=e[1].userName+"")&&R(r,a),s&2&&f!==(f=e[1].viewCount.toLocaleString()+"")&&R(_,f),s&2&&P!==(P=ie(e[1].minutesSaved,!0)+"")&&R(T,P),s&2&&G!==(G=e[1].segmentCount.toLocaleString()+"")&&R(L,G),s&2&&d!==(d=e[1].warnings+"")&&R(O,d),s&2&&te(D,"hasWarnings",e[1].warnings>0),s&2&&A!==(A=e[1].userID+"")&&R(B,A),s&2&&y!==(y=e[2].format(-Math.round((Date.now()-e[1]._lastUpdateTime)/6e4),"minute")+"")&&R(z,y)},d(e){e&&i(t),U&&U.d(e),e&&i(l),e&&i(r),e&&i(u),e&&i(n),e&&i(_),e&&i(b),e&&i(k),e&&i(w),e&&i(T),e&&i(Y),e&&i(j),e&&i(q),e&&i(L),e&&i(W),e&&i($),e&&i(K),e&&i(D),e&&i(F),e&&i(B),e&&i(H),e&&i(J),e&&i(Z),e&&i(C)}}}function re(m){let t;return{c(){t=p("[VIP]")},l(l){t=v(l,"[VIP]")},m(l,a){o(l,t,a)},d(l){l&&i(t)}}}function ue(m){let t;return{c(){t=p("Loading...")},l(l){t=v(l,"Loading...")},m(l,a){o(l,t,a)},d(l){l&&i(t)}}}function ne(m){let t;return{c(){t=p("(Private UUID required)")},l(l){t=v(l,"(Private UUID required)")},m(l,a){o(l,t,a)},d(l){l&&i(t)}}}function ke(m){let t,l,a,r=m[0]==c.SUCCESS&&fe(m),u=m[0]==c.WORKING&&ue(),n=m[0]==c.PRIVATEUUID_MISSING&&ne();return{c(){t=I("span"),r&&r.c(),l=M(),u&&u.c(),a=M(),n&&n.c()},l(f){t=S(f,"SPAN",{});var _=N(t);r&&r.l(_),l=V(_),u&&u.l(_),a=V(_),n&&n.l(_),_.forEach(i)},m(f,_){o(f,t,_),r&&r.m(t,null),E(t,l),u&&u.m(t,null),E(t,a),n&&n.m(t,null)},p(f,[_]){f[0]==c.SUCCESS?r?r.p(f,_):(r=fe(f),r.c(),r.m(t,l)):r&&(r.d(1),r=null),f[0]==c.WORKING?u||(u=ue(),u.c(),u.m(t,a)):u&&(u.d(1),u=null),f[0]==c.PRIVATEUUID_MISSING?n||(n=ne(),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:le,o:le,d(f){f&&i(t),r&&r.d(),u&&u.d(),n&&n.d()}}}function we(m,t,l){let a;se(m,be,_=>l(1,a=_));const r=new Intl.RelativeTimeFormat("en-US");let{privateUUID:u=""}=t,n=c.IDLE;async function f(){if(u===""){l(0,n=c.PRIVATEUUID_MISSING);return}l(0,n=c.WORKING),await De(),l(0,n=c.SUCCESS)}return oe(f),m.$$set=_=>{"privateUUID"in _&&l(3,u=_.privateUUID)},[n,a,r,u]}class Ce extends h{constructor(t){super();g(this,t,we,ke,x,{privateUUID:3})}}function Ee(m){let t,l,a,r,u,n;return u=new Ce({props:{privateUUID:m[0].privateUUID}}),{c(){t=M(),l=I("main"),a=I("div"),r=I("p"),ae(u.$$.fragment),this.h()},l(f){me('[data-svelte="svelte-1ni9yak"]',document.head).forEach(i),t=V(f),l=S(f,"MAIN",{});var b=N(l);a=S(b,"DIV",{class:!0});var k=N(a);r=S(k,"P",{style:!0});var w=N(r);_e(u.$$.fragment,w),w.forEach(i),k.forEach(i),b.forEach(i),this.h()},h(){document.title="SponsorBlockControl",pe(r,"width","100%"),ee(a,"class","container")},m(f,_){o(f,t,_),o(f,l,_),E(l,a),E(a,r),ve(u,r,null),n=!0},p(f,[_]){const b={};_&1&&(b.privateUUID=f[0].privateUUID),u.$set(b)},i(f){n||(Ue(u.$$.fragment,f),n=!0)},o(f){Ie(u.$$.fragment,f),n=!1},d(f){f&&i(t),f&&i(l),Se(u)}}}function Re(m,t,l){let a;return se(m,ce,r=>l(0,a=r)),[a]}class Le extends h{constructor(t){super();g(this,t,Re,Ee,x,{})}}export{Le as default};
