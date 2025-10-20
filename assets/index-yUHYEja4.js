const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/virtual_pwa-register-JoEQWfKY.js","assets/vendor-jspdf-BrUoL26q.js","assets/vendor-DHnto57j.js"])))=>i.map(i=>d[i]);
import{E as k0,a as M0,_ as Qf}from"./vendor-jspdf-BrUoL26q.js";import{r as Xf,b as R0,g as O0,A as Vf,i as ht,c as w,p as Zf,s as Kf,e as jo,f as No,j as Ls,m as U0,h as B0,k as _0,R as G0,l as Tf,n as F0,o as q0,q as L0,t as H0,u as Y0,v as Q0,w as X0,x as So,y as Xt,B as go,C as l,D as V0,E as Z0,G as K0,F as W0,H as J0,I as $0,J as I0,K as Sa,L as P0,M as Ia,N as ep,O as he,P as wo,Q as no,S as tp,T as Us,U as hn,V as ap,W as so,X as Bs,Y as ro,Z as zf,$ as co,a0 as po,a1 as ve,a2 as ke,a3 as lp,a4 as ip,a5 as np,a6 as sp}from"./vendor-DHnto57j.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const b of h)if(b.type==="childList")for(const f of b.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function u(h){const b={};return h.integrity&&(b.integrity=h.integrity),h.referrerPolicy&&(b.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?b.credentials="include":h.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function o(h){if(h.ep)return;h.ep=!0;const b=u(h);fetch(h.href,b)}})();var oo={exports:{}},fn={},uo={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function rp(){if(Ef)return rt;Ef=1;var d=Xf();function c(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)y+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},h=Symbol.for("react.portal");function b(v,y,N){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:S==null?null:""+S,children:v,containerInfo:y,implementation:N}}var f=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,rt.createPortal=function(v,y){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(c(299));return b(v,y,null,N)},rt.flushSync=function(v){var y=f.T,N=o.p;try{if(f.T=null,o.p=2,v)return v()}finally{f.T=y,o.p=N,o.d.f()}},rt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(v,y))},rt.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},rt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var N=y.as,S=T(N,y.crossOrigin),M=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;N==="style"?o.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:L}):N==="script"&&o.d.X(v,{crossOrigin:S,integrity:M,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var N=T(y.as,y.crossOrigin);o.d.M(v,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(v)},rt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var N=y.as,S=T(N,y.crossOrigin);o.d.L(v,N,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rt.preloadModule=function(v,y){if(typeof v=="string")if(y){var N=T(y.as,y.crossOrigin);o.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(v)},rt.requestFormReset=function(v){o.d.r(v)},rt.unstable_batchedUpdates=function(v,y){return v(y)},rt.useFormState=function(v,y,N){return f.H.useFormState(v,y,N)},rt.useFormStatus=function(){return f.H.useHostTransitionStatus()},rt.version="19.2.0",rt}var Af;function Wf(){if(Af)return uo.exports;Af=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(c){console.error(c)}}return d(),uo.exports=rp(),uo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function cp(){if(Df)return fn;Df=1;var d=R0(),c=Xf(),u=Wf();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(b(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return v(n),e;if(s===i)return v(n),t;s=s.sibling}throw Error(o(188))}if(a.return!==i.return)a=n,i=s;else{for(var r=!1,m=n.child;m;){if(m===a){r=!0,a=n,i=s;break}if(m===i){r=!0,i=n,a=s;break}m=m.sibling}if(!r){for(m=s.child;m;){if(m===a){r=!0,a=s,i=n;break}if(m===i){r=!0,i=s,a=n;break}m=m.sibling}if(!r)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,M=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ot=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case W:return"Profiler";case H:return"StrictMode";case le:return"Suspense";case Ge:return"SuspenseList";case ot:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Q:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:dt(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return dt(e(t))}catch{}}return null}var g=Array.isArray,_=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},I=[],je=-1;function ie(e){return{current:e}}function be(e){0>je||(e.current=I[je],I[je]=null,je--)}function ce(e,t){je++,I[je]=e.current,e.current=t}var We=ie(null),pt=ie(null),ut=ie(null),Jt=ie(null);function la(e,t){switch(ce(ut,t),ce(pt,e),ce(We,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Km(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Km(t),e=Wm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(We),ce(We,e)}function Ca(){be(We),be(pt),be(ut)}function mi(e){e.memoizedState!==null&&ce(Jt,e);var t=We.current,a=Wm(t,e.type);t!==a&&(ce(pt,e),ce(We,a))}function el(e){pt.current===e&&(be(We),be(pt)),Jt.current===e&&(be(Jt),on._currentValue=ne)}var fi,xn;function ia(e){if(fi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fi=t&&t[1]||"",xn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fi+e+xn}var hi=!1;function gi(e,t){if(!e||hi)return"";hi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(D){var A=D}Reflect.construct(e,[],O)}else{try{O.call()}catch(D){A=D}e.call(O.prototype)}}else{try{throw Error()}catch(D){A=D}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(D){if(D&&A&&typeof D.stack=="string")return[D.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],m=s[1];if(r&&m){var x=r.split(`
`),E=m.split(`
`);for(n=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(i===x.length||n===E.length)for(i=x.length-1,n=E.length-1;1<=i&&0<=n&&x[i]!==E[n];)n--;for(;1<=i&&0<=n;i--,n--)if(x[i]!==E[n]){if(i!==1||n!==1)do if(i--,n--,0>n||x[i]!==E[n]){var k=`
`+x[i].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=i&&0<=n);break}}}finally{hi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ia(a):""}function Vs(e,t){switch(e.tag){case 26:case 27:case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return e.child!==t&&t!==null?ia("Suspense Fallback"):ia("Suspense");case 19:return ia("SuspenseList");case 0:case 15:return gi(e.type,!1);case 11:return gi(e.type.render,!1);case 1:return gi(e.type,!0);case 31:return ia("Activity");default:return""}}function yn(e){try{var t="",a=null;do t+=Vs(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Rt=Object.prototype.hasOwnProperty,pi=d.unstable_scheduleCallback,yl=d.unstable_cancelCallback,Zs=d.unstable_shouldYield,vn=d.unstable_requestPaint,mt=d.unstable_now,bi=d.unstable_getCurrentPriorityLevel,jn=d.unstable_ImmediatePriority,Nn=d.unstable_UserBlockingPriority,vl=d.unstable_NormalPriority,xi=d.unstable_LowPriority,jl=d.unstable_IdlePriority,p=d.log,B=d.unstable_setDisableYieldValue,q=null,F=null;function $(e){if(typeof p=="function"&&B(e),F&&typeof F.setStrictMode=="function")try{F.setStrictMode(q,e)}catch{}}var P=Math.clz32?Math.clz32:et,Re=Math.log,Vt=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(Re(e)/Vt|0)|0}var Te=256,tt=262144,Ta=4194304;function $t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?n=$t(i):(r&=m,r!==0?n=$t(r):a||(a=m&~e,a!==0&&(n=$t(a))))):(m=i&~s,m!==0?n=$t(m):r!==0?n=$t(r):a||(a=i&~e,a!==0&&(n=$t(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function za(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vi(){var e=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),e}function ji(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ni(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yh(e,t,a,i,n,s){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(a=r&~a;0<a;){var k=31-P(a),O=1<<k;m[k]=0,x[k]=-1;var A=E[k];if(A!==null)for(E[k]=null,k=0;k<A.length;k++){var D=A[k];D!==null&&(D.lane&=-536870913)}a&=~O}i!==0&&Do(e,i,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Do(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-P(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ko(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-P(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function Mo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ks(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ro(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:yf(e.type))}function Oo(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Ea=Math.random().toString(36).slice(2),at="__reactFiber$"+Ea,bt="__reactProps$"+Ea,Nl="__reactContainer$"+Ea,Js="__reactEvents$"+Ea,vh="__reactListeners$"+Ea,jh="__reactHandles$"+Ea,Uo="__reactResources$"+Ea,Si="__reactMarker$"+Ea;function $s(e){delete e[at],delete e[bt],delete e[Js],delete e[vh],delete e[jh]}function Sl(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Nl]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=af(e);e!==null;){if(a=e[at])return a;e=af(e)}return t}e=a,a=e.parentNode}return null}function wl(e){if(e=e[at]||e[Nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Cl(e){var t=e[Uo];return t||(t=e[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Si]=!0}var Bo=new Set,_o={};function al(e,t){Tl(e,t),Tl(e+"Capture",t)}function Tl(e,t){for(_o[e]=t,e=0;e<t.length;e++)Bo.add(t[e])}var Nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Go={},Fo={};function Sh(e){return Rt.call(Fo,e)?!0:Rt.call(Go,e)?!1:Nh.test(e)?Fo[e]=!0:(Go[e]=!0,!1)}function Sn(e,t,a){if(Sh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wh(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){if(!e._valueTracker){var t=qo(e)?"checked":"value";e._valueTracker=wh(e,t,""+e[t])}}function Lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=qo(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ch=/[\n"\\]/g;function Ut(e){return e.replace(Ch,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(e,t,a,i,n,s,r,m){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?er(e,r,Ot(t)):a!=null?er(e,r,Ot(a)):i!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ot(m):e.removeAttribute("name")}function Ho(e,t,a,i,n,s,r,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Is(e);return}a=a!=null?""+Ot(a):"",t=t!=null?""+Ot(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Is(e)}function er(e,t,a){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zl(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Yo(e,t,a){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ot(a):""}function Qo(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(g(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Ot(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Is(e)}function El(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xo(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Th.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vo(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&Xo(e,n,i)}else for(var s in t)t.hasOwnProperty(s)&&Xo(e,s,t[s])}function tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tn(e){return Eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var ar=null;function lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Dl=null;function Zo(e){var t=wl(e);if(t&&(e=t.stateNode)){var a=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ps(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[bt]||null;if(!n)throw Error(o(90));Ps(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Lo(i)}break e;case"textarea":Yo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&zl(e,!!a.multiple,t,!1)}}}var ir=!1;function Ko(e,t,a){if(ir)return e(t,a);ir=!0;try{var i=e(t);return i}finally{if(ir=!1,(Al!==null||Dl!==null)&&(fs(),Al&&(t=Al,e=Dl,Dl=Al=null,Zo(t),e)))for(t=0;t<e.length;t++)Zo(e[t])}}function Ci(e,t){var a=e.stateNode;if(a===null)return null;var i=a[bt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(ra)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){nr=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{nr=!1}var Aa=null,sr=null,zn=null;function Wo(){if(zn)return zn;var e,t=sr,a=t.length,i,n="value"in Aa?Aa.value:Aa.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(i=1;i<=r&&t[a-i]===n[s-i];i++);return zn=n.slice(e,1<i?1-i:void 0)}function En(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function An(){return!0}function Jo(){return!1}function xt(e){function t(a,i,n,s,r){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?An:Jo,this.isPropagationStopped=Jo,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=xt(ll),zi=S({},ll,{view:0,detail:0}),Ah=xt(zi),rr,cr,Ei,kn=S({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(rr=e.screenX-Ei.screenX,cr=e.screenY-Ei.screenY):cr=rr=0,Ei=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),$o=xt(kn),Dh=S({},kn,{dataTransfer:0}),kh=xt(Dh),Mh=S({},zi,{relatedTarget:0}),or=xt(Mh),Rh=S({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=xt(Rh),Uh=S({},ll,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=xt(Uh),_h=S({},ll,{data:0}),Io=xt(_h),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qh[e])?!!t[e]:!1}function dr(){return Lh}var Hh=S({},zi,{key:function(e){if(e.key){var t=Gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=En(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?En(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?En(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yh=xt(Hh),Qh=S({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=xt(Qh),Xh=S({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),Vh=xt(Xh),Zh=S({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kh=xt(Zh),Wh=S({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=xt(Wh),$h=S({},ll,{newState:0,oldState:0}),Ih=xt($h),Ph=[9,13,27,32],ur=ra&&"CompositionEvent"in window,Ai=null;ra&&"documentMode"in document&&(Ai=document.documentMode);var eg=ra&&"TextEvent"in window&&!Ai,ed=ra&&(!ur||Ai&&8<Ai&&11>=Ai),td=" ",ad=!1;function ld(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function tg(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(ad=!0,td);case"textInput":return e=t.data,e===td&&ad?null:e;default:return null}}function ag(e,t){if(kl)return e==="compositionend"||!ur&&ld(e,t)?(e=Wo(),zn=sr=Aa=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function sd(e,t,a,i){Al?Dl?Dl.push(i):Dl=[i]:Al=i,t=vs(t,"onChange"),0<t.length&&(a=new Dn("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Di=null,ki=null;function ig(e){Hm(e,0)}function Mn(e){var t=wi(e);if(Lo(t))return e}function rd(e,t){if(e==="change")return t}var cd=!1;if(ra){var mr;if(ra){var fr="oninput"in document;if(!fr){var od=document.createElement("div");od.setAttribute("oninput","return;"),fr=typeof od.oninput=="function"}mr=fr}else mr=!1;cd=mr&&(!document.documentMode||9<document.documentMode)}function dd(){Di&&(Di.detachEvent("onpropertychange",ud),ki=Di=null)}function ud(e){if(e.propertyName==="value"&&Mn(ki)){var t=[];sd(t,ki,e,lr(e)),Ko(ig,t)}}function ng(e,t,a){e==="focusin"?(dd(),Di=t,ki=a,Di.attachEvent("onpropertychange",ud)):e==="focusout"&&dd()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mn(ki)}function rg(e,t){if(e==="click")return Mn(t)}function cg(e,t){if(e==="input"||e==="change")return Mn(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:og;function Mi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Rt.call(t,n)||!Ct(e[n],t[n]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var a=md(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=md(a)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Cn(e.document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dg=ra&&"documentMode"in document&&11>=document.documentMode,Ml=null,gr=null,Ri=null,pr=!1;function pd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pr||Ml==null||Ml!==Cn(i)||(i=Ml,"selectionStart"in i&&hr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ri&&Mi(Ri,i)||(Ri=i,i=vs(gr,"onSelect"),0<i.length&&(t=new Dn("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Ml)))}function il(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Rl={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionrun:il("Transition","TransitionRun"),transitionstart:il("Transition","TransitionStart"),transitioncancel:il("Transition","TransitionCancel"),transitionend:il("Transition","TransitionEnd")},br={},bd={};ra&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function nl(e){if(br[e])return br[e];if(!Rl[e])return e;var t=Rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bd)return br[e]=t[a];return e}var xd=nl("animationend"),yd=nl("animationiteration"),vd=nl("animationstart"),ug=nl("transitionrun"),mg=nl("transitionstart"),fg=nl("transitioncancel"),jd=nl("transitionend"),Nd=new Map,xr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xr.push("scrollEnd");function Zt(e,t){Nd.set(e,t),al(t,[e])}var Rn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Ol=0,yr=0;function On(){for(var e=Ol,t=yr=Ol=0;t<e;){var a=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var s=Bt[t];if(Bt[t++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}s!==0&&Sd(a,n,s)}}function Un(e,t,a,i){Bt[Ol++]=e,Bt[Ol++]=t,Bt[Ol++]=a,Bt[Ol++]=i,yr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function vr(e,t,a,i){return Un(e,t,a,i),Bn(e)}function sl(e,t){return Un(e,null,null,t),Bn(e)}function Sd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,i=s.alternate,i!==null&&(i.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-P(a),e=s.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),s):null}function Bn(e){if(50<tn)throw tn=0,Ac=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ul={};function hg(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,a,i){return new hg(e,t,a,i)}function jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _n(e,t,a,i,n,s){var r=0;if(i=e,typeof e=="function")jr(e)&&(r=1);else if(typeof e=="string")r=y0(e,a,We.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ot:return e=Tt(31,a,t,n),e.elementType=ot,e.lanes=s,e;case U:return rl(a.children,n,s,t);case H:r=8,n|=24;break;case W:return e=Tt(12,a,t,n|2),e.elementType=W,e.lanes=s,e;case le:return e=Tt(13,a,t,n),e.elementType=le,e.lanes=s,e;case Ge:return e=Tt(19,a,t,n),e.elementType=Ge,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:r=10;break e;case ee:r=9;break e;case Z:r=11;break e;case De:r=14;break e;case Fe:r=16,i=null;break e}r=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Tt(r,a,t,n),t.elementType=e,t.type=i,t.lanes=s,t}function rl(e,t,a,i){return e=Tt(7,e,i,t),e.lanes=a,e}function Nr(e,t,a){return e=Tt(6,e,null,t),e.lanes=a,e}function Cd(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Sr(e,t,a){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Td=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var a=Td.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yn(t)},Td.set(e,t),t)}return{value:e,source:t,stack:yn(t)}}var Bl=[],_l=0,Gn=null,Oi=0,Gt=[],Ft=0,Da=null,It=1,Pt="";function oa(e,t){Bl[_l++]=Oi,Bl[_l++]=Gn,Gn=e,Oi=t}function zd(e,t,a){Gt[Ft++]=It,Gt[Ft++]=Pt,Gt[Ft++]=Da,Da=e;var i=It;e=Pt;var n=32-P(i)-1;i&=~(1<<n),a+=1;var s=32-P(t)+n;if(30<s){var r=n-n%5;s=(i&(1<<r)-1).toString(32),i>>=r,n-=r,It=1<<32-P(t)+n|a<<n|i,Pt=s+e}else It=1<<s|a<<n|i,Pt=e}function wr(e){e.return!==null&&(oa(e,1),zd(e,1,0))}function Cr(e){for(;e===Gn;)Gn=Bl[--_l],Bl[_l]=null,Oi=Bl[--_l],Bl[_l]=null;for(;e===Da;)Da=Gt[--Ft],Gt[Ft]=null,Pt=Gt[--Ft],Gt[Ft]=null,It=Gt[--Ft],Gt[Ft]=null}function Ed(e,t){Gt[Ft++]=It,Gt[Ft++]=Pt,Gt[Ft++]=Da,It=t.id,Pt=t.overflow,Da=e}var lt=null,ze=null,ue=!1,ka=null,qt=!1,Tr=Error(o(519));function Ma(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ui(_t(t,e)),Tr}function Ad(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[at]=e,t[bt]=i,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<ln.length;a++)re(ln[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Ho(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Qo(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Vm(t.textContent,a)?(i.popover!=null&&(re("beforetoggle",t),re("toggle",t)),i.onScroll!=null&&re("scroll",t),i.onScrollEnd!=null&&re("scrollend",t),i.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Ma(e,!0)}function Dd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:lt=lt.return}}function Gl(e){if(e!==lt)return!1;if(!ue)return Dd(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qc(e.type,e.memoizedProps)),a=!a),a&&ze&&Ma(e),Dd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=tf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=tf(e)}else t===27?(t=ze,Va(e.type)?(e=Wc,Wc=null,ze=e):ze=t):ze=lt?Ht(e.stateNode.nextSibling):null;return!0}function cl(){ze=lt=null,ue=!1}function zr(){var e=ka;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),ka=null),e}function Ui(e){ka===null?ka=[e]:ka.push(e)}var Er=ie(null),ol=null,da=null;function Ra(e,t,a){ce(Er,t._currentValue),t._currentValue=a}function ua(e){e._currentValue=Er.current,be(Er)}function Ar(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Dr(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var r=n.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=n;for(var x=0;x<t.length;x++)if(m.context===t[x]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Ar(s.return,a,e),i||(r=null);break e}s=m.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Ar(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Fl(e,t,a,i){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var m=n.type;Ct(n.pendingProps.value,r.value)||(e!==null?e.push(m):e=[m])}}else if(n===Jt.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(on):e=[on])}n=n.return}e!==null&&Dr(t,e,a,i),t.flags|=262144}function Fn(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dl(e){ol=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return kd(ol,e)}function qn(e,t){return ol===null&&dl(e),kd(e,t)}function kd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(o(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var gg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},pg=d.unstable_scheduleCallback,bg=d.unstable_NormalPriority,qe={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kr(){return{controller:new gg,data:new Map,refCount:0}}function Bi(e){e.refCount--,e.refCount===0&&pg(bg,function(){e.controller.abort()})}var _i=null,Mr=0,ql=0,Ll=null;function xg(e,t){if(_i===null){var a=_i=[];Mr=0,ql=Uc(),Ll={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Mr++,t.then(Md,Md),t}function Md(){if(--Mr===0&&_i!==null){Ll!==null&&(Ll.status="fulfilled");var e=_i;_i=null,ql=0,Ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yg(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Rd=_.S;_.S=function(e,t){pm=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xg(e,t),Rd!==null&&Rd(e,t)};var ul=ie(null);function Rr(){var e=ul.current;return e!==null?e:Ce.pooledCache}function Ln(e,t){t===null?ce(ul,ul.current):ce(ul,t.pool)}function Od(){var e=Rr();return e===null?null:{parent:qe._currentValue,pool:e}}var Hl=Error(o(460)),Or=Error(o(474)),Hn=Error(o(542)),Yn={then:function(){}};function Ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gd(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gd(e),e}throw fl=t,Hl}}function ml(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fl=a,Hl):a}}var fl=null;function _d(){if(fl===null)throw Error(o(459));var e=fl;return fl=null,e}function Gd(e){if(e===Hl||e===Hn)throw Error(o(483))}var Yl=null,Gi=0;function Qn(e){var t=Gi;return Gi+=1,Yl===null&&(Yl=[]),Bd(Yl,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xn(e,t){throw t.$$typeof===M?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fd(e){function t(C,j){if(e){var z=C.deletions;z===null?(C.deletions=[j],C.flags|=16):z.push(j)}}function a(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function i(C){for(var j=new Map;C!==null;)C.key!==null?j.set(C.key,C):j.set(C.index,C),C=C.sibling;return j}function n(C,j){return C=ca(C,j),C.index=0,C.sibling=null,C}function s(C,j,z){return C.index=z,e?(z=C.alternate,z!==null?(z=z.index,z<j?(C.flags|=67108866,j):z):(C.flags|=67108866,j)):(C.flags|=1048576,j)}function r(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,j,z,R){return j===null||j.tag!==6?(j=Nr(z,C.mode,R),j.return=C,j):(j=n(j,z),j.return=C,j)}function x(C,j,z,R){var K=z.type;return K===U?k(C,j,z.props.children,R,z.key):j!==null&&(j.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Fe&&ml(K)===j.type)?(j=n(j,z.props),Fi(j,z),j.return=C,j):(j=_n(z.type,z.key,z.props,null,C.mode,R),Fi(j,z),j.return=C,j)}function E(C,j,z,R){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=Sr(z,C.mode,R),j.return=C,j):(j=n(j,z.children||[]),j.return=C,j)}function k(C,j,z,R,K){return j===null||j.tag!==7?(j=rl(z,C.mode,R,K),j.return=C,j):(j=n(j,z),j.return=C,j)}function O(C,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nr(""+j,C.mode,z),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return z=_n(j.type,j.key,j.props,null,C.mode,z),Fi(z,j),z.return=C,z;case G:return j=Sr(j,C.mode,z),j.return=C,j;case Fe:return j=ml(j),O(C,j,z)}if(g(j)||Ve(j))return j=rl(j,C.mode,z,null),j.return=C,j;if(typeof j.then=="function")return O(C,Qn(j),z);if(j.$$typeof===Q)return O(C,qn(C,j),z);Xn(C,j)}return null}function A(C,j,z,R){var K=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:m(C,j,""+z,R);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===K?x(C,j,z,R):null;case G:return z.key===K?E(C,j,z,R):null;case Fe:return z=ml(z),A(C,j,z,R)}if(g(z)||Ve(z))return K!==null?null:k(C,j,z,R,null);if(typeof z.then=="function")return A(C,j,Qn(z),R);if(z.$$typeof===Q)return A(C,j,qn(C,z),R);Xn(C,z)}return null}function D(C,j,z,R,K){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return C=C.get(z)||null,m(j,C,""+R,K);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case L:return C=C.get(R.key===null?z:R.key)||null,x(j,C,R,K);case G:return C=C.get(R.key===null?z:R.key)||null,E(j,C,R,K);case Fe:return R=ml(R),D(C,j,z,R,K)}if(g(R)||Ve(R))return C=C.get(z)||null,k(j,C,R,K,null);if(typeof R.then=="function")return D(C,j,z,Qn(R),K);if(R.$$typeof===Q)return D(C,j,z,qn(j,R),K);Xn(j,R)}return null}function X(C,j,z,R){for(var K=null,me=null,V=j,ae=j=0,de=null;V!==null&&ae<z.length;ae++){V.index>ae?(de=V,V=null):de=V.sibling;var fe=A(C,V,z[ae],R);if(fe===null){V===null&&(V=de);break}e&&V&&fe.alternate===null&&t(C,V),j=s(fe,j,ae),me===null?K=fe:me.sibling=fe,me=fe,V=de}if(ae===z.length)return a(C,V),ue&&oa(C,ae),K;if(V===null){for(;ae<z.length;ae++)V=O(C,z[ae],R),V!==null&&(j=s(V,j,ae),me===null?K=V:me.sibling=V,me=V);return ue&&oa(C,ae),K}for(V=i(V);ae<z.length;ae++)de=D(V,C,ae,z[ae],R),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?ae:de.key),j=s(de,j,ae),me===null?K=de:me.sibling=de,me=de);return e&&V.forEach(function($a){return t(C,$a)}),ue&&oa(C,ae),K}function J(C,j,z,R){if(z==null)throw Error(o(151));for(var K=null,me=null,V=j,ae=j=0,de=null,fe=z.next();V!==null&&!fe.done;ae++,fe=z.next()){V.index>ae?(de=V,V=null):de=V.sibling;var $a=A(C,V,fe.value,R);if($a===null){V===null&&(V=de);break}e&&V&&$a.alternate===null&&t(C,V),j=s($a,j,ae),me===null?K=$a:me.sibling=$a,me=$a,V=de}if(fe.done)return a(C,V),ue&&oa(C,ae),K;if(V===null){for(;!fe.done;ae++,fe=z.next())fe=O(C,fe.value,R),fe!==null&&(j=s(fe,j,ae),me===null?K=fe:me.sibling=fe,me=fe);return ue&&oa(C,ae),K}for(V=i(V);!fe.done;ae++,fe=z.next())fe=D(V,C,ae,fe.value,R),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?ae:fe.key),j=s(fe,j,ae),me===null?K=fe:me.sibling=fe,me=fe);return e&&V.forEach(function(D0){return t(C,D0)}),ue&&oa(C,ae),K}function we(C,j,z,R){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var K=z.key;j!==null;){if(j.key===K){if(K=z.type,K===U){if(j.tag===7){a(C,j.sibling),R=n(j,z.props.children),R.return=C,C=R;break e}}else if(j.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Fe&&ml(K)===j.type){a(C,j.sibling),R=n(j,z.props),Fi(R,z),R.return=C,C=R;break e}a(C,j);break}else t(C,j);j=j.sibling}z.type===U?(R=rl(z.props.children,C.mode,R,z.key),R.return=C,C=R):(R=_n(z.type,z.key,z.props,null,C.mode,R),Fi(R,z),R.return=C,C=R)}return r(C);case G:e:{for(K=z.key;j!==null;){if(j.key===K)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(C,j.sibling),R=n(j,z.children||[]),R.return=C,C=R;break e}else{a(C,j);break}else t(C,j);j=j.sibling}R=Sr(z,C.mode,R),R.return=C,C=R}return r(C);case Fe:return z=ml(z),we(C,j,z,R)}if(g(z))return X(C,j,z,R);if(Ve(z)){if(K=Ve(z),typeof K!="function")throw Error(o(150));return z=K.call(z),J(C,j,z,R)}if(typeof z.then=="function")return we(C,j,Qn(z),R);if(z.$$typeof===Q)return we(C,j,qn(C,z),R);Xn(C,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,j!==null&&j.tag===6?(a(C,j.sibling),R=n(j,z),R.return=C,C=R):(a(C,j),R=Nr(z,C.mode,R),R.return=C,C=R),r(C)):a(C,j)}return function(C,j,z,R){try{Gi=0;var K=we(C,j,z,R);return Yl=null,K}catch(V){if(V===Hl||V===Hn)throw V;var me=Tt(29,V,null,C.mode);return me.lanes=R,me.return=C,me}finally{}}}var hl=Fd(!0),qd=Fd(!1),Oa=!1;function Ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Br(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=Bn(e),Sd(e,null,a),t}return Un(e,i,t,a),Bn(e)}function qi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ko(e,a)}}function _r(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Gr=!1;function Li(){if(Gr){var e=Ll;if(e!==null)throw e}}function Hi(e,t,a,i){Gr=!1;var n=e.updateQueue;Oa=!1;var s=n.firstBaseUpdate,r=n.lastBaseUpdate,m=n.shared.pending;if(m!==null){n.shared.pending=null;var x=m,E=x.next;x.next=null,r===null?s=E:r.next=E,r=x;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==r&&(m===null?k.firstBaseUpdate=E:m.next=E,k.lastBaseUpdate=x))}if(s!==null){var O=n.baseState;r=0,k=E=x=null,m=s;do{var A=m.lane&-536870913,D=A!==m.lane;if(D?(oe&A)===A:(i&A)===A){A!==0&&A===ql&&(Gr=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var X=e,J=m;A=t;var we=a;switch(J.tag){case 1:if(X=J.payload,typeof X=="function"){O=X.call(we,O,A);break e}O=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,A=typeof X=="function"?X.call(we,O,A):X,A==null)break e;O=S({},O,A);break e;case 2:Oa=!0}}A=m.callback,A!==null&&(e.flags|=64,D&&(e.flags|=8192),D=n.callbacks,D===null?n.callbacks=[A]:D.push(A))}else D={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(E=k=D,x=O):k=k.next=D,r|=A;if(m=m.next,m===null){if(m=n.shared.pending,m===null)break;D=m,m=D.next,D.next=null,n.lastBaseUpdate=D,n.shared.pending=null}}while(!0);k===null&&(x=O),n.baseState=x,n.firstBaseUpdate=E,n.lastBaseUpdate=k,s===null&&(n.shared.lanes=0),La|=r,e.lanes=r,e.memoizedState=O}}function Ld(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Hd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ld(a[e],t)}var Ql=ie(null),Vn=ie(0);function Yd(e,t){e=va,ce(Vn,e),ce(Ql,t),va=e|t.baseLanes}function Fr(){ce(Vn,va),ce(Ql,Ql.current)}function qr(){va=Vn.current,be(Ql),be(Vn)}var zt=ie(null),Lt=null;function _a(e){var t=e.alternate;ce(Be,Be.current&1),ce(zt,e),Lt===null&&(t===null||Ql.current!==null||t.memoizedState!==null)&&(Lt=e)}function Lr(e){ce(Be,Be.current),ce(zt,e),Lt===null&&(Lt=e)}function Qd(e){e.tag===22?(ce(Be,Be.current),ce(zt,e),Lt===null&&(Lt=e)):Ga()}function Ga(){ce(Be,Be.current),ce(zt,zt.current)}function Et(e){be(zt),Lt===e&&(Lt=null),be(Be)}var Be=ie(0);function Zn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zc(a)||Kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,te=null,Ne=null,Le=null,Kn=!1,Xl=!1,gl=!1,Wn=0,Yi=0,Vl=null,vg=0;function Oe(){throw Error(o(321))}function Hr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function Yr(e,t,a,i,n,s){return ma=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?zu:ic,gl=!1,s=a(i,n),gl=!1,Xl&&(s=Vd(t,a,i,n)),Xd(e),s}function Xd(e){_.H=Vi;var t=Ne!==null&&Ne.next!==null;if(ma=0,Le=Ne=te=null,Kn=!1,Yi=0,Vl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&Fn(e)&&(He=!0))}function Vd(e,t,a,i){te=e;var n=0;do{if(Xl&&(Vl=null),Yi=0,Xl=!1,25<=n)throw Error(o(301));if(n+=1,Le=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Eu,s=t(a,i)}while(Xl);return s}function jg(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Qi(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(te.flags|=1024),t}function Qr(){var e=Wn!==0;return Wn=0,e}function Xr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vr(e){if(Kn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kn=!1}ma=0,Le=Ne=te=null,Xl=!1,Yi=Wn=0,Vl=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?te.memoizedState=Le=e:Le=Le.next=e,Le}function _e(){if(Ne===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Le===null?te.memoizedState:Le.next;if(t!==null)Le=t,Ne=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?te.memoizedState=Le=e:Le=Le.next=e}return Le}function Jn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qi(e){var t=Yi;return Yi+=1,Vl===null&&(Vl=[]),e=Bd(Vl,e,t),t=te,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?zu:ic),e}function $n(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qi(e);if(e.$$typeof===Q)return it(e)}throw Error(o(438,String(e)))}function Zr(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=te.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Jn(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ie;return t.index++,a}function fa(e,t){return typeof t=="function"?t(e):t}function In(e){var t=_e();return Kr(t,Ne,e)}function Kr(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var n=e.baseQueue,s=i.pending;if(s!==null){if(n!==null){var r=n.next;n.next=s.next,s.next=r}t.baseQueue=n=s,i.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var m=r=null,x=null,E=t,k=!1;do{var O=E.lane&-536870913;if(O!==E.lane?(oe&O)===O:(ma&O)===O){var A=E.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),O===ql&&(k=!0);else if((ma&A)===A){E=E.next,A===ql&&(k=!0);continue}else O={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=O,r=s):x=x.next=O,te.lanes|=A,La|=A;O=E.action,gl&&a(s,O),s=E.hasEagerState?E.eagerState:a(s,O)}else A={lane:O,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=A,r=s):x=x.next=A,te.lanes|=O,La|=O;E=E.next}while(E!==null&&E!==t);if(x===null?r=s:x.next=m,!Ct(s,e.memoizedState)&&(He=!0,k&&(a=Ll,a!==null)))throw a;e.memoizedState=s,e.baseState=r,e.baseQueue=x,i.lastRenderedState=s}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Wr(e){var t=_e(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do s=e(s,r.action),r=r.next;while(r!==n);Ct(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,i]}function Zd(e,t,a){var i=te,n=_e(),s=ue;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var r=!Ct((Ne||n).memoizedState,a);if(r&&(n.memoizedState=a,He=!0),n=n.queue,Ir(Jd.bind(null,i,n,e),[e]),n.getSnapshot!==t||r||Le!==null&&Le.memoizedState.tag&1){if(i.flags|=2048,Zl(9,{destroy:void 0},Wd.bind(null,i,n,a,t),null),Ce===null)throw Error(o(349));s||(ma&127)!==0||Kd(i,t,a)}return a}function Kd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Jn(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wd(e,t,a,i){t.value=a,t.getSnapshot=i,$d(t)&&Id(e)}function Jd(e,t,a){return a(function(){$d(t)&&Id(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Id(e){var t=sl(e,2);t!==null&&St(t,e,2)}function Jr(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),gl){$(!0);try{a()}finally{$(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Pd(e,t,a,i){return e.baseState=a,Kr(e,Ne,typeof i=="function"?i:fa)}function Ng(e,t,a,i,n){if(ts(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};_.T!==null?a(!0):s.isTransition=!1,i(s),a=t.pending,a===null?(s.next=t.pending=s,eu(t,s)):(s.next=a.next,t.pending=a.next=s)}}function eu(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var s=_.T,r={};_.T=r;try{var m=a(n,i),x=_.S;x!==null&&x(r,m),tu(e,t,m)}catch(E){$r(e,t,E)}finally{s!==null&&r.types!==null&&(s.types=r.types),_.T=s}}else try{s=a(n,i),tu(e,t,s)}catch(E){$r(e,t,E)}}function tu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){au(e,t,i)},function(i){return $r(e,t,i)}):au(e,t,a)}function au(e,t,a){t.status="fulfilled",t.value=a,lu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,eu(e,a)))}function $r(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,lu(t),t=t.next;while(t!==i)}e.action=null}function lu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iu(e,t){return t}function nu(e,t){if(ue){var a=Ce.formState;if(a!==null){e:{var i=te;if(ue){if(ze){t:{for(var n=ze,s=qt;n.nodeType!==8;){if(!s){n=null;break t}if(n=Ht(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){ze=Ht(n.nextSibling),i=n.data==="F!";break e}}Ma(i)}i=!1}i&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iu,lastRenderedState:t},a.queue=i,a=wu.bind(null,te,i),i.dispatch=a,i=Jr(!1),s=lc.bind(null,te,!1,i.queue),i=ft(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=Ng.bind(null,te,n,s,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function su(e){var t=_e();return ru(t,Ne,e)}function ru(e,t,a){if(t=Kr(e,t,iu)[0],e=In(fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Qi(t)}catch(r){throw r===Hl?Hn:r}else i=t;t=_e();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Zl(9,{destroy:void 0},Sg.bind(null,n,a),null)),[i,s,e]}function Sg(e,t){e.action=t}function cu(e){var t=_e(),a=Ne;if(a!==null)return ru(t,a,e);_e(),t=t.memoizedState,a=_e();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Zl(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=te.updateQueue,t===null&&(t=Jn(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function ou(){return _e().memoizedState}function Pn(e,t,a,i){var n=ft();te.flags|=e,n.memoizedState=Zl(1|t,{destroy:void 0},a,i===void 0?null:i)}function es(e,t,a,i){var n=_e();i=i===void 0?null:i;var s=n.memoizedState.inst;Ne!==null&&i!==null&&Hr(i,Ne.memoizedState.deps)?n.memoizedState=Zl(t,s,a,i):(te.flags|=e,n.memoizedState=Zl(1|t,s,a,i))}function du(e,t){Pn(8390656,8,e,t)}function Ir(e,t){es(2048,8,e,t)}function wg(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Jn(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function uu(e){var t=_e().memoizedState;return wg({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function mu(e,t){return es(4,2,e,t)}function fu(e,t){return es(4,4,e,t)}function hu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gu(e,t,a){a=a!=null?a.concat([e]):null,es(4,4,hu.bind(null,t,e),a)}function Pr(){}function pu(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Hr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function bu(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Hr(t,i[1]))return i[0];if(i=e(),gl){$(!0);try{e()}finally{$(!1)}}return a.memoizedState=[i,t],i}function ec(e,t,a){return a===void 0||(ma&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=xm(),te.lanes|=e,La|=e,a)}function xu(e,t,a,i){return Ct(a,t)?a:Ql.current!==null?(e=ec(e,a,i),Ct(e,t)||(He=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(oe&261930)===0?(He=!0,e.memoizedState=a):(e=xm(),te.lanes|=e,La|=e,t)}function yu(e,t,a,i,n){var s=Y.p;Y.p=s!==0&&8>s?s:8;var r=_.T,m={};_.T=m,lc(e,!1,t,a);try{var x=n(),E=_.S;if(E!==null&&E(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var k=yg(x,i);Xi(e,t,k,kt(e))}else Xi(e,t,i,kt(e))}catch(O){Xi(e,t,{then:function(){},status:"rejected",reason:O},kt())}finally{Y.p=s,r!==null&&m.types!==null&&(r.types=m.types),_.T=r}}function Cg(){}function tc(e,t,a,i){if(e.tag!==5)throw Error(o(476));var n=vu(e).queue;yu(e,n,t,ne,a===null?Cg:function(){return ju(e),a(i)})}function vu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ju(e){var t=vu(e);t.next===null&&(t=e.alternate.memoizedState),Xi(e,t.next.queue,{},kt())}function ac(){return it(on)}function Nu(){return _e().memoizedState}function Su(){return _e().memoizedState}function Tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Ua(a);var i=Ba(t,e,a);i!==null&&(St(i,t,a),qi(i,t,a)),t={cache:kr()},e.payload=t;return}t=t.return}}function zg(e,t,a){var i=kt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ts(e)?Cu(t,a):(a=vr(e,t,a,i),a!==null&&(St(a,e,i),Tu(a,t,i)))}function wu(e,t,a){var i=kt();Xi(e,t,a,i)}function Xi(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ts(e))Cu(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,m=s(r,a);if(n.hasEagerState=!0,n.eagerState=m,Ct(m,r))return Un(e,t,n,0),Ce===null&&On(),!1}catch{}finally{}if(a=vr(e,t,n,i),a!==null)return St(a,e,i),Tu(a,t,i),!0}return!1}function lc(e,t,a,i){if(i={lane:2,revertLane:Uc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ts(e)){if(t)throw Error(o(479))}else t=vr(e,a,i,2),t!==null&&St(t,e,2)}function ts(e){var t=e.alternate;return e===te||t!==null&&t===te}function Cu(e,t){Xl=Kn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Tu(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ko(e,a)}}var Vi={readContext:it,use:$n,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Vi.useEffectEvent=Oe;var zu={readContext:it,use:$n,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:du,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Pn(4194308,4,hu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Pn(4194308,4,e,t)},useInsertionEffect:function(e,t){Pn(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var i=e();if(gl){$(!0);try{e()}finally{$(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=ft();if(a!==void 0){var n=a(t);if(gl){$(!0);try{a(t)}finally{$(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=zg.bind(null,te,e),[i.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Jr(e);var t=e.queue,a=wu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pr,useDeferredValue:function(e,t){var a=ft();return ec(a,e,t)},useTransition:function(){var e=Jr(!1);return e=yu.bind(null,te,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=te,n=ft();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ce===null)throw Error(o(349));(oe&127)!==0||Kd(i,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,du(Jd.bind(null,i,s,e),[e]),i.flags|=2048,Zl(9,{destroy:void 0},Wd.bind(null,i,s,a,t),null),a},useId:function(){var e=ft(),t=Ce.identifierPrefix;if(ue){var a=Pt,i=It;a=(i&~(1<<32-P(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Wn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=vg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:nu,useActionState:nu,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zr,useCacheRefresh:function(){return ft().memoizedState=Tg.bind(null,te)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},ic={readContext:it,use:$n,useCallback:pu,useContext:it,useEffect:Ir,useImperativeHandle:gu,useInsertionEffect:mu,useLayoutEffect:fu,useMemo:bu,useReducer:In,useRef:ou,useState:function(){return In(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return xu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=In(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:Zd,useId:Nu,useHostTransitionStatus:ac,useFormState:su,useActionState:su,useOptimistic:function(e,t){var a=_e();return Pd(a,Ne,e,t)},useMemoCache:Zr,useCacheRefresh:Su};ic.useEffectEvent=uu;var Eu={readContext:it,use:$n,useCallback:pu,useContext:it,useEffect:Ir,useImperativeHandle:gu,useInsertionEffect:mu,useLayoutEffect:fu,useMemo:bu,useReducer:Wr,useRef:ou,useState:function(){return Wr(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return Ne===null?ec(a,e,t):xu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Wr(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:Zd,useId:Nu,useHostTransitionStatus:ac,useFormState:cu,useActionState:cu,useOptimistic:function(e,t){var a=_e();return Ne!==null?Pd(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zr,useCacheRefresh:Su};Eu.useEffectEvent=uu;function nc(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sc={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=kt(),n=Ua(i);n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,i),t!==null&&(St(t,e,i),qi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=kt(),n=Ua(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,i),t!==null&&(St(t,e,i),qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),i=Ua(a);i.tag=2,t!=null&&(i.callback=t),t=Ba(e,i,a),t!==null&&(St(t,e,a),qi(t,e,a))}};function Au(e,t,a,i,n,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Mi(a,i)||!Mi(n,s):!0}function Du(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&sc.enqueueReplaceState(t,t.state,null)}function pl(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ku(e){Rn(e)}function Mu(e){console.error(e)}function Ru(e){Rn(e)}function as(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ou(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){as(e,t)},a}function Uu(e){return e=Ua(e),e.tag=3,e}function Bu(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=i.value;e.payload=function(){return n(s)},e.callback=function(){Ou(t,a,i)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ou(t,a,i),typeof n!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Eg(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Fl(t,a,n,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?hs():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===Yn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Mc(e,i,n)),!1;case 22:return a.flags|=65536,i===Yn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Mc(e,i,n)),!1}throw Error(o(435,a.tag))}return Mc(e,i,n),hs(),!1}if(ue)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==Tr&&(e=Error(o(422),{cause:i}),Ui(_t(e,a)))):(i!==Tr&&(t=Error(o(423),{cause:i}),Ui(_t(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=_t(i,a),n=rc(e.stateNode,i,n),_r(e,n),Ue!==4&&(Ue=2)),!1;var s=Error(o(520),{cause:i});if(s=_t(s,a),en===null?en=[s]:en.push(s),Ue!==4&&(Ue=2),t===null)return!0;i=_t(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=rc(a.stateNode,i,e),_r(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Uu(n),Bu(n,e,a,i),_r(a,n),!1}a=a.return}while(a!==null);return!1}var cc=Error(o(461)),He=!1;function nt(e,t,a,i){t.child=e===null?qd(t,null,a,i):hl(t,e.child,a,i)}function _u(e,t,a,i,n){a=a.render;var s=t.ref;if("ref"in i){var r={};for(var m in i)m!=="ref"&&(r[m]=i[m])}else r=i;return dl(t),i=Yr(e,t,a,r,s,n),m=Qr(),e!==null&&!He?(Xr(e,t,n),ha(e,t,n)):(ue&&m&&wr(t),t.flags|=1,nt(e,t,i,n),t.child)}function Gu(e,t,a,i,n){if(e===null){var s=a.type;return typeof s=="function"&&!jr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Fu(e,t,s,i,n)):(e=_n(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!pc(e,n)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:Mi,a(r,i)&&e.ref===t.ref)return ha(e,t,n)}return t.flags|=1,e=ca(s,i),e.ref=t.ref,e.return=t,t.child=e}function Fu(e,t,a,i,n){if(e!==null){var s=e.memoizedProps;if(Mi(s,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=s,pc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,ha(e,t,n)}return oc(e,t,a,i,n)}function qu(e,t,a,i){var n=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~s}else i=0,t.child=null;return Lu(e,t,s,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ln(t,s!==null?s.cachePool:null),s!==null?Yd(t,s):Fr(),Qd(t);else return i=t.lanes=536870912,Lu(e,t,s!==null?s.baseLanes|a:a,a,i)}else s!==null?(Ln(t,s.cachePool),Yd(t,s),Ga(),t.memoizedState=null):(e!==null&&Ln(t,null),Fr(),Ga());return nt(e,t,n,a),t.child}function Zi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lu(e,t,a,i,n){var s=Rr();return s=s===null?null:{parent:qe._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Ln(t,null),Fr(),Qd(t),e!==null&&Fl(e,t,i,!0),t.childLanes=n,null}function ls(e,t){return t=ns({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hu(e,t,a){return hl(t,e.child,null,a),e=ls(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Ag(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(i.mode==="hidden")return e=ls(t,i),t.lanes=536870912,Zi(null,e);if(Lr(t),(e=ze)?(e=ef(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=Cd(e),a.return=t,t.child=a,lt=t,ze=null)):e=null,e===null)throw Ma(t);return t.lanes=536870912,null}return ls(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Lr(t),n)if(t.flags&256)t.flags&=-257,t=Hu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(He||Fl(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(i=Ce,i!==null&&(r=Mo(i,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,sl(e,r),St(i,e,r),cc;hs(),t=Hu(e,t,a)}else e=s.treeContext,ze=Ht(r.nextSibling),lt=t,ue=!0,ka=null,qt=!1,e!==null&&Ed(t,e),t=ls(t,i),t.flags|=4096;return t}return e=ca(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function is(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oc(e,t,a,i,n){return dl(t),a=Yr(e,t,a,i,void 0,n),i=Qr(),e!==null&&!He?(Xr(e,t,n),ha(e,t,n)):(ue&&i&&wr(t),t.flags|=1,nt(e,t,a,n),t.child)}function Yu(e,t,a,i,n,s){return dl(t),t.updateQueue=null,a=Vd(t,i,a,n),Xd(e),i=Qr(),e!==null&&!He?(Xr(e,t,s),ha(e,t,s)):(ue&&i&&wr(t),t.flags|=1,nt(e,t,a,s),t.child)}function Qu(e,t,a,i,n){if(dl(t),t.stateNode===null){var s=Ul,r=a.contextType;typeof r=="object"&&r!==null&&(s=it(r)),s=new a(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Ur(t),r=a.contextType,s.context=typeof r=="object"&&r!==null?it(r):Ul,s.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(nc(t,a,r,i),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&sc.enqueueReplaceState(s,s.state,null),Hi(t,i,s,n),Li(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,x=pl(a,m);s.props=x;var E=s.context,k=a.contextType;r=Ul,typeof k=="object"&&k!==null&&(r=it(k));var O=a.getDerivedStateFromProps;k=typeof O=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||E!==r)&&Du(t,s,i,r),Oa=!1;var A=t.memoizedState;s.state=A,Hi(t,i,s,n),Li(),E=t.memoizedState,m||A!==E||Oa?(typeof O=="function"&&(nc(t,a,O,i),E=t.memoizedState),(x=Oa||Au(t,a,x,i,A,E,r))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),s.props=i,s.state=E,s.context=r,i=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Br(e,t),r=t.memoizedProps,k=pl(a,r),s.props=k,O=t.pendingProps,A=s.context,E=a.contextType,x=Ul,typeof E=="object"&&E!==null&&(x=it(E)),m=a.getDerivedStateFromProps,(E=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==O||A!==x)&&Du(t,s,i,x),Oa=!1,A=t.memoizedState,s.state=A,Hi(t,i,s,n),Li();var D=t.memoizedState;r!==O||A!==D||Oa||e!==null&&e.dependencies!==null&&Fn(e.dependencies)?(typeof m=="function"&&(nc(t,a,m,i),D=t.memoizedState),(k=Oa||Au(t,a,k,i,A,D,x)||e!==null&&e.dependencies!==null&&Fn(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,D,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,D,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),s.props=i,s.state=D,s.context=x,i=k):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,is(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):nt(e,t,a,n),t.memoizedState=s.state,e=t.child):e=ha(e,t,n),e}function Xu(e,t,a,i){return cl(),t.flags|=256,nt(e,t,a,i),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:Od()}}function mc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function Vu(e,t,a){var i=t.pendingProps,n=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?_a(t):Ga(),(e=ze)?(e=ef(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=Cd(e),a.return=t,t.child=a,lt=t,ze=null)):e=null,e===null)throw Ma(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var m=i.children;return i=i.fallback,n?(Ga(),n=t.mode,m=ns({mode:"hidden",children:m},n),i=rl(i,n,a,null),m.return=t,i.return=t,m.sibling=i,t.child=m,i=t.child,i.memoizedState=uc(a),i.childLanes=mc(e,r,a),t.memoizedState=dc,Zi(null,i)):(_a(t),fc(t,m))}var x=e.memoizedState;if(x!==null&&(m=x.dehydrated,m!==null)){if(s)t.flags&256?(_a(t),t.flags&=-257,t=hc(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),m=i.fallback,n=t.mode,i=ns({mode:"visible",children:i.children},n),m=rl(m,n,a,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,hl(t,e.child,null,a),i=t.child,i.memoizedState=uc(a),i.childLanes=mc(e,r,a),t.memoizedState=dc,t=Zi(null,i));else if(_a(t),Kc(m)){if(r=m.nextSibling&&m.nextSibling.dataset,r)var E=r.dgst;r=E,i=Error(o(419)),i.stack="",i.digest=r,Ui({value:i,source:null,stack:null}),t=hc(e,t,a)}else if(He||Fl(e,t,a,!1),r=(a&e.childLanes)!==0,He||r){if(r=Ce,r!==null&&(i=Mo(r,a),i!==0&&i!==x.retryLane))throw x.retryLane=i,sl(e,i),St(r,e,i),cc;Zc(m)||hs(),t=hc(e,t,a)}else Zc(m)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ze=Ht(m.nextSibling),lt=t,ue=!0,ka=null,qt=!1,e!==null&&Ed(t,e),t=fc(t,i.children),t.flags|=4096);return t}return n?(Ga(),m=i.fallback,n=t.mode,x=e.child,E=x.sibling,i=ca(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,E!==null?m=ca(E,m):(m=rl(m,n,a,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,Zi(null,i),i=t.child,m=e.child.memoizedState,m===null?m=uc(a):(n=m.cachePool,n!==null?(x=qe._currentValue,n=n.parent!==x?{parent:x,pool:x}:n):n=Od(),m={baseLanes:m.baseLanes|a,cachePool:n}),i.memoizedState=m,i.childLanes=mc(e,r,a),t.memoizedState=dc,Zi(e.child,i)):(_a(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=ns({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ns(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function hc(e,t,a){return hl(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ar(e.return,t,a)}function gc(e,t,a,i,n,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=a,r.tailMode=n,r.treeForkCount=s)}function Ku(e,t,a){var i=t.pendingProps,n=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,m=(r&2)!==0;if(m?(r=r&1|2,t.flags|=128):r&=1,ce(Be,r),nt(e,t,i,a),i=ue?Oi:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,a,t);else if(e.tag===19)Zu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Zn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),gc(t,!1,n,a,s,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Zn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}gc(t,!0,a,null,s,i);break;case"together":gc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Fl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fn(e)))}function Dg(e,t,a){switch(t.tag){case 3:la(t,t.stateNode.containerInfo),Ra(t,qe,e.memoizedState.cache),cl();break;case 27:case 5:mi(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vu(e,t,a):(_a(t),e=ha(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Fl(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return Ku(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ce(Be,Be.current),i)break;return null;case 22:return t.lanes=0,qu(e,t,a,t.pendingProps);case 24:Ra(t,qe,e.memoizedState.cache)}return ha(e,t,a)}function Wu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!pc(e,a)&&(t.flags&128)===0)return He=!1,Dg(e,t,a);He=(e.flags&131072)!==0}else He=!1,ue&&(t.flags&1048576)!==0&&zd(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ml(t.elementType),t.type=e,typeof e=="function")jr(e)?(i=pl(e,i),t.tag=1,t=Qu(null,t,e,i,a)):(t.tag=0,t=oc(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=_u(null,t,e,i,a);break e}else if(n===De){t.tag=14,t=Gu(null,t,e,i,a);break e}}throw t=dt(e)||e,Error(o(306,t,""))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=pl(i,t.pendingProps),Qu(e,t,i,n,a);case 3:e:{if(la(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;n=s.element,Br(e,t),Hi(t,i,null,a);var r=t.memoizedState;if(i=r.cache,Ra(t,qe,i),i!==s.cache&&Dr(t,[qe],a,!0),Li(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Xu(e,t,i,a);break e}else if(i!==n){n=_t(Error(o(424)),t),Ui(n),t=Xu(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Ht(e.firstChild),lt=t,ue=!0,ka=null,qt=!0,a=qd(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cl(),i===n){t=ha(e,t,a);break e}nt(e,t,i,a)}t=t.child}return t;case 26:return is(e,t),e===null?(a=rf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,i=js(ut.current).createElement(a),i[at]=t,i[bt]=e,st(i,a,e),Je(i),t.stateNode=i):t.memoizedState=rf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mi(t),e===null&&ue&&(i=t.stateNode=lf(t.type,t.pendingProps,ut.current),lt=t,qt=!0,n=ze,Va(t.type)?(Wc=n,ze=Ht(i.firstChild)):ze=n),nt(e,t,t.pendingProps.children,a),is(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=i=ze)&&(i=s0(i,t.type,t.pendingProps,qt),i!==null?(t.stateNode=i,lt=t,ze=Ht(i.firstChild),qt=!1,n=!0):n=!1),n||Ma(t)),mi(t),n=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Qc(n,s)?i=null:r!==null&&Qc(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Yr(e,t,jg,null,null,a),on._currentValue=n),is(e,t),nt(e,t,i,a),t.child;case 6:return e===null&&ue&&((e=a=ze)&&(a=r0(a,t.pendingProps,qt),a!==null?(t.stateNode=a,lt=t,ze=null,e=!0):e=!1),e||Ma(t)),null;case 13:return Vu(e,t,a);case 4:return la(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hl(t,null,i,a):nt(e,t,i,a),t.child;case 11:return _u(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ra(t,t.type,i.value),nt(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,dl(t),n=it(n),i=i(n),t.flags|=1,nt(e,t,i,a),t.child;case 14:return Gu(e,t,t.type,t.pendingProps,a);case 15:return Fu(e,t,t.type,t.pendingProps,a);case 19:return Ku(e,t,a);case 31:return Ag(e,t,a);case 22:return qu(e,t,a,t.pendingProps);case 24:return dl(t),i=it(qe),e===null?(n=Rr(),n===null&&(n=Ce,s=kr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:i,cache:n},Ur(t),Ra(t,qe,n)):((e.lanes&a)!==0&&(Br(e,t),Hi(t,null,null,a),Li()),n=e.memoizedState,s=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ra(t,qe,i)):(i=s.cache,Ra(t,qe,i),i!==n.cache&&Dr(t,[qe],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ga(e){e.flags|=4}function bc(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Nm())e.flags|=8192;else throw fl=Yn,Or}else e.flags&=-16777217}function Ju(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mf(t))if(Nm())e.flags|=8192;else throw fl=Yn,Or}function ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vi():536870912,e.lanes|=t,$l|=t)}function Ki(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function kg(e,t,a){var i=t.pendingProps;switch(Cr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ua(qe),Ca(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gl(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zr())),Ee(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(ga(t),s!==null?(Ee(t),Ju(t,s)):(Ee(t),bc(t,n,null,i,a))):s?s!==e.memoizedState?(ga(t),Ee(t),Ju(t,s)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ga(t),Ee(t),bc(t,n,e,i,a)),null;case 27:if(el(t),a=ut.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}e=We.current,Gl(t)?Ad(t):(e=lf(n,i,a),t.stateNode=e,ga(t))}return Ee(t),null;case 5:if(el(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}if(s=We.current,Gl(t))Ad(t);else{var r=js(ut.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}s[at]=t,s[bt]=i;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;e:switch(st(s,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ga(t)}}return Ee(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ut.current,Gl(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=lt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Vm(e.nodeValue,a)),e||Ma(t,!0)}else e=js(e).createTextNode(i),e[at]=t,t.stateNode=e}return Ee(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gl(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ee(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Gl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[at]=t}else cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),n=!1}else n=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ss(t,t.updateQueue),Ee(t),null);case 4:return Ca(),e===null&&Fc(t.stateNode.containerInfo),Ee(t),null;case 10:return ua(t.type),Ee(t),null;case 19:if(be(Be),i=t.memoizedState,i===null)return Ee(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Ki(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Zn(e),s!==null){for(t.flags|=128,Ki(i,!1),e=s.updateQueue,t.updateQueue=e,ss(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wd(a,e),a=a.sibling;return ce(Be,Be.current&1|2),ue&&oa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&mt()>us&&(t.flags|=128,n=!0,Ki(i,!1),t.lanes=4194304)}else{if(!n)if(e=Zn(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ss(t,e),Ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ue)return Ee(t),null}else 2*mt()-i.renderingStartTime>us&&a!==536870912&&(t.flags|=128,n=!0,Ki(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=mt(),e.sibling=null,a=Be.current,ce(Be,n?a&1|2:a&1),ue&&oa(t,i.treeForkCount),e):(Ee(t),null);case 22:case 23:return Et(t),qr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&ss(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&be(ul),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ua(qe),Ee(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Mg(e,t){switch(Cr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(qe),Ca(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return el(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(o(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Be),null;case 4:return Ca(),null;case 10:return ua(t.type),null;case 22:case 23:return Et(t),qr(),e!==null&&be(ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(qe),null;case 25:return null;default:return null}}function $u(e,t){switch(Cr(t),t.tag){case 3:ua(qe),Ca();break;case 26:case 27:case 5:el(t);break;case 4:Ca();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:be(Be);break;case 10:ua(t.type);break;case 22:case 23:Et(t),qr(),e!==null&&be(ul);break;case 24:ua(qe)}}function Wi(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var s=a.create,r=a.inst;i=s(),r.destroy=i}a=a.next}while(a!==n)}}catch(m){ye(t,t.return,m)}}function Fa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var s=n.next;i=s;do{if((i.tag&e)===e){var r=i.inst,m=r.destroy;if(m!==void 0){r.destroy=void 0,n=t;var x=a,E=m;try{E()}catch(k){ye(n,x,k)}}}i=i.next}while(i!==s)}}catch(k){ye(t,t.return,k)}}function Iu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hd(t,a)}catch(i){ye(e,e.return,i)}}}function Pu(e,t,a){a.props=pl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ye(e,t,i)}}function Ji(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){ye(e,t,n)}}function ea(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function em(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function xc(e,t,a){try{var i=e.stateNode;e0(i,e.type,a,t),i[bt]=t}catch(n){ye(e,e.return,n)}}function tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,a),e=e.sibling;e!==null;)vc(e,t,a),e=e.sibling}function rs(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(rs(e,t,a),e=e.sibling;e!==null;)rs(e,t,a),e=e.sibling}function am(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);st(t,i,a),t[at]=e,t[bt]=a}catch(s){ye(e,e.return,s)}}var pa=!1,Ye=!1,jc=!1,lm=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Rg(e,t){if(e=e.containerInfo,Hc=Es,e=gd(e),hr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,m=-1,x=-1,E=0,k=0,O=e,A=null;t:for(;;){for(var D;O!==a||n!==0&&O.nodeType!==3||(m=r+n),O!==s||i!==0&&O.nodeType!==3||(x=r+i),O.nodeType===3&&(r+=O.nodeValue.length),(D=O.firstChild)!==null;)A=O,O=D;for(;;){if(O===e)break t;if(A===a&&++E===n&&(m=r),A===s&&++k===i&&(x=r),(D=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=D}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:e,selectionRange:a},Es=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,i=a.stateNode;try{var X=pl(a.type,n);e=i.getSnapshotBeforeUpdate(X,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(J){ye(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function im(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),i&4&&Wi(5,a);break;case 1:if(xa(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){ye(a,a.return,r)}else{var n=pl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ye(a,a.return,r)}}i&64&&Iu(a),i&512&&Ji(a,a.return);break;case 3:if(xa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hd(e,t)}catch(r){ye(a,a.return,r)}}break;case 27:t===null&&i&4&&am(a);case 26:case 5:xa(e,a),t===null&&i&4&&em(a),i&512&&Ji(a,a.return);break;case 12:xa(e,a);break;case 31:xa(e,a),i&4&&rm(e,a);break;case 13:xa(e,a),i&4&&cm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hg.bind(null,a),c0(e,a))));break;case 22:if(i=a.memoizedState!==null||pa,!i){t=t!==null&&t.memoizedState!==null||Ye,n=pa;var s=Ye;pa=i,(Ye=t)&&!s?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),pa=n,Ye=s}break;case 30:break;default:xa(e,a)}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,yt=!1;function ba(e,t,a){for(a=a.child;a!==null;)sm(e,t,a),a=a.sibling}function sm(e,t,a){if(F&&typeof F.onCommitFiberUnmount=="function")try{F.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 26:Ye||ea(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||ea(a,t);var i=Ae,n=yt;Va(a.type)&&(Ae=a.stateNode,yt=!1),ba(e,t,a),sn(a.stateNode),Ae=i,yt=n;break;case 5:Ye||ea(a,t);case 6:if(i=Ae,n=yt,Ae=null,ba(e,t,a),Ae=i,yt=n,Ae!==null)if(yt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(s){ye(a,t,s)}else try{Ae.removeChild(a.stateNode)}catch(s){ye(a,t,s)}break;case 18:Ae!==null&&(yt?(e=Ae,Im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ni(e)):Im(Ae,a.stateNode));break;case 4:i=Ae,n=yt,Ae=a.stateNode.containerInfo,yt=!0,ba(e,t,a),Ae=i,yt=n;break;case 0:case 11:case 14:case 15:Fa(2,a,t),Ye||Fa(4,a,t),ba(e,t,a);break;case 1:Ye||(ea(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Pu(a,t,i)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ye=(i=Ye)||a.memoizedState!==null,ba(e,t,a),Ye=i;break;default:ba(e,t,a)}}function rm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ni(e)}catch(a){ye(t,t.return,a)}}}function cm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ni(e)}catch(a){ye(t,t.return,a)}}function Og(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lm),t;default:throw Error(o(435,e.tag))}}function cs(e,t){var a=Og(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=Yg.bind(null,e,i);i.then(n,n)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],s=e,r=t,m=r;e:for(;m!==null;){switch(m.tag){case 27:if(Va(m.type)){Ae=m.stateNode,yt=!1;break e}break;case 5:Ae=m.stateNode,yt=!1;break e;case 3:case 4:Ae=m.stateNode.containerInfo,yt=!0;break e}m=m.return}if(Ae===null)throw Error(o(160));sm(s,r,n),Ae=null,yt=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)om(t,e),t=t.sibling}var Kt=null;function om(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),jt(e),i&4&&(Fa(3,e,e.return),Wi(3,e),Fa(5,e,e.return));break;case 1:vt(t,e),jt(e),i&512&&(Ye||a===null||ea(a,a.return)),i&64&&pa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Kt;if(vt(t,e),jt(e),i&512&&(Ye||a===null||ea(a,a.return)),i&4){var s=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Si]||s[at]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(i),n.head.insertBefore(s,n.querySelector("head > title"))),st(s,i,a),s[at]=e,Je(s),i=s;break e;case"link":var r=df("link","href",n).get(i+(a.href||""));if(r){for(var m=0;m<r.length;m++)if(s=r[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(m,1);break t}}s=n.createElement(i),st(s,i,a),n.head.appendChild(s);break;case"meta":if(r=df("meta","content",n).get(i+(a.content||""))){for(m=0;m<r.length;m++)if(s=r[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(m,1);break t}}s=n.createElement(i),st(s,i,a),n.head.appendChild(s);break;default:throw Error(o(468,i))}s[at]=e,Je(s),i=s}e.stateNode=i}else uf(n,e.type,e.stateNode);else e.stateNode=of(n,i,e.memoizedProps);else s!==i?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,i===null?uf(n,e.type,e.stateNode):of(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xc(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),jt(e),i&512&&(Ye||a===null||ea(a,a.return)),a!==null&&i&4&&xc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),jt(e),i&512&&(Ye||a===null||ea(a,a.return)),e.flags&32){n=e.stateNode;try{El(n,"")}catch(X){ye(e,e.return,X)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,xc(e,n,a!==null?a.memoizedProps:n)),i&1024&&(jc=!0);break;case 6:if(vt(t,e),jt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(X){ye(e,e.return,X)}}break;case 3:if(ws=null,n=Kt,Kt=Ns(t.containerInfo),vt(t,e),Kt=n,jt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(X){ye(e,e.return,X)}jc&&(jc=!1,dm(e));break;case 4:i=Kt,Kt=Ns(e.stateNode.containerInfo),vt(t,e),jt(e),Kt=i;break;case 12:vt(t,e),jt(e);break;case 31:vt(t,e),jt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,cs(e,i)));break;case 13:vt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ds=mt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,cs(e,i)));break;case 22:n=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,E=pa,k=Ye;if(pa=E||n,Ye=k||x,vt(t,e),Ye=k,pa=E,jt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||x||pa||Ye||bl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(s=x.stateNode,n)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{m=x.stateNode;var O=x.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(X){ye(x,x.return,X)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=n?"":x.memoizedProps}catch(X){ye(x,x.return,X)}}}else if(t.tag===18){if(a===null){x=t;try{var D=x.stateNode;n?Pm(D,!0):Pm(x.stateNode,!1)}catch(X){ye(x,x.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,cs(e,a))));break;case 19:vt(t,e),jt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,cs(e,i)));break;case 30:break;case 21:break;default:vt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(tm(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,s=yc(e);rs(e,s,n);break;case 5:var r=a.stateNode;a.flags&32&&(El(r,""),a.flags&=-33);var m=yc(e);rs(e,m,r);break;case 3:case 4:var x=a.stateNode.containerInfo,E=yc(e);vc(e,E,x);break;default:throw Error(o(161))}}catch(k){ye(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)im(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fa(4,t,t.return),bl(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Pu(t,t.return,a),bl(t);break;case 27:sn(t.stateNode);case 26:case 5:ea(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:ya(n,s,a),Wi(4,s);break;case 1:if(ya(n,s,a),i=s,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){ye(i,i.return,E)}if(i=s,n=i.updateQueue,n!==null){var m=i.stateNode;try{var x=n.shared.hiddenCallbacks;if(x!==null)for(n.shared.hiddenCallbacks=null,n=0;n<x.length;n++)Ld(x[n],m)}catch(E){ye(i,i.return,E)}}a&&r&64&&Iu(s),Ji(s,s.return);break;case 27:am(s);case 26:case 5:ya(n,s,a),a&&i===null&&r&4&&em(s),Ji(s,s.return);break;case 12:ya(n,s,a);break;case 31:ya(n,s,a),a&&r&4&&rm(n,s);break;case 13:ya(n,s,a),a&&r&4&&cm(n,s);break;case 22:s.memoizedState===null&&ya(n,s,a),Ji(s,s.return);break;case 30:break;default:ya(n,s,a)}t=t.sibling}}function Nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bi(a))}function Sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e))}function Wt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)um(e,t,a,i),t=t.sibling}function um(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,i),n&2048&&Wi(9,t);break;case 1:Wt(e,t,a,i);break;case 3:Wt(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e)));break;case 12:if(n&2048){Wt(e,t,a,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,m=s.onPostCommit;typeof m=="function"&&m(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){ye(t,t.return,x)}}else Wt(e,t,a,i);break;case 31:Wt(e,t,a,i);break;case 13:Wt(e,t,a,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,a,i):$i(e,t):s._visibility&2?Wt(e,t,a,i):(s._visibility|=2,Kl(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Nc(r,t);break;case 24:Wt(e,t,a,i),n&2048&&Sc(t.alternate,t);break;default:Wt(e,t,a,i)}}function Kl(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,m=a,x=i,E=r.flags;switch(r.tag){case 0:case 11:case 15:Kl(s,r,m,x,n),Wi(8,r);break;case 23:break;case 22:var k=r.stateNode;r.memoizedState!==null?k._visibility&2?Kl(s,r,m,x,n):$i(s,r):(k._visibility|=2,Kl(s,r,m,x,n)),n&&E&2048&&Nc(r.alternate,r);break;case 24:Kl(s,r,m,x,n),n&&E&2048&&Sc(r.alternate,r);break;default:Kl(s,r,m,x,n)}t=t.sibling}}function $i(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:$i(a,i),n&2048&&Nc(i.alternate,i);break;case 24:$i(a,i),n&2048&&Sc(i.alternate,i);break;default:$i(a,i)}t=t.sibling}}var Ii=8192;function Wl(e,t,a){if(e.subtreeFlags&Ii)for(e=e.child;e!==null;)mm(e,t,a),e=e.sibling}function mm(e,t,a){switch(e.tag){case 26:Wl(e,t,a),e.flags&Ii&&e.memoizedState!==null&&v0(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:Wl(e,t,a);break;case 3:case 4:var i=Kt;Kt=Ns(e.stateNode.containerInfo),Wl(e,t,a),Kt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ii,Ii=16777216,Wl(e,t,a),Ii=i):Wl(e,t,a));break;default:Wl(e,t,a)}}function fm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,gm(i,e)}fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hm(e),e=e.sibling}function hm(e){switch(e.tag){case 0:case 11:case 15:Pi(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Pi(e);break;case 12:Pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,os(e)):Pi(e);break;default:Pi(e)}}function os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,gm(i,e)}fm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fa(8,t,t.return),os(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,os(t));break;default:os(t)}e=e.sibling}}function gm(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Bi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,$e=i;else e:for(a=e;$e!==null;){i=$e;var n=i.sibling,s=i.return;if(nm(i),i===a){$e=null;break e}if(n!==null){n.return=s,$e=n;break e}$e=s}}}var Ug={getCacheForType:function(e){var t=it(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(qe).controller.signal}},Bg=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ce=null,se=null,oe=0,xe=0,At=null,qa=!1,Jl=!1,wc=!1,va=0,Ue=0,La=0,xl=0,Cc=0,Dt=0,$l=0,en=null,Nt=null,Tc=!1,ds=0,pm=0,us=1/0,ms=null,Ha=null,Ze=0,Ya=null,Il=null,ja=0,zc=0,Ec=null,bm=null,tn=0,Ac=null;function kt(){return(ge&2)!==0&&oe!==0?oe&-oe:_.T!==null?Uc():Ro()}function xm(){if(Dt===0)if((oe&536870912)===0||ue){var e=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Dt=e}else Dt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Dt}function St(e,t,a){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),Qa(e,oe,Dt,!1)),Ni(e,a),((ge&2)===0||e!==Ce)&&(e===Ce&&((ge&2)===0&&(xl|=a),Ue===4&&Qa(e,oe,Dt,!1)),ta(e))}function ym(e,t,a){if((ge&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||za(e,t),n=i?Fg(e,t):kc(e,t,!0),s=i;do{if(n===0){Jl&&!i&&Qa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!_g(a)){n=kc(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var m=e;n=en;var x=m.current.memoizedState.isDehydrated;if(x&&(Pl(m,r).flags|=256),r=kc(m,r,!1),r!==2){if(wc&&!x){m.errorRecoveryDisabledLanes|=s,xl|=s,n=4;break e}s=Nt,Nt=n,s!==null&&(Nt===null?Nt=s:Nt.push.apply(Nt,s))}n=r}if(s=!1,n!==2)continue}}if(n===1){Pl(e,0),Qa(e,t,0,!0);break}e:{switch(i=e,s=n,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Qa(i,t,Dt,!qa);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=ds+300-mt(),10<n)){if(Qa(i,t,Dt,!qa),tl(i,0,!0)!==0)break e;ja=t,i.timeoutHandle=Jm(vm.bind(null,i,a,Nt,ms,Tc,t,Dt,xl,$l,qa,s,"Throttled",-0,0),n);break e}vm(i,a,Nt,ms,Tc,t,Dt,xl,$l,qa,s,null,-0,0)}}break}while(!0);ta(e)}function vm(e,t,a,i,n,s,r,m,x,E,k,O,A,D){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},mm(t,s,O);var X=(s&62914560)===s?ds-mt():(s&4194048)===s?pm-mt():0;if(X=j0(O,X),X!==null){ja=s,e.cancelPendingCommit=X(Em.bind(null,e,t,s,a,i,n,r,m,x,k,O,null,A,D)),Qa(e,s,r,!E);return}}Em(e,t,s,a,i,n,r,m,x)}function _g(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],s=n.getSnapshot;n=n.value;try{if(!Ct(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qa(e,t,a,i){t&=~Cc,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var s=31-P(n),r=1<<s;i[s]=-1,n&=~r}a!==0&&Do(e,a,t)}function fs(){return(ge&6)===0?(an(0),!1):!0}function Dc(){if(se!==null){if(xe===0)var e=se.return;else e=se,da=ol=null,Vr(e),Yl=null,Gi=0,e=se;for(;e!==null;)$u(e.alternate,e),e=e.return;se=null}}function Pl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,l0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,Dc(),Ce=e,se=a=ca(e.current,null),oe=t,xe=0,At=null,qa=!1,Jl=za(e,t),wc=!1,$l=Dt=Cc=xl=La=Ue=0,Nt=en=null,Tc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-P(i),s=1<<n;t|=e[n],i&=~s}return va=t,On(),a}function jm(e,t){te=null,_.H=Vi,t===Hl||t===Hn?(t=_d(),xe=3):t===Or?(t=_d(),xe=4):xe=t===cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,se===null&&(Ue=1,as(e,_t(t,e.current)))}function Nm(){var e=zt.current;return e===null?!0:(oe&4194048)===oe?Lt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Lt:!1}function Sm(){var e=_.H;return _.H=Vi,e===null?Vi:e}function wm(){var e=_.A;return _.A=Ug,e}function hs(){Ue=4,qa||(oe&4194048)!==oe&&zt.current!==null||(Jl=!0),(La&134217727)===0&&(xl&134217727)===0||Ce===null||Qa(Ce,oe,Dt,!1)}function kc(e,t,a){var i=ge;ge|=2;var n=Sm(),s=wm();(Ce!==e||oe!==t)&&(ms=null,Pl(e,t)),t=!1;var r=Ue;e:do try{if(xe!==0&&se!==null){var m=se,x=At;switch(xe){case 8:Dc(),r=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var E=xe;if(xe=0,At=null,ei(e,m,x,E),a&&Jl){r=0;break e}break;default:E=xe,xe=0,At=null,ei(e,m,x,E)}}Gg(),r=Ue;break}catch(k){jm(e,k)}while(!0);return t&&e.shellSuspendCounter++,da=ol=null,ge=i,_.H=n,_.A=s,se===null&&(Ce=null,oe=0,On()),r}function Gg(){for(;se!==null;)Cm(se)}function Fg(e,t){var a=ge;ge|=2;var i=Sm(),n=wm();Ce!==e||oe!==t?(ms=null,us=mt()+500,Pl(e,t)):Jl=za(e,t);e:do try{if(xe!==0&&se!==null){t=se;var s=At;t:switch(xe){case 1:xe=0,At=null,ei(e,t,s,1);break;case 2:case 9:if(Ud(s)){xe=0,At=null,Tm(t);break}t=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),ta(e)},s.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Ud(s)?(xe=0,At=null,Tm(t)):(xe=0,At=null,ei(e,t,s,7));break;case 5:var r=null;switch(se.tag){case 26:r=se.memoizedState;case 5:case 27:var m=se;if(r?mf(r):m.stateNode.complete){xe=0,At=null;var x=m.sibling;if(x!==null)se=x;else{var E=m.return;E!==null?(se=E,gs(E)):se=null}break t}}xe=0,At=null,ei(e,t,s,5);break;case 6:xe=0,At=null,ei(e,t,s,6);break;case 8:Dc(),Ue=6;break e;default:throw Error(o(462))}}qg();break}catch(k){jm(e,k)}while(!0);return da=ol=null,_.H=i,_.A=n,ge=a,se!==null?0:(Ce=null,oe=0,On(),Ue)}function qg(){for(;se!==null&&!Zs();)Cm(se)}function Cm(e){var t=Wu(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?gs(e):se=t}function Tm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yu(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Yu(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Vr(t);default:$u(a,t),t=se=wd(t,va),t=Wu(a,t,va)}e.memoizedProps=e.pendingProps,t===null?gs(e):se=t}function ei(e,t,a,i){da=ol=null,Vr(t),Yl=null,Gi=0;var n=t.return;try{if(Eg(e,n,t,a,oe)){Ue=1,as(e,_t(a,e.current)),se=null;return}}catch(s){if(n!==null)throw se=n,s;Ue=1,as(e,_t(a,e.current)),se=null;return}t.flags&32768?(ue||i===1?e=!0:Jl||(oe&536870912)!==0?e=!1:(qa=e=!0,(i===2||i===9||i===3||i===6)&&(i=zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),zm(t,e)):gs(t)}function gs(e){var t=e;do{if((t.flags&32768)!==0){zm(t,qa);return}e=t.return;var a=kg(t.alternate,t,va);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ue===0&&(Ue=5)}function zm(e,t){do{var a=Mg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Ue=6,se=null}function Em(e,t,a,i,n,s,r,m,x){e.cancelPendingCommit=null;do ps();while(Ze!==0);if((ge&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=yr,yh(e,a,s,r,m,x),e===Ce&&(se=Ce=null,oe=0),Il=t,Ya=e,ja=a,zc=s,Ec=n,bm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qg(vl,function(){return Rm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,n=Y.p,Y.p=2,r=ge,ge|=4;try{Rg(e,t,a)}finally{ge=r,Y.p=n,_.T=i}}Ze=1,Am(),Dm(),km()}}function Am(){if(Ze===1){Ze=0;var e=Ya,t=Il,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var i=Y.p;Y.p=2;var n=ge;ge|=4;try{om(t,e);var s=Yc,r=gd(e.containerInfo),m=s.focusedElem,x=s.selectionRange;if(r!==m&&m&&m.ownerDocument&&hd(m.ownerDocument.documentElement,m)){if(x!==null&&hr(m)){var E=x.start,k=x.end;if(k===void 0&&(k=E),"selectionStart"in m)m.selectionStart=E,m.selectionEnd=Math.min(k,m.value.length);else{var O=m.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var D=A.getSelection(),X=m.textContent.length,J=Math.min(x.start,X),we=x.end===void 0?J:Math.min(x.end,X);!D.extend&&J>we&&(r=we,we=J,J=r);var C=fd(m,J),j=fd(m,we);if(C&&j&&(D.rangeCount!==1||D.anchorNode!==C.node||D.anchorOffset!==C.offset||D.focusNode!==j.node||D.focusOffset!==j.offset)){var z=O.createRange();z.setStart(C.node,C.offset),D.removeAllRanges(),J>we?(D.addRange(z),D.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),D.addRange(z))}}}}for(O=[],D=m;D=D.parentNode;)D.nodeType===1&&O.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<O.length;m++){var R=O[m];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Es=!!Hc,Yc=Hc=null}finally{ge=n,Y.p=i,_.T=a}}e.current=t,Ze=2}}function Dm(){if(Ze===2){Ze=0;var e=Ya,t=Il,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var i=Y.p;Y.p=2;var n=ge;ge|=4;try{im(e,t.alternate,t)}finally{ge=n,Y.p=i,_.T=a}}Ze=3}}function km(){if(Ze===4||Ze===3){Ze=0,vn();var e=Ya,t=Il,a=ja,i=bm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Il=Ya=null,Mm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ha=null),Ws(a),t=t.stateNode,F&&typeof F.onCommitFiberRoot=="function")try{F.onCommitFiberRoot(q,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,n=Y.p,Y.p=2,_.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var m=i[r];s(m.value,{componentStack:m.stack})}}finally{_.T=t,Y.p=n}}(ja&3)!==0&&ps(),ta(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ac?tn++:(tn=0,Ac=e):tn=0,an(0)}}function Mm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bi(t)))}function ps(){return Am(),Dm(),km(),Rm()}function Rm(){if(Ze!==5)return!1;var e=Ya,t=zc;zc=0;var a=Ws(ja),i=_.T,n=Y.p;try{Y.p=32>a?32:a,_.T=null,a=Ec,Ec=null;var s=Ya,r=ja;if(Ze=0,Il=Ya=null,ja=0,(ge&6)!==0)throw Error(o(331));var m=ge;if(ge|=4,hm(s.current),um(s,s.current,r,a),ge=m,an(0,!1),F&&typeof F.onPostCommitFiberRoot=="function")try{F.onPostCommitFiberRoot(q,s)}catch{}return!0}finally{Y.p=n,_.T=i,Mm(e,t)}}function Om(e,t,a){t=_t(a,t),t=rc(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Ni(e,2),ta(e))}function ye(e,t,a){if(e.tag===3)Om(e,e,a);else for(;t!==null;){if(t.tag===3){Om(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ha===null||!Ha.has(i))){e=_t(a,e),a=Uu(2),i=Ba(t,a,2),i!==null&&(Bu(a,i,t,e),Ni(i,2),ta(i));break}}t=t.return}}function Mc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Bg;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(wc=!0,n.add(a),e=Lg.bind(null,e,t,a),t.then(e,e))}function Lg(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(oe&a)===a&&(Ue===4||Ue===3&&(oe&62914560)===oe&&300>mt()-ds?(ge&2)===0&&Pl(e,0):Cc|=a,$l===oe&&($l=0)),ta(e)}function Um(e,t){t===0&&(t=vi()),e=sl(e,t),e!==null&&(Ni(e,t),ta(e))}function Hg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Um(e,a)}function Yg(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Um(e,a)}function Qg(e,t){return pi(e,t)}var bs=null,ti=null,Rc=!1,xs=!1,Oc=!1,Xa=0;function ta(e){e!==ti&&e.next===null&&(ti===null?bs=ti=e:ti=ti.next=e),xs=!0,Rc||(Rc=!0,Vg())}function an(e,t){if(!Oc&&xs){Oc=!0;do for(var a=!1,i=bs;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var s=0;else{var r=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-P(42|e)+1)-1,s&=n&~(r&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Fm(i,s))}else s=oe,s=tl(i,i===Ce?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||za(i,s)||(a=!0,Fm(i,s));i=i.next}while(a);Oc=!1}}function Xg(){Bm()}function Bm(){xs=Rc=!1;var e=0;Xa!==0&&a0()&&(e=Xa);for(var t=mt(),a=null,i=bs;i!==null;){var n=i.next,s=_m(i,t);s===0?(i.next=null,a===null?bs=n:a.next=n,n===null&&(ti=a)):(a=i,(e!==0||(s&3)!==0)&&(xs=!0)),i=n}Ze!==0&&Ze!==5||an(e),Xa!==0&&(Xa=0)}function _m(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-P(s),m=1<<r,x=n[r];x===-1?((m&a)===0||(m&i)!==0)&&(n[r]=yi(m,t)):x<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ce,a=oe,a=tl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yl(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||za(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&yl(i),Ws(a)){case 2:case 8:a=Nn;break;case 32:a=vl;break;case 268435456:a=jl;break;default:a=vl}return i=Gm.bind(null,e),a=pi(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&yl(i),e.callbackPriority=2,e.callbackNode=null,2}function Gm(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ps()&&e.callbackNode!==a)return null;var i=oe;return i=tl(e,e===Ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ym(e,i,t),_m(e,mt()),e.callbackNode!=null&&e.callbackNode===a?Gm.bind(null,e):null)}function Fm(e,t){if(ps())return null;ym(e,t,!0)}function Vg(){i0(function(){(ge&6)!==0?pi(jn,Xg):Bm()})}function Uc(){if(Xa===0){var e=ql;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),Xa=e}return Xa}function qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tn(""+e)}function Lm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zg(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var s=qm((n[bt]||null).action),r=i.submitter;r&&(t=(t=r[bt]||null)?qm(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var m=new Dn("action","action",null,i,n);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var x=r?Lm(n,r):new FormData(n);tc(a,{pending:!0,data:x,method:n.method,action:s},null,x)}}else typeof s=="function"&&(m.preventDefault(),x=r?Lm(n,r):new FormData(n),tc(a,{pending:!0,data:x,method:n.method,action:s},s,x))},currentTarget:n}]})}}for(var Bc=0;Bc<xr.length;Bc++){var _c=xr[Bc],Kg=_c.toLowerCase(),Wg=_c[0].toUpperCase()+_c.slice(1);Zt(Kg,"on"+Wg)}Zt(xd,"onAnimationEnd"),Zt(yd,"onAnimationIteration"),Zt(vd,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(ug,"onTransitionRun"),Zt(mg,"onTransitionStart"),Zt(fg,"onTransitionCancel"),Zt(jd,"onTransitionEnd"),Tl("onMouseEnter",["mouseout","mouseover"]),Tl("onMouseLeave",["mouseout","mouseover"]),Tl("onPointerEnter",["pointerout","pointerover"]),Tl("onPointerLeave",["pointerout","pointerover"]),al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),al("onBeforeInput",["compositionend","keypress","textInput","paste"]),al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ln));function Hm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var m=i[r],x=m.instance,E=m.currentTarget;if(m=m.listener,x!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=E;try{s(n)}catch(k){Rn(k)}n.currentTarget=null,s=x}else for(r=0;r<i.length;r++){if(m=i[r],x=m.instance,E=m.currentTarget,m=m.listener,x!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=E;try{s(n)}catch(k){Rn(k)}n.currentTarget=null,s=x}}}}function re(e,t){var a=t[Js];a===void 0&&(a=t[Js]=new Set);var i=e+"__bubble";a.has(i)||(Ym(t,e,2,!1),a.add(i))}function Gc(e,t,a){var i=0;t&&(i|=4),Ym(a,e,i,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Fc(e){if(!e[ys]){e[ys]=!0,Bo.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||Gc(a,!1,e),Gc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,Gc("selectionchange",!1,t))}}function Ym(e,t,a,i){switch(yf(t)){case 2:var n=w0;break;case 8:n=C0;break;default:n=eo}a=n.bind(null,t,a,e),n=void 0,!nr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function qc(e,t,a,i,n){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var m=i.stateNode.containerInfo;if(m===n)break;if(r===4)for(r=i.return;r!==null;){var x=r.tag;if((x===3||x===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;m!==null;){if(r=Sl(m),r===null)return;if(x=r.tag,x===5||x===6||x===26||x===27){i=s=r;continue e}m=m.parentNode}}i=i.return}Ko(function(){var E=s,k=lr(a),O=[];e:{var A=Nd.get(e);if(A!==void 0){var D=Dn,X=e;switch(e){case"keypress":if(En(a)===0)break e;case"keydown":case"keyup":D=Yh;break;case"focusin":X="focus",D=or;break;case"focusout":X="blur",D=or;break;case"beforeblur":case"afterblur":D=or;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Vh;break;case xd:case yd:case vd:D=Oh;break;case jd:D=Kh;break;case"scroll":case"scrollend":D=Ah;break;case"wheel":D=Jh;break;case"copy":case"cut":case"paste":D=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Po;break;case"toggle":case"beforetoggle":D=Ih}var J=(t&4)!==0,we=!J&&(e==="scroll"||e==="scrollend"),C=J?A!==null?A+"Capture":null:A;J=[];for(var j=E,z;j!==null;){var R=j;if(z=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||z===null||C===null||(R=Ci(j,C),R!=null&&J.push(nn(j,R,z))),we)break;j=j.return}0<J.length&&(A=new D(A,X,null,a,k),O.push({event:A,listeners:J}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",A&&a!==ar&&(X=a.relatedTarget||a.fromElement)&&(Sl(X)||X[Nl]))break e;if((D||A)&&(A=k.window===k?k:(A=k.ownerDocument)?A.defaultView||A.parentWindow:window,D?(X=a.relatedTarget||a.toElement,D=E,X=X?Sl(X):null,X!==null&&(we=b(X),J=X.tag,X!==we||J!==5&&J!==27&&J!==6)&&(X=null)):(D=null,X=E),D!==X)){if(J=$o,R="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(J=Po,R="onPointerLeave",C="onPointerEnter",j="pointer"),we=D==null?A:wi(D),z=X==null?A:wi(X),A=new J(R,j+"leave",D,a,k),A.target=we,A.relatedTarget=z,R=null,Sl(k)===E&&(J=new J(C,j+"enter",X,a,k),J.target=z,J.relatedTarget=we,R=J),we=R,D&&X)t:{for(J=$g,C=D,j=X,z=0,R=C;R;R=J(R))z++;R=0;for(var K=j;K;K=J(K))R++;for(;0<z-R;)C=J(C),z--;for(;0<R-z;)j=J(j),R--;for(;z--;){if(C===j||j!==null&&C===j.alternate){J=C;break t}C=J(C),j=J(j)}J=null}else J=null;D!==null&&Qm(O,A,D,J,!1),X!==null&&we!==null&&Qm(O,we,X,J,!0)}}e:{if(A=E?wi(E):window,D=A.nodeName&&A.nodeName.toLowerCase(),D==="select"||D==="input"&&A.type==="file")var me=rd;else if(nd(A))if(cd)me=cg;else{me=sg;var V=ng}else D=A.nodeName,!D||D.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&tr(E.elementType)&&(me=rd):me=rg;if(me&&(me=me(e,E))){sd(O,me,a,k);break e}V&&V(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&er(A,"number",A.value)}switch(V=E?wi(E):window,e){case"focusin":(nd(V)||V.contentEditable==="true")&&(Ml=V,gr=E,Ri=null);break;case"focusout":Ri=gr=Ml=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,pd(O,a,k);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":pd(O,a,k)}var ae;if(ur)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else kl?ld(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(ed&&a.locale!=="ko"&&(kl||de!=="onCompositionStart"?de==="onCompositionEnd"&&kl&&(ae=Wo()):(Aa=k,sr="value"in Aa?Aa.value:Aa.textContent,kl=!0)),V=vs(E,de),0<V.length&&(de=new Io(de,e,null,a,k),O.push({event:de,listeners:V}),ae?de.data=ae:(ae=id(a),ae!==null&&(de.data=ae)))),(ae=eg?tg(e,a):ag(e,a))&&(de=vs(E,"onBeforeInput"),0<de.length&&(V=new Io("onBeforeInput","beforeinput",null,a,k),O.push({event:V,listeners:de}),V.data=ae)),Zg(O,e,E,a,k)}Hm(O,t)})}function nn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function vs(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Ci(e,a),n!=null&&i.unshift(nn(e,n,s)),n=Ci(e,t),n!=null&&i.push(nn(e,n,s))),e.tag===3)return i;e=e.return}return[]}function $g(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qm(e,t,a,i,n){for(var s=t._reactName,r=[];a!==null&&a!==i;){var m=a,x=m.alternate,E=m.stateNode;if(m=m.tag,x!==null&&x===i)break;m!==5&&m!==26&&m!==27||E===null||(x=E,n?(E=Ci(a,s),E!=null&&r.unshift(nn(a,E,x))):n||(E=Ci(a,s),E!=null&&r.push(nn(a,E,x)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Ig=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Xm(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Pg,"")}function Vm(e,t){return t=Xm(t),Xm(e)===t}function Se(e,t,a,i,n,s){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||El(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&El(e,""+i);break;case"className":wn(e,"class",i);break;case"tabIndex":wn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,a,i);break;case"style":Vo(e,i,s);break;case"data":if(t!=="object"){wn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Tn(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Tn(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=sa);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Tn(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":re("beforetoggle",e),re("toggle",e),Sn(e,"popover",i);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Sn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zh.get(a)||a,Sn(e,a,i))}}function Lc(e,t,a,i,n,s){switch(a){case"style":Vo(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?El(e,i):(typeof i=="number"||typeof i=="bigint")&&El(e,""+i);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_o.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[bt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof i=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Sn(e,a,i)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var i=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,s,r,a,null)}}n&&Se(e,t,"srcSet",a.srcSet,a,null),i&&Se(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var m=s=r=n=null,x=null,E=null;for(i in a)if(a.hasOwnProperty(i)){var k=a[i];if(k!=null)switch(i){case"name":n=k;break;case"type":r=k;break;case"checked":x=k;break;case"defaultChecked":E=k;break;case"value":s=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Se(e,t,i,k,a,null)}}Ho(e,s,m,x,E,r,n,!1);return;case"select":re("invalid",e),i=r=s=null;for(n in a)if(a.hasOwnProperty(n)&&(m=a[n],m!=null))switch(n){case"value":s=m;break;case"defaultValue":r=m;break;case"multiple":i=m;default:Se(e,t,n,m,a,null)}t=s,a=r,e.multiple=!!i,t!=null?zl(e,!!i,t,!1):a!=null&&zl(e,!!i,a,!0);return;case"textarea":re("invalid",e),s=n=i=null;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],m!=null))switch(r){case"value":i=m;break;case"defaultValue":n=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:Se(e,t,r,m,a,null)}Qo(e,i,n,s);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(i=a[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,x,i,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(i=0;i<ln.length;i++)re(ln[i],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,E,i,a,null)}return;default:if(tr(t)){for(k in a)a.hasOwnProperty(k)&&(i=a[k],i!==void 0&&Lc(e,t,k,i,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(i=a[m],i!=null&&Se(e,t,m,i,a,null))}function e0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,r=null,m=null,x=null,E=null,k=null;for(D in a){var O=a[D];if(a.hasOwnProperty(D)&&O!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":x=O;default:i.hasOwnProperty(D)||Se(e,t,D,null,i,O)}}for(var A in i){var D=i[A];if(O=a[A],i.hasOwnProperty(A)&&(D!=null||O!=null))switch(A){case"type":s=D;break;case"name":n=D;break;case"checked":E=D;break;case"defaultChecked":k=D;break;case"value":r=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==O&&Se(e,t,A,D,i,O)}}Ps(e,r,m,x,E,k,s,n);return;case"select":D=r=m=A=null;for(s in a)if(x=a[s],a.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":D=x;default:i.hasOwnProperty(s)||Se(e,t,s,null,i,x)}for(n in i)if(s=i[n],x=a[n],i.hasOwnProperty(n)&&(s!=null||x!=null))switch(n){case"value":A=s;break;case"defaultValue":m=s;break;case"multiple":r=s;default:s!==x&&Se(e,t,n,s,i,x)}t=m,a=r,i=D,A!=null?zl(e,!!a,A,!1):!!i!=!!a&&(t!=null?zl(e,!!a,t,!0):zl(e,!!a,a?[]:"",!1));return;case"textarea":D=A=null;for(m in a)if(n=a[m],a.hasOwnProperty(m)&&n!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Se(e,t,m,null,i,n)}for(r in i)if(n=i[r],s=a[r],i.hasOwnProperty(r)&&(n!=null||s!=null))switch(r){case"value":A=n;break;case"defaultValue":D=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==s&&Se(e,t,r,n,i,s)}Yo(e,A,D);return;case"option":for(var X in a)if(A=a[X],a.hasOwnProperty(X)&&A!=null&&!i.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:Se(e,t,X,null,i,A)}for(x in i)if(A=i[x],D=a[x],i.hasOwnProperty(x)&&A!==D&&(A!=null||D!=null))switch(x){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Se(e,t,x,A,i,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)A=a[J],a.hasOwnProperty(J)&&A!=null&&!i.hasOwnProperty(J)&&Se(e,t,J,null,i,A);for(E in i)if(A=i[E],D=a[E],i.hasOwnProperty(E)&&A!==D&&(A!=null||D!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:Se(e,t,E,A,i,D)}return;default:if(tr(t)){for(var we in a)A=a[we],a.hasOwnProperty(we)&&A!==void 0&&!i.hasOwnProperty(we)&&Lc(e,t,we,void 0,i,A);for(k in i)A=i[k],D=a[k],!i.hasOwnProperty(k)||A===D||A===void 0&&D===void 0||Lc(e,t,k,A,i,D);return}}for(var C in a)A=a[C],a.hasOwnProperty(C)&&A!=null&&!i.hasOwnProperty(C)&&Se(e,t,C,null,i,A);for(O in i)A=i[O],D=a[O],!i.hasOwnProperty(O)||A===D||A==null&&D==null||Se(e,t,O,A,i,D)}function Zm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function t0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],s=n.transferSize,r=n.initiatorType,m=n.duration;if(s&&m&&Zm(r)){for(r=0,m=n.responseEnd,i+=1;i<a.length;i++){var x=a[i],E=x.startTime;if(E>m)break;var k=x.transferSize,O=x.initiatorType;k&&Zm(O)&&(x=x.responseEnd,r+=k*(x<m?1:(m-E)/(x-E)))}if(--i,t+=8*(s+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hc=null,Yc=null;function js(e){return e.nodeType===9?e:e.ownerDocument}function Km(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function a0(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Jm=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(e){return $m.resolve(null).then(e).catch(n0)}:Jm;function n0(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Im(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),ni(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")sn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,sn(a);for(var s=a.firstChild;s;){var r=s.nextSibling,m=s.nodeName;s[Si]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&sn(e.ownerDocument.body);a=n}while(a);ni(t)}function Pm(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vc(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function s0(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function r0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function ef(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function c0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wc=null;function tf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lf(e,t,a){switch(t=js(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function sn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var Yt=new Map,nf=new Set;function Ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=Y.d;Y.d={f:o0,r:d0,D:u0,C:m0,L:f0,m:h0,X:p0,S:g0,M:b0};function o0(){var e=Na.f(),t=fs();return e||t}function d0(e){var t=wl(e);t!==null&&t.tag===5&&t.type==="form"?ju(t):Na.r(e)}var ai=typeof document>"u"?null:document;function sf(e,t,a){var i=ai;if(i&&typeof t=="string"&&t){var n=Ut(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),nf.has(n)||(nf.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),st(t,"link",e),Je(t),i.head.appendChild(t)))}}function u0(e){Na.D(e),sf("dns-prefetch",e,null)}function m0(e,t){Na.C(e,t),sf("preconnect",e,t)}function f0(e,t,a){Na.L(e,t,a);var i=ai;if(i&&e&&t){var n='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ut(a.imageSizes)+'"]')):n+='[href="'+Ut(e)+'"]';var s=n;switch(t){case"style":s=li(e);break;case"script":s=ii(e)}Yt.has(s)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(s,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(rn(s))||t==="script"&&i.querySelector(cn(s))||(t=i.createElement("link"),st(t,"link",e),Je(t),i.head.appendChild(t)))}}function h0(e,t){Na.m(e,t);var a=ai;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',s=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ii(e)}if(!Yt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Yt.set(s,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cn(s)))return}i=a.createElement("link"),st(i,"link",e),Je(i),a.head.appendChild(i)}}}function g0(e,t,a){Na.S(e,t,a);var i=ai;if(i&&e){var n=Cl(i).hoistableStyles,s=li(e);t=t||"default";var r=n.get(s);if(!r){var m={loading:0,preload:null};if(r=i.querySelector(rn(s)))m.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(s))&&Jc(e,a);var x=r=i.createElement("link");Je(x),st(x,"link",e),x._p=new Promise(function(E,k){x.onload=E,x.onerror=k}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Ss(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:m},n.set(s,r)}}}function p0(e,t){Na.X(e,t);var a=ai;if(a&&e){var i=Cl(a).hoistableScripts,n=ii(e),s=i.get(n);s||(s=a.querySelector(cn(n)),s||(e=S({src:e,async:!0},t),(t=Yt.get(n))&&$c(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(n,s))}}function b0(e,t){Na.M(e,t);var a=ai;if(a&&e){var i=Cl(a).hoistableScripts,n=ii(e),s=i.get(n);s||(s=a.querySelector(cn(n)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&$c(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(n,s))}}function rf(e,t,a,i){var n=(n=ut.current)?Ns(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=li(a.href),a=Cl(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=li(a.href);var s=Cl(n).hoistableStyles,r=s.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=n.querySelector(rn(e)))&&!s._p&&(r.instance=s,r.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),s||x0(n,e,a,r.state))),t&&i===null)throw Error(o(528,""));return r}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(a),a=Cl(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function li(e){return'href="'+Ut(e)+'"'}function rn(e){return'link[rel="stylesheet"]['+e+"]"}function cf(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function x0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),st(t,"link",a),Je(t),e.head.appendChild(t))}function ii(e){return'[src="'+Ut(e)+'"]'}function cn(e){return"script[async]"+e}function of(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(a.href)+'"]');if(i)return t.instance=i,Je(i),i;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),st(i,"style",n),Ss(i,a.precedence,e),t.instance=i;case"stylesheet":n=li(a.href);var s=e.querySelector(rn(n));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=cf(a),(n=Yt.get(n))&&Jc(i,n),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(m,x){r.onload=m,r.onerror=x}),st(s,"link",i),t.state.loading|=4,Ss(s,a.precedence,e),t.instance=s;case"script":return s=ii(a.src),(n=e.querySelector(cn(s)))?(t.instance=n,Je(n),n):(i=a,(n=Yt.get(s))&&(i=S({},a),$c(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),st(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ss(i,a.precedence,e));return t.instance}function Ss(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,s=n,r=0;r<i.length;r++){var m=i[r];if(m.dataset.precedence===t)s=m;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ws=null;function df(e,t,a){if(ws===null){var i=new Map,n=ws=new Map;n.set(a,i)}else n=ws,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Si]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var m=i.get(r);m?m.push(s):i.set(r,[s])}}return i}function uf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function y0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function v0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=li(i.href),s=t.querySelector(rn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Je(s);return}s=t.ownerDocument||t,i=cf(i),(n=Yt.get(n))&&Jc(i,n),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(m,x){r.onload=m,r.onerror=x}),st(s,"link",i),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Cs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ic=0;function j0(e,t){return e.stylesheets&&e.count===0&&zs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ic===0&&(Ic=62500*t0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ic?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function Cs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ts=null;function zs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ts=new Map,t.forEach(N0,e),Ts=null,Cs.call(e))}function N0(e,t){if(!(t.state.loading&4)){var a=Ts.get(e);if(a)var i=a.get(null);else{a=new Map,Ts.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var r=n[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),i=r)}i&&a.set(null,i)}n=t.instance,r=n.getAttribute("data-precedence"),s=a.get(r)||i,s===i&&a.set(null,n),a.set(r,n),this.count++,i=Cs.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var on={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function S0(e,t,a,i,n,s,r,m,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function ff(e,t,a,i,n,s,r,m,x,E,k,O){return e=new S0(e,t,a,r,x,E,k,O,m),t=1,s===!0&&(t|=24),s=Tt(3,null,null,t),e.current=s,s.stateNode=e,t=kr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:a,cache:t},Ur(s),e}function hf(e){return e?(e=Ul,e):Ul}function gf(e,t,a,i,n,s){n=hf(n),i.context===null?i.context=n:i.pendingContext=n,i=Ua(t),i.payload={element:a},s=s===void 0?null:s,s!==null&&(i.callback=s),a=Ba(e,i,t),a!==null&&(St(a,e,t),qi(a,e,t))}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pc(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function bf(e){if(e.tag===13||e.tag===31){var t=sl(e,67108864);t!==null&&St(t,e,67108864),Pc(e,67108864)}}function xf(e){if(e.tag===13||e.tag===31){var t=kt();t=Ks(t);var a=sl(e,t);a!==null&&St(a,e,t),Pc(e,t)}}var Es=!0;function w0(e,t,a,i){var n=_.T;_.T=null;var s=Y.p;try{Y.p=2,eo(e,t,a,i)}finally{Y.p=s,_.T=n}}function C0(e,t,a,i){var n=_.T;_.T=null;var s=Y.p;try{Y.p=8,eo(e,t,a,i)}finally{Y.p=s,_.T=n}}function eo(e,t,a,i){if(Es){var n=to(i);if(n===null)qc(e,t,i,As,a),vf(e,i);else if(z0(n,e,t,a,i))i.stopPropagation();else if(vf(e,i),t&4&&-1<T0.indexOf(e)){for(;n!==null;){var s=wl(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$t(s.pendingLanes);if(r!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;r;){var x=1<<31-P(r);m.entanglements[1]|=x,r&=~x}ta(s),(ge&6)===0&&(us=mt()+500,an(0))}}break;case 31:case 13:m=sl(s,2),m!==null&&St(m,s,2),fs(),Pc(s,2)}if(s=to(i),s===null&&qc(e,t,i,As,a),s===n)break;n=s}n!==null&&i.stopPropagation()}else qc(e,t,i,null,a)}}function to(e){return e=lr(e),ao(e)}var As=null;function ao(e){if(As=null,e=Sl(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return As=e,null}function yf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bi()){case jn:return 2;case Nn:return 8;case vl:case xi:return 32;case jl:return 268435456;default:return 32}default:return 32}}var lo=!1,Za=null,Ka=null,Wa=null,dn=new Map,un=new Map,Ja=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vf(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function mn(e,t,a,i,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:s,targetContainers:[n]},t!==null&&(t=wl(t),t!==null&&bf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function z0(e,t,a,i,n){switch(t){case"focusin":return Za=mn(Za,e,t,a,i,n),!0;case"dragenter":return Ka=mn(Ka,e,t,a,i,n),!0;case"mouseover":return Wa=mn(Wa,e,t,a,i,n),!0;case"pointerover":var s=n.pointerId;return dn.set(s,mn(dn.get(s)||null,e,t,a,i,n)),!0;case"gotpointercapture":return s=n.pointerId,un.set(s,mn(un.get(s)||null,e,t,a,i,n)),!0}return!1}function jf(e){var t=Sl(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,Oo(e.priority,function(){xf(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,Oo(e.priority,function(){xf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=to(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ar=i,a.target.dispatchEvent(i),ar=null}else return t=wl(a),t!==null&&bf(t),e.blockedOn=a,!1;t.shift()}return!0}function Nf(e,t,a){Ds(e)&&a.delete(t)}function E0(){lo=!1,Za!==null&&Ds(Za)&&(Za=null),Ka!==null&&Ds(Ka)&&(Ka=null),Wa!==null&&Ds(Wa)&&(Wa=null),dn.forEach(Nf),un.forEach(Nf)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,E0)))}var Ms=null;function Sf(e){Ms!==e&&(Ms=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Ms===e&&(Ms=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(ao(i||a)===null)continue;break}var s=wl(a);s!==null&&(e.splice(t,3),t-=3,tc(s,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function ni(e){function t(x){return ks(x,e)}Za!==null&&ks(Za,e),Ka!==null&&ks(Ka,e),Wa!==null&&ks(Wa,e),dn.forEach(t),un.forEach(t);for(var a=0;a<Ja.length;a++){var i=Ja[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)jf(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],s=a[i+1],r=n[bt]||null;if(typeof s=="function")r||Sf(a);else if(r){var m=null;if(s&&s.hasAttribute("formAction")){if(n=s,r=s[bt]||null)m=r.formAction;else if(ao(n)!==null)continue}else m=r.action;typeof m=="function"?a[i+1]=m:(a.splice(i,3),i-=3),Sf(a)}}}function wf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function io(e){this._internalRoot=e}Rs.prototype.render=io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=kt();gf(a,i,e,t,null,null)},Rs.prototype.unmount=io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gf(e.current,2,null,e,null,null),fs(),t[Nl]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ro();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ja.length&&t!==0&&t<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&jf(e)}};var Cf=c.version;if(Cf!=="19.2.0")throw Error(o(527,Cf,"19.2.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var A0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{q=Os.inject(A0),F=Os}catch{}}return fn.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,i="",n=ku,s=Mu,r=Ru;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ff(e,1,!1,null,null,a,i,null,n,s,r,wf),e[Nl]=t.current,Fc(e),new io(t)},fn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var i=!1,n="",s=ku,r=Mu,m=Ru,x=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=ff(e,1,!0,t,a??null,i,n,x,s,r,m,wf),t.context=hf(null),a=t.current,i=kt(),i=Ks(i),n=Ua(i),n.callback=null,Ba(a,n,i),a=i,t.current.lanes=a,Ni(t,a),ta(t),e[Nl]=t.current,Fc(e),new Rs(t)},fn.version="19.2.0",fn}var kf;function op(){if(kf)return oo.exports;kf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(c){console.error(c)}}return d(),oo.exports=cp(),oo.exports}var dp=op();const up=O0(dp);Wf();/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(d){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(d[o]=u[o])}return d},gn.apply(this,arguments)}const Co=w.createContext(null),mp=w.createContext(null),Pa=w.createContext(null),Ys=w.createContext(null),wa=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Jf=w.createContext(null);function fp(d,c){let{relative:u}=c===void 0?{}:c;di()||ht(!1);let{basename:o,navigator:h}=w.useContext(Pa),{hash:b,pathname:f,search:T}=If(d,{relative:u}),v=f;return o!=="/"&&(v=f==="/"?o:Ls([o,f])),h.createHref({pathname:v,search:T,hash:b})}function di(){return w.useContext(Ys)!=null}function ui(){return di()||ht(!1),w.useContext(Ys).location}function $f(d){w.useContext(Pa).static||w.useLayoutEffect(d)}function pn(){let{isDataRoute:d}=w.useContext(wa);return d?zp():hp()}function hp(){di()||ht(!1);let d=w.useContext(Co),{basename:c,future:u,navigator:o}=w.useContext(Pa),{matches:h}=w.useContext(wa),{pathname:b}=ui(),f=JSON.stringify(No(h,u.v7_relativeSplatPath)),T=w.useRef(!1);return $f(()=>{T.current=!0}),w.useCallback(function(y,N){if(N===void 0&&(N={}),!T.current)return;if(typeof y=="number"){o.go(y);return}let S=jo(y,JSON.parse(f),b,N.relative==="path");d==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:Ls([c,S.pathname])),(N.replace?o.replace:o.push)(S,N.state,N)},[c,o,f,b,d])}function gp(){let{matches:d}=w.useContext(wa),c=d[d.length-1];return c?c.params:{}}function If(d,c){let{relative:u}=c===void 0?{}:c,{future:o}=w.useContext(Pa),{matches:h}=w.useContext(wa),{pathname:b}=ui(),f=JSON.stringify(No(h,o.v7_relativeSplatPath));return w.useMemo(()=>jo(d,JSON.parse(f),b,u==="path"),[d,f,b,u])}function pp(d,c){return bp(d,c)}function bp(d,c,u,o){di()||ht(!1);let{navigator:h}=w.useContext(Pa),{matches:b}=w.useContext(wa),f=b[b.length-1],T=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let y=ui(),N;if(c){var S;let H=typeof c=="string"?Zf(c):c;v==="/"||(S=H.pathname)!=null&&S.startsWith(v)||ht(!1),N=H}else N=y;let M=N.pathname||"/",L=M;if(v!=="/"){let H=v.replace(/^\//,"").split("/");L="/"+M.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=U0(d,{pathname:L}),U=Np(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},T,H.params),pathname:Ls([v,h.encodeLocation?h.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?v:Ls([v,h.encodeLocation?h.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),b,u,o);return c&&U?w.createElement(Ys.Provider,{value:{location:gn({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:Vf.Pop}},U):U}function xp(){let d=Tp(),c=B0(d)?d.status+" "+d.statusText:d instanceof Error?d.message:JSON.stringify(d),u=d instanceof Error?d.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},c),u?w.createElement("pre",{style:h},u):null,null)}const yp=w.createElement(xp,null);class vp extends w.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,u){return u.location!==c.location||u.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:u.error,location:u.location,revalidation:c.revalidation||u.revalidation}}componentDidCatch(c,u){console.error("React Router caught the following error during render",c,u)}render(){return this.state.error!==void 0?w.createElement(wa.Provider,{value:this.props.routeContext},w.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jp(d){let{routeContext:c,match:u,children:o}=d,h=w.useContext(Co);return h&&h.static&&h.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=u.route.id),w.createElement(wa.Provider,{value:c},o)}function Np(d,c,u,o){var h;if(c===void 0&&(c=[]),u===void 0&&(u=null),o===void 0&&(o=null),d==null){var b;if(!u)return null;if(u.errors)d=u.matches;else if((b=o)!=null&&b.v7_partialHydration&&c.length===0&&!u.initialized&&u.matches.length>0)d=u.matches;else return null}let f=d,T=(h=u)==null?void 0:h.errors;if(T!=null){let N=f.findIndex(S=>S.route.id&&T?.[S.route.id]!==void 0);N>=0||ht(!1),f=f.slice(0,Math.min(f.length,N+1))}let v=!1,y=-1;if(u&&o&&o.v7_partialHydration)for(let N=0;N<f.length;N++){let S=f[N];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=N),S.route.id){let{loaderData:M,errors:L}=u,G=S.route.loader&&M[S.route.id]===void 0&&(!L||L[S.route.id]===void 0);if(S.route.lazy||G){v=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((N,S,M)=>{let L,G=!1,U=null,H=null;u&&(L=T&&S.route.id?T[S.route.id]:void 0,U=S.route.errorElement||yp,v&&(y<0&&M===0?(Ep("route-fallback"),G=!0,H=null):y===M&&(G=!0,H=S.route.hydrateFallbackElement||null)));let W=c.concat(f.slice(0,M+1)),ee=()=>{let Q;return L?Q=U:G?Q=H:S.route.Component?Q=w.createElement(S.route.Component,null):S.route.element?Q=S.route.element:Q=N,w.createElement(jp,{match:S,routeContext:{outlet:N,matches:W,isDataRoute:u!=null},children:Q})};return u&&(S.route.ErrorBoundary||S.route.errorElement||M===0)?w.createElement(vp,{location:u.location,revalidation:u.revalidation,component:U,error:L,children:ee(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):ee()},null)}var Pf=(function(d){return d.UseBlocker="useBlocker",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d})(Pf||{}),eh=(function(d){return d.UseBlocker="useBlocker",d.UseLoaderData="useLoaderData",d.UseActionData="useActionData",d.UseRouteError="useRouteError",d.UseNavigation="useNavigation",d.UseRouteLoaderData="useRouteLoaderData",d.UseMatches="useMatches",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d.UseRouteId="useRouteId",d})(eh||{});function Sp(d){let c=w.useContext(Co);return c||ht(!1),c}function wp(d){let c=w.useContext(mp);return c||ht(!1),c}function Cp(d){let c=w.useContext(wa);return c||ht(!1),c}function th(d){let c=Cp(),u=c.matches[c.matches.length-1];return u.route.id||ht(!1),u.route.id}function Tp(){var d;let c=w.useContext(Jf),u=wp(),o=th();return c!==void 0?c:(d=u.errors)==null?void 0:d[o]}function zp(){let{router:d}=Sp(Pf.UseNavigateStable),c=th(eh.UseNavigateStable),u=w.useRef(!1);return $f(()=>{u.current=!0}),w.useCallback(function(h,b){b===void 0&&(b={}),u.current&&(typeof h=="number"?d.navigate(h):d.navigate(h,gn({fromRouteId:c},b)))},[d,c])}const Mf={};function Ep(d,c,u){Mf[d]||(Mf[d]=!0)}function Ap(d,c){d?.v7_startTransition,d?.v7_relativeSplatPath}function ah(d){let{to:c,replace:u,state:o,relative:h}=d;di()||ht(!1);let{future:b,static:f}=w.useContext(Pa),{matches:T}=w.useContext(wa),{pathname:v}=ui(),y=pn(),N=jo(c,No(T,b.v7_relativeSplatPath),v,h==="path"),S=JSON.stringify(N);return w.useEffect(()=>y(JSON.parse(S),{replace:u,state:o,relative:h}),[y,S,h,u,o]),null}function Qt(d){ht(!1)}function Dp(d){let{basename:c="/",children:u=null,location:o,navigationType:h=Vf.Pop,navigator:b,static:f=!1,future:T}=d;di()&&ht(!1);let v=c.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:v,navigator:b,static:f,future:gn({v7_relativeSplatPath:!1},T)}),[v,T,b,f]);typeof o=="string"&&(o=Zf(o));let{pathname:N="/",search:S="",hash:M="",state:L=null,key:G="default"}=o,U=w.useMemo(()=>{let H=Kf(N,v);return H==null?null:{location:{pathname:H,search:S,hash:M,state:L,key:G},navigationType:h}},[v,N,S,M,L,G,h]);return U==null?null:w.createElement(Pa.Provider,{value:y},w.createElement(Ys.Provider,{children:u,value:U}))}function kp(d){let{children:c,location:u}=d;return pp(bo(c),u)}new Promise(()=>{});function bo(d,c){c===void 0&&(c=[]);let u=[];return w.Children.forEach(d,(o,h)=>{if(!w.isValidElement(o))return;let b=[...c,h];if(o.type===w.Fragment){u.push.apply(u,bo(o.props.children,b));return}o.type!==Qt&&ht(!1),!o.props.index||!o.props.children||ht(!1);let f={id:o.props.id||b.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=bo(o.props.children,b)),u.push(f)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(d){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(d[o]=u[o])}return d},xo.apply(this,arguments)}function Mp(d,c){if(d==null)return{};var u={},o=Object.keys(d),h,b;for(b=0;b<o.length;b++)h=o[b],!(c.indexOf(h)>=0)&&(u[h]=d[h]);return u}function Rp(d){return!!(d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)}function Op(d,c){return d.button===0&&(!c||c==="_self")&&!Rp(d)}const Up=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bp="6";try{window.__reactRouterVersion=Bp}catch{}const _p="startTransition",Rf=G0[_p];function Gp(d){let{basename:c,children:u,future:o,window:h}=d,b=w.useRef();b.current==null&&(b.current=_0({window:h,v5Compat:!0}));let f=b.current,[T,v]=w.useState({action:f.action,location:f.location}),{v7_startTransition:y}=o||{},N=w.useCallback(S=>{y&&Rf?Rf(()=>v(S)):v(S)},[v,y]);return w.useLayoutEffect(()=>f.listen(N),[f,N]),w.useEffect(()=>Ap(o),[o]),w.createElement(Dp,{basename:c,children:u,location:T.location,navigationType:T.action,navigator:f,future:o})}const Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=w.forwardRef(function(c,u){let{onClick:o,relative:h,reloadDocument:b,replace:f,state:T,target:v,to:y,preventScrollReset:N,viewTransition:S}=c,M=Mp(c,Up),{basename:L}=w.useContext(Pa),G,U=!1;if(typeof y=="string"&&qp.test(y)&&(G=y,Fp))try{let Q=new URL(window.location.href),Z=y.startsWith("//")?new URL(Q.protocol+y):new URL(y),le=Kf(Z.pathname,L);Z.origin===Q.origin&&le!=null?y=le+Z.search+Z.hash:U=!0}catch{}let H=fp(y,{relative:h}),W=Lp(y,{replace:f,state:T,target:v,preventScrollReset:N,relative:h,viewTransition:S});function ee(Q){o&&o(Q),Q.defaultPrevented||W(Q)}return w.createElement("a",xo({},M,{href:G||H,onClick:U||b?o:ee,ref:u,target:v}))});var Of;(function(d){d.UseScrollRestoration="useScrollRestoration",d.UseSubmit="useSubmit",d.UseSubmitFetcher="useSubmitFetcher",d.UseFetcher="useFetcher",d.useViewTransitionState="useViewTransitionState"})(Of||(Of={}));var Uf;(function(d){d.UseFetcher="useFetcher",d.UseFetchers="useFetchers",d.UseScrollRestoration="useScrollRestoration"})(Uf||(Uf={}));function Lp(d,c){let{target:u,replace:o,state:h,preventScrollReset:b,relative:f,viewTransition:T}=c===void 0?{}:c,v=pn(),y=ui(),N=If(d,{relative:f});return w.useCallback(S=>{if(Op(S,u)){S.preventDefault();let M=o!==void 0?o:Tf(y)===Tf(N);v(d,{replace:M,state:h,preventScrollReset:b,relative:f,viewTransition:T})}},[y,v,N,o,h,u,d,b,f,T])}const Hp={apiKey:"AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",authDomain:"venkateshaluminiumcalc.firebaseapp.com",projectId:"venkateshaluminiumcalc",storageBucket:"venkateshaluminiumcalc.firebasestorage.app",messagingSenderId:"383864958193",appId:"1:383864958193:web:9ea57f9d944cd537f20d50",measurementId:"G-LLHR3CH0WE"};console.log("🔥 Firebase initializing...");const Qs=F0(Hp);console.log("🔥 Firebase app initialized successfully");const si=q0(Qs),ct=L0(Qs);H0(Qs);console.log("✅ Firebase services ready");typeof window<"u"&&Y0().then(d=>{d&&(Q0(Qs),console.log("📊 Firebase Analytics initialized"))}).catch(d=>{console.log("Analytics not supported:",d)});console.log("✅ Firebase services initialized successfully");const lh=w.createContext(void 0);function Yp({children:d}){const[c,u]=w.useState(null),[o,h]=w.useState(null),[b,f]=w.useState(!0);w.useEffect(()=>{let G;try{G=X0(si,async H=>{if(u(H),H)try{const W=await So(Xt(ct,"users",H.uid));if(W.exists())h(W.data());else{const ee={uid:H.uid,email:H.email,displayName:H.displayName||void 0,photoURL:H.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()};await go(Xt(ct,"users",H.uid),ee),h(ee)}}catch(W){console.warn("Firestore not configured properly:",W),h({uid:H.uid,email:H.email,displayName:H.displayName||void 0,photoURL:H.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()})}else h(null);f(!1)})}catch(H){console.warn("Firebase Auth not configured properly:",H),f(!1)}const U=setTimeout(()=>{console.warn("Auth initialization timeout - setting loading to false"),f(!1)},5e3);return()=>{G&&G(),clearTimeout(U)}},[]);const L={user:c,userProfile:o,loading:b,signIn:async(G,U)=>{try{await I0(si,G,U),console.log("✅ User signed in successfully")}catch(H){throw console.error("❌ Sign in failed:",H.code),H}},signUp:async(G,U,H)=>{try{const{user:W}=await J0(si,G,U);H&&W&&await $0(W,{displayName:H})}catch(W){throw console.error("Sign up error:",W),W}},signInWithGoogle:async()=>{try{const G=new K0;await W0(si,G)}catch(G){throw console.error("Google sign in error:",G),G}},logout:async()=>{try{await Z0(si)}catch(G){throw console.error("Sign out error:",G),G}},resetPassword:async G=>{try{await V0(si,G),console.log("✅ Password reset email sent")}catch(U){throw console.error("Password reset error:",U),U}},updateUserProfile:async G=>{if(!c||!o)throw new Error("No user logged in");const U={...o,...G,updatedAt:Date.now()};await go(Xt(ct,"users",c.uid),U),h(U)}};return l.jsx(lh.Provider,{value:L,children:d})}function gt(){const d=w.useContext(lh);if(d===void 0)throw new Error("useAuth must be used within an AuthProvider");return d}const Qp=w.createContext(void 0),Xp=({children:d})=>{const[c,u]=w.useState(()=>{const h=localStorage.getItem("estimatix-theme");return h==="light"||h==="dark"?h:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",c),localStorage.setItem("estimatix-theme",c)},[c]),w.useEffect(()=>{const h=window.matchMedia("(prefers-color-scheme: dark)"),b=f=>{localStorage.getItem("estimatix-theme")||u(f.matches?"dark":"light")};return h.addEventListener("change",b),()=>h.removeEventListener("change",b)},[]);const o=()=>{u(h=>h==="light"?"dark":"light")};return l.jsx(Qp.Provider,{value:{theme:c,toggleTheme:o,isDark:c==="dark"},children:d})};var Vp=d=>typeof d=="function",Hs=(d,c)=>Vp(d)?d(c):d,Zp=(()=>{let d=0;return()=>(++d).toString()})(),ih=(()=>{let d;return()=>{if(d===void 0&&typeof window<"u"){let c=matchMedia("(prefers-reduced-motion: reduce)");d=!c||c.matches}return d}})(),Kp=20,To="default",nh=(d,c)=>{let{toastLimit:u}=d.settings;switch(c.type){case 0:return{...d,toasts:[c.toast,...d.toasts].slice(0,u)};case 1:return{...d,toasts:d.toasts.map(f=>f.id===c.toast.id?{...f,...c.toast}:f)};case 2:let{toast:o}=c;return nh(d,{type:d.toasts.find(f=>f.id===o.id)?1:0,toast:o});case 3:let{toastId:h}=c;return{...d,toasts:d.toasts.map(f=>f.id===h||h===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return c.toastId===void 0?{...d,toasts:[]}:{...d,toasts:d.toasts.filter(f=>f.id!==c.toastId)};case 5:return{...d,pausedAt:c.time};case 6:let b=c.time-(d.pausedAt||0);return{...d,pausedAt:void 0,toasts:d.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+b}))}}},Fs=[],sh={toasts:[],pausedAt:void 0,settings:{toastLimit:Kp}},aa={},rh=(d,c=To)=>{aa[c]=nh(aa[c]||sh,d),Fs.forEach(([u,o])=>{u===c&&o(aa[c])})},ch=d=>Object.keys(aa).forEach(c=>rh(d,c)),Wp=d=>Object.keys(aa).find(c=>aa[c].toasts.some(u=>u.id===d)),Xs=(d=To)=>c=>{rh(c,d)},Jp={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$p=(d={},c=To)=>{let[u,o]=w.useState(aa[c]||sh),h=w.useRef(aa[c]);w.useEffect(()=>(h.current!==aa[c]&&o(aa[c]),Fs.push([c,o]),()=>{let f=Fs.findIndex(([T])=>T===c);f>-1&&Fs.splice(f,1)}),[c]);let b=u.toasts.map(f=>{var T,v,y;return{...d,...d[f.type],...f,removeDelay:f.removeDelay||((T=d[f.type])==null?void 0:T.removeDelay)||d?.removeDelay,duration:f.duration||((v=d[f.type])==null?void 0:v.duration)||d?.duration||Jp[f.type],style:{...d.style,...(y=d[f.type])==null?void 0:y.style,...f.style}}});return{...u,toasts:b}},Ip=(d,c="blank",u)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:c,ariaProps:{role:"status","aria-live":"polite"},message:d,pauseDuration:0,...u,id:u?.id||Zp()}),bn=d=>(c,u)=>{let o=Ip(c,d,u);return Xs(o.toasterId||Wp(o.id))({type:2,toast:o}),o.id},Ke=(d,c)=>bn("blank")(d,c);Ke.error=bn("error");Ke.success=bn("success");Ke.loading=bn("loading");Ke.custom=bn("custom");Ke.dismiss=(d,c)=>{let u={type:3,toastId:d};c?Xs(c)(u):ch(u)};Ke.dismissAll=d=>Ke.dismiss(void 0,d);Ke.remove=(d,c)=>{let u={type:4,toastId:d};c?Xs(c)(u):ch(u)};Ke.removeAll=d=>Ke.remove(void 0,d);Ke.promise=(d,c,u)=>{let o=Ke.loading(c.loading,{...u,...u?.loading});return typeof d=="function"&&(d=d()),d.then(h=>{let b=c.success?Hs(c.success,h):void 0;return b?Ke.success(b,{id:o,...u,...u?.success}):Ke.dismiss(o),h}).catch(h=>{let b=c.error?Hs(c.error,h):void 0;b?Ke.error(b,{id:o,...u,...u?.error}):Ke.dismiss(o)}),d};var Pp=1e3,eb=(d,c="default")=>{let{toasts:u,pausedAt:o}=$p(d,c),h=w.useRef(new Map).current,b=w.useCallback((S,M=Pp)=>{if(h.has(S))return;let L=setTimeout(()=>{h.delete(S),f({type:4,toastId:S})},M);h.set(S,L)},[]);w.useEffect(()=>{if(o)return;let S=Date.now(),M=u.map(L=>{if(L.duration===1/0)return;let G=(L.duration||0)+L.pauseDuration-(S-L.createdAt);if(G<0){L.visible&&Ke.dismiss(L.id);return}return setTimeout(()=>Ke.dismiss(L.id,c),G)});return()=>{M.forEach(L=>L&&clearTimeout(L))}},[u,o,c]);let f=w.useCallback(Xs(c),[c]),T=w.useCallback(()=>{f({type:5,time:Date.now()})},[f]),v=w.useCallback((S,M)=>{f({type:1,toast:{id:S,height:M}})},[f]),y=w.useCallback(()=>{o&&f({type:6,time:Date.now()})},[o,f]),N=w.useCallback((S,M)=>{let{reverseOrder:L=!1,gutter:G=8,defaultPosition:U}=M||{},H=u.filter(Q=>(Q.position||U)===(S.position||U)&&Q.height),W=H.findIndex(Q=>Q.id===S.id),ee=H.filter((Q,Z)=>Z<W&&Q.visible).length;return H.filter(Q=>Q.visible).slice(...L?[ee+1]:[0,ee]).reduce((Q,Z)=>Q+(Z.height||0)+G,0)},[u]);return w.useEffect(()=>{u.forEach(S=>{if(S.dismissed)b(S.id,S.removeDelay);else{let M=h.get(S.id);M&&(clearTimeout(M),h.delete(S.id))}})},[u,b]),{toasts:u,handlers:{updateHeight:v,startPause:T,endPause:y,calculateOffset:N}}},tb=Sa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ab=Sa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lb=Sa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ib=Ia("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${d=>d.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ab} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${d=>d.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${lb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,nb=Sa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,sb=Ia("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${d=>d.secondary||"#e0e0e0"};
  border-right-color: ${d=>d.primary||"#616161"};
  animation: ${nb} 1s linear infinite;
`,rb=Sa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,cb=Sa`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ob=Ia("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${d=>d.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${cb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${d=>d.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,db=Ia("div")`
  position: absolute;
