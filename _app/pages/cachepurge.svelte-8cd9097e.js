import{S as ue,i as de,s as fe,a3 as _e,a4 as he,k as U,e as _,t as W,j as ee,P as pe,d as i,n as T,c as h,a as p,g as w,m as te,b as B,G as se,f as ae,E as s,o as ne,H as oe,a5 as me,x as le,u as re,v as ie,U as ge,J as ve}from"../chunks/vendor-9fc4b0a7.js";import{C as Ie}from"../chunks/stores-1663c3e2.js";import{a as be,S as o}from"../chunks/Status-10cd6735.js";import{V as Ee}from"../chunks/VideoInput-c3824c4c.js";function Re(l){let S,t,r,a,n,C,O,c,m,D,u,d,g,f,j,H,I,b,q,G,J,E,Z,P,$,R,N,F,M;function ce(e){l[4](e)}let z={id:"videoid"};return l[0]!==void 0&&(z.value=l[0]),f=new Ee({props:z}),_e.push(()=>he(f,"value",ce)),R=new be({props:{status:l[1]}}),{c(){S=U(),t=_("main"),r=_("div"),a=_("fieldset"),n=_("legend"),C=W("Clear cache / Purge all segments"),O=U(),c=_("div"),m=_("div"),D=_("label"),u=W("VideoID:"),d=_("br"),g=U(),ee(f.$$.fragment),H=U(),I=_("div"),b=_("button"),q=W("Clear cache"),J=U(),E=_("button"),Z=W(`Purge all
            segments`),$=U(),ee(R.$$.fragment),this.h()},l(e){pe('[data-svelte="svelte-rncy8k"]',document.head).forEach(i),S=T(e),t=h(e,"MAIN",{});var V=p(t);r=h(V,"DIV",{class:!0});var k=p(r);a=h(k,"FIELDSET",{});var y=p(a);n=h(y,"LEGEND",{});var Q=p(n);C=w(Q,"Clear cache / Purge all segments"),Q.forEach(i),O=T(y),c=h(y,"DIV",{class:!0});var K=p(c);m=h(K,"DIV",{});var A=p(m);D=h(A,"LABEL",{for:!0});var X=p(D);u=w(X,"VideoID:"),X.forEach(i),d=h(A,"BR",{}),g=T(A),te(f.$$.fragment,A),A.forEach(i),H=T(K),I=h(K,"DIV",{class:!0});var L=p(I);b=h(L,"BUTTON",{});var Y=p(b);q=w(Y,"Clear cache"),Y.forEach(i),J=T(L),E=h(L,"BUTTON",{});var x=p(E);Z=w(x,`Purge all
            segments`),x.forEach(i),L.forEach(i),K.forEach(i),y.forEach(i),$=T(k),te(R.$$.fragment,k),k.forEach(i),V.forEach(i),this.h()},h(){document.title="Clear cache / Purge all segments | SponsorBlockControl",B(D,"for","videoid"),b.disabled=G=l[0].length===0||l[1]===o.WORKING,E.disabled=P=l[0].length===0||l[1]===o.WORKING,B(I,"class","actions"),B(c,"class","form svelte-fndrlu"),se(c,"working",l[1]===o.WORKING),B(r,"class","container")},m(e,v){ae(e,S,v),ae(e,t,v),s(t,r),s(r,a),s(a,n),s(n,C),s(a,O),s(a,c),s(c,m),s(m,D),s(D,u),s(m,d),s(m,g),ne(f,m,null),s(c,H),s(c,I),s(I,b),s(b,q),s(I,J),s(I,E),s(E,Z),s(r,$),ne(R,r,null),N=!0,F||(M=[oe(b,"click",l[5]),oe(E,"click",l[6])],F=!0)},p(e,[v]){const V={};!j&&v&1&&(j=!0,V.value=e[0],me(()=>j=!1)),f.$set(V),(!N||v&3&&G!==(G=e[0].length===0||e[1]===o.WORKING))&&(b.disabled=G),(!N||v&3&&P!==(P=e[0].length===0||e[1]===o.WORKING))&&(E.disabled=P),v&2&&se(c,"working",e[1]===o.WORKING);const k={};v&2&&(k.status=e[1]),R.$set(k)},i(e){N||(le(f.$$.fragment,e),le(R.$$.fragment,e),N=!0)},o(e){re(f.$$.fragment,e),re(R.$$.fragment,e),N=!1},d(e){e&&i(S),e&&i(t),ie(f),ie(R),F=!1,ge(M)}}}function Se(l,S,t){let r;ve(l,Ie,u=>t(7,r=u));let a="",n=o.IDLE;async function C(u=!0){t(1,n=o.WORKING);const d=new URLSearchParams;d.set("videoID",a),d.set("userID",r.privateUUID);const g=await fetch(`${r.sponsorBlockApi}/api/clearCache?${d}`,{method:"POST"}).then(function(f){return f.status});g===200&&(t(1,n=o.SUCCESS),t(0,a="")),g===400&&t(1,n=o.ERROR_INVALID),g===403&&t(1,n=o.ERROR_UNAUTHORIZED)}async function O(){t(1,n=o.WORKING);const u={videoID:a,userID:r.privateUUID},d=await fetch(`${r.sponsorBlockApi}/api/purgeAllSegments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).then(function(g){return g.status});d===200&&(t(1,n=o.SUCCESS),t(0,a="")),d===400&&t(1,n=o.ERROR_INVALID),d===403&&t(1,n=o.ERROR_UNAUTHORIZED)}function c(u){a=u,t(0,a)}return[a,n,C,O,c,u=>C(),u=>O()]}class Ne extends ue{constructor(S){super();de(this,S,Se,Re,fe,{})}}export{Ne as default};
