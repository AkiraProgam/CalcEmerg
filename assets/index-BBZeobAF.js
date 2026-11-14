(function(){const ee=document.createElement("link").relList;if(ee&&ee.supports&&ee.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))h(C);new MutationObserver(C=>{for(const p of C)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function _(C){const p={};return C.integrity&&(p.integrity=C.integrity),C.referrerPolicy&&(p.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?p.credentials="include":C.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function h(C){if(C.ep)return;C.ep=!0;const p=_(C);fetch(C.href,p)}})();var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yu(k){return k&&k.__esModule&&Object.prototype.hasOwnProperty.call(k,"default")?k.default:k}var Ru={exports:{}},Ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function Gg(){if(p0)return Ci;p0=1;var k=Symbol.for("react.transitional.element"),ee=Symbol.for("react.fragment");function _(h,C,p){var b=null;if(p!==void 0&&(b=""+p),C.key!==void 0&&(b=""+C.key),"key"in C){p={};for(var d in C)d!=="key"&&(p[d]=C[d])}else p=C;return C=p.ref,{$$typeof:k,type:h,key:b,ref:C!==void 0?C:null,props:p}}return Ci.Fragment=ee,Ci.jsx=_,Ci.jsxs=_,Ci}var h0;function Zg(){return h0||(h0=1,Ru.exports=Gg()),Ru.exports}var w=Zg(),ku={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Yg(){if(g0)return je;g0=1;var k=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),c=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),m=Symbol.iterator;function T(D){return D===null||typeof D!="object"?null:(D=m&&D[m]||D["@@iterator"],typeof D=="function"?D:null)}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function M(D,V,ve){this.props=D,this.context=V,this.refs=y,this.updater=ve||f}M.prototype.isReactComponent={},M.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function R(){}R.prototype=M.prototype;function L(D,V,ve){this.props=D,this.context=V,this.refs=y,this.updater=ve||f}var H=L.prototype=new R;H.constructor=L,g(H,M.prototype),H.isPureReactComponent=!0;var P=Array.isArray;function Z(){}var ne={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function de(D,V,ve){var xe=ve.ref;return{$$typeof:k,type:D,key:V,ref:xe!==void 0?xe:null,props:ve}}function we(D,V){return de(D.type,V,D.props)}function j(D){return typeof D=="object"&&D!==null&&D.$$typeof===k}function te(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return V[ve]})}var u=/\/+/g;function ae(D,V){return typeof D=="object"&&D!==null&&D.key!=null?te(""+D.key):V.toString(36)}function oe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(Z,Z):(D.status="pending",D.then(function(V){D.status==="pending"&&(D.status="fulfilled",D.value=V)},function(V){D.status==="pending"&&(D.status="rejected",D.reason=V)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function $(D,V,ve,xe,_e){var Te=typeof D;(Te==="undefined"||Te==="boolean")&&(D=null);var ze=!1;if(D===null)ze=!0;else switch(Te){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(D.$$typeof){case k:case ee:ze=!0;break;case N:return ze=D._init,$(ze(D._payload),V,ve,xe,_e)}}if(ze)return _e=_e(D),ze=xe===""?"."+ae(D,0):xe,P(_e)?(ve="",ze!=null&&(ve=ze.replace(u,"$&/")+"/"),$(_e,V,ve,"",function(sn){return sn})):_e!=null&&(j(_e)&&(_e=we(_e,ve+(_e.key==null||D&&D.key===_e.key?"":(""+_e.key).replace(u,"$&/")+"/")+ze)),V.push(_e)),1;ze=0;var he=xe===""?".":xe+":";if(P(D))for(var Ne=0;Ne<D.length;Ne++)xe=D[Ne],Te=he+ae(xe,Ne),ze+=$(xe,V,ve,Te,_e);else if(Ne=T(D),typeof Ne=="function")for(D=Ne.call(D),Ne=0;!(xe=D.next()).done;)xe=xe.value,Te=he+ae(xe,Ne++),ze+=$(xe,V,ve,Te,_e);else if(Te==="object"){if(typeof D.then=="function")return $(oe(D),V,ve,xe,_e);throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ze}function pe(D,V,ve){if(D==null)return D;var xe=[],_e=0;return $(D,xe,"","",function(Te){return V.call(ve,Te,_e++)}),xe}function re(D){if(D._status===-1){var V=D._result,ve=V();ve.then(function(xe){(D._status===0||D._status===-1)&&(D._status=1,D._result=xe,ve.status===void 0&&(ve.status="fulfilled",ve.value=xe))},function(xe){(D._status===0||D._status===-1)&&(D._status=2,D._result=xe,ve.status===void 0&&(ve.status="rejected",ve.reason=xe))}),D._status===-1&&(D._status=0,D._result=ve)}if(D._status===1)return D._result.default;throw D._result}var be=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function J(D){var V=ne.T,ve={};ve.types=V!==null?V.types:null,ne.T=ve;try{var xe=D(),_e=ne.S;_e!==null&&_e(ve,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(Z,be)}catch(Te){be(Te)}finally{V!==null&&ve.types!==null&&(V.types=ve.types),ne.T=V}}function K(D){var V=ne.T;if(V!==null){var ve=V.types;ve===null?V.types=[D]:ve.indexOf(D)===-1&&ve.push(D)}else J(K.bind(null,D))}var Ce={map:pe,forEach:function(D,V,ve){pe(D,function(){V.apply(this,arguments)},ve)},count:function(D){var V=0;return pe(D,function(){V++}),V},toArray:function(D){return pe(D,function(V){return V})||[]},only:function(D){if(!j(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return je.Activity=c,je.Children=Ce,je.Component=M,je.Fragment=_,je.Profiler=C,je.PureComponent=L,je.StrictMode=h,je.Suspense=v,je.ViewTransition=S,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,je.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ne.H.useMemoCache(D)}},je.addTransitionType=K,je.cache=function(D){return function(){return D.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(D,V,ve){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var xe=g({},D.props),_e=D.key;if(V!=null)for(Te in V.key!==void 0&&(_e=""+V.key),V)!F.call(V,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&V.ref===void 0||(xe[Te]=V[Te]);var Te=arguments.length-2;if(Te===1)xe.children=ve;else if(1<Te){for(var ze=Array(Te),he=0;he<Te;he++)ze[he]=arguments[he+2];xe.children=ze}return de(D.type,_e,xe)},je.createContext=function(D){return D={$$typeof:b,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:p,_context:D},D},je.createElement=function(D,V,ve){var xe,_e={},Te=null;if(V!=null)for(xe in V.key!==void 0&&(Te=""+V.key),V)F.call(V,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(_e[xe]=V[xe]);var ze=arguments.length-2;if(ze===1)_e.children=ve;else if(1<ze){for(var he=Array(ze),Ne=0;Ne<ze;Ne++)he[Ne]=arguments[Ne+2];_e.children=he}if(D&&D.defaultProps)for(xe in ze=D.defaultProps,ze)_e[xe]===void 0&&(_e[xe]=ze[xe]);return de(D,Te,_e)},je.createRef=function(){return{current:null}},je.forwardRef=function(D){return{$$typeof:d,render:D}},je.isValidElement=j,je.lazy=function(D){return{$$typeof:N,_payload:{_status:-1,_result:D},_init:re}},je.memo=function(D,V){return{$$typeof:A,type:D,compare:V===void 0?null:V}},je.startTransition=J,je.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},je.use=function(D){return ne.H.use(D)},je.useActionState=function(D,V,ve){return ne.H.useActionState(D,V,ve)},je.useCallback=function(D,V){return ne.H.useCallback(D,V)},je.useContext=function(D){return ne.H.useContext(D)},je.useDebugValue=function(){},je.useDeferredValue=function(D,V){return ne.H.useDeferredValue(D,V)},je.useEffect=function(D,V){return ne.H.useEffect(D,V)},je.useEffectEvent=function(D){return ne.H.useEffectEvent(D)},je.useId=function(){return ne.H.useId()},je.useImperativeHandle=function(D,V,ve){return ne.H.useImperativeHandle(D,V,ve)},je.useInsertionEffect=function(D,V){return ne.H.useInsertionEffect(D,V)},je.useLayoutEffect=function(D,V){return ne.H.useLayoutEffect(D,V)},je.useMemo=function(D,V){return ne.H.useMemo(D,V)},je.useOptimistic=function(D,V){return ne.H.useOptimistic(D,V)},je.useReducer=function(D,V,ve){return ne.H.useReducer(D,V,ve)},je.useRef=function(D){return ne.H.useRef(D)},je.useState=function(D){return ne.H.useState(D)},je.useSyncExternalStore=function(D,V,ve){return ne.H.useSyncExternalStore(D,V,ve)},je.useTransition=function(){return ne.H.useTransition()},je.version="19.3.1",je}var b0;function Qu(){return b0||(b0=1,ku.exports=Yg()),ku.exports}var Ve=Qu();const Qg=Yu(Ve);var Uu={exports:{}},Ni={},Bu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function Xg(){return v0||(v0=1,(function(k){function ee(oe,$){var pe=oe.length;oe.push($);e:for(;0<pe;){var re=pe-1>>>1,be=oe[re];if(0<C(be,$))oe[re]=$,oe[pe]=be,pe=re;else break e}}function _(oe){return oe.length===0?null:oe[0]}function h(oe){if(oe.length===0)return null;var $=oe[0],pe=oe.pop();if(pe!==$){oe[0]=pe;e:for(var re=0,be=oe.length,J=be>>>1;re<J;){var K=2*(re+1)-1,Ce=oe[K],D=K+1,V=oe[D];if(0>C(Ce,pe))D<be&&0>C(V,Ce)?(oe[re]=V,oe[D]=pe,re=D):(oe[re]=Ce,oe[K]=pe,re=K);else if(D<be&&0>C(V,pe))oe[re]=V,oe[D]=pe,re=D;else break e}}return $}function C(oe,$){var pe=oe.sortIndex-$.sortIndex;return pe!==0?pe:oe.id-$.id}if(k.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;k.unstable_now=function(){return p.now()}}else{var b=Date,d=b.now();k.unstable_now=function(){return b.now()-d}}var v=[],A=[],N=1,c=null,S=3,m=!1,T=!1,f=!1,g=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function L(oe){for(var $=_(A);$!==null;){if($.callback===null)h(A);else if($.startTime<=oe)h(A),$.sortIndex=$.expirationTime,ee(v,$);else break;$=_(A)}}function H(oe){if(f=!1,L(oe),!T)if(_(v)!==null)T=!0,P||(P=!0,j());else{var $=_(A);$!==null&&ae(H,$.startTime-oe)}}var P=!1,Z=-1,ne=5,F=-1;function de(){return g?!0:!(k.unstable_now()-F<ne)}function we(){if(g=!1,P){var oe=k.unstable_now();F=oe;var $=!0;try{e:{T=!1,f&&(f=!1,M(Z),Z=-1),m=!0;var pe=S;try{n:{for(L(oe),c=_(v);c!==null&&!(c.expirationTime>oe&&de());){var re=c.callback;if(typeof re=="function"){c.callback=null,S=c.priorityLevel;var be=re(c.expirationTime<=oe);if(oe=k.unstable_now(),typeof be=="function"){c.callback=be,L(oe),$=!0;break n}c===_(v)&&h(v),L(oe)}else h(v);c=_(v)}if(c!==null)$=!0;else{var J=_(A);J!==null&&ae(H,J.startTime-oe),$=!1}}break e}finally{c=null,S=pe,m=!1}$=void 0}}finally{$?j():P=!1}}}var j;if(typeof R=="function")j=function(){R(we)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,u=te.port2;te.port1.onmessage=we,j=function(){u.postMessage(null)}}else j=function(){y(we,0)};function ae(oe,$){Z=y(function(){oe(k.unstable_now())},$)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(oe){oe.callback=null},k.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<oe?Math.floor(1e3/oe):5},k.unstable_getCurrentPriorityLevel=function(){return S},k.unstable_next=function(oe){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var pe=S;S=$;try{return oe()}finally{S=pe}},k.unstable_requestPaint=function(){g=!0},k.unstable_runWithPriority=function(oe,$){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var pe=S;S=oe;try{return $()}finally{S=pe}},k.unstable_scheduleCallback=function(oe,$,pe){var re=k.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?re+pe:re):pe=re,oe){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=pe+be,oe={id:N++,callback:$,priorityLevel:oe,startTime:pe,expirationTime:be,sortIndex:-1},pe>re?(oe.sortIndex=pe,ee(A,oe),_(v)===null&&oe===_(A)&&(f?(M(Z),Z=-1):f=!0,ae(H,pe-re))):(oe.sortIndex=be,ee(v,oe),T||m||(T=!0,P||(P=!0,j()))),oe},k.unstable_shouldYield=de,k.unstable_wrapCallback=function(oe){var $=S;return function(){var pe=S;S=$;try{return oe.apply(this,arguments)}finally{S=pe}}}})(Iu)),Iu}var y0;function Kg(){return y0||(y0=1,Bu.exports=Xg()),Bu.exports}var Hu={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function Jg(){if(x0)return Tn;x0=1;var k=Qu();function ee(N){var c="https://react.dev/errors/"+N;if(1<arguments.length){c+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)c+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+N+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var h={d:{f:_,r:function(){throw Error(ee(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},C=Symbol.for("react.portal"),p=Symbol.for("react.recoverable"),b=Symbol.for("react.optimistic_key");function d(N,c,S){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:m==null?null:m===b?b:""+m,children:N,containerInfo:c,implementation:S}}var v=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(N,c){if(N==="font")return"";if(typeof c=="string")return c==="use-credentials"?c:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Tn.browser=function(N){return{$$typeof:p,_reason:N}},Tn.createPortal=function(N,c){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!c||c.nodeType!==1&&c.nodeType!==9&&c.nodeType!==11)throw Error(ee(299));return d(N,c,null,S)},Tn.flushSync=function(N){var c=v.T,S=h.p;try{if(v.T=null,h.p=2,N)return N()}finally{v.T=c,h.p=S,h.d.f()}},Tn.preconnect=function(N,c){typeof N=="string"&&(c?(c=c.crossOrigin,c=typeof c=="string"?c==="use-credentials"?c:"":void 0):c=null,h.d.C(N,c))},Tn.prefetchDNS=function(N){typeof N=="string"&&h.d.D(N)},Tn.preinit=function(N,c){if(typeof N=="string"&&c&&typeof c.as=="string"){var S=c.as,m=A(S,c.crossOrigin),T=typeof c.integrity=="string"?c.integrity:void 0,f=typeof c.fetchPriority=="string"?c.fetchPriority:void 0;S==="style"?h.d.S(N,typeof c.precedence=="string"?c.precedence:void 0,{crossOrigin:m,integrity:T,fetchPriority:f}):S==="script"&&h.d.X(N,{crossOrigin:m,integrity:T,fetchPriority:f,nonce:typeof c.nonce=="string"?c.nonce:void 0})}},Tn.preinitModule=function(N,c){if(typeof N=="string")if(typeof c=="object"&&c!==null){if(c.as==null||c.as==="script"){var S=A(c.as,c.crossOrigin);h.d.M(N,{crossOrigin:S,integrity:typeof c.integrity=="string"?c.integrity:void 0,nonce:typeof c.nonce=="string"?c.nonce:void 0,fetchPriority:typeof c.fetchPriority=="string"?c.fetchPriority:void 0})}}else c==null&&h.d.M(N)},Tn.preload=function(N,c){if(typeof N=="string"&&typeof c=="object"&&c!==null&&typeof c.as=="string"){var S=c.as,m=A(S,c.crossOrigin);h.d.L(N,S,{crossOrigin:m,integrity:typeof c.integrity=="string"?c.integrity:void 0,nonce:typeof c.nonce=="string"?c.nonce:void 0,type:typeof c.type=="string"?c.type:void 0,fetchPriority:typeof c.fetchPriority=="string"?c.fetchPriority:void 0,referrerPolicy:typeof c.referrerPolicy=="string"?c.referrerPolicy:void 0,imageSrcSet:typeof c.imageSrcSet=="string"?c.imageSrcSet:void 0,imageSizes:typeof c.imageSizes=="string"?c.imageSizes:void 0,media:typeof c.media=="string"?c.media:void 0})}},Tn.preloadModule=function(N,c){if(typeof N=="string")if(c){var S=A(c.as,c.crossOrigin);h.d.m(N,{as:typeof c.as=="string"&&c.as!=="script"?c.as:void 0,crossOrigin:S,integrity:typeof c.integrity=="string"?c.integrity:void 0,nonce:typeof c.nonce=="string"?c.nonce:void 0,fetchPriority:typeof c.fetchPriority=="string"?c.fetchPriority:void 0})}else h.d.m(N)},Tn.requestFormReset=function(N){h.d.r(N)},Tn.unstable_batchedUpdates=function(N,c){return N(c)},Tn.useFormState=function(N,c,S){return v.H.useFormState(N,c,S)},Tn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Tn.version="19.3.1",Tn}var _0;function Fg(){if(_0)return Hu.exports;_0=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(ee){console.error(ee)}}return k(),Hu.exports=Jg(),Hu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function Wg(){if(M0)return Ni;M0=1;var k=Kg(),ee=Qu(),_=Fg();function h(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function b(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(p(e)!==e)throw Error(h(188))}function A(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return v(l),e;if(i===a)return v(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==a.return)t=l,a=i;else{for(var s=!1,r=l.child;r;){if(r===t){s=!0,t=l,a=i;break}if(r===a){s=!0,a=l,t=i;break}r=r.sibling}if(!s){for(r=i.child;r;){if(r===t){s=!0,t=i,a=l;break}if(r===a){s=!0,a=i,t=l;break}r=r.sibling}if(!s)throw Error(h(189))}}if(t.alternate!==a)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function N(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=N(e),n!==null)return n;e=e.sibling}return null}function c(e,n,t,a,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,l,i)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&c(e.child,n,t,a,l,i))return!0;e=e.sibling}return!1}function S(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function m(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],t=S(e);return t===null||f(n,e,t.child,{foundSelf:!1}),n}function f(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&f(e,n,t.child,a))return!0;t=t.sibling}return!1}function g(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(h(559))}}var y=null,M=null;function R(e,n,t){return e===t?!0:e===n?(y=e,!0):!1}function L(e,n,t){return e===t?(M=e,!1):e===n?(M!==null&&(y=e),!0):!1}function H(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,t){for(var a=0,l=e;l;l=t(l))a++;l=0;for(var i=n;i;i=t(i))l++;for(;0<a-l;)e=t(e),a--;for(;0<l-a;)n=t(n),l--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}var Z=Object.assign,ne=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),K=Symbol.for("react.legacy_hidden"),Ce=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),ve=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case te:return"Profiler";case j:return"StrictMode";case $:return"Suspense";case pe:return"SuspenseList";case J:return"Activity";case D:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case de:return"Portal";case ae:return e.displayName||"Context";case u:return(e._context.displayName||"Context")+".Consumer";case oe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var ze=Array.isArray,he=ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sn={pending:!1,data:null,method:null,action:null},o=[],se=-1;function W(e){return{current:e}}function E(e){0>se||(e.current=o[se],o[se]=null,se--)}function x(e,n){se++,o[se]=e.current,e.current=n}var B=W(null),ue=W(null),ce=W(null),Q=W(null);function fe(e,n){switch(x(ce,n),x(ue,e),x(B,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wm(n),e=Sm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(B),x(B,e)}function ye(){E(B),E(ue),E(ce)}function me(e){var n=e.memoizedState;n!==null&&(Dl._currentValue=n.memoizedState,x(Q,e)),n=B.current;var t=Sm(n,e.type);n!==t&&(x(ue,e),x(B,t))}function De(e){ue.current===e&&(E(B),E(ue)),Q.current===e&&(E(Q),Dl._currentValue=sn)}var Ye,Ue;function on(e){if(Ye===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",Ue=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+Ue}var Mt=!1;function jn(e,n){if(!e||Mt)return"";Mt=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(ge){var U=ge}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(ge){U=ge}ie=!1;try{var Y=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ie=!0,new e}finally{ie&&(Y!==void 0?Object.defineProperty(e.prototype,"props",Y):delete e.prototype.props)}}}else{try{throw Error()}catch(ge){U=ge}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(ge){if(ge&&U&&typeof ge.stack=="string")return[ge.stack,U.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],r=i[1];if(s&&r){var z=s.split(`
`),q=r.split(`
`);for(l=a=0;a<z.length&&!z[a].includes("DetermineComponentFrameRoot");)a++;for(;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;if(a===z.length||l===q.length)for(a=z.length-1,l=q.length-1;1<=a&&0<=l&&z[a]!==q[l];)l--;for(;1<=a&&0<=l;a--,l--)if(z[a]!==q[l]){if(a!==1||l!==1)do if(a--,l--,0>l||z[a]!==q[l]){var X=`
`+z[a].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=a&&0<=l);break}}}finally{Mt=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?on(t):""}function ha(e,n){switch(e.tag){case 26:case 27:case 5:return on(e.type);case 16:return on("Lazy");case 13:return e.child!==n&&n!==null?on("Suspense Fallback"):on("Suspense");case 19:return on("SuspenseList");case 0:case 15:return jn(e.type,!1);case 11:return jn(e.type.render,!1);case 1:return jn(e.type,!0);case 31:return on("Activity");case 30:return on("ViewTransition");default:return""}}function en(e){try{var n="",t=null;do n+=ha(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var qt=Object.prototype.hasOwnProperty,ga=k.unstable_scheduleCallback,Hn=k.unstable_cancelCallback,Ei=k.unstable_shouldYield,lo=k.unstable_requestPaint,Nn=k.unstable_now,io=k.unstable_getCurrentPriorityLevel,jl=k.unstable_ImmediatePriority,Lt=k.unstable_UserBlockingPriority,wt=k.unstable_NormalPriority,W0=k.unstable_LowPriority,Xu=k.unstable_IdlePriority,$0=k.log,P0=k.unstable_setDisableYieldValue,Ol=null,qn=null;function Vt(e){if(typeof $0=="function"&&P0(e),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(Ol,e)}catch{}}var Ln=Math.clz32?Math.clz32:tp,ep=Math.log,np=Math.LN2;function tp(e){return e>>>=0,e===0?32:31-(ep(e)/np|0)|0}var zi=256,Ai=262144,ji=4194304;function ba(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~i,a!==0?l=ba(a):(s&=r,s!==0?l=ba(s):t||(t=r&~e,t!==0&&(l=ba(t))))):(r=a&~i,r!==0?l=ba(r):s!==0?l=ba(s):t||(t=a&~e,t!==0&&(l=ba(t)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:l}function Rl(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ku(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-Ln(t),l=1<<a;n|=e[a],t&=~l}return n}function ap(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ju(){var e=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),e}function so(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function kl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lp(e,n,t,a,l,i){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,z=e.expirationTimes,q=e.hiddenUpdates;for(t=s&~t;0<t;){var X=31-Ln(t),ie=1<<X;r[X]=0,z[X]=-1;var U=q[X];if(U!==null)for(q[X]=null,X=0;X<U.length;X++){var Y=U[X];Y!==null&&(Y.lane&=-536870913)}t&=~ie}a!==0&&Fu(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~n))}function Fu(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-Ln(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Wu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Ln(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function $u(e,n){var t=n&-n;return t=(t&42)!==0?1:oo(t),(t&(e.suspendedLanes|n))!==0?0:t}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pu(){var e=Ne.p;return e!==0?e:(e=window.event,e===void 0?32:o0(e.type))}function ec(e,n){var t=Ne.p;try{return Ne.p=e,n()}finally{Ne.p=t}}var St=Math.random().toString(36).slice(2),yn="__reactFiber$"+St,On="__reactProps$"+St,Va="__reactContainer$"+St,nc="__reactEvents$"+St,ip="__reactListeners$"+St,sp="__reactHandles$"+St,tc="__reactResources$"+St,Ul="__reactMarker$"+St,Ri="__reactLoad$"+St;function ki(e){delete e[yn],delete e[On],delete e[ip],delete e[sp]}function va(e){var n;if(n=e[yn])return n;for(var t=e.parentNode;t;){if(n=t[Va]||t[yn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lm(e);e!==null;){if(t=e[yn])return t;e=Lm(e)}return n}e=t,t=e.parentNode}return null}function Ga(e){if(e=e[yn]||e[Va]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Bl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(h(33))}function Za(e){var n=e[tc];return n||(n=e[tc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[Ul]=!0}function ac(e){e[Ri]=void 0}var lc=new Set,ic={};function ya(e,n){Ya(e,n),Ya(e+"Capture",n)}function Ya(e,n){for(ic[e]=n,e=0;e<n.length;e++)lc.add(n[e])}var op=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sc={},oc={};function rp(e){return qt.call(oc,e)?!0:qt.call(sc,e)?!1:op.test(e)?oc[e]=!0:(sc[e]=!0,!1)}var Ge=!1;function rc(){var e=Ge;return Ge=!1,e}function Ui(e,n,t){if(rp(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,t)}}function Bi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,t)}}function Tt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,a)}}function Vn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function up(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){t=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function uo(e){if(!e._valueTracker){var n=uc(e)?"checked":"value";e._valueTracker=up(e,n,""+e[n])}}function cc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=uc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}var cp=/[\n"\\]/g;function Fn(e){return e.replace(cp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function co(e,n,t,a,l,i,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vn(n)):e.value!==""+Vn(n)&&(e.value=""+Vn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?s==="number"&&e.value==n?fo(e,Vn(e.value)):fo(e,Vn(n)):t!=null?fo(e,Vn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Vn(r):e.removeAttribute("name")}function dc(e,n,t,a,l,i,s,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){uo(e);return}t=t!=null?""+Vn(t):"",n=n!=null?""+Vn(n):t,r||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),uo(e)}function fo(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Qa(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Vn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function fc(e,n,t){if(n!=null&&(n=""+Vn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Vn(t):""}function mc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(h(92));if(ze(a)){if(1<a.length)throw Error(h(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Vn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),uo(e)}function Xa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||dp.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function hc(e,n,t){if(n!=null&&typeof n!="object")throw Error(h(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Ge=!0);for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&(pc(e,l,a),Ge=!0)}else for(var i in n)n.hasOwnProperty(i)&&pc(e,i,n[i])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return mp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dt(){}var po=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Ja=null;function gc(e){var n=Ga(e);if(n&&(e=n.stateNode)){var t=e[On]||null;e:switch(e=n.stateNode,n.type){case"input":if(co(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Fn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[On]||null;if(!l)throw Error(h(90));co(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&cc(a)}break e;case"textarea":fc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Qa(e,!!t.multiple,n,!1)}}}var go=!1;function bc(e,n,t){if(go)return e(n,t);go=!0;try{var a=e(n);return a}finally{if(go=!1,(Ka!==null||Ja!==null)&&(Is(),Ka&&(n=Ka,e=Ja,Ja=Ka=null,gc(n),e)))for(n=0;n<e.length;n++)gc(e[n])}}function Il(e,n){var t=e.stateNode;if(t===null)return null;var a=t[On]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Ct)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{bo=!1}var Gt=null,vo=null,Hi=null;function vc(){if(Hi)return Hi;var e,n=vo,t=n.length,a,l="value"in Gt?Gt.value:Gt.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===l[i-a];a++);return Hi=l.slice(e,1<a?1-a:void 0)}function qi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function yc(){return!1}function Dn(e){function n(t,a,l,i,s){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Li:yc,this.isPropagationStopped=yc,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),n}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Dn(Zt),ql=Z({},Zt,{view:0,detail:0}),pp=Dn(ql),yo,xo,Ll,Gi=Z({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(yo=e.screenX-Ll.screenX,xo=e.screenY-Ll.screenY):xo=yo=0,Ll=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),xc=Dn(Gi),hp=Z({},Gi,{dataTransfer:0}),gp=Dn(hp),bp=Z({},ql,{relatedTarget:0}),_o=Dn(bp),vp=Z({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=Dn(vp),xp=Z({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Dn(xp),Mp=Z({},Zt,{data:0}),_c=Dn(Mp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tp[e])?!!n[e]:!1}function Mo(){return Cp}var Np=Z({},ql,{key:function(e){if(e.key){var n=wp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Dn(Np),Ep=Z({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=Dn(Ep),zp=Z({},Zt,{submitter:0}),Ap=Dn(zp),jp=Z({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),Op=Dn(jp),Rp=Z({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=Dn(Rp),Up=Z({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Dn(Up),Ip=Z({},Zt,{newState:0,oldState:0,source:0}),Hp=Dn(Ip),qp=[9,13,27,32],wo=Ct&&"CompositionEvent"in window,Vl=null;Ct&&"documentMode"in document&&(Vl=document.documentMode);var Lp=Ct&&"TextEvent"in window&&!Vl,wc=Ct&&(!wo||Vl&&8<Vl&&11>=Vl),Sc=" ",Tc=!1;function Cc(e,n){switch(e){case"keyup":return qp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function Vp(e,n){switch(e){case"compositionend":return Nc(n);case"keypress":return n.which!==32?null:(Tc=!0,Sc);case"textInput":return e=n.data,e===Sc&&Tc?null:e;default:return null}}function Gp(e,n){if(Fa)return e==="compositionend"||!wo&&Cc(e,n)?(e=vc(),Hi=vo=Gt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wc&&n.locale!=="ko"?null:n.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zp[e.type]:n==="textarea"}function Ec(e,n,t,a){Ka?Ja?Ja.push(a):Ja=[a]:Ka=a,n=Zs(n,"onChange"),0<n.length&&(t=new Vi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Gl=null,Zl=null;function Yp(e){bm(e,0)}function Zi(e){var n=Bl(e);if(cc(n))return e}function zc(e,n){if(e==="change")return n}var Ac=!1;if(Ct){var So;if(Ct){var To="oninput"in document;if(!To){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),To=typeof jc.oninput=="function"}So=To}else So=!1;Ac=So&&(!document.documentMode||9<document.documentMode)}function Oc(){Gl&&(Gl.detachEvent("onpropertychange",Rc),Zl=Gl=null)}function Rc(e){if(e.propertyName==="value"&&Zi(Zl)){var n=[];Ec(n,Zl,e,ho(e)),bc(Yp,n)}}function Qp(e,n,t){e==="focusin"?(Oc(),Gl=n,Zl=t,Gl.attachEvent("onpropertychange",Rc)):e==="focusout"&&Oc()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Zl)}function Kp(e,n){if(e==="click")return Zi(n)}function Jp(e,n){if(e==="input"||e==="change")return Zi(n)}function Fp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:Fp;function Yl(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!qt.call(n,l)||!Gn(e[l],n[l]))return!1}return!0}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uc(e,n){var t=kc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kc(t)}}function Bc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Co(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Co(e.document)}return n}function No(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wp=Ct&&"documentMode"in document&&11>=document.documentMode,Wa=null,Do=null,Ql=null,Eo=!1;function Hc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Eo||Wa==null||Wa!==Co(a)||(a=Wa,"selectionStart"in a&&No(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ql&&Yl(Ql,a)||(Ql=a,a=Zs(Do,"onSelect"),0<a.length&&(n=new Vi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Wa)))}function xa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $a={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},zo={},qc={};Ct&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function _a(e){if(zo[e])return zo[e];if(!$a[e])return e;var n=$a[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qc)return zo[e]=n[t];return e}var Lc=_a("animationend"),Vc=_a("animationiteration"),Gc=_a("animationstart"),$p=_a("transitionrun"),Pp=_a("transitionstart"),eh=_a("transitioncancel"),Zc=_a("transitionend"),Yc=new Map,Ao="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ao.push("scrollEnd");function it(e,n){Yc.set(e,n),ya(n,[e])}var nh=0;function Nt(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ut.identifierPrefix;var t=nh++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function Qc(e){if(e==null||typeof e=="string")return e;var n=null,t=vl;if(t!==null)for(var a=0;a<t.length;a++){var l=e[t[a]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function Dt(e,n){return e=Qc(e),n=Qc(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],Pa=0,jo=0;function Qi(){for(var e=Pa,n=jo=Pa=0;n<e;){var t=Wn[n];Wn[n++]=null;var a=Wn[n];Wn[n++]=null;var l=Wn[n];Wn[n++]=null;var i=Wn[n];if(Wn[n++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}i!==0&&Xc(t,l,i)}}function Xi(e,n,t,a){Wn[Pa++]=e,Wn[Pa++]=n,Wn[Pa++]=t,Wn[Pa++]=a,jo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Oo(e,n,t,a){return Xi(e,n,t,a),Ki(e)}function Ma(e,n){return Xi(e,null,null,n),Ki(e)}function Xc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&n!==null&&(l=31-Ln(t),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),i):null}function Ki(e){if(50<pi)throw pi=0,Bs=null,Error(h(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var el={};function th(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,n,t,a){return new th(e,n,t,a)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Et(e,n){var t=e.alternate;return t===null?(t=Rn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Kc(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ji(e,n,t,a,l,i){var s=0;if(a=e,typeof a=="function")Ro(a)&&(s=1);else if(typeof a=="string")s=zg(e,t,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case J:return e=Rn(31,t,n,l),e.elementType=J,e.lanes=i,e;case we:return wa(t.children,l,i,n);case j:s=8,l|=24;break;case te:return e=Rn(12,t,n,l|2),e.elementType=te,e.lanes=i,e;case $:return e=Rn(13,t,n,l),e.elementType=$,e.lanes=i,e;case pe:return e=Rn(19,t,n,l),e.elementType=pe,e.lanes=i,e;case K:case D:return e=l|32,e=Rn(30,t,n,e),e.elementType=D,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ae:s=10;break e;case u:s=9;break e;case oe:s=11;break e;case re:s=14;break e;case be:s=16,a=null;break e}s=29,t=Error(h(130,e===null?"null":typeof e,"")),a=null}return n=Rn(s,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function wa(e,n,t,a){return e=Rn(7,e,a,n),e.lanes=t,e}function ko(e,n,t){return e=Rn(6,e,null,n),e.lanes=t,e}function Jc(e){var n=Rn(18,null,null,0);return n.stateNode=e,n}function Uo(e,n,t){return n=Rn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fc=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var t=Fc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:en(n)},Fc.set(e,n),n)}return{value:e,source:n,stack:en(n)}}var nl=[],tl=0,Fi=null,Xl=0,Pn=[],et=0,Yt=null,ft=1,mt="";function zt(e,n){nl[tl++]=Xl,nl[tl++]=Fi,Fi=e,Xl=n}function Wc(e,n,t){Pn[et++]=ft,Pn[et++]=mt,Pn[et++]=Yt,Yt=e;var a=ft;e=mt;var l=32-Ln(a)-1;a&=~(1<<l),t+=1;var i=32-Ln(n)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,ft=1<<32-Ln(n)+l|t<<l|a,mt=i+e}else ft=1<<i|t<<l|a,mt=e}function Wi(e){e.return!==null&&(zt(e,1),Wc(e,1,0))}function Bo(e){for(;e===Fi;)Fi=nl[--tl],nl[tl]=null,Xl=nl[--tl],nl[tl]=null;for(;e===Yt;)Yt=Pn[--et],Pn[et]=null,mt=Pn[--et],Pn[et]=null,ft=Pn[--et],Pn[et]=null}function $c(e,n){Pn[et++]=ft,Pn[et++]=mt,Pn[et++]=Yt,ft=n.id,mt=n.overflow,Yt=e}var hn=null,$e=null,ke=!1,Qt=null,nt=!1,Io=Error(h(519));function Xt(e){var n=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl($n(n,e)),Io}function Pc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[yn]=e,n[On]=a,t){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(t=0;t<gi.length;t++)Ie(gi[t],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),dc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),mc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||_m(n.textContent,t)?(a.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),a.onScroll!=null&&Ie("scroll",n),a.onScrollEnd!=null&&Ie("scrollend",n),a.onClick!=null&&(n.onclick=dt),n=!0):n=!1,n||Xt(e,!0)}function $i(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:nt=!1;return;case 27:case 3:nt=!0;return;default:hn=hn.return}}function al(e){if(e!==hn)return!1;if(!ke)return $i(e),ke=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||pu(e.type,e.memoizedProps)),t=!t),t&&$e&&Xt(e),$i(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));$e=qm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));$e=qm(e)}else n===27?(n=$e,ua(e.type)?(e=wu,wu=null,$e=e):$e=n):$e=hn?at(e.stateNode.nextSibling):null;return!0}function Sa(){$e=hn=null,ke=!1}function Ho(){var e=Qt;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),Qt=null),e}function Kl(e){Qt===null?Qt=[e]:Qt.push(e)}var qo=W(null),Ta=null,At=null;function Kt(e,n,t){x(qo,n._currentValue),n._currentValue=t}function jt(e){e._currentValue=qo.current,E(qo)}function Pi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Lo(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var z=0;z<n.length;z++)if(r.context===n[z]){i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),Pi(i.return,t,e),a||(s=null);break e}i=r.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(h(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Pi(s,t,e),s=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Pi(l.return,t,e),s=l.child,s=s!==null?s.sibling:null):s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Ca(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var r=l.type;Gn(l.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(l===Q.current){if(s=l.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Dl):e=[Dl])}l=l.return}return e!==null&&Lo(n,e,t,a),n.flags|=262144,e!==null}function es(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Ta=e,At=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return ed(Ta,e)}function ns(e,n){return Ta===null&&Na(e),ed(e,n)}function ed(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},At===null){if(e===null)throw Error(h(308));At=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else At=At.next=n;return t}var ah=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},lh=k.unstable_scheduleCallback,ih=k.unstable_NormalPriority,un={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new ah,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&lh(ih,function(){e.controller.abort()})}function nd(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}var Fl=null;function sh(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Wl=null,Go=0,Da=0,ll=null;function oh(e,n){if(Wl===null){var t=Wl=[];Go=0,Da=iu(),ll={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Go++,n.then(td,td),n}function td(){if(--Go===0&&(Fl=null,Wl!==null)){ll!==null&&(ll.status="fulfilled");var e=Wl;Wl=null,Da=0,ll=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rh(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var ad=he.S;he.S=function(e,n){if(Ff=Nn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oh(e,n),Fl!==null)for(var t=Ml;t!==null;)nd(t,Fl),t=t.next;if(t=e.types,t!==null){for(var a=Ml;a!==null;)nd(a,t),a=a.next;if(Da!==0){a=Fl,a===null&&(a=Fl=[]);for(var l=0;l<t.length;l++){var i=t[l];a.indexOf(i)===-1&&a.push(i)}}}ad!==null&&ad(e,n)};var Ea=W(null);function Zo(){var e=Ea.current;return e!==null?e:We.pooledCache}function ts(e,n){n===null?x(Ea,Ea.current):x(Ea,n.pool)}function ld(){var e=Zo();return e===null?null:{parent:un._currentValue,pool:e}}var il=Error(h(460)),Yo=Error(h(474)),as=Error(h(542)),ls={then:function(){}};function id(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(dt,dt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rd(e),e===void 0&&!("reason"in n)?Error(h(600)):e;default:if(typeof n.status=="string")n.then(dt,dt);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rd(e),e}throw Aa=n,il}}function za(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Aa=t,il):t}}var Aa=null;function od(){if(Aa===null)throw Error(h(459));var e=Aa;return Aa=null,e}function rd(e){if(e===il||e===as)throw Error(h(483))}var sl=null,$l=0;function is(e){var n=$l;return $l+=1,sl===null&&(sl=[]),sd(sl,e,n)}function Jt(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ss(e,n){throw n.$$typeof===ne?Error(h(525)):(e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ud(e){function n(I,O){if(e){var G=I.deletions;G===null?(I.deletions=[O],I.flags|=16):G.push(O)}}function t(I,O){if(!e)return null;for(;O!==null;)n(I,O),O=O.sibling;return null}function a(I){for(var O=new Map;I!==null;)I.key===null?O.set(I.index,I):O.set(I.key,I),I=I.sibling;return O}function l(I,O){return I=Et(I,O),I.index=0,I.sibling=null,I}function i(I,O,G){return I.index=G,e?(G=I.alternate,G!==null?(G=G.index,G<O?(I.flags|=2,O):G):(I.flags|=134217730,O)):(I.flags|=1048576,O)}function s(I){return e&&I.alternate===null&&(I.flags|=134217730),I}function r(I,O,G,le){return O===null||O.tag!==6?(O=ko(G,I.mode,le),O.return=I,O):(O=l(O,G),O.return=I,O)}function z(I,O,G,le){var Me=G.type;return Me===we?(I=X(I,O,G.props.children,le,G.key),Jt(I,G),I):O!==null&&(O.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===be&&za(Me)===O.type)?(O=l(O,G.props),Jt(O,G),O.return=I,O):(O=Ji(G.type,G.key,G.props,null,I.mode,le),Jt(O,G),O.return=I,O)}function q(I,O,G,le){return O===null||O.tag!==4||O.stateNode.containerInfo!==G.containerInfo||O.stateNode.implementation!==G.implementation?(O=Uo(G,I.mode,le),O.return=I,O):(O=l(O,G.children||[]),O.return=I,O)}function X(I,O,G,le,Me){return O===null||O.tag!==7?(O=wa(G,I.mode,le,Me),O.return=I,O):(O=l(O,G),O.return=I,O)}function ie(I,O,G){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ko(""+O,I.mode,G),O.return=I,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case F:return G=Ji(O.type,O.key,O.props,null,I.mode,G),Jt(G,O),G.return=I,G;case de:return O=Uo(O,I.mode,G),O.return=I,O;case be:return O=za(O),ie(I,O,G)}if(ze(O)||xe(O))return O=wa(O,I.mode,G,null),O.return=I,O;if(typeof O.then=="function")return ie(I,is(O),G);if(O.$$typeof===ae)return ie(I,ns(I,O),G);ss(I,O)}return null}function U(I,O,G,le){var Me=O!==null?O.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Me!==null?null:r(I,O,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case F:return G.key===Me?z(I,O,G,le):null;case de:return G.key===Me?q(I,O,G,le):null;case be:return G=za(G),U(I,O,G,le)}if(ze(G)||xe(G))return Me!==null?null:X(I,O,G,le,null);if(typeof G.then=="function")return U(I,O,is(G),le);if(G.$$typeof===ae)return U(I,O,ns(I,G),le);ss(I,G)}return null}function Y(I,O,G,le,Me){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return I=I.get(G)||null,r(O,I,""+le,Me);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case F:return I=I.get(le.key===null?G:le.key)||null,z(O,I,le,Me);case de:return I=I.get(le.key===null?G:le.key)||null,q(O,I,le,Me);case be:return le=za(le),Y(I,O,G,le,Me)}if(ze(le)||xe(le))return I=I.get(G)||null,X(O,I,le,Me,null);if(typeof le.then=="function")return Y(I,O,G,is(le),Me);if(le.$$typeof===ae)return Y(I,O,G,ns(O,le),Me);ss(O,le)}return null}function ge(I,O,G,le){for(var Me=null,qe=null,Ee=O,Ae=O=0,fn=null;Ee!==null&&Ae<G.length;Ae++){Ee.index>Ae?(fn=Ee,Ee=null):fn=Ee.sibling;var Le=U(I,Ee,G[Ae],le);if(Le===null){Ee===null&&(Ee=fn);break}e&&Ee&&Le.alternate===null&&n(I,Ee),O=i(Le,O,Ae),qe===null?Me=Le:qe.sibling=Le,qe=Le,Ee=fn}if(Ae===G.length)return t(I,Ee),ke&&zt(I,Ae),Me;if(Ee===null){for(;Ae<G.length;Ae++)Ee=ie(I,G[Ae],le),Ee!==null&&(O=i(Ee,O,Ae),qe===null?Me=Ee:qe.sibling=Ee,qe=Ee);return ke&&zt(I,Ae),Me}for(Ee=a(Ee);Ae<G.length;Ae++)fn=Y(Ee,I,Ae,G[Ae],le),fn!==null&&(e&&(Le=fn.alternate,Le!==null&&Ee.delete(Le.key===null?Ae:Le.key)),O=i(fn,O,Ae),qe===null?Me=fn:qe.sibling=fn,qe=fn);return e&&Ee.forEach(function(pa){return n(I,pa)}),ke&&zt(I,Ae),Me}function Se(I,O,G,le){if(G==null)throw Error(h(151));for(var Me=null,qe=null,Ee=O,Ae=O=0,fn=null,Le=G.next();Ee!==null&&!Le.done;Ae++,Le=G.next()){Ee.index>Ae?(fn=Ee,Ee=null):fn=Ee.sibling;var pa=U(I,Ee,Le.value,le);if(pa===null){Ee===null&&(Ee=fn);break}e&&Ee&&pa.alternate===null&&n(I,Ee),O=i(pa,O,Ae),qe===null?Me=pa:qe.sibling=pa,qe=pa,Ee=fn}if(Le.done)return t(I,Ee),ke&&zt(I,Ae),Me;if(Ee===null){for(;!Le.done;Ae++,Le=G.next())Le=ie(I,Le.value,le),Le!==null&&(O=i(Le,O,Ae),qe===null?Me=Le:qe.sibling=Le,qe=Le);return ke&&zt(I,Ae),Me}for(Ee=a(Ee);!Le.done;Ae++,Le=G.next())Le=Y(Ee,I,Ae,Le.value,le),Le!==null&&(e&&(fn=Le.alternate,fn!==null&&Ee.delete(fn.key===null?Ae:fn.key)),O=i(Le,O,Ae),qe===null?Me=Le:qe.sibling=Le,qe=Le);return e&&Ee.forEach(function(Vg){return n(I,Vg)}),ke&&zt(I,Ae),Me}function Re(I,O,G,le){if(typeof G=="object"&&G!==null&&G.type===we&&G.key===null&&G.props.ref===void 0&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case F:e:{for(var Me=G.key;O!==null;){if(O.key===Me){if(Me=G.type,Me===we){if(O.tag===7){t(I,O.sibling),le=l(O,G.props.children),Jt(le,G),le.return=I,I=le;break e}}else if(O.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===be&&za(Me)===O.type){t(I,O.sibling),le=l(O,G.props),Jt(le,G),le.return=I,I=le;break e}t(I,O);break}else n(I,O);O=O.sibling}G.type===we?(le=wa(G.props.children,I.mode,le,G.key),Jt(le,G),le.return=I,I=le):(le=Ji(G.type,G.key,G.props,null,I.mode,le),Jt(le,G),le.return=I,I=le)}return s(I);case de:e:{for(Me=G.key;O!==null;){if(O.key===Me)if(O.tag===4&&O.stateNode.containerInfo===G.containerInfo&&O.stateNode.implementation===G.implementation){t(I,O.sibling),le=l(O,G.children||[]),le.return=I,I=le;break e}else{t(I,O);break}else n(I,O);O=O.sibling}le=Uo(G,I.mode,le),le.return=I,I=le}return s(I);case be:return G=za(G),Re(I,O,G,le)}if(ze(G))return ge(I,O,G,le);if(xe(G)){if(Me=xe(G),typeof Me!="function")throw Error(h(150));return G=Me.call(G),Se(I,O,G,le)}if(typeof G.then=="function")return Re(I,O,is(G),le);if(G.$$typeof===ae)return Re(I,O,ns(I,G),le);ss(I,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,O!==null&&O.tag===6?(t(I,O.sibling),le=l(O,G),le.return=I,I=le):(t(I,O),le=ko(G,I.mode,le),le.return=I,I=le),s(I)):t(I,O)}return function(I,O,G,le){try{$l=0;var Me=Re(I,O,G,le);return sl=null,Me}catch(Ee){if(Ee===il||Ee===as)throw Ee;var qe=Rn(29,Ee,null,I.mode);return qe.lanes=le,qe.return=I,qe}finally{}}}var ja=ud(!0),cd=ud(!1),Ft=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $t(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ze&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Ki(e),Xc(e,null,t),n}return Xi(e,a,n,t),Ki(e)}function Pl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Wu(e,t)}}function Ko(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Jo=!1;function ei(){if(Jo){var e=ll;if(e!==null)throw e}}function ni(e,n,t,a){Jo=!1;var l=e.updateQueue;Ft=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var z=r,q=z.next;z.next=null,s===null?i=q:s.next=q,s=z;var X=e.alternate;X!==null&&(X=X.updateQueue,r=X.lastBaseUpdate,r!==s&&(r===null?X.firstBaseUpdate=q:r.next=q,X.lastBaseUpdate=z))}if(i!==null){var ie=l.baseState;s=0,X=q=z=null,r=i;do{var U=r.lane&-536870913,Y=U!==r.lane;if(Y?(He&U)===U:(a&U)===U){U!==0&&U===Da&&(Jo=!0),X!==null&&(X=X.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var ge=e,Se=r;U=n;var Re=t;switch(Se.tag){case 1:if(ge=Se.payload,typeof ge=="function"){ie=ge.call(Re,ie,U);break e}ie=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Se.payload,U=typeof ge=="function"?ge.call(Re,ie,U):ge,U==null)break e;ie=Z({},ie,U);break e;case 2:Ft=!0}}U=r.callback,U!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[U]:Y.push(U))}else Y={lane:U,tag:r.tag,payload:r.payload,callback:r.callback,next:null},X===null?(q=X=Y,z=ie):X=X.next=Y,s|=U;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;Y=r,r=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);X===null&&(z=ie),l.baseState=z,l.firstBaseUpdate=q,l.lastBaseUpdate=X,i===null&&(l.shared.lanes=0),ia|=s,e.lanes=s,e.memoizedState=ie}}function dd(e,n){if(typeof e!="function")throw Error(h(191,e));e.call(n)}function fd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)dd(t[e],n)}var Pt=W(null),os=W(0);function md(e,n){e=Bt,x(os,e),x(Pt,n),Bt=e|n.baseLanes}function Fo(){x(os,Bt),x(Pt,Pt.current)}function Wo(){Bt=os.current,E(Pt),E(os)}var _n=W(null),Cn=null;function ea(e){var n=e.alternate;x(Mn,Mn.current&1),x(_n,e),Cn===null&&(n===null||Pt.current!==null||n.memoizedState!==null)&&(Cn=e)}function $o(e){x(Mn,Mn.current),x(_n,e),Cn===null&&(Cn=e)}function pd(e){e.tag===22?(x(Mn,Mn.current),x(_n,e),Cn===null&&(Cn=e)):na()}function na(){x(Mn,Mn.current),x(_n,_n.current)}function Zn(e){E(_n),Cn===e&&(Cn=null),E(Mn)}var Mn=W(0);function ti(e,n){x(_n,_n.current),x(Mn,n)}function Po(e){E(Mn),E(_n),Cn===e&&(Cn=null)}function rs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||_u(t)||Mu(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ot=0,Oe=null,Fe=null,cn=null,us=!1,ol=!1,Oa=!1,cs=0,ai=0,rl=null,uh=0;function an(){throw Error(h(321))}function er(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Gn(e[t],n[t]))return!1;return!0}function nr(e,n,t,a,l,i){return Ot=i,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,he.H=e===null||e.memoizedState===null?Wd:$d,Oa=!1,i=t(a,l),Oa=!1,ol&&(i=gd(n,t,a,l)),hd(e),i}function hd(e){he.H=bs;var n=Fe!==null&&Fe.next!==null;if(Ot=0,cn=Fe=Oe=null,us=!1,ai=0,rl=null,n)throw Error(h(300));e===null||dn||(e=e.dependencies,e!==null&&es(e)&&(dn=!0))}function gd(e,n,t,a){Oe=e;var l=0;do{if(ol&&(rl=null),ai=0,ol=!1,25<=l)throw Error(h(301));if(l+=1,cn=Fe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}he.H=bh,i=n(t,a)}while(ol);return i}function ch(){var e=he.H,n=e.useState()[0];return n=typeof n.then=="function"?li(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(Oe.flags|=1024),n}function tr(){var e=cs!==0;return cs=0,e}function ar(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function lr(e){if(us){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}us=!1}Ot=0,cn=Fe=Oe=null,ol=!1,ai=cs=0,rl=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Oe.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Fe===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=cn===null?Oe.memoizedState:cn.next;if(n!==null)cn=n,Fe=e;else{if(e===null)throw Oe.alternate===null?Error(h(467)):Error(h(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},cn===null?Oe.memoizedState=cn=e:cn=cn.next=e}return cn}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(e){var n=ai;return ai+=1,rl===null&&(rl=[]),e=sd(rl,e,n),n=Oe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,he.H=n===null||n.memoizedState===null?Wd:$d),e}function fs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return li(e);if(e.$$typeof===V)return;if(e.$$typeof===ae)return xn(e)}throw Error(h(438,String(e)))}function ir(e){var n=null,t=Oe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=Oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ds(),Oe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=Ce;return n.index++,t}function Rt(e,n){return typeof n=="function"?n(e):n}function ms(e){var n=rn();return sr(n,Fe,e)}function sr(e,n,t){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var r=s=null,z=null,q=n,X=!1;do{var ie=q.lane&-536870913;if(ie!==q.lane?(He&ie)===ie:(Ot&ie)===ie){var U=q.revertLane;if(U===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ie===Da&&(X=!0);else if((Ot&U)===U){q=q.next,U===Da&&(X=!0);continue}else ie={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},z===null?(r=z=ie,s=i):z=z.next=ie,Oe.lanes|=U,ia|=U;ie=q.action,Oa&&t(i,ie),i=q.hasEagerState?q.eagerState:t(i,ie)}else U={lane:ie,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},z===null?(r=z=U,s=i):z=z.next=U,Oe.lanes|=ie,ia|=ie;q=q.next}while(q!==null&&q!==n);if(z===null?s=i:z.next=r,!Gn(i,e.memoizedState)&&(dn=!0,X&&(t=ll,t!==null)))throw t;e.memoizedState=i,e.baseState=s,e.baseQueue=z,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function or(e){var n=rn(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Gn(i,n.memoizedState)||(dn=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function bd(e,n,t){var a=Oe,l=rn(),i=ke;if(i){if(t===void 0)throw Error(h(407));t=t()}else t=n();var s=!Gn((Fe||l).memoizedState,t);if(s&&(l.memoizedState=t,dn=!0),l=l.queue,cr(xd.bind(null,a,l,e),[e]),e=l.getSnapshot!==n||s||cn!==null&&(cn.memoizedState.tag&1)!==0,ul(e?9:8,{destroy:void 0},yd.bind(null,a,l,t,n),null),e){if(a.flags|=2048,We===null)throw Error(h(349));i||(Ot&127)!==0||vd(a,n,t)}return t}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Oe.updateQueue,n===null?(n=ds(),Oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yd(e,n,t,a){n.value=t,n.getSnapshot=a,_d(n)&&Md(e)}function xd(e,n,t){return t(function(){_d(n)&&Md(e)})}function _d(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Gn(e,t)}catch{return!0}}function Md(e){var n=Ma(e,2);n!==null&&In(n,e,2)}function rr(e){var n=En();if(typeof e=="function"){var t=e;if(e=t(),Oa){Vt(!0);try{t()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:e},n}function wd(e,n,t,a){return e.baseState=t,sr(e,Fe,typeof a=="function"?a:Rt)}function dh(e,n,t,a,l){if(gs(e))throw Error(h(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};he.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Sd(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Sd(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=he.T,s={};s.types=i!==null?i.types:null,he.T=s;try{var r=t(l,a),z=he.S;z!==null&&z(s,r),Td(e,n,r)}catch(q){ur(e,n,q)}finally{i!==null&&s.types!==null&&(i.types=s.types),he.T=i}}else try{i=t(l,a),Td(e,n,i)}catch(q){ur(e,n,q)}}function Td(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Cd(e,n,a)},function(a){return ur(e,n,a)}):Cd(e,n,t)}function Cd(e,n,t){n.status="fulfilled",n.value=t,Nd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Sd(e,t)))}function ur(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Nd(n),n=n.next;while(n!==a)}e.action=null}function Nd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dd(e,n){return n}function Ed(e,n){if(ke){var t=We.formState;if(t!==null){e:{var a=Oe;if(ke){if($e){n:{for(var l=$e,i=nt;l.nodeType!==8;){if(!i){l=null;break n}if(l=at(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){$e=at(l.nextSibling),a=l.data==="F!";break e}}Xt(a)}a=!1}a&&(n=t[0])}}return t=En(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dd,lastRenderedState:n},t.queue=a,t=Kd.bind(null,Oe,a),a.dispatch=t,a=rr(!1),i=hr.bind(null,Oe,!1,a.queue),a=En(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=dh.bind(null,Oe,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function zd(e){var n=rn();return Ad(n,Fe,e)}function Ad(e,n,t){if(n=sr(e,n,Dd)[0],e=ms(Rt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=li(n)}catch(s){throw s===il?as:s}else a=n;n=rn();var l=n.queue,i=l.dispatch;return t!==n.memoizedState&&(Oe.flags|=2048,ul(9,{destroy:void 0},fh.bind(null,l,t),null)),[a,i,e]}function fh(e,n){e.action=n}function jd(e){var n=rn(),t=Fe;if(t!==null)return Ad(n,t,e);rn(),n=n.memoizedState,t=rn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ul(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=Oe.updateQueue,n===null&&(n=ds(),Oe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Od(){return rn().memoizedState}function ps(e,n,t,a){var l=En();Oe.flags|=e,l.memoizedState=ul(1|n,{destroy:void 0},t,a===void 0?null:a)}function hs(e,n,t,a){var l=rn();a=a===void 0?null:a;var i=l.memoizedState.inst;Fe!==null&&a!==null&&er(a,Fe.memoizedState.deps)?l.memoizedState=ul(n,i,t,a):(Oe.flags|=e,l.memoizedState=ul(1|n,i,t,a))}function Rd(e,n){ps(8390656,8,e,n)}function cr(e,n){hs(2048,8,e,n)}function mh(e){Oe.flags|=4;var n=Oe.updateQueue;if(n===null)n=ds(),Oe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function kd(e){var n=rn().memoizedState;return mh({ref:n,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}function Ud(e,n){return hs(4,2,e,n)}function Bd(e,n){return hs(4,4,e,n)}function Id(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hd(e,n,t){t=t!=null?t.concat([e]):null,hs(4,4,Id.bind(null,n,e),t)}function dr(){}function qd(e,n){var t=rn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&er(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Ld(e,n){var t=rn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&er(n,a[1]))return a[0];if(a=e(),Oa){Vt(!0);try{e()}finally{Vt(!1)}}return t.memoizedState=[a,n],a}function fr(e,n,t){return t===void 0||(Ot&1073741824)!==0&&(He&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=$f(),Oe.lanes|=e,ia|=e,t)}function Vd(e,n,t,a){return Gn(t,n)?t:Pt.current!==null?(e=fr(e,t,a),Gn(e,n)||(dn=!0),e):(Ot&106)===0||(Ot&1073741824)!==0&&(He&261930)===0?(dn=!0,e.memoizedState=t):(e=$f(),Oe.lanes|=e,ia|=e,n)}function Gd(e,n,t,a,l){var i=Ne.p;Ne.p=i!==0&&8>i?i:8;var s=he.T,r={};r.types=s!==null?s.types:null,he.T=r,hr(e,!1,n,t);try{var z=l(),q=he.S;if(q!==null&&q(r,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var X=rh(z,a);ii(e,n,X,Kn(e))}else ii(e,n,a,Kn(e))}catch(ie){ii(e,n,{then:function(){},status:"rejected",reason:ie},Kn())}finally{Ne.p=i,s!==null&&r.types!==null&&(s.types=r.types),he.T=s}}function ph(){}function mr(e,n,t,a){if(e.tag!==5)throw Error(h(476));var l=Zd(e).queue;Gd(e,l,n,sn,t===null?ph:function(){return Yd(e),t(a)})}function Zd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:sn,baseState:sn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:sn},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Yd(e){var n=Zd(e);n.next===null&&(n=e.alternate.memoizedState),ii(e,n.next.queue,{},Kn())}function pr(){return xn(Dl)}function Qd(){return rn().memoizedState}function Xd(){return rn().memoizedState}function hh(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Kn();e=Wt(t);var a=$t(n,e,t);a!==null&&(In(a,n,t),Pl(a,n,t)),n={cache:Vo()},e.payload=n;return}n=n.return}}function gh(e,n,t){var a=Kn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},gs(e)?Jd(n,t):(t=Oo(e,n,t,a),t!==null&&(In(t,e,a),Fd(t,n,a)))}function Kd(e,n,t){var a=Kn();ii(e,n,t,a)}function ii(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(gs(e))Jd(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,r=i(s,t);if(l.hasEagerState=!0,l.eagerState=r,Gn(r,s))return Xi(e,n,l,0),We===null&&Qi(),!1}catch{}finally{}if(t=Oo(e,n,l,a),t!==null)return In(t,e,a),Fd(t,n,a),!0}return!1}function hr(e,n,t,a){if(a={lane:2,revertLane:iu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gs(e)){if(n)throw Error(h(479))}else n=Oo(e,t,a,2),n!==null&&In(n,e,2)}function gs(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function Jd(e,n){ol=us=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Wu(e,t)}}var bs={readContext:xn,use:fs,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Wd={readContext:xn,use:fs,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:Rd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ps(4194308,4,Id.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ps(4194308,4,e,n)},useInsertionEffect:function(e,n){ps(4,2,e,n)},useMemo:function(e,n){var t=En();n=n===void 0?null:n;var a=e();if(Oa){Vt(!0);try{e()}finally{Vt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=En();if(t!==void 0){var l=t(n);if(Oa){Vt(!0);try{t(n)}finally{Vt(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=gh.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:function(e){e=rr(e);var n=e.queue,t=Kd.bind(null,Oe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:dr,useDeferredValue:function(e,n){var t=En();return fr(t,e,n)},useTransition:function(){var e=rr(!1);return e=Gd.bind(null,Oe,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=Oe,l=En();if(ke){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),We===null)throw Error(h(349));(He&127)!==0||vd(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Rd(xd.bind(null,a,i,e),[e]),a.flags|=2048,ul(9,{destroy:void 0},yd.bind(null,a,i,t,n),null),t},useId:function(){var e=En(),n=We.identifierPrefix;if(ke){var t=mt,a=ft;t=(a&~(1<<32-Ln(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=cs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=uh++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:pr,useFormState:Ed,useActionState:Ed,useOptimistic:function(e){var n=En();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=hr.bind(null,Oe,!0,t),t.dispatch=n,[e,n]},useMemoCache:ir,useCacheRefresh:function(){return En().memoizedState=hh.bind(null,Oe)},useEffectEvent:function(e){var n=En(),t={impl:e};return n.memoizedState=t,function(){if((Ze&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}},$d={readContext:xn,use:fs,useCallback:qd,useContext:xn,useEffect:cr,useImperativeHandle:Hd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Ld,useReducer:ms,useRef:Od,useState:function(){return ms(Rt)},useDebugValue:dr,useDeferredValue:function(e,n){var t=rn();return Vd(t,Fe.memoizedState,e,n)},useTransition:function(){var e=ms(Rt)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:li(e),n]},useSyncExternalStore:bd,useId:Qd,useHostTransitionStatus:pr,useFormState:zd,useActionState:zd,useOptimistic:function(e,n){var t=rn();return wd(t,Fe,e,n)},useMemoCache:ir,useCacheRefresh:Xd,useEffectEvent:kd},bh={readContext:xn,use:fs,useCallback:qd,useContext:xn,useEffect:cr,useImperativeHandle:Hd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Ld,useReducer:or,useRef:Od,useState:function(){return or(Rt)},useDebugValue:dr,useDeferredValue:function(e,n){var t=rn();return Fe===null?fr(t,e,n):Vd(t,Fe.memoizedState,e,n)},useTransition:function(){var e=or(Rt)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:li(e),n]},useSyncExternalStore:bd,useId:Qd,useHostTransitionStatus:pr,useFormState:jd,useActionState:jd,useOptimistic:function(e,n){var t=rn();return Fe!==null?wd(t,Fe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:ir,useCacheRefresh:Xd,useEffectEvent:kd};function gr(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var br={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Kn(),l=Wt(a);l.payload=n,t!=null&&(l.callback=t),n=$t(e,l,a),n!==null&&(In(n,e,a),Pl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Kn(),l=Wt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=$t(e,l,a),n!==null&&(In(n,e,a),Pl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Kn(),a=Wt(t);a.tag=2,n!=null&&(a.callback=n),n=$t(e,a,t),n!==null&&(In(n,e,t),Pl(n,e,t))}};function Pd(e,n,t,a,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):n.prototype&&n.prototype.isPureReactComponent?!Yl(t,a)||!Yl(l,i):!0}function ef(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&br.enqueueReplaceState(n,n.state,null)}function Ra(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=Z({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function nf(e){Yi(e)}function tf(e){console.error(e)}function af(e){Yi(e)}function vs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function lf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vr(e,n,t){return t=Wt(t),t.tag=3,t.payload={element:null},t.callback=function(){vs(e,n)},t}function sf(e){return e=Wt(e),e.tag=3,e}function of(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){lf(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){lf(n,t,a),typeof l!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function vh(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Ca(n,t,l,!0),t=_n.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Cn===null?Hs():t.alternate===null&&ln===0&&(ln=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===ls?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),tu(e,a,l)),!1;case 22:return t.flags|=65536,a===ls?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),tu(e,a,l)),!1}throw Error(h(435,t.tag))}return tu(e,a,l),Hs(),!1}if(ke)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Io&&(e=Error(h(422),{cause:a}),Kl($n(e,t)))):(a!==Io&&(n=Error(h(423),{cause:a}),Kl($n(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=$n(a,t),l=vr(e.stateNode,a,l),Ko(e,l),ln!==4&&(ln=2)),!1;var i=Error(h(520),{cause:a});if(i=$n(i,t),mi===null?mi=[i]:mi.push(i),ln!==4&&(ln=2),n===null)return!0;a=$n(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=vr(t.stateNode,a,e),Ko(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=sf(l),of(l,e,t,a),Ko(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var yr=Error(h(461)),dn=!1;function mn(e,n,t,a){n.child=e===null?cd(n,null,t,a):ja(n,e.child,t,a)}function rf(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var s={};for(var r in a)r!=="ref"&&(s[r]=a[r])}else s=a;return Na(n),a=nr(e,n,t,s,i,l),r=tr(),e!==null&&!dn?(ar(e,n,l),kt(e,n,l)):(ke&&r&&Wi(n),n.flags|=1,mn(e,n,a,l),n.child)}function uf(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!Ro(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,cf(e,n,i,a,l)):(e=Ji(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!Nr(e,l)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:Yl,t(s,a)&&e.ref===n.ref)return kt(e,n,l)}return n.flags|=1,e=Et(i,a),e.ref=n.ref,e.return=n,n.child=e}function cf(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(Yl(i,a)&&e.ref===n.ref)if(dn=!1,n.pendingProps=a=i,Nr(e,l))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,kt(e,n,l)}return xr(e,n,t,a,l)}function df(e,n,t,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return ff(e,n,i,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ts(n,i!==null?i.cachePool:null),i!==null?md(n,i):Fo(),pd(n);else return a=n.lanes=536870912,ff(e,n,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(ts(n,i.cachePool),md(n,i),na(),n.memoizedState=null):(e!==null&&ts(n,null),Fo(),na());return mn(e,n,l,t),n.child}function si(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ff(e,n,t,a,l){var i=Zo();return i=i===null?null:{parent:un._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&ts(n,null),Fo(),pd(n),e!==null&&Ca(e,n,a,!0),n.childLanes=l,null}function ys(e,n){return n=xs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function mf(e,n,t){return ja(n,e.child,null,t),e=ys(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function yh(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ke){if(a.mode==="hidden")return e=ys(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},si(null,e);if($o(n),(e=$e)?(e=Hm(e,nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:ft,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},t=Jc(e),t.return=n,n.child=t,hn=n,$e=null)):e=null,e===null)throw Xt(n);return n.lanes=536870912,null}return ys(n,a)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if($o(n),l)if(n.flags&256)n.flags&=-257,n=mf(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(h(558));else if(dn||Ca(e,n,t,!1),l=(t&e.childLanes)!==0,dn||l){if(Pt.current===null){if(a=We,a!==null&&(s=$u(a,t),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ma(e,s),In(a,e,s),yr;Hs()}n=mf(e,n,t)}else e=i.treeContext,$e=at(s.nextSibling),hn=n,ke=!0,Qt=null,nt=!1,e!==null&&$c(n,e),n=ys(n,a),n.flags|=134221824;return n}return e=Et(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function cl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(h(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function xr(e,n,t,a,l){return Na(n),t=nr(e,n,t,a,void 0,l),a=tr(),e!==null&&!dn?(ar(e,n,l),kt(e,n,l)):(ke&&a&&Wi(n),n.flags|=1,mn(e,n,t,l),n.child)}function pf(e,n,t,a,l,i){return Na(n),n.updateQueue=null,t=gd(n,a,t,l),hd(e),a=tr(),e!==null&&!dn?(ar(e,n,i),kt(e,n,i)):(ke&&a&&Wi(n),n.flags|=1,mn(e,n,t,i),n.child)}function hf(e,n,t,a,l){if(Na(n),n.stateNode===null){var i=el,s=t.contextType;typeof s=="object"&&s!==null&&(i=xn(s)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=br,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Qo(n),s=t.contextType,i.context=typeof s=="object"&&s!==null?xn(s):el,i.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(gr(n,t,s,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&br.enqueueReplaceState(i,i.state,null),ni(n,a,i,l),ei(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var r=n.memoizedProps,z=Ra(t,r);i.props=z;var q=i.context,X=t.contextType;s=el,typeof X=="object"&&X!==null&&(s=xn(X));var ie=t.getDerivedStateFromProps;X=typeof ie=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=n.pendingProps!==r,X||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||q!==s)&&ef(n,i,a,s),Ft=!1;var U=n.memoizedState;i.state=U,ni(n,a,i,l),ei(),q=n.memoizedState,r||U!==q||Ft?(typeof ie=="function"&&(gr(n,t,ie,a),q=n.memoizedState),(z=Ft||Pd(n,t,z,a,U,q,s))?(X||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=q),i.props=a,i.state=q,i.context=s,a=z):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Xo(e,n),s=n.memoizedProps,X=Ra(t,s),i.props=X,ie=n.pendingProps,U=i.context,q=t.contextType,z=el,typeof q=="object"&&q!==null&&(z=xn(q)),r=t.getDerivedStateFromProps,(q=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==ie||U!==z)&&ef(n,i,a,z),Ft=!1,U=n.memoizedState,i.state=U,ni(n,a,i,l),ei();var Y=n.memoizedState;s!==ie||U!==Y||Ft||e!==null&&e.dependencies!==null&&es(e.dependencies)?(typeof r=="function"&&(gr(n,t,r,a),Y=n.memoizedState),(X=Ft||Pd(n,t,X,a,U,Y,z)||e!==null&&e.dependencies!==null&&es(e.dependencies))?(q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,Y,z),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,Y,z)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Y),i.props=a,i.state=Y,i.context=z,a=X):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,cl(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=ja(n,e.child,null,l),n.child=ja(n,null,t,l)):mn(e,n,t,l),n.memoizedState=i.state,e=n.child):e=kt(e,n,l),e}function gf(e,n,t,a){return Sa(),n.flags|=256,mn(e,n,t,a),n.child}var _r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mr(e){return{baseLanes:e,cachePool:ld()}}function wr(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Xn),e}function bf(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),s&&(l=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(ke){if(l?ea(n):na(),(e=$e)?(e=Hm(e,nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:ft,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},t=Jc(e),t.return=n,n.child=t,hn=n,$e=null)):e=null,e===null)throw Xt(n);return Mu(e)?n.lanes=32:n.lanes=536870912,null}return i=a.children,a=a.fallback,l?(na(),l=n.mode,i=xs({mode:"hidden",children:i},l),a=wa(a,l,t,null),i.return=n,a.return=n,i.sibling=a,n.child=i,a=n.child,a.memoizedState=Mr(t),a.childLanes=wr(e,s,t),n.memoizedState=_r,si(null,a)):(ea(n),Sr(n,i))}var r=e.memoizedState;if(r!==null){var z=r.dehydrated;if(z!==null)return xh(e,n,i,s,a,z,r,t)}return l?(na(),l=a.fallback,i=n.mode,r=e.child,z=r.sibling,a=Et(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&1206910976,z!==null?l=Et(z,l):(l=wa(l,i,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,si(null,a),a=n.child,l=e.child.memoizedState,l===null?l=Mr(t):(i=l.cachePool,i!==null?(r=un._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=ld(),l={baseLanes:l.baseLanes|t,cachePool:i}),a.memoizedState=l,a.childLanes=wr(e,s,t),n.memoizedState=_r,si(e.child,a)):(ea(n),t=e.child,e=t.sibling,t=Et(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function Sr(e,n){return n=xs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xs(e,n){return e=Rn(22,e,null,n),e.lanes=0,e}function _s(e,n,t){return ja(n,e.child,null,t),e=Sr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xh(e,n,t,a,l,i,s,r){if(t)return n.flags&256?(ea(n),n.flags&=-257,_s(e,n,r)):n.memoizedState!==null?(na(),n.child=e.child,n.flags|=128,null):(na(),i=l.fallback,s=n.mode,l=xs({mode:"visible",children:l.children},s),i=wa(i,s,r,null),i.flags|=2,l.return=n,i.return=n,l.sibling=i,n.child=l,ja(n,e.child,null,r),l=n.child,l.memoizedState=Mr(r),l.childLanes=wr(e,a,r),n.memoizedState=_r,si(null,l));if(ea(n),Mu(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var z=a.dgst;return a=z,a!==""&&(l=Error(h(419)),l.stack="",l.digest=a,Kl({value:l,source:null,stack:null})),_s(e,n,r)}if(dn||Ca(e,n,r,!1),a=(r&e.childLanes)!==0,dn||a){if(Pt.current!==null)return _s(e,n,r);if(a=We,a!==null&&(l=$u(a,r),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ma(e,l),In(a,e,l),yr;return _u(i)||Hs(),_s(e,n,r)}return _u(i)?(n.flags|=192,n.child=e.child,null):(e=s.treeContext,$e=at(i.nextSibling),hn=n,ke=!0,Qt=null,nt=!1,e!==null&&$c(n,e),n=Sr(n,l.children),n.flags|=134221824,n)}function vf(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Pi(e.return,n,t)}function yf(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&rs(t)===null&&(n=e),e=e.sibling}return n}function Ms(e,n,t,a,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=l,s.treeForkCount=i)}function Tr(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function Cr(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var s=Mn.current;if(n.flags&128)return ti(n,s),null;var r=(s&2)!==0;if(r?(s=s&1|2,n.flags|=128):s&=1,ti(n,s),l==="backwards"&&e!==null?(Tr(e),mn(e,n,a,t),Tr(e)):mn(e,n,a,t),a=ke?Xl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vf(e,t,n);else if(e.tag===19)vf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":t=yf(n.child),t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null,Tr(n)),Ms(n,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&rs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ms(n,!0,t,null,i,a);break;case"together":Ms(n,!1,null,null,void 0,a);break;case"independent":n.memoizedState=null;break;default:t=yf(n.child),t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ms(n,!1,l,t,i,a)}return n.child}function xf(e,n,t){var a=n.pendingProps;return Kt(n,n.type,a.value),mn(e,n,a.children,t),n.child}function kt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ia|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ca(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=Et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Nr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&es(e)))}function _h(e,n,t){switch(n.tag){case 3:fe(n,n.stateNode.containerInfo),Kt(n,un,e.memoizedState.cache),Sa();break;case 27:case 5:me(n);break;case 4:fe(n,n.stateNode.containerInfo);break;case 10:Kt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$o(n),null;break;case 13:var a=n.memoizedState;if(a!==null){if(a.dehydrated!==null)return ea(n),n.flags|=128,null;a=Ca(e,n,t,!1);var l=n.child.childLanes;return a||(t&l)!==0?bf(e,n,t):(ea(n),e=kt(e,n,t),e!==null?e.sibling:null)}ea(n);break;case 19:if(n.flags&128)return Cr(e,n,t);if(l=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(Ca(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return Cr(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ti(n,Mn.current),a)break;return null;case 22:return n.lanes=0,df(e,n,t,n.pendingProps);case 24:Kt(n,un,e.memoizedState.cache)}return kt(e,n,t)}function _f(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Nr(e,t)&&(n.flags&128)===0)return dn=!1,_h(e,n,t);dn=(e.flags&131072)!==0}else dn=!1,ke&&(n.flags&1048576)!==0&&Wc(n,Xl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=za(n.elementType),n.type=e,typeof e=="function")Ro(e)?(a=Ra(e,a),n.tag=1,n=hf(null,n,e,a,t)):(n.tag=0,n=xr(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===oe){n.tag=11,n=rf(null,n,e,a,t);break e}else if(l===re){n.tag=14,n=uf(null,n,e,a,t);break e}else if(l===ae){n.tag=10,n.type=e,n=xf(null,n,t);break e}}throw n=Te(e)||e,Error(h(306,n,""))}}return n;case 0:return xr(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Ra(a,n.pendingProps),hf(e,n,a,l,t);case 3:e:{if(fe(n,n.stateNode.containerInfo),e===null)throw Error(h(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Xo(e,n),ni(n,a,null,t);var s=n.memoizedState;if(a=s.cache,Kt(n,un,a),a!==i.cache&&Lo(n,[un],t,!0),ei(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=gf(e,n,a,t);break e}else if(a!==l){l=$n(Error(h(424)),n),Kl(l),n=gf(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=at(e.firstChild),hn=n,ke=!0,Qt=null,nt=!0,t=cd(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Sa(),a===l){n=kt(e,n,t);break e}mn(e,n,a,t)}n=n.child}return n;case 26:return cl(e,n),e===null?(t=Qm(n.type,null,n.pendingProps,null))?n.memoizedState=t:ke||(n.stateNode=Tm(n.type,n.pendingProps,ce.current,n)):n.memoizedState=Qm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return me(n),e===null&&ke&&(a=n.stateNode=Vm(n.type,n.pendingProps,ce.current),hn=n,nt=!0,l=$e,ua(n.type)?(wu=l,$e=at(a.firstChild)):$e=l),mn(e,n,n.pendingProps.children,t),cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ke&&((l=a=$e)&&(a=hg(a,n.type,n.pendingProps,nt),a!==null?(n.stateNode=a,hn=n,$e=at(a.firstChild),nt=!1,l=!0):l=!1),l||Xt(n)),me(n),l=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,pu(l,i)?a=null:s!==null&&pu(l,s)&&(n.flags|=32),n.memoizedState!==null&&(l=nr(e,n,ch,null,null,t),Dl._currentValue=l),cl(e,n),mn(e,n,a,t),n.child;case 6:return e===null&&ke&&((e=t=$e)&&(t=gg(t,n.pendingProps,nt),t!==null?(n.stateNode=t,hn=n,$e=null,e=!0):e=!1),e||Xt(n)),null;case 13:return bf(e,n,t);case 4:return fe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ja(n,null,a,t):mn(e,n,a,t),n.child;case 11:return rf(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,cl(e,n),mn(e,n,a,t),n.child;case 8:return mn(e,n,n.pendingProps.children,t),n.child;case 12:return mn(e,n,n.pendingProps.children,t),n.child;case 10:return xf(e,n,t);case 9:return l=n.type._context,a=n.pendingProps.children,Na(n),l=xn(l),a=a(l),n.flags|=1,mn(e,n,a,t),n.child;case 14:return uf(e,n,n.type,n.pendingProps,t);case 15:return cf(e,n,n.type,n.pendingProps,t);case 19:return Cr(e,n,t);case 31:return yh(e,n,t);case 22:return df(e,n,t,n.pendingProps);case 24:return Na(n),a=xn(un),e===null?(l=Zo(),l===null&&(l=We,i=Vo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},Qo(n),Kt(n,un,l)):((e.lanes&t)!==0&&(Xo(e,n),ni(n,null,null,t),ei()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Kt(n,un,a)):(a=i.cache,Kt(n,un,a),a!==l.cache&&Lo(n,[un],t,!0))),mn(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:ke&&Wi(n),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:cl(e,n),mn(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error(h(156,n.tag))}function Ut(e){e.flags|=4}function Dr(e,n,t,a,l){var i;if((i=(e.mode&32)!==0)&&(i=t===null?Fm(n,a):Fm(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(tm())e.flags|=8192;else throw Aa=ls,Yo}else e.flags&=-16777217}function Mf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wm(n))if(tm())e.flags|=8192;else throw Aa=ls,Yo}function ws(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ju():536870912,e.lanes|=n,hl|=n)}function oi(e,n){if(!ke)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Mh(e,n,t){var a=n.pendingProps;switch(Bo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),jt(un),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(al(n)?Ut(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ho())),Pe(n),null;case 26:var l=n.type,i=n.memoizedState;return e===null?(Ut(n),i!==null?(Pe(n),Mf(n,i)):(Pe(n),Dr(n,l,null,a,t))):i?i!==e.memoizedState?(Ut(n),Pe(n),Mf(n,i)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Ut(n),Pe(n),Dr(n,l,e,a,t)),null;case 27:if(De(n),t=ce.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ut(n);else{if(!a){if(n.stateNode===null)throw Error(h(166));return Pe(n),n.subtreeFlags&=-33554433,null}e=B.current,al(n)?Pc(n):(e=Vm(l,a,t),n.stateNode=e,Ut(n))}return Pe(n),n.subtreeFlags&=-33554433,null;case 5:if(De(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ut(n);else{if(!a){if(n.stateNode===null)throw Error(h(166));return Pe(n),n.subtreeFlags&=-33554433,null}if(i=B.current,al(n))Pc(n);else{var s=vi(ce.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}i[yn]=n,i[On]=a;e:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=i;e:switch(Sn(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Ut(n)}}return Pe(n),n.subtreeFlags&=-33554433,Dr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Ut(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(h(166));if(e=ce.current,al(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=hn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[yn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||_m(e.nodeValue,t)),e||Xt(n,!0)}else e=vi(e).createTextNode(a),e[yn]=n,n.stateNode=e}return Pe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=al(n),t!==null){if(e===null){if(!a)throw Error(h(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[yn]=n}else Sa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else t=Ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(h(558))}return Pe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=al(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[yn]=n}else Sa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),l=!1}else l=Ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),ws(n,n.updateQueue),Pe(n),null);case 4:return ye(),e===null&&uu(n.stateNode.containerInfo),n.flags|=67108864,Pe(n),null;case 10:return jt(n.type),Pe(n),null;case 19:if(Po(n),a=n.memoizedState,a===null)return Pe(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)oi(a,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=rs(e),i!==null){for(n.flags|=128,oi(a,!1),e=i.updateQueue,n.updateQueue=e,ws(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Kc(t,e),t=t.sibling;return ti(n,Mn.current&1|2),ke&&zt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Nn()>ks&&(n.flags|=128,l=!0,oi(a,!1),n.lanes=4194304)}else{if(!l)if(e=rs(i),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,ws(n,e),oi(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!ke)return Pe(n),null}else 2*Nn()-a.renderingStartTime>ks&&t!==536870912&&(n.flags|=128,l=!0,oi(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Nn(),e.sibling=null,i=Mn.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||ke?ti(n,i):(t=i,x(_n,n),x(Mn,t),Cn===null&&(Cn=n)),ke&&zt(n,a.treeForkCount),e}return Pe(n),null;case 22:case 23:return Zn(n),Wo(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),t=n.updateQueue,t!==null&&ws(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&E(Ea),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),jt(un),Pe(n),null;case 25:return null;case 30:return n.flags|=33554432,Pe(n),null}throw Error(h(156,n.tag))}function wh(e,n){switch(Bo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jt(un),ye(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return De(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(h(340));Sa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Sa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Po(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return ye(),null;case 10:return jt(n.type),null;case 22:case 23:return Zn(n),Wo(),e!==null&&E(Ea),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return jt(un),null;case 25:return null;default:return null}}function wf(e,n){switch(Bo(n),n.tag){case 3:jt(un),ye();break;case 26:case 27:case 5:De(n);break;case 4:ye();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:Po(n);break;case 10:jt(n.type);break;case 22:case 23:Zn(n),Wo(),e!==null&&E(Ea);break;case 24:jt(un)}}function ri(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,s=t.inst;a=i(),s.destroy=a}t=t.next}while(t!==l)}}catch(r){Ke(n,n.return,r)}}function ta(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var s=a.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,l=n;var z=t,q=r;try{q()}catch(X){Ke(l,z,X)}}}a=a.next}while(a!==i)}}catch(X){Ke(n,n.return,X)}}function Sf(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{fd(n,t)}catch(a){Ke(e,e.return,a)}}}function Tf(e,n,t){t.props=Ra(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Ke(e,n,a)}}function pt(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,i=Nt(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=jm(i)),a=l.ref;break;case 7:if(e.stateNode===null){var s=new Jn(e);c(e.child,!1,mg,s,void 0,void 0),e.stateNode=s}a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(r){Ke(e,n,r)}}function wn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Ke(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ke(e,n,l)}else t.current=null}function Ss(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)Im(e.stateNode,n[t])}function Cf(e){for(var n=e.return;n!==null&&(zr(n)&&Im(e.stateNode,n.stateNode),!Er(n));)n=n.return}function ui(e){for(var n=e.return;n!==null&&(zr(n)&&pg(e.stateNode,n.stateNode),!Er(n));)n=n.return}function Er(e){return e.tag===5||e.tag===3||e.tag===27}function zr(e){return e&&e.tag===7&&e.stateNode!==null}function Ar(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Ke(e,e.return,l)}}function jr(e,n,t){try{var a=e.stateNode;Jh(a,e.type,t,n),a[On]=n}catch(l){Ke(e,e.return,l)}}function Nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function Or(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rr(e,n,t,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(l),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=dt)),Ss(e,a),Ge=!0;else if(l!==4&&(l===27&&(Ss(e,a),a=null,ua(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(Rr(e,n,t,a),e=e.sibling;e!==null;)Rr(e,n,t,a),e=e.sibling}function Ts(e,n,t,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?t.insertBefore(l,n):t.appendChild(l),Ss(e,a),Ge=!0;else if(l!==4&&(l===27&&(Ss(e,a),a=null,ua(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Ts(e,n,t,a),e=e.sibling;e!==null;)Ts(e,n,t,a),e=e.sibling}function Df(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Sn(n,a,t),n[yn]=e,n[On]=t}catch(i){Ke(e,e.return,i)}}var Cs=!1,Yn=null;function Ef(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Cs=!0)}var ht=null;function zf(){var e=ht;return ht=null,e}var kn=0;function dl(e,n,t,a,l){return kn=0,Af(e.child,n,t,a,l)}function Af(e,n,t,a,l){for(var i=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(a!==null){var r=bu(s);a.push(r),r.view&&(i=!0)}else i||bu(s).view&&(i=!0);Cs=!0,zm(s,kn===0?n:n+"_"+kn,t),kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Af(e.child,n,t,a,l)&&(i=!0));e=e.sibling}return i}function gt(e,n){for(;e!==null;)e.tag===5?Am(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||gt(e.child,n)),e=e.sibling}function Ns(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ns(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(h(544));var t=n.name;n=Dt(n.default,n.share),n!=="none"&&(dl(e,t,n,null,!1)||gt(e.child,!1))}e=e.sibling}}function kr(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,l=Nt(a,t),i=Dt(a.default,t.paired?a.share:a.enter);i!=="none"?dl(e,l,i,null,!1)?(Ns(e),t.paired||n||yl(e,a.onEnter)):gt(e.child,!1):Ns(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)kr(e,n),e=e.sibling;else Ns(e)}function Ur(e){if(Yn!==null&&Yn.size!==0){var n=Yn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var l=n.get(a);if(l!==void 0){var i=Dt(t.default,t.share);if(i!=="none"&&(dl(e,a,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,yl(e,t.onShare)):gt(e.child,!1)),n.delete(a),n.size===0)break}}}Ur(e)}e=e.sibling}}}function Br(e){if(e.tag===30){var n=e.memoizedProps,t=Nt(n,e.stateNode),a=Yn!==null?Yn.get(t):void 0,l=Dt(n.default,a!==void 0?n.share:n.exit);l!=="none"&&(dl(e,t,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,Yn.delete(t),yl(e,n.onShare)):yl(e,n.onExit):gt(e.child,!1)),Yn!==null&&Ur(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Br(e),e=e.sibling;else Yn!==null&&Ur(e)}function jf(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=Nt(n,e.stateNode);n=Dt(n.default,n.update),e.flags&=-5,n!=="none"&&dl(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&jf(e);e=e.sibling}}function Ir(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,gt(e.child,!1))}Ir(e)}e=e.sibling}}function Ds(e){if(e.tag===30)e.stateNode.paired=null,gt(e.child,!1),Ir(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ds(e),e=e.sibling;else Ir(e)}function Of(e){for(e=e.child;e!==null;)e.tag===30?gt(e.child,!1):(e.subtreeFlags&33554432)!==0&&Of(e),e=e.sibling}function Hr(e,n,t,a,l,i,s){for(var r=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(i!==null&&kn<i.length){var q=i[kn],X=bu(z);(q.view||X.view)&&(r=!0);var ie;if(ie=(e.flags&4)===0)if(X.clip)ie=!0;else{ie=q.rect;var U=X.rect;ie=ie.y!==U.y||ie.x!==U.x||ie.height!==U.height||ie.width!==U.width}ie&&(e.flags|=4),X.abs?X=!q.abs:(q=q.rect,X=X.rect,X=q.height!==X.height||q.width!==X.width),X&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&zm(z,kn===0?t:t+"_"+kn,l),r&&(e.flags&4)!==0||(ht===null&&(ht=[]),ht.push(z,kn===0?a:a+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&s?e.flags|=n.flags&32:Hr(e,n.child,t,a,l,i,s)&&(r=!0));n=n.sibling}return r}function Rf(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,l=Nt(t,a),i=Dt(t.default,t.update),s;s=e.memoizedState,e.memoizedState=null,a=e;var r=e.child;kn=0,l=Hr(a,r,l,l,i,s,!1),(e.flags&4)!==0&&l&&yl(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Rf(e);e=e.sibling}}var gn=!1,Qe=!1,bt=!1,qr=!1,kf=typeof WeakSet=="function"?WeakSet:Set,bn=null,vt=!1,ci=!1,Es=!1,Lr=!1;function Sh(e,n,t){if(e=e.containerInfo,fu=El,e=Ic(e),No(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,z=-1,q=-1,X=0,ie=0,U=e,Y=null;n:for(;;){for(var ge;U!==a||i!==0&&U.nodeType!==3||(z=r+i),U!==s||l!==0&&U.nodeType!==3||(q=r+l),U.nodeType===3&&(r+=U.nodeValue.length),(ge=U.firstChild)!==null;)Y=U,U=ge;for(;;){if(U===e)break n;if(Y===a&&++X===i&&(z=r),Y===s&&++ie===l&&(q=r),(ge=U.nextSibling)!==null)break;U=Y,Y=U.parentNode}U=ge}a=z===-1||q===-1?null:{start:z,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(mu={focusedElem:e,selectionRange:a},El=!1,t=(t&335544064)===t,bn=n,n=t?9270:1024;bn!==null;){if(e=bn,t&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)t&&Br(a[i]);if(e.alternate===null&&(e.flags&2)!==0)t&&Ef(e),zs(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Br(a),zs(t);continue}else if(a!==null&&a.memoizedState!==null){t&&Ef(e),zs(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,bn=a):(t&&jf(e),zs(t))}}Yn=null}function zs(e){for(;bn!==null;){var n=bn,t=e,a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){t=void 0,l=a.memoizedProps,a=a.memoizedState;var i=n.stateNode;try{var s=Ra(n.type,l);t=i.getSnapshotBeforeUpdate(s,a),i.__reactInternalSnapshotBeforeUpdate=t}catch(r){Ke(n,n.return,r)}}break;case 3:if((l&1024)!==0){if(a=n.stateNode.containerInfo,t=a.nodeType,t===9)xu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":xu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=Nt(a.memoizedProps,a.stateNode),l=n.memoizedProps,l=Dt(l.default,l.update),l!=="none"&&dl(a,t,l,a.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(h(163))}if(a=n.sibling,a!==null){a.return=n.return,bn=a;break}bn=n.return}}function Uf(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:yt(e,t),a&4&&ri(5,t);break;case 1:if(yt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){Ke(t,t.return,s)}else{var l=Ra(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ke(t,t.return,s)}}a&64&&Sf(t),a&512&&pt(t,t.return);break;case 3:if(yt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{fd(e,n)}catch(s){Ke(t,t.return,s)}}break;case 27:n===null&&a&4&&Df(t);case 26:case 5:yt(e,t),n===null&&a&4&&Ar(t),a&512&&pt(t,t.return);break;case 12:yt(e,t);break;case 31:yt(e,t),a&4&&qf(e,t);break;case 13:yt(e,t),a&4&&Lf(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Uh.bind(null,t),bg(e,t))));break;case 22:if(a=t.memoizedState!==null||gn,!a){var i=n!==null&&n.memoizedState!==null||Qe;n=gn,l=Qe,gn=a,(Qe=i)&&!l?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),rt(e,t,a)):yt(e,t),gn=n,Qe=l}break;case 30:yt(e,t),a&512&&pt(t,t.return);break;case 7:a&512&&pt(t,t.return);default:yt(e,t)}}function Vr(e,n){for(e=e.child;e!==null;)Bf(e,n),e=e.sibling}function Bf(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(n){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(z){Ke(e,e.return,z)}Gr(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ge=!0}catch(z){Ke(e,e.return,z)}break;case 18:try{var r=e.stateNode;n?Em(r,!0):Em(e.stateNode,!1)}catch(z){Ke(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Vr(e,n);break;default:Vr(e,n)}}function Gr(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:Bf(t,a);break e;case 22:t.memoizedState===null&&Gr(t,a);break e;default:Gr(t,a)}}e=e.sibling}}function If(e){var n=e.alternate;n!==null&&(e.alternate=null,If(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ki(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Un=!1;function st(e,n,t){for(t=t.child;t!==null;)Hf(e,n,t),t=t.sibling}function Hf(e,n,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Ol,t)}catch{}switch(t.tag){case 26:Qe||wn(t,n),st(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Qe&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Qe||wn(t,n),ui(t);var a=nn,l=Un;ua(t.type)&&(nn=t.stateNode,Un=!1),st(e,n,t),Gm(t.stateNode,t.type,t.memoizedProps),nn=a,Un=l;break;case 5:Qe||wn(t,n),ui(t);case 6:if(t.tag===6&&ui(t),a=nn,l=Un,nn=null,st(e,n,t),nn=a,Un=l,nn!==null)if(Un)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(t.stateNode),Ge=!0}catch(i){Ke(t,n,i)}else try{nn.removeChild(t.stateNode),Ge=!0}catch(i){Ke(t,n,i)}break;case 18:nn!==null&&(Un?(e=nn,Dm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),zl(e)):Dm(nn,t.stateNode));break;case 4:a=nn,l=Un,nn=t.stateNode.containerInfo,Un=!0,st(e,n,t),nn=a,Un=l;break;case 0:case 11:case 14:case 15:ta(2,t,n),Qe||ta(4,t,n),st(e,n,t);break;case 1:Qe||(wn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Tf(t,n,a)),st(e,n,t);break;case 21:st(e,n,t);break;case 22:Qe=(a=Qe)||t.memoizedState!==null,st(e,n,t),Qe=a;break;case 30:wn(t,n),st(e,n,t);break;case 7:Qe||wn(t,n),st(e,n,t);break;default:st(e,n,t)}}function qf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(t){Ke(n,n.return,t)}}}function Lf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(t){Ke(n,n.return,t)}}function Th(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kf),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kf),n;default:throw Error(h(435,e.tag))}}function As(e,n){var t=Th(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=Bh.bind(null,e,a);a.then(l,l)}})}function zn(e,n,t){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],s=e,r=n,z=r;e:for(;z!==null;){switch(z.tag){case 27:if(ua(z.type)){nn=z.stateNode,Un=!1;break e}break;case 5:nn=z.stateNode,Un=!1;break e;case 3:case 4:nn=z.stateNode.containerInfo,Un=!0;break e}z=z.return}if(nn===null)throw Error(h(160));Hf(s,r,i),nn=null,Un=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vf(n,e,t),n=n.sibling}var ot=null;function Vf(e,n,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var s=a[i];s.ref.impl=s.nextImpl}zn(n,e,t),An(e),l&4&&(ta(3,e,e.return),ri(3,e),ta(5,e,e.return));break;case 1:zn(n,e,t),An(e),l&512&&(Qe||a===null||wn(a,a.return)),l&64&&gn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:if(i=ot,zn(n,e,t),An(e),l&512&&(Qe||a===null||wn(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null)if(gn)e.stateNode=Tm(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,l=i.ownerDocument||i;n:switch(n){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Ul]||a[yn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(n),l.head.insertBefore(a,l.querySelector("head > title"))),Sn(a,n,t),a[yn]=e,pn(a),n=a;break e;case"link":if(i=Jm("link","href",l).get(n+(t.href||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(s,1);break n}}a=l.createElement(n),Sn(a,n,t),l.head.appendChild(a);break;case"meta":if(i=Jm("meta","content",l).get(n+(t.content||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(s,1);break n}}a=l.createElement(n),Sn(a,n,t),l.head.appendChild(a);break;default:throw Error(h(468,n))}a[yn]=e,pn(a),n=a}e.stateNode=n}else gn||Nu(i,e.type,e.stateNode);else e.stateNode=Km(i,t,e.memoizedProps);else l!==t?(l===null?(n=a.stateNode,n===null||Qe||n.parentNode.removeChild(n)):l.count--,t===null?gn||Nu(i,e.type,e.stateNode):Km(i,t,e.memoizedProps)):t===null&&e.stateNode!==null&&jr(e,e.memoizedProps,a.memoizedProps);break;case 27:zn(n,e,t),An(e),l&512&&(Qe||a===null||wn(a,a.return)),a!==null&&l&4&&jr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=bt,bt=!1,zn(n,e,t),bt=i,An(e),l&512&&(Qe||a===null||wn(a,a.return)),e.flags&32){n=e.stateNode;try{Xa(n,""),Ge=!0}catch(X){Ke(e,e.return,X)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,jr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(qr=!0);break;case 6:if(zn(n,e,t),An(e),l&4){if(e.stateNode===null)throw Error(h(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n,Ge=!0}catch(X){Ke(e,e.return,X)}}break;case 3:if(Ge=!1,Qs=null,i=ot,ot=yi(n.containerInfo),zn(n,e,t),ot=i,An(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(n.containerInfo)}catch(X){Ke(e,e.return,X)}qr&&(qr=!1,Gf(e)),Ge=!1;break;case 4:l=bt,bt=gn,a=rc(),i=ot,ot=yi(e.stateNode.containerInfo),zn(n,e,t),An(e),ot=i,Ge&&ci&&(Es=!0),Ge=a,bt=l;break;case 12:zn(n,e,t),An(e);break;case 31:zn(n,e,t),An(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,As(e,n)));break;case 13:zn(n,e,t),An(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=Nn()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,As(e,n)));break;case 22:i=e.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var r=gn,z=Qe,q=bt;gn=r||i,bt=q||i,Qe=z||s,zn(n,e,t),Qe=z,bt=q,gn=r,An(e),l&8192&&(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,!i||a===null||s||gn||Qe||(n=s||Qe,t=gn,a=Qe,gn=i||gn,Qe=n,aa(e,2),gn=t,Qe=a),!i&&bt||Vr(e,i)),l&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,As(e,t))));break;case 19:zn(n,e,t),An(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,As(e,n)));break;case 30:l&512&&(Qe||a===null||wn(a,a.return)),l=rc(),i=ci,s=(t&335544064)===t,r=e.memoizedProps,ci=s&&Dt(r.default,r.update)!=="none",zn(n,e,t),An(e),s&&a!==null&&Ge&&(e.flags|=4),ci=i,Ge=l;break;case 21:break;case 7:l&512&&(Qe||a===null||wn(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:zn(n,e,t),An(e)}}function An(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Nf(a)){t=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(zr(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(Er(l))break;l=l.return}var s=a;if(t==null)throw Error(h(160));switch(t.tag){case 27:var r=t.stateNode,z=Or(e);Ts(e,z,r,s);break;case 5:var q=t.stateNode;t.flags&32&&(Xa(q,""),t.flags&=-33);var X=Or(e);Ts(e,X,q,s);break;case 3:case 4:var ie=t.stateNode.containerInfo,U=Or(e);Rr(e,U,ie,s);break;default:throw Error(h(161))}}catch(Y){Ke(e,e.return,Y)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gf(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,El=!0,n.reset(),El=!1),e=e.sibling}}function fl(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Zf(n,e),n=n.sibling;else Rf(n)}function Zf(e,n){var t=e.alternate;if(t===null)kr(e,!1);else switch(e.tag){case 3:if(Lr=vt=!1,zf(),fl(n,e),!vt&&!Es){if(e=ht,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var l=e[a+1];Am(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Lr=!0}ht=null;break;case 5:fl(n,e);break;case 4:a=vt,vt=!1,fl(n,e),vt&&(Es=!0),vt=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?kr(e,!1):fl(n,e));break;case 30:a=vt,l=zf(),vt=!1,fl(n,e),vt&&(e.flags|=4);var i=e.memoizedProps,s=e.stateNode;n=Nt(i,s),s=Nt(t.memoizedProps,s);var r=Dt(i.default,i.update);r==="none"?n=!1:(i=t.memoizedState,t.memoizedState=null,t=e.child,kn=0,n=Hr(e,t,n,s,r,i,!0),kn!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(yl(e,e.memoizedProps.onUpdate),ht=l):l!==null&&(l.push.apply(l,ht),ht=l),vt=(e.flags&32)!==0?!0:a;break;default:fl(n,e)}}function yt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Uf(e,n.alternate,n),n=n.sibling}function aa(e,n){for(e=e.child;e!==null;){var t=e,a=n;switch(t.tag){case 0:case 11:case 14:case 15:ta(4,t,t.return),aa(t,a);break;case 1:wn(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Tf(t,t.return,l),aa(t,a);break;case 27:(a&2)!==0&&Gm(t.stateNode,t.type,t.memoizedProps);case 5:wn(t,t.return),t.tag!==5&&t.tag!==27||ui(t),aa(t,a);break;case 6:ui(t);break;case 26:wn(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||Qe||l.parentNode.removeChild(l),aa(t,a);break;case 22:t.memoizedState===null&&aa(t,a);break;case 30:wn(t,t.return),aa(t,a);break;case 7:wn(t,t.return);default:aa(t,a)}e=e.sibling}}function rt(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&-2,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,s=i.flags,r=(t&1)!==0;switch(i.tag){case 0:case 11:case 15:rt(l,i,t),ri(4,i);break;case 1:if(rt(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(X){Ke(a,a.return,X)}if(a=i,l=a.updateQueue,l!==null){var z=a.stateNode;try{var q=l.shared.hiddenCallbacks;if(q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<q.length;l++)dd(q[l],z)}catch(X){Ke(a,a.return,X)}}r&&s&64&&Sf(i),pt(i,i.return);break;case 27:(t&2)!==0&&Df(i);case 5:i.tag!==5&&i.tag!==27||Cf(i),rt(l,i,t),r&&a===null&&s&4&&Ar(i),pt(i,i.return);break;case 6:Cf(i);break;case 26:z=i.stateNode,i.memoizedState!==null||z===null||gn||Nu(yi(z.ownerDocument),i.type,z),rt(l,i,t),r&&a===null&&s&4&&Ar(i),pt(i,i.return);break;case 12:rt(l,i,t);break;case 31:rt(l,i,t),r&&s&4&&qf(l,i);break;case 13:rt(l,i,t),r&&s&4&&Lf(l,i);break;case 22:i.memoizedState===null&&rt(l,i,t),pt(i,i.return);break;case 30:rt(l,i,t),pt(i,i.return);break;case 7:pt(i,i.return);default:rt(l,i,t)}n=n.sibling}}function Zr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Jl(t))}function Yr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jl(e))}function tt(e,n,t,a){var l=(t&335544064)===t;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Yf(e,n,t,a),n=n.sibling;else l&&Of(n)}function Yf(e,n,t,a){var l=(t&335544064)===t;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ds(n);var i=n.flags;switch(n.tag){case 0:case 11:case 15:tt(e,n,t,a),i&2048&&ri(9,n);break;case 1:tt(e,n,t,a);break;case 3:tt(e,n,t,a),l&&Lr&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,n.alternate!==null&&(i=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==i&&(n.refCount++,i!=null&&Jl(i)));break;case 12:if(i&2048){tt(e,n,t,a),i=n.stateNode;try{var s=n.memoizedProps,r=s.id,z=s.onPostCommit;typeof z=="function"&&z(r,n.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(q){Ke(n,n.return,q)}}else tt(e,n,t,a);break;case 31:tt(e,n,t,a);break;case 13:tt(e,n,t,a);break;case 23:break;case 22:s=n.stateNode,r=n.alternate,n.memoizedState!==null?(l&&r!==null&&r.memoizedState===null&&Ds(r),s._visibility&2?tt(e,n,t,a):di(e,n)):(l&&r!==null&&r.memoizedState!==null&&Ds(n),s._visibility&2?tt(e,n,t,a):(s._visibility|=2,ml(e,n,t,a,(n.subtreeFlags&10256)!==0||!1))),i&2048&&Zr(r,n);break;case 24:tt(e,n,t,a),i&2048&&Yr(n.alternate,n);break;case 30:l&&(i=n.alternate,i!==null&&(gt(i.child,!0),gt(n.child,!0))),tt(e,n,t,a);break;default:tt(e,n,t,a)}}function ml(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,s=n,r=t,z=a,q=s.flags;switch(s.tag){case 0:case 11:case 15:ml(i,s,r,z,l),ri(8,s);break;case 23:break;case 22:var X=s.stateNode;s.memoizedState!==null?X._visibility&2?ml(i,s,r,z,l):di(i,s):(X._visibility|=2,ml(i,s,r,z,l)),l&&q&2048&&Zr(s.alternate,s);break;case 24:ml(i,s,r,z,l),l&&q&2048&&Yr(s.alternate,s);break;default:ml(i,s,r,z,l)}n=n.sibling}}function di(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:di(t,a),l&2048&&Zr(a.alternate,a);break;case 24:di(t,a),l&2048&&Yr(a.alternate,a);break;default:di(t,a)}n=n.sibling}}var ka=8192;function Ua(e,n,t){if(e.subtreeFlags&ka)for(e=e.child;e!==null;)Qf(e,n,t),e=e.sibling}function Qf(e,n,t){switch(e.tag){case 26:Ua(e,n,t),e.flags&ka&&(e.memoizedState!==null?Ag(t,ot,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Pm(t,e)));break;case 5:Ua(e,n,t),e.flags&ka&&(e=e.stateNode,(n&335544128)===n&&Pm(t,e));break;case 3:case 4:var a=ot;ot=yi(e.stateNode.containerInfo),Ua(e,n,t),ot=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ka,ka=16777216,Ua(e,n,t),ka=a):Ua(e,n,t));break;case 30:if((e.flags&ka)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,Yn===null&&(Yn=new Map),Yn.set(a,l)}Ua(e,n,t);break;default:Ua(e,n,t)}}function Xf(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];bn=a,Jf(a,e)}Xf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kf(e),e=e.sibling}function Kf(e){switch(e.tag){case 0:case 11:case 15:fi(e),e.flags&2048&&ta(9,e,e.return);break;case 3:fi(e);break;case 12:fi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,js(e)):fi(e);break;default:fi(e)}}function js(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];bn=a,Jf(a,e)}Xf(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ta(8,n,n.return),js(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,js(n));break;default:js(n)}e=e.sibling}}function Jf(e,n){for(;bn!==null;){var t=bn;switch(t.tag){case 0:case 11:case 15:ta(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Jl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,bn=a;else e:for(t=e;bn!==null;){a=bn;var l=a.sibling,i=a.return;if(If(a),a===t){bn=null;break e}if(l!==null){l.return=i,bn=l;break e}bn=i}}}var Ch={getCacheForType:function(e){var n=xn(un),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return xn(un).controller.signal}},Nh=typeof WeakMap=="function"?WeakMap:Map,Ze=0,We=null,Be=null,He=0,Xe=0,Qn=null,la=!1,pl=!1,Qr=!1,Bt=0,ln=0,ia=0,Ba=0,Os=0,Xn=0,hl=0,mi=null,Bn=null,Xr=!1,Rs=0,Ff=0,ks=1/0,Us=null,sa=null,tn=0,ut=null,Ia=null,xt=0,Kr=0,Jr=null,Wf=null,gl=null,bl=null,vl=null,pi=0,Bs=null;function Kn(){return(Ze&2)!==0&&He!==0?He&-He:he.T!==null?iu():Pu()}function $f(){if(Xn===0)if((He&536870912)===0||ke){var e=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),Xn=e}else Xn=536870912;return e=_n.current,e!==null&&(e.flags|=32),Xn}function yl(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=jm(Nt(e.memoizedProps,t))),bl===null&&(bl=[]),bl.push(n.bind(null,a))}}function In(e,n,t){(e===We&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(xl(e,0),oa(e,He,Xn,!1)),kl(e,t),((Ze&2)===0||e!==We)&&(e===We&&((Ze&2)===0&&(Ba|=t),ln===4&&oa(e,He,Xn,!1)),_t(e))}function Pf(e,n,t){if((Ze&6)!==0)throw Error(h(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Rl(e,n),l=a?zh(e,n):Wr(e,n,!0),i=a;do{if(l===0){pl&&!a&&oa(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!Dh(t)){l=Wr(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var r=e;l=mi;var z=r.current.memoizedState.isDehydrated;if(z&&(xl(r,s).flags|=256),s=Wr(r,s,!1),s!==2&&s!==6){if(Qr&&!z){r.errorRecoveryDisabledLanes|=i,Ba|=i,l=4;break e}i=Bn,Bn=l,i!==null&&(Bn===null?Bn=i:Bn.push.apply(Bn,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){xl(e,0),oa(e,n,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(h(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:oa(a,n,Xn,!la);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(h(329))}if((n&62914560)===n&&(l=Rs+300-Nn(),10<l)){if(oa(a,n,Xn,!la),Oi(a,0,!0)!==0)break e;xt=n,a.timeoutHandle=gu(em.bind(null,a,t,Bn,Us,Xr,n,Xn,Ba,hl,la,i,"Throttled",-0,0),l);break e}em(a,t,Bn,Us,Xr,n,Xn,Ba,hl,la,i,null,-0,0)}}break}while(!0);_t(e)}function em(e,n,t,a,l,i,s,r,z,q,X,ie,U,Y){e.timeoutHandle=-1;var ge=n.subtreeFlags,Se=(i&335544064)===i;if(ie=null,(Se||ge&8192||(ge&16785408)===16785408)&&(ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dt},Yn=null,Qf(n,i,ie),Se&&(ge=ie,Se=e.containerInfo,Se=(Se.nodeType===9?Se:Se.ownerDocument).__reactViewTransition,Se!=null&&(ge.count++,ge.waitingForViewTransition=!0,ge=Mi.bind(ge),Se.finished.then(ge,ge))),ge=(i&62914560)===i?Rs-Nn():(i&4194048)===i?Ff-Nn():0,ge=jg(ie,ge),ge!==null)){xt=i,e.cancelPendingCommit=ge(rm.bind(null,e,n,i,t,a,l,s,r,z,q,X,ie,null,U,Y)),oa(e,i,s,!q);return}rm(e,n,i,t,a,l,s,r,z,q,X,ie)}function Dh(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!Gn(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oa(e,n,t,a){n=Ku(e,n),n&=~Os,n&=~Ba,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-Ln(l),s=1<<i;a[i]=-1,l&=~s}t!==0&&Fu(e,t,n)}function Is(){return(Ze&6)===0?(hi(0),!1):!0}function Fr(){if(Be!==null){if(Xe===0)var e=Be.return;else e=Be,At=Ta=null,lr(e),sl=null,$l=0,e=Be;for(;e!==null;)wf(e.alternate,e),e=e.return;Be=null}}function xl(e,n){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,$h(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),xt=0,Fr(),We=e,Be=t=Et(e.current,null),He=n,Xe=0,Qn=null,la=!1,pl=Rl(e,n),Qr=!1,hl=Xn=Os=Ba=ia=ln=0,Bn=mi=null,Xr=!1,Bt=Ku(e,n),Qi(),t}function nm(e,n){Oe=null,he.H=bs,n===il||n===as?(n=od(),Xe=3):n===Yo?(n=od(),Xe=4):Xe=n===yr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Be===null&&(ln=1,vs(e,$n(n,e.current)))}function tm(){var e=_n.current;return e===null?!0:(He&4194048)===He?Cn===null:(He&62914560)===He||(He&536870912)!==0?e===Cn:!1}function am(){var e=he.H;return he.H=bs,e===null?bs:e}function lm(){var e=he.A;return he.A=Ch,e}function Hs(){ln=4,la||(He&4194048)!==He&&_n.current!==null||(pl=!0),(ia&134217727)===0&&(Ba&134217727)===0||We===null||oa(We,He,Xn,!1)}function Wr(e,n,t){var a=Ze;Ze|=2;var l=am(),i=lm();(We!==e||He!==n)&&(Us=null,xl(e,n)),n=!1;var s=ln;e:do try{if(Xe!==0&&Be!==null){var r=Be,z=Qn;switch(Xe){case 8:Fr(),s=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var q=Xe;if(Xe=0,Qn=null,_l(e,r,z,q),t&&pl){s=0;break e}break;default:q=Xe,Xe=0,Qn=null,_l(e,r,z,q)}}Eh(),s=ln;break}catch(X){nm(e,X)}while(!0);return n&&e.shellSuspendCounter++,At=Ta=null,Ze=a,he.H=l,he.A=i,Be===null&&(We=null,He=0,Qi()),s}function Eh(){for(;Be!==null;)im(Be)}function zh(e,n){var t=Ze;Ze|=2;var a=am(),l=lm();We!==e||He!==n?(Us=null,ks=Nn()+500,xl(e,n)):pl=Rl(e,n);e:do try{if(Xe!==0&&Be!==null){n=Be;var i=Qn;n:switch(Xe){case 1:Xe=0,Qn=null,_l(e,n,i,1);break;case 2:case 9:if(id(i)){Xe=0,Qn=null,sm(n);break}n=function(){Xe!==2&&Xe!==9||We!==e||(Xe=7),_t(e)},i.then(n,n);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:id(i)?(Xe=0,Qn=null,sm(n)):(Xe=0,Qn=null,_l(e,n,i,7));break;case 5:var s=null;switch(Be.tag){case 26:s=Be.memoizedState;case 5:case 27:var r=Be;if(s?Wm(s):r.stateNode.complete){Xe=0,Qn=null;var z=r.sibling;if(z!==null)Be=z;else{var q=r.return;q!==null?(Be=q,qs(q)):Be=null}break n}}Xe=0,Qn=null,_l(e,n,i,5);break;case 6:Xe=0,Qn=null,_l(e,n,i,6);break;case 8:Fr(),ln=6;break e;default:throw Error(h(462))}}Ah();break}catch(X){nm(e,X)}while(!0);return At=Ta=null,he.H=a,he.A=l,Ze=t,Be!==null?0:(We=null,He=0,Qi(),ln)}function Ah(){for(;Be!==null&&!Ei();)im(Be)}function im(e){var n=_f(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,n===null?qs(e):Be=n}function sm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=pf(t,n,n.pendingProps,n.type,void 0,He);break;case 11:n=pf(t,n,n.pendingProps,n.type.render,n.ref,He);break;case 5:lr(n);var a=n;a===hn&&(ke?($i(a),a.tag===5&&a.stateNode!=null&&($e=a.stateNode)):($i(a),ke=!0));default:wf(t,n),n=Be=Kc(n,Bt),n=_f(t,n,Bt)}e.memoizedProps=e.pendingProps,n===null?qs(e):Be=n}function _l(e,n,t,a){At=Ta=null,lr(n),sl=null,$l=0;var l=n.return;try{if(vh(e,l,n,t,He)){ln=1,vs(e,$n(t,e.current)),Be=null;return}}catch(i){if(l!==null)throw Be=l,i;ln=1,vs(e,$n(t,e.current)),Be=null;return}n.flags&32768?(ke||a===1?e=!0:pl||(He&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=_n.current,a!==null&&a.tag===13&&(a.flags|=16384))),om(n,e)):qs(n)}function qs(e){var n=e;do{if((n.flags&32768)!==0){om(n,la);return}e=n.return;var t=Mh(n.alternate,n,Bt);if(t!==null){Be=t;return}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);ln===0&&(ln=5)}function om(e,n){do{var t=wh(e.alternate,e);if(t!==null){t.flags&=32767,Be=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Be=e;return}Be=e=t}while(e!==null);ln=6,Be=null}function rm(e,n,t,a,l,i,s,r,z,q,X,ie){e.cancelPendingCommit=null;do Ls();while(tn!==0);if((Ze&6)!==0)throw Error(h(327));if(n!==null){if(n===e.current)throw Error(h(177));e===We&&(Be=We=null,He=0),Ia=n,ut=e,xt=t,Jr=l,Wf=a,jh(e,n,t,s,r,z,ie)}}function jh(e,n,t,a,l,i,s){var r=n.lanes|n.childLanes;if(Kr=r,r|=jo,lp(e,t,r,a,l,i),bl=null,(t&335544064)===t?(vl=sh(e),a=10262):(vl=null,a=10256),(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Ih(wt,function(){return nu(),null})):(e.callbackNode=null,e.callbackPriority=0),Cs=!1,a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=he.T,he.T=null,l=Ne.p,Ne.p=2,i=Ze,Ze|=4;try{Sh(e,n,t)}finally{Ze=i,Ne.p=l,he.T=a}}tn=1,Cs?gl=lg(s,e.containerInfo,vl,$r,Pr,Rh,eu,nu,Oh):($r(),Pr(),eu())}function Oh(e){if(tn!==0){var n=ut.onRecoverableError;n(e,{componentStack:null})}}function Rh(){tn===3&&(tn=0,Zf(Ia,ut),tn=4)}function $r(){if(tn===1){tn=0;var e=ut,n=Ia,t=xt,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=he.T,he.T=null;var l=Ne.p;Ne.p=2;var i=Ze;Ze|=4;try{ci=Es=!1,Vf(n,e,t),t=mu;var s=Ic(e.containerInfo),r=t.focusedElem,z=t.selectionRange;if(s!==r&&r&&r.ownerDocument&&Bc(r.ownerDocument.documentElement,r)){if(z!==null&&No(r)){var q=z.start,X=z.end;if(X===void 0&&(X=q),"selectionStart"in r)r.selectionStart=q,r.selectionEnd=Math.min(X,r.value.length);else{var ie=r.ownerDocument||document,U=ie&&ie.defaultView||window;if(U.getSelection){var Y=U.getSelection(),ge=r.textContent.length,Se=Math.min(z.start,ge),Re=z.end===void 0?Se:Math.min(z.end,ge);!Y.extend&&Se>Re&&(s=Re,Re=Se,Se=s);var I=Uc(r,Se),O=Uc(r,Re);if(I&&O&&(Y.rangeCount!==1||Y.anchorNode!==I.node||Y.anchorOffset!==I.offset||Y.focusNode!==O.node||Y.focusOffset!==O.offset)){var G=ie.createRange();G.setStart(I.node,I.offset),Y.removeAllRanges(),Se>Re?(Y.addRange(G),Y.extend(O.node,O.offset)):(G.setEnd(O.node,O.offset),Y.addRange(G))}}}}for(ie=[],Y=r;Y=Y.parentNode;)Y.nodeType===1&&ie.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<ie.length;r++){var le=ie[r];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}El=!!fu,mu=fu=null}finally{Ze=i,Ne.p=l,he.T=a}}e.current=n,tn=2}}function Pr(){if(tn===2){tn=0;var e=ut,n=Ia,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=he.T,he.T=null;var a=Ne.p;Ne.p=2;var l=Ze;Ze|=4;try{Uf(e,n.alternate,n)}finally{Ze=l,Ne.p=a,he.T=t}}tn=3}}function eu(){if(tn===4||tn===3){tn=0;var e=gl;gl=null,lo();var n=ut,t=Ia,a=xt,l=Wf,i=(a&335544064)===a?10262:10256;if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?tn=5:(tn=0,Ia=ut=null,um(n,n.pendingLanes)),i=n.pendingLanes,i===0&&(sa=null),ro(a),t=t.stateNode,qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=he.T,i=Ne.p,Ne.p=2,he.T=null;try{for(var s=n.onRecoverableError,r=0;r<l.length;r++){var z=l[r];s(z.value,{componentStack:z.stack})}}finally{he.T=t,Ne.p=i}}if(l=bl,s=vl,vl=null,l!==null&&(bl=null,s===null&&(s=[]),e!==null))for(z=0;z<l.length;z++)t=(0,l[z])(s),t!==void 0&&e.finished.finally(t);(xt&3)!==0&&Ls(),_t(n),i=n.pendingLanes,(a&261930)!==0&&(i&42)!==0?n===Bs?pi++:(pi=0,Bs=n):(pi=0,Bs=null),hi(0)}}function um(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jl(n)))}function Ls(){return gl!==null&&(gl.skipTransition(),gl=null),$r(),Pr(),eu(),nu()}function nu(){if(tn!==5)return!1;var e=ut,n=Kr;Kr=0;var t=ro(xt),a=he.T,l=Ne.p;try{Ne.p=32>t?32:t,he.T=null,t=Jr,Jr=null;var i=ut,s=xt;if(tn=0,Ia=ut=null,xt=0,(Ze&6)!==0)throw Error(h(331));var r=Ze;if(Ze|=4,Kf(i.current),Yf(i,i.current,s,t),Ze=r,hi(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Ol,i)}catch{}return!0}finally{Ne.p=l,he.T=a,um(e,n)}}function cm(e,n,t){n=$n(t,n),n=vr(e.stateNode,n,2),e=$t(e,n,2),e!==null&&(kl(e,2),_t(e))}function Ke(e,n,t){if(e.tag===3)cm(e,e,t);else for(;n!==null;){if(n.tag===3){cm(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))){e=$n(t,e),t=sf(2),a=$t(n,t,2),a!==null&&(of(t,a,n,e),kl(a,2),_t(a));break}}n=n.return}}function tu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Nh;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(Qr=!0,l.add(t),e=kh.bind(null,e,n,t),n.then(e,e))}function kh(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,We===e&&(He&t)===t&&((ln===4||ln===3&&(He&62914560)===He&&300>Nn()-Rs)&&(Ze&2)===0?xl(e,0):Os|=t,hl===He&&(hl=0)),_t(e)}function dm(e,n){n===0&&(n=Ju()),e=Ma(e,n),e!==null&&(kl(e,n),_t(e))}function Uh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),dm(e,t)}function Bh(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(n),dm(e,t)}function Ih(e,n){return ga(e,n)}var Ml=null,wl=null,au=!1,Vs=!1,lu=!1,ra=0;function _t(e){e!==wl&&e.next===null&&(wl===null?Ml=wl=e:wl=wl.next=e),Vs=!0,au||(au=!0,qh())}function hi(e,n){if(!lu&&Vs){lu=!0;do for(var t=!1,a=Ml;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var s=a.suspendedLanes,r=a.pingedLanes;i=(1<<31-Ln(42|e)+1)-1,i&=l&~(s&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,hm(a,i))}else i=He,i=Oi(a,a===We?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Rl(a,i)||(t=!0,hm(a,i));a=a.next}while(t);lu=!1}}function Hh(){fm()}function fm(){Vs=au=!1;var e=0;ra!==0&&Wh()&&(e=ra);for(var n=Nn(),t=null,a=Ml;a!==null;){var l=a.next,i=mm(a,n);i===0?(a.next=null,t===null?Ml=l:t.next=l,l===null&&(wl=t)):(t=a,(e!==0||(i&3)!==0)&&(Vs=!0)),a=l}tn!==0&&tn!==5||hi(e),ra!==0&&(ra=0)}function mm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-Ln(i),r=1<<s,z=l[s];z===-1?((r&t)===0||(r&a)!==0)&&(l[s]=ap(r,n)):z<=n&&(e.expiredLanes|=r),i&=~r}if(n=We,t=He,t=Oi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Hn(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Rl(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Hn(a),ro(t)){case 2:case 8:t=Lt;break;case 32:t=wt;break;case 268435456:t=Xu;break;default:t=wt}return a=pm.bind(null,e),t=ga(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Hn(a),e.callbackPriority=2,e.callbackNode=null,2}function pm(e,n){if(tn!==0&&tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ls()&&e.callbackNode!==t)return null;var a=He;return a=Oi(e,e===We?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Pf(e,a,n),mm(e,Nn()),e.callbackNode!=null&&e.callbackNode===t?pm.bind(null,e):null)}function hm(e,n){if(Ls())return null;Pf(e,n,!0)}function qh(){Ph(function(){(Ze&6)!==0?ga(jl,Hh):fm()})}function iu(){if(ra===0){var e=Da;e===0&&(e=zi,zi<<=1,(zi&261888)===0&&(zi=256)),ra=e}return ra}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(e)}function Lh(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=gm((l[On]||null).action),s=a.submitter;s&&(n=(n=s[On]||null)?gm(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var r=new Vi("action","action",null,a,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ra!==0){var z=new FormData(l,s);mr(t,{pending:!0,data:z,method:l.method,action:i},null,z)}}else typeof i=="function"&&(r.preventDefault(),z=new FormData(l,s),mr(t,{pending:!0,data:z,method:l.method,action:i},i,z))},currentTarget:l}]})}}for(var su=0;su<Ao.length;su++){var ou=Ao[su],Vh=ou.toLowerCase(),Gh=ou[0].toUpperCase()+ou.slice(1);it(Vh,"on"+Gh)}it(Lc,"onAnimationEnd"),it(Vc,"onAnimationIteration"),it(Gc,"onAnimationStart"),it("dblclick","onDoubleClick"),it("focusin","onFocus"),it("focusout","onBlur"),it($p,"onTransitionRun"),it(Pp,"onTransitionStart"),it(eh,"onTransitionCancel"),it(Zc,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function bm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var s=a.length-1;0<=s;s--){var r=a[s],z=r.instance,q=r.currentTarget;if(r=r.listener,z!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=q;try{i(l)}catch(X){Yi(X)}l.currentTarget=null,i=z}else for(s=0;s<a.length;s++){if(r=a[s],z=r.instance,q=r.currentTarget,r=r.listener,z!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=q;try{i(l)}catch(X){Yi(X)}l.currentTarget=null,i=z}}}}function Ie(e,n){var t=n[nc];t===void 0&&(t=n[nc]=new Set);var a=e+"__bubble";t.has(a)||(vm(n,e,2,!1),t.add(a))}function ru(e,n,t){var a=0;n&&(a|=4),vm(t,e,a,n)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function uu(e){if(!e[Gs]){e[Gs]=!0,lc.forEach(function(t){t!=="selectionchange"&&(Zh.has(t)||ru(t,!1,e),ru(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gs]||(n[Gs]=!0,ru("selectionchange",!1,n))}}function vm(e,n,t,a){switch(o0(n)){case 2:var l=Ug;break;case 8:l=Bg;break;default:l=Eu}t=l.bind(null,n,t,e),l=void 0,!bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function cu(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var r=a.stateNode.containerInfo;if(r===l)break;if(s===4)for(s=a.return;s!==null;){var z=s.tag;if((z===3||z===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;r!==null;){if(s=va(r),s===null)return;if(z=s.tag,z===5||z===6||z===26||z===27){a=i=s;continue e}r=r.parentNode}}a=a.return}bc(function(){var q=i,X=ho(t),ie=[];e:{var U=Yc.get(e);if(U!==void 0){var Y=Vi,ge=e;switch(e){case"keypress":if(qi(t)===0)break e;case"keydown":case"keyup":Y=Dp;break;case"focusin":ge="focus",Y=_o;break;case"focusout":ge="blur",Y=_o;break;case"beforeblur":case"afterblur":Y=_o;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Op;break;case Lc:case Vc:case Gc:Y=yp;break;case Zc:Y=kp;break;case"scroll":case"scrollend":Y=pp;break;case"wheel":Y=Bp;break;case"copy":case"cut":case"paste":Y=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Mc;break;case"submit":Y=Ap;break;case"toggle":case"beforetoggle":Y=Hp}var Se=(n&4)!==0,Re=!Se&&(e==="scroll"||e==="scrollend"),I=Se?U!==null?U+"Capture":null:U;Se=[];for(var O=q,G;O!==null;){var le=O;if(G=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||G===null||I===null||(le=Il(O,I),le!=null&&Se.push(bi(O,le,G))),Re)break;O=O.return}0<Se.length&&(U=new Y(U,ge,null,t,X),ie.push({event:U,listeners:Se}))}}if((n&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",Y&&t!==po&&(ge=t.relatedTarget||t.fromElement)&&(va(ge)||ge[Va]))break e;(U||Y)&&(ge=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,U?(Y=t.relatedTarget||t.toElement,U=q,Y=Y?va(Y):null,Y!==null&&(Re=p(Y),Se=Y.tag,Y!==Re||Se!==5&&Se!==27&&Se!==6)&&(Y=null)):(U=null,Y=q),U!==Y&&(Se=xc,le="onMouseLeave",I="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Se=Mc,le="onPointerLeave",I="onPointerEnter",O="pointer"),Re=U==null?ge:Bl(U),G=Y==null?ge:Bl(Y),ge=new Se(le,O+"leave",U,t,X),ge.target=Re,ge.relatedTarget=G,le=null,va(X)===q&&(Se=new Se(I,O+"enter",Y,t,X),Se.target=G,Se.relatedTarget=Re,le=Se),Re=le,Se=U&&Y?P(U,Y,Yh):null,U!==null&&ym(ie,ge,U,Se,!1),Y!==null&&Re!==null&&ym(ie,Re,Y,Se,!0)))}e:{if(U=q?Bl(q):window,Y=U.nodeName&&U.nodeName.toLowerCase(),Y==="select"||Y==="input"&&U.type==="file")var Me=zc;else if(Dc(U))if(Ac)Me=Jp;else{Me=Xp;var qe=Qp}else Y=U.nodeName,!Y||Y.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?q&&mo(q.elementType)&&(Me=zc):Me=Kp;if(Me&&(Me=Me(e,q))){Ec(ie,Me,t,X);break e}qe&&qe(e,U,q)}switch(qe=q?Bl(q):window,e){case"focusin":(Dc(qe)||qe.contentEditable==="true")&&(Wa=qe,Do=q,Ql=null);break;case"focusout":Ql=Do=Wa=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Hc(ie,t,X);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":Hc(ie,t,X)}var Ee;if(wo)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Fa?Cc(e,t)&&(Ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ae="onCompositionStart");Ae&&(wc&&t.locale!=="ko"&&(Fa||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Fa&&(Ee=vc()):(Gt=X,vo="value"in Gt?Gt.value:Gt.textContent,Fa=!0)),qe=Zs(q,Ae),0<qe.length&&(Ae=new _c(Ae,e,null,t,X),ie.push({event:Ae,listeners:qe}),Ee?Ae.data=Ee:(Ee=Nc(t),Ee!==null&&(Ae.data=Ee)))),(Ee=Lp?Vp(e,t):Gp(e,t))&&(Ae=Zs(q,"onBeforeInput"),0<Ae.length&&(qe=new _c("onBeforeInput","beforeinput",null,t,X),ie.push({event:qe,listeners:Ae}),qe.data=Ee)),Lh(ie,e,q,t,X)}bm(ie,n)})}function bi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zs(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Il(e,t),l!=null&&a.unshift(bi(e,l,i)),l=Il(e,n),l!=null&&a.push(bi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Yh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,n,t,a,l){for(var i=n._reactName,s=[];t!==null&&t!==a;){var r=t,z=r.alternate,q=r.stateNode;if(r=r.tag,z!==null&&z===a)break;r!==5&&r!==26&&r!==27||q===null||(z=q,l?(q=Il(t,i),q!=null&&s.unshift(bi(t,q,z))):l||(q=Il(t,i),q!=null&&s.push(bi(t,q,z)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Qh=/\r\n?/g,Xh=/\u0000|\uFFFD/g;function xm(e){return(typeof e=="string"?e:""+e).replace(Qh,`
`).replace(Xh,"")}function _m(e,n){return n=xm(n),xm(e)===n}function Je(e,n,t,a,l,i){switch(t){case"children":if(typeof a=="string")n==="body"||n==="textarea"&&a===""||Xa(e,a);else if(typeof a=="number"||typeof a=="bigint")n!=="body"&&Xa(e,""+a);else return;break;case"className":Bi(e,"class",a);break;case"tabIndex":Bi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bi(e,t,a);break;case"style":hc(e,a,i);return;case"data":if(n!=="object"){Bi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ii(a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&Je(e,n,"name",l.name,l,null),Je(e,n,"formEncType",l.formEncType,l,null),Je(e,n,"formMethod",l.formMethod,l,null),Je(e,n,"formTarget",l.formTarget,l,null)):(Je(e,n,"encType",l.encType,l,null),Je(e,n,"method",l.method,l,null),Je(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ii(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=dt);return;case"onScroll":a!=null&&Ie("scroll",e);return;case"onScrollEnd":a!=null&&Ie("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(h(60));(i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Ii(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),Ui(e,"popover",a);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=fp.get(t)||t,Ui(e,t,a);else return}Ge=!0}function du(e,n,t,a,l,i){switch(t){case"style":hc(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(h(60));(i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")Xa(e,a);else if(typeof a=="number"||typeof a=="bigint")Xa(e,""+a);else return;break;case"onScroll":a!=null&&Ie("scroll",e);return;case"onScrollEnd":a!=null&&Ie("scrollend",e);return;case"onClick":a!=null&&(e.onclick=dt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ic.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),i=t.slice(2,l?t.length-7:void 0),n=e[On]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(i,n,l),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(i,a,l);break e}Ge=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ui(e,t,a)}return}Ge=!0}function Sn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:Je(e,n,i,s,t,null)}}l&&Je(e,n,"srcSet",t.srcSet,t,null),a&&Je(e,n,"src",t.src,t,null);return;case"input":Ie("invalid",e);var r=i=s=l=null,z=null,q=null;for(a in t)if(t.hasOwnProperty(a)){var X=t[a];if(X!=null)switch(a){case"name":l=X;break;case"type":s=X;break;case"checked":z=X;break;case"defaultChecked":q=X;break;case"value":i=X;break;case"defaultValue":r=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(h(137,n));break;default:Je(e,n,a,X,t,null)}}dc(e,i,r,z,q,s,l,!1);return;case"select":Ie("invalid",e),a=s=i=null;for(l in t)if(t.hasOwnProperty(l)&&(r=t[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":s=r;break;case"multiple":a=r;default:Je(e,n,l,r,t,null)}n=i,t=s,e.multiple=!!a,n!=null?Qa(e,!!a,n,!1):t!=null&&Qa(e,!!a,t,!0);return;case"textarea":Ie("invalid",e),i=l=a=null;for(s in t)if(t.hasOwnProperty(s)&&(r=t[s],r!=null))switch(s){case"value":a=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(h(91));break;default:Je(e,n,s,r,t,null)}mc(e,a,l,i);return;case"option":for(z in t)if(t.hasOwnProperty(z)&&(a=t[z],a!=null))switch(z){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Je(e,n,z,a,t,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)Ie(gi[a],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in t)if(t.hasOwnProperty(q)&&(a=t[q],a!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:Je(e,n,q,a,t,null)}return;default:if(mo(n)){for(X in t)t.hasOwnProperty(X)&&(a=t[X],a!==void 0&&du(e,n,X,a,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(a=t[r],a!=null&&Je(e,n,r,a,t,null))}var Kh={};function Jh(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,r=null,z=null,q=null,X=null;for(Y in t){var ie=t[Y];if(t.hasOwnProperty(Y)&&ie!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":z=ie;default:a.hasOwnProperty(Y)||Je(e,n,Y,null,a,ie)}}for(var U in a){var Y=a[U];if(ie=t[U],a.hasOwnProperty(U)&&(Y!=null||ie!=null))switch(U){case"type":Y!==ie&&(Ge=!0),i=Y;break;case"name":Y!==ie&&(Ge=!0),l=Y;break;case"checked":Y!==ie&&(Ge=!0),q=Y;break;case"defaultChecked":Y!==ie&&(Ge=!0),X=Y;break;case"value":Y!==ie&&(Ge=!0),s=Y;break;case"defaultValue":Y!==ie&&(Ge=!0),r=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(h(137,n));break;default:Y!==ie&&Je(e,n,U,Y,a,ie)}}co(e,s,r,z,q,X,i,l);return;case"select":Y=s=r=U=null;for(i in t)if(z=t[i],t.hasOwnProperty(i)&&z!=null)switch(i){case"value":break;case"multiple":Y=z;default:a.hasOwnProperty(i)||Je(e,n,i,null,a,z)}for(l in a)if(i=a[l],z=t[l],a.hasOwnProperty(l)&&(i!=null||z!=null))switch(l){case"value":i!==z&&(Ge=!0),U=i;break;case"defaultValue":i!==z&&(Ge=!0),r=i;break;case"multiple":i!==z&&(Ge=!0),s=i;default:i!==z&&Je(e,n,l,i,a,z)}n=r,t=s,a=Y,U!=null?Qa(e,!!t,U,!1):!!a!=!!t&&(n!=null?Qa(e,!!t,n,!0):Qa(e,!!t,t?[]:"",!1));return;case"textarea":Y=U=null;for(r in t)if(l=t[r],t.hasOwnProperty(r)&&l!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Je(e,n,r,null,a,l)}for(s in a)if(l=a[s],i=t[s],a.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":l!==i&&(Ge=!0),U=l;break;case"defaultValue":l!==i&&(Ge=!0),Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&Je(e,n,s,l,a,i)}fc(e,U,Y);return;case"option":for(var ge in t)if(U=t[ge],t.hasOwnProperty(ge)&&U!=null&&!a.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Je(e,n,ge,null,a,U)}for(z in a)if(U=a[z],Y=t[z],a.hasOwnProperty(z)&&U!==Y&&(U!=null||Y!=null))switch(z){case"selected":U!==Y&&(Ge=!0),e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Je(e,n,z,U,a,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in t)U=t[Se],t.hasOwnProperty(Se)&&U!=null&&!a.hasOwnProperty(Se)&&Je(e,n,Se,null,a,U);for(q in a)if(U=a[q],Y=t[q],a.hasOwnProperty(q)&&U!==Y&&(U!=null||Y!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(h(137,n));break;default:Je(e,n,q,U,a,Y)}return;default:if(mo(n)){for(var Re in t)U=t[Re],t.hasOwnProperty(Re)&&U!==void 0&&!a.hasOwnProperty(Re)&&du(e,n,Re,void 0,a,U);for(X in a)U=a[X],Y=t[X],!a.hasOwnProperty(X)||U===Y||U===void 0&&Y===void 0||du(e,n,X,U,a,Y);return}}for(var I in t)U=t[I],t.hasOwnProperty(I)&&U!=null&&!a.hasOwnProperty(I)&&Je(e,n,I,null,a,U);for(ie in a)U=a[ie],Y=t[ie],!a.hasOwnProperty(ie)||U===Y||U==null&&Y==null||Je(e,n,ie,U,a,Y)}function Mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,s=l.initiatorType,r=l.duration;if(i&&r&&Mm(s)){for(s=0,r=l.responseEnd,a+=1;a<t.length;a++){var z=t[a],q=z.startTime;if(q>r)break;var X=z.transferSize,ie=z.initiatorType;X&&Mm(ie)&&(z=z.responseEnd,s+=X*(z<r?1:(r-q)/(z-q)))}if(--a,n+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fu=null,mu=null;function vi(e){return e.nodeType===9?e:e.ownerDocument}function wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tm(e,n,t,a){return t=vi(t).createElement(e),t[yn]=a,t[On]=n,Sn(t,e,n),pn(t),t}function pu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hu=null;function Wh(){var e=window.event;return e&&e.type==="popstate"?e===hu?!1:(hu=e,!0):(hu=null,!1)}var gu=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Nm=typeof requestAnimationFrame=="function"?requestAnimationFrame:gu,Ph=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(e){return Cm.resolve(null).then(e).catch(eg)}:gu;function eg(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function Dm(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),zl(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Su(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Su(t);for(var i=t.firstChild;i;){var s=i.nextSibling,r=i.nodeName;i[Ul]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=s}}else t==="body"&&Su(e.ownerDocument.body);t=l}while(t);zl(n)}function Em(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function zm(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var l=a=0;l<n.length;l++){var i=n[l];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function Am(e,n){e=e.style,n=n.style;var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ng(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function bu(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return ng(n,t,e)}function tg(e){return e.documentElement.clientHeight}function ag(e){this.addEventListener("load",e),this.addEventListener("error",e)}function lg(e,n,t,a,l,i,s,r,z){var q=n.nodeType===9?n:n.ownerDocument;try{var X=q.startViewTransition({update:function(){var U=q.defaultView,Y=U.navigation&&U.navigation.transition,ge=q.fonts.status;a();var Se=[];if(ge==="loaded"&&(tg(q),q.fonts.status==="loading"&&Se.push(q.fonts.ready)),ge=Se.length,e!==null)for(var Re=e.suspenseyImages,I=0,O=0;O<Re.length;O++){var G=Re[O];if(!G.complete){var le=G.getBoundingClientRect();if(0<le.bottom&&0<le.right&&le.top<U.innerHeight&&le.left<U.innerWidth){if(I+=$m(G),I>Xs){Se.length=ge;break}G=new Promise(ag.bind(G)),Se.push(G)}}}if(0<Se.length)return U=Promise.race([Promise.all(Se),new Promise(function(Me){return setTimeout(Me,500)})]).then(l,l),(Y?Promise.allSettled([Y.finished,U]):U).then(i,i);if(l(),Y)return Y.finished.then(i,i);i()},types:t});q.__reactViewTransition=X;var ie=[];return X.ready.then(function(){for(var U=q.documentElement.getAnimations({subtree:!0}),Y=0;Y<U.length;Y++){var ge=U[Y],Se=ge.effect,Re=Se.pseudoElement;if(Re!=null&&Re.startsWith("::view-transition")){ie.push(ge),ge=Se.getKeyframes();for(var I=Re=void 0,O=!0,G=0;G<ge.length;G++){var le=ge[G],Me=le.width;if(Re===void 0)Re=Me;else if(Re!==Me){O=!1;break}if(Me=le.height,I===void 0)I=Me;else if(I!==Me){O=!1;break}delete le.width,delete le.height,le.transform==="none"&&delete le.transform}O&&Re!==void 0&&I!==void 0&&(Se.setKeyframes(ge),O=getComputedStyle(Se.target,Se.pseudoElement),O.width!==Re||O.height!==I)&&(O=ge[0],O.width=Re,O.height=I,O=ge[ge.length-1],O.width=Re,O.height=I,Se.setKeyframes(ge))}}s()},function(U){q.__reactViewTransition===X&&(q.__reactViewTransition=null);try{if(typeof U=="object"&&U!==null)switch(U.name){case"InvalidStateError":(U.message==="View transition was skipped because document visibility state is hidden."||U.message==="Skipping view transition because document visibility state has become hidden."||U.message==="Skipping view transition because viewport size changed."||U.message==="Transition was aborted because of invalid state")&&(U=null)}U!==null&&z(U)}finally{a(),l(),s()}}),X.finished.finally(function(){for(var U=0;U<ie.length;U++)ie[U].cancel();q.__reactViewTransition===X&&(q.__reactViewTransition=null),r()}),X}catch{return a(),l(),s(),null}}function Ha(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ha.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:Z({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ha.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],l=0;l<t.length;l++){var i=t[l].effect;i!==null&&i.target===e&&i.pseudoElement===n&&a.push(t[l])}return a},Ha.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jm(e){return{name:e,group:new Ha("group",e),imagePair:new Ha("image-pair",e),old:new Ha("old",e),new:new Ha("new",e)}}function Jn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Jn.prototype.addEventListener=function(e,n,t){var a=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Rm(i,e,n,t)===-1){var s=this,r=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(r=function(z){s.removeEventListener(e,n,t),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),a!==null&&(l=s.removeEventListener.bind(s,e,n,t),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=Sl(t),i.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:r,cleanup:l}),c(this._fragmentFiber.child,!1,ig,e,r,a)}this._eventListeners=i}};function ig(e,n,t,a){return g(e).addEventListener(n,t,a),!1}Jn.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=Rm(a,e,n,t),n!==-1)){var l=a[n];t=l.attachedListener;var i=l.cleanup;l=Sl(l.optionsOrUseCapture),c(this._fragmentFiber.child,!1,sg,e,t,l),a.splice(n,1),i!==null&&i()}};function sg(e,n,t,a){return g(e).removeEventListener(n,t,a),!1}function Sl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Om(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Rm(e,n,t,a){if(e.length===0)return-1;a=Om(a);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===n&&i.listener===t&&Om(i.optionsOrUseCapture)===a)return l}return-1}Jn.prototype.dispatchEvent=function(e){var n=S(this._fragmentFiber);if(n===null)return!0;n=g(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var i=t[l];a.addEventListener(i.type,i.attachedListener,Sl(i.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(l=0;l<t.length;l++)i=t[l],a.removeEventListener(i.type,i.attachedListener,Sl(i.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},Jn.prototype.focus=function(e){c(this._fragmentFiber.child,!0,km,e,void 0,void 0)};function km(e,n){return e.tag===6?!1:(e=g(e),vg(e,n))}Jn.prototype.focusLast=function(e){var n=[];c(this._fragmentFiber.child,!0,vu,n,void 0,void 0);for(var t=n.length-1;0<=t&&!km(n[t],e);t--);};function vu(e,n){return n.push(e),!1}Jn.prototype.blur=function(){var e=S(this._fragmentFiber);e!==null&&(e=g(e),e=vi(e).activeElement,e!==null&&c(this._fragmentFiber.child,!1,og,e,void 0,void 0))};function og(e,n){return e.tag===6?!1:(e=g(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Jn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),c(this._fragmentFiber.child,!1,rg,e,void 0,void 0)};function rg(e,n){return e.tag===6||(e=g(e),n.observe(e)),!1}Jn.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),c(this._fragmentFiber.child,!1,ug,e,void 0,void 0);for(var t=n=0;t<ct.length;t++){var a=ct[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):ct[n++]=a}ct.length=n}};function ug(e,n){return e.tag===6||(e=g(e),n.unobserve(e)),!1}var ct=[],yu=!1;function cg(e,n,t){ct.push({fragmentInstance:e,observer:n,instance:t}),yu||(yu=!0,yg(function(){yu=!1;var a=ct;ct=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Jn.prototype.getClientRects=function(){var e=[];return c(this._fragmentFiber.child,!1,dg,e,void 0,void 0),e};function dg(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=g(e),n.push.apply(n,e.getClientRects());return!1}Jn.prototype.getRootNode=function(e){var n=S(this._fragmentFiber);return n===null?this:g(n).getRootNode(e)},Jn.prototype.compareDocumentPosition=function(e){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];c(this._fragmentFiber.child,!1,vu,t,void 0,void 0);var a=g(n);if(t.length===0){if(t=a,m(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var l=a=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=T(n)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=g(t).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=g(t[0]),l=g(t[t.length-1]);var i=m(this._fragmentFiber)?n.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=n.compareDocumentPosition(e),r=l.compareDocumentPosition(e),z=s&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=a&&i&&s&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||i&&l===e||z||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||fg(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function fg(e,n,t,a,l){var i=va(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===n||i.alternate===n)){t=!0;break e}i=i.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=n,n=S(n);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==n&&i.alternate!==n)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!i)&&!(n=i===t)&&(n=P(t,i,H),n===null?n=!1:(c(n,!0,R,i,t),i=y,y=null,n=i!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!i)&&!(n=i===a)&&(n=P(a,i,H),n===null?n=!1:(c(n,!0,L,i,a),i=y,M=y=null,n=i!==null)),n):!1}function Um(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Jn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(h(566));var n=[];c(this._fragmentFiber.child,!1,vu,n,void 0,void 0);var t=e!==!1;if(n.length===0){var a=T(this._fragmentFiber);if(a=t?a[1]||a[0]||S(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=g(a),Um(e,t);return}if(a=g(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var l=n[a];l.tag===6?(l=g(l),Um(l,t)):g(l).scrollIntoView(e),a+=t?-1:1}};function mg(e,n){return e=g(e),Bm(e,n),!1}function Bm(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Im(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];e.addEventListener(l.type,l.attachedListener,Sl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(i){for(var s=0,r=0;r<ct.length;r++){var z=ct[r];(z.fragmentInstance!==n||z.observer!==i||z.instance!==e)&&(ct[s++]=z)}ct.length=s,i.observe(e)}),Bm(e,n))}function pg(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];e.removeEventListener(l.type,l.attachedListener,Sl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(i){typeof i.rootMargin=="string"?cg(n,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function xu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":xu(t),ki(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function hg(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ul])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=at(e.nextSibling),e===null)break}return null}function gg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=at(e.nextSibling),e===null))return null;return e}function Hm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=at(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Mu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function at(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wu=null;function qm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return at(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Lm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function vg(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function yg(e){Nm(function(){Nm(function(n){return e(n)})})}function Vm(e,n,t){switch(n=vi(t),e){case"html":if(e=n.documentElement,!e)throw Error(h(452));return e;case"head":if(e=n.head,!e)throw Error(h(453));return e;case"body":if(e=n.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function Gm(e,n,t){for(var a in t){var l=t[a];t.hasOwnProperty(a)&&l!=null&&Je(e,n,a,null,Kh,l)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===dt&&(e.onclick=null),ki(e)}function Su(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ki(e)}var lt=new Map,Zm=new Set;function yi(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var It=Ne.d;Ne.d={f:xg,r:_g,D:Mg,C:wg,L:Sg,m:Tg,X:Ng,S:Cg,M:Dg};function xg(){var e=It.f(),n=Is();return e||n}function _g(e){var n=Ga(e);n!==null&&n.tag===5&&n.type==="form"?Yd(n):It.r(e)}var Tl=typeof document>"u"?null:document;function Ym(e,n,t){var a=Tl;if(a&&typeof n=="string"&&n){var l=Fn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Zm.has(l)||(Zm.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Sn(n,"link",e),pn(n),a.head.appendChild(n)))}}function Mg(e){It.D(e),Ym("dns-prefetch",e,null)}function wg(e,n){It.C(e,n),Ym("preconnect",e,n)}function Sg(e,n,t){It.L(e,n,t);var a=Tl;if(a&&e&&n){var l='link[rel="preload"][as="'+Fn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Fn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Fn(t.imageSizes)+'"]')):l+='[href="'+Fn(e)+'"]';var i=l;switch(n){case"style":i=Cl(e);break;case"script":i=Nl(e)}if(!(lt.has(i)||(e=Z({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),lt.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(xi(i))||n==="script"&&a.querySelector(_i(i))))){var s=a.createElement("link");Sn(s,"link",e),n==="style"&&(s[Ri]=!0,s.onload=s.onerror=function(){ac(s)}),pn(s),a.head.appendChild(s)}}}function Tg(e,n){It.m(e,n);var t=Tl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Fn(a)+'"][href="'+Fn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(e)}if(!lt.has(i)&&(e=Z({rel:"modulepreload",href:e},n),lt.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(_i(i)))return}a=t.createElement("link"),Sn(a,"link",e),pn(a),t.head.appendChild(a)}}}function Cg(e,n,t){It.S(e,n,t);var a=Tl;if(a&&e){var l=Za(a).hoistableStyles,i=Cl(e);n=n||"default";var s=l.get(i);if(!s){var r={loading:0,preload:null};if(s=a.querySelector(xi(i)))r.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":n},t),(t=lt.get(i))&&Tu(e,t);var z=s=a.createElement("link");pn(z),Sn(z,"link",e),z._p=new Promise(function(q,X){z.onload=q,z.onerror=X}),z.addEventListener("load",function(){r.loading|=1}),z.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ys(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:r},l.set(i,s)}}}function Ng(e,n){It.X(e,n);var t=Tl;if(t&&e){var a=Za(t).hoistableScripts,l=Nl(e),i=a.get(l);i||(i=t.querySelector(_i(l)),i||(e=Z({src:e,async:!0},n),(n=lt.get(l))&&Cu(e,n),i=t.createElement("script"),pn(i),Sn(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Dg(e,n){It.M(e,n);var t=Tl;if(t&&e){var a=Za(t).hoistableScripts,l=Nl(e),i=a.get(l);i||(i=t.querySelector(_i(l)),i||(e=Z({src:e,async:!0,type:"module"},n),(n=lt.get(l))&&Cu(e,n),i=t.createElement("script"),pn(i),Sn(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Qm(e,n,t,a){var l=(l=ce.current)?yi(l):null;if(!l)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Cl(t.href),n=Za(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Cl(t.href);var i=Za(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(xi(e)))?i._p||(s.instance=i,s.state.loading=5):(i=lt.get(e),i||(i={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},lt.set(e,i)),Eg(l,e,i,s.state))),n&&a===null)throw Error(h(528,""));return s}if(n&&a!==null)throw Error(h(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=Nl(t),n=Za(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Cl(e){return'href="'+Fn(e)+'"'}function xi(e){return'link[rel="stylesheet"]['+e+"]"}function Xm(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function Eg(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ri]!==!0){a.loading=1;return}}else n=e.createElement("link"),n[Ri]=!0,n.onload=n.onerror=ac.bind(null,n),Sn(n,"link",t),pn(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2})}function Nl(e){return'[src="'+Fn(e)+'"]'}function _i(e){return"script[async]"+e}function Km(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Fn(t.href)+'"]');if(a)return n.instance=a,pn(a),a;var l=Z({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pn(a),Sn(a,"style",l),Ys(a,t.precedence,e),n.instance=a;case"stylesheet":l=Cl(t.href);var i=e.querySelector(xi(l));if(i)return n.state.loading|=4,n.instance=i,pn(i),i;a=Xm(t),(l=lt.get(l))&&Tu(a,l),i=(e.ownerDocument||e).createElement("link"),pn(i);var s=i;return s._p=new Promise(function(r,z){s.onload=r,s.onerror=z}),Sn(i,"link",a),n.state.loading|=4,Ys(i,t.precedence,e),n.instance=i;case"script":return i=Nl(t.src),(l=e.querySelector(_i(i)))?(n.instance=l,pn(l),l):(a=t,(l=lt.get(i))&&(a=Z({},t),Cu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),pn(l),Sn(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(h(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Ys(a,t.precedence,e));return n.instance}function Ys(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,s=0;s<a.length;s++){var r=a[s];if(r.dataset.precedence===n)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Tu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Qs=null;function Jm(e,n,t){if(Qs===null){var a=new Map,l=Qs=new Map;l.set(t,a)}else l=Qs,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[Ul]||i[yn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=e+s;var r=a.get(s);r?r.push(i):a.set(s,[i])}}return a}function Nu(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function zg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fm(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Pm(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=$m(n),e.suspenseyImages.push(n)),e=Og.bind(e),n.decode().then(e,e))}function Ag(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Cl(a.href),i=n.querySelector(xi(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Mi.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,pn(i);return}i=n.ownerDocument||n,a=Xm(a),(l=lt.get(l))&&Tu(a,l),i=i.createElement("link"),pn(i);var s=i;s._p=new Promise(function(r,z){s.onload=r,s.onerror=z}),Sn(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Mi.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Xs=0;function jg(e,n){return e.stylesheets&&e.count===0&&Js(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&Xs===0&&(Xs=62500*Fh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function e0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Js(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Mi(){this.count--,e0(this)}function Og(){this.imgCount--,e0(this)}var Ks=null;function Js(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ks=new Map,n.forEach(Rg,e),Ks=null,Mi.call(e))}function Rg(e,n){if(!(n.state.loading&4)){var t=Ks.get(e);if(t)var a=t.get(null);else{t=new Map,Ks.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}l=n.instance,s=l.getAttribute("data-precedence"),i=t.get(s)||a,i===a&&t.set(null,l),t.set(s,l),this.count++,a=Mi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Dl={$$typeof:ae,Provider:null,Consumer:null,_currentValue:sn,_currentValue2:sn,_threadCount:0};function kg(e,n,t,a,l,i,s,r,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function n0(e,n,t,a,l,i,s,r,z,q,X,ie){return e=new kg(e,n,t,s,z,q,X,ie,r),n=1,i===!0&&(n|=24),i=Rn(3,null,null,n),e.current=i,i.stateNode=e,n=Vo(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},Qo(i),e}function t0(e){return e?(e=el,e):el}function a0(e,n,t,a,l,i){l=t0(l),a.context===null?a.context=l:a.pendingContext=l,a=Wt(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=$t(e,a,n),t!==null&&(In(t,e,n),Pl(t,e,n))}function l0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Du(e,n){l0(e,n),(e=e.alternate)&&l0(e,n)}function i0(e){if(e.tag===13||e.tag===31){var n=Ma(e,67108864);n!==null&&In(n,e,67108864),Du(e,67108864)}}function s0(e){if(e.tag===13||e.tag===31){var n=Kn();n=oo(n);var t=Ma(e,n);t!==null&&In(t,e,n),Du(e,n)}}var El=!0;function Ug(e,n,t,a){var l=he.T;he.T=null;var i=Ne.p;try{Ne.p=2,Eu(e,n,t,a)}finally{Ne.p=i,he.T=l}}function Bg(e,n,t,a){var l=he.T;he.T=null;var i=Ne.p;try{Ne.p=8,Eu(e,n,t,a)}finally{Ne.p=i,he.T=l}}function Eu(e,n,t,a){if(El){var l=zu(a);if(l===null)cu(e,n,a,Fs,t),r0(e,a);else if(Hg(l,e,n,t,a))a.stopPropagation();else if(r0(e,a),n&4&&-1<Ig.indexOf(e)){for(;l!==null;){var i=Ga(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=ba(i.pendingLanes);if(s!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var z=1<<31-Ln(s);r.entanglements[1]|=z,s&=~z}_t(i),(Ze&6)===0&&(ks=Nn()+500,hi(0))}}break;case 31:case 13:r=Ma(i,2),r!==null&&In(r,i,2),Is(),Du(i,2)}if(i=zu(a),i===null&&cu(e,n,a,Fs,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else cu(e,n,a,null,t)}}function zu(e){return e=ho(e),Au(e)}var Fs=null;function Au(e){if(Fs=null,e=va(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=b(n),e!==null)return e;e=null}else if(t===31){if(e=d(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fs=e,null}function o0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(io()){case jl:return 2;case Lt:return 8;case wt:case W0:return 32;case Xu:return 268435456;default:return 32}default:return 32}}var ju=!1,ca=null,da=null,fa=null,wi=new Map,Si=new Map,ma=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(e,n){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(n.pointerId)}}function Ti(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Ga(n),n!==null&&i0(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Hg(e,n,t,a,l){switch(n){case"focusin":return ca=Ti(ca,e,n,t,a,l),!0;case"dragenter":return da=Ti(da,e,n,t,a,l),!0;case"mouseover":return fa=Ti(fa,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return wi.set(i,Ti(wi.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Si.set(i,Ti(Si.get(i)||null,e,n,t,a,l)),!0}return!1}function u0(e){var n=va(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=b(t),n!==null){e.blockedOn=n,ec(e.priority,function(){s0(t)});return}}else if(n===31){if(n=d(t),n!==null){e.blockedOn=n,ec(e.priority,function(){s0(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ws(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);po=a,t.target.dispatchEvent(a),po=null}else return n=Ga(t),n!==null&&i0(n),e.blockedOn=t,!1;n.shift()}return!0}function c0(e,n,t){Ws(e)&&t.delete(n)}function qg(){ju=!1,ca!==null&&Ws(ca)&&(ca=null),da!==null&&Ws(da)&&(da=null),fa!==null&&Ws(fa)&&(fa=null),wi.forEach(c0),Si.forEach(c0)}function $s(e,n){e.blockedOn===n&&(e.blockedOn=null,ju||(ju=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,qg)))}var Ps=null;function d0(e){Ps!==e&&(Ps=e,k.unstable_scheduleCallback(k.unstable_NormalPriority,function(){Ps===e&&(Ps=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Au(a||t)===null)continue;break}var i=Ga(t);i!==null&&(e.splice(n,3),n-=3,mr(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function zl(e){function n(z){return $s(z,e)}ca!==null&&$s(ca,e),da!==null&&$s(da,e),fa!==null&&$s(fa,e),wi.forEach(n),Si.forEach(n);for(var t=0;t<ma.length;t++){var a=ma[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ma.length&&(t=ma[0],t.blockedOn===null);)u0(t),t.blockedOn===null&&ma.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],s=l[On]||null;if(typeof i=="function")s||d0(t);else if(s){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[On]||null)r=s.formAction;else if(Au(l)!==null)continue}else r=s.action;typeof r=="function"?t[a+1]=r:(t.splice(a,3),a-=3),d0(t)}}}function f0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Ou(e){this._internalRoot=e}eo.prototype.render=Ou.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));var t=n.current,a=Kn();a0(t,a,e,n,null,null)},eo.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a0(e.current,2,null,e,null,null),Is(),n[Va]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ma.length&&n!==0&&n<ma[t].priority;t++);ma.splice(t,0,e),t===0&&u0(e)}};var m0=ee.version;if(m0!=="19.3.1")throw Error(h(527,m0,"19.3.1"));Ne.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=A(n),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Lg={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:he,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Ol=no.inject(Lg),qn=no}catch{}}return Ni.createRoot=function(e,n){if(!C(e))throw Error(h(299));var t=!1,a="",l=nf,i=tf,s=af;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=n0(e,1,!1,null,null,t,a,null,l,i,s,f0),e[Va]=n.current,uu(e),new Ou(n)},Ni.hydrateRoot=function(e,n,t){if(!C(e))throw Error(h(299));var a=!1,l="",i=nf,s=tf,r=af,z=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(z=t.formState)),n=n0(e,1,!0,n,t??null,a,l,z,i,s,r,f0),n.context=t0(null),t=n.current,a=Kn(),a=oo(a),l=Wt(a),l.callback=null,$t(t,l,a),t=a,n.current.lanes=t,kl(n,t),_t(n),e[Va]=n.current,uu(e),new eo(n)},Ni.version="19.3.1",Ni}var w0;function $g(){if(w0)return Uu.exports;w0=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(ee){console.error(ee)}}return k(),Uu.exports=Wg(),Uu.exports}var Pg=$g();const e1=Yu(Pg),Di=k=>{const{weight:ee,ampuleConcentrationMg:_,ampuleVolumeMl:h,dose:C,maxTotalDoseMg:p}=k;if(!ee||!_||!h||!C)return{formula:"Preencha todos os campos."};const b=_/h;if(b===0)return{formula:"Concentração inválida."};const d=C*ee,v=d/b,A={bolusMl:v.toFixed(2),formula:`(${C} mg/kg * ${ee} kg) / (${_} mg / ${h} ml) = ${v.toFixed(2)} ml`};if(p&&d>p){const N=p/b;A.cappedResultMl=N.toFixed(2),A.maxDoseWarning=`Dose (${d.toFixed(1)}mg) excede o máximo de ${p}mg.`}return A},n1=k=>{const{weight:ee,ampuleConcentrationMg:_,ampuleVolumeMl:h,dose:C,maxTotalDoseMg:p}=k;if(!ee||!_||!h||!C)return{formula:"Preencha todos os campos."};const b=_/h;if(b===0)return{formula:"Concentração inválida."};const v=C*ee/1e3,A=v/b,N={bolusMl:A.toFixed(2),formula:`((${C} mcg/kg * ${ee} kg) / 1000) / (${_} mg / ${h} ml) = ${A.toFixed(2)} ml`};if(p&&v>p){const c=p/b;N.cappedResultMl=c.toFixed(2),N.maxDoseWarning=`Dose (${v.toFixed(1)}mg) excede o máximo de ${p}mg.`}return N},Al=k=>{const{weight:ee,ampuleConcentrationMg:_,dose:h,solutionVolumeMl:C=250}=k;if(!ee||!_||!h||!C)return{formula:"Preencha todos os campos."};const p=_/C,b=p*1e3;if(b===0)return{formula:"Concentração final inválida."};const A=h*ee/b*60;return{infusionMlH:A.toFixed(2),finalConcentrationMgMl:p.toFixed(2),formula:`Dose: ${h} mcg/kg/min. Infusão: ${A.toFixed(2)} ml/h`}},S0=k=>{const{weight:ee,ampuleConcentrationMg:_,dose:h,solutionVolumeMl:C=250}=k;if(!ee||!_||!h||!C)return{formula:"Preencha todos os campos."};const p=_/C;if(p===0)return{formula:"Concentração final inválida."};const d=h*ee/p;return{infusionMlH:d.toFixed(2),finalConcentrationMgMl:p.toFixed(2),formula:`Dose: ${h} mg/kg/h. Infusão: ${d.toFixed(2)} ml/h`}},Ht=[{name:"Indução e Intubação",drugs:[{name:"Fentanil",description:"Analgésico opioide potente.",calculationType:"bolus",unit:"mcg/kg",defaultDose:2,doseRange:"1 - 3 mcg/kg",notes:"Administrar lentamente para evitar rigidez torácica.",presentations:[{label:"250mcg/5ml",concentrationMg:.25,volumeMl:5},{label:"500mcg/10ml",concentrationMg:.5,volumeMl:10}],dilutions:[{name:"Diluição Padrão (10 mcg/ml)",description:"1 ampola (500mcg/10ml) + 40ml de SF 0.9%",totalDrugMg:.5,finalVolumeMl:50,finalConcentrationMgMl:.01,useCase:"Para administração em bolus fracionados e seguros."}],calculate:n1},{name:"Midazolam",description:"Benzodiazepínico para sedação.",calculationType:"bolus",unit:"mg/kg",defaultDose:.2,doseRange:"0.1 - 0.3 mg/kg",notes:"Pode causar hipotensão, especialmente em idosos ou instáveis.",presentations:[{label:"15mg/3ml",concentrationMg:15,volumeMl:3},{label:"5mg/5ml",concentrationMg:5,volumeMl:5},{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],dilutions:[{name:"Diluição para Bolus (1mg/ml)",description:"1 ampola (50mg/10ml) + 40ml de SF 0.9%",totalDrugMg:50,finalVolumeMl:50,finalConcentrationMgMl:1,useCase:"Para administração em bolus lento e seguro."},{name:"Diluição para Bolus (1.5mg/ml)",description:"1 ampola (15mg/3ml) + 7ml de SF 0.9%",totalDrugMg:15,finalVolumeMl:10,finalConcentrationMgMl:1.5,useCase:"Alternativa para bolus, usando ampola de 15mg."}],calculate:Di},{name:"Propofol",description:"Agente hipnótico de ação curta.",calculationType:"bolus",unit:"mg/kg",defaultDose:2,doseRange:"1.5 - 2.5 mg/kg",notes:"Causa apneia e hipotensão. Geralmente não é diluído para bolus.",presentations:[{label:"200mg/20ml",concentrationMg:200,volumeMl:20}],calculate:Di},{name:"Quetamina",description:"Anestésico dissociativo.",calculationType:"bolus",unit:"mg/kg",defaultDose:1.5,doseRange:"1 - 2 mg/kg",notes:"Ideal para pacientes instáveis hemodinamicamente. Aumenta a secreção.",presentations:[{label:"500mg/10ml",concentrationMg:500,volumeMl:10}],dilutions:[{name:"Diluição Padrão (10mg/ml)",description:"1 ampola (500mg/10ml) + 40ml de SF 0.9%",totalDrugMg:500,finalVolumeMl:50,finalConcentrationMgMl:10,useCase:"Para administração em bolus e evitar flebite."}],calculate:Di},{name:"Succinilcolina",description:"Bloqueador neuromuscular despolarizante.",calculationType:"bolus",unit:"mg/kg",defaultDose:1.5,doseRange:"1 - 2 mg/kg",notes:"Causa fasciculações. Contraindicada em hipercalemia. Geralmente não é diluída.",maxTotalDoseMg:150,presentations:[{label:"100mg/10ml",concentrationMg:100,volumeMl:10}],calculate:Di},{name:"Rocurônio",description:"Bloqueador neuromuscular não-despolarizante.",calculationType:"bolus",unit:"mg/kg",defaultDose:1,doseRange:"0.6 - 1.2 mg/kg",notes:"Dose de 1.2 mg/kg para sequência rápida. Geralmente não é diluído.",presentations:[{label:"50mg/5ml",concentrationMg:50,volumeMl:5}],calculate:Di}]},{name:"Drogas Vasoativas (DVA)",drugs:[{name:"Noradrenalina",description:"Vasopressor de primeira escolha no choque séptico.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:.1,doseRange:"0.01 - 3 mcg/kg/min",notes:"Diluição: informar o total de mg adicionado na solução.",presentations:[{label:"4mg/4ml",concentrationMg:4,volumeMl:4}],dilutions:[{name:"Padrão UTI (16mg/250ml)",description:"4 ampolas (4mg/4ml) em 234ml de SG 5%",totalDrugMg:16,finalVolumeMl:250,finalConcentrationMgMl:16/250,useCase:"Diluição padrão para infusão contínua em UTI."},{name:"Concentrada (32mg/250ml)",description:"8 ampolas (4mg/4ml) em 218ml de SG 5%",totalDrugMg:32,finalVolumeMl:250,finalConcentrationMgMl:32/250,useCase:"Para pacientes com restrição hídrica."}],calculate:Al},{name:"Dobutamina",description:"Agente inotrópico para choque cardiogênico.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:5,doseRange:"2 - 20 mcg/kg/min",notes:"Diluição: informar o total de mg adicionado na solução.",presentations:[{label:"250mg/20ml",concentrationMg:250,volumeMl:20}],dilutions:[{name:"Padrão UTI (250mg/250ml)",description:"1 ampola (250mg/20ml) em 230ml de SG 5%",totalDrugMg:250,finalVolumeMl:250,finalConcentrationMgMl:1,useCase:"Diluição comum para infusão contínua (1mg/ml)."}],calculate:Al},{name:"Dopamina",description:"Precursor da noradrenalina com efeitos dose-dependentes.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:5,doseRange:"2 - 20 mcg/kg/min",notes:"Efeitos variam com a dose. Menos utilizada atualmente.",presentations:[{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],calculate:Al},{name:"Vasopressina",description:"Hormônio antidiurético com efeito vasopressor.",calculationType:"infusion",unit:"U/min",defaultDose:.03,doseRange:"0.01 - 0.04 U/min",notes:"Dose fixa em U/min. Informar o total de Unidades (U) na solução.",presentations:[{label:"20U/1ml",concentrationMg:20,volumeMl:1}],dilutions:[{name:"Padrão UTI (100U/100ml)",description:"5 ampolas (20U/1ml) em 95ml de SF 0.9%",totalDrugMg:100,finalVolumeMl:100,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1U/ml)."}],calculate:k=>{const{ampuleConcentrationMg:ee,dose:_,solutionVolumeMl:h=100}=k;if(!ee||!_||!h)return{formula:"Preencha todos os campos."};const p=ee/h;if(p===0)return{formula:"Concentração inválida."};const b=_/p*60;return{infusionMlH:b.toFixed(2),finalConcentrationMgMl:p.toFixed(2),formula:`Dose fixa: ${_} U/min. Infusão: ${b.toFixed(2)} ml/h`}}}]},{name:"Manutenção",drugs:[{name:"Propofol (Manutenção)",description:"Agente hipnótico para sedação contínua.",calculationType:"infusion",unit:"mg/kg/h",defaultDose:4,doseRange:"2 - 6 mg/kg/h",notes:"Monitorar triglicerídeos e risco de síndrome de infusão de propofol.",presentations:[{label:"200mg/20ml",concentrationMg:200,volumeMl:20}],dilutions:[{name:"Uso Puro (10mg/ml)",description:"Administrar a emulsão pura, sem diluição.",totalDrugMg:200,finalVolumeMl:20,finalConcentrationMgMl:10,useCase:"Prática padrão para infusão contínua de Propofol."}],calculate:S0},{name:"Midazolam (Manutenção)",description:"Benzodiazepínico para sedação contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:1,doseRange:"0.5 - 2 mcg/kg/min",notes:"Risco de acúmulo em pacientes com insuficiência renal ou hepática.",presentations:[{label:"15mg/3ml",concentrationMg:15,volumeMl:3},{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],dilutions:[{name:"Padrão UTI (100mg/100ml)",description:"2 ampolas (50mg/10ml) em 80ml de SF 0.9%",totalDrugMg:100,finalVolumeMl:100,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1mg/ml)."}],calculate:Al},{name:"Fentanil (Manutenção)",description:"Analgésico opioide para analgesia contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:.02,doseRange:"0.01 - 0.05 mcg/kg/min",notes:"Monitorar depressão respiratória e rigidez torácica.",presentations:[{label:"250mcg/5ml",concentrationMg:.25,volumeMl:5},{label:"500mcg/10ml",concentrationMg:.5,volumeMl:10}],dilutions:[{name:"Padrão UTI (2500mcg/250ml)",description:"5 ampolas (500mcg/10ml) em 200ml de SF 0.9%",totalDrugMg:2.5,finalVolumeMl:250,finalConcentrationMgMl:.01,useCase:"Diluição padrão para infusão (10mcg/ml)."}],calculate:Al},{name:"Rocurônio (Manutenção)",description:"Bloqueador neuromuscular para paralisia contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:10,doseRange:"5 - 12 mcg/kg/min",notes:"Requer monitorização da função neuromuscular (ex: TOF).",presentations:[{label:"50mg/5ml",concentrationMg:50,volumeMl:5}],dilutions:[{name:"Padrão UTI (250mg/250ml)",description:"5 ampolas (50mg/5ml) em 225ml de SF 0.9%",totalDrugMg:250,finalVolumeMl:250,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1mg/ml)."}],calculate:Al},{name:"Quetamina (Manutenção)",description:"Anestésico para analgesia/sedação contínua.",calculationType:"infusion",unit:"mg/kg/h",defaultDose:.5,doseRange:"0.2 - 1 mg/kg/h",notes:"Pode causar agitação ou alucinações. Efeito broncodilatador.",presentations:[{label:"500mg/10ml",concentrationMg:500,volumeMl:10}],dilutions:[{name:"Padrão UTI (500mg/250ml)",description:"1 ampola (500mg/10ml) em 240ml de SF 0.9%",totalDrugMg:500,finalVolumeMl:250,finalConcentrationMgMl:2,useCase:"Diluição padrão para infusão contínua (2mg/ml)."}],calculate:S0}]}],t1=({isOpen:k,onClose:ee,drug:_,onApply:h})=>{var C;return k?w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",onClick:ee,children:w.jsxs("div",{className:"bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto",onClick:p=>p.stopPropagation(),children:[w.jsx("div",{className:"p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10",children:w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsxs("h3",{className:"text-lg font-bold text-cyan-400",children:["Diluições Comuns para ",_.name]}),w.jsx("button",{onClick:ee,className:"text-slate-400 hover:text-white",children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}),w.jsx("div",{className:"p-4 space-y-4",children:(C=_.dilutions)==null?void 0:C.map((p,b)=>w.jsxs("div",{className:"bg-slate-900/50 p-4 rounded-md border border-slate-700",children:[w.jsx("h4",{className:"font-semibold text-slate-100",children:p.name}),w.jsxs("p",{className:"text-sm text-slate-300 mt-1",children:[w.jsx("span",{className:"font-semibold text-cyan-300",children:"Preparo:"})," ",p.description]}),w.jsxs("p",{className:"text-sm text-slate-300 mt-1",children:[w.jsx("span",{className:"font-semibold text-cyan-300",children:"Concentração Final:"})," ",p.finalConcentrationMgMl.toFixed(3)," ",_.name==="Vasopressina"?"U":"mg","/ml"]}),w.jsx("p",{className:"text-sm text-slate-400 mt-1 italic",children:p.useCase}),w.jsx("button",{onClick:()=>h(p),className:"mt-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors",children:"Aplicar esta diluição"})]},b))})]})}):null},a1=()=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),T0=()=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 flex-shrink-0",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l1=()=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:w.jsx("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H7zM5 6h10v10H5V6zm2 1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),i1=({drug:k,patientWeight:ee})=>{const[_,h]=Ve.useState(k.presentations&&k.presentations.length===1?k.presentations[0].concentrationMg:""),[C,p]=Ve.useState(k.presentations&&k.presentations.length===1?k.presentations[0].volumeMl:""),[b,d]=Ve.useState(k.defaultDose),[v,A]=Ve.useState(250),[N,c]=Ve.useState(!1);Ve.useEffect(()=>{d(k.defaultDose),k.presentations&&k.presentations.length===1?(h(k.presentations[0].concentrationMg),p(k.presentations[0].volumeMl)):(h(""),p(""))},[k]);const S=M=>{h(M.totalDrugMg),p(M.finalVolumeMl),k.calculationType==="infusion"&&M.finalVolumeMl!==v&&A(M.finalVolumeMl),c(!1)},m=Ve.useMemo(()=>{const M=k.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);return M&&M[2]?parseFloat(M[2]):null},[k.doseRange]),T=Ve.useMemo(()=>m===null||b===""?!1:b>m,[b,m]),f=Ve.useMemo(()=>!ee||_===""||C===""||b===""?{formula:"Aguardando dados..."}:k.calculate({weight:ee,ampuleConcentrationMg:_,ampuleVolumeMl:C,dose:b,solutionVolumeMl:v,maxTotalDoseMg:k.maxTotalDoseMg}),[ee,_,C,b,v,k]),g=Ve.useMemo(()=>{if(!ee||_===""||C==="")return null;const M=k.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);if(!M||!M[1]||!M[2])return null;const R=parseFloat(M[1]),L=parseFloat(M[2]),H={weight:ee,ampuleConcentrationMg:_,ampuleVolumeMl:C,solutionVolumeMl:v,maxTotalDoseMg:k.maxTotalDoseMg},P=k.calculate({...H,dose:R}),Z=k.calculate({...H,dose:L}),ne=k.calculationType==="bolus"?"bolusMl":"infusionMlH",F=k.calculationType==="bolus"?"ml":"ml/h",de=P[ne],we=Z[ne];if(!de||!we)return null;const j=P.cappedResultMl??de,te=Z.cappedResultMl??we;return`${j} - ${te} ${F}`},[ee,_,C,v,k]),y=()=>{const M=k.calculationType==="bolus",R=M?"bolusMl":"infusionMlH",L=f.cappedResultMl??f[R],H=M?"ml":"ml/h",P=M?"Volume a ser administrado":"Velocidade de Infusão";return w.jsxs(w.Fragment,{children:[f.maxDoseWarning&&M&&w.jsxs("div",{className:"text-sm text-red-400 flex items-start gap-2 p-2 rounded-md bg-red-500/10 border border-red-500/30",children:[w.jsx(T0,{}),w.jsxs("div",{children:[w.jsx("p",{className:"font-semibold",children:"Dose Máxima Excedida"}),w.jsx("p",{children:f.maxDoseWarning}),w.jsx("p",{className:"text-xs",children:"O volume foi ajustado para a dose máxima."})]})]}),w.jsxs("div",{className:"bg-cyan-900/50 p-4 rounded-md text-center",children:[w.jsx("p",{className:"text-sm text-cyan-200",children:P}),w.jsxs("p",{className:"text-3xl font-bold text-white tracking-tight",children:[L??"--"," ",w.jsx("span",{className:"text-xl",children:H})]})]}),g&&w.jsxs("div",{className:"text-center text-xs text-slate-400 pt-1",children:[w.jsx("p",{className:"font-semibold",children:"Faixa de dose recomendada:"}),w.jsx("p",{children:g})]})]})};return w.jsxs("div",{className:"bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-1 hover:ring-slate-700",children:[w.jsxs("div",{className:"p-4 border-b border-slate-700",children:[w.jsx("h3",{className:"text-xl font-bold text-slate-100",children:k.name}),w.jsx("p",{className:"text-sm text-slate-400",children:k.description})]}),w.jsxs("div",{className:"p-4 space-y-4 flex-grow",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex justify-between items-center mb-1",children:[w.jsx("label",{className:"text-sm font-medium text-slate-300",children:k.calculationType==="infusion"?"Concentração da Solução Final":"Concentração da Ampola"}),k.dilutions&&k.dilutions.length>0&&w.jsx("button",{onClick:()=>c(!0),className:"p-1 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors",title:"Ver diluições comuns",children:w.jsx(l1,{})})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-x-2",children:[w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",value:_,onChange:M=>h(M.target.value===""?"":parseFloat(M.target.value)),placeholder:"Valor",className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"}),w.jsx("span",{className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",children:k.name==="Vasopressina"?"U":"mg"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",value:C,onChange:M=>p(M.target.value===""?"":parseFloat(M.target.value)),placeholder:"Valor",className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"}),w.jsx("span",{className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",children:"ml"})]})]}),k.presentations&&k.presentations.length>0&&w.jsx("div",{className:"mt-2",children:w.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[w.jsx("span",{className:"text-xs text-slate-400",children:"Padrões:"}),k.presentations.map(M=>w.jsx("button",{onClick:()=>{h(M.concentrationMg),p(M.volumeMl)},className:"text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors text-slate-300",title:`Definir concentração para ${M.concentrationMg}${k.name==="Vasopressina"?"U":"mg"} / ${M.volumeMl}ml`,children:M.label},M.label))]})})]}),w.jsxs("div",{children:[w.jsxs("label",{className:"text-sm font-medium text-slate-300 block mb-1",children:["Dose (",k.unit,")",w.jsxs("span",{className:"text-xs text-slate-400 ml-2",children:["(",k.doseRange,")"]})]}),w.jsx("input",{type:"number",step:k.unit==="mcg/kg/min"||k.unit==="U/min"?"0.01":"0.1",value:b,onChange:M=>d(M.target.value===""?"":parseFloat(M.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"}),T&&w.jsxs("div",{className:"mt-2 text-sm text-yellow-400 flex items-center gap-2 p-2 rounded-md bg-yellow-500/10 border border-yellow-500/30",children:[w.jsx(T0,{}),w.jsx("span",{children:"A dose inserida está acima da faixa recomendada."})]})]}),k.calculationType==="infusion"&&w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-slate-300 block mb-1",children:"Volume da Solução (ml)"}),w.jsx("input",{type:"number",value:v,onChange:M=>A(parseFloat(M.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"})]})]}),w.jsxs("div",{className:"p-4 bg-slate-800/50 space-y-3",children:[y(),w.jsx("div",{className:"text-xs text-slate-500 text-center italic h-4",children:f.formula})]}),w.jsxs("div",{className:"px-4 py-2 bg-slate-900/50 text-slate-400 text-xs flex items-start space-x-2",children:[w.jsx(a1,{}),w.jsx("span",{children:k.notes})]}),k.dilutions&&w.jsx(t1,{isOpen:N,onClose:()=>c(!1),drug:k,onApply:S})]})};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=k=>k==null?void 0:k.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function o1(k,ee,_=[]){if(ee==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:s1(k),size:24,node:ee,..._.length>0?{aliases:_}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=k=>{let ee="",_=!1;for(const h of k){if(h==="-"||h==="_"||h<=" "){_=ee.length>0;continue}ee.length===0?ee+=h.toLowerCase():ee+=_?h.toUpperCase():h,_=!1}return ee};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=k=>{const ee=r1(k);return ee.charAt(0).toUpperCase()+ee.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=(...k)=>k.filter((ee,_,h)=>!!ee&&ee.trim()!==""&&h.indexOf(ee)===_).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qu(k){return k!=null}function c1(k,ee={}){var S,m;const _=ee.attributeNames??{},h=T=>_[T]??T,C=k.size??k.width??qa.width,p=k.size??k.height??qa.height,b=((S=k.aliases)==null?void 0:S.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],d=[...k.name?[`lucide-${k.name}`]:[],...b],v=((m=ee.className)==null?void 0:m.split(" ").filter(Boolean))??[],A=ee.includeDefaultClasses===!1?Gu(...v):Gu("lucide",...d,...v),N=ee.absoluteStrokeWidth?Number(ee.strokeWidth??qa["stroke-width"])*Number(k.size??k.width??qa.width)/Number(ee.size??ee.width??qa.width):ee.strokeWidth??qa["stroke-width"];return["svg",{...Object.entries(qa).reduce((T,[f,g])=>(T[h(f)]=g,T),{}),..."color"in ee&&ee.color&&{[h("stroke")]:ee.color},..."size"in ee&&qu(ee.size)&&{[h("width")]:ee.size,[h("height")]:ee.size},..."width"in ee&&qu(ee.width)&&{[h("width")]:ee.width},..."height"in ee&&qu(ee.height)&&{[h("height")]:ee.height},[h("stroke-width")]:N,...A&&{[h("class")]:A},[h("viewBox")]:`0 0 ${C} ${p}`,...ee.hasA11yProp===!1?{[h("aria-hidden")]:"true"}:{},..."attributes"in ee&&ee.attributes},k.node.map(T=>{const[f,g,y]=T,M=ee.nonScalingStroke?{[h("vector-effect")]:"non-scaling-stroke",...g}:g;return y?[f,M,y]:[f,M]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function d1(k,ee={}){return c1(k,{...ee,attributeNames:{...ee.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=k=>{for(const ee in k)if(ee.startsWith("aria-")||ee==="role"||ee==="title")return!0;return!1},m1=Ve.createContext({}),p1=()=>Ve.useContext(m1),h1=Ve.forwardRef(({color:k,size:ee,width:_,height:h,strokeWidth:C,absoluteStrokeWidth:p,nonScalingStroke:b,className:d="",children:v,iconNode:A=[],icon:N={node:A,aliases:[],size:24},...c},S)=>{const{size:m=24,strokeWidth:T=2,absoluteStrokeWidth:f=!1,nonScalingStroke:g=!1,color:y="currentColor",className:M=""}=p1()??{},R=!!v||f1(c),[L,H,P=[]]=d1(N,{color:k??y,width:_??ee??m,height:h??ee??m,strokeWidth:C??T,absoluteStrokeWidth:p??f,nonScalingStroke:b??g,className:Gu(M,d),hasA11yProp:R,attributes:c});return Ve.createElement(L,{ref:S,...H},[...P.map(([Z,ne])=>Ve.createElement(Z,ne)),...Array.isArray(v)?v:[v]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vn(k,ee=[],_=[]){const h=typeof k=="string"?o1(k,ee,_):k,C=Ve.forwardRef(({className:p,...b},d)=>Ve.createElement(h1,{ref:d,icon:h,className:p,...b}));return h.name&&(C.displayName=u1(h.name)),C}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};E0.node;const g1=vn(E0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0={name:"archive",size:24,node:[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]};z0.node;const b1=vn(z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};A0.node;const Zu=vn(A0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};j0.node;const La=vn(j0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};O0.node;const v1=vn(O0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0={name:"file-spreadsheet",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]};R0.node;const y1=vn(R0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};k0.node;const x1=vn(k0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};U0.node;const C0=vn(U0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};B0.node;const _1=vn(B0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};I0.node;const M1=vn(I0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0={name:"share-2",size:24,node:[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]};H0.node;const w1=vn(H0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};q0.node;const L0=vn(q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};V0.node;const Lu=vn(V0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};G0.node;const S1=vn(G0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0={name:"square-plus",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-square"]};Z0.node;const T1=vn(Z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};Y0.node;const C1=vn(Y0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"wifi-off",size:24,node:[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Q0.node;const X0=vn(Q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};K0.node;const J0=vn(K0),N1=`name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install


      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`,D1=`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`,E1=`import React, { useState, useMemo } from 'react';
import { DRUG_CATEGORIES } from './constants';
import DrugCard from './components/DrugCard';
import ExportModal from './components/ExportModal';
import PWAInstallButton from './components/PWAInstallButton';
import OfflineIndicator from './components/OfflineIndicator';
import { 
  Activity, 
  Download, 
  Search, 
  RotateCcw, 
  WifiOff, 
  ShieldCheck, 
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  const [weight, setWeight] = useState<number>(70);
  const [activeCategory, setActiveCategory] = useState<string>(DRUG_CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [resetKey, setResetKey] = useState<number>(0);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);


  // Filter drugs based on category OR global search query
  const displayedDrugs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return DRUG_CATEGORIES.find(cat => cat.name === activeCategory)?.drugs || [];
    }

    // When searching, look across ALL categories
    const allDrugs = DRUG_CATEGORIES.flatMap(cat => 
      cat.drugs.map(drug => ({ ...drug, categoryName: cat.name }))
    );

    return allDrugs.filter(drug => 
      drug.name.toLowerCase().includes(query) ||
      drug.description.toLowerCase().includes(query) ||
      drug.categoryName.toLowerCase().includes(query) ||
      drug.notes.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setWeight(70);
    setSearchQuery('');
    setActiveCategory(DRUG_CATEGORIES[0].name);
    setResetKey(prevKey => prevKey + 1);
  };

  const presetWeights = [50, 60, 70, 80, 90, 100];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-xl text-cyan-400 flex items-center justify-center">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Calculadora de Doses de Emergência
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-full">
                  <WifiOff className="w-3 h-3" /> 100% Offline (Sem APIs)
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400">
                  Cálculo local direto no navegador
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: PWA Install & Export */}
          <div className="flex items-center gap-2">
            <PWAInstallButton />
            <button
              onClick={() => setIsExportOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-sm"
              title="Exportar dados para JSON ou CSV"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Exportar Dados</span>
            </button>
          </div>
        </div>
      </header>


      {/* Main Container */}
      <main className="container mx-auto px-4 py-6 flex-grow space-y-6">
        {/* Patient Weight & Quick Search Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Weight Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="weight" className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5">
                Peso do Paciente (kg)
              </label>
              <span className="text-xs text-slate-400">Todos os cálculos ajustam-se instantaneamente</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative flex-grow">
                <input
                  id="weight"
                  type="number"
                  min="1"
                  max="300"
                  step="0.5"
                  value={weight || ''}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  placeholder="Ex: 70"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg pointer-events-none">
                  kg
                </span>
              </div>
              <button
                onClick={handleReset}
                className="px-3 py-3 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Redefinir peso e campos"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Resetar</span>
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium">Pesos frequentes:</span>
              {presetWeights.map((pw) => (
                <button
                  key={pw}
                  onClick={() => setWeight(pw)}
                  className={\`px-3 py-1 font-semibold rounded-md transition-all \${
                    weight === pw
                      ? 'bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }\`}
                >
                  {pw} kg
                </button>
              ))}
            </div>
          </div>

          {/* Search Box (4 cols) */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md flex flex-col justify-between">
            <div>
              <label htmlFor="search" className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                <Search className="w-4 h-4 text-cyan-400" />
                Busca Rápida de Medicamentos
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ex: Noradrenalina, Fentanil..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              {searchQuery ? \`Filtrando pelo termo "\${searchQuery}" em todas as categorias\` : 'Digite para pesquisar em todo o catálogo de emergência'}
            </p>
          </div>
        </div>

        {/* Category Navigation (only visible when not actively searching) */}
        {!searchQuery ? (
          <div className="border-b border-slate-700 overflow-x-auto pb-1 flex gap-2">
            {DRUG_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={\`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap flex items-center gap-2 border-b-2 \${
                    isActive
                      ? 'bg-slate-800 text-cyan-400 border-cyan-400 shadow-sm'
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40'
                  }\`}
                >
                  <span>{category.name}</span>
                  <span className={\`text-[10px] px-1.5 py-0.5 rounded-full \${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700 text-slate-400'
                  }\`}>
                    {category.drugs.length}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 p-3 rounded-lg text-sm">
            <span className="text-slate-300">
              Encontrados: <strong className="text-cyan-400">{displayedDrugs.length}</strong> medicamento(s) para "<strong>{searchQuery}</strong>"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-cyan-400 hover:underline"
            >
              Voltar para visão por categorias
            </button>
          </div>
        )}

        {/* Drug Cards Grid */}
        <div key={resetKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedDrugs.length > 0 ? (
            displayedDrugs.map((drug) => (
              <DrugCard key={drug.name} drug={drug} patientWeight={weight} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 bg-slate-800/40 rounded-xl border border-slate-700/60">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-base font-semibold text-slate-200">Nenhum medicamento encontrado para "{searchQuery}".</p>
              <p className="text-xs text-slate-400 mt-1">Tente outro nome ou limpe a busca para navegar pelas categorias.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-md"
              >
                Limpar Busca
              </button>
            </div>
          )}
        </div>

        {/* Offline & Data Security Callout */}
        <section className="bg-gradient-to-r from-slate-800 via-slate-800 to-cyan-950/40 border border-slate-700 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm md:text-base font-bold text-white">
                  Operação 100% Autônoma e Offline
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Todos os cálculos de doses, apresentações de ampolas e velocidades de infusão contínua rodam localmente no dispositivo. Nenhum dado do paciente sai do seu navegador.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsExportOpen(true)}
                className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-900 flex items-center gap-1.5 transition-colors shadow-md"
              >
                <FileText className="w-4 h-4" />
                Exportar Dados Clínicos (JSON/CSV)
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/90 py-6 text-slate-400 text-xs">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <p className="text-slate-300 font-semibold">Calculadora de Doses de Emergência & UTI</p>
            <p className="text-slate-500 mt-0.5">
              Ferramenta auxiliar de cálculo clínico. Não substitui o julgamento profissional e protocolos institucionais.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>• 100% Client-side</span>
            <span>• Zero chamadas de API</span>
            <span>• PWA Instalável & Offline</span>
          </div>
        </div>
      </footer>

      {/* Modals & PWA Offline Indicator */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
      <OfflineIndicator />
    </div>

  );
}`,z1=`# 🚑 Calculadora de Doses de Emergência & UTI

Uma aplicação web clínica, rápida e intuitiva para cálculo de doses, volumes de ampolas e velocidades de infusão (bolus e bombas contínuas) para situações de emergência, intubação e terapia intensiva.

---

## ⚡ 100% PWA (Progressive Web App) & Offline

> **Sim! Esta aplicação é um PWA completo.**
> - **Instalável como Aplicativo Nativo:** Pode ser instalado no Android (via Chrome), no iOS (via Safari "Adicionar à Tela de Início") ou no Windows/Mac/Linux (via Chrome/Edge).
> - **Funciona 100% Offline:** Utiliza Service Worker (\`workbox\`) para salvar todo o código, fontes e imagens em cache local. Funciona mesmo sem nenhuma conexão à internet.
> - **Zero dependências de backend ou APIs externas:** todas as fórmulas matemáticas farmacológicas são calculadas localmente no navegador (client-side) pelo React/TypeScript.
> - **Sem custos de hospedagem:** por ser estática, pode ser hospedada gratuitamente no GitHub Pages, Vercel, Netlify, Cloudflare Pages ou aberta localmente.


---

## 🚀 Como subir para o seu repositório no GitHub

Siga os passos abaixo no seu computador com Git e Node.js instalados:

### 1. Crie um novo repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (ex: \`calculadora-emergencia\`).
3. Deixe o repositório como **Público** (ou Privado, se preferir).
4. **Não** marque "Add a README file" (já temos um completo aqui).
5. Clique em **Create repository**.

### 2. Inicialize e envie os arquivos pelo terminal
No diretório onde estão os arquivos deste projeto, execute:

\`\`\`bash
# 1. Inicialize o repositório git local (se ainda não tiver iniciado)
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: Calculadora de doses de emergência sem dependência de APIs"

# 4. Renomeie a branch principal para main
git branch -M main

# 5. Conecte ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/SEU-USUARIO/calculadora-emergencia.git

# 6. Envie o código
git push -u origin main
\`\`\`

---

## 🌐 Como publicar gratuitamente no GitHub Pages (com 1 clique)

Este repositório já inclui o arquivo \`.github/workflows/deploy.yml\` pré-configurado para publicação automática!

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment > Source**, selecione:
   - **GitHub Actions**
4. Pronto! O GitHub executará o build automaticamente e fornecerá um link público no formato:
   \`https://SEU-USUARIO.github.io/calculadora-emergencia/\`

Qualquer nova alteração enviada com \`git push\` atualizará o site automaticamente!

---

## 💻 Como rodar o projeto localmente no seu computador

Requisitos: [Node.js](https://nodejs.org/) (versão 18+) instalado.

\`\`\`bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev
\`\`\`

Abra no navegador em: \`http://localhost:3000\` ou no link indicado no terminal.

Para gerar os arquivos prontos para produção (pasta \`dist/\`):
\`\`\`bash
npm run build
\`\`\`
A pasta gerada \`dist/\` contém HTML, CSS e JavaScript estáticos puros que rodam em qualquer servidor web ou até diretamente em pendrive.

---

## 💊 Como personalizar ou adicionar novos medicamentos

Todos os medicamentos, doses de referência, ampolas e diluições estão organizados de forma limpa em:
- **\`constants.ts\`**

Para adicionar um medicamento novo, basta incluir um novo objeto na categoria desejada com:
- \`name\`: Nome do fármaco (ex: "Amiodarona")
- \`calculationType\`: \`'bolus'\` ou \`'infusion'\`
- \`unit\`: Unidade da dose (ex: \`'mg/kg'\`, \`'mcg/kg/min'\`, \`'mg/kg/h'\`, \`'U/min'\`)
- \`defaultDose\` e \`doseRange\`: Valores recomendados
- \`presentations\`: Concentrações comerciais das ampolas
- \`dilutions\`: Protocolos de diluição recomendados em UTI/sala de emergência

---

## 🔒 Aviso Médico / Isenção de Responsabilidade

Esta aplicação foi desenvolvida como auxílio e consulta rápida para profissionais de saúde. Não substitui o julgamento clínico individual, diretrizes institucionais hospitalares e protocolos vigentes. Sempre confira o peso do paciente, concentração real da ampola disponível e contraindicações antes da administração.
`,A1=`import React from 'react';
import type { Drug, DilutionInfo } from '../types';

interface DilutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  drug: Drug;
  onApply: (dilution: DilutionInfo) => void;
}

const DilutionModal: React.FC<DilutionModalProps> = ({ isOpen, onClose, drug, onApply }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-cyan-400">Diluições Comuns para {drug.name}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {drug.dilutions?.map((dilution, index) => (
            <div key={index} className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <h4 className="font-semibold text-slate-100">{dilution.name}</h4>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Preparo:</span> {dilution.description}
              </p>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Concentração Final:</span> {dilution.finalConcentrationMgMl.toFixed(3)} {drug.name === 'Vasopressina' ? 'U' : 'mg'}/ml
              </p>
               <p className="text-sm text-slate-400 mt-1 italic">{dilution.useCase}</p>
              <button 
                onClick={() => onApply(dilution)}
                className="mt-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Aplicar esta diluição
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DilutionModal;
`,j1=`import React, { useState, useMemo, useEffect } from 'react';
import type { Drug, CalculationResult, DilutionInfo } from '../types';
import DilutionModal from './DilutionModal';

interface DrugCardProps {
  drug: Drug;
  patientWeight: number;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

const WarningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

const BeakerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H7zM5 6h10v10H5V6zm2 1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);


const DrugCard: React.FC<DrugCardProps> = ({ drug, patientWeight }) => {
  const [ampuleConcentrationMg, setAmpuleConcentrationMg] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].concentrationMg : ''
  );
  const [ampuleVolumeMl, setAmpuleVolumeMl] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].volumeMl : ''
  );
  const [dose, setDose] = useState<number | ''>(drug.defaultDose);
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(250);
  const [isDilutionModalOpen, setIsDilutionModalOpen] = useState(false);

  useEffect(() => {
    setDose(drug.defaultDose);
    if (drug.presentations && drug.presentations.length === 1) {
        setAmpuleConcentrationMg(drug.presentations[0].concentrationMg);
        setAmpuleVolumeMl(drug.presentations[0].volumeMl);
    } else {
        setAmpuleConcentrationMg('');
        setAmpuleVolumeMl('');
    }
  }, [drug]);

  const handleApplyDilution = (dilution: DilutionInfo) => {
    setAmpuleConcentrationMg(dilution.totalDrugMg);
    setAmpuleVolumeMl(dilution.finalVolumeMl);
    // For infusions, also set the solution volume if it's different from default
    if (drug.calculationType === 'infusion' && dilution.finalVolumeMl !== solutionVolumeMl) {
        setSolutionVolumeMl(dilution.finalVolumeMl);
    }
    setIsDilutionModalOpen(false);
  };

  const maxDose = useMemo(() => {
    const match = drug.doseRange.match(/(\\d+\\.?\\d*)\\s*-\\s*(\\d+\\.?\\d*)/);
    if (match && match[2]) {
      return parseFloat(match[2]);
    }
    return null;
  }, [drug.doseRange]);

  const isDoseHigh = useMemo(() => {
    if (maxDose === null || dose === '') return false;
    return dose > maxDose;
  }, [dose, maxDose]);

  const calculationResult: CalculationResult = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '' || dose === '') {
      return { formula: "Aguardando dados..." };
    }
    return drug.calculate({ 
        weight: patientWeight, 
        ampuleConcentrationMg,
        ampuleVolumeMl, 
        dose,
        solutionVolumeMl,
        maxTotalDoseMg: drug.maxTotalDoseMg
    });
  }, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, dose, solutionVolumeMl, drug]);
  
  const doseRangeCalculation = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '') {
      return null;
    }

    const match = drug.doseRange.match(/(\\d+\\.?\\d*)\\s*-\\s*(\\d+\\.?\\d*)/);
    if (!match || !match[1] || !match[2]) {
      return null;
    }

    const minDose = parseFloat(match[1]);
    const maxDose = parseFloat(match[2]);

    const commonParams = {
      weight: patientWeight,
      ampuleConcentrationMg,
      ampuleVolumeMl,
      solutionVolumeMl,
      maxTotalDoseMg: drug.maxTotalDoseMg
    }

    const minResult = drug.calculate({ ...commonParams, dose: minDose });
    const maxResult = drug.calculate({ ...commonParams, dose: maxDose });

    const resultKey = drug.calculationType === 'bolus' ? 'bolusMl' : 'infusionMlH';
    const unit = drug.calculationType === 'bolus' ? 'ml' : 'ml/h';

    const minVal = minResult[resultKey];
    const maxVal = maxResult[resultKey];
    
    if (!minVal || !maxVal) return null;

    const finalMin = minResult.cappedResultMl ?? minVal;
    const finalMax = maxResult.cappedResultMl ?? maxVal;

    return \`\${finalMin} - \${finalMax} \${unit}\`;

}, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, solutionVolumeMl, drug]);


  const renderResult = () => {
    const isBolus = drug.calculationType === 'bolus';
    const resultKey = isBolus ? 'bolusMl' : 'infusionMlH';
    const resultValue = calculationResult.cappedResultMl ?? calculationResult[resultKey];
    const unit = isBolus ? 'ml' : 'ml/h';
    const label = isBolus ? 'Volume a ser administrado' : 'Velocidade de Infusão';

    return (
        <>
            {calculationResult.maxDoseWarning && isBolus && (
                <div className="text-sm text-red-400 flex items-start gap-2 p-2 rounded-md bg-red-500/10 border border-red-500/30">
                    <WarningIcon />
                    <div>
                        <p className="font-semibold">Dose Máxima Excedida</p>
                        <p>{calculationResult.maxDoseWarning}</p>
                        <p className="text-xs">O volume foi ajustado para a dose máxima.</p>
                    </div>
                </div>
            )}
            <div className="bg-cyan-900/50 p-4 rounded-md text-center">
                <p className="text-sm text-cyan-200">{label}</p>
                <p className="text-3xl font-bold text-white tracking-tight">
                    {resultValue ?? '--'} <span className="text-xl">{unit}</span>
                </p>
            </div>
             {doseRangeCalculation && (
                <div className="text-center text-xs text-slate-400 pt-1">
                    <p className="font-semibold">Faixa de dose recomendada:</p>
                    <p>{doseRangeCalculation}</p>
                </div>
            )}
        </>
    );
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-1 hover:ring-slate-700">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-100">{drug.name}</h3>
        <p className="text-sm text-slate-400">{drug.description}</p>
      </div>

      <div className="p-4 space-y-4 flex-grow">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-slate-300">
              {drug.calculationType === 'infusion' ? 'Concentração da Solução Final' : 'Concentração da Ampola'}
            </label>
            {drug.dilutions && drug.dilutions.length > 0 && (
                <button
                    onClick={() => setIsDilutionModalOpen(true)}
                    className="p-1 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors"
                    title="Ver diluições comuns"
                >
                    <BeakerIcon />
                </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="relative">
              <input
                type="number"
                value={ampuleConcentrationMg}
                onChange={(e) => setAmpuleConcentrationMg(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
                {drug.name === 'Vasopressina' ? 'U' : 'mg'}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={ampuleVolumeMl}
                onChange={(e) => setAmpuleVolumeMl(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">ml</span>
            </div>
          </div>
          {drug.presentations && drug.presentations.length > 0 && (
            <div className="mt-2">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-400">Padrões:</span>
                    {drug.presentations.map((p) => (
                        <button
                            key={p.label}
                            onClick={() => {
                                setAmpuleConcentrationMg(p.concentrationMg);
                                setAmpuleVolumeMl(p.volumeMl);
                            }}
                            className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors text-slate-300"
                            title={\`Definir concentração para \${p.concentrationMg}\${drug.name === 'Vasopressina' ? 'U' : 'mg'} / \${p.volumeMl}ml\`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
          )}
        </div>

        <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">
                Dose ({drug.unit})
                <span className="text-xs text-slate-400 ml-2">({drug.doseRange})</span>
            </label>
            <input
              type="number"
              step={drug.unit === 'mcg/kg/min' || drug.unit === 'U/min' ? '0.01' : '0.1'}
              value={dose}
              onChange={(e) => setDose(e.target.value === '' ? '' : parseFloat(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
            />
            {isDoseHigh && (
                <div className="mt-2 text-sm text-yellow-400 flex items-center gap-2 p-2 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    <WarningIcon />
                    <span>A dose inserida está acima da faixa recomendada.</span>
                </div>
            )}
        </div>

        {drug.calculationType === 'infusion' && (
            <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">Volume da Solução (ml)</label>
                <input
                    type="number"
                    value={solutionVolumeMl}
                    onChange={(e) => setSolutionVolumeMl(parseFloat(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
                />
            </div>
        )}
      </div>

      <div className="p-4 bg-slate-800/50 space-y-3">
        {renderResult()}
        <div className="text-xs text-slate-500 text-center italic h-4">
            {calculationResult.formula}
        </div>
      </div>
      <div className="px-4 py-2 bg-slate-900/50 text-slate-400 text-xs flex items-start space-x-2">
        <InfoIcon />
        <span>{drug.notes}</span>
      </div>
      {drug.dilutions && (
        <DilutionModal
            isOpen={isDilutionModalOpen}
            onClose={() => setIsDilutionModalOpen(false)}
            drug={drug}
            onApply={handleApplyDilution}
        />
      )}
    </div>
  );
};

export default DrugCard;
`,O1=`import React, { useState } from 'react';
import { DRUG_CATEGORIES } from '../constants';
import { Download, FileSpreadsheet, FileCode, Check, X, ShieldCheck, Archive, Loader2, Sparkles } from 'lucide-react';
import { downloadProjectZip, downloadStandaloneZip } from '../utils/projectZip';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedJson, setCopiedJson] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [isZippingStandalone, setIsZippingStandalone] = useState(false);

  if (!isOpen) return null;

  const totalDrugs = DRUG_CATEGORIES.reduce((acc, cat) => acc + cat.drugs.length, 0);

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadProjectZip();
    } catch (err) {
      console.error('Falha ao gerar ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const handleDownloadStandaloneZip = async () => {
    try {
      setIsZippingStandalone(true);
      await downloadStandaloneZip();
    } catch (err) {
      console.error('Falha ao gerar ZIP standalone:', err);
    } finally {
      setIsZippingStandalone(false);
    }
  };


  // Generate clean exportable JSON (strip functions)
  const getSerializableData = () => {
    return DRUG_CATEGORIES.map(category => ({
      category: category.name,
      drugs: category.drugs.map(drug => ({
        name: drug.name,
        description: drug.description,
        calculationType: drug.calculationType,
        unit: drug.unit,
        defaultDose: drug.defaultDose,
        doseRange: drug.doseRange,
        notes: drug.notes,
        maxTotalDoseMg: drug.maxTotalDoseMg,
        presentations: drug.presentations,
        dilutions: drug.dilutions,
      }))
    }));
  };

  const handleDownloadJSON = () => {
    const data = getSerializableData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadCSV = () => {
    const headers = [
      'Categoria',
      'Medicamento',
      'Tipo de Cálculo',
      'Unidade',
      'Dose Padrão',
      'Faixa de Dose',
      'Dose Máxima (mg)',
      'Apresentações Comerciais',
      'Diluições Recomendadas',
      'Observações Clínicas'
    ];

    const rows: string[][] = [];

    DRUG_CATEGORIES.forEach(cat => {
      cat.drugs.forEach(d => {
        const presentations = (d.presentations || [])
          .map(p => \`\${p.label} (\${p.concentrationMg}mg/\${p.volumeMl}ml)\`)
          .join(' | ');

        const dilutions = (d.dilutions || [])
          .map(dil => \`\${dil.name}: \${dil.description} [\${dil.useCase}]\`)
          .join(' | ');

        rows.push([
          \`"\${cat.name.replace(/"/g, '""')}"\`,
          \`"\${d.name.replace(/"/g, '""')}"\`,
          \`"\${d.calculationType.replace(/"/g, '""')}"\`,
          \`"\${d.unit.replace(/"/g, '""')}"\`,
          \`"\${d.defaultDose}"\`,
          \`"\${d.doseRange.replace(/"/g, '""')}"\`,
          \`"\${d.maxTotalDoseMg ?? ''}"\`,
          \`"\${presentations.replace(/"/g, '""')}"\`,
          \`"\${dilutions.replace(/"/g, '""')}"\`,
          \`"\${d.notes.replace(/"/g, '""')}"\`
        ]);
      });
    });

    const csvContent = '\\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = () => {
    const data = getSerializableData();
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Exportar Dados Clínicos</h2>
              <p className="text-xs text-slate-400">Total de {totalDrugs} medicamentos em {DRUG_CATEGORIES.length} categorias</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-start gap-3 text-xs text-emerald-200">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold text-emerald-300">100% Livre de Dependências e APIs</strong>
            Todos esses dados residem estaticamente no código. Eles podem ser portados para qualquer sistema, aplicativo mobile, banco de dados ou planilha sem necessidade de conexão com servidores.
          </div>
        </div>

        {/* Opção 1: Zero-Build Standalone (Apenas o essencial para o site) */}
        <div className="p-4 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/60 border border-emerald-600/60 rounded-xl space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">Baixar Apenas os Arquivos do Site (Recomendado)</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                    Apenas o Essencial
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Vem <strong>somente com os arquivos necessários para o site funcionar</strong>: <code className="text-cyan-300">index.html</code>, <code className="text-cyan-300">manifest.webmanifest</code>, <code className="text-cyan-300">sw.js</code>, pasta <code className="text-cyan-300">assets/</code> e ícones. 
                  Sem arquivos de programação extras!
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleDownloadStandaloneZip}
            disabled={isZippingStandalone}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md"
          >
            {isZippingStandalone ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Empacotando arquivos do site...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Apenas os Arquivos do Site (.ZIP)</span>
              </>
            )}
          </button>
        </div>

        {/* Opção 2: Código-Fonte Completo (Para Programadores) */}
        <div className="p-4 bg-slate-900/90 border border-slate-700/80 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs md:text-sm">
              <Archive className="w-4 h-4 text-slate-400" />
              <span>Código-Fonte Completo de Programação (20 arquivos)</span>
            </div>
            <button
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            >
              {isZipping ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>Baixar Código (.zip)</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            Contém os 20 arquivos com React, TypeScript, <code className="text-slate-300">package.json</code> e configurações para programadores editarem no VS Code.
          </p>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
                <FileCode className="w-4 h-4" /> Formato JSON
              </div>
              <p className="text-xs text-slate-400">
                Ideal para desenvolvedores, APIs locais, banco de dados NoSQL ou integração com novos softwares.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadJSON}
                className="flex-1 flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold px-3 py-2 rounded-md text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Baixar .json
              </button>
              <button
                onClick={handleCopyJSON}
                className="flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-md text-xs transition-colors"
                title="Copiar JSON"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1">
                <FileSpreadsheet className="w-4 h-4" /> Formato CSV / Excel
              </div>
              <p className="text-xs text-slate-400">
                Abre no Microsoft Excel, Google Planilhas ou LibreOffice com todas as colunas de dosagens e diluições.
              </p>
            </div>
            <button
              onClick={handleDownloadCSV}
              className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-md text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Baixar .csv (Planilha)
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
          <p className="font-semibold text-slate-300 mb-1">Onde esses dados estão no código?</p>
          <p>
            O arquivo central com todos os medicamentos, doses de referência e fórmulas é o <code className="text-cyan-300">constants.ts</code>. Para adicionar uma nova droga ou alterar apresentações, basta editá-lo.
          </p>
        </div>


        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
`,R1=`import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-amber-400/40 animate-bounce">
      <WifiOff className="w-4 h-4 text-amber-200" />
      <span>Modo Offline Ativo — Todos os cálculos continuam funcionando localmente.</span>
    </div>
  );
};

export default OfflineIndicator;
`,k1=`import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check, Share2, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return (
      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg">
        <Check className="w-3.5 h-3.5" /> App Instalado
      </span>
    );
  }

  // Chromium / Android / Desktop flow with active deferredPrompt
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Instalar App</span>
      </button>
    );
  }

  // Fallback / iOS or desktop browser where beforeinstallprompt hasn't fired yet or in iframe
  return (
    <>
      <button
        onClick={() => setShowGuide(true)}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md transition-colors"
        title="Instalar este app no seu celular ou computador (PWA)"
      >
        <Smartphone className="w-4 h-4" />
        <span>Instalar App</span>
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instalar como Aplicativo (PWA)</h3>
                  <p className="text-xs text-slate-400">Funciona 100% offline no celular e no computador</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {isIOS ? (
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                  <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                    <Share2 className="w-4 h-4" /> No iPhone ou iPad (Safari):
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                    <li>Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima) na barra do Safari.</li>
                    <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
                    <li>Confirme tocando em <strong>"Adicionar"</strong> no canto superior direito.</li>
                  </ol>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <Smartphone className="w-4 h-4" /> No Android (Chrome / Edge):
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                      <li>Toque no menu de <strong>3 pontinhos (⋮)</strong> no canto superior do navegador.</li>
                      <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                      <li>Pronto! Ele abrirá em tela cheia como um app nativo.</li>
                    </ol>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <PlusSquare className="w-4 h-4" /> No Computador (Chrome / Edge / Brave):
                    </h4>
                    <p className="leading-relaxed">
                      Clique no ícone de <strong>instalar</strong> (um monitor com seta para baixo) na barra de endereços do navegador à direita da URL.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg text-emerald-300 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Vantagem do PWA:</strong> O app é salvo na memória do seu dispositivo e funciona mesmo no subsolo do hospital sem sinal de rede!
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="mt-2 w-full rounded-lg bg-slate-700 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
`,U1=`import { DrugCategory, CalculationParams, CalculationResult, Drug } from './types';

const calculateBolus = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
  if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
    return { formula: "Preencha todos os campos." };
  }
  const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
  if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
  const totalDoseMg = dose * weight;
  const bolusMl = totalDoseMg / drugConcentrationMgMl;

  const result: CalculationResult = {
    bolusMl: bolusMl.toFixed(2),
    formula: \`(\${dose} mg/kg * \${weight} kg) / (\${ampuleConcentrationMg} mg / \${ampuleVolumeMl} ml) = \${bolusMl.toFixed(2)} ml\`,
  };

  if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
    const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
    result.cappedResultMl = cappedMl.toFixed(2);
    result.maxDoseWarning = \`Dose (\${totalDoseMg.toFixed(1)}mg) excede o máximo de \${maxTotalDoseMg}mg.\`;
  }

  return result;
};

const calculateBolusMcg = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
    if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
      return { formula: "Preencha todos os campos." };
    }
    const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
    if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
    const totalDoseMcg = dose * weight;
    const totalDoseMg = totalDoseMcg / 1000;
    const bolusMl = totalDoseMg / drugConcentrationMgMl;
  
    const result: CalculationResult = {
      bolusMl: bolusMl.toFixed(2),
      formula: \`((\${dose} mcg/kg * \${weight} kg) / 1000) / (\${ampuleConcentrationMg} mg / \${ampuleVolumeMl} ml) = \${bolusMl.toFixed(2)} ml\`,
    };

    if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
        const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
        result.cappedResultMl = cappedMl.toFixed(2);
        result.maxDoseWarning = \`Dose (\${totalDoseMg.toFixed(1)}mg) excede o máximo de \${maxTotalDoseMg}mg.\`;
    }

    return result;
  };

const calculateInfusion = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
   if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
    return { formula: "Preencha todos os campos." };
  }
  
  // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
  const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
  const finalConcentrationMcgMl = finalConcentrationMgMl * 1000;
  if (finalConcentrationMcgMl === 0) return { formula: "Concentração final inválida."};


  const infusionMcgMin = dose * weight;
  const infusionMlMin = infusionMcgMin / finalConcentrationMcgMl;
  const infusionMlH = infusionMlMin * 60;
  
  return {
    infusionMlH: infusionMlH.toFixed(2),
    finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
    formula: \`Dose: \${dose} mcg/kg/min. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
  };
};

const calculateInfusionMgKgH = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
    if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
      return { formula: "Preencha todos os campos." };
    }
    
    // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
    const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
    if (finalConcentrationMgMl === 0) return { formula: "Concentração final inválida."};

    const totalDoseMgH = dose * weight;
    const infusionMlH = totalDoseMgH / finalConcentrationMgMl;
    
    return {
      infusionMlH: infusionMlH.toFixed(2),
      finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
      formula: \`Dose: \${dose} mg/kg/h. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
    };
  };

export const DRUG_CATEGORIES: DrugCategory[] = [
  {
    name: 'Indução e Intubação',
    drugs: [
      {
        name: 'Fentanil',
        description: 'Analgésico opioide potente.',
        calculationType: 'bolus',
        unit: 'mcg/kg',
        defaultDose: 2,
        doseRange: '1 - 3 mcg/kg',
        notes: 'Administrar lentamente para evitar rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição Padrão (10 mcg/ml)',
              description: '1 ampola (500mcg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 0.5,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 0.01,
              useCase: 'Para administração em bolus fracionados e seguros.'
            }
        ],
        calculate: calculateBolusMcg,
      },
      {
        name: 'Midazolam',
        description: 'Benzodiazepínico para sedação.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 0.2,
        doseRange: '0.1 - 0.3 mg/kg',
        notes: 'Pode causar hipotensão, especialmente em idosos ou instáveis.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '5mg/5ml', concentrationMg: 5, volumeMl: 5 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição para Bolus (1mg/ml)',
              description: '1 ampola (50mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 50,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 1,
              useCase: 'Para administração em bolus lento e seguro.'
            },
            {
                name: 'Diluição para Bolus (1.5mg/ml)',
                description: '1 ampola (15mg/3ml) + 7ml de SF 0.9%',
                totalDrugMg: 15,
                finalVolumeMl: 10,
                finalConcentrationMgMl: 1.5,
                useCase: 'Alternativa para bolus, usando ampola de 15mg.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Propofol',
        description: 'Agente hipnótico de ação curta.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 2,
        doseRange: '1.5 - 2.5 mg/kg',
        notes: 'Causa apneia e hipotensão. Geralmente não é diluído para bolus.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        calculate: calculateBolus,
      },
      {
        name: 'Quetamina',
        description: 'Anestésico dissociativo.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Ideal para pacientes instáveis hemodinamicamente. Aumenta a secreção.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
              name: 'Diluição Padrão (10mg/ml)',
              description: '1 ampola (500mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 500,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 10,
              useCase: 'Para administração em bolus e evitar flebite.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Succinilcolina',
        description: 'Bloqueador neuromuscular despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Causa fasciculações. Contraindicada em hipercalemia. Geralmente não é diluída.',
        maxTotalDoseMg: 150,
        presentations: [{ label: '100mg/10ml', concentrationMg: 100, volumeMl: 10 }],
        calculate: calculateBolus,
      },
      {
        name: 'Rocurônio',
        description: 'Bloqueador neuromuscular não-despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1,
        doseRange: '0.6 - 1.2 mg/kg',
        notes: 'Dose de 1.2 mg/kg para sequência rápida. Geralmente não é diluído.',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        calculate: calculateBolus,
      },
    ],
  },
  {
    name: 'Drogas Vasoativas (DVA)',
    drugs: [
      {
        name: 'Noradrenalina',
        description: 'Vasopressor de primeira escolha no choque séptico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.1,
        doseRange: '0.01 - 3 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '4mg/4ml', concentrationMg: 4, volumeMl: 4 }],
        dilutions: [
            {
                name: 'Padrão UTI (16mg/250ml)',
                description: '4 ampolas (4mg/4ml) em 234ml de SG 5%',
                totalDrugMg: 16,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 16/250,
                useCase: 'Diluição padrão para infusão contínua em UTI.'
            },
            {
                name: 'Concentrada (32mg/250ml)',
                description: '8 ampolas (4mg/4ml) em 218ml de SG 5%',
                totalDrugMg: 32,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 32/250,
                useCase: 'Para pacientes com restrição hídrica.'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dobutamina',
        description: 'Agente inotrópico para choque cardiogênico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '250mg/20ml', concentrationMg: 250, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '1 ampola (250mg/20ml) em 230ml de SG 5%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição comum para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dopamina',
        description: 'Precursor da noradrenalina com efeitos dose-dependentes.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Efeitos variam com a dose. Menos utilizada atualmente.',
        presentations: [{ label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 }],
        calculate: calculateInfusion,
      },
      {
        name: 'Vasopressina',
        description: 'Hormônio antidiurético com efeito vasopressor.',
        calculationType: 'infusion',
        unit: 'U/min',
        defaultDose: 0.03,
        doseRange: '0.01 - 0.04 U/min',
        notes: 'Dose fixa em U/min. Informar o total de Unidades (U) na solução.',
        presentations: [{ label: '20U/1ml', concentrationMg: 20, volumeMl: 1 }],
        dilutions: [
            {
                name: 'Padrão UTI (100U/100ml)',
                description: '5 ampolas (20U/1ml) em 95ml de SF 0.9%',
                totalDrugMg: 100, // Representa Unidades aqui
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1, // Representa 1 U/ml
                useCase: 'Diluição padrão para infusão contínua (1U/ml).'
            }
        ],
        calculate: (params) => {
          const { ampuleConcentrationMg, dose, solutionVolumeMl = 100 } = params;
          if (!ampuleConcentrationMg || !dose || !solutionVolumeMl) {
            return { formula: "Preencha todos os campos." };
          }
          // Para Vasopressina, 'ampuleConcentrationMg' representa o TOTAL de Unidades (U) na solução
          const totalUnitsInSolution = ampuleConcentrationMg;
          const finalConcentrationUnitsMl = totalUnitsInSolution / solutionVolumeMl;
          if (finalConcentrationUnitsMl === 0) return { formula: "Concentração inválida."};
          
          const infusionMlH = (dose / finalConcentrationUnitsMl) * 60;

          return {
            infusionMlH: infusionMlH.toFixed(2),
            finalConcentrationMgMl: finalConcentrationUnitsMl.toFixed(2),
            formula: \`Dose fixa: \${dose} U/min. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
          };
        },
      },
    ],
  },
  {
    name: 'Manutenção',
    drugs: [
      {
        name: 'Propofol (Manutenção)',
        description: 'Agente hipnótico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 4,
        doseRange: '2 - 6 mg/kg/h',
        notes: 'Monitorar triglicerídeos e risco de síndrome de infusão de propofol.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Uso Puro (10mg/ml)',
                description: 'Administrar a emulsão pura, sem diluição.',
                totalDrugMg: 200,
                finalVolumeMl: 20,
                finalConcentrationMgMl: 10,
                useCase: 'Prática padrão para infusão contínua de Propofol.'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
      {
        name: 'Midazolam (Manutenção)',
        description: 'Benzodiazepínico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 1,
        doseRange: '0.5 - 2 mcg/kg/min',
        notes: 'Risco de acúmulo em pacientes com insuficiência renal ou hepática.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (100mg/100ml)',
                description: '2 ampolas (50mg/10ml) em 80ml de SF 0.9%',
                totalDrugMg: 100,
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Fentanil (Manutenção)',
        description: 'Analgésico opioide para analgesia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.02,
        doseRange: '0.01 - 0.05 mcg/kg/min',
        notes: 'Monitorar depressão respiratória e rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (2500mcg/250ml)',
                description: '5 ampolas (500mcg/10ml) em 200ml de SF 0.9%',
                totalDrugMg: 2.5,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 0.01,
                useCase: 'Diluição padrão para infusão (10mcg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Rocurônio (Manutenção)',
        description: 'Bloqueador neuromuscular para paralisia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 10,
        doseRange: '5 - 12 mcg/kg/min',
        notes: 'Requer monitorização da função neuromuscular (ex: TOF).',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '5 ampolas (50mg/5ml) em 225ml de SF 0.9%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Quetamina (Manutenção)',
        description: 'Anestésico para analgesia/sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 0.5,
        doseRange: '0.2 - 1 mg/kg/h',
        notes: 'Pode causar agitação ou alucinações. Efeito broncodilatador.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
                name: 'Padrão UTI (500mg/250ml)',
                description: '1 ampola (500mg/10ml) em 240ml de SF 0.9%',
                totalDrugMg: 500,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 2,
                useCase: 'Diluição padrão para infusão contínua (2mg/ml).'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
    ]
  }
];
`,B1=`import { useEffect, useState } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
`,I1=`import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect standalone mode (already installed)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);

    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
  };
}
`,H1=`@import "tailwindcss";
`,q1=`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora de Doses de Emergência</title>
    <meta name="description" content="Calculadora clínica de doses e diluições de medicamentos de emergência e UTI, 100% autônoma, PWA instalável e offline." />
    
    <!-- PWA & Mobile Web App Meta Tags -->
    <meta name="theme-color" content="#0f172a" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="DosesEmerg" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <link rel="icon" type="image/svg+xml" href="./icon.svg" />
    <link rel="icon" type="image/png" sizes="192x192" href="./pwa-192x192.png" />
    
    <!-- OpenGraph -->
    <meta property="og:title" content="Calculadora de Doses de Emergência" />
    <meta property="og:description" content="Calculadora clínica de doses e diluições de medicamentos de emergência e UTI, 100% autônoma, PWA instalável e offline." />
  </head>
  <body class="bg-slate-900 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-900 min-h-screen">
    <div id="root"></div>
    <script type="module" src="./index.tsx"><\/script>
  </body>
</html>
`,L1=`
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker safely after mount, preventing any SW error from blocking the UI
try {
  if ('serviceWorker' in navigator) {
    registerSW({ 
      immediate: true,
      onRegisterError(error) {
        console.warn('PWA service worker registration warning:', error);
      }
    });
  }
} catch (swErr) {
  console.warn('PWA service worker initialization warning:', swErr);
}

`,V1=`{
  "name": "copy3-of-calculadora-de-doses-de-emergência",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "copy3-of-calculadora-de-doses-de-emergência",
      "version": "0.0.0",
      "dependencies": {
        "@tailwindcss/vite": "^4.3.5",
        "@types/jszip": "^3.4.0",
        "jszip": "^3.10.2",
        "lucide-react": "^1.70.0",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "tailwindcss": "^4.3.5"
      },
      "devDependencies": {
        "@types/node": "^22.14.0",
        "@vitejs/plugin-react": "^5.0.0",
        "typescript": "~5.8.2",
        "vite": "^6.2.0",
        "vite-plugin-pwa": "^2.0.0"
      }
    },
    "node_modules/@apideck/better-ajv-errors": {
      "version": "0.3.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jsonpointer": "^5.0.1",
        "leven": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "ajv": ">=8"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.13",
        "@babel/helper-compilation-targets": "^7.29.13",
        "@babel/helper-module-transforms": "^7.29.13",
        "@babel/helpers": "^7.29.13",
        "@babel/parser": "^7.29.13",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.13",
        "@babel/types": "^7.29.11",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.13",
        "@babel/types": "^7.29.11",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-member-expression-to-functions": "^7.29.7",
        "@babel/helper-optimise-call-expression": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13",
        "@babel/traverse": "^7.29.13",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.29.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "regexpu-core": "^6.5.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.6.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-plugin-utils": "^7.28.6",
        "debug": "^4.4.3",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.22.11"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-wrap-function": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.29.7",
        "@babel/helper-optimise-call-expression": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.13",
        "@babel/types": "^7.29.11"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-wrap-function": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.11"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.11"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-firefox-class-in-computed-class-key": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-class-field-initializer-scope": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-rest-destructuring-rhs-array": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7",
        "@babel/plugin-transform-optional-chaining": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.13.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-property-in-object": {
      "version": "7.21.0-placeholder-for-preset-env.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-assertions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-attributes": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-unicode-sets-regex": {
      "version": "7.18.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.18.6",
        "@babel/helper-plugin-utils": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-generator-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-remap-async-to-generator": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-to-generator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-remap-async-to-generator": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoped-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoping": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-class-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-class-static-block": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.12.0"
      }
    },
    "node_modules/@babel/plugin-transform-classes": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-globals": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7",
        "@babel/traverse": "^7.29.10"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-computed-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/template": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-destructuring": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-dotall-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-keys": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-named-capturing-groups-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-dynamic-import": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-explicit-resource-management": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-exponentiation-operator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-export-namespace-from": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-for-of": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-function-name": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-json-strings": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-logical-assignment-operators": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-member-expression-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-amd": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-systemjs": {
      "version": "7.29.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.8"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-umd": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-new-target": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-nullish-coalescing-operator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-numeric-separator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-rest-spread": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7",
        "@babel/plugin-transform-parameters": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-super": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-optional-catch-binding": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-optional-chaining": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-parameters": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-private-methods": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-private-property-in-object": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-property-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regenerator": {
      "version": "7.29.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regexp-modifiers": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-reserved-words": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-shorthand-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-spread": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-sticky-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-template-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typeof-symbol": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-escapes": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-property-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-sets-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/preset-env": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "@babel/plugin-bugfix-firefox-class-in-computed-class-key": "^7.29.7",
        "@babel/plugin-bugfix-safari-class-field-initializer-scope": "^7.29.7",
        "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.29.7",
        "@babel/plugin-bugfix-safari-rest-destructuring-rhs-array": "^7.29.7",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.29.7",
        "@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": "^7.29.7",
        "@babel/plugin-proposal-private-property-in-object": "7.21.0-placeholder-for-preset-env.2",
        "@babel/plugin-syntax-import-assertions": "^7.29.7",
        "@babel/plugin-syntax-import-attributes": "^7.29.7",
        "@babel/plugin-syntax-unicode-sets-regex": "^7.18.6",
        "@babel/plugin-transform-arrow-functions": "^7.29.7",
        "@babel/plugin-transform-async-generator-functions": "^7.29.7",
        "@babel/plugin-transform-async-to-generator": "^7.29.7",
        "@babel/plugin-transform-block-scoped-functions": "^7.29.7",
        "@babel/plugin-transform-block-scoping": "^7.29.7",
        "@babel/plugin-transform-class-properties": "^7.29.7",
        "@babel/plugin-transform-class-static-block": "^7.29.7",
        "@babel/plugin-transform-classes": "^7.29.7",
        "@babel/plugin-transform-computed-properties": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7",
        "@babel/plugin-transform-dotall-regex": "^7.29.7",
        "@babel/plugin-transform-duplicate-keys": "^7.29.7",
        "@babel/plugin-transform-duplicate-named-capturing-groups-regex": "^7.29.7",
        "@babel/plugin-transform-dynamic-import": "^7.29.7",
        "@babel/plugin-transform-explicit-resource-management": "^7.29.7",
        "@babel/plugin-transform-exponentiation-operator": "^7.29.7",
        "@babel/plugin-transform-export-namespace-from": "^7.29.7",
        "@babel/plugin-transform-for-of": "^7.29.7",
        "@babel/plugin-transform-function-name": "^7.29.7",
        "@babel/plugin-transform-json-strings": "^7.29.7",
        "@babel/plugin-transform-literals": "^7.29.7",
        "@babel/plugin-transform-logical-assignment-operators": "^7.29.7",
        "@babel/plugin-transform-member-expression-literals": "^7.29.7",
        "@babel/plugin-transform-modules-amd": "^7.29.7",
        "@babel/plugin-transform-modules-commonjs": "^7.29.7",
        "@babel/plugin-transform-modules-systemjs": "^7.29.7",
        "@babel/plugin-transform-modules-umd": "^7.29.7",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.29.7",
        "@babel/plugin-transform-new-target": "^7.29.7",
        "@babel/plugin-transform-nullish-coalescing-operator": "^7.29.7",
        "@babel/plugin-transform-numeric-separator": "^7.29.7",
        "@babel/plugin-transform-object-rest-spread": "^7.29.7",
        "@babel/plugin-transform-object-super": "^7.29.7",
        "@babel/plugin-transform-optional-catch-binding": "^7.29.7",
        "@babel/plugin-transform-optional-chaining": "^7.29.7",
        "@babel/plugin-transform-parameters": "^7.29.7",
        "@babel/plugin-transform-private-methods": "^7.29.7",
        "@babel/plugin-transform-private-property-in-object": "^7.29.7",
        "@babel/plugin-transform-property-literals": "^7.29.7",
        "@babel/plugin-transform-regenerator": "^7.29.7",
        "@babel/plugin-transform-regexp-modifiers": "^7.29.7",
        "@babel/plugin-transform-reserved-words": "^7.29.7",
        "@babel/plugin-transform-shorthand-properties": "^7.29.7",
        "@babel/plugin-transform-spread": "^7.29.7",
        "@babel/plugin-transform-sticky-regex": "^7.29.7",
        "@babel/plugin-transform-template-literals": "^7.29.7",
        "@babel/plugin-transform-typeof-symbol": "^7.29.7",
        "@babel/plugin-transform-unicode-escapes": "^7.29.7",
        "@babel/plugin-transform-unicode-property-regex": "^7.29.7",
        "@babel/plugin-transform-unicode-regex": "^7.29.7",
        "@babel/plugin-transform-unicode-sets-regex": "^7.29.7",
        "@babel/preset-modules": "0.1.6-no-external-plugins",
        "babel-plugin-polyfill-corejs2": "^0.4.15",
        "babel-plugin-polyfill-corejs3": "^0.14.0",
        "babel-plugin-polyfill-regenerator": "^0.6.6",
        "core-js-compat": "^3.48.0",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-modules": {
      "version": "0.1.6-no-external-plugins",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.13",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.13",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.11",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.11",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.12",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "9.0.0",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.11",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/plugin-babel": {
      "version": "6.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.18.6",
        "@rollup/pluginutils": "^5.0.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0",
        "@types/babel__core": "^7.1.9",
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "@types/babel__core": {
          "optional": true
        },
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-node-resolve": {
      "version": "16.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rollup/pluginutils": "^5.0.1",
        "@types/resolve": "1.20.2",
        "deepmerge": "^4.2.2",
        "is-module": "^1.0.0",
        "resolve": "^1.22.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^2.78.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-replace": {
      "version": "6.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rollup/pluginutils": "^5.0.1",
        "magic-string": "^0.30.3"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-replace/node_modules/magic-string": {
      "version": "0.30.21",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/@rollup/plugin-terser": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "serialize-javascript": "^7.0.3",
        "smob": "^1.0.0",
        "terser": "^5.49.2"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "rollup": "^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.5.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.68.2",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.5",
        "jiti": "^2.7.0",
        "lightningcss": "1.33.0",
        "magic-string": "^1.1.0",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.5"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.5",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.5",
        "@tailwindcss/oxide-darwin-arm64": "4.3.5",
        "@tailwindcss/oxide-darwin-x64": "4.3.5",
        "@tailwindcss/oxide-freebsd-x64": "4.3.5",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.5",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.5",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.5",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.5",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.5",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.5",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.5",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.5"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.5",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.5",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.3",
        "@emnapi/runtime": "^1.11.3",
        "@emnapi/wasi-threads": "^1.2.3",
        "@napi-rs/wasm-runtime": "^1.2.2",
        "@tybys/wasm-util": "^0.10.3",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/core": {
      "version": "1.11.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/wasi-threads": {
      "version": "1.2.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.2",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.3",
        "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.3"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/tslib": {
      "version": "2.8.1",
      "inBundle": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.3.5",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.3.5",
        "@tailwindcss/oxide": "4.3.5",
        "tailwindcss": "4.3.5"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@trickfilm400/rollup-plugin-off-main-thread": {
      "version": "3.0.0-pre1",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "ejs": "^3.1.10",
        "json5": "^2.2.3",
        "magic-string": "^0.30.21",
        "string.prototype.matchall": "^4.0.12"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@trickfilm400/rollup-plugin-off-main-thread/node_modules/magic-string": {
      "version": "0.30.21",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.10",
      "license": "MIT"
    },
    "node_modules/@types/jszip": {
      "version": "3.4.0",
      "license": "MIT",
      "dependencies": {
        "jszip": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "22.20.5",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/resolve": {
      "version": "1.20.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/trusted-types": {
      "version": "2.0.7",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.29.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-rc.3",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.19.0",
      "devOptional": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "8.20.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/async": {
      "version": "3.2.6",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs2": {
      "version": "0.4.17",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-define-polyfill-provider": "^0.6.8",
        "semver": "^6.3.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs3": {
      "version": "0.14.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.6.8",
        "core-js-compat": "^3.48.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/babel-plugin-polyfill-regenerator": {
      "version": "0.6.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.6.8"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.35",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.12",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.5",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.33",
        "caniuse-lite": "^1.0.30001819",
        "electron-to-chromium": "^1.5.464",
        "node-releases": "^2.0.60",
        "update-browserslist-db": "^1.3.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001823",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/commander": {
      "version": "2.20.3",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/common-tags": {
      "version": "1.8.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/core-js-compat": {
      "version": "3.51.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.29.3"
      },
      "engines": {
        "node": ">=6.4.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-random-string": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deepmerge": {
      "version": "4.3.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ejs": {
      "version": "3.1.10",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "jake": "^10.8.5"
      },
      "bin": {
        "ejs": "bin/cli.js"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.478",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.26.1",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract-get": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "is-callable": "^1.2.7",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-abstract-get": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "is-callable": "^1.2.7",
        "is-date-object": "^1.1.0",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.12",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.12",
        "@esbuild/android-arm": "0.25.12",
        "@esbuild/android-arm64": "0.25.12",
        "@esbuild/android-x64": "0.25.12",
        "@esbuild/darwin-arm64": "0.25.12",
        "@esbuild/darwin-x64": "0.25.12",
        "@esbuild/freebsd-arm64": "0.25.12",
        "@esbuild/freebsd-x64": "0.25.12",
        "@esbuild/linux-arm": "0.25.12",
        "@esbuild/linux-arm64": "0.25.12",
        "@esbuild/linux-ia32": "0.25.12",
        "@esbuild/linux-loong64": "0.25.12",
        "@esbuild/linux-mips64el": "0.25.12",
        "@esbuild/linux-ppc64": "0.25.12",
        "@esbuild/linux-riscv64": "0.25.12",
        "@esbuild/linux-s390x": "0.25.12",
        "@esbuild/linux-x64": "0.25.12",
        "@esbuild/netbsd-arm64": "0.25.12",
        "@esbuild/netbsd-x64": "0.25.12",
        "@esbuild/openbsd-arm64": "0.25.12",
        "@esbuild/openbsd-x64": "0.25.12",
        "@esbuild/openharmony-arm64": "0.25.12",
        "@esbuild/sunos-x64": "0.25.12",
        "@esbuild/win32-arm64": "0.25.12",
        "@esbuild/win32-ia32": "0.25.12",
        "@esbuild/win32-x64": "0.25.12"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eta": {
      "version": "4.6.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/bgub/eta?sponsor=1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.1.9",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/filelist": {
      "version": "1.0.6",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "minimatch": "^5.0.1"
      }
    },
    "node_modules/filelist/node_modules/minimatch": {
      "version": "5.1.9",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/filelist/node_modules/minimatch/node_modules/brace-expansion": {
      "version": "2.1.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/filelist/node_modules/minimatch/node_modules/brace-expansion/node_modules/balanced-match": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fs-extra": {
      "version": "9.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2",
        "hasown": "^2.0.4",
        "is-callable": "^1.2.7",
        "is-document.all": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-own-enumerable-property-symbols": {
      "version": "3.0.2",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "11.1.0",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "foreground-child": "^3.3.1",
        "jackspeak": "^4.1.1",
        "minimatch": "^10.1.1",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^2.0.0"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "license": "ISC"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/idb": {
      "version": "7.1.1",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "license": "MIT"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.18.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-document.all": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-module": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-obj": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regexp": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "4.2.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^9.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jake": {
      "version": "10.9.4",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "async": "^3.2.6",
        "filelist": "^1.0.4",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "jake": "bin/cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonpointer": {
      "version": "5.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.2",
      "license": "(MIT OR GPL-3.0-or-later)",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/leven": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lodash.debounce": {
      "version": "4.0.8",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.70.0",
      "license": "ISC",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/magic-string": {
      "version": "1.4.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.6.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.6",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.63",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "dev": true,
      "license": "BlueOak-1.0.0"
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "license": "(MIT AND Zlib)"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "2.0.2",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "11.5.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.32",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.20",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/pretty-bytes": {
      "version": "6.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.3.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.1",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.1"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regenerate": {
      "version": "1.5.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/regenerate-unicode-properties": {
      "version": "10.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "regenerate": "^1.4.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexpu-core": {
      "version": "6.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "regenerate": "^1.5.0",
        "regenerate-unicode-properties": "^10.3.0",
        "regjsgen": "^0.8.0",
        "regjsparser": "^0.14.0",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.2.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regjsgen": {
      "version": "0.8.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/regjsparser": {
      "version": "0.14.1",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "jsesc": "~3.1.0"
      },
      "bin": {
        "regjsparser": "bin/parser"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.14",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.18.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/rollup": {
      "version": "4.68.2",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.10"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.68.2",
        "@rollup/rollup-android-arm64": "4.68.2",
        "@rollup/rollup-android-x64": "4.68.2",
        "@rollup/rollup-darwin-arm64": "4.68.2",
        "@rollup/rollup-darwin-x64": "4.68.2",
        "@rollup/rollup-freebsd-arm64": "4.68.2",
        "@rollup/rollup-freebsd-x64": "4.68.2",
        "@rollup/rollup-linux-arm-gnueabihf": "4.68.2",
        "@rollup/rollup-linux-arm-musleabihf": "4.68.2",
        "@rollup/rollup-linux-arm64-gnu": "4.68.2",
        "@rollup/rollup-linux-arm64-musl": "4.68.2",
        "@rollup/rollup-linux-loong64-gnu": "4.68.2",
        "@rollup/rollup-linux-loong64-musl": "4.68.2",
        "@rollup/rollup-linux-ppc64-gnu": "4.68.2",
        "@rollup/rollup-linux-ppc64-musl": "4.68.2",
        "@rollup/rollup-linux-riscv64-gnu": "4.68.2",
        "@rollup/rollup-linux-riscv64-musl": "4.68.2",
        "@rollup/rollup-linux-s390x-gnu": "4.68.2",
        "@rollup/rollup-linux-x64-gnu": "4.68.2",
        "@rollup/rollup-linux-x64-musl": "4.68.2",
        "@rollup/rollup-openbsd-x64": "4.68.2",
        "@rollup/rollup-openharmony-arm64": "4.68.2",
        "@rollup/rollup-win32-arm64-msvc": "4.68.2",
        "@rollup/rollup-win32-ia32-msvc": "4.68.2",
        "@rollup/rollup-win32-x64-gnu": "4.68.2",
        "@rollup/rollup-win32-x64-msvc": "4.68.2",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-array-concat/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "license": "MIT"
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.2",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "7.1.4",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/smob": {
      "version": "1.6.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.8.0",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "devOptional": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.4",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "has-property-descriptors": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/stringify-object": {
      "version": "3.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "get-own-enumerable-property-symbols": "^3.0.0",
        "is-obj": "^1.0.1",
        "is-regexp": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-comments": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.5",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/temp-dir": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tempy": {
      "version": "0.6.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-stream": "^2.0.0",
        "temp-dir": "^2.0.0",
        "type-fest": "^0.16.0",
        "unique-string": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/terser": {
      "version": "5.51.2",
      "devOptional": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.15.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/type-fest": {
      "version": "0.16.0",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "possible-typed-array-names": "^1.1.0",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/unicode-canonical-property-names-ecmascript": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-value-ecmascript": {
      "version": "2.2.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-property-aliases-ecmascript": {
      "version": "2.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unique-string": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "crypto-random-string": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/upath": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.4",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "6.4.6",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2",
        "postcss": "^8.5.3",
        "rollup": "^4.34.9",
        "tinyglobby": "^0.2.13"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "jiti": ">=1.21.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite-plugin-pwa": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.6",
        "pretty-bytes": "^6.1.1",
        "tinyglobby": "^0.2.10",
        "workbox-build": "^7.4.1",
        "workbox-window": "^7.4.1"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "@vite-pwa/assets-generator": "^1.0.0 || ^2.0.0",
        "vite": "^3.1.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "workbox-build": "^7.4.1",
        "workbox-window": "^7.4.1"
      },
      "peerDependenciesMeta": {
        "@vite-pwa/assets-generator": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.24",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/workbox-background-sync": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "idb": "^7.0.1",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-broadcast-update": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-build": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@apideck/better-ajv-errors": "^0.3.1",
        "@babel/core": "^7.24.4",
        "@babel/preset-env": "^7.11.0",
        "@babel/runtime": "^7.11.2",
        "@rollup/plugin-babel": "^6.1.0",
        "@rollup/plugin-node-resolve": "^16.0.3",
        "@rollup/plugin-replace": "^6.0.3",
        "@rollup/plugin-terser": "^1.0.0",
        "@trickfilm400/rollup-plugin-off-main-thread": "^3.0.0-pre1",
        "ajv": "^8.6.0",
        "common-tags": "^1.8.0",
        "eta": "^4.5.1",
        "fast-json-stable-stringify": "^2.1.0",
        "fs-extra": "^9.0.1",
        "glob": "^11.0.1",
        "pretty-bytes": "^5.3.0",
        "rollup": "^4.53.3",
        "source-map": "^0.8.0-beta.0",
        "stringify-object": "^3.3.0",
        "strip-comments": "^2.0.1",
        "tempy": "^0.6.0",
        "upath": "^1.2.0",
        "workbox-background-sync": "7.4.1",
        "workbox-broadcast-update": "7.4.1",
        "workbox-cacheable-response": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-expiration": "7.4.1",
        "workbox-google-analytics": "7.4.1",
        "workbox-navigation-preload": "7.4.1",
        "workbox-precaching": "7.4.1",
        "workbox-range-requests": "7.4.1",
        "workbox-recipes": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1",
        "workbox-streams": "7.4.1",
        "workbox-sw": "7.4.1",
        "workbox-window": "7.4.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/workbox-build/node_modules/pretty-bytes": {
      "version": "5.6.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/workbox-cacheable-response": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-core": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/workbox-expiration": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "idb": "^7.0.1",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-google-analytics": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-background-sync": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-navigation-preload": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-precaching": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-range-requests": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-recipes": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-cacheable-response": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-expiration": "7.4.1",
        "workbox-precaching": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-routing": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-strategies": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-streams": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1"
      }
    },
    "node_modules/workbox-sw": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/workbox-window": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/trusted-types": "^2.0.2",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "dev": true,
      "license": "ISC"
    }
  }
}
`,G1=`{
  "name": "copy3-of-calculadora-de-doses-de-emergência",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "rm -f public/calculadora-site-pronto.zip && vite build && rm -rf docs && cp -r dist docs && node scripts/build-zip.mjs",
    "preview": "vite preview",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.5",
    "@types/jszip": "^3.4.0",
    "jszip": "^3.10.2",
    "lucide-react": "^1.70.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.3.5"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0",
    "vite-plugin-pwa": "^2.0.0"
  }
}
`,Z1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="cross" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Outer Rounded Rectangle / App Icon Base -->
  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <rect x="16" y="16" width="480" height="480" rx="96" fill="none" stroke="#334155" stroke-width="4" opacity="0.6" />

  <!-- Soft glow circle -->
  <circle cx="256" cy="256" r="180" fill="#0891b2" opacity="0.15" />

  <!-- Medical Cross with Rounded Edges -->
  <g filter="url(#glow)">
    <!-- Vertical Bar -->
    <rect x="216" y="128" width="80" height="256" rx="28" fill="url(#cross)" />
    <!-- Horizontal Bar -->
    <rect x="128" y="216" width="256" height="80" rx="28" fill="url(#cross)" />
  </g>

  <!-- Central Pulse / Vital ECG Line in Emerald -->
  <path d="M160 256 H210 L230 216 L256 296 L282 226 L302 256 H352" 
        fill="none" 
        stroke="#10b981" 
        stroke-width="12" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>
`,Y1=`import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';

const distDir = path.resolve(process.cwd(), 'dist');
const publicZipPath = path.resolve(process.cwd(), 'public', 'calculadora-site-pronto.zip');
const docsZipPath = path.resolve(process.cwd(), 'docs', 'calculadora-site-pronto.zip');

function addDirToZip(zip, dirPath, baseDir) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\\\/g, '/');
    if (entry.isDirectory()) {
      addDirToZip(zip, fullPath, baseDir);
    } else if (entry.isFile() && !entry.name.endsWith('.zip')) {
      zip.file(relPath, fs.readFileSync(fullPath));
    }
  }
}

async function main() {
  if (!fs.existsSync(distDir)) {
    throw new Error('dist directory not found');
  }

  const zip = new JSZip();
  addDirToZip(zip, distDir, distDir);

  zip.file(
    'LEIA-ME.txt',
    'CALCULADORA DE DOSES DE EMERGÊNCIA - PACOTE DO SITE PRONTO\\n\\n' +
      'Esta pasta contém APENAS os arquivos finais necessários para rodar na web.\\n' +
      'Você NÃO precisa de Node.js, nem de terminal, nem de compilar nada.\\n\\n' +
      'Arquivos incluídos:\\n' +
      '- index.html (arquivo principal do site)\\n' +
      '- manifest.webmanifest (PWA para celular)\\n' +
      '- sw.js (Service Worker para funcionar offline)\\n' +
      '- assets/ (estilos e cálculos empacotados)\\n' +
      '- ícones (icon.svg, pwa-192x192.png, pwa-512x512.png...)\\n\\n' +
      'COMO USAR:\\n' +
      '1. Arraste todos estes arquivos diretamente para a RAIZ do repositório.\\n' +
      '2. Em Settings > Pages, mantenha "Deploy from a branch", branch "main", pasta "/ (root)".\\n' +
      '3. Salve e o site abrirá imediatamente!\\n'
  );

  const buffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  fs.mkdirSync(path.dirname(publicZipPath), { recursive: true });
  fs.writeFileSync(publicZipPath, buffer);

  if (fs.existsSync(path.dirname(docsZipPath))) {
    fs.writeFileSync(docsZipPath, buffer);
  }

  console.log(\`Generated standalone site ZIP (\${(buffer.length / 1024).toFixed(1)} KB)\`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
`,Q1=`{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "types": [
      "node",
      "vite/client",
      "vite-plugin-pwa/client"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}`,X1=`export type Unit = 'mg/kg' | 'mcg/kg' | 'mcg/kg/min' | 'mg/kg/h' | 'U/min';
export type CalculationType = 'bolus' | 'infusion';

export interface AmpulePresentation {
  label: string;
  concentrationMg: number;
  volumeMl: number;
}

export interface DilutionInfo {
  name: string;
  description: string;
  totalDrugMg: number;
  finalVolumeMl: number;
  finalConcentrationMgMl: number;
  useCase: string;
}

export interface CalculationParams {
  weight: number;
  ampuleConcentrationMg: number;
  ampuleVolumeMl: number;
  dose: number;
  solutionVolumeMl?: number;
  maxTotalDoseMg?: number;
}

export interface CalculationResult {
  bolusMl?: string;
  infusionMlH?: string;
  infusionMcgKgMin?: string;
  finalConcentrationMgMl?: string;
  formula: string;
  maxDoseWarning?: string;
  cappedResultMl?: string;
}

export interface Drug {
  name: string;
  description: string;
  calculationType: CalculationType;
  unit: Unit;
  defaultDose: number;
  doseRange: string;
  notes: string;
  presentations?: AmpulePresentation[];
  dilutions?: DilutionInfo[];
  maxTotalDoseMg?: number;
  calculate: (params: CalculationParams) => CalculationResult;
}

export interface DrugCategory {
  name: string;
  drugs: Drug[];
}
`,K1=`import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        tailwindcss(),
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
          manifest: {
            id: './',
            name: 'Calculadora de Doses de Emergência',
            short_name: 'DosesEmerg',
            description: 'Calculadora clínica de doses e infusões de emergência, 100% autônoma e offline.',
            theme_color: '#0f172a',
            background_color: '#0f172a',
            display: 'standalone',
            start_url: './',
            scope: './',
            icons: [
              {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'pwa-maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },

          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          },
          devOptions: {
            enabled: true,
            type: 'module',
          },
        }),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});


`;function ao(k){throw new Error('Could not dynamically require "'+k+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vu={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var N0;function J1(){return N0||(N0=1,(function(k,ee){(function(_){k.exports=_()})(function(){return(function _(h,C,p){function b(A,N){if(!C[A]){if(!h[A]){var c=typeof ao=="function"&&ao;if(!N&&c)return c(A,!0);if(d)return d(A,!0);var S=new Error("Cannot find module '"+A+"'");throw S.code="MODULE_NOT_FOUND",S}var m=C[A]={exports:{}};h[A][0].call(m.exports,function(T){var f=h[A][1][T];return b(f||T)},m,m.exports,_,h,C,p)}return C[A].exports}for(var d=typeof ao=="function"&&ao,v=0;v<p.length;v++)b(p[v]);return b})({1:[function(_,h,C){var p=_("./utils"),b=_("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";C.encode=function(v){for(var A,N,c,S,m,T,f,g=[],y=0,M=v.length,R=M,L=p.getTypeOf(v)!=="string";y<v.length;)R=M-y,c=L?(A=v[y++],N=y<M?v[y++]:0,y<M?v[y++]:0):(A=v.charCodeAt(y++),N=y<M?v.charCodeAt(y++):0,y<M?v.charCodeAt(y++):0),S=A>>2,m=(3&A)<<4|N>>4,T=1<R?(15&N)<<2|c>>6:64,f=2<R?63&c:64,g.push(d.charAt(S)+d.charAt(m)+d.charAt(T)+d.charAt(f));return g.join("")},C.decode=function(v){var A,N,c,S,m,T,f=0,g=0,y="data:";if(v.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var M,R=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===d.charAt(64)&&R--,v.charAt(v.length-2)===d.charAt(64)&&R--,R%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=b.uint8array?new Uint8Array(0|R):new Array(0|R);f<v.length;)A=d.indexOf(v.charAt(f++))<<2|(S=d.indexOf(v.charAt(f++)))>>4,N=(15&S)<<4|(m=d.indexOf(v.charAt(f++)))>>2,c=(3&m)<<6|(T=d.indexOf(v.charAt(f++))),M[g++]=A,m!==64&&(M[g++]=N),T!==64&&(M[g++]=c);return M}},{"./support":30,"./utils":32}],2:[function(_,h,C){var p=_("./external"),b=_("./stream/DataWorker"),d=_("./stream/Crc32Probe"),v=_("./stream/DataLengthProbe");function A(N,c,S,m,T){this.compressedSize=N,this.uncompressedSize=c,this.crc32=S,this.compression=m,this.compressedContent=T}A.prototype={getContentWorker:function(){var N=new b(p.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),c=this;return N.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),N},getCompressedWorker:function(){return new b(p.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},A.createWorkerFrom=function(N,c,S){return N.pipe(new d).pipe(new v("uncompressedSize")).pipe(c.compressWorker(S)).pipe(new v("compressedSize")).withStreamInfo("compression",c)},h.exports=A},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(_,h,C){var p=_("./stream/GenericWorker");C.STORE={magic:"\0\0",compressWorker:function(){return new p("STORE compression")},uncompressWorker:function(){return new p("STORE decompression")}},C.DEFLATE=_("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(_,h,C){var p=_("./utils"),b=(function(){for(var d,v=[],A=0;A<256;A++){d=A;for(var N=0;N<8;N++)d=1&d?3988292384^d>>>1:d>>>1;v[A]=d}return v})();h.exports=function(d,v){return d!==void 0&&d.length?p.getTypeOf(d)!=="string"?(function(A,N,c,S){var m=b,T=S+c;A^=-1;for(var f=S;f<T;f++)A=A>>>8^m[255&(A^N[f])];return-1^A})(0|v,d,d.length,0):(function(A,N,c,S){var m=b,T=S+c;A^=-1;for(var f=S;f<T;f++)A=A>>>8^m[255&(A^N.charCodeAt(f))];return-1^A})(0|v,d,d.length,0):0}},{"./utils":32}],5:[function(_,h,C){C.base64=!1,C.binary=!1,C.dir=!1,C.createFolders=!0,C.date=null,C.compression=null,C.compressionOptions=null,C.comment=null,C.unixPermissions=null,C.dosPermissions=null},{}],6:[function(_,h,C){var p=null;p=typeof Promise<"u"?Promise:_("lie"),h.exports={Promise:p}},{lie:37}],7:[function(_,h,C){var p=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",b=_("pako"),d=_("./utils"),v=_("./stream/GenericWorker"),A=p?"uint8array":"array";function N(c,S){v.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=S,this.meta={}}C.magic="\b\0",d.inherits(N,v),N.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(A,c.data),!1)},N.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},N.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},N.prototype._createPako=function(){this._pako=new b[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(S){c.push({data:S,meta:c.meta})}},C.compressWorker=function(c){return new N("Deflate",c)},C.uncompressWorker=function(){return new N("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(_,h,C){function p(m,T){var f,g="";for(f=0;f<T;f++)g+=String.fromCharCode(255&m),m>>>=8;return g}function b(m,T,f,g,y,M){var R,L,H=m.file,P=m.compression,Z=M!==A.utf8encode,ne=d.transformTo("string",M(H.name)),F=d.transformTo("string",A.utf8encode(H.name)),de=H.comment,we=d.transformTo("string",M(de)),j=d.transformTo("string",A.utf8encode(de)),te=F.length!==H.name.length,u=j.length!==de.length,ae="",oe="",$="",pe=H.dir,re=H.date,be={crc32:0,compressedSize:0,uncompressedSize:0};T&&!f||(be.crc32=m.crc32,be.compressedSize=m.compressedSize,be.uncompressedSize=m.uncompressedSize);var J=0;T&&(J|=8),Z||!te&&!u||(J|=2048);var K=0,Ce=0;pe&&(K|=16),y==="UNIX"?(Ce=798,K|=(function(V,ve){var xe=V;return V||(xe=ve?16893:33204),(65535&xe)<<16})(H.unixPermissions,pe)):(Ce=20,K|=(function(V){return 63&(V||0)})(H.dosPermissions)),R=re.getUTCHours(),R<<=6,R|=re.getUTCMinutes(),R<<=5,R|=re.getUTCSeconds()/2,L=re.getUTCFullYear()-1980,L<<=4,L|=re.getUTCMonth()+1,L<<=5,L|=re.getUTCDate(),te&&(oe=p(1,1)+p(N(ne),4)+F,ae+="up"+p(oe.length,2)+oe),u&&($=p(1,1)+p(N(we),4)+j,ae+="uc"+p($.length,2)+$);var D="";return D+=`
\0`,D+=p(J,2),D+=P.magic,D+=p(R,2),D+=p(L,2),D+=p(be.crc32,4),D+=p(be.compressedSize,4),D+=p(be.uncompressedSize,4),D+=p(ne.length,2),D+=p(ae.length,2),{fileRecord:c.LOCAL_FILE_HEADER+D+ne+ae,dirRecord:c.CENTRAL_FILE_HEADER+p(Ce,2)+D+p(we.length,2)+"\0\0\0\0"+p(K,4)+p(g,4)+ne+ae+we}}var d=_("../utils"),v=_("../stream/GenericWorker"),A=_("../utf8"),N=_("../crc32"),c=_("../signature");function S(m,T,f,g){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=T,this.zipPlatform=f,this.encodeFileName=g,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(S,v),S.prototype.push=function(m){var T=m.meta.percent||0,f=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,v.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:f?(T+100*(f-g-1))/f:100}}))},S.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var T=this.streamFiles&&!m.file.dir;if(T){var f=b(m,T,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},S.prototype.closedSource=function(m){this.accumulate=!1;var T=this.streamFiles&&!m.file.dir,f=b(m,T,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),T)this.push({data:(function(g){return c.DATA_DESCRIPTOR+p(g.crc32,4)+p(g.compressedSize,4)+p(g.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},S.prototype.flush=function(){for(var m=this.bytesWritten,T=0;T<this.dirRecords.length;T++)this.push({data:this.dirRecords[T],meta:{percent:100}});var f=this.bytesWritten-m,g=(function(y,M,R,L,H){var P=d.transformTo("string",H(L));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+p(y,2)+p(y,2)+p(M,4)+p(R,4)+p(P.length,2)+P})(this.dirRecords.length,f,m,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},S.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},S.prototype.registerPrevious=function(m){this._sources.push(m);var T=this;return m.on("data",function(f){T.processChunk(f)}),m.on("end",function(){T.closedSource(T.previous.streamInfo),T._sources.length?T.prepareNextSource():T.end()}),m.on("error",function(f){T.error(f)}),this},S.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},S.prototype.error=function(m){var T=this._sources;if(!v.prototype.error.call(this,m))return!1;for(var f=0;f<T.length;f++)try{T[f].error(m)}catch{}return!0},S.prototype.lock=function(){v.prototype.lock.call(this);for(var m=this._sources,T=0;T<m.length;T++)m[T].lock()},h.exports=S},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(_,h,C){var p=_("../compressions"),b=_("./ZipFileWorker");C.generateWorker=function(d,v,A){var N=new b(v.streamFiles,A,v.platform,v.encodeFileName),c=0;try{d.forEach(function(S,m){c++;var T=(function(M,R){var L=M||R,H=p[L];if(!H)throw new Error(L+" is not a valid compression method !");return H})(m.options.compression,v.compression),f=m.options.compressionOptions||v.compressionOptions||{},g=m.dir,y=m.date;m._compressWorker(T,f).withStreamInfo("file",{name:S,dir:g,date:y,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(N)}),N.entriesCount=c}catch(S){N.error(S)}return N}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(_,h,C){function p(){if(!(this instanceof p))return new p;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var b=new p;for(var d in this)typeof this[d]!="function"&&(b[d]=this[d]);return b}}(p.prototype=_("./object")).loadAsync=_("./load"),p.support=_("./support"),p.defaults=_("./defaults"),p.version="3.10.2",p.loadAsync=function(b,d){return new p().loadAsync(b,d)},p.external=_("./external"),h.exports=p},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(_,h,C){var p=_("./utils"),b=_("./external"),d=_("./utf8"),v=_("./zipEntries"),A=_("./stream/Crc32Probe"),N=_("./nodejsUtils");function c(S){return new b.Promise(function(m,T){var f=S.decompressed.getContentWorker().pipe(new A);f.on("error",function(g){T(g)}).on("end",function(){f.streamInfo.crc32!==S.decompressed.crc32?T(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}h.exports=function(S,m){var T=this;return m=p.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),N.isNode&&N.isStream(S)?b.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):p.prepareContent("the loaded zip file",S,!0,m.optimizedBinaryString,m.base64).then(function(f){var g=new v(m);return g.load(f),g}).then(function(f){var g=[b.Promise.resolve(f)],y=f.files;if(m.checkCRC32)for(var M=0;M<y.length;M++)g.push(c(y[M]));return b.Promise.all(g)}).then(function(f){for(var g=f.shift(),y=g.files,M=0;M<y.length;M++){var R=y[M],L=R.fileNameStr,H=p.resolve(R.fileNameStr);T.file(H,R.decompressed,{binary:!0,optimizedBinaryString:!0,date:R.date,dir:R.dir,comment:R.fileCommentStr.length?R.fileCommentStr:null,unixPermissions:R.unixPermissions,dosPermissions:R.dosPermissions,createFolders:m.createFolders}),R.dir||(T.file(H).unsafeOriginalName=L)}return g.zipComment.length&&(T.comment=g.zipComment),T})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(_,h,C){var p=_("../utils"),b=_("../stream/GenericWorker");function d(v,A){b.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(A)}p.inherits(d,b),d.prototype._bindStream=function(v){var A=this;(this._stream=v).pause(),v.on("data",function(N){A.push({data:N,meta:{percent:0}})}).on("error",function(N){A.isPaused?this.generatedError=N:A.error(N)}).on("end",function(){A.isPaused?A._upstreamEnded=!0:A.end()})},d.prototype.pause=function(){return!!b.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!b.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},h.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(_,h,C){var p=_("readable-stream").Readable;function b(d,v,A){p.call(this,v),this._helper=d;var N=this;d.on("data",function(c,S){N.push(c)||N._helper.pause(),A&&A(S)}).on("error",function(c){N.emit("error",c)}).on("end",function(){N.push(null)})}_("../utils").inherits(b,p),b.prototype._read=function(){this._helper.resume()},h.exports=b},{"../utils":32,"readable-stream":16}],14:[function(_,h,C){h.exports={isNode:typeof Buffer<"u",newBufferFrom:function(p,b){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(p,b);if(typeof p=="number")throw new Error('The "data" argument must not be a number');return new Buffer(p,b)},allocBuffer:function(p){if(Buffer.alloc)return Buffer.alloc(p);var b=new Buffer(p);return b.fill(0),b},isBuffer:function(p){return Buffer.isBuffer(p)},isStream:function(p){return p&&typeof p.on=="function"&&typeof p.pause=="function"&&typeof p.resume=="function"}}},{}],15:[function(_,h,C){function p(H,P,Z){var ne,F=d.getTypeOf(P),de=d.extend(Z||{},N);de.date=de.date||new Date,de.compression!==null&&(de.compression=de.compression.toUpperCase()),typeof de.unixPermissions=="string"&&(de.unixPermissions=parseInt(de.unixPermissions,8)),de.unixPermissions&&16384&de.unixPermissions&&(de.dir=!0),de.dosPermissions&&16&de.dosPermissions&&(de.dir=!0),de.dir&&(H=y(H)),de.createFolders&&(ne=g(H))&&M.call(this,ne,!0);var we=F==="string"&&de.binary===!1&&de.base64===!1;Z&&Z.binary!==void 0||(de.binary=!we),(P instanceof c&&P.uncompressedSize===0||de.dir||!P||P.length===0)&&(de.base64=!1,de.binary=!0,P="",de.compression="STORE",F="string");var j=null;j=P instanceof c||P instanceof v?P:T.isNode&&T.isStream(P)?new f(H,P):d.prepareContent(H,P,de.binary,de.optimizedBinaryString,de.base64);var te=new S(H,j,de);this.files[H]=te}var b=_("./utf8"),d=_("./utils"),v=_("./stream/GenericWorker"),A=_("./stream/StreamHelper"),N=_("./defaults"),c=_("./compressedObject"),S=_("./zipObject"),m=_("./generate"),T=_("./nodejsUtils"),f=_("./nodejs/NodejsStreamInputAdapter"),g=function(H){H.slice(-1)==="/"&&(H=H.substring(0,H.length-1));var P=H.lastIndexOf("/");return 0<P?H.substring(0,P):""},y=function(H){return H.slice(-1)!=="/"&&(H+="/"),H},M=function(H,P){return P=P!==void 0?P:N.createFolders,H=y(H),this.files[H]||p.call(this,H,null,{dir:!0,createFolders:P}),this.files[H]};function R(H){return Object.prototype.toString.call(H)==="[object RegExp]"}var L={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(H){var P,Z,ne;for(P in this.files)ne=this.files[P],(Z=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&H(Z,ne)},filter:function(H){var P=[];return this.forEach(function(Z,ne){H(Z,ne)&&P.push(ne)}),P},file:function(H,P,Z){if(arguments.length!==1)return H=this.root+H,p.call(this,H,P,Z),this;if(R(H)){var ne=H;return this.filter(function(de,we){return!we.dir&&ne.test(de)})}var F=this.files[this.root+H];return F&&!F.dir?F:null},folder:function(H){if(!H)return this;if(R(H))return this.filter(function(F,de){return de.dir&&H.test(F)});var P=this.root+H,Z=M.call(this,P),ne=this.clone();return ne.root=Z.name,ne},remove:function(H){H=this.root+H;var P=this.files[H];if(P||(H.slice(-1)!=="/"&&(H+="/"),P=this.files[H]),P&&!P.dir)delete this.files[H];else for(var Z=this.filter(function(F,de){return de.name.slice(0,H.length)===H}),ne=0;ne<Z.length;ne++)delete this.files[Z[ne].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(H){var P,Z={};try{if((Z=d.extend(H||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:b.utf8encode})).type=Z.type.toLowerCase(),Z.compression=Z.compression.toUpperCase(),Z.type==="binarystring"&&(Z.type="string"),!Z.type)throw new Error("No output type specified.");d.checkSupport(Z.type),Z.platform!=="darwin"&&Z.platform!=="freebsd"&&Z.platform!=="linux"&&Z.platform!=="sunos"||(Z.platform="UNIX"),Z.platform==="win32"&&(Z.platform="DOS");var ne=Z.comment||this.comment||"";P=m.generateWorker(this,Z,ne)}catch(F){(P=new v("error")).error(F)}return new A(P,Z.type||"string",Z.mimeType)},generateAsync:function(H,P){return this.generateInternalStream(H).accumulate(P)},generateNodeStream:function(H,P){return(H=H||{}).type||(H.type="nodebuffer"),this.generateInternalStream(H).toNodejsStream(P)}};h.exports=L},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(_,h,C){h.exports=_("stream")},{stream:void 0}],17:[function(_,h,C){var p=_("./DataReader");function b(d){p.call(this,d);for(var v=0;v<this.data.length;v++)d[v]=255&d[v]}_("../utils").inherits(b,p),b.prototype.byteAt=function(d){return this.data[this.zero+d]},b.prototype.lastIndexOfSignature=function(d){for(var v=d.charCodeAt(0),A=d.charCodeAt(1),N=d.charCodeAt(2),c=d.charCodeAt(3),S=this.length-4;0<=S;--S)if(this.data[S]===v&&this.data[S+1]===A&&this.data[S+2]===N&&this.data[S+3]===c)return S-this.zero;return-1},b.prototype.readAndCheckSignature=function(d){var v=d.charCodeAt(0),A=d.charCodeAt(1),N=d.charCodeAt(2),c=d.charCodeAt(3),S=this.readData(4);return v===S[0]&&A===S[1]&&N===S[2]&&c===S[3]},b.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},h.exports=b},{"../utils":32,"./DataReader":18}],18:[function(_,h,C){var p=_("../utils");function b(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}b.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(){},readInt:function(d){var v,A=0;for(this.checkOffset(d),v=this.index+d-1;v>=this.index;v--)A=(A<<8)+this.byteAt(v);return this.index+=d,A},readString:function(d){return p.transformTo("string",this.readData(d))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},h.exports=b},{"../utils":32}],19:[function(_,h,C){var p=_("./Uint8ArrayReader");function b(d){p.call(this,d)}_("../utils").inherits(b,p),b.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},h.exports=b},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(_,h,C){var p=_("./DataReader");function b(d){p.call(this,d)}_("../utils").inherits(b,p),b.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},b.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},b.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},b.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},h.exports=b},{"../utils":32,"./DataReader":18}],21:[function(_,h,C){var p=_("./ArrayReader");function b(d){p.call(this,d)}_("../utils").inherits(b,p),b.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},h.exports=b},{"../utils":32,"./ArrayReader":17}],22:[function(_,h,C){var p=_("../utils"),b=_("../support"),d=_("./ArrayReader"),v=_("./StringReader"),A=_("./NodeBufferReader"),N=_("./Uint8ArrayReader");h.exports=function(c){var S=p.getTypeOf(c);return p.checkSupport(S),S!=="string"||b.uint8array?S==="nodebuffer"?new A(c):b.uint8array?new N(p.transformTo("uint8array",c)):new d(p.transformTo("array",c)):new v(c)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(_,h,C){C.LOCAL_FILE_HEADER="PK",C.CENTRAL_FILE_HEADER="PK",C.CENTRAL_DIRECTORY_END="PK",C.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",C.ZIP64_CENTRAL_DIRECTORY_END="PK",C.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(_,h,C){var p=_("./GenericWorker"),b=_("../utils");function d(v){p.call(this,"ConvertWorker to "+v),this.destType=v}b.inherits(d,p),d.prototype.processChunk=function(v){this.push({data:b.transformTo(this.destType,v.data),meta:v.meta})},h.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(_,h,C){var p=_("./GenericWorker"),b=_("../crc32");function d(){p.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}_("../utils").inherits(d,p),d.prototype.processChunk=function(v){this.streamInfo.crc32=b(v.data,this.streamInfo.crc32||0),this.push(v)},h.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(_,h,C){var p=_("../utils"),b=_("./GenericWorker");function d(v){b.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}p.inherits(d,b),d.prototype.processChunk=function(v){if(v){var A=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=A+v.data.length}b.prototype.processChunk.call(this,v)},h.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(_,h,C){var p=_("../utils"),b=_("./GenericWorker");function d(v){b.call(this,"DataWorker");var A=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(N){A.dataIsReady=!0,A.data=N,A.max=N&&N.length||0,A.type=p.getTypeOf(N),A.isPaused||A._tickAndRepeat()},function(N){A.error(N)})}p.inherits(d,b),d.prototype.cleanUp=function(){b.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!b.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,p.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(p.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,A=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,A);break;case"uint8array":v=this.data.subarray(this.index,A);break;case"array":case"nodebuffer":v=this.data.slice(this.index,A)}return this.index=A,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},h.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(_,h,C){function p(b){this.name=b||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}p.prototype={push:function(b){this.emit("data",b)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(b){this.emit("error",b)}return!0},error:function(b){return!this.isFinished&&(this.isPaused?this.generatedError=b:(this.isFinished=!0,this.emit("error",b),this.previous&&this.previous.error(b),this.cleanUp()),!0)},on:function(b,d){return this._listeners[b].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(b,d){if(this._listeners[b])for(var v=0;v<this._listeners[b].length;v++)this._listeners[b][v].call(this,d)},pipe:function(b){return b.registerPrevious(this)},registerPrevious:function(b){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=b.streamInfo,this.mergeStreamInfo(),this.previous=b;var d=this;return b.on("data",function(v){d.processChunk(v)}),b.on("end",function(){d.end()}),b.on("error",function(v){d.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var b=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),b=!0),this.previous&&this.previous.resume(),!b},flush:function(){},processChunk:function(b){this.push(b)},withStreamInfo:function(b,d){return this.extraStreamInfo[b]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var b in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,b)&&(this.streamInfo[b]=this.extraStreamInfo[b])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var b="Worker "+this.name;return this.previous?this.previous+" -> "+b:b}},h.exports=p},{}],29:[function(_,h,C){var p=_("../utils"),b=_("./ConvertWorker"),d=_("./GenericWorker"),v=_("../base64"),A=_("../support"),N=_("../external"),c=null;if(A.nodestream)try{c=_("../nodejs/NodejsStreamOutputAdapter")}catch{}function S(T,f){return new N.Promise(function(g,y){var M=[],R=T._internalType,L=T._outputType,H=T._mimeType;T.on("data",function(P,Z){M.push(P),f&&f(Z)}).on("error",function(P){M=[],y(P)}).on("end",function(){try{var P=(function(Z,ne,F){switch(Z){case"blob":return p.newBlob(p.transformTo("arraybuffer",ne),F);case"base64":return v.encode(ne);default:return p.transformTo(Z,ne)}})(L,(function(Z,ne){var F,de=0,we=null,j=0;for(F=0;F<ne.length;F++)j+=ne[F].length;switch(Z){case"string":return ne.join("");case"array":return Array.prototype.concat.apply([],ne);case"uint8array":for(we=new Uint8Array(j),F=0;F<ne.length;F++)we.set(ne[F],de),de+=ne[F].length;return we;case"nodebuffer":return Buffer.concat(ne);default:throw new Error("concat : unsupported type '"+Z+"'")}})(R,M),H);g(P)}catch(Z){y(Z)}M=[]}).resume()})}function m(T,f,g){var y=f;switch(f){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=f,this._mimeType=g,p.checkSupport(y),this._worker=T.pipe(new b(y)),T.lock()}catch(M){this._worker=new d("error"),this._worker.error(M)}}m.prototype={accumulate:function(T){return S(this,T)},on:function(T,f){var g=this;return T==="data"?this._worker.on(T,function(y){f.call(g,y.data,y.meta)}):this._worker.on(T,function(){p.delay(f,arguments,g)}),this},resume:function(){return p.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(T){if(p.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},T)}},h.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(_,h,C){if(C.base64=!0,C.array=!0,C.string=!0,C.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",C.nodebuffer=typeof Buffer<"u",C.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")C.blob=!1;else{var p=new ArrayBuffer(0);try{C.blob=new Blob([p],{type:"application/zip"}).size===0}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);b.append(p),C.blob=b.getBlob("application/zip").size===0}catch{C.blob=!1}}}try{C.nodestream=!!_("readable-stream").Readable}catch{C.nodestream=!1}},{"readable-stream":16}],31:[function(_,h,C){for(var p=_("./utils"),b=_("./support"),d=_("./nodejsUtils"),v=_("./stream/GenericWorker"),A=new Array(256),N=0;N<256;N++)A[N]=252<=N?6:248<=N?5:240<=N?4:224<=N?3:192<=N?2:1;A[254]=A[254]=1;function c(){v.call(this,"utf-8 decode"),this.leftOver=null}function S(){v.call(this,"utf-8 encode")}C.utf8encode=function(m){return b.nodebuffer?d.newBufferFrom(m,"utf-8"):(function(T){var f,g,y,M,R,L=T.length,H=0;for(M=0;M<L;M++)(64512&(g=T.charCodeAt(M)))==55296&&M+1<L&&(64512&(y=T.charCodeAt(M+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),M++),H+=g<128?1:g<2048?2:g<65536?3:4;for(f=b.uint8array?new Uint8Array(H):new Array(H),M=R=0;R<H;M++)(64512&(g=T.charCodeAt(M)))==55296&&M+1<L&&(64512&(y=T.charCodeAt(M+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),M++),g<128?f[R++]=g:(g<2048?f[R++]=192|g>>>6:(g<65536?f[R++]=224|g>>>12:(f[R++]=240|g>>>18,f[R++]=128|g>>>12&63),f[R++]=128|g>>>6&63),f[R++]=128|63&g);return f})(m)},C.utf8decode=function(m){return b.nodebuffer?p.transformTo("nodebuffer",m).toString("utf-8"):(function(T){var f,g,y,M,R=T.length,L=new Array(2*R);for(f=g=0;f<R;)if((y=T[f++])<128)L[g++]=y;else if(4<(M=A[y]))L[g++]=65533,f+=M-1;else{for(y&=M===2?31:M===3?15:7;1<M&&f<R;)y=y<<6|63&T[f++],M--;1<M?L[g++]=65533:y<65536?L[g++]=y:(y-=65536,L[g++]=55296|y>>10&1023,L[g++]=56320|1023&y)}return L.length!==g&&(L.subarray?L=L.subarray(0,g):L.length=g),p.applyFromCharCode(L)})(m=p.transformTo(b.uint8array?"uint8array":"array",m))},p.inherits(c,v),c.prototype.processChunk=function(m){var T=p.transformTo(b.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(b.uint8array){var f=T;(T=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),T.set(f,this.leftOver.length)}else T=this.leftOver.concat(T);this.leftOver=null}var g=(function(M,R){var L;for((R=R||M.length)>M.length&&(R=M.length),L=R-1;0<=L&&(192&M[L])==128;)L--;return L<0||L===0?R:L+A[M[L]]>R?L:R})(T),y=T;g!==T.length&&(b.uint8array?(y=T.subarray(0,g),this.leftOver=T.subarray(g,T.length)):(y=T.slice(0,g),this.leftOver=T.slice(g,T.length))),this.push({data:C.utf8decode(y),meta:m.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:C.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},C.Utf8DecodeWorker=c,p.inherits(S,v),S.prototype.processChunk=function(m){this.push({data:C.utf8encode(m.data),meta:m.meta})},C.Utf8EncodeWorker=S},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(_,h,C){var p=_("./support"),b=_("./base64"),d=_("./nodejsUtils"),v=_("./external");function A(f){return f}function N(f,g){for(var y=0;y<f.length;++y)g[y]=255&f.charCodeAt(y);return g}_("setimmediate"),C.newBlob=function(f,g){C.checkSupport("blob");try{return new Blob([f],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(f),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(f,g,y){var M=[],R=0,L=f.length;if(L<=y)return String.fromCharCode.apply(null,f);for(;R<L;)g==="array"||g==="nodebuffer"?M.push(String.fromCharCode.apply(null,f.slice(R,Math.min(R+y,L)))):M.push(String.fromCharCode.apply(null,f.subarray(R,Math.min(R+y,L)))),R+=y;return M.join("")},stringifyByChar:function(f){for(var g="",y=0;y<f.length;y++)g+=String.fromCharCode(f[y]);return g},applyCanBeUsed:{uint8array:(function(){try{return p.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return p.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function S(f){var g=65536,y=C.getTypeOf(f),M=!0;if(y==="uint8array"?M=c.applyCanBeUsed.uint8array:y==="nodebuffer"&&(M=c.applyCanBeUsed.nodebuffer),M)for(;1<g;)try{return c.stringifyByChunk(f,y,g)}catch{g=Math.floor(g/2)}return c.stringifyByChar(f)}function m(f,g){for(var y=0;y<f.length;y++)g[y]=f[y];return g}C.applyFromCharCode=S;var T={};T.string={string:A,array:function(f){return N(f,new Array(f.length))},arraybuffer:function(f){return T.string.uint8array(f).buffer},uint8array:function(f){return N(f,new Uint8Array(f.length))},nodebuffer:function(f){return N(f,d.allocBuffer(f.length))}},T.array={string:S,array:A,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return d.newBufferFrom(f)}},T.arraybuffer={string:function(f){return S(new Uint8Array(f))},array:function(f){return m(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:A,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return d.newBufferFrom(new Uint8Array(f))}},T.uint8array={string:S,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:A,nodebuffer:function(f){return d.newBufferFrom(f)}},T.nodebuffer={string:S,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return T.nodebuffer.uint8array(f).buffer},uint8array:function(f){return m(f,new Uint8Array(f.length))},nodebuffer:A},C.transformTo=function(f,g){if(g=g||"",!f)return g;C.checkSupport(f);var y=C.getTypeOf(g);return T[y][f](g)},C.resolve=function(f){for(var g=f.split("/"),y=[],M=0;M<g.length;M++){var R=g[M];R==="."||R===""&&M!==0&&M!==g.length-1||(R===".."?y.pop():y.push(R))}return y.join("/")},C.getTypeOf=function(f){if(typeof f=="string")return"string";var g=Object.prototype.toString.call(f);return g==="[object Array]"?"array":p.nodebuffer&&d.isBuffer(f)?"nodebuffer":p.uint8array&&g==="[object Uint8Array]"?"uint8array":p.arraybuffer&&g==="[object ArrayBuffer]"?"arraybuffer":void 0},C.checkSupport=function(f){if(!p[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},C.MAX_VALUE_16BITS=65535,C.MAX_VALUE_32BITS=-1,C.pretty=function(f){var g,y,M="";for(y=0;y<(f||"").length;y++)M+="\\x"+((g=f.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return M},C.delay=function(f,g,y){setImmediate(function(){f.apply(y||null,g||[])})},C.inherits=function(f,g){function y(){}y.prototype=g.prototype,f.prototype=new y},C.extend=function(){var f,g,y={};for(f=0;f<arguments.length;f++)for(g in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],g)&&y[g]===void 0&&(y[g]=arguments[f][g]);return y},C.prepareContent=function(f,g,y,M,R){return v.Promise.resolve(g).then(function(L){return p.blob&&(L instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(L))!==-1)?Blob.prototype.arrayBuffer!==void 0?L.arrayBuffer():typeof FileReader<"u"?new v.Promise(function(H,P){var Z=new FileReader;Z.onload=function(ne){H(ne.target.result)},Z.onerror=function(ne){P(ne.target.error)},Z.readAsArrayBuffer(L)}):v.Promise.reject(new Error(f+" is a Blob, but we have no way of reading it.")):L}).then(function(L){var H=C.getTypeOf(L);return H?(H==="arraybuffer"?L=C.transformTo("uint8array",L):H==="string"&&(R?L=b.decode(L):y&&M!==!0&&(L=(function(P){return N(P,p.uint8array?new Uint8Array(P.length):new Array(P.length))})(L))),L):v.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(_,h,C){var p=_("./reader/readerFor"),b=_("./utils"),d=_("./signature"),v=_("./zipEntry"),A=_("./support");function N(c){this.files=[],this.loadOptions=c}N.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var S=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+b.pretty(S)+", expected "+b.pretty(c)+")")}},isSignature:function(c,S){var m=this.reader.index;this.reader.setIndex(c);var T=this.reader.readString(4)===S;return this.reader.setIndex(m),T},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),S=A.uint8array?"uint8array":"array",m=b.transformTo(S,c);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c,S,m,T=this.zip64EndOfCentralSize-44;0<T;)c=this.reader.readInt(2),S=this.reader.readInt(4),m=this.reader.readData(S),this.zip64ExtensibleData[c]={id:c,length:S,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,S;for(c=0;c<this.files.length;c++)S=this.files[c],this.reader.setIndex(S.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),S.readLocalPart(this.reader),S.handleUTF8(),S.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(c=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(c<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(c);var S=c;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===b.MAX_VALUE_16BITS||this.diskWithCentralDirStart===b.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===b.MAX_VALUE_16BITS||this.centralDirRecords===b.MAX_VALUE_16BITS||this.centralDirSize===b.MAX_VALUE_32BITS||this.centralDirOffset===b.MAX_VALUE_32BITS){if(this.zip64=!0,(c=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var T=S-m;if(0<T)this.isSignature(S,d.CENTRAL_FILE_HEADER)||(this.reader.zero=T);else if(T<0)throw new Error("Corrupted zip: missing "+Math.abs(T)+" bytes.")},prepareReader:function(c){this.reader=p(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},h.exports=N},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(_,h,C){var p=_("./reader/readerFor"),b=_("./utils"),d=_("./compressedObject"),v=_("./crc32"),A=_("./utf8"),N=_("./compressions"),c=_("./support");function S(m,T){this.options=m,this.loadOptions=T}S.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var T,f;if(m.skip(22),this.fileNameLength=m.readInt(2),f=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((T=(function(g){for(var y in N)if(Object.prototype.hasOwnProperty.call(N,y)&&N[y].magic===g)return N[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+b.pretty(this.compressionMethod)+" unknown (inner file : "+b.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,T,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var T=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(T),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=p(this.extraFields[1].value);this.uncompressedSize===b.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===b.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===b.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===b.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var T,f,g,y=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<y;)T=m.readInt(2),f=m.readInt(2),g=m.readData(f),this.extraFields[T]={id:T,length:f,value:g};m.setIndex(y)},handleUTF8:function(){var m=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=A.utf8decode(this.fileName),this.fileCommentStr=A.utf8decode(this.fileComment);else{var T=this.findExtraFieldUnicodePath();if(T!==null)this.fileNameStr=T;else{var f=b.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=b.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var T=p(m.value);return T.readInt(1)!==1||v(this.fileName)!==T.readInt(4)?null:A.utf8decode(T.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var T=p(m.value);return T.readInt(1)!==1||v(this.fileComment)!==T.readInt(4)?null:A.utf8decode(T.readData(m.length-5))}return null}},h.exports=S},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(_,h,C){function p(T,f,g){this.name=T,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=f,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var b=_("./stream/StreamHelper"),d=_("./stream/DataWorker"),v=_("./utf8"),A=_("./compressedObject"),N=_("./stream/GenericWorker");p.prototype={internalStream:function(T){var f=null,g="string";try{if(!T)throw new Error("No output type specified.");var y=(g=T.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),f=this._decompressWorker();var M=!this._dataBinary;M&&!y&&(f=f.pipe(new v.Utf8EncodeWorker)),!M&&y&&(f=f.pipe(new v.Utf8DecodeWorker))}catch(R){(f=new N("error")).error(R)}return new b(f,g,"")},async:function(T,f){return this.internalStream(T).accumulate(f)},nodeStream:function(T,f){return this.internalStream(T||"nodebuffer").toNodejsStream(f)},_compressWorker:function(T,f){if(this._data instanceof A&&this._data.compression.magic===T.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new v.Utf8EncodeWorker)),A.createWorkerFrom(g,T,f)},_decompressWorker:function(){return this._data instanceof A?this._data.getContentWorker():this._data instanceof N?this._data:new d(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],S=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<c.length;m++)p.prototype[c[m]]=S;h.exports=p},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(_,h,C){(function(p){var b,d,v=p.MutationObserver||p.WebKitMutationObserver;if(v){var A=0,N=new v(T),c=p.document.createTextNode("");N.observe(c,{characterData:!0}),b=function(){c.data=A=++A%2}}else if(p.setImmediate||p.MessageChannel===void 0)b="document"in p&&"onreadystatechange"in p.document.createElement("script")?function(){var f=p.document.createElement("script");f.onreadystatechange=function(){T(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},p.document.documentElement.appendChild(f)}:function(){setTimeout(T,0)};else{var S=new p.MessageChannel;S.port1.onmessage=T,b=function(){S.port2.postMessage(0)}}var m=[];function T(){var f,g;d=!0;for(var y=m.length;y;){for(g=m,m=[],f=-1;++f<y;)g[f]();y=m.length}d=!1}h.exports=function(f){m.push(f)!==1||d||b()}}).call(this,typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(_,h,C){var p=_("immediate");function b(){}var d={},v=["REJECTED"],A=["FULFILLED"],N=["PENDING"];function c(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=N,this.queue=[],this.outcome=void 0,y!==b&&f(this,y)}function S(y,M,R){this.promise=y,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}function m(y,M,R){p(function(){var L;try{L=M(R)}catch(H){return d.reject(y,H)}L===y?d.reject(y,new TypeError("Cannot resolve promise with itself")):d.resolve(y,L)})}function T(y){var M=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof M=="function")return function(){M.apply(y,arguments)}}function f(y,M){var R=!1;function L(Z){R||(R=!0,d.reject(y,Z))}function H(Z){R||(R=!0,d.resolve(y,Z))}var P=g(function(){M(H,L)});P.status==="error"&&L(P.value)}function g(y,M){var R={};try{R.value=y(M),R.status="success"}catch(L){R.status="error",R.value=L}return R}(h.exports=c).prototype.finally=function(y){if(typeof y!="function")return this;var M=this.constructor;return this.then(function(R){return M.resolve(y()).then(function(){return R})},function(R){return M.resolve(y()).then(function(){throw R})})},c.prototype.catch=function(y){return this.then(null,y)},c.prototype.then=function(y,M){if(typeof y!="function"&&this.state===A||typeof M!="function"&&this.state===v)return this;var R=new this.constructor(b);return this.state!==N?m(R,this.state===A?y:M,this.outcome):this.queue.push(new S(R,y,M)),R},S.prototype.callFulfilled=function(y){d.resolve(this.promise,y)},S.prototype.otherCallFulfilled=function(y){m(this.promise,this.onFulfilled,y)},S.prototype.callRejected=function(y){d.reject(this.promise,y)},S.prototype.otherCallRejected=function(y){m(this.promise,this.onRejected,y)},d.resolve=function(y,M){var R=g(T,M);if(R.status==="error")return d.reject(y,R.value);var L=R.value;if(L)f(y,L);else{y.state=A,y.outcome=M;for(var H=-1,P=y.queue.length;++H<P;)y.queue[H].callFulfilled(M)}return y},d.reject=function(y,M){y.state=v,y.outcome=M;for(var R=-1,L=y.queue.length;++R<L;)y.queue[R].callRejected(M);return y},c.resolve=function(y){return y instanceof this?y:d.resolve(new this(b),y)},c.reject=function(y){var M=new this(b);return d.reject(M,y)},c.all=function(y){var M=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=y.length,L=!1;if(!R)return this.resolve([]);for(var H=new Array(R),P=0,Z=-1,ne=new this(b);++Z<R;)F(y[Z],Z);return ne;function F(de,we){M.resolve(de).then(function(j){H[we]=j,++P!==R||L||(L=!0,d.resolve(ne,H))},function(j){L||(L=!0,d.reject(ne,j))})}},c.race=function(y){var M=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=y.length,L=!1;if(!R)return this.resolve([]);for(var H=-1,P=new this(b);++H<R;)Z=y[H],M.resolve(Z).then(function(ne){L||(L=!0,d.resolve(P,ne))},function(ne){L||(L=!0,d.reject(P,ne))});var Z;return P}},{immediate:36}],38:[function(_,h,C){var p={};(0,_("./lib/utils/common").assign)(p,_("./lib/deflate"),_("./lib/inflate"),_("./lib/zlib/constants")),h.exports=p},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(_,h,C){var p=_("./zlib/deflate"),b=_("./utils/common"),d=_("./utils/strings"),v=_("./zlib/messages"),A=_("./zlib/zstream"),N=Object.prototype.toString,c=0,S=-1,m=0,T=8;function f(y){if(!(this instanceof f))return new f(y);this.options=b.assign({level:S,method:T,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},y||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new A,this.strm.avail_out=0;var R=p.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(R!==c)throw new Error(v[R]);if(M.header&&p.deflateSetHeader(this.strm,M.header),M.dictionary){var L;if(L=typeof M.dictionary=="string"?d.string2buf(M.dictionary):N.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(R=p.deflateSetDictionary(this.strm,L))!==c)throw new Error(v[R]);this._dict_set=!0}}function g(y,M){var R=new f(M);if(R.push(y,!0),R.err)throw R.msg||v[R.err];return R.result}f.prototype.push=function(y,M){var R,L,H=this.strm,P=this.options.chunkSize;if(this.ended)return!1;L=M===~~M?M:M===!0?4:0,typeof y=="string"?H.input=d.string2buf(y):N.call(y)==="[object ArrayBuffer]"?H.input=new Uint8Array(y):H.input=y,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new b.Buf8(P),H.next_out=0,H.avail_out=P),(R=p.deflate(H,L))!==1&&R!==c)return this.onEnd(R),!(this.ended=!0);H.avail_out!==0&&(H.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(b.shrinkBuf(H.output,H.next_out))):this.onData(b.shrinkBuf(H.output,H.next_out)))}while((0<H.avail_in||H.avail_out===0)&&R!==1);return L===4?(R=p.deflateEnd(this.strm),this.onEnd(R),this.ended=!0,R===c):L!==2||(this.onEnd(c),!(H.avail_out=0))},f.prototype.onData=function(y){this.chunks.push(y)},f.prototype.onEnd=function(y){y===c&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=b.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},C.Deflate=f,C.deflate=g,C.deflateRaw=function(y,M){return(M=M||{}).raw=!0,g(y,M)},C.gzip=function(y,M){return(M=M||{}).gzip=!0,g(y,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(_,h,C){var p=_("./zlib/inflate"),b=_("./utils/common"),d=_("./utils/strings"),v=_("./zlib/constants"),A=_("./zlib/messages"),N=_("./zlib/zstream"),c=_("./zlib/gzheader"),S=Object.prototype.toString;function m(f){if(!(this instanceof m))return new m(f);this.options=b.assign({chunkSize:16384,windowBits:0,to:""},f||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||f&&f.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new N,this.strm.avail_out=0;var y=p.inflateInit2(this.strm,g.windowBits);if(y!==v.Z_OK)throw new Error(A[y]);this.header=new c,p.inflateGetHeader(this.strm,this.header)}function T(f,g){var y=new m(g);if(y.push(f,!0),y.err)throw y.msg||A[y.err];return y.result}m.prototype.push=function(f,g){var y,M,R,L,H,P,Z=this.strm,ne=this.options.chunkSize,F=this.options.dictionary,de=!1;if(this.ended)return!1;M=g===~~g?g:g===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof f=="string"?Z.input=d.binstring2buf(f):S.call(f)==="[object ArrayBuffer]"?Z.input=new Uint8Array(f):Z.input=f,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new b.Buf8(ne),Z.next_out=0,Z.avail_out=ne),(y=p.inflate(Z,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&F&&(P=typeof F=="string"?d.string2buf(F):S.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,y=p.inflateSetDictionary(this.strm,P)),y===v.Z_BUF_ERROR&&de===!0&&(y=v.Z_OK,de=!1),y!==v.Z_STREAM_END&&y!==v.Z_OK)return this.onEnd(y),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&y!==v.Z_STREAM_END&&(Z.avail_in!==0||M!==v.Z_FINISH&&M!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(R=d.utf8border(Z.output,Z.next_out),L=Z.next_out-R,H=d.buf2string(Z.output,R),Z.next_out=L,Z.avail_out=ne-L,L&&b.arraySet(Z.output,Z.output,R,L,0),this.onData(H)):this.onData(b.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(de=!0)}while((0<Z.avail_in||Z.avail_out===0)&&y!==v.Z_STREAM_END);return y===v.Z_STREAM_END&&(M=v.Z_FINISH),M===v.Z_FINISH?(y=p.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===v.Z_OK):M!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(Z.avail_out=0))},m.prototype.onData=function(f){this.chunks.push(f)},m.prototype.onEnd=function(f){f===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=b.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},C.Inflate=m,C.inflate=T,C.inflateRaw=function(f,g){return(g=g||{}).raw=!0,T(f,g)},C.ungzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(_,h,C){var p=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";C.assign=function(v){for(var A=Array.prototype.slice.call(arguments,1);A.length;){var N=A.shift();if(N){if(typeof N!="object")throw new TypeError(N+"must be non-object");for(var c in N)N.hasOwnProperty(c)&&(v[c]=N[c])}}return v},C.shrinkBuf=function(v,A){return v.length===A?v:v.subarray?v.subarray(0,A):(v.length=A,v)};var b={arraySet:function(v,A,N,c,S){if(A.subarray&&v.subarray)v.set(A.subarray(N,N+c),S);else for(var m=0;m<c;m++)v[S+m]=A[N+m]},flattenChunks:function(v){var A,N,c,S,m,T;for(A=c=0,N=v.length;A<N;A++)c+=v[A].length;for(T=new Uint8Array(c),A=S=0,N=v.length;A<N;A++)m=v[A],T.set(m,S),S+=m.length;return T}},d={arraySet:function(v,A,N,c,S){for(var m=0;m<c;m++)v[S+m]=A[N+m]},flattenChunks:function(v){return[].concat.apply([],v)}};C.setTyped=function(v){v?(C.Buf8=Uint8Array,C.Buf16=Uint16Array,C.Buf32=Int32Array,C.assign(C,b)):(C.Buf8=Array,C.Buf16=Array,C.Buf32=Array,C.assign(C,d))},C.setTyped(p)},{}],42:[function(_,h,C){var p=_("./common"),b=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{b=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var v=new p.Buf8(256),A=0;A<256;A++)v[A]=252<=A?6:248<=A?5:240<=A?4:224<=A?3:192<=A?2:1;function N(c,S){if(S<65537&&(c.subarray&&d||!c.subarray&&b))return String.fromCharCode.apply(null,p.shrinkBuf(c,S));for(var m="",T=0;T<S;T++)m+=String.fromCharCode(c[T]);return m}v[254]=v[254]=1,C.string2buf=function(c){var S,m,T,f,g,y=c.length,M=0;for(f=0;f<y;f++)(64512&(m=c.charCodeAt(f)))==55296&&f+1<y&&(64512&(T=c.charCodeAt(f+1)))==56320&&(m=65536+(m-55296<<10)+(T-56320),f++),M+=m<128?1:m<2048?2:m<65536?3:4;for(S=new p.Buf8(M),f=g=0;g<M;f++)(64512&(m=c.charCodeAt(f)))==55296&&f+1<y&&(64512&(T=c.charCodeAt(f+1)))==56320&&(m=65536+(m-55296<<10)+(T-56320),f++),m<128?S[g++]=m:(m<2048?S[g++]=192|m>>>6:(m<65536?S[g++]=224|m>>>12:(S[g++]=240|m>>>18,S[g++]=128|m>>>12&63),S[g++]=128|m>>>6&63),S[g++]=128|63&m);return S},C.buf2binstring=function(c){return N(c,c.length)},C.binstring2buf=function(c){for(var S=new p.Buf8(c.length),m=0,T=S.length;m<T;m++)S[m]=c.charCodeAt(m);return S},C.buf2string=function(c,S){var m,T,f,g,y=S||c.length,M=new Array(2*y);for(m=T=0;m<y;)if((f=c[m++])<128)M[T++]=f;else if(4<(g=v[f]))M[T++]=65533,m+=g-1;else{for(f&=g===2?31:g===3?15:7;1<g&&m<y;)f=f<<6|63&c[m++],g--;1<g?M[T++]=65533:f<65536?M[T++]=f:(f-=65536,M[T++]=55296|f>>10&1023,M[T++]=56320|1023&f)}return N(M,T)},C.utf8border=function(c,S){var m;for((S=S||c.length)>c.length&&(S=c.length),m=S-1;0<=m&&(192&c[m])==128;)m--;return m<0||m===0?S:m+v[c[m]]>S?m:S}},{"./common":41}],43:[function(_,h,C){h.exports=function(p,b,d,v){for(var A=65535&p|0,N=p>>>16&65535|0,c=0;d!==0;){for(d-=c=2e3<d?2e3:d;N=N+(A=A+b[v++]|0)|0,--c;);A%=65521,N%=65521}return A|N<<16|0}},{}],44:[function(_,h,C){h.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(_,h,C){var p=(function(){for(var b,d=[],v=0;v<256;v++){b=v;for(var A=0;A<8;A++)b=1&b?3988292384^b>>>1:b>>>1;d[v]=b}return d})();h.exports=function(b,d,v,A){var N=p,c=A+v;b^=-1;for(var S=A;S<c;S++)b=b>>>8^N[255&(b^d[S])];return-1^b}},{}],46:[function(_,h,C){var p,b=_("../utils/common"),d=_("./trees"),v=_("./adler32"),A=_("./crc32"),N=_("./messages"),c=0,S=4,m=0,T=-2,f=-1,g=4,y=2,M=8,R=9,L=286,H=30,P=19,Z=2*L+1,ne=15,F=3,de=258,we=de+F+1,j=42,te=113,u=1,ae=2,oe=3,$=4;function pe(o,se){return o.msg=N[se],se}function re(o){return(o<<1)-(4<o?9:0)}function be(o){for(var se=o.length;0<=--se;)o[se]=0}function J(o){var se=o.state,W=se.pending;W>o.avail_out&&(W=o.avail_out),W!==0&&(b.arraySet(o.output,se.pending_buf,se.pending_out,W,o.next_out),o.next_out+=W,se.pending_out+=W,o.total_out+=W,o.avail_out-=W,se.pending-=W,se.pending===0&&(se.pending_out=0))}function K(o,se){d._tr_flush_block(o,0<=o.block_start?o.block_start:-1,o.strstart-o.block_start,se),o.block_start=o.strstart,J(o.strm)}function Ce(o,se){o.pending_buf[o.pending++]=se}function D(o,se){o.pending_buf[o.pending++]=se>>>8&255,o.pending_buf[o.pending++]=255&se}function V(o,se){var W,E,x=o.max_chain_length,B=o.strstart,ue=o.prev_length,ce=o.nice_match,Q=o.strstart>o.w_size-we?o.strstart-(o.w_size-we):0,fe=o.window,ye=o.w_mask,me=o.prev,De=o.strstart+de,Ye=fe[B+ue-1],Ue=fe[B+ue];o.prev_length>=o.good_match&&(x>>=2),ce>o.lookahead&&(ce=o.lookahead);do if(fe[(W=se)+ue]===Ue&&fe[W+ue-1]===Ye&&fe[W]===fe[B]&&fe[++W]===fe[B+1]){B+=2,W++;do;while(fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&fe[++B]===fe[++W]&&B<De);if(E=de-(De-B),B=De-de,ue<E){if(o.match_start=se,ce<=(ue=E))break;Ye=fe[B+ue-1],Ue=fe[B+ue]}}while((se=me[se&ye])>Q&&--x!=0);return ue<=o.lookahead?ue:o.lookahead}function ve(o){var se,W,E,x,B,ue,ce,Q,fe,ye,me=o.w_size;do{if(x=o.window_size-o.lookahead-o.strstart,o.strstart>=me+(me-we)){for(b.arraySet(o.window,o.window,me,me,0),o.match_start-=me,o.strstart-=me,o.block_start-=me,se=W=o.hash_size;E=o.head[--se],o.head[se]=me<=E?E-me:0,--W;);for(se=W=me;E=o.prev[--se],o.prev[se]=me<=E?E-me:0,--W;);x+=me}if(o.strm.avail_in===0)break;if(ue=o.strm,ce=o.window,Q=o.strstart+o.lookahead,fe=x,ye=void 0,ye=ue.avail_in,fe<ye&&(ye=fe),W=ye===0?0:(ue.avail_in-=ye,b.arraySet(ce,ue.input,ue.next_in,ye,Q),ue.state.wrap===1?ue.adler=v(ue.adler,ce,ye,Q):ue.state.wrap===2&&(ue.adler=A(ue.adler,ce,ye,Q)),ue.next_in+=ye,ue.total_in+=ye,ye),o.lookahead+=W,o.lookahead+o.insert>=F)for(B=o.strstart-o.insert,o.ins_h=o.window[B],o.ins_h=(o.ins_h<<o.hash_shift^o.window[B+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[B+F-1])&o.hash_mask,o.prev[B&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=B,B++,o.insert--,!(o.lookahead+o.insert<F)););}while(o.lookahead<we&&o.strm.avail_in!==0)}function xe(o,se){for(var W,E;;){if(o.lookahead<we){if(ve(o),o.lookahead<we&&se===c)return u;if(o.lookahead===0)break}if(W=0,o.lookahead>=F&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+F-1])&o.hash_mask,W=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),W!==0&&o.strstart-W<=o.w_size-we&&(o.match_length=V(o,W)),o.match_length>=F)if(E=d._tr_tally(o,o.strstart-o.match_start,o.match_length-F),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=F){for(o.match_length--;o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+F-1])&o.hash_mask,W=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart,--o.match_length!=0;);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else E=d._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(E&&(K(o,!1),o.strm.avail_out===0))return u}return o.insert=o.strstart<F-1?o.strstart:F-1,se===S?(K(o,!0),o.strm.avail_out===0?oe:$):o.last_lit&&(K(o,!1),o.strm.avail_out===0)?u:ae}function _e(o,se){for(var W,E,x;;){if(o.lookahead<we){if(ve(o),o.lookahead<we&&se===c)return u;if(o.lookahead===0)break}if(W=0,o.lookahead>=F&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+F-1])&o.hash_mask,W=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=F-1,W!==0&&o.prev_length<o.max_lazy_match&&o.strstart-W<=o.w_size-we&&(o.match_length=V(o,W),o.match_length<=5&&(o.strategy===1||o.match_length===F&&4096<o.strstart-o.match_start)&&(o.match_length=F-1)),o.prev_length>=F&&o.match_length<=o.prev_length){for(x=o.strstart+o.lookahead-F,E=d._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-F),o.lookahead-=o.prev_length-1,o.prev_length-=2;++o.strstart<=x&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+F-1])&o.hash_mask,W=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),--o.prev_length!=0;);if(o.match_available=0,o.match_length=F-1,o.strstart++,E&&(K(o,!1),o.strm.avail_out===0))return u}else if(o.match_available){if((E=d._tr_tally(o,0,o.window[o.strstart-1]))&&K(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return u}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(E=d._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<F-1?o.strstart:F-1,se===S?(K(o,!0),o.strm.avail_out===0?oe:$):o.last_lit&&(K(o,!1),o.strm.avail_out===0)?u:ae}function Te(o,se,W,E,x){this.good_length=o,this.max_lazy=se,this.nice_length=W,this.max_chain=E,this.func=x}function ze(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new b.Buf16(2*Z),this.dyn_dtree=new b.Buf16(2*(2*H+1)),this.bl_tree=new b.Buf16(2*(2*P+1)),be(this.dyn_ltree),be(this.dyn_dtree),be(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new b.Buf16(ne+1),this.heap=new b.Buf16(2*L+1),be(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new b.Buf16(2*L+1),be(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function he(o){var se;return o&&o.state?(o.total_in=o.total_out=0,o.data_type=y,(se=o.state).pending=0,se.pending_out=0,se.wrap<0&&(se.wrap=-se.wrap),se.status=se.wrap?j:te,o.adler=se.wrap===2?0:1,se.last_flush=c,d._tr_init(se),m):pe(o,T)}function Ne(o){var se=he(o);return se===m&&(function(W){W.window_size=2*W.w_size,be(W.head),W.max_lazy_match=p[W.level].max_lazy,W.good_match=p[W.level].good_length,W.nice_match=p[W.level].nice_length,W.max_chain_length=p[W.level].max_chain,W.strstart=0,W.block_start=0,W.lookahead=0,W.insert=0,W.match_length=W.prev_length=F-1,W.match_available=0,W.ins_h=0})(o.state),se}function sn(o,se,W,E,x,B){if(!o)return T;var ue=1;if(se===f&&(se=6),E<0?(ue=0,E=-E):15<E&&(ue=2,E-=16),x<1||R<x||W!==M||E<8||15<E||se<0||9<se||B<0||g<B)return pe(o,T);E===8&&(E=9);var ce=new ze;return(o.state=ce).strm=o,ce.wrap=ue,ce.gzhead=null,ce.w_bits=E,ce.w_size=1<<ce.w_bits,ce.w_mask=ce.w_size-1,ce.hash_bits=x+7,ce.hash_size=1<<ce.hash_bits,ce.hash_mask=ce.hash_size-1,ce.hash_shift=~~((ce.hash_bits+F-1)/F),ce.window=new b.Buf8(2*ce.w_size),ce.head=new b.Buf16(ce.hash_size),ce.prev=new b.Buf16(ce.w_size),ce.lit_bufsize=1<<x+6,ce.pending_buf_size=4*ce.lit_bufsize,ce.pending_buf=new b.Buf8(ce.pending_buf_size),ce.d_buf=1*ce.lit_bufsize,ce.l_buf=3*ce.lit_bufsize,ce.level=se,ce.strategy=B,ce.method=W,Ne(o)}p=[new Te(0,0,0,0,function(o,se){var W=65535;for(W>o.pending_buf_size-5&&(W=o.pending_buf_size-5);;){if(o.lookahead<=1){if(ve(o),o.lookahead===0&&se===c)return u;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var E=o.block_start+W;if((o.strstart===0||o.strstart>=E)&&(o.lookahead=o.strstart-E,o.strstart=E,K(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-we&&(K(o,!1),o.strm.avail_out===0))return u}return o.insert=0,se===S?(K(o,!0),o.strm.avail_out===0?oe:$):(o.strstart>o.block_start&&(K(o,!1),o.strm.avail_out),u)}),new Te(4,4,8,4,xe),new Te(4,5,16,8,xe),new Te(4,6,32,32,xe),new Te(4,4,16,16,_e),new Te(8,16,32,32,_e),new Te(8,16,128,128,_e),new Te(8,32,128,256,_e),new Te(32,128,258,1024,_e),new Te(32,258,258,4096,_e)],C.deflateInit=function(o,se){return sn(o,se,M,15,8,0)},C.deflateInit2=sn,C.deflateReset=Ne,C.deflateResetKeep=he,C.deflateSetHeader=function(o,se){return o&&o.state?o.state.wrap!==2?T:(o.state.gzhead=se,m):T},C.deflate=function(o,se){var W,E,x,B;if(!o||!o.state||5<se||se<0)return o?pe(o,T):T;if(E=o.state,!o.output||!o.input&&o.avail_in!==0||E.status===666&&se!==S)return pe(o,o.avail_out===0?-5:T);if(E.strm=o,W=E.last_flush,E.last_flush=se,E.status===j)if(E.wrap===2)o.adler=0,Ce(E,31),Ce(E,139),Ce(E,8),E.gzhead?(Ce(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),Ce(E,255&E.gzhead.time),Ce(E,E.gzhead.time>>8&255),Ce(E,E.gzhead.time>>16&255),Ce(E,E.gzhead.time>>24&255),Ce(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),Ce(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(Ce(E,255&E.gzhead.extra.length),Ce(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(o.adler=A(o.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(Ce(E,0),Ce(E,0),Ce(E,0),Ce(E,0),Ce(E,0),Ce(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),Ce(E,3),E.status=te);else{var ue=M+(E.w_bits-8<<4)<<8;ue|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(ue|=32),ue+=31-ue%31,E.status=te,D(E,ue),E.strstart!==0&&(D(E,o.adler>>>16),D(E,65535&o.adler)),o.adler=1}if(E.status===69)if(E.gzhead.extra){for(x=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),J(o),x=E.pending,E.pending!==E.pending_buf_size));)Ce(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){x=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),J(o),x=E.pending,E.pending===E.pending_buf_size)){B=1;break}B=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,Ce(E,B)}while(B!==0);E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),B===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){x=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),J(o),x=E.pending,E.pending===E.pending_buf_size)){B=1;break}B=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,Ce(E,B)}while(B!==0);E.gzhead.hcrc&&E.pending>x&&(o.adler=A(o.adler,E.pending_buf,E.pending-x,x)),B===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&J(o),E.pending+2<=E.pending_buf_size&&(Ce(E,255&o.adler),Ce(E,o.adler>>8&255),o.adler=0,E.status=te)):E.status=te),E.pending!==0){if(J(o),o.avail_out===0)return E.last_flush=-1,m}else if(o.avail_in===0&&re(se)<=re(W)&&se!==S)return pe(o,-5);if(E.status===666&&o.avail_in!==0)return pe(o,-5);if(o.avail_in!==0||E.lookahead!==0||se!==c&&E.status!==666){var ce=E.strategy===2?(function(Q,fe){for(var ye;;){if(Q.lookahead===0&&(ve(Q),Q.lookahead===0)){if(fe===c)return u;break}if(Q.match_length=0,ye=d._tr_tally(Q,0,Q.window[Q.strstart]),Q.lookahead--,Q.strstart++,ye&&(K(Q,!1),Q.strm.avail_out===0))return u}return Q.insert=0,fe===S?(K(Q,!0),Q.strm.avail_out===0?oe:$):Q.last_lit&&(K(Q,!1),Q.strm.avail_out===0)?u:ae})(E,se):E.strategy===3?(function(Q,fe){for(var ye,me,De,Ye,Ue=Q.window;;){if(Q.lookahead<=de){if(ve(Q),Q.lookahead<=de&&fe===c)return u;if(Q.lookahead===0)break}if(Q.match_length=0,Q.lookahead>=F&&0<Q.strstart&&(me=Ue[De=Q.strstart-1])===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]){Ye=Q.strstart+de;do;while(me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&me===Ue[++De]&&De<Ye);Q.match_length=de-(Ye-De),Q.match_length>Q.lookahead&&(Q.match_length=Q.lookahead)}if(Q.match_length>=F?(ye=d._tr_tally(Q,1,Q.match_length-F),Q.lookahead-=Q.match_length,Q.strstart+=Q.match_length,Q.match_length=0):(ye=d._tr_tally(Q,0,Q.window[Q.strstart]),Q.lookahead--,Q.strstart++),ye&&(K(Q,!1),Q.strm.avail_out===0))return u}return Q.insert=0,fe===S?(K(Q,!0),Q.strm.avail_out===0?oe:$):Q.last_lit&&(K(Q,!1),Q.strm.avail_out===0)?u:ae})(E,se):p[E.level].func(E,se);if(ce!==oe&&ce!==$||(E.status=666),ce===u||ce===oe)return o.avail_out===0&&(E.last_flush=-1),m;if(ce===ae&&(se===1?d._tr_align(E):se!==5&&(d._tr_stored_block(E,0,0,!1),se===3&&(be(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),J(o),o.avail_out===0))return E.last_flush=-1,m}return se!==S?m:E.wrap<=0?1:(E.wrap===2?(Ce(E,255&o.adler),Ce(E,o.adler>>8&255),Ce(E,o.adler>>16&255),Ce(E,o.adler>>24&255),Ce(E,255&o.total_in),Ce(E,o.total_in>>8&255),Ce(E,o.total_in>>16&255),Ce(E,o.total_in>>24&255)):(D(E,o.adler>>>16),D(E,65535&o.adler)),J(o),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?m:1)},C.deflateEnd=function(o){var se;return o&&o.state?(se=o.state.status)!==j&&se!==69&&se!==73&&se!==91&&se!==103&&se!==te&&se!==666?pe(o,T):(o.state=null,se===te?pe(o,-3):m):T},C.deflateSetDictionary=function(o,se){var W,E,x,B,ue,ce,Q,fe,ye=se.length;if(!o||!o.state||(B=(W=o.state).wrap)===2||B===1&&W.status!==j||W.lookahead)return T;for(B===1&&(o.adler=v(o.adler,se,ye,0)),W.wrap=0,ye>=W.w_size&&(B===0&&(be(W.head),W.strstart=0,W.block_start=0,W.insert=0),fe=new b.Buf8(W.w_size),b.arraySet(fe,se,ye-W.w_size,W.w_size,0),se=fe,ye=W.w_size),ue=o.avail_in,ce=o.next_in,Q=o.input,o.avail_in=ye,o.next_in=0,o.input=se,ve(W);W.lookahead>=F;){for(E=W.strstart,x=W.lookahead-(F-1);W.ins_h=(W.ins_h<<W.hash_shift^W.window[E+F-1])&W.hash_mask,W.prev[E&W.w_mask]=W.head[W.ins_h],W.head[W.ins_h]=E,E++,--x;);W.strstart=E,W.lookahead=F-1,ve(W)}return W.strstart+=W.lookahead,W.block_start=W.strstart,W.insert=W.lookahead,W.lookahead=0,W.match_length=W.prev_length=F-1,W.match_available=0,o.next_in=ce,o.input=Q,o.avail_in=ue,W.wrap=B,m},C.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(_,h,C){h.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(_,h,C){h.exports=function(p,b){var d,v,A,N,c,S,m,T,f,g,y,M,R,L,H,P,Z,ne,F,de,we,j,te,u,ae;d=p.state,v=p.next_in,u=p.input,A=v+(p.avail_in-5),N=p.next_out,ae=p.output,c=N-(b-p.avail_out),S=N+(p.avail_out-257),m=d.dmax,T=d.wsize,f=d.whave,g=d.wnext,y=d.window,M=d.hold,R=d.bits,L=d.lencode,H=d.distcode,P=(1<<d.lenbits)-1,Z=(1<<d.distbits)-1;e:do{R<15&&(M+=u[v++]<<R,R+=8,M+=u[v++]<<R,R+=8),ne=L[M&P];n:for(;;){if(M>>>=F=ne>>>24,R-=F,(F=ne>>>16&255)===0)ae[N++]=65535&ne;else{if(!(16&F)){if((64&F)==0){ne=L[(65535&ne)+(M&(1<<F)-1)];continue n}if(32&F){d.mode=12;break e}p.msg="invalid literal/length code",d.mode=30;break e}de=65535&ne,(F&=15)&&(R<F&&(M+=u[v++]<<R,R+=8),de+=M&(1<<F)-1,M>>>=F,R-=F),R<15&&(M+=u[v++]<<R,R+=8,M+=u[v++]<<R,R+=8),ne=H[M&Z];t:for(;;){if(M>>>=F=ne>>>24,R-=F,!(16&(F=ne>>>16&255))){if((64&F)==0){ne=H[(65535&ne)+(M&(1<<F)-1)];continue t}p.msg="invalid distance code",d.mode=30;break e}if(we=65535&ne,R<(F&=15)&&(M+=u[v++]<<R,(R+=8)<F&&(M+=u[v++]<<R,R+=8)),m<(we+=M&(1<<F)-1)){p.msg="invalid distance too far back",d.mode=30;break e}if(M>>>=F,R-=F,(F=N-c)<we){if(f<(F=we-F)&&d.sane){p.msg="invalid distance too far back",d.mode=30;break e}if(te=y,(j=0)===g){if(j+=T-F,F<de){for(de-=F;ae[N++]=y[j++],--F;);j=N-we,te=ae}}else if(g<F){if(j+=T+g-F,(F-=g)<de){for(de-=F;ae[N++]=y[j++],--F;);if(j=0,g<de){for(de-=F=g;ae[N++]=y[j++],--F;);j=N-we,te=ae}}}else if(j+=g-F,F<de){for(de-=F;ae[N++]=y[j++],--F;);j=N-we,te=ae}for(;2<de;)ae[N++]=te[j++],ae[N++]=te[j++],ae[N++]=te[j++],de-=3;de&&(ae[N++]=te[j++],1<de&&(ae[N++]=te[j++]))}else{for(j=N-we;ae[N++]=ae[j++],ae[N++]=ae[j++],ae[N++]=ae[j++],2<(de-=3););de&&(ae[N++]=ae[j++],1<de&&(ae[N++]=ae[j++]))}break}}break}}while(v<A&&N<S);v-=de=R>>3,M&=(1<<(R-=de<<3))-1,p.next_in=v,p.next_out=N,p.avail_in=v<A?A-v+5:5-(v-A),p.avail_out=N<S?S-N+257:257-(N-S),d.hold=M,d.bits=R}},{}],49:[function(_,h,C){var p=_("../utils/common"),b=_("./adler32"),d=_("./crc32"),v=_("./inffast"),A=_("./inftrees"),N=1,c=2,S=0,m=-2,T=1,f=852,g=592;function y(j){return(j>>>24&255)+(j>>>8&65280)+((65280&j)<<8)+((255&j)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new p.Buf16(320),this.work=new p.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function R(j){var te;return j&&j.state?(te=j.state,j.total_in=j.total_out=te.total=0,j.msg="",te.wrap&&(j.adler=1&te.wrap),te.mode=T,te.last=0,te.havedict=0,te.dmax=32768,te.head=null,te.hold=0,te.bits=0,te.lencode=te.lendyn=new p.Buf32(f),te.distcode=te.distdyn=new p.Buf32(g),te.sane=1,te.back=-1,S):m}function L(j){var te;return j&&j.state?((te=j.state).wsize=0,te.whave=0,te.wnext=0,R(j)):m}function H(j,te){var u,ae;return j&&j.state?(ae=j.state,te<0?(u=0,te=-te):(u=1+(te>>4),te<48&&(te&=15)),te&&(te<8||15<te)?m:(ae.window!==null&&ae.wbits!==te&&(ae.window=null),ae.wrap=u,ae.wbits=te,L(j))):m}function P(j,te){var u,ae;return j?(ae=new M,(j.state=ae).window=null,(u=H(j,te))!==S&&(j.state=null),u):m}var Z,ne,F=!0;function de(j){if(F){var te;for(Z=new p.Buf32(512),ne=new p.Buf32(32),te=0;te<144;)j.lens[te++]=8;for(;te<256;)j.lens[te++]=9;for(;te<280;)j.lens[te++]=7;for(;te<288;)j.lens[te++]=8;for(A(N,j.lens,0,288,Z,0,j.work,{bits:9}),te=0;te<32;)j.lens[te++]=5;A(c,j.lens,0,32,ne,0,j.work,{bits:5}),F=!1}j.lencode=Z,j.lenbits=9,j.distcode=ne,j.distbits=5}function we(j,te,u,ae){var oe,$=j.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new p.Buf8($.wsize)),ae>=$.wsize?(p.arraySet($.window,te,u-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(ae<(oe=$.wsize-$.wnext)&&(oe=ae),p.arraySet($.window,te,u-ae,oe,$.wnext),(ae-=oe)?(p.arraySet($.window,te,u-ae,ae,0),$.wnext=ae,$.whave=$.wsize):($.wnext+=oe,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=oe))),0}C.inflateReset=L,C.inflateReset2=H,C.inflateResetKeep=R,C.inflateInit=function(j){return P(j,15)},C.inflateInit2=P,C.inflate=function(j,te){var u,ae,oe,$,pe,re,be,J,K,Ce,D,V,ve,xe,_e,Te,ze,he,Ne,sn,o,se,W,E,x=0,B=new p.Buf8(4),ue=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!j||!j.state||!j.output||!j.input&&j.avail_in!==0)return m;(u=j.state).mode===12&&(u.mode=13),pe=j.next_out,oe=j.output,be=j.avail_out,$=j.next_in,ae=j.input,re=j.avail_in,J=u.hold,K=u.bits,Ce=re,D=be,se=S;e:for(;;)switch(u.mode){case T:if(u.wrap===0){u.mode=13;break}for(;K<16;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(2&u.wrap&&J===35615){B[u.check=0]=255&J,B[1]=J>>>8&255,u.check=d(u.check,B,2,0),K=J=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&J)<<8)+(J>>8))%31){j.msg="incorrect header check",u.mode=30;break}if((15&J)!=8){j.msg="unknown compression method",u.mode=30;break}if(K-=4,o=8+(15&(J>>>=4)),u.wbits===0)u.wbits=o;else if(o>u.wbits){j.msg="invalid window size",u.mode=30;break}u.dmax=1<<o,j.adler=u.check=1,u.mode=512&J?10:12,K=J=0;break;case 2:for(;K<16;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(u.flags=J,(255&u.flags)!=8){j.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){j.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=J>>8&1),512&u.flags&&(B[0]=255&J,B[1]=J>>>8&255,u.check=d(u.check,B,2,0)),K=J=0,u.mode=3;case 3:for(;K<32;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.head&&(u.head.time=J),512&u.flags&&(B[0]=255&J,B[1]=J>>>8&255,B[2]=J>>>16&255,B[3]=J>>>24&255,u.check=d(u.check,B,4,0)),K=J=0,u.mode=4;case 4:for(;K<16;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.head&&(u.head.xflags=255&J,u.head.os=J>>8),512&u.flags&&(B[0]=255&J,B[1]=J>>>8&255,u.check=d(u.check,B,2,0)),K=J=0,u.mode=5;case 5:if(1024&u.flags){for(;K<16;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.length=J,u.head&&(u.head.extra_len=J),512&u.flags&&(B[0]=255&J,B[1]=J>>>8&255,u.check=d(u.check,B,2,0)),K=J=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(re<(V=u.length)&&(V=re),V&&(u.head&&(o=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),p.arraySet(u.head.extra,ae,$,V,o)),512&u.flags&&(u.check=d(u.check,ae,V,$)),re-=V,$+=V,u.length-=V),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(re===0)break e;for(V=0;o=ae[$+V++],u.head&&o&&u.length<65536&&(u.head.name+=String.fromCharCode(o)),o&&V<re;);if(512&u.flags&&(u.check=d(u.check,ae,V,$)),re-=V,$+=V,o)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(re===0)break e;for(V=0;o=ae[$+V++],u.head&&o&&u.length<65536&&(u.head.comment+=String.fromCharCode(o)),o&&V<re;);if(512&u.flags&&(u.check=d(u.check,ae,V,$)),re-=V,$+=V,o)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;K<16;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(J!==(65535&u.check)){j.msg="header crc mismatch",u.mode=30;break}K=J=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),j.adler=u.check=0,u.mode=12;break;case 10:for(;K<32;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}j.adler=u.check=y(J),K=J=0,u.mode=11;case 11:if(u.havedict===0)return j.next_out=pe,j.avail_out=be,j.next_in=$,j.avail_in=re,u.hold=J,u.bits=K,2;j.adler=u.check=1,u.mode=12;case 12:if(te===5||te===6)break e;case 13:if(u.last){J>>>=7&K,K-=7&K,u.mode=27;break}for(;K<3;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}switch(u.last=1&J,K-=1,3&(J>>>=1)){case 0:u.mode=14;break;case 1:if(de(u),u.mode=20,te!==6)break;J>>>=2,K-=2;break e;case 2:u.mode=17;break;case 3:j.msg="invalid block type",u.mode=30}J>>>=2,K-=2;break;case 14:for(J>>>=7&K,K-=7&K;K<32;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if((65535&J)!=(J>>>16^65535)){j.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&J,K=J=0,u.mode=15,te===6)break e;case 15:u.mode=16;case 16:if(V=u.length){if(re<V&&(V=re),be<V&&(V=be),V===0)break e;p.arraySet(oe,ae,$,V,pe),re-=V,$+=V,be-=V,pe+=V,u.length-=V;break}u.mode=12;break;case 17:for(;K<14;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(u.nlen=257+(31&J),J>>>=5,K-=5,u.ndist=1+(31&J),J>>>=5,K-=5,u.ncode=4+(15&J),J>>>=4,K-=4,286<u.nlen||30<u.ndist){j.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;K<3;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.lens[ue[u.have++]]=7&J,J>>>=3,K-=3}for(;u.have<19;)u.lens[ue[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,W={bits:u.lenbits},se=A(0,u.lens,0,19,u.lencode,0,u.work,W),u.lenbits=W.bits,se){j.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;Te=(x=u.lencode[J&(1<<u.lenbits)-1])>>>16&255,ze=65535&x,!((_e=x>>>24)<=K);){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(ze<16)J>>>=_e,K-=_e,u.lens[u.have++]=ze;else{if(ze===16){for(E=_e+2;K<E;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(J>>>=_e,K-=_e,u.have===0){j.msg="invalid bit length repeat",u.mode=30;break}o=u.lens[u.have-1],V=3+(3&J),J>>>=2,K-=2}else if(ze===17){for(E=_e+3;K<E;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}K-=_e,o=0,V=3+(7&(J>>>=_e)),J>>>=3,K-=3}else{for(E=_e+7;K<E;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}K-=_e,o=0,V=11+(127&(J>>>=_e)),J>>>=7,K-=7}if(u.have+V>u.nlen+u.ndist){j.msg="invalid bit length repeat",u.mode=30;break}for(;V--;)u.lens[u.have++]=o}}if(u.mode===30)break;if(u.lens[256]===0){j.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,W={bits:u.lenbits},se=A(N,u.lens,0,u.nlen,u.lencode,0,u.work,W),u.lenbits=W.bits,se){j.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,W={bits:u.distbits},se=A(c,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,W),u.distbits=W.bits,se){j.msg="invalid distances set",u.mode=30;break}if(u.mode=20,te===6)break e;case 20:u.mode=21;case 21:if(6<=re&&258<=be){j.next_out=pe,j.avail_out=be,j.next_in=$,j.avail_in=re,u.hold=J,u.bits=K,v(j,D),pe=j.next_out,oe=j.output,be=j.avail_out,$=j.next_in,ae=j.input,re=j.avail_in,J=u.hold,K=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;Te=(x=u.lencode[J&(1<<u.lenbits)-1])>>>16&255,ze=65535&x,!((_e=x>>>24)<=K);){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(Te&&(240&Te)==0){for(he=_e,Ne=Te,sn=ze;Te=(x=u.lencode[sn+((J&(1<<he+Ne)-1)>>he)])>>>16&255,ze=65535&x,!(he+(_e=x>>>24)<=K);){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}J>>>=he,K-=he,u.back+=he}if(J>>>=_e,K-=_e,u.back+=_e,u.length=ze,Te===0){u.mode=26;break}if(32&Te){u.back=-1,u.mode=12;break}if(64&Te){j.msg="invalid literal/length code",u.mode=30;break}u.extra=15&Te,u.mode=22;case 22:if(u.extra){for(E=u.extra;K<E;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.length+=J&(1<<u.extra)-1,J>>>=u.extra,K-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;Te=(x=u.distcode[J&(1<<u.distbits)-1])>>>16&255,ze=65535&x,!((_e=x>>>24)<=K);){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if((240&Te)==0){for(he=_e,Ne=Te,sn=ze;Te=(x=u.distcode[sn+((J&(1<<he+Ne)-1)>>he)])>>>16&255,ze=65535&x,!(he+(_e=x>>>24)<=K);){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}J>>>=he,K-=he,u.back+=he}if(J>>>=_e,K-=_e,u.back+=_e,64&Te){j.msg="invalid distance code",u.mode=30;break}u.offset=ze,u.extra=15&Te,u.mode=24;case 24:if(u.extra){for(E=u.extra;K<E;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}u.offset+=J&(1<<u.extra)-1,J>>>=u.extra,K-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){j.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(be===0)break e;if(V=D-be,u.offset>V){if((V=u.offset-V)>u.whave&&u.sane){j.msg="invalid distance too far back",u.mode=30;break}ve=V>u.wnext?(V-=u.wnext,u.wsize-V):u.wnext-V,V>u.length&&(V=u.length),xe=u.window}else xe=oe,ve=pe-u.offset,V=u.length;for(be<V&&(V=be),be-=V,u.length-=V;oe[pe++]=xe[ve++],--V;);u.length===0&&(u.mode=21);break;case 26:if(be===0)break e;oe[pe++]=u.length,be--,u.mode=21;break;case 27:if(u.wrap){for(;K<32;){if(re===0)break e;re--,J|=ae[$++]<<K,K+=8}if(D-=be,j.total_out+=D,u.total+=D,D&&(j.adler=u.check=u.flags?d(u.check,oe,D,pe-D):b(u.check,oe,D,pe-D)),D=be,(u.flags?J:y(J))!==u.check){j.msg="incorrect data check",u.mode=30;break}K=J=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;K<32;){if(re===0)break e;re--,J+=ae[$++]<<K,K+=8}if(J!==(4294967295&u.total)){j.msg="incorrect length check",u.mode=30;break}K=J=0}u.mode=29;case 29:se=1;break e;case 30:se=-3;break e;case 31:return-4;case 32:default:return m}return j.next_out=pe,j.avail_out=be,j.next_in=$,j.avail_in=re,u.hold=J,u.bits=K,(u.wsize||D!==j.avail_out&&u.mode<30&&(u.mode<27||te!==4))&&we(j,j.output,j.next_out,D-j.avail_out)?(u.mode=31,-4):(Ce-=j.avail_in,D-=j.avail_out,j.total_in+=Ce,j.total_out+=D,u.total+=D,u.wrap&&D&&(j.adler=u.check=u.flags?d(u.check,oe,D,j.next_out-D):b(u.check,oe,D,j.next_out-D)),j.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(Ce==0&&D===0||te===4)&&se===S&&(se=-5),se)},C.inflateEnd=function(j){if(!j||!j.state)return m;var te=j.state;return te.window&&(te.window=null),j.state=null,S},C.inflateGetHeader=function(j,te){var u;return j&&j.state?(2&(u=j.state).wrap)==0?m:((u.head=te).done=!1,S):m},C.inflateSetDictionary=function(j,te){var u,ae=te.length;return j&&j.state?(u=j.state).wrap!==0&&u.mode!==11?m:u.mode===11&&b(1,te,ae,0)!==u.check?-3:we(j,te,ae,ae)?(u.mode=31,-4):(u.havedict=1,S):m},C.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(_,h,C){var p=_("../utils/common"),b=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],A=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];h.exports=function(N,c,S,m,T,f,g,y){var M,R,L,H,P,Z,ne,F,de,we=y.bits,j=0,te=0,u=0,ae=0,oe=0,$=0,pe=0,re=0,be=0,J=0,K=null,Ce=0,D=new p.Buf16(16),V=new p.Buf16(16),ve=null,xe=0;for(j=0;j<=15;j++)D[j]=0;for(te=0;te<m;te++)D[c[S+te]]++;for(oe=we,ae=15;1<=ae&&D[ae]===0;ae--);if(ae<oe&&(oe=ae),ae===0)return T[f++]=20971520,T[f++]=20971520,y.bits=1,0;for(u=1;u<ae&&D[u]===0;u++);for(oe<u&&(oe=u),j=re=1;j<=15;j++)if(re<<=1,(re-=D[j])<0)return-1;if(0<re&&(N===0||ae!==1))return-1;for(V[1]=0,j=1;j<15;j++)V[j+1]=V[j]+D[j];for(te=0;te<m;te++)c[S+te]!==0&&(g[V[c[S+te]]++]=te);if(Z=N===0?(K=ve=g,19):N===1?(K=b,Ce-=257,ve=d,xe-=257,256):(K=v,ve=A,-1),j=u,P=f,pe=te=J=0,L=-1,H=(be=1<<($=oe))-1,N===1&&852<be||N===2&&592<be)return 1;for(;;){for(ne=j-pe,de=g[te]<Z?(F=0,g[te]):g[te]>Z?(F=ve[xe+g[te]],K[Ce+g[te]]):(F=96,0),M=1<<j-pe,u=R=1<<$;T[P+(J>>pe)+(R-=M)]=ne<<24|F<<16|de|0,R!==0;);for(M=1<<j-1;J&M;)M>>=1;if(M!==0?(J&=M-1,J+=M):J=0,te++,--D[j]==0){if(j===ae)break;j=c[S+g[te]]}if(oe<j&&(J&H)!==L){for(pe===0&&(pe=oe),P+=u,re=1<<($=j-pe);$+pe<ae&&!((re-=D[$+pe])<=0);)$++,re<<=1;if(be+=1<<$,N===1&&852<be||N===2&&592<be)return 1;T[L=J&H]=oe<<24|$<<16|P-f|0}}return J!==0&&(T[P+J]=j-pe<<24|64<<16|0),y.bits=oe,0}},{"../utils/common":41}],51:[function(_,h,C){h.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(_,h,C){var p=_("../utils/common"),b=0,d=1;function v(x){for(var B=x.length;0<=--B;)x[B]=0}var A=0,N=29,c=256,S=c+1+N,m=30,T=19,f=2*S+1,g=15,y=16,M=7,R=256,L=16,H=17,P=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ne=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],de=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(S+2));v(we);var j=new Array(2*m);v(j);var te=new Array(512);v(te);var u=new Array(256);v(u);var ae=new Array(N);v(ae);var oe,$,pe,re=new Array(m);function be(x,B,ue,ce,Q){this.static_tree=x,this.extra_bits=B,this.extra_base=ue,this.elems=ce,this.max_length=Q,this.has_stree=x&&x.length}function J(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function K(x){return x<256?te[x]:te[256+(x>>>7)]}function Ce(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function D(x,B,ue){x.bi_valid>y-ue?(x.bi_buf|=B<<x.bi_valid&65535,Ce(x,x.bi_buf),x.bi_buf=B>>y-x.bi_valid,x.bi_valid+=ue-y):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=ue)}function V(x,B,ue){D(x,ue[2*B],ue[2*B+1])}function ve(x,B){for(var ue=0;ue|=1&x,x>>>=1,ue<<=1,0<--B;);return ue>>>1}function xe(x,B,ue){var ce,Q,fe=new Array(g+1),ye=0;for(ce=1;ce<=g;ce++)fe[ce]=ye=ye+ue[ce-1]<<1;for(Q=0;Q<=B;Q++){var me=x[2*Q+1];me!==0&&(x[2*Q]=ve(fe[me]++,me))}}function _e(x){var B;for(B=0;B<S;B++)x.dyn_ltree[2*B]=0;for(B=0;B<m;B++)x.dyn_dtree[2*B]=0;for(B=0;B<T;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*R]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function Te(x){8<x.bi_valid?Ce(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function ze(x,B,ue,ce){var Q=2*B,fe=2*ue;return x[Q]<x[fe]||x[Q]===x[fe]&&ce[B]<=ce[ue]}function he(x,B,ue){for(var ce=x.heap[ue],Q=ue<<1;Q<=x.heap_len&&(Q<x.heap_len&&ze(B,x.heap[Q+1],x.heap[Q],x.depth)&&Q++,!ze(B,ce,x.heap[Q],x.depth));)x.heap[ue]=x.heap[Q],ue=Q,Q<<=1;x.heap[ue]=ce}function Ne(x,B,ue){var ce,Q,fe,ye,me=0;if(x.last_lit!==0)for(;ce=x.pending_buf[x.d_buf+2*me]<<8|x.pending_buf[x.d_buf+2*me+1],Q=x.pending_buf[x.l_buf+me],me++,ce===0?V(x,Q,B):(V(x,(fe=u[Q])+c+1,B),(ye=Z[fe])!==0&&D(x,Q-=ae[fe],ye),V(x,fe=K(--ce),ue),(ye=ne[fe])!==0&&D(x,ce-=re[fe],ye)),me<x.last_lit;);V(x,R,B)}function sn(x,B){var ue,ce,Q,fe=B.dyn_tree,ye=B.stat_desc.static_tree,me=B.stat_desc.has_stree,De=B.stat_desc.elems,Ye=-1;for(x.heap_len=0,x.heap_max=f,ue=0;ue<De;ue++)fe[2*ue]!==0?(x.heap[++x.heap_len]=Ye=ue,x.depth[ue]=0):fe[2*ue+1]=0;for(;x.heap_len<2;)fe[2*(Q=x.heap[++x.heap_len]=Ye<2?++Ye:0)]=1,x.depth[Q]=0,x.opt_len--,me&&(x.static_len-=ye[2*Q+1]);for(B.max_code=Ye,ue=x.heap_len>>1;1<=ue;ue--)he(x,fe,ue);for(Q=De;ue=x.heap[1],x.heap[1]=x.heap[x.heap_len--],he(x,fe,1),ce=x.heap[1],x.heap[--x.heap_max]=ue,x.heap[--x.heap_max]=ce,fe[2*Q]=fe[2*ue]+fe[2*ce],x.depth[Q]=(x.depth[ue]>=x.depth[ce]?x.depth[ue]:x.depth[ce])+1,fe[2*ue+1]=fe[2*ce+1]=Q,x.heap[1]=Q++,he(x,fe,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(Ue,on){var Mt,jn,ha,en,qt,ga,Hn=on.dyn_tree,Ei=on.max_code,lo=on.stat_desc.static_tree,Nn=on.stat_desc.has_stree,io=on.stat_desc.extra_bits,jl=on.stat_desc.extra_base,Lt=on.stat_desc.max_length,wt=0;for(en=0;en<=g;en++)Ue.bl_count[en]=0;for(Hn[2*Ue.heap[Ue.heap_max]+1]=0,Mt=Ue.heap_max+1;Mt<f;Mt++)Lt<(en=Hn[2*Hn[2*(jn=Ue.heap[Mt])+1]+1]+1)&&(en=Lt,wt++),Hn[2*jn+1]=en,Ei<jn||(Ue.bl_count[en]++,qt=0,jl<=jn&&(qt=io[jn-jl]),ga=Hn[2*jn],Ue.opt_len+=ga*(en+qt),Nn&&(Ue.static_len+=ga*(lo[2*jn+1]+qt)));if(wt!==0){do{for(en=Lt-1;Ue.bl_count[en]===0;)en--;Ue.bl_count[en]--,Ue.bl_count[en+1]+=2,Ue.bl_count[Lt]--,wt-=2}while(0<wt);for(en=Lt;en!==0;en--)for(jn=Ue.bl_count[en];jn!==0;)Ei<(ha=Ue.heap[--Mt])||(Hn[2*ha+1]!==en&&(Ue.opt_len+=(en-Hn[2*ha+1])*Hn[2*ha],Hn[2*ha+1]=en),jn--)}})(x,B),xe(fe,Ye,x.bl_count)}function o(x,B,ue){var ce,Q,fe=-1,ye=B[1],me=0,De=7,Ye=4;for(ye===0&&(De=138,Ye=3),B[2*(ue+1)+1]=65535,ce=0;ce<=ue;ce++)Q=ye,ye=B[2*(ce+1)+1],++me<De&&Q===ye||(me<Ye?x.bl_tree[2*Q]+=me:Q!==0?(Q!==fe&&x.bl_tree[2*Q]++,x.bl_tree[2*L]++):me<=10?x.bl_tree[2*H]++:x.bl_tree[2*P]++,fe=Q,Ye=(me=0)===ye?(De=138,3):Q===ye?(De=6,3):(De=7,4))}function se(x,B,ue){var ce,Q,fe=-1,ye=B[1],me=0,De=7,Ye=4;for(ye===0&&(De=138,Ye=3),ce=0;ce<=ue;ce++)if(Q=ye,ye=B[2*(ce+1)+1],!(++me<De&&Q===ye)){if(me<Ye)for(;V(x,Q,x.bl_tree),--me!=0;);else Q!==0?(Q!==fe&&(V(x,Q,x.bl_tree),me--),V(x,L,x.bl_tree),D(x,me-3,2)):me<=10?(V(x,H,x.bl_tree),D(x,me-3,3)):(V(x,P,x.bl_tree),D(x,me-11,7));fe=Q,Ye=(me=0)===ye?(De=138,3):Q===ye?(De=6,3):(De=7,4)}}v(re);var W=!1;function E(x,B,ue,ce){D(x,(A<<1)+(ce?1:0),3),(function(Q,fe,ye,me){Te(Q),Ce(Q,ye),Ce(Q,~ye),p.arraySet(Q.pending_buf,Q.window,fe,ye,Q.pending),Q.pending+=ye})(x,B,ue)}C._tr_init=function(x){W||((function(){var B,ue,ce,Q,fe,ye=new Array(g+1);for(Q=ce=0;Q<N-1;Q++)for(ae[Q]=ce,B=0;B<1<<Z[Q];B++)u[ce++]=Q;for(u[ce-1]=Q,Q=fe=0;Q<16;Q++)for(re[Q]=fe,B=0;B<1<<ne[Q];B++)te[fe++]=Q;for(fe>>=7;Q<m;Q++)for(re[Q]=fe<<7,B=0;B<1<<ne[Q]-7;B++)te[256+fe++]=Q;for(ue=0;ue<=g;ue++)ye[ue]=0;for(B=0;B<=143;)we[2*B+1]=8,B++,ye[8]++;for(;B<=255;)we[2*B+1]=9,B++,ye[9]++;for(;B<=279;)we[2*B+1]=7,B++,ye[7]++;for(;B<=287;)we[2*B+1]=8,B++,ye[8]++;for(xe(we,S+1,ye),B=0;B<m;B++)j[2*B+1]=5,j[2*B]=ve(B,5);oe=new be(we,Z,c+1,S,g),$=new be(j,ne,0,m,g),pe=new be(new Array(0),F,0,T,M)})(),W=!0),x.l_desc=new J(x.dyn_ltree,oe),x.d_desc=new J(x.dyn_dtree,$),x.bl_desc=new J(x.bl_tree,pe),x.bi_buf=0,x.bi_valid=0,_e(x)},C._tr_stored_block=E,C._tr_flush_block=function(x,B,ue,ce){var Q,fe,ye=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(me){var De,Ye=4093624447;for(De=0;De<=31;De++,Ye>>>=1)if(1&Ye&&me.dyn_ltree[2*De]!==0)return b;if(me.dyn_ltree[18]!==0||me.dyn_ltree[20]!==0||me.dyn_ltree[26]!==0)return d;for(De=32;De<c;De++)if(me.dyn_ltree[2*De]!==0)return d;return b})(x)),sn(x,x.l_desc),sn(x,x.d_desc),ye=(function(me){var De;for(o(me,me.dyn_ltree,me.l_desc.max_code),o(me,me.dyn_dtree,me.d_desc.max_code),sn(me,me.bl_desc),De=T-1;3<=De&&me.bl_tree[2*de[De]+1]===0;De--);return me.opt_len+=3*(De+1)+5+5+4,De})(x),Q=x.opt_len+3+7>>>3,(fe=x.static_len+3+7>>>3)<=Q&&(Q=fe)):Q=fe=ue+5,ue+4<=Q&&B!==-1?E(x,B,ue,ce):x.strategy===4||fe===Q?(D(x,2+(ce?1:0),3),Ne(x,we,j)):(D(x,4+(ce?1:0),3),(function(me,De,Ye,Ue){var on;for(D(me,De-257,5),D(me,Ye-1,5),D(me,Ue-4,4),on=0;on<Ue;on++)D(me,me.bl_tree[2*de[on]+1],3);se(me,me.dyn_ltree,De-1),se(me,me.dyn_dtree,Ye-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,ye+1),Ne(x,x.dyn_ltree,x.dyn_dtree)),_e(x),ce&&Te(x)},C._tr_tally=function(x,B,ue){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&ue,x.last_lit++,B===0?x.dyn_ltree[2*ue]++:(x.matches++,B--,x.dyn_ltree[2*(u[ue]+c+1)]++,x.dyn_dtree[2*K(B)]++),x.last_lit===x.lit_bufsize-1},C._tr_align=function(x){D(x,2,3),V(x,R,we),(function(B){B.bi_valid===16?(Ce(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(_,h,C){h.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(_,h,C){(function(p){(function(b,d){if(!b.setImmediate){var v,A,N,c,S=1,m={},T=!1,f=b.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(b);g=g&&g.setTimeout?g:b,v={}.toString.call(b.process)==="[object process]"?function(L){process.nextTick(function(){M(L)})}:(function(){if(b.postMessage&&!b.importScripts){var L=!0,H=b.onmessage;return b.onmessage=function(){L=!1},b.postMessage("","*"),b.onmessage=H,L}})()?(c="setImmediate$"+Math.random()+"$",b.addEventListener?b.addEventListener("message",R,!1):b.attachEvent("onmessage",R),function(L){b.postMessage(c+L,"*")}):b.MessageChannel?((N=new MessageChannel).port1.onmessage=function(L){M(L.data)},function(L){N.port2.postMessage(L)}):f&&"onreadystatechange"in f.createElement("script")?(A=f.documentElement,function(L){var H=f.createElement("script");H.onreadystatechange=function(){M(L),H.onreadystatechange=null,A.removeChild(H),H=null},A.appendChild(H)}):function(L){setTimeout(M,0,L)},g.setImmediate=function(L){typeof L!="function"&&(L=new Function(""+L));for(var H=new Array(arguments.length-1),P=0;P<H.length;P++)H[P]=arguments[P+1];var Z={callback:L,args:H};return m[S]=Z,v(S),S++},g.clearImmediate=y}function y(L){delete m[L]}function M(L){if(T)setTimeout(M,0,L);else{var H=m[L];if(H){T=!0;try{(function(P){var Z=P.callback,ne=P.args;switch(ne.length){case 0:Z();break;case 1:Z(ne[0]);break;case 2:Z(ne[0],ne[1]);break;case 3:Z(ne[0],ne[1],ne[2]);break;default:Z.apply(d,ne)}})(H)}finally{y(L),T=!1}}}}function R(L){L.source===b&&typeof L.data=="string"&&L.data.indexOf(c)===0&&M(+L.data.slice(c.length))}})(typeof self>"u"?p===void 0?this:p:self)}).call(this,typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Vu)),Vu.exports}var F1=J1();const W1=Yu(F1),$1=Object.assign({"../.github/workflows/deploy.yml":N1,"../.gitignore":D1,"../App.tsx":E1,"../README.md":z1,"../components/DilutionModal.tsx":A1,"../components/DrugCard.tsx":j1,"../components/ExportModal.tsx":O1,"../components/OfflineIndicator.tsx":R1,"../components/PWAInstallButton.tsx":k1,"../constants.ts":U1,"../hooks/useOnlineStatus.ts":B1,"../hooks/usePWAInstall.ts":I1,"../index.css":H1,"../index.html":q1,"../index.tsx":L1,"../package-lock.json":V1,"../package.json":G1,"../public/icon.svg":Z1,"../scripts/build-zip.mjs":Y1,"../tsconfig.json":Q1,"../types.ts":X1,"../vite.config.ts":K1});async function P1(){const k=new W1;for(const[C,p]of Object.entries($1)){const b=C.replace(/^\.\.\//,"");typeof p=="string"&&k.file(b,p)}const ee=await k.generateAsync({type:"blob"}),_=URL.createObjectURL(ee),h=document.createElement("a");h.href=_,h.download="calculadora-doses-codigo-fonte.zip",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(_)}async function eb(){const k=await fetch(`./calculadora-site-pronto.zip?t=${Date.now()}`,{cache:"no-store"});if(!k.ok)throw new Error(`Erro ao baixar o pacote pronto (${k.status})`);const ee=await k.blob(),_=URL.createObjectURL(ee),h=document.createElement("a");h.href=_,h.download="calculadora-site-pronto.zip",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(_)}const nb=({isOpen:k,onClose:ee})=>{const[_,h]=Ve.useState(!1),[C,p]=Ve.useState(!1),[b,d]=Ve.useState(!1);if(!k)return null;const v=Ht.reduce((f,g)=>f+g.drugs.length,0),A=async()=>{try{p(!0),await P1()}catch(f){console.error("Falha ao gerar ZIP:",f)}finally{p(!1)}},N=async()=>{try{d(!0),await eb()}catch(f){console.error("Falha ao gerar ZIP standalone:",f)}finally{d(!1)}},c=()=>Ht.map(f=>({category:f.name,drugs:f.drugs.map(g=>({name:g.name,description:g.description,calculationType:g.calculationType,unit:g.unit,defaultDose:g.defaultDose,doseRange:g.doseRange,notes:g.notes,maxTotalDoseMg:g.maxTotalDoseMg,presentations:g.presentations,dilutions:g.dilutions}))})),S=()=>{const f=c(),g=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),y=URL.createObjectURL(g),M=document.createElement("a");M.href=y,M.download="medicamentos-emergencia.json",document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(y)},m=()=>{const f=["Categoria","Medicamento","Tipo de Cálculo","Unidade","Dose Padrão","Faixa de Dose","Dose Máxima (mg)","Apresentações Comerciais","Diluições Recomendadas","Observações Clínicas"],g=[];Ht.forEach(H=>{H.drugs.forEach(P=>{const Z=(P.presentations||[]).map(F=>`${F.label} (${F.concentrationMg}mg/${F.volumeMl}ml)`).join(" | "),ne=(P.dilutions||[]).map(F=>`${F.name}: ${F.description} [${F.useCase}]`).join(" | ");g.push([`"${H.name.replace(/"/g,'""')}"`,`"${P.name.replace(/"/g,'""')}"`,`"${P.calculationType.replace(/"/g,'""')}"`,`"${P.unit.replace(/"/g,'""')}"`,`"${P.defaultDose}"`,`"${P.doseRange.replace(/"/g,'""')}"`,`"${P.maxTotalDoseMg??""}"`,`"${Z.replace(/"/g,'""')}"`,`"${ne.replace(/"/g,'""')}"`,`"${P.notes.replace(/"/g,'""')}"`])})});const y="\uFEFF"+[f.join(","),...g.map(H=>H.join(","))].join(`
`),M=new Blob([y],{type:"text/csv;charset=utf-8;"}),R=URL.createObjectURL(M),L=document.createElement("a");L.href=R,L.download="medicamentos-emergencia.csv",document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(R)},T=()=>{const f=c();navigator.clipboard.writeText(JSON.stringify(f,null,2)),h(!0),setTimeout(()=>h(!1),2e3)};return w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:w.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto",children:[w.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-700",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"p-2 bg-cyan-500/20 text-cyan-400 rounded-lg",children:w.jsx(La,{className:"w-6 h-6"})}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-bold text-white",children:"Exportar Dados Clínicos"}),w.jsxs("p",{className:"text-xs text-slate-400",children:["Total de ",v," medicamentos em ",Ht.length," categorias"]})]})]}),w.jsx("button",{onClick:ee,className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors",children:w.jsx(J0,{className:"w-5 h-5"})})]}),w.jsxs("div",{className:"p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-start gap-3 text-xs text-emerald-200",children:[w.jsx(L0,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),w.jsxs("div",{children:[w.jsx("strong",{className:"block font-semibold text-emerald-300",children:"100% Livre de Dependências e APIs"}),"Todos esses dados residem estaticamente no código. Eles podem ser portados para qualquer sistema, aplicativo mobile, banco de dados ou planilha sem necessidade de conexão com servidores."]})]}),w.jsxs("div",{className:"p-4 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/60 border border-emerald-600/60 rounded-xl space-y-3",children:[w.jsx("div",{className:"flex items-start justify-between gap-3",children:w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0",children:w.jsx(S1,{className:"w-5 h-5"})}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("h3",{className:"text-sm font-bold text-white",children:"Baixar Apenas os Arquivos do Site (Recomendado)"}),w.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full",children:"Apenas o Essencial"})]}),w.jsxs("p",{className:"text-xs text-slate-300 mt-1 leading-relaxed",children:["Vem ",w.jsx("strong",{children:"somente com os arquivos necessários para o site funcionar"}),": ",w.jsx("code",{className:"text-cyan-300",children:"index.html"}),", ",w.jsx("code",{className:"text-cyan-300",children:"manifest.webmanifest"}),", ",w.jsx("code",{className:"text-cyan-300",children:"sw.js"}),", pasta ",w.jsx("code",{className:"text-cyan-300",children:"assets/"})," e ícones. Sem arquivos de programação extras!"]})]})]})}),w.jsx("button",{onClick:N,disabled:b,className:"w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md",children:b?w.jsxs(w.Fragment,{children:[w.jsx(C0,{className:"w-4 h-4 animate-spin"}),w.jsx("span",{children:"Empacotando arquivos do site..."})]}):w.jsxs(w.Fragment,{children:[w.jsx(La,{className:"w-4 h-4"}),w.jsx("span",{children:"Baixar Apenas os Arquivos do Site (.ZIP)"})]})})]}),w.jsxs("div",{className:"p-4 bg-slate-900/90 border border-slate-700/80 rounded-xl space-y-2",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-2 text-slate-300 font-semibold text-xs md:text-sm",children:[w.jsx(b1,{className:"w-4 h-4 text-slate-400"}),w.jsx("span",{children:"Código-Fonte Completo de Programação (20 arquivos)"})]}),w.jsxs("button",{onClick:A,disabled:C,className:"flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",children:[C?w.jsx(C0,{className:"w-3.5 h-3.5 animate-spin"}):w.jsx(La,{className:"w-3.5 h-3.5"}),w.jsx("span",{children:"Baixar Código (.zip)"})]})]}),w.jsxs("p",{className:"text-[11px] text-slate-400",children:["Contém os 20 arquivos com React, TypeScript, ",w.jsx("code",{className:"text-slate-300",children:"package.json"})," e configurações para programadores editarem no VS Code."]})]}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[w.jsxs("div",{className:"bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1",children:[w.jsx(v1,{className:"w-4 h-4"})," Formato JSON"]}),w.jsx("p",{className:"text-xs text-slate-400",children:"Ideal para desenvolvedores, APIs locais, banco de dados NoSQL ou integração com novos softwares."})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsxs("button",{onClick:S,className:"flex-1 flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold px-3 py-2 rounded-md text-xs transition-colors",children:[w.jsx(La,{className:"w-3.5 h-3.5"})," Baixar .json"]}),w.jsx("button",{onClick:T,className:"flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-md text-xs transition-colors",title:"Copiar JSON",children:_?w.jsx(Zu,{className:"w-3.5 h-3.5 text-emerald-400"}):"Copiar"})]})]}),w.jsxs("div",{className:"bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1",children:[w.jsx(y1,{className:"w-4 h-4"})," Formato CSV / Excel"]}),w.jsx("p",{className:"text-xs text-slate-400",children:"Abre no Microsoft Excel, Google Planilhas ou LibreOffice com todas as colunas de dosagens e diluições."})]}),w.jsxs("button",{onClick:m,className:"w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-md text-xs transition-colors",children:[w.jsx(La,{className:"w-3.5 h-3.5"})," Baixar .csv (Planilha)"]})]})]}),w.jsxs("div",{className:"text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800",children:[w.jsx("p",{className:"font-semibold text-slate-300 mb-1",children:"Onde esses dados estão no código?"}),w.jsxs("p",{children:["O arquivo central com todos os medicamentos, doses de referência e fórmulas é o ",w.jsx("code",{className:"text-cyan-300",children:"constants.ts"}),". Para adicionar uma nova droga ou alterar apresentações, basta editá-lo."]})]}),w.jsx("div",{className:"flex justify-end pt-2",children:w.jsx("button",{onClick:ee,className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors",children:"Fechar"})})]})})};function tb(){const[k,ee]=Ve.useState(null),[_,h]=Ve.useState(!1),[C,p]=Ve.useState(!1);return Ve.useEffect(()=>{const d=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;h(d);const v=window.navigator.userAgent.toLowerCase(),A=/iphone|ipad|ipod/.test(v);p(A);const N=S=>{S.preventDefault(),ee(S)},c=()=>{h(!0),ee(null)};return window.addEventListener("beforeinstallprompt",N),window.addEventListener("appinstalled",c),()=>{window.removeEventListener("beforeinstallprompt",N),window.removeEventListener("appinstalled",c)}},[]),{isInstallable:!!k,isInstalled:_,isIOS:C,install:async()=>{if(!k)return!1;await k.prompt();const{outcome:d}=await k.userChoice;return d==="accepted"?(h(!0),ee(null),!0):!1}}}const ab=()=>{const{isInstallable:k,isInstalled:ee,isIOS:_,install:h}=tb(),[C,p]=Ve.useState(!1);return ee?w.jsxs("span",{className:"hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg",children:[w.jsx(Zu,{className:"w-3.5 h-3.5"})," App Instalado"]}):k?w.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors",children:[w.jsx(La,{className:"w-4 h-4"}),w.jsx("span",{children:"Instalar App"})]}):w.jsxs(w.Fragment,{children:[w.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md transition-colors",title:"Instalar este app no seu celular ou computador (PWA)",children:[w.jsx(Lu,{className:"w-4 h-4"}),w.jsx("span",{children:"Instalar App"})]}),C&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150",children:w.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-700",children:[w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"p-2 bg-emerald-500/20 text-emerald-400 rounded-lg",children:w.jsx(Lu,{className:"w-5 h-5"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-base font-bold text-white",children:"Instalar como Aplicativo (PWA)"}),w.jsx("p",{className:"text-xs text-slate-400",children:"Funciona 100% offline no celular e no computador"})]})]}),w.jsx("button",{onClick:()=>p(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors",children:w.jsx(J0,{className:"w-5 h-5"})})]}),w.jsxs("div",{className:"space-y-3 text-xs text-slate-300",children:[_?w.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[w.jsxs("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[w.jsx(w1,{className:"w-4 h-4"})," No iPhone ou iPad (Safari):"]}),w.jsxs("ol",{className:"list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1",children:[w.jsxs("li",{children:["Toque no botão de ",w.jsx("strong",{children:"Compartilhar"})," (ícone de quadrado com seta para cima) na barra do Safari."]}),w.jsxs("li",{children:["Role para baixo e toque em ",w.jsx("strong",{children:'"Adicionar à Tela de Início"'}),"."]}),w.jsxs("li",{children:["Confirme tocando em ",w.jsx("strong",{children:'"Adicionar"'})," no canto superior direito."]})]})]}):w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[w.jsxs("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[w.jsx(Lu,{className:"w-4 h-4"})," No Android (Chrome / Edge):"]}),w.jsxs("ol",{className:"list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1",children:[w.jsxs("li",{children:["Toque no menu de ",w.jsx("strong",{children:"3 pontinhos (⋮)"})," no canto superior do navegador."]}),w.jsxs("li",{children:["Selecione ",w.jsx("strong",{children:'"Instalar aplicativo"'})," ou ",w.jsx("strong",{children:'"Adicionar à tela inicial"'}),"."]}),w.jsx("li",{children:"Pronto! Ele abrirá em tela cheia como um app nativo."})]})]}),w.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[w.jsxs("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[w.jsx(T1,{className:"w-4 h-4"})," No Computador (Chrome / Edge / Brave):"]}),w.jsxs("p",{className:"leading-relaxed",children:["Clique no ícone de ",w.jsx("strong",{children:"instalar"})," (um monitor com seta para baixo) na barra de endereços do navegador à direita da URL."]})]})]}),w.jsxs("div",{className:"p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg text-emerald-300 flex items-start gap-2",children:[w.jsx(Zu,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),w.jsxs("span",{children:[w.jsx("strong",{children:"Vantagem do PWA:"})," O app é salvo na memória do seu dispositivo e funciona mesmo no subsolo do hospital sem sinal de rede!"]})]})]}),w.jsx("button",{onClick:()=>p(!1),className:"mt-2 w-full rounded-lg bg-slate-700 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-600 transition-colors",children:"Fechar"})]})})]})};function lb(){const[k,ee]=Ve.useState(typeof navigator<"u"?navigator.onLine:!0);return Ve.useEffect(()=>{const _=()=>ee(!0),h=()=>ee(!1);return window.addEventListener("online",_),window.addEventListener("offline",h),()=>{window.removeEventListener("online",_),window.removeEventListener("offline",h)}},[]),k}const ib=()=>lb()?null:w.jsxs("div",{className:"fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-amber-400/40 animate-bounce",children:[w.jsx(X0,{className:"w-4 h-4 text-amber-200"}),w.jsx("span",{children:"Modo Offline Ativo — Todos os cálculos continuam funcionando localmente."})]});function sb(){const[k,ee]=Ve.useState(70),[_,h]=Ve.useState(Ht[0].name),[C,p]=Ve.useState(""),[b,d]=Ve.useState(0),[v,A]=Ve.useState(!1),N=Ve.useMemo(()=>{var f;const m=C.trim().toLowerCase();return m?Ht.flatMap(g=>g.drugs.map(y=>({...y,categoryName:g.name}))).filter(g=>g.name.toLowerCase().includes(m)||g.description.toLowerCase().includes(m)||g.categoryName.toLowerCase().includes(m)||g.notes.toLowerCase().includes(m)):((f=Ht.find(g=>g.name===_))==null?void 0:f.drugs)||[]},[_,C]),c=()=>{ee(70),p(""),h(Ht[0].name),d(m=>m+1)},S=[50,60,70,80,90,100];return w.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans",children:[w.jsx("header",{className:"bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-30 shadow-lg",children:w.jsxs("div",{className:"container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-xl text-cyan-400 flex items-center justify-center",children:w.jsx(g1,{className:"w-6 h-6 animate-pulse"})}),w.jsxs("div",{children:[w.jsx("h1",{className:"text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2",children:"Calculadora de Doses de Emergência"}),w.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[w.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-full",children:[w.jsx(X0,{className:"w-3 h-3"})," 100% Offline (Sem APIs)"]}),w.jsx("span",{className:"hidden sm:inline-block text-[11px] text-slate-400",children:"Cálculo local direto no navegador"})]})]})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(ab,{}),w.jsxs("button",{onClick:()=>A(!0),className:"flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-sm",title:"Exportar dados para JSON ou CSV",children:[w.jsx(La,{className:"w-4 h-4 text-cyan-400"}),w.jsx("span",{children:"Exportar Dados"})]})]})]})}),w.jsxs("main",{className:"container mx-auto px-4 py-6 flex-grow space-y-6",children:[w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[w.jsxs("div",{className:"lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md",children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsx("label",{htmlFor:"weight",className:"text-sm font-semibold text-cyan-300 flex items-center gap-1.5",children:"Peso do Paciente (kg)"}),w.jsx("span",{className:"text-xs text-slate-400",children:"Todos os cálculos ajustam-se instantaneamente"})]}),w.jsxs("div",{className:"flex gap-3 items-center",children:[w.jsxs("div",{className:"relative flex-grow",children:[w.jsx("input",{id:"weight",type:"number",min:"1",max:"300",step:"0.5",value:k||"",onChange:m=>ee(parseFloat(m.target.value)||0),placeholder:"Ex: 70",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"}),w.jsx("span",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg pointer-events-none",children:"kg"})]}),w.jsxs("button",{onClick:c,className:"px-3 py-3 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors flex items-center gap-1.5 text-xs font-semibold",title:"Redefinir peso e campos",children:[w.jsx(_1,{className:"w-4 h-4"}),w.jsx("span",{className:"hidden sm:inline",children:"Resetar"})]})]}),w.jsxs("div",{className:"mt-3 flex items-center gap-2 flex-wrap text-xs",children:[w.jsx("span",{className:"text-slate-400 font-medium",children:"Pesos frequentes:"}),S.map(m=>w.jsxs("button",{onClick:()=>ee(m),className:`px-3 py-1 font-semibold rounded-md transition-all ${k===m?"bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20":"bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white"}`,children:[m," kg"]},m))]})]}),w.jsxs("div",{className:"lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md flex flex-col justify-between",children:[w.jsxs("div",{children:[w.jsxs("label",{htmlFor:"search",className:"text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-2",children:[w.jsx(M1,{className:"w-4 h-4 text-cyan-400"}),"Busca Rápida de Medicamentos"]}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{id:"search",type:"text",value:C,onChange:m=>p(m.target.value),placeholder:"Ex: Noradrenalina, Fentanil...",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"}),C&&w.jsx("button",{onClick:()=>p(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded",children:"Limpar"})]})]}),w.jsx("p",{className:"text-[11px] text-slate-400 mt-2",children:C?`Filtrando pelo termo "${C}" em todas as categorias`:"Digite para pesquisar em todo o catálogo de emergência"})]})]}),C?w.jsxs("div",{className:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 p-3 rounded-lg text-sm",children:[w.jsxs("span",{className:"text-slate-300",children:["Encontrados: ",w.jsx("strong",{className:"text-cyan-400",children:N.length}),' medicamento(s) para "',w.jsx("strong",{children:C}),'"']}),w.jsx("button",{onClick:()=>p(""),className:"text-xs text-cyan-400 hover:underline",children:"Voltar para visão por categorias"})]}):w.jsx("div",{className:"border-b border-slate-700 overflow-x-auto pb-1 flex gap-2",children:Ht.map(m=>{const T=_===m.name;return w.jsxs("button",{onClick:()=>h(m.name),className:`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${T?"bg-slate-800 text-cyan-400 border-cyan-400 shadow-sm":"text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"}`,children:[w.jsx("span",{children:m.name}),w.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${T?"bg-cyan-500/20 text-cyan-300":"bg-slate-700 text-slate-400"}`,children:m.drugs.length})]},m.name)})}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:N.length>0?N.map(m=>w.jsx(i1,{drug:m,patientWeight:k},m.name)):w.jsxs("div",{className:"col-span-full py-12 text-center text-slate-400 bg-slate-800/40 rounded-xl border border-slate-700/60",children:[w.jsx(C1,{className:"w-8 h-8 text-amber-400 mx-auto mb-2"}),w.jsxs("p",{className:"text-base font-semibold text-slate-200",children:['Nenhum medicamento encontrado para "',C,'".']}),w.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Tente outro nome ou limpe a busca para navegar pelas categorias."}),w.jsx("button",{onClick:()=>p(""),className:"mt-4 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-md",children:"Limpar Busca"})]})},b),w.jsx("section",{className:"bg-gradient-to-r from-slate-800 via-slate-800 to-cyan-950/40 border border-slate-700 rounded-xl p-5 shadow-lg",children:w.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[w.jsxs("div",{className:"space-y-1",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(L0,{className:"w-5 h-5 text-emerald-400"}),w.jsx("h3",{className:"text-sm md:text-base font-bold text-white",children:"Operação 100% Autônoma e Offline"})]}),w.jsx("p",{className:"text-xs text-slate-300 max-w-2xl leading-relaxed",children:"Todos os cálculos de doses, apresentações de ampolas e velocidades de infusão contínua rodam localmente no dispositivo. Nenhum dado do paciente sai do seu navegador."})]}),w.jsx("div",{className:"flex items-center gap-2 shrink-0",children:w.jsxs("button",{onClick:()=>A(!0),className:"px-4 py-2.5 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-900 flex items-center gap-1.5 transition-colors shadow-md",children:[w.jsx(x1,{className:"w-4 h-4"}),"Exportar Dados Clínicos (JSON/CSV)"]})})]})})]}),w.jsx("footer",{className:"border-t border-slate-800 bg-slate-900/90 py-6 text-slate-400 text-xs",children:w.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-300 font-semibold",children:"Calculadora de Doses de Emergência & UTI"}),w.jsx("p",{className:"text-slate-500 mt-0.5",children:"Ferramenta auxiliar de cálculo clínico. Não substitui o julgamento profissional e protocolos institucionais."})]}),w.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-500",children:[w.jsx("span",{children:"• 100% Client-side"}),w.jsx("span",{children:"• Zero chamadas de API"}),w.jsx("span",{children:"• PWA Instalável & Offline"})]})]})}),w.jsx(nb,{isOpen:v,onClose:()=>A(!1)}),w.jsx(ib,{})]})}const ob="modulepreload",rb=function(k,ee){return new URL(k,ee).href},D0={},ub=function(ee,_,h){let C=Promise.resolve();if(_&&_.length>0){let b=function(N){return Promise.all(N.map(c=>Promise.resolve(c).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const d=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),A=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));C=b(_.map(N=>{if(N=rb(N,h),N in D0)return;D0[N]=!0;const c=N.endsWith(".css"),S=c?'[rel="stylesheet"]':"";if(!!h)for(let f=d.length-1;f>=0;f--){const g=d[f];if(g.href===N&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${N}"]${S}`))return;const T=document.createElement("link");if(T.rel=c?"stylesheet":ob,c||(T.as="script"),T.crossOrigin="",T.href=N,A&&T.setAttribute("nonce",A),document.head.appendChild(T),c)return new Promise((f,g)=>{T.addEventListener("load",f),T.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${N}`)))})}))}function p(b){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=b,window.dispatchEvent(d),!d.defaultPrevented)throw b}return C.then(b=>{for(const d of b||[])d.status==="rejected"&&p(d.reason);return ee().catch(p)})};function cb(k={}){const{immediate:ee=!1,onNeedReload:_,onNeedRefresh:h,onOfflineReady:C,onRegistered:p,onRegisteredSW:b,onRegisterError:d}=k;let v,A;const N=async(S=!0)=>{await A};async function c(){if("serviceWorker"in navigator){if(v=await ub(async()=>{const{Workbox:S}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:S}},[],import.meta.url).then(({Workbox:S})=>new S("./sw.js",{scope:"./",type:"classic"})).catch(S=>{d==null||d(S)}),!v)return;v.addEventListener("activated",S=>{(S.isUpdate||S.isExternal)&&(_?_():window.location.reload())}),v.addEventListener("installed",S=>{S.isUpdate||C==null||C()}),v.register({immediate:ee}).then(S=>{b?b("./sw.js",S):p==null||p(S)}).catch(S=>{d==null||d(S)})}}return A=c(),N}const F0=document.getElementById("root");if(!F0)throw new Error("Could not find root element to mount to");const db=e1.createRoot(F0);db.render(w.jsx(Qg.StrictMode,{children:w.jsx(sb,{})}));try{"serviceWorker"in navigator&&cb({immediate:!0,onRegisterError(k){console.warn("PWA service worker registration warning:",k)}})}catch(k){console.warn("PWA service worker initialization warning:",k)}