`,ub=Ia("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,mb=Sa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fb=Ia("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${mb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,hb=({toast:d})=>{let{icon:c,type:u,iconTheme:o}=d;return c!==void 0?typeof c=="string"?w.createElement(fb,null,c):c:u==="blank"?null:w.createElement(ub,null,w.createElement(sb,{...o}),u!=="loading"&&w.createElement(db,null,u==="error"?w.createElement(ib,{...o}):w.createElement(ob,{...o})))},gb=d=>`
0% {transform: translate3d(0,${d*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pb=d=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${d*-150}%,-1px) scale(.6); opacity:0;}
`,bb="0%{opacity:0;} 100%{opacity:1;}",xb="0%{opacity:1;} 100%{opacity:0;}",yb=Ia("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,vb=Ia("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,jb=(d,c)=>{let u=d.includes("top")?1:-1,[o,h]=ih()?[bb,xb]:[gb(u),pb(u)];return{animation:c?`${Sa(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Sa(h)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Nb=w.memo(({toast:d,position:c,style:u,children:o})=>{let h=d.height?jb(d.position||c||"top-center",d.visible):{opacity:0},b=w.createElement(hb,{toast:d}),f=w.createElement(vb,{...d.ariaProps},Hs(d.message,d));return w.createElement(yb,{className:d.className,style:{...h,...u,...d.style}},typeof o=="function"?o({icon:b,message:f}):w.createElement(w.Fragment,null,b,f))});ep(w.createElement);var Sb=({id:d,className:c,style:u,onHeightUpdate:o,children:h})=>{let b=w.useCallback(f=>{if(f){let T=()=>{let v=f.getBoundingClientRect().height;o(d,v)};T(),new MutationObserver(T).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[d,o]);return w.createElement("div",{ref:b,className:c,style:u},h)},wb=(d,c)=>{let u=d.includes("top"),o=u?{top:0}:{bottom:0},h=d.includes("center")?{justifyContent:"center"}:d.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ih()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(u?1:-1)}px)`,...o,...h}},Cb=P0`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,_s=16,zo=({reverseOrder:d,position:c="top-center",toastOptions:u,gutter:o,children:h,toasterId:b,containerStyle:f,containerClassName:T})=>{let{toasts:v,handlers:y}=eb(u,b);return w.createElement("div",{"data-rht-toaster":b||"",style:{position:"fixed",zIndex:9999,top:_s,left:_s,right:_s,bottom:_s,pointerEvents:"none",...f},className:T,onMouseEnter:y.startPause,onMouseLeave:y.endPause},v.map(N=>{let S=N.position||c,M=y.calculateOffset(N,{reverseOrder:d,gutter:o,defaultPosition:c}),L=wb(S,M);return w.createElement(Sb,{id:N.id,key:N.id,onHeightUpdate:y.updateHeight,className:N.visible?Cb:"",style:L},N.type==="custom"?Hs(N.message,N):h?h(N):w.createElement(Nb,{toast:N,position:S}))}))},Me=Ke;const oh=()=>l.jsxs("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[l.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),l.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),l.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),l.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),Eo=()=>l.jsx("style",{children:`
    /* Animated Radial Gradient Background */
    .premium-page-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 20%, #7C3AED, #4C1D95 50%, #2D1B69);
      z-index: -3;
      animation: backgroundPulse 20s ease-in-out infinite;
    }

    @keyframes backgroundPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.95; }
    }

    /* Floating Gradient Blobs */
    .premium-gradient-blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(60px);
      animation: blobFloat 15s ease-in-out infinite;
      z-index: -2;
    }

    .premium-gradient-blob-1 {
      width: 500px;
      height: 500px;
      top: -150px;
      left: -150px;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%);
      animation-delay: 0s;
    }

    .premium-gradient-blob-2 {
      width: 500px;
      height: 500px;
      bottom: -200px;
      right: -200px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%);
      animation-delay: 7s;
    }

    @keyframes blobFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.1); }
      66% { transform: translate(-30px, 30px) scale(0.9); }
    }

    /* Vignette Effect */
    .premium-vignette {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
      z-index: -1;
    }

    /* Diagonal Watermark */
    .premium-watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 7rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      letter-spacing: 1rem;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      mix-blend-mode: soft-light;
    }

    /* Glassmorphic Card */
    .premium-glass-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.25rem;
      box-shadow: 
        0 8px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: cardFadeIn 0.8s ease-out, cardFloat 6s ease-in-out infinite;
      overflow: hidden;
    }

    /* Glass Reflection Effect */
    .premium-glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent);
      border-radius: 1.25rem 1.25rem 0 0;
      pointer-events: none;
    }

    .premium-glass-card:hover {
      transform: translateY(-6px);
      box-shadow: 
        0 12px 50px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(167, 139, 250, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    @keyframes cardFadeIn {
      from { 
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Logo with Pulsing Glow */
    .premium-logo-container {
      position: relative;
      display: inline-block;
    }

    .premium-logo-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.6), transparent 70%);
      border-radius: 50%;
      animation: logoPulse 3s ease-in-out infinite;
      z-index: 0;
    }

    @keyframes logoPulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 0.5;
      }
      50% { 
        transform: scale(1.4);
        opacity: 0.8;
      }
    }

    .premium-logo-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #8B5CF6, #6366F1);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: white;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7));
      animation: iconGlow 3s ease-in-out infinite;
    }

    @keyframes iconGlow {
      0%, 100% { filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7)); }
      50% { filter: drop-shadow(0 0 25px rgba(167, 139, 250, 1)); }
    }

    /* Brand Name with Gradient */
    .premium-brand-name {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(90deg, #A78BFA, #7C3AED);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
      margin: 0;
    }

    /* Edition Badge */
    .premium-edition-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.85);
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Form Controls */
    .premium-form-label {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .premium-form-control {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #FFF;
      border-radius: 0.75rem;
      padding: 0.875rem 1rem;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      height: auto;
    }

    .premium-form-control::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    .premium-form-control:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: #A78BFA;
      box-shadow: 
        0 0 0 3px rgba(167, 139, 250, 0.2),
        0 4px 12px rgba(167, 139, 250, 0.15);
      color: #FFF;
      outline: none;
    }

    /* Password Toggle */
    .premium-password-toggle {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: color 0.2s;
      padding: 0;
      font-size: 1.1rem;
    }

    .premium-password-toggle:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    /* Custom Premium Checkbox */
    .premium-form-check-input {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.4);
      width: 20px;
      height: 20px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    .premium-form-check-input:hover {
      border-color: #a78bfa;
      box-shadow: 0 0 4px rgba(167, 139, 250, 0.3);
    }

    .premium-form-check-input:checked {
      background: linear-gradient(90deg, #8b5cf6, #7c3aed);
      border-color: #8b5cf6;
      box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
      transform: scale(1.05);
    }

    .premium-form-check-input:checked::before {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
      animation: checkmarkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes checkmarkPop {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    .premium-form-check-input:focus {
      box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.25);
      border-color: #A78BFA;
      outline: none;
    }

    .premium-form-check-input:active {
      transform: scale(0.95);
    }

    .premium-form-check-label {
      color: rgba(255, 255, 255, 0.85);
      cursor: pointer;
      user-select: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      margin-left: 0.25rem;
    }

    .premium-form-check-label:hover {
      color: #d9d9ff;
    }

    /* Buttons */
    .premium-btn-primary {
      width: 100%;
      background: linear-gradient(90deg, #7C3AED, #6D28D9);
      border: none;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.875rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .premium-btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      transition: left 0.6s ease;
    }

    .premium-btn-primary:hover::before {
      left: 100%;
    }

    .premium-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 6px 24px rgba(124, 58, 237, 0.5),
        0 0 30px rgba(167, 139, 250, 0.6);
    }

    .premium-btn-primary:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(124, 58, 237, 0.4);
    }

    .premium-btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .premium-btn-secondary {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: white;
      font-weight: 500;
      padding: 0.75rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .premium-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .premium-btn-secondary:active {
      transform: scale(0.98);
    }

    /* Divider */
    .premium-divider {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;
    }

    .premium-divider-line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    .premium-divider-text {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.85rem;
      padding: 0 1rem;
    }

    /* Links */
    .premium-link {
      color: #A78BFA;
      text-decoration: none;
      transition: all 0.2s;
      font-weight: 500;
    }

    .premium-link:hover {
      color: #C4B5FD;
      text-decoration: underline;
    }

    /* Text Colors */
    .premium-text-primary {
      color: rgba(255, 255, 255, 0.95);
    }

    .premium-text-secondary {
      color: rgba(255, 255, 255, 0.7);
    }

    .premium-text-muted {
      color: rgba(255, 255, 255, 0.5);
    }

    /* Responsive */
    @media (max-width: 480px) {
      .premium-watermark {
        font-size: 4rem;
      }
      
      .premium-glass-card {
        padding: 2rem 1.5rem;
      }

      .premium-brand-name {
        font-size: 1.75rem;
      }

      .premium-logo-icon {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
      }
    }

    /* Page Load Animation */
    .premium-page-load {
      animation: pageLoad 0.8s ease-out;
    }

    @keyframes pageLoad {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `});function Tb(){const[d,c]=w.useState(""),[u,o]=w.useState(""),[h,b]=w.useState(!1),[f,T]=w.useState(!1),[v,y]=w.useState(!1),{signIn:N,signInWithGoogle:S}=gt(),M=pn(),L=async U=>{U.preventDefault(),T(!0);const H=Me.loading("Signing in...");try{await N(d,u),Me.success("Welcome back! 🎉",{id:H}),M("/dashboard")}catch(W){const ee=W.message||"Failed to sign in";Me.error(ee,{id:H})}finally{T(!1)}},G=async()=>{T(!0);const U=Me.loading("Signing in with Google...");try{await S(),Me.success("Welcome! 🎉",{id:U}),M("/dashboard")}catch(H){const W=H.message||"Failed to sign in with Google";Me.error(W,{id:U})}finally{T(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(zo,{position:"top-center"}),l.jsx(Eo,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-calculator"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Welcome Back 👋"}),l.jsx("p",{className:"small premium-text-secondary",children:"Sign in to access your professional workspace"})]}),l.jsxs("form",{onSubmit:L,children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:U=>c(U.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock"}),"Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:h?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Enter your password",value:u,onChange:U=>o(U.target.value),required:!0,autoComplete:"current-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>b(!h),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:l.jsx("i",{className:`bi ${h?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("input",{type:"checkbox",className:"premium-form-check-input",id:"rememberMe",checked:v,onChange:U=>y(U.target.checked)}),l.jsx("label",{className:"premium-form-check-label small",htmlFor:"rememberMe",children:"Remember me"})]}),l.jsx(pe,{to:"/forgot-password",className:"small premium-link",children:"Forgot password?"})]}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:f,children:f?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Signing in..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),"Sign In"]})})]}),l.jsxs("div",{className:"premium-divider",children:[l.jsx("div",{className:"premium-divider-line"}),l.jsx("span",{className:"premium-divider-text",children:"or continue with"}),l.jsx("div",{className:"premium-divider-line"})]}),l.jsxs("button",{type:"button",onClick:G,className:"btn premium-btn-secondary",disabled:f,children:[l.jsx(oh,{}),l.jsx("span",{children:"Sign in with Google"})]}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Don't have an account?"," ",l.jsx(pe,{to:"/signup",className:"premium-link fw-semibold",children:"Sign up"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function zb(){const[d,c]=w.useState(""),[u,o]=w.useState(""),[h,b]=w.useState(""),[f,T]=w.useState(""),[v,y]=w.useState(!1),[N,S]=w.useState(!1),[M,L]=w.useState(!1),[G,U]=w.useState(!1),{signUp:H,signInWithGoogle:W}=gt(),ee=pn(),Q=async le=>{if(le.preventDefault(),h!==f){Me.error("Passwords do not match");return}if(h.length<6){Me.error("Password must be at least 6 characters");return}if(!G){Me.error("Please agree to the Terms and Conditions");return}L(!0);const Ge=Me.loading("Creating your account...");try{await H(u,h,d),Me.success("Account created successfully! 🎉",{id:Ge}),ee("/dashboard")}catch(De){const Fe=De.message||"Failed to create account";Me.error(Fe,{id:Ge})}finally{L(!1)}},Z=async()=>{if(!G){Me.error("Please agree to the Terms and Conditions");return}L(!0);const le=Me.loading("Signing up with Google...");try{await W(),Me.success("Welcome to Estimatix! 🎉",{id:le}),ee("/dashboard")}catch(Ge){const De=Ge.message||"Failed to sign up with Google";Me.error(De,{id:le})}finally{L(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(zo,{position:"top-center"}),l.jsx(Eo,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",style:{maxWidth:"440px"},children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-calculator"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Create Account 🚀"}),l.jsx("p",{className:"small premium-text-secondary",children:"Join Estimatix and start calculating estimates like a pro"})]}),l.jsxs("form",{onSubmit:Q,children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"name",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-person"}),"Full Name"]}),l.jsx("input",{type:"text",className:"form-control premium-form-control",id:"name",placeholder:"John Doe",value:d,onChange:le=>c(le.target.value),required:!0,autoComplete:"name",autoFocus:!0})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:u,onChange:le=>o(le.target.value),required:!0,autoComplete:"email"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock"}),"Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:v?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Minimum 6 characters",value:h,onChange:le=>b(le.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>y(!v),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:l.jsx("i",{className:`bi ${v?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"confirmPassword",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock-fill"}),"Confirm Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:N?"text":"password",className:"form-control premium-form-control",id:"confirmPassword",placeholder:"Re-enter your password",value:f,onChange:le=>T(le.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>S(!N),className:"premium-password-toggle","aria-label":"Toggle confirm password visibility",children:l.jsx("i",{className:`bi ${N?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"d-flex align-items-start gap-2",children:[l.jsx("input",{type:"checkbox",className:"premium-form-check-input mt-1",id:"agreeTerms",checked:G,onChange:le=>U(le.target.checked),required:!0}),l.jsxs("label",{className:"premium-form-check-label small",htmlFor:"agreeTerms",children:["I agree to the"," ",l.jsx("a",{href:"#",className:"premium-link",children:"Terms and Conditions"})]})]})}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:M,style:{background:"linear-gradient(90deg, #10B981, #14B8A6)"},children:M?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Creating Account..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-person-plus me-2"}),"Create Account"]})})]}),l.jsxs("div",{className:"premium-divider",children:[l.jsx("div",{className:"premium-divider-line"}),l.jsx("span",{className:"premium-divider-text",children:"or continue with"}),l.jsx("div",{className:"premium-divider-line"})]}),l.jsxs("button",{type:"button",onClick:Z,className:"btn premium-btn-secondary",disabled:M,children:[l.jsx(oh,{}),l.jsx("span",{children:"Sign up with Google"})]}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Already have an account?"," ",l.jsx(pe,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function Eb(){const[d,c]=w.useState(""),[u,o]=w.useState(!1),[h,b]=w.useState(!1),{resetPassword:f}=gt(),T=async v=>{v.preventDefault(),b(!1),o(!0);const y=Me.loading("Sending reset link...");try{await f(d),b(!0),Me.success("Password reset link sent to your email! 📧",{id:y})}catch(N){const S=N.message||"Failed to send reset link";Me.error(S,{id:y})}finally{o(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(zo,{position:"top-center"}),l.jsx(Eo,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-key"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Reset Password 🔑"}),l.jsx("p",{className:"small premium-text-secondary",children:"Enter your email address and we'll send you a link to reset your password"})]}),l.jsx(wo,{children:h&&l.jsxs(he.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"alert mb-4",style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#6EE7B7",borderRadius:"0.75rem"},children:[l.jsx("i",{className:"bi bi-check-circle me-2"}),"Check your email for the password reset link!"]})}),!h&&l.jsxs("form",{onSubmit:T,children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:v=>c(v.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:u,style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:u?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Sending Link..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-send me-2"}),"Send Reset Link"]})})]}),h&&l.jsx("div",{className:"text-center",children:l.jsxs(pe,{to:"/login",className:"btn premium-btn-primary",style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back to Sign In"]})}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Remember your password?"," ",l.jsx(pe,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}class Ab{quotationsCollection="quotations";async saveQuotation(c){try{const u={...c,createdAt:no(),updatedAt:no()},o=await tp(Us(ct,this.quotationsCollection),u);return console.log("Quotation saved with ID:",o.id),o.id}catch(u){throw console.error("Error saving quotation:",u),new Error("Failed to save quotation")}}async updateQuotation(c,u){try{const o=Xt(ct,this.quotationsCollection,c);await hn(o,{...u,updatedAt:no()}),console.log("Quotation updated:",c)}catch(o){throw console.error("Error updating quotation:",o),new Error("Failed to update quotation")}}async deleteQuotation(c){try{const u=Xt(ct,this.quotationsCollection,c);await ap(u),console.log("Quotation deleted:",c)}catch(u){throw console.error("Error deleting quotation:",u),new Error("Failed to delete quotation")}}async getQuotation(c){try{const u=Xt(ct,this.quotationsCollection,c),o=await So(u);return o.exists()?{id:o.id,...o.data()}:null}catch(u){throw console.error("Error getting quotation:",u),new Error("Failed to get quotation")}}async getUserQuotations(c,u=50){try{const o=so(Us(ct,this.quotationsCollection),Bs("userId","==",c),ro("createdAt","desc"),zf(u)),h=await co(o),b=[];return h.forEach(f=>{b.push({id:f.id,...f.data()})}),b}catch(o){throw console.error("Error getting user quotations:",o),new Error("Failed to get quotations")}}async getQuotationsByStatus(c,u){try{const o=so(Us(ct,this.quotationsCollection),Bs("userId","==",c),Bs("status","==",u),ro("createdAt","desc")),h=await co(o),b=[];return h.forEach(f=>{b.push({id:f.id,...f.data()})}),b}catch(o){throw console.error("Error getting quotations by status:",o),new Error("Failed to get quotations by status")}}async searchQuotations(c,u){try{const o=await this.getUserQuotations(c,100),h=u.toLowerCase();return o.filter(b=>b.customerName.toLowerCase().includes(h)||b.quotationId.toLowerCase().includes(h)||b.customerPhone.includes(u)||b.customerEmail.toLowerCase().includes(h))}catch(o){throw console.error("Error searching quotations:",o),new Error("Failed to search quotations")}}async getQuotationStats(c){try{const u=await this.getUserQuotations(c,1e3),o=new Date,h=new Date(o.getFullYear(),o.getMonth(),1),b={totalQuotations:u.length,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0};return u.forEach(f=>{b.totalValue+=f.grandTotal,(f.status==="sent"||f.status==="draft")&&b.pendingQuotations++,(f.status==="approved"||f.status==="completed")&&b.approvedQuotations++,(f.createdAt instanceof po?f.createdAt.toDate():new Date(f.createdAt))>=h&&(b.thisMonthQuotations++,b.thisMonthValue+=f.grandTotal)}),b}catch(u){return console.error("Error getting quotation stats:",u),{totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}}}async getRecentQuotations(c,u=10){try{const o=so(Us(ct,this.quotationsCollection),Bs("userId","==",c),ro("createdAt","desc"),zf(u)),h=await co(o),b=[];return h.forEach(f=>{b.push({id:f.id,...f.data()})}),b}catch(o){return console.error("Error getting recent quotations:",o),[]}}async generateQuotationId(c){try{const u=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),o=await this.getUserQuotations(c,1e3),h=new Date().getFullYear(),b=o.filter(y=>(y.createdAt instanceof po?y.createdAt.toDate():new Date(y.createdAt)).getFullYear()===h);let f=0;b.forEach(y=>{const N=y.quotationId.match(/(\d+)$/);if(N){const S=parseInt(N[1]);S>f&&(f=S)}});const T=f+1,v=`${u.prefix}${h}-${T.toString().padStart(3,"0")}`;return u.currentSequence=T,u.currentYear=h,localStorage.setItem("admin_invoice_settings",JSON.stringify(u)),v}catch(u){return console.error("Error generating quotation ID:",u),`QUOT-${Date.now()}`}}}const ci=new Ab;function Gs({value:d,duration:c=2e3,prefix:u="",suffix:o=""}){const[h,b]=w.useState(0);return w.useEffect(()=>{let f=null,T;const v=y=>{f||(f=y);const N=Math.min((y-f)/c,1);b(Math.floor(N*d)),N<1&&(T=requestAnimationFrame(v))};return T=requestAnimationFrame(v),()=>cancelAnimationFrame(T)},[d,c]),l.jsxs("span",{children:[u,h.toLocaleString(),o]})}function Bf(){const{user:d,userProfile:c}=gt(),[u,o]=w.useState(!1),[h,b]=w.useState({totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}),[f,T]=w.useState([]),v=()=>{const S=new Date().getHours();return S<12?"Good morning":S<17?"Good afternoon":"Good evening"};w.useEffect(()=>{(async()=>{if(d?.uid)try{const M=await ci.getQuotationStats(d.uid);b(M);const L=await ci.getRecentQuotations(d.uid,4);T(L)}catch(M){console.error("Error loading dashboard data:",M)}})()},[d?.uid]);const y=S=>{const M=new Date,L=S instanceof po?S.toDate():new Date(S),G=M.getTime()-L.getTime(),U=Math.floor(G/6e4),H=Math.floor(G/36e5),W=Math.floor(G/864e5);return U<1?"Just now":U<60?`${U} minute${U>1?"s":""} ago`:H<24?`${H} hour${H>1?"s":""} ago`:W<30?`${W} day${W>1?"s":""} ago`:L.toLocaleDateString()},N=f.map(S=>{const M={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return{icon:{draft:"bi-file-earmark",sent:"bi-send",approved:"bi-check-circle",rejected:"bi-x-circle",completed:"bi-check-all"}[S.status]||"bi-file-earmark-text",text:`${S.status==="draft"?"Created":S.status.charAt(0).toUpperCase()+S.status.slice(1)} quotation ${S.quotationId} for ${S.customerName}`,time:y(S.createdAt),color:M[S.status]||"info",quotationId:S.quotationId,id:S.id}});return N.length===0&&N.push({icon:"bi-info-circle",text:"No recent activity. Create your first quotation!",time:"Start now",color:"muted",quotationId:"",id:""}),l.jsx("div",{className:"min-h-screen",style:{background:"linear-gradient(to bottom, #0F172A, #1E293B)"},children:l.jsxs("div",{className:"container-fluid py-6 px-4 md:px-6",style:{maxWidth:"1400px",margin:"0 auto"},children:[l.jsx(he.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-6",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[l.jsxs("h2",{className:"text-white mb-2",style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",fontWeight:"600",letterSpacing:"-0.5px"},children:[v(),", ",c?.displayName||d?.email?.split("@")[0],"! 👋"]}),l.jsx("div",{style:{height:"3px",width:"60%",background:"linear-gradient(90deg, #6366F1, #8B5CF6)",borderRadius:"2px",marginTop:"4px"}})]}),l.jsx("p",{className:"text-sm mb-0",style:{color:"#94A3B8",marginTop:"8px"},children:"Here's your activity summary today."})]}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",onClick:()=>o(!u),style:{width:"44px",height:"44px",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"white"},children:l.jsx("i",{className:"bi bi-search"})}),l.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",style:{width:"44px",height:"44px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",border:"none",color:"white"},children:l.jsx("i",{className:"bi bi-person-circle fs-5"})})]})]})}),l.jsxs(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"row g-4 mb-5",children:[l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #6366F1, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Quotations"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(Gs,{value:h.totalQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.4)"},children:l.jsx("i",{className:"bi bi-file-earmark-text text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-arrow-up me-1"}),l.jsx("span",{children:"+12% from last month"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #8B5CF6, #EC4899)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Value"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(Gs,{value:h.totalValue,prefix:"₹"})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #8B5CF6, #EC4899)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(236, 72, 153, 0.4)"},children:l.jsx("i",{className:"bi bi-currency-rupee text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-arrow-up me-1"}),l.jsx("span",{children:"+8% from last month"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Pending"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(Gs,{value:h.pendingQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(59, 130, 246, 0.4)"},children:l.jsx("i",{className:"bi bi-hourglass-split text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#F59E0B"},children:[l.jsx("i",{className:"bi bi-exclamation-circle me-1"}),l.jsx("span",{children:"Awaiting response"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #10B981, #14B8A6)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Approved This Month"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(Gs,{value:h.thisMonthQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(16, 185, 129, 0.4)"},children:l.jsx("i",{className:"bi bi-check-circle text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-trophy me-1"}),l.jsxs("span",{children:["₹",h.thisMonthValue.toLocaleString()," revenue"]})]})]})]})})]}),l.jsxs("div",{className:"row g-4",children:[l.jsx("div",{className:"col-lg-8",children:l.jsxs(he.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[l.jsxs("h5",{className:"mb-4 d-flex align-items-center",style:{fontSize:"1.25rem"},children:[l.jsx("span",{style:{marginRight:"8px",fontSize:"1.5rem"},children:"⚡"}),l.jsx("span",{style:{background:"linear-gradient(90deg, #6366F1, #8B5CF6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"600"},children:"Quick Actions"})]}),l.jsxs("div",{className:"row g-4",children:[l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/multi-calculator",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(99, 102, 241, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-calculator",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Multi-Item Calculator"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Create detailed quotations with multiple items"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Start Project"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/calculator",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(59, 130, 246, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-grid-3x2-gap",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Simple Calculator"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Quick calculations for single items"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Quick Calculate"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/admin",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #EC4899, #F472B6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(236, 72, 153, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-gear",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Admin Settings"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Configure pricing and preferences"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Manage Settings"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/billing",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(16, 185, 129, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-credit-card",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Billing & Subscription"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Manage subscription and payments"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"View Billing"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})})]})]})}),l.jsx("div",{className:"col-lg-4",children:l.jsxs(he.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[l.jsxs("h5",{className:"mb-4",style:{fontSize:"1.25rem",color:"white",fontWeight:"600"},children:[l.jsx("i",{className:"bi bi-clock-history me-2",style:{color:"#06B6D4"}}),"Recent Activity"]}),l.jsxs("div",{className:"card border-0",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-0",children:[l.jsx("div",{className:"list-group list-group-flush",children:l.jsx(wo,{children:N.length>0?N.map((S,M)=>l.jsx(he.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4+M*.1},className:"list-group-item border-0 py-3 px-4",style:{background:"transparent",borderBottom:M<N.length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"},children:l.jsxs("div",{className:"d-flex align-items-start",children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center me-3",style:{minWidth:"40px",height:"40px",background:S.color==="success"?"rgba(16, 185, 129, 0.2)":S.color==="info"?"rgba(59, 130, 246, 0.2)":S.color==="danger"?"rgba(239, 68, 68, 0.2)":"rgba(139, 92, 246, 0.2)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:l.jsx("i",{className:`bi ${S.icon}`,style:{fontSize:"18px",color:S.color==="success"?"#10B981":S.color==="info"?"#3B82F6":S.color==="danger"?"#EF4444":"#8B5CF6"}})}),l.jsxs("div",{className:"flex-grow-1",children:[l.jsx("p",{className:"mb-1",style:{fontSize:"14px",color:"white",fontWeight:"500"},children:S.text}),l.jsxs("small",{style:{color:"#94A3B8",fontSize:"12px"},children:[l.jsx("i",{className:"bi bi-clock me-1"}),S.time]})]})]})},M)):l.jsxs("div",{className:"text-center py-5 px-4",children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:"80px",height:"80px",background:"rgba(99, 102, 241, 0.1)",borderRadius:"50%"},children:l.jsx("i",{className:"bi bi-inbox",style:{fontSize:"36px",color:"#6366F1"}})}),l.jsx("p",{style:{color:"#94A3B8",fontSize:"14px",marginBottom:"16px"},children:"No recent activity yet"}),l.jsx(pe,{to:"/multi-calculator",className:"btn btn-sm",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",color:"white",border:"none",borderRadius:"10px",padding:"8px 16px",fontSize:"13px",fontWeight:"600"},children:"Create First Quotation"})]})})}),N.length>0&&l.jsx("div",{className:"p-3 text-center",style:{borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:l.jsxs("button",{className:"btn btn-link text-decoration-none",style:{color:"#6366F1",fontSize:"14px",fontWeight:"600"},children:["View All Activity ",l.jsx("i",{className:"bi bi-arrow-right ms-1"})]})})]})]})]})})]})]})})}function _f(d,c){var u=Object.keys(d);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(d);c&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(d,h).enumerable})),u.push.apply(u,o)}return u}function Gf(d){for(var c=1;c<arguments.length;c++){var u=arguments[c]!=null?arguments[c]:{};c%2?_f(Object(u),!0).forEach(function(o){dh(d,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(u)):_f(Object(u)).forEach(function(o){Object.defineProperty(d,o,Object.getOwnPropertyDescriptor(u,o))})}return d}function qs(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qs=function(c){return typeof c}:qs=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},qs(d)}function dh(d,c,u){return c in d?Object.defineProperty(d,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):d[c]=u,d}function uh(d,c){return Db(d)||kb(d,c)||Mb(d,c)||Rb()}function Db(d){if(Array.isArray(d))return d}function kb(d,c){var u=d&&(typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"]);if(u!=null){var o=[],h=!0,b=!1,f,T;try{for(u=u.call(d);!(h=(f=u.next()).done)&&(o.push(f.value),!(c&&o.length===c));h=!0);}catch(v){b=!0,T=v}finally{try{!h&&u.return!=null&&u.return()}finally{if(b)throw T}}return o}}function Mb(d,c){if(d){if(typeof d=="string")return Ff(d,c);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Ff(d,c)}}function Ff(d,c){(c==null||c>d.length)&&(c=d.length);for(var u=0,o=new Array(c);u<c;u++)o[u]=d[u];return o}function Rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mt=function(c,u,o){var h=!!o,b=ve.useRef(o);ve.useEffect(function(){b.current=o},[o]),ve.useEffect(function(){if(!h||!c)return function(){};var f=function(){b.current&&b.current.apply(b,arguments)};return c.on(u,f),function(){c.off(u,f)}},[h,u,c,b])},yo=function(c){var u=ve.useRef(c);return ve.useEffect(function(){u.current=c},[c]),u.current},oi=function(c){return c!==null&&qs(c)==="object"},Ob=function(c){return oi(c)&&typeof c.then=="function"},Ub=function(c){return oi(c)&&typeof c.elements=="function"&&typeof c.createToken=="function"&&typeof c.createPaymentMethod=="function"&&typeof c.confirmCardPayment=="function"},qf="[object Object]",Bb=function d(c,u){if(!oi(c)||!oi(u))return c===u;var o=Array.isArray(c),h=Array.isArray(u);if(o!==h)return!1;var b=Object.prototype.toString.call(c)===qf,f=Object.prototype.toString.call(u)===qf;if(b!==f)return!1;if(!b&&!o)return c===u;var T=Object.keys(c),v=Object.keys(u);if(T.length!==v.length)return!1;for(var y={},N=0;N<T.length;N+=1)y[T[N]]=!0;for(var S=0;S<v.length;S+=1)y[v[S]]=!0;var M=Object.keys(y);if(M.length!==T.length)return!1;var L=c,G=u,U=function(W){return d(L[W],G[W])};return M.every(U)},mh=function(c,u,o){return oi(c)?Object.keys(c).reduce(function(h,b){var f=!oi(u)||!Bb(c[b],u[b]);return o.includes(b)?(f&&console.warn("Unsupported prop change: options.".concat(b," is not a mutable property.")),h):f?Gf(Gf({},h||{}),{},dh({},b,c[b])):h},null):null},fh="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Lf=function(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fh;if(c===null||Ub(c))return c;throw new Error(u)},_b=function(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fh;if(Ob(c))return{tag:"async",stripePromise:Promise.resolve(c).then(function(h){return Lf(h,u)})};var o=Lf(c,u);return o===null?{tag:"empty"}:{tag:"sync",stripe:o}},Gb=function(c){!c||!c._registerWrapper||!c.registerAppInfo||(c._registerWrapper({name:"react-stripe-js",version:"2.8.1"}),c.registerAppInfo({name:"react-stripe-js",version:"2.8.1",url:"https://stripe.com/docs/stripe-js/react"}))},Ao=ve.createContext(null);Ao.displayName="ElementsContext";var Fb=function(c,u){if(!c)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(u," in an <Elements> provider."));return c},hh=function(c){var u=c.stripe,o=c.options,h=c.children,b=ve.useMemo(function(){return _b(u)},[u]),f=ve.useState(function(){return{stripe:b.tag==="sync"?b.stripe:null,elements:b.tag==="sync"?b.stripe.elements(o):null}}),T=uh(f,2),v=T[0],y=T[1];ve.useEffect(function(){var M=!0,L=function(U){y(function(H){return H.stripe?H:{stripe:U,elements:U.elements(o)}})};return b.tag==="async"&&!v.stripe?b.stripePromise.then(function(G){G&&M&&L(G)}):b.tag==="sync"&&!v.stripe&&L(b.stripe),function(){M=!1}},[b,v,o]);var N=yo(u);ve.useEffect(function(){N!==null&&N!==u&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[N,u]);var S=yo(o);return ve.useEffect(function(){if(v.elements){var M=mh(o,S,["clientSecret","fonts"]);M&&v.elements.update(M)}},[o,S,v.elements]),ve.useEffect(function(){Gb(v.stripe)},[v.stripe]),ve.createElement(Ao.Provider,{value:v},h)};hh.propTypes={stripe:ke.any,options:ke.object};ke.func.isRequired;var gh=ve.createContext(null);gh.displayName="CustomCheckoutSdkContext";var qb=function(c,u){if(!c)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(u," in an <CustomCheckoutProvider> provider."));return c},Lb=ve.createContext(null);Lb.displayName="CustomCheckoutContext";ke.any,ke.shape({clientSecret:ke.string.isRequired,elementsOptions:ke.object}).isRequired;var Hf=function(c){var u=ve.useContext(gh),o=ve.useContext(Ao);if(u&&o)throw new Error("You cannot wrap the part of your app that ".concat(c," in both <CustomCheckoutProvider> and <Elements> providers."));return u?qb(u,c):Fb(o,c)},Hb=function(c){return c.charAt(0).toUpperCase()+c.slice(1)},Qe=function(c,u){var o="".concat(Hb(c),"Element"),h=function(v){var y=v.id,N=v.className,S=v.options,M=S===void 0?{}:S,L=v.onBlur,G=v.onFocus,U=v.onReady,H=v.onChange,W=v.onEscape,ee=v.onClick,Q=v.onLoadError,Z=v.onLoaderStart,le=v.onNetworksChange,Ge=v.onConfirm,De=v.onCancel,Fe=v.onShippingAddressChange,ot=v.onShippingRateChange,Ie=Hf("mounts <".concat(o,">")),Pe="elements"in Ie?Ie.elements:null,Ve="customCheckoutSdk"in Ie?Ie.customCheckoutSdk:null,wt=ve.useState(null),dt=uh(wt,2),g=dt[0],_=dt[1],Y=ve.useRef(null),ne=ve.useRef(null);Mt(g,"blur",L),Mt(g,"focus",G),Mt(g,"escape",W),Mt(g,"click",ee),Mt(g,"loaderror",Q),Mt(g,"loaderstart",Z),Mt(g,"networkschange",le),Mt(g,"confirm",Ge),Mt(g,"cancel",De),Mt(g,"shippingaddresschange",Fe),Mt(g,"shippingratechange",ot),Mt(g,"change",H);var I;U&&(c==="expressCheckout"?I=U:I=function(){U(g)}),Mt(g,"ready",I),ve.useLayoutEffect(function(){if(Y.current===null&&ne.current!==null&&(Pe||Ve)){var ie=null;Ve?ie=Ve.createElement(c,M):Pe&&(ie=Pe.create(c,M)),Y.current=ie,_(ie),ie&&ie.mount(ne.current)}},[Pe,Ve,M]);var je=yo(M);return ve.useEffect(function(){if(Y.current){var ie=mh(M,je,["paymentRequest"]);ie&&"update"in Y.current&&Y.current.update(ie)}},[M,je]),ve.useLayoutEffect(function(){return function(){if(Y.current&&typeof Y.current.destroy=="function")try{Y.current.destroy(),Y.current=null}catch{}}},[]),ve.createElement("div",{id:y,className:N,ref:ne})},b=function(v){Hf("mounts <".concat(o,">"));var y=v.id,N=v.className;return ve.createElement("div",{id:y,className:N})},f=u?b:h;return f.propTypes={id:ke.string,className:ke.string,onChange:ke.func,onBlur:ke.func,onFocus:ke.func,onReady:ke.func,onEscape:ke.func,onClick:ke.func,onLoadError:ke.func,onLoaderStart:ke.func,onNetworksChange:ke.func,onConfirm:ke.func,onCancel:ke.func,onShippingAddressChange:ke.func,onShippingRateChange:ke.func,options:ke.object},f.displayName=o,f.__elementType=c,f},Xe=typeof window>"u",Yb=ve.createContext(null);Yb.displayName="EmbeddedCheckoutProviderContext";Qe("auBankAccount",Xe);Qe("card",Xe);Qe("cardNumber",Xe);Qe("cardExpiry",Xe);Qe("cardCvc",Xe);Qe("fpxBank",Xe);Qe("iban",Xe);Qe("idealBank",Xe);Qe("p24Bank",Xe);Qe("epsBank",Xe);Qe("payment",Xe);Qe("expressCheckout",Xe);Qe("currencySelector",Xe);Qe("paymentRequestButton",Xe);Qe("linkAuthentication",Xe);Qe("address",Xe);Qe("shippingAddress",Xe);Qe("paymentMethodMessaging",Xe);Qe("affirmMessage",Xe);Qe("afterpayClearpayMessage",Xe);const Qb=lp("pk_test_your_publishable_key_here"),Yf={free:{id:"free",name:"Free",price:0,currency:"inr",interval:"month",features:["Up to 10 calculations per month","Basic export features"]},pro:{id:"pro",name:"Pro",price:999,currency:"inr",interval:"month",features:["Unlimited calculations","Advanced exports","Priority support","Custom branding"]},enterprise:{id:"enterprise",name:"Enterprise",price:2999,currency:"inr",interval:"month",features:["Everything in Pro","Team collaboration","API access","Custom integrations"]}},Xb={free:null,pro:"price_PRO_MONTH_INR",enterprise:"price_ENTERPRISE_MONTH_INR"},ph=!1;function Vb({plan:d,currentPlan:c,onSelect:u}){const o=c===d.id,h=d.id==="pro";return l.jsxs("div",{className:`card h-100 ${h?"border-primary":""}`,children:[h&&l.jsx("div",{className:"card-header bg-primary text-white text-center",children:l.jsx("small",{className:"fw-bold",children:"MOST POPULAR"})}),l.jsxs("div",{className:"card-body d-flex flex-column",children:[l.jsx("h5",{className:"card-title",children:d.name}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("span",{className:"h2",children:["₹",d.price]}),l.jsxs("span",{className:"text-muted",children:["/",d.interval]})]}),l.jsx("ul",{className:"list-unstyled flex-grow-1",children:d.features.map((b,f)=>l.jsxs("li",{className:"mb-2",children:[l.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"}),b]},f))}),l.jsx("button",{className:`btn ${o?"btn-outline-secondary":h?"btn-primary":"btn-outline-primary"} mt-auto`,onClick:()=>u(d.id),disabled:o,children:o?"Current Plan":"Select Plan"})]})]})}function Zb(){const[d,c]=w.useState(!1),{user:u}=gt(),o=async()=>{u&&(c(!0),c(!1))};return l.jsx("div",{className:"card",children:l.jsxs("div",{className:"card-body text-center",children:[l.jsx("h5",{className:"card-title",children:"Manage Your Subscription"}),l.jsx("p",{className:"card-text",children:"Update your payment method, view invoices, and manage your subscription."}),l.jsx("button",{className:"btn btn-outline-primary",onClick:o,disabled:d,children:d?"Opening...":"Open Customer Portal"})]})})}function Kb(){const{userProfile:d}=gt(),[c,u]=w.useState(!1),o=d?.subscription?.plan??"free",h=async f=>{if(!(!d||f==="free")){u(!0);try{if(!Xb[f])return}catch(T){console.error("Error creating checkout session:",T),alert("Failed to start checkout. Please try again.")}finally{u(!1)}}},b=Object.values(Yf);return l.jsx(hh,{stripe:Qb,children:l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsxs("div",{className:"col-12",children:[l.jsx("h1",{className:"h2 mb-4",children:"Billing & Subscription"}),c&&l.jsx("div",{className:"d-flex justify-content-center mb-4",children:l.jsx("div",{className:"spinner-border",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Processing..."})})}),l.jsx("div",{className:"card mb-4",children:l.jsxs("div",{className:"card-body",children:[l.jsx("h5",{className:"card-title",children:"Current Plan"}),l.jsxs("p",{className:"card-text",children:["You're currently on the"," ",l.jsxs("strong",{children:[Yf[o]?.name??"Free"," plan"]}),d?.subscription?.currentPeriodEnd&&l.jsxs("span",{className:"text-muted ms-2",children:["(Renews on"," ",new Date(d.subscription.currentPeriodEnd).toLocaleDateString(),")"]})]})]})}),l.jsx("div",{className:"row g-4 mb-4",children:b.map(f=>l.jsx("div",{className:"col-md-4",children:l.jsx(Vb,{plan:f,currentPlan:o,onSelect:h})},f.id))}),o!=="free"&&l.jsx(Zb,{})]})})})})}class Wb{doc=null;setFont(c,u="normal"){this.doc&&(this.doc.setFont("helvetica",u),this.doc.setFontSize(c))}async generateQuotationPDF(c,u={}){this.doc=new k0;try{this.doc.setProperties({title:`Quotation ${c.invoiceNumber}`,subject:"Professional Quotation",author:u.branding?.companyName||"Estimatix",creator:"Estimatix - Professional Estimation Platform"}),await this.addWatermark(u);let o=45;o=this.addHeader(c,u,o),o=this.addCustomerDetails(c,o),o=this.addItemsTable(c,o+10);const h=this.doc.internal.pageSize.getHeight(),T=80+30;o+T>h-10&&(this.doc.addPage(),await this.addWatermark(u),o=20),o=this.addTotals(c,o+15),o=this.addNotesAndTerms(c,o+10),u.qrCode&&await this.addQRCode(u.qrCode),u.digitalSignature&&this.addDigitalSignature(u.digitalSignature);const v=this.doc.getNumberOfPages();for(let y=1;y<=v;y++)this.doc.setPage(y),this.addFooter(u,y,v);return this.doc.output("blob")}catch(o){throw console.error("Error generating PDF:",o),new Error("Failed to generate PDF")}}async addWatermark(c){if(!this.doc)return;const u=this.doc.internal.pageSize.getWidth(),o=this.doc.internal.pageSize.getHeight();let h="ESTIMATIX",b=.25,f="#6C63FF",T=!0;c.watermark?(h=c.watermark.text||h,b=c.watermark.opacity??b,f=c.watermark.color||f):c.confidential?(h="CONFIDENTIAL",b=.2,f="#FF6B6B",T=!1):c.draft&&(h="DRAFT",b=.2,f="#4ECDC4",T=!1),this.doc.saveGraphicsState();try{if(this.doc.setGState){const N=new this.doc.GState({opacity:b,"stroke-opacity":b});this.doc.setGState(N)}}catch(N){console.warn("GState not supported, watermark will be fully opaque:",N),typeof this.doc.setOpacity=="function"&&this.doc.setOpacity(b)}const v=u/2,y=o/2;if(T&&!c.draft&&!c.confidential)try{const N=`<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="256" r="240" fill="url(#primaryGradient)" opacity="0.1"/>
  <rect x="140" y="100" width="232" height="312" rx="24" fill="url(#primaryGradient)"/>
  <rect x="164" y="124" width="184" height="80" rx="12" fill="#ffffff" opacity="0.95"/>
  <text x="332" y="180" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="url(#primaryGradient)" text-anchor="end">123.5</text>
  <rect x="164" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="212" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="260" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="308" y="228" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="212" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="276" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="212" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="324" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="372" width="84" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="372" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="372" width="36" height="36" rx="8" fill="#10b981"/>
  <path d="M 380 320 L 420 280 L 460 300 L 500 240" stroke="url(#accentGradient)" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7"/>
  <circle cx="380" cy="320" r="6" fill="url(#accentGradient)"/>
  <circle cx="420" cy="280" r="6" fill="url(#accentGradient)"/>
  <circle cx="460" cy="300" r="6" fill="url(#accentGradient)"/>
  <circle cx="500" cy="240" r="6" fill="url(#accentGradient)"/>
  <text x="50" y="180" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="url(#primaryGradient)">E</text>
  <path d="M 40 200 L 100 200 L 70 240 L 95 240" stroke="url(#accentGradient)" stroke-width="4" stroke-linecap="round" fill="none"/>
</svg>`,S=document.createElement("canvas"),M=S.getContext("2d");if(!M)throw new Error("Canvas context not available");const L=window.URL||window.webkitURL||window,G=new Image,U=new Blob([N],{type:"image/svg+xml;charset=utf-8"}),H=L.createObjectURL(U);await new Promise((W,ee)=>{G.onload=()=>{try{S.width=500,S.height=500,M&&(M.clearRect(0,0,500,500),M.drawImage(G,0,0,500,500));const Q=S.toDataURL("image/png",.95),Z=120,le=v-Z/2,Ge=y-Z/2;this.doc.addImage(Q,"PNG",le,Ge,Z,Z,void 0,"NONE"),console.log("✅ Logo watermark added successfully to PDF"),L.revokeObjectURL(H),W()}catch(Q){console.error("❌ Failed to convert logo to canvas:",Q),L.revokeObjectURL(H),ee(Q)}},G.onerror=Q=>{console.error("❌ Failed to load logo image:",Q),L.revokeObjectURL(H),ee(new Error("Failed to load logo.svg"))},G.src=H})}catch(N){console.error("❌ Logo watermark failed, using fallback circle:",N),this.doc.setDrawColor(f),this.doc.setFillColor(f),this.doc.setLineWidth(4),this.doc.circle(v,y-15,40,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(f),this.doc.text("E",v,y-5,{align:"center"})}this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(f),c.draft?this.doc.text("DRAFT",v,y,{align:"center",angle:-15}):c.confidential?this.doc.text("CONFIDENTIAL",v,y,{align:"center",angle:-15}):this.doc.text("ESTIMATIX",v,y+80,{align:"center",angle:-45}),this.doc.restoreGraphicsState()}addHeader(c,u,o){if(!this.doc)return o;const h=this.doc.internal.pageSize.getWidth(),b=40,f=15;this.doc.setFillColor(108,99,255),this.doc.rect(0,0,h,b-2,"F"),this.doc.setFillColor(245,245,255),this.doc.rect(0,b-2,h,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(16),this.doc.text(u.branding?.companyName||"Venkatesh Aluminium & Glass",f,14),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.text("Professional Estimation & Quotation Platform",f,20),this.doc.setFontSize(8.8),this.doc.setTextColor(240,240,240);const T=u.branding?.phone||"8888889999",v=u.branding?.email||"info@example.com";this.doc.text(`Phone: ${T}  |  Email: ${v}`,f,26);const y=60,N=26,S=h-y-f,M=6;this.doc.setFillColor(255,255,255),this.doc.roundedRect(S,M,y,N,3,3,"F"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(S+4,M+2,y-8,7,2,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.text("QUOTATION",S+y/2,M+7,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(10),this.doc.setTextColor(33,37,41),this.doc.text(`#${c.invoiceNumber}`,S+y/2,M+14,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text(`Date: ${c.date.toLocaleDateString("en-IN")}`,S+y/2,M+19,{align:"center"});const L=new Date(c.date);return L.setDate(L.getDate()+30),this.doc.setFillColor(237,233,254),this.doc.roundedRect(S+10,M+21,y-20,4,2,2,"F"),this.doc.setTextColor(108,99,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(7),this.doc.text(`Valid Until: ${L.toLocaleDateString("en-IN")}`,S+y/2,M+24,{align:"center"}),b+8}addCustomerDetails(c,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth(),h=15;let b=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(h,b,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Customer Information",h+8,b+7),b+=15;const f=b,T=22;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(h,f,o-h*2,T,4,4,"FD"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(h,f,3,T,1,1,"F");const v=h+10,y=o/2+5;let N=f+9;return this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Name:",v,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(c.customerName,v+18,N),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Email:",y,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(c.customerEmail,y+18,N),N+=7,this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Phone:",v,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(c.customerPhone,v+18,N),f+T+12}addItemsTable(c,u){if(!this.doc)return u;let o=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,o,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Item Details",22,o+7),o+=14;const h=["Item","Width","Height","Qty","Glass","Profile","Weight (kg)","Rate (Rs.)","Total (Rs.)"],b=c.items.map((T,v)=>[T.name||`Item ${v+1}`,`${T.width}"`,`${T.height}"`,"1","Clear","Standard",(T.area*2.5).toFixed(2),`Rs. ${T.rate.toFixed(2)}`,`Rs. ${T.total.toFixed(2)}`]);return M0(this.doc,{head:[h],body:b,startY:o,theme:"grid",styles:{font:"helvetica",fontSize:8.5,cellPadding:{top:4,right:3,bottom:4,left:3},lineColor:[230,230,230],lineWidth:.25,textColor:[33,37,41],valign:"middle",overflow:"ellipsize"},headStyles:{fillColor:[240,240,255],textColor:[76,63,255],fontStyle:"bold",fontSize:8.8,halign:"center",lineWidth:.25,overflow:"ellipsize",cellPadding:{top:5,bottom:5}},alternateRowStyles:{fillColor:[250,250,250]},bodyStyles:{fillColor:[255,255,255]},columnStyles:{0:{cellWidth:23,halign:"left"},1:{cellWidth:16,halign:"center"},2:{cellWidth:16,halign:"center"},3:{cellWidth:12,halign:"center"},4:{cellWidth:21,halign:"center"},5:{cellWidth:21,halign:"center"},6:{cellWidth:19,halign:"right"},7:{cellWidth:26,halign:"right"},8:{cellWidth:28,halign:"right",fontStyle:"bold",textColor:[76,63,255]}},margin:{left:15,right:15},tableWidth:"wrap",didDrawCell:T=>{T.section==="head"&&(T.cell.styles.valign="middle")}}),this.doc.lastAutoTable.finalY+10}addTotals(c,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth();let h=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,h,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Summary",23,h+7),h+=15;const b=c.items.reduce((_,Y)=>_+Y.area,0),f=c.items.reduce((_,Y)=>_+Y.area*2.5,0),T=(o-45)/2,v=56,y=15,N=y+T+15;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.roundedRect(y,h,T,v,5,5,"FD");let S=h+11;this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9.5),this.doc.setTextColor(31,41,55),this.doc.text("Material Details:",y+7,S),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.6),this.doc.setTextColor(55,65,81),S+=8,this.doc.text(`• Glass Area: ${b.toFixed(2)} sq.ft`,y+7,S),S+=6,this.doc.text(`• Frame Weight: ${f.toFixed(2)} kg`,y+7,S),S+=6,this.doc.text("• Rate: Rs. 47.0 per kg",y+7,S),S+=9,this.doc.setFontSize(8),this.doc.text("Note: Prices valid 30 days from issue.",y+7,S),this.doc.setFillColor(255,255,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(N,h,T,v,5,5,"FD");let M=h+11;const L=8,G=N+L,U=N+T-L,H=(_,Y,ne=[31,41,55],I=!1)=>{if(!this.doc)return;this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(75,85,99),this.doc.text(_,G,M),this.doc.setFont("helvetica",I?"bold":"normal"),this.doc.setTextColor(...ne);const je=typeof Y=="number"?`Rs. ${Y.toLocaleString("en-IN",{minimumFractionDigits:2})}`:Y;this.doc.text(je,U,M,{align:"right"}),M+=6.5};H("Subtotal",c.subtotal,[31,41,55],!0),H("Tax (GST 18%)",c.tax,[31,41,55],!0);const W=c.discount||0;W>0&&H("Discount (5%)",`− Rs. ${W.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const ee=c.advancePaid||0;ee>0&&H("Advance Received",`− Rs. ${ee.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const Q=c.roundOff||0;if(Math.abs(Q)>.01){const _=Q>=0?"+":"−";H("Round-off",`${_} Rs. ${Math.abs(Q).toFixed(2)}`,[107,114,128],!1)}let Z=c.grandTotal;ee>0&&(Z=c.grandTotal-ee),W>0&&(Z=Z-W),(ee>0||W>0)&&(M+=1,this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.3),this.doc.line(G,M,U,M),M+=5,this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(239,68,68),this.doc.text("Balance Due",G,M),this.doc.setFontSize(10),this.doc.text(`Rs. ${Z.toLocaleString("en-IN",{minimumFractionDigits:2})}`,U,M,{align:"right"}),M+=6),M+=2,this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.line(N+L,M,N+T-L,M);const le=N+L,Ge=M+5,De=T-L*2,Fe=16;this.doc.setFillColor(84,63,255),this.doc.roundedRect(le,Ge,De,Fe,3,3,"F"),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(255,255,255);const ot=Ge+Fe/2+2.5;this.doc.setFontSize(7.5),this.doc.text("GRAND TOTAL",le+10,ot);const Ie=c.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2});let Pe=11;Ie.length>12&&(Pe=10),Ie.length>15&&(Pe=9),this.doc.setFontSize(Pe);const Ve=this.doc.getTextWidth(Ie),wt=Pe*.65;this.doc.setFontSize(wt);const dt="Rs.",g=this.doc.getTextWidth(dt);return this.doc.text(dt,le+De-10-Ve-g-1.5,ot-.8),this.doc.setFontSize(Pe),this.doc.text(Ie,le+De-10,ot,{align:"right"}),h+v+18}addNotesAndTerms(c,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth();let h=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,h,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Notes",23,h+7),h+=16,this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3);const b=c.notes?30:22;this.doc.roundedRect(15,h,o-30,b,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(55,65,81);let f=h+8;if(c.notes){const H=this.doc.splitTextToSize(c.notes,o-50);this.doc.text(H,22,f),f+=H.length*4+6}this.doc.setFont("helvetica","italic"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128);const v=`This quotation is auto-calculated based on the latest aluminium profile rates as of ${new Date().toLocaleString("en-IN",{month:"long",year:"numeric"})}.`,y=this.doc.splitTextToSize(v,o-50);this.doc.text(y,22,f),h+=b+12;const N=c.advancePaid||0;if(N>0){const H=c.grandTotal-N;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,h,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Payment Details",23,h+7),h+=16,this.doc.setFillColor(250,250,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,h,o-30,18,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(55,65,81),this.doc.text("Advance Paid:",22,h+8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(34,197,94),this.doc.text(`Rs. ${N.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,h+8,{align:"right"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(55,65,81),this.doc.text("Balance Due:",22,h+14),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(239,68,68),this.doc.text(`Rs. ${H.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,h+14,{align:"right"}),h+=22}if(c.termsAndConditions){this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,h,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Terms & Conditions",23,h+7),h+=16,this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(75,85,99);const H=this.doc.splitTextToSize(c.termsAndConditions,o-50);this.doc.text(H,22,h),h+=H.length*4+12}const S=this.doc.internal.pageSize.getHeight();h>S-90&&(this.doc.addPage(),h=20),this.doc.setFillColor(237,233,254),this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.roundedRect(15,h,o-30,12,3,3,"FD"),this.doc.setFillColor(108,99,255),this.doc.circle(22,h+6,2.5,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(7),this.doc.setFont("helvetica","bold"),this.doc.text("✓",22,h+7.2,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(8),this.doc.setTextColor(76,63,255),this.doc.text("DIGITALLY VERIFIED",28,h+5.5),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(7.5),this.doc.setTextColor(100,100,100);const M=`Document ID: #${c.invoiceNumber} | Verified by Estimatix Digital Sign System`;this.doc.text(M,28,h+9),h+=17;const L=(o-45)/2,G=35;this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,h,L,G,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Prepared & Authorized by",22,h+8),this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.5),this.doc.line(22,h+20,22+L-14,h+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Authorized Signature",22,h+25),this.doc.setFontSize(7.5),this.doc.text("Venkatesh Aluminium & Glass",22,h+30);const U=15+L+15;return this.doc.roundedRect(U,h,L,G,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Client Acknowledgement",U+7,h+8),this.doc.setDrawColor(200,200,200),this.doc.line(U+7,h+20,U+L-7,h+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Client Signature",U+7,h+25),this.doc.setFontSize(7.5),this.doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`,U+7,h+30),h+=G+10,h}async addQRCode(c){if(!(!this.doc||!c))try{const u=await ip.toDataURL(c.url,{width:400,margin:2,color:{dark:"#4f46e5",light:"#ffffff"}}),o=this.doc.internal.pageSize.getWidth(),h=this.doc.internal.pageSize.getHeight(),b=35,f=o-b-20,T=h-b-60;this.doc.setFillColor(255,255,255),this.doc.rect(f-3,T-3,b+6,b+6,"F"),this.doc.setDrawColor(79,70,229),this.doc.setLineWidth(.5),this.doc.rect(f-3,T-3,b+6,b+6,"S"),this.doc.addImage(u,"PNG",f,T,b,b),this.doc.setFontSize(8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(79,70,229);const v=c.label||"Scan to View";this.doc.text(v,f+b/2,T+b+6,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(100,100,100),this.doc.setFontSize(7),this.doc.text("Quote Lookup",f+b/2,T+b+11,{align:"center"})}catch(u){console.error("Failed to add QR code to PDF:",u)}}addDigitalSignature(c){if(!this.doc||!c)return;let o=this.doc.internal.pageSize.getHeight()-80;if(this.doc.setFontSize(10),this.doc.setFont("helvetica","bold"),this.doc.text("Authorized Signature:",20,o),c.signatureImage)try{this.doc.addImage(c.signatureImage,"PNG",20,o+5,40,20)}catch(h){console.warn("Failed to add signature image:",h)}this.doc.line(20,o+30,80,o+30),this.doc.setFont("helvetica","normal"),this.doc.text(c.signerName,20,o+35),this.doc.text(c.signerTitle,20,o+42),this.doc.text(c.date?.toLocaleDateString()||new Date().toLocaleDateString(),20,o+49),this.doc.setFontSize(8),this.doc.setTextColor(100,100,100),this.doc.text("This document contains a digital signature and is legally binding.",20,o+60)}addFooter(c,u=1,o=1){if(!this.doc)return;const h=this.doc.internal.pageSize.getWidth(),b=this.doc.internal.pageSize.getHeight(),f=28,T=b-f;this.doc.setFillColor(248,247,255),this.doc.rect(0,T,h,f,"F"),this.doc.setFillColor(108,99,255),this.doc.rect(0,T,h,1.5,"F"),this.doc.setFillColor(76,63,255),this.doc.rect(0,T+1.5,h,.8,"F"),this.setFont(8,"normal"),this.doc.setTextColor(31,41,55);const v=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});this.doc.text(`Generated: ${v}`,15,T+10),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100),this.doc.text(`Page ${u} of ${o}`,15,T+17),this.setFont(10,"bold"),this.doc.setTextColor(31,41,55);const y=c.branding?.companyName||"Venkatesh Aluminium & Glass";this.doc.text(`Prepared by ${y}`,h/2,T+10,{align:"center"}),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100);const N=c.branding?.phone||"+91-9876543210",S=c.branding?.email||"info@example.com",M=`Phone: ${N} | Email: ${S}`;this.doc.text(M,h/2,T+17,{align:"center"}),this.setFont(7.5,"normal"),this.doc.setTextColor(107,114,128),this.doc.text("Generated by Estimatix Quotation Suite",h-15,T+11,{align:"right"}),this.setFont(7,"normal"),this.doc.setTextColor(156,163,175),this.doc.text("© 2025 All Rights Reserved",h-15,T+17,{align:"right"})}downloadPDF(c,u){const o=URL.createObjectURL(c),h=document.createElement("a");h.href=o,h.download=u,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(o)}async savePDFDraft(c,u){try{const o={draft:!0,watermark:{text:"DRAFT",opacity:.1,color:"#4ECDC4"}},h=await this.generateQuotationPDF(c,o);return new Promise((b,f)=>{const T=new FileReader;T.onload=()=>b(T.result),T.onerror=f,T.readAsDataURL(h)})}catch(o){throw console.error("Error saving PDF draft:",o),o}}}const bh=new Wb;let mo;async function Jb(){return mo||(mo=await Qf(()=>import("./vendor-xlsx-DGuHH-KN.js"),[])),mo}const fo={"4mm":10,"5mm":12.5,"6mm":15,"24mm DG":22},ho={"Series 45":2.5,"Series 60":3.8,"Series 75":4.5,"Sliding Light":2.2,"Sliding Heavy":5};function $b(){const[d,c]=w.useState([]),[u,o]=w.useState("5mm"),[h,b]=w.useState("Series 60"),[f,T]=w.useState(!1),[v,y]=w.useState(""),[N,S]=w.useState({settings:!1,items:!1,summary:!1}),[M,L]=w.useState({name:"Venkatesh Aluminium & Glass",address:"",phone:"",email:""}),[G,U]=w.useState({name:"",address:"",phone:"",email:""}),[H,W]=w.useState(!1),[ee,Q]=w.useState(null),Z=w.useMemo(()=>{let g=0,_=0,Y=0,ne=0;d.forEach(We=>{const{glassArea:pt,glassWeight:ut,profileLength:Jt,profileWeight:la}=le(We);g+=pt,_+=ut,Y+=Jt,ne+=la});const I=_+ne,je=v?I*parseFloat(v):0,ie=je,be=je*.18,ce=je*1.18;return{totalGlassArea:g,totalGlassWeight:_,totalProfileLength:Y,totalProfileWeight:ne,totalWeight:I,totalCost:je,subtotal:ie,gst:be,grandTotal:ce}},[d,v]);function le(g){const _=g.glassType||u,Y=g.profileType||h,ne=(g.width||0)*(g.height||0)*(g.quantity||1),I=ne*fo[_],ie=2*((g.width||0)+(g.height||0))*(g.quantity||1),be=ie*ho[Y];return{glassArea:ne,glassWeight:I,profileLength:ie,profileWeight:be}}const Ge=()=>{const g={id:Date.now(),name:`Window ${d.length+1}`,width:"",height:"",quantity:1,glassType:"",profileType:""};c([...d,g])},De=(g,_,Y)=>{c(d.map(ne=>ne.id===g?{...ne,[_]:Y}:ne))},Fe=g=>{c(d.filter(_=>_.id!==g))},ot=()=>{const g=[];if(d.length===0)g.push("💡 Start by adding items to get AI-powered suggestions!");else{Z.totalWeight>100&&u==="5mm Clear"&&g.push("⚡ Consider using 6mm or 8mm glass for better strength in large installations"),Z.totalGlassArea>10&&h==="Standard"&&g.push("🔧 For large areas, Heavy Duty profiles provide better stability"),v&&parseFloat(v)>300&&g.push("💰 Consider negotiating bulk pricing - your rate seems high for large orders"),d.forEach((ne,I)=>{(ne.width>3||ne.height>3)&&g.push(`⚠️ Item ${I+1}: Large dimensions may require additional support frames`)}),Z.totalGlassArea/d.length<1&&g.push("📊 Small items detected - consider batch production for cost efficiency");const Y=Z.totalWeight/Z.totalGlassArea;Y<15?g.push("✅ Excellent material efficiency! Your design is optimized"):Y>30&&g.push("🎯 Consider lighter profiles to reduce material costs")}g.length===0&&g.push("✨ Your configuration looks great! No suggestions at the moment."),alert(`🤖 AI Suggestions:

`+g.join(`

`))},Ie=()=>{const g={items:d,globalGlassType:u,globalProfileType:h,ratePerKg:v,companyData:M,customerData:G,savedAt:Date.now()};localStorage.setItem("estimatix_calculator_draft",JSON.stringify(g)),Q(Date.now())},Pe=()=>{try{const g=localStorage.getItem("estimatix_calculator_draft");if(g){const _=JSON.parse(g);c(_.items||[]),o(_.globalGlassType||"5mm"),b(_.globalProfileType||"Series 60"),y(_.ratePerKg||""),L(_.companyData||M),U(_.customerData||{name:"",address:"",phone:"",email:""}),Q(_.savedAt||null),W(!1)}}catch(g){console.error("Error restoring draft:",g)}},Ve=()=>{localStorage.removeItem("estimatix_calculator_draft"),Q(null),W(!1)};w.useEffect(()=>{const g=localStorage.getItem("estimatix_calculator_draft");if(g)try{const _=JSON.parse(g);Q(_.savedAt||null),W(!0)}catch(_){console.error("Error parsing draft:",_),localStorage.removeItem("estimatix_calculator_draft")}},[]),w.useEffect(()=>{if(d.length>0||v||G.name||M.name!=="Venkatesh Aluminium & Glass"){const g=setTimeout(()=>{Ie()},2e3);return()=>clearTimeout(g)}},[d,u,h,v,M,G]);const wt=async()=>{try{const g={invoiceNumber:`QUOT-${Date.now()}`,date:new Date,customerName:G.name||"Valued Customer",customerPhone:G.phone||"",customerEmail:G.email||"",customerAddress:G.address||"",items:d.map((je,ie)=>{const{glassArea:be,glassWeight:ce,profileWeight:We}=le(je),pt=ce+We,ut=v?parseFloat(v):0,Jt=pt*ut;return{name:je.name||`Item ${ie+1}`,type:je.name.toLowerCase().includes("door")?"door":"window",width:je.width||0,height:je.height||0,area:be,rate:ut,total:Jt}}),subtotal:Z.totalCost,tax:Z.totalCost*.18,grandTotal:Z.totalCost*1.18,notes:`Total Glass Area: ${Z.totalGlassArea.toFixed(2)} m²
Total Weight: ${Z.totalWeight.toFixed(2)} kg
Glass Type: ${u}
Profile Type: ${h}`,termsAndConditions:`1. Prices are valid for 15 days.
2. Delivery within 7 working days.
3. Payment: 50% advance, balance on delivery.`},_={branding:{companyName:M.name,address:M.address||"",phone:M.phone||"",email:M.email||""}},Y=await bh.generateQuotationPDF(g,_),ne=URL.createObjectURL(Y),I=document.createElement("a");I.href=ne,I.download=`Quotation_${g.invoiceNumber}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(ne),alert("✅ Premium PDF generated successfully!")}catch(g){console.error("PDF generation error:",g),alert("Failed to generate PDF: "+(g.message||"Unknown error"))}},dt=async()=>{try{const g=await Jb(),_=d.map(ie=>{const{glassArea:be,glassWeight:ce,profileLength:We,profileWeight:pt}=le(ie);return{"Item Name":ie.name,"Width (m)":ie.width||0,"Height (m)":ie.height||0,Quantity:ie.quantity||1,"Glass Type":ie.glassType||u,"Profile Type":ie.profileType||h,"Glass Area (m²)":be.toFixed(2),"Glass Weight (kg)":ce.toFixed(2),"Profile Length (m)":We.toFixed(2),"Profile Weight (kg)":pt.toFixed(2),"Total Weight (kg)":(ce+pt).toFixed(2)}});_.push({"Item Name":"TOTAL","Width (m)":"","Height (m)":"",Quantity:"","Glass Type":"","Profile Type":"","Glass Area (m²)":Z.totalGlassArea.toFixed(2),"Glass Weight (kg)":Z.totalGlassWeight.toFixed(2),"Profile Length (m)":Z.totalProfileLength.toFixed(2),"Profile Weight (kg)":Z.totalProfileWeight.toFixed(2),"Total Weight (kg)":Z.totalWeight.toFixed(2)});const Y=g.utils.json_to_sheet(_),ne=g.utils.book_new();g.utils.book_append_sheet(ne,Y,"Calculation");const I=g.write(ne,{bookType:"xlsx",type:"array"}),je=new Blob([I],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});np.saveAs(je,"aluminium-calculation.xlsx")}catch(g){console.error("Error generating Excel:",g),alert("Error generating Excel file. Please try again.")}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* ===== ENTERPRISE-GRADE PREMIUM STYLING ===== */
        
        /* Enhanced Gradient Background with Depth */
        .premium-calc-container {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #1e293b 100%);
          min-height: 100vh;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated gradient texture overlay */
        .premium-calc-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
          pointer-events: none;
          animation: breathe 8s ease-in-out infinite;
        }
        
        @keyframes breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        /* Glassmorphic Premium Cards */
        .premium-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
        }
        
        .premium-card:hover::before {
          left: 100%;
        }
        
        /* ===== COMPACT PREMIUM HEADER ===== */
        .premium-header {
          background: linear-gradient(135deg, #5B5BEA 0%, #7C5CFA 50%, #9965F4 100%);
          backdrop-filter: blur(16px);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-header:hover {
          box-shadow: 0 8px 30px rgba(92, 122, 255, 0.3);
          transform: translateY(-2px);
        }
        
        /* Header Layout - Responsive */
        .header-layout {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        @media (min-width: 640px) {
          .header-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        
        /* Left Section - Icon + Title */
        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .header-icon-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.625rem;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .header-icon-box i {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .header-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .premium-header h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        
        .header-subtitle {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          margin: 0;
        }
        
        /* Right Section - Feature Badges */
        .header-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }
        
        .premium-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }
        
        .premium-badge:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        
        .premium-badge i {
          font-size: 0.75rem;
          color: #A5B4FC;
        }
        
        /* Section Headers with Icons */
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 2rem;
          background: rgba(99, 102, 241, 0.1);
          border-bottom: 2px solid rgba(139, 92, 246, 0.2);
          margin: -1px -1px 0 -1px;
          border-radius: 20px 20px 0 0;
        }
        
        .section-header h5 {
          margin: 0;
          font-weight: 700;
          font-size: 1.25rem;
          color: #e0e7ff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .section-header i {
          font-size: 1.5rem;
          color: #a78bfa;
        }
        
        .section-body {
          padding: 2rem;
        }
        
        /* Premium Form Labels */
        .premium-form-label {
          font-weight: 600;
          color: #cbd5e1;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .premium-form-label i.info-icon {
          color: #60a5fa;
          font-size: 1rem;
          cursor: help;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        
        .premium-form-label i.info-icon:hover {
          opacity: 1;
        }
        
        /* Premium Inputs with Glow Focus */
        .premium-input {
          border: 2px solid rgba(148, 163, 184, 0.3);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          background: rgba(15, 23, 42, 0.6);
          color: #f1f5f9;
          transition: all 0.3s ease;
        }
        
        .premium-input:focus {
          border-color: #6366f1;
          box-shadow: 
            0 0 0 3px rgba(99, 102, 241, 0.15),
            0 0 15px rgba(99, 102, 241, 0.4);
          outline: none;
          background: rgba(15, 23, 42, 0.8);
          transform: translateY(-1px);
        }
        
        .premium-input::placeholder {
          color: #64748b;
        }
        
        /* Premium Buttons with Gradient & Glow */
        .premium-btn {
          border-radius: 12px;
          padding: 0.875rem 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .premium-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .premium-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .premium-btn span {
          position: relative;
          z-index: 1;
        }
        
        .premium-btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        
        .premium-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }
        
        .premium-btn-success {
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }
        
        .premium-btn-success:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.6);
        }
        
        .premium-btn-danger {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }
        
        .premium-btn-danger:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.6);
        }
        
        /* Animated Summary Cards */
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .premium-summary-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: currentColor;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .premium-summary-card.cyan {
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.2);
        }
        
        .premium-summary-card.amber {
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.2);
        }
        
        .premium-summary-card.violet {
          color: #8b5cf6;
          border-color: rgba(139, 92, 246, 0.2);
        }
        
        .premium-summary-card.emerald {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.2);
        }
        
        .summary-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          opacity: 0.9;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .premium-summary-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: currentColor;
          margin: 0.5rem 0;
          font-family: 'Inter', system-ui, sans-serif;
          animation: countUp 0.8s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-summary-label {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .premium-summary-sub {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        /* Live Update Pulse Animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        .updating {
          animation: pulse-glow 1s ease-in-out;
        }
        
        /* Floating AI Assist Button */
        .ai-assist-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        
        .ai-assist-btn:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.7);
        }
        
        .ai-assist-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.5);
          animation: ripple 2s infinite;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        /* Auto-save Indicator */
        .auto-save-indicator {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: rgba(16, 185, 129, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          z-index: 999;
          animation: slideInRight 0.5s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* ===== DRAFT MANAGEMENT UI ===== */
        
        /* Draft Restore Modal Overlay */
        .draft-modal-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Draft Modal Card */
        .draft-modal-card {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          border-radius: 16px;
          padding: 2rem;
          width: 90%;
          max-width: 420px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .draft-modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .draft-modal-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .draft-modal-timestamp {
          font-size: 0.8rem;
          color: rgba(139, 92, 246, 0.9);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .draft-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
        }
        
        .draft-btn {
          padding: 0.625rem 1.25rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .draft-btn-discard {
          background: rgba(239, 68, 68, 0.15);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .draft-btn-discard:hover {
          background: rgba(239, 68, 68, 0.25);
          transform: translateY(-1px);
        }
        
        .draft-btn-restore {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
        
        .draft-btn-restore:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
        }
        
        /* Draft Control Buttons (in toolbar) */
        .draft-control-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .draft-save-btn {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .draft-save-btn:hover {
          background: rgba(34, 197, 94, 0.25);
          transform: translateY(-1px);
        }
        
        .draft-clear-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .draft-clear-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          transform: translateY(-1px);
        }
        
        .draft-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
          color: rgba(139, 92, 246, 0.9);
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* AI Insights Bar */
        .ai-insights-bar {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-left: 4px solid #8b5cf6;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-top: 1.5rem;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .ai-insights-bar i {
          color: #a78bfa;
          margin-right: 0.5rem;
        }
        
        .ai-insights-bar strong {
          color: #e0e7ff;
          font-weight: 700;
        }
        
        /* Collapsible Section */
        .collapsible-header {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .collapsible-header i.chevron {
          transition: transform 0.3s ease;
        }
        
        .collapsible-header.collapsed i.chevron {
          transform: rotate(-90deg);
        }
        
        .collapsible-content {
          max-height: 5000px;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        
        .collapsible-content.collapsed {
          max-height: 0;
        }
        
        /* Dark mode refinements */
        [data-bs-theme="dark"] .premium-card {
          background: rgba(30, 41, 59, 0.8);
        }
        
        [data-bs-theme="dark"] .premium-input {
          background: rgba(15, 23, 42, 0.8);
          color: #f1f5f9;
          border-color: rgba(71, 85, 105, 0.4);
        }
        
        /* ===== PREMIUM DATAGRID STYLING ===== */
        
        /* DataGrid Header Bar */
        .premium-datagrid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .datagrid-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .datagrid-title i {
          font-size: 1.5rem;
          color: #8b5cf6;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .items-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          height: 32px;
          padding: 0 12px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        
        .premium-add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .premium-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }
        
        .premium-add-btn:active {
          transform: translateY(0);
        }
        
        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(99, 102, 241, 0.05);
          border-radius: 16px;
          border: 2px dashed rgba(139, 92, 246, 0.3);
        }
        
        .empty-icon {
          font-size: 4rem;
          color: rgba(139, 92, 246, 0.4);
          margin-bottom: 1rem;
        }
        
        .empty-state h5 {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .empty-state p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }
        
        /* DataGrid Wrapper with Scroll */
        .premium-datagrid-wrapper {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .premium-datagrid {
          max-height: 600px;
          overflow-y: auto;
          overflow-x: auto;
        }
        
        /* Custom Scrollbar */
        .premium-datagrid::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .premium-datagrid::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        
        .premium-datagrid::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 10px;
        }
        
        .premium-datagrid::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
        }
        
        /* DataGrid Table */
        .datagrid-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 0.9rem;
        }
        
        /* Sticky Header */
        .datagrid-header-sticky {
          position: sticky;
          top: 0;
          z-index: 10;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .datagrid-header-sticky th {
          padding: 1rem 0.75rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid rgba(139, 92, 246, 0.5);
          background: transparent;
        }
        
        .th-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .th-content i {
          font-size: 0.9rem;
          color: #8b5cf6;
        }
        
        /* Column-specific styling */
        .col-text { min-width: 200px; }
        .col-numeric { min-width: 100px; text-align: center; }
        .col-select { min-width: 160px; }
        .col-calculated { min-width: 100px; text-align: center; }
        .col-total { min-width: 120px; text-align: center; }
        .col-action { width: 80px; text-align: center; }
        
        /* Table Body */
        .datagrid-body {
          background: transparent;
        }
        
        .datagrid-row {
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .datagrid-row:hover {
          background: rgba(139, 92, 246, 0.08);
          transform: scale(1.005);
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
        }
        
        .datagrid-row td {
          padding: 0.75rem;
          vertical-align: middle;
        }
        
        /* Input Fields */
        .datagrid-input {
          width: 100%;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        
        .datagrid-input:focus {
          outline: none;
          background: rgba(30, 41, 59, 0.8);
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }
        
        .input-text {
          font-weight: 500;
        }
        
        .input-numeric {
          text-align: center;
          font-family: 'Courier New', monospace;
          font-weight: 600;
        }
        
        /* Select Dropdown */
        .datagrid-select {
          width: 100%;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .datagrid-select:focus {
          outline: none;
          background: rgba(30, 41, 59, 0.8);
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }
        
        .datagrid-select option {
          background: #1e293b;
          color: white;
        }
        
        /* Calculated Values */
        .calculated-value {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.75rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #60a5fa;
          font-weight: 700;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          min-width: 70px;
        }
        
        .total-value {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 10px;
          color: #34d399;
          font-weight: 800;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          min-width: 80px;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
        }
        
        /* Delete Button */
        .delete-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }
        
        .delete-btn:active {
          transform: scale(0.95);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-header {
            padding: 1rem;
          }
          
          .premium-header h1 {
            font-size: 1.125rem;
          }
          
          .header-subtitle {
            font-size: 0.8rem;
          }
          
          .header-icon-box {
            padding: 0.5rem;
          }
          
          .header-icon-box i {
            font-size: 1rem;
          }
          
          .premium-badge {
            font-size: 0.8rem;
            padding: 0.25rem 0.625rem;
          }
          
          .premium-badge i {
            font-size: 0.7rem;
          }
          
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .ai-assist-btn {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .premium-datagrid-header {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .datagrid-title {
            font-size: 1rem;
          }
          
          .premium-add-btn {
            width: 100%;
            justify-content: center;
          }
          
          .datagrid-table {
            font-size: 0.8rem;
          }
          
          .datagrid-header-sticky th {
            padding: 0.75rem 0.5rem;
            font-size: 0.7rem;
          }
          
          .col-text { min-width: 150px; }
          .col-numeric { min-width: 80px; }
          .col-select { min-width: 120px; }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
          
          .premium-datagrid {
            max-height: 400px;
          }
        }
      `}),H&&l.jsx("div",{className:"draft-modal-overlay",onClick:()=>W(!1),children:l.jsxs("div",{className:"draft-modal-card",onClick:g=>g.stopPropagation(),children:[l.jsxs("div",{className:"draft-modal-title",children:[l.jsx("i",{className:"bi bi-clock-history"}),"Restore Saved Draft?"]}),l.jsx("p",{className:"draft-modal-text",children:"We found a previously saved draft. Would you like to continue editing it?"}),ee&&l.jsxs("div",{className:"draft-modal-timestamp",children:[l.jsx("i",{className:"bi bi-calendar-check"}),"Saved ",new Date(ee).toLocaleString()]}),l.jsxs("div",{className:"draft-modal-actions",children:[l.jsxs("button",{className:"draft-btn draft-btn-discard",onClick:Ve,children:[l.jsx("i",{className:"bi bi-trash3 me-1"}),"Discard"]}),l.jsxs("button",{className:"draft-btn draft-btn-restore",onClick:Pe,children:[l.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Restore Draft"]})]})]})}),l.jsx("button",{className:"ai-assist-btn",onClick:ot,title:"AI Suggestions",children:l.jsx("i",{className:"bi bi-stars"})}),l.jsx("div",{className:"premium-calc-container",children:l.jsxs("div",{className:"container-fluid",style:{maxWidth:"1400px"},children:[l.jsxs("div",{className:"premium-card mb-4",children:[l.jsx("div",{className:"premium-header",children:l.jsxs("div",{className:"header-layout",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("div",{className:"header-icon-box",children:l.jsx("i",{className:"bi bi-calculator-fill"})}),l.jsxs("div",{className:"header-text",children:[l.jsx("h1",{children:"Premium Calculator"}),l.jsx("p",{className:"header-subtitle",children:"Professional Aluminium & Glass Estimation"})]})]}),l.jsxs("div",{className:"header-badges",children:[l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-shield-check"}),l.jsx("span",{children:"Enterprise Grade"})]}),l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-graph-up"}),l.jsx("span",{children:"Real-time Calc"})]}),l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-stars"}),l.jsx("span",{children:"AI-Powered"})]})]})]})}),l.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2 mt-3 px-3 pb-3",children:[ee&&l.jsxs("span",{className:"draft-indicator",children:[l.jsx("i",{className:"bi bi-check-circle-fill"}),"Draft saved ",new Date(ee).toLocaleTimeString()]}),l.jsxs("button",{className:"draft-control-btn draft-save-btn",onClick:Ie,title:"Save current data as draft",children:[l.jsx("i",{className:"bi bi-floppy"}),"Save Template"]}),ee&&l.jsxs("button",{className:"draft-control-btn draft-clear-btn",onClick:Ve,title:"Clear saved draft",children:[l.jsx("i",{className:"bi bi-trash3"}),"Clear Template"]})]})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("i",{className:"bi bi-building-fill"}),l.jsx("h5",{children:"Company Information"})]}),l.jsx("div",{className:"section-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Company Name"}),l.jsx("input",{type:"text",className:"form-control",value:M.name,onChange:g=>L({...M,name:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Address"}),l.jsx("input",{type:"text",className:"form-control",value:M.address,onChange:g=>L({...M,address:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Phone"}),l.jsx("input",{type:"text",className:"form-control",value:M.phone,onChange:g=>L({...M,phone:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Email"}),l.jsx("input",{type:"email",className:"form-control",value:M.email,onChange:g=>L({...M,email:g.target.value})})]})]})})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("i",{className:"bi bi-person-circle"}),l.jsx("h5",{children:"Customer Information"})]}),l.jsx("div",{className:"section-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-person-badge-fill"}),"Customer Name"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.name,onChange:g=>U({...G,name:g.target.value}),placeholder:"Enter customer name..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-geo-alt-fill"}),"Address"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.address,onChange:g=>U({...G,address:g.target.value}),placeholder:"Enter address..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-telephone-fill"}),"Phone"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.phone,onChange:g=>U({...G,phone:g.target.value}),placeholder:"Enter phone number..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope-fill"}),"Email"]}),l.jsx("input",{type:"email",className:"form-control premium-input",value:G.email,onChange:g=>U({...G,email:g.target.value}),placeholder:"Enter email..."})]})]})})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,settings:!N.settings}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-sliders"}),l.jsx("h5",{children:"Default Settings & Rates"})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.settings?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.settings?"collapsed":""}`,children:[l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-layers-fill"}),"Default Glass Type",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Select default glass thickness for all items"})]}),l.jsx("select",{className:"form-select premium-input",value:u,onChange:g=>o(g.target.value),children:Object.keys(fo).map(g=>l.jsx("option",{value:g,children:g},g))})]}),l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-columns-gap"}),"Default Profile Type",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Choose aluminum profile series"})]}),l.jsx("select",{className:"form-select premium-input",value:h,onChange:g=>b(g.target.value),children:Object.keys(ho).map(g=>l.jsx("option",{value:g,children:g},g))})]}),l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-currency-rupee"}),"Rate per kg (₹)",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Enter the aluminum rate per kg as per your supplier"})]}),l.jsx("input",{type:"number",className:"form-control premium-input",value:v,onChange:g=>y(g.target.value),placeholder:"Enter rate..."})]}),l.jsx("div",{className:"col-md-3",children:l.jsxs("div",{className:"form-check mt-5",children:[l.jsx("input",{className:"form-check-input",type:"checkbox",id:"showOnlyTotals",checked:f,onChange:g=>T(g.target.checked),style:{cursor:"pointer"}}),l.jsx("label",{className:"form-check-label premium-form-label",htmlFor:"showOnlyTotals",style:{cursor:"pointer"},children:"Show only totals"})]})})]}),l.jsxs("div",{className:"ai-insights-bar",children:[l.jsx("i",{className:"bi bi-lightbulb-fill"}),l.jsx("strong",{children:"AI Insight:"})," Using ",l.jsx("strong",{children:h})," with ",l.jsx("strong",{children:u})," glass provides optimal strength-to-weight ratio. Average project cost: ",l.jsxs("strong",{children:["₹",v?(parseFloat(v)*150).toLocaleString():"---"]})," per sqm."]})]})]}),!f&&l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,items:!N.items}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-box-seam-fill"}),l.jsx("h5",{children:"Items & Calculations"}),l.jsxs("span",{className:"badge bg-primary ms-2",children:[d.length," Items"]})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.items?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.items?"collapsed":""}`,children:[l.jsxs("div",{className:"premium-datagrid-header",children:[l.jsxs("div",{className:"datagrid-title",children:[l.jsx("i",{className:"bi bi-grid-3x3-gap me-2"}),l.jsx("span",{className:"gradient-text",children:"Estimatix Premium DataGrid"}),l.jsx("span",{className:"items-badge",children:d.length})]}),l.jsxs("button",{className:"premium-add-btn",onClick:Ge,children:[l.jsx("i",{className:"bi bi-plus-lg me-2"}),"Add New Item"]})]}),d.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:l.jsx("i",{className:"bi bi-inbox"})}),l.jsx("h5",{children:"No Items Yet"}),l.jsx("p",{children:'Click "Add New Item" to start building your quotation'})]}):l.jsx("div",{className:"premium-datagrid-wrapper",children:l.jsx("div",{className:"premium-datagrid",children:l.jsxs("table",{className:"datagrid-table",children:[l.jsx("thead",{className:"datagrid-header-sticky",children:l.jsxs("tr",{children:[l.jsx("th",{className:"col-text",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-tag-fill"}),l.jsx("span",{children:"Item Name"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-arrows-expand"}),l.jsx("span",{children:"Width (m)"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-arrows-vertical"}),l.jsx("span",{children:"Height (m)"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-hash"}),l.jsx("span",{children:"Qty"})]})}),l.jsx("th",{className:"col-select",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-gem"}),l.jsx("span",{children:"Glass Type"})]})}),l.jsx("th",{className:"col-select",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-box"}),l.jsx("span",{children:"Profile Type"})]})}),l.jsx("th",{className:"col-calculated",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-droplet"}),l.jsx("span",{children:"Glass Wt"})]})}),l.jsx("th",{className:"col-calculated",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-box-seam"}),l.jsx("span",{children:"Profile Wt"})]})}),l.jsx("th",{className:"col-total",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-calculator"}),l.jsx("span",{children:"Total (kg)"})]})}),l.jsx("th",{className:"col-action",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-gear"}),l.jsx("span",{children:"Action"})]})})]})}),l.jsx("tbody",{className:"datagrid-body",children:d.map((g,_)=>{const{glassWeight:Y,profileWeight:ne}=le(g);return l.jsxs("tr",{className:"datagrid-row",children:[l.jsx("td",{className:"col-text",children:l.jsx("input",{type:"text",className:"datagrid-input input-text",value:g.name,onChange:I=>De(g.id,"name",I.target.value),placeholder:"Enter item name..."})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.width,onChange:I=>De(g.id,"width",parseFloat(I.target.value)||0),step:"0.01",min:"0"})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.height,onChange:I=>De(g.id,"height",parseFloat(I.target.value)||0),step:"0.01",min:"0"})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.quantity,onChange:I=>De(g.id,"quantity",parseInt(I.target.value)||1),min:"1"})}),l.jsx("td",{className:"col-select",children:l.jsxs("select",{className:"datagrid-select",value:g.glassType,onChange:I=>De(g.id,"glassType",I.target.value),children:[l.jsx("option",{value:"",children:"Default"}),Object.keys(fo).map(I=>l.jsx("option",{value:I,children:I},I))]})}),l.jsx("td",{className:"col-select",children:l.jsxs("select",{className:"datagrid-select",value:g.profileType,onChange:I=>De(g.id,"profileType",I.target.value),children:[l.jsx("option",{value:"",children:"Default"}),Object.keys(ho).map(I=>l.jsx("option",{value:I,children:I},I))]})}),l.jsx("td",{className:"col-calculated",children:l.jsx("div",{className:"calculated-value",children:Y.toFixed(2)})}),l.jsx("td",{className:"col-calculated",children:l.jsx("div",{className:"calculated-value",children:ne.toFixed(2)})}),l.jsx("td",{className:"col-total",children:l.jsx("div",{className:"total-value",children:(Y+ne).toFixed(2)})}),l.jsx("td",{className:"col-action",children:l.jsx("button",{className:"delete-btn",onClick:()=>Fe(g.id),title:"Delete item",children:l.jsx("i",{className:"bi bi-trash3"})})})]},g.id)})})]})})})]})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,summary:!N.summary}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-pie-chart-fill"}),l.jsx("h5",{children:"Project Summary & Analysis"})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.summary?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.summary?"collapsed":""}`,children:[l.jsxs("div",{className:"premium-summary-grid",children:[l.jsxs("div",{className:"premium-summary-card cyan",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-grid-3x3-gap-fill"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalGlassArea.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Glass Area (m²)"}),l.jsxs("div",{className:"premium-summary-sub",children:["Across ",d.length," items"]})]}),l.jsxs("div",{className:"premium-summary-card amber",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-box-seam-fill"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalWeight.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Frame Weight (kg)"}),l.jsx("div",{className:"premium-summary-sub",children:"Combined aluminum"})]}),l.jsxs("div",{className:"premium-summary-card violet",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-rulers"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalProfileLength.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Profile Length (m)"}),l.jsx("div",{className:"premium-summary-sub",children:"Total perimeter"})]}),l.jsxs("div",{className:"premium-summary-card emerald updating",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-currency-rupee"})}),l.jsxs("div",{className:"premium-summary-value",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]}),l.jsx("div",{className:"premium-summary-label",children:"Grand Total"}),l.jsx("div",{className:"premium-summary-sub",children:"Inc. GST @ 18%"})]})]}),l.jsxs("div",{className:"ai-insights-bar mt-4",children:[l.jsx("i",{className:"bi bi-robot"}),l.jsx("strong",{children:"AI Analysis:"})," This configuration achieves",l.jsxs("strong",{children:[" ",(Z.totalWeight/Z.totalGlassArea||0).toFixed(2)," kg/m²"]})," frame density, which is ",l.jsx("strong",{children:(Z.totalWeight/Z.totalGlassArea||0)<25?"15% lighter":"standard"})," compared to typical installations. Estimated material efficiency: ",l.jsx("strong",{children:d.length>0?"92%":"--"})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("h6",{className:"premium-form-label mb-3",children:[l.jsx("i",{className:"bi bi-table"}),"Detailed Breakdown"]}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-dark table-hover",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"table-primary",children:[l.jsx("th",{children:"Component"}),l.jsx("th",{className:"text-end",children:"Value"}),l.jsx("th",{className:"text-end",children:"Amount (₹)"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-layers me-2 text-cyan"}),"Glass Area"]}),l.jsxs("td",{className:"text-end",children:[Z.totalGlassArea.toFixed(2)," m²"]}),l.jsx("td",{className:"text-end",children:"--"})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-box me-2 text-amber"}),"Aluminum Weight"]}),l.jsxs("td",{className:"text-end",children:[Z.totalWeight.toFixed(2)," kg"]}),l.jsxs("td",{className:"text-end",children:["₹",(Z.subtotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-percent me-2 text-warning"}),"GST (18%)"]}),l.jsx("td",{className:"text-end",children:"--"}),l.jsxs("td",{className:"text-end",children:["₹",(Z.gst||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),l.jsxs("tr",{className:"table-success",children:[l.jsxs("td",{className:"fw-bold",children:[l.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Grand Total"]}),l.jsx("td",{className:"text-end fw-bold",children:"--"}),l.jsxs("td",{className:"text-end fw-bold fs-5",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]})]})]})})]}),l.jsxs("div",{className:"row g-3 mt-4",children:[l.jsx("div",{className:"col-md-6",children:l.jsx("button",{className:"premium-btn premium-btn-success w-100",onClick:dt,disabled:d.length===0,children:l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-file-earmark-excel me-2"}),"Export to Excel"]})})}),l.jsx("div",{className:"col-md-6",children:l.jsx("button",{className:"premium-btn premium-btn-danger w-100",onClick:wt,disabled:d.length===0,children:l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Generate Premium PDF"]})})})]})]})]})]})})]})}function Ib(){const{user:d}=gt(),[c,u]=w.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),[o,h]=w.useState({currentYear:new Date().getFullYear(),currentSequence:1,prefix:"VEN"}),[b,f]=w.useState("");w.useEffect(()=>{const N=localStorage.getItem("admin_pricing_settings"),S=localStorage.getItem("admin_invoice_settings");N&&u(JSON.parse(N)),S&&h(JSON.parse(S))},[]);const T=()=>{localStorage.setItem("admin_pricing_settings",JSON.stringify(c)),localStorage.setItem("admin_invoice_settings",JSON.stringify(o)),f("Settings saved successfully!"),setTimeout(()=>f(""),3e3)},v=()=>{u({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),f("Settings reset to defaults!"),setTimeout(()=>f(""),3e3)},y=()=>{const N=o.currentSequence.toString().padStart(3,"0");return`${o.prefix}${o.currentYear}-${N}`};return l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsxs("div",{className:"col-12",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[l.jsxs("h1",{className:"h3 text-primary",children:[l.jsx("i",{className:"bi bi-gear-fill me-2"}),"Admin Settings"]}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-outline-secondary",onClick:v,children:[l.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Reset to Defaults"]}),l.jsxs("button",{className:"btn btn-primary",onClick:T,children:[l.jsx("i",{className:"bi bi-check-circle me-1"}),"Save Settings"]})]})]}),b&&l.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[l.jsx("i",{className:"bi bi-check-circle-fill me-2"}),b]}),l.jsxs("div",{className:"alert alert-info mb-4",children:[l.jsxs("h6",{className:"alert-heading",children:[l.jsx("i",{className:"bi bi-info-circle me-2"}),"Admin Access"]}),l.jsxs("p",{className:"mb-0",children:["Logged in as: ",l.jsx("strong",{children:d?.email})," | These settings will apply to all quotations system-wide."]})]}),l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-lg-8",children:l.jsxs("div",{className:"card mb-4",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Unit Pricing Configuration"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Glass Rate (₹ per m²)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:c.glassRatePerM2,onChange:N=>u({...c,glassRatePerM2:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per m²"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Aluminium Rate (₹ per kg)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:c.aluminiumRatePerKg,onChange:N=>u({...c,aluminiumRatePerKg:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per kg"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Accessory Rate (₹ per item)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:c.accessoryRatePerItem,onChange:N=>u({...c,accessoryRatePerItem:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per item"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Labor Charge (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:c.laborChargePercent,onChange:N=>u({...c,laborChargePercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"GST Rate (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:c.gstPercent,onChange:N=>u({...c,gstPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Company Markup (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:c.companyMarkupPercent,onChange:N=>u({...c,companyMarkupPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]})]})})]})}),l.jsxs("div",{className:"col-lg-4",children:[l.jsxs("div",{className:"card mb-4",children:[l.jsx("div",{className:"card-header bg-success text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-receipt me-2"}),"Invoice Settings"]})}),l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Invoice Prefix"}),l.jsx("input",{type:"text",className:"form-control",value:o.prefix,onChange:N=>h({...o,prefix:N.target.value.toUpperCase()}),maxLength:5})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Current Year"}),l.jsx("input",{type:"number",className:"form-control",value:o.currentYear,onChange:N=>h({...o,currentYear:parseInt(N.target.value)||new Date().getFullYear()}),min:"2020",max:"2030"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Next Sequence Number"}),l.jsx("input",{type:"number",className:"form-control",value:o.currentSequence,onChange:N=>h({...o,currentSequence:parseInt(N.target.value)||1}),min:"1"})]}),l.jsxs("div",{className:"alert alert-info",children:[l.jsx("strong",{children:"Next Invoice Number:"}),l.jsx("br",{}),l.jsx("code",{className:"fs-6",children:y()})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header bg-info text-white",children:l.jsxs("h6",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-bar-chart me-2"}),"Quick Stats"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"small",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Material Cost (Glass + Al):"}),l.jsxs("strong",{children:["₹",(c.glassRatePerM2+c.aluminiumRatePerKg).toFixed(0)]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Total Overhead:"}),l.jsxs("strong",{children:[(c.laborChargePercent+c.gstPercent+c.companyMarkupPercent).toFixed(1),"%"]})]}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Settings Last Updated:"}),l.jsx("strong",{children:new Date().toLocaleDateString()})]})]})})]})]})]})]})})})}class Pb{async createShareLink(c,u={}){try{const o=this.generateShareToken(),h=u.expiresInDays?Date.now()+u.expiresInDays*24*60*60*1e3:void 0,b={quotationId:c,shareToken:o,isPublic:u.isPublic??!1,readOnly:u.readOnly??!0,allowedUsers:u.allowedUsers,createdAt:Date.now(),expiresAt:h};return await go(Xt(ct,"sharedQuotes",o),b),`${window.location.origin}/estimatix#/shared/${o}`}catch(o){throw console.error("Error creating share link:",o),new Error("Failed to create share link")}}async getSharedQuote(c){try{const u=Xt(ct,"sharedQuotes",c),o=await So(u);if(!o.exists())return null;const h=o.data();return h.expiresAt&&Date.now()>h.expiresAt?null:{...h,id:o.id}}catch(u){return console.error("Error getting shared quote:",u),null}}async joinCollaboration(c,u,o){try{const h=Xt(ct,"collaborations",c),b=Date.now(),f={[`activeUsers.${u}`]:{userId:u,email:o,lastSeen:b}};await hn(h,f);const T=sp(h,v=>{if(v.exists()){const y=v.data();this.handleCollaborationUpdate(y)}});return()=>{T(),this.leaveCollaboration(c,u)}}catch(h){throw console.error("Error joining collaboration:",h),h}}async leaveCollaboration(c,u){try{const o=Xt(ct,"collaborations",c),h={[`activeUsers.${u}`]:null};await hn(o,h)}catch(o){console.error("Error leaving collaboration:",o)}}async trackChange(c,u){try{const o=Xt(ct,"collaborations",c),h={...u,id:this.generateChangeId(),timestamp:Date.now()};await hn(o,{[`changes.${h.id}`]:h})}catch(o){console.error("Error tracking change:",o)}}async updateCursor(c,u,o){try{const h=Xt(ct,"collaborations",c);await hn(h,{[`activeUsers.${u}.cursor`]:o,[`activeUsers.${u}.lastSeen`]:Date.now()})}catch(h){console.error("Error updating cursor:",h)}}async copyShareLink(c){try{await navigator.clipboard.writeText(c)}catch{const o=document.createElement("textarea");o.value=c,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}generateShareToken(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}generateChangeId(){return Math.random().toString(36).substring(2)}handleCollaborationUpdate(c){window.dispatchEvent(new CustomEvent("collaborationUpdate",{detail:c}))}}const xh=new Pb;function ex(){const{user:d}=gt(),[c,u]=w.useState(!1),[o,h]=w.useState(!1),[b,f]=w.useState([]),[T,v]=w.useState(!1),[y,N]=w.useState([]),[S,M]=w.useState(!1),[L,G]=w.useState(null),[U,H]=w.useState("residential"),[W,ee]=w.useState(!1),[Q,Z]=w.useState(null),[le,Ge]=w.useState([]),[De,Fe]=w.useState(!1),[ot,Ie]=w.useState(null),[Pe,Ve]=w.useState(!1),[wt,dt]=w.useState(null),[g,_]=w.useState({quotationId:"",customerName:"",customerPhone:"",customerEmail:"",items:[],totalGlassArea:0,totalFrameWeight:0,subtotal:0,laborCharges:0,gst:0,grandTotal:0,createdAt:new Date().toISOString(),validUntil:new Date(Date.now()+720*60*60*1e3).toISOString(),status:"draft"}),[Y,ne]=w.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),I=["Clear Float Glass 5mm","Tinted Glass 6mm","Laminated Glass 6.38mm","Tempered Glass 8mm","Double Glazed Unit","Reflective Glass 6mm"],je=["Standard Aluminium Frame","Heavy Duty Frame","Powder Coated Frame","Wooden Frame","UPVC Frame"],ie=["Standard Handle","Premium Handle","Security Lock","Mesh/Grill","Weather Strip","Hinges Premium","Sliding Mechanism"],be=[{type:"window",size:"small",width:1,height:1.2,glassType:"Clear Float Glass 5mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle"],useCase:"Bathroom, Small Kitchen Window",confidence:92,durability:"8-10 years",energyEfficiency:"medium",costSavings:12},{type:"window",size:"medium",width:1.5,height:1.8,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle","Mesh/Grill"],useCase:"Bedroom Window, Living Room",confidence:95,durability:"10-12 years",energyEfficiency:"medium",costSavings:8},{type:"window",size:"large",width:2,height:2.5,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Large Living Room, Balcony Window",confidence:88,durability:"12-15 years",energyEfficiency:"high",costSavings:15},{type:"window",size:"extra-large",width:3,height:2.5,glassType:"Double Glazed Unit",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Panoramic Window, Bay Window",confidence:90,durability:"15+ years",energyEfficiency:"high",costSavings:18},{type:"door",size:"small",width:.9,height:2.1,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Premium Handle","Security Lock","Hinges Premium"],useCase:"Bathroom Door, Utility Door",confidence:93,durability:"10-12 years",energyEfficiency:"low",costSavings:10},{type:"door",size:"medium",width:1.2,height:2.4,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Main Entrance, Bedroom Door",confidence:96,durability:"12-15 years",energyEfficiency:"medium",costSavings:14},{type:"door",size:"large",width:1.5,height:2.5,glassType:"Laminated Glass 6.38mm",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Premium Main Entrance",confidence:91,durability:"15+ years",energyEfficiency:"high",costSavings:16},{type:"door",size:"extra-large",width:2,height:2.5,glassType:"Double Glazed Unit",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Sliding Mechanism","Weather Strip"],useCase:"Sliding Door, Patio Door",confidence:89,durability:"15+ years",energyEfficiency:"high",costSavings:20}],ce=(p,B,q,F)=>{const $=(p+B)*2;let P=2.5;switch(q){case"Heavy Duty Frame":P=3.5;break;case"Powder Coated Frame":P=2.8;break;case"Wooden Frame":P=2;break;case"UPVC Frame":P=1.8;break;default:P=2.5}return $*P*F},We=p=>{const B=[],q=p.width*p.height;return p.glassType==="Clear Float Glass 5mm"&&q>5&&B.push("💡 Consider tempered glass for larger areas (>5m²) for safety."),p.glassType==="Double Glazed Unit"&&p.frameType==="Standard Aluminium Frame"&&B.push("💡 Heavy Duty Frame is recommended for Double Glazed Units."),(p.width>=2||p.height>=2.5)&&!p.accessories.includes("Sliding Mechanism")&&B.push(`💡 For ${p.width.toFixed(1)}m × ${p.height.toFixed(1)}m dimensions, sliding mechanism is recommended.`),p.type==="door"&&!p.accessories.includes("Security Lock")&&B.push("🔒 Security Lock is recommended for doors."),q>4&&!p.accessories.includes("Weather Strip")&&B.push("🌤️ Weather Strip recommended for better insulation."),B},pt=(p,B)=>{let q={...p};switch(B){case"residential":p.glassType==="Double Glazed Unit"&&(q.glassType="Tempered Glass 8mm",q.confidence-=5);break;case"commercial":p.frameType==="Standard Aluminium Frame"&&(q.frameType="Heavy Duty Frame"),p.accessories.includes("Security Lock")||q.accessories.push("Security Lock"),q.confidence+=3;break;case"thermal":p.glassType.includes("Double Glazed")||(q.glassType="Double Glazed Unit"),p.accessories.includes("Weather Strip")||q.accessories.push("Weather Strip"),q.energyEfficiency="high",q.confidence+=5;break;case"premium":q.frameType="Powder Coated Frame",q.glassType=p.glassType.includes("Laminated")?p.glassType:"Laminated Glass 6.38mm",p.accessories.includes("Premium Handle")||(q.accessories=q.accessories.filter(F=>F!=="Standard Handle"),q.accessories.push("Premium Handle")),q.confidence+=2;break}return q},ut=(p,B=1)=>{const q=p.width*p.height*B,F=ce(p.width,p.height,p.frameType,B),$=q*Y.glassRatePerM2+F*Y.aluminiumRatePerKg+p.accessories.length*Y.accessoryRatePerItem*B,P=$*(Y.laborChargePercent/100),Re=$+P,Vt=Re*(Y.gstPercent/100),et=Re+Vt;return{material:$,labor:P,gst:Vt,total:et}},Jt=(p,B)=>{const q=[];switch(p.costSavings&&q.push(`💰 This configuration saves ${p.costSavings}% material weight vs standard setup`),q.push(`🛡️ Estimated durability: ${p.durability}`),p.energyEfficiency==="high"&&q.push("⚡ High energy efficiency - Reduces cooling/heating costs"),B){case"residential":q.push("🏠 Optimized for residential use with cost-efficient materials");break;case"commercial":q.push("🏢 Commercial-grade durability for high-traffic areas");break;case"thermal":q.push("🌡️ Thermal insulation optimized - Best for extreme climates");break;case"premium":q.push("💎 Premium aesthetic finish with superior quality materials");break}return q},la=(p,B)=>{const q=g.items.find(et=>et.id===p);if(!q)return;Ie(p);let F;if(q.width>0||q.height>0){const et=q.width*q.height;let Te="medium";et<1.5?Te="small":et<4?Te="medium":et<7?Te="large":Te="extra-large",F=be.find(tt=>tt.type===B&&tt.size===Te)||be.find(tt=>tt.type===B&&tt.size==="medium")}else F=be.find(et=>et.type===B&&et.size==="medium");const $=pt(F,U),P=ut($,q.quantity),Re=Jt($,U),Vt={preset:$,mode:U,estimatedCost:P,insights:Re,confidence:$.confidence,appliedAt:new Date};Z(Vt),ee(!0)},Ca=()=>{if(!Q||!ot)return;const p=Q.preset;_(F=>({...F,items:F.items.map($=>$.id===ot?{...$,width:p.width,height:p.height,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],notes:`🤖 AI Estimated (${U.charAt(0).toUpperCase()+U.slice(1)} Mode)
