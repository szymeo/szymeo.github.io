var pt=(t,r,n)=>new Promise((e,s)=>{var l=_=>{try{o(n.next(_))}catch(c){s(c)}},a=_=>{try{o(n.throw(_))}catch(c){s(c)}},o=_=>_.done?e(_.value):Promise.resolve(_.value).then(l,a);o((n=n.apply(t,r)).next())});var qn=Array.isArray,Wt=Array.prototype.indexOf,Mn=Array.from,Yn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,jn=Array.prototype,Qt=Object.getPrototypeOf;function Bn(t){return typeof t=="function"}const Un=()=>{};function Vn(t){return t()}function tn(t){for(var r=0;r<t.length;r++)t[r]()}const y=2,mt=4,X=8,ot=16,D=32,H=64,G=128,g=256,$=512,d=1024,O=2048,L=4096,F=8192,Q=16384,nn=32768,gt=65536,Gn=1<<17,rn=1<<19,At=1<<20,dt=Symbol("$state"),$n=Symbol("legacy props"),Kn=Symbol("");function It(t){return t===this.v}function en(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!en(t,this.v)}function sn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Xn(){tt=!0}const Qn=1,tr=2,nr=4,rr=8,er=16,sr=1,lr=2,ar=4,ur=8,or=16,fr=4,ir=1,_r=2,_n="[",cn="[!",vn="]",Dt={},cr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let v=null;function Et(t){v=t}function vr(t,r=!1,n){v={p:v,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!r&&(v.l={s:null,u:null,r1:[],r2:ft(!1)})}function pr(t){const r=v;if(r!==null){const a=r.e;if(a!==null){var n=i,e=u;r.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Ft(l.fn)}}finally{z(n),Z(e)}}v=r.p,r.m=!0}return{}}function nt(){return!tt||v!==null&&v.l===null}function ft(t,r){var n={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return n}function hr(t){return pn(ft(t))}function dr(t,r=!1){var e,s;const n=ft(t);return r||(n.equals=Rt),tt&&v!==null&&v.l!==null&&((s=(e=v.l).s)!=null?s:e.s=[]).push(n),n}function pn(t){return u!==null&&!I&&u.f&y&&(m===null?Sn([t]):m.push(t)),t}function Er(t,r){return u!==null&&!I&&nt()&&u.f&(y|ot)&&(m===null||!m.includes(t))&&fn(),hn(t,r)}function hn(t,r){return t.equals(r)||(t.v,t.v=r,t.wv=Vt(),Ot(t,O),nt()&&i!==null&&i.f&d&&!(i.f&(D|H))&&(A===null?On([t]):A.push(t))),r}function Ot(t,r){var n=t.reactions;if(n!==null)for(var e=nt(),s=n.length,l=0;l<s;l++){var a=n[l],o=a.f;o&O||!e&&a===i||(R(a,r),o&(d|g)&&(o&y?Ot(a,L):et(a)))}}let k=!1;function yr(t){k=t}let w;function q(t){if(t===null)throw St(),Dt;return w=t}function wr(){return q(C(w))}function Tr(t){if(k){if(C(w)!==null)throw St(),Dt;w=t}}function mr(t=1){if(k){for(var r=t,n=w;r--;)n=C(n);w=n}}function gr(){for(var t=0,r=w;;){if(r.nodeType===8){var n=r.data;if(n===vn){if(t===0)return r;t-=1}else(n===_n||n===cn)&&(t+=1)}var e=C(r);r.remove(),r=e}}var yt,dn,xt,kt;function Ar(){if(yt===void 0){yt=window,dn=document;var t=Element.prototype,r=Node.prototype;xt=ht(r,"firstChild").get,kt=ht(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function lt(t){return xt.call(t)}function C(t){return kt.call(t)}function Ir(t,r){if(!k)return lt(t);var n=lt(w);if(n===null)n=w.appendChild(st());else if(r&&n.nodeType!==3){var e=st();return n==null||n.before(e),q(e),e}return q(n),n}function Rr(t,r){if(!k){var n=lt(t);return n instanceof Comment&&n.data===""?C(n):n}return w}function Dr(t,r=1,n=!1){let e=k?w:t;for(var s;r--;)s=e,e=C(e);if(!k)return e;var l=e==null?void 0:e.nodeType;if(n&&l!==3){var a=st();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function Sr(t){t.textContent=""}function Nt(t){var r=y|O,n=u!==null&&u.f&y?u:null;return i===null||n!==null&&n.f&g?r|=g:i.f|=At,{ctx:v,deps:null,effects:null,equals:It,f:r,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n!=null?n:i}}function Or(t){const r=Nt(t);return r.equals=Rt,r}function Ct(t){var r=t.effects;if(r!==null){t.effects=null;for(var n=0;n<r.length;n+=1)N(r[n])}}function En(t){for(var r=t.parent;r!==null;){if(!(r.f&y))return r;r=r.parent}return null}function yn(t){var r,n=i;z(En(t));try{Ct(t),r=$t(t)}finally{z(n)}return r}function Pt(t){var r=yn(t),n=(S||t.f&g)&&t.deps!==null?L:d;R(t,n),t.equals(r)||(t.v=r,t.wv=Vt())}function bt(t){i===null&&u===null&&an(),u!==null&&u.f&g&&i===null&&ln(),it&&sn()}function wn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function j(t,r,n,e=!0){var T;var s=(t&H)!==0,l=i,a={ctx:v,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:r,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(n){var o=P;try{wt(!0),_t(a),a.f|=nn}catch(p){throw N(a),p}finally{wt(o)}}else r!==null&&et(a);var _=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(At|G))===0;if(!_&&!s&&e&&(l!==null&&wn(a,l),u!==null&&u.f&y)){var c=u;((T=c.effects)!=null?T:c.effects=[]).push(a)}return a}function xr(t){var s;bt();var r=i!==null&&(i.f&D)!==0&&v!==null&&!v.m;if(r){var n=v;((s=n.e)!=null?s:n.e=[]).push({fn:t,effect:i,reaction:u})}else{var e=Ft(t);return e}}function kr(t){return bt(),Tn(t)}function Nr(t){const r=j(H,t,!0);return(n={})=>new Promise(e=>{n.outro?An(r,()=>{N(r),e(void 0)}):(N(r),e(void 0))})}function Ft(t){return j(mt,t,!1)}function Tn(t){return j(X,t,!0)}function Cr(t,r=[],n=Nt){const e=r.map(n);return mn(()=>t(...e.map(bn)))}function mn(t,r=0){return j(X|ot|r,t,!0)}function Pr(t,r=!0){return j(X|D,t,!0,r)}function Lt(t){var r=t.teardown;if(r!==null){const n=it,e=u;Tt(!0),Z(null);try{r.call(null)}finally{Tt(n),Z(e)}}}function qt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;N(n,r),n=e}}function gn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&D||N(r),r=n}}function N(t,r=!0){var n=!1;if((r||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}n=!0}qt(t,r&&!n),W(t,0),R(t,Q);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Lt(t);var o=t.parent;o!==null&&o.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function An(t,r){var n=[];Yt(t,n,!0),In(n,()=>{N(t),r&&r()})}function In(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var s of t)s.out(e)}else r()}function Yt(t,r,n){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&r.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&gt)!==0||(e.f&D)!==0;Yt(e,r,l?n:!1),e=s}}}function br(t){Ht(t,!0)}function Ht(t,r){if(t.f&F){t.f^=F,t.f&d||(t.f^=d),B(t)&&(R(t,O),et(t));for(var n=t.first;n!==null;){var e=n.next,s=(n.f&gt)!==0||(n.f&D)!==0;Ht(n,s?r:!1),n=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&l.in()}}let K=!1,at=[];function jt(){K=!1;const t=at.slice();at=[],tn(t)}function Fr(t){K||(K=!0,queueMicrotask(jt)),at.push(t)}function Rn(){K&&jt()}const Bt=0,Dn=1;let U=!1,V=Bt,M=!1,Y=null,P=!1,it=!1;function wt(t){P=t}function Tt(t){it=t}let x=[],b=0;let u=null,I=!1;function Z(t){u=t}let i=null;function z(t){i=t}let m=null;function Sn(t){m=t}let h=null,E=0,A=null;function On(t){A=t}let Ut=1,J=0,S=!1;function Vt(){return++Ut}function B(t){var c,T;var r=t.f;if(r&O)return!0;if(r&L){var n=t.deps,e=(r&g)!==0;if(n!==null){var s,l,a=(r&$)!==0,o=e&&i!==null&&!S,_=n.length;if(a||o){for(s=0;s<_;s++)l=n[s],(a||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&((T=l.reactions)!=null?T:l.reactions=[]).push(t);a&&(t.f^=$)}for(s=0;s<_;s++)if(l=n[s],B(l)&&Pt(l),l.wv>t.wv)return!0}(!e||i!==null&&!S)&&R(t,d)}return!1}function xn(t,r){for(var n=r;n!==null;){if(n.f&G)try{n.fn(t);return}catch(e){n.f^=G}n=n.parent}throw U=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,r,n,e){if(U){if(n===null&&(U=!1),kn(r))throw t;return}n!==null&&(U=!0);{xn(t,r);return}}function Gt(t,r,n=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?Gt(l,r,n+1):r===l&&(n===0?R(l,O):l.f&d&&R(l,L),et(l))}}function $t(t){var ct,vt;var r=h,n=E,e=A,s=u,l=S,a=m,o=v,_=I,c=t.f;h=null,E=0,A=null,u=c&(D|H)?null:t,S=(c&g)!==0&&(!P||s===null||_),m=null,Et(t.ctx),I=!1,J++;try{var T=(0,t.fn)(),p=t.deps;if(h!==null){var f;if(W(t,E),p!==null&&E>0)for(p.length=E+h.length,f=0;f<h.length;f++)p[E+f]=h[f];else t.deps=p=h;if(!S)for(f=E;f<p.length;f++)((vt=(ct=p[f]).reactions)!=null?vt:ct.reactions=[]).push(t)}else p!==null&&E<p.length&&(W(t,E),p.length=E);if(nt()&&A!==null&&!(t.f&(y|L|O)))for(f=0;f<A.length;f++)Gt(A[f],t);return s!==null&&J++,T}finally{h=r,E=n,A=e,u=s,S=l,m=a,Et(o),I=_}}function Nn(t,r){let n=r.reactions;if(n!==null){var e=Wt.call(n,t);if(e!==-1){var s=n.length-1;s===0?n=r.reactions=null:(n[e]=n[s],n.pop())}}n===null&&r.f&y&&(h===null||!h.includes(r))&&(R(r,L),r.f&(g|$)||(r.f^=$),Ct(r),W(r,0))}function W(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)Nn(t,n[e])}function _t(t){var r=t.f;if(!(r&Q)){R(t,d);var n=i,e=v;i=t;try{r&ot?gn(t):qt(t),Lt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.wv=Ut;var l=t.deps,a}catch(o){rt(o,t,n,e||t.ctx)}finally{i=n}}}function Kt(){if(b>1e3){b=0;try{un()}catch(t){if(Y!==null)rt(t,Y,null);else throw t}}b++}function Zt(t){var r=t.length;if(r!==0){Kt();var n=P;P=!0;try{for(var e=0;e<r;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];zt(s,l),Cn(l)}}finally{P=n}}}function Cn(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(Q|F)))try{B(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(s){rt(s,e,null,e.ctx)}}}function Pn(){if(M=!1,b>1001)return;const t=x;x=[],Zt(t),M||(b=0,Y=null)}function et(t){V===Bt&&(M||(M=!0,queueMicrotask(Pn))),Y=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(H|D)){if(!(n&d))return;r.f^=d}}x.push(r)}function zt(t,r){var n=t.first,e=[];t:for(;n!==null;){var s=n.f,l=(s&D)!==0,a=l&&(s&d)!==0,o=n.next;if(!a&&!(s&F))if(s&X){if(l)n.f^=d;else{var _=u;try{u=n,B(n)&&_t(n)}catch(f){rt(f,n,null,n.ctx)}finally{u=_}}var c=n.first;if(c!==null){n=c;continue}}else s&mt&&e.push(n);if(o===null){let f=n.parent;for(;f!==null;){if(t===f)break t;var T=f.next;if(T!==null){n=T;continue t}f=f.parent}}n=o}for(var p=0;p<e.length;p++)c=e[p],r.push(c),zt(c,r)}function Jt(t){var r=V,n=x;try{Kt();const s=[];V=Dn,x=s,M=!1,Zt(n);var e=t==null?void 0:t();return Rn(),(x.length>0||s.length>0)&&Jt(),b=0,Y=null,e}finally{V=r,x=n}}function Lr(){return pt(this,null,function*(){yield Promise.resolve(),Jt()})}function bn(t){var r=t.f,n=(r&y)!==0;if(u!==null&&!I){m!==null&&m.includes(t)&&on();var e=u.deps;t.rv<J&&(t.rv=J,h===null&&e!==null&&e[E]===t?E++:h===null?h=[t]:(!S||!h.includes(t))&&h.push(t))}else if(n&&t.deps===null&&t.effects===null){var s=t,l=s.parent;l!==null&&!(l.f&g)&&(s.f^=g)}return n&&(s=t,B(s)&&Pt(s)),t.v}function qr(t){var r=I;try{return I=!0,t()}finally{I=r}}const Fn=-7169;function R(t,r){t.f=t.f&Fn|r}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ut(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&dt in n&&ut(n)}}}function ut(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],r)}catch(s){}const n=Qt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Xt(n);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch(a){}}}}}export{dn as $,Qn as A,hn as B,tr as C,dr as D,nr as E,ft as F,rr as G,cn as H,F as I,Yt as J,Sr as K,In as L,N as M,er as N,C as O,qn as P,v as Q,kr as R,xr as S,tn as T,qr as U,Vn as V,Mr as W,Nt as X,Xn as Y,tt as Z,dt as _,pr as a,Hn as a0,jn as a1,Wn as a2,cr as a3,Er as a4,ht as a5,Jn as a6,Qt as a7,zn as a8,Gn as a9,nn as aA,Ft as aB,fr as aC,Bn as aD,Un as aE,Tn as aF,Jt as aG,hr as aH,Lr as aI,en as aJ,ar as aa,Rt as ab,ur as ac,$n as ad,or as ae,lr as af,D as ag,H as ah,z as ai,sr as aj,Yn as ak,Z as al,u as am,Ar as an,_n as ao,Dt as ap,St as aq,Zn as ar,Nr as as,Kn as at,Xt as au,rn as av,ir as aw,_r as ax,gt as ay,ot as az,st as b,Ir as c,mn as d,q as e,Rr as f,bn as g,k as h,lt as i,wr as j,Or as k,gr as l,yr as m,mr as n,w as o,vr as p,vn as q,Tr as r,Dr as s,Cr as t,br as u,Pr as v,An as w,Mn as x,Fr as y,i as z};
