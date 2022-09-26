import{S as ce,i as _e,s as fe,a as T,k as r,q as V,v as pe,W as he,h as l,c as y,l as o,m as _,r as G,w as me,n as i,H as ue,b as de,D as e,a8 as M,x as be,I as q,f as ve,t as Ue,y as Ee,R as Ie,G as De}from"../../../chunks/index-a74698fd.js";import{C as ge}from"../../../chunks/config-1a541b95.js";import{a as Re}from"../../../chunks/utils-00bd27bd.js";import{a as we,S}from"../../../chunks/Status-b63e8986.js";function Te(u){let k,s,f,d,v,U,h,n,m,D,W,z,K,a,C,c,g,X,Z,Q,p,Y,R,E,x,P,$,I,ee,H,te,w,A,se,ae;return w=new we({props:{status:u[3]}}),{c(){k=T(),s=r("main"),f=r("div"),d=r("fieldset"),v=r("legend"),U=V("Warn user:"),h=T(),n=r("div"),m=r("div"),D=r("label"),W=V("User UUID:"),z=r("br"),K=T(),a=r("input"),C=T(),c=r("div"),g=r("label"),X=V("Warn Reason:"),Z=r("br"),Q=T(),p=r("textarea"),Y=T(),R=r("div"),E=r("button"),x=V("Unwarn"),$=T(),I=r("button"),ee=V("Warn"),te=T(),pe(w.$$.fragment),this.h()},l(t){he('[data-svelte="svelte-1exmmzl"]',document.head).forEach(l),k=y(t),s=o(t,"MAIN",{});var L=_(s);f=o(L,"DIV",{class:!0});var j=_(f);d=o(j,"FIELDSET",{});var F=_(d);v=o(F,"LEGEND",{});var ne=_(v);U=G(ne,"Warn user:"),ne.forEach(l),h=y(F),n=o(F,"DIV",{class:!0});var N=_(n);m=o(N,"DIV",{});var O=_(m);D=o(O,"LABEL",{for:!0});var re=_(D);W=G(re,"User UUID:"),re.forEach(l),z=o(O,"BR",{}),K=y(O),a=o(O,"INPUT",{id:!0,type:!0,size:!0,placeholder:!0}),O.forEach(l),C=y(N),c=o(N,"DIV",{});var B=_(c);g=o(B,"LABEL",{for:!0});var le=_(g);X=G(le,"Warn Reason:"),le.forEach(l),Z=o(B,"BR",{}),Q=y(B),p=o(B,"TEXTAREA",{id:!0,cols:!0,rows:!0,placeholder:!0}),_(p).forEach(l),B.forEach(l),Y=y(N),R=o(N,"DIV",{class:!0});var J=_(R);E=o(J,"BUTTON",{type:!0});var oe=_(E);x=G(oe,"Unwarn"),oe.forEach(l),$=y(J),I=o(J,"BUTTON",{type:!0});var ie=_(I);ee=G(ie,"Warn"),ie.forEach(l),J.forEach(l),N.forEach(l),F.forEach(l),te=y(j),me(w.$$.fragment,j),j.forEach(l),L.forEach(l),this.h()},h(){document.title="Warn user | SponsorBlockControl",i(D,"for","uuid"),i(a,"id","uuid"),i(a,"type","text"),i(a,"size","64"),i(a,"placeholder","User UUID..."),i(g,"for","reason"),i(p,"id","reason"),i(p,"cols","80"),i(p,"rows","3"),i(p,"placeholder","Reason..."),i(E,"type","button"),E.disabled=P=!u[1],i(I,"type","button"),I.disabled=H=!u[1],i(R,"class","actions"),i(n,"class","form svelte-fndrlu"),ue(n,"working",u[3]===S.WORKING),i(f,"class","container")},m(t,b){de(t,k,b),de(t,s,b),e(s,f),e(f,d),e(d,v),e(v,U),e(d,h),e(d,n),e(n,m),e(m,D),e(D,W),e(m,z),e(m,K),e(m,a),M(a,u[0]),e(n,C),e(n,c),e(c,g),e(g,X),e(c,Z),e(c,Q),e(c,p),M(p,u[2]),e(n,Y),e(n,R),e(R,E),e(E,x),e(R,$),e(R,I),e(I,ee),e(f,te),be(w,f,null),A=!0,se||(ae=[q(a,"input",u[5]),q(a,"input",u[6]),q(p,"input",u[7]),q(E,"click",u[8]),q(I,"click",u[9])],se=!0)},p(t,[b]){b&1&&a.value!==t[0]&&M(a,t[0]),b&4&&M(p,t[2]),(!A||b&2&&P!==(P=!t[1]))&&(E.disabled=P),(!A||b&2&&H!==(H=!t[1]))&&(I.disabled=H),(!A||b&8)&&ue(n,"working",t[3]===S.WORKING);const L={};b&8&&(L.status=t[3]),w.$set(L)},i(t){A||(ve(w.$$.fragment,t),A=!0)},o(t){Ue(w.$$.fragment,t),A=!1},d(t){t&&l(k),t&&l(s),Ee(w),se=!1,Ie(ae)}}}function ye(u,k,s){let f;De(u,ge,a=>s(10,f=a));let d="",v=!1,U="",h=S.IDLE;async function n(a="warn"){s(3,h=S.WORKING);const C={issuerUserID:f.privateUUID,userID:d,reason:U,enabled:a==="warn"},c=await fetch(`${f.sponsorBlockApi}/api/warnUser`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).then(function(g){return g.status});c===200&&(s(3,h=S.SUCCESS),s(0,d=""),s(1,v=!1),s(2,U="")),c===400&&s(3,h=S.ERROR_INVALID),c===403&&s(3,h=S.ERROR_UNAUTHORIZED),c===409&&s(3,h=S.DUPLICATE)}function m(){d=this.value,s(0,d)}const D=a=>{s(1,v=Re(d))};function W(){U=this.value,s(2,U)}return[d,v,U,h,n,m,D,W,a=>{n("unwarn")},a=>{n("warn")}]}class We extends ce{constructor(k){super(),_e(this,k,ye,Te,fe,{})}}export{We as default};