Use Case: ${p.useCase}
Confidence: ${p.confidence}%
${$.notes?`
`+$.notes:""}`}:$)}));const q=[{id:Date.now().toString(),itemName:g.items.find(F=>F.id===ot)?.name||"Unknown",type:p.type,dimensions:`${p.width}m × ${p.height}m`,mode:U,appliedAt:Q.appliedAt,result:Q},...le].slice(0,10);Ge(q),localStorage.setItem("ai_estimation_history",JSON.stringify(q)),ee(!1),Ie(null),yl()};w.useEffect(()=>{const p=localStorage.getItem("ai_estimation_history");p&&Ge(JSON.parse(p))},[]),w.useEffect(()=>{const p=localStorage.getItem("admin_pricing_settings");p&&ne(JSON.parse(p));const B=localStorage.getItem("item_templates");B&&N(JSON.parse(B))},[]);const mi=async()=>{if(!d?.uid)return"TEMP-001";try{return await ci.generateQuotationId(d.uid)}catch(p){console.error("Error generating quotation ID:",p);const B=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),q=B.currentSequence.toString().padStart(3,"0"),F=`${B.prefix}${B.currentYear}-${q}`;return B.currentSequence+=1,localStorage.setItem("admin_invoice_settings",JSON.stringify(B)),F}};w.useEffect(()=>{(async()=>{if(!g.quotationId){const B=await mi();_(q=>({...q,quotationId:B}))}})()},[]);const el=()=>{const p={id:Date.now().toString(),name:`Item ${g.items.length+1}`,type:"window",width:0,height:0,quantity:1,glassType:I[0],frameType:je[0],accessories:[],notes:"",showBreakdown:!1};_(B=>({...B,items:[...B.items,p]}))},fi=p=>{const B=g.items.find(F=>F.id===p);if(!B)return;const q={...B,id:Date.now().toString(),name:`${B.name} (Copy)`,showBreakdown:!1};_(F=>({...F,items:[...F.items,q]}))},xn=p=>{const B={id:Date.now().toString(),name:p.name,type:p.type,width:p.width,height:p.height,quantity:1,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],notes:p.description,showBreakdown:!1};_(q=>({...q,items:[...q.items,B]})),M(!1)},ia=p=>{const B=prompt("Enter template name:",p.name);if(!B)return;const q={id:Date.now().toString(),name:B,type:p.type,width:p.width,height:p.height,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],description:p.notes},F=[...y,q];N(F),localStorage.setItem("item_templates",JSON.stringify(F)),alert(`✅ Template "${B}" saved successfully!`)},hi=p=>{const B=y.find($=>$.id===p);if(!B||!confirm(`Are you sure you want to delete template "${B.name}"?`))return;const F=y.filter($=>$.id!==p);N(F),localStorage.setItem("item_templates",JSON.stringify(F))},gi=p=>{G(p)},Vs=p=>{p.preventDefault()},yn=p=>{if(!L||L===p){G(null);return}const B=g.items.findIndex(P=>P.id===L),q=g.items.findIndex(P=>P.id===p);if(B===-1||q===-1)return;const F=[...g.items],[$]=F.splice(B,1);F.splice(q,0,$),_(P=>({...P,items:F})),G(null)},Rt=(p,B,q)=>{_(F=>({...F,items:F.items.map($=>$.id===p?{...$,[B]:q}:$)})),yl()},pi=p=>{_(B=>({...B,items:B.items.map(q=>q.id===p?{...q,showBreakdown:!q.showBreakdown}:q)}))},yl=()=>{d?.uid&&(v(!0),window.autoSaveTimeout&&clearTimeout(window.autoSaveTimeout),window.autoSaveTimeout=setTimeout(()=>{Zs()},2e3))},Zs=async()=>{if(!d?.uid||!g.customerName||g.items.length===0){v(!1);return}try{localStorage.setItem("draft_quotation",JSON.stringify(g)),console.log("✓ Auto-saved to localStorage"),v(!1)}catch(p){console.error("Auto-save error:",p),v(!1)}},vn=()=>{const p={...g,savedAt:Date.now()};localStorage.setItem("estimatix_multi_calculator_draft",JSON.stringify(p)),dt(Date.now())},mt=()=>{const p=localStorage.getItem("estimatix_multi_calculator_draft");if(p){const B=JSON.parse(p);_(B),Ve(!1)}},bi=()=>{localStorage.removeItem("estimatix_multi_calculator_draft"),dt(null),Ve(!1)};w.useEffect(()=>{const p=localStorage.getItem("estimatix_multi_calculator_draft");if(p)try{const B=JSON.parse(p);B.items&&B.items.length>0&&(dt(B.savedAt),Ve(!0))}catch(B){console.error("Failed to load draft:",B)}},[]),w.useEffect(()=>{if(g.items.length>0||g.customerName||g.customerPhone){const p=setTimeout(()=>{vn()},2e3);return()=>clearTimeout(p)}},[g]);const jn=p=>{_(B=>({...B,items:B.items.filter(q=>q.id!==p)}))},Nn=(p,B)=>{_(q=>({...q,items:q.items.map(F=>{if(F.id===p){const $=F.accessories.includes(B)?F.accessories.filter(P=>P!==B):[...F.accessories,B];return{...F,accessories:$}}return F})}))};w.useEffect(()=>{let p=0,B=0,q=0;const F=g.items.map(Te=>{const tt=Te.width*Te.height*Te.quantity,Ta=ce(Te.width,Te.height,Te.frameType,Te.quantity),$t=tt*Y.glassRatePerM2,tl=Ta*Y.aluminiumRatePerKg,za=Te.accessories.length*Y.accessoryRatePerItem*Te.quantity,yi=$t+tl+za,vi=yi*(Y.laborChargePercent/100),ji=yi+vi;return p+=tt,B+=Ta,q+=yi,{...Te,glassArea:tt,frameWeight:Ta,glassCost:$t,frameCost:tl,accessoryCost:za,laborCost:vi,itemTotal:ji}}),$=q*(Y.laborChargePercent/100),P=q*(Y.companyMarkupPercent/100),Re=q+$+P,Vt=Re*(Y.gstPercent/100),et=Re+Vt;_(Te=>({...Te,items:F,totalGlassArea:p,totalFrameWeight:B,subtotal:q,laborCharges:$+P,gst:Vt,grandTotal:et}))},[g.items.length,g.items.map(p=>`${p.width}-${p.height}-${p.quantity}-${p.glassType}-${p.frameType}-${p.accessories.length}`).join(","),Y]);const vl=async()=>{if(!d?.uid){alert("Please log in to save quotations");return}if(!g.customerName||!g.customerPhone){alert("Please fill in customer name and phone number");return}if(g.items.length===0){alert("Please add at least one item");return}h(!0);try{const p=g.items.map(F=>{const $=F.width*F.height/144,P=$*.092903,Re=Y.glassRatePerM2;return{...F,areaInSqFt:$,areaInM2:P,rate:Re,itemTotal:P*Re*F.quantity}}),B={quotationId:g.quotationId,userId:d.uid,customerName:g.customerName,customerPhone:g.customerPhone,customerEmail:g.customerEmail||"",customerAddress:"",items:p,totalGlassArea:g.totalGlassArea,totalFrameWeight:g.totalFrameWeight,subtotal:g.subtotal,laborCharges:g.laborCharges,gst:g.gst,grandTotal:g.grandTotal,status:"draft",notes:"Quotation created from Multi-Item Calculator"},q=await ci.saveQuotation(B);console.log("Quotation saved successfully with ID:",q),alert(`✅ Quotation ${g.quotationId} saved successfully to Firebase!`),xi()}catch(p){console.error("Error saving quotation:",p),alert("❌ Failed to save quotation. Please try again.")}finally{h(!1)}},xi=async()=>{if(d?.uid)try{const p=await ci.getUserQuotations(d.uid,20);f(p)}catch(p){console.error("Error loading quotations:",p)}};w.useEffect(()=>{xi()},[d?.uid]);const jl=async()=>{u(!0);try{if(!g.customerName||!g.customerPhone){alert("Please fill in customer name and phone number before generating PDF"),u(!1);return}if(g.items.length===0){alert("Please add at least one item before generating PDF"),u(!1);return}const p=g.items.map((Re,Vt)=>{const et=Re.width*Re.height/144,Te=et*.092903,tt=Y.glassRatePerM2;return{name:Re.name||`Item ${Vt+1}`,type:Re.type,width:Re.width,height:Re.height,area:et,rate:tt,total:Te*tt*Re.quantity}}),B={invoiceNumber:g.quotationId||`QUOT-${Date.now()}`,date:g.createdAt?new Date(g.createdAt):new Date,customerName:g.customerName,customerPhone:g.customerPhone,customerEmail:g.customerEmail||"N/A",customerAddress:"",items:p,subtotal:g.subtotal||0,tax:g.gst||0,grandTotal:g.grandTotal||0,notes:`Total Glass Area: ${g.totalGlassArea.toFixed(2)} sq.ft
Total Frame Weight: ${g.totalFrameWeight.toFixed(2)} kg
Labor Charges: Rs. ${g.laborCharges.toLocaleString("en-IN",{minimumFractionDigits:2})}`,termsAndConditions:`1. Prices are valid for 30 days
2. Payment terms: 50% advance, 50% on completion
3. Installation charges may apply
4. Prices subject to change without notice`};console.log("Quotation data prepared:",B);let q="";try{console.log("Creating share link for quotation:",g.quotationId),q=await xh.createShareLink(g.quotationId,{readOnly:!0,expiresInDays:90,isPublic:!0,allowedUsers:[]}),console.log("Share link created:",q)}catch(Re){console.warn("Could not create share link for QR code (PDF will generate without QR):",Re)}console.log("Generating PDF with data:",{invoiceNumber:B.invoiceNumber,itemCount:B.items.length,hasShareLink:!!q});const F=await bh.generateQuotationPDF(B,{branding:{companyName:"Venkatesh Aluminium & Glass",address:"Ram Nagar Dhule",phone:"888888999",email:"shubhamj0212@gmail.com"},qrCode:q?{url:q,label:"Scan to View Online"}:void 0});console.log("PDF generated successfully, blob size:",F.size);const $=URL.createObjectURL(F),P=document.createElement("a");P.href=$,P.download=`Quotation_${g.quotationId}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL($),alert(`PDF generated successfully: ${P.download}`)}catch(p){console.error("Detailed PDF generation error:",{error:p,message:p instanceof Error?p.message:"Unknown error",stack:p instanceof Error?p.stack:void 0});const B=p instanceof Error?p.message:"Unknown error";alert(`Failed to generate PDF: ${B}

Please check the console for details.`)}finally{u(!1)}};return l.jsxs(l.Fragment,{children:[Pe&&l.jsx("div",{className:"draft-modal-overlay",onClick:bi,children:l.jsxs("div",{className:"draft-modal-card",onClick:p=>p.stopPropagation(),children:[l.jsx("div",{className:"draft-modal-title",children:"🕐 Restore Saved Draft?"}),l.jsx("p",{children:"We found a previously saved multi-item quotation draft. Would you like to continue where you left off?"}),wt&&l.jsxs("small",{children:["Saved: ",new Date(wt).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})]}),l.jsxs("div",{className:"d-flex",children:[l.jsx("button",{className:"draft-btn-discard",onClick:bi,children:"Discard"}),l.jsx("button",{className:"draft-btn-restore",onClick:mt,children:"Restore Draft"})]})]})}),l.jsx("style",{children:`
        /* Improved label readability */
        .form-label {
          font-weight: 600 !important;
          color: #1a202c !important;
          font-size: 0.875rem !important;
          margin-bottom: 0.5rem !important;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        [data-bs-theme="dark"] .form-label {
          color: #e2e8f0 !important;
        }
        
        /* Special styling for icon labels */
        .form-label i {
          color: #2196f3 !important;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 -5px 20px rgba(0,123,255,0.3); }
          50% { box-shadow: 0 -5px 30px rgba(0,123,255,0.6); }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .item-card-dragging {
          opacity: 0.5;
          border: 2px dashed #007bff;
        }
        
        .auto-calc-field {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%) !important;
          border-left: 4px solid #2196f3 !important;
          font-weight: 600 !important;
          color: #0d47a1 !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        /* Dark mode support for auto-calc field */
        [data-bs-theme="dark"] .auto-calc-field {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%) !important;
          color: #90caf9 !important;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          border-left: 4px solid #64b5f6 !important;
        }
        
        /* Improved card header readability */
        .card-header h6 {
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          color: #1a202c !important;
        }
        
        [data-bs-theme="dark"] .card-header h6 {
          color: #2d3748 !important;
        }
        
        .card-header .badge {
          font-size: 0.875rem !important;
          padding: 0.375rem 0.625rem !important;
          font-weight: 700 !important;
        }
        
        .card-header small {
          font-weight: 500 !important;
        }
        
        /* ===== PREMIUM GLASSMORPHIC SUMMARY STYLES ===== */
        .premium-summary-container {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          backdrop-filter: blur(16px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
                      0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .premium-summary-header {
          background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .premium-summary-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .premium-timestamp {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }
        
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }
        
        .premium-summary-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.75rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
        }
        
        .premium-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .premium-card-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          background: linear-gradient(135deg, currentColor, currentColor);
          -webkit-background-clip: text;
          background-clip: text;
          animation: countUp 1s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-card-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        
        .premium-card-sub {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        .premium-card-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover .premium-card-glow {
          opacity: 1;
          animation: glow 1.5s infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor; }
        }
        
        /* Card Color Variants */
        .premium-card-blue {
          border-color: rgba(59, 130, 246, 0.3);
        }
        .premium-card-blue .premium-card-icon,
        .premium-card-blue .premium-card-value {
          color: #3b82f6;
        }
        .premium-card-blue .premium-card-glow {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
        }
        
        .premium-card-cyan {
          border-color: rgba(6, 182, 212, 0.3);
        }
        .premium-card-cyan .premium-card-icon,
        .premium-card-cyan .premium-card-value {
          color: #06b6d4;
        }
        .premium-card-cyan .premium-card-glow {
          background: linear-gradient(90deg, #06b6d4, #0891b2);
        }
        
        .premium-card-amber {
          border-color: rgba(245, 158, 11, 0.3);
        }
        .premium-card-amber .premium-card-icon,
        .premium-card-amber .premium-card-value {
          color: #f59e0b;
        }
        .premium-card-amber .premium-card-glow {
          background: linear-gradient(90deg, #f59e0b, #d97706);
        }
        
        .premium-card-emerald {
          border-color: rgba(16, 185, 129, 0.3);
        }
        .premium-card-emerald .premium-card-icon,
        .premium-card-emerald .premium-card-value {
          color: #10b981;
        }
        .premium-card-emerald .premium-card-glow {
          background: linear-gradient(90deg, #10b981, #059669);
        }
        
        /* Insights Row */
        .premium-insights-row {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .premium-insight {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .premium-insight strong {
          color: white;
          font-weight: 700;
        }
        
        /* Breakdown Section */
        .premium-breakdown-section {
          padding: 2rem;
        }
        
        .premium-breakdown-title {
          color: white;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .premium-breakdown-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .premium-breakdown-item {
          position: relative;
        }
        
        .premium-breakdown-bar {
          height: 8px;
          border-radius: 8px;
          transition: width 1s ease-out;
          margin-bottom: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .premium-breakdown-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }
        
        .premium-breakdown-label {
          font-weight: 600;
        }
        
        .premium-breakdown-value {
          font-weight: 700;
          color: white;
        }
        
        .premium-breakdown-percent {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
          }
          
          .premium-summary-header {
            padding: 1rem;
          }
          
          .premium-summary-title {
            font-size: 1.25rem;
          }
          
          .premium-insights-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* ===== END PREMIUM STYLES ===== */
        
        /* ===== DRAFT MANAGEMENT STYLES ===== */
        .draft-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        .draft-modal-card {
          background: linear-gradient(135deg, rgba(30, 30, 40, 0.95) 0%, rgba(20, 20, 30, 0.98) 100%);
          border: 1px solid rgba(100, 100, 255, 0.3);
          border-radius: 16px;
          padding: 32px;
          max-width: 480px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(100, 100, 255, 0.2);
          animation: slideUp 0.3s ease-out;
        }

        .draft-modal-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .draft-modal-card p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .draft-modal-card small {
          display: block;
          color: rgba(100, 200, 255, 0.9);
          font-size: 13px;
          margin-bottom: 24px;
          padding: 8px 12px;
          background: rgba(100, 150, 255, 0.1);
          border-radius: 6px;
          border-left: 3px solid rgba(100, 150, 255, 0.6);
        }

        .draft-modal-card .d-flex {
          gap: 12px;
        }

        .draft-btn-discard {
          flex: 1;
          padding: 12px 24px;
          background: rgba(255, 100, 100, 0.15);
          border: 1px solid rgba(255, 100, 100, 0.4);
          color: #ff6666;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .draft-btn-discard:hover {
          background: rgba(255, 100, 100, 0.25);
          border-color: rgba(255, 100, 100, 0.6);
          transform: translateY(-1px);
        }

        .draft-btn-restore {
          flex: 1;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .draft-btn-restore:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .draft-control-btn {
          padding: 8px 16px;
          background: rgba(100, 150, 255, 0.15);
          border: 1px solid rgba(100, 150, 255, 0.3);
          color: rgba(100, 180, 255, 0.95);
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .draft-control-btn:hover {
          background: rgba(100, 150, 255, 0.25);
          border-color: rgba(100, 150, 255, 0.5);
          transform: translateY(-1px);
        }

        .draft-indicator {
          padding: 6px 12px;
          background: rgba(76, 175, 80, 0.15);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: rgba(76, 200, 80, 0.95);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          animation: pulse 2s infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        /* ===== END DRAFT MANAGEMENT STYLES ===== */
        
        .ai-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        
        .ai-modal-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeInScale 0.4s ease;
        }
        
        .confidence-bar {
          background: #e9ecef;
          border-radius: 10px;
          height: 20px;
          overflow: hidden;
        }
        
        .confidence-fill {
          background: linear-gradient(90deg, #28a745, #20c997);
          height: 100%;
          transition: width 0.5s ease;
        }
        
        .ai-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        
        .ai-tag.glass { background: #cfe2ff; color: #084298; }
        .ai-tag.frame { background: #d3d3d3; color: #495057; }
        .ai-tag.size { background: #fff3cd; color: #997404; }
        .ai-tag.mode { background: #d1e7dd; color: #0f5132; }
      `}),W&&Q&&l.jsx("div",{className:"ai-modal-backdrop",onClick:()=>ee(!1),children:l.jsxs("div",{className:"ai-modal-content",onClick:p=>p.stopPropagation(),children:[l.jsx("div",{className:"p-4 border-bottom bg-gradient",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:l.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[l.jsxs("div",{className:"d-flex align-items-center text-white",children:[l.jsx("div",{className:"me-3",style:{fontSize:"2.5rem"},children:"🤖"}),l.jsxs("div",{children:[l.jsx("h4",{className:"mb-1",children:"Estimatix AI Assistant"}),l.jsx("small",{className:"opacity-75",children:"Intelligent Estimation Engine v1.4"})]})]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>ee(!1),children:l.jsx("i",{className:"bi bi-x-lg"})})]})}),l.jsxs("div",{className:"p-4",children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[l.jsx("span",{className:"fw-bold",children:"🔮 AI Confidence Score"}),l.jsxs("span",{className:"badge bg-success",children:[Q.confidence,"%"]})]}),l.jsx("div",{className:"confidence-bar",children:l.jsx("div",{className:"confidence-fill",style:{width:`${Q.confidence}%`}})}),l.jsx("small",{className:"text-muted",children:"Based on training data and similar project patterns"})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"✨ Recommended Setup"}),l.jsxs("div",{className:"bg-light p-3 rounded",children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("span",{className:"ai-tag size",children:["📏 ",Q.preset.size.toUpperCase()," (",Q.preset.width,"m × ",Q.preset.height,"m)"]}),l.jsxs("span",{className:"ai-tag mode",children:["🎯 ",Q.mode.charAt(0).toUpperCase()+Q.mode.slice(1)," Mode"]})]}),l.jsx("div",{className:"mb-2",children:l.jsxs("span",{className:"ai-tag glass",children:[l.jsx("i",{className:"bi bi-square me-1"}),Q.preset.glassType]})}),l.jsx("div",{className:"mb-2",children:l.jsxs("span",{className:"ai-tag frame",children:[l.jsx("i",{className:"bi bi-grid-3x3 me-1"}),Q.preset.frameType]})}),l.jsxs("div",{children:[l.jsx("strong",{className:"d-block mb-2",children:"Accessories:"}),Q.preset.accessories.map((p,B)=>l.jsx("span",{className:"badge bg-secondary me-1 mb-1",children:p},B))]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"💰 Cost Preview (Estimated)"}),l.jsx("div",{className:"card",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Material Cost:"}),l.jsxs("strong",{children:["₹ ",Q.estimatedCost.material.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Labor Estimate:"}),l.jsxs("strong",{children:["₹ ",Q.estimatedCost.labor.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsxs("span",{children:["GST (",Y.gstPercent,"%):"]}),l.jsxs("strong",{children:["₹ ",Q.estimatedCost.gst.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsx("hr",{}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("strong",{children:"Total Estimate:"}),l.jsxs("strong",{className:"text-success fs-5",children:["₹ ",Q.estimatedCost.total.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"💡 AI Insights"}),l.jsx("div",{className:"alert alert-info mb-0",children:l.jsx("ul",{className:"mb-0 ps-3",children:Q.insights.map((p,B)=>l.jsx("li",{className:"mb-2",children:p},B))})})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"alert alert-success",children:[l.jsx("strong",{children:"🎯 Perfect For:"})," ",Q.preset.useCase]})}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-primary flex-grow-1",onClick:Ca,children:[l.jsx("i",{className:"bi bi-check-circle me-2"}),"Apply AI Estimation"]}),l.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>ee(!1),children:[l.jsx("i",{className:"bi bi-x-circle me-2"}),"Cancel"]})]}),l.jsxs("div",{className:"text-center mt-3",children:[l.jsx("small",{className:"text-muted",children:"Was this estimation helpful?"}),l.jsxs("div",{className:"mt-2",children:[l.jsxs("button",{className:"btn btn-sm btn-outline-success me-2",children:[l.jsx("i",{className:"bi bi-hand-thumbs-up"})," Accurate"]}),l.jsxs("button",{className:"btn btn-sm btn-outline-warning",children:[l.jsx("i",{className:"bi bi-hand-thumbs-down"})," Needs Improvement"]})]})]})]})]})}),l.jsxs("div",{className:"container-fluid py-4",children:[l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"h3 text-primary mb-1",children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Multi-Item Quotation",T&&l.jsx("span",{className:"badge bg-info ms-2 small",children:"Auto-saving..."})]}),l.jsxs("p",{className:"text-muted mb-0",children:["Quotation ID: ",l.jsx("strong",{className:"text-primary",children:g.quotationId})," | Status: ",l.jsx("span",{className:`badge bg-${g.status==="draft"?"secondary":g.status==="finalized"?"success":"info"}`,children:g.status?.toUpperCase()})]}),l.jsxs("p",{className:"text-muted small mb-0",children:["Created: ",new Date(g.createdAt).toLocaleDateString()," | Valid Until: ",l.jsxs("span",{className:new Date(g.validUntil||"")<new Date?"text-danger fw-bold":"text-success",children:[g.validUntil?new Date(g.validUntil).toLocaleDateString():"N/A",new Date(g.validUntil||"")<new Date&&" ⚠️ EXPIRED"]})]})]}),l.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[l.jsxs("button",{className:"btn btn-outline-primary",onClick:el,children:[l.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add Item"]}),l.jsxs("div",{className:"btn-group",children:[l.jsxs("button",{className:"btn btn-warning",onClick:()=>{const p=g.items[g.items.length-1];p?la(p.id,p.type):alert("Please add an item first!")},disabled:g.items.length===0,title:"AI-Assisted Estimation for last item",children:[l.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"💡 AI Estimate"]}),l.jsx("button",{className:"btn btn-warning dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown",title:"Change AI Mode"}),l.jsxs("ul",{className:"dropdown-menu",children:[l.jsx("li",{children:l.jsx("h6",{className:"dropdown-header",children:"🤖 AI Optimization Mode"})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${U==="residential"?"active":""}`,onClick:()=>H("residential"),children:["🏠 Residential",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Cost-efficient materials"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${U==="commercial"?"active":""}`,onClick:()=>H("commercial"),children:["🏢 Commercial",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Maximum durability"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${U==="thermal"?"active":""}`,onClick:()=>H("thermal"),children:["🌡️ Thermal Efficiency",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Insulation optimized"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${U==="premium"?"active":""}`,onClick:()=>H("premium"),children:["💎 Premium Aesthetic",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Superior quality"})]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider"})}),l.jsx("li",{children:l.jsxs("button",{className:"dropdown-item text-primary",onClick:()=>Fe(!De),children:[l.jsx("i",{className:"bi bi-clock-history me-2"}),"View AI History (",le.length,")"]})})]})]}),l.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>M(!S),children:[l.jsx("i",{className:"bi bi-bookmark-star me-1"}),"Templates (",y.length,")"]}),l.jsx("button",{className:"btn btn-success",onClick:vl,disabled:o||g.items.length===0,children:o?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-cloud-check me-1"}),"Save to Firebase"]})}),l.jsx("button",{className:"btn btn-danger",onClick:jl,disabled:c||g.items.length===0,children:c?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Generating PDF..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-1"}),"Generate PDF"]})})]})]})})}),S&&y.length>0&&l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card border-primary",children:[l.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-bookmark-star me-2"}),"Item Templates"]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>M(!1),children:l.jsx("i",{className:"bi bi-x"})})]}),l.jsx("div",{className:"card-body",children:l.jsx("div",{className:"row g-3",children:y.map(p=>l.jsx("div",{className:"col-md-4",children:l.jsx("div",{className:"card h-100",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[l.jsx("h6",{className:"card-title mb-0",children:p.name}),l.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:B=>{B.stopPropagation(),hi(p.id)},title:"Delete template",children:l.jsx("i",{className:"bi bi-trash"})})]}),l.jsxs("p",{className:"card-text small text-muted mb-2",children:[p.width,"m × ",p.height,"m | ",p.glassType]}),l.jsxs("button",{className:"btn btn-sm btn-primary w-100",onClick:()=>xn(p),children:[l.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add to Quotation"]})]})})},p.id))})})]})})}),De&&le.length>0&&l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card border-warning",children:[l.jsxs("div",{className:"card-header bg-warning text-dark d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-clock-history me-2"}),"🤖 AI Estimation History"]}),l.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Fe(!1),children:l.jsx("i",{className:"bi bi-x"})})]}),l.jsx("div",{className:"card-body",children:l.jsx("div",{className:"row g-3",children:le.map(p=>l.jsx("div",{className:"col-md-6",children:l.jsx("div",{className:"card h-100 border-start border-warning border-4",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[l.jsxs("h6",{className:"card-title mb-0",children:[p.type==="window"?"🪟":"🚪"," ",p.itemName]}),l.jsx("span",{className:"badge bg-secondary",children:p.mode})]}),l.jsxs("p",{className:"card-text small mb-2",children:[l.jsx("strong",{children:"Dimensions:"})," ",p.dimensions,l.jsx("br",{}),l.jsx("strong",{children:"Applied:"})," ",new Date(p.appliedAt).toLocaleString(),l.jsx("br",{}),l.jsx("strong",{children:"Confidence:"})," ",p.result.confidence,"%"]}),l.jsx("div",{className:"d-flex gap-2",children:l.jsxs("button",{className:"btn btn-sm btn-outline-primary flex-grow-1",onClick:()=>{Z(p.result),ee(!0)},children:[l.jsx("i",{className:"bi bi-eye me-1"}),"View Details"]})})]})})},p.id))})})]})})}),l.jsx("div",{className:"row mb-3",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2",children:[wt&&l.jsxs("span",{className:"draft-indicator",children:["💾 Draft saved ",new Date(wt).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),l.jsx("button",{className:"draft-control-btn",onClick:vn,children:"💾 Save Template"}),wt&&l.jsx("button",{className:"draft-control-btn",onClick:bi,children:"🗑️ Clear Template"})]})})}),l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header bg-info text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-person-fill me-2"}),"Customer Information"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Customer Name *"}),l.jsx("input",{type:"text",className:"form-control",value:g.customerName,onChange:p=>_(B=>({...B,customerName:p.target.value})),placeholder:"Enter customer name"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Phone Number"}),l.jsx("input",{type:"tel",className:"form-control",value:g.customerPhone,onChange:p=>_(B=>({...B,customerPhone:p.target.value})),placeholder:"Enter phone number"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Email Address"}),l.jsx("input",{type:"email",className:"form-control",value:g.customerEmail,onChange:p=>_(B=>({...B,customerEmail:p.target.value})),placeholder:"Enter email address"})]})]})})]})})}),l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-list-ul me-2"}),"Quotation Items (",g.items.length,")"]}),g.items.length===0&&l.jsxs("button",{className:"btn btn-light btn-sm",onClick:el,children:[l.jsx("i",{className:"bi bi-plus me-1"}),"Add First Item"]})]}),l.jsx("div",{className:"card-body",children:g.items.length===0?l.jsxs("div",{className:"text-center py-5 text-muted",children:[l.jsx("i",{className:"bi bi-inbox display-4 d-block mb-3"}),l.jsx("h5",{children:"No items added yet"}),l.jsx("p",{children:"Add your first window or door to start building the quotation"})]}):l.jsx("div",{className:"row g-4",children:g.items.map((p,B)=>{const q=We(p);return l.jsx("div",{className:"col-12",draggable:!0,onDragStart:()=>gi(p.id),onDragOver:Vs,onDrop:()=>yn(p.id),style:{cursor:"move"},children:l.jsxs("div",{className:"card border-secondary shadow-sm",children:[l.jsxs("div",{className:"card-header bg-light d-flex justify-content-between align-items-center",children:[l.jsxs("h6",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-grip-vertical me-2 text-muted",title:"Drag to reorder"}),l.jsx("span",{className:"badge bg-secondary me-2",children:B+1}),p.name,p.glassArea&&p.glassArea>0&&l.jsxs("small",{className:"text-muted ms-2",children:["(",p.glassArea.toFixed(2)," m² | ",p.frameWeight?.toFixed(2)," kg)"]})]}),l.jsxs("div",{className:"btn-group btn-group-sm",children:[l.jsxs("button",{className:"btn btn-warning",onClick:()=>la(p.id,p.type),title:"AI-Assisted Estimation - Auto-fill with smart defaults",children:[l.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"Estimate"]}),l.jsx("button",{className:"btn btn-outline-primary",onClick:()=>pi(p.id),title:"View Cost Breakdown",children:l.jsx("i",{className:"bi bi-receipt"})}),l.jsx("button",{className:"btn btn-outline-info",onClick:()=>fi(p.id),title:"Duplicate Item",children:l.jsx("i",{className:"bi bi-files"})}),l.jsx("button",{className:"btn btn-outline-success",onClick:()=>ia(p),title:"Save as Template",children:l.jsx("i",{className:"bi bi-bookmark"})}),l.jsx("button",{className:"btn btn-outline-danger",onClick:()=>jn(p.id),title:"Delete Item",children:l.jsx("i",{className:"bi bi-trash"})})]})]}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-3",children:[l.jsx("label",{className:"form-label",children:"Item Name"}),l.jsx("input",{type:"text",className:"form-control",value:p.name,onChange:F=>Rt(p.id,"name",F.target.value)})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Type"}),l.jsxs("select",{className:"form-select",value:p.type,onChange:F=>Rt(p.id,"type",F.target.value),children:[l.jsx("option",{value:"window",children:"Window"}),l.jsx("option",{value:"door",children:"Door"})]})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Width (m)"}),l.jsx("input",{type:"number",className:"form-control",value:p.width,onChange:F=>Rt(p.id,"width",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Height (m)"}),l.jsx("input",{type:"number",className:"form-control",value:p.height,onChange:F=>Rt(p.id,"height",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),l.jsxs("div",{className:"col-md-1",children:[l.jsx("label",{className:"form-label",children:"Qty"}),l.jsx("input",{type:"number",className:"form-control",value:p.quantity,onChange:F=>Rt(p.id,"quantity",parseInt(F.target.value)||1),min:"1"})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsxs("label",{className:"form-label",children:[l.jsx("i",{className:"bi bi-calculator-fill text-primary me-1"}),"Area (Auto)"]}),l.jsx("input",{type:"text",className:"form-control auto-calc-field",value:`${(p.width*p.height*p.quantity).toFixed(2)} m²`,readOnly:!0,title:"Auto-calculated: Width × Height × Quantity"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Glass Type"}),l.jsx("select",{className:"form-select",value:p.glassType,onChange:F=>Rt(p.id,"glassType",F.target.value),children:I.map(F=>l.jsx("option",{value:F,children:F},F))})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Frame Type"}),l.jsx("select",{className:"form-select",value:p.frameType,onChange:F=>Rt(p.id,"frameType",F.target.value),children:je.map(F=>l.jsx("option",{value:F,children:F},F))})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Accessories"}),l.jsx("div",{className:"border rounded p-2",style:{maxHeight:"100px",overflowY:"auto"},children:ie.map(F=>l.jsxs("div",{className:"form-check form-check-inline",children:[l.jsx("input",{className:"form-check-input",type:"checkbox",checked:p.accessories.includes(F),onChange:()=>Nn(p.id,F)}),l.jsx("label",{className:"form-check-label small",children:F})]},F))})]}),l.jsxs("div",{className:"col-12",children:[l.jsx("label",{className:"form-label",children:"Notes"}),l.jsx("textarea",{className:"form-control",rows:2,value:p.notes,onChange:F=>Rt(p.id,"notes",F.target.value),placeholder:"Add any special notes or requirements..."})]}),q.length>0&&l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"alert alert-info py-2 mb-0",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"bi bi-lightbulb me-2"}),"Smart Suggestions:"]}),l.jsx("ul",{className:"mb-0 mt-1 small",children:q.map((F,$)=>l.jsx("li",{children:F},$))})]})}),p.showBreakdown&&p.itemTotal&&l.jsx("div",{className:"col-12",children:l.jsx("div",{className:"card bg-light",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("h6",{className:"card-title mb-3",children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Cost Breakdown"]}),l.jsxs("div",{className:"row g-2",children:[l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Glass Cost:"}),l.jsxs("strong",{children:["₹",p.glassCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Frame Cost:"}),l.jsxs("strong",{children:["₹",p.frameCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Accessories:"}),l.jsxs("strong",{children:["₹",p.accessoryCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Labor:"}),l.jsxs("strong",{children:["₹",p.laborCost?.toFixed(2)]})]})}),l.jsxs("div",{className:"col-12",children:[l.jsx("hr",{className:"my-2"}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("strong",{children:"Item Total:"}),l.jsxs("strong",{className:"text-success",children:["₹",p.itemTotal?.toFixed(2)]})]})]})]})]})})})]})})]})},p.id)})})})]})})}),g.items.length>0&&l.jsx("div",{className:"row mb-5",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"premium-summary-container",children:[l.jsx("div",{className:"premium-summary-header",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("h2",{className:"premium-summary-title",children:[l.jsx("i",{className:"bi bi-bar-chart-line-fill me-2"}),"Quotation Summary",l.jsx("span",{className:"badge bg-light text-dark ms-2 animate-pulse",style:{fontSize:"0.7rem"},children:"Live"})]}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsxs("span",{className:"premium-timestamp",children:[l.jsx("i",{className:"bi bi-clock me-1"}),"Last updated: ",new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:jl,title:"Export Summary as PDF",children:l.jsx("i",{className:"bi bi-download"})})]})]})}),l.jsxs("div",{className:"premium-summary-grid",children:[l.jsxs("div",{className:"premium-summary-card premium-card-blue","data-metric":"items",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-receipt-cutoff"})}),l.jsx("div",{className:"premium-card-value",children:g.items.length}),l.jsx("div",{className:"premium-card-label",children:"Total Items"}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-cyan","data-metric":"area",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-grid-3x3-gap"})}),l.jsx("div",{className:"premium-card-value",children:g.totalGlassArea.toFixed(2)}),l.jsx("div",{className:"premium-card-label",children:"Glass Area (m²)"}),l.jsxs("div",{className:"premium-card-sub",children:["Avg: ",(g.totalGlassArea/g.items.length).toFixed(2)," m² per item"]}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-amber","data-metric":"weight",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-speedometer2"})}),l.jsx("div",{className:"premium-card-value",children:g.totalFrameWeight.toFixed(2)}),l.jsx("div",{className:"premium-card-label",children:"Frame Weight (kg)"}),l.jsxs("div",{className:"premium-card-sub",children:[(g.totalFrameWeight/g.totalGlassArea).toFixed(2)," kg/m²"]}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-emerald","data-metric":"total",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-currency-rupee"})}),l.jsxs("div",{className:"premium-card-value",children:["₹",g.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),l.jsx("div",{className:"premium-card-label",children:"Grand Total"}),l.jsxs("div",{className:"premium-card-sub",children:["₹",(g.grandTotal/g.totalGlassArea).toFixed(0),"/m²"]}),l.jsx("div",{className:"premium-card-glow"})]})]}),l.jsxs("div",{className:"premium-insights-row",children:[l.jsxs("div",{className:"premium-insight",children:[l.jsx("i",{className:"bi bi-lightbulb-fill text-warning me-2"}),l.jsxs("span",{children:["Based on ",l.jsxs("strong",{children:[g.items.length," items"]}),", average cost per sq.ft is ",l.jsxs("strong",{children:["₹",(g.grandTotal/g.totalGlassArea*.0929).toFixed(2)]})]})]}),l.jsxs("div",{className:"premium-insight",children:[l.jsx("i",{className:"bi bi-graph-up text-success me-2"}),l.jsxs("span",{children:["Material efficiency: ",l.jsxs("strong",{children:[(g.totalGlassArea/(g.totalGlassArea+5)*100).toFixed(1),"%"]})]})]})]}),l.jsxs("div",{className:"premium-breakdown-section",children:[l.jsxs("h6",{className:"premium-breakdown-title",children:[l.jsx("i",{className:"bi bi-pie-chart-fill me-2"}),"Detailed Cost Breakdown"]}),l.jsxs("div",{className:"premium-breakdown-grid",children:[l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.subtotal/g.grandTotal*100}%`,background:"linear-gradient(90deg, #3b82f6, #2563eb)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsx("span",{className:"premium-breakdown-label",children:"Material Cost"}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.subtotal.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.subtotal/g.grandTotal*100).toFixed(1),"%"]})]})]}),l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.laborCharges/g.grandTotal*100}%`,background:"linear-gradient(90deg, #f59e0b, #d97706)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsx("span",{className:"premium-breakdown-label",children:"Labor & Markup"}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.laborCharges.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.laborCharges/g.grandTotal*100).toFixed(1),"%"]})]})]}),l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.gst/g.grandTotal*100}%`,background:"linear-gradient(90deg, #10b981, #059669)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsxs("span",{className:"premium-breakdown-label",children:["GST (",Y.gstPercent,"%)"]}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.gst.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.gst/g.grandTotal*100).toFixed(1),"%"]})]})]})]})]})]})})}),g.items.length>0&&l.jsx("div",{className:"position-fixed bottom-0 start-0 end-0 bg-dark text-white shadow-lg p-3",style:{zIndex:1040,animation:"pulse 2s infinite",boxShadow:"0 -5px 20px rgba(0,123,255,0.3)"},children:l.jsx("div",{className:"container-fluid",children:l.jsxs("div",{className:"row align-items-center",children:[l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsx("div",{className:"fw-bold fs-5",children:g.items.length}),l.jsx("small",{children:"Items"})]}),l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsxs("div",{className:"fw-bold fs-5",children:[g.totalGlassArea.toFixed(2)," m²"]}),l.jsx("small",{children:"Total Area"})]}),l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsxs("div",{className:"fw-bold fs-5",children:[g.totalFrameWeight.toFixed(2)," kg"]}),l.jsx("small",{children:"Frame Weight"})]}),l.jsxs("div",{className:"col-md-3 text-center",children:[l.jsxs("div",{className:"fw-bold fs-4 text-warning",children:["₹ ",g.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),l.jsx("small",{children:"Estimated Cost"})]}),l.jsx("div",{className:"col-md-3 text-end",children:l.jsxs("div",{className:"btn-group",children:[l.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>{const p=`Hi! Here's quotation ${g.quotationId} for ${g.customerName}:

Total Items: ${g.items.length}
Total Amount: ₹${g.grandTotal.toFixed(2)}

Please review and let us know if you have any questions.`,B=`https://wa.me/${g.customerPhone.replace(/\D/g,"")}?text=${encodeURIComponent(p)}`;window.open(B,"_blank")},disabled:!g.customerPhone,children:[l.jsx("i",{className:"bi bi-whatsapp me-1"}),"WhatsApp"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{const p=`Quotation ${g.quotationId} - ${g.customerName}`,B=`Dear ${g.customerName},

Please find attached the quotation details:

Quotation ID: ${g.quotationId}
Total Items: ${g.items.length}
Total Amount: ₹${g.grandTotal.toFixed(2)}

Thank you for your interest.

Best Regards,
Venkatesh Aluminium & Glass`,q=`mailto:${g.customerEmail}?subject=${encodeURIComponent(p)}&body=${encodeURIComponent(B)}`;window.location.href=q},disabled:!g.customerEmail,children:[l.jsx("i",{className:"bi bi-envelope me-1"}),"Email"]}),l.jsxs("button",{className:"btn btn-danger btn-sm",onClick:jl,children:[l.jsx("i",{className:"bi bi-file-pdf me-1"}),"PDF"]})]})})]})})}),g.items.length>0&&l.jsx("div",{style:{height:"120px"}}),b.length>0&&l.jsx("div",{className:"row mt-5",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card shadow-sm",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-folder-open me-2"}),"Your Saved Quotations (",b.length,")"]})}),l.jsx("div",{className:"card-body p-0",children:l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover mb-0",children:[l.jsx("thead",{className:"table-light",children:l.jsxs("tr",{children:[l.jsx("th",{children:"Quotation ID"}),l.jsx("th",{children:"Customer"}),l.jsx("th",{children:"Phone"}),l.jsx("th",{children:"Items"}),l.jsx("th",{children:"Total Amount"}),l.jsx("th",{children:"Status"}),l.jsx("th",{children:"Created"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:b.map(p=>{const B=p.createdAt instanceof Object&&"toDate"in p.createdAt?p.createdAt.toDate():new Date(p.createdAt),q={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{className:"text-primary",children:p.quotationId})}),l.jsx("td",{children:p.customerName}),l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-telephone me-1"}),p.customerPhone]}),l.jsx("td",{children:l.jsxs("span",{className:"badge bg-secondary",children:[p.items.length," items"]})}),l.jsx("td",{children:l.jsxs("strong",{className:"text-success",children:["₹",p.grandTotal.toLocaleString()]})}),l.jsx("td",{children:l.jsx("span",{className:`badge bg-${q[p.status]}`,children:p.status.toUpperCase()})}),l.jsx("td",{children:l.jsx("small",{children:B.toLocaleDateString()})}),l.jsx("td",{children:l.jsxs("div",{className:"btn-group btn-group-sm",role:"group",children:[l.jsx("button",{className:"btn btn-outline-primary",title:"View",onClick:()=>{alert(`Viewing quotation ${p.quotationId}
Feature coming soon!`)},children:l.jsx("i",{className:"bi bi-eye"})}),l.jsx("button",{className:"btn btn-outline-danger",title:"Delete",onClick:async()=>{if(window.confirm(`Delete quotation ${p.quotationId}?`))try{p.id&&(await ci.deleteQuotation(p.id),alert("✅ Quotation deleted successfully!"),xi())}catch{alert("❌ Failed to delete quotation")}},children:l.jsx("i",{className:"bi bi-trash"})})]})})]},p.id)})})]})})}),l.jsx("div",{className:"card-footer text-muted",children:l.jsxs("small",{children:[l.jsx("i",{className:"bi bi-info-circle me-1"}),"All quotations are automatically synced with Firebase Firestore"]})})]})})})]})]})}function tx(){const{shareToken:d}=gp(),{user:c}=gt(),[u,o]=w.useState(null),[h,b]=w.useState(!0),[f,T]=w.useState("");if(w.useEffect(()=>{(async()=>{if(!d){T("Invalid share link"),b(!1);return}try{const N=await xh.getSharedQuote(d);N?o(N):T("Quote not found or link has expired")}catch(N){T("Error loading shared quote"),console.error(N)}finally{b(!1)}})()},[d]),h)return l.jsx("div",{className:"container py-5",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"spinner-border text-primary",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Loading..."})}),l.jsx("p",{className:"mt-3",children:"Loading shared quotation..."})]})});if(f)return l.jsx("div",{className:"container py-5",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"text-danger mb-3",children:l.jsx("i",{className:"bi bi-exclamation-triangle display-1"})}),l.jsx("h3",{className:"text-danger",children:"Access Denied"}),l.jsx("p",{className:"text-muted",children:f}),l.jsxs(pe,{to:"/",className:"btn btn-primary",children:[l.jsx("i",{className:"bi bi-house me-1"}),"Go to Dashboard"]})]})});if(!u)return null;const v=u.quotationData;return l.jsxs("div",{className:"min-vh-100 bg-light",children:[l.jsx("header",{className:"bg-white shadow-sm py-3",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"h5 mb-0",children:[l.jsx("i",{className:"bi bi-share me-2"}),"Shared Quotation"]}),l.jsxs("small",{className:"text-muted",children:["Shared by ",u.creatorEmail]})]}),l.jsxs("div",{className:"d-flex gap-2",children:[!u.readOnly&&c&&l.jsxs("span",{className:"badge bg-success",children:[l.jsx("i",{className:"bi bi-pencil me-1"}),"Collaborative Mode"]}),u.readOnly&&l.jsxs("span",{className:"badge bg-info",children:[l.jsx("i",{className:"bi bi-eye me-1"}),"Read Only"]}),l.jsxs(pe,{to:"/",className:"btn btn-sm btn-outline-primary",children:[l.jsx("i",{className:"bi bi-box-arrow-left me-1"}),"Exit"]})]})]})})}),l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsx("div",{className:"col-lg-8 mx-auto",children:l.jsxs("div",{className:"card shadow-sm",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-file-earmark-text me-2"}),"Quotation Details"]}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-download me-1"}),"Download PDF"]}),l.jsxs("button",{className:"btn btn-outline-light btn-sm",children:[l.jsx("i",{className:"bi bi-printer me-1"}),"Print"]})]})]})}),l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"row mb-4",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Quote Information"}),l.jsx("table",{className:"table table-sm table-borderless",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Quote ID:"})}),l.jsx("td",{children:v?.invoiceNumber||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Date:"})}),l.jsx("td",{children:v?.date?new Date(v.date).toLocaleDateString():"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Status:"})}),l.jsx("td",{children:l.jsx("span",{className:"badge bg-success",children:"Active"})})]})]})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Customer Details"}),l.jsx("table",{className:"table table-sm table-borderless",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Name:"})}),l.jsx("td",{children:v?.customerName||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Phone:"})}),l.jsx("td",{children:v?.customerPhone||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Email:"})}),l.jsx("td",{children:v?.customerEmail||"N/A"})]})]})})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h6",{className:"fw-bold text-primary mb-3",children:"Quotation Items"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover",children:[l.jsx("thead",{className:"table-light",children:l.jsxs("tr",{children:[l.jsx("th",{children:"#"}),l.jsx("th",{children:"Item Description"}),l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Dimensions"}),l.jsx("th",{children:"Area (sq.ft)"}),l.jsx("th",{children:"Rate"}),l.jsx("th",{children:"Amount"})]})}),l.jsx("tbody",{children:v?.items?.map((y,N)=>l.jsxs("tr",{children:[l.jsx("td",{children:N+1}),l.jsx("td",{children:y.name||`Item ${N+1}`}),l.jsx("td",{children:l.jsx("span",{className:`badge ${y.type==="window"?"bg-info":"bg-warning"}`,children:y.type})}),l.jsxs("td",{children:[y.width,'" × ',y.height,'"']}),l.jsx("td",{children:y.area?.toFixed(2)||"0.00"}),l.jsxs("td",{children:["₹",y.rate?.toFixed(2)||"0.00"]}),l.jsxs("td",{children:["₹",y.total?.toFixed(2)||"0.00"]})]},N))||l.jsx("tr",{children:l.jsx("td",{colSpan:7,className:"text-center text-muted",children:"No items found"})})})]})})]}),l.jsx("div",{className:"row",children:l.jsx("div",{className:"col-md-6 offset-md-6",children:l.jsx("table",{className:"table table-sm",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Subtotal:"})}),l.jsxs("td",{className:"text-end",children:["₹",v?.subtotal?.toFixed(2)||"0.00"]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Tax (if any):"})}),l.jsxs("td",{className:"text-end",children:["₹",v?.tax?.toFixed(2)||"0.00"]})]}),l.jsxs("tr",{className:"table-primary",children:[l.jsx("td",{children:l.jsx("strong",{children:"Grand Total:"})}),l.jsx("td",{className:"text-end",children:l.jsxs("strong",{children:["₹",v?.grandTotal?.toFixed(2)||"0.00"]})})]})]})})})}),v?.notes&&l.jsxs("div",{className:"mt-4",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Notes"}),l.jsx("p",{className:"text-muted",children:v.notes})]})]}),l.jsx("div",{className:"card-footer bg-light",children:l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-md-6",children:l.jsxs("small",{className:"text-muted",children:[l.jsx("i",{className:"bi bi-calendar me-1"}),"Shared on ",new Date(u.createdAt).toLocaleDateString(),u.expiresAt&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsx("i",{className:"bi bi-clock me-1"}),"Expires on ",new Date(u.expiresAt).toLocaleDateString()]})]})}),l.jsx("div",{className:"col-md-6 text-md-end",children:l.jsx("small",{className:"text-muted",children:"Powered by Estimatix"})})]})})]})})})})]})}const ax=({onComplete:d})=>{const c=pn(),[u,o]=w.useState(1),[h,b]=w.useState({companyName:"",companyAddress:"",companyPhone:"",companyEmail:""}),[f,T]=w.useState({defaultMargin:30,taxRate:18,currency:"INR"}),v=3,y=()=>{u<v&&o(u+1)},N=()=>{u>1&&o(u-1)},S=U=>{if(U.preventDefault(),!h.companyName){Me.error("Please enter your company name");return}localStorage.setItem("estimatix-company",JSON.stringify(h)),Me.success("Company details saved!"),y()},M=U=>{U.preventDefault(),localStorage.setItem("estimatix-pricing",JSON.stringify(f)),Me.success("Pricing defaults configured!"),y()},L=()=>{localStorage.setItem("estimatix-onboarded","true"),Me.success("🎉 Setup complete! Let's create your first quotation"),d(),c("/calculator")},G={enter:U=>({x:U>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:U=>({zIndex:0,x:U<0?1e3:-1e3,opacity:0})};return l.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",filter:"blur(80px)",top:"10%",left:"5%",animation:"float 6s ease-in-out infinite"}}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"row justify-content-center",children:l.jsxs("div",{className:"col-12 col-lg-8",children:[l.jsx(he.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-4",children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.95)",borderRadius:"16px",padding:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)"},children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsxs("small",{style:{fontWeight:600,color:"#667eea"},children:["Step ",u," of ",v]}),l.jsxs("small",{style:{color:"#6c757d"},children:[Math.round(u/v*100),"% Complete"]})]}),l.jsx("div",{style:{height:"8px",background:"#e9ecef",borderRadius:"8px",overflow:"hidden"},children:l.jsx(he.div,{initial:{width:0},animate:{width:`${u/v*100}%`},transition:{duration:.5,ease:"easeOut"},style:{height:"100%",background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"}})})]})}),l.jsx(wo,{mode:"wait",custom:1,children:l.jsx(he.div,{custom:1,variants:G,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3},children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.98)",borderRadius:"24px",padding:"48px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.15)",backdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[u===1&&l.jsxs("form",{onSubmit:S,children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:l.jsx("i",{className:"bi bi-building",style:{fontSize:"40px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Company Information"}),l.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Let's set up your company profile"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:["Company Name ",l.jsx("span",{style:{color:"#dc3545"},children:"*"})]}),l.jsx("input",{type:"text",className:"form-control",value:h.companyName,onChange:U=>b({...h,companyName:U.target.value}),placeholder:"Estimatix Solutions",required:!0,style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Address"}),l.jsx("textarea",{className:"form-control",value:h.companyAddress,onChange:U=>b({...h,companyAddress:U.target.value}),placeholder:"123 Business Street, City, State - 123456",rows:3,style:{borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"col-md-6 mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Phone"}),l.jsx("input",{type:"tel",className:"form-control",value:h.companyPhone,onChange:U=>b({...h,companyPhone:U.target.value}),placeholder:"+91 98765 43210",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"col-md-6 mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Email"}),l.jsx("input",{type:"email",className:"form-control",value:h.companyEmail,onChange:U=>b({...h,companyEmail:U.target.value}),placeholder:"info@estimatix.com",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[l.jsx("button",{type:"button",onClick:()=>{localStorage.setItem("estimatix-onboarded","true"),d()},style:{background:"transparent",border:"none",color:"#6c757d",fontSize:"14px",cursor:"pointer"},children:"Skip Setup"}),l.jsxs(he.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===2&&l.jsxs("form",{onSubmit:M,children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:l.jsx("i",{className:"bi bi-currency-dollar",style:{fontSize:"40px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Pricing Configuration"}),l.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Set your default pricing parameters"})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Default Profit Margin (%)"}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("input",{type:"range",className:"form-range",min:"0",max:"100",value:f.defaultMargin,onChange:U=>T({...f,defaultMargin:parseInt(U.target.value)}),style:{flex:1}}),l.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[f.defaultMargin,"%"]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Tax Rate (GST/VAT %)"}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("input",{type:"range",className:"form-range",min:"0",max:"30",value:f.taxRate,onChange:U=>T({...f,taxRate:parseInt(U.target.value)}),style:{flex:1}}),l.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[f.taxRate,"%"]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Currency"}),l.jsxs("select",{className:"form-select",value:f.currency,onChange:U=>T({...f,currency:U.target.value}),style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"},children:[l.jsx("option",{value:"INR",children:"₹ INR - Indian Rupee"}),l.jsx("option",{value:"USD",children:"$ USD - US Dollar"}),l.jsx("option",{value:"EUR",children:"€ EUR - Euro"}),l.jsx("option",{value:"GBP",children:"£ GBP - British Pound"}),l.jsx("option",{value:"AED",children:"د.إ AED - UAE Dirham"})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[l.jsxs(he.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),l.jsxs(he.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===3&&l.jsxs("div",{className:"text-center",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"100px",height:"100px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"24px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:l.jsx("i",{className:"bi bi-check-circle-fill",style:{fontSize:"50px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"You're All Set! 🎉"}),l.jsxs("p",{style:{color:"#6c757d",fontSize:"16px",marginBottom:"32px"},children:["Your account is configured and ready to go.",l.jsx("br",{}),"Let's create your first professional quotation!"]}),l.jsxs("div",{className:"row g-3 mb-4",children:[l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-calculator-fill",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Smart Calculator"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Fast & accurate estimates"})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-filetype-pdf",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"PDF Generation"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Professional quotes with QR"})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-share-fill",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Easy Sharing"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"WhatsApp, Email & QR codes"})]})})]}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsxs(he.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),l.jsxs(he.button,{type:"button",onClick:L,whileHover:{scale:1.05},whileTap:{scale:.95},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"14px 40px",borderRadius:"12px",fontSize:"18px",fontWeight:700,cursor:"pointer",boxShadow:"0 8px 25px rgba(102, 126, 234, 0.4)"},children:[l.jsx("i",{className:"bi bi-rocket-takeoff-fill me-2"}),"Start Creating Quotations"]})]})]})]})},u)})]})})})]})};function vo({className:d=""}){const[c,u]=w.useState("auto");w.useEffect(()=>{const f=localStorage.getItem("app_theme");if(f)u(f);else{const T=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;u(T?"dark":"light")}},[]),w.useEffect(()=>{const f=T=>{let v;T==="auto"?v=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":v=T,document.documentElement.setAttribute("data-bs-theme",v),v==="dark"?(document.body.style.backgroundColor="#121212",document.body.style.color="#ffffff"):(document.body.style.backgroundColor="#ffffff",document.body.style.color="#000000"),localStorage.setItem("app_theme",T)};if(f(c),c==="auto"){const T=window.matchMedia("(prefers-color-scheme: dark)"),v=()=>f("auto");return T.addEventListener("change",v),()=>T.removeEventListener("change",v)}},[c]);const o=f=>{u(f)},h=()=>{switch(c){case"light":return"bi-sun-fill";case"dark":return"bi-moon-fill";case"auto":return"bi-circle-half";default:return"bi-circle-half"}},b=()=>{switch(c){case"light":return"Light";case"dark":return"Dark";case"auto":return"Auto";default:return"Auto"}};return l.jsxs("div",{className:`dropdown ${d}`,children:[l.jsxs("button",{className:"btn text-white position-relative",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",title:`Current theme: ${b()}`,style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",width:"44px",height:"44px",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255,255,255,0.1)"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(255,255,255,0.25)",f.currentTarget.style.transform="scale(1.05)",f.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.2)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(255,255,255,0.15)",f.currentTarget.style.transform="scale(1)",f.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.1)"},children:[l.jsx("i",{className:`${h()} fs-5`}),l.jsx("span",{className:"position-absolute top-0 start-100 translate-middle rounded-circle theme-indicator",style:{background:c==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":c==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)",width:"10px",height:"10px",border:"2px solid white",boxShadow:"0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 rgba(255, 255, 255, 0.7)",animation:"theme-pulse 2s infinite"},children:l.jsx("span",{className:"visually-hidden",children:"Theme indicator"})})]}),l.jsxs("ul",{className:"dropdown-menu dropdown-menu-end shadow-lg",style:{background:"rgba(255,255,255,0.98)",backdropFilter:"blur(15px)",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"16px",minWidth:"220px",padding:"8px",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",marginTop:"8px"},children:[l.jsx("li",{children:l.jsxs("h6",{className:"dropdown-header fw-bold px-3 py-2",style:{color:"#667eea",fontSize:"0.9rem",marginBottom:"4px"},children:[l.jsx("i",{className:"bi bi-palette me-2"}),"Choose Theme"]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${c==="light"?"active":""}`,onClick:()=>o("light"),style:{transition:"all 0.2s ease",background:c==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":"rgba(0,0,0,0.02)",color:c==="light"?"white":"#333",fontWeight:c==="light"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:f=>{c!=="light"&&(f.currentTarget.style.background="rgba(255, 215, 0, 0.15)",f.currentTarget.style.color="#333")},onMouseLeave:f=>{c!=="light"&&(f.currentTarget.style.background="rgba(0,0,0,0.02)",f.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-sun-fill me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Light Mode"}),c==="light"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${c==="dark"?"active":""}`,onClick:()=>o("dark"),style:{transition:"all 0.2s ease",background:c==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"rgba(0,0,0,0.02)",color:c==="dark"?"white":"#333",fontWeight:c==="dark"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:f=>{c!=="dark"&&(f.currentTarget.style.background="rgba(74, 144, 226, 0.15)",f.currentTarget.style.color="#333")},onMouseLeave:f=>{c!=="dark"&&(f.currentTarget.style.background="rgba(0,0,0,0.02)",f.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-moon-fill me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Dark Mode"}),c==="dark"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${c==="auto"?"active":""}`,onClick:()=>o("auto"),style:{transition:"all 0.2s ease",background:c==="auto"?"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)":"rgba(0,0,0,0.02)",color:c==="auto"?"white":"#333",fontWeight:c==="auto"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:f=>{c!=="auto"&&(f.currentTarget.style.background="rgba(255, 107, 107, 0.15)",f.currentTarget.style.color="#333")},onMouseLeave:f=>{c!=="auto"&&(f.currentTarget.style.background="rgba(0,0,0,0.02)",f.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-circle-half me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Auto (System)"}),c==="auto"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider mx-2 my-2",style:{opacity:.2}})}),l.jsx("li",{children:l.jsx("div",{className:"dropdown-item-text px-3 py-2",children:l.jsxs("small",{style:{color:"#667eea",fontWeight:"500",fontSize:"0.8rem",lineHeight:"1.3"},children:[l.jsx("i",{className:"bi bi-info-circle me-2"}),"Auto mode follows your system preference"]})})})]})]})}function lx(){const{user:d,logout:c}=gt(),[u,o]=w.useState(!1),h=async()=>{try{await c(),o(!1)}catch(f){console.error("Logout error:",f)}},b=()=>o(!1);return l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"sticky-top",style:{background:"linear-gradient(90deg, #312e81, #4338ca)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:1e3},children:[l.jsx("div",{className:"container-fluid",style:{maxWidth:"1400px",padding:"0 1.5rem"},children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",style:{minHeight:"64px",padding:"0.75rem 0"},children:[l.jsx(pe,{to:"/",className:"text-decoration-none",onClick:b,children:l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-calculator-fill text-violet",style:{fontSize:"1.25rem",color:"#a855f7"}}),l.jsxs("div",{children:[l.jsx("span",{className:"text-white fw-semibold",style:{fontSize:"1.1rem",letterSpacing:"0.3px"},children:"Estimatix"}),l.jsx("span",{className:"text-muted ms-2 d-none d-lg-inline",style:{fontSize:"0.85rem",color:"#94a3b8"},children:"Professional Estimation Suite"})]})]})}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx(vo,{}),d?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"d-flex align-items-center d-sm-none",children:l.jsx("div",{className:"bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center text-white",style:{width:"38px",height:"38px",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)"},children:l.jsx("i",{className:"bi bi-person-fill"})})}),l.jsx("button",{className:"btn text-white",style:{width:"42px",height:"42px",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(255,255,255,0.25)",f.currentTarget.style.transform="scale(1.05)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(255,255,255,0.15)",f.currentTarget.style.transform="scale(1)"},onClick:()=>o(!u),"aria-label":"Toggle menu",children:l.jsx("i",{className:`bi ${u?"bi-x-lg":"bi-list"} fs-5`})})]}):l.jsxs(l.Fragment,{children:[l.jsxs(pe,{to:"/login",className:"btn text-white text-decoration-none",style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(255,255,255,0.25)",f.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(255,255,255,0.15)",f.currentTarget.style.transform="translateY(0)"},onClick:b,children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),l.jsx("span",{className:"d-none d-sm-inline",children:"Login"})]}),l.jsxs(pe,{to:"/signup",className:"btn text-decoration-none",style:{background:"linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)",color:"#667eea",border:"none",borderRadius:"10px",fontWeight:"600",boxShadow:"0 4px 15px rgba(255,255,255,0.2)",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-person-plus me-2"}),l.jsx("span",{className:"d-none d-sm-inline",children:"Sign Up"})]})]})]})]})}),u&&d&&l.jsx("div",{className:"shadow-lg",style:{background:"linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",borderTop:"1px solid rgba(102, 126, 234, 0.1)"},children:l.jsxs("div",{className:"container-fluid px-4 py-4",children:[l.jsxs("div",{className:"d-flex align-items-center mb-4 pb-4",style:{borderBottom:"2px solid rgba(102, 126, 234, 0.1)"},children:[l.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center text-white me-3",style:{width:"50px",height:"50px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)"},children:l.jsx("i",{className:"bi bi-person-fill fs-5"})}),l.jsxs("div",{children:[l.jsx("div",{className:"fw-bold text-dark",style:{fontSize:"1.1rem",fontFamily:"'Segoe UI', system-ui, sans-serif"},children:d?.email?.split("@")[0]}),l.jsx("small",{style:{color:"#667eea",fontWeight:"500"},children:d?.email})]})]}),l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/dashboard",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/multi-calculator",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(17, 153, 142, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(17, 153, 142, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(17, 153, 142, 0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Multi-Item"]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/calculator",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-gear me-2"}),"Simple Calc"]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/billing",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",color:"#4a5568",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(251, 194, 235, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(251, 194, 235, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(251, 194, 235, 0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing"]})}),l.jsx("div",{className:"col-12",children:l.jsxs(pe,{to:"/admin",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:b,children:[l.jsx("i",{className:"bi bi-shield-check me-2"}),"Admin Settings"]})})]}),l.jsx("div",{className:"mt-4 pt-4",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs("button",{className:"btn w-100 text-start",style:{background:"rgba(102, 126, 234, 0.1)",color:"#667eea",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(102, 126, 234, 0.15)",f.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(102, 126, 234, 0.1)",f.currentTarget.style.transform="translateY(0)"},children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Export PDF"]})}),l.jsx("div",{className:"col-6",children:l.jsxs("button",{className:"btn w-100 text-start",style:{background:"rgba(17, 153, 142, 0.1)",color:"#11998e",border:"1px solid rgba(17, 153, 142, 0.2)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(17, 153, 142, 0.15)",f.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(17, 153, 142, 0.1)",f.currentTarget.style.transform="translateY(0)"},children:[l.jsx("i",{className:"bi bi-share me-2"}),"Share Quote"]})})]})}),l.jsx("div",{className:"mt-4 pt-4",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:l.jsxs("button",{className:"btn w-100 text-center",style:{background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255, 107, 107, 0.2)"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-2px)",f.currentTarget.style.boxShadow="0 6px 20px rgba(255, 107, 107, 0.3)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="0 4px 15px rgba(255, 107, 107, 0.2)"},onClick:h,children:[l.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})})]}),u&&l.jsx("div",{className:"position-fixed w-100 h-100 bg-black bg-opacity-25",style:{top:0,left:0,zIndex:1040},onClick:b}),l.jsx("style",{children:`
        .tiny-text {
          font-size: 0.7rem;
          line-height: 1;
        }
        
        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Ensure mobile menu appears above other content */
        .sticky-top {
          z-index: 1050;
        }
        
        /* Mobile-friendly button sizes */
        @media (max-width: 768px) {
          .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
          }
        }
        
        /* Improved touch targets for mobile */
        .btn {
          min-height: 38px;
        }
        
        /* Better spacing on mobile */
        @media (max-width: 576px) {
          .gap-2 {
            gap: 0.25rem !important;
          }
        }
      `})]})}function ix(){const{user:d,logout:c}=gt(),u=async()=>{try{await c()}catch(o){console.error("Logout error:",o)}};return l.jsx("header",{className:"py-3 shadow d-none d-lg-block",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsx("div",{children:l.jsxs(pe,{to:"/",className:"text-white text-decoration-none",children:[l.jsxs("h1",{className:"h5 mb-0 text-white",children:[l.jsx("i",{className:"bi bi-calculator-fill me-2"}),"Estimatix"]}),l.jsx("small",{className:"opacity-75 text-white",children:"Professional Estimation Platform"})]})}),l.jsx("nav",{className:"d-flex gap-2 align-items-center",children:d?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"d-flex gap-1 me-3",children:[l.jsxs(pe,{to:"/dashboard",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-speedometer2 me-1"}),"Dashboard"]}),l.jsxs(pe,{to:"/multi-calculator",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-calculator me-1"}),"Multi-Item"]}),l.jsxs(pe,{to:"/calculator",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-gear me-1"}),"Simple Calc"]}),l.jsxs(pe,{to:"/billing",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-credit-card me-1"}),"Billing"]}),l.jsxs(pe,{to:"/admin",className:"btn btn-sm",style:{background:"linear-gradient(90deg, #facc15, #eab308)",color:"#1e1e1e",fontWeight:"600",border:"none",boxShadow:"0 0 8px rgba(250, 204, 21, 0.4)",transition:"all 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.boxShadow="0 0 12px rgba(250, 204, 21, 0.6)",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.boxShadow="0 0 8px rgba(250, 204, 21, 0.4)",o.currentTarget.style.transform="translateY(0)"},children:[l.jsx("i",{className:"bi bi-shield-check me-1"}),"Admin"]})]}),l.jsx(vo,{}),l.jsxs("div",{className:"dropdown",children:[l.jsxs("button",{className:"btn btn-outline-light btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[l.jsx("i",{className:"bi bi-person-circle me-1"}),d?.email]}),l.jsxs("ul",{className:"dropdown-menu dropdown-menu-end",children:[l.jsx("li",{children:l.jsxs("h6",{className:"dropdown-header",children:[l.jsx("i",{className:"bi bi-person me-2"}),"Account"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/dashboard",children:[l.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/billing",children:[l.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing & Subscription"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/admin",children:[l.jsx("i",{className:"bi bi-gear me-2"}),"Admin Settings"]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider"})}),l.jsx("li",{children:l.jsxs("button",{className:"dropdown-item text-danger",onClick:u,children:[l.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(vo,{}),l.jsxs("div",{className:"d-flex gap-1",children:[l.jsxs(pe,{to:"/login",className:"btn btn-outline-light btn-sm",children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-1"}),"Login"]}),l.jsxs(pe,{to:"/signup",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-person-plus me-1"}),"Sign Up"]})]})]})})]})})})}function nx(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"d-lg-none",children:l.jsx(lx,{})}),l.jsx("div",{className:"d-none d-lg-block",children:l.jsx(ix,{})})]})}function ri({children:d}){const{user:c,loading:u}=gt();return u?l.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"},children:l.jsx("div",{className:"spinner-border text-primary",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):c?l.jsx(l.Fragment,{children:d}):l.jsx(ah,{to:"/login"})}function sx({children:d}){const{user:c}=gt(),u=ui();return u.pathname.includes("/login")||u.pathname.includes("/signup")||u.pathname.includes("/forgot-password")||!c?l.jsx(l.Fragment,{children:d}):l.jsxs(l.Fragment,{children:[l.jsx(nx,{}),d,l.jsx("footer",{className:"bg-dark text-white py-3 mt-auto",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"row align-items-center",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsxs("p",{className:"mb-0",children:[l.jsx("strong",{children:"Estimatix"})," - Professional Estimation & Quotation Platform"]}),l.jsx("small",{className:"text-muted",children:"Powered by Firebase & Advanced SaaS Technology | Version 1.0"})]}),l.jsx("div",{className:"col-md-6 text-md-end",children:l.jsxs("div",{className:"d-flex justify-content-md-end gap-3",children:[l.jsxs("small",{children:[l.jsx("i",{className:"bi bi-calculator me-1"}),"Smart Estimations"]}),l.jsxs("small",{children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-1"}),"PDF Export"]}),l.jsxs("small",{children:[l.jsx("i",{className:"bi bi-palette me-1"}),"Theme Toggle"]})]})})]})})})]})}function rx({children:d}){const{user:c}=gt(),[u,o]=w.useState(!1);w.useEffect(()=>{if(c){const b=localStorage.getItem("estimatix-onboarded");o(!b)}},[c]);const h=()=>{o(!1)};return c&&u?l.jsx(ax,{onComplete:h}):l.jsx(l.Fragment,{children:d})}function cx(){const{user:d}=gt();return l.jsx(sx,{children:l.jsx("main",{className:"flex-grow-1",children:l.jsxs(kp,{children:[l.jsx(Qt,{path:"/login",element:l.jsx(Tb,{})}),l.jsx(Qt,{path:"/signup",element:l.jsx(zb,{})}),l.jsx(Qt,{path:"/forgot-password",element:l.jsx(Eb,{})}),l.jsx(Qt,{path:"/shared/:shareToken",element:l.jsx(tx,{})}),l.jsx(Qt,{path:"/dashboard",element:l.jsx(ri,{children:l.jsx(Bf,{})})}),l.jsx(Qt,{path:"/billing",element:l.jsx(ri,{children:l.jsx(Kb,{})})}),l.jsx(Qt,{path:"/calculator",element:l.jsx(ri,{children:l.jsx($b,{})})}),l.jsx(Qt,{path:"/multi-calculator",element:l.jsx(ri,{children:l.jsx(ex,{})})}),l.jsx(Qt,{path:"/admin",element:l.jsx(ri,{children:l.jsx(Ib,{})})}),l.jsx(Qt,{path:"/",element:l.jsx(ri,{children:l.jsx(Bf,{})})}),l.jsx(Qt,{path:"*",element:l.jsx(ah,{to:"/"})})]})})},d?.uid||"logged-out")}function ox(){return l.jsx(Xp,{children:l.jsx(Yp,{children:l.jsx(Gp,{children:l.jsx("div",{className:"min-vh-100 d-flex flex-column",children:l.jsx(rx,{children:l.jsx(cx,{})})})})})})}(()=>{try{const d=localStorage.getItem("theme"),c=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,u=d==="dark"||d==="light"?d:c?"dark":"light";document.documentElement.setAttribute("data-bs-theme",u==="dark"?"dark":"light")}catch{}})();up.createRoot(document.getElementById("app")).render(ve.createElement(ve.StrictMode,null,ve.createElement(ox,null)));"serviceWorker"in navigator&&Qf(async()=>{const{registerSW:d}=await import("./virtual_pwa-register-JoEQWfKY.js");return{registerSW:d}},__vite__mapDeps([0,1,2])).then(({registerSW:d})=>{d({immediate:!0,onRegisteredSW:()=>{},onNeedRefresh(){},onOfflineReady(){}})}).catch(()=>{});
