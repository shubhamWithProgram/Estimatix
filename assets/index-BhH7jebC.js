const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/virtual_pwa-register-BT8KHGsJ.js","assets/vendor-jspdf-BDaxKd1L.js","assets/vendor-DcmHRsjH.js"])))=>i.map(i=>d[i]);
import{E as T0,a as z0,_ as Ff}from"./vendor-jspdf-BDaxKd1L.js";import{r as Hf,b as A0,g as E0,A as qf,i as ft,c as w,p as Lf,s as Qf,e as po,f as bo,j as Hs,m as D0,h as k0,k as R0,R as M0,l as jf,n as O0,o as U0,q as B0,t as _0,u as G0,v as F0,w as H0,x as xo,y as Xt,B as mo,C as l,D as q0,E as L0,G as Q0,F as Y0,H as X0,I as V0,J as Z0,K as Sa,L as W0,M as Ia,N as K0,O as he,P as yo,Q as no,S as J0,T as Nf,U as gn,V as $0,W as I0,X as P0,Y as ep,Z as tp,$ as pn,a0 as ve,a1 as ke,a2 as ap,a3 as lp,a4 as ip,a5 as np}from"./vendor-DcmHRsjH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const x of f)if(x.type==="childList")for(const h of x.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const x={};return f.integrity&&(x.integrity=f.integrity),f.referrerPolicy&&(x.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?x.credentials="include":f.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function o(f){if(f.ep)return;f.ep=!0;const x=u(f);fetch(f.href,x)}})();var so={exports:{}},hn={},ro={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function sp(){if(Sf)return rt;Sf=1;var d=Hf();function r(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)y+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function x(b,y,N){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:b,containerInfo:y,implementation:N}}var h=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,rt.createPortal=function(b,y){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return x(b,y,null,N)},rt.flushSync=function(b){var y=h.T,N=o.p;try{if(h.T=null,o.p=2,b)return b()}finally{h.T=y,o.p=N,o.d.f()}},rt.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(b,y))},rt.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},rt.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var N=y.as,S=T(N,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;N==="style"?o.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:R,fetchPriority:q}):N==="script"&&o.d.X(b,{crossOrigin:S,integrity:R,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rt.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var N=T(y.as,y.crossOrigin);o.d.M(b,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(b)},rt.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var N=y.as,S=T(N,y.crossOrigin);o.d.L(b,N,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rt.preloadModule=function(b,y){if(typeof b=="string")if(y){var N=T(y.as,y.crossOrigin);o.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(b)},rt.requestFormReset=function(b){o.d.r(b)},rt.unstable_batchedUpdates=function(b,y){return b(y)},rt.useFormState=function(b,y,N){return h.H.useFormState(b,y,N)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.2.0",rt}var wf;function Yf(){if(wf)return ro.exports;wf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(r){console.error(r)}}return d(),ro.exports=sp(),ro.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function rp(){if(Cf)return hn;Cf=1;var d=A0(),r=Hf(),u=Yf();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(x(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return b(n),e;if(s===i)return b(n),t;s=s.sibling}throw Error(o(188))}if(a.return!==i.return)a=n,i=s;else{for(var c=!1,m=n.child;m;){if(m===a){c=!0,a=n,i=s;break}if(m===i){c=!0,i=n,a=s;break}m=m.sibling}if(!c){for(m=s.child;m;){if(m===a){c=!0,a=s,i=n;break}if(m===i){c=!0,i=s,a=n;break}m=m.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,R=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case K:return"Profiler";case L:return"StrictMode";case le:return"Suspense";case Ge:return"SuspenseList";case ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Y:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ot(e(t))}catch{}}return null}var g=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},I=[],je=-1;function ie(e){return{current:e}}function be(e){0>je||(e.current=I[je],I[je]=null,je--)}function ce(e,t){je++,I[je]=e.current,e.current=t}var Ke=ie(null),gt=ie(null),dt=ie(null),Jt=ie(null);function la(e,t){switch(ce(dt,t),ce(gt,e),ce(Ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qm(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(Ke),ce(Ke,e)}function Ca(){be(Ke),be(gt),be(dt)}function fi(e){e.memoizedState!==null&&ce(Jt,e);var t=Ke.current,a=Ym(t,e.type);t!==a&&(ce(gt,e),ce(Ke,a))}function el(e){gt.current===e&&(be(Ke),be(gt)),Jt.current===e&&(be(Jt),dn._currentValue=ne)}var hi,yn;function ia(e){if(hi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hi=t&&t[1]||"",yn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hi+e+yn}var gi=!1;function pi(e,t){if(!e||gi)return"";gi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(D){var E=D}Reflect.construct(e,[],U)}else{try{U.call()}catch(D){E=D}e.call(U.prototype)}}else{try{throw Error()}catch(D){E=D}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(D){if(D&&E&&typeof D.stack=="string")return[D.stack,E.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),c=s[0],m=s[1];if(c&&m){var v=c.split(`
`),A=m.split(`
`);for(n=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(i===v.length||n===A.length)for(i=v.length-1,n=A.length-1;1<=i&&0<=n&&v[i]!==A[n];)n--;for(;1<=i&&0<=n;i--,n--)if(v[i]!==A[n]){if(i!==1||n!==1)do if(i--,n--,0>n||v[i]!==A[n]){var k=`
`+v[i].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=i&&0<=n);break}}}finally{gi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ia(a):""}function Vs(e,t){switch(e.tag){case 26:case 27:case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return e.child!==t&&t!==null?ia("Suspense Fallback"):ia("Suspense");case 19:return ia("SuspenseList");case 0:case 15:return pi(e.type,!1);case 11:return pi(e.type.render,!1);case 1:return pi(e.type,!0);case 31:return ia("Activity");default:return""}}function vn(e){try{var t="",a=null;do t+=Vs(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ot=Object.prototype.hasOwnProperty,bi=d.unstable_scheduleCallback,vl=d.unstable_cancelCallback,Zs=d.unstable_shouldYield,jn=d.unstable_requestPaint,ut=d.unstable_now,xi=d.unstable_getCurrentPriorityLevel,Nn=d.unstable_ImmediatePriority,Sn=d.unstable_UserBlockingPriority,jl=d.unstable_NormalPriority,yi=d.unstable_LowPriority,Nl=d.unstable_IdlePriority,p=d.log,B=d.unstable_setDisableYieldValue,H=null,F=null;function $(e){if(typeof p=="function"&&B(e),F&&typeof F.setStrictMode=="function")try{F.setStrictMode(H,e)}catch{}}var P=Math.clz32?Math.clz32:et,Me=Math.log,Vt=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(Me(e)/Vt|0)|0}var Te=256,tt=262144,Ta=4194304;function $t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?n=$t(i):(c&=m,c!==0?n=$t(c):a||(a=m&~e,a!==0&&(n=$t(a))))):(m=i&~s,m!==0?n=$t(m):c!==0?n=$t(c):a||(a=i&~e,a!==0&&(n=$t(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function za(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ji(){var e=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),e}function Ni(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Si(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hh(e,t,a,i,n,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(a=c&~a;0<a;){var k=31-P(a),U=1<<k;m[k]=0,v[k]=-1;var E=A[k];if(E!==null)for(A[k]=null,k=0;k<E.length;k++){var D=E[k];D!==null&&(D.lane&=-536870913)}a&=~U}i!==0&&Co(e,i,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function Co(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-P(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function To(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-P(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function zo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ws(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ao(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:hf(e.type))}function Eo(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var Aa=Math.random().toString(36).slice(2),at="__reactFiber$"+Aa,pt="__reactProps$"+Aa,Sl="__reactContainer$"+Aa,Js="__reactEvents$"+Aa,gh="__reactListeners$"+Aa,ph="__reactHandles$"+Aa,Do="__reactResources$"+Aa,wi="__reactMarker$"+Aa;function $s(e){delete e[at],delete e[pt],delete e[Js],delete e[gh],delete e[ph]}function wl(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Sl]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=$m(e);e!==null;){if(a=e[at])return a;e=$m(e)}return t}e=a,a=e.parentNode}return null}function Cl(e){if(e=e[at]||e[Sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ci(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Tl(e){var t=e[Do];return t||(t=e[Do]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[wi]=!0}var ko=new Set,Ro={};function al(e,t){zl(e,t),zl(e+"Capture",t)}function zl(e,t){for(Ro[e]=t,e=0;e<t.length;e++)ko.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},Oo={};function xh(e){return Ot.call(Oo,e)?!0:Ot.call(Mo,e)?!1:bh.test(e)?Oo[e]=!0:(Mo[e]=!0,!1)}function wn(e,t,a){if(xh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yh(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){if(!e._valueTracker){var t=Uo(e)?"checked":"value";e._valueTracker=yh(e,t,""+e[t])}}function Bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Uo(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vh=/[\n"\\]/g;function Bt(e){return e.replace(vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(e,t,a,i,n,s,c,m){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?er(e,c,Ut(t)):a!=null?er(e,c,Ut(a)):i!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ut(m):e.removeAttribute("name")}function _o(e,t,a,i,n,s,c,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Is(e);return}a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Is(e)}function er(e,t,a){t==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Al(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Go(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Fo(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(g(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Is(e)}function El(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||jh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qo(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&Ho(e,n,i)}else for(var s in t)t.hasOwnProperty(s)&&Ho(e,s,t[s])}function tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zn(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var ar=null;function lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,kl=null;function Lo(e){var t=Cl(e);if(t&&(e=t.stateNode)){var a=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ps(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[pt]||null;if(!n)throw Error(o(90));Ps(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Bo(i)}break e;case"textarea":Go(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Al(e,!!a.multiple,t,!1)}}}var ir=!1;function Qo(e,t,a){if(ir)return e(t,a);ir=!0;try{var i=e(t);return i}finally{if(ir=!1,(Dl!==null||kl!==null)&&(hs(),Dl&&(t=Dl,e=kl,kl=Dl=null,Lo(t),e)))for(t=0;t<e.length;t++)Lo(e[t])}}function Ti(e,t){var a=e.stateNode;if(a===null)return null;var i=a[pt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(ra)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){nr=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{nr=!1}var Ea=null,sr=null,An=null;function Yo(){if(An)return An;var e,t=sr,a=t.length,i,n="value"in Ea?Ea.value:Ea.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(i=1;i<=c&&t[a-i]===n[s-i];i++);return An=n.slice(e,1<i?1-i:void 0)}function En(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function Xo(){return!1}function bt(e){function t(a,i,n,s,c){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dn:Xo,this.isPropagationStopped=Xo,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=bt(ll),Ai=S({},ll,{view:0,detail:0}),wh=bt(Ai),rr,cr,Ei,Rn=S({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(rr=e.screenX-Ei.screenX,cr=e.screenY-Ei.screenY):cr=rr=0,Ei=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),Vo=bt(Rn),Ch=S({},Rn,{dataTransfer:0}),Th=bt(Ch),zh=S({},Ai,{relatedTarget:0}),or=bt(zh),Ah=S({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=bt(Ah),Dh=S({},ll,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kh=bt(Dh),Rh=S({},ll,{data:0}),Zo=bt(Rh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function dr(){return Bh}var _h=S({},Ai,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=En(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?En(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?En(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=bt(_h),Fh=S({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=bt(Fh),Hh=S({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),qh=bt(Hh),Lh=S({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=bt(Lh),Yh=S({},Rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=bt(Yh),Vh=S({},ll,{newState:0,oldState:0}),Zh=bt(Vh),Wh=[9,13,27,32],ur=ra&&"CompositionEvent"in window,Di=null;ra&&"documentMode"in document&&(Di=document.documentMode);var Kh=ra&&"TextEvent"in window&&!Di,Ko=ra&&(!ur||Di&&8<Di&&11>=Di),Jo=" ",$o=!1;function Io(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rl=!1;function Jh(e,t){switch(e){case"compositionend":return Po(t);case"keypress":return t.which!==32?null:($o=!0,Jo);case"textInput":return e=t.data,e===Jo&&$o?null:e;default:return null}}function $h(e,t){if(Rl)return e==="compositionend"||!ur&&Io(e,t)?(e=Yo(),An=sr=Ea=null,Rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ko&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function td(e,t,a,i){Dl?kl?kl.push(i):kl=[i]:Dl=i,t=js(t,"onChange"),0<t.length&&(a=new kn("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var ki=null,Ri=null;function Ph(e){_m(e,0)}function Mn(e){var t=Ci(e);if(Bo(t))return e}function ad(e,t){if(e==="change")return t}var ld=!1;if(ra){var mr;if(ra){var fr="oninput"in document;if(!fr){var id=document.createElement("div");id.setAttribute("oninput","return;"),fr=typeof id.oninput=="function"}mr=fr}else mr=!1;ld=mr&&(!document.documentMode||9<document.documentMode)}function nd(){ki&&(ki.detachEvent("onpropertychange",sd),Ri=ki=null)}function sd(e){if(e.propertyName==="value"&&Mn(Ri)){var t=[];td(t,Ri,e,lr(e)),Qo(Ph,t)}}function eg(e,t,a){e==="focusin"?(nd(),ki=t,Ri=a,ki.attachEvent("onpropertychange",sd)):e==="focusout"&&nd()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mn(Ri)}function ag(e,t){if(e==="click")return Mn(t)}function lg(e,t){if(e==="input"||e==="change")return Mn(t)}function ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:ig;function Mi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Ot.call(t,n)||!Ct(e[n],t[n]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var a=rd(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rd(a)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Tn(e.document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ng=ra&&"documentMode"in document&&11>=document.documentMode,Ml=null,gr=null,Oi=null,pr=!1;function ud(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pr||Ml==null||Ml!==Tn(i)||(i=Ml,"selectionStart"in i&&hr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oi&&Mi(Oi,i)||(Oi=i,i=js(gr,"onSelect"),0<i.length&&(t=new kn("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Ml)))}function il(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ol={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionrun:il("Transition","TransitionRun"),transitionstart:il("Transition","TransitionStart"),transitioncancel:il("Transition","TransitionCancel"),transitionend:il("Transition","TransitionEnd")},br={},md={};ra&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function nl(e){if(br[e])return br[e];if(!Ol[e])return e;var t=Ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in md)return br[e]=t[a];return e}var fd=nl("animationend"),hd=nl("animationiteration"),gd=nl("animationstart"),sg=nl("transitionrun"),rg=nl("transitionstart"),cg=nl("transitioncancel"),pd=nl("transitionend"),bd=new Map,xr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xr.push("scrollEnd");function Zt(e,t){bd.set(e,t),al(t,[e])}var On=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Ul=0,yr=0;function Un(){for(var e=Ul,t=yr=Ul=0;t<e;){var a=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var s=_t[t];if(_t[t++]=null,i!==null&&n!==null){var c=i.pending;c===null?n.next=n:(n.next=c.next,c.next=n),i.pending=n}s!==0&&xd(a,n,s)}}function Bn(e,t,a,i){_t[Ul++]=e,_t[Ul++]=t,_t[Ul++]=a,_t[Ul++]=i,yr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function vr(e,t,a,i){return Bn(e,t,a,i),_n(e)}function sl(e,t){return Bn(e,null,null,t),_n(e)}function xd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,i=s.alternate,i!==null&&(i.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-P(a),e=s.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),s):null}function _n(e){if(50<an)throw an=0,Ec=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bl={};function og(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,a,i){return new og(e,t,a,i)}function jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,a,i,n,s){var c=0;if(i=e,typeof e=="function")jr(e)&&(c=1);else if(typeof e=="string")c=h0(e,a,Ke.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ct:return e=Tt(31,a,t,n),e.elementType=ct,e.lanes=s,e;case O:return rl(a.children,n,s,t);case L:c=8,n|=24;break;case K:return e=Tt(12,a,t,n|2),e.elementType=K,e.lanes=s,e;case le:return e=Tt(13,a,t,n),e.elementType=le,e.lanes=s,e;case Ge:return e=Tt(19,a,t,n),e.elementType=Ge,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:c=10;break e;case ee:c=9;break e;case Z:c=11;break e;case De:c=14;break e;case Fe:c=16,i=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Tt(c,a,t,n),t.elementType=e,t.type=i,t.lanes=s,t}function rl(e,t,a,i){return e=Tt(7,e,i,t),e.lanes=a,e}function Nr(e,t,a){return e=Tt(6,e,null,t),e.lanes=a,e}function vd(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Sr(e,t,a){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jd=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:vn(t)},jd.set(e,t),t)}return{value:e,source:t,stack:vn(t)}}var _l=[],Gl=0,Fn=null,Ui=0,Ft=[],Ht=0,Da=null,It=1,Pt="";function oa(e,t){_l[Gl++]=Ui,_l[Gl++]=Fn,Fn=e,Ui=t}function Nd(e,t,a){Ft[Ht++]=It,Ft[Ht++]=Pt,Ft[Ht++]=Da,Da=e;var i=It;e=Pt;var n=32-P(i)-1;i&=~(1<<n),a+=1;var s=32-P(t)+n;if(30<s){var c=n-n%5;s=(i&(1<<c)-1).toString(32),i>>=c,n-=c,It=1<<32-P(t)+n|a<<n|i,Pt=s+e}else It=1<<s|a<<n|i,Pt=e}function wr(e){e.return!==null&&(oa(e,1),Nd(e,1,0))}function Cr(e){for(;e===Fn;)Fn=_l[--Gl],_l[Gl]=null,Ui=_l[--Gl],_l[Gl]=null;for(;e===Da;)Da=Ft[--Ht],Ft[Ht]=null,Pt=Ft[--Ht],Ft[Ht]=null,It=Ft[--Ht],Ft[Ht]=null}function Sd(e,t){Ft[Ht++]=It,Ft[Ht++]=Pt,Ft[Ht++]=Da,It=t.id,Pt=t.overflow,Da=e}var lt=null,ze=null,ue=!1,ka=null,qt=!1,Tr=Error(o(519));function Ra(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bi(Gt(t,e)),Tr}function wd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[at]=e,t[pt]=i,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<nn.length;a++)re(nn[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),_o(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Fo(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||qm(t.textContent,a)?(i.popover!=null&&(re("beforetoggle",t),re("toggle",t)),i.onScroll!=null&&re("scroll",t),i.onScrollEnd!=null&&re("scrollend",t),i.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Ra(e,!0)}function Cd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:lt=lt.return}}function Fl(e){if(e!==lt)return!1;if(!ue)return Cd(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yc(e.type,e.memoizedProps)),a=!a),a&&ze&&Ra(e),Cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=Jm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=Jm(e)}else t===27?(t=ze,Va(e.type)?(e=Kc,Kc=null,ze=e):ze=t):ze=lt?Qt(e.stateNode.nextSibling):null;return!0}function cl(){ze=lt=null,ue=!1}function zr(){var e=ka;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),ka=null),e}function Bi(e){ka===null?ka=[e]:ka.push(e)}var Ar=ie(null),ol=null,da=null;function Ma(e,t,a){ce(Ar,t._currentValue),t._currentValue=a}function ua(e){e._currentValue=Ar.current,be(Ar)}function Er(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Dr(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var c=n.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=n;for(var v=0;v<t.length;v++)if(m.context===t[v]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Er(s.return,a,e),i||(c=null);break e}s=m.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),Er(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Hl(e,t,a,i){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var m=n.type;Ct(n.pendingProps.value,c.value)||(e!==null?e.push(m):e=[m])}}else if(n===Jt.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(dn):e=[dn])}n=n.return}e!==null&&Dr(t,e,a,i),t.flags|=262144}function Hn(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dl(e){ol=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return Td(ol,e)}function qn(e,t){return ol===null&&dl(e),Td(e,t)}function Td(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(o(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var dg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ug=d.unstable_scheduleCallback,mg=d.unstable_NormalPriority,He={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kr(){return{controller:new dg,data:new Map,refCount:0}}function _i(e){e.refCount--,e.refCount===0&&ug(mg,function(){e.controller.abort()})}var Gi=null,Rr=0,ql=0,Ll=null;function fg(e,t){if(Gi===null){var a=Gi=[];Rr=0,ql=Uc(),Ll={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Rr++,t.then(zd,zd),t}function zd(){if(--Rr===0&&Gi!==null){Ll!==null&&(Ll.status="fulfilled");var e=Gi;Gi=null,ql=0,Ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hg(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Ad=_.S;_.S=function(e,t){um=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fg(e,t),Ad!==null&&Ad(e,t)};var ul=ie(null);function Mr(){var e=ul.current;return e!==null?e:Ce.pooledCache}function Ln(e,t){t===null?ce(ul,ul.current):ce(ul,t.pool)}function Ed(){var e=Mr();return e===null?null:{parent:He._currentValue,pool:e}}var Ql=Error(o(460)),Or=Error(o(474)),Qn=Error(o(542)),Yn={then:function(){}};function Dd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e}throw fl=t,Ql}}function ml(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fl=a,Ql):a}}var fl=null;function Rd(){if(fl===null)throw Error(o(459));var e=fl;return fl=null,e}function Md(e){if(e===Ql||e===Qn)throw Error(o(483))}var Yl=null,Fi=0;function Xn(e){var t=Fi;return Fi+=1,Yl===null&&(Yl=[]),kd(Yl,e,t)}function Hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vn(e,t){throw t.$$typeof===R?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Od(e){function t(C,j){if(e){var z=C.deletions;z===null?(C.deletions=[j],C.flags|=16):z.push(j)}}function a(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function i(C){for(var j=new Map;C!==null;)C.key!==null?j.set(C.key,C):j.set(C.index,C),C=C.sibling;return j}function n(C,j){return C=ca(C,j),C.index=0,C.sibling=null,C}function s(C,j,z){return C.index=z,e?(z=C.alternate,z!==null?(z=z.index,z<j?(C.flags|=67108866,j):z):(C.flags|=67108866,j)):(C.flags|=1048576,j)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,j,z,M){return j===null||j.tag!==6?(j=Nr(z,C.mode,M),j.return=C,j):(j=n(j,z),j.return=C,j)}function v(C,j,z,M){var W=z.type;return W===O?k(C,j,z.props.children,M,z.key):j!==null&&(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&ml(W)===j.type)?(j=n(j,z.props),Hi(j,z),j.return=C,j):(j=Gn(z.type,z.key,z.props,null,C.mode,M),Hi(j,z),j.return=C,j)}function A(C,j,z,M){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=Sr(z,C.mode,M),j.return=C,j):(j=n(j,z.children||[]),j.return=C,j)}function k(C,j,z,M,W){return j===null||j.tag!==7?(j=rl(z,C.mode,M,W),j.return=C,j):(j=n(j,z),j.return=C,j)}function U(C,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nr(""+j,C.mode,z),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case q:return z=Gn(j.type,j.key,j.props,null,C.mode,z),Hi(z,j),z.return=C,z;case G:return j=Sr(j,C.mode,z),j.return=C,j;case Fe:return j=ml(j),U(C,j,z)}if(g(j)||Ve(j))return j=rl(j,C.mode,z,null),j.return=C,j;if(typeof j.then=="function")return U(C,Xn(j),z);if(j.$$typeof===Y)return U(C,qn(C,j),z);Vn(C,j)}return null}function E(C,j,z,M){var W=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return W!==null?null:m(C,j,""+z,M);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return z.key===W?v(C,j,z,M):null;case G:return z.key===W?A(C,j,z,M):null;case Fe:return z=ml(z),E(C,j,z,M)}if(g(z)||Ve(z))return W!==null?null:k(C,j,z,M,null);if(typeof z.then=="function")return E(C,j,Xn(z),M);if(z.$$typeof===Y)return E(C,j,qn(C,z),M);Vn(C,z)}return null}function D(C,j,z,M,W){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(z)||null,m(j,C,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return C=C.get(M.key===null?z:M.key)||null,v(j,C,M,W);case G:return C=C.get(M.key===null?z:M.key)||null,A(j,C,M,W);case Fe:return M=ml(M),D(C,j,z,M,W)}if(g(M)||Ve(M))return C=C.get(z)||null,k(j,C,M,W,null);if(typeof M.then=="function")return D(C,j,z,Xn(M),W);if(M.$$typeof===Y)return D(C,j,z,qn(j,M),W);Vn(j,M)}return null}function X(C,j,z,M){for(var W=null,me=null,V=j,ae=j=0,de=null;V!==null&&ae<z.length;ae++){V.index>ae?(de=V,V=null):de=V.sibling;var fe=E(C,V,z[ae],M);if(fe===null){V===null&&(V=de);break}e&&V&&fe.alternate===null&&t(C,V),j=s(fe,j,ae),me===null?W=fe:me.sibling=fe,me=fe,V=de}if(ae===z.length)return a(C,V),ue&&oa(C,ae),W;if(V===null){for(;ae<z.length;ae++)V=U(C,z[ae],M),V!==null&&(j=s(V,j,ae),me===null?W=V:me.sibling=V,me=V);return ue&&oa(C,ae),W}for(V=i(V);ae<z.length;ae++)de=D(V,C,ae,z[ae],M),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?ae:de.key),j=s(de,j,ae),me===null?W=de:me.sibling=de,me=de);return e&&V.forEach(function($a){return t(C,$a)}),ue&&oa(C,ae),W}function J(C,j,z,M){if(z==null)throw Error(o(151));for(var W=null,me=null,V=j,ae=j=0,de=null,fe=z.next();V!==null&&!fe.done;ae++,fe=z.next()){V.index>ae?(de=V,V=null):de=V.sibling;var $a=E(C,V,fe.value,M);if($a===null){V===null&&(V=de);break}e&&V&&$a.alternate===null&&t(C,V),j=s($a,j,ae),me===null?W=$a:me.sibling=$a,me=$a,V=de}if(fe.done)return a(C,V),ue&&oa(C,ae),W;if(V===null){for(;!fe.done;ae++,fe=z.next())fe=U(C,fe.value,M),fe!==null&&(j=s(fe,j,ae),me===null?W=fe:me.sibling=fe,me=fe);return ue&&oa(C,ae),W}for(V=i(V);!fe.done;ae++,fe=z.next())fe=D(V,C,ae,fe.value,M),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?ae:fe.key),j=s(fe,j,ae),me===null?W=fe:me.sibling=fe,me=fe);return e&&V.forEach(function(C0){return t(C,C0)}),ue&&oa(C,ae),W}function we(C,j,z,M){if(typeof z=="object"&&z!==null&&z.type===O&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case q:e:{for(var W=z.key;j!==null;){if(j.key===W){if(W=z.type,W===O){if(j.tag===7){a(C,j.sibling),M=n(j,z.props.children),M.return=C,C=M;break e}}else if(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&ml(W)===j.type){a(C,j.sibling),M=n(j,z.props),Hi(M,z),M.return=C,C=M;break e}a(C,j);break}else t(C,j);j=j.sibling}z.type===O?(M=rl(z.props.children,C.mode,M,z.key),M.return=C,C=M):(M=Gn(z.type,z.key,z.props,null,C.mode,M),Hi(M,z),M.return=C,C=M)}return c(C);case G:e:{for(W=z.key;j!==null;){if(j.key===W)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(C,j.sibling),M=n(j,z.children||[]),M.return=C,C=M;break e}else{a(C,j);break}else t(C,j);j=j.sibling}M=Sr(z,C.mode,M),M.return=C,C=M}return c(C);case Fe:return z=ml(z),we(C,j,z,M)}if(g(z))return X(C,j,z,M);if(Ve(z)){if(W=Ve(z),typeof W!="function")throw Error(o(150));return z=W.call(z),J(C,j,z,M)}if(typeof z.then=="function")return we(C,j,Xn(z),M);if(z.$$typeof===Y)return we(C,j,qn(C,z),M);Vn(C,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,j!==null&&j.tag===6?(a(C,j.sibling),M=n(j,z),M.return=C,C=M):(a(C,j),M=Nr(z,C.mode,M),M.return=C,C=M),c(C)):a(C,j)}return function(C,j,z,M){try{Fi=0;var W=we(C,j,z,M);return Yl=null,W}catch(V){if(V===Ql||V===Qn)throw V;var me=Tt(29,V,null,C.mode);return me.lanes=M,me.return=C,me}finally{}}}var hl=Od(!0),Ud=Od(!1),Oa=!1;function Ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Br(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=_n(e),xd(e,null,a),t}return Bn(e,i,t,a),_n(e)}function qi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,To(e,a)}}function _r(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Gr=!1;function Li(){if(Gr){var e=Ll;if(e!==null)throw e}}function Qi(e,t,a,i){Gr=!1;var n=e.updateQueue;Oa=!1;var s=n.firstBaseUpdate,c=n.lastBaseUpdate,m=n.shared.pending;if(m!==null){n.shared.pending=null;var v=m,A=v.next;v.next=null,c===null?s=A:c.next=A,c=v;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==c&&(m===null?k.firstBaseUpdate=A:m.next=A,k.lastBaseUpdate=v))}if(s!==null){var U=n.baseState;c=0,k=A=v=null,m=s;do{var E=m.lane&-536870913,D=E!==m.lane;if(D?(oe&E)===E:(i&E)===E){E!==0&&E===ql&&(Gr=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var X=e,J=m;E=t;var we=a;switch(J.tag){case 1:if(X=J.payload,typeof X=="function"){U=X.call(we,U,E);break e}U=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,E=typeof X=="function"?X.call(we,U,E):X,E==null)break e;U=S({},U,E);break e;case 2:Oa=!0}}E=m.callback,E!==null&&(e.flags|=64,D&&(e.flags|=8192),D=n.callbacks,D===null?n.callbacks=[E]:D.push(E))}else D={lane:E,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(A=k=D,v=U):k=k.next=D,c|=E;if(m=m.next,m===null){if(m=n.shared.pending,m===null)break;D=m,m=D.next,D.next=null,n.lastBaseUpdate=D,n.shared.pending=null}}while(!0);k===null&&(v=U),n.baseState=v,n.firstBaseUpdate=A,n.lastBaseUpdate=k,s===null&&(n.shared.lanes=0),qa|=c,e.lanes=c,e.memoizedState=U}}function Bd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function _d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bd(a[e],t)}var Xl=ie(null),Zn=ie(0);function Gd(e,t){e=va,ce(Zn,e),ce(Xl,t),va=e|t.baseLanes}function Fr(){ce(Zn,va),ce(Xl,Xl.current)}function Hr(){va=Zn.current,be(Xl),be(Zn)}var zt=ie(null),Lt=null;function _a(e){var t=e.alternate;ce(Be,Be.current&1),ce(zt,e),Lt===null&&(t===null||Xl.current!==null||t.memoizedState!==null)&&(Lt=e)}function qr(e){ce(Be,Be.current),ce(zt,e),Lt===null&&(Lt=e)}function Fd(e){e.tag===22?(ce(Be,Be.current),ce(zt,e),Lt===null&&(Lt=e)):Ga()}function Ga(){ce(Be,Be.current),ce(zt,zt.current)}function At(e){be(zt),Lt===e&&(Lt=null),be(Be)}var Be=ie(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zc(a)||Wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,te=null,Ne=null,qe=null,Kn=!1,Vl=!1,gl=!1,Jn=0,Yi=0,Zl=null,gg=0;function Oe(){throw Error(o(321))}function Lr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function Qr(e,t,a,i,n,s){return ma=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Nu:ic,gl=!1,s=a(i,n),gl=!1,Vl&&(s=qd(t,a,i,n)),Hd(e),s}function Hd(e){_.H=Zi;var t=Ne!==null&&Ne.next!==null;if(ma=0,qe=Ne=te=null,Kn=!1,Yi=0,Zl=null,t)throw Error(o(300));e===null||Le||(e=e.dependencies,e!==null&&Hn(e)&&(Le=!0))}function qd(e,t,a,i){te=e;var n=0;do{if(Vl&&(Zl=null),Yi=0,Vl=!1,25<=n)throw Error(o(301));if(n+=1,qe=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Su,s=t(a,i)}while(Vl);return s}function pg(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Xi(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(te.flags|=1024),t}function Yr(){var e=Jn!==0;return Jn=0,e}function Xr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vr(e){if(Kn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kn=!1}ma=0,qe=Ne=te=null,Vl=!1,Yi=Jn=0,Zl=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?te.memoizedState=qe=e:qe=qe.next=e,qe}function _e(){if(Ne===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=qe===null?te.memoizedState:qe.next;if(t!==null)qe=t,Ne=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},qe===null?te.memoizedState=qe=e:qe=qe.next=e}return qe}function $n(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xi(e){var t=Yi;return Yi+=1,Zl===null&&(Zl=[]),e=kd(Zl,e,t),t=te,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Nu:ic),e}function In(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xi(e);if(e.$$typeof===Y)return it(e)}throw Error(o(438,String(e)))}function Zr(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=te.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=$n(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ie;return t.index++,a}function fa(e,t){return typeof t=="function"?t(e):t}function Pn(e){var t=_e();return Wr(t,Ne,e)}function Wr(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var n=e.baseQueue,s=i.pending;if(s!==null){if(n!==null){var c=n.next;n.next=s.next,s.next=c}t.baseQueue=n=s,i.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var m=c=null,v=null,A=t,k=!1;do{var U=A.lane&-536870913;if(U!==A.lane?(oe&U)===U:(ma&U)===U){var E=A.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),U===ql&&(k=!0);else if((ma&E)===E){A=A.next,E===ql&&(k=!0);continue}else U={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(m=v=U,c=s):v=v.next=U,te.lanes|=E,qa|=E;U=A.action,gl&&a(s,U),s=A.hasEagerState?A.eagerState:a(s,U)}else E={lane:U,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(m=v=E,c=s):v=v.next=E,te.lanes|=U,qa|=U;A=A.next}while(A!==null&&A!==t);if(v===null?c=s:v.next=m,!Ct(s,e.memoizedState)&&(Le=!0,k&&(a=Ll,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=v,i.lastRenderedState=s}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Kr(e){var t=_e(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do s=e(s,c.action),c=c.next;while(c!==n);Ct(s,t.memoizedState)||(Le=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,i]}function Ld(e,t,a){var i=te,n=_e(),s=ue;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!Ct((Ne||n).memoizedState,a);if(c&&(n.memoizedState=a,Le=!0),n=n.queue,Ir(Xd.bind(null,i,n,e),[e]),n.getSnapshot!==t||c||qe!==null&&qe.memoizedState.tag&1){if(i.flags|=2048,Wl(9,{destroy:void 0},Yd.bind(null,i,n,a,t),null),Ce===null)throw Error(o(349));s||(ma&127)!==0||Qd(i,t,a)}return a}function Qd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=$n(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Yd(e,t,a,i){t.value=a,t.getSnapshot=i,Vd(t)&&Zd(e)}function Xd(e,t,a){return a(function(){Vd(t)&&Zd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Zd(e){var t=sl(e,2);t!==null&&Nt(t,e,2)}function Jr(e){var t=mt();if(typeof e=="function"){var a=e;if(e=a(),gl){$(!0);try{a()}finally{$(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Wd(e,t,a,i){return e.baseState=a,Wr(e,Ne,typeof i=="function"?i:fa)}function bg(e,t,a,i,n){if(as(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};_.T!==null?a(!0):s.isTransition=!1,i(s),a=t.pending,a===null?(s.next=t.pending=s,Kd(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Kd(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var s=_.T,c={};_.T=c;try{var m=a(n,i),v=_.S;v!==null&&v(c,m),Jd(e,t,m)}catch(A){$r(e,t,A)}finally{s!==null&&c.types!==null&&(s.types=c.types),_.T=s}}else try{s=a(n,i),Jd(e,t,s)}catch(A){$r(e,t,A)}}function Jd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){$d(e,t,i)},function(i){return $r(e,t,i)}):$d(e,t,a)}function $d(e,t,a){t.status="fulfilled",t.value=a,Id(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Kd(e,a)))}function $r(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Id(t),t=t.next;while(t!==i)}e.action=null}function Id(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pd(e,t){return t}function eu(e,t){if(ue){var a=Ce.formState;if(a!==null){e:{var i=te;if(ue){if(ze){t:{for(var n=ze,s=qt;n.nodeType!==8;){if(!s){n=null;break t}if(n=Qt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){ze=Qt(n.nextSibling),i=n.data==="F!";break e}}Ra(i)}i=!1}i&&(t=a[0])}}return a=mt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pd,lastRenderedState:t},a.queue=i,a=yu.bind(null,te,i),i.dispatch=a,i=Jr(!1),s=lc.bind(null,te,!1,i.queue),i=mt(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=bg.bind(null,te,n,s,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function tu(e){var t=_e();return au(t,Ne,e)}function au(e,t,a){if(t=Wr(e,t,Pd)[0],e=Pn(fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xi(t)}catch(c){throw c===Ql?Qn:c}else i=t;t=_e();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Wl(9,{destroy:void 0},xg.bind(null,n,a),null)),[i,s,e]}function xg(e,t){e.action=t}function lu(e){var t=_e(),a=Ne;if(a!==null)return au(t,a,e);_e(),t=t.memoizedState,a=_e();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Wl(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=te.updateQueue,t===null&&(t=$n(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function iu(){return _e().memoizedState}function es(e,t,a,i){var n=mt();te.flags|=e,n.memoizedState=Wl(1|t,{destroy:void 0},a,i===void 0?null:i)}function ts(e,t,a,i){var n=_e();i=i===void 0?null:i;var s=n.memoizedState.inst;Ne!==null&&i!==null&&Lr(i,Ne.memoizedState.deps)?n.memoizedState=Wl(t,s,a,i):(te.flags|=e,n.memoizedState=Wl(1|t,s,a,i))}function nu(e,t){es(8390656,8,e,t)}function Ir(e,t){ts(2048,8,e,t)}function yg(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=$n(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function su(e){var t=_e().memoizedState;return yg({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function ru(e,t){return ts(4,2,e,t)}function cu(e,t){return ts(4,4,e,t)}function ou(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function du(e,t,a){a=a!=null?a.concat([e]):null,ts(4,4,ou.bind(null,t,e),a)}function Pr(){}function uu(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Lr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function mu(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Lr(t,i[1]))return i[0];if(i=e(),gl){$(!0);try{e()}finally{$(!1)}}return a.memoizedState=[i,t],i}function ec(e,t,a){return a===void 0||(ma&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fm(),te.lanes|=e,qa|=e,a)}function fu(e,t,a,i){return Ct(a,t)?a:Xl.current!==null?(e=ec(e,a,i),Ct(e,t)||(Le=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(oe&261930)===0?(Le=!0,e.memoizedState=a):(e=fm(),te.lanes|=e,qa|=e,t)}function hu(e,t,a,i,n){var s=Q.p;Q.p=s!==0&&8>s?s:8;var c=_.T,m={};_.T=m,lc(e,!1,t,a);try{var v=n(),A=_.S;if(A!==null&&A(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=hg(v,i);Vi(e,t,k,kt(e))}else Vi(e,t,i,kt(e))}catch(U){Vi(e,t,{then:function(){},status:"rejected",reason:U},kt())}finally{Q.p=s,c!==null&&m.types!==null&&(c.types=m.types),_.T=c}}function vg(){}function tc(e,t,a,i){if(e.tag!==5)throw Error(o(476));var n=gu(e).queue;hu(e,n,t,ne,a===null?vg:function(){return pu(e),a(i)})}function gu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pu(e){var t=gu(e);t.next===null&&(t=e.alternate.memoizedState),Vi(e,t.next.queue,{},kt())}function ac(){return it(dn)}function bu(){return _e().memoizedState}function xu(){return _e().memoizedState}function jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Ua(a);var i=Ba(t,e,a);i!==null&&(Nt(i,t,a),qi(i,t,a)),t={cache:kr()},e.payload=t;return}t=t.return}}function Ng(e,t,a){var i=kt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},as(e)?vu(t,a):(a=vr(e,t,a,i),a!==null&&(Nt(a,e,i),ju(a,t,i)))}function yu(e,t,a){var i=kt();Vi(e,t,a,i)}function Vi(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(as(e))vu(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,m=s(c,a);if(n.hasEagerState=!0,n.eagerState=m,Ct(m,c))return Bn(e,t,n,0),Ce===null&&Un(),!1}catch{}finally{}if(a=vr(e,t,n,i),a!==null)return Nt(a,e,i),ju(a,t,i),!0}return!1}function lc(e,t,a,i){if(i={lane:2,revertLane:Uc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},as(e)){if(t)throw Error(o(479))}else t=vr(e,a,i,2),t!==null&&Nt(t,e,2)}function as(e){var t=e.alternate;return e===te||t!==null&&t===te}function vu(e,t){Vl=Kn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ju(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,To(e,a)}}var Zi={readContext:it,use:In,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Zi.useEffectEvent=Oe;var Nu={readContext:it,use:In,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:nu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,es(4194308,4,ou.bind(null,t,e),a)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){es(4,2,e,t)},useMemo:function(e,t){var a=mt();t=t===void 0?null:t;var i=e();if(gl){$(!0);try{e()}finally{$(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=mt();if(a!==void 0){var n=a(t);if(gl){$(!0);try{a(t)}finally{$(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Ng.bind(null,te,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Jr(e);var t=e.queue,a=yu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pr,useDeferredValue:function(e,t){var a=mt();return ec(a,e,t)},useTransition:function(){var e=Jr(!1);return e=hu.bind(null,te,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=te,n=mt();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ce===null)throw Error(o(349));(oe&127)!==0||Qd(i,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,nu(Xd.bind(null,i,s,e),[e]),i.flags|=2048,Wl(9,{destroy:void 0},Yd.bind(null,i,s,a,t),null),a},useId:function(){var e=mt(),t=Ce.identifierPrefix;if(ue){var a=Pt,i=It;a=(i&~(1<<32-P(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Jn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=gg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:eu,useActionState:eu,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zr,useCacheRefresh:function(){return mt().memoizedState=jg.bind(null,te)},useEffectEvent:function(e){var t=mt(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},ic={readContext:it,use:In,useCallback:uu,useContext:it,useEffect:Ir,useImperativeHandle:du,useInsertionEffect:ru,useLayoutEffect:cu,useMemo:mu,useReducer:Pn,useRef:iu,useState:function(){return Pn(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return fu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Pn(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:Ld,useId:bu,useHostTransitionStatus:ac,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var a=_e();return Wd(a,Ne,e,t)},useMemoCache:Zr,useCacheRefresh:xu};ic.useEffectEvent=su;var Su={readContext:it,use:In,useCallback:uu,useContext:it,useEffect:Ir,useImperativeHandle:du,useInsertionEffect:ru,useLayoutEffect:cu,useMemo:mu,useReducer:Kr,useRef:iu,useState:function(){return Kr(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return Ne===null?ec(a,e,t):fu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Kr(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:Ld,useId:bu,useHostTransitionStatus:ac,useFormState:lu,useActionState:lu,useOptimistic:function(e,t){var a=_e();return Ne!==null?Wd(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zr,useCacheRefresh:xu};Su.useEffectEvent=su;function nc(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sc={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=kt(),n=Ua(i);n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,i),t!==null&&(Nt(t,e,i),qi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=kt(),n=Ua(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,i),t!==null&&(Nt(t,e,i),qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),i=Ua(a);i.tag=2,t!=null&&(i.callback=t),t=Ba(e,i,a),t!==null&&(Nt(t,e,a),qi(t,e,a))}};function wu(e,t,a,i,n,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,c):t.prototype&&t.prototype.isPureReactComponent?!Mi(a,i)||!Mi(n,s):!0}function Cu(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&sc.enqueueReplaceState(t,t.state,null)}function pl(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Tu(e){On(e)}function zu(e){console.error(e)}function Au(e){On(e)}function ls(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Eu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){ls(e,t)},a}function Du(e){return e=Ua(e),e.tag=3,e}function ku(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=i.value;e.payload=function(){return n(s)},e.callback=function(){Eu(t,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Eu(t,a,i),typeof n!="function"&&(La===null?La=new Set([this]):La.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Sg(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Hl(t,a,n,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?gs():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===Yn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Rc(e,i,n)),!1;case 22:return a.flags|=65536,i===Yn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Rc(e,i,n)),!1}throw Error(o(435,a.tag))}return Rc(e,i,n),gs(),!1}if(ue)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==Tr&&(e=Error(o(422),{cause:i}),Bi(Gt(e,a)))):(i!==Tr&&(t=Error(o(423),{cause:i}),Bi(Gt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=Gt(i,a),n=rc(e.stateNode,i,n),_r(e,n),Ue!==4&&(Ue=2)),!1;var s=Error(o(520),{cause:i});if(s=Gt(s,a),tn===null?tn=[s]:tn.push(s),Ue!==4&&(Ue=2),t===null)return!0;i=Gt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=rc(a.stateNode,i,e),_r(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(La===null||!La.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Du(n),ku(n,e,a,i),_r(a,n),!1}a=a.return}while(a!==null);return!1}var cc=Error(o(461)),Le=!1;function nt(e,t,a,i){t.child=e===null?Ud(t,null,a,i):hl(t,e.child,a,i)}function Ru(e,t,a,i,n){a=a.render;var s=t.ref;if("ref"in i){var c={};for(var m in i)m!=="ref"&&(c[m]=i[m])}else c=i;return dl(t),i=Qr(e,t,a,c,s,n),m=Yr(),e!==null&&!Le?(Xr(e,t,n),ha(e,t,n)):(ue&&m&&wr(t),t.flags|=1,nt(e,t,i,n),t.child)}function Mu(e,t,a,i,n){if(e===null){var s=a.type;return typeof s=="function"&&!jr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Ou(e,t,s,i,n)):(e=Gn(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!pc(e,n)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:Mi,a(c,i)&&e.ref===t.ref)return ha(e,t,n)}return t.flags|=1,e=ca(s,i),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,a,i,n){if(e!==null){var s=e.memoizedProps;if(Mi(s,i)&&e.ref===t.ref)if(Le=!1,t.pendingProps=i=s,pc(e,n))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,ha(e,t,n)}return oc(e,t,a,i,n)}function Uu(e,t,a,i){var n=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~s}else i=0,t.child=null;return Bu(e,t,s,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ln(t,s!==null?s.cachePool:null),s!==null?Gd(t,s):Fr(),Fd(t);else return i=t.lanes=536870912,Bu(e,t,s!==null?s.baseLanes|a:a,a,i)}else s!==null?(Ln(t,s.cachePool),Gd(t,s),Ga(),t.memoizedState=null):(e!==null&&Ln(t,null),Fr(),Ga());return nt(e,t,n,a),t.child}function Wi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bu(e,t,a,i,n){var s=Mr();return s=s===null?null:{parent:He._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Ln(t,null),Fr(),Fd(t),e!==null&&Hl(e,t,i,!0),t.childLanes=n,null}function is(e,t){return t=ss({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _u(e,t,a){return hl(t,e.child,null,a),e=is(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function wg(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(i.mode==="hidden")return e=is(t,i),t.lanes=536870912,Wi(null,e);if(qr(t),(e=ze)?(e=Km(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=vd(e),a.return=t,t.child=a,lt=t,ze=null)):e=null,e===null)throw Ra(t);return t.lanes=536870912,null}return is(t,i)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(qr(t),n)if(t.flags&256)t.flags&=-257,t=_u(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Le||Hl(e,t,a,!1),n=(a&e.childLanes)!==0,Le||n){if(i=Ce,i!==null&&(c=zo(i,a),c!==0&&c!==s.retryLane))throw s.retryLane=c,sl(e,c),Nt(i,e,c),cc;gs(),t=_u(e,t,a)}else e=s.treeContext,ze=Qt(c.nextSibling),lt=t,ue=!0,ka=null,qt=!1,e!==null&&Sd(t,e),t=is(t,i),t.flags|=4096;return t}return e=ca(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ns(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oc(e,t,a,i,n){return dl(t),a=Qr(e,t,a,i,void 0,n),i=Yr(),e!==null&&!Le?(Xr(e,t,n),ha(e,t,n)):(ue&&i&&wr(t),t.flags|=1,nt(e,t,a,n),t.child)}function Gu(e,t,a,i,n,s){return dl(t),t.updateQueue=null,a=qd(t,i,a,n),Hd(e),i=Yr(),e!==null&&!Le?(Xr(e,t,s),ha(e,t,s)):(ue&&i&&wr(t),t.flags|=1,nt(e,t,a,s),t.child)}function Fu(e,t,a,i,n){if(dl(t),t.stateNode===null){var s=Bl,c=a.contextType;typeof c=="object"&&c!==null&&(s=it(c)),s=new a(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Ur(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?it(c):Bl,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(nc(t,a,c,i),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&sc.enqueueReplaceState(s,s.state,null),Qi(t,i,s,n),Li(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,v=pl(a,m);s.props=v;var A=s.context,k=a.contextType;c=Bl,typeof k=="object"&&k!==null&&(c=it(k));var U=a.getDerivedStateFromProps;k=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||A!==c)&&Cu(t,s,i,c),Oa=!1;var E=t.memoizedState;s.state=E,Qi(t,i,s,n),Li(),A=t.memoizedState,m||E!==A||Oa?(typeof U=="function"&&(nc(t,a,U,i),A=t.memoizedState),(v=Oa||wu(t,a,v,i,E,A,c))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=A),s.props=i,s.state=A,s.context=c,i=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Br(e,t),c=t.memoizedProps,k=pl(a,c),s.props=k,U=t.pendingProps,E=s.context,A=a.contextType,v=Bl,typeof A=="object"&&A!==null&&(v=it(A)),m=a.getDerivedStateFromProps,(A=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==U||E!==v)&&Cu(t,s,i,v),Oa=!1,E=t.memoizedState,s.state=E,Qi(t,i,s,n),Li();var D=t.memoizedState;c!==U||E!==D||Oa||e!==null&&e.dependencies!==null&&Hn(e.dependencies)?(typeof m=="function"&&(nc(t,a,m,i),D=t.memoizedState),(k=Oa||wu(t,a,k,i,E,D,v)||e!==null&&e.dependencies!==null&&Hn(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,D,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,D,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),s.props=i,s.state=D,s.context=v,i=k):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,ns(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):nt(e,t,a,n),t.memoizedState=s.state,e=t.child):e=ha(e,t,n),e}function Hu(e,t,a,i){return cl(),t.flags|=256,nt(e,t,a,i),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:Ed()}}function mc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function qu(e,t,a){var i=t.pendingProps,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?_a(t):Ga(),(e=ze)?(e=Km(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=vd(e),a.return=t,t.child=a,lt=t,ze=null)):e=null,e===null)throw Ra(t);return Wc(e)?t.lanes=32:t.lanes=536870912,null}var m=i.children;return i=i.fallback,n?(Ga(),n=t.mode,m=ss({mode:"hidden",children:m},n),i=rl(i,n,a,null),m.return=t,i.return=t,m.sibling=i,t.child=m,i=t.child,i.memoizedState=uc(a),i.childLanes=mc(e,c,a),t.memoizedState=dc,Wi(null,i)):(_a(t),fc(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(s)t.flags&256?(_a(t),t.flags&=-257,t=hc(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),m=i.fallback,n=t.mode,i=ss({mode:"visible",children:i.children},n),m=rl(m,n,a,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,hl(t,e.child,null,a),i=t.child,i.memoizedState=uc(a),i.childLanes=mc(e,c,a),t.memoizedState=dc,t=Wi(null,i));else if(_a(t),Wc(m)){if(c=m.nextSibling&&m.nextSibling.dataset,c)var A=c.dgst;c=A,i=Error(o(419)),i.stack="",i.digest=c,Bi({value:i,source:null,stack:null}),t=hc(e,t,a)}else if(Le||Hl(e,t,a,!1),c=(a&e.childLanes)!==0,Le||c){if(c=Ce,c!==null&&(i=zo(c,a),i!==0&&i!==v.retryLane))throw v.retryLane=i,sl(e,i),Nt(c,e,i),cc;Zc(m)||gs(),t=hc(e,t,a)}else Zc(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,ze=Qt(m.nextSibling),lt=t,ue=!0,ka=null,qt=!1,e!==null&&Sd(t,e),t=fc(t,i.children),t.flags|=4096);return t}return n?(Ga(),m=i.fallback,n=t.mode,v=e.child,A=v.sibling,i=ca(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,A!==null?m=ca(A,m):(m=rl(m,n,a,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,Wi(null,i),i=t.child,m=e.child.memoizedState,m===null?m=uc(a):(n=m.cachePool,n!==null?(v=He._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Ed(),m={baseLanes:m.baseLanes|a,cachePool:n}),i.memoizedState=m,i.childLanes=mc(e,c,a),t.memoizedState=dc,Wi(e.child,i)):(_a(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=ss({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ss(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function hc(e,t,a){return hl(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Er(e.return,t,a)}function gc(e,t,a,i,n,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=n,c.treeForkCount=s)}function Qu(e,t,a){var i=t.pendingProps,n=i.revealOrder,s=i.tail;i=i.children;var c=Be.current,m=(c&2)!==0;if(m?(c=c&1|2,t.flags|=128):c&=1,ce(Be,c),nt(e,t,i,a),i=ue?Ui:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,a,t);else if(e.tag===19)Lu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),gc(t,!1,n,a,s,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}gc(t,!0,a,null,s,i);break;case"together":gc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hn(e)))}function Cg(e,t,a){switch(t.tag){case 3:la(t,t.stateNode.containerInfo),Ma(t,He,e.memoizedState.cache),cl();break;case 27:case 5:fi(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qr(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qu(e,t,a):(_a(t),e=ha(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Hl(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return Qu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ce(Be,Be.current),i)break;return null;case 22:return t.lanes=0,Uu(e,t,a,t.pendingProps);case 24:Ma(t,He,e.memoizedState.cache)}return ha(e,t,a)}function Yu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!pc(e,a)&&(t.flags&128)===0)return Le=!1,Cg(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,ue&&(t.flags&1048576)!==0&&Nd(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ml(t.elementType),t.type=e,typeof e=="function")jr(e)?(i=pl(e,i),t.tag=1,t=Fu(null,t,e,i,a)):(t.tag=0,t=oc(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=Ru(null,t,e,i,a);break e}else if(n===De){t.tag=14,t=Mu(null,t,e,i,a);break e}}throw t=ot(e)||e,Error(o(306,t,""))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=pl(i,t.pendingProps),Fu(e,t,i,n,a);case 3:e:{if(la(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;n=s.element,Br(e,t),Qi(t,i,null,a);var c=t.memoizedState;if(i=c.cache,Ma(t,He,i),i!==s.cache&&Dr(t,[He],a,!0),Li(),i=c.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Hu(e,t,i,a);break e}else if(i!==n){n=Gt(Error(o(424)),t),Bi(n),t=Hu(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Qt(e.firstChild),lt=t,ue=!0,ka=null,qt=!0,a=Ud(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cl(),i===n){t=ha(e,t,a);break e}nt(e,t,i,a)}t=t.child}return t;case 26:return ns(e,t),e===null?(a=tf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,i=Ns(dt.current).createElement(a),i[at]=t,i[pt]=e,st(i,a,e),Je(i),t.stateNode=i):t.memoizedState=tf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fi(t),e===null&&ue&&(i=t.stateNode=Im(t.type,t.pendingProps,dt.current),lt=t,qt=!0,n=ze,Va(t.type)?(Kc=n,ze=Qt(i.firstChild)):ze=n),nt(e,t,t.pendingProps.children,a),ns(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=i=ze)&&(i=t0(i,t.type,t.pendingProps,qt),i!==null?(t.stateNode=i,lt=t,ze=Qt(i.firstChild),qt=!1,n=!0):n=!1),n||Ra(t)),fi(t),n=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,i=s.children,Yc(n,s)?i=null:c!==null&&Yc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Qr(e,t,pg,null,null,a),dn._currentValue=n),ns(e,t),nt(e,t,i,a),t.child;case 6:return e===null&&ue&&((e=a=ze)&&(a=a0(a,t.pendingProps,qt),a!==null?(t.stateNode=a,lt=t,ze=null,e=!0):e=!1),e||Ra(t)),null;case 13:return qu(e,t,a);case 4:return la(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hl(t,null,i,a):nt(e,t,i,a),t.child;case 11:return Ru(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ma(t,t.type,i.value),nt(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,dl(t),n=it(n),i=i(n),t.flags|=1,nt(e,t,i,a),t.child;case 14:return Mu(e,t,t.type,t.pendingProps,a);case 15:return Ou(e,t,t.type,t.pendingProps,a);case 19:return Qu(e,t,a);case 31:return wg(e,t,a);case 22:return Uu(e,t,a,t.pendingProps);case 24:return dl(t),i=it(He),e===null?(n=Mr(),n===null&&(n=Ce,s=kr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:i,cache:n},Ur(t),Ma(t,He,n)):((e.lanes&a)!==0&&(Br(e,t),Qi(t,null,null,a),Li()),n=e.memoizedState,s=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ma(t,He,i)):(i=s.cache,Ma(t,He,i),i!==n.cache&&Dr(t,[He],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ga(e){e.flags|=4}function bc(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw fl=Yn,Or}else e.flags&=-16777217}function Xu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rf(t))if(bm())e.flags|=8192;else throw fl=Yn,Or}function rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ji():536870912,e.lanes|=t,Il|=t)}function Ki(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Tg(e,t,a){var i=t.pendingProps;switch(Cr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ua(He),Ca(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zr())),Ae(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(ga(t),s!==null?(Ae(t),Xu(t,s)):(Ae(t),bc(t,n,null,i,a))):s?s!==e.memoizedState?(ga(t),Ae(t),Xu(t,s)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ga(t),Ae(t),bc(t,n,e,i,a)),null;case 27:if(el(t),a=dt.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ae(t),null}e=Ke.current,Fl(t)?wd(t):(e=Im(n,i,a),t.stateNode=e,ga(t))}return Ae(t),null;case 5:if(el(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ae(t),null}if(s=Ke.current,Fl(t))wd(t);else{var c=Ns(dt.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?c.createElement(n,{is:i.is}):c.createElement(n)}}s[at]=t,s[pt]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(st(s,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ga(t)}}return Ae(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=dt.current,Fl(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=lt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||qm(e.nodeValue,a)),e||Ra(t,!0)}else e=Ns(e).createTextNode(i),e[at]=t,t.stateNode=e}return Ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fl(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Fl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[at]=t}else cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),n=!1}else n=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),rs(t,t.updateQueue),Ae(t),null);case 4:return Ca(),e===null&&Fc(t.stateNode.containerInfo),Ae(t),null;case 10:return ua(t.type),Ae(t),null;case 19:if(be(Be),i=t.memoizedState,i===null)return Ae(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Ki(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wn(e),s!==null){for(t.flags|=128,Ki(i,!1),e=s.updateQueue,t.updateQueue=e,rs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)yd(a,e),a=a.sibling;return ce(Be,Be.current&1|2),ue&&oa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ut()>ms&&(t.flags|=128,n=!0,Ki(i,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,rs(t,e),Ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ue)return Ae(t),null}else 2*ut()-i.renderingStartTime>ms&&a!==536870912&&(t.flags|=128,n=!0,Ki(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ut(),e.sibling=null,a=Be.current,ce(Be,n?a&1|2:a&1),ue&&oa(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return At(t),Hr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),a=t.updateQueue,a!==null&&rs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&be(ul),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ua(He),Ae(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function zg(e,t){switch(Cr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(He),Ca(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return el(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(o(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Be),null;case 4:return Ca(),null;case 10:return ua(t.type),null;case 22:case 23:return At(t),Hr(),e!==null&&be(ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(He),null;case 25:return null;default:return null}}function Vu(e,t){switch(Cr(t),t.tag){case 3:ua(He),Ca();break;case 26:case 27:case 5:el(t);break;case 4:Ca();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:be(Be);break;case 10:ua(t.type);break;case 22:case 23:At(t),Hr(),e!==null&&be(ul);break;case 24:ua(He)}}function Ji(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var s=a.create,c=a.inst;i=s(),c.destroy=i}a=a.next}while(a!==n)}}catch(m){ye(t,t.return,m)}}function Fa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var s=n.next;i=s;do{if((i.tag&e)===e){var c=i.inst,m=c.destroy;if(m!==void 0){c.destroy=void 0,n=t;var v=a,A=m;try{A()}catch(k){ye(n,v,k)}}}i=i.next}while(i!==s)}}catch(k){ye(t,t.return,k)}}function Zu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{_d(t,a)}catch(i){ye(e,e.return,i)}}}function Wu(e,t,a){a.props=pl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ye(e,t,i)}}function $i(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){ye(e,t,n)}}function ea(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function Ku(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function xc(e,t,a){try{var i=e.stateNode;Kg(i,e.type,a,t),i[pt]=t}catch(n){ye(e,e.return,n)}}function Ju(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,a),e=e.sibling;e!==null;)vc(e,t,a),e=e.sibling}function cs(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cs(e,t,a),e=e.sibling;e!==null;)cs(e,t,a),e=e.sibling}function $u(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);st(t,i,a),t[at]=e,t[pt]=a}catch(s){ye(e,e.return,s)}}var pa=!1,Qe=!1,jc=!1,Iu=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ag(e,t){if(e=e.containerInfo,Lc=Es,e=dd(e),hr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,m=-1,v=-1,A=0,k=0,U=e,E=null;t:for(;;){for(var D;U!==a||n!==0&&U.nodeType!==3||(m=c+n),U!==s||i!==0&&U.nodeType!==3||(v=c+i),U.nodeType===3&&(c+=U.nodeValue.length),(D=U.firstChild)!==null;)E=U,U=D;for(;;){if(U===e)break t;if(E===a&&++A===n&&(m=c),E===s&&++k===i&&(v=c),(D=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=D}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},Es=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,i=a.stateNode;try{var X=pl(a.type,n);e=i.getSnapshotBeforeUpdate(X,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(J){ye(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Pu(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),i&4&&Ji(5,a);break;case 1:if(xa(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ye(a,a.return,c)}else{var n=pl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ye(a,a.return,c)}}i&64&&Zu(a),i&512&&$i(a,a.return);break;case 3:if(xa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_d(e,t)}catch(c){ye(a,a.return,c)}}break;case 27:t===null&&i&4&&$u(a);case 26:case 5:xa(e,a),t===null&&i&4&&Ku(a),i&512&&$i(a,a.return);break;case 12:xa(e,a);break;case 31:xa(e,a),i&4&&am(e,a);break;case 13:xa(e,a),i&4&&lm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_g.bind(null,a),l0(e,a))));break;case 22:if(i=a.memoizedState!==null||pa,!i){t=t!==null&&t.memoizedState!==null||Qe,n=pa;var s=Qe;pa=i,(Qe=t)&&!s?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),pa=n,Qe=s}break;case 30:break;default:xa(e,a)}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,xt=!1;function ba(e,t,a){for(a=a.child;a!==null;)tm(e,t,a),a=a.sibling}function tm(e,t,a){if(F&&typeof F.onCommitFiberUnmount=="function")try{F.onCommitFiberUnmount(H,a)}catch{}switch(a.tag){case 26:Qe||ea(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||ea(a,t);var i=Ee,n=xt;Va(a.type)&&(Ee=a.stateNode,xt=!1),ba(e,t,a),rn(a.stateNode),Ee=i,xt=n;break;case 5:Qe||ea(a,t);case 6:if(i=Ee,n=xt,Ee=null,ba(e,t,a),Ee=i,xt=n,Ee!==null)if(xt)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(s){ye(a,t,s)}else try{Ee.removeChild(a.stateNode)}catch(s){ye(a,t,s)}break;case 18:Ee!==null&&(xt?(e=Ee,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),si(e)):Zm(Ee,a.stateNode));break;case 4:i=Ee,n=xt,Ee=a.stateNode.containerInfo,xt=!0,ba(e,t,a),Ee=i,xt=n;break;case 0:case 11:case 14:case 15:Fa(2,a,t),Qe||Fa(4,a,t),ba(e,t,a);break;case 1:Qe||(ea(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Wu(a,t,i)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Qe=(i=Qe)||a.memoizedState!==null,ba(e,t,a),Qe=i;break;default:ba(e,t,a)}}function am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(a){ye(t,t.return,a)}}}function lm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(a){ye(t,t.return,a)}}function Eg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Iu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Iu),t;default:throw Error(o(435,e.tag))}}function os(e,t){var a=Eg(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=Gg.bind(null,e,i);i.then(n,n)}})}function yt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],s=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 27:if(Va(m.type)){Ee=m.stateNode,xt=!1;break e}break;case 5:Ee=m.stateNode,xt=!1;break e;case 3:case 4:Ee=m.stateNode.containerInfo,xt=!0;break e}m=m.return}if(Ee===null)throw Error(o(160));tm(s,c,n),Ee=null,xt=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)im(t,e),t=t.sibling}var Wt=null;function im(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),vt(e),i&4&&(Fa(3,e,e.return),Ji(3,e),Fa(5,e,e.return));break;case 1:yt(t,e),vt(e),i&512&&(Qe||a===null||ea(a,a.return)),i&64&&pa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Wt;if(yt(t,e),vt(e),i&512&&(Qe||a===null||ea(a,a.return)),i&4){var s=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":s=n.getElementsByTagName("title")[0],(!s||s[wi]||s[at]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(i),n.head.insertBefore(s,n.querySelector("head > title"))),st(s,i,a),s[at]=e,Je(s),i=s;break e;case"link":var c=nf("link","href",n).get(i+(a.href||""));if(c){for(var m=0;m<c.length;m++)if(s=c[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(m,1);break t}}s=n.createElement(i),st(s,i,a),n.head.appendChild(s);break;case"meta":if(c=nf("meta","content",n).get(i+(a.content||""))){for(m=0;m<c.length;m++)if(s=c[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(m,1);break t}}s=n.createElement(i),st(s,i,a),n.head.appendChild(s);break;default:throw Error(o(468,i))}s[at]=e,Je(s),i=s}e.stateNode=i}else sf(n,e.type,e.stateNode);else e.stateNode=lf(n,i,e.memoizedProps);else s!==i?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,i===null?sf(n,e.type,e.stateNode):lf(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xc(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),vt(e),i&512&&(Qe||a===null||ea(a,a.return)),a!==null&&i&4&&xc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),vt(e),i&512&&(Qe||a===null||ea(a,a.return)),e.flags&32){n=e.stateNode;try{El(n,"")}catch(X){ye(e,e.return,X)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,xc(e,n,a!==null?a.memoizedProps:n)),i&1024&&(jc=!0);break;case 6:if(yt(t,e),vt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(X){ye(e,e.return,X)}}break;case 3:if(Cs=null,n=Wt,Wt=Ss(t.containerInfo),yt(t,e),Wt=n,vt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(X){ye(e,e.return,X)}jc&&(jc=!1,nm(e));break;case 4:i=Wt,Wt=Ss(e.stateNode.containerInfo),yt(t,e),vt(e),Wt=i;break;case 12:yt(t,e),vt(e);break;case 31:yt(t,e),vt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,os(e,i)));break;case 13:yt(t,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(us=ut()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,os(e,i)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,A=pa,k=Qe;if(pa=A||n,Qe=k||v,yt(t,e),Qe=k,pa=A,vt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||pa||Qe||bl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(s=v.stateNode,n)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{m=v.stateNode;var U=v.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;m.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(X){ye(v,v.return,X)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(X){ye(v,v.return,X)}}}else if(t.tag===18){if(a===null){v=t;try{var D=v.stateNode;n?Wm(D,!0):Wm(v.stateNode,!1)}catch(X){ye(v,v.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,os(e,a))));break;case 19:yt(t,e),vt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,os(e,i)));break;case 30:break;case 21:break;default:yt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ju(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,s=yc(e);cs(e,s,n);break;case 5:var c=a.stateNode;a.flags&32&&(El(c,""),a.flags&=-33);var m=yc(e);cs(e,m,c);break;case 3:case 4:var v=a.stateNode.containerInfo,A=yc(e);vc(e,A,v);break;default:throw Error(o(161))}}catch(k){ye(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pu(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fa(4,t,t.return),bl(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Wu(t,t.return,a),bl(t);break;case 27:rn(t.stateNode);case 26:case 5:ea(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:ya(n,s,a),Ji(4,s);break;case 1:if(ya(n,s,a),i=s,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){ye(i,i.return,A)}if(i=s,n=i.updateQueue,n!==null){var m=i.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Bd(v[n],m)}catch(A){ye(i,i.return,A)}}a&&c&64&&Zu(s),$i(s,s.return);break;case 27:$u(s);case 26:case 5:ya(n,s,a),a&&i===null&&c&4&&Ku(s),$i(s,s.return);break;case 12:ya(n,s,a);break;case 31:ya(n,s,a),a&&c&4&&am(n,s);break;case 13:ya(n,s,a),a&&c&4&&lm(n,s);break;case 22:s.memoizedState===null&&ya(n,s,a),$i(s,s.return);break;case 30:break;default:ya(n,s,a)}t=t.sibling}}function Nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_i(a))}function Sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e))}function Kt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(e,t,a,i),t=t.sibling}function sm(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,a,i),n&2048&&Ji(9,t);break;case 1:Kt(e,t,a,i);break;case 3:Kt(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_i(e)));break;case 12:if(n&2048){Kt(e,t,a,i),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,m=s.onPostCommit;typeof m=="function"&&m(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else Kt(e,t,a,i);break;case 31:Kt(e,t,a,i);break;case 13:Kt(e,t,a,i);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?Kt(e,t,a,i):Ii(e,t):s._visibility&2?Kt(e,t,a,i):(s._visibility|=2,Kl(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Nc(c,t);break;case 24:Kt(e,t,a,i),n&2048&&Sc(t.alternate,t);break;default:Kt(e,t,a,i)}}function Kl(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,m=a,v=i,A=c.flags;switch(c.tag){case 0:case 11:case 15:Kl(s,c,m,v,n),Ji(8,c);break;case 23:break;case 22:var k=c.stateNode;c.memoizedState!==null?k._visibility&2?Kl(s,c,m,v,n):Ii(s,c):(k._visibility|=2,Kl(s,c,m,v,n)),n&&A&2048&&Nc(c.alternate,c);break;case 24:Kl(s,c,m,v,n),n&&A&2048&&Sc(c.alternate,c);break;default:Kl(s,c,m,v,n)}t=t.sibling}}function Ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:Ii(a,i),n&2048&&Nc(i.alternate,i);break;case 24:Ii(a,i),n&2048&&Sc(i.alternate,i);break;default:Ii(a,i)}t=t.sibling}}var Pi=8192;function Jl(e,t,a){if(e.subtreeFlags&Pi)for(e=e.child;e!==null;)rm(e,t,a),e=e.sibling}function rm(e,t,a){switch(e.tag){case 26:Jl(e,t,a),e.flags&Pi&&e.memoizedState!==null&&g0(a,Wt,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,t,a);break;case 3:case 4:var i=Wt;Wt=Ss(e.stateNode.containerInfo),Jl(e,t,a),Wt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Pi,Pi=16777216,Jl(e,t,a),Pi=i):Jl(e,t,a));break;default:Jl(e,t,a)}}function cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function en(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,dm(i,e)}cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)om(e),e=e.sibling}function om(e){switch(e.tag){case 0:case 11:case 15:en(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:en(e);break;case 12:en(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ds(e)):en(e);break;default:en(e)}}function ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,dm(i,e)}cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fa(8,t,t.return),ds(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ds(t));break;default:ds(t)}e=e.sibling}}function dm(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:_i(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,$e=i;else e:for(a=e;$e!==null;){i=$e;var n=i.sibling,s=i.return;if(em(i),i===a){$e=null;break e}if(n!==null){n.return=s,$e=n;break e}$e=s}}}var Dg={getCacheForType:function(e){var t=it(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(He).controller.signal}},kg=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ce=null,se=null,oe=0,xe=0,Et=null,Ha=!1,$l=!1,wc=!1,va=0,Ue=0,qa=0,xl=0,Cc=0,Dt=0,Il=0,tn=null,jt=null,Tc=!1,us=0,um=0,ms=1/0,fs=null,La=null,Ze=0,Qa=null,Pl=null,ja=0,zc=0,Ac=null,mm=null,an=0,Ec=null;function kt(){return(ge&2)!==0&&oe!==0?oe&-oe:_.T!==null?Uc():Ao()}function fm(){if(Dt===0)if((oe&536870912)===0||ue){var e=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Dt=e}else Dt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Dt}function Nt(e,t,a){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Ya(e,oe,Dt,!1)),Si(e,a),((ge&2)===0||e!==Ce)&&(e===Ce&&((ge&2)===0&&(xl|=a),Ue===4&&Ya(e,oe,Dt,!1)),ta(e))}function hm(e,t,a){if((ge&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||za(e,t),n=i?Og(e,t):kc(e,t,!0),s=i;do{if(n===0){$l&&!i&&Ya(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Rg(a)){n=kc(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var m=e;n=tn;var v=m.current.memoizedState.isDehydrated;if(v&&(ei(m,c).flags|=256),c=kc(m,c,!1),c!==2){if(wc&&!v){m.errorRecoveryDisabledLanes|=s,xl|=s,n=4;break e}s=jt,jt=n,s!==null&&(jt===null?jt=s:jt.push.apply(jt,s))}n=c}if(s=!1,n!==2)continue}}if(n===1){ei(e,0),Ya(e,t,0,!0);break}e:{switch(i=e,s=n,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ya(i,t,Dt,!Ha);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=us+300-ut(),10<n)){if(Ya(i,t,Dt,!Ha),tl(i,0,!0)!==0)break e;ja=t,i.timeoutHandle=Xm(gm.bind(null,i,a,jt,fs,Tc,t,Dt,xl,Il,Ha,s,"Throttled",-0,0),n);break e}gm(i,a,jt,fs,Tc,t,Dt,xl,Il,Ha,s,null,-0,0)}}break}while(!0);ta(e)}function gm(e,t,a,i,n,s,c,m,v,A,k,U,E,D){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},rm(t,s,U);var X=(s&62914560)===s?us-ut():(s&4194048)===s?um-ut():0;if(X=p0(U,X),X!==null){ja=s,e.cancelPendingCommit=X(Sm.bind(null,e,t,s,a,i,n,c,m,v,k,U,null,E,D)),Ya(e,s,c,!A);return}}Sm(e,t,s,a,i,n,c,m,v)}function Rg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],s=n.getSnapshot;n=n.value;try{if(!Ct(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ya(e,t,a,i){t&=~Cc,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var s=31-P(n),c=1<<s;i[s]=-1,n&=~c}a!==0&&Co(e,a,t)}function hs(){return(ge&6)===0?(ln(0),!1):!0}function Dc(){if(se!==null){if(xe===0)var e=se.return;else e=se,da=ol=null,Vr(e),Yl=null,Fi=0,e=se;for(;e!==null;)Vu(e.alternate,e),e=e.return;se=null}}function ei(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ig(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,Dc(),Ce=e,se=a=ca(e.current,null),oe=t,xe=0,Et=null,Ha=!1,$l=za(e,t),wc=!1,Il=Dt=Cc=xl=qa=Ue=0,jt=tn=null,Tc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-P(i),s=1<<n;t|=e[n],i&=~s}return va=t,Un(),a}function pm(e,t){te=null,_.H=Zi,t===Ql||t===Qn?(t=Rd(),xe=3):t===Or?(t=Rd(),xe=4):xe=t===cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,se===null&&(Ue=1,ls(e,Gt(t,e.current)))}function bm(){var e=zt.current;return e===null?!0:(oe&4194048)===oe?Lt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Lt:!1}function xm(){var e=_.H;return _.H=Zi,e===null?Zi:e}function ym(){var e=_.A;return _.A=Dg,e}function gs(){Ue=4,Ha||(oe&4194048)!==oe&&zt.current!==null||($l=!0),(qa&134217727)===0&&(xl&134217727)===0||Ce===null||Ya(Ce,oe,Dt,!1)}function kc(e,t,a){var i=ge;ge|=2;var n=xm(),s=ym();(Ce!==e||oe!==t)&&(fs=null,ei(e,t)),t=!1;var c=Ue;e:do try{if(xe!==0&&se!==null){var m=se,v=Et;switch(xe){case 8:Dc(),c=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var A=xe;if(xe=0,Et=null,ti(e,m,v,A),a&&$l){c=0;break e}break;default:A=xe,xe=0,Et=null,ti(e,m,v,A)}}Mg(),c=Ue;break}catch(k){pm(e,k)}while(!0);return t&&e.shellSuspendCounter++,da=ol=null,ge=i,_.H=n,_.A=s,se===null&&(Ce=null,oe=0,Un()),c}function Mg(){for(;se!==null;)vm(se)}function Og(e,t){var a=ge;ge|=2;var i=xm(),n=ym();Ce!==e||oe!==t?(fs=null,ms=ut()+500,ei(e,t)):$l=za(e,t);e:do try{if(xe!==0&&se!==null){t=se;var s=Et;t:switch(xe){case 1:xe=0,Et=null,ti(e,t,s,1);break;case 2:case 9:if(Dd(s)){xe=0,Et=null,jm(t);break}t=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),ta(e)},s.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Dd(s)?(xe=0,Et=null,jm(t)):(xe=0,Et=null,ti(e,t,s,7));break;case 5:var c=null;switch(se.tag){case 26:c=se.memoizedState;case 5:case 27:var m=se;if(c?rf(c):m.stateNode.complete){xe=0,Et=null;var v=m.sibling;if(v!==null)se=v;else{var A=m.return;A!==null?(se=A,ps(A)):se=null}break t}}xe=0,Et=null,ti(e,t,s,5);break;case 6:xe=0,Et=null,ti(e,t,s,6);break;case 8:Dc(),Ue=6;break e;default:throw Error(o(462))}}Ug();break}catch(k){pm(e,k)}while(!0);return da=ol=null,_.H=i,_.A=n,ge=a,se!==null?0:(Ce=null,oe=0,Un(),Ue)}function Ug(){for(;se!==null&&!Zs();)vm(se)}function vm(e){var t=Yu(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?ps(e):se=t}function jm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gu(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Gu(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Vr(t);default:Vu(a,t),t=se=yd(t,va),t=Yu(a,t,va)}e.memoizedProps=e.pendingProps,t===null?ps(e):se=t}function ti(e,t,a,i){da=ol=null,Vr(t),Yl=null,Fi=0;var n=t.return;try{if(Sg(e,n,t,a,oe)){Ue=1,ls(e,Gt(a,e.current)),se=null;return}}catch(s){if(n!==null)throw se=n,s;Ue=1,ls(e,Gt(a,e.current)),se=null;return}t.flags&32768?(ue||i===1?e=!0:$l||(oe&536870912)!==0?e=!1:(Ha=e=!0,(i===2||i===9||i===3||i===6)&&(i=zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nm(t,e)):ps(t)}function ps(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,Ha);return}e=t.return;var a=Tg(t.alternate,t,va);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ue===0&&(Ue=5)}function Nm(e,t){do{var a=zg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Ue=6,se=null}function Sm(e,t,a,i,n,s,c,m,v){e.cancelPendingCommit=null;do bs();while(Ze!==0);if((ge&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=yr,hh(e,a,s,c,m,v),e===Ce&&(se=Ce=null,oe=0),Pl=t,Qa=e,ja=a,zc=s,Ac=n,mm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fg(jl,function(){return Am(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,n=Q.p,Q.p=2,c=ge,ge|=4;try{Ag(e,t,a)}finally{ge=c,Q.p=n,_.T=i}}Ze=1,wm(),Cm(),Tm()}}function wm(){if(Ze===1){Ze=0;var e=Qa,t=Pl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var i=Q.p;Q.p=2;var n=ge;ge|=4;try{im(t,e);var s=Qc,c=dd(e.containerInfo),m=s.focusedElem,v=s.selectionRange;if(c!==m&&m&&m.ownerDocument&&od(m.ownerDocument.documentElement,m)){if(v!==null&&hr(m)){var A=v.start,k=v.end;if(k===void 0&&(k=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(k,m.value.length);else{var U=m.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var D=E.getSelection(),X=m.textContent.length,J=Math.min(v.start,X),we=v.end===void 0?J:Math.min(v.end,X);!D.extend&&J>we&&(c=we,we=J,J=c);var C=cd(m,J),j=cd(m,we);if(C&&j&&(D.rangeCount!==1||D.anchorNode!==C.node||D.anchorOffset!==C.offset||D.focusNode!==j.node||D.focusOffset!==j.offset)){var z=U.createRange();z.setStart(C.node,C.offset),D.removeAllRanges(),J>we?(D.addRange(z),D.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),D.addRange(z))}}}}for(U=[],D=m;D=D.parentNode;)D.nodeType===1&&U.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<U.length;m++){var M=U[m];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Es=!!Lc,Qc=Lc=null}finally{ge=n,Q.p=i,_.T=a}}e.current=t,Ze=2}}function Cm(){if(Ze===2){Ze=0;var e=Qa,t=Pl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var i=Q.p;Q.p=2;var n=ge;ge|=4;try{Pu(e,t.alternate,t)}finally{ge=n,Q.p=i,_.T=a}}Ze=3}}function Tm(){if(Ze===4||Ze===3){Ze=0,jn();var e=Qa,t=Pl,a=ja,i=mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Pl=Qa=null,zm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(La=null),Ks(a),t=t.stateNode,F&&typeof F.onCommitFiberRoot=="function")try{F.onCommitFiberRoot(H,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,n=Q.p,Q.p=2,_.T=null;try{for(var s=e.onRecoverableError,c=0;c<i.length;c++){var m=i[c];s(m.value,{componentStack:m.stack})}}finally{_.T=t,Q.p=n}}(ja&3)!==0&&bs(),ta(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ec?an++:(an=0,Ec=e):an=0,ln(0)}}function zm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_i(t)))}function bs(){return wm(),Cm(),Tm(),Am()}function Am(){if(Ze!==5)return!1;var e=Qa,t=zc;zc=0;var a=Ks(ja),i=_.T,n=Q.p;try{Q.p=32>a?32:a,_.T=null,a=Ac,Ac=null;var s=Qa,c=ja;if(Ze=0,Pl=Qa=null,ja=0,(ge&6)!==0)throw Error(o(331));var m=ge;if(ge|=4,om(s.current),sm(s,s.current,c,a),ge=m,ln(0,!1),F&&typeof F.onPostCommitFiberRoot=="function")try{F.onPostCommitFiberRoot(H,s)}catch{}return!0}finally{Q.p=n,_.T=i,zm(e,t)}}function Em(e,t,a){t=Gt(a,t),t=rc(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Si(e,2),ta(e))}function ye(e,t,a){if(e.tag===3)Em(e,e,a);else for(;t!==null;){if(t.tag===3){Em(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(La===null||!La.has(i))){e=Gt(a,e),a=Du(2),i=Ba(t,a,2),i!==null&&(ku(a,i,t,e),Si(i,2),ta(i));break}}t=t.return}}function Rc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new kg;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(wc=!0,n.add(a),e=Bg.bind(null,e,t,a),t.then(e,e))}function Bg(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(oe&a)===a&&(Ue===4||Ue===3&&(oe&62914560)===oe&&300>ut()-us?(ge&2)===0&&ei(e,0):Cc|=a,Il===oe&&(Il=0)),ta(e)}function Dm(e,t){t===0&&(t=ji()),e=sl(e,t),e!==null&&(Si(e,t),ta(e))}function _g(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Dm(e,a)}function Gg(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Dm(e,a)}function Fg(e,t){return bi(e,t)}var xs=null,ai=null,Mc=!1,ys=!1,Oc=!1,Xa=0;function ta(e){e!==ai&&e.next===null&&(ai===null?xs=ai=e:ai=ai.next=e),ys=!0,Mc||(Mc=!0,qg())}function ln(e,t){if(!Oc&&ys){Oc=!0;do for(var a=!1,i=xs;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var s=0;else{var c=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-P(42|e)+1)-1,s&=n&~(c&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Om(i,s))}else s=oe,s=tl(i,i===Ce?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||za(i,s)||(a=!0,Om(i,s));i=i.next}while(a);Oc=!1}}function Hg(){km()}function km(){ys=Mc=!1;var e=0;Xa!==0&&$g()&&(e=Xa);for(var t=ut(),a=null,i=xs;i!==null;){var n=i.next,s=Rm(i,t);s===0?(i.next=null,a===null?xs=n:a.next=n,n===null&&(ai=a)):(a=i,(e!==0||(s&3)!==0)&&(ys=!0)),i=n}Ze!==0&&Ze!==5||ln(e),Xa!==0&&(Xa=0)}function Rm(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-P(s),m=1<<c,v=n[c];v===-1?((m&a)===0||(m&i)!==0)&&(n[c]=vi(m,t)):v<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ce,a=oe,a=tl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vl(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||za(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&vl(i),Ks(a)){case 2:case 8:a=Sn;break;case 32:a=jl;break;case 268435456:a=Nl;break;default:a=jl}return i=Mm.bind(null,e),a=bi(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&vl(i),e.callbackPriority=2,e.callbackNode=null,2}function Mm(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bs()&&e.callbackNode!==a)return null;var i=oe;return i=tl(e,e===Ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hm(e,i,t),Rm(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Mm.bind(null,e):null)}function Om(e,t){if(bs())return null;hm(e,t,!0)}function qg(){Pg(function(){(ge&6)!==0?bi(Nn,Hg):km()})}function Uc(){if(Xa===0){var e=ql;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),Xa=e}return Xa}function Um(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zn(""+e)}function Bm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Lg(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var s=Um((n[pt]||null).action),c=i.submitter;c&&(t=(t=c[pt]||null)?Um(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var m=new kn("action","action",null,i,n);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var v=c?Bm(n,c):new FormData(n);tc(a,{pending:!0,data:v,method:n.method,action:s},null,v)}}else typeof s=="function"&&(m.preventDefault(),v=c?Bm(n,c):new FormData(n),tc(a,{pending:!0,data:v,method:n.method,action:s},s,v))},currentTarget:n}]})}}for(var Bc=0;Bc<xr.length;Bc++){var _c=xr[Bc],Qg=_c.toLowerCase(),Yg=_c[0].toUpperCase()+_c.slice(1);Zt(Qg,"on"+Yg)}Zt(fd,"onAnimationEnd"),Zt(hd,"onAnimationIteration"),Zt(gd,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(sg,"onTransitionRun"),Zt(rg,"onTransitionStart"),Zt(cg,"onTransitionCancel"),Zt(pd,"onTransitionEnd"),zl("onMouseEnter",["mouseout","mouseover"]),zl("onMouseLeave",["mouseout","mouseover"]),zl("onPointerEnter",["pointerout","pointerover"]),zl("onPointerLeave",["pointerout","pointerover"]),al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),al("onBeforeInput",["compositionend","keypress","textInput","paste"]),al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nn));function _m(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var c=i.length-1;0<=c;c--){var m=i[c],v=m.instance,A=m.currentTarget;if(m=m.listener,v!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=A;try{s(n)}catch(k){On(k)}n.currentTarget=null,s=v}else for(c=0;c<i.length;c++){if(m=i[c],v=m.instance,A=m.currentTarget,m=m.listener,v!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=A;try{s(n)}catch(k){On(k)}n.currentTarget=null,s=v}}}}function re(e,t){var a=t[Js];a===void 0&&(a=t[Js]=new Set);var i=e+"__bubble";a.has(i)||(Gm(t,e,2,!1),a.add(i))}function Gc(e,t,a){var i=0;t&&(i|=4),Gm(a,e,i,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Fc(e){if(!e[vs]){e[vs]=!0,ko.forEach(function(a){a!=="selectionchange"&&(Xg.has(a)||Gc(a,!1,e),Gc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,Gc("selectionchange",!1,t))}}function Gm(e,t,a,i){switch(hf(t)){case 2:var n=y0;break;case 8:n=v0;break;default:n=eo}a=n.bind(null,t,a,e),n=void 0,!nr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Hc(e,t,a,i,n){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var m=i.stateNode.containerInfo;if(m===n)break;if(c===4)for(c=i.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;m!==null;){if(c=wl(m),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){i=s=c;continue e}m=m.parentNode}}i=i.return}Qo(function(){var A=s,k=lr(a),U=[];e:{var E=bd.get(e);if(E!==void 0){var D=kn,X=e;switch(e){case"keypress":if(En(a)===0)break e;case"keydown":case"keyup":D=Gh;break;case"focusin":X="focus",D=or;break;case"focusout":X="blur",D=or;break;case"beforeblur":case"afterblur":D=or;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=qh;break;case fd:case hd:case gd:D=Eh;break;case pd:D=Qh;break;case"scroll":case"scrollend":D=wh;break;case"wheel":D=Xh;break;case"copy":case"cut":case"paste":D=kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Wo;break;case"toggle":case"beforetoggle":D=Zh}var J=(t&4)!==0,we=!J&&(e==="scroll"||e==="scrollend"),C=J?E!==null?E+"Capture":null:E;J=[];for(var j=A,z;j!==null;){var M=j;if(z=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||z===null||C===null||(M=Ti(j,C),M!=null&&J.push(sn(j,M,z))),we)break;j=j.return}0<J.length&&(E=new D(E,X,null,a,k),U.push({event:E,listeners:J}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",E&&a!==ar&&(X=a.relatedTarget||a.fromElement)&&(wl(X)||X[Sl]))break e;if((D||E)&&(E=k.window===k?k:(E=k.ownerDocument)?E.defaultView||E.parentWindow:window,D?(X=a.relatedTarget||a.toElement,D=A,X=X?wl(X):null,X!==null&&(we=x(X),J=X.tag,X!==we||J!==5&&J!==27&&J!==6)&&(X=null)):(D=null,X=A),D!==X)){if(J=Vo,M="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(J=Wo,M="onPointerLeave",C="onPointerEnter",j="pointer"),we=D==null?E:Ci(D),z=X==null?E:Ci(X),E=new J(M,j+"leave",D,a,k),E.target=we,E.relatedTarget=z,M=null,wl(k)===A&&(J=new J(C,j+"enter",X,a,k),J.target=z,J.relatedTarget=we,M=J),we=M,D&&X)t:{for(J=Vg,C=D,j=X,z=0,M=C;M;M=J(M))z++;M=0;for(var W=j;W;W=J(W))M++;for(;0<z-M;)C=J(C),z--;for(;0<M-z;)j=J(j),M--;for(;z--;){if(C===j||j!==null&&C===j.alternate){J=C;break t}C=J(C),j=J(j)}J=null}else J=null;D!==null&&Fm(U,E,D,J,!1),X!==null&&we!==null&&Fm(U,we,X,J,!0)}}e:{if(E=A?Ci(A):window,D=E.nodeName&&E.nodeName.toLowerCase(),D==="select"||D==="input"&&E.type==="file")var me=ad;else if(ed(E))if(ld)me=lg;else{me=tg;var V=eg}else D=E.nodeName,!D||D.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&tr(A.elementType)&&(me=ad):me=ag;if(me&&(me=me(e,A))){td(U,me,a,k);break e}V&&V(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&er(E,"number",E.value)}switch(V=A?Ci(A):window,e){case"focusin":(ed(V)||V.contentEditable==="true")&&(Ml=V,gr=A,Oi=null);break;case"focusout":Oi=gr=Ml=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,ud(U,a,k);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":ud(U,a,k)}var ae;if(ur)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Rl?Io(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Ko&&a.locale!=="ko"&&(Rl||de!=="onCompositionStart"?de==="onCompositionEnd"&&Rl&&(ae=Yo()):(Ea=k,sr="value"in Ea?Ea.value:Ea.textContent,Rl=!0)),V=js(A,de),0<V.length&&(de=new Zo(de,e,null,a,k),U.push({event:de,listeners:V}),ae?de.data=ae:(ae=Po(a),ae!==null&&(de.data=ae)))),(ae=Kh?Jh(e,a):$h(e,a))&&(de=js(A,"onBeforeInput"),0<de.length&&(V=new Zo("onBeforeInput","beforeinput",null,a,k),U.push({event:V,listeners:de}),V.data=ae)),Lg(U,e,A,a,k)}_m(U,t)})}function sn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function js(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Ti(e,a),n!=null&&i.unshift(sn(e,n,s)),n=Ti(e,t),n!=null&&i.push(sn(e,n,s))),e.tag===3)return i;e=e.return}return[]}function Vg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fm(e,t,a,i,n){for(var s=t._reactName,c=[];a!==null&&a!==i;){var m=a,v=m.alternate,A=m.stateNode;if(m=m.tag,v!==null&&v===i)break;m!==5&&m!==26&&m!==27||A===null||(v=A,n?(A=Ti(a,s),A!=null&&c.unshift(sn(a,A,v))):n||(A=Ti(a,s),A!=null&&c.push(sn(a,A,v)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Zg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Hm(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace(Wg,"")}function qm(e,t){return t=Hm(t),Hm(e)===t}function Se(e,t,a,i,n,s){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||El(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&El(e,""+i);break;case"className":Cn(e,"class",i);break;case"tabIndex":Cn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,a,i);break;case"style":qo(e,i,s);break;case"data":if(t!=="object"){Cn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=zn(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=zn(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=sa);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=zn(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":re("beforetoggle",e),re("toggle",e),wn(e,"popover",i);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":wn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nh.get(a)||a,wn(e,a,i))}}function qc(e,t,a,i,n,s){switch(a){case"style":qo(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?El(e,i):(typeof i=="number"||typeof i=="bigint")&&El(e,""+i);break;case"onScroll":i!=null&&re("scroll",e);break;case"onScrollEnd":i!=null&&re("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[pt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof i=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):wn(e,a,i)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var i=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,s,c,a,null)}}n&&Se(e,t,"srcSet",a.srcSet,a,null),i&&Se(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var m=s=c=n=null,v=null,A=null;for(i in a)if(a.hasOwnProperty(i)){var k=a[i];if(k!=null)switch(i){case"name":n=k;break;case"type":c=k;break;case"checked":v=k;break;case"defaultChecked":A=k;break;case"value":s=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Se(e,t,i,k,a,null)}}_o(e,s,m,v,A,c,n,!1);return;case"select":re("invalid",e),i=c=s=null;for(n in a)if(a.hasOwnProperty(n)&&(m=a[n],m!=null))switch(n){case"value":s=m;break;case"defaultValue":c=m;break;case"multiple":i=m;default:Se(e,t,n,m,a,null)}t=s,a=c,e.multiple=!!i,t!=null?Al(e,!!i,t,!1):a!=null&&Al(e,!!i,a,!0);return;case"textarea":re("invalid",e),s=n=i=null;for(c in a)if(a.hasOwnProperty(c)&&(m=a[c],m!=null))switch(c){case"value":i=m;break;case"defaultValue":n=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:Se(e,t,c,m,a,null)}Fo(e,i,n,s);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(i=a[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,v,i,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(i=0;i<nn.length;i++)re(nn[i],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(i=a[A],i!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,A,i,a,null)}return;default:if(tr(t)){for(k in a)a.hasOwnProperty(k)&&(i=a[k],i!==void 0&&qc(e,t,k,i,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(i=a[m],i!=null&&Se(e,t,m,i,a,null))}function Kg(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,c=null,m=null,v=null,A=null,k=null;for(D in a){var U=a[D];if(a.hasOwnProperty(D)&&U!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=U;default:i.hasOwnProperty(D)||Se(e,t,D,null,i,U)}}for(var E in i){var D=i[E];if(U=a[E],i.hasOwnProperty(E)&&(D!=null||U!=null))switch(E){case"type":s=D;break;case"name":n=D;break;case"checked":A=D;break;case"defaultChecked":k=D;break;case"value":c=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==U&&Se(e,t,E,D,i,U)}}Ps(e,c,m,v,A,k,s,n);return;case"select":D=c=m=E=null;for(s in a)if(v=a[s],a.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":D=v;default:i.hasOwnProperty(s)||Se(e,t,s,null,i,v)}for(n in i)if(s=i[n],v=a[n],i.hasOwnProperty(n)&&(s!=null||v!=null))switch(n){case"value":E=s;break;case"defaultValue":m=s;break;case"multiple":c=s;default:s!==v&&Se(e,t,n,s,i,v)}t=m,a=c,i=D,E!=null?Al(e,!!a,E,!1):!!i!=!!a&&(t!=null?Al(e,!!a,t,!0):Al(e,!!a,a?[]:"",!1));return;case"textarea":D=E=null;for(m in a)if(n=a[m],a.hasOwnProperty(m)&&n!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Se(e,t,m,null,i,n)}for(c in i)if(n=i[c],s=a[c],i.hasOwnProperty(c)&&(n!=null||s!=null))switch(c){case"value":E=n;break;case"defaultValue":D=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==s&&Se(e,t,c,n,i,s)}Go(e,E,D);return;case"option":for(var X in a)if(E=a[X],a.hasOwnProperty(X)&&E!=null&&!i.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:Se(e,t,X,null,i,E)}for(v in i)if(E=i[v],D=a[v],i.hasOwnProperty(v)&&E!==D&&(E!=null||D!=null))switch(v){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Se(e,t,v,E,i,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)E=a[J],a.hasOwnProperty(J)&&E!=null&&!i.hasOwnProperty(J)&&Se(e,t,J,null,i,E);for(A in i)if(E=i[A],D=a[A],i.hasOwnProperty(A)&&E!==D&&(E!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:Se(e,t,A,E,i,D)}return;default:if(tr(t)){for(var we in a)E=a[we],a.hasOwnProperty(we)&&E!==void 0&&!i.hasOwnProperty(we)&&qc(e,t,we,void 0,i,E);for(k in i)E=i[k],D=a[k],!i.hasOwnProperty(k)||E===D||E===void 0&&D===void 0||qc(e,t,k,E,i,D);return}}for(var C in a)E=a[C],a.hasOwnProperty(C)&&E!=null&&!i.hasOwnProperty(C)&&Se(e,t,C,null,i,E);for(U in i)E=i[U],D=a[U],!i.hasOwnProperty(U)||E===D||E==null&&D==null||Se(e,t,U,E,i,D)}function Lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],s=n.transferSize,c=n.initiatorType,m=n.duration;if(s&&m&&Lm(c)){for(c=0,m=n.responseEnd,i+=1;i<a.length;i++){var v=a[i],A=v.startTime;if(A>m)break;var k=v.transferSize,U=v.initiatorType;k&&Lm(U)&&(v=v.responseEnd,c+=k*(v<m?1:(m-A)/(v-A)))}if(--i,t+=8*(s+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Qc=null;function Ns(e){return e.nodeType===9?e:e.ownerDocument}function Qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function $g(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Xm=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,Pg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(e0)}:Xm;function e0(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Zm(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),si(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")rn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,rn(a);for(var s=a.firstChild;s;){var c=s.nextSibling,m=s.nodeName;s[wi]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}else a==="body"&&rn(e.ownerDocument.body);a=n}while(a);si(t)}function Wm(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vc(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function t0(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function a0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function Km(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kc=null;function Jm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function $m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Im(e,t,a){switch(t=Ns(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function rn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var Yt=new Map,Pm=new Set;function Ss(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=Q.d;Q.d={f:i0,r:n0,D:s0,C:r0,L:c0,m:o0,X:u0,S:d0,M:m0};function i0(){var e=Na.f(),t=hs();return e||t}function n0(e){var t=Cl(e);t!==null&&t.tag===5&&t.type==="form"?pu(t):Na.r(e)}var li=typeof document>"u"?null:document;function ef(e,t,a){var i=li;if(i&&typeof t=="string"&&t){var n=Bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pm.has(n)||(Pm.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),st(t,"link",e),Je(t),i.head.appendChild(t)))}}function s0(e){Na.D(e),ef("dns-prefetch",e,null)}function r0(e,t){Na.C(e,t),ef("preconnect",e,t)}function c0(e,t,a){Na.L(e,t,a);var i=li;if(i&&e&&t){var n='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Bt(a.imageSizes)+'"]')):n+='[href="'+Bt(e)+'"]';var s=n;switch(t){case"style":s=ii(e);break;case"script":s=ni(e)}Yt.has(s)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(s,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(cn(s))||t==="script"&&i.querySelector(on(s))||(t=i.createElement("link"),st(t,"link",e),Je(t),i.head.appendChild(t)))}}function o0(e,t){Na.m(e,t);var a=li;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Bt(i)+'"][href="'+Bt(e)+'"]',s=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ni(e)}if(!Yt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Yt.set(s,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(on(s)))return}i=a.createElement("link"),st(i,"link",e),Je(i),a.head.appendChild(i)}}}function d0(e,t,a){Na.S(e,t,a);var i=li;if(i&&e){var n=Tl(i).hoistableStyles,s=ii(e);t=t||"default";var c=n.get(s);if(!c){var m={loading:0,preload:null};if(c=i.querySelector(cn(s)))m.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(s))&&Jc(e,a);var v=c=i.createElement("link");Je(v),st(v,"link",e),v._p=new Promise(function(A,k){v.onload=A,v.onerror=k}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,ws(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:m},n.set(s,c)}}}function u0(e,t){Na.X(e,t);var a=li;if(a&&e){var i=Tl(a).hoistableScripts,n=ni(e),s=i.get(n);s||(s=a.querySelector(on(n)),s||(e=S({src:e,async:!0},t),(t=Yt.get(n))&&$c(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(n,s))}}function m0(e,t){Na.M(e,t);var a=li;if(a&&e){var i=Tl(a).hoistableScripts,n=ni(e),s=i.get(n);s||(s=a.querySelector(on(n)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&$c(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(n,s))}}function tf(e,t,a,i){var n=(n=dt.current)?Ss(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ii(a.href),a=Tl(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ii(a.href);var s=Tl(n).hoistableStyles,c=s.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=n.querySelector(cn(e)))&&!s._p&&(c.instance=s,c.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),s||f0(n,e,a,c.state))),t&&i===null)throw Error(o(528,""));return c}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ni(a),a=Tl(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ii(e){return'href="'+Bt(e)+'"'}function cn(e){return'link[rel="stylesheet"]['+e+"]"}function af(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function f0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),st(t,"link",a),Je(t),e.head.appendChild(t))}function ni(e){return'[src="'+Bt(e)+'"]'}function on(e){return"script[async]"+e}function lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(i)return t.instance=i,Je(i),i;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),st(i,"style",n),ws(i,a.precedence,e),t.instance=i;case"stylesheet":n=ii(a.href);var s=e.querySelector(cn(n));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=af(a),(n=Yt.get(n))&&Jc(i,n),s=(e.ownerDocument||e).createElement("link"),Je(s);var c=s;return c._p=new Promise(function(m,v){c.onload=m,c.onerror=v}),st(s,"link",i),t.state.loading|=4,ws(s,a.precedence,e),t.instance=s;case"script":return s=ni(a.src),(n=e.querySelector(on(s)))?(t.instance=n,Je(n),n):(i=a,(n=Yt.get(s))&&(i=S({},a),$c(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),st(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ws(i,a.precedence,e));return t.instance}function ws(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,s=n,c=0;c<i.length;c++){var m=i[c];if(m.dataset.precedence===t)s=m;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cs=null;function nf(e,t,a){if(Cs===null){var i=new Map,n=Cs=new Map;n.set(a,i)}else n=Cs,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[wi]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var m=i.get(c);m?m.push(s):i.set(c,[s])}}return i}function sf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function h0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ii(i.href),s=t.querySelector(cn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ts.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Je(s);return}s=t.ownerDocument||t,i=af(i),(n=Yt.get(n))&&Jc(i,n),s=s.createElement("link"),Je(s);var c=s;c._p=new Promise(function(m,v){c.onload=m,c.onerror=v}),st(s,"link",i),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ts.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ic=0;function p0(e,t){return e.stylesheets&&e.count===0&&As(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&As(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ic===0&&(Ic=62500*Jg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&As(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ic?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function Ts(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)As(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zs=null;function As(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zs=new Map,t.forEach(b0,e),zs=null,Ts.call(e))}function b0(e,t){if(!(t.state.loading&4)){var a=zs.get(e);if(a)var i=a.get(null);else{a=new Map,zs.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var c=n[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}n=t.instance,c=n.getAttribute("data-precedence"),s=a.get(c)||i,s===i&&a.set(null,n),a.set(c,n),this.count++,i=Ts.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var dn={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function x0(e,t,a,i,n,s,c,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function cf(e,t,a,i,n,s,c,m,v,A,k,U){return e=new x0(e,t,a,c,v,A,k,U,m),t=1,s===!0&&(t|=24),s=Tt(3,null,null,t),e.current=s,s.stateNode=e,t=kr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:a,cache:t},Ur(s),e}function of(e){return e?(e=Bl,e):Bl}function df(e,t,a,i,n,s){n=of(n),i.context===null?i.context=n:i.pendingContext=n,i=Ua(t),i.payload={element:a},s=s===void 0?null:s,s!==null&&(i.callback=s),a=Ba(e,i,t),a!==null&&(Nt(a,e,t),qi(a,e,t))}function uf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pc(e,t){uf(e,t),(e=e.alternate)&&uf(e,t)}function mf(e){if(e.tag===13||e.tag===31){var t=sl(e,67108864);t!==null&&Nt(t,e,67108864),Pc(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=kt();t=Ws(t);var a=sl(e,t);a!==null&&Nt(a,e,t),Pc(e,t)}}var Es=!0;function y0(e,t,a,i){var n=_.T;_.T=null;var s=Q.p;try{Q.p=2,eo(e,t,a,i)}finally{Q.p=s,_.T=n}}function v0(e,t,a,i){var n=_.T;_.T=null;var s=Q.p;try{Q.p=8,eo(e,t,a,i)}finally{Q.p=s,_.T=n}}function eo(e,t,a,i){if(Es){var n=to(i);if(n===null)Hc(e,t,i,Ds,a),gf(e,i);else if(N0(n,e,t,a,i))i.stopPropagation();else if(gf(e,i),t&4&&-1<j0.indexOf(e)){for(;n!==null;){var s=Cl(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=$t(s.pendingLanes);if(c!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;c;){var v=1<<31-P(c);m.entanglements[1]|=v,c&=~v}ta(s),(ge&6)===0&&(ms=ut()+500,ln(0))}}break;case 31:case 13:m=sl(s,2),m!==null&&Nt(m,s,2),hs(),Pc(s,2)}if(s=to(i),s===null&&Hc(e,t,i,Ds,a),s===n)break;n=s}n!==null&&i.stopPropagation()}else Hc(e,t,i,null,a)}}function to(e){return e=lr(e),ao(e)}var Ds=null;function ao(e){if(Ds=null,e=wl(e),e!==null){var t=x(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ds=e,null}function hf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xi()){case Nn:return 2;case Sn:return 8;case jl:case yi:return 32;case Nl:return 268435456;default:return 32}default:return 32}}var lo=!1,Za=null,Wa=null,Ka=null,un=new Map,mn=new Map,Ja=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gf(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(t.pointerId)}}function fn(e,t,a,i,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Cl(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function N0(e,t,a,i,n){switch(t){case"focusin":return Za=fn(Za,e,t,a,i,n),!0;case"dragenter":return Wa=fn(Wa,e,t,a,i,n),!0;case"mouseover":return Ka=fn(Ka,e,t,a,i,n),!0;case"pointerover":var s=n.pointerId;return un.set(s,fn(un.get(s)||null,e,t,a,i,n)),!0;case"gotpointercapture":return s=n.pointerId,mn.set(s,fn(mn.get(s)||null,e,t,a,i,n)),!0}return!1}function pf(e){var t=wl(e.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){ff(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=to(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ar=i,a.target.dispatchEvent(i),ar=null}else return t=Cl(a),t!==null&&mf(t),e.blockedOn=a,!1;t.shift()}return!0}function bf(e,t,a){ks(e)&&a.delete(t)}function S0(){lo=!1,Za!==null&&ks(Za)&&(Za=null),Wa!==null&&ks(Wa)&&(Wa=null),Ka!==null&&ks(Ka)&&(Ka=null),un.forEach(bf),mn.forEach(bf)}function Rs(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,S0)))}var Ms=null;function xf(e){Ms!==e&&(Ms=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Ms===e&&(Ms=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(ao(i||a)===null)continue;break}var s=Cl(a);s!==null&&(e.splice(t,3),t-=3,tc(s,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function si(e){function t(v){return Rs(v,e)}Za!==null&&Rs(Za,e),Wa!==null&&Rs(Wa,e),Ka!==null&&Rs(Ka,e),un.forEach(t),mn.forEach(t);for(var a=0;a<Ja.length;a++){var i=Ja[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)pf(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],s=a[i+1],c=n[pt]||null;if(typeof s=="function")c||xf(a);else if(c){var m=null;if(s&&s.hasAttribute("formAction")){if(n=s,c=s[pt]||null)m=c.formAction;else if(ao(n)!==null)continue}else m=c.action;typeof m=="function"?a[i+1]=m:(a.splice(i,3),i-=3),xf(a)}}}function yf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function io(e){this._internalRoot=e}Os.prototype.render=io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=kt();df(a,i,e,t,null,null)},Os.prototype.unmount=io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;df(e.current,2,null,e,null,null),hs(),t[Sl]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ao();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ja.length&&t!==0&&t<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&pf(e)}};var vf=r.version;if(vf!=="19.2.0")throw Error(o(527,vf,"19.2.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var w0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{H=Us.inject(w0),F=Us}catch{}}return hn.createRoot=function(e,t){if(!f(e))throw Error(o(299));var a=!1,i="",n=Tu,s=zu,c=Au;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=cf(e,1,!1,null,null,a,i,null,n,s,c,yf),e[Sl]=t.current,Fc(e),new io(t)},hn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(o(299));var i=!1,n="",s=Tu,c=zu,m=Au,v=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=cf(e,1,!0,t,a??null,i,n,v,s,c,m,yf),t.context=of(null),a=t.current,i=kt(),i=Ws(i),n=Ua(i),n.callback=null,Ba(a,n,i),a=i,t.current.lanes=a,Si(t,a),ta(t),e[Sl]=t.current,Fc(e),new Os(t)},hn.version="19.2.0",hn}var Tf;function cp(){if(Tf)return so.exports;Tf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(r){console.error(r)}}return d(),so.exports=rp(),so.exports}var op=cp();const dp=E0(op);Yf();/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bn(){return bn=Object.assign?Object.assign.bind():function(d){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(d[o]=u[o])}return d},bn.apply(this,arguments)}const vo=w.createContext(null),up=w.createContext(null),Pa=w.createContext(null),Qs=w.createContext(null),wa=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Xf=w.createContext(null);function mp(d,r){let{relative:u}=r===void 0?{}:r;di()||ft(!1);let{basename:o,navigator:f}=w.useContext(Pa),{hash:x,pathname:h,search:T}=Zf(d,{relative:u}),b=h;return o!=="/"&&(b=h==="/"?o:Hs([o,h])),f.createHref({pathname:b,search:T,hash:x})}function di(){return w.useContext(Qs)!=null}function ui(){return di()||ft(!1),w.useContext(Qs).location}function Vf(d){w.useContext(Pa).static||w.useLayoutEffect(d)}function mi(){let{isDataRoute:d}=w.useContext(wa);return d?Tp():fp()}function fp(){di()||ft(!1);let d=w.useContext(vo),{basename:r,future:u,navigator:o}=w.useContext(Pa),{matches:f}=w.useContext(wa),{pathname:x}=ui(),h=JSON.stringify(bo(f,u.v7_relativeSplatPath)),T=w.useRef(!1);return Vf(()=>{T.current=!0}),w.useCallback(function(y,N){if(N===void 0&&(N={}),!T.current)return;if(typeof y=="number"){o.go(y);return}let S=po(y,JSON.parse(h),x,N.relative==="path");d==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:Hs([r,S.pathname])),(N.replace?o.replace:o.push)(S,N.state,N)},[r,o,h,x,d])}function hp(){let{matches:d}=w.useContext(wa),r=d[d.length-1];return r?r.params:{}}function Zf(d,r){let{relative:u}=r===void 0?{}:r,{future:o}=w.useContext(Pa),{matches:f}=w.useContext(wa),{pathname:x}=ui(),h=JSON.stringify(bo(f,o.v7_relativeSplatPath));return w.useMemo(()=>po(d,JSON.parse(h),x,u==="path"),[d,h,x,u])}function gp(d,r){return pp(d,r)}function pp(d,r,u,o){di()||ft(!1);let{navigator:f}=w.useContext(Pa),{matches:x}=w.useContext(wa),h=x[x.length-1],T=h?h.params:{};h&&h.pathname;let b=h?h.pathnameBase:"/";h&&h.route;let y=ui(),N;if(r){var S;let L=typeof r=="string"?Lf(r):r;b==="/"||(S=L.pathname)!=null&&S.startsWith(b)||ft(!1),N=L}else N=y;let R=N.pathname||"/",q=R;if(b!=="/"){let L=b.replace(/^\//,"").split("/");q="/"+R.replace(/^\//,"").split("/").slice(L.length).join("/")}let G=D0(d,{pathname:q}),O=jp(G&&G.map(L=>Object.assign({},L,{params:Object.assign({},T,L.params),pathname:Hs([b,f.encodeLocation?f.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?b:Hs([b,f.encodeLocation?f.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),x,u,o);return r&&O?w.createElement(Qs.Provider,{value:{location:bn({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:qf.Pop}},O):O}function bp(){let d=Cp(),r=k0(d)?d.status+" "+d.statusText:d instanceof Error?d.message:JSON.stringify(d),u=d instanceof Error?d.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},r),u?w.createElement("pre",{style:f},u):null,null)}const xp=w.createElement(bp,null);class yp extends w.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){console.error("React Router caught the following error during render",r,u)}render(){return this.state.error!==void 0?w.createElement(wa.Provider,{value:this.props.routeContext},w.createElement(Xf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vp(d){let{routeContext:r,match:u,children:o}=d,f=w.useContext(vo);return f&&f.static&&f.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=u.route.id),w.createElement(wa.Provider,{value:r},o)}function jp(d,r,u,o){var f;if(r===void 0&&(r=[]),u===void 0&&(u=null),o===void 0&&(o=null),d==null){var x;if(!u)return null;if(u.errors)d=u.matches;else if((x=o)!=null&&x.v7_partialHydration&&r.length===0&&!u.initialized&&u.matches.length>0)d=u.matches;else return null}let h=d,T=(f=u)==null?void 0:f.errors;if(T!=null){let N=h.findIndex(S=>S.route.id&&T?.[S.route.id]!==void 0);N>=0||ft(!1),h=h.slice(0,Math.min(h.length,N+1))}let b=!1,y=-1;if(u&&o&&o.v7_partialHydration)for(let N=0;N<h.length;N++){let S=h[N];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=N),S.route.id){let{loaderData:R,errors:q}=u,G=S.route.loader&&R[S.route.id]===void 0&&(!q||q[S.route.id]===void 0);if(S.route.lazy||G){b=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((N,S,R)=>{let q,G=!1,O=null,L=null;u&&(q=T&&S.route.id?T[S.route.id]:void 0,O=S.route.errorElement||xp,b&&(y<0&&R===0?(zp("route-fallback"),G=!0,L=null):y===R&&(G=!0,L=S.route.hydrateFallbackElement||null)));let K=r.concat(h.slice(0,R+1)),ee=()=>{let Y;return q?Y=O:G?Y=L:S.route.Component?Y=w.createElement(S.route.Component,null):S.route.element?Y=S.route.element:Y=N,w.createElement(vp,{match:S,routeContext:{outlet:N,matches:K,isDataRoute:u!=null},children:Y})};return u&&(S.route.ErrorBoundary||S.route.errorElement||R===0)?w.createElement(yp,{location:u.location,revalidation:u.revalidation,component:O,error:q,children:ee(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):ee()},null)}var Wf=(function(d){return d.UseBlocker="useBlocker",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d})(Wf||{}),Kf=(function(d){return d.UseBlocker="useBlocker",d.UseLoaderData="useLoaderData",d.UseActionData="useActionData",d.UseRouteError="useRouteError",d.UseNavigation="useNavigation",d.UseRouteLoaderData="useRouteLoaderData",d.UseMatches="useMatches",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d.UseRouteId="useRouteId",d})(Kf||{});function Np(d){let r=w.useContext(vo);return r||ft(!1),r}function Sp(d){let r=w.useContext(up);return r||ft(!1),r}function wp(d){let r=w.useContext(wa);return r||ft(!1),r}function Jf(d){let r=wp(),u=r.matches[r.matches.length-1];return u.route.id||ft(!1),u.route.id}function Cp(){var d;let r=w.useContext(Xf),u=Sp(),o=Jf();return r!==void 0?r:(d=u.errors)==null?void 0:d[o]}function Tp(){let{router:d}=Np(Wf.UseNavigateStable),r=Jf(Kf.UseNavigateStable),u=w.useRef(!1);return Vf(()=>{u.current=!0}),w.useCallback(function(f,x){x===void 0&&(x={}),u.current&&(typeof f=="number"?d.navigate(f):d.navigate(f,bn({fromRouteId:r},x)))},[d,r])}const zf={};function zp(d,r,u){zf[d]||(zf[d]=!0)}function Ap(d,r){d?.v7_startTransition,d?.v7_relativeSplatPath}function $f(d){let{to:r,replace:u,state:o,relative:f}=d;di()||ft(!1);let{future:x,static:h}=w.useContext(Pa),{matches:T}=w.useContext(wa),{pathname:b}=ui(),y=mi(),N=po(r,bo(T,x.v7_relativeSplatPath),b,f==="path"),S=JSON.stringify(N);return w.useEffect(()=>y(JSON.parse(S),{replace:u,state:o,relative:f}),[y,S,f,u,o]),null}function Mt(d){ft(!1)}function Ep(d){let{basename:r="/",children:u=null,location:o,navigationType:f=qf.Pop,navigator:x,static:h=!1,future:T}=d;di()&&ft(!1);let b=r.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:b,navigator:x,static:h,future:bn({v7_relativeSplatPath:!1},T)}),[b,T,x,h]);typeof o=="string"&&(o=Lf(o));let{pathname:N="/",search:S="",hash:R="",state:q=null,key:G="default"}=o,O=w.useMemo(()=>{let L=Qf(N,b);return L==null?null:{location:{pathname:L,search:S,hash:R,state:q,key:G},navigationType:f}},[b,N,S,R,q,G,f]);return O==null?null:w.createElement(Pa.Provider,{value:y},w.createElement(Qs.Provider,{children:u,value:O}))}function Dp(d){let{children:r,location:u}=d;return gp(fo(r),u)}new Promise(()=>{});function fo(d,r){r===void 0&&(r=[]);let u=[];return w.Children.forEach(d,(o,f)=>{if(!w.isValidElement(o))return;let x=[...r,f];if(o.type===w.Fragment){u.push.apply(u,fo(o.props.children,x));return}o.type!==Mt&&ft(!1),!o.props.index||!o.props.children||ft(!1);let h={id:o.props.id||x.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=fo(o.props.children,x)),u.push(h)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(d){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(d[o]=u[o])}return d},ho.apply(this,arguments)}function kp(d,r){if(d==null)return{};var u={},o=Object.keys(d),f,x;for(x=0;x<o.length;x++)f=o[x],!(r.indexOf(f)>=0)&&(u[f]=d[f]);return u}function Rp(d){return!!(d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)}function Mp(d,r){return d.button===0&&(!r||r==="_self")&&!Rp(d)}const Op=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Up="6";try{window.__reactRouterVersion=Up}catch{}const Bp="startTransition",Af=M0[Bp];function _p(d){let{basename:r,children:u,future:o,window:f}=d,x=w.useRef();x.current==null&&(x.current=R0({window:f,v5Compat:!0}));let h=x.current,[T,b]=w.useState({action:h.action,location:h.location}),{v7_startTransition:y}=o||{},N=w.useCallback(S=>{y&&Af?Af(()=>b(S)):b(S)},[b,y]);return w.useLayoutEffect(()=>h.listen(N),[h,N]),w.useEffect(()=>Ap(o),[o]),w.createElement(Ep,{basename:r,children:u,location:T.location,navigationType:T.action,navigator:h,future:o})}const Gp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=w.forwardRef(function(r,u){let{onClick:o,relative:f,reloadDocument:x,replace:h,state:T,target:b,to:y,preventScrollReset:N,viewTransition:S}=r,R=kp(r,Op),{basename:q}=w.useContext(Pa),G,O=!1;if(typeof y=="string"&&Fp.test(y)&&(G=y,Gp))try{let Y=new URL(window.location.href),Z=y.startsWith("//")?new URL(Y.protocol+y):new URL(y),le=Qf(Z.pathname,q);Z.origin===Y.origin&&le!=null?y=le+Z.search+Z.hash:O=!0}catch{}let L=mp(y,{relative:f}),K=Hp(y,{replace:h,state:T,target:b,preventScrollReset:N,relative:f,viewTransition:S});function ee(Y){o&&o(Y),Y.defaultPrevented||K(Y)}return w.createElement("a",ho({},R,{href:G||L,onClick:O||x?o:ee,ref:u,target:b}))});var Ef;(function(d){d.UseScrollRestoration="useScrollRestoration",d.UseSubmit="useSubmit",d.UseSubmitFetcher="useSubmitFetcher",d.UseFetcher="useFetcher",d.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var Df;(function(d){d.UseFetcher="useFetcher",d.UseFetchers="useFetchers",d.UseScrollRestoration="useScrollRestoration"})(Df||(Df={}));function Hp(d,r){let{target:u,replace:o,state:f,preventScrollReset:x,relative:h,viewTransition:T}=r===void 0?{}:r,b=mi(),y=ui(),N=Zf(d,{relative:h});return w.useCallback(S=>{if(Mp(S,u)){S.preventDefault();let R=o!==void 0?o:jf(y)===jf(N);b(d,{replace:R,state:f,preventScrollReset:x,relative:h,viewTransition:T})}},[y,b,N,o,f,u,d,x,h,T])}const qp={apiKey:"AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",authDomain:"venkateshaluminiumcalc.firebaseapp.com",projectId:"venkateshaluminiumcalc",storageBucket:"venkateshaluminiumcalc.firebasestorage.app",messagingSenderId:"383864958193",appId:"1:383864958193:web:9ea57f9d944cd537f20d50",measurementId:"G-LLHR3CH0WE"};console.log("🔥 Firebase initializing...");const Ys=O0(qp);console.log("🔥 Firebase app initialized successfully");const ri=U0(Ys),St=B0(Ys);_0(Ys);console.log("✅ Firebase services ready");typeof window<"u"&&G0().then(d=>{d&&(F0(Ys),console.log("📊 Firebase Analytics initialized"))}).catch(d=>{console.log("Analytics not supported:",d)});console.log("✅ Firebase services initialized successfully");const If=w.createContext(void 0);function Lp({children:d}){const[r,u]=w.useState(null),[o,f]=w.useState(null),[x,h]=w.useState(!0);w.useEffect(()=>{let G;try{G=H0(ri,async L=>{if(u(L),L)try{const K=await xo(Xt(St,"users",L.uid));if(K.exists())f(K.data());else{const ee={uid:L.uid,email:L.email,displayName:L.displayName||void 0,photoURL:L.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()};await mo(Xt(St,"users",L.uid),ee),f(ee)}}catch(K){console.warn("Firestore not configured properly:",K),f({uid:L.uid,email:L.email,displayName:L.displayName||void 0,photoURL:L.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()})}else f(null);h(!1)})}catch(L){console.warn("Firebase Auth not configured properly:",L),h(!1)}const O=setTimeout(()=>{console.warn("Auth initialization timeout - setting loading to false"),h(!1)},5e3);return()=>{G&&G(),clearTimeout(O)}},[]);const q={user:r,userProfile:o,loading:x,signIn:async(G,O)=>{try{await Z0(ri,G,O),console.log("✅ User signed in successfully")}catch(L){throw console.error("❌ Sign in failed:",L.code),L}},signUp:async(G,O,L)=>{try{const{user:K}=await X0(ri,G,O);L&&K&&await V0(K,{displayName:L})}catch(K){throw console.error("Sign up error:",K),K}},signInWithGoogle:async()=>{try{const G=new Q0;G.setCustomParameters({prompt:"select_account"}),await Y0(ri,G)}catch(G){if(console.error("Google sign in error:",G),G?.code==="auth/unauthorized-domain"){const O=window.location.hostname;throw new Error(`🔒 Domain not authorized

The domain "${O}" needs to be added to Firebase.

Please add it in:
Firebase Console → Authentication → Settings → Authorized domains`)}if(G?.code==="auth/popup-closed-by-user"){console.log("User closed the popup");return}throw G}},logout:async()=>{try{await L0(ri)}catch(G){throw console.error("Sign out error:",G),G}},resetPassword:async G=>{try{await q0(ri,G),console.log("✅ Password reset email sent")}catch(O){throw console.error("Password reset error:",O),O}},updateUserProfile:async G=>{if(!r||!o)throw new Error("No user logged in");const O={...o,...G,updatedAt:Date.now()};await mo(Xt(St,"users",r.uid),O),f(O)}};return l.jsx(If.Provider,{value:q,children:d})}function ht(){const d=w.useContext(If);if(d===void 0)throw new Error("useAuth must be used within an AuthProvider");return d}const Qp=w.createContext(void 0),Yp=({children:d})=>{const[r,u]=w.useState(()=>{const f=localStorage.getItem("estimatix-theme");return f==="light"||f==="dark"?f:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("estimatix-theme",r)},[r]),w.useEffect(()=>{const f=window.matchMedia("(prefers-color-scheme: dark)"),x=h=>{localStorage.getItem("estimatix-theme")||u(h.matches?"dark":"light")};return f.addEventListener("change",x),()=>f.removeEventListener("change",x)},[]);const o=()=>{u(f=>f==="light"?"dark":"light")};return l.jsx(Qp.Provider,{value:{theme:r,toggleTheme:o,isDark:r==="dark"},children:d})};var Xp=d=>typeof d=="function",qs=(d,r)=>Xp(d)?d(r):d,Vp=(()=>{let d=0;return()=>(++d).toString()})(),Pf=(()=>{let d;return()=>{if(d===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");d=!r||r.matches}return d}})(),Zp=20,jo="default",eh=(d,r)=>{let{toastLimit:u}=d.settings;switch(r.type){case 0:return{...d,toasts:[r.toast,...d.toasts].slice(0,u)};case 1:return{...d,toasts:d.toasts.map(h=>h.id===r.toast.id?{...h,...r.toast}:h)};case 2:let{toast:o}=r;return eh(d,{type:d.toasts.find(h=>h.id===o.id)?1:0,toast:o});case 3:let{toastId:f}=r;return{...d,toasts:d.toasts.map(h=>h.id===f||f===void 0?{...h,dismissed:!0,visible:!1}:h)};case 4:return r.toastId===void 0?{...d,toasts:[]}:{...d,toasts:d.toasts.filter(h=>h.id!==r.toastId)};case 5:return{...d,pausedAt:r.time};case 6:let x=r.time-(d.pausedAt||0);return{...d,pausedAt:void 0,toasts:d.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+x}))}}},Gs=[],th={toasts:[],pausedAt:void 0,settings:{toastLimit:Zp}},aa={},ah=(d,r=jo)=>{aa[r]=eh(aa[r]||th,d),Gs.forEach(([u,o])=>{u===r&&o(aa[r])})},lh=d=>Object.keys(aa).forEach(r=>ah(d,r)),Wp=d=>Object.keys(aa).find(r=>aa[r].toasts.some(u=>u.id===d)),Xs=(d=jo)=>r=>{ah(r,d)},Kp={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Jp=(d={},r=jo)=>{let[u,o]=w.useState(aa[r]||th),f=w.useRef(aa[r]);w.useEffect(()=>(f.current!==aa[r]&&o(aa[r]),Gs.push([r,o]),()=>{let h=Gs.findIndex(([T])=>T===r);h>-1&&Gs.splice(h,1)}),[r]);let x=u.toasts.map(h=>{var T,b,y;return{...d,...d[h.type],...h,removeDelay:h.removeDelay||((T=d[h.type])==null?void 0:T.removeDelay)||d?.removeDelay,duration:h.duration||((b=d[h.type])==null?void 0:b.duration)||d?.duration||Kp[h.type],style:{...d.style,...(y=d[h.type])==null?void 0:y.style,...h.style}}});return{...u,toasts:x}},$p=(d,r="blank",u)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:d,pauseDuration:0,...u,id:u?.id||Vp()}),xn=d=>(r,u)=>{let o=$p(r,d,u);return Xs(o.toasterId||Wp(o.id))({type:2,toast:o}),o.id},We=(d,r)=>xn("blank")(d,r);We.error=xn("error");We.success=xn("success");We.loading=xn("loading");We.custom=xn("custom");We.dismiss=(d,r)=>{let u={type:3,toastId:d};r?Xs(r)(u):lh(u)};We.dismissAll=d=>We.dismiss(void 0,d);We.remove=(d,r)=>{let u={type:4,toastId:d};r?Xs(r)(u):lh(u)};We.removeAll=d=>We.remove(void 0,d);We.promise=(d,r,u)=>{let o=We.loading(r.loading,{...u,...u?.loading});return typeof d=="function"&&(d=d()),d.then(f=>{let x=r.success?qs(r.success,f):void 0;return x?We.success(x,{id:o,...u,...u?.success}):We.dismiss(o),f}).catch(f=>{let x=r.error?qs(r.error,f):void 0;x?We.error(x,{id:o,...u,...u?.error}):We.dismiss(o)}),d};var Ip=1e3,Pp=(d,r="default")=>{let{toasts:u,pausedAt:o}=Jp(d,r),f=w.useRef(new Map).current,x=w.useCallback((S,R=Ip)=>{if(f.has(S))return;let q=setTimeout(()=>{f.delete(S),h({type:4,toastId:S})},R);f.set(S,q)},[]);w.useEffect(()=>{if(o)return;let S=Date.now(),R=u.map(q=>{if(q.duration===1/0)return;let G=(q.duration||0)+q.pauseDuration-(S-q.createdAt);if(G<0){q.visible&&We.dismiss(q.id);return}return setTimeout(()=>We.dismiss(q.id,r),G)});return()=>{R.forEach(q=>q&&clearTimeout(q))}},[u,o,r]);let h=w.useCallback(Xs(r),[r]),T=w.useCallback(()=>{h({type:5,time:Date.now()})},[h]),b=w.useCallback((S,R)=>{h({type:1,toast:{id:S,height:R}})},[h]),y=w.useCallback(()=>{o&&h({type:6,time:Date.now()})},[o,h]),N=w.useCallback((S,R)=>{let{reverseOrder:q=!1,gutter:G=8,defaultPosition:O}=R||{},L=u.filter(Y=>(Y.position||O)===(S.position||O)&&Y.height),K=L.findIndex(Y=>Y.id===S.id),ee=L.filter((Y,Z)=>Z<K&&Y.visible).length;return L.filter(Y=>Y.visible).slice(...q?[ee+1]:[0,ee]).reduce((Y,Z)=>Y+(Z.height||0)+G,0)},[u]);return w.useEffect(()=>{u.forEach(S=>{if(S.dismissed)x(S.id,S.removeDelay);else{let R=f.get(S.id);R&&(clearTimeout(R),f.delete(S.id))}})},[u,x]),{toasts:u,handlers:{updateHeight:b,startPause:T,endPause:y,calculateOffset:N}}},eb=Sa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,tb=Sa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ab=Sa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,lb=Ia("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${d=>d.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tb} 0.15s ease-out forwards;
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
    animation: ${ab} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ib=Sa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nb=Ia("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${d=>d.secondary||"#e0e0e0"};
  border-right-color: ${d=>d.primary||"#616161"};
  animation: ${ib} 1s linear infinite;
`,sb=Sa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rb=Sa`
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
}`,cb=Ia("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${d=>d.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rb} 0.2s ease-out forwards;
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
`,ob=Ia("div")`
  position: absolute;
`,db=Ia("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ub=Sa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mb=Ia("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ub} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,fb=({toast:d})=>{let{icon:r,type:u,iconTheme:o}=d;return r!==void 0?typeof r=="string"?w.createElement(mb,null,r):r:u==="blank"?null:w.createElement(db,null,w.createElement(nb,{...o}),u!=="loading"&&w.createElement(ob,null,u==="error"?w.createElement(lb,{...o}):w.createElement(cb,{...o})))},hb=d=>`
0% {transform: translate3d(0,${d*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,gb=d=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${d*-150}%,-1px) scale(.6); opacity:0;}
`,pb="0%{opacity:0;} 100%{opacity:1;}",bb="0%{opacity:1;} 100%{opacity:0;}",xb=Ia("div")`
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
`,yb=Ia("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,vb=(d,r)=>{let u=d.includes("top")?1:-1,[o,f]=Pf()?[pb,bb]:[hb(u),gb(u)];return{animation:r?`${Sa(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Sa(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jb=w.memo(({toast:d,position:r,style:u,children:o})=>{let f=d.height?vb(d.position||r||"top-center",d.visible):{opacity:0},x=w.createElement(fb,{toast:d}),h=w.createElement(yb,{...d.ariaProps},qs(d.message,d));return w.createElement(xb,{className:d.className,style:{...f,...u,...d.style}},typeof o=="function"?o({icon:x,message:h}):w.createElement(w.Fragment,null,x,h))});K0(w.createElement);var Nb=({id:d,className:r,style:u,onHeightUpdate:o,children:f})=>{let x=w.useCallback(h=>{if(h){let T=()=>{let b=h.getBoundingClientRect().height;o(d,b)};T(),new MutationObserver(T).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[d,o]);return w.createElement("div",{ref:x,className:r,style:u},f)},Sb=(d,r)=>{let u=d.includes("top"),o=u?{top:0}:{bottom:0},f=d.includes("center")?{justifyContent:"center"}:d.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pf()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(u?1:-1)}px)`,...o,...f}},wb=W0`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Bs=16,No=({reverseOrder:d,position:r="top-center",toastOptions:u,gutter:o,children:f,toasterId:x,containerStyle:h,containerClassName:T})=>{let{toasts:b,handlers:y}=Pp(u,x);return w.createElement("div",{"data-rht-toaster":x||"",style:{position:"fixed",zIndex:9999,top:Bs,left:Bs,right:Bs,bottom:Bs,pointerEvents:"none",...h},className:T,onMouseEnter:y.startPause,onMouseLeave:y.endPause},b.map(N=>{let S=N.position||r,R=y.calculateOffset(N,{reverseOrder:d,gutter:o,defaultPosition:r}),q=Sb(S,R);return w.createElement(Nb,{id:N.id,key:N.id,onHeightUpdate:y.updateHeight,className:N.visible?wb:"",style:q},N.type==="custom"?qs(N.message,N):f?f(N):w.createElement(jb,{toast:N,position:S}))}))},Re=We;const ih=()=>l.jsxs("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[l.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),l.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),l.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),l.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),So=()=>l.jsx("style",{children:`
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
  `});function Cb(){const[d,r]=w.useState(""),[u,o]=w.useState(""),[f,x]=w.useState(!1),[h,T]=w.useState(!1),[b,y]=w.useState(!1),{signIn:N,signInWithGoogle:S}=ht(),R=mi(),q=async O=>{O.preventDefault(),T(!0);const L=Re.loading("Signing in...");try{await N(d,u),Re.success("Welcome back! 🎉",{id:L}),R("/dashboard")}catch(K){const ee=K.message||"Failed to sign in";Re.error(ee,{id:L})}finally{T(!1)}},G=async()=>{T(!0);const O=Re.loading("Signing in with Google...");try{await S(),Re.success("Welcome! 🎉",{id:O}),R("/dashboard")}catch(L){const K=L.message||"Failed to sign in with Google";Re.error(K,{id:O})}finally{T(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(No,{position:"top-center"}),l.jsx(So,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-calculator"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Welcome Back 👋"}),l.jsx("p",{className:"small premium-text-secondary",children:"Sign in to access your professional workspace"})]}),l.jsxs("form",{onSubmit:q,children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:O=>r(O.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock"}),"Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:f?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Enter your password",value:u,onChange:O=>o(O.target.value),required:!0,autoComplete:"current-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>x(!f),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:l.jsx("i",{className:`bi ${f?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("input",{type:"checkbox",className:"premium-form-check-input",id:"rememberMe",checked:b,onChange:O=>y(O.target.checked)}),l.jsx("label",{className:"premium-form-check-label small",htmlFor:"rememberMe",children:"Remember me"})]}),l.jsx(pe,{to:"/forgot-password",className:"small premium-link",children:"Forgot password?"})]}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:h,children:h?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Signing in..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),"Sign In"]})})]}),l.jsxs("div",{className:"premium-divider",children:[l.jsx("div",{className:"premium-divider-line"}),l.jsx("span",{className:"premium-divider-text",children:"or continue with"}),l.jsx("div",{className:"premium-divider-line"})]}),l.jsxs("button",{type:"button",onClick:G,className:"btn premium-btn-secondary",disabled:h,children:[l.jsx(ih,{}),l.jsx("span",{children:"Sign in with Google"})]}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Don't have an account?"," ",l.jsx(pe,{to:"/signup",className:"premium-link fw-semibold",children:"Sign up"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function Tb(){const[d,r]=w.useState(""),[u,o]=w.useState(""),[f,x]=w.useState(""),[h,T]=w.useState(""),[b,y]=w.useState(!1),[N,S]=w.useState(!1),[R,q]=w.useState(!1),[G,O]=w.useState(!1),{signUp:L,signInWithGoogle:K}=ht(),ee=mi(),Y=async le=>{if(le.preventDefault(),f!==h){Re.error("Passwords do not match");return}if(f.length<6){Re.error("Password must be at least 6 characters");return}if(!G){Re.error("Please agree to the Terms and Conditions");return}q(!0);const Ge=Re.loading("Creating your account...");try{await L(u,f,d),Re.success("Account created successfully! 🎉",{id:Ge}),ee("/dashboard")}catch(De){const Fe=De.message||"Failed to create account";Re.error(Fe,{id:Ge})}finally{q(!1)}},Z=async()=>{if(!G){Re.error("Please agree to the Terms and Conditions");return}q(!0);const le=Re.loading("Signing up with Google...");try{await K(),Re.success("Welcome to Estimatix! 🎉",{id:le}),ee("/dashboard")}catch(Ge){const De=Ge.message||"Failed to sign up with Google";Re.error(De,{id:le})}finally{q(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(No,{position:"top-center"}),l.jsx(So,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",style:{maxWidth:"440px"},children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-calculator"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Create Account 🚀"}),l.jsx("p",{className:"small premium-text-secondary",children:"Join Estimatix and start calculating estimates like a pro"})]}),l.jsxs("form",{onSubmit:Y,children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"name",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-person"}),"Full Name"]}),l.jsx("input",{type:"text",className:"form-control premium-form-control",id:"name",placeholder:"John Doe",value:d,onChange:le=>r(le.target.value),required:!0,autoComplete:"name",autoFocus:!0})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:u,onChange:le=>o(le.target.value),required:!0,autoComplete:"email"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock"}),"Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:b?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Minimum 6 characters",value:f,onChange:le=>x(le.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>y(!b),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:l.jsx("i",{className:`bi ${b?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{htmlFor:"confirmPassword",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-lock-fill"}),"Confirm Password"]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{type:N?"text":"password",className:"form-control premium-form-control",id:"confirmPassword",placeholder:"Re-enter your password",value:h,onChange:le=>T(le.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),l.jsx("button",{type:"button",onClick:()=>S(!N),className:"premium-password-toggle","aria-label":"Toggle confirm password visibility",children:l.jsx("i",{className:`bi ${N?"bi-eye-slash":"bi-eye"}`})})]})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"d-flex align-items-start gap-2",children:[l.jsx("input",{type:"checkbox",className:"premium-form-check-input mt-1",id:"agreeTerms",checked:G,onChange:le=>O(le.target.checked),required:!0}),l.jsxs("label",{className:"premium-form-check-label small",htmlFor:"agreeTerms",children:["I agree to the"," ",l.jsx("a",{href:"#",className:"premium-link",children:"Terms and Conditions"})]})]})}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:R,style:{background:"linear-gradient(90deg, #10B981, #14B8A6)"},children:R?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Creating Account..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-person-plus me-2"}),"Create Account"]})})]}),l.jsxs("div",{className:"premium-divider",children:[l.jsx("div",{className:"premium-divider-line"}),l.jsx("span",{className:"premium-divider-text",children:"or continue with"}),l.jsx("div",{className:"premium-divider-line"})]}),l.jsxs("button",{type:"button",onClick:Z,className:"btn premium-btn-secondary",disabled:R,children:[l.jsx(ih,{}),l.jsx("span",{children:"Sign up with Google"})]}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Already have an account?"," ",l.jsx(pe,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function zb(){const[d,r]=w.useState(""),[u,o]=w.useState(!1),[f,x]=w.useState(!1),{resetPassword:h}=ht(),T=async b=>{b.preventDefault(),x(!1),o(!0);const y=Re.loading("Sending reset link...");try{await h(d),x(!0),Re.success("Password reset link sent to your email! 📧",{id:y})}catch(N){const S=N.message||"Failed to send reset link";Re.error(S,{id:y})}finally{o(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(No,{position:"top-center"}),l.jsx(So,{}),l.jsx("div",{className:"premium-page-background"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),l.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),l.jsx("div",{className:"premium-vignette"}),l.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),l.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:l.jsxs(he.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[l.jsx("div",{className:"premium-logo-pulse"}),l.jsx("div",{className:"premium-logo-icon",children:l.jsx("i",{className:"bi bi-key"})})]}),l.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),l.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Reset Password 🔑"}),l.jsx("p",{className:"small premium-text-secondary",children:"Enter your email address and we'll send you a link to reset your password"})]}),l.jsx(yo,{children:f&&l.jsxs(he.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"alert mb-4",style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#6EE7B7",borderRadius:"0.75rem"},children:[l.jsx("i",{className:"bi bi-check-circle me-2"}),"Check your email for the password reset link!"]})}),!f&&l.jsxs("form",{onSubmit:T,children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),l.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:b=>r(b.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),l.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:u,style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:u?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Sending Link..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-send me-2"}),"Send Reset Link"]})})]}),f&&l.jsx("div",{className:"text-center",children:l.jsxs(pe,{to:"/login",className:"btn premium-btn-primary",style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back to Sign In"]})}),l.jsx("div",{className:"text-center mt-4",children:l.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Remember your password?"," ",l.jsx(pe,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),l.jsx("div",{className:"text-center mt-3",children:l.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}class Ab{quotationsCollection="quotations";async saveQuotation(r){try{const u={...r,createdAt:no(),updatedAt:no()},o=await J0(Nf(St,this.quotationsCollection),u);return console.log("Quotation saved with ID:",o.id),o.id}catch(u){throw console.error("Error saving quotation:",u),new Error("Failed to save quotation")}}async updateQuotation(r,u){try{const o=Xt(St,this.quotationsCollection,r);await gn(o,{...u,updatedAt:no()}),console.log("Quotation updated:",r)}catch(o){throw console.error("Error updating quotation:",o),new Error("Failed to update quotation")}}async deleteQuotation(r){try{const u=Xt(St,this.quotationsCollection,r);await $0(u),console.log("Quotation deleted:",r)}catch(u){throw console.error("Error deleting quotation:",u),new Error("Failed to delete quotation")}}async getQuotation(r){try{const u=Xt(St,this.quotationsCollection,r),o=await xo(u);return o.exists()?{id:o.id,...o.data()}:null}catch(u){throw console.error("Error getting quotation:",u),new Error("Failed to get quotation")}}async getUserQuotations(r,u=50){try{const o=I0(Nf(St,this.quotationsCollection),P0("userId","==",r),ep(u)),f=await tp(o),x=[];return f.forEach(h=>{x.push({id:h.id,...h.data()})}),x.sort((h,T)=>{const b=h.createdAt instanceof pn?h.createdAt.toDate():new Date(h.createdAt);return(T.createdAt instanceof pn?T.createdAt.toDate():new Date(T.createdAt)).getTime()-b.getTime()}),console.log(`✅ Loaded ${x.length} quotations (client-side sorting)`),x}catch(o){return console.error("Error getting user quotations:",o),[]}}async getQuotationsByStatus(r,u){try{const f=(await this.getUserQuotations(r,100)).filter(x=>x.status===u);return console.log(`✅ Found ${f.length} quotations with status: ${u}`),f}catch(o){return console.error("Error getting quotations by status:",o),[]}}async searchQuotations(r,u){try{const o=await this.getUserQuotations(r,100),f=u.toLowerCase();return o.filter(x=>x.customerName.toLowerCase().includes(f)||x.quotationId.toLowerCase().includes(f)||x.customerPhone.includes(u)||x.customerEmail.toLowerCase().includes(f))}catch(o){throw console.error("Error searching quotations:",o),new Error("Failed to search quotations")}}async getQuotationStats(r){try{const u=await this.getUserQuotations(r,1e3),o=new Date,f=new Date(o.getFullYear(),o.getMonth(),1),x={totalQuotations:u.length,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0};return u.forEach(h=>{x.totalValue+=h.grandTotal,(h.status==="sent"||h.status==="draft")&&x.pendingQuotations++,(h.status==="approved"||h.status==="completed")&&x.approvedQuotations++,(h.createdAt instanceof pn?h.createdAt.toDate():new Date(h.createdAt))>=f&&(x.thisMonthQuotations++,x.thisMonthValue+=h.grandTotal)}),x}catch(u){return console.error("Error getting quotation stats:",u),{totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}}}async getRecentQuotations(r,u=10){try{const o=await this.getUserQuotations(r,u);return console.log(`✅ Loaded ${o.length} recent quotations`),o}catch(o){return console.error("Error getting recent quotations:",o),[]}}async generateQuotationId(r){try{const u=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),o=await this.getUserQuotations(r,1e3),f=new Date().getFullYear(),x=o.filter(y=>(y.createdAt instanceof pn?y.createdAt.toDate():new Date(y.createdAt)).getFullYear()===f);let h=0;x.forEach(y=>{const N=y.quotationId.match(/(\d+)$/);if(N){const S=parseInt(N[1]);S>h&&(h=S)}});const T=h+1,b=`${u.prefix}${f}-${T.toString().padStart(3,"0")}`;return u.currentSequence=T,u.currentYear=f,localStorage.setItem("admin_invoice_settings",JSON.stringify(u)),b}catch(u){return console.error("Error generating quotation ID:",u),`QUOT-${Date.now()}`}}}const ci=new Ab;function _s({value:d,duration:r=2e3,prefix:u="",suffix:o=""}){const[f,x]=w.useState(0);return w.useEffect(()=>{let h=null,T;const b=y=>{h||(h=y);const N=Math.min((y-h)/r,1);x(Math.floor(N*d)),N<1&&(T=requestAnimationFrame(b))};return T=requestAnimationFrame(b),()=>cancelAnimationFrame(T)},[d,r]),l.jsxs("span",{children:[u,f.toLocaleString(),o]})}function kf(){const{user:d,userProfile:r}=ht(),[u,o]=w.useState(!1),[f,x]=w.useState({totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}),[h,T]=w.useState([]),b=()=>{const S=new Date().getHours();return S<12?"Good morning":S<17?"Good afternoon":"Good evening"};w.useEffect(()=>{(async()=>{if(d?.uid)try{const R=await ci.getQuotationStats(d.uid);x(R);const q=await ci.getRecentQuotations(d.uid,4);T(q)}catch(R){console.error("Error loading dashboard data:",R)}})()},[d?.uid]);const y=S=>{const R=new Date,q=S instanceof pn?S.toDate():new Date(S),G=R.getTime()-q.getTime(),O=Math.floor(G/6e4),L=Math.floor(G/36e5),K=Math.floor(G/864e5);return O<1?"Just now":O<60?`${O} minute${O>1?"s":""} ago`:L<24?`${L} hour${L>1?"s":""} ago`:K<30?`${K} day${K>1?"s":""} ago`:q.toLocaleDateString()},N=h.map(S=>{const R={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return{icon:{draft:"bi-file-earmark",sent:"bi-send",approved:"bi-check-circle",rejected:"bi-x-circle",completed:"bi-check-all"}[S.status]||"bi-file-earmark-text",text:`${S.status==="draft"?"Created":S.status.charAt(0).toUpperCase()+S.status.slice(1)} quotation ${S.quotationId} for ${S.customerName}`,time:y(S.createdAt),color:R[S.status]||"info",quotationId:S.quotationId,id:S.id}});return N.length===0&&N.push({icon:"bi-info-circle",text:"No recent activity. Create your first quotation!",time:"Start now",color:"muted",quotationId:"",id:""}),l.jsx("div",{className:"min-h-screen",style:{background:"linear-gradient(to bottom, #0F172A, #1E293B)"},children:l.jsxs("div",{className:"container-fluid py-6 px-4 md:px-6",style:{maxWidth:"1400px",margin:"0 auto"},children:[l.jsx(he.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-6",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[l.jsxs("h2",{className:"text-white mb-2",style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",fontWeight:"600",letterSpacing:"-0.5px"},children:[b(),", ",r?.displayName||d?.email?.split("@")[0],"! 👋"]}),l.jsx("div",{style:{height:"3px",width:"60%",background:"linear-gradient(90deg, #6366F1, #8B5CF6)",borderRadius:"2px",marginTop:"4px"}})]}),l.jsx("p",{className:"text-sm mb-0",style:{color:"#94A3B8",marginTop:"8px"},children:"Here's your activity summary today."})]}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",onClick:()=>o(!u),style:{width:"44px",height:"44px",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"white"},children:l.jsx("i",{className:"bi bi-search"})}),l.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",style:{width:"44px",height:"44px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",border:"none",color:"white"},children:l.jsx("i",{className:"bi bi-person-circle fs-5"})})]})]})}),l.jsxs(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"row g-4 mb-5",children:[l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #6366F1, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Quotations"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(_s,{value:f.totalQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.4)"},children:l.jsx("i",{className:"bi bi-file-earmark-text text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-arrow-up me-1"}),l.jsx("span",{children:"+12% from last month"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #8B5CF6, #EC4899)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Value"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(_s,{value:f.totalValue,prefix:"₹"})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #8B5CF6, #EC4899)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(236, 72, 153, 0.4)"},children:l.jsx("i",{className:"bi bi-currency-rupee text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-arrow-up me-1"}),l.jsx("span",{children:"+8% from last month"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Pending"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(_s,{value:f.pendingQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(59, 130, 246, 0.4)"},children:l.jsx("i",{className:"bi bi-hourglass-split text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#F59E0B"},children:[l.jsx("i",{className:"bi bi-exclamation-circle me-1"}),l.jsx("span",{children:"Awaiting response"})]})]})]})}),l.jsx("div",{className:"col-md-6 col-lg-3",children:l.jsxs(he.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #10B981, #14B8A6)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Approved This Month"}),l.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:l.jsx(_s,{value:f.thisMonthQuotations})})]}),l.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(16, 185, 129, 0.4)"},children:l.jsx("i",{className:"bi bi-check-circle text-white",style:{fontSize:"20px"}})})]}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[l.jsx("i",{className:"bi bi-trophy me-1"}),l.jsxs("span",{children:["₹",f.thisMonthValue.toLocaleString()," revenue"]})]})]})]})})]}),l.jsxs("div",{className:"row g-4",children:[l.jsx("div",{className:"col-lg-8",children:l.jsxs(he.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[l.jsxs("h5",{className:"mb-4 d-flex align-items-center",style:{fontSize:"1.25rem"},children:[l.jsx("span",{style:{marginRight:"8px",fontSize:"1.5rem"},children:"⚡"}),l.jsx("span",{style:{background:"linear-gradient(90deg, #6366F1, #8B5CF6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"600"},children:"Quick Actions"})]}),l.jsxs("div",{className:"row g-4",children:[l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/multi-calculator",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(99, 102, 241, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-calculator",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Multi-Item Calculator"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Create detailed quotations with multiple items"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Start Project"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/calculator",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(59, 130, 246, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-grid-3x2-gap",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Simple Calculator"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Quick calculations for single items"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Quick Calculate"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/admin",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #EC4899, #F472B6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(236, 72, 153, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-gear",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Admin Settings"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Configure pricing and preferences"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"Manage Settings"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),l.jsx("div",{className:"col-md-6",children:l.jsx(pe,{to:"/billing",className:"text-decoration-none",children:l.jsx(he.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(16, 185, 129, 0.3)"},children:l.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:l.jsx(he.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-credit-card",style:{fontSize:"32px"}})}),l.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Billing & Subscription"}),l.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Manage subscription and payments"}),l.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[l.jsx("span",{children:"View Billing"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})})]})]})}),l.jsx("div",{className:"col-lg-4",children:l.jsxs(he.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[l.jsxs("h5",{className:"mb-4",style:{fontSize:"1.25rem",color:"white",fontWeight:"600"},children:[l.jsx("i",{className:"bi bi-clock-history me-2",style:{color:"#06B6D4"}}),"Recent Activity"]}),l.jsxs("div",{className:"card border-0",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[l.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),l.jsxs("div",{className:"card-body p-0",children:[l.jsx("div",{className:"list-group list-group-flush",children:l.jsx(yo,{children:N.length>0?N.map((S,R)=>l.jsx(he.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4+R*.1},className:"list-group-item border-0 py-3 px-4",style:{background:"transparent",borderBottom:R<N.length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"},children:l.jsxs("div",{className:"d-flex align-items-start",children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center me-3",style:{minWidth:"40px",height:"40px",background:S.color==="success"?"rgba(16, 185, 129, 0.2)":S.color==="info"?"rgba(59, 130, 246, 0.2)":S.color==="danger"?"rgba(239, 68, 68, 0.2)":"rgba(139, 92, 246, 0.2)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:l.jsx("i",{className:`bi ${S.icon}`,style:{fontSize:"18px",color:S.color==="success"?"#10B981":S.color==="info"?"#3B82F6":S.color==="danger"?"#EF4444":"#8B5CF6"}})}),l.jsxs("div",{className:"flex-grow-1",children:[l.jsx("p",{className:"mb-1",style:{fontSize:"14px",color:"white",fontWeight:"500"},children:S.text}),l.jsxs("small",{style:{color:"#94A3B8",fontSize:"12px"},children:[l.jsx("i",{className:"bi bi-clock me-1"}),S.time]})]})]})},R)):l.jsxs("div",{className:"text-center py-5 px-4",children:[l.jsx("div",{className:"d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:"80px",height:"80px",background:"rgba(99, 102, 241, 0.1)",borderRadius:"50%"},children:l.jsx("i",{className:"bi bi-inbox",style:{fontSize:"36px",color:"#6366F1"}})}),l.jsx("p",{style:{color:"#94A3B8",fontSize:"14px",marginBottom:"16px"},children:"No recent activity yet"}),l.jsx(pe,{to:"/multi-calculator",className:"btn btn-sm",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",color:"white",border:"none",borderRadius:"10px",padding:"8px 16px",fontSize:"13px",fontWeight:"600"},children:"Create First Quotation"})]})})}),N.length>0&&l.jsx("div",{className:"p-3 text-center",style:{borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:l.jsxs("button",{className:"btn btn-link text-decoration-none",style:{color:"#6366F1",fontSize:"14px",fontWeight:"600"},children:["View All Activity ",l.jsx("i",{className:"bi bi-arrow-right ms-1"})]})})]})]})]})})]})]})})}function Rf(d,r){var u=Object.keys(d);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(d);r&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(d,f).enumerable})),u.push.apply(u,o)}return u}function Mf(d){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?Rf(Object(u),!0).forEach(function(o){nh(d,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(u)):Rf(Object(u)).forEach(function(o){Object.defineProperty(d,o,Object.getOwnPropertyDescriptor(u,o))})}return d}function Fs(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fs=function(r){return typeof r}:Fs=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Fs(d)}function nh(d,r,u){return r in d?Object.defineProperty(d,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):d[r]=u,d}function sh(d,r){return Eb(d)||Db(d,r)||kb(d,r)||Rb()}function Eb(d){if(Array.isArray(d))return d}function Db(d,r){var u=d&&(typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"]);if(u!=null){var o=[],f=!0,x=!1,h,T;try{for(u=u.call(d);!(f=(h=u.next()).done)&&(o.push(h.value),!(r&&o.length===r));f=!0);}catch(b){x=!0,T=b}finally{try{!f&&u.return!=null&&u.return()}finally{if(x)throw T}}return o}}function kb(d,r){if(d){if(typeof d=="string")return Of(d,r);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Of(d,r)}}function Of(d,r){(r==null||r>d.length)&&(r=d.length);for(var u=0,o=new Array(r);u<r;u++)o[u]=d[u];return o}function Rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rt=function(r,u,o){var f=!!o,x=ve.useRef(o);ve.useEffect(function(){x.current=o},[o]),ve.useEffect(function(){if(!f||!r)return function(){};var h=function(){x.current&&x.current.apply(x,arguments)};return r.on(u,h),function(){r.off(u,h)}},[f,u,r,x])},go=function(r){var u=ve.useRef(r);return ve.useEffect(function(){u.current=r},[r]),u.current},oi=function(r){return r!==null&&Fs(r)==="object"},Mb=function(r){return oi(r)&&typeof r.then=="function"},Ob=function(r){return oi(r)&&typeof r.elements=="function"&&typeof r.createToken=="function"&&typeof r.createPaymentMethod=="function"&&typeof r.confirmCardPayment=="function"},Uf="[object Object]",Ub=function d(r,u){if(!oi(r)||!oi(u))return r===u;var o=Array.isArray(r),f=Array.isArray(u);if(o!==f)return!1;var x=Object.prototype.toString.call(r)===Uf,h=Object.prototype.toString.call(u)===Uf;if(x!==h)return!1;if(!x&&!o)return r===u;var T=Object.keys(r),b=Object.keys(u);if(T.length!==b.length)return!1;for(var y={},N=0;N<T.length;N+=1)y[T[N]]=!0;for(var S=0;S<b.length;S+=1)y[b[S]]=!0;var R=Object.keys(y);if(R.length!==T.length)return!1;var q=r,G=u,O=function(K){return d(q[K],G[K])};return R.every(O)},rh=function(r,u,o){return oi(r)?Object.keys(r).reduce(function(f,x){var h=!oi(u)||!Ub(r[x],u[x]);return o.includes(x)?(h&&console.warn("Unsupported prop change: options.".concat(x," is not a mutable property.")),f):h?Mf(Mf({},f||{}),{},nh({},x,r[x])):f},null):null},ch="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Bf=function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ch;if(r===null||Ob(r))return r;throw new Error(u)},Bb=function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ch;if(Mb(r))return{tag:"async",stripePromise:Promise.resolve(r).then(function(f){return Bf(f,u)})};var o=Bf(r,u);return o===null?{tag:"empty"}:{tag:"sync",stripe:o}},_b=function(r){!r||!r._registerWrapper||!r.registerAppInfo||(r._registerWrapper({name:"react-stripe-js",version:"2.8.1"}),r.registerAppInfo({name:"react-stripe-js",version:"2.8.1",url:"https://stripe.com/docs/stripe-js/react"}))},wo=ve.createContext(null);wo.displayName="ElementsContext";var Gb=function(r,u){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(u," in an <Elements> provider."));return r},oh=function(r){var u=r.stripe,o=r.options,f=r.children,x=ve.useMemo(function(){return Bb(u)},[u]),h=ve.useState(function(){return{stripe:x.tag==="sync"?x.stripe:null,elements:x.tag==="sync"?x.stripe.elements(o):null}}),T=sh(h,2),b=T[0],y=T[1];ve.useEffect(function(){var R=!0,q=function(O){y(function(L){return L.stripe?L:{stripe:O,elements:O.elements(o)}})};return x.tag==="async"&&!b.stripe?x.stripePromise.then(function(G){G&&R&&q(G)}):x.tag==="sync"&&!b.stripe&&q(x.stripe),function(){R=!1}},[x,b,o]);var N=go(u);ve.useEffect(function(){N!==null&&N!==u&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[N,u]);var S=go(o);return ve.useEffect(function(){if(b.elements){var R=rh(o,S,["clientSecret","fonts"]);R&&b.elements.update(R)}},[o,S,b.elements]),ve.useEffect(function(){_b(b.stripe)},[b.stripe]),ve.createElement(wo.Provider,{value:b},f)};oh.propTypes={stripe:ke.any,options:ke.object};ke.func.isRequired;var dh=ve.createContext(null);dh.displayName="CustomCheckoutSdkContext";var Fb=function(r,u){if(!r)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(u," in an <CustomCheckoutProvider> provider."));return r},Hb=ve.createContext(null);Hb.displayName="CustomCheckoutContext";ke.any,ke.shape({clientSecret:ke.string.isRequired,elementsOptions:ke.object}).isRequired;var _f=function(r){var u=ve.useContext(dh),o=ve.useContext(wo);if(u&&o)throw new Error("You cannot wrap the part of your app that ".concat(r," in both <CustomCheckoutProvider> and <Elements> providers."));return u?Fb(u,r):Gb(o,r)},qb=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},Ye=function(r,u){var o="".concat(qb(r),"Element"),f=function(b){var y=b.id,N=b.className,S=b.options,R=S===void 0?{}:S,q=b.onBlur,G=b.onFocus,O=b.onReady,L=b.onChange,K=b.onEscape,ee=b.onClick,Y=b.onLoadError,Z=b.onLoaderStart,le=b.onNetworksChange,Ge=b.onConfirm,De=b.onCancel,Fe=b.onShippingAddressChange,ct=b.onShippingRateChange,Ie=_f("mounts <".concat(o,">")),Pe="elements"in Ie?Ie.elements:null,Ve="customCheckoutSdk"in Ie?Ie.customCheckoutSdk:null,wt=ve.useState(null),ot=sh(wt,2),g=ot[0],_=ot[1],Q=ve.useRef(null),ne=ve.useRef(null);Rt(g,"blur",q),Rt(g,"focus",G),Rt(g,"escape",K),Rt(g,"click",ee),Rt(g,"loaderror",Y),Rt(g,"loaderstart",Z),Rt(g,"networkschange",le),Rt(g,"confirm",Ge),Rt(g,"cancel",De),Rt(g,"shippingaddresschange",Fe),Rt(g,"shippingratechange",ct),Rt(g,"change",L);var I;O&&(r==="expressCheckout"?I=O:I=function(){O(g)}),Rt(g,"ready",I),ve.useLayoutEffect(function(){if(Q.current===null&&ne.current!==null&&(Pe||Ve)){var ie=null;Ve?ie=Ve.createElement(r,R):Pe&&(ie=Pe.create(r,R)),Q.current=ie,_(ie),ie&&ie.mount(ne.current)}},[Pe,Ve,R]);var je=go(R);return ve.useEffect(function(){if(Q.current){var ie=rh(R,je,["paymentRequest"]);ie&&"update"in Q.current&&Q.current.update(ie)}},[R,je]),ve.useLayoutEffect(function(){return function(){if(Q.current&&typeof Q.current.destroy=="function")try{Q.current.destroy(),Q.current=null}catch{}}},[]),ve.createElement("div",{id:y,className:N,ref:ne})},x=function(b){_f("mounts <".concat(o,">"));var y=b.id,N=b.className;return ve.createElement("div",{id:y,className:N})},h=u?x:f;return h.propTypes={id:ke.string,className:ke.string,onChange:ke.func,onBlur:ke.func,onFocus:ke.func,onReady:ke.func,onEscape:ke.func,onClick:ke.func,onLoadError:ke.func,onLoaderStart:ke.func,onNetworksChange:ke.func,onConfirm:ke.func,onCancel:ke.func,onShippingAddressChange:ke.func,onShippingRateChange:ke.func,options:ke.object},h.displayName=o,h.__elementType=r,h},Xe=typeof window>"u",Lb=ve.createContext(null);Lb.displayName="EmbeddedCheckoutProviderContext";Ye("auBankAccount",Xe);Ye("card",Xe);Ye("cardNumber",Xe);Ye("cardExpiry",Xe);Ye("cardCvc",Xe);Ye("fpxBank",Xe);Ye("iban",Xe);Ye("idealBank",Xe);Ye("p24Bank",Xe);Ye("epsBank",Xe);Ye("payment",Xe);Ye("expressCheckout",Xe);Ye("currencySelector",Xe);Ye("paymentRequestButton",Xe);Ye("linkAuthentication",Xe);Ye("address",Xe);Ye("shippingAddress",Xe);Ye("paymentMethodMessaging",Xe);Ye("affirmMessage",Xe);Ye("afterpayClearpayMessage",Xe);const Qb=ap("pk_test_your_publishable_key_here"),Gf={free:{id:"free",name:"Free",price:0,currency:"inr",interval:"month",features:["Up to 10 calculations per month","Basic export features"]},pro:{id:"pro",name:"Pro",price:999,currency:"inr",interval:"month",features:["Unlimited calculations","Advanced exports","Priority support","Custom branding"]},enterprise:{id:"enterprise",name:"Enterprise",price:2999,currency:"inr",interval:"month",features:["Everything in Pro","Team collaboration","API access","Custom integrations"]}},Yb={free:null,pro:"price_PRO_MONTH_INR",enterprise:"price_ENTERPRISE_MONTH_INR"},uh=!1;function Xb({plan:d,currentPlan:r,onSelect:u}){const o=r===d.id,f=d.id==="pro";return l.jsxs("div",{className:`card h-100 ${f?"border-primary":""}`,children:[f&&l.jsx("div",{className:"card-header bg-primary text-white text-center",children:l.jsx("small",{className:"fw-bold",children:"MOST POPULAR"})}),l.jsxs("div",{className:"card-body d-flex flex-column",children:[l.jsx("h5",{className:"card-title",children:d.name}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("span",{className:"h2",children:["₹",d.price]}),l.jsxs("span",{className:"text-muted",children:["/",d.interval]})]}),l.jsx("ul",{className:"list-unstyled flex-grow-1",children:d.features.map((x,h)=>l.jsxs("li",{className:"mb-2",children:[l.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"}),x]},h))}),l.jsx("button",{className:`btn ${o?"btn-outline-secondary":f?"btn-primary":"btn-outline-primary"} mt-auto`,onClick:()=>u(d.id),disabled:o,children:o?"Current Plan":"Select Plan"})]})]})}function Vb(){const[d,r]=w.useState(!1),{user:u}=ht(),o=async()=>{u&&(r(!0),r(!1))};return l.jsx("div",{className:"card",children:l.jsxs("div",{className:"card-body text-center",children:[l.jsx("h5",{className:"card-title",children:"Manage Your Subscription"}),l.jsx("p",{className:"card-text",children:"Update your payment method, view invoices, and manage your subscription."}),l.jsx("button",{className:"btn btn-outline-primary",onClick:o,disabled:d,children:d?"Opening...":"Open Customer Portal"})]})})}function Zb(){const{userProfile:d}=ht(),[r,u]=w.useState(!1),o=d?.subscription?.plan??"free",f=async h=>{if(!(!d||h==="free")){u(!0);try{if(!Yb[h])return}catch(T){console.error("Error creating checkout session:",T),alert("Failed to start checkout. Please try again.")}finally{u(!1)}}},x=Object.values(Gf);return l.jsx(oh,{stripe:Qb,children:l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsxs("div",{className:"col-12",children:[l.jsx("h1",{className:"h2 mb-4",children:"Billing & Subscription"}),r&&l.jsx("div",{className:"d-flex justify-content-center mb-4",children:l.jsx("div",{className:"spinner-border",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Processing..."})})}),l.jsx("div",{className:"card mb-4",children:l.jsxs("div",{className:"card-body",children:[l.jsx("h5",{className:"card-title",children:"Current Plan"}),l.jsxs("p",{className:"card-text",children:["You're currently on the"," ",l.jsxs("strong",{children:[Gf[o]?.name??"Free"," plan"]}),d?.subscription?.currentPeriodEnd&&l.jsxs("span",{className:"text-muted ms-2",children:["(Renews on"," ",new Date(d.subscription.currentPeriodEnd).toLocaleDateString(),")"]})]})]})}),l.jsx("div",{className:"row g-4 mb-4",children:x.map(h=>l.jsx("div",{className:"col-md-4",children:l.jsx(Xb,{plan:h,currentPlan:o,onSelect:f})},h.id))}),o!=="free"&&l.jsx(Vb,{})]})})})})}class Wb{doc=null;setFont(r,u="normal"){this.doc&&(this.doc.setFont("helvetica",u),this.doc.setFontSize(r))}async generateQuotationPDF(r,u={}){this.doc=new T0;try{this.doc.setProperties({title:`Quotation ${r.invoiceNumber}`,subject:"Professional Quotation",author:u.branding?.companyName||"Estimatix",creator:"Estimatix - Professional Estimation Platform"}),await this.addWatermark(u);let o=45;o=this.addHeader(r,u,o),o=this.addCustomerDetails(r,o),o=this.addItemsTable(r,o+10);const f=this.doc.internal.pageSize.getHeight(),T=80+30;o+T>f-10&&(this.doc.addPage(),await this.addWatermark(u),o=20),o=this.addTotals(r,o+15),o=this.addNotesAndTerms(r,o+10),u.qrCode&&await this.addQRCode(u.qrCode),u.digitalSignature&&this.addDigitalSignature(u.digitalSignature);const b=this.doc.getNumberOfPages();for(let y=1;y<=b;y++)this.doc.setPage(y),this.addFooter(u,y,b);return this.doc.output("blob")}catch(o){throw console.error("Error generating PDF:",o),new Error("Failed to generate PDF")}}async addWatermark(r){if(!this.doc)return;const u=this.doc.internal.pageSize.getWidth(),o=this.doc.internal.pageSize.getHeight();let f="ESTIMATIX",x=.25,h="#6C63FF",T=!0;r.watermark?(f=r.watermark.text||f,x=r.watermark.opacity??x,h=r.watermark.color||h):r.confidential?(f="CONFIDENTIAL",x=.2,h="#FF6B6B",T=!1):r.draft&&(f="DRAFT",x=.2,h="#4ECDC4",T=!1),this.doc.saveGraphicsState();try{if(this.doc.setGState){const N=new this.doc.GState({opacity:x,"stroke-opacity":x});this.doc.setGState(N)}}catch(N){console.warn("GState not supported, watermark will be fully opaque:",N),typeof this.doc.setOpacity=="function"&&this.doc.setOpacity(x)}const b=u/2,y=o/2;if(T&&!r.draft&&!r.confidential)try{const N=`<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,S=document.createElement("canvas"),R=S.getContext("2d");if(!R)throw new Error("Canvas context not available");const q=window.URL||window.webkitURL||window,G=new Image,O=new Blob([N],{type:"image/svg+xml;charset=utf-8"}),L=q.createObjectURL(O);await new Promise((K,ee)=>{G.onload=()=>{try{S.width=500,S.height=500,R&&(R.clearRect(0,0,500,500),R.drawImage(G,0,0,500,500));const Y=S.toDataURL("image/png",.95),Z=120,le=b-Z/2,Ge=y-Z/2;this.doc.addImage(Y,"PNG",le,Ge,Z,Z,void 0,"NONE"),console.log("✅ Logo watermark added successfully to PDF"),q.revokeObjectURL(L),K()}catch(Y){console.error("❌ Failed to convert logo to canvas:",Y),q.revokeObjectURL(L),ee(Y)}},G.onerror=Y=>{console.error("❌ Failed to load logo image:",Y),q.revokeObjectURL(L),ee(new Error("Failed to load logo.svg"))},G.src=L})}catch(N){console.error("❌ Logo watermark failed, using fallback circle:",N),this.doc.setDrawColor(h),this.doc.setFillColor(h),this.doc.setLineWidth(4),this.doc.circle(b,y-15,40,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(h),this.doc.text("E",b,y-5,{align:"center"})}this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(h),r.draft?this.doc.text("DRAFT",b,y,{align:"center",angle:-15}):r.confidential?this.doc.text("CONFIDENTIAL",b,y,{align:"center",angle:-15}):this.doc.text("ESTIMATIX",b,y+80,{align:"center",angle:-45}),this.doc.restoreGraphicsState()}addHeader(r,u,o){if(!this.doc)return o;const f=this.doc.internal.pageSize.getWidth(),x=40,h=15;this.doc.setFillColor(108,99,255),this.doc.rect(0,0,f,x-2,"F"),this.doc.setFillColor(245,245,255),this.doc.rect(0,x-2,f,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(16),this.doc.text(u.branding?.companyName||"Venkatesh Aluminium & Glass",h,14),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.text("Professional Estimation & Quotation Platform",h,20),this.doc.setFontSize(8.8),this.doc.setTextColor(240,240,240);const T=u.branding?.phone||"8888889999",b=u.branding?.email||"info@example.com";this.doc.text(`Phone: ${T}  |  Email: ${b}`,h,26);const y=60,N=26,S=f-y-h,R=6;this.doc.setFillColor(255,255,255),this.doc.roundedRect(S,R,y,N,3,3,"F"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(S+4,R+2,y-8,7,2,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.text("QUOTATION",S+y/2,R+7,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(10),this.doc.setTextColor(33,37,41),this.doc.text(`#${r.invoiceNumber}`,S+y/2,R+14,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text(`Date: ${r.date.toLocaleDateString("en-IN")}`,S+y/2,R+19,{align:"center"});const q=new Date(r.date);return q.setDate(q.getDate()+30),this.doc.setFillColor(237,233,254),this.doc.roundedRect(S+10,R+21,y-20,4,2,2,"F"),this.doc.setTextColor(108,99,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(7),this.doc.text(`Valid Until: ${q.toLocaleDateString("en-IN")}`,S+y/2,R+24,{align:"center"}),x+8}addCustomerDetails(r,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth(),f=15;let x=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(f,x,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Customer Information",f+8,x+7),x+=15;const h=x,T=22;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(f,h,o-f*2,T,4,4,"FD"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(f,h,3,T,1,1,"F");const b=f+10,y=o/2+5;let N=h+9;return this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Name:",b,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerName,b+18,N),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Email:",y,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerEmail,y+18,N),N+=7,this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Phone:",b,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerPhone,b+18,N),h+T+12}addItemsTable(r,u){if(!this.doc)return u;let o=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,o,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Item Details",22,o+7),o+=14;const f=["Item","Width","Height","Qty","Glass","Profile","Weight (kg)","Rate (Rs.)","Total (Rs.)"],x=r.items.map((T,b)=>[T.name||`Item ${b+1}`,`${T.width}"`,`${T.height}"`,"1","Clear","Standard",(T.area*2.5).toFixed(2),`Rs. ${T.rate.toFixed(2)}`,`Rs. ${T.total.toFixed(2)}`]);return z0(this.doc,{head:[f],body:x,startY:o,theme:"grid",styles:{font:"helvetica",fontSize:8.5,cellPadding:{top:4,right:3,bottom:4,left:3},lineColor:[230,230,230],lineWidth:.25,textColor:[33,37,41],valign:"middle",overflow:"ellipsize"},headStyles:{fillColor:[240,240,255],textColor:[76,63,255],fontStyle:"bold",fontSize:8.8,halign:"center",lineWidth:.25,overflow:"ellipsize",cellPadding:{top:5,bottom:5}},alternateRowStyles:{fillColor:[250,250,250]},bodyStyles:{fillColor:[255,255,255]},columnStyles:{0:{cellWidth:23,halign:"left"},1:{cellWidth:16,halign:"center"},2:{cellWidth:16,halign:"center"},3:{cellWidth:12,halign:"center"},4:{cellWidth:21,halign:"center"},5:{cellWidth:21,halign:"center"},6:{cellWidth:19,halign:"right"},7:{cellWidth:26,halign:"right"},8:{cellWidth:28,halign:"right",fontStyle:"bold",textColor:[76,63,255]}},margin:{left:15,right:15},tableWidth:"wrap",didDrawCell:T=>{T.section==="head"&&(T.cell.styles.valign="middle")}}),this.doc.lastAutoTable.finalY+10}addTotals(r,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth();let f=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Summary",23,f+7),f+=15;const x=r.items.reduce((_,Q)=>_+Q.area,0),h=r.items.reduce((_,Q)=>_+Q.area*2.5,0),T=(o-45)/2,b=56,y=15,N=y+T+15;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.roundedRect(y,f,T,b,5,5,"FD");let S=f+11;this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9.5),this.doc.setTextColor(31,41,55),this.doc.text("Material Details:",y+7,S),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.6),this.doc.setTextColor(55,65,81),S+=8,this.doc.text(`• Glass Area: ${x.toFixed(2)} sq.ft`,y+7,S),S+=6,this.doc.text(`• Frame Weight: ${h.toFixed(2)} kg`,y+7,S),S+=6,this.doc.text("• Rate: Rs. 47.0 per kg",y+7,S),S+=9,this.doc.setFontSize(8),this.doc.text("Note: Prices valid 30 days from issue.",y+7,S),this.doc.setFillColor(255,255,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(N,f,T,b,5,5,"FD");let R=f+11;const q=8,G=N+q,O=N+T-q,L=(_,Q,ne=[31,41,55],I=!1)=>{if(!this.doc)return;this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(75,85,99),this.doc.text(_,G,R),this.doc.setFont("helvetica",I?"bold":"normal"),this.doc.setTextColor(...ne);const je=typeof Q=="number"?`Rs. ${Q.toLocaleString("en-IN",{minimumFractionDigits:2})}`:Q;this.doc.text(je,O,R,{align:"right"}),R+=6.5};L("Subtotal",r.subtotal,[31,41,55],!0),L("Tax (GST 18%)",r.tax,[31,41,55],!0);const K=r.discount||0;K>0&&L("Discount (5%)",`− Rs. ${K.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const ee=r.advancePaid||0;ee>0&&L("Advance Received",`− Rs. ${ee.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const Y=r.roundOff||0;if(Math.abs(Y)>.01){const _=Y>=0?"+":"−";L("Round-off",`${_} Rs. ${Math.abs(Y).toFixed(2)}`,[107,114,128],!1)}let Z=r.grandTotal;ee>0&&(Z=r.grandTotal-ee),K>0&&(Z=Z-K),(ee>0||K>0)&&(R+=1,this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.3),this.doc.line(G,R,O,R),R+=5,this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(239,68,68),this.doc.text("Balance Due",G,R),this.doc.setFontSize(10),this.doc.text(`Rs. ${Z.toLocaleString("en-IN",{minimumFractionDigits:2})}`,O,R,{align:"right"}),R+=6),R+=2,this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.line(N+q,R,N+T-q,R);const le=N+q,Ge=R+5,De=T-q*2,Fe=16;this.doc.setFillColor(84,63,255),this.doc.roundedRect(le,Ge,De,Fe,3,3,"F"),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(255,255,255);const ct=Ge+Fe/2+2.5;this.doc.setFontSize(7.5),this.doc.text("GRAND TOTAL",le+10,ct);const Ie=r.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2});let Pe=11;Ie.length>12&&(Pe=10),Ie.length>15&&(Pe=9),this.doc.setFontSize(Pe);const Ve=this.doc.getTextWidth(Ie),wt=Pe*.65;this.doc.setFontSize(wt);const ot="Rs.",g=this.doc.getTextWidth(ot);return this.doc.text(ot,le+De-10-Ve-g-1.5,ct-.8),this.doc.setFontSize(Pe),this.doc.text(Ie,le+De-10,ct,{align:"right"}),f+b+18}addNotesAndTerms(r,u){if(!this.doc)return u;const o=this.doc.internal.pageSize.getWidth();let f=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Notes",23,f+7),f+=16,this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3);const x=r.notes?30:22;this.doc.roundedRect(15,f,o-30,x,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(55,65,81);let h=f+8;if(r.notes){const L=this.doc.splitTextToSize(r.notes,o-50);this.doc.text(L,22,h),h+=L.length*4+6}this.doc.setFont("helvetica","italic"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128);const b=`This quotation is auto-calculated based on the latest aluminium profile rates as of ${new Date().toLocaleString("en-IN",{month:"long",year:"numeric"})}.`,y=this.doc.splitTextToSize(b,o-50);this.doc.text(y,22,h),f+=x+12;const N=r.advancePaid||0;if(N>0){const L=r.grandTotal-N;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Payment Details",23,f+7),f+=16,this.doc.setFillColor(250,250,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,f,o-30,18,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(55,65,81),this.doc.text("Advance Paid:",22,f+8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(34,197,94),this.doc.text(`Rs. ${N.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,f+8,{align:"right"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(55,65,81),this.doc.text("Balance Due:",22,f+14),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(239,68,68),this.doc.text(`Rs. ${L.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,f+14,{align:"right"}),f+=22}if(r.termsAndConditions){this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Terms & Conditions",23,f+7),f+=16,this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(75,85,99);const L=this.doc.splitTextToSize(r.termsAndConditions,o-50);this.doc.text(L,22,f),f+=L.length*4+12}const S=this.doc.internal.pageSize.getHeight();f>S-90&&(this.doc.addPage(),f=20),this.doc.setFillColor(237,233,254),this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.roundedRect(15,f,o-30,12,3,3,"FD"),this.doc.setFillColor(108,99,255),this.doc.circle(22,f+6,2.5,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(7),this.doc.setFont("helvetica","bold"),this.doc.text("✓",22,f+7.2,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(8),this.doc.setTextColor(76,63,255),this.doc.text("DIGITALLY VERIFIED",28,f+5.5),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(7.5),this.doc.setTextColor(100,100,100);const R=`Document ID: #${r.invoiceNumber} | Verified by Estimatix Digital Sign System`;this.doc.text(R,28,f+9),f+=17;const q=(o-45)/2,G=35;this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,f,q,G,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Prepared & Authorized by",22,f+8),this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.5),this.doc.line(22,f+20,22+q-14,f+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Authorized Signature",22,f+25),this.doc.setFontSize(7.5),this.doc.text("Venkatesh Aluminium & Glass",22,f+30);const O=15+q+15;return this.doc.roundedRect(O,f,q,G,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Client Acknowledgement",O+7,f+8),this.doc.setDrawColor(200,200,200),this.doc.line(O+7,f+20,O+q-7,f+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Client Signature",O+7,f+25),this.doc.setFontSize(7.5),this.doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`,O+7,f+30),f+=G+10,f}async addQRCode(r){if(!(!this.doc||!r))try{const u=await lp.toDataURL(r.url,{width:400,margin:2,color:{dark:"#4f46e5",light:"#ffffff"}}),o=this.doc.internal.pageSize.getWidth(),f=this.doc.internal.pageSize.getHeight(),x=35,h=o-x-20,T=f-x-60;this.doc.setFillColor(255,255,255),this.doc.rect(h-3,T-3,x+6,x+6,"F"),this.doc.setDrawColor(79,70,229),this.doc.setLineWidth(.5),this.doc.rect(h-3,T-3,x+6,x+6,"S"),this.doc.addImage(u,"PNG",h,T,x,x),this.doc.setFontSize(8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(79,70,229);const b=r.label||"Scan to View";this.doc.text(b,h+x/2,T+x+6,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(100,100,100),this.doc.setFontSize(7),this.doc.text("Quote Lookup",h+x/2,T+x+11,{align:"center"})}catch(u){console.error("Failed to add QR code to PDF:",u)}}addDigitalSignature(r){if(!this.doc||!r)return;let o=this.doc.internal.pageSize.getHeight()-80;if(this.doc.setFontSize(10),this.doc.setFont("helvetica","bold"),this.doc.text("Authorized Signature:",20,o),r.signatureImage)try{this.doc.addImage(r.signatureImage,"PNG",20,o+5,40,20)}catch(f){console.warn("Failed to add signature image:",f)}this.doc.line(20,o+30,80,o+30),this.doc.setFont("helvetica","normal"),this.doc.text(r.signerName,20,o+35),this.doc.text(r.signerTitle,20,o+42),this.doc.text(r.date?.toLocaleDateString()||new Date().toLocaleDateString(),20,o+49),this.doc.setFontSize(8),this.doc.setTextColor(100,100,100),this.doc.text("This document contains a digital signature and is legally binding.",20,o+60)}addFooter(r,u=1,o=1){if(!this.doc)return;const f=this.doc.internal.pageSize.getWidth(),x=this.doc.internal.pageSize.getHeight(),h=28,T=x-h;this.doc.setFillColor(248,247,255),this.doc.rect(0,T,f,h,"F"),this.doc.setFillColor(108,99,255),this.doc.rect(0,T,f,1.5,"F"),this.doc.setFillColor(76,63,255),this.doc.rect(0,T+1.5,f,.8,"F"),this.setFont(8,"normal"),this.doc.setTextColor(31,41,55);const b=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});this.doc.text(`Generated: ${b}`,15,T+10),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100),this.doc.text(`Page ${u} of ${o}`,15,T+17),this.setFont(10,"bold"),this.doc.setTextColor(31,41,55);const y=r.branding?.companyName||"Venkatesh Aluminium & Glass";this.doc.text(`Prepared by ${y}`,f/2,T+10,{align:"center"}),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100);const N=r.branding?.phone||"+91-9876543210",S=r.branding?.email||"info@example.com",R=`Phone: ${N} | Email: ${S}`;this.doc.text(R,f/2,T+17,{align:"center"}),this.setFont(7.5,"normal"),this.doc.setTextColor(107,114,128),this.doc.text("Generated by Estimatix Quotation Suite",f-15,T+11,{align:"right"}),this.setFont(7,"normal"),this.doc.setTextColor(156,163,175),this.doc.text("© 2025 All Rights Reserved",f-15,T+17,{align:"right"})}downloadPDF(r,u){const o=URL.createObjectURL(r),f=document.createElement("a");f.href=o,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(o)}async savePDFDraft(r,u){try{const o={draft:!0,watermark:{text:"DRAFT",opacity:.1,color:"#4ECDC4"}},f=await this.generateQuotationPDF(r,o);return new Promise((x,h)=>{const T=new FileReader;T.onload=()=>x(T.result),T.onerror=h,T.readAsDataURL(f)})}catch(o){throw console.error("Error saving PDF draft:",o),o}}}const mh=new Wb;let co;async function Kb(){return co||(co=await Ff(()=>import("./vendor-xlsx-DGuHH-KN.js"),[])),co}const oo={"4mm":10,"5mm":12.5,"6mm":15,"24mm DG":22},uo={"Series 45":2.5,"Series 60":3.8,"Series 75":4.5,"Sliding Light":2.2,"Sliding Heavy":5};function Jb(){const[d,r]=w.useState([]),[u,o]=w.useState("5mm"),[f,x]=w.useState("Series 60"),[h,T]=w.useState(!1),[b,y]=w.useState(""),[N,S]=w.useState({settings:!1,items:!1,summary:!1}),[R,q]=w.useState({name:"Venkatesh Aluminium & Glass",address:"",phone:"",email:""}),[G,O]=w.useState({name:"",address:"",phone:"",email:""}),[L,K]=w.useState(!1),[ee,Y]=w.useState(null),Z=w.useMemo(()=>{let g=0,_=0,Q=0,ne=0;d.forEach(Ke=>{const{glassArea:gt,glassWeight:dt,profileLength:Jt,profileWeight:la}=le(Ke);g+=gt,_+=dt,Q+=Jt,ne+=la});const I=_+ne,je=b?I*parseFloat(b):0,ie=je,be=je*.18,ce=je*1.18;return{totalGlassArea:g,totalGlassWeight:_,totalProfileLength:Q,totalProfileWeight:ne,totalWeight:I,totalCost:je,subtotal:ie,gst:be,grandTotal:ce}},[d,b]);function le(g){const _=g.glassType||u,Q=g.profileType||f,ne=(g.width||0)*(g.height||0)*(g.quantity||1),I=ne*oo[_],ie=2*((g.width||0)+(g.height||0))*(g.quantity||1),be=ie*uo[Q];return{glassArea:ne,glassWeight:I,profileLength:ie,profileWeight:be}}const Ge=()=>{const g={id:Date.now(),name:`Window ${d.length+1}`,width:"",height:"",quantity:1,glassType:"",profileType:""};r([...d,g])},De=(g,_,Q)=>{r(d.map(ne=>ne.id===g?{...ne,[_]:Q}:ne))},Fe=g=>{r(d.filter(_=>_.id!==g))},ct=()=>{const g=[];if(d.length===0)g.push("💡 Start by adding items to get AI-powered suggestions!");else{Z.totalWeight>100&&u==="5mm Clear"&&g.push("⚡ Consider using 6mm or 8mm glass for better strength in large installations"),Z.totalGlassArea>10&&f==="Standard"&&g.push("🔧 For large areas, Heavy Duty profiles provide better stability"),b&&parseFloat(b)>300&&g.push("💰 Consider negotiating bulk pricing - your rate seems high for large orders"),d.forEach((ne,I)=>{(ne.width>3||ne.height>3)&&g.push(`⚠️ Item ${I+1}: Large dimensions may require additional support frames`)}),Z.totalGlassArea/d.length<1&&g.push("📊 Small items detected - consider batch production for cost efficiency");const Q=Z.totalWeight/Z.totalGlassArea;Q<15?g.push("✅ Excellent material efficiency! Your design is optimized"):Q>30&&g.push("🎯 Consider lighter profiles to reduce material costs")}g.length===0&&g.push("✨ Your configuration looks great! No suggestions at the moment."),alert(`🤖 AI Suggestions:

`+g.join(`

`))},Ie=()=>{const g={items:d,globalGlassType:u,globalProfileType:f,ratePerKg:b,companyData:R,customerData:G,savedAt:Date.now()};localStorage.setItem("estimatix_calculator_draft",JSON.stringify(g)),Y(Date.now())},Pe=()=>{try{const g=localStorage.getItem("estimatix_calculator_draft");if(g){const _=JSON.parse(g);r(_.items||[]),o(_.globalGlassType||"5mm"),x(_.globalProfileType||"Series 60"),y(_.ratePerKg||""),q(_.companyData||R),O(_.customerData||{name:"",address:"",phone:"",email:""}),Y(_.savedAt||null),K(!1)}}catch(g){console.error("Error restoring draft:",g)}},Ve=()=>{localStorage.removeItem("estimatix_calculator_draft"),Y(null),K(!1)};w.useEffect(()=>{const g=localStorage.getItem("estimatix_calculator_draft");if(g)try{const _=JSON.parse(g);Y(_.savedAt||null),K(!0)}catch(_){console.error("Error parsing draft:",_),localStorage.removeItem("estimatix_calculator_draft")}},[]),w.useEffect(()=>{if(d.length>0||b||G.name||R.name!=="Venkatesh Aluminium & Glass"){const g=setTimeout(()=>{Ie()},2e3);return()=>clearTimeout(g)}},[d,u,f,b,R,G]);const wt=async()=>{try{const g={invoiceNumber:`QUOT-${Date.now()}`,date:new Date,customerName:G.name||"Valued Customer",customerPhone:G.phone||"",customerEmail:G.email||"",customerAddress:G.address||"",items:d.map((je,ie)=>{const{glassArea:be,glassWeight:ce,profileWeight:Ke}=le(je),gt=ce+Ke,dt=b?parseFloat(b):0,Jt=gt*dt;return{name:je.name||`Item ${ie+1}`,type:je.name.toLowerCase().includes("door")?"door":"window",width:je.width||0,height:je.height||0,area:be,rate:dt,total:Jt}}),subtotal:Z.totalCost,tax:Z.totalCost*.18,grandTotal:Z.totalCost*1.18,notes:`Total Glass Area: ${Z.totalGlassArea.toFixed(2)} m²
Total Weight: ${Z.totalWeight.toFixed(2)} kg
Glass Type: ${u}
Profile Type: ${f}`,termsAndConditions:`1. Prices are valid for 15 days.
2. Delivery within 7 working days.
3. Payment: 50% advance, balance on delivery.`},_={branding:{companyName:R.name,address:R.address||"",phone:R.phone||"",email:R.email||""}},Q=await mh.generateQuotationPDF(g,_),ne=URL.createObjectURL(Q),I=document.createElement("a");I.href=ne,I.download=`Quotation_${g.invoiceNumber}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(ne),alert("✅ Premium PDF generated successfully!")}catch(g){console.error("PDF generation error:",g),alert("Failed to generate PDF: "+(g.message||"Unknown error"))}},ot=async()=>{try{const g=await Kb(),_=d.map(ie=>{const{glassArea:be,glassWeight:ce,profileLength:Ke,profileWeight:gt}=le(ie);return{"Item Name":ie.name,"Width (m)":ie.width||0,"Height (m)":ie.height||0,Quantity:ie.quantity||1,"Glass Type":ie.glassType||u,"Profile Type":ie.profileType||f,"Glass Area (m²)":be.toFixed(2),"Glass Weight (kg)":ce.toFixed(2),"Profile Length (m)":Ke.toFixed(2),"Profile Weight (kg)":gt.toFixed(2),"Total Weight (kg)":(ce+gt).toFixed(2)}});_.push({"Item Name":"TOTAL","Width (m)":"","Height (m)":"",Quantity:"","Glass Type":"","Profile Type":"","Glass Area (m²)":Z.totalGlassArea.toFixed(2),"Glass Weight (kg)":Z.totalGlassWeight.toFixed(2),"Profile Length (m)":Z.totalProfileLength.toFixed(2),"Profile Weight (kg)":Z.totalProfileWeight.toFixed(2),"Total Weight (kg)":Z.totalWeight.toFixed(2)});const Q=g.utils.json_to_sheet(_),ne=g.utils.book_new();g.utils.book_append_sheet(ne,Q,"Calculation");const I=g.write(ne,{bookType:"xlsx",type:"array"}),je=new Blob([I],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});ip.saveAs(je,"aluminium-calculation.xlsx")}catch(g){console.error("Error generating Excel:",g),alert("Error generating Excel file. Please try again.")}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),L&&l.jsx("div",{className:"draft-modal-overlay",onClick:()=>K(!1),children:l.jsxs("div",{className:"draft-modal-card",onClick:g=>g.stopPropagation(),children:[l.jsxs("div",{className:"draft-modal-title",children:[l.jsx("i",{className:"bi bi-clock-history"}),"Restore Saved Draft?"]}),l.jsx("p",{className:"draft-modal-text",children:"We found a previously saved draft. Would you like to continue editing it?"}),ee&&l.jsxs("div",{className:"draft-modal-timestamp",children:[l.jsx("i",{className:"bi bi-calendar-check"}),"Saved ",new Date(ee).toLocaleString()]}),l.jsxs("div",{className:"draft-modal-actions",children:[l.jsxs("button",{className:"draft-btn draft-btn-discard",onClick:Ve,children:[l.jsx("i",{className:"bi bi-trash3 me-1"}),"Discard"]}),l.jsxs("button",{className:"draft-btn draft-btn-restore",onClick:Pe,children:[l.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Restore Draft"]})]})]})}),l.jsx("button",{className:"ai-assist-btn",onClick:ct,title:"AI Suggestions",children:l.jsx("i",{className:"bi bi-stars"})}),l.jsx("div",{className:"premium-calc-container",children:l.jsxs("div",{className:"container-fluid",style:{maxWidth:"1400px"},children:[l.jsxs("div",{className:"premium-card mb-4",children:[l.jsx("div",{className:"premium-header",children:l.jsxs("div",{className:"header-layout",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("div",{className:"header-icon-box",children:l.jsx("i",{className:"bi bi-calculator-fill"})}),l.jsxs("div",{className:"header-text",children:[l.jsx("h1",{children:"Premium Calculator"}),l.jsx("p",{className:"header-subtitle",children:"Professional Aluminium & Glass Estimation"})]})]}),l.jsxs("div",{className:"header-badges",children:[l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-shield-check"}),l.jsx("span",{children:"Enterprise Grade"})]}),l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-graph-up"}),l.jsx("span",{children:"Real-time Calc"})]}),l.jsxs("span",{className:"premium-badge",children:[l.jsx("i",{className:"bi bi-stars"}),l.jsx("span",{children:"AI-Powered"})]})]})]})}),l.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2 mt-3 px-3 pb-3",children:[ee&&l.jsxs("span",{className:"draft-indicator",children:[l.jsx("i",{className:"bi bi-check-circle-fill"}),"Draft saved ",new Date(ee).toLocaleTimeString()]}),l.jsxs("button",{className:"draft-control-btn draft-save-btn",onClick:Ie,title:"Save current data as draft",children:[l.jsx("i",{className:"bi bi-floppy"}),"Save Template"]}),ee&&l.jsxs("button",{className:"draft-control-btn draft-clear-btn",onClick:Ve,title:"Clear saved draft",children:[l.jsx("i",{className:"bi bi-trash3"}),"Clear Template"]})]})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("i",{className:"bi bi-building-fill"}),l.jsx("h5",{children:"Company Information"})]}),l.jsx("div",{className:"section-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Company Name"}),l.jsx("input",{type:"text",className:"form-control",value:R.name,onChange:g=>q({...R,name:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Address"}),l.jsx("input",{type:"text",className:"form-control",value:R.address,onChange:g=>q({...R,address:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Phone"}),l.jsx("input",{type:"text",className:"form-control",value:R.phone,onChange:g=>q({...R,phone:g.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Email"}),l.jsx("input",{type:"email",className:"form-control",value:R.email,onChange:g=>q({...R,email:g.target.value})})]})]})})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("i",{className:"bi bi-person-circle"}),l.jsx("h5",{children:"Customer Information"})]}),l.jsx("div",{className:"section-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-person-badge-fill"}),"Customer Name"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.name,onChange:g=>O({...G,name:g.target.value}),placeholder:"Enter customer name..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-geo-alt-fill"}),"Address"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.address,onChange:g=>O({...G,address:g.target.value}),placeholder:"Enter address..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-telephone-fill"}),"Phone"]}),l.jsx("input",{type:"text",className:"form-control premium-input",value:G.phone,onChange:g=>O({...G,phone:g.target.value}),placeholder:"Enter phone number..."})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-envelope-fill"}),"Email"]}),l.jsx("input",{type:"email",className:"form-control premium-input",value:G.email,onChange:g=>O({...G,email:g.target.value}),placeholder:"Enter email..."})]})]})})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,settings:!N.settings}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-sliders"}),l.jsx("h5",{children:"Default Settings & Rates"})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.settings?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.settings?"collapsed":""}`,children:[l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-layers-fill"}),"Default Glass Type",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Select default glass thickness for all items"})]}),l.jsx("select",{className:"form-select premium-input",value:u,onChange:g=>o(g.target.value),children:Object.keys(oo).map(g=>l.jsx("option",{value:g,children:g},g))})]}),l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-columns-gap"}),"Default Profile Type",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Choose aluminum profile series"})]}),l.jsx("select",{className:"form-select premium-input",value:f,onChange:g=>x(g.target.value),children:Object.keys(uo).map(g=>l.jsx("option",{value:g,children:g},g))})]}),l.jsxs("div",{className:"col-md-3",children:[l.jsxs("label",{className:"premium-form-label",children:[l.jsx("i",{className:"bi bi-currency-rupee"}),"Rate per kg (₹)",l.jsx("i",{className:"bi bi-info-circle info-icon",title:"Enter the aluminum rate per kg as per your supplier"})]}),l.jsx("input",{type:"number",className:"form-control premium-input",value:b,onChange:g=>y(g.target.value),placeholder:"Enter rate..."})]}),l.jsx("div",{className:"col-md-3",children:l.jsxs("div",{className:"form-check mt-5",children:[l.jsx("input",{className:"form-check-input",type:"checkbox",id:"showOnlyTotals",checked:h,onChange:g=>T(g.target.checked),style:{cursor:"pointer"}}),l.jsx("label",{className:"form-check-label premium-form-label",htmlFor:"showOnlyTotals",style:{cursor:"pointer"},children:"Show only totals"})]})})]}),l.jsxs("div",{className:"ai-insights-bar",children:[l.jsx("i",{className:"bi bi-lightbulb-fill"}),l.jsx("strong",{children:"AI Insight:"})," Using ",l.jsx("strong",{children:f})," with ",l.jsx("strong",{children:u})," glass provides optimal strength-to-weight ratio. Average project cost: ",l.jsxs("strong",{children:["₹",b?(parseFloat(b)*150).toLocaleString():"---"]})," per sqm."]})]})]}),!h&&l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,items:!N.items}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-box-seam-fill"}),l.jsx("h5",{children:"Items & Calculations"}),l.jsxs("span",{className:"badge bg-primary ms-2",children:[d.length," Items"]})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.items?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.items?"collapsed":""}`,children:[l.jsxs("div",{className:"premium-datagrid-header",children:[l.jsxs("div",{className:"datagrid-title",children:[l.jsx("i",{className:"bi bi-grid-3x3-gap me-2"}),l.jsx("span",{className:"gradient-text",children:"Estimatix Premium DataGrid"}),l.jsx("span",{className:"items-badge",children:d.length})]}),l.jsxs("button",{className:"premium-add-btn",onClick:Ge,children:[l.jsx("i",{className:"bi bi-plus-lg me-2"}),"Add New Item"]})]}),d.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:l.jsx("i",{className:"bi bi-inbox"})}),l.jsx("h5",{children:"No Items Yet"}),l.jsx("p",{children:'Click "Add New Item" to start building your quotation'})]}):l.jsx("div",{className:"premium-datagrid-wrapper",children:l.jsx("div",{className:"premium-datagrid",children:l.jsxs("table",{className:"datagrid-table",children:[l.jsx("thead",{className:"datagrid-header-sticky",children:l.jsxs("tr",{children:[l.jsx("th",{className:"col-text",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-tag-fill"}),l.jsx("span",{children:"Item Name"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-arrows-expand"}),l.jsx("span",{children:"Width (m)"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-arrows-vertical"}),l.jsx("span",{children:"Height (m)"})]})}),l.jsx("th",{className:"col-numeric",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-hash"}),l.jsx("span",{children:"Qty"})]})}),l.jsx("th",{className:"col-select",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-gem"}),l.jsx("span",{children:"Glass Type"})]})}),l.jsx("th",{className:"col-select",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-box"}),l.jsx("span",{children:"Profile Type"})]})}),l.jsx("th",{className:"col-calculated",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-droplet"}),l.jsx("span",{children:"Glass Wt"})]})}),l.jsx("th",{className:"col-calculated",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-box-seam"}),l.jsx("span",{children:"Profile Wt"})]})}),l.jsx("th",{className:"col-total",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-calculator"}),l.jsx("span",{children:"Total (kg)"})]})}),l.jsx("th",{className:"col-action",children:l.jsxs("div",{className:"th-content",children:[l.jsx("i",{className:"bi bi-gear"}),l.jsx("span",{children:"Action"})]})})]})}),l.jsx("tbody",{className:"datagrid-body",children:d.map((g,_)=>{const{glassWeight:Q,profileWeight:ne}=le(g);return l.jsxs("tr",{className:"datagrid-row",children:[l.jsx("td",{className:"col-text",children:l.jsx("input",{type:"text",className:"datagrid-input input-text",value:g.name,onChange:I=>De(g.id,"name",I.target.value),placeholder:"Enter item name..."})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.width,onChange:I=>De(g.id,"width",parseFloat(I.target.value)||0),step:"0.01",min:"0"})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.height,onChange:I=>De(g.id,"height",parseFloat(I.target.value)||0),step:"0.01",min:"0"})}),l.jsx("td",{className:"col-numeric",children:l.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:g.quantity,onChange:I=>De(g.id,"quantity",parseInt(I.target.value)||1),min:"1"})}),l.jsx("td",{className:"col-select",children:l.jsxs("select",{className:"datagrid-select",value:g.glassType,onChange:I=>De(g.id,"glassType",I.target.value),children:[l.jsx("option",{value:"",children:"Default"}),Object.keys(oo).map(I=>l.jsx("option",{value:I,children:I},I))]})}),l.jsx("td",{className:"col-select",children:l.jsxs("select",{className:"datagrid-select",value:g.profileType,onChange:I=>De(g.id,"profileType",I.target.value),children:[l.jsx("option",{value:"",children:"Default"}),Object.keys(uo).map(I=>l.jsx("option",{value:I,children:I},I))]})}),l.jsx("td",{className:"col-calculated",children:l.jsx("div",{className:"calculated-value",children:Q.toFixed(2)})}),l.jsx("td",{className:"col-calculated",children:l.jsx("div",{className:"calculated-value",children:ne.toFixed(2)})}),l.jsx("td",{className:"col-total",children:l.jsx("div",{className:"total-value",children:(Q+ne).toFixed(2)})}),l.jsx("td",{className:"col-action",children:l.jsx("button",{className:"delete-btn",onClick:()=>Fe(g.id),title:"Delete item",children:l.jsx("i",{className:"bi bi-trash3"})})})]},g.id)})})]})})})]})]}),l.jsxs("div",{className:"premium-card mb-4",children:[l.jsxs("div",{className:"section-header collapsible-header",onClick:()=>S({...N,summary:!N.summary}),children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-pie-chart-fill"}),l.jsx("h5",{children:"Project Summary & Analysis"})]}),l.jsx("i",{className:`bi bi-chevron-down chevron ${N.summary?"collapsed":""}`})]}),l.jsxs("div",{className:`collapsible-content section-body ${N.summary?"collapsed":""}`,children:[l.jsxs("div",{className:"premium-summary-grid",children:[l.jsxs("div",{className:"premium-summary-card cyan",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-grid-3x3-gap-fill"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalGlassArea.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Glass Area (m²)"}),l.jsxs("div",{className:"premium-summary-sub",children:["Across ",d.length," items"]})]}),l.jsxs("div",{className:"premium-summary-card amber",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-box-seam-fill"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalWeight.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Frame Weight (kg)"}),l.jsx("div",{className:"premium-summary-sub",children:"Combined aluminum"})]}),l.jsxs("div",{className:"premium-summary-card violet",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-rulers"})}),l.jsx("div",{className:"premium-summary-value",children:Z.totalProfileLength.toFixed(2)}),l.jsx("div",{className:"premium-summary-label",children:"Profile Length (m)"}),l.jsx("div",{className:"premium-summary-sub",children:"Total perimeter"})]}),l.jsxs("div",{className:"premium-summary-card emerald updating",children:[l.jsx("div",{className:"summary-icon",children:l.jsx("i",{className:"bi bi-currency-rupee"})}),l.jsxs("div",{className:"premium-summary-value",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]}),l.jsx("div",{className:"premium-summary-label",children:"Grand Total"}),l.jsx("div",{className:"premium-summary-sub",children:"Inc. GST @ 18%"})]})]}),l.jsxs("div",{className:"ai-insights-bar mt-4",children:[l.jsx("i",{className:"bi bi-robot"}),l.jsx("strong",{children:"AI Analysis:"})," This configuration achieves",l.jsxs("strong",{children:[" ",(Z.totalWeight/Z.totalGlassArea||0).toFixed(2)," kg/m²"]})," frame density, which is ",l.jsx("strong",{children:(Z.totalWeight/Z.totalGlassArea||0)<25?"15% lighter":"standard"})," compared to typical installations. Estimated material efficiency: ",l.jsx("strong",{children:d.length>0?"92%":"--"})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("h6",{className:"premium-form-label mb-3",children:[l.jsx("i",{className:"bi bi-table"}),"Detailed Breakdown"]}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-dark table-hover",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"table-primary",children:[l.jsx("th",{children:"Component"}),l.jsx("th",{className:"text-end",children:"Value"}),l.jsx("th",{className:"text-end",children:"Amount (₹)"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-layers me-2 text-cyan"}),"Glass Area"]}),l.jsxs("td",{className:"text-end",children:[Z.totalGlassArea.toFixed(2)," m²"]}),l.jsx("td",{className:"text-end",children:"--"})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-box me-2 text-amber"}),"Aluminum Weight"]}),l.jsxs("td",{className:"text-end",children:[Z.totalWeight.toFixed(2)," kg"]}),l.jsxs("td",{className:"text-end",children:["₹",(Z.subtotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-percent me-2 text-warning"}),"GST (18%)"]}),l.jsx("td",{className:"text-end",children:"--"}),l.jsxs("td",{className:"text-end",children:["₹",(Z.gst||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),l.jsxs("tr",{className:"table-success",children:[l.jsxs("td",{className:"fw-bold",children:[l.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Grand Total"]}),l.jsx("td",{className:"text-end fw-bold",children:"--"}),l.jsxs("td",{className:"text-end fw-bold fs-5",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]})]})]})})]}),l.jsxs("div",{className:"row g-3 mt-4",children:[l.jsx("div",{className:"col-md-6",children:l.jsx("button",{className:"premium-btn premium-btn-success w-100",onClick:ot,disabled:d.length===0,children:l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-file-earmark-excel me-2"}),"Export to Excel"]})})}),l.jsx("div",{className:"col-md-6",children:l.jsx("button",{className:"premium-btn premium-btn-danger w-100",onClick:wt,disabled:d.length===0,children:l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Generate Premium PDF"]})})})]})]})]})]})})]})}function $b(){const{user:d}=ht(),[r,u]=w.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),[o,f]=w.useState({currentYear:new Date().getFullYear(),currentSequence:1,prefix:"VEN"}),[x,h]=w.useState("");w.useEffect(()=>{const N=localStorage.getItem("admin_pricing_settings"),S=localStorage.getItem("admin_invoice_settings");N&&u(JSON.parse(N)),S&&f(JSON.parse(S))},[]);const T=()=>{localStorage.setItem("admin_pricing_settings",JSON.stringify(r)),localStorage.setItem("admin_invoice_settings",JSON.stringify(o)),h("Settings saved successfully!"),setTimeout(()=>h(""),3e3)},b=()=>{u({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),h("Settings reset to defaults!"),setTimeout(()=>h(""),3e3)},y=()=>{const N=o.currentSequence.toString().padStart(3,"0");return`${o.prefix}${o.currentYear}-${N}`};return l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsxs("div",{className:"col-12",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[l.jsxs("h1",{className:"h3 text-primary",children:[l.jsx("i",{className:"bi bi-gear-fill me-2"}),"Admin Settings"]}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-outline-secondary",onClick:b,children:[l.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Reset to Defaults"]}),l.jsxs("button",{className:"btn btn-primary",onClick:T,children:[l.jsx("i",{className:"bi bi-check-circle me-1"}),"Save Settings"]})]})]}),x&&l.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[l.jsx("i",{className:"bi bi-check-circle-fill me-2"}),x]}),l.jsxs("div",{className:"alert alert-info mb-4",children:[l.jsxs("h6",{className:"alert-heading",children:[l.jsx("i",{className:"bi bi-info-circle me-2"}),"Admin Access"]}),l.jsxs("p",{className:"mb-0",children:["Logged in as: ",l.jsx("strong",{children:d?.email})," | These settings will apply to all quotations system-wide."]})]}),l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-lg-8",children:l.jsxs("div",{className:"card mb-4",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Unit Pricing Configuration"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Glass Rate (₹ per m²)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:r.glassRatePerM2,onChange:N=>u({...r,glassRatePerM2:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per m²"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Aluminium Rate (₹ per kg)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:r.aluminiumRatePerKg,onChange:N=>u({...r,aluminiumRatePerKg:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per kg"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Accessory Rate (₹ per item)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-group-text",children:"₹"}),l.jsx("input",{type:"number",className:"form-control",value:r.accessoryRatePerItem,onChange:N=>u({...r,accessoryRatePerItem:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),l.jsx("span",{className:"input-group-text",children:"per item"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Labor Charge (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:r.laborChargePercent,onChange:N=>u({...r,laborChargePercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"GST Rate (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:r.gstPercent,onChange:N=>u({...r,gstPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label",children:"Company Markup (%)"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",className:"form-control",value:r.companyMarkupPercent,onChange:N=>u({...r,companyMarkupPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),l.jsx("span",{className:"input-group-text",children:"%"})]})]})]})})]})}),l.jsxs("div",{className:"col-lg-4",children:[l.jsxs("div",{className:"card mb-4",children:[l.jsx("div",{className:"card-header bg-success text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-receipt me-2"}),"Invoice Settings"]})}),l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Invoice Prefix"}),l.jsx("input",{type:"text",className:"form-control",value:o.prefix,onChange:N=>f({...o,prefix:N.target.value.toUpperCase()}),maxLength:5})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Current Year"}),l.jsx("input",{type:"number",className:"form-control",value:o.currentYear,onChange:N=>f({...o,currentYear:parseInt(N.target.value)||new Date().getFullYear()}),min:"2020",max:"2030"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",children:"Next Sequence Number"}),l.jsx("input",{type:"number",className:"form-control",value:o.currentSequence,onChange:N=>f({...o,currentSequence:parseInt(N.target.value)||1}),min:"1"})]}),l.jsxs("div",{className:"alert alert-info",children:[l.jsx("strong",{children:"Next Invoice Number:"}),l.jsx("br",{}),l.jsx("code",{className:"fs-6",children:y()})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header bg-info text-white",children:l.jsxs("h6",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-bar-chart me-2"}),"Quick Stats"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"small",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Material Cost (Glass + Al):"}),l.jsxs("strong",{children:["₹",(r.glassRatePerM2+r.aluminiumRatePerKg).toFixed(0)]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Total Overhead:"}),l.jsxs("strong",{children:[(r.laborChargePercent+r.gstPercent+r.companyMarkupPercent).toFixed(1),"%"]})]}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Settings Last Updated:"}),l.jsx("strong",{children:new Date().toLocaleDateString()})]})]})})]})]})]})]})})})}class Ib{async createShareLink(r,u={}){try{const o=this.generateShareToken(),f=u.expiresInDays?Date.now()+u.expiresInDays*24*60*60*1e3:void 0,x={quotationId:r,shareToken:o,isPublic:u.isPublic??!1,readOnly:u.readOnly??!0,allowedUsers:u.allowedUsers,createdAt:Date.now(),expiresAt:f};return await mo(Xt(St,"sharedQuotes",o),x),`${window.location.origin}/estimatix#/shared/${o}`}catch(o){throw console.error("Error creating share link:",o),new Error("Failed to create share link")}}async getSharedQuote(r){try{const u=Xt(St,"sharedQuotes",r),o=await xo(u);if(!o.exists())return null;const f=o.data();return f.expiresAt&&Date.now()>f.expiresAt?null:{...f,id:o.id}}catch(u){return console.error("Error getting shared quote:",u),null}}async joinCollaboration(r,u,o){try{const f=Xt(St,"collaborations",r),x=Date.now(),h={[`activeUsers.${u}`]:{userId:u,email:o,lastSeen:x}};await gn(f,h);const T=np(f,b=>{if(b.exists()){const y=b.data();this.handleCollaborationUpdate(y)}});return()=>{T(),this.leaveCollaboration(r,u)}}catch(f){throw console.error("Error joining collaboration:",f),f}}async leaveCollaboration(r,u){try{const o=Xt(St,"collaborations",r),f={[`activeUsers.${u}`]:null};await gn(o,f)}catch(o){console.error("Error leaving collaboration:",o)}}async trackChange(r,u){try{const o=Xt(St,"collaborations",r),f={...u,id:this.generateChangeId(),timestamp:Date.now()};await gn(o,{[`changes.${f.id}`]:f})}catch(o){console.error("Error tracking change:",o)}}async updateCursor(r,u,o){try{const f=Xt(St,"collaborations",r);await gn(f,{[`activeUsers.${u}.cursor`]:o,[`activeUsers.${u}.lastSeen`]:Date.now()})}catch(f){console.error("Error updating cursor:",f)}}async copyShareLink(r){try{await navigator.clipboard.writeText(r)}catch{const o=document.createElement("textarea");o.value=r,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}generateShareToken(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}generateChangeId(){return Math.random().toString(36).substring(2)}handleCollaborationUpdate(r){window.dispatchEvent(new CustomEvent("collaborationUpdate",{detail:r}))}}const fh=new Ib;function Pb(){const{user:d}=ht(),[r,u]=w.useState(!1),[o,f]=w.useState(!1),[x,h]=w.useState([]),[T,b]=w.useState(!1),[y,N]=w.useState([]),[S,R]=w.useState(!1),[q,G]=w.useState(null),[O,L]=w.useState("residential"),[K,ee]=w.useState(!1),[Y,Z]=w.useState(null),[le,Ge]=w.useState([]),[De,Fe]=w.useState(!1),[ct,Ie]=w.useState(null),[Pe,Ve]=w.useState(!1),[wt,ot]=w.useState(null),[g,_]=w.useState({quotationId:"",customerName:"",customerPhone:"",customerEmail:"",items:[],totalGlassArea:0,totalFrameWeight:0,subtotal:0,laborCharges:0,gst:0,grandTotal:0,createdAt:new Date().toISOString(),validUntil:new Date(Date.now()+720*60*60*1e3).toISOString(),status:"draft"}),[Q,ne]=w.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),I=["Clear Float Glass 5mm","Tinted Glass 6mm","Laminated Glass 6.38mm","Tempered Glass 8mm","Double Glazed Unit","Reflective Glass 6mm"],je=["Standard Aluminium Frame","Heavy Duty Frame","Powder Coated Frame","Wooden Frame","UPVC Frame"],ie=["Standard Handle","Premium Handle","Security Lock","Mesh/Grill","Weather Strip","Hinges Premium","Sliding Mechanism"],be=[{type:"window",size:"small",width:1,height:1.2,glassType:"Clear Float Glass 5mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle"],useCase:"Bathroom, Small Kitchen Window",confidence:92,durability:"8-10 years",energyEfficiency:"medium",costSavings:12},{type:"window",size:"medium",width:1.5,height:1.8,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle","Mesh/Grill"],useCase:"Bedroom Window, Living Room",confidence:95,durability:"10-12 years",energyEfficiency:"medium",costSavings:8},{type:"window",size:"large",width:2,height:2.5,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Large Living Room, Balcony Window",confidence:88,durability:"12-15 years",energyEfficiency:"high",costSavings:15},{type:"window",size:"extra-large",width:3,height:2.5,glassType:"Double Glazed Unit",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Panoramic Window, Bay Window",confidence:90,durability:"15+ years",energyEfficiency:"high",costSavings:18},{type:"door",size:"small",width:.9,height:2.1,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Premium Handle","Security Lock","Hinges Premium"],useCase:"Bathroom Door, Utility Door",confidence:93,durability:"10-12 years",energyEfficiency:"low",costSavings:10},{type:"door",size:"medium",width:1.2,height:2.4,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Main Entrance, Bedroom Door",confidence:96,durability:"12-15 years",energyEfficiency:"medium",costSavings:14},{type:"door",size:"large",width:1.5,height:2.5,glassType:"Laminated Glass 6.38mm",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Premium Main Entrance",confidence:91,durability:"15+ years",energyEfficiency:"high",costSavings:16},{type:"door",size:"extra-large",width:2,height:2.5,glassType:"Double Glazed Unit",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Sliding Mechanism","Weather Strip"],useCase:"Sliding Door, Patio Door",confidence:89,durability:"15+ years",energyEfficiency:"high",costSavings:20}],ce=(p,B,H,F)=>{const $=(p+B)*2;let P=2.5;switch(H){case"Heavy Duty Frame":P=3.5;break;case"Powder Coated Frame":P=2.8;break;case"Wooden Frame":P=2;break;case"UPVC Frame":P=1.8;break;default:P=2.5}return $*P*F},Ke=p=>{const B=[],H=p.width*p.height;return p.glassType==="Clear Float Glass 5mm"&&H>5&&B.push("💡 Consider tempered glass for larger areas (>5m²) for safety."),p.glassType==="Double Glazed Unit"&&p.frameType==="Standard Aluminium Frame"&&B.push("💡 Heavy Duty Frame is recommended for Double Glazed Units."),(p.width>=2||p.height>=2.5)&&!p.accessories.includes("Sliding Mechanism")&&B.push(`💡 For ${p.width.toFixed(1)}m × ${p.height.toFixed(1)}m dimensions, sliding mechanism is recommended.`),p.type==="door"&&!p.accessories.includes("Security Lock")&&B.push("🔒 Security Lock is recommended for doors."),H>4&&!p.accessories.includes("Weather Strip")&&B.push("🌤️ Weather Strip recommended for better insulation."),B},gt=(p,B)=>{let H={...p};switch(B){case"residential":p.glassType==="Double Glazed Unit"&&(H.glassType="Tempered Glass 8mm",H.confidence-=5);break;case"commercial":p.frameType==="Standard Aluminium Frame"&&(H.frameType="Heavy Duty Frame"),p.accessories.includes("Security Lock")||H.accessories.push("Security Lock"),H.confidence+=3;break;case"thermal":p.glassType.includes("Double Glazed")||(H.glassType="Double Glazed Unit"),p.accessories.includes("Weather Strip")||H.accessories.push("Weather Strip"),H.energyEfficiency="high",H.confidence+=5;break;case"premium":H.frameType="Powder Coated Frame",H.glassType=p.glassType.includes("Laminated")?p.glassType:"Laminated Glass 6.38mm",p.accessories.includes("Premium Handle")||(H.accessories=H.accessories.filter(F=>F!=="Standard Handle"),H.accessories.push("Premium Handle")),H.confidence+=2;break}return H},dt=(p,B=1)=>{const H=p.width*p.height*B,F=ce(p.width,p.height,p.frameType,B),$=H*Q.glassRatePerM2+F*Q.aluminiumRatePerKg+p.accessories.length*Q.accessoryRatePerItem*B,P=$*(Q.laborChargePercent/100),Me=$+P,Vt=Me*(Q.gstPercent/100),et=Me+Vt;return{material:$,labor:P,gst:Vt,total:et}},Jt=(p,B)=>{const H=[];switch(p.costSavings&&H.push(`💰 This configuration saves ${p.costSavings}% material weight vs standard setup`),H.push(`🛡️ Estimated durability: ${p.durability}`),p.energyEfficiency==="high"&&H.push("⚡ High energy efficiency - Reduces cooling/heating costs"),B){case"residential":H.push("🏠 Optimized for residential use with cost-efficient materials");break;case"commercial":H.push("🏢 Commercial-grade durability for high-traffic areas");break;case"thermal":H.push("🌡️ Thermal insulation optimized - Best for extreme climates");break;case"premium":H.push("💎 Premium aesthetic finish with superior quality materials");break}return H},la=(p,B)=>{const H=g.items.find(et=>et.id===p);if(!H)return;Ie(p);let F;if(H.width>0||H.height>0){const et=H.width*H.height;let Te="medium";et<1.5?Te="small":et<4?Te="medium":et<7?Te="large":Te="extra-large",F=be.find(tt=>tt.type===B&&tt.size===Te)||be.find(tt=>tt.type===B&&tt.size==="medium")}else F=be.find(et=>et.type===B&&et.size==="medium");const $=gt(F,O),P=dt($,H.quantity),Me=Jt($,O),Vt={preset:$,mode:O,estimatedCost:P,insights:Me,confidence:$.confidence,appliedAt:new Date};Z(Vt),ee(!0)},Ca=()=>{if(!Y||!ct)return;const p=Y.preset;_(F=>({...F,items:F.items.map($=>$.id===ct?{...$,width:p.width,height:p.height,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],notes:`🤖 AI Estimated (${O.charAt(0).toUpperCase()+O.slice(1)} Mode)
Use Case: ${p.useCase}
Confidence: ${p.confidence}%
${$.notes?`
`+$.notes:""}`}:$)}));const H=[{id:Date.now().toString(),itemName:g.items.find(F=>F.id===ct)?.name||"Unknown",type:p.type,dimensions:`${p.width}m × ${p.height}m`,mode:O,appliedAt:Y.appliedAt,result:Y},...le].slice(0,10);Ge(H),localStorage.setItem("ai_estimation_history",JSON.stringify(H)),ee(!1),Ie(null),vl()};w.useEffect(()=>{const p=localStorage.getItem("ai_estimation_history");p&&Ge(JSON.parse(p))},[]),w.useEffect(()=>{const p=localStorage.getItem("admin_pricing_settings");p&&ne(JSON.parse(p));const B=localStorage.getItem("item_templates");B&&N(JSON.parse(B))},[]);const fi=async()=>{if(!d?.uid)return"TEMP-001";try{return await ci.generateQuotationId(d.uid)}catch(p){console.error("Error generating quotation ID:",p);const B=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),H=B.currentSequence.toString().padStart(3,"0"),F=`${B.prefix}${B.currentYear}-${H}`;return B.currentSequence+=1,localStorage.setItem("admin_invoice_settings",JSON.stringify(B)),F}};w.useEffect(()=>{(async()=>{if(!g.quotationId){const B=await fi();_(H=>({...H,quotationId:B}))}})()},[]);const el=()=>{const p={id:Date.now().toString(),name:`Item ${g.items.length+1}`,type:"window",width:0,height:0,quantity:1,glassType:I[0],frameType:je[0],accessories:[],notes:"",showBreakdown:!1};_(B=>({...B,items:[...B.items,p]}))},hi=p=>{const B=g.items.find(F=>F.id===p);if(!B)return;const H={...B,id:Date.now().toString(),name:`${B.name} (Copy)`,showBreakdown:!1};_(F=>({...F,items:[...F.items,H]}))},yn=p=>{const B={id:Date.now().toString(),name:p.name,type:p.type,width:p.width,height:p.height,quantity:1,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],notes:p.description,showBreakdown:!1};_(H=>({...H,items:[...H.items,B]})),R(!1)},ia=p=>{const B=prompt("Enter template name:",p.name);if(!B)return;const H={id:Date.now().toString(),name:B,type:p.type,width:p.width,height:p.height,glassType:p.glassType,frameType:p.frameType,accessories:[...p.accessories],description:p.notes},F=[...y,H];N(F),localStorage.setItem("item_templates",JSON.stringify(F)),alert(`✅ Template "${B}" saved successfully!`)},gi=p=>{const B=y.find($=>$.id===p);if(!B||!confirm(`Are you sure you want to delete template "${B.name}"?`))return;const F=y.filter($=>$.id!==p);N(F),localStorage.setItem("item_templates",JSON.stringify(F))},pi=p=>{G(p)},Vs=p=>{p.preventDefault()},vn=p=>{if(!q||q===p){G(null);return}const B=g.items.findIndex(P=>P.id===q),H=g.items.findIndex(P=>P.id===p);if(B===-1||H===-1)return;const F=[...g.items],[$]=F.splice(B,1);F.splice(H,0,$),_(P=>({...P,items:F})),G(null)},Ot=(p,B,H)=>{_(F=>({...F,items:F.items.map($=>$.id===p?{...$,[B]:H}:$)})),vl()},bi=p=>{_(B=>({...B,items:B.items.map(H=>H.id===p?{...H,showBreakdown:!H.showBreakdown}:H)}))},vl=()=>{d?.uid&&(b(!0),window.autoSaveTimeout&&clearTimeout(window.autoSaveTimeout),window.autoSaveTimeout=setTimeout(()=>{Zs()},2e3))},Zs=async()=>{if(!d?.uid||!g.customerName||g.items.length===0){b(!1);return}try{localStorage.setItem("draft_quotation",JSON.stringify(g)),console.log("✓ Auto-saved to localStorage"),b(!1)}catch(p){console.error("Auto-save error:",p),b(!1)}},jn=()=>{const p={...g,savedAt:Date.now()};localStorage.setItem("estimatix_multi_calculator_draft",JSON.stringify(p)),ot(Date.now())},ut=()=>{const p=localStorage.getItem("estimatix_multi_calculator_draft");if(p){const B=JSON.parse(p);_(B),Ve(!1)}},xi=()=>{localStorage.removeItem("estimatix_multi_calculator_draft"),ot(null),Ve(!1)};w.useEffect(()=>{const p=localStorage.getItem("estimatix_multi_calculator_draft");if(p)try{const B=JSON.parse(p);B.items&&B.items.length>0&&(ot(B.savedAt),Ve(!0))}catch(B){console.error("Failed to load draft:",B)}},[]),w.useEffect(()=>{if(g.items.length>0||g.customerName||g.customerPhone){const p=setTimeout(()=>{jn()},2e3);return()=>clearTimeout(p)}},[g]);const Nn=p=>{_(B=>({...B,items:B.items.filter(H=>H.id!==p)}))},Sn=(p,B)=>{_(H=>({...H,items:H.items.map(F=>{if(F.id===p){const $=F.accessories.includes(B)?F.accessories.filter(P=>P!==B):[...F.accessories,B];return{...F,accessories:$}}return F})}))};w.useEffect(()=>{let p=0,B=0,H=0;const F=g.items.map(Te=>{const tt=Te.width*Te.height*Te.quantity,Ta=ce(Te.width,Te.height,Te.frameType,Te.quantity),$t=tt*Q.glassRatePerM2,tl=Ta*Q.aluminiumRatePerKg,za=Te.accessories.length*Q.accessoryRatePerItem*Te.quantity,vi=$t+tl+za,ji=vi*(Q.laborChargePercent/100),Ni=vi+ji;return p+=tt,B+=Ta,H+=vi,{...Te,glassArea:tt,frameWeight:Ta,glassCost:$t,frameCost:tl,accessoryCost:za,laborCost:ji,itemTotal:Ni}}),$=H*(Q.laborChargePercent/100),P=H*(Q.companyMarkupPercent/100),Me=H+$+P,Vt=Me*(Q.gstPercent/100),et=Me+Vt;_(Te=>({...Te,items:F,totalGlassArea:p,totalFrameWeight:B,subtotal:H,laborCharges:$+P,gst:Vt,grandTotal:et}))},[g.items.length,g.items.map(p=>`${p.width}-${p.height}-${p.quantity}-${p.glassType}-${p.frameType}-${p.accessories.length}`).join(","),Q]);const jl=async()=>{if(!d?.uid){alert("Please log in to save quotations");return}if(!g.customerName||!g.customerPhone){alert("Please fill in customer name and phone number");return}if(g.items.length===0){alert("Please add at least one item");return}f(!0);try{const p=g.items.map(F=>{const $=F.width*F.height/144,P=$*.092903,Me=Q.glassRatePerM2;return{...F,areaInSqFt:$,areaInM2:P,rate:Me,itemTotal:P*Me*F.quantity}}),B={quotationId:g.quotationId,userId:d.uid,customerName:g.customerName,customerPhone:g.customerPhone,customerEmail:g.customerEmail||"",customerAddress:"",items:p,totalGlassArea:g.totalGlassArea,totalFrameWeight:g.totalFrameWeight,subtotal:g.subtotal,laborCharges:g.laborCharges,gst:g.gst,grandTotal:g.grandTotal,status:"draft",notes:"Quotation created from Multi-Item Calculator"},H=await ci.saveQuotation(B);console.log("Quotation saved successfully with ID:",H),alert(`✅ Quotation ${g.quotationId} saved successfully to Firebase!`),yi()}catch(p){console.error("Error saving quotation:",p),alert("❌ Failed to save quotation. Please try again.")}finally{f(!1)}},yi=async()=>{if(d?.uid)try{const p=await ci.getUserQuotations(d.uid,20);h(p)}catch(p){console.error("Error loading quotations:",p)}};w.useEffect(()=>{yi()},[d?.uid]);const Nl=async()=>{u(!0);try{if(!g.customerName||!g.customerPhone){alert("Please fill in customer name and phone number before generating PDF"),u(!1);return}if(g.items.length===0){alert("Please add at least one item before generating PDF"),u(!1);return}const p=g.items.map((Me,Vt)=>{const et=Me.width*Me.height/144,Te=et*.092903,tt=Q.glassRatePerM2;return{name:Me.name||`Item ${Vt+1}`,type:Me.type,width:Me.width,height:Me.height,area:et,rate:tt,total:Te*tt*Me.quantity}}),B={invoiceNumber:g.quotationId||`QUOT-${Date.now()}`,date:g.createdAt?new Date(g.createdAt):new Date,customerName:g.customerName,customerPhone:g.customerPhone,customerEmail:g.customerEmail||"N/A",customerAddress:"",items:p,subtotal:g.subtotal||0,tax:g.gst||0,grandTotal:g.grandTotal||0,notes:`Total Glass Area: ${g.totalGlassArea.toFixed(2)} sq.ft
Total Frame Weight: ${g.totalFrameWeight.toFixed(2)} kg
Labor Charges: Rs. ${g.laborCharges.toLocaleString("en-IN",{minimumFractionDigits:2})}`,termsAndConditions:`1. Prices are valid for 30 days
2. Payment terms: 50% advance, 50% on completion
3. Installation charges may apply
4. Prices subject to change without notice`};console.log("Quotation data prepared:",B);let H="";try{console.log("Creating share link for quotation:",g.quotationId),H=await fh.createShareLink(g.quotationId,{readOnly:!0,expiresInDays:90,isPublic:!0,allowedUsers:[]}),console.log("Share link created:",H)}catch(Me){console.warn("Could not create share link for QR code (PDF will generate without QR):",Me)}console.log("Generating PDF with data:",{invoiceNumber:B.invoiceNumber,itemCount:B.items.length,hasShareLink:!!H});const F=await mh.generateQuotationPDF(B,{branding:{companyName:"Venkatesh Aluminium & Glass",address:"Ram Nagar Dhule",phone:"888888999",email:"shubhamj0212@gmail.com"},qrCode:H?{url:H,label:"Scan to View Online"}:void 0});console.log("PDF generated successfully, blob size:",F.size);const $=URL.createObjectURL(F),P=document.createElement("a");P.href=$,P.download=`Quotation_${g.quotationId}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL($),alert(`PDF generated successfully: ${P.download}`)}catch(p){console.error("Detailed PDF generation error:",{error:p,message:p instanceof Error?p.message:"Unknown error",stack:p instanceof Error?p.stack:void 0});const B=p instanceof Error?p.message:"Unknown error";alert(`Failed to generate PDF: ${B}

Please check the console for details.`)}finally{u(!1)}};return l.jsxs(l.Fragment,{children:[Pe&&l.jsx("div",{className:"draft-modal-overlay",onClick:xi,children:l.jsxs("div",{className:"draft-modal-card",onClick:p=>p.stopPropagation(),children:[l.jsx("div",{className:"draft-modal-title",children:"🕐 Restore Saved Draft?"}),l.jsx("p",{children:"We found a previously saved multi-item quotation draft. Would you like to continue where you left off?"}),wt&&l.jsxs("small",{children:["Saved: ",new Date(wt).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})]}),l.jsxs("div",{className:"d-flex",children:[l.jsx("button",{className:"draft-btn-discard",onClick:xi,children:"Discard"}),l.jsx("button",{className:"draft-btn-restore",onClick:ut,children:"Restore Draft"})]})]})}),l.jsx("style",{children:`
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
      `}),K&&Y&&l.jsx("div",{className:"ai-modal-backdrop",onClick:()=>ee(!1),children:l.jsxs("div",{className:"ai-modal-content",onClick:p=>p.stopPropagation(),children:[l.jsx("div",{className:"p-4 border-bottom bg-gradient",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:l.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[l.jsxs("div",{className:"d-flex align-items-center text-white",children:[l.jsx("div",{className:"me-3",style:{fontSize:"2.5rem"},children:"🤖"}),l.jsxs("div",{children:[l.jsx("h4",{className:"mb-1",children:"Estimatix AI Assistant"}),l.jsx("small",{className:"opacity-75",children:"Intelligent Estimation Engine v1.4"})]})]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>ee(!1),children:l.jsx("i",{className:"bi bi-x-lg"})})]})}),l.jsxs("div",{className:"p-4",children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[l.jsx("span",{className:"fw-bold",children:"🔮 AI Confidence Score"}),l.jsxs("span",{className:"badge bg-success",children:[Y.confidence,"%"]})]}),l.jsx("div",{className:"confidence-bar",children:l.jsx("div",{className:"confidence-fill",style:{width:`${Y.confidence}%`}})}),l.jsx("small",{className:"text-muted",children:"Based on training data and similar project patterns"})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"✨ Recommended Setup"}),l.jsxs("div",{className:"bg-light p-3 rounded",children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("span",{className:"ai-tag size",children:["📏 ",Y.preset.size.toUpperCase()," (",Y.preset.width,"m × ",Y.preset.height,"m)"]}),l.jsxs("span",{className:"ai-tag mode",children:["🎯 ",Y.mode.charAt(0).toUpperCase()+Y.mode.slice(1)," Mode"]})]}),l.jsx("div",{className:"mb-2",children:l.jsxs("span",{className:"ai-tag glass",children:[l.jsx("i",{className:"bi bi-square me-1"}),Y.preset.glassType]})}),l.jsx("div",{className:"mb-2",children:l.jsxs("span",{className:"ai-tag frame",children:[l.jsx("i",{className:"bi bi-grid-3x3 me-1"}),Y.preset.frameType]})}),l.jsxs("div",{children:[l.jsx("strong",{className:"d-block mb-2",children:"Accessories:"}),Y.preset.accessories.map((p,B)=>l.jsx("span",{className:"badge bg-secondary me-1 mb-1",children:p},B))]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"💰 Cost Preview (Estimated)"}),l.jsx("div",{className:"card",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Material Cost:"}),l.jsxs("strong",{children:["₹ ",Y.estimatedCost.material.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsx("span",{children:"Labor Estimate:"}),l.jsxs("strong",{children:["₹ ",Y.estimatedCost.labor.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsxs("span",{children:["GST (",Q.gstPercent,"%):"]}),l.jsxs("strong",{children:["₹ ",Y.estimatedCost.gst.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),l.jsx("hr",{}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("strong",{children:"Total Estimate:"}),l.jsxs("strong",{className:"text-success fs-5",children:["₹ ",Y.estimatedCost.total.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h5",{className:"mb-3",children:"💡 AI Insights"}),l.jsx("div",{className:"alert alert-info mb-0",children:l.jsx("ul",{className:"mb-0 ps-3",children:Y.insights.map((p,B)=>l.jsx("li",{className:"mb-2",children:p},B))})})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("div",{className:"alert alert-success",children:[l.jsx("strong",{children:"🎯 Perfect For:"})," ",Y.preset.useCase]})}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-primary flex-grow-1",onClick:Ca,children:[l.jsx("i",{className:"bi bi-check-circle me-2"}),"Apply AI Estimation"]}),l.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>ee(!1),children:[l.jsx("i",{className:"bi bi-x-circle me-2"}),"Cancel"]})]}),l.jsxs("div",{className:"text-center mt-3",children:[l.jsx("small",{className:"text-muted",children:"Was this estimation helpful?"}),l.jsxs("div",{className:"mt-2",children:[l.jsxs("button",{className:"btn btn-sm btn-outline-success me-2",children:[l.jsx("i",{className:"bi bi-hand-thumbs-up"})," Accurate"]}),l.jsxs("button",{className:"btn btn-sm btn-outline-warning",children:[l.jsx("i",{className:"bi bi-hand-thumbs-down"})," Needs Improvement"]})]})]})]})]})}),l.jsxs("div",{className:"container-fluid py-4",children:[l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"h3 text-primary mb-1",children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Multi-Item Quotation",T&&l.jsx("span",{className:"badge bg-info ms-2 small",children:"Auto-saving..."})]}),l.jsxs("p",{className:"text-muted mb-0",children:["Quotation ID: ",l.jsx("strong",{className:"text-primary",children:g.quotationId})," | Status: ",l.jsx("span",{className:`badge bg-${g.status==="draft"?"secondary":g.status==="finalized"?"success":"info"}`,children:g.status?.toUpperCase()})]}),l.jsxs("p",{className:"text-muted small mb-0",children:["Created: ",new Date(g.createdAt).toLocaleDateString()," | Valid Until: ",l.jsxs("span",{className:new Date(g.validUntil||"")<new Date?"text-danger fw-bold":"text-success",children:[g.validUntil?new Date(g.validUntil).toLocaleDateString():"N/A",new Date(g.validUntil||"")<new Date&&" ⚠️ EXPIRED"]})]})]}),l.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[l.jsxs("button",{className:"btn btn-outline-primary",onClick:el,children:[l.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add Item"]}),l.jsxs("div",{className:"btn-group",children:[l.jsxs("button",{className:"btn btn-warning",onClick:()=>{const p=g.items[g.items.length-1];p?la(p.id,p.type):alert("Please add an item first!")},disabled:g.items.length===0,title:"AI-Assisted Estimation for last item",children:[l.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"💡 AI Estimate"]}),l.jsx("button",{className:"btn btn-warning dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown",title:"Change AI Mode"}),l.jsxs("ul",{className:"dropdown-menu",children:[l.jsx("li",{children:l.jsx("h6",{className:"dropdown-header",children:"🤖 AI Optimization Mode"})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${O==="residential"?"active":""}`,onClick:()=>L("residential"),children:["🏠 Residential",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Cost-efficient materials"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${O==="commercial"?"active":""}`,onClick:()=>L("commercial"),children:["🏢 Commercial",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Maximum durability"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${O==="thermal"?"active":""}`,onClick:()=>L("thermal"),children:["🌡️ Thermal Efficiency",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Insulation optimized"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item ${O==="premium"?"active":""}`,onClick:()=>L("premium"),children:["💎 Premium Aesthetic",l.jsx("br",{}),l.jsx("small",{className:"text-muted",children:"Superior quality"})]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider"})}),l.jsx("li",{children:l.jsxs("button",{className:"dropdown-item text-primary",onClick:()=>Fe(!De),children:[l.jsx("i",{className:"bi bi-clock-history me-2"}),"View AI History (",le.length,")"]})})]})]}),l.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>R(!S),children:[l.jsx("i",{className:"bi bi-bookmark-star me-1"}),"Templates (",y.length,")"]}),l.jsx("button",{className:"btn btn-success",onClick:jl,disabled:o||g.items.length===0,children:o?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-cloud-check me-1"}),"Save to Firebase"]})}),l.jsx("button",{className:"btn btn-danger",onClick:Nl,disabled:r||g.items.length===0,children:r?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Generating PDF..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"bi bi-file-earmark-pdf me-1"}),"Generate PDF"]})})]})]})})}),S&&y.length>0&&l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card border-primary",children:[l.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-bookmark-star me-2"}),"Item Templates"]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>R(!1),children:l.jsx("i",{className:"bi bi-x"})})]}),l.jsx("div",{className:"card-body",children:l.jsx("div",{className:"row g-3",children:y.map(p=>l.jsx("div",{className:"col-md-4",children:l.jsx("div",{className:"card h-100",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[l.jsx("h6",{className:"card-title mb-0",children:p.name}),l.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:B=>{B.stopPropagation(),gi(p.id)},title:"Delete template",children:l.jsx("i",{className:"bi bi-trash"})})]}),l.jsxs("p",{className:"card-text small text-muted mb-2",children:[p.width,"m × ",p.height,"m | ",p.glassType]}),l.jsxs("button",{className:"btn btn-sm btn-primary w-100",onClick:()=>yn(p),children:[l.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add to Quotation"]})]})})},p.id))})})]})})}),De&&le.length>0&&l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card border-warning",children:[l.jsxs("div",{className:"card-header bg-warning text-dark d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-clock-history me-2"}),"🤖 AI Estimation History"]}),l.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Fe(!1),children:l.jsx("i",{className:"bi bi-x"})})]}),l.jsx("div",{className:"card-body",children:l.jsx("div",{className:"row g-3",children:le.map(p=>l.jsx("div",{className:"col-md-6",children:l.jsx("div",{className:"card h-100 border-start border-warning border-4",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[l.jsxs("h6",{className:"card-title mb-0",children:[p.type==="window"?"🪟":"🚪"," ",p.itemName]}),l.jsx("span",{className:"badge bg-secondary",children:p.mode})]}),l.jsxs("p",{className:"card-text small mb-2",children:[l.jsx("strong",{children:"Dimensions:"})," ",p.dimensions,l.jsx("br",{}),l.jsx("strong",{children:"Applied:"})," ",new Date(p.appliedAt).toLocaleString(),l.jsx("br",{}),l.jsx("strong",{children:"Confidence:"})," ",p.result.confidence,"%"]}),l.jsx("div",{className:"d-flex gap-2",children:l.jsxs("button",{className:"btn btn-sm btn-outline-primary flex-grow-1",onClick:()=>{Z(p.result),ee(!0)},children:[l.jsx("i",{className:"bi bi-eye me-1"}),"View Details"]})})]})})},p.id))})})]})})}),l.jsx("div",{className:"row mb-3",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2",children:[wt&&l.jsxs("span",{className:"draft-indicator",children:["💾 Draft saved ",new Date(wt).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),l.jsx("button",{className:"draft-control-btn",onClick:jn,children:"💾 Save Template"}),wt&&l.jsx("button",{className:"draft-control-btn",onClick:xi,children:"🗑️ Clear Template"})]})})}),l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header bg-info text-white",children:l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-person-fill me-2"}),"Customer Information"]})}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Customer Name *"}),l.jsx("input",{type:"text",className:"form-control",value:g.customerName,onChange:p=>_(B=>({...B,customerName:p.target.value})),placeholder:"Enter customer name"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Phone Number"}),l.jsx("input",{type:"tel",className:"form-control",value:g.customerPhone,onChange:p=>_(B=>({...B,customerPhone:p.target.value})),placeholder:"Enter phone number"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Email Address"}),l.jsx("input",{type:"email",className:"form-control",value:g.customerEmail,onChange:p=>_(B=>({...B,customerEmail:p.target.value})),placeholder:"Enter email address"})]})]})})]})})}),l.jsx("div",{className:"row mb-4",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-list-ul me-2"}),"Quotation Items (",g.items.length,")"]}),g.items.length===0&&l.jsxs("button",{className:"btn btn-light btn-sm",onClick:el,children:[l.jsx("i",{className:"bi bi-plus me-1"}),"Add First Item"]})]}),l.jsx("div",{className:"card-body",children:g.items.length===0?l.jsxs("div",{className:"text-center py-5 text-muted",children:[l.jsx("i",{className:"bi bi-inbox display-4 d-block mb-3"}),l.jsx("h5",{children:"No items added yet"}),l.jsx("p",{children:"Add your first window or door to start building the quotation"})]}):l.jsx("div",{className:"row g-4",children:g.items.map((p,B)=>{const H=Ke(p);return l.jsx("div",{className:"col-12",draggable:!0,onDragStart:()=>pi(p.id),onDragOver:Vs,onDrop:()=>vn(p.id),style:{cursor:"move"},children:l.jsxs("div",{className:"card border-secondary shadow-sm",children:[l.jsxs("div",{className:"card-header bg-light d-flex justify-content-between align-items-center",children:[l.jsxs("h6",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-grip-vertical me-2 text-muted",title:"Drag to reorder"}),l.jsx("span",{className:"badge bg-secondary me-2",children:B+1}),p.name,p.glassArea&&p.glassArea>0&&l.jsxs("small",{className:"text-muted ms-2",children:["(",p.glassArea.toFixed(2)," m² | ",p.frameWeight?.toFixed(2)," kg)"]})]}),l.jsxs("div",{className:"btn-group btn-group-sm",children:[l.jsxs("button",{className:"btn btn-warning",onClick:()=>la(p.id,p.type),title:"AI-Assisted Estimation - Auto-fill with smart defaults",children:[l.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"Estimate"]}),l.jsx("button",{className:"btn btn-outline-primary",onClick:()=>bi(p.id),title:"View Cost Breakdown",children:l.jsx("i",{className:"bi bi-receipt"})}),l.jsx("button",{className:"btn btn-outline-info",onClick:()=>hi(p.id),title:"Duplicate Item",children:l.jsx("i",{className:"bi bi-files"})}),l.jsx("button",{className:"btn btn-outline-success",onClick:()=>ia(p),title:"Save as Template",children:l.jsx("i",{className:"bi bi-bookmark"})}),l.jsx("button",{className:"btn btn-outline-danger",onClick:()=>Nn(p.id),title:"Delete Item",children:l.jsx("i",{className:"bi bi-trash"})})]})]}),l.jsx("div",{className:"card-body",children:l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-3",children:[l.jsx("label",{className:"form-label",children:"Item Name"}),l.jsx("input",{type:"text",className:"form-control",value:p.name,onChange:F=>Ot(p.id,"name",F.target.value)})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Type"}),l.jsxs("select",{className:"form-select",value:p.type,onChange:F=>Ot(p.id,"type",F.target.value),children:[l.jsx("option",{value:"window",children:"Window"}),l.jsx("option",{value:"door",children:"Door"})]})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Width (m)"}),l.jsx("input",{type:"number",className:"form-control",value:p.width,onChange:F=>Ot(p.id,"width",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsx("label",{className:"form-label",children:"Height (m)"}),l.jsx("input",{type:"number",className:"form-control",value:p.height,onChange:F=>Ot(p.id,"height",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),l.jsxs("div",{className:"col-md-1",children:[l.jsx("label",{className:"form-label",children:"Qty"}),l.jsx("input",{type:"number",className:"form-control",value:p.quantity,onChange:F=>Ot(p.id,"quantity",parseInt(F.target.value)||1),min:"1"})]}),l.jsxs("div",{className:"col-md-2",children:[l.jsxs("label",{className:"form-label",children:[l.jsx("i",{className:"bi bi-calculator-fill text-primary me-1"}),"Area (Auto)"]}),l.jsx("input",{type:"text",className:"form-control auto-calc-field",value:`${(p.width*p.height*p.quantity).toFixed(2)} m²`,readOnly:!0,title:"Auto-calculated: Width × Height × Quantity"})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Glass Type"}),l.jsx("select",{className:"form-select",value:p.glassType,onChange:F=>Ot(p.id,"glassType",F.target.value),children:I.map(F=>l.jsx("option",{value:F,children:F},F))})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Frame Type"}),l.jsx("select",{className:"form-select",value:p.frameType,onChange:F=>Ot(p.id,"frameType",F.target.value),children:je.map(F=>l.jsx("option",{value:F,children:F},F))})]}),l.jsxs("div",{className:"col-md-4",children:[l.jsx("label",{className:"form-label",children:"Accessories"}),l.jsx("div",{className:"border rounded p-2",style:{maxHeight:"100px",overflowY:"auto"},children:ie.map(F=>l.jsxs("div",{className:"form-check form-check-inline",children:[l.jsx("input",{className:"form-check-input",type:"checkbox",checked:p.accessories.includes(F),onChange:()=>Sn(p.id,F)}),l.jsx("label",{className:"form-check-label small",children:F})]},F))})]}),l.jsxs("div",{className:"col-12",children:[l.jsx("label",{className:"form-label",children:"Notes"}),l.jsx("textarea",{className:"form-control",rows:2,value:p.notes,onChange:F=>Ot(p.id,"notes",F.target.value),placeholder:"Add any special notes or requirements..."})]}),H.length>0&&l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"alert alert-info py-2 mb-0",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"bi bi-lightbulb me-2"}),"Smart Suggestions:"]}),l.jsx("ul",{className:"mb-0 mt-1 small",children:H.map((F,$)=>l.jsx("li",{children:F},$))})]})}),p.showBreakdown&&p.itemTotal&&l.jsx("div",{className:"col-12",children:l.jsx("div",{className:"card bg-light",children:l.jsxs("div",{className:"card-body",children:[l.jsxs("h6",{className:"card-title mb-3",children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Cost Breakdown"]}),l.jsxs("div",{className:"row g-2",children:[l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Glass Cost:"}),l.jsxs("strong",{children:["₹",p.glassCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Frame Cost:"}),l.jsxs("strong",{children:["₹",p.frameCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Accessories:"}),l.jsxs("strong",{children:["₹",p.accessoryCost?.toFixed(2)]})]})}),l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("span",{children:"Labor:"}),l.jsxs("strong",{children:["₹",p.laborCost?.toFixed(2)]})]})}),l.jsxs("div",{className:"col-12",children:[l.jsx("hr",{className:"my-2"}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsx("strong",{children:"Item Total:"}),l.jsxs("strong",{className:"text-success",children:["₹",p.itemTotal?.toFixed(2)]})]})]})]})]})})})]})})]})},p.id)})})})]})})}),g.items.length>0&&l.jsx("div",{className:"row mb-5",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"premium-summary-container",children:[l.jsx("div",{className:"premium-summary-header",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("h2",{className:"premium-summary-title",children:[l.jsx("i",{className:"bi bi-bar-chart-line-fill me-2"}),"Quotation Summary",l.jsx("span",{className:"badge bg-light text-dark ms-2 animate-pulse",style:{fontSize:"0.7rem"},children:"Live"})]}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsxs("span",{className:"premium-timestamp",children:[l.jsx("i",{className:"bi bi-clock me-1"}),"Last updated: ",new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),l.jsx("button",{className:"btn btn-sm btn-light",onClick:Nl,title:"Export Summary as PDF",children:l.jsx("i",{className:"bi bi-download"})})]})]})}),l.jsxs("div",{className:"premium-summary-grid",children:[l.jsxs("div",{className:"premium-summary-card premium-card-blue","data-metric":"items",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-receipt-cutoff"})}),l.jsx("div",{className:"premium-card-value",children:g.items.length}),l.jsx("div",{className:"premium-card-label",children:"Total Items"}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-cyan","data-metric":"area",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-grid-3x3-gap"})}),l.jsx("div",{className:"premium-card-value",children:g.totalGlassArea.toFixed(2)}),l.jsx("div",{className:"premium-card-label",children:"Glass Area (m²)"}),l.jsxs("div",{className:"premium-card-sub",children:["Avg: ",(g.totalGlassArea/g.items.length).toFixed(2)," m² per item"]}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-amber","data-metric":"weight",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-speedometer2"})}),l.jsx("div",{className:"premium-card-value",children:g.totalFrameWeight.toFixed(2)}),l.jsx("div",{className:"premium-card-label",children:"Frame Weight (kg)"}),l.jsxs("div",{className:"premium-card-sub",children:[(g.totalFrameWeight/g.totalGlassArea).toFixed(2)," kg/m²"]}),l.jsx("div",{className:"premium-card-glow"})]}),l.jsxs("div",{className:"premium-summary-card premium-card-emerald","data-metric":"total",children:[l.jsx("div",{className:"premium-card-icon",children:l.jsx("i",{className:"bi bi-currency-rupee"})}),l.jsxs("div",{className:"premium-card-value",children:["₹",g.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),l.jsx("div",{className:"premium-card-label",children:"Grand Total"}),l.jsxs("div",{className:"premium-card-sub",children:["₹",(g.grandTotal/g.totalGlassArea).toFixed(0),"/m²"]}),l.jsx("div",{className:"premium-card-glow"})]})]}),l.jsxs("div",{className:"premium-insights-row",children:[l.jsxs("div",{className:"premium-insight",children:[l.jsx("i",{className:"bi bi-lightbulb-fill text-warning me-2"}),l.jsxs("span",{children:["Based on ",l.jsxs("strong",{children:[g.items.length," items"]}),", average cost per sq.ft is ",l.jsxs("strong",{children:["₹",(g.grandTotal/g.totalGlassArea*.0929).toFixed(2)]})]})]}),l.jsxs("div",{className:"premium-insight",children:[l.jsx("i",{className:"bi bi-graph-up text-success me-2"}),l.jsxs("span",{children:["Material efficiency: ",l.jsxs("strong",{children:[(g.totalGlassArea/(g.totalGlassArea+5)*100).toFixed(1),"%"]})]})]})]}),l.jsxs("div",{className:"premium-breakdown-section",children:[l.jsxs("h6",{className:"premium-breakdown-title",children:[l.jsx("i",{className:"bi bi-pie-chart-fill me-2"}),"Detailed Cost Breakdown"]}),l.jsxs("div",{className:"premium-breakdown-grid",children:[l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.subtotal/g.grandTotal*100}%`,background:"linear-gradient(90deg, #3b82f6, #2563eb)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsx("span",{className:"premium-breakdown-label",children:"Material Cost"}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.subtotal.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.subtotal/g.grandTotal*100).toFixed(1),"%"]})]})]}),l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.laborCharges/g.grandTotal*100}%`,background:"linear-gradient(90deg, #f59e0b, #d97706)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsx("span",{className:"premium-breakdown-label",children:"Labor & Markup"}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.laborCharges.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.laborCharges/g.grandTotal*100).toFixed(1),"%"]})]})]}),l.jsxs("div",{className:"premium-breakdown-item",children:[l.jsx("div",{className:"premium-breakdown-bar",style:{width:`${g.gst/g.grandTotal*100}%`,background:"linear-gradient(90deg, #10b981, #059669)"}}),l.jsxs("div",{className:"premium-breakdown-details",children:[l.jsxs("span",{className:"premium-breakdown-label",children:["GST (",Q.gstPercent,"%)"]}),l.jsxs("span",{className:"premium-breakdown-value",children:["₹",g.gst.toFixed(2)]}),l.jsxs("span",{className:"premium-breakdown-percent",children:[(g.gst/g.grandTotal*100).toFixed(1),"%"]})]})]})]})]})]})})}),g.items.length>0&&l.jsx("div",{className:"position-fixed bottom-0 start-0 end-0 bg-dark text-white shadow-lg p-3",style:{zIndex:1040,animation:"pulse 2s infinite",boxShadow:"0 -5px 20px rgba(0,123,255,0.3)"},children:l.jsx("div",{className:"container-fluid",children:l.jsxs("div",{className:"row align-items-center",children:[l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsx("div",{className:"fw-bold fs-5",children:g.items.length}),l.jsx("small",{children:"Items"})]}),l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsxs("div",{className:"fw-bold fs-5",children:[g.totalGlassArea.toFixed(2)," m²"]}),l.jsx("small",{children:"Total Area"})]}),l.jsxs("div",{className:"col-md-2 text-center",children:[l.jsxs("div",{className:"fw-bold fs-5",children:[g.totalFrameWeight.toFixed(2)," kg"]}),l.jsx("small",{children:"Frame Weight"})]}),l.jsxs("div",{className:"col-md-3 text-center",children:[l.jsxs("div",{className:"fw-bold fs-4 text-warning",children:["₹ ",g.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),l.jsx("small",{children:"Estimated Cost"})]}),l.jsx("div",{className:"col-md-3 text-end",children:l.jsxs("div",{className:"btn-group",children:[l.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>{const p=`Hi! Here's quotation ${g.quotationId} for ${g.customerName}:

Total Items: ${g.items.length}
Total Amount: ₹${g.grandTotal.toFixed(2)}

Please review and let us know if you have any questions.`,B=`https://wa.me/${g.customerPhone.replace(/\D/g,"")}?text=${encodeURIComponent(p)}`;window.open(B,"_blank")},disabled:!g.customerPhone,children:[l.jsx("i",{className:"bi bi-whatsapp me-1"}),"WhatsApp"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{const p=`Quotation ${g.quotationId} - ${g.customerName}`,B=`Dear ${g.customerName},

Please find attached the quotation details:

Quotation ID: ${g.quotationId}
Total Items: ${g.items.length}
Total Amount: ₹${g.grandTotal.toFixed(2)}

Thank you for your interest.

Best Regards,
Venkatesh Aluminium & Glass`,H=`mailto:${g.customerEmail}?subject=${encodeURIComponent(p)}&body=${encodeURIComponent(B)}`;window.location.href=H},disabled:!g.customerEmail,children:[l.jsx("i",{className:"bi bi-envelope me-1"}),"Email"]}),l.jsxs("button",{className:"btn btn-danger btn-sm",onClick:Nl,children:[l.jsx("i",{className:"bi bi-file-pdf me-1"}),"PDF"]})]})})]})})}),g.items.length>0&&l.jsx("div",{style:{height:"120px"}}),x.length>0&&l.jsx("div",{className:"row mt-5",children:l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"card shadow-sm",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("h5",{className:"mb-0",children:[l.jsx("i",{className:"bi bi-folder-open me-2"}),"Your Saved Quotations (",x.length,")"]})}),l.jsx("div",{className:"card-body p-0",children:l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover mb-0",children:[l.jsx("thead",{className:"table-light",children:l.jsxs("tr",{children:[l.jsx("th",{children:"Quotation ID"}),l.jsx("th",{children:"Customer"}),l.jsx("th",{children:"Phone"}),l.jsx("th",{children:"Items"}),l.jsx("th",{children:"Total Amount"}),l.jsx("th",{children:"Status"}),l.jsx("th",{children:"Created"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:x.map(p=>{const B=p.createdAt instanceof Object&&"toDate"in p.createdAt?p.createdAt.toDate():new Date(p.createdAt),H={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{className:"text-primary",children:p.quotationId})}),l.jsx("td",{children:p.customerName}),l.jsxs("td",{children:[l.jsx("i",{className:"bi bi-telephone me-1"}),p.customerPhone]}),l.jsx("td",{children:l.jsxs("span",{className:"badge bg-secondary",children:[p.items.length," items"]})}),l.jsx("td",{children:l.jsxs("strong",{className:"text-success",children:["₹",p.grandTotal.toLocaleString()]})}),l.jsx("td",{children:l.jsx("span",{className:`badge bg-${H[p.status]}`,children:p.status.toUpperCase()})}),l.jsx("td",{children:l.jsx("small",{children:B.toLocaleDateString()})}),l.jsx("td",{children:l.jsxs("div",{className:"btn-group btn-group-sm",role:"group",children:[l.jsx("button",{className:"btn btn-outline-primary",title:"View",onClick:()=>{alert(`Viewing quotation ${p.quotationId}
Feature coming soon!`)},children:l.jsx("i",{className:"bi bi-eye"})}),l.jsx("button",{className:"btn btn-outline-danger",title:"Delete",onClick:async()=>{if(window.confirm(`Delete quotation ${p.quotationId}?`))try{p.id&&(await ci.deleteQuotation(p.id),alert("✅ Quotation deleted successfully!"),yi())}catch{alert("❌ Failed to delete quotation")}},children:l.jsx("i",{className:"bi bi-trash"})})]})})]},p.id)})})]})})}),l.jsx("div",{className:"card-footer text-muted",children:l.jsxs("small",{children:[l.jsx("i",{className:"bi bi-info-circle me-1"}),"All quotations are automatically synced with Firebase Firestore"]})})]})})})]})]})}function ex(){const{shareToken:d}=hp(),{user:r}=ht(),[u,o]=w.useState(null),[f,x]=w.useState(!0),[h,T]=w.useState("");if(w.useEffect(()=>{(async()=>{if(!d){T("Invalid share link"),x(!1);return}try{const N=await fh.getSharedQuote(d);N?o(N):T("Quote not found or link has expired")}catch(N){T("Error loading shared quote"),console.error(N)}finally{x(!1)}})()},[d]),f)return l.jsx("div",{className:"container py-5",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"spinner-border text-primary",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Loading..."})}),l.jsx("p",{className:"mt-3",children:"Loading shared quotation..."})]})});if(h)return l.jsx("div",{className:"container py-5",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"text-danger mb-3",children:l.jsx("i",{className:"bi bi-exclamation-triangle display-1"})}),l.jsx("h3",{className:"text-danger",children:"Access Denied"}),l.jsx("p",{className:"text-muted",children:h}),l.jsxs(pe,{to:"/",className:"btn btn-primary",children:[l.jsx("i",{className:"bi bi-house me-1"}),"Go to Dashboard"]})]})});if(!u)return null;const b=u.quotationData;return l.jsxs("div",{className:"min-vh-100 bg-light",children:[l.jsx("header",{className:"bg-white shadow-sm py-3",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"h5 mb-0",children:[l.jsx("i",{className:"bi bi-share me-2"}),"Shared Quotation"]}),l.jsxs("small",{className:"text-muted",children:["Shared by ",u.creatorEmail]})]}),l.jsxs("div",{className:"d-flex gap-2",children:[!u.readOnly&&r&&l.jsxs("span",{className:"badge bg-success",children:[l.jsx("i",{className:"bi bi-pencil me-1"}),"Collaborative Mode"]}),u.readOnly&&l.jsxs("span",{className:"badge bg-info",children:[l.jsx("i",{className:"bi bi-eye me-1"}),"Read Only"]}),l.jsxs(pe,{to:"/",className:"btn btn-sm btn-outline-primary",children:[l.jsx("i",{className:"bi bi-box-arrow-left me-1"}),"Exit"]})]})]})})}),l.jsx("div",{className:"container py-4",children:l.jsx("div",{className:"row",children:l.jsx("div",{className:"col-lg-8 mx-auto",children:l.jsxs("div",{className:"card shadow-sm",children:[l.jsx("div",{className:"card-header bg-primary text-white",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsxs("h5",{className:"card-title mb-0",children:[l.jsx("i",{className:"bi bi-file-earmark-text me-2"}),"Quotation Details"]}),l.jsxs("div",{className:"d-flex gap-2",children:[l.jsxs("button",{className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-download me-1"}),"Download PDF"]}),l.jsxs("button",{className:"btn btn-outline-light btn-sm",children:[l.jsx("i",{className:"bi bi-printer me-1"}),"Print"]})]})]})}),l.jsxs("div",{className:"card-body",children:[l.jsxs("div",{className:"row mb-4",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Quote Information"}),l.jsx("table",{className:"table table-sm table-borderless",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Quote ID:"})}),l.jsx("td",{children:b?.invoiceNumber||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Date:"})}),l.jsx("td",{children:b?.date?new Date(b.date).toLocaleDateString():"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Status:"})}),l.jsx("td",{children:l.jsx("span",{className:"badge bg-success",children:"Active"})})]})]})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Customer Details"}),l.jsx("table",{className:"table table-sm table-borderless",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Name:"})}),l.jsx("td",{children:b?.customerName||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Phone:"})}),l.jsx("td",{children:b?.customerPhone||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Email:"})}),l.jsx("td",{children:b?.customerEmail||"N/A"})]})]})})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("h6",{className:"fw-bold text-primary mb-3",children:"Quotation Items"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover",children:[l.jsx("thead",{className:"table-light",children:l.jsxs("tr",{children:[l.jsx("th",{children:"#"}),l.jsx("th",{children:"Item Description"}),l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Dimensions"}),l.jsx("th",{children:"Area (sq.ft)"}),l.jsx("th",{children:"Rate"}),l.jsx("th",{children:"Amount"})]})}),l.jsx("tbody",{children:b?.items?.map((y,N)=>l.jsxs("tr",{children:[l.jsx("td",{children:N+1}),l.jsx("td",{children:y.name||`Item ${N+1}`}),l.jsx("td",{children:l.jsx("span",{className:`badge ${y.type==="window"?"bg-info":"bg-warning"}`,children:y.type})}),l.jsxs("td",{children:[y.width,'" × ',y.height,'"']}),l.jsx("td",{children:y.area?.toFixed(2)||"0.00"}),l.jsxs("td",{children:["₹",y.rate?.toFixed(2)||"0.00"]}),l.jsxs("td",{children:["₹",y.total?.toFixed(2)||"0.00"]})]},N))||l.jsx("tr",{children:l.jsx("td",{colSpan:7,className:"text-center text-muted",children:"No items found"})})})]})})]}),l.jsx("div",{className:"row",children:l.jsx("div",{className:"col-md-6 offset-md-6",children:l.jsx("table",{className:"table table-sm",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Subtotal:"})}),l.jsxs("td",{className:"text-end",children:["₹",b?.subtotal?.toFixed(2)||"0.00"]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Tax (if any):"})}),l.jsxs("td",{className:"text-end",children:["₹",b?.tax?.toFixed(2)||"0.00"]})]}),l.jsxs("tr",{className:"table-primary",children:[l.jsx("td",{children:l.jsx("strong",{children:"Grand Total:"})}),l.jsx("td",{className:"text-end",children:l.jsxs("strong",{children:["₹",b?.grandTotal?.toFixed(2)||"0.00"]})})]})]})})})}),b?.notes&&l.jsxs("div",{className:"mt-4",children:[l.jsx("h6",{className:"fw-bold text-primary",children:"Notes"}),l.jsx("p",{className:"text-muted",children:b.notes})]})]}),l.jsx("div",{className:"card-footer bg-light",children:l.jsxs("div",{className:"row",children:[l.jsx("div",{className:"col-md-6",children:l.jsxs("small",{className:"text-muted",children:[l.jsx("i",{className:"bi bi-calendar me-1"}),"Shared on ",new Date(u.createdAt).toLocaleDateString(),u.expiresAt&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsx("i",{className:"bi bi-clock me-1"}),"Expires on ",new Date(u.expiresAt).toLocaleDateString()]})]})}),l.jsx("div",{className:"col-md-6 text-md-end",children:l.jsx("small",{className:"text-muted",children:"Powered by Estimatix"})})]})})]})})})})]})}const tx=({onComplete:d})=>{const r=mi(),[u,o]=w.useState(1),[f,x]=w.useState({companyName:"",companyAddress:"",companyPhone:"",companyEmail:""}),[h,T]=w.useState({defaultMargin:30,taxRate:18,currency:"INR"}),b=3,y=()=>{u<b&&o(u+1)},N=()=>{u>1&&o(u-1)},S=O=>{if(O.preventDefault(),!f.companyName){Re.error("Please enter your company name");return}localStorage.setItem("estimatix-company",JSON.stringify(f)),Re.success("Company details saved!"),y()},R=O=>{O.preventDefault(),localStorage.setItem("estimatix-pricing",JSON.stringify(h)),Re.success("Pricing defaults configured!"),y()},q=()=>{localStorage.setItem("estimatix-onboarded","true"),Re.success("🎉 Setup complete! Let's create your first quotation"),d(),r("/calculator")},G={enter:O=>({x:O>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:O=>({zIndex:0,x:O<0?1e3:-1e3,opacity:0})};return l.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",filter:"blur(80px)",top:"10%",left:"5%",animation:"float 6s ease-in-out infinite"}}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"row justify-content-center",children:l.jsxs("div",{className:"col-12 col-lg-8",children:[l.jsx(he.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-4",children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.95)",borderRadius:"16px",padding:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)"},children:[l.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[l.jsxs("small",{style:{fontWeight:600,color:"#667eea"},children:["Step ",u," of ",b]}),l.jsxs("small",{style:{color:"#6c757d"},children:[Math.round(u/b*100),"% Complete"]})]}),l.jsx("div",{style:{height:"8px",background:"#e9ecef",borderRadius:"8px",overflow:"hidden"},children:l.jsx(he.div,{initial:{width:0},animate:{width:`${u/b*100}%`},transition:{duration:.5,ease:"easeOut"},style:{height:"100%",background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"}})})]})}),l.jsx(yo,{mode:"wait",custom:1,children:l.jsx(he.div,{custom:1,variants:G,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3},children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.98)",borderRadius:"24px",padding:"48px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.15)",backdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[u===1&&l.jsxs("form",{onSubmit:S,children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:l.jsx("i",{className:"bi bi-building",style:{fontSize:"40px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Company Information"}),l.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Let's set up your company profile"})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:["Company Name ",l.jsx("span",{style:{color:"#dc3545"},children:"*"})]}),l.jsx("input",{type:"text",className:"form-control",value:f.companyName,onChange:O=>x({...f,companyName:O.target.value}),placeholder:"Estimatix Solutions",required:!0,style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Address"}),l.jsx("textarea",{className:"form-control",value:f.companyAddress,onChange:O=>x({...f,companyAddress:O.target.value}),placeholder:"123 Business Street, City, State - 123456",rows:3,style:{borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"col-md-6 mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Phone"}),l.jsx("input",{type:"tel",className:"form-control",value:f.companyPhone,onChange:O=>x({...f,companyPhone:O.target.value}),placeholder:"+91 98765 43210",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),l.jsxs("div",{className:"col-md-6 mb-3",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Email"}),l.jsx("input",{type:"email",className:"form-control",value:f.companyEmail,onChange:O=>x({...f,companyEmail:O.target.value}),placeholder:"info@estimatix.com",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[l.jsx("button",{type:"button",onClick:()=>{localStorage.setItem("estimatix-onboarded","true"),d()},style:{background:"transparent",border:"none",color:"#6c757d",fontSize:"14px",cursor:"pointer"},children:"Skip Setup"}),l.jsxs(he.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===2&&l.jsxs("form",{onSubmit:R,children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:l.jsx("i",{className:"bi bi-currency-dollar",style:{fontSize:"40px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Pricing Configuration"}),l.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Set your default pricing parameters"})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Default Profit Margin (%)"}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("input",{type:"range",className:"form-range",min:"0",max:"100",value:h.defaultMargin,onChange:O=>T({...h,defaultMargin:parseInt(O.target.value)}),style:{flex:1}}),l.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[h.defaultMargin,"%"]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Tax Rate (GST/VAT %)"}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("input",{type:"range",className:"form-range",min:"0",max:"30",value:h.taxRate,onChange:O=>T({...h,taxRate:parseInt(O.target.value)}),style:{flex:1}}),l.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[h.taxRate,"%"]})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Currency"}),l.jsxs("select",{className:"form-select",value:h.currency,onChange:O=>T({...h,currency:O.target.value}),style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"},children:[l.jsx("option",{value:"INR",children:"₹ INR - Indian Rupee"}),l.jsx("option",{value:"USD",children:"$ USD - US Dollar"}),l.jsx("option",{value:"EUR",children:"€ EUR - Euro"}),l.jsx("option",{value:"GBP",children:"£ GBP - British Pound"}),l.jsx("option",{value:"AED",children:"د.إ AED - UAE Dirham"})]})]}),l.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[l.jsxs(he.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),l.jsxs(he.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===3&&l.jsxs("div",{className:"text-center",children:[l.jsx(he.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"100px",height:"100px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"24px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:l.jsx("i",{className:"bi bi-check-circle-fill",style:{fontSize:"50px",color:"white"}})}),l.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"You're All Set! 🎉"}),l.jsxs("p",{style:{color:"#6c757d",fontSize:"16px",marginBottom:"32px"},children:["Your account is configured and ready to go.",l.jsx("br",{}),"Let's create your first professional quotation!"]}),l.jsxs("div",{className:"row g-3 mb-4",children:[l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-calculator-fill",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Smart Calculator"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Fast & accurate estimates"})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-filetype-pdf",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"PDF Generation"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Professional quotes with QR"})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[l.jsx("i",{className:"bi bi-share-fill",style:{fontSize:"32px",color:"#667eea"}}),l.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Easy Sharing"}),l.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"WhatsApp, Email & QR codes"})]})})]}),l.jsxs("div",{className:"d-flex justify-content-between",children:[l.jsxs(he.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),l.jsxs(he.button,{type:"button",onClick:q,whileHover:{scale:1.05},whileTap:{scale:.95},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"14px 40px",borderRadius:"12px",fontSize:"18px",fontWeight:700,cursor:"pointer",boxShadow:"0 8px 25px rgba(102, 126, 234, 0.4)"},children:[l.jsx("i",{className:"bi bi-rocket-takeoff-fill me-2"}),"Start Creating Quotations"]})]})]})]})},u)})]})})})]})},ax=()=>{const d=mi(),[r,u]=w.useState({laborCost:50,profitMargin:20,taxRate:18,currency:"INR"}),o=[{code:"INR",symbol:"₹",name:"Indian Rupee"},{code:"USD",symbol:"$",name:"US Dollar"},{code:"EUR",symbol:"€",name:"Euro"},{code:"GBP",symbol:"£",name:"British Pound"},{code:"AED",symbol:"د.إ",name:"UAE Dirham"}],f=(b,y)=>{u(N=>({...N,[b]:y}))},x=b=>{u(y=>({...y,currency:b}))},h=()=>{d(-1)},T=()=>{localStorage.setItem("pricingConfig",JSON.stringify(r)),console.log("✅ Pricing configuration saved:",r),d("/calculator")};return l.jsxs("div",{className:"pricing-configuration-wrapper",children:[l.jsx("div",{className:"pricing-bg-gradient"}),l.jsx("div",{className:"pricing-glow-orb pricing-glow-orb-1"}),l.jsx("div",{className:"pricing-glow-orb pricing-glow-orb-2"}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"row justify-content-center align-items-center min-vh-100 py-5",children:l.jsx("div",{className:"col-12 col-md-10 col-lg-8 col-xl-7",children:l.jsxs("div",{className:"pricing-card card border-0",children:[l.jsxs("div",{className:"pricing-card-header text-center",children:[l.jsx("div",{className:"pricing-icon-wrapper",children:l.jsx("div",{className:"pricing-icon",children:l.jsx("span",{className:"pricing-icon-symbol",children:"💰"})})}),l.jsx("h2",{className:"pricing-title",children:"Pricing Configuration"}),l.jsx("p",{className:"pricing-subtitle",children:"Customize your pricing parameters for accurate quotations"})]}),l.jsxs("div",{className:"pricing-card-body card-body px-4 px-md-5 py-4",children:[l.jsxs("div",{className:"pricing-field mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[l.jsxs("label",{className:"pricing-label",children:[l.jsx("i",{className:"bi bi-tools me-2"}),"Labor Cost per Hour"]}),l.jsxs("span",{className:"badge pricing-value-badge",children:[o.find(b=>b.code===r.currency)?.symbol,r.laborCost]})]}),l.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"200",step:"5",value:r.laborCost,onChange:b=>f("laborCost",Number(b.target.value))}),l.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[l.jsx("small",{children:"0"}),l.jsx("small",{children:"100"}),l.jsx("small",{children:"200"})]})]}),l.jsxs("div",{className:"pricing-field mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[l.jsxs("label",{className:"pricing-label",children:[l.jsx("i",{className:"bi bi-graph-up-arrow me-2"}),"Profit Margin"]}),l.jsxs("span",{className:"badge pricing-value-badge",children:[r.profitMargin,"%"]})]}),l.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"100",step:"1",value:r.profitMargin,onChange:b=>f("profitMargin",Number(b.target.value))}),l.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[l.jsx("small",{children:"0%"}),l.jsx("small",{children:"50%"}),l.jsx("small",{children:"100%"})]})]}),l.jsxs("div",{className:"pricing-field mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[l.jsxs("label",{className:"pricing-label",children:[l.jsx("i",{className:"bi bi-receipt me-2"}),"Tax Rate (GST/VAT)"]}),l.jsxs("span",{className:"badge pricing-value-badge",children:[r.taxRate,"%"]})]}),l.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"50",step:"0.5",value:r.taxRate,onChange:b=>f("taxRate",Number(b.target.value))}),l.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[l.jsx("small",{children:"0%"}),l.jsx("small",{children:"25%"}),l.jsx("small",{children:"50%"})]})]}),l.jsxs("div",{className:"pricing-field mb-4",children:[l.jsxs("label",{className:"pricing-label mb-3",children:[l.jsx("i",{className:"bi bi-currency-exchange me-2"}),"Currency"]}),l.jsxs("div",{className:"dropdown w-100",children:[l.jsxs("button",{className:"btn pricing-dropdown-btn w-100 d-flex justify-content-between align-items-center",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[l.jsxs("span",{children:[o.find(b=>b.code===r.currency)?.symbol," "," ",o.find(b=>b.code===r.currency)?.name]}),l.jsx("i",{className:"bi bi-chevron-down"})]}),l.jsx("ul",{className:"dropdown-menu pricing-dropdown-menu w-100",children:o.map(b=>l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item pricing-dropdown-item ${r.currency===b.code?"active":""}`,onClick:()=>x(b.code),children:[l.jsx("span",{className:"me-2",children:b.symbol}),b.name," (",b.code,")"]})},b.code))})]})]}),l.jsxs("div",{className:"pricing-summary mt-4 p-3",children:[l.jsxs("h6",{className:"pricing-summary-title mb-3",children:[l.jsx("i",{className:"bi bi-calculator me-2"}),"Configuration Summary"]}),l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"pricing-summary-item",children:[l.jsx("small",{className:"text-muted",children:"Labor Cost"}),l.jsxs("div",{className:"fw-semibold",children:[o.find(b=>b.code===r.currency)?.symbol,r.laborCost,"/hr"]})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"pricing-summary-item",children:[l.jsx("small",{className:"text-muted",children:"Profit Margin"}),l.jsxs("div",{className:"fw-semibold",children:[r.profitMargin,"%"]})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"pricing-summary-item",children:[l.jsx("small",{className:"text-muted",children:"Tax Rate"}),l.jsxs("div",{className:"fw-semibold",children:[r.taxRate,"%"]})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"pricing-summary-item",children:[l.jsx("small",{className:"text-muted",children:"Currency"}),l.jsx("div",{className:"fw-semibold",children:r.currency})]})})]})]})]}),l.jsx("div",{className:"pricing-card-footer card-footer border-0 px-4 px-md-5 py-4",children:l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-12 col-sm-6",children:l.jsxs("button",{className:"btn pricing-btn-back w-100",onClick:h,children:[l.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]})}),l.jsx("div",{className:"col-12 col-sm-6",children:l.jsxs("button",{className:"btn pricing-btn-continue w-100",onClick:T,children:["Continue",l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})})]})})]})})})})]})};function Ls({className:d=""}){const[r,u]=w.useState("auto");w.useEffect(()=>{const h=localStorage.getItem("app_theme");if(h)u(h);else{const T=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;u(T?"dark":"light")}},[]),w.useEffect(()=>{const h=T=>{let b;T==="auto"?b=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":b=T,document.documentElement.setAttribute("data-bs-theme",b),b==="dark"?(document.body.style.backgroundColor="#121212",document.body.style.color="#ffffff"):(document.body.style.backgroundColor="#ffffff",document.body.style.color="#000000"),localStorage.setItem("app_theme",T)};if(h(r),r==="auto"){const T=window.matchMedia("(prefers-color-scheme: dark)"),b=()=>h("auto");return T.addEventListener("change",b),()=>T.removeEventListener("change",b)}},[r]);const o=h=>{u(h)},f=()=>{switch(r){case"light":return"bi-sun-fill";case"dark":return"bi-moon-fill";case"auto":return"bi-circle-half";default:return"bi-circle-half"}},x=()=>{switch(r){case"light":return"Light";case"dark":return"Dark";case"auto":return"Auto";default:return"Auto"}};return l.jsxs("div",{className:`dropdown ${d}`,children:[l.jsxs("button",{className:"btn text-white position-relative",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",title:`Current theme: ${x()}`,style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",width:"44px",height:"44px",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255,255,255,0.1)"},onMouseEnter:h=>{h.currentTarget.style.background="rgba(255,255,255,0.25)",h.currentTarget.style.transform="scale(1.05)",h.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.2)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(255,255,255,0.15)",h.currentTarget.style.transform="scale(1)",h.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.1)"},children:[l.jsx("i",{className:`${f()} fs-5`}),l.jsx("span",{className:"position-absolute top-0 start-100 translate-middle rounded-circle theme-indicator",style:{background:r==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":r==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)",width:"10px",height:"10px",border:"2px solid white",boxShadow:"0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 rgba(255, 255, 255, 0.7)",animation:"theme-pulse 2s infinite"},children:l.jsx("span",{className:"visually-hidden",children:"Theme indicator"})})]}),l.jsxs("ul",{className:"dropdown-menu dropdown-menu-end shadow-lg",style:{background:"rgba(255,255,255,0.98)",backdropFilter:"blur(15px)",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"16px",minWidth:"220px",padding:"8px",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",marginTop:"8px"},children:[l.jsx("li",{children:l.jsxs("h6",{className:"dropdown-header fw-bold px-3 py-2",style:{color:"#667eea",fontSize:"0.9rem",marginBottom:"4px"},children:[l.jsx("i",{className:"bi bi-palette me-2"}),"Choose Theme"]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="light"?"active":""}`,onClick:()=>o("light"),style:{transition:"all 0.2s ease",background:r==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":"rgba(0,0,0,0.02)",color:r==="light"?"white":"#333",fontWeight:r==="light"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="light"&&(h.currentTarget.style.background="rgba(255, 215, 0, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="light"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-sun-fill me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Light Mode"}),r==="light"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="dark"?"active":""}`,onClick:()=>o("dark"),style:{transition:"all 0.2s ease",background:r==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"rgba(0,0,0,0.02)",color:r==="dark"?"white":"#333",fontWeight:r==="dark"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="dark"&&(h.currentTarget.style.background="rgba(74, 144, 226, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="dark"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-moon-fill me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Dark Mode"}),r==="dark"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="auto"?"active":""}`,onClick:()=>o("auto"),style:{transition:"all 0.2s ease",background:r==="auto"?"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)":"rgba(0,0,0,0.02)",color:r==="auto"?"white":"#333",fontWeight:r==="auto"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="auto"&&(h.currentTarget.style.background="rgba(255, 107, 107, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="auto"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[l.jsx("i",{className:"bi bi-circle-half me-2",style:{fontSize:"1rem"}}),l.jsx("span",{className:"flex-grow-1 text-start",children:"Auto (System)"}),r==="auto"&&l.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider mx-2 my-2",style:{opacity:.2}})}),l.jsx("li",{children:l.jsx("div",{className:"dropdown-item-text px-3 py-2",children:l.jsxs("small",{style:{color:"#667eea",fontWeight:"500",fontSize:"0.8rem",lineHeight:"1.3"},children:[l.jsx("i",{className:"bi bi-info-circle me-2"}),"Auto mode follows your system preference"]})})})]})]})}function lx(){const{user:d,logout:r}=ht(),[u,o]=w.useState(!1),f=async()=>{try{await r(),o(!1)}catch(h){console.error("Logout error:",h)}},x=()=>o(!1);return l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"sticky-top",style:{background:"linear-gradient(90deg, #312e81, #4338ca)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:1e3},children:[l.jsx("div",{className:"container-fluid",style:{maxWidth:"1400px",padding:"0 1.5rem"},children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",style:{minHeight:"64px",padding:"0.75rem 0"},children:[l.jsx(pe,{to:"/",className:"text-decoration-none",onClick:x,children:l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-calculator-fill text-violet",style:{fontSize:"1.25rem",color:"#a855f7"}}),l.jsxs("div",{children:[l.jsx("span",{className:"text-white fw-semibold",style:{fontSize:"1.1rem",letterSpacing:"0.3px"},children:"Estimatix"}),l.jsx("span",{className:"text-muted ms-2 d-none d-lg-inline",style:{fontSize:"0.85rem",color:"#94a3b8"},children:"Professional Estimation Suite"})]})]})}),l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("div",{className:"d-none d-md-block",children:l.jsx(Ls,{})}),d?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"d-flex align-items-center d-md-none",children:l.jsx("div",{className:"bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center text-white",style:{width:"40px",height:"40px",backdropFilter:"blur(10px)",border:"2px solid rgba(255,255,255,0.3)",fontSize:"1rem"},children:l.jsx("i",{className:"bi bi-person-fill"})})}),l.jsx("button",{className:"btn text-white p-0",style:{width:"44px",height:"44px",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"12px",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},onClick:()=>o(!u),"aria-label":"Toggle menu",children:l.jsx("i",{className:`bi ${u?"bi-x-lg":"bi-list"} fs-4`})})]}):l.jsxs(l.Fragment,{children:[l.jsxs(pe,{to:"/login",className:"btn text-white text-decoration-none",style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:h=>{h.currentTarget.style.background="rgba(255,255,255,0.25)",h.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(255,255,255,0.15)",h.currentTarget.style.transform="translateY(0)"},onClick:x,children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),l.jsx("span",{className:"d-none d-sm-inline",children:"Login"})]}),l.jsxs(pe,{to:"/signup",className:"btn text-decoration-none",style:{background:"linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)",color:"#667eea",border:"none",borderRadius:"10px",fontWeight:"600",boxShadow:"0 4px 15px rgba(255,255,255,0.2)",transition:"all 0.3s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.3)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.2)"},onClick:x,children:[l.jsx("i",{className:"bi bi-person-plus me-2"}),l.jsx("span",{className:"d-none d-sm-inline",children:"Sign Up"})]})]})]})]})}),u&&d&&l.jsx("div",{className:"position-relative",style:{background:"linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",borderTop:"1px solid rgba(102, 126, 234, 0.1)",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",zIndex:1060},children:l.jsxs("div",{className:"container-fluid px-3 px-md-4 py-4",style:{maxWidth:"600px",margin:"0 auto"},children:[l.jsxs("div",{className:"d-flex align-items-center mb-4 pb-3",style:{borderBottom:"2px solid rgba(102, 126, 234, 0.1)"},children:[l.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center text-white me-3",style:{width:"56px",height:"56px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)",flexShrink:0},children:l.jsx("i",{className:"bi bi-person-fill fs-4"})}),l.jsxs("div",{className:"flex-grow-1",style:{minWidth:0},children:[l.jsx("div",{className:"fw-bold text-dark text-truncate",style:{fontSize:"1.15rem",fontFamily:"'Segoe UI', system-ui, sans-serif"},children:d?.email?.split("@")[0]}),l.jsx("small",{className:"text-truncate d-block",style:{color:"#667eea",fontWeight:"500"},children:d?.email})]}),l.jsx("div",{className:"d-md-none ms-2",children:l.jsx(Ls,{})})]}),l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/dashboard",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-speedometer2 fs-3 mb-2"}),l.jsx("span",{children:"Dashboard"})]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/multi-calculator",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(17, 153, 142, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-calculator fs-3 mb-2"}),l.jsx("span",{children:"Multi-Item"})]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/calculator",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-gear fs-3 mb-2"}),l.jsx("span",{children:"Simple Calc"})]})}),l.jsx("div",{className:"col-6",children:l.jsxs(pe,{to:"/billing",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",color:"#4a5568",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(251, 194, 235, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-credit-card fs-3 mb-2"}),l.jsx("span",{children:"Billing"})]})}),l.jsx("div",{className:"col-12",children:l.jsxs(pe,{to:"/admin",className:"btn w-100 text-center text-decoration-none d-flex align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem",fontSize:"1rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-shield-check fs-4 me-2"}),l.jsx("span",{children:"Admin Settings"})]})})]}),l.jsx("div",{className:"mt-4 pt-3",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs("button",{className:"btn w-100 text-center d-flex flex-column align-items-center justify-content-center",style:{background:"rgba(102, 126, 234, 0.08)",color:"#667eea",border:"2px solid rgba(102, 126, 234, 0.2)",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",padding:"0.75rem",fontSize:"0.85rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-file-earmark-pdf fs-4 mb-1"}),l.jsx("span",{children:"Export PDF"})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("button",{className:"btn w-100 text-center d-flex flex-column align-items-center justify-content-center",style:{background:"rgba(17, 153, 142, 0.08)",color:"#11998e",border:"2px solid rgba(17, 153, 142, 0.2)",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",padding:"0.75rem",fontSize:"0.85rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[l.jsx("i",{className:"bi bi-share fs-4 mb-1"}),l.jsx("span",{children:"Share Quote"})]})})]})}),l.jsx("div",{className:"mt-4 pt-3",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:l.jsxs("button",{className:"btn w-100 text-center d-flex align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",border:"none",borderRadius:"14px",fontWeight:"700",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(255, 107, 107, 0.3)",padding:"1rem",fontSize:"1rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:f,children:[l.jsx("i",{className:"bi bi-box-arrow-right fs-5 me-2"}),l.jsx("span",{children:"Sign Out"})]})})]})})]}),u&&l.jsx("div",{className:"position-fixed w-100 h-100",style:{top:0,left:0,zIndex:1050,background:"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(2px)",WebkitBackdropFilter:"blur(2px)"},onClick:x}),l.jsx("style",{children:`
        /* PWA Touch Optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
        
        /* Smooth scrolling for mobile */
        html {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Better touch targets for PWA */
        .btn, button, a {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        
        /* Mobile menu animations */
        .position-relative > div {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ensure mobile menu appears above other content */
        .sticky-top {
          z-index: 1060 !important;
        }
        
        /* Mobile-friendly spacing */
        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Better mobile button sizes - PWA compliant (min 44x44px) */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px !important;
            min-width: 44px !important;
          }
        }
        
        /* Prevent text selection on buttons (mobile UX) */
        .btn, button {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Safe area padding for notched devices (iOS) */
        @supports (padding: env(safe-area-inset-top)) {
          .sticky-top {
            padding-top: env(safe-area-inset-top);
          }
        }
        
        /* Prevent pull-to-refresh on mobile */
        body {
          overscroll-behavior-y: contain;
        }
        
        /* Better mobile viewport handling */
        @viewport {
          width: device-width;
          initial-scale: 1;
          maximum-scale: 5;
        }
      `})]})}function ix(){const{user:d,logout:r}=ht(),u=async()=>{try{await r()}catch(o){console.error("Logout error:",o)}};return l.jsx("header",{className:"py-3 shadow d-none d-lg-block",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[l.jsx("div",{children:l.jsxs(pe,{to:"/",className:"text-white text-decoration-none",children:[l.jsxs("h1",{className:"h5 mb-0 text-white",children:[l.jsx("i",{className:"bi bi-calculator-fill me-2"}),"Estimatix"]}),l.jsx("small",{className:"opacity-75 text-white",children:"Professional Estimation Platform"})]})}),l.jsx("nav",{className:"d-flex gap-2 align-items-center",children:d?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"d-flex gap-1 me-3",children:[l.jsxs(pe,{to:"/dashboard",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-speedometer2 me-1"}),"Dashboard"]}),l.jsxs(pe,{to:"/multi-calculator",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-calculator me-1"}),"Multi-Item"]}),l.jsxs(pe,{to:"/calculator",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-gear me-1"}),"Simple Calc"]}),l.jsxs(pe,{to:"/billing",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-credit-card me-1"}),"Billing"]}),l.jsxs(pe,{to:"/admin",className:"btn btn-sm",style:{background:"linear-gradient(90deg, #facc15, #eab308)",color:"#1e1e1e",fontWeight:"600",border:"none",boxShadow:"0 0 8px rgba(250, 204, 21, 0.4)",transition:"all 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.boxShadow="0 0 12px rgba(250, 204, 21, 0.6)",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.boxShadow="0 0 8px rgba(250, 204, 21, 0.4)",o.currentTarget.style.transform="translateY(0)"},children:[l.jsx("i",{className:"bi bi-shield-check me-1"}),"Admin"]})]}),l.jsx(Ls,{}),l.jsxs("div",{className:"dropdown",children:[l.jsxs("button",{className:"btn btn-outline-light btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[l.jsx("i",{className:"bi bi-person-circle me-1"}),d?.email]}),l.jsxs("ul",{className:"dropdown-menu dropdown-menu-end",children:[l.jsx("li",{children:l.jsxs("h6",{className:"dropdown-header",children:[l.jsx("i",{className:"bi bi-person me-2"}),"Account"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/dashboard",children:[l.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/billing",children:[l.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing & Subscription"]})}),l.jsx("li",{children:l.jsxs(pe,{className:"dropdown-item",to:"/admin",children:[l.jsx("i",{className:"bi bi-gear me-2"}),"Admin Settings"]})}),l.jsx("li",{children:l.jsx("hr",{className:"dropdown-divider"})}),l.jsx("li",{children:l.jsxs("button",{className:"dropdown-item text-danger",onClick:u,children:[l.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ls,{}),l.jsxs("div",{className:"d-flex gap-1",children:[l.jsxs(pe,{to:"/login",className:"btn btn-outline-light btn-sm",children:[l.jsx("i",{className:"bi bi-box-arrow-in-right me-1"}),"Login"]}),l.jsxs(pe,{to:"/signup",className:"btn btn-light btn-sm",children:[l.jsx("i",{className:"bi bi-person-plus me-1"}),"Sign Up"]})]})]})})]})})})}function nx(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"d-lg-none",children:l.jsx(lx,{})}),l.jsx("div",{className:"d-none d-lg-block",children:l.jsx(ix,{})})]})}function yl({children:d}){const{user:r,loading:u}=ht();return u?l.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"},children:l.jsx("div",{className:"spinner-border text-primary",role:"status",children:l.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):r?l.jsx(l.Fragment,{children:d}):l.jsx($f,{to:"/login"})}function sx({children:d}){const{user:r}=ht(),u=ui();return u.pathname.includes("/login")||u.pathname.includes("/signup")||u.pathname.includes("/forgot-password")||!r?l.jsx(l.Fragment,{children:d}):l.jsxs(l.Fragment,{children:[l.jsx(nx,{}),d,l.jsx("footer",{className:"estimatix-footer mt-auto border-top border-secondary",children:l.jsx("div",{className:"container py-4",children:l.jsxs("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-center gap-3",children:[l.jsxs("div",{className:"text-center text-md-start",children:[l.jsxs("div",{className:"mb-2",children:[l.jsx("span",{className:"text-info fw-bold fs-5",children:"Estimatix"}),l.jsx("span",{className:"text-muted ms-2",children:"v1.0"})]}),l.jsx("p",{className:"mb-0 small text-secondary",children:"Professional Estimation & Quotation Platform"}),l.jsx("small",{className:"text-muted",style:{fontSize:"0.75rem"},children:"Powered by Firebase & Advanced SaaS Technology"})]}),l.jsx("div",{className:"text-center text-md-end",children:l.jsx("small",{className:"text-muted",children:"© 2025 Estimatix. All rights reserved."})})]})})})]})}function rx({children:d}){const{user:r}=ht(),[u,o]=w.useState(!1);w.useEffect(()=>{if(r){const x=localStorage.getItem("estimatix-onboarded");o(!x)}},[r]);const f=()=>{o(!1)};return r&&u?l.jsx(tx,{onComplete:f}):l.jsx(l.Fragment,{children:d})}function cx(){const{user:d}=ht();return l.jsx(sx,{children:l.jsx("main",{className:"flex-grow-1",children:l.jsxs(Dp,{children:[l.jsx(Mt,{path:"/login",element:l.jsx(Cb,{})}),l.jsx(Mt,{path:"/signup",element:l.jsx(Tb,{})}),l.jsx(Mt,{path:"/forgot-password",element:l.jsx(zb,{})}),l.jsx(Mt,{path:"/shared/:shareToken",element:l.jsx(ex,{})}),l.jsx(Mt,{path:"/dashboard",element:l.jsx(yl,{children:l.jsx(kf,{})})}),l.jsx(Mt,{path:"/billing",element:l.jsx(yl,{children:l.jsx(Zb,{})})}),l.jsx(Mt,{path:"/calculator",element:l.jsx(yl,{children:l.jsx(Jb,{})})}),l.jsx(Mt,{path:"/multi-calculator",element:l.jsx(yl,{children:l.jsx(Pb,{})})}),l.jsx(Mt,{path:"/pricing-config",element:l.jsx(yl,{children:l.jsx(ax,{})})}),l.jsx(Mt,{path:"/admin",element:l.jsx(yl,{children:l.jsx($b,{})})}),l.jsx(Mt,{path:"/",element:l.jsx(yl,{children:l.jsx(kf,{})})}),l.jsx(Mt,{path:"*",element:l.jsx($f,{to:"/"})})]})})},d?.uid||"logged-out")}function ox(){return l.jsx(Yp,{children:l.jsx(Lp,{children:l.jsx(_p,{children:l.jsx("div",{className:"min-vh-100 d-flex flex-column",children:l.jsx(rx,{children:l.jsx(cx,{})})})})})})}(()=>{try{const d=localStorage.getItem("theme"),r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,u=d==="dark"||d==="light"?d:r?"dark":"light";document.documentElement.setAttribute("data-bs-theme",u==="dark"?"dark":"light")}catch{}})();dp.createRoot(document.getElementById("app")).render(ve.createElement(ve.StrictMode,null,ve.createElement(ox,null)));"serviceWorker"in navigator&&Ff(async()=>{const{registerSW:d}=await import("./virtual_pwa-register-BT8KHGsJ.js");return{registerSW:d}},__vite__mapDeps([0,1,2])).then(({registerSW:d})=>{d({immediate:!0,onRegisteredSW:()=>{},onNeedRefresh(){},onOfflineReady(){}})}).catch(()=>{});
