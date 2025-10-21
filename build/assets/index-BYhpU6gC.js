const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/virtual_pwa-register-BT8KHGsJ.js","assets/vendor-jspdf-BDaxKd1L.js","assets/vendor-DcmHRsjH.js"])))=>i.map(i=>d[i]);
import{E as zp,a as kp,_ as Ff}from"./vendor-jspdf-BDaxKd1L.js";import{r as Gf,b as Tp,g as Ap,A as Lf,i as ft,c as S,p as qf,s as Yf,e as bc,f as xc,j as Gs,m as Ep,h as Dp,k as Rp,R as Mp,l as jf,n as Op,o as Up,q as Bp,t as _p,u as Hp,v as Fp,w as Gp,x as yc,y as Xt,B as mc,C as i,D as Lp,E as qp,G as Yp,F as Qp,H as Xp,I as Vp,J as Zp,K as wa,L as Wp,M as $a,N as Kp,O as se,P as Ls,Q as sc,S as Jp,T as Nf,U as gn,V as Ip,W as $p,X as Pp,Y as eg,Z as tg,$ as bn,a0 as ve,a1 as De,a2 as ag,a3 as ig,a4 as lg,a5 as ng}from"./vendor-DcmHRsjH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const x of f)if(x.type==="childList")for(const h of x.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const x={};return f.integrity&&(x.integrity=f.integrity),f.referrerPolicy&&(x.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?x.credentials="include":f.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function c(f){if(f.ep)return;f.ep=!0;const x=u(f);fetch(f.href,x)}})();var rc={exports:{}},pn={},oc={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function sg(){if(wf)return rt;wf=1;var d=Gf();function r(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)y+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function x(b,y,N){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:b,containerInfo:y,implementation:N}}var h=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rt.createPortal=function(b,y){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return x(b,y,null,N)},rt.flushSync=function(b){var y=h.T,N=c.p;try{if(h.T=null,c.p=2,b)return b()}finally{h.T=y,c.p=N,c.d.f()}},rt.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(b,y))},rt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},rt.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var N=y.as,w=z(N,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;N==="style"?c.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:L}):N==="script"&&c.d.X(b,{crossOrigin:w,integrity:D,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rt.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var N=z(y.as,y.crossOrigin);c.d.M(b,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(b)},rt.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var N=y.as,w=z(N,y.crossOrigin);c.d.L(b,N,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rt.preloadModule=function(b,y){if(typeof b=="string")if(y){var N=z(y.as,y.crossOrigin);c.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(b)},rt.requestFormReset=function(b){c.d.r(b)},rt.unstable_batchedUpdates=function(b,y){return b(y)},rt.useFormState=function(b,y,N){return h.H.useFormState(b,y,N)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.2.0",rt}var Sf;function Qf(){if(Sf)return oc.exports;Sf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(r){console.error(r)}}return d(),oc.exports=sg(),oc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function rg(){if(Cf)return pn;Cf=1;var d=Tp(),r=Gf(),u=Qf();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(x(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return b(n),e;if(s===l)return b(n),t;s=s.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=s;else{for(var o=!1,m=n.child;m;){if(m===a){o=!0,a=n,l=s;break}if(m===l){o=!0,l=n,a=s;break}m=m.sibling}if(!o){for(m=s.child;m;){if(m===a){o=!0,a=s,l=n;break}if(m===l){o=!0,l=s,a=n;break}m=m.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,D=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ot=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var St=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===St?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case ie:return"Suspense";case He:return"SuspenseList";case ot:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Q:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ee:return t=e.displayName||null,t!==null?t:ct(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ct(e(t))}catch{}}return null}var p=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},$=[],je=-1;function le(e){return{current:e}}function be(e){0>je||(e.current=$[je],$[je]=null,je--)}function ce(e,t){je++,$[je]=e.current,e.current=t}var Ke=le(null),pt=le(null),dt=le(null),Jt=le(null);function ia(e,t){switch(ce(dt,t),ce(pt,e),ce(Ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ym(t),e=Qm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(Ke),ce(Ke,e)}function Ca(){be(Ke),be(pt),be(dt)}function hl(e){e.memoizedState!==null&&ce(Jt,e);var t=Ke.current,a=Qm(t,e.type);t!==a&&(ce(pt,e),ce(Ke,a))}function ei(e){pt.current===e&&(be(Ke),be(pt)),Jt.current===e&&(be(Jt),un._currentValue=ne)}var pl,vn;function la(e){if(pl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||"",vn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pl+e+vn}var gl=!1;function bl(e,t){if(!e||gl)return"";gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(E){var A=E}Reflect.construct(e,[],U)}else{try{U.call()}catch(E){A=E}e.call(U.prototype)}}else{try{throw Error()}catch(E){A=E}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),o=s[0],m=s[1];if(o&&m){var v=o.split(`
`),T=m.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===T.length)for(l=v.length-1,n=T.length-1;1<=l&&0<=n&&v[l]!==T[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==T[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==T[n]){var R=`
`+v[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?la(a):""}function Vs(e,t){switch(e.tag){case 26:case 27:case 5:return la(e.type);case 16:return la("Lazy");case 13:return e.child!==t&&t!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return bl(e.type,!1);case 11:return bl(e.type.render,!1);case 1:return bl(e.type,!0);case 31:return la("Activity");default:return""}}function jn(e){try{var t="",a=null;do t+=Vs(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ot=Object.prototype.hasOwnProperty,xl=d.unstable_scheduleCallback,ji=d.unstable_cancelCallback,Zs=d.unstable_shouldYield,Ni=d.unstable_requestPaint,ut=d.unstable_now,yl=d.unstable_getCurrentPriorityLevel,Nn=d.unstable_ImmediatePriority,wn=d.unstable_UserBlockingPriority,ti=d.unstable_NormalPriority,vl=d.unstable_LowPriority,wi=d.unstable_IdlePriority,g=d.log,B=d.unstable_setDisableYieldValue,G=null,F=null;function I(e){if(typeof g=="function"&&B(e),F&&typeof F.setStrictMode=="function")try{F.setStrictMode(G,e)}catch{}}var P=Math.clz32?Math.clz32:et,Me=Math.log,Vt=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(Me(e)/Vt|0)|0}var ze=256,tt=262144,za=4194304;function It(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ai(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~s,l!==0?n=It(l):(o&=m,o!==0?n=It(o):a||(a=m&~e,a!==0&&(n=It(a))))):(m=l&~s,m!==0?n=It(m):o!==0?n=It(o):a||(a=l&~e,a!==0&&(n=It(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jl(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function wl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hh(e,t,a,l,n,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,T=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-P(a),U=1<<R;m[R]=0,v[R]=-1;var A=T[R];if(A!==null)for(T[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}a&=~U}l!==0&&Cc(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function Cc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-P(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function zc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-P(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function kc(e,t){var a=t&-t;return a=(a&42)!==0?1:Ws(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:hf(e.type))}function Ac(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Ta=Math.random().toString(36).slice(2),at="__reactFiber$"+Ta,gt="__reactProps$"+Ta,Si="__reactContainer$"+Ta,Js="__reactEvents$"+Ta,ph="__reactListeners$"+Ta,gh="__reactHandles$"+Ta,Ec="__reactResources$"+Ta,Cl="__reactMarker$"+Ta;function Is(e){delete e[at],delete e[gt],delete e[Js],delete e[ph],delete e[gh]}function Ci(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Si]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Im(e);e!==null;){if(a=e[at])return a;e=Im(e)}return t}e=a,a=e.parentNode}return null}function zi(e){if(e=e[at]||e[Si]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ki(e){var t=e[Ec];return t||(t=e[Ec]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Cl]=!0}var Dc=new Set,Rc={};function ii(e,t){Ti(e,t),Ti(e+"Capture",t)}function Ti(e,t){for(Rc[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mc={},Oc={};function xh(e){return Ot.call(Oc,e)?!0:Ot.call(Mc,e)?!1:bh.test(e)?Oc[e]=!0:(Mc[e]=!0,!1)}function Sn(e,t,a){if(xh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){if(!e._valueTracker){var t=Uc(e)?"checked":"value";e._valueTracker=yh(e,t,""+e[t])}}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Uc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vh=/[\n"\\]/g;function Bt(e){return e.replace(vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(e,t,a,l,n,s,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?er(e,o,Ut(t)):a!=null?er(e,o,Ut(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ut(m):e.removeAttribute("name")}function _c(e,t,a,l,n,s,o,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){$s(e);return}a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),$s(e)}function er(e,t,a){t==="number"&&zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ai(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hc(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Fc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(p(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),$s(e)}function Ei(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||jh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Gc(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&Gc(e,s,t[s])}function tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return wh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var ar=null;function ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Ri=null;function qc(e){var t=zi(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ps(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[gt]||null;if(!n)throw Error(c(90));Ps(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Bc(l)}break e;case"textarea":Hc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ai(e,!!a.multiple,t,!1)}}}var lr=!1;function Yc(e,t,a){if(lr)return e(t,a);lr=!0;try{var l=e(t);return l}finally{if(lr=!1,(Di!==null||Ri!==null)&&(hs(),Di&&(t=Di,e=Ri,Ri=Di=null,qc(t),e)))for(t=0;t<e.length;t++)qc(e[t])}}function kl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[gt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(ra)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){nr=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{nr=!1}var Aa=null,sr=null,Tn=null;function Qc(){if(Tn)return Tn;var e,t=sr,a=t.length,l,n="value"in Aa?Aa.value:Aa.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[s-l];l++);return Tn=n.slice(e,1<l?1-l:void 0)}function An(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Xc(){return!1}function bt(e){function t(a,l,n,s,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?En:Xc,this.isPropagationStopped=Xc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=bt(li),Al=w({},li,{view:0,detail:0}),Sh=bt(Al),rr,or,El,Rn=w({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(rr=e.screenX-El.screenX,or=e.screenY-El.screenY):or=rr=0,El=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:or}}),Vc=bt(Rn),Ch=w({},Rn,{dataTransfer:0}),zh=bt(Ch),kh=w({},Al,{relatedTarget:0}),cr=bt(kh),Th=w({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Ah=bt(Th),Eh=w({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=bt(Eh),Rh=w({},li,{data:0}),Zc=bt(Rh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function dr(){return Bh}var _h=w({},Al,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=An(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?An(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?An(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hh=bt(_h),Fh=w({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=bt(Fh),Gh=w({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),Lh=bt(Gh),qh=w({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=bt(qh),Qh=w({},Rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=bt(Qh),Vh=w({},li,{newState:0,oldState:0}),Zh=bt(Vh),Wh=[9,13,27,32],ur=ra&&"CompositionEvent"in window,Dl=null;ra&&"documentMode"in document&&(Dl=document.documentMode);var Kh=ra&&"TextEvent"in window&&!Dl,Kc=ra&&(!ur||Dl&&8<Dl&&11>=Dl),Jc=" ",Ic=!1;function $c(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mi=!1;function Jh(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Ic=!0,Jc);case"textInput":return e=t.data,e===Jc&&Ic?null:e;default:return null}}function Ih(e,t){if(Mi)return e==="compositionend"||!ur&&$c(e,t)?(e=Qc(),Tn=sr=Aa=null,Mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$h[e.type]:t==="textarea"}function td(e,t,a,l){Di?Ri?Ri.push(l):Ri=[l]:Di=l,t=js(t,"onChange"),0<t.length&&(a=new Dn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Rl=null,Ml=null;function Ph(e){_m(e,0)}function Mn(e){var t=zl(e);if(Bc(t))return e}function ad(e,t){if(e==="change")return t}var id=!1;if(ra){var mr;if(ra){var fr="oninput"in document;if(!fr){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),fr=typeof ld.oninput=="function"}mr=fr}else mr=!1;id=mr&&(!document.documentMode||9<document.documentMode)}function nd(){Rl&&(Rl.detachEvent("onpropertychange",sd),Ml=Rl=null)}function sd(e){if(e.propertyName==="value"&&Mn(Ml)){var t=[];td(t,Ml,e,ir(e)),Yc(Ph,t)}}function e0(e,t,a){e==="focusin"?(nd(),Rl=t,Ml=a,Rl.attachEvent("onpropertychange",sd)):e==="focusout"&&nd()}function t0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mn(Ml)}function a0(e,t){if(e==="click")return Mn(t)}function i0(e,t){if(e==="input"||e==="change")return Mn(t)}function l0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:l0;function Ol(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ot.call(t,n)||!Ct(e[n],t[n]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var a=rd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rd(a)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=zn(e.document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var n0=ra&&"documentMode"in document&&11>=document.documentMode,Oi=null,pr=null,Ul=null,gr=!1;function ud(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gr||Oi==null||Oi!==zn(l)||(l=Oi,"selectionStart"in l&&hr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ul&&Ol(Ul,l)||(Ul=l,l=js(pr,"onSelect"),0<l.length&&(t=new Dn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Oi)))}function ni(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ui={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionrun:ni("Transition","TransitionRun"),transitionstart:ni("Transition","TransitionStart"),transitioncancel:ni("Transition","TransitionCancel"),transitionend:ni("Transition","TransitionEnd")},br={},md={};ra&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function si(e){if(br[e])return br[e];if(!Ui[e])return e;var t=Ui[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in md)return br[e]=t[a];return e}var fd=si("animationend"),hd=si("animationiteration"),pd=si("animationstart"),s0=si("transitionrun"),r0=si("transitionstart"),o0=si("transitioncancel"),gd=si("transitionend"),bd=new Map,xr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xr.push("scrollEnd");function Zt(e,t){bd.set(e,t),ii(t,[e])}var On=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Bi=0,yr=0;function Un(){for(var e=Bi,t=yr=Bi=0;t<e;){var a=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var s=_t[t];if(_t[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}s!==0&&xd(a,n,s)}}function Bn(e,t,a,l){_t[Bi++]=e,_t[Bi++]=t,_t[Bi++]=a,_t[Bi++]=l,yr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vr(e,t,a,l){return Bn(e,t,a,l),_n(e)}function ri(e,t){return Bn(e,null,null,t),_n(e)}function xd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-P(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function _n(e){if(50<ln)throw ln=0,Eo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _i={};function c0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,a,l){return new c0(e,t,a,l)}function jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var a=e.alternate;return a===null?(a=zt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hn(e,t,a,l,n,s){var o=0;if(l=e,typeof e=="function")jr(e)&&(o=1);else if(typeof e=="string")o=hp(e,a,Ke.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ot:return e=zt(31,a,t,n),e.elementType=ot,e.lanes=s,e;case M:return oi(a.children,n,s,t);case q:o=8,n|=24;break;case K:return e=zt(12,a,t,n|2),e.elementType=K,e.lanes=s,e;case ie:return e=zt(13,a,t,n),e.elementType=ie,e.lanes=s,e;case He:return e=zt(19,a,t,n),e.elementType=He,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:o=10;break e;case ee:o=9;break e;case Z:o=11;break e;case Ee:o=14;break e;case Fe:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=zt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function oi(e,t,a,l){return e=zt(7,e,l,t),e.lanes=a,e}function Nr(e,t,a){return e=zt(6,e,null,t),e.lanes=a,e}function vd(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function wr(e,t,a){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:jn(t)},jd.set(e,t),t)}return{value:e,source:t,stack:jn(t)}}var Hi=[],Fi=0,Fn=null,Bl=0,Ft=[],Gt=0,Ea=null,$t=1,Pt="";function ca(e,t){Hi[Fi++]=Bl,Hi[Fi++]=Fn,Fn=e,Bl=t}function Nd(e,t,a){Ft[Gt++]=$t,Ft[Gt++]=Pt,Ft[Gt++]=Ea,Ea=e;var l=$t;e=Pt;var n=32-P(l)-1;l&=~(1<<n),a+=1;var s=32-P(t)+n;if(30<s){var o=n-n%5;s=(l&(1<<o)-1).toString(32),l>>=o,n-=o,$t=1<<32-P(t)+n|a<<n|l,Pt=s+e}else $t=1<<s|a<<n|l,Pt=e}function Sr(e){e.return!==null&&(ca(e,1),Nd(e,1,0))}function Cr(e){for(;e===Fn;)Fn=Hi[--Fi],Hi[Fi]=null,Bl=Hi[--Fi],Hi[Fi]=null;for(;e===Ea;)Ea=Ft[--Gt],Ft[Gt]=null,Pt=Ft[--Gt],Ft[Gt]=null,$t=Ft[--Gt],Ft[Gt]=null}function wd(e,t){Ft[Gt++]=$t,Ft[Gt++]=Pt,Ft[Gt++]=Ea,$t=t.id,Pt=t.overflow,Ea=e}var it=null,ke=null,me=!1,Da=null,Lt=!1,zr=Error(c(519));function Ra(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _l(Ht(t,e)),zr}function Sd(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[at]=e,t[gt]=l,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<sn.length;a++)oe(sn[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),_c(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),Fc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Lm(t.textContent,a)?(l.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),l.onScroll!=null&&oe("scroll",t),l.onScrollEnd!=null&&oe("scrollend",t),l.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Ra(e,!0)}function Cd(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:it=it.return}}function Gi(e){if(e!==it)return!1;if(!me)return Cd(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xo(e.type,e.memoizedProps)),a=!a),a&&ke&&Ra(e),Cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Jm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Jm(e)}else t===27?(t=ke,Va(e.type)?(e=Jo,Jo=null,ke=e):ke=t):ke=it?Yt(e.stateNode.nextSibling):null;return!0}function ci(){ke=it=null,me=!1}function kr(){var e=Da;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Da=null),e}function _l(e){Da===null?Da=[e]:Da.push(e)}var Tr=le(null),di=null,da=null;function Ma(e,t,a){ce(Tr,t._currentValue),t._currentValue=a}function ua(e){e._currentValue=Tr.current,be(Tr)}function Ar(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Er(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var o=n.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=n;for(var v=0;v<t.length;v++)if(m.context===t[v]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Ar(s.return,a,e),l||(o=null);break e}s=m.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Ar(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Li(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var m=n.type;Ct(n.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(n===Jt.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(un):e=[un])}n=n.return}e!==null&&Er(t,e,a,l),t.flags|=262144}function Gn(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ui(e){di=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return zd(di,e)}function Ln(e,t){return di===null&&ui(e),zd(e,t)}function zd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(c(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var d0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},u0=d.unstable_scheduleCallback,m0=d.unstable_NormalPriority,Ge={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dr(){return{controller:new d0,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&u0(m0,function(){e.controller.abort()})}var Fl=null,Rr=0,qi=0,Yi=null;function f0(e,t){if(Fl===null){var a=Fl=[];Rr=0,qi=Bo(),Yi={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Rr++,t.then(kd,kd),t}function kd(){if(--Rr===0&&Fl!==null){Yi!==null&&(Yi.status="fulfilled");var e=Fl;Fl=null,qi=0,Yi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function h0(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Td=_.S;_.S=function(e,t){um=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&f0(e,t),Td!==null&&Td(e,t)};var mi=le(null);function Mr(){var e=mi.current;return e!==null?e:Ce.pooledCache}function qn(e,t){t===null?ce(mi,mi.current):ce(mi,t.pool)}function Ad(){var e=Mr();return e===null?null:{parent:Ge._currentValue,pool:e}}var Qi=Error(c(460)),Or=Error(c(474)),Yn=Error(c(542)),Qn={then:function(){}};function Ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e}throw hi=t,Qi}}function fi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hi=a,Qi):a}}var hi=null;function Rd(){if(hi===null)throw Error(c(459));var e=hi;return hi=null,e}function Md(e){if(e===Qi||e===Yn)throw Error(c(483))}var Xi=null,Gl=0;function Xn(e){var t=Gl;return Gl+=1,Xi===null&&(Xi=[]),Dd(Xi,e,t)}function Ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vn(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Od(e){function t(C,j){if(e){var k=C.deletions;k===null?(C.deletions=[j],C.flags|=16):k.push(j)}}function a(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function l(C){for(var j=new Map;C!==null;)C.key!==null?j.set(C.key,C):j.set(C.index,C),C=C.sibling;return j}function n(C,j){return C=oa(C,j),C.index=0,C.sibling=null,C}function s(C,j,k){return C.index=k,e?(k=C.alternate,k!==null?(k=k.index,k<j?(C.flags|=67108866,j):k):(C.flags|=67108866,j)):(C.flags|=1048576,j)}function o(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,j,k,O){return j===null||j.tag!==6?(j=Nr(k,C.mode,O),j.return=C,j):(j=n(j,k),j.return=C,j)}function v(C,j,k,O){var W=k.type;return W===M?R(C,j,k.props.children,O,k.key):j!==null&&(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&fi(W)===j.type)?(j=n(j,k.props),Ll(j,k),j.return=C,j):(j=Hn(k.type,k.key,k.props,null,C.mode,O),Ll(j,k),j.return=C,j)}function T(C,j,k,O){return j===null||j.tag!==4||j.stateNode.containerInfo!==k.containerInfo||j.stateNode.implementation!==k.implementation?(j=wr(k,C.mode,O),j.return=C,j):(j=n(j,k.children||[]),j.return=C,j)}function R(C,j,k,O,W){return j===null||j.tag!==7?(j=oi(k,C.mode,O,W),j.return=C,j):(j=n(j,k),j.return=C,j)}function U(C,j,k){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nr(""+j,C.mode,k),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return k=Hn(j.type,j.key,j.props,null,C.mode,k),Ll(k,j),k.return=C,k;case H:return j=wr(j,C.mode,k),j.return=C,j;case Fe:return j=fi(j),U(C,j,k)}if(p(j)||Ve(j))return j=oi(j,C.mode,k,null),j.return=C,j;if(typeof j.then=="function")return U(C,Xn(j),k);if(j.$$typeof===Q)return U(C,Ln(C,j),k);Vn(C,j)}return null}function A(C,j,k,O){var W=j!==null?j.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return W!==null?null:m(C,j,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case L:return k.key===W?v(C,j,k,O):null;case H:return k.key===W?T(C,j,k,O):null;case Fe:return k=fi(k),A(C,j,k,O)}if(p(k)||Ve(k))return W!==null?null:R(C,j,k,O,null);if(typeof k.then=="function")return A(C,j,Xn(k),O);if(k.$$typeof===Q)return A(C,j,Ln(C,k),O);Vn(C,k)}return null}function E(C,j,k,O,W){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return C=C.get(k)||null,m(j,C,""+O,W);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case L:return C=C.get(O.key===null?k:O.key)||null,v(j,C,O,W);case H:return C=C.get(O.key===null?k:O.key)||null,T(j,C,O,W);case Fe:return O=fi(O),E(C,j,k,O,W)}if(p(O)||Ve(O))return C=C.get(k)||null,R(j,C,O,W,null);if(typeof O.then=="function")return E(C,j,k,Xn(O),W);if(O.$$typeof===Q)return E(C,j,k,Ln(j,O),W);Vn(j,O)}return null}function X(C,j,k,O){for(var W=null,fe=null,V=j,ae=j=0,ue=null;V!==null&&ae<k.length;ae++){V.index>ae?(ue=V,V=null):ue=V.sibling;var he=A(C,V,k[ae],O);if(he===null){V===null&&(V=ue);break}e&&V&&he.alternate===null&&t(C,V),j=s(he,j,ae),fe===null?W=he:fe.sibling=he,fe=he,V=ue}if(ae===k.length)return a(C,V),me&&ca(C,ae),W;if(V===null){for(;ae<k.length;ae++)V=U(C,k[ae],O),V!==null&&(j=s(V,j,ae),fe===null?W=V:fe.sibling=V,fe=V);return me&&ca(C,ae),W}for(V=l(V);ae<k.length;ae++)ue=E(V,C,ae,k[ae],O),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?ae:ue.key),j=s(ue,j,ae),fe===null?W=ue:fe.sibling=ue,fe=ue);return e&&V.forEach(function(Ia){return t(C,Ia)}),me&&ca(C,ae),W}function J(C,j,k,O){if(k==null)throw Error(c(151));for(var W=null,fe=null,V=j,ae=j=0,ue=null,he=k.next();V!==null&&!he.done;ae++,he=k.next()){V.index>ae?(ue=V,V=null):ue=V.sibling;var Ia=A(C,V,he.value,O);if(Ia===null){V===null&&(V=ue);break}e&&V&&Ia.alternate===null&&t(C,V),j=s(Ia,j,ae),fe===null?W=Ia:fe.sibling=Ia,fe=Ia,V=ue}if(he.done)return a(C,V),me&&ca(C,ae),W;if(V===null){for(;!he.done;ae++,he=k.next())he=U(C,he.value,O),he!==null&&(j=s(he,j,ae),fe===null?W=he:fe.sibling=he,fe=he);return me&&ca(C,ae),W}for(V=l(V);!he.done;ae++,he=k.next())he=E(V,C,ae,he.value,O),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?ae:he.key),j=s(he,j,ae),fe===null?W=he:fe.sibling=he,fe=he);return e&&V.forEach(function(Cp){return t(C,Cp)}),me&&ca(C,ae),W}function Se(C,j,k,O){if(typeof k=="object"&&k!==null&&k.type===M&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case L:e:{for(var W=k.key;j!==null;){if(j.key===W){if(W=k.type,W===M){if(j.tag===7){a(C,j.sibling),O=n(j,k.props.children),O.return=C,C=O;break e}}else if(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&fi(W)===j.type){a(C,j.sibling),O=n(j,k.props),Ll(O,k),O.return=C,C=O;break e}a(C,j);break}else t(C,j);j=j.sibling}k.type===M?(O=oi(k.props.children,C.mode,O,k.key),O.return=C,C=O):(O=Hn(k.type,k.key,k.props,null,C.mode,O),Ll(O,k),O.return=C,C=O)}return o(C);case H:e:{for(W=k.key;j!==null;){if(j.key===W)if(j.tag===4&&j.stateNode.containerInfo===k.containerInfo&&j.stateNode.implementation===k.implementation){a(C,j.sibling),O=n(j,k.children||[]),O.return=C,C=O;break e}else{a(C,j);break}else t(C,j);j=j.sibling}O=wr(k,C.mode,O),O.return=C,C=O}return o(C);case Fe:return k=fi(k),Se(C,j,k,O)}if(p(k))return X(C,j,k,O);if(Ve(k)){if(W=Ve(k),typeof W!="function")throw Error(c(150));return k=W.call(k),J(C,j,k,O)}if(typeof k.then=="function")return Se(C,j,Xn(k),O);if(k.$$typeof===Q)return Se(C,j,Ln(C,k),O);Vn(C,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,j!==null&&j.tag===6?(a(C,j.sibling),O=n(j,k),O.return=C,C=O):(a(C,j),O=Nr(k,C.mode,O),O.return=C,C=O),o(C)):a(C,j)}return function(C,j,k,O){try{Gl=0;var W=Se(C,j,k,O);return Xi=null,W}catch(V){if(V===Qi||V===Yn)throw V;var fe=zt(29,V,null,C.mode);return fe.lanes=O,fe.return=C,fe}finally{}}}var pi=Od(!0),Ud=Od(!1),Oa=!1;function Ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Br(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=_n(e),xd(e,null,a),t}return Bn(e,l,t,a),_n(e)}function ql(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zc(e,a)}}function _r(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hr=!1;function Yl(){if(Hr){var e=Yi;if(e!==null)throw e}}function Ql(e,t,a,l){Hr=!1;var n=e.updateQueue;Oa=!1;var s=n.firstBaseUpdate,o=n.lastBaseUpdate,m=n.shared.pending;if(m!==null){n.shared.pending=null;var v=m,T=v.next;v.next=null,o===null?s=T:o.next=T,o=v;var R=e.alternate;R!==null&&(R=R.updateQueue,m=R.lastBaseUpdate,m!==o&&(m===null?R.firstBaseUpdate=T:m.next=T,R.lastBaseUpdate=v))}if(s!==null){var U=n.baseState;o=0,R=T=v=null,m=s;do{var A=m.lane&-536870913,E=A!==m.lane;if(E?(de&A)===A:(l&A)===A){A!==0&&A===qi&&(Hr=!0),R!==null&&(R=R.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var X=e,J=m;A=t;var Se=a;switch(J.tag){case 1:if(X=J.payload,typeof X=="function"){U=X.call(Se,U,A);break e}U=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,A=typeof X=="function"?X.call(Se,U,A):X,A==null)break e;U=w({},U,A);break e;case 2:Oa=!0}}A=m.callback,A!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[A]:E.push(A))}else E={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},R===null?(T=R=E,v=U):R=R.next=E,o|=A;if(m=m.next,m===null){if(m=n.shared.pending,m===null)break;E=m,m=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);R===null&&(v=U),n.baseState=v,n.firstBaseUpdate=T,n.lastBaseUpdate=R,s===null&&(n.shared.lanes=0),La|=o,e.lanes=o,e.memoizedState=U}}function Bd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function _d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bd(a[e],t)}var Vi=le(null),Zn=le(0);function Hd(e,t){e=va,ce(Zn,e),ce(Vi,t),va=e|t.baseLanes}function Fr(){ce(Zn,va),ce(Vi,Vi.current)}function Gr(){va=Zn.current,be(Vi),be(Zn)}var kt=le(null),qt=null;function _a(e){var t=e.alternate;ce(Be,Be.current&1),ce(kt,e),qt===null&&(t===null||Vi.current!==null||t.memoizedState!==null)&&(qt=e)}function Lr(e){ce(Be,Be.current),ce(kt,e),qt===null&&(qt=e)}function Fd(e){e.tag===22?(ce(Be,Be.current),ce(kt,e),qt===null&&(qt=e)):Ha()}function Ha(){ce(Be,Be.current),ce(kt,kt.current)}function Tt(e){be(kt),qt===e&&(qt=null),be(Be)}var Be=le(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wo(a)||Ko(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,te=null,Ne=null,Le=null,Kn=!1,Zi=!1,gi=!1,Jn=0,Xl=0,Wi=null,p0=0;function Oe(){throw Error(c(321))}function qr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function Yr(e,t,a,l,n,s){return ma=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Nu:lo,gi=!1,s=a(l,n),gi=!1,Zi&&(s=Ld(t,a,l,n)),Gd(e),s}function Gd(e){_.H=Wl;var t=Ne!==null&&Ne.next!==null;if(ma=0,Le=Ne=te=null,Kn=!1,Xl=0,Wi=null,t)throw Error(c(300));e===null||qe||(e=e.dependencies,e!==null&&Gn(e)&&(qe=!0))}function Ld(e,t,a,l){te=e;var n=0;do{if(Zi&&(Wi=null),Xl=0,Zi=!1,25<=n)throw Error(c(301));if(n+=1,Le=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=wu,s=t(a,l)}while(Zi);return s}function g0(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(te.flags|=1024),t}function Qr(){var e=Jn!==0;return Jn=0,e}function Xr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vr(e){if(Kn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kn=!1}ma=0,Le=Ne=te=null,Zi=!1,Xl=Jn=0,Wi=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?te.memoizedState=Le=e:Le=Le.next=e,Le}function _e(){if(Ne===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Le===null?te.memoizedState:Le.next;if(t!==null)Le=t,Ne=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?te.memoizedState=Le=e:Le=Le.next=e}return Le}function In(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(e){var t=Xl;return Xl+=1,Wi===null&&(Wi=[]),e=Dd(Wi,e,t),t=te,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Nu:lo),e}function $n(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===Q)return lt(e)}throw Error(c(438,String(e)))}function Zr(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=In(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=$e;return t.index++,a}function fa(e,t){return typeof t=="function"?t(e):t}function Pn(e){var t=_e();return Wr(t,Ne,e)}function Wr(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var o=n.next;n.next=s.next,s.next=o}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var m=o=null,v=null,T=t,R=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(de&U)===U:(ma&U)===U){var A=T.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===qi&&(R=!0);else if((ma&A)===A){T=T.next,A===qi&&(R=!0);continue}else U={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(m=v=U,o=s):v=v.next=U,te.lanes|=A,La|=A;U=T.action,gi&&a(s,U),s=T.hasEagerState?T.eagerState:a(s,U)}else A={lane:U,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(m=v=A,o=s):v=v.next=A,te.lanes|=U,La|=U;T=T.next}while(T!==null&&T!==t);if(v===null?o=s:v.next=m,!Ct(s,e.memoizedState)&&(qe=!0,R&&(a=Yi,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=v,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kr(e){var t=_e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do s=e(s,o.action),o=o.next;while(o!==n);Ct(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function qd(e,t,a){var l=te,n=_e(),s=me;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!Ct((Ne||n).memoizedState,a);if(o&&(n.memoizedState=a,qe=!0),n=n.queue,$r(Xd.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Ki(9,{destroy:void 0},Qd.bind(null,l,n,a,t),null),Ce===null)throw Error(c(349));s||(ma&127)!==0||Yd(l,t,a)}return a}function Yd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=In(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qd(e,t,a,l){t.value=a,t.getSnapshot=l,Vd(t)&&Zd(e)}function Xd(e,t,a){return a(function(){Vd(t)&&Zd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Zd(e){var t=ri(e,2);t!==null&&Nt(t,e,2)}function Jr(e){var t=mt();if(typeof e=="function"){var a=e;if(e=a(),gi){I(!0);try{a()}finally{I(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Wd(e,t,a,l){return e.baseState=a,Wr(e,Ne,typeof l=="function"?l:fa)}function b0(e,t,a,l,n){if(as(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};_.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,Kd(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Kd(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=_.T,o={};_.T=o;try{var m=a(n,l),v=_.S;v!==null&&v(o,m),Jd(e,t,m)}catch(T){Ir(e,t,T)}finally{s!==null&&o.types!==null&&(s.types=o.types),_.T=s}}else try{s=a(n,l),Jd(e,t,s)}catch(T){Ir(e,t,T)}}function Jd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Id(e,t,l)},function(l){return Ir(e,t,l)}):Id(e,t,a)}function Id(e,t,a){t.status="fulfilled",t.value=a,$d(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Kd(e,a)))}function Ir(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,$d(t),t=t.next;while(t!==l)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pd(e,t){return t}function eu(e,t){if(me){var a=Ce.formState;if(a!==null){e:{var l=te;if(me){if(ke){t:{for(var n=ke,s=Lt;n.nodeType!==8;){if(!s){n=null;break t}if(n=Yt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){ke=Yt(n.nextSibling),l=n.data==="F!";break e}}Ra(l)}l=!1}l&&(t=a[0])}}return a=mt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pd,lastRenderedState:t},a.queue=l,a=yu.bind(null,te,l),l.dispatch=a,l=Jr(!1),s=io.bind(null,te,!1,l.queue),l=mt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=b0.bind(null,te,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function tu(e){var t=_e();return au(t,Ne,e)}function au(e,t,a){if(t=Wr(e,t,Pd)[0],e=Pn(fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Vl(t)}catch(o){throw o===Qi?Yn:o}else l=t;t=_e();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Ki(9,{destroy:void 0},x0.bind(null,n,a),null)),[l,s,e]}function x0(e,t){e.action=t}function iu(e){var t=_e(),a=Ne;if(a!==null)return au(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ki(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=In(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function lu(){return _e().memoizedState}function es(e,t,a,l){var n=mt();te.flags|=e,n.memoizedState=Ki(1|t,{destroy:void 0},a,l===void 0?null:l)}function ts(e,t,a,l){var n=_e();l=l===void 0?null:l;var s=n.memoizedState.inst;Ne!==null&&l!==null&&qr(l,Ne.memoizedState.deps)?n.memoizedState=Ki(t,s,a,l):(te.flags|=e,n.memoizedState=Ki(1|t,s,a,l))}function nu(e,t){es(8390656,8,e,t)}function $r(e,t){ts(2048,8,e,t)}function y0(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=In(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function su(e){var t=_e().memoizedState;return y0({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function ru(e,t){return ts(4,2,e,t)}function ou(e,t){return ts(4,4,e,t)}function cu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function du(e,t,a){a=a!=null?a.concat([e]):null,ts(4,4,cu.bind(null,t,e),a)}function Pr(){}function uu(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&qr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function mu(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&qr(t,l[1]))return l[0];if(l=e(),gi){I(!0);try{e()}finally{I(!1)}}return a.memoizedState=[l,t],l}function eo(e,t,a){return a===void 0||(ma&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fm(),te.lanes|=e,La|=e,a)}function fu(e,t,a,l){return Ct(a,t)?a:Vi.current!==null?(e=eo(e,a,l),Ct(e,t)||(qe=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(de&261930)===0?(qe=!0,e.memoizedState=a):(e=fm(),te.lanes|=e,La|=e,t)}function hu(e,t,a,l,n){var s=Y.p;Y.p=s!==0&&8>s?s:8;var o=_.T,m={};_.T=m,io(e,!1,t,a);try{var v=n(),T=_.S;if(T!==null&&T(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=h0(v,l);Zl(e,t,R,Dt(e))}else Zl(e,t,l,Dt(e))}catch(U){Zl(e,t,{then:function(){},status:"rejected",reason:U},Dt())}finally{Y.p=s,o!==null&&m.types!==null&&(o.types=m.types),_.T=o}}function v0(){}function to(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=pu(e).queue;hu(e,n,t,ne,a===null?v0:function(){return gu(e),a(l)})}function pu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gu(e){var t=pu(e);t.next===null&&(t=e.alternate.memoizedState),Zl(e,t.next.queue,{},Dt())}function ao(){return lt(un)}function bu(){return _e().memoizedState}function xu(){return _e().memoizedState}function j0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Dt();e=Ua(a);var l=Ba(t,e,a);l!==null&&(Nt(l,t,a),ql(l,t,a)),t={cache:Dr()},e.payload=t;return}t=t.return}}function N0(e,t,a){var l=Dt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},as(e)?vu(t,a):(a=vr(e,t,a,l),a!==null&&(Nt(a,e,l),ju(a,t,l)))}function yu(e,t,a){var l=Dt();Zl(e,t,a,l)}function Zl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(as(e))vu(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,m=s(o,a);if(n.hasEagerState=!0,n.eagerState=m,Ct(m,o))return Bn(e,t,n,0),Ce===null&&Un(),!1}catch{}finally{}if(a=vr(e,t,n,l),a!==null)return Nt(a,e,l),ju(a,t,l),!0}return!1}function io(e,t,a,l){if(l={lane:2,revertLane:Bo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},as(e)){if(t)throw Error(c(479))}else t=vr(e,a,l,2),t!==null&&Nt(t,e,2)}function as(e){var t=e.alternate;return e===te||t!==null&&t===te}function vu(e,t){Zi=Kn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ju(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zc(e,a)}}var Wl={readContext:lt,use:$n,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Wl.useEffectEvent=Oe;var Nu={readContext:lt,use:$n,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:nu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,es(4194308,4,cu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){es(4,2,e,t)},useMemo:function(e,t){var a=mt();t=t===void 0?null:t;var l=e();if(gi){I(!0);try{e()}finally{I(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=mt();if(a!==void 0){var n=a(t);if(gi){I(!0);try{a(t)}finally{I(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=N0.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Jr(e);var t=e.queue,a=yu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pr,useDeferredValue:function(e,t){var a=mt();return eo(a,e,t)},useTransition:function(){var e=Jr(!1);return e=hu.bind(null,te,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=mt();if(me){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ce===null)throw Error(c(349));(de&127)!==0||Yd(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,nu(Xd.bind(null,l,s,e),[e]),l.flags|=2048,Ki(9,{destroy:void 0},Qd.bind(null,l,s,a,t),null),a},useId:function(){var e=mt(),t=Ce.identifierPrefix;if(me){var a=Pt,l=$t;a=(l&~(1<<32-P(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Jn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=p0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:eu,useActionState:eu,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=io.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zr,useCacheRefresh:function(){return mt().memoizedState=j0.bind(null,te)},useEffectEvent:function(e){var t=mt(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},lo={readContext:lt,use:$n,useCallback:uu,useContext:lt,useEffect:$r,useImperativeHandle:du,useInsertionEffect:ru,useLayoutEffect:ou,useMemo:mu,useReducer:Pn,useRef:lu,useState:function(){return Pn(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return fu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Pn(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:qd,useId:bu,useHostTransitionStatus:ao,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var a=_e();return Wd(a,Ne,e,t)},useMemoCache:Zr,useCacheRefresh:xu};lo.useEffectEvent=su;var wu={readContext:lt,use:$n,useCallback:uu,useContext:lt,useEffect:$r,useImperativeHandle:du,useInsertionEffect:ru,useLayoutEffect:ou,useMemo:mu,useReducer:Kr,useRef:lu,useState:function(){return Kr(fa)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=_e();return Ne===null?eo(a,e,t):fu(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Kr(fa)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:qd,useId:bu,useHostTransitionStatus:ao,useFormState:iu,useActionState:iu,useOptimistic:function(e,t){var a=_e();return Ne!==null?Wd(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zr,useCacheRefresh:xu};wu.useEffectEvent=su;function no(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var so={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ua(l);n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,l),t!==null&&(Nt(t,e,l),ql(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ba(e,n,l),t!==null&&(Nt(t,e,l),ql(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Dt(),l=Ua(a);l.tag=2,t!=null&&(l.callback=t),t=Ba(e,l,a),t!==null&&(Nt(t,e,a),ql(t,e,a))}};function Su(e,t,a,l,n,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ol(a,l)||!Ol(n,s):!0}function Cu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function bi(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zu(e){On(e)}function ku(e){console.error(e)}function Tu(e){On(e)}function is(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Au(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ro(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){is(e,t)},a}function Eu(e){return e=Ua(e),e.tag=3,e}function Du(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){Au(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Au(t,a,l),typeof n!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function w0(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Li(t,a,n,!0),a=kt.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?ps():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Qn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Mo(e,l,n)),!1;case 22:return a.flags|=65536,l===Qn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Mo(e,l,n)),!1}throw Error(c(435,a.tag))}return Mo(e,l,n),ps(),!1}if(me)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==zr&&(e=Error(c(422),{cause:l}),_l(Ht(e,a)))):(l!==zr&&(t=Error(c(423),{cause:l}),_l(Ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ht(l,a),n=ro(e.stateNode,l,n),_r(e,n),Ue!==4&&(Ue=2)),!1;var s=Error(c(520),{cause:l});if(s=Ht(s,a),an===null?an=[s]:an.push(s),Ue!==4&&(Ue=2),t===null)return!0;l=Ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ro(a.stateNode,l,e),_r(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(qa===null||!qa.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Eu(n),Du(n,e,a,l),_r(a,n),!1}a=a.return}while(a!==null);return!1}var oo=Error(c(461)),qe=!1;function nt(e,t,a,l){t.child=e===null?Ud(t,null,a,l):pi(t,e.child,a,l)}function Ru(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return ui(t),l=Yr(e,t,a,o,s,n),m=Qr(),e!==null&&!qe?(Xr(e,t,n),ha(e,t,n)):(me&&m&&Sr(t),t.flags|=1,nt(e,t,l,n),t.child)}function Mu(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!jr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Ou(e,t,s,l,n)):(e=Hn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!bo(e,n)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:Ol,a(o,l)&&e.ref===t.ref)return ha(e,t,n)}return t.flags|=1,e=oa(s,l),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(Ol(s,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=s,bo(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,ha(e,t,n)}return co(e,t,a,l,n)}function Uu(e,t,a,l){var n=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~s}else l=0,t.child=null;return Bu(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qn(t,s!==null?s.cachePool:null),s!==null?Hd(t,s):Fr(),Fd(t);else return l=t.lanes=536870912,Bu(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(qn(t,s.cachePool),Hd(t,s),Ha(),t.memoizedState=null):(e!==null&&qn(t,null),Fr(),Ha());return nt(e,t,n,a),t.child}function Kl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bu(e,t,a,l,n){var s=Mr();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&qn(t,null),Fr(),Fd(t),e!==null&&Li(e,t,l,!0),t.childLanes=n,null}function ls(e,t){return t=ss({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _u(e,t,a){return pi(t,e.child,null,a),e=ls(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function S0(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=ls(t,l),t.lanes=536870912,Kl(null,e);if(Lr(t),(e=ke)?(e=Km(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:$t,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=vd(e),a.return=t,t.child=a,it=t,ke=null)):e=null,e===null)throw Ra(t);return t.lanes=536870912,null}return ls(t,l)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(Lr(t),n)if(t.flags&256)t.flags&=-257,t=_u(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(qe||Li(e,t,a,!1),n=(a&e.childLanes)!==0,qe||n){if(l=Ce,l!==null&&(o=kc(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,ri(e,o),Nt(l,e,o),oo;ps(),t=_u(e,t,a)}else e=s.treeContext,ke=Yt(o.nextSibling),it=t,me=!0,Da=null,Lt=!1,e!==null&&wd(t,e),t=ls(t,l),t.flags|=4096;return t}return e=oa(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ns(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function co(e,t,a,l,n){return ui(t),a=Yr(e,t,a,l,void 0,n),l=Qr(),e!==null&&!qe?(Xr(e,t,n),ha(e,t,n)):(me&&l&&Sr(t),t.flags|=1,nt(e,t,a,n),t.child)}function Hu(e,t,a,l,n,s){return ui(t),t.updateQueue=null,a=Ld(t,l,a,n),Gd(e),l=Qr(),e!==null&&!qe?(Xr(e,t,s),ha(e,t,s)):(me&&l&&Sr(t),t.flags|=1,nt(e,t,a,s),t.child)}function Fu(e,t,a,l,n){if(ui(t),t.stateNode===null){var s=_i,o=a.contextType;typeof o=="object"&&o!==null&&(s=lt(o)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=so,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Ur(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?lt(o):_i,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(no(t,a,o,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&so.enqueueReplaceState(s,s.state,null),Ql(t,l,s,n),Yl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,v=bi(a,m);s.props=v;var T=s.context,R=a.contextType;o=_i,typeof R=="object"&&R!==null&&(o=lt(R));var U=a.getDerivedStateFromProps;R=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||T!==o)&&Cu(t,s,l,o),Oa=!1;var A=t.memoizedState;s.state=A,Ql(t,l,s,n),Yl(),T=t.memoizedState,m||A!==T||Oa?(typeof U=="function"&&(no(t,a,U,l),T=t.memoizedState),(v=Oa||Su(t,a,v,l,A,T,o))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),s.props=l,s.state=T,s.context=o,l=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Br(e,t),o=t.memoizedProps,R=bi(a,o),s.props=R,U=t.pendingProps,A=s.context,T=a.contextType,v=_i,typeof T=="object"&&T!==null&&(v=lt(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==U||A!==v)&&Cu(t,s,l,v),Oa=!1,A=t.memoizedState,s.state=A,Ql(t,l,s,n),Yl();var E=t.memoizedState;o!==U||A!==E||Oa||e!==null&&e.dependencies!==null&&Gn(e.dependencies)?(typeof m=="function"&&(no(t,a,m,l),E=t.memoizedState),(R=Oa||Su(t,a,R,l,A,E,v)||e!==null&&e.dependencies!==null&&Gn(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,E,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,E,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),s.props=l,s.state=E,s.context=v,l=R):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,ns(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=pi(t,e.child,null,n),t.child=pi(t,null,a,n)):nt(e,t,a,n),t.memoizedState=s.state,e=t.child):e=ha(e,t,n),e}function Gu(e,t,a,l){return ci(),t.flags|=256,nt(e,t,a,l),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mo(e){return{baseLanes:e,cachePool:Ad()}}function fo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function Lu(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?_a(t):Ha(),(e=ke)?(e=Km(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:$t,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},a=vd(e),a.return=t,t.child=a,it=t,ke=null)):e=null,e===null)throw Ra(t);return Ko(e)?t.lanes=32:t.lanes=536870912,null}var m=l.children;return l=l.fallback,n?(Ha(),n=t.mode,m=ss({mode:"hidden",children:m},n),l=oi(l,n,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,l=t.child,l.memoizedState=mo(a),l.childLanes=fo(e,o,a),t.memoizedState=uo,Kl(null,l)):(_a(t),ho(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(s)t.flags&256?(_a(t),t.flags&=-257,t=po(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),m=l.fallback,n=t.mode,l=ss({mode:"visible",children:l.children},n),m=oi(m,n,a,null),m.flags|=2,l.return=t,m.return=t,l.sibling=m,t.child=l,pi(t,e.child,null,a),l=t.child,l.memoizedState=mo(a),l.childLanes=fo(e,o,a),t.memoizedState=uo,t=Kl(null,l));else if(_a(t),Ko(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var T=o.dgst;o=T,l=Error(c(419)),l.stack="",l.digest=o,_l({value:l,source:null,stack:null}),t=po(e,t,a)}else if(qe||Li(e,t,a,!1),o=(a&e.childLanes)!==0,qe||o){if(o=Ce,o!==null&&(l=kc(o,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,ri(e,l),Nt(o,e,l),oo;Wo(m)||ps(),t=po(e,t,a)}else Wo(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,ke=Yt(m.nextSibling),it=t,me=!0,Da=null,Lt=!1,e!==null&&wd(t,e),t=ho(t,l.children),t.flags|=4096);return t}return n?(Ha(),m=l.fallback,n=t.mode,v=e.child,T=v.sibling,l=oa(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,T!==null?m=oa(T,m):(m=oi(m,n,a,null),m.flags|=2),m.return=t,l.return=t,l.sibling=m,t.child=l,Kl(null,l),l=t.child,m=e.child.memoizedState,m===null?m=mo(a):(n=m.cachePool,n!==null?(v=Ge._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Ad(),m={baseLanes:m.baseLanes|a,cachePool:n}),l.memoizedState=m,l.childLanes=fo(e,o,a),t.memoizedState=uo,Kl(e.child,l)):(_a(t),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ho(e,t){return t=ss({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ss(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function po(e,t,a){return pi(t,e.child,null,a),e=ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ar(e.return,t,a)}function go(e,t,a,l,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=s)}function Yu(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;l=l.children;var o=Be.current,m=(o&2)!==0;if(m?(o=o&1|2,t.flags|=128):o&=1,ce(Be,o),nt(e,t,l,a),l=me?Bl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,a,t);else if(e.tag===19)qu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),go(t,!1,n,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}go(t,!0,a,null,s,l);break;case"together":go(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Li(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=oa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function bo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gn(e)))}function C0(e,t,a){switch(t.tag){case 3:ia(t,t.stateNode.containerInfo),Ma(t,Ge,e.memoizedState.cache),ci();break;case 27:case 5:hl(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Lu(e,t,a):(_a(t),e=ha(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Li(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Yu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ce(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Uu(e,t,a,t.pendingProps);case 24:Ma(t,Ge,e.memoizedState.cache)}return ha(e,t,a)}function Qu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!bo(e,a)&&(t.flags&128)===0)return qe=!1,C0(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,me&&(t.flags&1048576)!==0&&Nd(t,Bl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=fi(t.elementType),t.type=e,typeof e=="function")jr(e)?(l=bi(e,l),t.tag=1,t=Fu(null,t,e,l,a)):(t.tag=0,t=co(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=Ru(null,t,e,l,a);break e}else if(n===Ee){t.tag=14,t=Mu(null,t,e,l,a);break e}}throw t=ct(e)||e,Error(c(306,t,""))}}return t;case 0:return co(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=bi(l,t.pendingProps),Fu(e,t,l,n,a);case 3:e:{if(ia(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,Br(e,t),Ql(t,l,null,a);var o=t.memoizedState;if(l=o.cache,Ma(t,Ge,l),l!==s.cache&&Er(t,[Ge],a,!0),Yl(),l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Gu(e,t,l,a);break e}else if(l!==n){n=Ht(Error(c(424)),t),_l(n),t=Gu(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=Yt(e.firstChild),it=t,me=!0,Da=null,Lt=!0,a=Ud(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ci(),l===n){t=ha(e,t,a);break e}nt(e,t,l,a)}t=t.child}return t;case 26:return ns(e,t),e===null?(a=tf(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=Ns(dt.current).createElement(a),l[at]=t,l[gt]=e,st(l,a,e),Je(l),t.stateNode=l):t.memoizedState=tf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return hl(t),e===null&&me&&(l=t.stateNode=$m(t.type,t.pendingProps,dt.current),it=t,Lt=!0,n=ke,Va(t.type)?(Jo=n,ke=Yt(l.firstChild)):ke=n),nt(e,t,t.pendingProps.children,a),ns(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=ke)&&(l=tp(l,t.type,t.pendingProps,Lt),l!==null?(t.stateNode=l,it=t,ke=Yt(l.firstChild),Lt=!1,n=!0):n=!1),n||Ra(t)),hl(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,Xo(n,s)?l=null:o!==null&&Xo(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Yr(e,t,g0,null,null,a),un._currentValue=n),ns(e,t),nt(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=ke)&&(a=ap(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,it=t,ke=null,e=!0):e=!1),e||Ra(t)),null;case 13:return Lu(e,t,a);case 4:return ia(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=pi(t,null,l,a):nt(e,t,l,a),t.child;case 11:return Ru(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Ma(t,t.type,l.value),nt(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ui(t),n=lt(n),l=l(n),t.flags|=1,nt(e,t,l,a),t.child;case 14:return Mu(e,t,t.type,t.pendingProps,a);case 15:return Ou(e,t,t.type,t.pendingProps,a);case 19:return Yu(e,t,a);case 31:return S0(e,t,a);case 22:return Uu(e,t,a,t.pendingProps);case 24:return ui(t),l=lt(Ge),e===null?(n=Mr(),n===null&&(n=Ce,s=Dr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},Ur(t),Ma(t,Ge,n)):((e.lanes&a)!==0&&(Br(e,t),Ql(t,null,null,a),Yl()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ma(t,Ge,l)):(l=s.cache,Ma(t,Ge,l),l!==n.cache&&Er(t,[Ge],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function pa(e){e.flags|=4}function xo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw hi=Qn,Or}else e.flags&=-16777217}function Xu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rf(t))if(bm())e.flags|=8192;else throw hi=Qn,Or}function rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nl():536870912,e.lanes|=t,Pi|=t)}function Jl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function z0(e,t,a){var l=t.pendingProps;switch(Cr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ua(Ge),Ca(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?pa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kr())),Te(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(pa(t),s!==null?(Te(t),Xu(t,s)):(Te(t),xo(t,n,null,l,a))):s?s!==e.memoizedState?(pa(t),Te(t),Xu(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&pa(t),Te(t),xo(t,n,e,l,a)),null;case 27:if(ei(t),a=dt.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&pa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Te(t),null}e=Ke.current,Gi(t)?Sd(t):(e=$m(n,l,a),t.stateNode=e,pa(t))}return Te(t),null;case 5:if(ei(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&pa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Te(t),null}if(s=Ke.current,Gi(t))Sd(t);else{var o=Ns(dt.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}s[at]=t,s[gt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(st(s,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&pa(t)}}return Te(t),xo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&pa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=dt.current,Gi(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=it,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Lm(e.nodeValue,a)),e||Ra(t,!0)}else e=Ns(e).createTextNode(l),e[at]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Gi(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[at]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Gi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[at]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),n=!1}else n=kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),rs(t,t.updateQueue),Te(t),null);case 4:return Ca(),e===null&&Go(t.stateNode.containerInfo),Te(t),null;case 10:return ua(t.type),Te(t),null;case 19:if(be(Be),l=t.memoizedState,l===null)return Te(t),null;if(n=(t.flags&128)!==0,s=l.rendering,s===null)if(n)Jl(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wn(e),s!==null){for(t.flags|=128,Jl(l,!1),e=s.updateQueue,t.updateQueue=e,rs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)yd(a,e),a=a.sibling;return ce(Be,Be.current&1|2),me&&ca(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>ms&&(t.flags|=128,n=!0,Jl(l,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,rs(t,e),Jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!me)return Te(t),null}else 2*ut()-l.renderingStartTime>ms&&a!==536870912&&(t.flags|=128,n=!0,Jl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=Be.current,ce(Be,n?a&1|2:a&1),me&&ca(t,l.treeForkCount),e):(Te(t),null);case 22:case 23:return Tt(t),Gr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&rs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&be(mi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ua(Ge),Te(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function k0(e,t){switch(Cr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(Ge),Ca(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ei(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(c(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Be),null;case 4:return Ca(),null;case 10:return ua(t.type),null;case 22:case 23:return Tt(t),Gr(),e!==null&&be(mi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(Ge),null;case 25:return null;default:return null}}function Vu(e,t){switch(Cr(t),t.tag){case 3:ua(Ge),Ca();break;case 26:case 27:case 5:ei(t);break;case 4:Ca();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:be(Be);break;case 10:ua(t.type);break;case 22:case 23:Tt(t),Gr(),e!==null&&be(mi);break;case 24:ua(Ge)}}function Il(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,o=a.inst;l=s(),o.destroy=l}a=a.next}while(a!==n)}}catch(m){ye(t,t.return,m)}}function Fa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,n=t;var v=a,T=m;try{T()}catch(R){ye(n,v,R)}}}l=l.next}while(l!==s)}}catch(R){ye(t,t.return,R)}}function Zu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{_d(t,a)}catch(l){ye(e,e.return,l)}}}function Wu(e,t,a){a.props=bi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function $l(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ye(e,t,n)}}function ea(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function Ku(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function yo(e,t,a){try{var l=e.stateNode;K0(l,e.type,a,t),l[gt]=t}catch(n){ye(e,e.return,n)}}function Ju(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(jo(e,t,a),e=e.sibling;e!==null;)jo(e,t,a),e=e.sibling}function os(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(os(e,t,a),e=e.sibling;e!==null;)os(e,t,a),e=e.sibling}function Iu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);st(t,l,a),t[at]=e,t[gt]=a}catch(s){ye(e,e.return,s)}}var ga=!1,Ye=!1,No=!1,$u=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function T0(e,t){if(e=e.containerInfo,Yo=As,e=dd(e),hr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,m=-1,v=-1,T=0,R=0,U=e,A=null;t:for(;;){for(var E;U!==a||n!==0&&U.nodeType!==3||(m=o+n),U!==s||l!==0&&U.nodeType!==3||(v=o+l),U.nodeType===3&&(o+=U.nodeValue.length),(E=U.firstChild)!==null;)A=U,U=E;for(;;){if(U===e)break t;if(A===a&&++T===n&&(m=o),A===s&&++R===l&&(v=o),(E=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=E}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qo={focusedElem:e,selectionRange:a},As=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var X=bi(a.type,n);e=l.getSnapshotBeforeUpdate(X,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(J){ye(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Pu(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),l&4&&Il(5,a);break;case 1:if(xa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ye(a,a.return,o)}else{var n=bi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ye(a,a.return,o)}}l&64&&Zu(a),l&512&&$l(a,a.return);break;case 3:if(xa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_d(e,t)}catch(o){ye(a,a.return,o)}}break;case 27:t===null&&l&4&&Iu(a);case 26:case 5:xa(e,a),t===null&&l&4&&Ku(a),l&512&&$l(a,a.return);break;case 12:xa(e,a);break;case 31:xa(e,a),l&4&&am(e,a);break;case 13:xa(e,a),l&4&&im(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_0.bind(null,a),ip(e,a))));break;case 22:if(l=a.memoizedState!==null||ga,!l){t=t!==null&&t.memoizedState!==null||Ye,n=ga;var s=Ye;ga=l,(Ye=t)&&!s?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),ga=n,Ye=s}break;case 30:break;default:xa(e,a)}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Is(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,xt=!1;function ba(e,t,a){for(a=a.child;a!==null;)tm(e,t,a),a=a.sibling}function tm(e,t,a){if(F&&typeof F.onCommitFiberUnmount=="function")try{F.onCommitFiberUnmount(G,a)}catch{}switch(a.tag){case 26:Ye||ea(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||ea(a,t);var l=Ae,n=xt;Va(a.type)&&(Ae=a.stateNode,xt=!1),ba(e,t,a),on(a.stateNode),Ae=l,xt=n;break;case 5:Ye||ea(a,t);case 6:if(l=Ae,n=xt,Ae=null,ba(e,t,a),Ae=l,xt=n,Ae!==null)if(xt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(s){ye(a,t,s)}else try{Ae.removeChild(a.stateNode)}catch(s){ye(a,t,s)}break;case 18:Ae!==null&&(xt?(e=Ae,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rl(e)):Zm(Ae,a.stateNode));break;case 4:l=Ae,n=xt,Ae=a.stateNode.containerInfo,xt=!0,ba(e,t,a),Ae=l,xt=n;break;case 0:case 11:case 14:case 15:Fa(2,a,t),Ye||Fa(4,a,t),ba(e,t,a);break;case 1:Ye||(ea(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Wu(a,t,l)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ye=(l=Ye)||a.memoizedState!==null,ba(e,t,a),Ye=l;break;default:ba(e,t,a)}}function am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rl(e)}catch(a){ye(t,t.return,a)}}}function im(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(a){ye(t,t.return,a)}}function A0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $u),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $u),t;default:throw Error(c(435,e.tag))}}function cs(e,t){var a=A0(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=H0.bind(null,e,l);l.then(n,n)}})}function yt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Va(m.type)){Ae=m.stateNode,xt=!1;break e}break;case 5:Ae=m.stateNode,xt=!1;break e;case 3:case 4:Ae=m.stateNode.containerInfo,xt=!0;break e}m=m.return}if(Ae===null)throw Error(c(160));tm(s,o,n),Ae=null,xt=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}var Wt=null;function lm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),vt(e),l&4&&(Fa(3,e,e.return),Il(3,e),Fa(5,e,e.return));break;case 1:yt(t,e),vt(e),l&512&&(Ye||a===null||ea(a,a.return)),l&64&&ga&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Wt;if(yt(t,e),vt(e),l&512&&(Ye||a===null||ea(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Cl]||s[at]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),st(s,l,a),s[at]=e,Je(s),l=s;break e;case"link":var o=nf("link","href",n).get(l+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(s=o[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break t}}s=n.createElement(l),st(s,l,a),n.head.appendChild(s);break;case"meta":if(o=nf("meta","content",n).get(l+(a.content||""))){for(m=0;m<o.length;m++)if(s=o[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break t}}s=n.createElement(l),st(s,l,a),n.head.appendChild(s);break;default:throw Error(c(468,l))}s[at]=e,Je(s),l=s}e.stateNode=l}else sf(n,e.type,e.stateNode);else e.stateNode=lf(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?sf(n,e.type,e.stateNode):lf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),vt(e),l&512&&(Ye||a===null||ea(a,a.return)),a!==null&&l&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),vt(e),l&512&&(Ye||a===null||ea(a,a.return)),e.flags&32){n=e.stateNode;try{Ei(n,"")}catch(X){ye(e,e.return,X)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,yo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(No=!0);break;case 6:if(yt(t,e),vt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(X){ye(e,e.return,X)}}break;case 3:if(Cs=null,n=Wt,Wt=ws(t.containerInfo),yt(t,e),Wt=n,vt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{rl(t.containerInfo)}catch(X){ye(e,e.return,X)}No&&(No=!1,nm(e));break;case 4:l=Wt,Wt=ws(e.stateNode.containerInfo),yt(t,e),vt(e),Wt=l;break;case 12:yt(t,e),vt(e);break;case 31:yt(t,e),vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cs(e,l)));break;case 13:yt(t,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(us=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cs(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,T=ga,R=Ye;if(ga=T||n,Ye=R||v,yt(t,e),Ye=R,ga=T,vt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||ga||Ye||xi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(s=v.stateNode,n)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=v.stateNode;var U=v.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(X){ye(v,v.return,X)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(X){ye(v,v.return,X)}}}else if(t.tag===18){if(a===null){v=t;try{var E=v.stateNode;n?Wm(E,!0):Wm(v.stateNode,!1)}catch(X){ye(v,v.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,cs(e,a))));break;case 19:yt(t,e),vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cs(e,l)));break;case 30:break;case 21:break;default:yt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ju(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,s=vo(e);os(e,s,n);break;case 5:var o=a.stateNode;a.flags&32&&(Ei(o,""),a.flags&=-33);var m=vo(e);os(e,m,o);break;case 3:case 4:var v=a.stateNode.containerInfo,T=vo(e);jo(e,T,v);break;default:throw Error(c(161))}}catch(R){ye(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pu(e,t.alternate,t),t=t.sibling}function xi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fa(4,t,t.return),xi(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Wu(t,t.return,a),xi(t);break;case 27:on(t.stateNode);case 26:case 5:ea(t,t.return),xi(t);break;case 22:t.memoizedState===null&&xi(t);break;case 30:xi(t);break;default:xi(t)}e=e.sibling}}function ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:ya(n,s,a),Il(4,s);break;case 1:if(ya(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(T){ye(l,l.return,T)}if(l=s,n=l.updateQueue,n!==null){var m=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Bd(v[n],m)}catch(T){ye(l,l.return,T)}}a&&o&64&&Zu(s),$l(s,s.return);break;case 27:Iu(s);case 26:case 5:ya(n,s,a),a&&l===null&&o&4&&Ku(s),$l(s,s.return);break;case 12:ya(n,s,a);break;case 31:ya(n,s,a),a&&o&4&&am(n,s);break;case 13:ya(n,s,a),a&&o&4&&im(n,s);break;case 22:s.memoizedState===null&&ya(n,s,a),$l(s,s.return);break;case 30:break;default:ya(n,s,a)}t=t.sibling}}function wo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hl(a))}function So(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e))}function Kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(e,t,a,l),t=t.sibling}function sm(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,a,l),n&2048&&Il(9,t);break;case 1:Kt(e,t,a,l);break;case 3:Kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e)));break;case 12:if(n&2048){Kt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,m=s.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else Kt(e,t,a,l);break;case 31:Kt(e,t,a,l);break;case 13:Kt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Kt(e,t,a,l):Pl(e,t):s._visibility&2?Kt(e,t,a,l):(s._visibility|=2,Ji(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&wo(o,t);break;case 24:Kt(e,t,a,l),n&2048&&So(t.alternate,t);break;default:Kt(e,t,a,l)}}function Ji(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,m=a,v=l,T=o.flags;switch(o.tag){case 0:case 11:case 15:Ji(s,o,m,v,n),Il(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?Ji(s,o,m,v,n):Pl(s,o):(R._visibility|=2,Ji(s,o,m,v,n)),n&&T&2048&&wo(o.alternate,o);break;case 24:Ji(s,o,m,v,n),n&&T&2048&&So(o.alternate,o);break;default:Ji(s,o,m,v,n)}t=t.sibling}}function Pl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Pl(a,l),n&2048&&wo(l.alternate,l);break;case 24:Pl(a,l),n&2048&&So(l.alternate,l);break;default:Pl(a,l)}t=t.sibling}}var en=8192;function Ii(e,t,a){if(e.subtreeFlags&en)for(e=e.child;e!==null;)rm(e,t,a),e=e.sibling}function rm(e,t,a){switch(e.tag){case 26:Ii(e,t,a),e.flags&en&&e.memoizedState!==null&&pp(a,Wt,e.memoizedState,e.memoizedProps);break;case 5:Ii(e,t,a);break;case 3:case 4:var l=Wt;Wt=ws(e.stateNode.containerInfo),Ii(e,t,a),Wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=en,en=16777216,Ii(e,t,a),en=l):Ii(e,t,a));break;default:Ii(e,t,a)}}function om(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,dm(l,e)}om(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cm(e),e=e.sibling}function cm(e){switch(e.tag){case 0:case 11:case 15:tn(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:tn(e);break;case 12:tn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ds(e)):tn(e);break;default:tn(e)}}function ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,dm(l,e)}om(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fa(8,t,t.return),ds(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ds(t));break;default:ds(t)}e=e.sibling}}function dm(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Hl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ie=l;else e:for(a=e;Ie!==null;){l=Ie;var n=l.sibling,s=l.return;if(em(l),l===a){Ie=null;break e}if(n!==null){n.return=s,Ie=n;break e}Ie=s}}}var E0={getCacheForType:function(e){var t=lt(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return lt(Ge).controller.signal}},D0=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ce=null,re=null,de=0,xe=0,At=null,Ga=!1,$i=!1,Co=!1,va=0,Ue=0,La=0,yi=0,zo=0,Et=0,Pi=0,an=null,jt=null,ko=!1,us=0,um=0,ms=1/0,fs=null,qa=null,Ze=0,Ya=null,el=null,ja=0,To=0,Ao=null,mm=null,ln=0,Eo=null;function Dt(){return(pe&2)!==0&&de!==0?de&-de:_.T!==null?Bo():Tc()}function fm(){if(Et===0)if((de&536870912)===0||me){var e=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Et=e}else Et=536870912;return e=kt.current,e!==null&&(e.flags|=32),Et}function Nt(e,t,a){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(tl(e,0),Qa(e,de,Et,!1)),Sl(e,a),((pe&2)===0||e!==Ce)&&(e===Ce&&((pe&2)===0&&(yi|=a),Ue===4&&Qa(e,de,Et,!1)),ta(e))}function hm(e,t,a){if((pe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ka(e,t),n=l?O0(e,t):Ro(e,t,!0),s=l;do{if(n===0){$i&&!l&&Qa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!R0(a)){n=Ro(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;n=an;var v=m.current.memoizedState.isDehydrated;if(v&&(tl(m,o).flags|=256),o=Ro(m,o,!1),o!==2){if(Co&&!v){m.errorRecoveryDisabledLanes|=s,yi|=s,n=4;break e}s=jt,jt=n,s!==null&&(jt===null?jt=s:jt.push.apply(jt,s))}n=o}if(s=!1,n!==2)continue}}if(n===1){tl(e,0),Qa(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Qa(l,t,Et,!Ga);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=us+300-ut(),10<n)){if(Qa(l,t,Et,!Ga),ai(l,0,!0)!==0)break e;ja=t,l.timeoutHandle=Xm(pm.bind(null,l,a,jt,fs,ko,t,Et,yi,Pi,Ga,s,"Throttled",-0,0),n);break e}pm(l,a,jt,fs,ko,t,Et,yi,Pi,Ga,s,null,-0,0)}}break}while(!0);ta(e)}function pm(e,t,a,l,n,s,o,m,v,T,R,U,A,E){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},rm(t,s,U);var X=(s&62914560)===s?us-ut():(s&4194048)===s?um-ut():0;if(X=gp(U,X),X!==null){ja=s,e.cancelPendingCommit=X(wm.bind(null,e,t,s,a,l,n,o,m,v,R,U,null,A,E)),Qa(e,s,o,!T);return}}wm(e,t,s,a,l,n,o,m,v)}function R0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!Ct(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qa(e,t,a,l){t&=~zo,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-P(n),o=1<<s;l[s]=-1,n&=~o}a!==0&&Cc(e,a,t)}function hs(){return(pe&6)===0?(nn(0),!1):!0}function Do(){if(re!==null){if(xe===0)var e=re.return;else e=re,da=di=null,Vr(e),Xi=null,Gl=0,e=re;for(;e!==null;)Vu(e.alternate,e),e=e.return;re=null}}function tl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,Do(),Ce=e,re=a=oa(e.current,null),de=t,xe=0,At=null,Ga=!1,$i=ka(e,t),Co=!1,Pi=Et=zo=yi=La=Ue=0,jt=an=null,ko=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-P(l),s=1<<n;t|=e[n],l&=~s}return va=t,Un(),a}function gm(e,t){te=null,_.H=Wl,t===Qi||t===Yn?(t=Rd(),xe=3):t===Or?(t=Rd(),xe=4):xe=t===oo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,re===null&&(Ue=1,is(e,Ht(t,e.current)))}function bm(){var e=kt.current;return e===null?!0:(de&4194048)===de?qt===null:(de&62914560)===de||(de&536870912)!==0?e===qt:!1}function xm(){var e=_.H;return _.H=Wl,e===null?Wl:e}function ym(){var e=_.A;return _.A=E0,e}function ps(){Ue=4,Ga||(de&4194048)!==de&&kt.current!==null||($i=!0),(La&134217727)===0&&(yi&134217727)===0||Ce===null||Qa(Ce,de,Et,!1)}function Ro(e,t,a){var l=pe;pe|=2;var n=xm(),s=ym();(Ce!==e||de!==t)&&(fs=null,tl(e,t)),t=!1;var o=Ue;e:do try{if(xe!==0&&re!==null){var m=re,v=At;switch(xe){case 8:Do(),o=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var T=xe;if(xe=0,At=null,al(e,m,v,T),a&&$i){o=0;break e}break;default:T=xe,xe=0,At=null,al(e,m,v,T)}}M0(),o=Ue;break}catch(R){gm(e,R)}while(!0);return t&&e.shellSuspendCounter++,da=di=null,pe=l,_.H=n,_.A=s,re===null&&(Ce=null,de=0,Un()),o}function M0(){for(;re!==null;)vm(re)}function O0(e,t){var a=pe;pe|=2;var l=xm(),n=ym();Ce!==e||de!==t?(fs=null,ms=ut()+500,tl(e,t)):$i=ka(e,t);e:do try{if(xe!==0&&re!==null){t=re;var s=At;t:switch(xe){case 1:xe=0,At=null,al(e,t,s,1);break;case 2:case 9:if(Ed(s)){xe=0,At=null,jm(t);break}t=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),ta(e)},s.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Ed(s)?(xe=0,At=null,jm(t)):(xe=0,At=null,al(e,t,s,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var m=re;if(o?rf(o):m.stateNode.complete){xe=0,At=null;var v=m.sibling;if(v!==null)re=v;else{var T=m.return;T!==null?(re=T,gs(T)):re=null}break t}}xe=0,At=null,al(e,t,s,5);break;case 6:xe=0,At=null,al(e,t,s,6);break;case 8:Do(),Ue=6;break e;default:throw Error(c(462))}}U0();break}catch(R){gm(e,R)}while(!0);return da=di=null,_.H=l,_.A=n,pe=a,re!==null?0:(Ce=null,de=0,Un(),Ue)}function U0(){for(;re!==null&&!Zs();)vm(re)}function vm(e){var t=Qu(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?gs(e):re=t}function jm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hu(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Hu(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:Vr(t);default:Vu(a,t),t=re=yd(t,va),t=Qu(a,t,va)}e.memoizedProps=e.pendingProps,t===null?gs(e):re=t}function al(e,t,a,l){da=di=null,Vr(t),Xi=null,Gl=0;var n=t.return;try{if(w0(e,n,t,a,de)){Ue=1,is(e,Ht(a,e.current)),re=null;return}}catch(s){if(n!==null)throw re=n,s;Ue=1,is(e,Ht(a,e.current)),re=null;return}t.flags&32768?(me||l===1?e=!0:$i||(de&536870912)!==0?e=!1:(Ga=e=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Nm(t,e)):gs(t)}function gs(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,Ga);return}e=t.return;var a=z0(t.alternate,t,va);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ue===0&&(Ue=5)}function Nm(e,t){do{var a=k0(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ue=6,re=null}function wm(e,t,a,l,n,s,o,m,v){e.cancelPendingCommit=null;do bs();while(Ze!==0);if((pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=yr,hh(e,a,s,o,m,v),e===Ce&&(re=Ce=null,de=0),el=t,Ya=e,ja=a,To=s,Ao=n,mm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F0(ti,function(){return Tm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=Y.p,Y.p=2,o=pe,pe|=4;try{T0(e,t,a)}finally{pe=o,Y.p=n,_.T=l}}Ze=1,Sm(),Cm(),zm()}}function Sm(){if(Ze===1){Ze=0;var e=Ya,t=el,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=pe;pe|=4;try{lm(t,e);var s=Qo,o=dd(e.containerInfo),m=s.focusedElem,v=s.selectionRange;if(o!==m&&m&&m.ownerDocument&&cd(m.ownerDocument.documentElement,m)){if(v!==null&&hr(m)){var T=v.start,R=v.end;if(R===void 0&&(R=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(R,m.value.length);else{var U=m.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var E=A.getSelection(),X=m.textContent.length,J=Math.min(v.start,X),Se=v.end===void 0?J:Math.min(v.end,X);!E.extend&&J>Se&&(o=Se,Se=J,J=o);var C=od(m,J),j=od(m,Se);if(C&&j&&(E.rangeCount!==1||E.anchorNode!==C.node||E.anchorOffset!==C.offset||E.focusNode!==j.node||E.focusOffset!==j.offset)){var k=U.createRange();k.setStart(C.node,C.offset),E.removeAllRanges(),J>Se?(E.addRange(k),E.extend(j.node,j.offset)):(k.setEnd(j.node,j.offset),E.addRange(k))}}}}for(U=[],E=m;E=E.parentNode;)E.nodeType===1&&U.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<U.length;m++){var O=U[m];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}As=!!Yo,Qo=Yo=null}finally{pe=n,Y.p=l,_.T=a}}e.current=t,Ze=2}}function Cm(){if(Ze===2){Ze=0;var e=Ya,t=el,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=pe;pe|=4;try{Pu(e,t.alternate,t)}finally{pe=n,Y.p=l,_.T=a}}Ze=3}}function zm(){if(Ze===4||Ze===3){Ze=0,Ni();var e=Ya,t=el,a=ja,l=mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,el=Ya=null,km(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(qa=null),Ks(a),t=t.stateNode,F&&typeof F.onCommitFiberRoot=="function")try{F.onCommitFiberRoot(G,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=Y.p,Y.p=2,_.T=null;try{for(var s=e.onRecoverableError,o=0;o<l.length;o++){var m=l[o];s(m.value,{componentStack:m.stack})}}finally{_.T=t,Y.p=n}}(ja&3)!==0&&bs(),ta(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Eo?ln++:(ln=0,Eo=e):ln=0,nn(0)}}function km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hl(t)))}function bs(){return Sm(),Cm(),zm(),Tm()}function Tm(){if(Ze!==5)return!1;var e=Ya,t=To;To=0;var a=Ks(ja),l=_.T,n=Y.p;try{Y.p=32>a?32:a,_.T=null,a=Ao,Ao=null;var s=Ya,o=ja;if(Ze=0,el=Ya=null,ja=0,(pe&6)!==0)throw Error(c(331));var m=pe;if(pe|=4,cm(s.current),sm(s,s.current,o,a),pe=m,nn(0,!1),F&&typeof F.onPostCommitFiberRoot=="function")try{F.onPostCommitFiberRoot(G,s)}catch{}return!0}finally{Y.p=n,_.T=l,km(e,t)}}function Am(e,t,a){t=Ht(a,t),t=ro(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Sl(e,2),ta(e))}function ye(e,t,a){if(e.tag===3)Am(e,e,a);else for(;t!==null;){if(t.tag===3){Am(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qa===null||!qa.has(l))){e=Ht(a,e),a=Eu(2),l=Ba(t,a,2),l!==null&&(Du(a,l,t,e),Sl(l,2),ta(l));break}}t=t.return}}function Mo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new D0;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Co=!0,n.add(a),e=B0.bind(null,e,t,a),t.then(e,e))}function B0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(de&a)===a&&(Ue===4||Ue===3&&(de&62914560)===de&&300>ut()-us?(pe&2)===0&&tl(e,0):zo|=a,Pi===de&&(Pi=0)),ta(e)}function Em(e,t){t===0&&(t=Nl()),e=ri(e,t),e!==null&&(Sl(e,t),ta(e))}function _0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Em(e,a)}function H0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Em(e,a)}function F0(e,t){return xl(e,t)}var xs=null,il=null,Oo=!1,ys=!1,Uo=!1,Xa=0;function ta(e){e!==il&&e.next===null&&(il===null?xs=il=e:il=il.next=e),ys=!0,Oo||(Oo=!0,L0())}function nn(e,t){if(!Uo&&ys){Uo=!0;do for(var a=!1,l=xs;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var o=l.suspendedLanes,m=l.pingedLanes;s=(1<<31-P(42|e)+1)-1,s&=n&~(o&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Om(l,s))}else s=de,s=ai(l,l===Ce?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||ka(l,s)||(a=!0,Om(l,s));l=l.next}while(a);Uo=!1}}function G0(){Dm()}function Dm(){ys=Oo=!1;var e=0;Xa!==0&&I0()&&(e=Xa);for(var t=ut(),a=null,l=xs;l!==null;){var n=l.next,s=Rm(l,t);s===0?(l.next=null,a===null?xs=n:a.next=n,n===null&&(il=a)):(a=l,(e!==0||(s&3)!==0)&&(ys=!0)),l=n}Ze!==0&&Ze!==5||nn(e),Xa!==0&&(Xa=0)}function Rm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-P(s),m=1<<o,v=n[o];v===-1?((m&a)===0||(m&l)!==0)&&(n[o]=jl(m,t)):v<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ce,a=de,a=ai(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ji(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ka(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ji(l),Ks(a)){case 2:case 8:a=wn;break;case 32:a=ti;break;case 268435456:a=wi;break;default:a=ti}return l=Mm.bind(null,e),a=xl(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ji(l),e.callbackPriority=2,e.callbackNode=null,2}function Mm(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bs()&&e.callbackNode!==a)return null;var l=de;return l=ai(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(hm(e,l,t),Rm(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Mm.bind(null,e):null)}function Om(e,t){if(bs())return null;hm(e,t,!0)}function L0(){P0(function(){(pe&6)!==0?xl(Nn,G0):Dm()})}function Bo(){if(Xa===0){var e=qi;e===0&&(e=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Xa=e}return Xa}function Um(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kn(""+e)}function Bm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function q0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=Um((n[gt]||null).action),o=l.submitter;o&&(t=(t=o[gt]||null)?Um(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var m=new Dn("action","action",null,l,n);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var v=o?Bm(n,o):new FormData(n);to(a,{pending:!0,data:v,method:n.method,action:s},null,v)}}else typeof s=="function"&&(m.preventDefault(),v=o?Bm(n,o):new FormData(n),to(a,{pending:!0,data:v,method:n.method,action:s},s,v))},currentTarget:n}]})}}for(var _o=0;_o<xr.length;_o++){var Ho=xr[_o],Y0=Ho.toLowerCase(),Q0=Ho[0].toUpperCase()+Ho.slice(1);Zt(Y0,"on"+Q0)}Zt(fd,"onAnimationEnd"),Zt(hd,"onAnimationIteration"),Zt(pd,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(s0,"onTransitionRun"),Zt(r0,"onTransitionStart"),Zt(o0,"onTransitionCancel"),Zt(gd,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function _m(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var o=l.length-1;0<=o;o--){var m=l[o],v=m.instance,T=m.currentTarget;if(m=m.listener,v!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=T;try{s(n)}catch(R){On(R)}n.currentTarget=null,s=v}else for(o=0;o<l.length;o++){if(m=l[o],v=m.instance,T=m.currentTarget,m=m.listener,v!==s&&n.isPropagationStopped())break e;s=m,n.currentTarget=T;try{s(n)}catch(R){On(R)}n.currentTarget=null,s=v}}}}function oe(e,t){var a=t[Js];a===void 0&&(a=t[Js]=new Set);var l=e+"__bubble";a.has(l)||(Hm(t,e,2,!1),a.add(l))}function Fo(e,t,a){var l=0;t&&(l|=4),Hm(a,e,l,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[vs]){e[vs]=!0,Dc.forEach(function(a){a!=="selectionchange"&&(X0.has(a)||Fo(a,!1,e),Fo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,Fo("selectionchange",!1,t))}}function Hm(e,t,a,l){switch(hf(t)){case 2:var n=yp;break;case 8:n=vp;break;default:n=tc}a=n.bind(null,t,a,e),n=void 0,!nr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Lo(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===n)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;m!==null;){if(o=Ci(m),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=s=o;continue e}m=m.parentNode}}l=l.return}Yc(function(){var T=s,R=ir(a),U=[];e:{var A=bd.get(e);if(A!==void 0){var E=Dn,X=e;switch(e){case"keypress":if(An(a)===0)break e;case"keydown":case"keyup":E=Hh;break;case"focusin":X="focus",E=cr;break;case"focusout":X="blur",E=cr;break;case"beforeblur":case"afterblur":E=cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Lh;break;case fd:case hd:case pd:E=Ah;break;case gd:E=Yh;break;case"scroll":case"scrollend":E=Sh;break;case"wheel":E=Xh;break;case"copy":case"cut":case"paste":E=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Wc;break;case"toggle":case"beforetoggle":E=Zh}var J=(t&4)!==0,Se=!J&&(e==="scroll"||e==="scrollend"),C=J?A!==null?A+"Capture":null:A;J=[];for(var j=T,k;j!==null;){var O=j;if(k=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||k===null||C===null||(O=kl(j,C),O!=null&&J.push(rn(j,O,k))),Se)break;j=j.return}0<J.length&&(A=new E(A,X,null,a,R),U.push({event:A,listeners:J}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",A&&a!==ar&&(X=a.relatedTarget||a.fromElement)&&(Ci(X)||X[Si]))break e;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?(X=a.relatedTarget||a.toElement,E=T,X=X?Ci(X):null,X!==null&&(Se=x(X),J=X.tag,X!==Se||J!==5&&J!==27&&J!==6)&&(X=null)):(E=null,X=T),E!==X)){if(J=Vc,O="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(J=Wc,O="onPointerLeave",C="onPointerEnter",j="pointer"),Se=E==null?A:zl(E),k=X==null?A:zl(X),A=new J(O,j+"leave",E,a,R),A.target=Se,A.relatedTarget=k,O=null,Ci(R)===T&&(J=new J(C,j+"enter",X,a,R),J.target=k,J.relatedTarget=Se,O=J),Se=O,E&&X)t:{for(J=V0,C=E,j=X,k=0,O=C;O;O=J(O))k++;O=0;for(var W=j;W;W=J(W))O++;for(;0<k-O;)C=J(C),k--;for(;0<O-k;)j=J(j),O--;for(;k--;){if(C===j||j!==null&&C===j.alternate){J=C;break t}C=J(C),j=J(j)}J=null}else J=null;E!==null&&Fm(U,A,E,J,!1),X!==null&&Se!==null&&Fm(U,Se,X,J,!0)}}e:{if(A=T?zl(T):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var fe=ad;else if(ed(A))if(id)fe=i0;else{fe=t0;var V=e0}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&tr(T.elementType)&&(fe=ad):fe=a0;if(fe&&(fe=fe(e,T))){td(U,fe,a,R);break e}V&&V(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&er(A,"number",A.value)}switch(V=T?zl(T):window,e){case"focusin":(ed(V)||V.contentEditable==="true")&&(Oi=V,pr=T,Ul=null);break;case"focusout":Ul=pr=Oi=null;break;case"mousedown":gr=!0;break;case"contextmenu":case"mouseup":case"dragend":gr=!1,ud(U,a,R);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":ud(U,a,R)}var ae;if(ur)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Mi?$c(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Kc&&a.locale!=="ko"&&(Mi||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Mi&&(ae=Qc()):(Aa=R,sr="value"in Aa?Aa.value:Aa.textContent,Mi=!0)),V=js(T,ue),0<V.length&&(ue=new Zc(ue,e,null,a,R),U.push({event:ue,listeners:V}),ae?ue.data=ae:(ae=Pc(a),ae!==null&&(ue.data=ae)))),(ae=Kh?Jh(e,a):Ih(e,a))&&(ue=js(T,"onBeforeInput"),0<ue.length&&(V=new Zc("onBeforeInput","beforeinput",null,a,R),U.push({event:V,listeners:ue}),V.data=ae)),q0(U,e,T,a,R)}_m(U,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function js(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=kl(e,a),n!=null&&l.unshift(rn(e,n,s)),n=kl(e,t),n!=null&&l.push(rn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function V0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fm(e,t,a,l,n){for(var s=t._reactName,o=[];a!==null&&a!==l;){var m=a,v=m.alternate,T=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||T===null||(v=T,n?(T=kl(a,s),T!=null&&o.unshift(rn(a,T,v))):n||(T=kl(a,s),T!=null&&o.push(rn(a,T,v)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Z0=/\r\n?/g,W0=/\u0000|\uFFFD/g;function Gm(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(W0,"")}function Lm(e,t){return t=Gm(t),Gm(e)===t}function we(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ei(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ei(e,""+l);break;case"className":Cn(e,"class",l);break;case"tabIndex":Cn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,a,l);break;case"style":Lc(e,l,s);break;case"data":if(t!=="object"){Cn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",n.name,n,null),we(e,t,"formEncType",n.formEncType,n,null),we(e,t,"formMethod",n.formMethod,n,null),we(e,t,"formTarget",n.formTarget,n,null)):(we(e,t,"encType",n.encType,n,null),we(e,t,"method",n.method,n,null),we(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=sa);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Sn(e,"popover",l);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nh.get(a)||a,Sn(e,a,l))}}function qo(e,t,a,l,n,s){switch(a){case"style":Lc(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ei(e,l):(typeof l=="number"||typeof l=="bigint")&&Ei(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[gt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Sn(e,a,l)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,s,o,a,null)}}n&&we(e,t,"srcSet",a.srcSet,a,null),l&&we(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var m=s=o=n=null,v=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":o=R;break;case"checked":v=R;break;case"defaultChecked":T=R;break;case"value":s=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:we(e,t,l,R,a,null)}}_c(e,s,m,v,T,o,n,!1);return;case"select":oe("invalid",e),l=o=s=null;for(n in a)if(a.hasOwnProperty(n)&&(m=a[n],m!=null))switch(n){case"value":s=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:we(e,t,n,m,a,null)}t=s,a=o,e.multiple=!!l,t!=null?Ai(e,!!l,t,!1):a!=null&&Ai(e,!!l,a,!0);return;case"textarea":oe("invalid",e),s=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":n=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:we(e,t,o,m,a,null)}Fc(e,l,n,s);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:we(e,t,v,l,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<sn.length;l++)oe(sn[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,T,l,a,null)}return;default:if(tr(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&qo(e,t,R,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&we(e,t,m,l,a,null))}function K0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,o=null,m=null,v=null,T=null,R=null;for(E in a){var U=a[E];if(a.hasOwnProperty(E)&&U!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":v=U;default:l.hasOwnProperty(E)||we(e,t,E,null,l,U)}}for(var A in l){var E=l[A];if(U=a[A],l.hasOwnProperty(A)&&(E!=null||U!=null))switch(A){case"type":s=E;break;case"name":n=E;break;case"checked":T=E;break;case"defaultChecked":R=E;break;case"value":o=E;break;case"defaultValue":m=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:E!==U&&we(e,t,A,E,l,U)}}Ps(e,o,m,v,T,R,s,n);return;case"select":E=o=m=A=null;for(s in a)if(v=a[s],a.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":E=v;default:l.hasOwnProperty(s)||we(e,t,s,null,l,v)}for(n in l)if(s=l[n],v=a[n],l.hasOwnProperty(n)&&(s!=null||v!=null))switch(n){case"value":A=s;break;case"defaultValue":m=s;break;case"multiple":o=s;default:s!==v&&we(e,t,n,s,l,v)}t=m,a=o,l=E,A!=null?Ai(e,!!a,A,!1):!!l!=!!a&&(t!=null?Ai(e,!!a,t,!0):Ai(e,!!a,a?[]:"",!1));return;case"textarea":E=A=null;for(m in a)if(n=a[m],a.hasOwnProperty(m)&&n!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,l,n)}for(o in l)if(n=l[o],s=a[o],l.hasOwnProperty(o)&&(n!=null||s!=null))switch(o){case"value":A=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==s&&we(e,t,o,n,l,s)}Hc(e,A,E);return;case"option":for(var X in a)if(A=a[X],a.hasOwnProperty(X)&&A!=null&&!l.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:we(e,t,X,null,l,A)}for(v in l)if(A=l[v],E=a[v],l.hasOwnProperty(v)&&A!==E&&(A!=null||E!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:we(e,t,v,A,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)A=a[J],a.hasOwnProperty(J)&&A!=null&&!l.hasOwnProperty(J)&&we(e,t,J,null,l,A);for(T in l)if(A=l[T],E=a[T],l.hasOwnProperty(T)&&A!==E&&(A!=null||E!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:we(e,t,T,A,l,E)}return;default:if(tr(t)){for(var Se in a)A=a[Se],a.hasOwnProperty(Se)&&A!==void 0&&!l.hasOwnProperty(Se)&&qo(e,t,Se,void 0,l,A);for(R in l)A=l[R],E=a[R],!l.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||qo(e,t,R,A,l,E);return}}for(var C in a)A=a[C],a.hasOwnProperty(C)&&A!=null&&!l.hasOwnProperty(C)&&we(e,t,C,null,l,A);for(U in l)A=l[U],E=a[U],!l.hasOwnProperty(U)||A===E||A==null&&E==null||we(e,t,U,A,l,E)}function qm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],s=n.transferSize,o=n.initiatorType,m=n.duration;if(s&&m&&qm(o)){for(o=0,m=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],T=v.startTime;if(T>m)break;var R=v.transferSize,U=v.initiatorType;R&&qm(U)&&(v=v.responseEnd,o+=R*(v<m?1:(m-T)/(v-T)))}if(--l,t+=8*(s+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yo=null,Qo=null;function Ns(e){return e.nodeType===9?e:e.ownerDocument}function Ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=null;function I0(){var e=window.event;return e&&e.type==="popstate"?e===Vo?!1:(Vo=e,!0):(Vo=null,!1)}var Xm=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(ep)}:Xm;function ep(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Zm(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),rl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")on(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,on(a);for(var s=a.firstChild;s;){var o=s.nextSibling,m=s.nodeName;s[Cl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&on(e.ownerDocument.body);a=n}while(a);rl(t)}function Wm(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Zo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zo(a),Is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function ap(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function Km(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function Wo(e){return e.data==="$?"||e.data==="$~"}function Ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ip(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jo=null;function Jm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function $m(e,t,a){switch(t=Ns(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function on(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Is(e)}var Qt=new Map,Pm=new Set;function ws(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=Y.d;Y.d={f:lp,r:np,D:sp,C:rp,L:op,m:cp,X:up,S:dp,M:mp};function lp(){var e=Na.f(),t=hs();return e||t}function np(e){var t=zi(e);t!==null&&t.tag===5&&t.type==="form"?gu(t):Na.r(e)}var ll=typeof document>"u"?null:document;function ef(e,t,a){var l=ll;if(l&&typeof t=="string"&&t){var n=Bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pm.has(n)||(Pm.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),st(t,"link",e),Je(t),l.head.appendChild(t)))}}function sp(e){Na.D(e),ef("dns-prefetch",e,null)}function rp(e,t){Na.C(e,t),ef("preconnect",e,t)}function op(e,t,a){Na.L(e,t,a);var l=ll;if(l&&e&&t){var n='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Bt(a.imageSizes)+'"]')):n+='[href="'+Bt(e)+'"]';var s=n;switch(t){case"style":s=nl(e);break;case"script":s=sl(e)}Qt.has(s)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(cn(s))||t==="script"&&l.querySelector(dn(s))||(t=l.createElement("link"),st(t,"link",e),Je(t),l.head.appendChild(t)))}}function cp(e,t){Na.m(e,t);var a=ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Bt(l)+'"][href="'+Bt(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=sl(e)}if(!Qt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Qt.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dn(s)))return}l=a.createElement("link"),st(l,"link",e),Je(l),a.head.appendChild(l)}}}function dp(e,t,a){Na.S(e,t,a);var l=ll;if(l&&e){var n=ki(l).hoistableStyles,s=nl(e);t=t||"default";var o=n.get(s);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(cn(s)))m.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(s))&&Io(e,a);var v=o=l.createElement("link");Je(v),st(v,"link",e),v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Ss(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:m},n.set(s,o)}}}function up(e,t){Na.X(e,t);var a=ll;if(a&&e){var l=ki(a).hoistableScripts,n=sl(e),s=l.get(n);s||(s=a.querySelector(dn(n)),s||(e=w({src:e,async:!0},t),(t=Qt.get(n))&&$o(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function mp(e,t){Na.M(e,t);var a=ll;if(a&&e){var l=ki(a).hoistableScripts,n=sl(e),s=l.get(n);s||(s=a.querySelector(dn(n)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Qt.get(n))&&$o(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function tf(e,t,a,l){var n=(n=dt.current)?ws(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=nl(a.href),a=ki(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nl(a.href);var s=ki(n).hoistableStyles,o=s.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=n.querySelector(cn(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),s||fp(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=sl(a),a=ki(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function nl(e){return'href="'+Bt(e)+'"'}function cn(e){return'link[rel="stylesheet"]['+e+"]"}function af(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function fp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",a),Je(t),e.head.appendChild(t))}function sl(e){return'[src="'+Bt(e)+'"]'}function dn(e){return"script[async]"+e}function lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(l)return t.instance=l,Je(l),l;var n=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),st(l,"style",n),Ss(l,a.precedence,e),t.instance=l;case"stylesheet":n=nl(a.href);var s=e.querySelector(cn(n));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;l=af(a),(n=Qt.get(n))&&Io(l,n),s=(e.ownerDocument||e).createElement("link"),Je(s);var o=s;return o._p=new Promise(function(m,v){o.onload=m,o.onerror=v}),st(s,"link",l),t.state.loading|=4,Ss(s,a.precedence,e),t.instance=s;case"script":return s=sl(a.src),(n=e.querySelector(dn(s)))?(t.instance=n,Je(n),n):(l=a,(n=Qt.get(s))&&(l=w({},a),$o(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),st(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ss(l,a.precedence,e));return t.instance}function Ss(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===t)s=m;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cs=null;function nf(e,t,a){if(Cs===null){var l=new Map,n=Cs=new Map;n.set(a,l)}else n=Cs,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Cl]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var m=l.get(o);m?m.push(s):l.set(o,[s])}}return l}function sf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function hp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=nl(l.href),s=t.querySelector(cn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Je(s);return}s=t.ownerDocument||t,l=af(l),(n=Qt.get(n))&&Io(l,n),s=s.createElement("link"),Je(s);var o=s;o._p=new Promise(function(m,v){o.onload=m,o.onerror=v}),st(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Po=0;function gp(e,t){return e.stylesheets&&e.count===0&&Ts(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ts(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Po===0&&(Po=62500*J0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ts(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Po?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function zs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ts(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ks=null;function Ts(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ks=new Map,t.forEach(bp,e),ks=null,zs.call(e))}function bp(e,t){if(!(t.state.loading&4)){var a=ks.get(e);if(a)var l=a.get(null);else{a=new Map,ks.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var o=n[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),s=a.get(o)||l,s===l&&a.set(null,n),a.set(o,n),this.count++,l=zs.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var un={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function xp(e,t,a,l,n,s,o,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.hiddenUpdates=wl(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function of(e,t,a,l,n,s,o,m,v,T,R,U){return e=new xp(e,t,a,o,v,T,R,U,m),t=1,s===!0&&(t|=24),s=zt(3,null,null,t),e.current=s,s.stateNode=e,t=Dr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},Ur(s),e}function cf(e){return e?(e=_i,e):_i}function df(e,t,a,l,n,s){n=cf(n),l.context===null?l.context=n:l.pendingContext=n,l=Ua(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=Ba(e,l,t),a!==null&&(Nt(a,e,t),ql(a,e,t))}function uf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ec(e,t){uf(e,t),(e=e.alternate)&&uf(e,t)}function mf(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&Nt(t,e,67108864),ec(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=Dt();t=Ws(t);var a=ri(e,t);a!==null&&Nt(a,e,t),ec(e,t)}}var As=!0;function yp(e,t,a,l){var n=_.T;_.T=null;var s=Y.p;try{Y.p=2,tc(e,t,a,l)}finally{Y.p=s,_.T=n}}function vp(e,t,a,l){var n=_.T;_.T=null;var s=Y.p;try{Y.p=8,tc(e,t,a,l)}finally{Y.p=s,_.T=n}}function tc(e,t,a,l){if(As){var n=ac(l);if(n===null)Lo(e,t,l,Es,a),pf(e,l);else if(Np(n,e,t,a,l))l.stopPropagation();else if(pf(e,l),t&4&&-1<jp.indexOf(e)){for(;n!==null;){var s=zi(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=It(s.pendingLanes);if(o!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var v=1<<31-P(o);m.entanglements[1]|=v,o&=~v}ta(s),(pe&6)===0&&(ms=ut()+500,nn(0))}}break;case 31:case 13:m=ri(s,2),m!==null&&Nt(m,s,2),hs(),ec(s,2)}if(s=ac(l),s===null&&Lo(e,t,l,Es,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else Lo(e,t,l,null,a)}}function ac(e){return e=ir(e),ic(e)}var Es=null;function ic(e){if(Es=null,e=Ci(e),e!==null){var t=x(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Es=e,null}function hf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yl()){case Nn:return 2;case wn:return 8;case ti:case vl:return 32;case wi:return 268435456;default:return 32}default:return 32}}var lc=!1,Za=null,Wa=null,Ka=null,mn=new Map,fn=new Map,Ja=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(t.pointerId)}}function hn(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=zi(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Np(e,t,a,l,n){switch(t){case"focusin":return Za=hn(Za,e,t,a,l,n),!0;case"dragenter":return Wa=hn(Wa,e,t,a,l,n),!0;case"mouseover":return Ka=hn(Ka,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return mn.set(s,hn(mn.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,fn.set(s,hn(fn.get(s)||null,e,t,a,l,n)),!0}return!1}function gf(e){var t=Ci(e.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Ac(e.priority,function(){ff(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,Ac(e.priority,function(){ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ac(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ar=l,a.target.dispatchEvent(l),ar=null}else return t=zi(a),t!==null&&mf(t),e.blockedOn=a,!1;t.shift()}return!0}function bf(e,t,a){Ds(e)&&a.delete(t)}function wp(){lc=!1,Za!==null&&Ds(Za)&&(Za=null),Wa!==null&&Ds(Wa)&&(Wa=null),Ka!==null&&Ds(Ka)&&(Ka=null),mn.forEach(bf),fn.forEach(bf)}function Rs(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,wp)))}var Ms=null;function xf(e){Ms!==e&&(Ms=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Ms===e&&(Ms=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(ic(l||a)===null)continue;break}var s=zi(a);s!==null&&(e.splice(t,3),t-=3,to(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function rl(e){function t(v){return Rs(v,e)}Za!==null&&Rs(Za,e),Wa!==null&&Rs(Wa,e),Ka!==null&&Rs(Ka,e),mn.forEach(t),fn.forEach(t);for(var a=0;a<Ja.length;a++){var l=Ja[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],o=n[gt]||null;if(typeof s=="function")o||xf(a);else if(o){var m=null;if(s&&s.hasAttribute("formAction")){if(n=s,o=s[gt]||null)m=o.formAction;else if(ic(n)!==null)continue}else m=o.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),xf(a)}}}function yf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function nc(e){this._internalRoot=e}Os.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=Dt();df(a,l,e,t,null,null)},Os.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;df(e.current,2,null,e,null,null),hs(),t[Si]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ja.length&&t!==0&&t<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&gf(e)}};var vf=r.version;if(vf!=="19.2.0")throw Error(c(527,vf,"19.2.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Sp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{G=Us.inject(Sp),F=Us}catch{}}return pn.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,l="",n=zu,s=ku,o=Tu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=of(e,1,!1,null,null,a,l,null,n,s,o,yf),e[Si]=t.current,Go(e),new nc(t)},pn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var l=!1,n="",s=zu,o=ku,m=Tu,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=of(e,1,!0,t,a??null,l,n,v,s,o,m,yf),t.context=cf(null),a=t.current,l=Dt(),l=Ws(l),n=Ua(l),n.callback=null,Ba(a,n,l),a=l,t.current.lanes=a,Sl(t,a),ta(t),e[Si]=t.current,Go(e),new Os(t)},pn.version="19.2.0",pn}var zf;function og(){if(zf)return rc.exports;zf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(r){console.error(r)}}return d(),rc.exports=rg(),rc.exports}var cg=og();const dg=Ap(cg);Qf();/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xn(){return xn=Object.assign?Object.assign.bind():function(d){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(d[c]=u[c])}return d},xn.apply(this,arguments)}const vc=S.createContext(null),ug=S.createContext(null),Pa=S.createContext(null),Ys=S.createContext(null),Sa=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Xf=S.createContext(null);function mg(d,r){let{relative:u}=r===void 0?{}:r;ul()||ft(!1);let{basename:c,navigator:f}=S.useContext(Pa),{hash:x,pathname:h,search:z}=Zf(d,{relative:u}),b=h;return c!=="/"&&(b=h==="/"?c:Gs([c,h])),f.createHref({pathname:b,search:z,hash:x})}function ul(){return S.useContext(Ys)!=null}function ml(){return ul()||ft(!1),S.useContext(Ys).location}function Vf(d){S.useContext(Pa).static||S.useLayoutEffect(d)}function fl(){let{isDataRoute:d}=S.useContext(Sa);return d?zg():fg()}function fg(){ul()||ft(!1);let d=S.useContext(vc),{basename:r,future:u,navigator:c}=S.useContext(Pa),{matches:f}=S.useContext(Sa),{pathname:x}=ml(),h=JSON.stringify(xc(f,u.v7_relativeSplatPath)),z=S.useRef(!1);return Vf(()=>{z.current=!0}),S.useCallback(function(y,N){if(N===void 0&&(N={}),!z.current)return;if(typeof y=="number"){c.go(y);return}let w=bc(y,JSON.parse(h),x,N.relative==="path");d==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:Gs([r,w.pathname])),(N.replace?c.replace:c.push)(w,N.state,N)},[r,c,h,x,d])}function hg(){let{matches:d}=S.useContext(Sa),r=d[d.length-1];return r?r.params:{}}function Zf(d,r){let{relative:u}=r===void 0?{}:r,{future:c}=S.useContext(Pa),{matches:f}=S.useContext(Sa),{pathname:x}=ml(),h=JSON.stringify(xc(f,c.v7_relativeSplatPath));return S.useMemo(()=>bc(d,JSON.parse(h),x,u==="path"),[d,h,x,u])}function pg(d,r){return gg(d,r)}function gg(d,r,u,c){ul()||ft(!1);let{navigator:f}=S.useContext(Pa),{matches:x}=S.useContext(Sa),h=x[x.length-1],z=h?h.params:{};h&&h.pathname;let b=h?h.pathnameBase:"/";h&&h.route;let y=ml(),N;if(r){var w;let q=typeof r=="string"?qf(r):r;b==="/"||(w=q.pathname)!=null&&w.startsWith(b)||ft(!1),N=q}else N=y;let D=N.pathname||"/",L=D;if(b!=="/"){let q=b.replace(/^\//,"").split("/");L="/"+D.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=Ep(d,{pathname:L}),M=jg(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},z,q.params),pathname:Gs([b,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?b:Gs([b,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),x,u,c);return r&&M?S.createElement(Ys.Provider,{value:{location:xn({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:Lf.Pop}},M):M}function bg(){let d=Cg(),r=Dp(d)?d.status+" "+d.statusText:d instanceof Error?d.message:JSON.stringify(d),u=d instanceof Error?d.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},r),u?S.createElement("pre",{style:f},u):null,null)}const xg=S.createElement(bg,null);class yg extends S.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){console.error("React Router caught the following error during render",r,u)}render(){return this.state.error!==void 0?S.createElement(Sa.Provider,{value:this.props.routeContext},S.createElement(Xf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vg(d){let{routeContext:r,match:u,children:c}=d,f=S.useContext(vc);return f&&f.static&&f.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=u.route.id),S.createElement(Sa.Provider,{value:r},c)}function jg(d,r,u,c){var f;if(r===void 0&&(r=[]),u===void 0&&(u=null),c===void 0&&(c=null),d==null){var x;if(!u)return null;if(u.errors)d=u.matches;else if((x=c)!=null&&x.v7_partialHydration&&r.length===0&&!u.initialized&&u.matches.length>0)d=u.matches;else return null}let h=d,z=(f=u)==null?void 0:f.errors;if(z!=null){let N=h.findIndex(w=>w.route.id&&z?.[w.route.id]!==void 0);N>=0||ft(!1),h=h.slice(0,Math.min(h.length,N+1))}let b=!1,y=-1;if(u&&c&&c.v7_partialHydration)for(let N=0;N<h.length;N++){let w=h[N];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=N),w.route.id){let{loaderData:D,errors:L}=u,H=w.route.loader&&D[w.route.id]===void 0&&(!L||L[w.route.id]===void 0);if(w.route.lazy||H){b=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((N,w,D)=>{let L,H=!1,M=null,q=null;u&&(L=z&&w.route.id?z[w.route.id]:void 0,M=w.route.errorElement||xg,b&&(y<0&&D===0?(kg("route-fallback"),H=!0,q=null):y===D&&(H=!0,q=w.route.hydrateFallbackElement||null)));let K=r.concat(h.slice(0,D+1)),ee=()=>{let Q;return L?Q=M:H?Q=q:w.route.Component?Q=S.createElement(w.route.Component,null):w.route.element?Q=w.route.element:Q=N,S.createElement(vg,{match:w,routeContext:{outlet:N,matches:K,isDataRoute:u!=null},children:Q})};return u&&(w.route.ErrorBoundary||w.route.errorElement||D===0)?S.createElement(yg,{location:u.location,revalidation:u.revalidation,component:M,error:L,children:ee(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):ee()},null)}var Wf=(function(d){return d.UseBlocker="useBlocker",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d})(Wf||{}),Kf=(function(d){return d.UseBlocker="useBlocker",d.UseLoaderData="useLoaderData",d.UseActionData="useActionData",d.UseRouteError="useRouteError",d.UseNavigation="useNavigation",d.UseRouteLoaderData="useRouteLoaderData",d.UseMatches="useMatches",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d.UseRouteId="useRouteId",d})(Kf||{});function Ng(d){let r=S.useContext(vc);return r||ft(!1),r}function wg(d){let r=S.useContext(ug);return r||ft(!1),r}function Sg(d){let r=S.useContext(Sa);return r||ft(!1),r}function Jf(d){let r=Sg(),u=r.matches[r.matches.length-1];return u.route.id||ft(!1),u.route.id}function Cg(){var d;let r=S.useContext(Xf),u=wg(),c=Jf();return r!==void 0?r:(d=u.errors)==null?void 0:d[c]}function zg(){let{router:d}=Ng(Wf.UseNavigateStable),r=Jf(Kf.UseNavigateStable),u=S.useRef(!1);return Vf(()=>{u.current=!0}),S.useCallback(function(f,x){x===void 0&&(x={}),u.current&&(typeof f=="number"?d.navigate(f):d.navigate(f,xn({fromRouteId:r},x)))},[d,r])}const kf={};function kg(d,r,u){kf[d]||(kf[d]=!0)}function Tg(d,r){d?.v7_startTransition,d?.v7_relativeSplatPath}function If(d){let{to:r,replace:u,state:c,relative:f}=d;ul()||ft(!1);let{future:x,static:h}=S.useContext(Pa),{matches:z}=S.useContext(Sa),{pathname:b}=ml(),y=fl(),N=bc(r,xc(z,x.v7_relativeSplatPath),b,f==="path"),w=JSON.stringify(N);return S.useEffect(()=>y(JSON.parse(w),{replace:u,state:c,relative:f}),[y,w,f,u,c]),null}function Mt(d){ft(!1)}function Ag(d){let{basename:r="/",children:u=null,location:c,navigationType:f=Lf.Pop,navigator:x,static:h=!1,future:z}=d;ul()&&ft(!1);let b=r.replace(/^\/*/,"/"),y=S.useMemo(()=>({basename:b,navigator:x,static:h,future:xn({v7_relativeSplatPath:!1},z)}),[b,z,x,h]);typeof c=="string"&&(c=qf(c));let{pathname:N="/",search:w="",hash:D="",state:L=null,key:H="default"}=c,M=S.useMemo(()=>{let q=Yf(N,b);return q==null?null:{location:{pathname:q,search:w,hash:D,state:L,key:H},navigationType:f}},[b,N,w,D,L,H,f]);return M==null?null:S.createElement(Pa.Provider,{value:y},S.createElement(Ys.Provider,{children:u,value:M}))}function Eg(d){let{children:r,location:u}=d;return pg(fc(r),u)}new Promise(()=>{});function fc(d,r){r===void 0&&(r=[]);let u=[];return S.Children.forEach(d,(c,f)=>{if(!S.isValidElement(c))return;let x=[...r,f];if(c.type===S.Fragment){u.push.apply(u,fc(c.props.children,x));return}c.type!==Mt&&ft(!1),!c.props.index||!c.props.children||ft(!1);let h={id:c.props.id||x.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=fc(c.props.children,x)),u.push(h)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(d){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(d[c]=u[c])}return d},hc.apply(this,arguments)}function Dg(d,r){if(d==null)return{};var u={},c=Object.keys(d),f,x;for(x=0;x<c.length;x++)f=c[x],!(r.indexOf(f)>=0)&&(u[f]=d[f]);return u}function Rg(d){return!!(d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)}function Mg(d,r){return d.button===0&&(!r||r==="_self")&&!Rg(d)}const Og=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ug="6";try{window.__reactRouterVersion=Ug}catch{}const Bg="startTransition",Tf=Mp[Bg];function _g(d){let{basename:r,children:u,future:c,window:f}=d,x=S.useRef();x.current==null&&(x.current=Rp({window:f,v5Compat:!0}));let h=x.current,[z,b]=S.useState({action:h.action,location:h.location}),{v7_startTransition:y}=c||{},N=S.useCallback(w=>{y&&Tf?Tf(()=>b(w)):b(w)},[b,y]);return S.useLayoutEffect(()=>h.listen(N),[h,N]),S.useEffect(()=>Tg(c),[c]),S.createElement(Ag,{basename:r,children:u,location:z.location,navigationType:z.action,navigator:h,future:c})}const Hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=S.forwardRef(function(r,u){let{onClick:c,relative:f,reloadDocument:x,replace:h,state:z,target:b,to:y,preventScrollReset:N,viewTransition:w}=r,D=Dg(r,Og),{basename:L}=S.useContext(Pa),H,M=!1;if(typeof y=="string"&&Fg.test(y)&&(H=y,Hg))try{let Q=new URL(window.location.href),Z=y.startsWith("//")?new URL(Q.protocol+y):new URL(y),ie=Yf(Z.pathname,L);Z.origin===Q.origin&&ie!=null?y=ie+Z.search+Z.hash:M=!0}catch{}let q=mg(y,{relative:f}),K=Gg(y,{replace:h,state:z,target:b,preventScrollReset:N,relative:f,viewTransition:w});function ee(Q){c&&c(Q),Q.defaultPrevented||K(Q)}return S.createElement("a",hc({},D,{href:H||q,onClick:M||x?c:ee,ref:u,target:b}))});var Af;(function(d){d.UseScrollRestoration="useScrollRestoration",d.UseSubmit="useSubmit",d.UseSubmitFetcher="useSubmitFetcher",d.UseFetcher="useFetcher",d.useViewTransitionState="useViewTransitionState"})(Af||(Af={}));var Ef;(function(d){d.UseFetcher="useFetcher",d.UseFetchers="useFetchers",d.UseScrollRestoration="useScrollRestoration"})(Ef||(Ef={}));function Gg(d,r){let{target:u,replace:c,state:f,preventScrollReset:x,relative:h,viewTransition:z}=r===void 0?{}:r,b=fl(),y=ml(),N=Zf(d,{relative:h});return S.useCallback(w=>{if(Mg(w,u)){w.preventDefault();let D=c!==void 0?c:jf(y)===jf(N);b(d,{replace:D,state:f,preventScrollReset:x,relative:h,viewTransition:z})}},[y,b,N,c,f,u,d,x,h,z])}const Lg={apiKey:"AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",authDomain:"venkateshaluminiumcalc.firebaseapp.com",projectId:"venkateshaluminiumcalc",storageBucket:"venkateshaluminiumcalc.firebasestorage.app",messagingSenderId:"383864958193",appId:"1:383864958193:web:9ea57f9d944cd537f20d50",measurementId:"G-LLHR3CH0WE"};console.log("🔥 Firebase initializing...");const Qs=Op(Lg);console.log("🔥 Firebase app initialized successfully");const ol=Up(Qs),wt=Bp(Qs);_p(Qs);console.log("✅ Firebase services ready");typeof window<"u"&&Hp().then(d=>{d&&(Fp(Qs),console.log("📊 Firebase Analytics initialized"))}).catch(d=>{console.log("Analytics not supported:",d)});console.log("✅ Firebase services initialized successfully");const $f=S.createContext(void 0);function qg({children:d}){const[r,u]=S.useState(null),[c,f]=S.useState(null),[x,h]=S.useState(!0);S.useEffect(()=>{let H;try{H=Gp(ol,async q=>{if(u(q),q)try{const K=await yc(Xt(wt,"users",q.uid));if(K.exists())f(K.data());else{const ee={uid:q.uid,email:q.email,displayName:q.displayName||void 0,photoURL:q.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()};await mc(Xt(wt,"users",q.uid),ee),f(ee)}}catch(K){console.warn("Firestore not configured properly:",K),f({uid:q.uid,email:q.email,displayName:q.displayName||void 0,photoURL:q.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()})}else f(null);h(!1)})}catch(q){console.warn("Firebase Auth not configured properly:",q),h(!1)}const M=setTimeout(()=>{console.warn("Auth initialization timeout - setting loading to false"),h(!1)},5e3);return()=>{H&&H(),clearTimeout(M)}},[]);const L={user:r,userProfile:c,loading:x,signIn:async(H,M)=>{try{await Zp(ol,H,M),console.log("✅ User signed in successfully")}catch(q){throw console.error("❌ Sign in failed:",q.code),q}},signUp:async(H,M,q)=>{try{const{user:K}=await Xp(ol,H,M);q&&K&&await Vp(K,{displayName:q})}catch(K){throw console.error("Sign up error:",K),K}},signInWithGoogle:async()=>{try{const H=new Yp;H.setCustomParameters({prompt:"select_account"}),await Qp(ol,H)}catch(H){if(console.error("Google sign in error:",H),H?.code==="auth/unauthorized-domain"){const M=window.location.hostname;throw new Error(`🔒 Domain not authorized

The domain "${M}" needs to be added to Firebase.

Please add it in:
Firebase Console → Authentication → Settings → Authorized domains`)}if(H?.code==="auth/popup-closed-by-user"){console.log("User closed the popup");return}throw H}},logout:async()=>{try{await qp(ol)}catch(H){throw console.error("Sign out error:",H),H}},resetPassword:async H=>{try{await Lp(ol,H),console.log("✅ Password reset email sent")}catch(M){throw console.error("Password reset error:",M),M}},updateUserProfile:async H=>{if(!r||!c)throw new Error("No user logged in");const M={...c,...H,updatedAt:Date.now()};await mc(Xt(wt,"users",r.uid),M),f(M)}};return i.jsx($f.Provider,{value:L,children:d})}function ht(){const d=S.useContext($f);if(d===void 0)throw new Error("useAuth must be used within an AuthProvider");return d}const Yg=S.createContext(void 0),Qg=({children:d})=>{const[r,u]=S.useState(()=>{const f=localStorage.getItem("estimatix-theme");return f==="light"||f==="dark"?f:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});S.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("estimatix-theme",r)},[r]),S.useEffect(()=>{const f=window.matchMedia("(prefers-color-scheme: dark)"),x=h=>{localStorage.getItem("estimatix-theme")||u(h.matches?"dark":"light")};return f.addEventListener("change",x),()=>f.removeEventListener("change",x)},[]);const c=()=>{u(f=>f==="light"?"dark":"light")};return i.jsx(Yg.Provider,{value:{theme:r,toggleTheme:c,isDark:r==="dark"},children:d})};var Xg=d=>typeof d=="function",qs=(d,r)=>Xg(d)?d(r):d,Vg=(()=>{let d=0;return()=>(++d).toString()})(),Pf=(()=>{let d;return()=>{if(d===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");d=!r||r.matches}return d}})(),Zg=20,jc="default",eh=(d,r)=>{let{toastLimit:u}=d.settings;switch(r.type){case 0:return{...d,toasts:[r.toast,...d.toasts].slice(0,u)};case 1:return{...d,toasts:d.toasts.map(h=>h.id===r.toast.id?{...h,...r.toast}:h)};case 2:let{toast:c}=r;return eh(d,{type:d.toasts.find(h=>h.id===c.id)?1:0,toast:c});case 3:let{toastId:f}=r;return{...d,toasts:d.toasts.map(h=>h.id===f||f===void 0?{...h,dismissed:!0,visible:!1}:h)};case 4:return r.toastId===void 0?{...d,toasts:[]}:{...d,toasts:d.toasts.filter(h=>h.id!==r.toastId)};case 5:return{...d,pausedAt:r.time};case 6:let x=r.time-(d.pausedAt||0);return{...d,pausedAt:void 0,toasts:d.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+x}))}}},Hs=[],th={toasts:[],pausedAt:void 0,settings:{toastLimit:Zg}},aa={},ah=(d,r=jc)=>{aa[r]=eh(aa[r]||th,d),Hs.forEach(([u,c])=>{u===r&&c(aa[r])})},ih=d=>Object.keys(aa).forEach(r=>ah(d,r)),Wg=d=>Object.keys(aa).find(r=>aa[r].toasts.some(u=>u.id===d)),Xs=(d=jc)=>r=>{ah(r,d)},Kg={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Jg=(d={},r=jc)=>{let[u,c]=S.useState(aa[r]||th),f=S.useRef(aa[r]);S.useEffect(()=>(f.current!==aa[r]&&c(aa[r]),Hs.push([r,c]),()=>{let h=Hs.findIndex(([z])=>z===r);h>-1&&Hs.splice(h,1)}),[r]);let x=u.toasts.map(h=>{var z,b,y;return{...d,...d[h.type],...h,removeDelay:h.removeDelay||((z=d[h.type])==null?void 0:z.removeDelay)||d?.removeDelay,duration:h.duration||((b=d[h.type])==null?void 0:b.duration)||d?.duration||Kg[h.type],style:{...d.style,...(y=d[h.type])==null?void 0:y.style,...h.style}}});return{...u,toasts:x}},Ig=(d,r="blank",u)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:d,pauseDuration:0,...u,id:u?.id||Vg()}),yn=d=>(r,u)=>{let c=Ig(r,d,u);return Xs(c.toasterId||Wg(c.id))({type:2,toast:c}),c.id},We=(d,r)=>yn("blank")(d,r);We.error=yn("error");We.success=yn("success");We.loading=yn("loading");We.custom=yn("custom");We.dismiss=(d,r)=>{let u={type:3,toastId:d};r?Xs(r)(u):ih(u)};We.dismissAll=d=>We.dismiss(void 0,d);We.remove=(d,r)=>{let u={type:4,toastId:d};r?Xs(r)(u):ih(u)};We.removeAll=d=>We.remove(void 0,d);We.promise=(d,r,u)=>{let c=We.loading(r.loading,{...u,...u?.loading});return typeof d=="function"&&(d=d()),d.then(f=>{let x=r.success?qs(r.success,f):void 0;return x?We.success(x,{id:c,...u,...u?.success}):We.dismiss(c),f}).catch(f=>{let x=r.error?qs(r.error,f):void 0;x?We.error(x,{id:c,...u,...u?.error}):We.dismiss(c)}),d};var $g=1e3,Pg=(d,r="default")=>{let{toasts:u,pausedAt:c}=Jg(d,r),f=S.useRef(new Map).current,x=S.useCallback((w,D=$g)=>{if(f.has(w))return;let L=setTimeout(()=>{f.delete(w),h({type:4,toastId:w})},D);f.set(w,L)},[]);S.useEffect(()=>{if(c)return;let w=Date.now(),D=u.map(L=>{if(L.duration===1/0)return;let H=(L.duration||0)+L.pauseDuration-(w-L.createdAt);if(H<0){L.visible&&We.dismiss(L.id);return}return setTimeout(()=>We.dismiss(L.id,r),H)});return()=>{D.forEach(L=>L&&clearTimeout(L))}},[u,c,r]);let h=S.useCallback(Xs(r),[r]),z=S.useCallback(()=>{h({type:5,time:Date.now()})},[h]),b=S.useCallback((w,D)=>{h({type:1,toast:{id:w,height:D}})},[h]),y=S.useCallback(()=>{c&&h({type:6,time:Date.now()})},[c,h]),N=S.useCallback((w,D)=>{let{reverseOrder:L=!1,gutter:H=8,defaultPosition:M}=D||{},q=u.filter(Q=>(Q.position||M)===(w.position||M)&&Q.height),K=q.findIndex(Q=>Q.id===w.id),ee=q.filter((Q,Z)=>Z<K&&Q.visible).length;return q.filter(Q=>Q.visible).slice(...L?[ee+1]:[0,ee]).reduce((Q,Z)=>Q+(Z.height||0)+H,0)},[u]);return S.useEffect(()=>{u.forEach(w=>{if(w.dismissed)x(w.id,w.removeDelay);else{let D=f.get(w.id);D&&(clearTimeout(D),f.delete(w.id))}})},[u,x]),{toasts:u,handlers:{updateHeight:b,startPause:z,endPause:y,calculateOffset:N}}},eb=wa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,tb=wa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ab=wa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ib=$a("div")`
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
`,lb=wa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nb=$a("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${d=>d.secondary||"#e0e0e0"};
  border-right-color: ${d=>d.primary||"#616161"};
  animation: ${lb} 1s linear infinite;
`,sb=wa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rb=wa`
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
}`,ob=$a("div")`
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
`,cb=$a("div")`
  position: absolute;
`,db=$a("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ub=wa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mb=$a("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ub} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,fb=({toast:d})=>{let{icon:r,type:u,iconTheme:c}=d;return r!==void 0?typeof r=="string"?S.createElement(mb,null,r):r:u==="blank"?null:S.createElement(db,null,S.createElement(nb,{...c}),u!=="loading"&&S.createElement(cb,null,u==="error"?S.createElement(ib,{...c}):S.createElement(ob,{...c})))},hb=d=>`
0% {transform: translate3d(0,${d*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pb=d=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${d*-150}%,-1px) scale(.6); opacity:0;}
`,gb="0%{opacity:0;} 100%{opacity:1;}",bb="0%{opacity:1;} 100%{opacity:0;}",xb=$a("div")`
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
`,yb=$a("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,vb=(d,r)=>{let u=d.includes("top")?1:-1,[c,f]=Pf()?[gb,bb]:[hb(u),pb(u)];return{animation:r?`${wa(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wa(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jb=S.memo(({toast:d,position:r,style:u,children:c})=>{let f=d.height?vb(d.position||r||"top-center",d.visible):{opacity:0},x=S.createElement(fb,{toast:d}),h=S.createElement(yb,{...d.ariaProps},qs(d.message,d));return S.createElement(xb,{className:d.className,style:{...f,...u,...d.style}},typeof c=="function"?c({icon:x,message:h}):S.createElement(S.Fragment,null,x,h))});Kp(S.createElement);var Nb=({id:d,className:r,style:u,onHeightUpdate:c,children:f})=>{let x=S.useCallback(h=>{if(h){let z=()=>{let b=h.getBoundingClientRect().height;c(d,b)};z(),new MutationObserver(z).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[d,c]);return S.createElement("div",{ref:x,className:r,style:u},f)},wb=(d,r)=>{let u=d.includes("top"),c=u?{top:0}:{bottom:0},f=d.includes("center")?{justifyContent:"center"}:d.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pf()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(u?1:-1)}px)`,...c,...f}},Sb=Wp`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Bs=16,Nc=({reverseOrder:d,position:r="top-center",toastOptions:u,gutter:c,children:f,toasterId:x,containerStyle:h,containerClassName:z})=>{let{toasts:b,handlers:y}=Pg(u,x);return S.createElement("div",{"data-rht-toaster":x||"",style:{position:"fixed",zIndex:9999,top:Bs,left:Bs,right:Bs,bottom:Bs,pointerEvents:"none",...h},className:z,onMouseEnter:y.startPause,onMouseLeave:y.endPause},b.map(N=>{let w=N.position||r,D=y.calculateOffset(N,{reverseOrder:d,gutter:c,defaultPosition:r}),L=wb(w,D);return S.createElement(Nb,{id:N.id,key:N.id,onHeightUpdate:y.updateHeight,className:N.visible?Sb:"",style:L},N.type==="custom"?qs(N.message,N):f?f(N):S.createElement(jb,{toast:N,position:w}))}))},Re=We;const lh=()=>i.jsxs("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[i.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),i.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),i.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),i.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),wc=()=>i.jsx("style",{children:`
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
  `});function Cb(){const[d,r]=S.useState(""),[u,c]=S.useState(""),[f,x]=S.useState(!1),[h,z]=S.useState(!1),[b,y]=S.useState(!1),{signIn:N,signInWithGoogle:w}=ht(),D=fl(),L=async M=>{M.preventDefault(),z(!0);const q=Re.loading("Signing in...");try{await N(d,u),Re.success("Welcome back! 🎉",{id:q}),D("/dashboard")}catch(K){const ee=K.message||"Failed to sign in";Re.error(ee,{id:q})}finally{z(!1)}},H=async()=>{z(!0);const M=Re.loading("Signing in with Google...");try{await w(),Re.success("Welcome! 🎉",{id:M}),D("/dashboard")}catch(q){const K=q.message||"Failed to sign in with Google";Re.error(K,{id:M})}finally{z(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx(Nc,{position:"top-center"}),i.jsx(wc,{}),i.jsx("div",{className:"premium-page-background"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),i.jsx("div",{className:"premium-vignette"}),i.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),i.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:i.jsxs(se.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[i.jsx("div",{className:"premium-logo-pulse"}),i.jsx("div",{className:"premium-logo-icon",children:i.jsx("i",{className:"bi bi-calculator"})})]}),i.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),i.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Welcome Back 👋"}),i.jsx("p",{className:"small premium-text-secondary",children:"Sign in to access your professional workspace"})]}),i.jsxs("form",{onSubmit:L,children:[i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),i.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:M=>r(M.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-lock"}),"Password"]}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("input",{type:f?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Enter your password",value:u,onChange:M=>c(M.target.value),required:!0,autoComplete:"current-password",style:{paddingRight:"3rem"}}),i.jsx("button",{type:"button",onClick:()=>x(!f),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:i.jsx("i",{className:`bi ${f?"bi-eye-slash":"bi-eye"}`})})]})]}),i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("input",{type:"checkbox",className:"premium-form-check-input",id:"rememberMe",checked:b,onChange:M=>y(M.target.checked)}),i.jsx("label",{className:"premium-form-check-label small",htmlFor:"rememberMe",children:"Remember me"})]}),i.jsx(ge,{to:"/forgot-password",className:"small premium-link",children:"Forgot password?"})]}),i.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:h,children:h?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Signing in..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),"Sign In"]})})]}),i.jsxs("div",{className:"premium-divider",children:[i.jsx("div",{className:"premium-divider-line"}),i.jsx("span",{className:"premium-divider-text",children:"or continue with"}),i.jsx("div",{className:"premium-divider-line"})]}),i.jsxs("button",{type:"button",onClick:H,className:"btn premium-btn-secondary",disabled:h,children:[i.jsx(lh,{}),i.jsx("span",{children:"Sign in with Google"})]}),i.jsx("div",{className:"text-center mt-4",children:i.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Don't have an account?"," ",i.jsx(ge,{to:"/signup",className:"premium-link fw-semibold",children:"Sign up"})]})}),i.jsx("div",{className:"text-center mt-3",children:i.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function zb(){const[d,r]=S.useState(""),[u,c]=S.useState(""),[f,x]=S.useState(""),[h,z]=S.useState(""),[b,y]=S.useState(!1),[N,w]=S.useState(!1),[D,L]=S.useState(!1),[H,M]=S.useState(!1),{signUp:q,signInWithGoogle:K}=ht(),ee=fl(),Q=async ie=>{if(ie.preventDefault(),f!==h){Re.error("Passwords do not match");return}if(f.length<6){Re.error("Password must be at least 6 characters");return}if(!H){Re.error("Please agree to the Terms and Conditions");return}L(!0);const He=Re.loading("Creating your account...");try{await q(u,f,d),Re.success("Account created successfully! 🎉",{id:He}),ee("/dashboard")}catch(Ee){const Fe=Ee.message||"Failed to create account";Re.error(Fe,{id:He})}finally{L(!1)}},Z=async()=>{if(!H){Re.error("Please agree to the Terms and Conditions");return}L(!0);const ie=Re.loading("Signing up with Google...");try{await K(),Re.success("Welcome to Estimatix! 🎉",{id:ie}),ee("/dashboard")}catch(He){const Ee=He.message||"Failed to sign up with Google";Re.error(Ee,{id:ie})}finally{L(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx(Nc,{position:"top-center"}),i.jsx(wc,{}),i.jsx("div",{className:"premium-page-background"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),i.jsx("div",{className:"premium-vignette"}),i.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),i.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:i.jsxs(se.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",style:{maxWidth:"440px"},children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[i.jsx("div",{className:"premium-logo-pulse"}),i.jsx("div",{className:"premium-logo-icon",children:i.jsx("i",{className:"bi bi-calculator"})})]}),i.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),i.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Create Account 🚀"}),i.jsx("p",{className:"small premium-text-secondary",children:"Join Estimatix and start calculating estimates like a pro"})]}),i.jsxs("form",{onSubmit:Q,children:[i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"name",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-person"}),"Full Name"]}),i.jsx("input",{type:"text",className:"form-control premium-form-control",id:"name",placeholder:"John Doe",value:d,onChange:ie=>r(ie.target.value),required:!0,autoComplete:"name",autoFocus:!0})]}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),i.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:u,onChange:ie=>c(ie.target.value),required:!0,autoComplete:"email"})]}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-lock"}),"Password"]}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("input",{type:b?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Minimum 6 characters",value:f,onChange:ie=>x(ie.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),i.jsx("button",{type:"button",onClick:()=>y(!b),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:i.jsx("i",{className:`bi ${b?"bi-eye-slash":"bi-eye"}`})})]})]}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{htmlFor:"confirmPassword",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-lock-fill"}),"Confirm Password"]}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("input",{type:N?"text":"password",className:"form-control premium-form-control",id:"confirmPassword",placeholder:"Re-enter your password",value:h,onChange:ie=>z(ie.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),i.jsx("button",{type:"button",onClick:()=>w(!N),className:"premium-password-toggle","aria-label":"Toggle confirm password visibility",children:i.jsx("i",{className:`bi ${N?"bi-eye-slash":"bi-eye"}`})})]})]}),i.jsx("div",{className:"mb-4",children:i.jsxs("div",{className:"d-flex align-items-start gap-2",children:[i.jsx("input",{type:"checkbox",className:"premium-form-check-input mt-1",id:"agreeTerms",checked:H,onChange:ie=>M(ie.target.checked),required:!0}),i.jsxs("label",{className:"premium-form-check-label small",htmlFor:"agreeTerms",children:["I agree to the"," ",i.jsx("a",{href:"#",className:"premium-link",children:"Terms and Conditions"})]})]})}),i.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:D,style:{background:"linear-gradient(90deg, #10B981, #14B8A6)"},children:D?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Creating Account..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-person-plus me-2"}),"Create Account"]})})]}),i.jsxs("div",{className:"premium-divider",children:[i.jsx("div",{className:"premium-divider-line"}),i.jsx("span",{className:"premium-divider-text",children:"or continue with"}),i.jsx("div",{className:"premium-divider-line"})]}),i.jsxs("button",{type:"button",onClick:Z,className:"btn premium-btn-secondary",disabled:D,children:[i.jsx(lh,{}),i.jsx("span",{children:"Sign up with Google"})]}),i.jsx("div",{className:"text-center mt-4",children:i.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Already have an account?"," ",i.jsx(ge,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),i.jsx("div",{className:"text-center mt-3",children:i.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function kb(){const[d,r]=S.useState(""),[u,c]=S.useState(!1),[f,x]=S.useState(!1),{resetPassword:h}=ht(),z=async b=>{b.preventDefault(),x(!1),c(!0);const y=Re.loading("Sending reset link...");try{await h(d),x(!0),Re.success("Password reset link sent to your email! 📧",{id:y})}catch(N){const w=N.message||"Failed to send reset link";Re.error(w,{id:y})}finally{c(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx(Nc,{position:"top-center"}),i.jsx(wc,{}),i.jsx("div",{className:"premium-page-background"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),i.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),i.jsx("div",{className:"premium-vignette"}),i.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),i.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:i.jsxs(se.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[i.jsx("div",{className:"premium-logo-pulse"}),i.jsx("div",{className:"premium-logo-icon",children:i.jsx("i",{className:"bi bi-key"})})]}),i.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),i.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Reset Password 🔑"}),i.jsx("p",{className:"small premium-text-secondary",children:"Enter your email address and we'll send you a link to reset your password"})]}),i.jsx(Ls,{children:f&&i.jsxs(se.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"alert mb-4",style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#6EE7B7",borderRadius:"0.75rem"},children:[i.jsx("i",{className:"bi bi-check-circle me-2"}),"Check your email for the password reset link!"]})}),!f&&i.jsxs("form",{onSubmit:z,children:[i.jsxs("div",{className:"mb-4",children:[i.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),i.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:d,onChange:b=>r(b.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),i.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:u,style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:u?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Sending Link..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-send me-2"}),"Send Reset Link"]})})]}),f&&i.jsx("div",{className:"text-center",children:i.jsxs(ge,{to:"/login",className:"btn premium-btn-primary",style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back to Sign In"]})}),i.jsx("div",{className:"text-center mt-4",children:i.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Remember your password?"," ",i.jsx(ge,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),i.jsx("div",{className:"text-center mt-3",children:i.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}class Tb{quotationsCollection="quotations";async saveQuotation(r){try{const u={...r,createdAt:sc(),updatedAt:sc()},c=await Jp(Nf(wt,this.quotationsCollection),u);return console.log("Quotation saved with ID:",c.id),c.id}catch(u){throw console.error("Error saving quotation:",u),new Error("Failed to save quotation")}}async updateQuotation(r,u){try{const c=Xt(wt,this.quotationsCollection,r);await gn(c,{...u,updatedAt:sc()}),console.log("Quotation updated:",r)}catch(c){throw console.error("Error updating quotation:",c),new Error("Failed to update quotation")}}async deleteQuotation(r){try{const u=Xt(wt,this.quotationsCollection,r);await Ip(u),console.log("Quotation deleted:",r)}catch(u){throw console.error("Error deleting quotation:",u),new Error("Failed to delete quotation")}}async getQuotation(r){try{const u=Xt(wt,this.quotationsCollection,r),c=await yc(u);return c.exists()?{id:c.id,...c.data()}:null}catch(u){throw console.error("Error getting quotation:",u),new Error("Failed to get quotation")}}async getUserQuotations(r,u=50){try{const c=$p(Nf(wt,this.quotationsCollection),Pp("userId","==",r),eg(u)),f=await tg(c),x=[];return f.forEach(h=>{x.push({id:h.id,...h.data()})}),x.sort((h,z)=>{const b=h.createdAt instanceof bn?h.createdAt.toDate():new Date(h.createdAt);return(z.createdAt instanceof bn?z.createdAt.toDate():new Date(z.createdAt)).getTime()-b.getTime()}),console.log(`✅ Loaded ${x.length} quotations (client-side sorting)`),x}catch(c){return console.error("Error getting user quotations:",c),[]}}async getQuotationsByStatus(r,u){try{const f=(await this.getUserQuotations(r,100)).filter(x=>x.status===u);return console.log(`✅ Found ${f.length} quotations with status: ${u}`),f}catch(c){return console.error("Error getting quotations by status:",c),[]}}async searchQuotations(r,u){try{const c=await this.getUserQuotations(r,100),f=u.toLowerCase();return c.filter(x=>x.customerName.toLowerCase().includes(f)||x.quotationId.toLowerCase().includes(f)||x.customerPhone.includes(u)||x.customerEmail.toLowerCase().includes(f))}catch(c){throw console.error("Error searching quotations:",c),new Error("Failed to search quotations")}}async getQuotationStats(r){try{const u=await this.getUserQuotations(r,1e3),c=new Date,f=new Date(c.getFullYear(),c.getMonth(),1),x={totalQuotations:u.length,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0};return u.forEach(h=>{x.totalValue+=h.grandTotal,(h.status==="sent"||h.status==="draft")&&x.pendingQuotations++,(h.status==="approved"||h.status==="completed")&&x.approvedQuotations++,(h.createdAt instanceof bn?h.createdAt.toDate():new Date(h.createdAt))>=f&&(x.thisMonthQuotations++,x.thisMonthValue+=h.grandTotal)}),x}catch(u){return console.error("Error getting quotation stats:",u),{totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}}}async getRecentQuotations(r,u=10){try{const c=await this.getUserQuotations(r,u);return console.log(`✅ Loaded ${c.length} recent quotations`),c}catch(c){return console.error("Error getting recent quotations:",c),[]}}async generateQuotationId(r){try{const u=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),c=await this.getUserQuotations(r,1e3),f=new Date().getFullYear(),x=c.filter(y=>(y.createdAt instanceof bn?y.createdAt.toDate():new Date(y.createdAt)).getFullYear()===f);let h=0;x.forEach(y=>{const N=y.quotationId.match(/(\d+)$/);if(N){const w=parseInt(N[1]);w>h&&(h=w)}});const z=h+1,b=`${u.prefix}${f}-${z.toString().padStart(3,"0")}`;return u.currentSequence=z,u.currentYear=f,localStorage.setItem("admin_invoice_settings",JSON.stringify(u)),b}catch(u){return console.error("Error generating quotation ID:",u),`QUOT-${Date.now()}`}}}const cl=new Tb;function _s({value:d,duration:r=2e3,prefix:u="",suffix:c=""}){const[f,x]=S.useState(0);return S.useEffect(()=>{let h=null,z;const b=y=>{h||(h=y);const N=Math.min((y-h)/r,1);x(Math.floor(N*d)),N<1&&(z=requestAnimationFrame(b))};return z=requestAnimationFrame(b),()=>cancelAnimationFrame(z)},[d,r]),i.jsxs("span",{children:[u,f.toLocaleString(),c]})}function Df(){const{user:d,userProfile:r}=ht(),[u,c]=S.useState(!1),[f,x]=S.useState({totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}),[h,z]=S.useState([]),b=()=>{const w=new Date().getHours();return w<12?"Good morning":w<17?"Good afternoon":"Good evening"};S.useEffect(()=>{(async()=>{if(d?.uid)try{const D=await cl.getQuotationStats(d.uid);x(D);const L=await cl.getRecentQuotations(d.uid,4);z(L)}catch(D){console.error("Error loading dashboard data:",D)}})()},[d?.uid]);const y=w=>{const D=new Date,L=w instanceof bn?w.toDate():new Date(w),H=D.getTime()-L.getTime(),M=Math.floor(H/6e4),q=Math.floor(H/36e5),K=Math.floor(H/864e5);return M<1?"Just now":M<60?`${M} minute${M>1?"s":""} ago`:q<24?`${q} hour${q>1?"s":""} ago`:K<30?`${K} day${K>1?"s":""} ago`:L.toLocaleDateString()},N=h.map(w=>{const D={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return{icon:{draft:"bi-file-earmark",sent:"bi-send",approved:"bi-check-circle",rejected:"bi-x-circle",completed:"bi-check-all"}[w.status]||"bi-file-earmark-text",text:`${w.status==="draft"?"Created":w.status.charAt(0).toUpperCase()+w.status.slice(1)} quotation ${w.quotationId} for ${w.customerName}`,time:y(w.createdAt),color:D[w.status]||"info",quotationId:w.quotationId,id:w.id}});return N.length===0&&N.push({icon:"bi-info-circle",text:"No recent activity. Create your first quotation!",time:"Start now",color:"muted",quotationId:"",id:""}),i.jsxs(i.Fragment,{children:[i.jsx(se.header,{initial:{y:-80},animate:{y:0},className:"fixed-top",style:{background:"rgba(15, 23, 42, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(124, 58, 237, 0.2)",zIndex:1050,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)"},children:i.jsx("div",{className:"container-fluid px-3 py-2",style:{maxWidth:"1400px",margin:"0 auto"},children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #7c3aed, #a855f7)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(124, 58, 237, 0.3)"},children:i.jsx("i",{className:"bi bi-calculator text-white",style:{fontSize:"20px"}})}),i.jsx("span",{className:"d-none d-sm-block fw-bold",style:{color:"white",fontSize:"1.1rem",background:"linear-gradient(90deg, #a855f7, #ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Estimatix"})]}),i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",style:{width:"36px",height:"36px",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"white"},children:i.jsx("i",{className:"bi bi-moon-stars",style:{fontSize:"14px"}})}),i.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",onClick:()=>c(!u),style:{width:"36px",height:"36px",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"white"},children:i.jsx("i",{className:"bi bi-search",style:{fontSize:"14px"}})}),i.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",style:{width:"36px",height:"36px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",border:"none",color:"white",fontSize:"14px",fontWeight:"600"},children:(r?.displayName||d?.email||"U")[0].toUpperCase()})]})]})})}),i.jsx(Ls,{children:u&&i.jsx(se.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{type:"spring",stiffness:300,damping:30},className:"fixed-top",style:{top:"72px",zIndex:1040,background:"rgba(15, 23, 42, 0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(124, 58, 237, 0.3)"},children:i.jsx("div",{className:"container-fluid px-3 py-3",style:{maxWidth:"1400px",margin:"0 auto"},children:i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsx("div",{className:"flex-grow-1",children:i.jsxs("div",{className:"position-relative",children:[i.jsx("input",{type:"text",className:"form-control",placeholder:"Search quotations, customers, or projects...",autoFocus:!0,style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(124, 58, 237, 0.3)",borderRadius:"12px",color:"white",padding:"0.75rem 3rem 0.75rem 1rem",fontSize:"1rem"}}),i.jsx("i",{className:"bi bi-search position-absolute text-white",style:{right:"1rem",top:"50%",transform:"translateY(-50%)",opacity:.7}})]})}),i.jsx("button",{className:"btn text-white d-flex align-items-center justify-content-center",onClick:()=>c(!1),style:{width:"40px",height:"40px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"10px"},children:i.jsx("i",{className:"bi bi-x-lg"})})]})})})}),i.jsx("div",{className:"min-h-screen",style:{background:"linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1a1a2e 100%)",paddingTop:u?"144px":"72px",transition:"padding-top 0.3s ease"},children:i.jsxs("div",{className:"container-fluid px-3 py-4",style:{maxWidth:"1400px",margin:"0 auto"},children:[i.jsx(se.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-4",children:i.jsxs("div",{className:"text-center text-md-start mb-4",children:[i.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[i.jsxs("h1",{className:"text-white mb-2",style:{fontSize:"clamp(1.5rem, 4vw, 2.25rem)",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:"1.2"},children:[b(),", ",r?.displayName||d?.email?.split("@")[0]||"User","!",i.jsx("span",{className:"ms-2",children:"👋"})]}),i.jsx("div",{style:{height:"4px",width:"100%",background:"linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)",borderRadius:"2px",marginTop:"8px",animation:"gradientShift 3s ease-in-out infinite"}})]}),i.jsx("p",{className:"mb-0 mt-3",style:{color:"#94A3B8",fontSize:"clamp(0.875rem, 2vw, 1rem)",fontWeight:"500"},children:"Welcome back to your dashboard. Here's what's happening today."})]})}),i.jsx("style",{jsx:!0,children:`
            @keyframes gradientShift {
              0% { background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899); }
              50% { background: linear-gradient(90deg, #ec4899, #7c3aed, #a855f7); }
              100% { background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899); }
            }

            .premium-stats-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              transform-origin: center;
            }

            .premium-stats-card:hover {
              transform: translateY(-8px) scale(1.02);
            }

            .premium-action-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              transform-origin: center;
            }

            .premium-action-card:hover {
              transform: translateY(-8px) scale(1.02);
            }

            .premium-activity-card {
              transition: all 0.3s ease;
            }

            /* Mobile-specific optimizations */
            @media (max-width: 576px) {
              .premium-stats-card {
                border-radius: 1rem !important;
              }
              
              .premium-action-card {
                border-radius: 1rem !important;
              }
              
              .premium-activity-card {
                border-radius: 1rem !important;
              }
            }

            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
              .premium-stats-card,
              .premium-action-card,
              .premium-activity-card {
                transition: none;
              }
              
              .premium-stats-card:hover,
              .premium-action-card:hover {
                transform: none;
              }
            }
          `}),i.jsxs(se.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"row g-3 mb-4",children:[i.jsx("div",{className:"col-6 col-lg-3",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.3,type:"spring",stiffness:200},whileHover:{scale:1.03,y:-6},className:"premium-stats-card",style:{background:"rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 12px 40px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:"1.25rem",overflow:"hidden",cursor:"pointer",position:"relative"},children:[i.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #6366F1 0%, #06B6D4 50%, #8B5CF6 100%)",borderRadius:"1.25rem 1.25rem 0 0"}}),i.jsxs("div",{className:"p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("p",{className:"mb-1",style:{fontSize:"12px",color:"#94A3B8",fontWeight:"600"},children:"Total Quotations"}),i.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"700",lineHeight:"1.1"},children:i.jsx(_s,{value:f.totalQuotations})})]}),i.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"10px",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.3)"},children:i.jsx("i",{className:"bi bi-file-earmark-text text-white",style:{fontSize:"16px"}})})]}),i.jsxs("div",{className:"d-flex align-items-center mt-2",style:{fontSize:"11px",color:"#10B981"},children:[i.jsx("i",{className:"bi bi-arrow-up me-1"}),i.jsx("span",{children:"+12% this month"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",pointerEvents:"none"}})]})}),i.jsx("div",{className:"col-6 col-lg-3",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4,type:"spring",stiffness:200},whileHover:{scale:1.03,y:-6},className:"premium-stats-card",style:{background:"rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 12px 40px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",border:"1px solid rgba(236, 72, 153, 0.2)",borderRadius:"1.25rem",overflow:"hidden",cursor:"pointer",position:"relative"},children:[i.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #F472B6 100%)",borderRadius:"1.25rem 1.25rem 0 0"}}),i.jsxs("div",{className:"p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("p",{className:"mb-1",style:{fontSize:"12px",color:"#94A3B8",fontWeight:"600"},children:"Total Value"}),i.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"clamp(1.25rem, 3.5vw, 1.75rem)",fontWeight:"700",lineHeight:"1.1"},children:i.jsx(_s,{value:f.totalValue,prefix:"₹"})})]}),i.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #8B5CF6, #EC4899)",borderRadius:"10px",boxShadow:"0 4px 12px rgba(236, 72, 153, 0.3)"},children:i.jsx("i",{className:"bi bi-currency-rupee text-white",style:{fontSize:"16px"}})})]}),i.jsxs("div",{className:"d-flex align-items-center mt-2",style:{fontSize:"11px",color:"#10B981"},children:[i.jsx("i",{className:"bi bi-arrow-up me-1"}),i.jsx("span",{children:"+8% this month"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))",pointerEvents:"none"}})]})}),i.jsx("div",{className:"col-6 col-lg-3",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.5,type:"spring",stiffness:200},whileHover:{scale:1.03,y:-6},className:"premium-stats-card",style:{background:"rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 12px 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",border:"1px solid rgba(59, 130, 246, 0.2)",borderRadius:"1.25rem",overflow:"hidden",cursor:"pointer",position:"relative"},children:[i.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #3B82F6 0%, #06B6D4 50%, #0EA5E9 100%)",borderRadius:"1.25rem 1.25rem 0 0"}}),i.jsxs("div",{className:"p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("p",{className:"mb-1",style:{fontSize:"12px",color:"#94A3B8",fontWeight:"600"},children:"Pending"}),i.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"700",lineHeight:"1.1"},children:i.jsx(_s,{value:f.pendingQuotations})})]}),i.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"10px",boxShadow:"0 4px 12px rgba(59, 130, 246, 0.3)"},children:i.jsx("i",{className:"bi bi-hourglass-split text-white",style:{fontSize:"16px"}})})]}),i.jsxs("div",{className:"d-flex align-items-center mt-2",style:{fontSize:"11px",color:"#F59E0B"},children:[i.jsx("i",{className:"bi bi-clock me-1"}),i.jsx("span",{children:"Needs attention"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))",pointerEvents:"none"}})]})}),i.jsx("div",{className:"col-6 col-lg-3",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.6,type:"spring",stiffness:200},whileHover:{scale:1.03,y:-6},className:"premium-stats-card",style:{background:"rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 12px 40px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",border:"1px solid rgba(16, 185, 129, 0.2)",borderRadius:"1.25rem",overflow:"hidden",cursor:"pointer",position:"relative"},children:[i.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #10B981 0%, #14B8A6 50%, #06B6D4 100%)",borderRadius:"1.25rem 1.25rem 0 0"}}),i.jsxs("div",{className:"p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("p",{className:"mb-1",style:{fontSize:"12px",color:"#94A3B8",fontWeight:"600"},children:"This Month"}),i.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"700",lineHeight:"1.1"},children:i.jsx(_s,{value:f.thisMonthQuotations})})]}),i.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"10px",boxShadow:"0 4px 12px rgba(16, 185, 129, 0.3)"},children:i.jsx("i",{className:"bi bi-check-circle text-white",style:{fontSize:"16px"}})})]}),i.jsxs("div",{className:"d-flex align-items-center mt-2",style:{fontSize:"11px",color:"#10B981"},children:[i.jsx("i",{className:"bi bi-trophy me-1"}),i.jsxs("span",{children:["₹",f.thisMonthValue.toLocaleString()]})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.05))",pointerEvents:"none"}})]})})]}),i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-lg-8",children:i.jsxs(se.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.7},children:[i.jsxs("h5",{className:"mb-3 d-flex align-items-center",style:{fontSize:"clamp(1.1rem, 3vw, 1.25rem)"},children:[i.jsx("span",{style:{marginRight:"8px",fontSize:"1.25rem"},children:"⚡"}),i.jsx("span",{style:{background:"linear-gradient(90deg, #6366F1, #8B5CF6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"700"},children:"Quick Actions"})]}),i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-sm-6",children:i.jsx(ge,{to:"/multi-calculator",className:"text-decoration-none",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.8,type:"spring",stiffness:200},whileHover:{y:-6,scale:1.02},className:"premium-action-card",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 12px 32px rgba(99, 102, 241, 0.25)",position:"relative"},children:[i.jsxs("div",{className:"p-4",style:{color:"white",position:"relative",zIndex:2},children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"clamp(48px, 12vw, 56px)",height:"clamp(48px, 12vw, 56px)",background:"rgba(255, 255, 255, 0.2)",borderRadius:"14px",backdropFilter:"blur(10px)"},children:i.jsx(se.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-calculator",style:{fontSize:"clamp(20px, 5vw, 28px)"}})}),i.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",lineHeight:"1.3"},children:"Multi-Item Calculator"}),i.jsx("p",{className:"mb-3",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",opacity:.9,lineHeight:"1.4"},children:"Create detailed quotations with multiple items"}),i.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",fontWeight:"600"},children:[i.jsx("span",{children:"Start Project"}),i.jsx(se.i,{whileHover:{x:4},className:"bi bi-arrow-right ms-2"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",pointerEvents:"none"}})]})})}),i.jsx("div",{className:"col-sm-6",children:i.jsx(ge,{to:"/calculator",className:"text-decoration-none",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.9,type:"spring",stiffness:200},whileHover:{y:-6,scale:1.02},className:"premium-action-card",style:{background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 12px 32px rgba(59, 130, 246, 0.25)",position:"relative"},children:[i.jsxs("div",{className:"p-4",style:{color:"white",position:"relative",zIndex:2},children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"clamp(48px, 12vw, 56px)",height:"clamp(48px, 12vw, 56px)",background:"rgba(255, 255, 255, 0.2)",borderRadius:"14px",backdropFilter:"blur(10px)"},children:i.jsx(se.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-grid-3x2-gap",style:{fontSize:"clamp(20px, 5vw, 28px)"}})}),i.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",lineHeight:"1.3"},children:"Simple Calculator"}),i.jsx("p",{className:"mb-3",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",opacity:.9,lineHeight:"1.4"},children:"Quick calculations for single items"}),i.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",fontWeight:"600"},children:[i.jsx("span",{children:"Quick Calculate"}),i.jsx(se.i,{whileHover:{x:4},className:"bi bi-arrow-right ms-2"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",pointerEvents:"none"}})]})})}),i.jsx("div",{className:"col-sm-6",children:i.jsx(ge,{to:"/admin",className:"text-decoration-none",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:1,type:"spring",stiffness:200},whileHover:{y:-6,scale:1.02},className:"premium-action-card",style:{background:"linear-gradient(135deg, #EC4899, #F472B6)",borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 12px 32px rgba(236, 72, 153, 0.25)",position:"relative"},children:[i.jsxs("div",{className:"p-4",style:{color:"white",position:"relative",zIndex:2},children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"clamp(48px, 12vw, 56px)",height:"clamp(48px, 12vw, 56px)",background:"rgba(255, 255, 255, 0.2)",borderRadius:"14px",backdropFilter:"blur(10px)"},children:i.jsx(se.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-gear",style:{fontSize:"clamp(20px, 5vw, 28px)"}})}),i.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",lineHeight:"1.3"},children:"Admin Settings"}),i.jsx("p",{className:"mb-3",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",opacity:.9,lineHeight:"1.4"},children:"Configure pricing and preferences"}),i.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",fontWeight:"600"},children:[i.jsx("span",{children:"Manage Settings"}),i.jsx(se.i,{whileHover:{x:4},className:"bi bi-arrow-right ms-2"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",pointerEvents:"none"}})]})})}),i.jsx("div",{className:"col-sm-6",children:i.jsx(ge,{to:"/billing",className:"text-decoration-none",children:i.jsxs(se.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:1.1,type:"spring",stiffness:200},whileHover:{y:-6,scale:1.02},className:"premium-action-card",style:{background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 12px 32px rgba(16, 185, 129, 0.25)",position:"relative"},children:[i.jsxs("div",{className:"p-4",style:{color:"white",position:"relative",zIndex:2},children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"clamp(48px, 12vw, 56px)",height:"clamp(48px, 12vw, 56px)",background:"rgba(255, 255, 255, 0.2)",borderRadius:"14px",backdropFilter:"blur(10px)"},children:i.jsx(se.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-credit-card",style:{fontSize:"clamp(20px, 5vw, 28px)"}})}),i.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",lineHeight:"1.3"},children:"Billing & Subscription"}),i.jsx("p",{className:"mb-3",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",opacity:.9,lineHeight:"1.4"},children:"Manage subscription and payments"}),i.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)",fontWeight:"600"},children:[i.jsx("span",{children:"View Billing"}),i.jsx(se.i,{whileHover:{x:4},className:"bi bi-arrow-right ms-2"})]})]}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",pointerEvents:"none"}})]})})})]})]})}),i.jsx("div",{className:"col-lg-4",children:i.jsxs(se.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:1.2},children:[i.jsxs("h5",{className:"mb-3",style:{fontSize:"clamp(1.1rem, 3vw, 1.25rem)",color:"white",fontWeight:"700"},children:[i.jsx("i",{className:"bi bi-clock-history me-2",style:{color:"#06B6D4"}}),"Recent Activity"]}),i.jsxs("div",{className:"premium-activity-card",style:{background:"rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 12px 40px rgba(59, 130, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",border:"1px solid rgba(59, 130, 246, 0.2)",borderRadius:"1.25rem",overflow:"hidden"},children:[i.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)",borderRadius:"1.25rem 1.25rem 0 0"}}),i.jsxs("div",{className:"card-body p-0",children:[i.jsx("div",{className:"list-group list-group-flush",children:i.jsx(Ls,{children:N.length>0?N.map((w,D)=>i.jsx(se.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4+D*.1},className:"list-group-item border-0 py-3 px-4",style:{background:"transparent",borderBottom:D<N.length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"},children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center me-3",style:{minWidth:"40px",height:"40px",background:w.color==="success"?"rgba(16, 185, 129, 0.2)":w.color==="info"?"rgba(59, 130, 246, 0.2)":w.color==="danger"?"rgba(239, 68, 68, 0.2)":"rgba(139, 92, 246, 0.2)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:i.jsx("i",{className:`bi ${w.icon}`,style:{fontSize:"18px",color:w.color==="success"?"#10B981":w.color==="info"?"#3B82F6":w.color==="danger"?"#EF4444":"#8B5CF6"}})}),i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("p",{className:"mb-1",style:{fontSize:"14px",color:"white",fontWeight:"500"},children:w.text}),i.jsxs("small",{style:{color:"#94A3B8",fontSize:"12px"},children:[i.jsx("i",{className:"bi bi-clock me-1"}),w.time]})]})]})},D)):i.jsxs("div",{className:"text-center py-5 px-4",children:[i.jsx("div",{className:"d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:"80px",height:"80px",background:"rgba(99, 102, 241, 0.1)",borderRadius:"50%"},children:i.jsx("i",{className:"bi bi-inbox",style:{fontSize:"36px",color:"#6366F1"}})}),i.jsx("p",{style:{color:"#94A3B8",fontSize:"14px",marginBottom:"16px"},children:"No recent activity yet"}),i.jsx(ge,{to:"/multi-calculator",className:"btn btn-sm",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",color:"white",border:"none",borderRadius:"10px",padding:"8px 16px",fontSize:"13px",fontWeight:"600"},children:"Create First Quotation"})]})})}),N.length>0&&i.jsx("div",{className:"p-3 text-center",style:{borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:i.jsxs("button",{className:"btn btn-link text-decoration-none",style:{color:"#6366F1",fontSize:"14px",fontWeight:"600"},children:["View All Activity ",i.jsx("i",{className:"bi bi-arrow-right ms-1"})]})})]})]})]})})]})]})})]})}function Rf(d,r){var u=Object.keys(d);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(d);r&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(d,f).enumerable})),u.push.apply(u,c)}return u}function Mf(d){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?Rf(Object(u),!0).forEach(function(c){nh(d,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(u)):Rf(Object(u)).forEach(function(c){Object.defineProperty(d,c,Object.getOwnPropertyDescriptor(u,c))})}return d}function Fs(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fs=function(r){return typeof r}:Fs=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Fs(d)}function nh(d,r,u){return r in d?Object.defineProperty(d,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):d[r]=u,d}function sh(d,r){return Ab(d)||Eb(d,r)||Db(d,r)||Rb()}function Ab(d){if(Array.isArray(d))return d}function Eb(d,r){var u=d&&(typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"]);if(u!=null){var c=[],f=!0,x=!1,h,z;try{for(u=u.call(d);!(f=(h=u.next()).done)&&(c.push(h.value),!(r&&c.length===r));f=!0);}catch(b){x=!0,z=b}finally{try{!f&&u.return!=null&&u.return()}finally{if(x)throw z}}return c}}function Db(d,r){if(d){if(typeof d=="string")return Of(d,r);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Of(d,r)}}function Of(d,r){(r==null||r>d.length)&&(r=d.length);for(var u=0,c=new Array(r);u<r;u++)c[u]=d[u];return c}function Rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rt=function(r,u,c){var f=!!c,x=ve.useRef(c);ve.useEffect(function(){x.current=c},[c]),ve.useEffect(function(){if(!f||!r)return function(){};var h=function(){x.current&&x.current.apply(x,arguments)};return r.on(u,h),function(){r.off(u,h)}},[f,u,r,x])},pc=function(r){var u=ve.useRef(r);return ve.useEffect(function(){u.current=r},[r]),u.current},dl=function(r){return r!==null&&Fs(r)==="object"},Mb=function(r){return dl(r)&&typeof r.then=="function"},Ob=function(r){return dl(r)&&typeof r.elements=="function"&&typeof r.createToken=="function"&&typeof r.createPaymentMethod=="function"&&typeof r.confirmCardPayment=="function"},Uf="[object Object]",Ub=function d(r,u){if(!dl(r)||!dl(u))return r===u;var c=Array.isArray(r),f=Array.isArray(u);if(c!==f)return!1;var x=Object.prototype.toString.call(r)===Uf,h=Object.prototype.toString.call(u)===Uf;if(x!==h)return!1;if(!x&&!c)return r===u;var z=Object.keys(r),b=Object.keys(u);if(z.length!==b.length)return!1;for(var y={},N=0;N<z.length;N+=1)y[z[N]]=!0;for(var w=0;w<b.length;w+=1)y[b[w]]=!0;var D=Object.keys(y);if(D.length!==z.length)return!1;var L=r,H=u,M=function(K){return d(L[K],H[K])};return D.every(M)},rh=function(r,u,c){return dl(r)?Object.keys(r).reduce(function(f,x){var h=!dl(u)||!Ub(r[x],u[x]);return c.includes(x)?(h&&console.warn("Unsupported prop change: options.".concat(x," is not a mutable property.")),f):h?Mf(Mf({},f||{}),{},nh({},x,r[x])):f},null):null},oh="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Bf=function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oh;if(r===null||Ob(r))return r;throw new Error(u)},Bb=function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oh;if(Mb(r))return{tag:"async",stripePromise:Promise.resolve(r).then(function(f){return Bf(f,u)})};var c=Bf(r,u);return c===null?{tag:"empty"}:{tag:"sync",stripe:c}},_b=function(r){!r||!r._registerWrapper||!r.registerAppInfo||(r._registerWrapper({name:"react-stripe-js",version:"2.8.1"}),r.registerAppInfo({name:"react-stripe-js",version:"2.8.1",url:"https://stripe.com/docs/stripe-js/react"}))},Sc=ve.createContext(null);Sc.displayName="ElementsContext";var Hb=function(r,u){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(u," in an <Elements> provider."));return r},ch=function(r){var u=r.stripe,c=r.options,f=r.children,x=ve.useMemo(function(){return Bb(u)},[u]),h=ve.useState(function(){return{stripe:x.tag==="sync"?x.stripe:null,elements:x.tag==="sync"?x.stripe.elements(c):null}}),z=sh(h,2),b=z[0],y=z[1];ve.useEffect(function(){var D=!0,L=function(M){y(function(q){return q.stripe?q:{stripe:M,elements:M.elements(c)}})};return x.tag==="async"&&!b.stripe?x.stripePromise.then(function(H){H&&D&&L(H)}):x.tag==="sync"&&!b.stripe&&L(x.stripe),function(){D=!1}},[x,b,c]);var N=pc(u);ve.useEffect(function(){N!==null&&N!==u&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[N,u]);var w=pc(c);return ve.useEffect(function(){if(b.elements){var D=rh(c,w,["clientSecret","fonts"]);D&&b.elements.update(D)}},[c,w,b.elements]),ve.useEffect(function(){_b(b.stripe)},[b.stripe]),ve.createElement(Sc.Provider,{value:b},f)};ch.propTypes={stripe:De.any,options:De.object};De.func.isRequired;var dh=ve.createContext(null);dh.displayName="CustomCheckoutSdkContext";var Fb=function(r,u){if(!r)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(u," in an <CustomCheckoutProvider> provider."));return r},Gb=ve.createContext(null);Gb.displayName="CustomCheckoutContext";De.any,De.shape({clientSecret:De.string.isRequired,elementsOptions:De.object}).isRequired;var _f=function(r){var u=ve.useContext(dh),c=ve.useContext(Sc);if(u&&c)throw new Error("You cannot wrap the part of your app that ".concat(r," in both <CustomCheckoutProvider> and <Elements> providers."));return u?Fb(u,r):Hb(c,r)},Lb=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},Qe=function(r,u){var c="".concat(Lb(r),"Element"),f=function(b){var y=b.id,N=b.className,w=b.options,D=w===void 0?{}:w,L=b.onBlur,H=b.onFocus,M=b.onReady,q=b.onChange,K=b.onEscape,ee=b.onClick,Q=b.onLoadError,Z=b.onLoaderStart,ie=b.onNetworksChange,He=b.onConfirm,Ee=b.onCancel,Fe=b.onShippingAddressChange,ot=b.onShippingRateChange,$e=_f("mounts <".concat(c,">")),Pe="elements"in $e?$e.elements:null,Ve="customCheckoutSdk"in $e?$e.customCheckoutSdk:null,St=ve.useState(null),ct=sh(St,2),p=ct[0],_=ct[1],Y=ve.useRef(null),ne=ve.useRef(null);Rt(p,"blur",L),Rt(p,"focus",H),Rt(p,"escape",K),Rt(p,"click",ee),Rt(p,"loaderror",Q),Rt(p,"loaderstart",Z),Rt(p,"networkschange",ie),Rt(p,"confirm",He),Rt(p,"cancel",Ee),Rt(p,"shippingaddresschange",Fe),Rt(p,"shippingratechange",ot),Rt(p,"change",q);var $;M&&(r==="expressCheckout"?$=M:$=function(){M(p)}),Rt(p,"ready",$),ve.useLayoutEffect(function(){if(Y.current===null&&ne.current!==null&&(Pe||Ve)){var le=null;Ve?le=Ve.createElement(r,D):Pe&&(le=Pe.create(r,D)),Y.current=le,_(le),le&&le.mount(ne.current)}},[Pe,Ve,D]);var je=pc(D);return ve.useEffect(function(){if(Y.current){var le=rh(D,je,["paymentRequest"]);le&&"update"in Y.current&&Y.current.update(le)}},[D,je]),ve.useLayoutEffect(function(){return function(){if(Y.current&&typeof Y.current.destroy=="function")try{Y.current.destroy(),Y.current=null}catch{}}},[]),ve.createElement("div",{id:y,className:N,ref:ne})},x=function(b){_f("mounts <".concat(c,">"));var y=b.id,N=b.className;return ve.createElement("div",{id:y,className:N})},h=u?x:f;return h.propTypes={id:De.string,className:De.string,onChange:De.func,onBlur:De.func,onFocus:De.func,onReady:De.func,onEscape:De.func,onClick:De.func,onLoadError:De.func,onLoaderStart:De.func,onNetworksChange:De.func,onConfirm:De.func,onCancel:De.func,onShippingAddressChange:De.func,onShippingRateChange:De.func,options:De.object},h.displayName=c,h.__elementType=r,h},Xe=typeof window>"u",qb=ve.createContext(null);qb.displayName="EmbeddedCheckoutProviderContext";Qe("auBankAccount",Xe);Qe("card",Xe);Qe("cardNumber",Xe);Qe("cardExpiry",Xe);Qe("cardCvc",Xe);Qe("fpxBank",Xe);Qe("iban",Xe);Qe("idealBank",Xe);Qe("p24Bank",Xe);Qe("epsBank",Xe);Qe("payment",Xe);Qe("expressCheckout",Xe);Qe("currencySelector",Xe);Qe("paymentRequestButton",Xe);Qe("linkAuthentication",Xe);Qe("address",Xe);Qe("shippingAddress",Xe);Qe("paymentMethodMessaging",Xe);Qe("affirmMessage",Xe);Qe("afterpayClearpayMessage",Xe);const Yb=ag("pk_test_your_publishable_key_here"),Hf={free:{id:"free",name:"Free",price:0,currency:"inr",interval:"month",features:["Up to 10 calculations per month","Basic export features"]},pro:{id:"pro",name:"Pro",price:999,currency:"inr",interval:"month",features:["Unlimited calculations","Advanced exports","Priority support","Custom branding"]},enterprise:{id:"enterprise",name:"Enterprise",price:2999,currency:"inr",interval:"month",features:["Everything in Pro","Team collaboration","API access","Custom integrations"]}},Qb={free:null,pro:"price_PRO_MONTH_INR",enterprise:"price_ENTERPRISE_MONTH_INR"},uh=!1;function Xb({plan:d,currentPlan:r,onSelect:u}){const c=r===d.id,f=d.id==="pro";return i.jsxs("div",{className:`card h-100 ${f?"border-primary":""}`,children:[f&&i.jsx("div",{className:"card-header bg-primary text-white text-center",children:i.jsx("small",{className:"fw-bold",children:"MOST POPULAR"})}),i.jsxs("div",{className:"card-body d-flex flex-column",children:[i.jsx("h5",{className:"card-title",children:d.name}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("span",{className:"h2",children:["₹",d.price]}),i.jsxs("span",{className:"text-muted",children:["/",d.interval]})]}),i.jsx("ul",{className:"list-unstyled flex-grow-1",children:d.features.map((x,h)=>i.jsxs("li",{className:"mb-2",children:[i.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"}),x]},h))}),i.jsx("button",{className:`btn ${c?"btn-outline-secondary":f?"btn-primary":"btn-outline-primary"} mt-auto`,onClick:()=>u(d.id),disabled:c,children:c?"Current Plan":"Select Plan"})]})]})}function Vb(){const[d,r]=S.useState(!1),{user:u}=ht(),c=async()=>{u&&(r(!0),r(!1))};return i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body text-center",children:[i.jsx("h5",{className:"card-title",children:"Manage Your Subscription"}),i.jsx("p",{className:"card-text",children:"Update your payment method, view invoices, and manage your subscription."}),i.jsx("button",{className:"btn btn-outline-primary",onClick:c,disabled:d,children:d?"Opening...":"Open Customer Portal"})]})})}function Zb(){const{userProfile:d}=ht(),[r,u]=S.useState(!1),c=d?.subscription?.plan??"free",f=async h=>{if(!(!d||h==="free")){u(!0);try{if(!Qb[h])return}catch(z){console.error("Error creating checkout session:",z),alert("Failed to start checkout. Please try again.")}finally{u(!1)}}},x=Object.values(Hf);return i.jsx(ch,{stripe:Yb,children:i.jsx("div",{className:"container py-4",children:i.jsx("div",{className:"row",children:i.jsxs("div",{className:"col-12",children:[i.jsx("h1",{className:"h2 mb-4",children:"Billing & Subscription"}),r&&i.jsx("div",{className:"d-flex justify-content-center mb-4",children:i.jsx("div",{className:"spinner-border",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Processing..."})})}),i.jsx("div",{className:"card mb-4",children:i.jsxs("div",{className:"card-body",children:[i.jsx("h5",{className:"card-title",children:"Current Plan"}),i.jsxs("p",{className:"card-text",children:["You're currently on the"," ",i.jsxs("strong",{children:[Hf[c]?.name??"Free"," plan"]}),d?.subscription?.currentPeriodEnd&&i.jsxs("span",{className:"text-muted ms-2",children:["(Renews on"," ",new Date(d.subscription.currentPeriodEnd).toLocaleDateString(),")"]})]})]})}),i.jsx("div",{className:"row g-4 mb-4",children:x.map(h=>i.jsx("div",{className:"col-md-4",children:i.jsx(Xb,{plan:h,currentPlan:c,onSelect:f})},h.id))}),c!=="free"&&i.jsx(Vb,{})]})})})})}class Wb{doc=null;setFont(r,u="normal"){this.doc&&(this.doc.setFont("helvetica",u),this.doc.setFontSize(r))}async generateQuotationPDF(r,u={}){this.doc=new zp;try{this.doc.setProperties({title:`Quotation ${r.invoiceNumber}`,subject:"Professional Quotation",author:u.branding?.companyName||"Estimatix",creator:"Estimatix - Professional Estimation Platform"}),await this.addWatermark(u);let c=45;c=this.addHeader(r,u,c),c=this.addCustomerDetails(r,c),c=this.addItemsTable(r,c+10);const f=this.doc.internal.pageSize.getHeight(),z=80+30;c+z>f-10&&(this.doc.addPage(),await this.addWatermark(u),c=20),c=this.addTotals(r,c+15),c=this.addNotesAndTerms(r,c+10),u.qrCode&&await this.addQRCode(u.qrCode),u.digitalSignature&&this.addDigitalSignature(u.digitalSignature);const b=this.doc.getNumberOfPages();for(let y=1;y<=b;y++)this.doc.setPage(y),this.addFooter(u,y,b);return this.doc.output("blob")}catch(c){throw console.error("Error generating PDF:",c),new Error("Failed to generate PDF")}}async addWatermark(r){if(!this.doc)return;const u=this.doc.internal.pageSize.getWidth(),c=this.doc.internal.pageSize.getHeight();let f="ESTIMATIX",x=.25,h="#6C63FF",z=!0;r.watermark?(f=r.watermark.text||f,x=r.watermark.opacity??x,h=r.watermark.color||h):r.confidential?(f="CONFIDENTIAL",x=.2,h="#FF6B6B",z=!1):r.draft&&(f="DRAFT",x=.2,h="#4ECDC4",z=!1),this.doc.saveGraphicsState();try{if(this.doc.setGState){const N=new this.doc.GState({opacity:x,"stroke-opacity":x});this.doc.setGState(N)}}catch(N){console.warn("GState not supported, watermark will be fully opaque:",N),typeof this.doc.setOpacity=="function"&&this.doc.setOpacity(x)}const b=u/2,y=c/2;if(z&&!r.draft&&!r.confidential)try{const N=`<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,w=document.createElement("canvas"),D=w.getContext("2d");if(!D)throw new Error("Canvas context not available");const L=window.URL||window.webkitURL||window,H=new Image,M=new Blob([N],{type:"image/svg+xml;charset=utf-8"}),q=L.createObjectURL(M);await new Promise((K,ee)=>{H.onload=()=>{try{w.width=500,w.height=500,D&&(D.clearRect(0,0,500,500),D.drawImage(H,0,0,500,500));const Q=w.toDataURL("image/png",.95),Z=120,ie=b-Z/2,He=y-Z/2;this.doc.addImage(Q,"PNG",ie,He,Z,Z,void 0,"NONE"),console.log("✅ Logo watermark added successfully to PDF"),L.revokeObjectURL(q),K()}catch(Q){console.error("❌ Failed to convert logo to canvas:",Q),L.revokeObjectURL(q),ee(Q)}},H.onerror=Q=>{console.error("❌ Failed to load logo image:",Q),L.revokeObjectURL(q),ee(new Error("Failed to load logo.svg"))},H.src=q})}catch(N){console.error("❌ Logo watermark failed, using fallback circle:",N),this.doc.setDrawColor(h),this.doc.setFillColor(h),this.doc.setLineWidth(4),this.doc.circle(b,y-15,40,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(h),this.doc.text("E",b,y-5,{align:"center"})}this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(h),r.draft?this.doc.text("DRAFT",b,y,{align:"center",angle:-15}):r.confidential?this.doc.text("CONFIDENTIAL",b,y,{align:"center",angle:-15}):this.doc.text("ESTIMATIX",b,y+80,{align:"center",angle:-45}),this.doc.restoreGraphicsState()}addHeader(r,u,c){if(!this.doc)return c;const f=this.doc.internal.pageSize.getWidth(),x=40,h=15;this.doc.setFillColor(108,99,255),this.doc.rect(0,0,f,x-2,"F"),this.doc.setFillColor(245,245,255),this.doc.rect(0,x-2,f,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(16),this.doc.text(u.branding?.companyName||"Venkatesh Aluminium & Glass",h,14),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.text("Professional Estimation & Quotation Platform",h,20),this.doc.setFontSize(8.8),this.doc.setTextColor(240,240,240);const z=u.branding?.phone||"8888889999",b=u.branding?.email||"info@example.com";this.doc.text(`Phone: ${z}  |  Email: ${b}`,h,26);const y=60,N=26,w=f-y-h,D=6;this.doc.setFillColor(255,255,255),this.doc.roundedRect(w,D,y,N,3,3,"F"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(w+4,D+2,y-8,7,2,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.text("QUOTATION",w+y/2,D+7,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(10),this.doc.setTextColor(33,37,41),this.doc.text(`#${r.invoiceNumber}`,w+y/2,D+14,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text(`Date: ${r.date.toLocaleDateString("en-IN")}`,w+y/2,D+19,{align:"center"});const L=new Date(r.date);return L.setDate(L.getDate()+30),this.doc.setFillColor(237,233,254),this.doc.roundedRect(w+10,D+21,y-20,4,2,2,"F"),this.doc.setTextColor(108,99,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(7),this.doc.text(`Valid Until: ${L.toLocaleDateString("en-IN")}`,w+y/2,D+24,{align:"center"}),x+8}addCustomerDetails(r,u){if(!this.doc)return u;const c=this.doc.internal.pageSize.getWidth(),f=15;let x=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(f,x,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Customer Information",f+8,x+7),x+=15;const h=x,z=22;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(f,h,c-f*2,z,4,4,"FD"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(f,h,3,z,1,1,"F");const b=f+10,y=c/2+5;let N=h+9;return this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Name:",b,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerName,b+18,N),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Email:",y,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerEmail,y+18,N),N+=7,this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Phone:",b,N),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(r.customerPhone,b+18,N),h+z+12}addItemsTable(r,u){if(!this.doc)return u;let c=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,c,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Item Details",22,c+7),c+=14;const f=["Item","Width","Height","Qty","Glass","Profile","Weight (kg)","Rate (Rs.)","Total (Rs.)"],x=r.items.map((z,b)=>[z.name||`Item ${b+1}`,`${z.width}"`,`${z.height}"`,"1","Clear","Standard",(z.area*2.5).toFixed(2),`Rs. ${z.rate.toFixed(2)}`,`Rs. ${z.total.toFixed(2)}`]);return kp(this.doc,{head:[f],body:x,startY:c,theme:"grid",styles:{font:"helvetica",fontSize:8.5,cellPadding:{top:4,right:3,bottom:4,left:3},lineColor:[230,230,230],lineWidth:.25,textColor:[33,37,41],valign:"middle",overflow:"ellipsize"},headStyles:{fillColor:[240,240,255],textColor:[76,63,255],fontStyle:"bold",fontSize:8.8,halign:"center",lineWidth:.25,overflow:"ellipsize",cellPadding:{top:5,bottom:5}},alternateRowStyles:{fillColor:[250,250,250]},bodyStyles:{fillColor:[255,255,255]},columnStyles:{0:{cellWidth:23,halign:"left"},1:{cellWidth:16,halign:"center"},2:{cellWidth:16,halign:"center"},3:{cellWidth:12,halign:"center"},4:{cellWidth:21,halign:"center"},5:{cellWidth:21,halign:"center"},6:{cellWidth:19,halign:"right"},7:{cellWidth:26,halign:"right"},8:{cellWidth:28,halign:"right",fontStyle:"bold",textColor:[76,63,255]}},margin:{left:15,right:15},tableWidth:"wrap",didDrawCell:z=>{z.section==="head"&&(z.cell.styles.valign="middle")}}),this.doc.lastAutoTable.finalY+10}addTotals(r,u){if(!this.doc)return u;const c=this.doc.internal.pageSize.getWidth();let f=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Summary",23,f+7),f+=15;const x=r.items.reduce((_,Y)=>_+Y.area,0),h=r.items.reduce((_,Y)=>_+Y.area*2.5,0),z=(c-45)/2,b=56,y=15,N=y+z+15;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.roundedRect(y,f,z,b,5,5,"FD");let w=f+11;this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9.5),this.doc.setTextColor(31,41,55),this.doc.text("Material Details:",y+7,w),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.6),this.doc.setTextColor(55,65,81),w+=8,this.doc.text(`• Glass Area: ${x.toFixed(2)} sq.ft`,y+7,w),w+=6,this.doc.text(`• Frame Weight: ${h.toFixed(2)} kg`,y+7,w),w+=6,this.doc.text("• Rate: Rs. 47.0 per kg",y+7,w),w+=9,this.doc.setFontSize(8),this.doc.text("Note: Prices valid 30 days from issue.",y+7,w),this.doc.setFillColor(255,255,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(N,f,z,b,5,5,"FD");let D=f+11;const L=8,H=N+L,M=N+z-L,q=(_,Y,ne=[31,41,55],$=!1)=>{if(!this.doc)return;this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(75,85,99),this.doc.text(_,H,D),this.doc.setFont("helvetica",$?"bold":"normal"),this.doc.setTextColor(...ne);const je=typeof Y=="number"?`Rs. ${Y.toLocaleString("en-IN",{minimumFractionDigits:2})}`:Y;this.doc.text(je,M,D,{align:"right"}),D+=6.5};q("Subtotal",r.subtotal,[31,41,55],!0),q("Tax (GST 18%)",r.tax,[31,41,55],!0);const K=r.discount||0;K>0&&q("Discount (5%)",`− Rs. ${K.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const ee=r.advancePaid||0;ee>0&&q("Advance Received",`− Rs. ${ee.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const Q=r.roundOff||0;if(Math.abs(Q)>.01){const _=Q>=0?"+":"−";q("Round-off",`${_} Rs. ${Math.abs(Q).toFixed(2)}`,[107,114,128],!1)}let Z=r.grandTotal;ee>0&&(Z=r.grandTotal-ee),K>0&&(Z=Z-K),(ee>0||K>0)&&(D+=1,this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.3),this.doc.line(H,D,M,D),D+=5,this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(239,68,68),this.doc.text("Balance Due",H,D),this.doc.setFontSize(10),this.doc.text(`Rs. ${Z.toLocaleString("en-IN",{minimumFractionDigits:2})}`,M,D,{align:"right"}),D+=6),D+=2,this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.line(N+L,D,N+z-L,D);const ie=N+L,He=D+5,Ee=z-L*2,Fe=16;this.doc.setFillColor(84,63,255),this.doc.roundedRect(ie,He,Ee,Fe,3,3,"F"),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(255,255,255);const ot=He+Fe/2+2.5;this.doc.setFontSize(7.5),this.doc.text("GRAND TOTAL",ie+10,ot);const $e=r.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2});let Pe=11;$e.length>12&&(Pe=10),$e.length>15&&(Pe=9),this.doc.setFontSize(Pe);const Ve=this.doc.getTextWidth($e),St=Pe*.65;this.doc.setFontSize(St);const ct="Rs.",p=this.doc.getTextWidth(ct);return this.doc.text(ct,ie+Ee-10-Ve-p-1.5,ot-.8),this.doc.setFontSize(Pe),this.doc.text($e,ie+Ee-10,ot,{align:"right"}),f+b+18}addNotesAndTerms(r,u){if(!this.doc)return u;const c=this.doc.internal.pageSize.getWidth();let f=u;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Notes",23,f+7),f+=16,this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3);const x=r.notes?30:22;this.doc.roundedRect(15,f,c-30,x,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(55,65,81);let h=f+8;if(r.notes){const q=this.doc.splitTextToSize(r.notes,c-50);this.doc.text(q,22,h),h+=q.length*4+6}this.doc.setFont("helvetica","italic"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128);const b=`This quotation is auto-calculated based on the latest aluminium profile rates as of ${new Date().toLocaleString("en-IN",{month:"long",year:"numeric"})}.`,y=this.doc.splitTextToSize(b,c-50);this.doc.text(y,22,h),f+=x+12;const N=r.advancePaid||0;if(N>0){const q=r.grandTotal-N;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Payment Details",23,f+7),f+=16,this.doc.setFillColor(250,250,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,f,c-30,18,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(55,65,81),this.doc.text("Advance Paid:",22,f+8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(34,197,94),this.doc.text(`Rs. ${N.toLocaleString("en-IN",{minimumFractionDigits:2})}`,c-37,f+8,{align:"right"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(55,65,81),this.doc.text("Balance Due:",22,f+14),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(239,68,68),this.doc.text(`Rs. ${q.toLocaleString("en-IN",{minimumFractionDigits:2})}`,c-37,f+14,{align:"right"}),f+=22}if(r.termsAndConditions){this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,f,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Terms & Conditions",23,f+7),f+=16,this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(75,85,99);const q=this.doc.splitTextToSize(r.termsAndConditions,c-50);this.doc.text(q,22,f),f+=q.length*4+12}const w=this.doc.internal.pageSize.getHeight();f>w-90&&(this.doc.addPage(),f=20),this.doc.setFillColor(237,233,254),this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.roundedRect(15,f,c-30,12,3,3,"FD"),this.doc.setFillColor(108,99,255),this.doc.circle(22,f+6,2.5,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(7),this.doc.setFont("helvetica","bold"),this.doc.text("✓",22,f+7.2,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(8),this.doc.setTextColor(76,63,255),this.doc.text("DIGITALLY VERIFIED",28,f+5.5),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(7.5),this.doc.setTextColor(100,100,100);const D=`Document ID: #${r.invoiceNumber} | Verified by Estimatix Digital Sign System`;this.doc.text(D,28,f+9),f+=17;const L=(c-45)/2,H=35;this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,f,L,H,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Prepared & Authorized by",22,f+8),this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.5),this.doc.line(22,f+20,22+L-14,f+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Authorized Signature",22,f+25),this.doc.setFontSize(7.5),this.doc.text("Venkatesh Aluminium & Glass",22,f+30);const M=15+L+15;return this.doc.roundedRect(M,f,L,H,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Client Acknowledgement",M+7,f+8),this.doc.setDrawColor(200,200,200),this.doc.line(M+7,f+20,M+L-7,f+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Client Signature",M+7,f+25),this.doc.setFontSize(7.5),this.doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`,M+7,f+30),f+=H+10,f}async addQRCode(r){if(!(!this.doc||!r))try{const u=await ig.toDataURL(r.url,{width:400,margin:2,color:{dark:"#4f46e5",light:"#ffffff"}}),c=this.doc.internal.pageSize.getWidth(),f=this.doc.internal.pageSize.getHeight(),x=35,h=c-x-20,z=f-x-60;this.doc.setFillColor(255,255,255),this.doc.rect(h-3,z-3,x+6,x+6,"F"),this.doc.setDrawColor(79,70,229),this.doc.setLineWidth(.5),this.doc.rect(h-3,z-3,x+6,x+6,"S"),this.doc.addImage(u,"PNG",h,z,x,x),this.doc.setFontSize(8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(79,70,229);const b=r.label||"Scan to View";this.doc.text(b,h+x/2,z+x+6,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(100,100,100),this.doc.setFontSize(7),this.doc.text("Quote Lookup",h+x/2,z+x+11,{align:"center"})}catch(u){console.error("Failed to add QR code to PDF:",u)}}addDigitalSignature(r){if(!this.doc||!r)return;let c=this.doc.internal.pageSize.getHeight()-80;if(this.doc.setFontSize(10),this.doc.setFont("helvetica","bold"),this.doc.text("Authorized Signature:",20,c),r.signatureImage)try{this.doc.addImage(r.signatureImage,"PNG",20,c+5,40,20)}catch(f){console.warn("Failed to add signature image:",f)}this.doc.line(20,c+30,80,c+30),this.doc.setFont("helvetica","normal"),this.doc.text(r.signerName,20,c+35),this.doc.text(r.signerTitle,20,c+42),this.doc.text(r.date?.toLocaleDateString()||new Date().toLocaleDateString(),20,c+49),this.doc.setFontSize(8),this.doc.setTextColor(100,100,100),this.doc.text("This document contains a digital signature and is legally binding.",20,c+60)}addFooter(r,u=1,c=1){if(!this.doc)return;const f=this.doc.internal.pageSize.getWidth(),x=this.doc.internal.pageSize.getHeight(),h=28,z=x-h;this.doc.setFillColor(248,247,255),this.doc.rect(0,z,f,h,"F"),this.doc.setFillColor(108,99,255),this.doc.rect(0,z,f,1.5,"F"),this.doc.setFillColor(76,63,255),this.doc.rect(0,z+1.5,f,.8,"F"),this.setFont(8,"normal"),this.doc.setTextColor(31,41,55);const b=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});this.doc.text(`Generated: ${b}`,15,z+10),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100),this.doc.text(`Page ${u} of ${c}`,15,z+17),this.setFont(10,"bold"),this.doc.setTextColor(31,41,55);const y=r.branding?.companyName||"Venkatesh Aluminium & Glass";this.doc.text(`Prepared by ${y}`,f/2,z+10,{align:"center"}),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100);const N=r.branding?.phone||"+91-9876543210",w=r.branding?.email||"info@example.com",D=`Phone: ${N} | Email: ${w}`;this.doc.text(D,f/2,z+17,{align:"center"}),this.setFont(7.5,"normal"),this.doc.setTextColor(107,114,128),this.doc.text("Generated by Estimatix Quotation Suite",f-15,z+11,{align:"right"}),this.setFont(7,"normal"),this.doc.setTextColor(156,163,175),this.doc.text("© 2025 All Rights Reserved",f-15,z+17,{align:"right"})}downloadPDF(r,u){const c=URL.createObjectURL(r),f=document.createElement("a");f.href=c,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(c)}async savePDFDraft(r,u){try{const c={draft:!0,watermark:{text:"DRAFT",opacity:.1,color:"#4ECDC4"}},f=await this.generateQuotationPDF(r,c);return new Promise((x,h)=>{const z=new FileReader;z.onload=()=>x(z.result),z.onerror=h,z.readAsDataURL(f)})}catch(c){throw console.error("Error saving PDF draft:",c),c}}}const mh=new Wb;let cc;async function Kb(){return cc||(cc=await Ff(()=>import("./vendor-xlsx-DGuHH-KN.js"),[])),cc}const dc={"4mm":10,"5mm":12.5,"6mm":15,"24mm DG":22},uc={"Series 45":2.5,"Series 60":3.8,"Series 75":4.5,"Sliding Light":2.2,"Sliding Heavy":5};function Jb(){const[d,r]=S.useState([]),[u,c]=S.useState("5mm"),[f,x]=S.useState("Series 60"),[h,z]=S.useState(!1),[b,y]=S.useState(""),[N,w]=S.useState({settings:!1,items:!1,summary:!1}),[D,L]=S.useState({name:"Venkatesh Aluminium & Glass",address:"",phone:"",email:""}),[H,M]=S.useState({name:"",address:"",phone:"",email:""}),[q,K]=S.useState(!1),[ee,Q]=S.useState(null),Z=S.useMemo(()=>{let p=0,_=0,Y=0,ne=0;d.forEach(Ke=>{const{glassArea:pt,glassWeight:dt,profileLength:Jt,profileWeight:ia}=ie(Ke);p+=pt,_+=dt,Y+=Jt,ne+=ia});const $=_+ne,je=b?$*parseFloat(b):0,le=je,be=je*.18,ce=je*1.18;return{totalGlassArea:p,totalGlassWeight:_,totalProfileLength:Y,totalProfileWeight:ne,totalWeight:$,totalCost:je,subtotal:le,gst:be,grandTotal:ce}},[d,b]);function ie(p){const _=p.glassType||u,Y=p.profileType||f,ne=(p.width||0)*(p.height||0)*(p.quantity||1),$=ne*dc[_],le=2*((p.width||0)+(p.height||0))*(p.quantity||1),be=le*uc[Y];return{glassArea:ne,glassWeight:$,profileLength:le,profileWeight:be}}const He=()=>{const p={id:Date.now(),name:`Window ${d.length+1}`,width:"",height:"",quantity:1,glassType:"",profileType:""};r([...d,p])},Ee=(p,_,Y)=>{r(d.map(ne=>ne.id===p?{...ne,[_]:Y}:ne))},Fe=p=>{r(d.filter(_=>_.id!==p))},ot=()=>{const p=[];if(d.length===0)p.push("💡 Start by adding items to get AI-powered suggestions!");else{Z.totalWeight>100&&u==="5mm Clear"&&p.push("⚡ Consider using 6mm or 8mm glass for better strength in large installations"),Z.totalGlassArea>10&&f==="Standard"&&p.push("🔧 For large areas, Heavy Duty profiles provide better stability"),b&&parseFloat(b)>300&&p.push("💰 Consider negotiating bulk pricing - your rate seems high for large orders"),d.forEach((ne,$)=>{(ne.width>3||ne.height>3)&&p.push(`⚠️ Item ${$+1}: Large dimensions may require additional support frames`)}),Z.totalGlassArea/d.length<1&&p.push("📊 Small items detected - consider batch production for cost efficiency");const Y=Z.totalWeight/Z.totalGlassArea;Y<15?p.push("✅ Excellent material efficiency! Your design is optimized"):Y>30&&p.push("🎯 Consider lighter profiles to reduce material costs")}p.length===0&&p.push("✨ Your configuration looks great! No suggestions at the moment."),alert(`🤖 AI Suggestions:

`+p.join(`

`))},$e=()=>{const p={items:d,globalGlassType:u,globalProfileType:f,ratePerKg:b,companyData:D,customerData:H,savedAt:Date.now()};localStorage.setItem("estimatix_calculator_draft",JSON.stringify(p)),Q(Date.now())},Pe=()=>{try{const p=localStorage.getItem("estimatix_calculator_draft");if(p){const _=JSON.parse(p);r(_.items||[]),c(_.globalGlassType||"5mm"),x(_.globalProfileType||"Series 60"),y(_.ratePerKg||""),L(_.companyData||D),M(_.customerData||{name:"",address:"",phone:"",email:""}),Q(_.savedAt||null),K(!1)}}catch(p){console.error("Error restoring draft:",p)}},Ve=()=>{localStorage.removeItem("estimatix_calculator_draft"),Q(null),K(!1)};S.useEffect(()=>{const p=localStorage.getItem("estimatix_calculator_draft");if(p)try{const _=JSON.parse(p);Q(_.savedAt||null),K(!0)}catch(_){console.error("Error parsing draft:",_),localStorage.removeItem("estimatix_calculator_draft")}},[]),S.useEffect(()=>{if(d.length>0||b||H.name||D.name!=="Venkatesh Aluminium & Glass"){const p=setTimeout(()=>{$e()},2e3);return()=>clearTimeout(p)}},[d,u,f,b,D,H]);const St=async()=>{try{const p={invoiceNumber:`QUOT-${Date.now()}`,date:new Date,customerName:H.name||"Valued Customer",customerPhone:H.phone||"",customerEmail:H.email||"",customerAddress:H.address||"",items:d.map((je,le)=>{const{glassArea:be,glassWeight:ce,profileWeight:Ke}=ie(je),pt=ce+Ke,dt=b?parseFloat(b):0,Jt=pt*dt;return{name:je.name||`Item ${le+1}`,type:je.name.toLowerCase().includes("door")?"door":"window",width:je.width||0,height:je.height||0,area:be,rate:dt,total:Jt}}),subtotal:Z.totalCost,tax:Z.totalCost*.18,grandTotal:Z.totalCost*1.18,notes:`Total Glass Area: ${Z.totalGlassArea.toFixed(2)} m²
Total Weight: ${Z.totalWeight.toFixed(2)} kg
Glass Type: ${u}
Profile Type: ${f}`,termsAndConditions:`1. Prices are valid for 15 days.
2. Delivery within 7 working days.
3. Payment: 50% advance, balance on delivery.`},_={branding:{companyName:D.name,address:D.address||"",phone:D.phone||"",email:D.email||""}},Y=await mh.generateQuotationPDF(p,_),ne=URL.createObjectURL(Y),$=document.createElement("a");$.href=ne,$.download=`Quotation_${p.invoiceNumber}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(ne),alert("✅ Premium PDF generated successfully!")}catch(p){console.error("PDF generation error:",p),alert("Failed to generate PDF: "+(p.message||"Unknown error"))}},ct=async()=>{try{const p=await Kb(),_=d.map(le=>{const{glassArea:be,glassWeight:ce,profileLength:Ke,profileWeight:pt}=ie(le);return{"Item Name":le.name,"Width (m)":le.width||0,"Height (m)":le.height||0,Quantity:le.quantity||1,"Glass Type":le.glassType||u,"Profile Type":le.profileType||f,"Glass Area (m²)":be.toFixed(2),"Glass Weight (kg)":ce.toFixed(2),"Profile Length (m)":Ke.toFixed(2),"Profile Weight (kg)":pt.toFixed(2),"Total Weight (kg)":(ce+pt).toFixed(2)}});_.push({"Item Name":"TOTAL","Width (m)":"","Height (m)":"",Quantity:"","Glass Type":"","Profile Type":"","Glass Area (m²)":Z.totalGlassArea.toFixed(2),"Glass Weight (kg)":Z.totalGlassWeight.toFixed(2),"Profile Length (m)":Z.totalProfileLength.toFixed(2),"Profile Weight (kg)":Z.totalProfileWeight.toFixed(2),"Total Weight (kg)":Z.totalWeight.toFixed(2)});const Y=p.utils.json_to_sheet(_),ne=p.utils.book_new();p.utils.book_append_sheet(ne,Y,"Calculation");const $=p.write(ne,{bookType:"xlsx",type:"array"}),je=new Blob([$],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});lg.saveAs(je,"aluminium-calculation.xlsx")}catch(p){console.error("Error generating Excel:",p),alert("Error generating Excel file. Please try again.")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
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
      `}),q&&i.jsx("div",{className:"draft-modal-overlay",onClick:()=>K(!1),children:i.jsxs("div",{className:"draft-modal-card",onClick:p=>p.stopPropagation(),children:[i.jsxs("div",{className:"draft-modal-title",children:[i.jsx("i",{className:"bi bi-clock-history"}),"Restore Saved Draft?"]}),i.jsx("p",{className:"draft-modal-text",children:"We found a previously saved draft. Would you like to continue editing it?"}),ee&&i.jsxs("div",{className:"draft-modal-timestamp",children:[i.jsx("i",{className:"bi bi-calendar-check"}),"Saved ",new Date(ee).toLocaleString()]}),i.jsxs("div",{className:"draft-modal-actions",children:[i.jsxs("button",{className:"draft-btn draft-btn-discard",onClick:Ve,children:[i.jsx("i",{className:"bi bi-trash3 me-1"}),"Discard"]}),i.jsxs("button",{className:"draft-btn draft-btn-restore",onClick:Pe,children:[i.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Restore Draft"]})]})]})}),i.jsx("button",{className:"ai-assist-btn",onClick:ot,title:"AI Suggestions",children:i.jsx("i",{className:"bi bi-stars"})}),i.jsx("div",{className:"premium-calc-container",children:i.jsxs("div",{className:"container-fluid",style:{maxWidth:"1400px"},children:[i.jsxs("div",{className:"premium-card mb-4",children:[i.jsx("div",{className:"premium-header",children:i.jsxs("div",{className:"header-layout",children:[i.jsxs("div",{className:"header-left",children:[i.jsx("div",{className:"header-icon-box",children:i.jsx("i",{className:"bi bi-calculator-fill"})}),i.jsxs("div",{className:"header-text",children:[i.jsx("h1",{children:"Premium Calculator"}),i.jsx("p",{className:"header-subtitle",children:"Professional Aluminium & Glass Estimation"})]})]}),i.jsxs("div",{className:"header-badges",children:[i.jsxs("span",{className:"premium-badge",children:[i.jsx("i",{className:"bi bi-shield-check"}),i.jsx("span",{children:"Enterprise Grade"})]}),i.jsxs("span",{className:"premium-badge",children:[i.jsx("i",{className:"bi bi-graph-up"}),i.jsx("span",{children:"Real-time Calc"})]}),i.jsxs("span",{className:"premium-badge",children:[i.jsx("i",{className:"bi bi-stars"}),i.jsx("span",{children:"AI-Powered"})]})]})]})}),i.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2 mt-3 px-3 pb-3",children:[ee&&i.jsxs("span",{className:"draft-indicator",children:[i.jsx("i",{className:"bi bi-check-circle-fill"}),"Draft saved ",new Date(ee).toLocaleTimeString()]}),i.jsxs("button",{className:"draft-control-btn draft-save-btn",onClick:$e,title:"Save current data as draft",children:[i.jsx("i",{className:"bi bi-floppy"}),"Save Template"]}),ee&&i.jsxs("button",{className:"draft-control-btn draft-clear-btn",onClick:Ve,title:"Clear saved draft",children:[i.jsx("i",{className:"bi bi-trash3"}),"Clear Template"]})]})]}),i.jsxs("div",{className:"premium-card mb-4",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("i",{className:"bi bi-building-fill"}),i.jsx("h5",{children:"Company Information"})]}),i.jsx("div",{className:"section-body",children:i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Company Name"}),i.jsx("input",{type:"text",className:"form-control",value:D.name,onChange:p=>L({...D,name:p.target.value})})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Address"}),i.jsx("input",{type:"text",className:"form-control",value:D.address,onChange:p=>L({...D,address:p.target.value})})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Phone"}),i.jsx("input",{type:"text",className:"form-control",value:D.phone,onChange:p=>L({...D,phone:p.target.value})})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Email"}),i.jsx("input",{type:"email",className:"form-control",value:D.email,onChange:p=>L({...D,email:p.target.value})})]})]})})]}),i.jsxs("div",{className:"premium-card mb-4",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("i",{className:"bi bi-person-circle"}),i.jsx("h5",{children:"Customer Information"})]}),i.jsx("div",{className:"section-body",children:i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-person-badge-fill"}),"Customer Name"]}),i.jsx("input",{type:"text",className:"form-control premium-input",value:H.name,onChange:p=>M({...H,name:p.target.value}),placeholder:"Enter customer name..."})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-geo-alt-fill"}),"Address"]}),i.jsx("input",{type:"text",className:"form-control premium-input",value:H.address,onChange:p=>M({...H,address:p.target.value}),placeholder:"Enter address..."})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-telephone-fill"}),"Phone"]}),i.jsx("input",{type:"text",className:"form-control premium-input",value:H.phone,onChange:p=>M({...H,phone:p.target.value}),placeholder:"Enter phone number..."})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-envelope-fill"}),"Email"]}),i.jsx("input",{type:"email",className:"form-control premium-input",value:H.email,onChange:p=>M({...H,email:p.target.value}),placeholder:"Enter email..."})]})]})})]}),i.jsxs("div",{className:"premium-card mb-4",children:[i.jsxs("div",{className:"section-header collapsible-header",onClick:()=>w({...N,settings:!N.settings}),children:[i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("i",{className:"bi bi-sliders"}),i.jsx("h5",{children:"Default Settings & Rates"})]}),i.jsx("i",{className:`bi bi-chevron-down chevron ${N.settings?"collapsed":""}`})]}),i.jsxs("div",{className:`collapsible-content section-body ${N.settings?"collapsed":""}`,children:[i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-3",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-layers-fill"}),"Default Glass Type",i.jsx("i",{className:"bi bi-info-circle info-icon",title:"Select default glass thickness for all items"})]}),i.jsx("select",{className:"form-select premium-input",value:u,onChange:p=>c(p.target.value),children:Object.keys(dc).map(p=>i.jsx("option",{value:p,children:p},p))})]}),i.jsxs("div",{className:"col-md-3",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-columns-gap"}),"Default Profile Type",i.jsx("i",{className:"bi bi-info-circle info-icon",title:"Choose aluminum profile series"})]}),i.jsx("select",{className:"form-select premium-input",value:f,onChange:p=>x(p.target.value),children:Object.keys(uc).map(p=>i.jsx("option",{value:p,children:p},p))})]}),i.jsxs("div",{className:"col-md-3",children:[i.jsxs("label",{className:"premium-form-label",children:[i.jsx("i",{className:"bi bi-currency-rupee"}),"Rate per kg (₹)",i.jsx("i",{className:"bi bi-info-circle info-icon",title:"Enter the aluminum rate per kg as per your supplier"})]}),i.jsx("input",{type:"number",className:"form-control premium-input",value:b,onChange:p=>y(p.target.value),placeholder:"Enter rate..."})]}),i.jsx("div",{className:"col-md-3",children:i.jsxs("div",{className:"form-check mt-5",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",id:"showOnlyTotals",checked:h,onChange:p=>z(p.target.checked),style:{cursor:"pointer"}}),i.jsx("label",{className:"form-check-label premium-form-label",htmlFor:"showOnlyTotals",style:{cursor:"pointer"},children:"Show only totals"})]})})]}),i.jsxs("div",{className:"ai-insights-bar",children:[i.jsx("i",{className:"bi bi-lightbulb-fill"}),i.jsx("strong",{children:"AI Insight:"})," Using ",i.jsx("strong",{children:f})," with ",i.jsx("strong",{children:u})," glass provides optimal strength-to-weight ratio. Average project cost: ",i.jsxs("strong",{children:["₹",b?(parseFloat(b)*150).toLocaleString():"---"]})," per sqm."]})]})]}),!h&&i.jsxs("div",{className:"premium-card mb-4",children:[i.jsxs("div",{className:"section-header collapsible-header",onClick:()=>w({...N,items:!N.items}),children:[i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("i",{className:"bi bi-box-seam-fill"}),i.jsx("h5",{children:"Items & Calculations"}),i.jsxs("span",{className:"badge bg-primary ms-2",children:[d.length," Items"]})]}),i.jsx("i",{className:`bi bi-chevron-down chevron ${N.items?"collapsed":""}`})]}),i.jsxs("div",{className:`collapsible-content section-body ${N.items?"collapsed":""}`,children:[i.jsxs("div",{className:"premium-datagrid-header",children:[i.jsxs("div",{className:"datagrid-title",children:[i.jsx("i",{className:"bi bi-grid-3x3-gap me-2"}),i.jsx("span",{className:"gradient-text",children:"Estimatix Premium DataGrid"}),i.jsx("span",{className:"items-badge",children:d.length})]}),i.jsxs("button",{className:"premium-add-btn",onClick:He,children:[i.jsx("i",{className:"bi bi-plus-lg me-2"}),"Add New Item"]})]}),d.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:i.jsx("i",{className:"bi bi-inbox"})}),i.jsx("h5",{children:"No Items Yet"}),i.jsx("p",{children:'Click "Add New Item" to start building your quotation'})]}):i.jsx("div",{className:"premium-datagrid-wrapper",children:i.jsx("div",{className:"premium-datagrid",children:i.jsxs("table",{className:"datagrid-table",children:[i.jsx("thead",{className:"datagrid-header-sticky",children:i.jsxs("tr",{children:[i.jsx("th",{className:"col-text",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-tag-fill"}),i.jsx("span",{children:"Item Name"})]})}),i.jsx("th",{className:"col-numeric",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-arrows-expand"}),i.jsx("span",{children:"Width (m)"})]})}),i.jsx("th",{className:"col-numeric",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-arrows-vertical"}),i.jsx("span",{children:"Height (m)"})]})}),i.jsx("th",{className:"col-numeric",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-hash"}),i.jsx("span",{children:"Qty"})]})}),i.jsx("th",{className:"col-select",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-gem"}),i.jsx("span",{children:"Glass Type"})]})}),i.jsx("th",{className:"col-select",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-box"}),i.jsx("span",{children:"Profile Type"})]})}),i.jsx("th",{className:"col-calculated",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-droplet"}),i.jsx("span",{children:"Glass Wt"})]})}),i.jsx("th",{className:"col-calculated",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-box-seam"}),i.jsx("span",{children:"Profile Wt"})]})}),i.jsx("th",{className:"col-total",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-calculator"}),i.jsx("span",{children:"Total (kg)"})]})}),i.jsx("th",{className:"col-action",children:i.jsxs("div",{className:"th-content",children:[i.jsx("i",{className:"bi bi-gear"}),i.jsx("span",{children:"Action"})]})})]})}),i.jsx("tbody",{className:"datagrid-body",children:d.map((p,_)=>{const{glassWeight:Y,profileWeight:ne}=ie(p);return i.jsxs("tr",{className:"datagrid-row",children:[i.jsx("td",{className:"col-text",children:i.jsx("input",{type:"text",className:"datagrid-input input-text",value:p.name,onChange:$=>Ee(p.id,"name",$.target.value),placeholder:"Enter item name..."})}),i.jsx("td",{className:"col-numeric",children:i.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:p.width,onChange:$=>Ee(p.id,"width",parseFloat($.target.value)||0),step:"0.01",min:"0"})}),i.jsx("td",{className:"col-numeric",children:i.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:p.height,onChange:$=>Ee(p.id,"height",parseFloat($.target.value)||0),step:"0.01",min:"0"})}),i.jsx("td",{className:"col-numeric",children:i.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:p.quantity,onChange:$=>Ee(p.id,"quantity",parseInt($.target.value)||1),min:"1"})}),i.jsx("td",{className:"col-select",children:i.jsxs("select",{className:"datagrid-select",value:p.glassType,onChange:$=>Ee(p.id,"glassType",$.target.value),children:[i.jsx("option",{value:"",children:"Default"}),Object.keys(dc).map($=>i.jsx("option",{value:$,children:$},$))]})}),i.jsx("td",{className:"col-select",children:i.jsxs("select",{className:"datagrid-select",value:p.profileType,onChange:$=>Ee(p.id,"profileType",$.target.value),children:[i.jsx("option",{value:"",children:"Default"}),Object.keys(uc).map($=>i.jsx("option",{value:$,children:$},$))]})}),i.jsx("td",{className:"col-calculated",children:i.jsx("div",{className:"calculated-value",children:Y.toFixed(2)})}),i.jsx("td",{className:"col-calculated",children:i.jsx("div",{className:"calculated-value",children:ne.toFixed(2)})}),i.jsx("td",{className:"col-total",children:i.jsx("div",{className:"total-value",children:(Y+ne).toFixed(2)})}),i.jsx("td",{className:"col-action",children:i.jsx("button",{className:"delete-btn",onClick:()=>Fe(p.id),title:"Delete item",children:i.jsx("i",{className:"bi bi-trash3"})})})]},p.id)})})]})})})]})]}),i.jsxs("div",{className:"premium-card mb-4",children:[i.jsxs("div",{className:"section-header collapsible-header",onClick:()=>w({...N,summary:!N.summary}),children:[i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("i",{className:"bi bi-pie-chart-fill"}),i.jsx("h5",{children:"Project Summary & Analysis"})]}),i.jsx("i",{className:`bi bi-chevron-down chevron ${N.summary?"collapsed":""}`})]}),i.jsxs("div",{className:`collapsible-content section-body ${N.summary?"collapsed":""}`,children:[i.jsxs("div",{className:"premium-summary-grid",children:[i.jsxs("div",{className:"premium-summary-card cyan",children:[i.jsx("div",{className:"summary-icon",children:i.jsx("i",{className:"bi bi-grid-3x3-gap-fill"})}),i.jsx("div",{className:"premium-summary-value",children:Z.totalGlassArea.toFixed(2)}),i.jsx("div",{className:"premium-summary-label",children:"Glass Area (m²)"}),i.jsxs("div",{className:"premium-summary-sub",children:["Across ",d.length," items"]})]}),i.jsxs("div",{className:"premium-summary-card amber",children:[i.jsx("div",{className:"summary-icon",children:i.jsx("i",{className:"bi bi-box-seam-fill"})}),i.jsx("div",{className:"premium-summary-value",children:Z.totalWeight.toFixed(2)}),i.jsx("div",{className:"premium-summary-label",children:"Frame Weight (kg)"}),i.jsx("div",{className:"premium-summary-sub",children:"Combined aluminum"})]}),i.jsxs("div",{className:"premium-summary-card violet",children:[i.jsx("div",{className:"summary-icon",children:i.jsx("i",{className:"bi bi-rulers"})}),i.jsx("div",{className:"premium-summary-value",children:Z.totalProfileLength.toFixed(2)}),i.jsx("div",{className:"premium-summary-label",children:"Profile Length (m)"}),i.jsx("div",{className:"premium-summary-sub",children:"Total perimeter"})]}),i.jsxs("div",{className:"premium-summary-card emerald updating",children:[i.jsx("div",{className:"summary-icon",children:i.jsx("i",{className:"bi bi-currency-rupee"})}),i.jsxs("div",{className:"premium-summary-value",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]}),i.jsx("div",{className:"premium-summary-label",children:"Grand Total"}),i.jsx("div",{className:"premium-summary-sub",children:"Inc. GST @ 18%"})]})]}),i.jsxs("div",{className:"ai-insights-bar mt-4",children:[i.jsx("i",{className:"bi bi-robot"}),i.jsx("strong",{children:"AI Analysis:"})," This configuration achieves",i.jsxs("strong",{children:[" ",(Z.totalWeight/Z.totalGlassArea||0).toFixed(2)," kg/m²"]})," frame density, which is ",i.jsx("strong",{children:(Z.totalWeight/Z.totalGlassArea||0)<25?"15% lighter":"standard"})," compared to typical installations. Estimated material efficiency: ",i.jsx("strong",{children:d.length>0?"92%":"--"})]}),i.jsxs("div",{className:"mt-4",children:[i.jsxs("h6",{className:"premium-form-label mb-3",children:[i.jsx("i",{className:"bi bi-table"}),"Detailed Breakdown"]}),i.jsx("div",{className:"table-responsive",children:i.jsxs("table",{className:"table table-dark table-hover",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"table-primary",children:[i.jsx("th",{children:"Component"}),i.jsx("th",{className:"text-end",children:"Value"}),i.jsx("th",{className:"text-end",children:"Amount (₹)"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("i",{className:"bi bi-layers me-2 text-cyan"}),"Glass Area"]}),i.jsxs("td",{className:"text-end",children:[Z.totalGlassArea.toFixed(2)," m²"]}),i.jsx("td",{className:"text-end",children:"--"})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("i",{className:"bi bi-box me-2 text-amber"}),"Aluminum Weight"]}),i.jsxs("td",{className:"text-end",children:[Z.totalWeight.toFixed(2)," kg"]}),i.jsxs("td",{className:"text-end",children:["₹",(Z.subtotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("i",{className:"bi bi-percent me-2 text-warning"}),"GST (18%)"]}),i.jsx("td",{className:"text-end",children:"--"}),i.jsxs("td",{className:"text-end",children:["₹",(Z.gst||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),i.jsxs("tr",{className:"table-success",children:[i.jsxs("td",{className:"fw-bold",children:[i.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Grand Total"]}),i.jsx("td",{className:"text-end fw-bold",children:"--"}),i.jsxs("td",{className:"text-end fw-bold fs-5",children:["₹",(Z.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]})]})]})})]}),i.jsxs("div",{className:"row g-3 mt-4",children:[i.jsx("div",{className:"col-md-6",children:i.jsx("button",{className:"premium-btn premium-btn-success w-100",onClick:ct,disabled:d.length===0,children:i.jsxs("span",{children:[i.jsx("i",{className:"bi bi-file-earmark-excel me-2"}),"Export to Excel"]})})}),i.jsx("div",{className:"col-md-6",children:i.jsx("button",{className:"premium-btn premium-btn-danger w-100",onClick:St,disabled:d.length===0,children:i.jsxs("span",{children:[i.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Generate Premium PDF"]})})})]})]})]})]})})]})}function Ib(){const{user:d}=ht(),[r,u]=S.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),[c,f]=S.useState({currentYear:new Date().getFullYear(),currentSequence:1,prefix:"VEN"}),[x,h]=S.useState("");S.useEffect(()=>{const N=localStorage.getItem("admin_pricing_settings"),w=localStorage.getItem("admin_invoice_settings");N&&u(JSON.parse(N)),w&&f(JSON.parse(w))},[]);const z=()=>{localStorage.setItem("admin_pricing_settings",JSON.stringify(r)),localStorage.setItem("admin_invoice_settings",JSON.stringify(c)),h("Settings saved successfully!"),setTimeout(()=>h(""),3e3)},b=()=>{u({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),h("Settings reset to defaults!"),setTimeout(()=>h(""),3e3)},y=()=>{const N=c.currentSequence.toString().padStart(3,"0");return`${c.prefix}${c.currentYear}-${N}`};return i.jsx("div",{className:"container py-4",children:i.jsx("div",{className:"row",children:i.jsxs("div",{className:"col-12",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[i.jsxs("h1",{className:"h3 text-primary",children:[i.jsx("i",{className:"bi bi-gear-fill me-2"}),"Admin Settings"]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsxs("button",{className:"btn btn-outline-secondary",onClick:b,children:[i.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Reset to Defaults"]}),i.jsxs("button",{className:"btn btn-primary",onClick:z,children:[i.jsx("i",{className:"bi bi-check-circle me-1"}),"Save Settings"]})]})]}),x&&i.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[i.jsx("i",{className:"bi bi-check-circle-fill me-2"}),x]}),i.jsxs("div",{className:"alert alert-info mb-4",children:[i.jsxs("h6",{className:"alert-heading",children:[i.jsx("i",{className:"bi bi-info-circle me-2"}),"Admin Access"]}),i.jsxs("p",{className:"mb-0",children:["Logged in as: ",i.jsx("strong",{children:d?.email})," | These settings will apply to all quotations system-wide."]})]}),i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"col-lg-8",children:i.jsxs("div",{className:"card mb-4",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h5",{className:"card-title mb-0",children:[i.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Unit Pricing Configuration"]})}),i.jsx("div",{className:"card-body",children:i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Glass Rate (₹ per m²)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("span",{className:"input-group-text",children:"₹"}),i.jsx("input",{type:"number",className:"form-control",value:r.glassRatePerM2,onChange:N=>u({...r,glassRatePerM2:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),i.jsx("span",{className:"input-group-text",children:"per m²"})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Aluminium Rate (₹ per kg)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("span",{className:"input-group-text",children:"₹"}),i.jsx("input",{type:"number",className:"form-control",value:r.aluminiumRatePerKg,onChange:N=>u({...r,aluminiumRatePerKg:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),i.jsx("span",{className:"input-group-text",children:"per kg"})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Accessory Rate (₹ per item)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("span",{className:"input-group-text",children:"₹"}),i.jsx("input",{type:"number",className:"form-control",value:r.accessoryRatePerItem,onChange:N=>u({...r,accessoryRatePerItem:parseFloat(N.target.value)||0}),min:"0",step:"0.01"}),i.jsx("span",{className:"input-group-text",children:"per item"})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Labor Charge (%)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",className:"form-control",value:r.laborChargePercent,onChange:N=>u({...r,laborChargePercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),i.jsx("span",{className:"input-group-text",children:"%"})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"GST Rate (%)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",className:"form-control",value:r.gstPercent,onChange:N=>u({...r,gstPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),i.jsx("span",{className:"input-group-text",children:"%"})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("label",{className:"form-label",children:"Company Markup (%)"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",className:"form-control",value:r.companyMarkupPercent,onChange:N=>u({...r,companyMarkupPercent:parseFloat(N.target.value)||0}),min:"0",max:"100",step:"0.1"}),i.jsx("span",{className:"input-group-text",children:"%"})]})]})]})})]})}),i.jsxs("div",{className:"col-lg-4",children:[i.jsxs("div",{className:"card mb-4",children:[i.jsx("div",{className:"card-header bg-success text-white",children:i.jsxs("h5",{className:"card-title mb-0",children:[i.jsx("i",{className:"bi bi-receipt me-2"}),"Invoice Settings"]})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{className:"form-label",children:"Invoice Prefix"}),i.jsx("input",{type:"text",className:"form-control",value:c.prefix,onChange:N=>f({...c,prefix:N.target.value.toUpperCase()}),maxLength:5})]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{className:"form-label",children:"Current Year"}),i.jsx("input",{type:"number",className:"form-control",value:c.currentYear,onChange:N=>f({...c,currentYear:parseInt(N.target.value)||new Date().getFullYear()}),min:"2020",max:"2030"})]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{className:"form-label",children:"Next Sequence Number"}),i.jsx("input",{type:"number",className:"form-control",value:c.currentSequence,onChange:N=>f({...c,currentSequence:parseInt(N.target.value)||1}),min:"1"})]}),i.jsxs("div",{className:"alert alert-info",children:[i.jsx("strong",{children:"Next Invoice Number:"}),i.jsx("br",{}),i.jsx("code",{className:"fs-6",children:y()})]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header bg-info text-white",children:i.jsxs("h6",{className:"card-title mb-0",children:[i.jsx("i",{className:"bi bi-bar-chart me-2"}),"Quick Stats"]})}),i.jsx("div",{className:"card-body",children:i.jsxs("div",{className:"small",children:[i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsx("span",{children:"Material Cost (Glass + Al):"}),i.jsxs("strong",{children:["₹",(r.glassRatePerM2+r.aluminiumRatePerKg).toFixed(0)]})]}),i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsx("span",{children:"Total Overhead:"}),i.jsxs("strong",{children:[(r.laborChargePercent+r.gstPercent+r.companyMarkupPercent).toFixed(1),"%"]})]}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("span",{children:"Settings Last Updated:"}),i.jsx("strong",{children:new Date().toLocaleDateString()})]})]})})]})]})]})]})})})}class $b{async createShareLink(r,u={}){try{const c=this.generateShareToken(),f=u.expiresInDays?Date.now()+u.expiresInDays*24*60*60*1e3:void 0,x={quotationId:r,shareToken:c,isPublic:u.isPublic??!1,readOnly:u.readOnly??!0,allowedUsers:u.allowedUsers,createdAt:Date.now(),expiresAt:f};return await mc(Xt(wt,"sharedQuotes",c),x),`${window.location.origin}/estimatix#/shared/${c}`}catch(c){throw console.error("Error creating share link:",c),new Error("Failed to create share link")}}async getSharedQuote(r){try{const u=Xt(wt,"sharedQuotes",r),c=await yc(u);if(!c.exists())return null;const f=c.data();return f.expiresAt&&Date.now()>f.expiresAt?null:{...f,id:c.id}}catch(u){return console.error("Error getting shared quote:",u),null}}async joinCollaboration(r,u,c){try{const f=Xt(wt,"collaborations",r),x=Date.now(),h={[`activeUsers.${u}`]:{userId:u,email:c,lastSeen:x}};await gn(f,h);const z=ng(f,b=>{if(b.exists()){const y=b.data();this.handleCollaborationUpdate(y)}});return()=>{z(),this.leaveCollaboration(r,u)}}catch(f){throw console.error("Error joining collaboration:",f),f}}async leaveCollaboration(r,u){try{const c=Xt(wt,"collaborations",r),f={[`activeUsers.${u}`]:null};await gn(c,f)}catch(c){console.error("Error leaving collaboration:",c)}}async trackChange(r,u){try{const c=Xt(wt,"collaborations",r),f={...u,id:this.generateChangeId(),timestamp:Date.now()};await gn(c,{[`changes.${f.id}`]:f})}catch(c){console.error("Error tracking change:",c)}}async updateCursor(r,u,c){try{const f=Xt(wt,"collaborations",r);await gn(f,{[`activeUsers.${u}.cursor`]:c,[`activeUsers.${u}.lastSeen`]:Date.now()})}catch(f){console.error("Error updating cursor:",f)}}async copyShareLink(r){try{await navigator.clipboard.writeText(r)}catch{const c=document.createElement("textarea");c.value=r,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}}generateShareToken(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}generateChangeId(){return Math.random().toString(36).substring(2)}handleCollaborationUpdate(r){window.dispatchEvent(new CustomEvent("collaborationUpdate",{detail:r}))}}const fh=new $b;function Pb(){const{user:d}=ht(),[r,u]=S.useState(!1),[c,f]=S.useState(!1),[x,h]=S.useState([]),[z,b]=S.useState(!1),[y,N]=S.useState([]),[w,D]=S.useState(!1),[L,H]=S.useState(null),[M,q]=S.useState("residential"),[K,ee]=S.useState(!1),[Q,Z]=S.useState(null),[ie,He]=S.useState([]),[Ee,Fe]=S.useState(!1),[ot,$e]=S.useState(null),[Pe,Ve]=S.useState(!1),[St,ct]=S.useState(null),[p,_]=S.useState({quotationId:"",customerName:"",customerPhone:"",customerEmail:"",items:[],totalGlassArea:0,totalFrameWeight:0,subtotal:0,laborCharges:0,gst:0,grandTotal:0,createdAt:new Date().toISOString(),validUntil:new Date(Date.now()+720*60*60*1e3).toISOString(),status:"draft"}),[Y,ne]=S.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),$=["Clear Float Glass 5mm","Tinted Glass 6mm","Laminated Glass 6.38mm","Tempered Glass 8mm","Double Glazed Unit","Reflective Glass 6mm"],je=["Standard Aluminium Frame","Heavy Duty Frame","Powder Coated Frame","Wooden Frame","UPVC Frame"],le=["Standard Handle","Premium Handle","Security Lock","Mesh/Grill","Weather Strip","Hinges Premium","Sliding Mechanism"],be=[{type:"window",size:"small",width:1,height:1.2,glassType:"Clear Float Glass 5mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle"],useCase:"Bathroom, Small Kitchen Window",confidence:92,durability:"8-10 years",energyEfficiency:"medium",costSavings:12},{type:"window",size:"medium",width:1.5,height:1.8,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle","Mesh/Grill"],useCase:"Bedroom Window, Living Room",confidence:95,durability:"10-12 years",energyEfficiency:"medium",costSavings:8},{type:"window",size:"large",width:2,height:2.5,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Large Living Room, Balcony Window",confidence:88,durability:"12-15 years",energyEfficiency:"high",costSavings:15},{type:"window",size:"extra-large",width:3,height:2.5,glassType:"Double Glazed Unit",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Panoramic Window, Bay Window",confidence:90,durability:"15+ years",energyEfficiency:"high",costSavings:18},{type:"door",size:"small",width:.9,height:2.1,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Premium Handle","Security Lock","Hinges Premium"],useCase:"Bathroom Door, Utility Door",confidence:93,durability:"10-12 years",energyEfficiency:"low",costSavings:10},{type:"door",size:"medium",width:1.2,height:2.4,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Main Entrance, Bedroom Door",confidence:96,durability:"12-15 years",energyEfficiency:"medium",costSavings:14},{type:"door",size:"large",width:1.5,height:2.5,glassType:"Laminated Glass 6.38mm",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Premium Main Entrance",confidence:91,durability:"15+ years",energyEfficiency:"high",costSavings:16},{type:"door",size:"extra-large",width:2,height:2.5,glassType:"Double Glazed Unit",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Sliding Mechanism","Weather Strip"],useCase:"Sliding Door, Patio Door",confidence:89,durability:"15+ years",energyEfficiency:"high",costSavings:20}],ce=(g,B,G,F)=>{const I=(g+B)*2;let P=2.5;switch(G){case"Heavy Duty Frame":P=3.5;break;case"Powder Coated Frame":P=2.8;break;case"Wooden Frame":P=2;break;case"UPVC Frame":P=1.8;break;default:P=2.5}return I*P*F},Ke=g=>{const B=[],G=g.width*g.height;return g.glassType==="Clear Float Glass 5mm"&&G>5&&B.push("💡 Consider tempered glass for larger areas (>5m²) for safety."),g.glassType==="Double Glazed Unit"&&g.frameType==="Standard Aluminium Frame"&&B.push("💡 Heavy Duty Frame is recommended for Double Glazed Units."),(g.width>=2||g.height>=2.5)&&!g.accessories.includes("Sliding Mechanism")&&B.push(`💡 For ${g.width.toFixed(1)}m × ${g.height.toFixed(1)}m dimensions, sliding mechanism is recommended.`),g.type==="door"&&!g.accessories.includes("Security Lock")&&B.push("🔒 Security Lock is recommended for doors."),G>4&&!g.accessories.includes("Weather Strip")&&B.push("🌤️ Weather Strip recommended for better insulation."),B},pt=(g,B)=>{let G={...g};switch(B){case"residential":g.glassType==="Double Glazed Unit"&&(G.glassType="Tempered Glass 8mm",G.confidence-=5);break;case"commercial":g.frameType==="Standard Aluminium Frame"&&(G.frameType="Heavy Duty Frame"),g.accessories.includes("Security Lock")||G.accessories.push("Security Lock"),G.confidence+=3;break;case"thermal":g.glassType.includes("Double Glazed")||(G.glassType="Double Glazed Unit"),g.accessories.includes("Weather Strip")||G.accessories.push("Weather Strip"),G.energyEfficiency="high",G.confidence+=5;break;case"premium":G.frameType="Powder Coated Frame",G.glassType=g.glassType.includes("Laminated")?g.glassType:"Laminated Glass 6.38mm",g.accessories.includes("Premium Handle")||(G.accessories=G.accessories.filter(F=>F!=="Standard Handle"),G.accessories.push("Premium Handle")),G.confidence+=2;break}return G},dt=(g,B=1)=>{const G=g.width*g.height*B,F=ce(g.width,g.height,g.frameType,B),I=G*Y.glassRatePerM2+F*Y.aluminiumRatePerKg+g.accessories.length*Y.accessoryRatePerItem*B,P=I*(Y.laborChargePercent/100),Me=I+P,Vt=Me*(Y.gstPercent/100),et=Me+Vt;return{material:I,labor:P,gst:Vt,total:et}},Jt=(g,B)=>{const G=[];switch(g.costSavings&&G.push(`💰 This configuration saves ${g.costSavings}% material weight vs standard setup`),G.push(`🛡️ Estimated durability: ${g.durability}`),g.energyEfficiency==="high"&&G.push("⚡ High energy efficiency - Reduces cooling/heating costs"),B){case"residential":G.push("🏠 Optimized for residential use with cost-efficient materials");break;case"commercial":G.push("🏢 Commercial-grade durability for high-traffic areas");break;case"thermal":G.push("🌡️ Thermal insulation optimized - Best for extreme climates");break;case"premium":G.push("💎 Premium aesthetic finish with superior quality materials");break}return G},ia=(g,B)=>{const G=p.items.find(et=>et.id===g);if(!G)return;$e(g);let F;if(G.width>0||G.height>0){const et=G.width*G.height;let ze="medium";et<1.5?ze="small":et<4?ze="medium":et<7?ze="large":ze="extra-large",F=be.find(tt=>tt.type===B&&tt.size===ze)||be.find(tt=>tt.type===B&&tt.size==="medium")}else F=be.find(et=>et.type===B&&et.size==="medium");const I=pt(F,M),P=dt(I,G.quantity),Me=Jt(I,M),Vt={preset:I,mode:M,estimatedCost:P,insights:Me,confidence:I.confidence,appliedAt:new Date};Z(Vt),ee(!0)},Ca=()=>{if(!Q||!ot)return;const g=Q.preset;_(F=>({...F,items:F.items.map(I=>I.id===ot?{...I,width:g.width,height:g.height,glassType:g.glassType,frameType:g.frameType,accessories:[...g.accessories],notes:`🤖 AI Estimated (${M.charAt(0).toUpperCase()+M.slice(1)} Mode)
Use Case: ${g.useCase}
Confidence: ${g.confidence}%
${I.notes?`
`+I.notes:""}`}:I)}));const G=[{id:Date.now().toString(),itemName:p.items.find(F=>F.id===ot)?.name||"Unknown",type:g.type,dimensions:`${g.width}m × ${g.height}m`,mode:M,appliedAt:Q.appliedAt,result:Q},...ie].slice(0,10);He(G),localStorage.setItem("ai_estimation_history",JSON.stringify(G)),ee(!1),$e(null),ji()};S.useEffect(()=>{const g=localStorage.getItem("ai_estimation_history");g&&He(JSON.parse(g))},[]),S.useEffect(()=>{const g=localStorage.getItem("admin_pricing_settings");g&&ne(JSON.parse(g));const B=localStorage.getItem("item_templates");B&&N(JSON.parse(B))},[]);const hl=async()=>{if(!d?.uid)return"TEMP-001";try{return await cl.generateQuotationId(d.uid)}catch(g){console.error("Error generating quotation ID:",g);const B=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),G=B.currentSequence.toString().padStart(3,"0"),F=`${B.prefix}${B.currentYear}-${G}`;return B.currentSequence+=1,localStorage.setItem("admin_invoice_settings",JSON.stringify(B)),F}};S.useEffect(()=>{(async()=>{if(!p.quotationId){const B=await hl();_(G=>({...G,quotationId:B}))}})()},[]);const ei=()=>{const g={id:Date.now().toString(),name:`Item ${p.items.length+1}`,type:"window",width:0,height:0,quantity:1,glassType:$[0],frameType:je[0],accessories:[],notes:"",showBreakdown:!1};_(B=>({...B,items:[...B.items,g]}))},pl=g=>{const B=p.items.find(F=>F.id===g);if(!B)return;const G={...B,id:Date.now().toString(),name:`${B.name} (Copy)`,showBreakdown:!1};_(F=>({...F,items:[...F.items,G]}))},vn=g=>{const B={id:Date.now().toString(),name:g.name,type:g.type,width:g.width,height:g.height,quantity:1,glassType:g.glassType,frameType:g.frameType,accessories:[...g.accessories],notes:g.description,showBreakdown:!1};_(G=>({...G,items:[...G.items,B]})),D(!1)},la=g=>{const B=prompt("Enter template name:",g.name);if(!B)return;const G={id:Date.now().toString(),name:B,type:g.type,width:g.width,height:g.height,glassType:g.glassType,frameType:g.frameType,accessories:[...g.accessories],description:g.notes},F=[...y,G];N(F),localStorage.setItem("item_templates",JSON.stringify(F)),alert(`✅ Template "${B}" saved successfully!`)},gl=g=>{const B=y.find(I=>I.id===g);if(!B||!confirm(`Are you sure you want to delete template "${B.name}"?`))return;const F=y.filter(I=>I.id!==g);N(F),localStorage.setItem("item_templates",JSON.stringify(F))},bl=g=>{H(g)},Vs=g=>{g.preventDefault()},jn=g=>{if(!L||L===g){H(null);return}const B=p.items.findIndex(P=>P.id===L),G=p.items.findIndex(P=>P.id===g);if(B===-1||G===-1)return;const F=[...p.items],[I]=F.splice(B,1);F.splice(G,0,I),_(P=>({...P,items:F})),H(null)},Ot=(g,B,G)=>{_(F=>({...F,items:F.items.map(I=>I.id===g?{...I,[B]:G}:I)})),ji()},xl=g=>{_(B=>({...B,items:B.items.map(G=>G.id===g?{...G,showBreakdown:!G.showBreakdown}:G)}))},ji=()=>{d?.uid&&(b(!0),window.autoSaveTimeout&&clearTimeout(window.autoSaveTimeout),window.autoSaveTimeout=setTimeout(()=>{Zs()},2e3))},Zs=async()=>{if(!d?.uid||!p.customerName||p.items.length===0){b(!1);return}try{localStorage.setItem("draft_quotation",JSON.stringify(p)),console.log("✓ Auto-saved to localStorage"),b(!1)}catch(g){console.error("Auto-save error:",g),b(!1)}},Ni=()=>{const g={...p,savedAt:Date.now()};localStorage.setItem("estimatix_multi_calculator_draft",JSON.stringify(g)),ct(Date.now())},ut=()=>{const g=localStorage.getItem("estimatix_multi_calculator_draft");if(g){const B=JSON.parse(g);_(B),Ve(!1)}},yl=()=>{localStorage.removeItem("estimatix_multi_calculator_draft"),ct(null),Ve(!1)};S.useEffect(()=>{const g=localStorage.getItem("estimatix_multi_calculator_draft");if(g)try{const B=JSON.parse(g);B.items&&B.items.length>0&&(ct(B.savedAt),Ve(!0))}catch(B){console.error("Failed to load draft:",B)}},[]),S.useEffect(()=>{if(p.items.length>0||p.customerName||p.customerPhone){const g=setTimeout(()=>{Ni()},2e3);return()=>clearTimeout(g)}},[p]);const Nn=g=>{_(B=>({...B,items:B.items.filter(G=>G.id!==g)}))},wn=(g,B)=>{_(G=>({...G,items:G.items.map(F=>{if(F.id===g){const I=F.accessories.includes(B)?F.accessories.filter(P=>P!==B):[...F.accessories,B];return{...F,accessories:I}}return F})}))};S.useEffect(()=>{let g=0,B=0,G=0;const F=p.items.map(ze=>{const tt=ze.width*ze.height*ze.quantity,za=ce(ze.width,ze.height,ze.frameType,ze.quantity),It=tt*Y.glassRatePerM2,ai=za*Y.aluminiumRatePerKg,ka=ze.accessories.length*Y.accessoryRatePerItem*ze.quantity,jl=It+ai+ka,Nl=jl*(Y.laborChargePercent/100),wl=jl+Nl;return g+=tt,B+=za,G+=jl,{...ze,glassArea:tt,frameWeight:za,glassCost:It,frameCost:ai,accessoryCost:ka,laborCost:Nl,itemTotal:wl}}),I=G*(Y.laborChargePercent/100),P=G*(Y.companyMarkupPercent/100),Me=G+I+P,Vt=Me*(Y.gstPercent/100),et=Me+Vt;_(ze=>({...ze,items:F,totalGlassArea:g,totalFrameWeight:B,subtotal:G,laborCharges:I+P,gst:Vt,grandTotal:et}))},[p.items.length,p.items.map(g=>`${g.width}-${g.height}-${g.quantity}-${g.glassType}-${g.frameType}-${g.accessories.length}`).join(","),Y]);const ti=async()=>{if(!d?.uid){alert("Please log in to save quotations");return}if(!p.customerName||!p.customerPhone){alert("Please fill in customer name and phone number");return}if(p.items.length===0){alert("Please add at least one item");return}f(!0);try{const g=p.items.map(F=>{const I=F.width*F.height/144,P=I*.092903,Me=Y.glassRatePerM2;return{...F,areaInSqFt:I,areaInM2:P,rate:Me,itemTotal:P*Me*F.quantity}}),B={quotationId:p.quotationId,userId:d.uid,customerName:p.customerName,customerPhone:p.customerPhone,customerEmail:p.customerEmail||"",customerAddress:"",items:g,totalGlassArea:p.totalGlassArea,totalFrameWeight:p.totalFrameWeight,subtotal:p.subtotal,laborCharges:p.laborCharges,gst:p.gst,grandTotal:p.grandTotal,status:"draft",notes:"Quotation created from Multi-Item Calculator"},G=await cl.saveQuotation(B);console.log("Quotation saved successfully with ID:",G),alert(`✅ Quotation ${p.quotationId} saved successfully to Firebase!`),vl()}catch(g){console.error("Error saving quotation:",g),alert("❌ Failed to save quotation. Please try again.")}finally{f(!1)}},vl=async()=>{if(d?.uid)try{const g=await cl.getUserQuotations(d.uid,20);h(g)}catch(g){console.error("Error loading quotations:",g)}};S.useEffect(()=>{vl()},[d?.uid]);const wi=async()=>{u(!0);try{if(!p.customerName||!p.customerPhone){alert("Please fill in customer name and phone number before generating PDF"),u(!1);return}if(p.items.length===0){alert("Please add at least one item before generating PDF"),u(!1);return}const g=p.items.map((Me,Vt)=>{const et=Me.width*Me.height/144,ze=et*.092903,tt=Y.glassRatePerM2;return{name:Me.name||`Item ${Vt+1}`,type:Me.type,width:Me.width,height:Me.height,area:et,rate:tt,total:ze*tt*Me.quantity}}),B={invoiceNumber:p.quotationId||`QUOT-${Date.now()}`,date:p.createdAt?new Date(p.createdAt):new Date,customerName:p.customerName,customerPhone:p.customerPhone,customerEmail:p.customerEmail||"N/A",customerAddress:"",items:g,subtotal:p.subtotal||0,tax:p.gst||0,grandTotal:p.grandTotal||0,notes:`Total Glass Area: ${p.totalGlassArea.toFixed(2)} sq.ft
Total Frame Weight: ${p.totalFrameWeight.toFixed(2)} kg
Labor Charges: Rs. ${p.laborCharges.toLocaleString("en-IN",{minimumFractionDigits:2})}`,termsAndConditions:`1. Prices are valid for 30 days
2. Payment terms: 50% advance, 50% on completion
3. Installation charges may apply
4. Prices subject to change without notice`};console.log("Quotation data prepared:",B);let G="";try{console.log("Creating share link for quotation:",p.quotationId),G=await fh.createShareLink(p.quotationId,{readOnly:!0,expiresInDays:90,isPublic:!0,allowedUsers:[]}),console.log("Share link created:",G)}catch(Me){console.warn("Could not create share link for QR code (PDF will generate without QR):",Me)}console.log("Generating PDF with data:",{invoiceNumber:B.invoiceNumber,itemCount:B.items.length,hasShareLink:!!G});const F=await mh.generateQuotationPDF(B,{branding:{companyName:"Venkatesh Aluminium & Glass",address:"Ram Nagar Dhule",phone:"888888999",email:"shubhamj0212@gmail.com"},qrCode:G?{url:G,label:"Scan to View Online"}:void 0});console.log("PDF generated successfully, blob size:",F.size);const I=URL.createObjectURL(F),P=document.createElement("a");P.href=I,P.download=`Quotation_${p.quotationId}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(I),alert(`PDF generated successfully: ${P.download}`)}catch(g){console.error("Detailed PDF generation error:",{error:g,message:g instanceof Error?g.message:"Unknown error",stack:g instanceof Error?g.stack:void 0});const B=g instanceof Error?g.message:"Unknown error";alert(`Failed to generate PDF: ${B}

Please check the console for details.`)}finally{u(!1)}};return i.jsxs(i.Fragment,{children:[Pe&&i.jsx("div",{className:"draft-modal-overlay",onClick:yl,children:i.jsxs("div",{className:"draft-modal-card",onClick:g=>g.stopPropagation(),children:[i.jsx("div",{className:"draft-modal-title",children:"🕐 Restore Saved Draft?"}),i.jsx("p",{children:"We found a previously saved multi-item quotation draft. Would you like to continue where you left off?"}),St&&i.jsxs("small",{children:["Saved: ",new Date(St).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})]}),i.jsxs("div",{className:"d-flex",children:[i.jsx("button",{className:"draft-btn-discard",onClick:yl,children:"Discard"}),i.jsx("button",{className:"draft-btn-restore",onClick:ut,children:"Restore Draft"})]})]})}),i.jsx("style",{children:`
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
        
        /* ===== SAAS-GRADE HEADER & ACTIONS STYLES ===== */
        .saas-header-container {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(147, 51, 234, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 8px 32px rgba(124, 58, 237, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.8s ease-out;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .saas-header-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(124, 58, 237, 0.02) 50%, transparent 70%);
          pointer-events: none;
        }

        [data-bs-theme="dark"] .saas-header-container {
          background: linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* Title Section */
        .saas-title-wrapper {
          margin-bottom: 2rem;
        }

        .saas-title-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .saas-main-title {
          font-size: 2.5rem;
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f472b6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          cursor: default;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gradientFlow 8s ease-in-out infinite;
          filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
        }

        .saas-main-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #a855f7, #ec4899, #f472b6, #ec4899, #a855f7);
          background-size: 300% 100%;
          border-radius: 1.5px;
          opacity: 0.8;
          animation: neonUnderline 4s ease-in-out infinite;
          box-shadow: 
            0 0 10px rgba(168, 85, 247, 0.5),
            0 0 20px rgba(236, 72, 153, 0.3),
            0 0 30px rgba(244, 114, 182, 0.2);
        }

        .saas-main-title::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          border-radius: 16px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
          blur: 20px;
        }

        .saas-main-title:hover {
          font-weight: 700;
          letter-spacing: -0.015em;
          animation-duration: 3s;
          filter: drop-shadow(0 12px 48px rgba(168, 85, 247, 0.3)) 
                  drop-shadow(0 0 32px rgba(236, 72, 153, 0.2));
          transform: translateY(-2px);
        }

        .saas-main-title:hover::before {
          opacity: 1;
        }

        .saas-main-title:hover::after {
          height: 4px;
          animation-duration: 1.5s;
          box-shadow: 
            0 0 15px rgba(168, 85, 247, 0.8),
            0 0 30px rgba(236, 72, 153, 0.5),
            0 0 45px rgba(244, 114, 182, 0.3);
        }

        @keyframes gradientFlow {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
          }
          25% { 
            background-position: 100% 50%; 
            filter: drop-shadow(0 8px 32px rgba(236, 72, 153, 0.25));
          }
          50% { 
            background-position: 100% 100%; 
            filter: drop-shadow(0 8px 32px rgba(244, 114, 182, 0.2));
          }
          75% { 
            background-position: 0% 100%; 
            filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
          }
        }

        @keyframes neonUnderline {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.8;
          }
          25% { 
            background-position: 50% 50%;
            opacity: 0.9;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 1;
          }
          75% { 
            background-position: 150% 50%;
            opacity: 0.9;
          }
        }

        .saas-auto-save-indicator {
          display: inline-flex;
          align-items: center;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 0.875rem;
          border-radius: 12px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Meta Information Row */
        .saas-meta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(5px);
        }

        [data-bs-theme="dark"] .saas-meta-row {
          background: rgba(0, 0, 0, 0.2);
          border-color: rgba(124, 58, 237, 0.15);
        }

        .saas-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .saas-meta-icon {
          color: #7c3aed;
          font-size: 0.875rem;
        }

        .saas-status-dot {
          font-size: 0.5rem;
          color: #7c3aed;
        }

        .saas-meta-label {
          color: #64748b;
          font-weight: 500;
        }

        [data-bs-theme="dark"] .saas-meta-label {
          color: #94a3b8;
        }

        .saas-meta-value {
          color: #1e293b;
          font-weight: 600;
        }

        [data-bs-theme="dark"] .saas-meta-value {
          color: #f1f5f9;
        }

        .saas-meta-divider {
          width: 4px;
          height: 4px;
          background: #d1d5db;
          border-radius: 50%;
          flex-shrink: 0;
        }

        [data-bs-theme="dark"] .saas-meta-divider {
          background: #6b7280;
        }

        .saas-status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .saas-status-draft {
          background: rgba(107, 114, 128, 0.15);
          color: #4b5563;
          border: 1px solid rgba(107, 114, 128, 0.3);
        }

        .saas-status-finalized {
          background: rgba(16, 185, 129, 0.15);
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .saas-status-info {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .saas-meta-expired {
          color: #dc2626 !important;
          font-weight: 700;
        }

        .saas-meta-valid {
          color: #059669 !important;
          font-weight: 600;
        }

        /* Action Card */
        .saas-action-wrapper {
          display: flex;
          justify-content: center;
        }

        .saas-action-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 800px;
        }

        .saas-action-card:hover {
          box-shadow: 
            0 16px 50px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        [data-bs-theme="dark"] .saas-action-card {
          background: rgba(31, 41, 55, 0.8);
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* Action Rows */
        .saas-action-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .saas-secondary-row {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          justify-content: center;
          gap: 0.75rem;
          align-items: stretch;
        }

        .saas-secondary-row .saas-action-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-bs-theme="dark"] .saas-secondary-row {
          border-top-color: rgba(124, 58, 237, 0.2);
        }

        /* Action Buttons */
        .saas-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          white-space: nowrap;
          min-height: 48px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .saas-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .saas-action-btn:not(:disabled):hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .saas-action-btn:not(:disabled):active {
          transform: translateY(-1px) scale(0.98);
        }

        /* Button Variants */
        .saas-btn-primary {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
        }

        .saas-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%);
          box-shadow: 0 12px 35px rgba(124, 58, 237, 0.4);
          color: white;
        }

        .saas-btn-ai {
          background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          color: #92400e;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
        }

        .saas-btn-ai:hover:not(:disabled) {
          background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
          box-shadow: 0 12px 35px rgba(245, 158, 11, 0.4);
          color: #92400e;
        }

        .saas-btn-danger {
          background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
        }

        .saas-btn-danger:hover:not(:disabled) {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          box-shadow: 0 12px 35px rgba(239, 68, 68, 0.4);
          color: white;
        }

        .saas-btn-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        }

        .saas-btn-success:hover:not(:disabled) {
          background: linear-gradient(135deg, #047857 0%, #10b981 100%);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
          color: white;
        }

        .saas-btn-secondary {
          background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(107, 114, 128, 0.25);
        }

        .saas-btn-secondary:hover:not(:disabled) {
          background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%);
          box-shadow: 0 12px 35px rgba(107, 114, 128, 0.35);
          color: white;
        }

        .saas-btn-outline {
          background: rgba(124, 58, 237, 0.08);
          color: #7c3aed;
          border: 1px solid rgba(124, 58, 237, 0.2);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.1);
        }

        .saas-btn-outline:hover:not(:disabled) {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.3);
          color: #6d28d9;
        }

        [data-bs-theme="dark"] .saas-btn-outline {
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          border-color: rgba(168, 85, 247, 0.25);
        }

        [data-bs-theme="dark"] .saas-btn-outline:hover:not(:disabled) {
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
        }

        /* Button Groups and Dropdown */
        .saas-btn-group {
          display: inline-flex;
        }

        .saas-dropdown-toggle {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          min-width: auto;
        }

        .saas-dropdown-menu {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.9) 0%,
            rgba(248, 250, 252, 0.95) 50%,
            rgba(241, 245, 249, 0.9) 100%);
          backdrop-filter: blur(32px) saturate(1.8);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          box-shadow: 
            0 32px 80px rgba(124, 58, 237, 0.15),
            0 16px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(124, 58, 237, 0.1);
          padding: 1.25rem;
          margin-top: 0.75rem;
          min-width: 360px;
          max-width: 420px;
          position: relative;
          overflow: hidden;
          animation: premiumDropdownSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .saas-dropdown-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, 
            rgba(124, 58, 237, 0.03) 0%,
            rgba(168, 85, 247, 0.02) 50%,
            rgba(139, 92, 246, 0.03) 100%);
          pointer-events: none;
          z-index: -1;
        }

        [data-bs-theme="dark"] .saas-dropdown-menu {
          background: linear-gradient(145deg,
            rgba(17, 24, 39, 0.95) 0%,
            rgba(31, 41, 55, 0.98) 50%,
            rgba(55, 65, 81, 0.95) 100%);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 
            0 32px 80px rgba(0, 0, 0, 0.4),
            0 16px 40px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(168, 85, 247, 0.2);
        }

        [data-bs-theme="dark"] .saas-dropdown-menu::before {
          background: linear-gradient(145deg,
            rgba(124, 58, 237, 0.08) 0%,
            rgba(168, 85, 247, 0.05) 50%,
            rgba(139, 92, 246, 0.08) 100%);
        }

        @keyframes premiumDropdownSlide {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.92) rotateX(-10deg);
            filter: blur(4px);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-5px) scale(0.98) rotateX(-2deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        .saas-dropdown-header {
          padding: 1rem 1.25rem 1.25rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          position: relative;
        }

        .saas-dropdown-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc);
          border-radius: 1.5px;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
        }

        [data-bs-theme="dark"] .saas-dropdown-header {
          background: linear-gradient(135deg, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        [data-bs-theme="dark"] .saas-dropdown-header::after {
          background: linear-gradient(90deg, #a78bfa, #c084fc, #e879f9);
          box-shadow: 0 2px 8px rgba(167, 139, 250, 0.5);
        }

        .saas-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1.125rem 1.25rem;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          gap: 1rem;
          margin: 0.375rem 0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .saas-dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .saas-dropdown-item:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
        }

        .saas-dropdown-item:hover::before {
          left: 100%;
        }

        .saas-dropdown-item.active {
          background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.15) 0%, 
            rgba(168, 85, 247, 0.12) 100%);
          border-color: rgba(139, 92, 246, 0.3);
          color: #7c3aed;
          box-shadow: 
            0 8px 32px rgba(139, 92, 246, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-dropdown-item.active::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #8b5cf6, #a855f7);
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
        }

        [data-bs-theme="dark"] .saas-dropdown-item {
          background: rgba(31, 41, 55, 0.6);
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active {
          background: linear-gradient(135deg,
            rgba(168, 85, 247, 0.2) 0%,
            rgba(192, 132, 252, 0.15) 100%);
          border-color: rgba(168, 85, 247, 0.4);
          color: #a855f7;
          box-shadow: 
            0 8px 32px rgba(168, 85, 247, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active::after {
          background: linear-gradient(180deg, #a78bfa, #c084fc);
          box-shadow: 0 0 12px rgba(167, 139, 250, 0.8);
        }

        .saas-dropdown-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
          position: relative;
          box-shadow: 
            0 6px 20px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .saas-dropdown-icon::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .saas-dropdown-item:hover .saas-dropdown-icon {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 
            0 8px 28px rgba(139, 92, 246, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .saas-dropdown-item:hover .saas-dropdown-icon::before {
          opacity: 1;
        }

        .saas-dropdown-item.active .saas-dropdown-icon {
          box-shadow: 
            0 8px 32px rgba(139, 92, 246, 0.5),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .saas-icon-special {
          background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
          box-shadow: 
            0 6px 20px rgba(16, 185, 129, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-icon-special::before {
          background: linear-gradient(135deg, #059669, #10b981, #34d399);
        }

        .saas-dropdown-item:hover .saas-icon-special {
          box-shadow: 
            0 8px 28px rgba(16, 185, 129, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        [data-bs-theme="dark"] .saas-dropdown-icon {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%);
          box-shadow: 
            0 6px 20px rgba(167, 139, 250, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-icon {
          box-shadow: 
            0 8px 28px rgba(167, 139, 250, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-dropdown-content {
          flex: 1;
          min-width: 0;
          padding-left: 0.5rem;
        }

        .saas-dropdown-title {
          display: block;
          font-weight: 650;
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 0.375rem;
          line-height: 1.25;
          transition: all 0.3s ease;
        }

        .saas-dropdown-item:hover .saas-dropdown-title {
          color: #7c3aed;
          transform: translateX(2px);
        }

        .saas-dropdown-item.active .saas-dropdown-title {
          color: #7c3aed;
          font-weight: 700;
        }

        [data-bs-theme="dark"] .saas-dropdown-title {
          color: #f1f5f9;
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-title {
          color: #a855f7;
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active .saas-dropdown-title {
          color: #a855f7;
        }

        .saas-dropdown-desc {
          display: block;
          font-size: 0.8125rem;
          color: #64748b;
          line-height: 1.4;
          font-weight: 500;
          transition: all 0.3s ease;
          opacity: 0.85;
        }

        .saas-dropdown-item:hover .saas-dropdown-desc {
          color: #475569;
          opacity: 1;
          transform: translateX(2px);
        }

        .saas-dropdown-item.active .saas-dropdown-desc {
          color: #7c3aed;
          opacity: 0.9;
        }

        [data-bs-theme="dark"] .saas-dropdown-desc {
          color: #94a3b8;
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-desc {
          color: #cbd5e1;
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active .saas-dropdown-desc {
          color: #a855f7;
        }

        .saas-dropdown-check {
          color: #10b981;
          font-size: 1.25rem;
          margin-left: auto;
          padding-left: 0.75rem;
          opacity: 0;
          animation: checkmarkAppear 0.4s ease forwards;
        }

        @keyframes checkmarkAppear {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-90deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .saas-dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.2) 20%, 
            rgba(168, 85, 247, 0.3) 50%, 
            rgba(139, 92, 246, 0.2) 80%, 
            transparent 100%);
          margin: 1rem 1.25rem;
          position: relative;
        }

        .saas-dropdown-divider::after {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 50%, 
            transparent 100%);
        }

        [data-bs-theme="dark"] .saas-dropdown-divider {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(167, 139, 250, 0.3) 20%, 
            rgba(192, 132, 252, 0.4) 50%, 
            rgba(167, 139, 250, 0.3) 80%, 
            transparent 100%);
        }

        .saas-dropdown-special {
          position: relative;
          margin-top: 1rem;
          padding-top: 1.25rem;
        }

        .saas-dropdown-special::before {
          content: '';
          position: absolute;
          top: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 2px;
          background: linear-gradient(90deg, #10b981, #34d399);
          border-radius: 1px;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        /* Utilities */
        .saas-count-badge {
          background: rgba(255, 255, 255, 0.25);
          color: currentColor;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          margin-left: 0.5rem;
        }

        .saas-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: saasSpinnerRotate 1s linear infinite;
        }

        @keyframes saasSpinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Dark Theme Enhancements */
        [data-bs-theme="dark"] .saas-main-title {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 35%, #e879f9 70%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 8px 32px rgba(167, 139, 250, 0.2));
        }

        [data-bs-theme="dark"] .saas-main-title:hover {
          filter: drop-shadow(0 12px 48px rgba(167, 139, 250, 0.35)) 
                  drop-shadow(0 0 32px rgba(244, 114, 182, 0.2));
        }

        [data-bs-theme="dark"] .saas-main-title::before {
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(244, 114, 182, 0.1));
        }

        /* Premium Accent Line */
        .saas-title-accent {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc, #ec4899);
          background-size: 200% 100%;
          border-radius: 2px;
          margin: 0.75rem 0 1.5rem 0;
          position: relative;
          animation: accentFlow 6s ease-in-out infinite;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
          transition: all 0.4s ease;
        }

        .saas-title-accent::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: inherit;
          border-radius: inherit;
          opacity: 0.4;
          filter: blur(8px);
          z-index: -1;
        }

        [data-bs-theme="dark"] .saas-title-accent {
          background: linear-gradient(90deg, #a78bfa, #c084fc, #e879f9, #f472b6);
          box-shadow: 0 4px 12px rgba(167, 139, 250, 0.4);
        }

        .saas-main-title:hover + .saas-title-accent {
          width: 180px;
          animation-duration: 2s;
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }

        [data-bs-theme="dark"] .saas-main-title:hover + .saas-title-accent {
          box-shadow: 0 6px 20px rgba(167, 139, 250, 0.6);
        }

        @keyframes accentFlow {
          0%, 100% { 
            background-position: 0% 50%;
            transform: scaleX(1);
          }
          25% { 
            background-position: 100% 50%;
            transform: scaleX(1.05);
          }
          50% { 
            background-position: 200% 50%;
            transform: scaleX(1);
          }
          75% { 
            background-position: 100% 50%;
            transform: scaleX(1.05);
          }
        }

        /* Premium Container Enhancement */
        .saas-title-wrapper {
          margin-bottom: 2rem;
          position: relative;
        }

        .saas-title-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        /* UI Improvements & Fixes */
        .saas-btn-group {
          position: relative;
          z-index: 1050;
        }

        .saas-dropdown-menu {
          z-index: 1060 !important;
          position: absolute !important;
          transform: translateZ(0);
          will-change: transform;
        }

        .saas-more-actions {
          position: relative;
          z-index: 1050;
        }

        /* Fix dropdown positioning */
        .saas-header-container {
          position: relative;
          z-index: 10;
          overflow: visible;
        }

        .saas-action-card {
          overflow: visible;
          position: relative;
          z-index: 20;
        }

        .saas-action-wrapper {
          overflow: visible;
        }

        /* Button Alignment Improvements */
        .saas-action-row {
          align-items: stretch;
        }

        .saas-action-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .saas-action-btn:focus {
          outline: 2px solid rgba(139, 92, 246, 0.5);
          outline-offset: 2px;
        }

        .saas-dropdown-toggle {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Smooth Button Group Integration */
        .saas-btn-group .saas-action-btn:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .saas-btn-group .saas-dropdown-toggle {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Hover State Consistency */
        .saas-action-btn:hover:not(:disabled) {
          z-index: 2;
        }

        /* Loading State Improvements */
        .saas-spinner {
          display: inline-block;
        }

        /* Enhanced Responsive Design */
        @media (max-width: 991.98px) {
          .saas-dropdown-menu {
            min-width: 340px;
            max-width: 380px;
          }
        }

        @media (max-width: 768px) {
          .saas-header-container {
            padding: 1.5rem 1.25rem;
            margin-bottom: 2rem;
            border-radius: 20px;
            box-shadow: 
              0 12px 40px rgba(124, 58, 237, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
          }
          
          .saas-title-wrapper {
            margin-bottom: 1.75rem;
          }
          
          .saas-title-content {
            text-align: center;
            align-items: center;
            gap: 1.25rem;
          }
          
          .saas-main-title {
            font-size: 1.875rem;
            font-weight: 650;
            letter-spacing: -0.02em;
            justify-content: center;
            text-align: center;
            margin-bottom: 0.5rem;
          }

          .saas-main-title::after {
            bottom: -8px;
            height: 2.5px;
            left: 10%;
            right: 10%;
          }

          .saas-title-accent {
            display: none;
          }
          
          .saas-meta-row {
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
            border-radius: 16px;
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(124, 58, 237, 0.15);
          }
          
          .saas-meta-item {
            font-size: 0.8125rem;
            gap: 0.375rem;
          }
          
          .saas-action-card {
            padding: 1.25rem;
            border-radius: 18px;
            box-shadow: 
              0 8px 32px rgba(124, 58, 237, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
          }
          
          .saas-action-row {
            justify-content: center;
            gap: 0.625rem;
          }
          
          .saas-action-btn {
            flex: 1;
            max-width: 100px;
            justify-content: center;
            min-width: auto;
            padding: 0.75rem 0.5rem;
            border-radius: 12px;
            height: 44px;
            font-size: 0.875rem;
          }
          
          .saas-btn-group .saas-action-btn {
            max-width: none;
            flex: 1;
          }
          
          .saas-dropdown-toggle {
            padding: 0.75rem 0.5rem;
            min-width: 40px;
            border-radius: 0 12px 12px 0;
          }
          
          .saas-btn-text {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .saas-header-container {
            padding: 1rem;
          }
          
          .saas-main-title {
            font-size: 1.625rem;
            font-weight: 600;
            letter-spacing: -0.015em;
          }
          
          .saas-title-accent {
            width: 60px;
          }
          
          .saas-meta-row {
            padding: 0.625rem;
          }
          
          .saas-action-card {
            padding: 0.875rem;
          }
          
          .saas-action-btn {
            padding: 0.625rem 0.375rem;
            font-size: 0.8rem;
            height: 44px;
          }
          
          .saas-dropdown-menu {
            min-width: 260px;
            padding: 1rem;
          }
          
          .saas-dropdown-item {
            padding: 0.875rem 1rem;
            gap: 0.75rem;
          }
          
          .saas-dropdown-icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (min-width: 576px) {
          .saas-btn-text {
            display: inline;
          }
        }
        /* ===== END SAAS-GRADE HEADER & ACTIONS STYLES ===== */
        
        /* ===== PREMIUM HEADER & ACTIONS STYLES ===== */
        .premium-header-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 991.98px) {
          .premium-header-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
          }
        }

        /* Title Section */
        .premium-title-section {
          flex: 1;
          min-width: 0;
        }

        .premium-title-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.25);
          transition: all 0.3s ease;
        }

        .premium-title-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.35);
        }

        .premium-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          text-shadow: 0 4px 16px rgba(124, 58, 237, 0.2);
        }

        .premium-subtitle {
          color: #64748b;
          font-size: 1rem;
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          opacity: 0.8;
        }

        [data-bs-theme="dark"] .premium-subtitle {
          color: #94a3b8;
        }

        .premium-auto-save-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .premium-meta-info {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-meta-info {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        .premium-meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .premium-meta-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
        }

        [data-bs-theme="dark"] .premium-meta-label {
          color: #9ca3af;
        }

        .premium-meta-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        [data-bs-theme="dark"] .premium-meta-value {
          color: #f3f4f6;
        }

        .premium-meta-separator {
          color: #d1d5db;
          font-weight: bold;
        }

        [data-bs-theme="dark"] .premium-meta-separator {
          color: #6b7280;
        }

        .premium-status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          letter-spacing: 0.025em;
        }

        /* Actions Section */
        .premium-actions-section {
          display: flex;
          align-items: flex-start;
        }

        .premium-actions-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 
            0 8px 32px rgba(124, 58, 237, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        [data-bs-theme="dark"] .premium-actions-card {
          background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%);
          border-color: rgba(168, 85, 247, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .premium-actions-card:hover {
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .premium-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .premium-secondary-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-secondary-actions {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        .premium-mobile-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-mobile-actions {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        /* Action Buttons */
        .premium-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.25rem;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          height: 48px;
          cursor: pointer;
          text-decoration: none;
        }

        .premium-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .premium-action-btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .premium-action-btn:not(:disabled):active {
          transform: translateY(0);
        }

        /* Button Variants */
        .premium-btn-primary {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          color: white;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .premium-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
          color: white;
        }

        .premium-btn-warning {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: #92400e;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .premium-btn-warning:hover:not(:disabled) {
          background: linear-gradient(135deg, #d97706, #f59e0b);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
          color: #92400e;
        }

        .premium-btn-danger {
          background: linear-gradient(135deg, #ef4444, #f87171);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .premium-btn-danger:hover:not(:disabled) {
          background: linear-gradient(135deg, #dc2626, #ef4444);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
          color: white;
        }

        .premium-btn-success {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .premium-btn-success:hover:not(:disabled) {
          background: linear-gradient(135deg, #059669, #047857);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          color: white;
        }

        .premium-btn-secondary {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
          color: white;
          box-shadow: 0 4px 15px rgba(107, 114, 128, 0.3);
        }

        .premium-btn-secondary:hover:not(:disabled) {
          background: linear-gradient(135deg, #4b5563, #6b7280);
          box-shadow: 0 8px 25px rgba(107, 114, 128, 0.4);
          color: white;
        }

        .premium-btn-outline {
          background: rgba(255, 255, 255, 0.1);
          color: #374151;
          border: 1px solid rgba(124, 58, 237, 0.3);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-btn-outline {
          color: #f3f4f6;
          border-color: rgba(168, 85, 247, 0.4);
        }

        .premium-btn-outline:hover:not(:disabled) {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.5);
          color: #7c3aed;
        }

        [data-bs-theme="dark"] .premium-btn-outline:hover:not(:disabled) {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
        }

        /* Button Group & Dropdown */
        .premium-btn-group {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .premium-dropdown-toggle {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(146, 64, 14, 0.2);
          padding: 0.75rem 0.875rem;
          min-width: auto;
        }

        .premium-dropdown-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          padding: 0.75rem;
          margin-top: 0.5rem;
          min-width: 280px;
          animation: dropdownFade 0.3s ease;
        }

        [data-bs-theme="dark"] .premium-dropdown-menu {
          background: rgba(31, 41, 55, 0.95);
          border-color: rgba(168, 85, 247, 0.3);
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .premium-dropdown-header {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #7c3aed;
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
          margin: 0 0 0.5rem 0;
        }

        [data-bs-theme="dark"] .premium-dropdown-header {
          color: #a855f7;
          border-bottom-color: rgba(168, 85, 247, 0.2);
        }

        .premium-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-align: left;
          margin: 0.125rem 0;
          color: #374151;
        }

        [data-bs-theme="dark"] .premium-dropdown-item {
          color: #f3f4f6;
        }

        .premium-dropdown-item:hover {
          background: rgba(124, 58, 237, 0.08);
          transform: translateX(3px);
          color: #7c3aed;
        }

        [data-bs-theme="dark"] .premium-dropdown-item:hover {
          background: rgba(168, 85, 247, 0.15);
          color: #a855f7;
        }

        .premium-dropdown-item.active {
          background: rgba(124, 58, 237, 0.15);
          color: #7c3aed;
          font-weight: 600;
        }

        [data-bs-theme="dark"] .premium-dropdown-item.active {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
        }

        .premium-dropdown-special {
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          margin-top: 0.5rem;
          padding-top: 1rem;
        }

        .premium-dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
          margin: 0.75rem 0;
          border: none;
        }

        /* Utility Classes */
        .premium-count-badge {
          background: rgba(255, 255, 255, 0.25);
          color: currentColor;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.125rem 0.375rem;
          border-radius: 6px;
        }

        .premium-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .premium-main-title {
            font-size: 2rem;
          }
          
          .premium-title-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
          
          .premium-actions-card {
            padding: 1rem;
          }
          
          .premium-actions-row {
            gap: 0.5rem;
          }
          
          .premium-action-btn {
            height: 44px;
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
          }
        }

        @media (max-width: 576px) {
          .premium-main-title {
            font-size: 1.75rem;
          }
          
          .premium-subtitle {
            font-size: 0.875rem;
          }
          
          .premium-meta-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .premium-action-btn {
            padding: 0.75rem;
            min-width: 48px;
          }
        }
        /* ===== END PREMIUM HEADER & ACTIONS STYLES ===== */
        
        /* ===== RESPONSIVE ACTION TOOLBAR STYLES ===== */
        .card-toolbar {
          background: linear-gradient(135deg, rgba(86, 61, 124, 0.08) 0%, rgba(59, 42, 89, 0.12) 100%);
          backdrop-filter: blur(10px);
          padding: 0.875rem 1.25rem;
          border-radius: 14px;
          border: 1px solid rgba(86, 61, 124, 0.15);
          box-shadow: 
            0 4px 12px rgba(86, 61, 124, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-bs-theme="dark"] .card-toolbar {
          background: linear-gradient(135deg, rgba(86, 61, 124, 0.15) 0%, rgba(59, 42, 89, 0.25) 100%);
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .card-toolbar:hover {
          box-shadow: 
            0 6px 18px rgba(86, 61, 124, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        [data-bs-theme="dark"] .card-toolbar:hover {
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        /* Action Button Base Styles */
        .action-btn {
          padding: 0.5rem 1rem !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          border-radius: 10px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
          border-width: 1.5px !important;
          min-height: 44px; /* Touch-friendly */
          white-space: nowrap;
        }

        .action-btn:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15) !important;
        }

        .action-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }

        /* Primary button with gradient */
        .btn-primary.action-btn {
          background: linear-gradient(135deg, #563d7c 0%, #3b2a59 100%) !important;
          border-color: #563d7c !important;
        }

        .btn-primary.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #6a4a96 0%, #4a366e 100%) !important;
          box-shadow: 0 6px 20px rgba(86, 61, 124, 0.35) !important;
        }

        /* Success button */
        .btn-success.action-btn {
          background: linear-gradient(135deg, #28a745 0%, #218838 100%) !important;
          border-color: #28a745 !important;
        }

        .btn-success.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #34ce57 0%, #28a745 100%) !important;
          box-shadow: 0 6px 20px rgba(40, 167, 69, 0.35) !important;
        }

        /* Danger button */
        .btn-danger.action-btn {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
          border-color: #dc3545 !important;
        }

        .btn-danger.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #e4606d 0%, #dc3545 100%) !important;
          box-shadow: 0 6px 20px rgba(220, 53, 69, 0.35) !important;
        }

        /* Warning subtle button */
        .btn-warning-subtle.action-btn {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%) !important;
          color: #856404 !important;
          border-color: #ffc107 !important;
          font-weight: 600 !important;
        }

        [data-bs-theme="dark"] .btn-warning-subtle.action-btn {
          background: linear-gradient(135deg, #b8860b 0%, #daa520 100%) !important;
          color: #fff8dc !important;
          border-color: #ffc107 !important;
        }

        .btn-warning-subtle.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ffe082 0%, #ffd54f 100%) !important;
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.35) !important;
          transform: translateY(-2px) scale(1.03);
        }

        /* Outline secondary button */
        .btn-outline-secondary.action-btn {
          background: rgba(255, 255, 255, 0.5) !important;
          backdrop-filter: blur(8px);
          border-color: rgba(108, 117, 125, 0.5) !important;
          color: #495057 !important;
        }

        [data-bs-theme="dark"] .btn-outline-secondary.action-btn {
          background: rgba(52, 58, 64, 0.5) !important;
          border-color: rgba(173, 181, 189, 0.3) !important;
          color: #adb5bd !important;
        }

        .btn-outline-secondary.action-btn:hover:not(:disabled) {
          background: rgba(108, 117, 125, 0.15) !important;
          border-color: rgba(108, 117, 125, 0.7) !important;
          color: #495057 !important;
        }

        /* Outline primary button (More Actions) */
        .btn-outline-primary.action-btn {
          background: rgba(255, 255, 255, 0.5) !important;
          backdrop-filter: blur(8px);
          border-color: rgba(86, 61, 124, 0.5) !important;
          color: #563d7c !important;
        }

        [data-bs-theme="dark"] .btn-outline-primary.action-btn {
          background: rgba(86, 61, 124, 0.2) !important;
          border-color: rgba(139, 92, 246, 0.4) !important;
          color: #a78bfa !important;
        }

        .btn-outline-primary.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #563d7c 0%, #3b2a59 100%) !important;
          border-color: #563d7c !important;
          color: white !important;
        }

        /* Disabled state */
        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }

        /* Icon spacing */
        .action-btn i {
          font-size: 1rem;
          vertical-align: middle;
        }

        /* Dropdown menu styling */
        .card-toolbar .dropdown-menu {
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          padding: 0.5rem;
          min-width: 240px;
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-menu {
          background: #2d3748;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .card-toolbar .dropdown-item {
          border-radius: 8px;
          padding: 0.625rem 1rem;
          transition: all 0.2s;
          font-size: 0.875rem;
        }

        .card-toolbar .dropdown-item:hover {
          background: rgba(86, 61, 124, 0.1);
          transform: translateX(4px);
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-item:hover {
          background: rgba(139, 92, 246, 0.2);
        }

        .card-toolbar .dropdown-item i {
          font-size: 1rem;
          width: 20px;
          text-align: center;
        }

        .card-toolbar .dropdown-header {
          font-weight: 700;
          color: #563d7c;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.5rem 1rem;
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-header {
          color: #a78bfa;
        }

        .card-toolbar .dropdown-divider {
          margin: 0.5rem 0;
          opacity: 0.2;
        }

        /* Responsive adjustments */
        @media (max-width: 991.98px) {
          .card-toolbar {
            padding: 0.75rem 1rem;
          }

          .action-btn {
            font-size: 0.8125rem !important;
            padding: 0.5rem 0.875rem !important;
          }
        }

        @media (max-width: 575.98px) {
          .card-toolbar {
            padding: 0.625rem 0.875rem;
            gap: 0.5rem !important;
          }

          .action-btn {
            font-size: 0.75rem !important;
            padding: 0.5rem 0.75rem !important;
          }

          .action-btn i {
            font-size: 0.875rem;
          }
        }

        /* Animation for toolbar appearance */
        @keyframes toolbarSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-toolbar {
          animation: toolbarSlideIn 0.4s ease-out;
        }
        /* ===== END TOOLBAR STYLES ===== */
        
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

          /* Draft Controls Mobile Styling */
          .saas-draft-controls-container {
            margin: 1.5rem 1rem;
            padding: 1.25rem;
            border-radius: 18px;
          }

          .saas-draft-controls-container .d-flex {
            gap: 0.75rem;
            flex-direction: column;
            align-items: center;
          }

          .draft-control-btn {
            padding: 0.75rem 2rem;
            font-size: 0.9rem;
            border-radius: 14px;
            min-width: 160px;
            box-shadow: 
              0 6px 20px rgba(124, 58, 237, 0.3),
              0 0 15px rgba(168, 85, 247, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .draft-control-btn:hover {
            box-shadow: 
              0 10px 30px rgba(124, 58, 237, 0.45),
              0 0 25px rgba(168, 85, 247, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .draft-indicator {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
            border-radius: 12px;
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid rgba(76, 175, 80, 0.4);
            color: rgba(76, 220, 80, 1);
            text-align: center;
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
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
          border: none;
          color: white;
          border-radius: 12px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 4px 16px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .draft-control-btn:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #a855f7 100%);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 24px rgba(124, 58, 237, 0.4),
            0 0 20px rgba(168, 85, 247, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .draft-control-btn::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 100%);
          border-radius: 13px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .draft-control-btn:hover::before {
          opacity: 1;
        }

        /* Floating Draft Controls Container */
        .saas-draft-controls-container {
          margin: 2rem auto;
          padding: 1.5rem;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 20px;
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          animation: fadeInUp 0.6s ease-out 1s both;
          text-align: center;
        }

        .saas-draft-controls-container .d-flex {
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
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
      `}),K&&Q&&i.jsx("div",{className:"ai-modal-backdrop",onClick:()=>ee(!1),children:i.jsxs("div",{className:"ai-modal-content",onClick:g=>g.stopPropagation(),children:[i.jsx("div",{className:"p-4 border-bottom bg-gradient",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:i.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[i.jsxs("div",{className:"d-flex align-items-center text-white",children:[i.jsx("div",{className:"me-3",style:{fontSize:"2.5rem"},children:"🤖"}),i.jsxs("div",{children:[i.jsx("h4",{className:"mb-1",children:"Estimatix AI Assistant"}),i.jsx("small",{className:"opacity-75",children:"Intelligent Estimation Engine v1.4"})]})]}),i.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>ee(!1),children:i.jsx("i",{className:"bi bi-x-lg"})})]})}),i.jsxs("div",{className:"p-4",children:[i.jsxs("div",{className:"mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[i.jsx("span",{className:"fw-bold",children:"🔮 AI Confidence Score"}),i.jsxs("span",{className:"badge bg-success",children:[Q.confidence,"%"]})]}),i.jsx("div",{className:"confidence-bar",children:i.jsx("div",{className:"confidence-fill",style:{width:`${Q.confidence}%`}})}),i.jsx("small",{className:"text-muted",children:"Based on training data and similar project patterns"})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("h5",{className:"mb-3",children:"✨ Recommended Setup"}),i.jsxs("div",{className:"bg-light p-3 rounded",children:[i.jsxs("div",{className:"mb-3",children:[i.jsxs("span",{className:"ai-tag size",children:["📏 ",Q.preset.size.toUpperCase()," (",Q.preset.width,"m × ",Q.preset.height,"m)"]}),i.jsxs("span",{className:"ai-tag mode",children:["🎯 ",Q.mode.charAt(0).toUpperCase()+Q.mode.slice(1)," Mode"]})]}),i.jsx("div",{className:"mb-2",children:i.jsxs("span",{className:"ai-tag glass",children:[i.jsx("i",{className:"bi bi-square me-1"}),Q.preset.glassType]})}),i.jsx("div",{className:"mb-2",children:i.jsxs("span",{className:"ai-tag frame",children:[i.jsx("i",{className:"bi bi-grid-3x3 me-1"}),Q.preset.frameType]})}),i.jsxs("div",{children:[i.jsx("strong",{className:"d-block mb-2",children:"Accessories:"}),Q.preset.accessories.map((g,B)=>i.jsx("span",{className:"badge bg-secondary me-1 mb-1",children:g},B))]})]})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("h5",{className:"mb-3",children:"💰 Cost Preview (Estimated)"}),i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsx("span",{children:"Material Cost:"}),i.jsxs("strong",{children:["₹ ",Q.estimatedCost.material.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsx("span",{children:"Labor Estimate:"}),i.jsxs("strong",{children:["₹ ",Q.estimatedCost.labor.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsxs("span",{children:["GST (",Y.gstPercent,"%):"]}),i.jsxs("strong",{children:["₹ ",Q.estimatedCost.gst.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),i.jsx("hr",{}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("strong",{children:"Total Estimate:"}),i.jsxs("strong",{className:"text-success fs-5",children:["₹ ",Q.estimatedCost.total.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("h5",{className:"mb-3",children:"💡 AI Insights"}),i.jsx("div",{className:"alert alert-info mb-0",children:i.jsx("ul",{className:"mb-0 ps-3",children:Q.insights.map((g,B)=>i.jsx("li",{className:"mb-2",children:g},B))})})]}),i.jsx("div",{className:"mb-4",children:i.jsxs("div",{className:"alert alert-success",children:[i.jsx("strong",{children:"🎯 Perfect For:"})," ",Q.preset.useCase]})}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsxs("button",{className:"btn btn-primary flex-grow-1",onClick:Ca,children:[i.jsx("i",{className:"bi bi-check-circle me-2"}),"Apply AI Estimation"]}),i.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>ee(!1),children:[i.jsx("i",{className:"bi bi-x-circle me-2"}),"Cancel"]})]}),i.jsxs("div",{className:"text-center mt-3",children:[i.jsx("small",{className:"text-muted",children:"Was this estimation helpful?"}),i.jsxs("div",{className:"mt-2",children:[i.jsxs("button",{className:"btn btn-sm btn-outline-success me-2",children:[i.jsx("i",{className:"bi bi-hand-thumbs-up"})," Accurate"]}),i.jsxs("button",{className:"btn btn-sm btn-outline-warning",children:[i.jsx("i",{className:"bi bi-hand-thumbs-down"})," Needs Improvement"]})]})]})]})]})}),i.jsx("div",{className:"container-fluid py-4",children:i.jsxs("div",{className:"saas-header-container mb-4",children:[i.jsx("div",{className:"saas-title-wrapper",children:i.jsxs("div",{className:"saas-title-content",children:[i.jsxs("h1",{className:"saas-main-title",children:["Multi-Item Quotation",z&&i.jsxs("span",{className:"saas-auto-save-indicator",children:[i.jsx("i",{className:"bi bi-cloud-arrow-up-fill me-1"}),"Auto-saving..."]})]}),i.jsx("div",{className:"saas-title-accent"}),i.jsxs("div",{className:"saas-meta-row",children:[i.jsxs("div",{className:"saas-meta-item",children:[i.jsx("i",{className:"bi bi-hash saas-meta-icon"}),i.jsx("span",{className:"saas-meta-label",children:"ID:"}),i.jsx("span",{className:"saas-meta-value",children:p.quotationId})]}),i.jsx("div",{className:"saas-meta-divider"}),i.jsxs("div",{className:"saas-meta-item",children:[i.jsx("i",{className:"bi bi-circle-fill saas-status-dot"}),i.jsx("span",{className:"saas-meta-label",children:"Status:"}),i.jsx("span",{className:`saas-status-badge saas-status-${p.status}`,children:p.status?.toUpperCase()})]}),i.jsx("div",{className:"saas-meta-divider d-none d-md-block"}),i.jsxs("div",{className:"saas-meta-item d-none d-md-flex",children:[i.jsx("i",{className:"bi bi-calendar3 saas-meta-icon"}),i.jsx("span",{className:"saas-meta-label",children:"Created:"}),i.jsx("span",{className:"saas-meta-value",children:new Date(p.createdAt).toLocaleDateString()})]}),i.jsx("div",{className:"saas-meta-divider d-none d-lg-block"}),i.jsxs("div",{className:"saas-meta-item d-none d-lg-flex",children:[i.jsx("i",{className:"bi bi-clock saas-meta-icon"}),i.jsx("span",{className:"saas-meta-label",children:"Valid Until:"}),i.jsxs("span",{className:`saas-meta-value ${new Date(p.validUntil||"")<new Date?"saas-meta-expired":"saas-meta-valid"}`,children:[p.validUntil?new Date(p.validUntil).toLocaleDateString():"N/A",new Date(p.validUntil||"")<new Date&&i.jsx("i",{className:"bi bi-exclamation-triangle-fill ms-1 text-warning"})]})]})]})]})}),i.jsx("div",{className:"saas-action-wrapper",children:i.jsxs("div",{className:"saas-action-card",children:[i.jsxs("div",{className:"saas-action-row",children:[i.jsxs("button",{className:"saas-action-btn saas-btn-primary",onClick:ei,title:"Add New Item",children:[i.jsx("i",{className:"bi bi-plus-circle"}),i.jsx("span",{className:"saas-btn-text",children:"Add Item"})]}),i.jsxs("div",{className:"saas-btn-group",children:[i.jsxs("button",{className:"saas-action-btn saas-btn-ai",onClick:()=>{const g=p.items[p.items.length-1];g?ia(g.id,g.type):alert("Please add an item first!")},disabled:p.items.length===0,title:"AI-Assisted Estimation",children:[i.jsx("i",{className:"bi bi-lightbulb-fill"}),i.jsx("span",{className:"saas-btn-text",children:"AI Estimate"})]}),i.jsx("button",{className:"saas-action-btn saas-btn-ai saas-dropdown-toggle","data-bs-toggle":"dropdown",title:"AI Mode Settings",children:i.jsx("i",{className:"bi bi-chevron-down"})}),i.jsxs("ul",{className:"dropdown-menu saas-dropdown-menu",children:[i.jsxs("li",{className:"saas-dropdown-header",children:[i.jsx("i",{className:"bi bi-robot me-2"}),"AI Optimization Mode"]}),i.jsx("li",{children:i.jsxs("button",{className:`saas-dropdown-item ${M==="residential"?"active":""}`,onClick:()=>q("residential"),children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-house-door"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Residential"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Cost-efficient materials"})]}),M==="residential"&&i.jsx("i",{className:"bi bi-check-circle-fill saas-dropdown-check"})]})}),i.jsx("li",{children:i.jsxs("button",{className:`saas-dropdown-item ${M==="commercial"?"active":""}`,onClick:()=>q("commercial"),children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-building"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Commercial"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Maximum durability"})]}),M==="commercial"&&i.jsx("i",{className:"bi bi-check-circle-fill saas-dropdown-check"})]})}),i.jsx("li",{children:i.jsxs("button",{className:`saas-dropdown-item ${M==="thermal"?"active":""}`,onClick:()=>q("thermal"),children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-thermometer-half"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Thermal Efficiency"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Insulation optimized"})]}),M==="thermal"&&i.jsx("i",{className:"bi bi-check-circle-fill saas-dropdown-check"})]})}),i.jsx("li",{children:i.jsxs("button",{className:`saas-dropdown-item ${M==="premium"?"active":""}`,onClick:()=>q("premium"),children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-gem"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Premium Aesthetic"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Superior quality"})]}),M==="premium"&&i.jsx("i",{className:"bi bi-check-circle-fill saas-dropdown-check"})]})}),i.jsx("li",{children:i.jsx("hr",{className:"saas-dropdown-divider"})}),i.jsx("li",{children:i.jsxs("button",{className:"saas-dropdown-item saas-dropdown-special",onClick:()=>Fe(!Ee),children:[i.jsx("div",{className:"saas-dropdown-icon saas-icon-special",children:i.jsx("i",{className:"bi bi-clock-history"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"View AI History"}),i.jsxs("small",{className:"saas-dropdown-desc",children:[ie.length," estimations"]})]})]})})]})]}),i.jsx("button",{className:"saas-action-btn saas-btn-danger",onClick:wi,disabled:r||p.items.length===0,title:"Generate PDF Report",children:r?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"saas-spinner"}),i.jsx("span",{className:"saas-btn-text",children:"Generating..."})]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-file-earmark-pdf"}),i.jsx("span",{className:"saas-btn-text",children:"Generate PDF"})]})}),i.jsxs("div",{className:"saas-more-actions d-lg-none",children:[i.jsxs("button",{className:"saas-action-btn saas-btn-outline","data-bs-toggle":"dropdown",title:"More Actions",children:[i.jsx("i",{className:"bi bi-three-dots"}),i.jsx("span",{className:"saas-btn-text d-none d-md-inline",children:"More"})]}),i.jsxs("ul",{className:"dropdown-menu saas-dropdown-menu dropdown-menu-end",children:[i.jsx("li",{children:i.jsxs("button",{className:"saas-dropdown-item",onClick:()=>D(!w),children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-bookmark-star"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Templates"}),i.jsxs("small",{className:"saas-dropdown-desc",children:[y.length," saved"]})]})]})}),i.jsx("li",{children:i.jsxs("button",{className:"saas-dropdown-item",onClick:Ni,children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-bookmark-plus"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Save Template"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Create new template"})]})]})}),i.jsx("li",{children:i.jsxs("button",{className:"saas-dropdown-item",onClick:ti,disabled:c||p.items.length===0,children:[i.jsx("div",{className:"saas-dropdown-icon",children:i.jsx("i",{className:"bi bi-cloud-check"})}),i.jsxs("div",{className:"saas-dropdown-content",children:[i.jsx("span",{className:"saas-dropdown-title",children:"Save to Firebase"}),i.jsx("small",{className:"saas-dropdown-desc",children:"Backup to cloud"})]})]})})]})]})]}),i.jsxs("div",{className:"saas-secondary-row d-none d-lg-flex",children:[i.jsxs("button",{className:"saas-action-btn saas-btn-secondary",onClick:()=>D(!w),title:"Manage Templates",children:[i.jsx("i",{className:"bi bi-bookmark-star"}),i.jsx("span",{className:"saas-btn-text",children:"Templates"}),i.jsx("span",{className:"saas-count-badge",children:y.length})]}),i.jsxs("button",{className:"saas-action-btn saas-btn-outline",onClick:Ni,title:"Save as Template",children:[i.jsx("i",{className:"bi bi-bookmark-plus"}),i.jsx("span",{className:"saas-btn-text",children:"Save Template"})]}),i.jsx("button",{className:"saas-action-btn saas-btn-success",onClick:ti,disabled:c||p.items.length===0,title:"Save to Firebase",children:c?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"saas-spinner"}),i.jsx("span",{className:"saas-btn-text",children:"Saving..."})]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-cloud-check"}),i.jsx("span",{className:"saas-btn-text",children:"Save to Firebase"})]})})]})]})})]})}),w&&y.length>0&&i.jsx("div",{className:"row mb-3",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"card border-primary shadow-sm rounded-3",children:[i.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[i.jsxs("h5",{className:"mb-0 fw-semibold",children:[i.jsx("i",{className:"bi bi-bookmark-star me-2 fs-6"}),"Item Templates"]}),i.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>D(!1),children:i.jsx("i",{className:"bi bi-x fs-6"})})]}),i.jsx("div",{className:"card-body",children:i.jsx("div",{className:"row g-3",children:y.map(g=>i.jsx("div",{className:"col-md-4",children:i.jsx("div",{className:"card h-100 shadow-sm rounded-3",children:i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsx("h6",{className:"card-title mb-0 fw-semibold",children:g.name}),i.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:B=>{B.stopPropagation(),gl(g.id)},title:"Delete template",children:i.jsx("i",{className:"bi bi-trash fs-6"})})]}),i.jsxs("p",{className:"card-text small text-muted mb-2",children:[g.width,"m × ",g.height,"m | ",g.glassType]}),i.jsxs("button",{className:"btn btn-sm btn-primary w-100",onClick:()=>vn(g),children:[i.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add to Quotation"]})]})})},g.id))})})]})})}),Ee&&ie.length>0&&i.jsx("div",{className:"row mb-3",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"card border-warning shadow-sm rounded-3",children:[i.jsxs("div",{className:"card-header bg-warning text-dark d-flex justify-content-between align-items-center",children:[i.jsxs("h5",{className:"mb-0 fw-semibold",children:[i.jsx("i",{className:"bi bi-clock-history me-2 fs-6"}),"🤖 AI Estimation History"]}),i.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Fe(!1),children:i.jsx("i",{className:"bi bi-x fs-6"})})]}),i.jsx("div",{className:"card-body",children:i.jsx("div",{className:"row g-3",children:ie.map(g=>i.jsx("div",{className:"col-md-6",children:i.jsx("div",{className:"card h-100 border-start border-warning border-4 shadow-sm rounded-3",children:i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[i.jsxs("h6",{className:"card-title mb-0 fw-semibold",children:[g.type==="window"?"🪟":"🚪"," ",g.itemName]}),i.jsx("span",{className:"badge bg-secondary",children:g.mode})]}),i.jsxs("p",{className:"card-text small text-muted mb-2",children:[i.jsx("strong",{children:"Dimensions:"})," ",g.dimensions,i.jsx("br",{}),i.jsx("strong",{children:"Applied:"})," ",new Date(g.appliedAt).toLocaleString(),i.jsx("br",{}),i.jsx("strong",{children:"Confidence:"})," ",g.result.confidence,"%"]}),i.jsx("div",{className:"d-flex gap-2",children:i.jsxs("button",{className:"btn btn-sm btn-outline-primary flex-grow-1",onClick:()=>{Z(g.result),ee(!0)},children:[i.jsx("i",{className:"bi bi-eye me-1 fs-6"}),"View Details"]})})]})})},g.id))})})]})})}),i.jsx("div",{className:"saas-draft-controls-container",children:i.jsxs("div",{className:"d-flex justify-content-center align-items-center gap-3",children:[St&&i.jsxs("span",{className:"draft-indicator",children:["💾 Draft saved ",new Date(St).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),i.jsx("button",{className:"draft-control-btn",onClick:Ni,children:"💾 Save Template"}),St&&i.jsx("button",{className:"draft-control-btn",onClick:yl,children:"🗑️ Clear Template"})]})}),i.jsx("div",{className:"row mb-3",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"card shadow-sm rounded-3",children:[i.jsx("div",{className:"card-header bg-info text-white",children:i.jsxs("h5",{className:"card-title mb-0 fw-semibold",children:[i.jsx("i",{className:"bi bi-person-fill me-2 fs-6"}),"Customer Information"]})}),i.jsx("div",{className:"card-body",children:i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label small text-muted",children:"Customer Name *"}),i.jsx("input",{type:"text",className:"form-control",value:p.customerName,onChange:g=>_(B=>({...B,customerName:g.target.value})),placeholder:"Enter customer name"})]}),i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label small text-muted",children:"Phone Number"}),i.jsx("input",{type:"tel",className:"form-control",value:p.customerPhone,onChange:g=>_(B=>({...B,customerPhone:g.target.value})),placeholder:"Enter phone number"})]}),i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label small text-muted",children:"Email Address"}),i.jsx("input",{type:"email",className:"form-control",value:p.customerEmail,onChange:g=>_(B=>({...B,customerEmail:g.target.value})),placeholder:"Enter email address"})]})]})})]})})}),i.jsx("div",{className:"row mb-3",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"card shadow-sm rounded-3",children:[i.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[i.jsxs("h5",{className:"card-title mb-0 fw-semibold",children:[i.jsx("i",{className:"bi bi-list-ul me-2 fs-6"}),"Quotation Items (",p.items.length,")"]}),p.items.length===0&&i.jsxs("button",{className:"btn btn-sm btn-light",onClick:ei,children:[i.jsx("i",{className:"bi bi-plus me-1 fs-6"}),"Add First Item"]})]}),i.jsx("div",{className:"card-body",children:p.items.length===0?i.jsxs("div",{className:"text-center py-5 text-muted",children:[i.jsx("i",{className:"bi bi-inbox display-4 d-block mb-3"}),i.jsx("h5",{children:"No items added yet"}),i.jsx("p",{children:"Add your first window or door to start building the quotation"})]}):i.jsx("div",{className:"row g-4",children:p.items.map((g,B)=>{const G=Ke(g);return i.jsx("div",{className:"col-12",draggable:!0,onDragStart:()=>bl(g.id),onDragOver:Vs,onDrop:()=>jn(g.id),style:{cursor:"move"},children:i.jsxs("div",{className:"card border-secondary shadow-sm rounded-3",children:[i.jsxs("div",{className:"card-header bg-body-tertiary d-flex justify-content-between align-items-center",children:[i.jsxs("h6",{className:"mb-0 fw-semibold",children:[i.jsx("i",{className:"bi bi-grip-vertical me-2 text-muted fs-6",title:"Drag to reorder"}),i.jsx("span",{className:"badge bg-secondary me-2",children:B+1}),g.name,g.glassArea&&g.glassArea>0&&i.jsxs("small",{className:"text-muted ms-2",children:["(",g.glassArea.toFixed(2)," m² | ",g.frameWeight?.toFixed(2)," kg)"]})]}),i.jsxs("div",{className:"btn-group btn-group-sm",children:[i.jsxs("button",{className:"btn btn-sm",style:{backgroundColor:"#fef3c7",color:"#92400e",borderColor:"#fde68a"},onClick:()=>ia(g.id,g.type),title:"AI-Assisted Estimation - Auto-fill with smart defaults",children:[i.jsx("i",{className:"bi bi-lightbulb-fill me-1 fs-6"}),"Estimate"]}),i.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:()=>xl(g.id),title:"View Cost Breakdown",children:i.jsx("i",{className:"bi bi-receipt fs-6"})}),i.jsx("button",{className:"btn btn-sm btn-outline-info",onClick:()=>pl(g.id),title:"Duplicate Item",children:i.jsx("i",{className:"bi bi-files fs-6"})}),i.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:()=>la(g),title:"Save as Template",children:i.jsx("i",{className:"bi bi-bookmark fs-6"})}),i.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>Nn(g.id),title:"Delete Item",children:i.jsx("i",{className:"bi bi-trash fs-6"})})]})]}),i.jsx("div",{className:"card-body",children:i.jsxs("div",{className:"row g-3",children:[i.jsxs("div",{className:"col-md-3",children:[i.jsx("label",{className:"form-label",children:"Item Name"}),i.jsx("input",{type:"text",className:"form-control",value:g.name,onChange:F=>Ot(g.id,"name",F.target.value)})]}),i.jsxs("div",{className:"col-md-2",children:[i.jsx("label",{className:"form-label",children:"Type"}),i.jsxs("select",{className:"form-select",value:g.type,onChange:F=>Ot(g.id,"type",F.target.value),children:[i.jsx("option",{value:"window",children:"Window"}),i.jsx("option",{value:"door",children:"Door"})]})]}),i.jsxs("div",{className:"col-md-2",children:[i.jsx("label",{className:"form-label",children:"Width (m)"}),i.jsx("input",{type:"number",className:"form-control",value:g.width,onChange:F=>Ot(g.id,"width",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),i.jsxs("div",{className:"col-md-2",children:[i.jsx("label",{className:"form-label",children:"Height (m)"}),i.jsx("input",{type:"number",className:"form-control",value:g.height,onChange:F=>Ot(g.id,"height",parseFloat(F.target.value)||0),step:"0.01",min:"0"})]}),i.jsxs("div",{className:"col-md-1",children:[i.jsx("label",{className:"form-label",children:"Qty"}),i.jsx("input",{type:"number",className:"form-control",value:g.quantity,onChange:F=>Ot(g.id,"quantity",parseInt(F.target.value)||1),min:"1"})]}),i.jsxs("div",{className:"col-md-2",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"bi bi-calculator-fill text-primary me-1"}),"Area (Auto)"]}),i.jsx("input",{type:"text",className:"form-control auto-calc-field",value:`${(g.width*g.height*g.quantity).toFixed(2)} m²`,readOnly:!0,title:"Auto-calculated: Width × Height × Quantity"})]}),i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label",children:"Glass Type"}),i.jsx("select",{className:"form-select",value:g.glassType,onChange:F=>Ot(g.id,"glassType",F.target.value),children:$.map(F=>i.jsx("option",{value:F,children:F},F))})]}),i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label",children:"Frame Type"}),i.jsx("select",{className:"form-select",value:g.frameType,onChange:F=>Ot(g.id,"frameType",F.target.value),children:je.map(F=>i.jsx("option",{value:F,children:F},F))})]}),i.jsxs("div",{className:"col-md-4",children:[i.jsx("label",{className:"form-label",children:"Accessories"}),i.jsx("div",{className:"border rounded p-2",style:{maxHeight:"100px",overflowY:"auto"},children:le.map(F=>i.jsxs("div",{className:"form-check form-check-inline",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.accessories.includes(F),onChange:()=>wn(g.id,F)}),i.jsx("label",{className:"form-check-label small",children:F})]},F))})]}),i.jsxs("div",{className:"col-12",children:[i.jsx("label",{className:"form-label",children:"Notes"}),i.jsx("textarea",{className:"form-control",rows:2,value:g.notes,onChange:F=>Ot(g.id,"notes",F.target.value),placeholder:"Add any special notes or requirements..."})]}),G.length>0&&i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"alert alert-info py-2 mb-0",children:[i.jsxs("strong",{children:[i.jsx("i",{className:"bi bi-lightbulb me-2"}),"Smart Suggestions:"]}),i.jsx("ul",{className:"mb-0 mt-1 small",children:G.map((F,I)=>i.jsx("li",{children:F},I))})]})}),g.showBreakdown&&g.itemTotal&&i.jsx("div",{className:"col-12",children:i.jsx("div",{className:"card bg-light",children:i.jsxs("div",{className:"card-body",children:[i.jsxs("h6",{className:"card-title mb-3",children:[i.jsx("i",{className:"bi bi-calculator me-2"}),"Cost Breakdown"]}),i.jsxs("div",{className:"row g-2",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("span",{children:"Glass Cost:"}),i.jsxs("strong",{children:["₹",g.glassCost?.toFixed(2)]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("span",{children:"Frame Cost:"}),i.jsxs("strong",{children:["₹",g.frameCost?.toFixed(2)]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("span",{children:"Accessories:"}),i.jsxs("strong",{children:["₹",g.accessoryCost?.toFixed(2)]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("span",{children:"Labor:"}),i.jsxs("strong",{children:["₹",g.laborCost?.toFixed(2)]})]})}),i.jsxs("div",{className:"col-12",children:[i.jsx("hr",{className:"my-2"}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx("strong",{children:"Item Total:"}),i.jsxs("strong",{className:"text-success",children:["₹",g.itemTotal?.toFixed(2)]})]})]})]})]})})})]})})]})},g.id)})})})]})})}),p.items.length>0&&i.jsx("div",{className:"row mb-5",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"premium-summary-container",children:[i.jsx("div",{className:"premium-summary-header",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("h2",{className:"premium-summary-title",children:[i.jsx("i",{className:"bi bi-bar-chart-line-fill me-2"}),"Quotation Summary",i.jsx("span",{className:"badge bg-light text-dark ms-2 animate-pulse",style:{fontSize:"0.7rem"},children:"Live"})]}),i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsxs("span",{className:"premium-timestamp",children:[i.jsx("i",{className:"bi bi-clock me-1"}),"Last updated: ",new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),i.jsx("button",{className:"btn btn-sm btn-light",onClick:wi,title:"Export Summary as PDF",children:i.jsx("i",{className:"bi bi-download"})})]})]})}),i.jsxs("div",{className:"premium-summary-grid",children:[i.jsxs("div",{className:"premium-summary-card premium-card-blue","data-metric":"items",children:[i.jsx("div",{className:"premium-card-icon",children:i.jsx("i",{className:"bi bi-receipt-cutoff"})}),i.jsx("div",{className:"premium-card-value",children:p.items.length}),i.jsx("div",{className:"premium-card-label",children:"Total Items"}),i.jsx("div",{className:"premium-card-glow"})]}),i.jsxs("div",{className:"premium-summary-card premium-card-cyan","data-metric":"area",children:[i.jsx("div",{className:"premium-card-icon",children:i.jsx("i",{className:"bi bi-grid-3x3-gap"})}),i.jsx("div",{className:"premium-card-value",children:p.totalGlassArea.toFixed(2)}),i.jsx("div",{className:"premium-card-label",children:"Glass Area (m²)"}),i.jsxs("div",{className:"premium-card-sub",children:["Avg: ",(p.totalGlassArea/p.items.length).toFixed(2)," m² per item"]}),i.jsx("div",{className:"premium-card-glow"})]}),i.jsxs("div",{className:"premium-summary-card premium-card-amber","data-metric":"weight",children:[i.jsx("div",{className:"premium-card-icon",children:i.jsx("i",{className:"bi bi-speedometer2"})}),i.jsx("div",{className:"premium-card-value",children:p.totalFrameWeight.toFixed(2)}),i.jsx("div",{className:"premium-card-label",children:"Frame Weight (kg)"}),i.jsxs("div",{className:"premium-card-sub",children:[(p.totalFrameWeight/p.totalGlassArea).toFixed(2)," kg/m²"]}),i.jsx("div",{className:"premium-card-glow"})]}),i.jsxs("div",{className:"premium-summary-card premium-card-emerald","data-metric":"total",children:[i.jsx("div",{className:"premium-card-icon",children:i.jsx("i",{className:"bi bi-currency-rupee"})}),i.jsxs("div",{className:"premium-card-value",children:["₹",p.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),i.jsx("div",{className:"premium-card-label",children:"Grand Total"}),i.jsxs("div",{className:"premium-card-sub",children:["₹",(p.grandTotal/p.totalGlassArea).toFixed(0),"/m²"]}),i.jsx("div",{className:"premium-card-glow"})]})]}),i.jsxs("div",{className:"premium-insights-row",children:[i.jsxs("div",{className:"premium-insight",children:[i.jsx("i",{className:"bi bi-lightbulb-fill text-warning me-2"}),i.jsxs("span",{children:["Based on ",i.jsxs("strong",{children:[p.items.length," items"]}),", average cost per sq.ft is ",i.jsxs("strong",{children:["₹",(p.grandTotal/p.totalGlassArea*.0929).toFixed(2)]})]})]}),i.jsxs("div",{className:"premium-insight",children:[i.jsx("i",{className:"bi bi-graph-up text-success me-2"}),i.jsxs("span",{children:["Material efficiency: ",i.jsxs("strong",{children:[(p.totalGlassArea/(p.totalGlassArea+5)*100).toFixed(1),"%"]})]})]})]}),i.jsxs("div",{className:"premium-breakdown-section",children:[i.jsxs("h6",{className:"premium-breakdown-title",children:[i.jsx("i",{className:"bi bi-pie-chart-fill me-2"}),"Detailed Cost Breakdown"]}),i.jsxs("div",{className:"premium-breakdown-grid",children:[i.jsxs("div",{className:"premium-breakdown-item",children:[i.jsx("div",{className:"premium-breakdown-bar",style:{width:`${p.subtotal/p.grandTotal*100}%`,background:"linear-gradient(90deg, #3b82f6, #2563eb)"}}),i.jsxs("div",{className:"premium-breakdown-details",children:[i.jsx("span",{className:"premium-breakdown-label",children:"Material Cost"}),i.jsxs("span",{className:"premium-breakdown-value",children:["₹",p.subtotal.toFixed(2)]}),i.jsxs("span",{className:"premium-breakdown-percent",children:[(p.subtotal/p.grandTotal*100).toFixed(1),"%"]})]})]}),i.jsxs("div",{className:"premium-breakdown-item",children:[i.jsx("div",{className:"premium-breakdown-bar",style:{width:`${p.laborCharges/p.grandTotal*100}%`,background:"linear-gradient(90deg, #f59e0b, #d97706)"}}),i.jsxs("div",{className:"premium-breakdown-details",children:[i.jsx("span",{className:"premium-breakdown-label",children:"Labor & Markup"}),i.jsxs("span",{className:"premium-breakdown-value",children:["₹",p.laborCharges.toFixed(2)]}),i.jsxs("span",{className:"premium-breakdown-percent",children:[(p.laborCharges/p.grandTotal*100).toFixed(1),"%"]})]})]}),i.jsxs("div",{className:"premium-breakdown-item",children:[i.jsx("div",{className:"premium-breakdown-bar",style:{width:`${p.gst/p.grandTotal*100}%`,background:"linear-gradient(90deg, #10b981, #059669)"}}),i.jsxs("div",{className:"premium-breakdown-details",children:[i.jsxs("span",{className:"premium-breakdown-label",children:["GST (",Y.gstPercent,"%)"]}),i.jsxs("span",{className:"premium-breakdown-value",children:["₹",p.gst.toFixed(2)]}),i.jsxs("span",{className:"premium-breakdown-percent",children:[(p.gst/p.grandTotal*100).toFixed(1),"%"]})]})]})]})]})]})})}),p.items.length>0&&i.jsx("div",{className:"position-fixed bottom-0 start-0 end-0 bg-dark text-white shadow-lg p-3",style:{zIndex:1040,animation:"pulse 2s infinite",boxShadow:"0 -5px 20px rgba(0,123,255,0.3)"},children:i.jsx("div",{className:"container-fluid",children:i.jsxs("div",{className:"row align-items-center",children:[i.jsxs("div",{className:"col-md-2 text-center",children:[i.jsx("div",{className:"fw-bold fs-5",children:p.items.length}),i.jsx("small",{children:"Items"})]}),i.jsxs("div",{className:"col-md-2 text-center",children:[i.jsxs("div",{className:"fw-bold fs-5",children:[p.totalGlassArea.toFixed(2)," m²"]}),i.jsx("small",{children:"Total Area"})]}),i.jsxs("div",{className:"col-md-2 text-center",children:[i.jsxs("div",{className:"fw-bold fs-5",children:[p.totalFrameWeight.toFixed(2)," kg"]}),i.jsx("small",{children:"Frame Weight"})]}),i.jsxs("div",{className:"col-md-3 text-center",children:[i.jsxs("div",{className:"fw-bold fs-4 text-warning",children:["₹ ",p.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),i.jsx("small",{children:"Estimated Cost"})]}),i.jsx("div",{className:"col-md-3 text-end",children:i.jsxs("div",{className:"btn-group",children:[i.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>{const g=`Hi! Here's quotation ${p.quotationId} for ${p.customerName}:

Total Items: ${p.items.length}
Total Amount: ₹${p.grandTotal.toFixed(2)}

Please review and let us know if you have any questions.`,B=`https://wa.me/${p.customerPhone.replace(/\D/g,"")}?text=${encodeURIComponent(g)}`;window.open(B,"_blank")},disabled:!p.customerPhone,children:[i.jsx("i",{className:"bi bi-whatsapp me-1"}),"WhatsApp"]}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{const g=`Quotation ${p.quotationId} - ${p.customerName}`,B=`Dear ${p.customerName},

Please find attached the quotation details:

Quotation ID: ${p.quotationId}
Total Items: ${p.items.length}
Total Amount: ₹${p.grandTotal.toFixed(2)}

Thank you for your interest.

Best Regards,
Venkatesh Aluminium & Glass`,G=`mailto:${p.customerEmail}?subject=${encodeURIComponent(g)}&body=${encodeURIComponent(B)}`;window.location.href=G},disabled:!p.customerEmail,children:[i.jsx("i",{className:"bi bi-envelope me-1"}),"Email"]}),i.jsxs("button",{className:"btn btn-danger btn-sm",onClick:wi,children:[i.jsx("i",{className:"bi bi-file-pdf me-1"}),"PDF"]})]})})]})})}),p.items.length>0&&i.jsx("div",{style:{height:"120px"}}),x.length>0&&i.jsx("div",{className:"row mt-5",children:i.jsx("div",{className:"col-12",children:i.jsxs("div",{className:"card shadow-sm",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h5",{className:"mb-0",children:[i.jsx("i",{className:"bi bi-folder-open me-2"}),"Your Saved Quotations (",x.length,")"]})}),i.jsx("div",{className:"card-body p-0",children:i.jsx("div",{className:"table-responsive",children:i.jsxs("table",{className:"table table-hover mb-0",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Quotation ID"}),i.jsx("th",{children:"Customer"}),i.jsx("th",{children:"Phone"}),i.jsx("th",{children:"Items"}),i.jsx("th",{children:"Total Amount"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Created"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:x.map(g=>{const B=g.createdAt instanceof Object&&"toDate"in g.createdAt?g.createdAt.toDate():new Date(g.createdAt),G={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{className:"text-primary",children:g.quotationId})}),i.jsx("td",{children:g.customerName}),i.jsxs("td",{children:[i.jsx("i",{className:"bi bi-telephone me-1"}),g.customerPhone]}),i.jsx("td",{children:i.jsxs("span",{className:"badge bg-secondary",children:[g.items.length," items"]})}),i.jsx("td",{children:i.jsxs("strong",{className:"text-success",children:["₹",g.grandTotal.toLocaleString()]})}),i.jsx("td",{children:i.jsx("span",{className:`badge bg-${G[g.status]}`,children:g.status.toUpperCase()})}),i.jsx("td",{children:i.jsx("small",{children:B.toLocaleDateString()})}),i.jsx("td",{children:i.jsxs("div",{className:"btn-group btn-group-sm",role:"group",children:[i.jsx("button",{className:"btn btn-outline-primary",title:"View",onClick:()=>{alert(`Viewing quotation ${g.quotationId}
Feature coming soon!`)},children:i.jsx("i",{className:"bi bi-eye"})}),i.jsx("button",{className:"btn btn-outline-danger",title:"Delete",onClick:async()=>{if(window.confirm(`Delete quotation ${g.quotationId}?`))try{g.id&&(await cl.deleteQuotation(g.id),alert("✅ Quotation deleted successfully!"),vl())}catch{alert("❌ Failed to delete quotation")}},children:i.jsx("i",{className:"bi bi-trash"})})]})})]},g.id)})})]})})}),i.jsx("div",{className:"card-footer text-muted",children:i.jsxs("small",{children:[i.jsx("i",{className:"bi bi-info-circle me-1"}),"All quotations are automatically synced with Firebase Firestore"]})})]})})})]})}function ex(){const{shareToken:d}=hg(),{user:r}=ht(),[u,c]=S.useState(null),[f,x]=S.useState(!0),[h,z]=S.useState("");if(S.useEffect(()=>{(async()=>{if(!d){z("Invalid share link"),x(!1);return}try{const N=await fh.getSharedQuote(d);N?c(N):z("Quote not found or link has expired")}catch(N){z("Error loading shared quote"),console.error(N)}finally{x(!1)}})()},[d]),f)return i.jsx("div",{className:"container py-5",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-primary",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})}),i.jsx("p",{className:"mt-3",children:"Loading shared quotation..."})]})});if(h)return i.jsx("div",{className:"container py-5",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-danger mb-3",children:i.jsx("i",{className:"bi bi-exclamation-triangle display-1"})}),i.jsx("h3",{className:"text-danger",children:"Access Denied"}),i.jsx("p",{className:"text-muted",children:h}),i.jsxs(ge,{to:"/",className:"btn btn-primary",children:[i.jsx("i",{className:"bi bi-house me-1"}),"Go to Dashboard"]})]})});if(!u)return null;const b=u.quotationData;return i.jsxs("div",{className:"min-vh-100 bg-light",children:[i.jsx("header",{className:"bg-white shadow-sm py-3",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("div",{children:[i.jsxs("h1",{className:"h5 mb-0",children:[i.jsx("i",{className:"bi bi-share me-2"}),"Shared Quotation"]}),i.jsxs("small",{className:"text-muted",children:["Shared by ",u.creatorEmail]})]}),i.jsxs("div",{className:"d-flex gap-2",children:[!u.readOnly&&r&&i.jsxs("span",{className:"badge bg-success",children:[i.jsx("i",{className:"bi bi-pencil me-1"}),"Collaborative Mode"]}),u.readOnly&&i.jsxs("span",{className:"badge bg-info",children:[i.jsx("i",{className:"bi bi-eye me-1"}),"Read Only"]}),i.jsxs(ge,{to:"/",className:"btn btn-sm btn-outline-primary",children:[i.jsx("i",{className:"bi bi-box-arrow-left me-1"}),"Exit"]})]})]})})}),i.jsx("div",{className:"container py-4",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-8 mx-auto",children:i.jsxs("div",{className:"card shadow-sm",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("h5",{className:"card-title mb-0",children:[i.jsx("i",{className:"bi bi-file-earmark-text me-2"}),"Quotation Details"]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsxs("button",{className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-download me-1"}),"Download PDF"]}),i.jsxs("button",{className:"btn btn-outline-light btn-sm",children:[i.jsx("i",{className:"bi bi-printer me-1"}),"Print"]})]})]})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"row mb-4",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"fw-bold text-primary",children:"Quote Information"}),i.jsx("table",{className:"table table-sm table-borderless",children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Quote ID:"})}),i.jsx("td",{children:b?.invoiceNumber||"N/A"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Date:"})}),i.jsx("td",{children:b?.date?new Date(b.date).toLocaleDateString():"N/A"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Status:"})}),i.jsx("td",{children:i.jsx("span",{className:"badge bg-success",children:"Active"})})]})]})})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"fw-bold text-primary",children:"Customer Details"}),i.jsx("table",{className:"table table-sm table-borderless",children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Name:"})}),i.jsx("td",{children:b?.customerName||"N/A"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Phone:"})}),i.jsx("td",{children:b?.customerPhone||"N/A"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Email:"})}),i.jsx("td",{children:b?.customerEmail||"N/A"})]})]})})]})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("h6",{className:"fw-bold text-primary mb-3",children:"Quotation Items"}),i.jsx("div",{className:"table-responsive",children:i.jsxs("table",{className:"table table-hover",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"#"}),i.jsx("th",{children:"Item Description"}),i.jsx("th",{children:"Type"}),i.jsx("th",{children:"Dimensions"}),i.jsx("th",{children:"Area (sq.ft)"}),i.jsx("th",{children:"Rate"}),i.jsx("th",{children:"Amount"})]})}),i.jsx("tbody",{children:b?.items?.map((y,N)=>i.jsxs("tr",{children:[i.jsx("td",{children:N+1}),i.jsx("td",{children:y.name||`Item ${N+1}`}),i.jsx("td",{children:i.jsx("span",{className:`badge ${y.type==="window"?"bg-info":"bg-warning"}`,children:y.type})}),i.jsxs("td",{children:[y.width,'" × ',y.height,'"']}),i.jsx("td",{children:y.area?.toFixed(2)||"0.00"}),i.jsxs("td",{children:["₹",y.rate?.toFixed(2)||"0.00"]}),i.jsxs("td",{children:["₹",y.total?.toFixed(2)||"0.00"]})]},N))||i.jsx("tr",{children:i.jsx("td",{colSpan:7,className:"text-center text-muted",children:"No items found"})})})]})})]}),i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-md-6 offset-md-6",children:i.jsx("table",{className:"table table-sm",children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Subtotal:"})}),i.jsxs("td",{className:"text-end",children:["₹",b?.subtotal?.toFixed(2)||"0.00"]})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Tax (if any):"})}),i.jsxs("td",{className:"text-end",children:["₹",b?.tax?.toFixed(2)||"0.00"]})]}),i.jsxs("tr",{className:"table-primary",children:[i.jsx("td",{children:i.jsx("strong",{children:"Grand Total:"})}),i.jsx("td",{className:"text-end",children:i.jsxs("strong",{children:["₹",b?.grandTotal?.toFixed(2)||"0.00"]})})]})]})})})}),b?.notes&&i.jsxs("div",{className:"mt-4",children:[i.jsx("h6",{className:"fw-bold text-primary",children:"Notes"}),i.jsx("p",{className:"text-muted",children:b.notes})]})]}),i.jsx("div",{className:"card-footer bg-light",children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"bi bi-calendar me-1"}),"Shared on ",new Date(u.createdAt).toLocaleDateString(),u.expiresAt&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsx("i",{className:"bi bi-clock me-1"}),"Expires on ",new Date(u.expiresAt).toLocaleDateString()]})]})}),i.jsx("div",{className:"col-md-6 text-md-end",children:i.jsx("small",{className:"text-muted",children:"Powered by Estimatix"})})]})})]})})})})]})}const tx=({onComplete:d})=>{const r=fl(),[u,c]=S.useState(1),[f,x]=S.useState({companyName:"",companyAddress:"",companyPhone:"",companyEmail:""}),[h,z]=S.useState({defaultMargin:30,taxRate:18,currency:"INR"}),b=3,y=()=>{u<b&&c(u+1)},N=()=>{u>1&&c(u-1)},w=M=>{if(M.preventDefault(),!f.companyName){Re.error("Please enter your company name");return}localStorage.setItem("estimatix-company",JSON.stringify(f)),Re.success("Company details saved!"),y()},D=M=>{M.preventDefault(),localStorage.setItem("estimatix-pricing",JSON.stringify(h)),Re.success("Pricing defaults configured!"),y()},L=()=>{localStorage.setItem("estimatix-onboarded","true"),Re.success("🎉 Setup complete! Let's create your first quotation"),d(),r("/calculator")},H={enter:M=>({x:M>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:M=>({zIndex:0,x:M<0?1e3:-1e3,opacity:0})};return i.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",filter:"blur(80px)",top:"10%",left:"5%",animation:"float 6s ease-in-out infinite"}}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-12 col-lg-8",children:[i.jsx(se.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-4",children:i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.95)",borderRadius:"16px",padding:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)"},children:[i.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[i.jsxs("small",{style:{fontWeight:600,color:"#667eea"},children:["Step ",u," of ",b]}),i.jsxs("small",{style:{color:"#6c757d"},children:[Math.round(u/b*100),"% Complete"]})]}),i.jsx("div",{style:{height:"8px",background:"#e9ecef",borderRadius:"8px",overflow:"hidden"},children:i.jsx(se.div,{initial:{width:0},animate:{width:`${u/b*100}%`},transition:{duration:.5,ease:"easeOut"},style:{height:"100%",background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"}})})]})}),i.jsx(Ls,{mode:"wait",custom:1,children:i.jsx(se.div,{custom:1,variants:H,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3},children:i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.98)",borderRadius:"24px",padding:"48px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.15)",backdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[u===1&&i.jsxs("form",{onSubmit:w,children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx(se.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:i.jsx("i",{className:"bi bi-building",style:{fontSize:"40px",color:"white"}})}),i.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Company Information"}),i.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Let's set up your company profile"})]}),i.jsxs("div",{className:"mb-3",children:[i.jsxs("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:["Company Name ",i.jsx("span",{style:{color:"#dc3545"},children:"*"})]}),i.jsx("input",{type:"text",className:"form-control",value:f.companyName,onChange:M=>x({...f,companyName:M.target.value}),placeholder:"Estimatix Solutions",required:!0,style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Address"}),i.jsx("textarea",{className:"form-control",value:f.companyAddress,onChange:M=>x({...f,companyAddress:M.target.value}),placeholder:"123 Business Street, City, State - 123456",rows:3,style:{borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6 mb-3",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Phone"}),i.jsx("input",{type:"tel",className:"form-control",value:f.companyPhone,onChange:M=>x({...f,companyPhone:M.target.value}),placeholder:"+91 98765 43210",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),i.jsxs("div",{className:"col-md-6 mb-3",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Email"}),i.jsx("input",{type:"email",className:"form-control",value:f.companyEmail,onChange:M=>x({...f,companyEmail:M.target.value}),placeholder:"info@estimatix.com",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]})]}),i.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[i.jsx("button",{type:"button",onClick:()=>{localStorage.setItem("estimatix-onboarded","true"),d()},style:{background:"transparent",border:"none",color:"#6c757d",fontSize:"14px",cursor:"pointer"},children:"Skip Setup"}),i.jsxs(se.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",i.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===2&&i.jsxs("form",{onSubmit:D,children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx(se.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:i.jsx("i",{className:"bi bi-currency-dollar",style:{fontSize:"40px",color:"white"}})}),i.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Pricing Configuration"}),i.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Set your default pricing parameters"})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Default Profit Margin (%)"}),i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsx("input",{type:"range",className:"form-range",min:"0",max:"100",value:h.defaultMargin,onChange:M=>z({...h,defaultMargin:parseInt(M.target.value)}),style:{flex:1}}),i.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[h.defaultMargin,"%"]})]})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Tax Rate (GST/VAT %)"}),i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsx("input",{type:"range",className:"form-range",min:"0",max:"30",value:h.taxRate,onChange:M=>z({...h,taxRate:parseInt(M.target.value)}),style:{flex:1}}),i.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[h.taxRate,"%"]})]})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Currency"}),i.jsxs("select",{className:"form-select",value:h.currency,onChange:M=>z({...h,currency:M.target.value}),style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"},children:[i.jsx("option",{value:"INR",children:"₹ INR - Indian Rupee"}),i.jsx("option",{value:"USD",children:"$ USD - US Dollar"}),i.jsx("option",{value:"EUR",children:"€ EUR - Euro"}),i.jsx("option",{value:"GBP",children:"£ GBP - British Pound"}),i.jsx("option",{value:"AED",children:"د.إ AED - UAE Dirham"})]})]}),i.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[i.jsxs(se.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),i.jsxs(se.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",i.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),u===3&&i.jsxs("div",{className:"text-center",children:[i.jsx(se.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"100px",height:"100px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"24px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:i.jsx("i",{className:"bi bi-check-circle-fill",style:{fontSize:"50px",color:"white"}})}),i.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"You're All Set! 🎉"}),i.jsxs("p",{style:{color:"#6c757d",fontSize:"16px",marginBottom:"32px"},children:["Your account is configured and ready to go.",i.jsx("br",{}),"Let's create your first professional quotation!"]}),i.jsxs("div",{className:"row g-3 mb-4",children:[i.jsx("div",{className:"col-md-4",children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[i.jsx("i",{className:"bi bi-calculator-fill",style:{fontSize:"32px",color:"#667eea"}}),i.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Smart Calculator"}),i.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Fast & accurate estimates"})]})}),i.jsx("div",{className:"col-md-4",children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[i.jsx("i",{className:"bi bi-filetype-pdf",style:{fontSize:"32px",color:"#667eea"}}),i.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"PDF Generation"}),i.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Professional quotes with QR"})]})}),i.jsx("div",{className:"col-md-4",children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[i.jsx("i",{className:"bi bi-share-fill",style:{fontSize:"32px",color:"#667eea"}}),i.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Easy Sharing"}),i.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"WhatsApp, Email & QR codes"})]})})]}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsxs(se.button,{type:"button",onClick:N,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),i.jsxs(se.button,{type:"button",onClick:L,whileHover:{scale:1.05},whileTap:{scale:.95},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"14px 40px",borderRadius:"12px",fontSize:"18px",fontWeight:700,cursor:"pointer",boxShadow:"0 8px 25px rgba(102, 126, 234, 0.4)"},children:[i.jsx("i",{className:"bi bi-rocket-takeoff-fill me-2"}),"Start Creating Quotations"]})]})]})]})},u)})]})})})]})},ax=()=>{const d=fl(),[r,u]=S.useState({laborCost:50,profitMargin:20,taxRate:18,currency:"INR"}),c=[{code:"INR",symbol:"₹",name:"Indian Rupee"},{code:"USD",symbol:"$",name:"US Dollar"},{code:"EUR",symbol:"€",name:"Euro"},{code:"GBP",symbol:"£",name:"British Pound"},{code:"AED",symbol:"د.إ",name:"UAE Dirham"}],f=(b,y)=>{u(N=>({...N,[b]:y}))},x=b=>{u(y=>({...y,currency:b}))},h=()=>{d(-1)},z=()=>{localStorage.setItem("pricingConfig",JSON.stringify(r)),console.log("✅ Pricing configuration saved:",r),d("/calculator")};return i.jsxs("div",{className:"pricing-configuration-wrapper",children:[i.jsx("div",{className:"pricing-bg-gradient"}),i.jsx("div",{className:"pricing-glow-orb pricing-glow-orb-1"}),i.jsx("div",{className:"pricing-glow-orb pricing-glow-orb-2"}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"row justify-content-center align-items-center min-vh-100 py-5",children:i.jsx("div",{className:"col-12 col-md-10 col-lg-8 col-xl-7",children:i.jsxs("div",{className:"pricing-card card border-0",children:[i.jsxs("div",{className:"pricing-card-header text-center",children:[i.jsx("div",{className:"pricing-icon-wrapper",children:i.jsx("div",{className:"pricing-icon",children:i.jsx("span",{className:"pricing-icon-symbol",children:"💰"})})}),i.jsx("h2",{className:"pricing-title",children:"Pricing Configuration"}),i.jsx("p",{className:"pricing-subtitle",children:"Customize your pricing parameters for accurate quotations"})]}),i.jsxs("div",{className:"pricing-card-body card-body px-4 px-md-5 py-4",children:[i.jsxs("div",{className:"pricing-field mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsxs("label",{className:"pricing-label",children:[i.jsx("i",{className:"bi bi-tools me-2"}),"Labor Cost per Hour"]}),i.jsxs("span",{className:"badge pricing-value-badge",children:[c.find(b=>b.code===r.currency)?.symbol,r.laborCost]})]}),i.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"200",step:"5",value:r.laborCost,onChange:b=>f("laborCost",Number(b.target.value))}),i.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[i.jsx("small",{children:"0"}),i.jsx("small",{children:"100"}),i.jsx("small",{children:"200"})]})]}),i.jsxs("div",{className:"pricing-field mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsxs("label",{className:"pricing-label",children:[i.jsx("i",{className:"bi bi-graph-up-arrow me-2"}),"Profit Margin"]}),i.jsxs("span",{className:"badge pricing-value-badge",children:[r.profitMargin,"%"]})]}),i.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"100",step:"1",value:r.profitMargin,onChange:b=>f("profitMargin",Number(b.target.value))}),i.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[i.jsx("small",{children:"0%"}),i.jsx("small",{children:"50%"}),i.jsx("small",{children:"100%"})]})]}),i.jsxs("div",{className:"pricing-field mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsxs("label",{className:"pricing-label",children:[i.jsx("i",{className:"bi bi-receipt me-2"}),"Tax Rate (GST/VAT)"]}),i.jsxs("span",{className:"badge pricing-value-badge",children:[r.taxRate,"%"]})]}),i.jsx("input",{type:"range",className:"form-range pricing-slider",min:"0",max:"50",step:"0.5",value:r.taxRate,onChange:b=>f("taxRate",Number(b.target.value))}),i.jsxs("div",{className:"d-flex justify-content-between pricing-slider-labels",children:[i.jsx("small",{children:"0%"}),i.jsx("small",{children:"25%"}),i.jsx("small",{children:"50%"})]})]}),i.jsxs("div",{className:"pricing-field mb-4",children:[i.jsxs("label",{className:"pricing-label mb-3",children:[i.jsx("i",{className:"bi bi-currency-exchange me-2"}),"Currency"]}),i.jsxs("div",{className:"dropdown w-100",children:[i.jsxs("button",{className:"btn pricing-dropdown-btn w-100 d-flex justify-content-between align-items-center",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[i.jsxs("span",{children:[c.find(b=>b.code===r.currency)?.symbol," "," ",c.find(b=>b.code===r.currency)?.name]}),i.jsx("i",{className:"bi bi-chevron-down"})]}),i.jsx("ul",{className:"dropdown-menu pricing-dropdown-menu w-100",children:c.map(b=>i.jsx("li",{children:i.jsxs("button",{className:`dropdown-item pricing-dropdown-item ${r.currency===b.code?"active":""}`,onClick:()=>x(b.code),children:[i.jsx("span",{className:"me-2",children:b.symbol}),b.name," (",b.code,")"]})},b.code))})]})]}),i.jsxs("div",{className:"pricing-summary mt-4 p-3",children:[i.jsxs("h6",{className:"pricing-summary-title mb-3",children:[i.jsx("i",{className:"bi bi-calculator me-2"}),"Configuration Summary"]}),i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-6",children:i.jsxs("div",{className:"pricing-summary-item",children:[i.jsx("small",{className:"text-muted",children:"Labor Cost"}),i.jsxs("div",{className:"fw-semibold",children:[c.find(b=>b.code===r.currency)?.symbol,r.laborCost,"/hr"]})]})}),i.jsx("div",{className:"col-6",children:i.jsxs("div",{className:"pricing-summary-item",children:[i.jsx("small",{className:"text-muted",children:"Profit Margin"}),i.jsxs("div",{className:"fw-semibold",children:[r.profitMargin,"%"]})]})}),i.jsx("div",{className:"col-6",children:i.jsxs("div",{className:"pricing-summary-item",children:[i.jsx("small",{className:"text-muted",children:"Tax Rate"}),i.jsxs("div",{className:"fw-semibold",children:[r.taxRate,"%"]})]})}),i.jsx("div",{className:"col-6",children:i.jsxs("div",{className:"pricing-summary-item",children:[i.jsx("small",{className:"text-muted",children:"Currency"}),i.jsx("div",{className:"fw-semibold",children:r.currency})]})})]})]})]}),i.jsx("div",{className:"pricing-card-footer card-footer border-0 px-4 px-md-5 py-4",children:i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-12 col-sm-6",children:i.jsxs("button",{className:"btn pricing-btn-back w-100",onClick:h,children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]})}),i.jsx("div",{className:"col-12 col-sm-6",children:i.jsxs("button",{className:"btn pricing-btn-continue w-100",onClick:z,children:["Continue",i.jsx("i",{className:"bi bi-arrow-right ms-2"})]})})]})})]})})})})]})};function gc({className:d=""}){const[r,u]=S.useState("auto");S.useEffect(()=>{const h=localStorage.getItem("app_theme");if(h)u(h);else{const z=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;u(z?"dark":"light")}},[]),S.useEffect(()=>{const h=z=>{let b;z==="auto"?b=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":b=z,document.documentElement.setAttribute("data-bs-theme",b),b==="dark"?(document.body.style.backgroundColor="#121212",document.body.style.color="#ffffff"):(document.body.style.backgroundColor="#ffffff",document.body.style.color="#000000"),localStorage.setItem("app_theme",z)};if(h(r),r==="auto"){const z=window.matchMedia("(prefers-color-scheme: dark)"),b=()=>h("auto");return z.addEventListener("change",b),()=>z.removeEventListener("change",b)}},[r]);const c=h=>{u(h)},f=()=>{switch(r){case"light":return"bi-sun-fill";case"dark":return"bi-moon-fill";case"auto":return"bi-circle-half";default:return"bi-circle-half"}},x=()=>{switch(r){case"light":return"Light";case"dark":return"Dark";case"auto":return"Auto";default:return"Auto"}};return i.jsxs("div",{className:`dropdown ${d}`,children:[i.jsxs("button",{className:"btn text-white position-relative",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",title:`Current theme: ${x()}`,style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",width:"44px",height:"44px",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255,255,255,0.1)"},onMouseEnter:h=>{h.currentTarget.style.background="rgba(255,255,255,0.25)",h.currentTarget.style.transform="scale(1.05)",h.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.2)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(255,255,255,0.15)",h.currentTarget.style.transform="scale(1)",h.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.1)"},children:[i.jsx("i",{className:`${f()} fs-5`}),i.jsx("span",{className:"position-absolute top-0 start-100 translate-middle rounded-circle theme-indicator",style:{background:r==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":r==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)",width:"10px",height:"10px",border:"2px solid white",boxShadow:"0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 rgba(255, 255, 255, 0.7)",animation:"theme-pulse 2s infinite"},children:i.jsx("span",{className:"visually-hidden",children:"Theme indicator"})})]}),i.jsxs("ul",{className:"dropdown-menu dropdown-menu-end shadow-lg",style:{background:"rgba(255,255,255,0.98)",backdropFilter:"blur(15px)",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"16px",minWidth:"220px",padding:"8px",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",marginTop:"8px"},children:[i.jsx("li",{children:i.jsxs("h6",{className:"dropdown-header fw-bold px-3 py-2",style:{color:"#667eea",fontSize:"0.9rem",marginBottom:"4px"},children:[i.jsx("i",{className:"bi bi-palette me-2"}),"Choose Theme"]})}),i.jsx("li",{children:i.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="light"?"active":""}`,onClick:()=>c("light"),style:{transition:"all 0.2s ease",background:r==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":"rgba(0,0,0,0.02)",color:r==="light"?"white":"#333",fontWeight:r==="light"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="light"&&(h.currentTarget.style.background="rgba(255, 215, 0, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="light"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[i.jsx("i",{className:"bi bi-sun-fill me-2",style:{fontSize:"1rem"}}),i.jsx("span",{className:"flex-grow-1 text-start",children:"Light Mode"}),r==="light"&&i.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),i.jsx("li",{children:i.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="dark"?"active":""}`,onClick:()=>c("dark"),style:{transition:"all 0.2s ease",background:r==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"rgba(0,0,0,0.02)",color:r==="dark"?"white":"#333",fontWeight:r==="dark"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="dark"&&(h.currentTarget.style.background="rgba(74, 144, 226, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="dark"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[i.jsx("i",{className:"bi bi-moon-fill me-2",style:{fontSize:"1rem"}}),i.jsx("span",{className:"flex-grow-1 text-start",children:"Dark Mode"}),r==="dark"&&i.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),i.jsx("li",{children:i.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${r==="auto"?"active":""}`,onClick:()=>c("auto"),style:{transition:"all 0.2s ease",background:r==="auto"?"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)":"rgba(0,0,0,0.02)",color:r==="auto"?"white":"#333",fontWeight:r==="auto"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:h=>{r!=="auto"&&(h.currentTarget.style.background="rgba(255, 107, 107, 0.15)",h.currentTarget.style.color="#333")},onMouseLeave:h=>{r!=="auto"&&(h.currentTarget.style.background="rgba(0,0,0,0.02)",h.currentTarget.style.color="#333")},children:[i.jsx("i",{className:"bi bi-circle-half me-2",style:{fontSize:"1rem"}}),i.jsx("span",{className:"flex-grow-1 text-start",children:"Auto (System)"}),r==="auto"&&i.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),i.jsx("li",{children:i.jsx("hr",{className:"dropdown-divider mx-2 my-2",style:{opacity:.2}})}),i.jsx("li",{children:i.jsx("div",{className:"dropdown-item-text px-3 py-2",children:i.jsxs("small",{style:{color:"#667eea",fontWeight:"500",fontSize:"0.8rem",lineHeight:"1.3"},children:[i.jsx("i",{className:"bi bi-info-circle me-2"}),"Auto mode follows your system preference"]})})})]})]})}function ix(){const{user:d,logout:r}=ht(),[u,c]=S.useState(!1),f=async()=>{try{await r(),c(!1)}catch(h){console.error("Logout error:",h)}},x=()=>c(!1);return i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"sticky-top",style:{background:"linear-gradient(135deg, #563d7c, #3b2a59)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:1e3},children:[i.jsx("div",{className:"container-fluid",style:{maxWidth:"1400px",padding:"0 1.5rem"},children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",style:{minHeight:"64px",padding:"0.75rem 0"},children:[i.jsx(ge,{to:"/",className:"text-decoration-none",onClick:x,children:i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("i",{className:"bi bi-calculator-fill text-violet",style:{fontSize:"1.25rem",color:"#a855f7"}}),i.jsxs("div",{children:[i.jsx("span",{className:"text-white fw-semibold",style:{fontSize:"1.1rem",letterSpacing:"0.3px"},children:"Estimatix"}),i.jsx("span",{className:"text-muted ms-2 d-none d-lg-inline",style:{fontSize:"0.85rem",color:"#94a3b8"},children:"Professional Estimation Suite"})]})]})}),i.jsxs("div",{className:"d-flex align-items-center gap-2",children:[i.jsx("div",{children:i.jsx(gc,{})}),d?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"d-flex align-items-center d-md-none",children:i.jsx("div",{className:"bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center text-white",style:{width:"40px",height:"40px",backdropFilter:"blur(10px)",border:"2px solid rgba(255,255,255,0.3)",fontSize:"1rem"},children:i.jsx("i",{className:"bi bi-person-fill"})})}),i.jsx("button",{className:"btn text-white p-0",style:{width:"44px",height:"44px",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"12px",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},onClick:()=>c(!u),"aria-label":"Toggle menu",children:i.jsx("i",{className:`bi ${u?"bi-x-lg":"bi-list"} fs-4`})})]}):i.jsxs(i.Fragment,{children:[i.jsxs(ge,{to:"/login",className:"btn text-white text-decoration-none",style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:h=>{h.currentTarget.style.background="rgba(255,255,255,0.25)",h.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(255,255,255,0.15)",h.currentTarget.style.transform="translateY(0)"},onClick:x,children:[i.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),i.jsx("span",{className:"d-none d-sm-inline",children:"Login"})]}),i.jsxs(ge,{to:"/signup",className:"btn text-decoration-none",style:{background:"linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)",color:"#667eea",border:"none",borderRadius:"10px",fontWeight:"600",boxShadow:"0 4px 15px rgba(255,255,255,0.2)",transition:"all 0.3s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.3)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.2)"},onClick:x,children:[i.jsx("i",{className:"bi bi-person-plus me-2"}),i.jsx("span",{className:"d-none d-sm-inline",children:"Sign Up"})]})]})]})]})}),u&&d&&i.jsx("div",{className:"position-relative",style:{background:"linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",borderTop:"1px solid rgba(102, 126, 234, 0.1)",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",zIndex:1060},children:i.jsxs("div",{className:"container-fluid px-3 px-md-4 py-4",style:{maxWidth:"600px",margin:"0 auto"},children:[i.jsxs("div",{className:"d-flex align-items-center mb-4 pb-3",style:{borderBottom:"2px solid rgba(102, 126, 234, 0.1)"},children:[i.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center text-white me-3",style:{width:"56px",height:"56px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)",flexShrink:0},children:i.jsx("i",{className:"bi bi-person-fill fs-4"})}),i.jsxs("div",{className:"flex-grow-1",style:{minWidth:0},children:[i.jsx("div",{className:"fw-bold text-dark text-truncate",style:{fontSize:"1.15rem",fontFamily:"'Segoe UI', system-ui, sans-serif"},children:d?.email?.split("@")[0]}),i.jsx("small",{className:"text-truncate d-block",style:{color:"#667eea",fontWeight:"500"},children:d?.email})]})]}),i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-6",children:i.jsxs(ge,{to:"/dashboard",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-speedometer2 fs-3 mb-2"}),i.jsx("span",{children:"Dashboard"})]})}),i.jsx("div",{className:"col-6",children:i.jsxs(ge,{to:"/multi-calculator",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(17, 153, 142, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-calculator fs-3 mb-2"}),i.jsx("span",{children:"Multi-Item"})]})}),i.jsx("div",{className:"col-6",children:i.jsxs(ge,{to:"/calculator",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-gear fs-3 mb-2"}),i.jsx("span",{children:"Simple Calc"})]})}),i.jsx("div",{className:"col-6",children:i.jsxs(ge,{to:"/billing",className:"btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",color:"#4a5568",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(251, 194, 235, 0.25)",padding:"1rem 0.5rem",minHeight:"85px",fontSize:"0.9rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-credit-card fs-3 mb-2"}),i.jsx("span",{children:"Billing"})]})}),i.jsx("div",{className:"col-12",children:i.jsxs(ge,{to:"/admin",className:"btn w-100 text-center text-decoration-none d-flex align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(102, 126, 234, 0.25)",padding:"1rem",fontSize:"1rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-shield-check fs-4 me-2"}),i.jsx("span",{children:"Admin Settings"})]})})]}),i.jsx("div",{className:"mt-4 pt-3",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:i.jsxs("div",{className:"row g-3",children:[i.jsx("div",{className:"col-6",children:i.jsxs("button",{className:"btn w-100 text-center d-flex flex-column align-items-center justify-content-center",style:{background:"rgba(102, 126, 234, 0.08)",color:"#667eea",border:"2px solid rgba(102, 126, 234, 0.2)",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",padding:"0.75rem",fontSize:"0.85rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-file-earmark-pdf fs-4 mb-1"}),i.jsx("span",{children:"Export PDF"})]})}),i.jsx("div",{className:"col-6",children:i.jsxs("button",{className:"btn w-100 text-center d-flex flex-column align-items-center justify-content-center",style:{background:"rgba(17, 153, 142, 0.08)",color:"#11998e",border:"2px solid rgba(17, 153, 142, 0.2)",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",padding:"0.75rem",fontSize:"0.85rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:x,children:[i.jsx("i",{className:"bi bi-share fs-4 mb-1"}),i.jsx("span",{children:"Share Quote"})]})})]})}),i.jsx("div",{className:"mt-4 pt-3",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:i.jsxs("button",{className:"btn w-100 text-center d-flex align-items-center justify-content-center",style:{background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",border:"none",borderRadius:"14px",fontWeight:"700",transition:"all 0.3s ease",boxShadow:"0 4px 20px rgba(255, 107, 107, 0.3)",padding:"1rem",fontSize:"1rem",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},onClick:f,children:[i.jsx("i",{className:"bi bi-box-arrow-right fs-5 me-2"}),i.jsx("span",{children:"Sign Out"})]})})]})})]}),u&&i.jsx("div",{className:"position-fixed w-100 h-100",style:{top:0,left:0,zIndex:1050,background:"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(2px)",WebkitBackdropFilter:"blur(2px)"},onClick:x}),i.jsx("style",{children:`
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
      `})]})}function lx(){const{user:d,logout:r}=ht(),u=async()=>{try{await r()}catch(c){console.error("Logout error:",c)}};return i.jsx("header",{className:"py-3 shadow d-none d-lg-block",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsx("div",{children:i.jsxs(ge,{to:"/",className:"text-white text-decoration-none",children:[i.jsxs("h1",{className:"h5 mb-0 text-white",children:[i.jsx("i",{className:"bi bi-calculator-fill me-2"}),"Estimatix"]}),i.jsx("small",{className:"opacity-75 text-white",children:"Professional Estimation Platform"})]})}),i.jsx("nav",{className:"d-flex gap-2 align-items-center",children:d?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex gap-1 me-3",children:[i.jsxs(ge,{to:"/dashboard",className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-speedometer2 me-1"}),"Dashboard"]}),i.jsxs(ge,{to:"/multi-calculator",className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-calculator me-1"}),"Multi-Item"]}),i.jsxs(ge,{to:"/calculator",className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-gear me-1"}),"Simple Calc"]}),i.jsxs(ge,{to:"/billing",className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-credit-card me-1"}),"Billing"]}),i.jsxs(ge,{to:"/admin",className:"btn btn-sm",style:{background:"linear-gradient(90deg, #facc15, #eab308)",color:"#1e1e1e",fontWeight:"600",border:"none",boxShadow:"0 0 8px rgba(250, 204, 21, 0.4)",transition:"all 0.3s ease"},onMouseEnter:c=>{c.currentTarget.style.boxShadow="0 0 12px rgba(250, 204, 21, 0.6)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.boxShadow="0 0 8px rgba(250, 204, 21, 0.4)",c.currentTarget.style.transform="translateY(0)"},children:[i.jsx("i",{className:"bi bi-shield-check me-1"}),"Admin"]})]}),i.jsx(gc,{}),i.jsxs("div",{className:"dropdown",children:[i.jsxs("button",{className:"btn btn-outline-light btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[i.jsx("i",{className:"bi bi-person-circle me-1"}),d?.email]}),i.jsxs("ul",{className:"dropdown-menu dropdown-menu-end",children:[i.jsx("li",{children:i.jsxs("h6",{className:"dropdown-header",children:[i.jsx("i",{className:"bi bi-person me-2"}),"Account"]})}),i.jsx("li",{children:i.jsxs(ge,{className:"dropdown-item",to:"/dashboard",children:[i.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),i.jsx("li",{children:i.jsxs(ge,{className:"dropdown-item",to:"/billing",children:[i.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing & Subscription"]})}),i.jsx("li",{children:i.jsxs(ge,{className:"dropdown-item",to:"/admin",children:[i.jsx("i",{className:"bi bi-gear me-2"}),"Admin Settings"]})}),i.jsx("li",{children:i.jsx("hr",{className:"dropdown-divider"})}),i.jsx("li",{children:i.jsxs("button",{className:"dropdown-item text-danger",onClick:u,children:[i.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(gc,{}),i.jsxs("div",{className:"d-flex gap-1",children:[i.jsxs(ge,{to:"/login",className:"btn btn-outline-light btn-sm",children:[i.jsx("i",{className:"bi bi-box-arrow-in-right me-1"}),"Login"]}),i.jsxs(ge,{to:"/signup",className:"btn btn-light btn-sm",children:[i.jsx("i",{className:"bi bi-person-plus me-1"}),"Sign Up"]})]})]})})]})})})}function nx(){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"d-lg-none",children:i.jsx(ix,{})}),i.jsx("div",{className:"d-none d-lg-block",children:i.jsx(lx,{})})]})}function vi({children:d}){const{user:r,loading:u}=ht();return u?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"},children:i.jsx("div",{className:"spinner-border text-primary",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):r?i.jsx(i.Fragment,{children:d}):i.jsx(If,{to:"/login"})}function sx({children:d}){const{user:r}=ht(),u=ml();return u.pathname.includes("/login")||u.pathname.includes("/signup")||u.pathname.includes("/forgot-password")||!r?i.jsx(i.Fragment,{children:d}):i.jsxs(i.Fragment,{children:[i.jsx(nx,{}),d,i.jsx("footer",{className:"estimatix-footer mt-auto border-top",children:i.jsx("div",{className:"container py-4 py-md-3",children:i.jsxs("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 gap-md-4",children:[i.jsxs("div",{className:"text-center text-md-start",children:[i.jsxs("div",{className:"mb-2",children:[i.jsx("span",{className:"text-info fw-bold fs-5",children:"Estimatix"}),i.jsx("span",{className:"footer-version ms-2",children:"v1.0"})]}),i.jsx("p",{className:"mb-1 footer-description",children:"Professional Estimation & Quotation Platform"}),i.jsx("small",{className:"footer-tech d-block",children:"Powered by Firebase & Advanced SaaS Technology"})]}),i.jsx("div",{className:"text-center text-md-end",children:i.jsx("small",{className:"footer-copyright",children:"© 2025 Estimatix. All rights reserved."})})]})})})]})}function rx({children:d}){const{user:r}=ht(),[u,c]=S.useState(!1);S.useEffect(()=>{if(r){const x=localStorage.getItem("estimatix-onboarded");c(!x)}},[r]);const f=()=>{c(!1)};return r&&u?i.jsx(tx,{onComplete:f}):i.jsx(i.Fragment,{children:d})}function ox(){const{user:d}=ht();return i.jsx(sx,{children:i.jsx("main",{className:"flex-grow-1",children:i.jsxs(Eg,{children:[i.jsx(Mt,{path:"/login",element:i.jsx(Cb,{})}),i.jsx(Mt,{path:"/signup",element:i.jsx(zb,{})}),i.jsx(Mt,{path:"/forgot-password",element:i.jsx(kb,{})}),i.jsx(Mt,{path:"/shared/:shareToken",element:i.jsx(ex,{})}),i.jsx(Mt,{path:"/dashboard",element:i.jsx(vi,{children:i.jsx(Df,{})})}),i.jsx(Mt,{path:"/billing",element:i.jsx(vi,{children:i.jsx(Zb,{})})}),i.jsx(Mt,{path:"/calculator",element:i.jsx(vi,{children:i.jsx(Jb,{})})}),i.jsx(Mt,{path:"/multi-calculator",element:i.jsx(vi,{children:i.jsx(Pb,{})})}),i.jsx(Mt,{path:"/pricing-config",element:i.jsx(vi,{children:i.jsx(ax,{})})}),i.jsx(Mt,{path:"/admin",element:i.jsx(vi,{children:i.jsx(Ib,{})})}),i.jsx(Mt,{path:"/",element:i.jsx(vi,{children:i.jsx(Df,{})})}),i.jsx(Mt,{path:"*",element:i.jsx(If,{to:"/"})})]})})},d?.uid||"logged-out")}function cx(){return i.jsx(Qg,{children:i.jsx(qg,{children:i.jsx(_g,{children:i.jsx("div",{className:"min-vh-100 d-flex flex-column",children:i.jsx(rx,{children:i.jsx(ox,{})})})})})})}(()=>{try{const d=localStorage.getItem("theme"),r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,u=d==="dark"||d==="light"?d:r?"dark":"light";document.documentElement.setAttribute("data-bs-theme",u==="dark"?"dark":"light")}catch{}})();dg.createRoot(document.getElementById("app")).render(ve.createElement(ve.StrictMode,null,ve.createElement(cx,null)));"serviceWorker"in navigator&&Ff(async()=>{const{registerSW:d}=await import("./virtual_pwa-register-BT8KHGsJ.js");return{registerSW:d}},__vite__mapDeps([0,1,2])).then(({registerSW:d})=>{d({immediate:!0,onRegisteredSW:()=>{},onNeedRefresh(){},onOfflineReady(){}})}).catch(()=>{});
