(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Tm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},Ho={},qc={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function jg(){if(s0)return Et;s0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function S(U,J,qe){this.props=U,this.context=J,this.refs=C,this.updater=qe||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function b(U,J,qe){this.props=U,this.context=J,this.refs=C,this.updater=qe||x}var L=b.prototype=new y;L.constructor=b,M(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(U,J,qe){var He,Fe={},se=null,Se=null;if(J!=null)for(He in J.ref!==void 0&&(Se=J.ref),J.key!==void 0&&(se=""+J.key),J)B.call(J,He)&&!F.hasOwnProperty(He)&&(Fe[He]=J[He]);var pe=arguments.length-2;if(pe===1)Fe.children=qe;else if(1<pe){for(var De=Array(pe),Ze=0;Ze<pe;Ze++)De[Ze]=arguments[Ze+2];Fe.children=De}if(U&&U.defaultProps)for(He in pe=U.defaultProps,pe)Fe[He]===void 0&&(Fe[He]=pe[He]);return{$$typeof:s,type:U,key:se,ref:Se,props:Fe,_owner:N.current}}function D(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function O(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(qe){return J[qe]})}var Q=/\/+/g;function le(U,J){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):J.toString(36)}function ue(U,J,qe,He,Fe){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(se){case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case s:case e:Se=!0}}if(Se)return Se=U,Fe=Fe(Se),U=He===""?"."+le(Se,0):He,P(Fe)?(qe="",U!=null&&(qe=U.replace(Q,"$&/")+"/"),ue(Fe,J,qe,"",function(Ze){return Ze})):Fe!=null&&(V(Fe)&&(Fe=D(Fe,qe+(!Fe.key||Se&&Se.key===Fe.key?"":(""+Fe.key).replace(Q,"$&/")+"/")+U)),J.push(Fe)),1;if(Se=0,He=He===""?".":He+":",P(U))for(var pe=0;pe<U.length;pe++){se=U[pe];var De=He+le(se,pe);Se+=ue(se,J,qe,De,Fe)}else if(De=g(U),typeof De=="function")for(U=De.call(U),pe=0;!(se=U.next()).done;)se=se.value,De=He+le(se,pe++),Se+=ue(se,J,qe,De,Fe);else if(se==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Se}function G(U,J,qe){if(U==null)return U;var He=[],Fe=0;return ue(U,He,"","",function(se){return J.call(qe,se,Fe++)}),He}function K(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(qe){(U._status===0||U._status===-1)&&(U._status=1,U._result=qe)},function(qe){(U._status===0||U._status===-1)&&(U._status=2,U._result=qe)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},j={transition:null},oe={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:j,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:G,forEach:function(U,J,qe){G(U,function(){J.apply(this,arguments)},qe)},count:function(U){var J=0;return G(U,function(){J++}),J},toArray:function(U){return G(U,function(J){return J})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Et.Component=S,Et.Fragment=t,Et.Profiler=o,Et.PureComponent=b,Et.StrictMode=r,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,Et.act=ae,Et.cloneElement=function(U,J,qe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=M({},U.props),Fe=U.key,se=U.ref,Se=U._owner;if(J!=null){if(J.ref!==void 0&&(se=J.ref,Se=N.current),J.key!==void 0&&(Fe=""+J.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(De in J)B.call(J,De)&&!F.hasOwnProperty(De)&&(He[De]=J[De]===void 0&&pe!==void 0?pe[De]:J[De])}var De=arguments.length-2;if(De===1)He.children=qe;else if(1<De){pe=Array(De);for(var Ze=0;Ze<De;Ze++)pe[Ze]=arguments[Ze+2];He.children=pe}return{$$typeof:s,type:U.type,key:Fe,ref:se,props:He,_owner:Se}},Et.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Et.createElement=T,Et.createFactory=function(U){var J=T.bind(null,U);return J.type=U,J},Et.createRef=function(){return{current:null}},Et.forwardRef=function(U){return{$$typeof:f,render:U}},Et.isValidElement=V,Et.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:K}},Et.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},Et.startTransition=function(U){var J=j.transition;j.transition={};try{U()}finally{j.transition=J}},Et.unstable_act=ae,Et.useCallback=function(U,J){return Y.current.useCallback(U,J)},Et.useContext=function(U){return Y.current.useContext(U)},Et.useDebugValue=function(){},Et.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},Et.useEffect=function(U,J){return Y.current.useEffect(U,J)},Et.useId=function(){return Y.current.useId()},Et.useImperativeHandle=function(U,J,qe){return Y.current.useImperativeHandle(U,J,qe)},Et.useInsertionEffect=function(U,J){return Y.current.useInsertionEffect(U,J)},Et.useLayoutEffect=function(U,J){return Y.current.useLayoutEffect(U,J)},Et.useMemo=function(U,J){return Y.current.useMemo(U,J)},Et.useReducer=function(U,J,qe){return Y.current.useReducer(U,J,qe)},Et.useRef=function(U){return Y.current.useRef(U)},Et.useState=function(U){return Y.current.useState(U)},Et.useSyncExternalStore=function(U,J,qe){return Y.current.useSyncExternalStore(U,J,qe)},Et.useTransition=function(){return Y.current.useTransition()},Et.version="18.3.1",Et}var o0;function vd(){return o0||(o0=1,qc.exports=jg()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function $g(){if(a0)return Ho;a0=1;var s=vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,v={},g=null,x=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(x=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:g,ref:x,props:v,_owner:o.current}}return Ho.Fragment=t,Ho.jsx=c,Ho.jsxs=c,Ho}var l0;function Kg(){return l0||(l0=1,Uc.exports=$g()),Uc.exports}var dn=Kg(),Mf=vd();const Zg=Tm(Mf);var ml={},Fc={exports:{}},On={},Oc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function Jg(){return u0||(u0=1,(function(s){function e(j,oe){var ae=j.length;j.push(oe);e:for(;0<ae;){var U=ae-1>>>1,J=j[U];if(0<o(J,oe))j[U]=oe,j[ae]=J,ae=U;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var oe=j[0],ae=j.pop();if(ae!==oe){j[0]=ae;e:for(var U=0,J=j.length,qe=J>>>1;U<qe;){var He=2*(U+1)-1,Fe=j[He],se=He+1,Se=j[se];if(0>o(Fe,ae))se<J&&0>o(Se,Fe)?(j[U]=Se,j[se]=ae,U=se):(j[U]=Fe,j[He]=ae,U=He);else if(se<J&&0>o(Se,ae))j[U]=Se,j[se]=ae,U=se;else break e}}return oe}function o(j,oe){var ae=j.sortIndex-oe.sortIndex;return ae!==0?ae:j.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,v=null,g=3,x=!1,M=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(j){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=j)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function P(j){if(C=!1,L(j),!M)if(t(h)!==null)M=!0,K(B);else{var oe=t(p);oe!==null&&Y(P,oe.startTime-j)}}function B(j,oe){M=!1,C&&(C=!1,y(T),T=-1),x=!0;var ae=g;try{for(L(oe),v=t(h);v!==null&&(!(v.expirationTime>oe)||j&&!O());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var J=U(v.expirationTime<=oe);oe=s.unstable_now(),typeof J=="function"?v.callback=J:v===t(h)&&r(h),L(oe)}else r(h);v=t(h)}if(v!==null)var qe=!0;else{var He=t(p);He!==null&&Y(P,He.startTime-oe),qe=!1}return qe}finally{v=null,g=ae,x=!1}}var N=!1,F=null,T=-1,D=5,V=-1;function O(){return!(s.unstable_now()-V<D)}function Q(){if(F!==null){var j=s.unstable_now();V=j;var oe=!0;try{oe=F(!0,j)}finally{oe?le():(N=!1,F=null)}}else N=!1}var le;if(typeof b=="function")le=function(){b(Q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,G=ue.port2;ue.port1.onmessage=Q,le=function(){G.postMessage(null)}}else le=function(){S(Q,0)};function K(j){F=j,N||(N=!0,le())}function Y(j,oe){T=S(function(){j(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,K(B))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(j){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ae=g;g=oe;try{return j()}finally{g=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,oe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=g;g=j;try{return oe()}finally{g=ae}},s.unstable_scheduleCallback=function(j,oe,ae){var U=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ae+J,j={id:_++,callback:oe,priorityLevel:j,startTime:ae,expirationTime:J,sortIndex:-1},ae>U?(j.sortIndex=ae,e(p,j),t(h)===null&&j===t(p)&&(C?(y(T),T=-1):C=!0,Y(P,ae-U))):(j.sortIndex=J,e(h,j),M||x||(M=!0,K(B))),j},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(j){var oe=g;return function(){var ae=g;g=oe;try{return j.apply(this,arguments)}finally{g=ae}}}})(Bc)),Bc}var c0;function Qg(){return c0||(c0=1,Oc.exports=Jg()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function e2(){if(f0)return On;f0=1;var s=vd(),e=Qg();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function g(n){return h.call(v,n)?!0:h.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function x(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||x(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,b);S[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,b);S[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,b);S[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),O=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),j=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,U;function J(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var qe=!1;function He(n,i){if(!n||qe)return"";qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=I);break}}}finally{qe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function Fe(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case D:return"Profiler";case T:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rt(n){n._valueTracker||(n._valueTracker=Ze(n))}function wt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function at(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function me(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ee(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _e(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Oe(n,i){_e(n,i);var a=pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&ut(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ue(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,i,a){(i!=="number"||at(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var q=Array.isArray;function lt(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function $e(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ft(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(q(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function we(n,i){var a=pe(i.value),u=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function bt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function R(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?R(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,de=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function ce(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function he(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=ce(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var ke=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function dt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pt=null,St=null,z=null;function Re(n){if(n=Ro(n)){if(typeof pt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Pa(i),pt(n.stateNode,n.type,i))}}function fe(n){St?z?z.push(n):z=[n]:St=n}function ze(){if(St){var n=St,i=z;if(z=St=null,Re(n),i)for(n=0;n<i.length;n++)Re(i[n])}}function Ne(n,i){return n(i)}function ve(){}var Je=!1;function mt(n,i,a){if(Je)return n(i,a);Je=!0;try{return Ne(n,i,a)}finally{Je=!1,(St!==null||z!==null)&&(ve(),ze())}}function Ot(n,i){var a=n.stateNode;if(a===null)return null;var u=Pa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Nt=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Nt=!1}function Yn(n,i,a,u,d,m,w,I,k){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(ye){this.onError(ye)}}var qi=!1,cs=null,Ir=!1,fs=null,Fi={onError:function(n){qi=!0,cs=n}};function oo(n,i,a,u,d,m,w,I,k){qi=!1,cs=null,Yn.apply(Fi,arguments)}function ha(n,i,a,u,d,m,w,I,k){if(oo.apply(this,arguments),qi){if(qi){var re=cs;qi=!1,cs=null}else throw Error(t(198));Ir||(Ir=!0,fs=re)}}function _i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ur(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ao(n){if(_i(n)!==n)throw Error(t(188))}function ds(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return ao(d),n;if(m===u)return ao(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,u=m;break}if(I===u){w=!0,u=d,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,u=d;break}if(I===u){w=!0,u=m,a=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function lo(n){return n=ds(n),n!==null?uo(n):null}function uo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=uo(n);if(i!==null)return i;n=n.sibling}return null}var pa=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,ru=e.unstable_shouldYield,su=e.unstable_requestPaint,Xt=e.unstable_now,ou=e.unstable_getCurrentPriorityLevel,co=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,ie=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,Ie=null;function Ye(n){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(ee,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:gt,Qe=Math.log,it=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(Qe(n)/it|0)|0}var _t=64,tt=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?u=Ct(I):(m&=w,m!==0&&(u=Ct(m)))}else w=a&~d,w!==0?u=Ct(w):m!==0&&(u=Ct(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Le(i),d=1<<a,u|=n[a],i&=~d;return u}function Gt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Le(m),I=1<<w,k=d[w];k===-1?((I&a)===0||(I&u)!==0)&&(d[w]=Gt(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function We(){var n=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),n}function hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Le(i),n[i]=a}function Ln(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Le(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Nn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Le(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var Mt=0;function Oi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var It,zt,ni,qt,ii,vi=!1,qr=[],sr=null,or=null,ar=null,fo=new Map,ho=new Map,lr=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(n,i){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ro(i),i!==null&&zt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function _1(n,i,a,u,d){switch(i){case"focusin":return sr=po(sr,n,i,a,u,d),!0;case"dragenter":return or=po(or,n,i,a,u,d),!0;case"mouseover":return ar=po(ar,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return fo.set(m,po(fo.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ho.set(m,po(ho.get(m)||null,n,i,a,u,d)),!0}return!1}function Hd(n){var i=Fr(n.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=Ur(a),i!==null){n.blockedOn=i,ii(n.priority,function(){ni(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ae=u,a.target.dispatchEvent(u),Ae=null}else return i=Ro(a),i!==null&&zt(i),n.blockedOn=a,!1;i.shift()}return!0}function Gd(n,i,a){ga(n)&&a.delete(i)}function v1(){vi=!1,sr!==null&&ga(sr)&&(sr=null),or!==null&&ga(or)&&(or=null),ar!==null&&ga(ar)&&(ar=null),fo.forEach(Gd),ho.forEach(Gd)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,vi||(vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,v1)))}function go(n){function i(d){return mo(d,n)}if(0<qr.length){mo(qr[0],n);for(var a=1;a<qr.length;a++){var u=qr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(sr!==null&&mo(sr,n),or!==null&&mo(or,n),ar!==null&&mo(ar,n),fo.forEach(i),ho.forEach(i),a=0;a<lr.length;a++)u=lr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Hd(a),a.blockedOn===null&&lr.shift()}var hs=P.ReactCurrentBatchConfig,_a=!0;function x1(n,i,a,u){var d=Mt,m=hs.transition;hs.transition=null;try{Mt=1,au(n,i,a,u)}finally{Mt=d,hs.transition=m}}function S1(n,i,a,u){var d=Mt,m=hs.transition;hs.transition=null;try{Mt=4,au(n,i,a,u)}finally{Mt=d,hs.transition=m}}function au(n,i,a,u){if(_a){var d=lu(n,i,a,u);if(d===null)wu(n,i,u,va,a),Vd(n,u);else if(_1(d,n,i,a,u))u.stopPropagation();else if(Vd(n,u),i&4&&-1<g1.indexOf(n)){for(;d!==null;){var m=Ro(d);if(m!==null&&It(m),m=lu(n,i,a,u),m===null&&wu(n,i,u,va,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else wu(n,i,u,null,a)}}var va=null;function lu(n,i,a,u){if(va=null,n=dt(u),n=Fr(n),n!==null)if(i=_i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ur(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return va=n,null}function Wd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ou()){case co:return 1;case A:return 4;case W:case ie:return 16;case te:return 536870912;default:return 16}default:return 16}}var ur=null,uu=null,xa=null;function Xd(){if(xa)return xa;var n,i=uu,a=i.length,u,d="value"in ur?ur.value:ur.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===d[m-u];u++);return xa=d.slice(n,1<u?1-u:void 0)}function Sa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function Yd(){return!1}function kn(n){function i(a,u,d,m,w){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ya:Yd,this.isPropagationStopped=Yd,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=kn(ps),_o=ae({},ps,{view:0,detail:0}),y1=kn(_o),fu,du,vo,Ma=ae({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(fu=n.screenX-vo.screenX,du=n.screenY-vo.screenY):du=fu=0,vo=n),fu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),jd=kn(Ma),M1=ae({},Ma,{dataTransfer:0}),E1=kn(M1),T1=ae({},_o,{relatedTarget:0}),hu=kn(T1),w1=ae({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=kn(w1),C1=ae({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),R1=kn(C1),b1=ae({},ps,{data:0}),$d=kn(b1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D1(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=N1[n])?!!i[n]:!1}function pu(){return D1}var I1=ae({},_o,{key:function(n){if(n.key){var i=P1[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Sa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?Sa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),U1=kn(I1),q1=ae({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=kn(q1),F1=ae({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),O1=kn(F1),B1=ae({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=kn(B1),z1=ae({},Ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=kn(z1),H1=[9,13,27,32],mu=f&&"CompositionEvent"in window,xo=null;f&&"documentMode"in document&&(xo=document.documentMode);var G1=f&&"TextEvent"in window&&!xo,Zd=f&&(!mu||xo&&8<xo&&11>=xo),Jd=" ",Qd=!1;function eh(n,i){switch(n){case"keyup":return H1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function W1(n,i){switch(n){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Qd=!0,Jd);case"textInput":return n=i.data,n===Jd&&Qd?null:n;default:return null}}function X1(n,i){if(ms)return n==="compositionend"||!mu&&eh(n,i)?(n=Xd(),xa=uu=ur=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zd&&i.locale!=="ko"?null:i.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Y1[n.type]:i==="textarea"}function ih(n,i,a,u){fe(u),i=Ca(i,"onChange"),0<i.length&&(a=new cu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var So=null,yo=null;function j1(n){yh(n,0)}function Ea(n){var i=Ss(n);if(wt(i))return n}function $1(n,i){if(n==="change")return i}var rh=!1;if(f){var gu;if(f){var _u="oninput"in document;if(!_u){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),_u=typeof sh.oninput=="function"}gu=_u}else gu=!1;rh=gu&&(!document.documentMode||9<document.documentMode)}function oh(){So&&(So.detachEvent("onpropertychange",ah),yo=So=null)}function ah(n){if(n.propertyName==="value"&&Ea(yo)){var i=[];ih(i,yo,n,dt(n)),mt(j1,i)}}function K1(n,i,a){n==="focusin"?(oh(),So=i,yo=a,So.attachEvent("onpropertychange",ah)):n==="focusout"&&oh()}function Z1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ea(yo)}function J1(n,i){if(n==="click")return Ea(i)}function Q1(n,i){if(n==="input"||n==="change")return Ea(i)}function eg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:eg;function Mo(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ri(n[d],i[d]))return!1}return!0}function lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uh(n,i){var a=lh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function ch(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ch(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var n=window,i=at();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=at(n.document)}return i}function vu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function tg(n){var i=fh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ch(a.ownerDocument.documentElement,a)){if(u!==null&&vu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=uh(a,m);var w=uh(a,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ng=f&&"documentMode"in document&&11>=document.documentMode,gs=null,xu=null,Eo=null,Su=!1;function dh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||gs==null||gs!==at(u)||(u=gs,"selectionStart"in u&&vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Eo&&Mo(Eo,u)||(Eo=u,u=Ca(xu,"onSelect"),0<u.length&&(i=new cu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=gs)))}function Ta(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},yu={},hh={};f&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function wa(n){if(yu[n])return yu[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in hh)return yu[n]=i[a];return n}var ph=wa("animationend"),mh=wa("animationiteration"),gh=wa("animationstart"),_h=wa("transitionend"),vh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){vh.set(n,i),l(i,[n])}for(var Mu=0;Mu<xh.length;Mu++){var Eu=xh[Mu],ig=Eu.toLowerCase(),rg=Eu[0].toUpperCase()+Eu.slice(1);cr(ig,"on"+rg)}cr(ph,"onAnimationEnd"),cr(mh,"onAnimationIteration"),cr(gh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(_h,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Sh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ha(u,i,void 0,n),n.currentTarget=null}function yh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var I=u[w],k=I.instance,re=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;Sh(d,I,re),m=k}else for(w=0;w<u.length;w++){if(I=u[w],k=I.instance,re=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;Sh(d,I,re),m=k}}}if(Ir)throw n=fs,Ir=!1,fs=null,n}function Vt(n,i){var a=i[Lu];a===void 0&&(a=i[Lu]=new Set);var u=n+"__bubble";a.has(u)||(Mh(i,n,2,!1),a.add(u))}function Tu(n,i,a){var u=0;i&&(u|=4),Mh(a,n,u,i)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[Aa]){n[Aa]=!0,r.forEach(function(a){a!=="selectionchange"&&(sg.has(a)||Tu(a,!1,n),Tu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Aa]||(i[Aa]=!0,Tu("selectionchange",!1,i))}}function Mh(n,i,a,u){switch(Wd(i)){case 1:var d=x1;break;case 4:d=S1;break;default:d=au}a=d.bind(null,i,a,n),d=void 0,!Nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function wu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Fr(I),w===null)return;if(k=w.tag,k===5||k===6){u=m=w;continue e}I=I.parentNode}}u=u.return}mt(function(){var re=m,ye=dt(a),Me=[];e:{var xe=vh.get(n);if(xe!==void 0){var Xe=cu,Ke=n;switch(n){case"keypress":if(Sa(a)===0)break e;case"keydown":case"keyup":Xe=U1;break;case"focusin":Ke="focus",Xe=hu;break;case"focusout":Ke="blur",Xe=hu;break;case"beforeblur":case"afterblur":Xe=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=O1;break;case ph:case mh:case gh:Xe=A1;break;case _h:Xe=k1;break;case"scroll":Xe=y1;break;case"wheel":Xe=V1;break;case"copy":case"cut":case"paste":Xe=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Kd}var et=(i&4)!==0,Qt=!et&&n==="scroll",Z=et?xe!==null?xe+"Capture":null:xe;et=[];for(var H=re,ne;H!==null;){ne=H;var Ce=ne.stateNode;if(ne.tag===5&&Ce!==null&&(ne=Ce,Z!==null&&(Ce=Ot(H,Z),Ce!=null&&et.push(Ao(H,Ce,ne)))),Qt)break;H=H.return}0<et.length&&(xe=new Xe(xe,Ke,null,a,ye),Me.push({event:xe,listeners:et}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",xe&&a!==Ae&&(Ke=a.relatedTarget||a.fromElement)&&(Fr(Ke)||Ke[Bi]))break e;if((Xe||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Xe?(Ke=a.relatedTarget||a.toElement,Xe=re,Ke=Ke?Fr(Ke):null,Ke!==null&&(Qt=_i(Ke),Ke!==Qt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Xe=null,Ke=re),Xe!==Ke)){if(et=jd,Ce="onMouseLeave",Z="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(et=Kd,Ce="onPointerLeave",Z="onPointerEnter",H="pointer"),Qt=Xe==null?xe:Ss(Xe),ne=Ke==null?xe:Ss(Ke),xe=new et(Ce,H+"leave",Xe,a,ye),xe.target=Qt,xe.relatedTarget=ne,Ce=null,Fr(ye)===re&&(et=new et(Z,H+"enter",Ke,a,ye),et.target=ne,et.relatedTarget=Qt,Ce=et),Qt=Ce,Xe&&Ke)t:{for(et=Xe,Z=Ke,H=0,ne=et;ne;ne=vs(ne))H++;for(ne=0,Ce=Z;Ce;Ce=vs(Ce))ne++;for(;0<H-ne;)et=vs(et),H--;for(;0<ne-H;)Z=vs(Z),ne--;for(;H--;){if(et===Z||Z!==null&&et===Z.alternate)break t;et=vs(et),Z=vs(Z)}et=null}else et=null;Xe!==null&&Eh(Me,xe,Xe,et,!1),Ke!==null&&Qt!==null&&Eh(Me,Qt,Ke,et,!0)}}e:{if(xe=re?Ss(re):window,Xe=xe.nodeName&&xe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&xe.type==="file")var nt=$1;else if(nh(xe))if(rh)nt=Q1;else{nt=Z1;var st=K1}else(Xe=xe.nodeName)&&Xe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(nt=J1);if(nt&&(nt=nt(n,re))){ih(Me,nt,a,ye);break e}st&&st(n,xe,re),n==="focusout"&&(st=xe._wrapperState)&&st.controlled&&xe.type==="number"&&ut(xe,"number",xe.value)}switch(st=re?Ss(re):window,n){case"focusin":(nh(st)||st.contentEditable==="true")&&(gs=st,xu=re,Eo=null);break;case"focusout":Eo=xu=gs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,dh(Me,a,ye);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":dh(Me,a,ye)}var ot;if(mu)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else ms?eh(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Zd&&a.locale!=="ko"&&(ms||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ms&&(ot=Xd()):(ur=ye,uu="value"in ur?ur.value:ur.textContent,ms=!0)),st=Ca(re,ht),0<st.length&&(ht=new $d(ht,n,null,a,ye),Me.push({event:ht,listeners:st}),ot?ht.data=ot:(ot=th(a),ot!==null&&(ht.data=ot)))),(ot=G1?W1(n,a):X1(n,a))&&(re=Ca(re,"onBeforeInput"),0<re.length&&(ye=new $d("onBeforeInput","beforeinput",null,a,ye),Me.push({event:ye,listeners:re}),ye.data=ot))}yh(Me,i)})}function Ao(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ca(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ot(n,a),m!=null&&u.unshift(Ao(n,m,d)),m=Ot(n,i),m!=null&&u.push(Ao(n,m,d))),n=n.return}return u}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Eh(n,i,a,u,d){for(var m=i._reactName,w=[];a!==null&&a!==u;){var I=a,k=I.alternate,re=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&re!==null&&(I=re,d?(k=Ot(a,m),k!=null&&w.unshift(Ao(a,k,I))):d||(k=Ot(a,m),k!=null&&w.push(Ao(a,k,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var og=/\r\n?/g,ag=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(og,`
`).replace(ag,"")}function Ra(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function ba(){}var Au=null,Cu=null;function Ru(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(n){return wh.resolve(null).then(n).catch(cg)}:bu;function cg(n){setTimeout(function(){throw n})}function Pu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),go(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);go(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),xi="__reactFiber$"+xs,Co="__reactProps$"+xs,Bi="__reactContainer$"+xs,Lu="__reactEvents$"+xs,fg="__reactListeners$"+xs,dg="__reactHandles$"+xs;function Fr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[xi])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function Ro(n){return n=n[xi]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pa(n){return n[Co]||null}var Nu=[],ys=-1;function dr(n){return{current:n}}function Ht(n){0>ys||(n.current=Nu[ys],Nu[ys]=null,ys--)}function kt(n,i){ys++,Nu[ys]=n.current,n.current=i}var hr={},vn=dr(hr),Dn=dr(!1),Or=hr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return hr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function In(n){return n=n.childContextTypes,n!=null}function La(){Ht(Dn),Ht(vn)}function Ch(n,i,a){if(vn.current!==hr)throw Error(t(168));kt(vn,i),kt(Dn,a)}function Rh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return ae({},a,u)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Or=vn.current,kt(vn,n),kt(Dn,Dn.current),!0}function bh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Rh(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Ht(Dn),Ht(vn),kt(vn,n)):Ht(Dn),kt(Dn,a)}var ki=null,Da=!1,Du=!1;function Ph(n){ki===null?ki=[n]:ki.push(n)}function hg(n){Da=!0,Ph(n)}function pr(){if(!Du&&ki!==null){Du=!0;var n=0,i=Mt;try{var a=ki;for(Mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ki=null,Da=!1}catch(d){throw ki!==null&&(ki=ki.slice(n+1)),pa(co,pr),d}finally{Mt=i,Du=!1}}return null}var Es=[],Ts=0,Ia=null,Ua=0,jn=[],$n=0,Br=null,zi=1,Vi="";function kr(n,i){Es[Ts++]=Ua,Es[Ts++]=Ia,Ia=n,Ua=i}function Lh(n,i,a){jn[$n++]=zi,jn[$n++]=Vi,jn[$n++]=Br,Br=n;var u=zi;n=Vi;var d=32-Le(u)-1;u&=~(1<<d),a+=1;var m=32-Le(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,zi=1<<32-Le(i)+d|a<<d|u,Vi=m+n}else zi=1<<m|a<<d|u,Vi=n}function Iu(n){n.return!==null&&(kr(n,1),Lh(n,1,0))}function Uu(n){for(;n===Ia;)Ia=Es[--Ts],Es[Ts]=null,Ua=Es[--Ts],Es[Ts]=null;for(;n===Br;)Br=jn[--$n],jn[$n]=null,Vi=jn[--$n],jn[$n]=null,zi=jn[--$n],jn[$n]=null}var zn=null,Vn=null,Wt=!1,si=null;function Nh(n,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:zi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function qu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fu(n){if(Wt){var i=Vn;if(i){var a=i;if(!Dh(n,i)){if(qu(n))throw Error(t(418));i=fr(a.nextSibling);var u=zn;i&&Dh(n,i)?Nh(u,a):(n.flags=n.flags&-4097|2,Wt=!1,zn=n)}}else{if(qu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,zn=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function qa(n){if(n!==zn)return!1;if(!Wt)return Ih(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ru(n.type,n.memoizedProps)),i&&(i=Vn)){if(qu(n))throw Uh(),Error(t(418));for(;i;)Nh(n,i),i=fr(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?fr(n.stateNode.nextSibling):null;return!0}function Uh(){for(var n=Vn;n;)n=fr(n.nextSibling)}function ws(){Vn=zn=null,Wt=!1}function Ou(n){si===null?si=[n]:si.push(n)}var pg=P.ReactCurrentBatchConfig;function bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qh(n){var i=n._init;return i(n._payload)}function Fh(n){function i(Z,H){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[H],Z.flags|=16):ne.push(H)}}function a(Z,H){if(!n)return null;for(;H!==null;)i(Z,H),H=H.sibling;return null}function u(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function d(Z,H){return Z=Mr(Z,H),Z.index=0,Z.sibling=null,Z}function m(Z,H,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<H?(Z.flags|=2,H):ne):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,H,ne,Ce){return H===null||H.tag!==6?(H=bc(ne,Z.mode,Ce),H.return=Z,H):(H=d(H,ne),H.return=Z,H)}function k(Z,H,ne,Ce){var nt=ne.type;return nt===F?ye(Z,H,ne.props.children,Ce,ne.key):H!==null&&(H.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===K&&qh(nt)===H.type)?(Ce=d(H,ne.props),Ce.ref=bo(Z,H,ne),Ce.return=Z,Ce):(Ce=al(ne.type,ne.key,ne.props,null,Z.mode,Ce),Ce.ref=bo(Z,H,ne),Ce.return=Z,Ce)}function re(Z,H,ne,Ce){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Pc(ne,Z.mode,Ce),H.return=Z,H):(H=d(H,ne.children||[]),H.return=Z,H)}function ye(Z,H,ne,Ce,nt){return H===null||H.tag!==7?(H=jr(ne,Z.mode,Ce,nt),H.return=Z,H):(H=d(H,ne),H.return=Z,H)}function Me(Z,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=bc(""+H,Z.mode,ne),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return ne=al(H.type,H.key,H.props,null,Z.mode,ne),ne.ref=bo(Z,null,H),ne.return=Z,ne;case N:return H=Pc(H,Z.mode,ne),H.return=Z,H;case K:var Ce=H._init;return Me(Z,Ce(H._payload),ne)}if(q(H)||oe(H))return H=jr(H,Z.mode,ne,null),H.return=Z,H;Fa(Z,H)}return null}function xe(Z,H,ne,Ce){var nt=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return nt!==null?null:I(Z,H,""+ne,Ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:return ne.key===nt?k(Z,H,ne,Ce):null;case N:return ne.key===nt?re(Z,H,ne,Ce):null;case K:return nt=ne._init,xe(Z,H,nt(ne._payload),Ce)}if(q(ne)||oe(ne))return nt!==null?null:ye(Z,H,ne,Ce,null);Fa(Z,ne)}return null}function Xe(Z,H,ne,Ce,nt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return Z=Z.get(ne)||null,I(H,Z,""+Ce,nt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return Z=Z.get(Ce.key===null?ne:Ce.key)||null,k(H,Z,Ce,nt);case N:return Z=Z.get(Ce.key===null?ne:Ce.key)||null,re(H,Z,Ce,nt);case K:var st=Ce._init;return Xe(Z,H,ne,st(Ce._payload),nt)}if(q(Ce)||oe(Ce))return Z=Z.get(ne)||null,ye(H,Z,Ce,nt,null);Fa(H,Ce)}return null}function Ke(Z,H,ne,Ce){for(var nt=null,st=null,ot=H,ht=H=0,cn=null;ot!==null&&ht<ne.length;ht++){ot.index>ht?(cn=ot,ot=null):cn=ot.sibling;var Dt=xe(Z,ot,ne[ht],Ce);if(Dt===null){ot===null&&(ot=cn);break}n&&ot&&Dt.alternate===null&&i(Z,ot),H=m(Dt,H,ht),st===null?nt=Dt:st.sibling=Dt,st=Dt,ot=cn}if(ht===ne.length)return a(Z,ot),Wt&&kr(Z,ht),nt;if(ot===null){for(;ht<ne.length;ht++)ot=Me(Z,ne[ht],Ce),ot!==null&&(H=m(ot,H,ht),st===null?nt=ot:st.sibling=ot,st=ot);return Wt&&kr(Z,ht),nt}for(ot=u(Z,ot);ht<ne.length;ht++)cn=Xe(ot,Z,ht,ne[ht],Ce),cn!==null&&(n&&cn.alternate!==null&&ot.delete(cn.key===null?ht:cn.key),H=m(cn,H,ht),st===null?nt=cn:st.sibling=cn,st=cn);return n&&ot.forEach(function(Er){return i(Z,Er)}),Wt&&kr(Z,ht),nt}function et(Z,H,ne,Ce){var nt=oe(ne);if(typeof nt!="function")throw Error(t(150));if(ne=nt.call(ne),ne==null)throw Error(t(151));for(var st=nt=null,ot=H,ht=H=0,cn=null,Dt=ne.next();ot!==null&&!Dt.done;ht++,Dt=ne.next()){ot.index>ht?(cn=ot,ot=null):cn=ot.sibling;var Er=xe(Z,ot,Dt.value,Ce);if(Er===null){ot===null&&(ot=cn);break}n&&ot&&Er.alternate===null&&i(Z,ot),H=m(Er,H,ht),st===null?nt=Er:st.sibling=Er,st=Er,ot=cn}if(Dt.done)return a(Z,ot),Wt&&kr(Z,ht),nt;if(ot===null){for(;!Dt.done;ht++,Dt=ne.next())Dt=Me(Z,Dt.value,Ce),Dt!==null&&(H=m(Dt,H,ht),st===null?nt=Dt:st.sibling=Dt,st=Dt);return Wt&&kr(Z,ht),nt}for(ot=u(Z,ot);!Dt.done;ht++,Dt=ne.next())Dt=Xe(ot,Z,ht,Dt.value,Ce),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?ht:Dt.key),H=m(Dt,H,ht),st===null?nt=Dt:st.sibling=Dt,st=Dt);return n&&ot.forEach(function(Yg){return i(Z,Yg)}),Wt&&kr(Z,ht),nt}function Qt(Z,H,ne,Ce){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:e:{for(var nt=ne.key,st=H;st!==null;){if(st.key===nt){if(nt=ne.type,nt===F){if(st.tag===7){a(Z,st.sibling),H=d(st,ne.props.children),H.return=Z,Z=H;break e}}else if(st.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===K&&qh(nt)===st.type){a(Z,st.sibling),H=d(st,ne.props),H.ref=bo(Z,st,ne),H.return=Z,Z=H;break e}a(Z,st);break}else i(Z,st);st=st.sibling}ne.type===F?(H=jr(ne.props.children,Z.mode,Ce,ne.key),H.return=Z,Z=H):(Ce=al(ne.type,ne.key,ne.props,null,Z.mode,Ce),Ce.ref=bo(Z,H,ne),Ce.return=Z,Z=Ce)}return w(Z);case N:e:{for(st=ne.key;H!==null;){if(H.key===st)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){a(Z,H.sibling),H=d(H,ne.children||[]),H.return=Z,Z=H;break e}else{a(Z,H);break}else i(Z,H);H=H.sibling}H=Pc(ne,Z.mode,Ce),H.return=Z,Z=H}return w(Z);case K:return st=ne._init,Qt(Z,H,st(ne._payload),Ce)}if(q(ne))return Ke(Z,H,ne,Ce);if(oe(ne))return et(Z,H,ne,Ce);Fa(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(a(Z,H.sibling),H=d(H,ne),H.return=Z,Z=H):(a(Z,H),H=bc(ne,Z.mode,Ce),H.return=Z,Z=H),w(Z)):a(Z,H)}return Qt}var As=Fh(!0),Oh=Fh(!1),Oa=dr(null),Ba=null,Cs=null,Bu=null;function ku(){Bu=Cs=Ba=null}function zu(n){var i=Oa.current;Ht(Oa),n._currentValue=i}function Vu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Ba=n,Bu=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Bu!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Ba===null)throw Error(t(308));Cs=n,Ba.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var zr=null;function Hu(n){zr===null?zr=[n]:zr.push(n)}function Bh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Hu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(n,u)}function Hi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var mr=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Hi(n,a)}return d=u.interleaved,d===null?(i.next=i,Hu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Hi(n,a)}function ka(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Nn(n,a)}}function zh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function za(n,i,a,u){var d=n.updateQueue;mr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,re=k.next;k.next=null,w===null?m=re:w.next=re,w=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==w&&(I===null?ye.firstBaseUpdate=re:I.next=re,ye.lastBaseUpdate=k))}if(m!==null){var Me=d.baseState;w=0,ye=re=k=null,I=m;do{var xe=I.lane,Xe=I.eventTime;if((u&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Xe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ke=n,et=I;switch(xe=i,Xe=a,et.tag){case 1:if(Ke=et.payload,typeof Ke=="function"){Me=Ke.call(Xe,Me,xe);break e}Me=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=et.payload,xe=typeof Ke=="function"?Ke.call(Xe,Me,xe):Ke,xe==null)break e;Me=ae({},Me,xe);break e;case 2:mr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[I]:xe.push(I))}else Xe={eventTime:Xe,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(re=ye=Xe,k=Me):ye=ye.next=Xe,w|=xe;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(k=Me),d.baseState=k,d.firstBaseUpdate=re,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=w,n.lanes=w,n.memoizedState=Me}}function Vh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Po={},Si=dr(Po),Lo=dr(Po),No=dr(Po);function Vr(n){if(n===Po)throw Error(t(174));return n}function Wu(n,i){switch(kt(No,i),kt(Lo,n),kt(Si,Po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Ht(Si),kt(Si,i)}function bs(){Ht(Si),Ht(Lo),Ht(No)}function Hh(n){Vr(No.current);var i=Vr(Si.current),a=E(i,n.type);i!==a&&(kt(Lo,n),kt(Si,a))}function Xu(n){Lo.current===n&&(Ht(Si),Ht(Lo))}var Yt=dr(0);function Va(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function ju(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var Ha=P.ReactCurrentDispatcher,$u=P.ReactCurrentBatchConfig,Hr=0,jt=null,rn=null,ln=null,Ga=!1,Do=!1,Io=0,mg=0;function xn(){throw Error(t(321))}function Ku(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ri(n[a],i[a]))return!1;return!0}function Zu(n,i,a,u,d,m){if(Hr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=n===null||n.memoizedState===null?xg:Sg,n=a(u,d),Do){m=0;do{if(Do=!1,Io=0,25<=m)throw Error(t(301));m+=1,ln=rn=null,i.updateQueue=null,Ha.current=yg,n=a(u,d)}while(Do)}if(Ha.current=Ya,i=rn!==null&&rn.next!==null,Hr=0,ln=rn=jt=null,Ga=!1,i)throw Error(t(300));return n}function Ju(){var n=Io!==0;return Io=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=n:ln=ln.next=n,ln}function Zn(){if(rn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},ln===null?jt.memoizedState=ln=n:ln=ln.next=n}return ln}function Uo(n,i){return typeof i=="function"?i(n):i}function Qu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=rn,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=w=null,k=null,re=m;do{var ye=re.lane;if((Hr&ye)===ye)k!==null&&(k=k.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Me={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};k===null?(I=k=Me,w=u):k=k.next=Me,jt.lanes|=ye,Gr|=ye}re=re.next}while(re!==null&&re!==m);k===null?w=u:k.next=I,ri(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,jt.lanes|=m,Gr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ec(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);ri(m,i.memoizedState)||(Un=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Gh(){}function Wh(n,i){var a=jt,u=Zn(),d=i(),m=!ri(u.memoizedState,d);if(m&&(u.memoizedState=d,Un=!0),u=u.queue,tc(jh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,qo(9,Yh.bind(null,a,u,d,i),void 0,null),un===null)throw Error(t(349));(Hr&30)!==0||Xh(a,i,d)}return d}function Xh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Yh(n,i,a,u){i.value=a,i.getSnapshot=u,$h(i)&&Kh(n)}function jh(n,i,a){return a(function(){$h(i)&&Kh(n)})}function $h(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ri(n,a)}catch{return!0}}function Kh(n){var i=Hi(n,1);i!==null&&ui(i,n,1,-1)}function Zh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},i.queue=n,n=n.dispatch=vg.bind(null,jt,n),[i.memoizedState,n]}function qo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Jh(){return Zn().memoizedState}function Wa(n,i,a,u){var d=yi();jt.flags|=n,d.memoizedState=qo(1|i,a,void 0,u===void 0?null:u)}function Xa(n,i,a,u){var d=Zn();u=u===void 0?null:u;var m=void 0;if(rn!==null){var w=rn.memoizedState;if(m=w.destroy,u!==null&&Ku(u,w.deps)){d.memoizedState=qo(i,a,m,u);return}}jt.flags|=n,d.memoizedState=qo(1|i,a,m,u)}function Qh(n,i){return Wa(8390656,8,n,i)}function tc(n,i){return Xa(2048,8,n,i)}function ep(n,i){return Xa(4,2,n,i)}function tp(n,i){return Xa(4,4,n,i)}function np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ip(n,i,a){return a=a!=null?a.concat([n]):null,Xa(4,4,np.bind(null,i,n),a)}function nc(){}function rp(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function sp(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function op(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a):(ri(a,i)||(a=We(),jt.lanes|=a,Gr|=a,n.baseState=!0),i)}function gg(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var u=$u.transition;$u.transition={};try{n(!1),i()}finally{Mt=a,$u.transition=u}}function ap(){return Zn().memoizedState}function _g(n,i,a){var u=Sr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},lp(n))up(i,a);else if(a=Bh(n,i,a,u),a!==null){var d=Cn();ui(a,n,u,d),cp(a,i,u)}}function vg(n,i,a){var u=Sr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(lp(n))up(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(d.hasEagerState=!0,d.eagerState=I,ri(I,w)){var k=i.interleaved;k===null?(d.next=d,Hu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Bh(n,i,d,u),a!==null&&(d=Cn(),ui(a,n,u,d),cp(a,i,u))}}function lp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function up(n,i){Do=Ga=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function cp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Nn(n,a)}}var Ya={readContext:Kn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},xg={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wa(4194308,4,np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wa(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=yi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=_g.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Zh,useDebugValue:nc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Zh(!1),i=n[0];return n=gg.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=jt,d=yi();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));(Hr&30)!==0||Xh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Qh(jh.bind(null,u,m,n),[n]),u.flags|=2048,qo(9,Yh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=yi(),i=un.identifierPrefix;if(Wt){var a=Vi,u=zi;a=(u&~(1<<32-Le(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Io++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=mg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Sg={readContext:Kn,useCallback:rp,useContext:Kn,useEffect:tc,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Qu,useRef:Jh,useState:function(){return Qu(Uo)},useDebugValue:nc,useDeferredValue:function(n){var i=Zn();return op(i,rn.memoizedState,n)},useTransition:function(){var n=Qu(Uo)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:ap,unstable_isNewReconciler:!1},yg={readContext:Kn,useCallback:rp,useContext:Kn,useEffect:tc,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:ec,useRef:Jh,useState:function(){return ec(Uo)},useDebugValue:nc,useDeferredValue:function(n){var i=Zn();return rn===null?i.memoizedState=n:op(i,rn.memoizedState,n)},useTransition:function(){var n=ec(Uo)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:ap,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ic(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ja={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=Sr(n),m=Gi(u,d);m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(ui(i,n,d,u),ka(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=Sr(n),m=Gi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(ui(i,n,d,u),ka(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),u=Sr(n),d=Gi(a,u);d.tag=2,i!=null&&(d.callback=i),i=gr(n,d,u),i!==null&&(ui(i,n,u,a),ka(i,n,u))}};function fp(n,i,a,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,u)||!Mo(d,m):!0}function dp(n,i,a){var u=!1,d=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=In(i)?Or:vn.current,u=i.contextTypes,m=(u=u!=null)?Ms(n,d):hr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function hp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function rc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Gu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=In(i)?Or:vn.current,d.context=Ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ic(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",u=i;do a+=Fe(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function sc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function oc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Mg=typeof WeakMap=="function"?WeakMap:Map;function pp(n,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){tl||(tl=!0,yc=u),oc(n,i)},a}function mp(n,i,a){a=Gi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){oc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){oc(n,i),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function gp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Mg;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=qg.bind(null,n,i,a),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function vp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Eg=P.ReactCurrentOwner,Un=!1;function An(n,i,a,u){i.child=n===null?Oh(i,null,a,u):As(i,n.child,a,u)}function xp(n,i,a,u,d){a=a.render;var m=i.ref;return Rs(i,d),u=Zu(n,i,a,u,m,d),a=Ju(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Wt&&a&&Iu(i),i.flags|=1,An(n,i,u,d),i.child)}function Sp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Rc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,yp(n,i,m,u,d)):(n=al(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(w,u)&&n.ref===i.ref)return Wi(n,i,d)}return i.flags|=1,n=Mr(m,u),n.ref=i.ref,n.return=i,i.child=n}function yp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(Mo(m,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,Wi(n,i,d)}return ac(n,i,a,u,d)}function Mp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ns,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ns,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,kt(Ns,Hn),Hn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,kt(Ns,Hn),Hn|=u;return An(n,i,d,a),i.child}function Ep(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ac(n,i,a,u,d){var m=In(a)?Or:vn.current;return m=Ms(i,m),Rs(i,d),a=Zu(n,i,a,u,m,d),u=Ju(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Wt&&u&&Iu(i),i.flags|=1,An(n,i,a,d),i.child)}function Tp(n,i,a,u,d){if(In(a)){var m=!0;Na(i)}else m=!1;if(Rs(i,d),i.stateNode===null)Ka(n,i),dp(i,a,u),rc(i,a,u,d),u=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var k=w.context,re=a.contextType;typeof re=="object"&&re!==null?re=Kn(re):(re=In(a)?Or:vn.current,re=Ms(i,re));var ye=a.getDerivedStateFromProps,Me=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==u||k!==re)&&hp(i,w,u,re),mr=!1;var xe=i.memoizedState;w.state=xe,za(i,u,w,d),k=i.memoizedState,I!==u||xe!==k||Dn.current||mr?(typeof ye=="function"&&(ic(i,a,ye,u),k=i.memoizedState),(I=mr||fp(i,a,I,u,xe,k,re))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),w.props=u,w.state=k,w.context=re,u=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,kh(n,i),I=i.memoizedProps,re=i.type===i.elementType?I:oi(i.type,I),w.props=re,Me=i.pendingProps,xe=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=In(a)?Or:vn.current,k=Ms(i,k));var Xe=a.getDerivedStateFromProps;(ye=typeof Xe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Me||xe!==k)&&hp(i,w,u,k),mr=!1,xe=i.memoizedState,w.state=xe,za(i,u,w,d);var Ke=i.memoizedState;I!==Me||xe!==Ke||Dn.current||mr?(typeof Xe=="function"&&(ic(i,a,Xe,u),Ke=i.memoizedState),(re=mr||fp(i,a,re,u,xe,Ke,k)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ke,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ke,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ke),w.props=u,w.state=Ke,w.context=k,u=re):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return lc(n,i,a,u,m,d)}function lc(n,i,a,u,d,m){Ep(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&bh(i,a,!1),Wi(n,i,m);u=i.stateNode,Eg.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,m),i.child=As(i,null,I,m)):An(n,i,I,m),i.memoizedState=u.state,d&&bh(i,a,!0),i.child}function wp(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),Wu(n,i.containerInfo)}function Ap(n,i,a,u,d){return ws(),Ou(d),i.flags|=256,An(n,i,a,u),i.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,a){var u=i.pendingProps,d=Yt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Yt,d&1),n===null)return Fu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ll(w,u,0,null),n=jr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=cc(a),i.memoizedState=uc,n):fc(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Tg(n,i,w,u,I,d,a);if(m){m=u.fallback,w=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Mr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Mr(I,m):(m=jr(m,w,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?cc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=uc,u}return m=n.child,n=m.sibling,u=Mr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function fc(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,a,u){return u!==null&&Ou(u),As(i,n.child,null,a),n=fc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Tg(n,i,a,u,d,m,w){if(a)return i.flags&256?(i.flags&=-257,u=sc(Error(t(422))),$a(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ll({mode:"visible",children:u.children},d,0,null),m=jr(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=cc(w),i.memoizedState=uc,m);if((i.mode&1)===0)return $a(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=sc(m,u,void 0),$a(n,i,w,u)}if(I=(w&n.childLanes)!==0,Un||I){if(u=un,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Hi(n,d),ui(u,n,d,-1))}return Cc(),u=sc(Error(t(421))),$a(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Fg.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Vn=fr(d.nextSibling),zn=i,Wt=!0,si=null,n!==null&&(jn[$n++]=zi,jn[$n++]=Vi,jn[$n++]=Br,zi=n.id,Vi=n.overflow,Br=i),i=fc(i,u.children),i.flags|=4096,i)}function Rp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Vu(n.return,i,a)}function dc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function bp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(An(n,i,u.children,a),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,a,i);else if(n.tag===19)Rp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Yt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Va(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),dc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Va(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dc(i,!0,a,null,m);break;case"together":dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ka(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function wg(n,i,a){switch(i.tag){case 3:wp(i),ws();break;case 5:Hh(i);break;case 1:In(i.type)&&Na(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;kt(Oa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cp(n,i,a):(kt(Yt,Yt.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return bp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,Mp(n,i,a)}return Wi(n,i,a)}var Pp,hc,Lp,Np;Pp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hc=function(){},Lp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Vr(Si.current);var m=null;switch(a){case"input":d=me(n,d),u=me(n,u),m=[];break;case"select":d=ae({},d,{value:void 0}),u=ae({},u,{value:void 0}),m=[];break;case"textarea":d=$e(n,d),u=$e(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ba)}Ge(a,u);var w;a=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var I=d[re];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in u){var k=u[re];if(I=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&k!==I&&(k!=null||I!=null))if(re==="style")if(I){for(w in I)!I.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&I[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(m||(m=[]),m.push(re,a)),a=k;else re==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(re,k)):re==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(re,""+k):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(k!=null&&re==="onScroll"&&Vt("scroll",n),m||I===k||(m=[])):(m=m||[]).push(re,k))}a&&(m=m||[]).push("style",a);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},Np=function(n,i,a,u){a!==u&&(i.flags|=4)};function Fo(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ag(n,i,a){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return In(i.type)&&La(),Sn(i),null;case 3:return u=i.stateNode,bs(),Ht(Dn),Ht(vn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(Tc(si),si=null))),hc(n,i),Sn(i),null;case 5:Xu(i);var d=Vr(No.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Sn(i),null}if(n=Vr(Si.current),qa(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[xi]=i,u[Co]=m,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(d=0;d<To.length;d++)Vt(To[d],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Ee(u,m),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",u);break;case"textarea":ft(u,m),Vt("invalid",u)}Ge(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ra(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ra(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Vt("scroll",u)}switch(a){case"input":rt(u),Ue(u,m,!0);break;case"textarea":rt(u),bt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=ba)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=R(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[xi]=i,n[Co]=u,Pp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Pe(a,u),a){case"dialog":Vt("cancel",n),Vt("close",n),d=u;break;case"iframe":case"object":case"embed":Vt("load",n),d=u;break;case"video":case"audio":for(d=0;d<To.length;d++)Vt(To[d],n);d=u;break;case"source":Vt("error",n),d=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=u;break;case"details":Vt("toggle",n),d=u;break;case"input":Ee(n,u),d=me(n,u),Vt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ae({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":ft(n,u),d=$e(n,u),Vt("invalid",n);break;default:d=u}Ge(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?he(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&de(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ge(n,k):typeof k=="number"&&ge(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Vt("scroll",n):k!=null&&L(n,m,k,w))}switch(a){case"input":rt(n),Ue(n,u,!1);break;case"textarea":rt(n),bt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?lt(n,!!u.multiple,m,!1):u.defaultValue!=null&&lt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ba)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(n&&i.stateNode!=null)Np(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(No.current),Vr(Si.current),qa(i)){if(u=i.stateNode,a=i.memoizedProps,u[xi]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Ra(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ra(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[xi]=i,i.stateNode=u}return Sn(i),null;case 13:if(Ht(Yt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),ws(),i.flags|=98560,m=!1;else if(m=qa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),m=!1}else si!==null&&(Tc(si),si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?sn===0&&(sn=3):Cc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return bs(),hc(n,i),n===null&&wo(i.stateNode.containerInfo),Sn(i),null;case 10:return zu(i.type._context),Sn(i),null;case 17:return In(i.type)&&La(),Sn(i),null;case 19:if(Ht(Yt),m=i.memoizedState,m===null)return Sn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Fo(m,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Va(n),w!==null){for(i.flags|=128,Fo(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Yt,Yt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Ds&&(i.flags|=128,u=!0,Fo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Va(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Wt)return Sn(i),null}else 2*Xt()-m.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,u=!0,Fo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,a=Yt.current,kt(Yt,u?a&1|2:a&1),i):(Sn(i),null);case 22:case 23:return Ac(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Cg(n,i){switch(Uu(i),i.tag){case 1:return In(i.type)&&La(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),Ht(Dn),Ht(vn),ju(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(Ht(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Yt),null;case 4:return bs(),null;case 10:return zu(i.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Za=!1,yn=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Kt(n,i,u)}else a.current=null}function pc(n,i,a){try{a()}catch(u){Kt(n,i,u)}}var Dp=!1;function bg(n,i){if(Au=_a,n=fh(),vu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,k=-1,re=0,ye=0,Me=n,xe=null;t:for(;;){for(var Xe;Me!==a||d!==0&&Me.nodeType!==3||(I=w+d),Me!==m||u!==0&&Me.nodeType!==3||(k=w+u),Me.nodeType===3&&(w+=Me.nodeValue.length),(Xe=Me.firstChild)!==null;)xe=Me,Me=Xe;for(;;){if(Me===n)break t;if(xe===a&&++re===d&&(I=w),xe===m&&++ye===u&&(k=w),(Xe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Xe}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cu={focusedElem:n,selectionRange:a},_a=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var et=Ke.memoizedProps,Qt=Ke.memoizedState,Z=i.stateNode,H=Z.getSnapshotBeforeUpdate(i.elementType===i.type?et:oi(i.type,et),Qt);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Kt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ke=Dp,Dp=!1,Ke}function Oo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pc(i,a,m)}d=d.next}while(d!==u)}}function Ja(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function mc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Co],delete i[Lu],delete i[fg],delete i[dg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Up(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ba));else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,a),n=n.sibling;n!==null;)gc(n,i,a),n=n.sibling}function _c(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,a),n=n.sibling;n!==null;)_c(n,i,a),n=n.sibling}var pn=null,ai=!1;function _r(n,i,a){for(a=a.child;a!==null;)Fp(n,i,a),a=a.sibling}function Fp(n,i,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 5:yn||Ls(a,i);case 6:var u=pn,d=ai;pn=null,_r(n,i,a),pn=u,ai=d,pn!==null&&(ai?(n=pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(ai?(n=pn,a=a.stateNode,n.nodeType===8?Pu(n.parentNode,a):n.nodeType===1&&Pu(n,a),go(n)):Pu(pn,a.stateNode));break;case 4:u=pn,d=ai,pn=a.stateNode.containerInfo,ai=!0,_r(n,i,a),pn=u,ai=d;break;case 0:case 11:case 14:case 15:if(!yn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&pc(a,i,w),d=d.next}while(d!==u)}_r(n,i,a);break;case 1:if(!yn&&(Ls(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Kt(a,i,I)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(yn=(u=yn)||a.memoizedState!==null,_r(n,i,a),yn=u):_r(n,i,a);break;default:_r(n,i,a)}}function Op(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Rg),i.forEach(function(u){var d=Og.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function li(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,ai=!1;break e;case 3:pn=I.stateNode.containerInfo,ai=!0;break e;case 4:pn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(pn===null)throw Error(t(160));Fp(m,w,d),pn=null,ai=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(re){Kt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Bp(i,n),i=i.sibling}function Bp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),Mi(n),u&4){try{Oo(3,n,n.return),Ja(3,n)}catch(et){Kt(n,n.return,et)}try{Oo(5,n,n.return)}catch(et){Kt(n,n.return,et)}}break;case 1:li(i,n),Mi(n),u&512&&a!==null&&Ls(a,a.return);break;case 5:if(li(i,n),Mi(n),u&512&&a!==null&&Ls(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(et){Kt(n,n.return,et)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&_e(d,m),Pe(I,w);var re=Pe(I,m);for(w=0;w<k.length;w+=2){var ye=k[w],Me=k[w+1];ye==="style"?he(d,Me):ye==="dangerouslySetInnerHTML"?de(d,Me):ye==="children"?ge(d,Me):L(d,ye,Me,re)}switch(I){case"input":Oe(d,m);break;case"textarea":we(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Xe=m.value;Xe!=null?lt(d,!!m.multiple,Xe,!1):xe!==!!m.multiple&&(m.defaultValue!=null?lt(d,!!m.multiple,m.defaultValue,!0):lt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Co]=m}catch(et){Kt(n,n.return,et)}}break;case 6:if(li(i,n),Mi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(et){Kt(n,n.return,et)}}break;case 3:if(li(i,n),Mi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(et){Kt(n,n.return,et)}break;case 4:li(i,n),Mi(n);break;case 13:li(i,n),Mi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=Xt())),u&4&&Op(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(yn=(re=yn)||ye,li(i,n),yn=re):li(i,n),Mi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ye&&(n.mode&1)!==0)for(je=n,ye=n.child;ye!==null;){for(Me=je=ye;je!==null;){switch(xe=je,Xe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Oo(4,xe,xe.return);break;case 1:Ls(xe,xe.return);var Ke=xe.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(et){Kt(u,a,et)}}break;case 5:Ls(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Vp(Me);continue}}Xe!==null?(Xe.return=xe,je=Xe):Vp(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{d=Me.stateNode,re?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,k=Me.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=ce("display",w))}catch(et){Kt(n,n.return,et)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=re?"":Me.memoizedProps}catch(et){Kt(n,n.return,et)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:li(i,n),Mi(n),u&4&&Op(n);break;case 21:break;default:li(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Up(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ge(d,""),u.flags&=-33);var m=qp(n);_c(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,I=qp(n);gc(n,I,w);break;default:throw Error(t(161))}}catch(k){Kt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Pg(n,i,a){je=n,kp(n)}function kp(n,i,a){for(var u=(n.mode&1)!==0;je!==null;){var d=je,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||Za;if(!w){var I=d.alternate,k=I!==null&&I.memoizedState!==null||yn;I=Za;var re=yn;if(Za=w,(yn=k)&&!re)for(je=d;je!==null;)w=je,k=w.child,w.tag===22&&w.memoizedState!==null?Hp(d):k!==null?(k.return=w,je=k):Hp(d);for(;m!==null;)je=m,kp(m),m=m.sibling;je=d,Za=I,yn=re}zp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,je=m):zp(n)}}function zp(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ja(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Vh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&go(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&mc(i)}catch(xe){Kt(i,i.return,xe)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function Vp(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function Hp(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ja(4,i)}catch(k){Kt(i,a,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Kt(i,d,k)}}var m=i.return;try{mc(i)}catch(k){Kt(i,m,k)}break;case 5:var w=i.return;try{mc(i)}catch(k){Kt(i,w,k)}}}catch(k){Kt(i,i.return,k)}if(i===n){je=null;break}var I=i.sibling;if(I!==null){I.return=i.return,je=I;break}je=i.return}}var Lg=Math.ceil,Qa=P.ReactCurrentDispatcher,vc=P.ReactCurrentOwner,Jn=P.ReactCurrentBatchConfig,Pt=0,un=null,tn=null,mn=0,Hn=0,Ns=dr(0),sn=0,Bo=null,Gr=0,el=0,xc=0,ko=null,qn=null,Sc=0,Ds=1/0,Xi=null,tl=!1,yc=null,vr=null,nl=!1,xr=null,il=0,zo=0,Mc=null,rl=-1,sl=0;function Cn(){return(Pt&6)!==0?Xt():rl!==-1?rl:rl=Xt()}function Sr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&mn!==0?mn&-mn:pg.transition!==null?(sl===0&&(sl=We()),sl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Wd(n.type)),n)}function ui(n,i,a,u){if(50<zo)throw zo=0,Mc=null,Error(t(185));yt(n,a,u),((Pt&2)===0||n!==un)&&(n===un&&((Pt&2)===0&&(el|=a),sn===4&&yr(n,mn)),Fn(n,u),a===1&&Pt===0&&(i.mode&1)===0&&(Ds=Xt()+500,Da&&pr()))}function Fn(n,i){var a=n.callbackNode;Ut(n,i);var u=Bt(n,n===un?mn:0);if(u===0)a!==null&&ma(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ma(a),i===1)n.tag===0?hg(Wp.bind(null,n)):Ph(Wp.bind(null,n)),ug(function(){(Pt&6)===0&&pr()}),a=null;else{switch(Oi(u)){case 1:a=co;break;case 4:a=A;break;case 16:a=W;break;case 536870912:a=te;break;default:a=W}a=Qp(a,Gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Gp(n,i){if(rl=-1,sl=0,(Pt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var u=Bt(n,n===un?mn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ol(n,u);else{i=u;var d=Pt;Pt|=2;var m=Yp();(un!==n||mn!==i)&&(Xi=null,Ds=Xt()+500,Xr(n,i));do try{Ig();break}catch(I){Xp(n,I)}while(!0);ku(),Qa.current=m,Pt=d,tn!==null?i=0:(un=null,mn=0,i=sn)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(u=d,i=Ec(n,d))),i===1)throw a=Bo,Xr(n,0),yr(n,u),Fn(n,Xt()),a;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Ng(d)&&(i=ol(n,u),i===2&&(m=en(n),m!==0&&(u=m,i=Ec(n,m))),i===1))throw a=Bo,Xr(n,0),yr(n,u),Fn(n,Xt()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,qn,Xi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=Sc+500-Xt(),10<i)){if(Bt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bu(Yr.bind(null,n,qn,Xi),i);break}Yr(n,qn,Xi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-Le(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=Xt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Lg(u/1960))-u,10<u){n.timeoutHandle=bu(Yr.bind(null,n,qn,Xi),u);break}Yr(n,qn,Xi);break;case 5:Yr(n,qn,Xi);break;default:throw Error(t(329))}}}return Fn(n,Xt()),n.callbackNode===a?Gp.bind(null,n):null}function Ec(n,i){var a=ko;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=qn,qn=a,i!==null&&Tc(i)),n}function Tc(n){qn===null?qn=n:qn.push.apply(qn,n)}function Ng(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!ri(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~xc,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Le(i),u=1<<a;n[a]=-1,i&=~u}}function Wp(n){if((Pt&6)!==0)throw Error(t(327));Is();var i=Bt(n,0);if((i&1)===0)return Fn(n,Xt()),null;var a=ol(n,i);if(n.tag!==0&&a===2){var u=en(n);u!==0&&(i=u,a=Ec(n,u))}if(a===1)throw a=Bo,Xr(n,0),yr(n,i),Fn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,qn,Xi),Fn(n,Xt()),null}function wc(n,i){var a=Pt;Pt|=1;try{return n(i)}finally{Pt=a,Pt===0&&(Ds=Xt()+500,Da&&pr())}}function Wr(n){xr!==null&&xr.tag===0&&(Pt&6)===0&&Is();var i=Pt;Pt|=1;var a=Jn.transition,u=Mt;try{if(Jn.transition=null,Mt=1,n)return n()}finally{Mt=u,Jn.transition=a,Pt=i,(Pt&6)===0&&pr()}}function Ac(){Hn=Ns.current,Ht(Ns)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lg(a)),tn!==null)for(a=tn.return;a!==null;){var u=a;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&La();break;case 3:bs(),Ht(Dn),Ht(vn),ju();break;case 5:Xu(u);break;case 4:bs();break;case 13:Ht(Yt);break;case 19:Ht(Yt);break;case 10:zu(u.type._context);break;case 22:case 23:Ac()}a=a.return}if(un=n,tn=n=Mr(n.current,null),mn=Hn=i,sn=0,Bo=null,xc=el=Gr=0,qn=ko=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}a.pending=u}zr=null}return n}function Xp(n,i){do{var a=tn;try{if(ku(),Ha.current=Ya,Ga){for(var u=jt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ga=!1}if(Hr=0,ln=rn=jt=null,Do=!1,Io=0,vc.current=null,a===null||a.return===null){sn=1,Bo=i,tn=null;break}e:{var m=n,w=a.return,I=a,k=i;if(i=mn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=k,ye=I,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Xe=_p(w);if(Xe!==null){Xe.flags&=-257,vp(Xe,w,I,m,i),Xe.mode&1&&gp(m,re,i),i=Xe,k=re;var Ke=i.updateQueue;if(Ke===null){var et=new Set;et.add(k),i.updateQueue=et}else Ke.add(k);break e}else{if((i&1)===0){gp(m,re,i),Cc();break e}k=Error(t(426))}}else if(Wt&&I.mode&1){var Qt=_p(w);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),vp(Qt,w,I,m,i),Ou(Ps(k,I));break e}}m=k=Ps(k,I),sn!==4&&(sn=2),ko===null?ko=[m]:ko.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=pp(m,k,i);zh(m,Z);break e;case 1:I=k;var H=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(vr===null||!vr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=mp(m,I,i);zh(m,Ce);break e}}m=m.return}while(m!==null)}$p(a)}catch(nt){i=nt,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function Yp(){var n=Qa.current;return Qa.current=Ya,n===null?Ya:n}function Cc(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Gr&268435455)===0&&(el&268435455)===0||yr(un,mn)}function ol(n,i){var a=Pt;Pt|=2;var u=Yp();(un!==n||mn!==i)&&(Xi=null,Xr(n,i));do try{Dg();break}catch(d){Xp(n,d)}while(!0);if(ku(),Pt=a,Qa.current=u,tn!==null)throw Error(t(261));return un=null,mn=0,sn}function Dg(){for(;tn!==null;)jp(tn)}function Ig(){for(;tn!==null&&!ru();)jp(tn)}function jp(n){var i=Jp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?$p(n):tn=i,vc.current=null}function $p(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ag(a,i,Hn),a!==null){tn=a;return}}else{if(a=Cg(a,i),a!==null){a.flags&=32767,tn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);sn===0&&(sn=5)}function Yr(n,i,a){var u=Mt,d=Jn.transition;try{Jn.transition=null,Mt=1,Ug(n,i,a,u)}finally{Jn.transition=d,Mt=u}return null}function Ug(n,i,a,u){do Is();while(xr!==null);if((Pt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ln(n,m),n===un&&(tn=un=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nl||(nl=!0,Qp(W,function(){return Is(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Jn.transition,Jn.transition=null;var w=Mt;Mt=1;var I=Pt;Pt|=4,vc.current=null,bg(n,a),Bp(a,n),tg(Cu),_a=!!Au,Cu=Au=null,n.current=a,Pg(a),su(),Pt=I,Mt=w,Jn.transition=m}else n.current=a;if(nl&&(nl=!1,xr=n,il=d),m=n.pendingLanes,m===0&&(vr=null),Ye(a.stateNode),Fn(n,Xt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,n=yc,yc=null,n;return(il&1)!==0&&n.tag!==0&&Is(),m=n.pendingLanes,(m&1)!==0?n===Mc?zo++:(zo=0,Mc=n):zo=0,pr(),null}function Is(){if(xr!==null){var n=Oi(il),i=Jn.transition,a=Mt;try{if(Jn.transition=null,Mt=16>n?16:n,xr===null)var u=!1;else{if(n=xr,xr=null,il=0,(Pt&6)!==0)throw Error(t(331));var d=Pt;for(Pt|=4,je=n.current;je!==null;){var m=je,w=m.child;if((je.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var re=I[k];for(je=re;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:Oo(8,ye,m)}var Me=ye.child;if(Me!==null)Me.return=ye,je=Me;else for(;je!==null;){ye=je;var xe=ye.sibling,Xe=ye.return;if(Ip(ye),ye===re){je=null;break}if(xe!==null){xe.return=Xe,je=xe;break}je=Xe}}}var Ke=m.alternate;if(Ke!==null){var et=Ke.child;if(et!==null){Ke.child=null;do{var Qt=et.sibling;et.sibling=null,et=Qt}while(et!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,je=w;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oo(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,je=Z;break e}je=m.return}}var H=n.current;for(je=H;je!==null;){w=je;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,je=ne;else e:for(w=H;je!==null;){if(I=je,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ja(9,I)}}catch(nt){Kt(I,I.return,nt)}if(I===w){je=null;break e}var Ce=I.sibling;if(Ce!==null){Ce.return=I.return,je=Ce;break e}je=I.return}}if(Pt=d,pr(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(ee,n)}catch{}u=!0}return u}finally{Mt=a,Jn.transition=i}}return!1}function Kp(n,i,a){i=Ps(a,i),i=pp(n,i,1),n=gr(n,i,1),i=Cn(),n!==null&&(yt(n,1,i),Fn(n,i))}function Kt(n,i,a){if(n.tag===3)Kp(n,n,a);else for(;i!==null;){if(i.tag===3){Kp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Ps(a,n),n=mp(i,n,1),i=gr(i,n,1),n=Cn(),i!==null&&(yt(i,1,n),Fn(i,n));break}}i=i.return}}function qg(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(mn&a)===a&&(sn===4||sn===3&&(mn&130023424)===mn&&500>Xt()-Sc?Xr(n,0):xc|=a),Fn(n,i)}function Zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Cn();n=Hi(n,i),n!==null&&(yt(n,i,a),Fn(n,a))}function Fg(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zp(n,a)}function Og(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Zp(n,a)}var Jp;Jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Un=!1,wg(n,i,a);Un=(n.flags&131072)!==0}else Un=!1,Wt&&(i.flags&1048576)!==0&&Lh(i,Ua,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ka(n,i),n=i.pendingProps;var d=Ms(i,vn.current);Rs(i,a),d=Zu(null,i,u,n,d,a);var m=Ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(u)?(m=!0,Na(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gu(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,rc(i,u,n,a),i=lc(null,i,u,!0,m,a)):(i.tag=0,Wt&&m&&Iu(i),An(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ka(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=kg(u),n=oi(u,n),d){case 0:i=ac(null,i,u,n,a);break e;case 1:i=Tp(null,i,u,n,a);break e;case 11:i=xp(null,i,u,n,a);break e;case 14:i=Sp(null,i,u,oi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),ac(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),Tp(n,i,u,d,a);case 3:e:{if(wp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,kh(n,i),za(i,u,null,a);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ps(Error(t(423)),i),i=Ap(n,i,u,a,d);break e}else if(u!==d){d=Ps(Error(t(424)),i),i=Ap(n,i,u,a,d);break e}else for(Vn=fr(i.stateNode.containerInfo.firstChild),zn=i,Wt=!0,si=null,a=Oh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),u===d){i=Wi(n,i,a);break e}An(n,i,u,a)}i=i.child}return i;case 5:return Hh(i),n===null&&Fu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Ru(u,d)?w=null:m!==null&&Ru(u,m)&&(i.flags|=32),Ep(n,i),An(n,i,w,a),i.child;case 6:return n===null&&Fu(i),null;case 13:return Cp(n,i,a);case 4:return Wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,a):An(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),xp(n,i,u,d,a);case 7:return An(n,i,i.pendingProps,a),i.child;case 8:return An(n,i,i.pendingProps.children,a),i.child;case 12:return An(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,kt(Oa,u._currentValue),u._currentValue=w,m!==null)if(ri(m.value,w)){if(m.children===d.children&&!Dn.current){i=Wi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Gi(-1,a&-a),k.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),re.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Vu(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Vu(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}An(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Rs(i,a),d=Kn(d),u=u(d),i.flags|=1,An(n,i,u,a),i.child;case 14:return u=i.type,d=oi(u,i.pendingProps),d=oi(u.type,d),Sp(n,i,u,d,a);case 15:return yp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),Ka(n,i),i.tag=1,In(u)?(n=!0,Na(i)):n=!1,Rs(i,a),dp(i,u,d),rc(i,u,d,a),lc(null,i,u,!0,n,a);case 19:return bp(n,i,a);case 22:return Mp(n,i,a)}throw Error(t(156,i.tag))};function Qp(n,i){return pa(n,i)}function Bg(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,a,u){return new Bg(n,i,a,u)}function Rc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kg(n){if(typeof n=="function")return Rc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===G)return 14}return 2}function Mr(n,i){var a=n.alternate;return a===null?(a=Qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function al(n,i,a,u,d,m){var w=2;if(u=n,typeof n=="function")Rc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return jr(a.children,d,m,i);case T:w=8,d|=8;break;case D:return n=Qn(12,a,i,d|2),n.elementType=D,n.lanes=m,n;case le:return n=Qn(13,a,i,d),n.elementType=le,n.lanes=m,n;case ue:return n=Qn(19,a,i,d),n.elementType=ue,n.lanes=m,n;case Y:return ll(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:w=10;break e;case O:w=9;break e;case Q:w=11;break e;case G:w=14;break e;case K:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(w,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function jr(n,i,a,u){return n=Qn(7,n,u,i),n.lanes=a,n}function ll(n,i,a,u){return n=Qn(22,n,u,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function bc(n,i,a){return n=Qn(6,n,null,i),n.lanes=a,n}function Pc(n,i,a){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function zg(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lc(n,i,a,u,d,m,w,I,k){return n=new zg(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(m),n}function Vg(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function e0(n){if(!n)return hr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return Rh(n,a,i)}return i}function t0(n,i,a,u,d,m,w,I,k){return n=Lc(a,u,!0,n,d,m,w,I,k),n.context=e0(null),a=n.current,u=Cn(),d=Sr(a),m=Gi(u,d),m.callback=i??null,gr(a,m,d),n.current.lanes=d,yt(n,d,u),Fn(n,u),n}function ul(n,i,a,u){var d=i.current,m=Cn(),w=Sr(d);return a=e0(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=gr(d,i,w),n!==null&&(ui(n,d,w,m),ka(n,d,w)),w}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function n0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Nc(n,i){n0(n,i),(n=n.alternate)&&n0(n,i)}function Hg(){return null}var i0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dc(n){this._internalRoot=n}fl.prototype.render=Dc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ul(n,i,null,null)},fl.prototype.unmount=Dc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){ul(null,n,null,null)}),i[Bi]=null}};function fl(n){this._internalRoot=n}fl.prototype.unstable_scheduleHydration=function(n){if(n){var i=qt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,n),a===0&&Hd(n)}};function Ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function r0(){}function Gg(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var re=cl(w);m.call(re)}}var w=t0(i,u,n,0,null,!1,!1,"",r0);return n._reactRootContainer=w,n[Bi]=w.current,wo(n.nodeType===8?n.parentNode:n),Wr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var re=cl(k);I.call(re)}}var k=Lc(n,0,!1,null,null,!1,!1,"",r0);return n._reactRootContainer=k,n[Bi]=k.current,wo(n.nodeType===8?n.parentNode:n),Wr(function(){ul(i,k,a,u)}),k}function hl(n,i,a,u,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var k=cl(w);I.call(k)}}ul(i,w,n,d)}else w=Gg(a,i,n,d,u);return cl(w)}It=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Nn(i,a|1),Fn(i,Xt()),(Pt&6)===0&&(Ds=Xt()+500,pr()))}break;case 13:Wr(function(){var u=Hi(n,1);if(u!==null){var d=Cn();ui(u,n,1,d)}}),Nc(n,1)}},zt=function(n){if(n.tag===13){var i=Hi(n,134217728);if(i!==null){var a=Cn();ui(i,n,134217728,a)}Nc(n,134217728)}},ni=function(n){if(n.tag===13){var i=Sr(n),a=Hi(n,i);if(a!==null){var u=Cn();ui(a,n,i,u)}Nc(n,i)}},qt=function(){return Mt},ii=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},pt=function(n,i,a){switch(i){case"input":if(Oe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Pa(u);if(!d)throw Error(t(90));wt(u),Oe(u,d)}}}break;case"textarea":we(n,a);break;case"select":i=a.value,i!=null&&lt(n,!!a.multiple,i,!1)}},Ne=wc,ve=Wr;var Wg={usingClientEntryPoint:!1,Events:[Ro,Ss,Pa,fe,ze,wc]},Vo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xg={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lo(n),n===null?null:n.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||Hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ee=pl.inject(Xg),Ie=pl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(i))throw Error(t(200));return Vg(n,i,null,a)},On.createRoot=function(n,i){if(!Ic(n))throw Error(t(299));var a=!1,u="",d=i0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lc(n,1,!1,null,null,a,!1,u,d),n[Bi]=i.current,wo(n.nodeType===8?n.parentNode:n),new Dc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=lo(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Wr(n)},On.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return hl(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!Ic(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",w=i0;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=t0(i,null,n,1,a??null,d,!1,m,w),n[Bi]=i.current,wo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new fl(i)},On.render=function(n,i,a){if(!dl(i))throw Error(t(200));return hl(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},On.unstable_batchedUpdates=wc,On.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,a,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var d0;function t2(){if(d0)return Fc.exports;d0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fc.exports=e2(),Fc.exports}var h0;function n2(){if(h0)return ml;h0=1;var s=t2();return ml.createRoot=s.createRoot,ml.hydrateRoot=s.hydrateRoot,ml}var i2=n2();const r2=Tm(i2);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="184",s2=0,p0=1,o2=2,kl=1,a2=2,Ko=3,Nr=0,Bn=1,Qi=2,tr=0,Ks=1,m0=2,g0=3,_0=4,l2=5,es=100,u2=101,c2=102,f2=103,d2=104,h2=200,p2=201,m2=202,g2=203,Ef=204,Tf=205,_2=206,v2=207,x2=208,S2=209,y2=210,M2=211,E2=212,T2=213,w2=214,wf=0,Af=1,Cf=2,Js=3,Rf=4,bf=5,Pf=6,Lf=7,wm=0,A2=1,C2=2,Ri=0,Am=1,Cm=2,Rm=3,bm=4,Pm=5,Lm=6,Nm=7,Dm=300,ss=301,Qs=302,kc=303,zc=304,Ql=306,Nf=1e3,er=1001,Df=1002,gn=1003,R2=1004,gl=1005,Tn=1006,Vc=1007,ns=1008,Xn=1009,Im=1010,Um=1011,ra=1012,Sd=1013,Li=1014,Ai=1015,ir=1016,yd=1017,Md=1018,sa=1020,qm=35902,Fm=35899,Om=1021,Bm=1022,mi=1023,rr=1026,is=1027,km=1028,Ed=1029,os=1030,Td=1031,wd=1033,zl=33776,Vl=33777,Hl=33778,Gl=33779,If=35840,Uf=35841,qf=35842,Ff=35843,Of=36196,Bf=37492,kf=37496,zf=37488,Vf=37489,Yl=37490,Hf=37491,Gf=37808,Wf=37809,Xf=37810,Yf=37811,jf=37812,$f=37813,Kf=37814,Zf=37815,Jf=37816,Qf=37817,ed=37818,td=37819,nd=37820,id=37821,rd=36492,sd=36494,od=36495,ad=36283,ld=36284,jl=36285,ud=36286,b2=3200,cd=0,P2=1,Pr="",ti="srgb",$l="srgb-linear",Kl="linear",Ft="srgb",Us=7680,v0=519,L2=512,N2=513,D2=514,Ad=515,I2=516,U2=517,Cd=518,q2=519,x0=35044,S0="300 es",Ci=2e3,oa=2001;function F2(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function O2(){const s=Zl("canvas");return s.style.display="block",s}const y0={};function M0(...s){const e="THREE."+s.shift();console.log(e,...s)}function zm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=zm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Rt(...s){s=zm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fd(...s){const e=s.join(" ");e in y0||(y0[e]=!0,ct(...s))}function B2(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const k2={[wf]:Af,[Cf]:Pf,[Rf]:Lf,[Js]:bf,[Af]:wf,[Pf]:Cf,[Lf]:Rf,[bf]:Js};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let E0=1234567;const ea=Math.PI/180,aa=180/Math.PI;function us(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Rd(s,e){return(s%e+e)%e}function z2(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function V2(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function H2(s,e,t,r){return ta(s,e,1-Math.exp(-t*r))}function G2(s,e=1){return e-Math.abs(Rd(s,e*2)-e)}function W2(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function X2(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Y2(s,e){return s+Math.floor(Math.random()*(e-s+1))}function j2(s,e){return s+Math.random()*(e-s)}function $2(s){return s*(.5-Math.random())}function K2(s){s!==void 0&&(E0=s);let e=E0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z2(s){return s*ea}function J2(s){return s*aa}function Q2(s){return(s&s-1)===0&&s!==0}function e_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function t_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function n_(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),_=c((e+r)/2),v=l((e-r)/2),g=c((e-r)/2),x=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(f*_,h*v,h*g,f*p);break;case"YZY":s.set(h*g,f*_,h*v,f*p);break;case"ZXZ":s.set(h*v,h*g,f*_,f*p);break;case"XZX":s.set(f*_,h*M,h*x,f*p);break;case"YXY":s.set(h*x,f*_,h*M,f*p);break;case"ZYZ":s.set(h*M,h*x,f*_,f*p);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function $s(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const i_={DEG2RAD:ea,RAD2DEG:aa,generateUUID:us,clamp:Tt,euclideanModulo:Rd,mapLinear:z2,inverseLerp:V2,lerp:ta,damp:H2,pingpong:G2,smoothstep:W2,smootherstep:X2,randInt:Y2,randFloat:j2,randFloatSpread:$2,seededRandom:K2,degToRad:Z2,radToDeg:J2,isPowerOfTwo:Q2,ceilPowerOfTwo:e_,floorPowerOfTwo:t_,setQuaternionFromProperEuler:n_,normalize:Rn,denormalize:$s},Fd=class Fd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;let Ve=Fd;class io{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=l[c+0],x=l[c+1],M=l[c+2],C=l[c+3];if(v!==C||h!==g||p!==x||_!==M){let S=h*g+p*x+_*M+v*C;S<0&&(g=-g,x=-x,M=-M,C=-C,S=-S);let y=1-f;if(S<.9995){const b=Math.acos(S),L=Math.sin(b);y=Math.sin(y*b)/L,f=Math.sin(f*b)/L,h=h*y+g*f,p=p*y+x*f,_=_*y+M*f,v=v*y+C*f}else{h=h*y+g*f,p=p*y+x*f,_=_*y+M*f,v=v*y+C*f;const b=1/Math.sqrt(h*h+p*p+_*_+v*v);h*=b,p*=b,_*=b,v*=b}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],_=r[o+3],v=l[c],g=l[c+1],x=l[c+2],M=l[c+3];return e[t]=f*M+_*v+h*x-p*g,e[t+1]=h*M+_*g+p*v-f*x,e[t+2]=p*M+_*x+f*g-h*v,e[t+3]=_*M-f*v-h*g-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(o/2),v=f(l/2),g=h(r/2),x=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=g*_*v+p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v+g*x*M;break;case"YZX":this._x=g*_*v+p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v-g*x*M;break;case"XZY":this._x=g*_*v-p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v+g*x*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],v=t[10],g=r+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-h)*x,this._y=(l-p)*x,this._z=(c-o)*x}else if(r>f&&r>v){const x=2*Math.sqrt(1+r-f-v);this._w=(_-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-r-v);this._w=(l-p)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+_)/x}else{const x=2*Math.sqrt(1+v-r-f);this._w=(c-o)/x,this._x=(l+p)/x,this._y=(h+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+c*f+o*p-l*h,this._y=o*_+c*h+l*f-r*p,this._z=l*_+c*p+r*h-o*f,this._w=c*_-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Od=class Od{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(T0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(T0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),_=2*(f*t-l*o),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*_,this.y=r+h*_+f*p-l*v,this.z=o+h*v+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Od.prototype.isVector3=!0;let X=Od;const Hc=new X,T0=new io,Bd=class Bd{constructor(e,t,r,o,l,c,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],_=r[4],v=r[7],g=r[2],x=r[5],M=r[8],C=o[0],S=o[3],y=o[6],b=o[1],L=o[4],P=o[7],B=o[2],N=o[5],F=o[8];return l[0]=c*C+f*b+h*B,l[3]=c*S+f*L+h*N,l[6]=c*y+f*P+h*F,l[1]=p*C+_*b+v*B,l[4]=p*S+_*L+v*N,l[7]=p*y+_*P+v*F,l[2]=g*C+x*b+M*B,l[5]=g*S+x*L+M*N,l[8]=g*y+x*P+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-r*l*_+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=_*c-f*p,g=f*h-_*l,x=p*l-c*h,M=t*v+r*g+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=v*C,e[1]=(o*p-_*r)*C,e[2]=(f*r-o*c)*C,e[3]=g*C,e[4]=(_*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=x*C,e[7]=(r*h-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bd.prototype.isMatrix3=!0;let vt=Bd;const Gc=new vt,w0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const s={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return fd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return fd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$l]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const At=r_();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class s_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=Zl("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=nr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o_=0;class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Wc(o[c].image)):l.push(Wc(o[c]))}else l=Wc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let a_=0;const Xc=new X;class Pn extends ls{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=er,o=er,l=Tn,c=ns,f=mi,h=Xn,p=Pn.DEFAULT_ANISOTROPY,_=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=us(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Dm;Pn.DEFAULT_ANISOTROPY=1;const kd=class kd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],v=h[8],g=h[1],x=h[5],M=h[9],C=h[2],S=h[6],y=h[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,P=(x+1)/2,B=(y+1)/2,N=(_+g)/4,F=(v+C)/4,T=(M+S)/4;return L>P&&L>B?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=N/r,l=F/r):P>B?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=N/o,l=T/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=F/l,o=T/l),this.set(r,o,l,t),this}let b=Math.sqrt((S-M)*(S-M)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(v-C)/b,this.z=(g-_)/b,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kd.prototype.isVector4=!0;let Zt=kd;class l_ extends ls{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Pn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new bd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends l_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vm extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=class Jl{constructor(e,t,r,o,l,c,f,h,p,_,v,g,x,M,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,_,v,g,x,M,C,S)}set(e,t,r,o,l,c,f,h,p,_,v,g,x,M,C,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=x,y[7]=M,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=c*_,x=c*v,M=f*_,C=f*v;t[0]=h*_,t[4]=-h*v,t[8]=p,t[1]=x+M*p,t[5]=g-C*p,t[9]=-f*h,t[2]=C-g*p,t[6]=M+x*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*_,x=h*v,M=p*_,C=p*v;t[0]=g+C*f,t[4]=M*f-x,t[8]=c*p,t[1]=c*v,t[5]=c*_,t[9]=-f,t[2]=x*f-M,t[6]=C+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*_,x=h*v,M=p*_,C=p*v;t[0]=g-C*f,t[4]=-c*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=c*_,t[9]=C-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*_,x=c*v,M=f*_,C=f*v;t[0]=h*_,t[4]=M*p-x,t[8]=g*p+C,t[1]=h*v,t[5]=C*p+g,t[9]=x*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,x=c*p,M=f*h,C=f*p;t[0]=h*_,t[4]=C-g*v,t[8]=M*v+x,t[1]=v,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=x*v+M,t[10]=g-C*v}else if(e.order==="XZY"){const g=c*h,x=c*p,M=f*h,C=f*p;t[0]=h*_,t[4]=-v,t[8]=p*_,t[1]=g*v+C,t[5]=c*_,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*_,t[10]=C*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,f_)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Tr.crossVectors(r,Gn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Tr.crossVectors(r,Gn)),Tr.normalize(),_l.crossVectors(Gn,Tr),o[0]=Tr.x,o[4]=_l.x,o[8]=Gn.x,o[1]=Tr.y,o[5]=_l.y,o[9]=Gn.y,o[2]=Tr.z,o[6]=_l.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],_=r[1],v=r[5],g=r[9],x=r[13],M=r[2],C=r[6],S=r[10],y=r[14],b=r[3],L=r[7],P=r[11],B=r[15],N=o[0],F=o[4],T=o[8],D=o[12],V=o[1],O=o[5],Q=o[9],le=o[13],ue=o[2],G=o[6],K=o[10],Y=o[14],j=o[3],oe=o[7],ae=o[11],U=o[15];return l[0]=c*N+f*V+h*ue+p*j,l[4]=c*F+f*O+h*G+p*oe,l[8]=c*T+f*Q+h*K+p*ae,l[12]=c*D+f*le+h*Y+p*U,l[1]=_*N+v*V+g*ue+x*j,l[5]=_*F+v*O+g*G+x*oe,l[9]=_*T+v*Q+g*K+x*ae,l[13]=_*D+v*le+g*Y+x*U,l[2]=M*N+C*V+S*ue+y*j,l[6]=M*F+C*O+S*G+y*oe,l[10]=M*T+C*Q+S*K+y*ae,l[14]=M*D+C*le+S*Y+y*U,l[3]=b*N+L*V+P*ue+B*j,l[7]=b*F+L*O+P*G+B*oe,l[11]=b*T+L*Q+P*K+B*ae,l[15]=b*D+L*le+P*Y+B*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],v=e[6],g=e[10],x=e[14],M=e[3],C=e[7],S=e[11],y=e[15],b=h*x-p*g,L=f*x-p*v,P=f*g-h*v,B=c*x-p*_,N=c*g-h*_,F=c*v-f*_;return t*(C*b-S*L+y*P)-r*(M*b-S*B+y*N)+o*(M*L-C*B+y*F)-l*(M*P-C*N+S*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=e[9],g=e[10],x=e[11],M=e[12],C=e[13],S=e[14],y=e[15],b=t*f-r*c,L=t*h-o*c,P=t*p-l*c,B=r*h-o*f,N=r*p-l*f,F=o*p-l*h,T=_*C-v*M,D=_*S-g*M,V=_*y-x*M,O=v*S-g*C,Q=v*y-x*C,le=g*y-x*S,ue=b*le-L*Q+P*O+B*V-N*D+F*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ue;return e[0]=(f*le-h*Q+p*O)*G,e[1]=(o*Q-r*le-l*O)*G,e[2]=(C*F-S*N+y*B)*G,e[3]=(g*N-v*F-x*B)*G,e[4]=(h*V-c*le-p*D)*G,e[5]=(t*le-o*V+l*D)*G,e[6]=(S*P-M*F-y*L)*G,e[7]=(_*F-g*P+x*L)*G,e[8]=(c*Q-f*V+p*T)*G,e[9]=(r*V-t*Q-l*T)*G,e[10]=(M*N-C*P+y*b)*G,e[11]=(v*P-_*N-x*b)*G,e[12]=(f*D-c*O-h*T)*G,e[13]=(t*O-r*D+o*T)*G,e[14]=(C*L-M*B-S*b)*G,e[15]=(_*B-v*L+g*b)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+r,_*h-o*c,0,p*h-o*f,_*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,v=f+f,g=l*p,x=l*_,M=l*v,C=c*_,S=c*v,y=f*v,b=h*p,L=h*_,P=h*v,B=r.x,N=r.y,F=r.z;return o[0]=(1-(C+y))*B,o[1]=(x+P)*B,o[2]=(M-L)*B,o[3]=0,o[4]=(x-P)*N,o[5]=(1-(g+y))*N,o[6]=(S+b)*N,o[7]=0,o[8]=(M+L)*F,o[9]=(S-b)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),h=Fs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ci.copy(this);const p=1/c,_=1/f,v=1/h;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=_,ci.elements[5]*=_,ci.elements[6]*=_,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,t.setFromRotationMatrix(ci),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,c,f=Ci,h=!1){const p=this.elements,_=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),x=(r+o)/(r-o);let M,C;if(h)M=l/(c-l),C=c*l/(c-l);else if(f===Ci)M=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(f===oa)M=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Ci,h=!1){const p=this.elements,_=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,C;if(h)M=1/(c-l),C=c/(c-l);else if(f===Ci)M=-2/(c-l),C=-(c+l)/(c-l);else if(f===oa)M=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Jl.prototype.isMatrix4=!0;let Jt=Jl;const Fs=new X,ci=new Jt,c_=new X(0,0,0),f_=new X(1,1,1),Tr=new X,_l=new X,Gn=new X,C0=new Jt,R0=new io;class Dr{constructor(e=0,t=0,r=0,o=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],_=o[9],v=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return C0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const b0=new X,Os=new io,Yi=new Jt,vl=new X,Go=new X,h_=new X,p_=new io,P0=new X(1,0,0),L0=new X(0,1,0),N0=new X(0,0,1),D0={type:"added"},m_={type:"removed"},Bs={type:"childadded",child:null},Yc={type:"childremoved",child:null};class _n extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new X,t=new Dr,r=new io,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new vt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(P0,e)}rotateY(e){return this.rotateOnAxis(L0,e)}rotateZ(e){return this.rotateOnAxis(N0,e)}translateOnAxis(e,t){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(P0,e)}translateY(e){return this.translateOnAxis(L0,e)}translateZ(e){return this.translateOnAxis(N0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Go,vl,this.up):Yi.lookAt(vl,Go,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Yi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),v=c(e.shapes),g=c(e.skeletons),x=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}_n.DEFAULT_UP=new X(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;p.inputState.pinching&&g>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=Rd(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=$c(c,l,e+1/3),this.g=$c(c,l,e),this.b=$c(c,l,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return At.workingToColorSpace(En.copy(this),e),Math.round(Tt(En.r*255,0,255))*65536+Math.round(Tt(En.g*255,0,255))*256+Math.round(Tt(En.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(En.copy(this),t);const r=En.r,o=En.g,l=En.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=_<=.5?v/(c+f):v/(2-c-f),c){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ti){At.workingToColorSpace(En.copy(this),e);const t=En.r,r=En.g,o=En.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(xl);const r=ta(wr.h,xl.h,t),o=ta(wr.s,xl.s,t),l=ta(wr.l,xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Lt;Lt.NAMES=Gm;class __ extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dr,this.environmentIntensity=1,this.environmentRotation=new Dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fi=new X,ji=new X,Kc=new X,$i=new X,ks=new X,zs=new X,I0=new X,Zc=new X,Jc=new X,Qc=new X,ef=new Zt,tf=new Zt,nf=new Zt;class pi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){fi.subVectors(o,t),ji.subVectors(r,t),Kc.subVectors(e,t);const c=fi.dot(fi),f=fi.dot(ji),h=fi.dot(Kc),p=ji.dot(ji),_=ji.dot(Kc),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(p*h-f*_)*g,M=(c*_-f*h)*g;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,$i)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,$i.x),h.addScaledVector(c,$i.y),h.addScaledVector(f,$i.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,r),nf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ef,l.x),c.addScaledVector(tf,l.y),c.addScaledVector(nf,l.z),c}static isFrontFacing(e,t,r,o){return fi.subVectors(r,t),ji.subVectors(e,t),fi.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),fi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;ks.subVectors(o,r),zs.subVectors(l,r),Zc.subVectors(e,r);const h=ks.dot(Zc),p=zs.dot(Zc);if(h<=0&&p<=0)return t.copy(r);Jc.subVectors(e,o);const _=ks.dot(Jc),v=zs.dot(Jc);if(_>=0&&v<=_)return t.copy(o);const g=h*v-_*p;if(g<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(r).addScaledVector(ks,c);Qc.subVectors(e,l);const x=ks.dot(Qc),M=zs.dot(Qc);if(M>=0&&x<=M)return t.copy(l);const C=x*p-h*M;if(C<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(zs,f);const S=_*M-x*v;if(S<=0&&v-_>=0&&x-M>=0)return I0.subVectors(l,o),f=(v-_)/(v-_+(x-M)),t.copy(o).addScaledVector(I0,f);const y=1/(S+C+g);return c=C*y,f=g*y,t.copy(r).addScaledVector(ks,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ro{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),yl.subVectors(this.max,Wo),Vs.subVectors(e.a,Wo),Hs.subVectors(e.b,Wo),Gs.subVectors(e.c,Wo),Ar.subVectors(Hs,Vs),Cr.subVectors(Gs,Hs),$r.subVectors(Vs,Gs);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-$r.z,$r.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,$r.z,0,-$r.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-$r.y,$r.x,0];return!rf(t,Vs,Hs,Gs,yl)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Vs,Hs,Gs,yl))?!1:(Ml.crossVectors(Ar,Cr),t=[Ml.x,Ml.y,Ml.z],rf(t,Vs,Hs,Gs,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,Sl=new ro,Vs=new X,Hs=new X,Gs=new X,Ar=new X,Cr=new X,$r=new X,Wo=new X,yl=new X,Ml=new X,Kr=new X;function rf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Kr.fromArray(s,l);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),h=e.dot(Kr),p=t.dot(Kr),_=r.dot(Kr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const nn=new X,El=new Ve;let v_=0;class Pi extends ls{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=x0,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$s(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wm extends Pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Xm extends Pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gi extends Pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const x_=new ro,Xo=new X,sf=new X;class Pd{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):x_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Xo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(sf)),this.expandByPoint(Xo.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let S_=0;const ei=new Jt,of=new _n,Ws=new X,Wn=new ro,Yo=new ro,fn=new X;class Ii extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F2(e)?Xm:Wm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Yo.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(Wn.min,Yo.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,Yo.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(Yo.min),Wn.expandByPoint(Yo.max))}Wn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)fn.fromBufferAttribute(f,p),h&&(Ws.fromBufferAttribute(e,p),fn.add(Ws)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new X,h[T]=new X;const p=new X,_=new X,v=new X,g=new Ve,x=new Ve,M=new Ve,C=new X,S=new X;function y(T,D,V){p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,V),g.fromBufferAttribute(l,T),x.fromBufferAttribute(l,D),M.fromBufferAttribute(l,V),_.sub(p),v.sub(p),x.sub(g),M.sub(g);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(C.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(O),S.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(O),f[T].add(C),f[D].add(C),f[V].add(C),h[T].add(S),h[D].add(S),h[V].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,D=b.length;T<D;++T){const V=b[T],O=V.start,Q=V.count;for(let le=O,ue=O+Q;le<ue;le+=3)y(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const L=new X,P=new X,B=new X,N=new X;function F(T){B.fromBufferAttribute(o,T),N.copy(B);const D=f[T];L.copy(D),L.sub(B.multiplyScalar(B.dot(D))).normalize(),P.crossVectors(N,D);const O=P.dot(h[T])<0?-1:1;c.setXYZW(T,L.x,L.y,L.z,O)}for(let T=0,D=b.length;T<D;++T){const V=b[T],O=V.start,Q=V.count;for(let le=O,ue=O+Q;le<ue;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new X,l=new X,c=new X,f=new X,h=new X,p=new X,_=new X,v=new X;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),f.add(_),h.add(_),p.add(_),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,v=f.normalized,g=new p.constructor(h.length*_);let x=0,M=0;for(let C=0,S=h.length;C<S;C++){f.isInterleavedBufferAttribute?x=h[C]*f.data.stride+f.offset:x=h[C]*_;for(let y=0;y<_;y++)g[M++]=p[x++]}return new Pi(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,v=p.length;_<v;_++){const g=p[_],x=e(g,r);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];_.push(x.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],v=l[p];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let y_=0;class fa extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ks,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ef&&(r.blendSrc=this.blendSrc),this.blendDst!==Tf&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new X,af=new X,Tl=new X,Rr=new X,lf=new X,wl=new X,uf=new X;class M_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){af.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(af);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Tl),f=Rr.dot(this.direction),h=-Rr.dot(Tl),p=Rr.lengthSq(),_=Math.abs(1-c*c);let v,g,x,M;if(_>0)if(v=c*h-f,g=c*f-h,M=l*_,v>=0)if(g>=-M)if(g<=M){const C=1/_;v*=C,g*=C,x=v*(v+c*g+2*f)+g*(c*v+g+2*h)+p}else g=l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+p;else g=-l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+p;else g<=-M?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+g*(g+2*h)+p):g<=M?(v=0,g=Math.min(Math.max(-l,-h),l),x=g*(g+2*h)+p):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+g*(g+2*h)+p);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(af).addScaledVector(Tl,g),x}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-g.z)*v,h=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,h=(e.min.z-g.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){lf.subVectors(t,e),wl.subVectors(r,e),uf.crossVectors(lf,wl);let c=this.direction.dot(uf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const h=f*this.direction.dot(wl.crossVectors(Rr,wl));if(h<0)return null;const p=f*this.direction.dot(lf.cross(Rr));if(p<0||h+p>c)return null;const _=-f*Rr.dot(uf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ym extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.combine=wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U0=new Jt,Zr=new M_,Al=new Pd,q0=new X,Cl=new X,Rl=new X,bl=new X,cf=new X,Pl=new X,F0=new X,Ll=new X;class Ni extends _n{constructor(e=new Ii,t=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],v=l[h];_!==0&&(cf.fromBufferAttribute(v,e),c?Pl.addScaledVector(cf,_):Pl.addScaledVector(cf.sub(t),_))}t.add(Pl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(Al.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Al,q0)===null||Zr.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(U0.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(U0),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const S=g[M],y=c[S.materialIndex],b=Math.max(S.start,x.start),L=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let P=b,B=L;P<B;P+=3){const N=f.getX(P),F=f.getX(P+1),T=f.getX(P+2);o=Nl(this,y,e,r,p,_,v,N,F,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),C=Math.min(f.count,x.start+x.count);for(let S=M,y=C;S<y;S+=3){const b=f.getX(S),L=f.getX(S+1),P=f.getX(S+2);o=Nl(this,c,e,r,p,_,v,b,L,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const S=g[M],y=c[S.materialIndex],b=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let P=b,B=L;P<B;P+=3){const N=P,F=P+1,T=P+2;o=Nl(this,y,e,r,p,_,v,N,F,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),C=Math.min(h.count,x.start+x.count);for(let S=M,y=C;S<y;S+=3){const b=S,L=S+1,P=S+2;o=Nl(this,c,e,r,p,_,v,b,L,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function E_(s,e,t,r,o,l,c,f){let h;if(e.side===Bn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Nr,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Nl(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Cl),s.getVertexPosition(h,Rl),s.getVertexPosition(p,bl);const _=E_(s,e,t,r,Cl,Rl,bl,F0);if(_){const v=new X;pi.getBarycoord(F0,Cl,Rl,bl,v),o&&(_.uv=pi.getInterpolatedAttribute(o,f,h,p,v,new Ve)),l&&(_.uv1=pi.getInterpolatedAttribute(l,f,h,p,v,new Ve)),c&&(_.normal=pi.getInterpolatedAttribute(c,f,h,p,v,new X),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new X,materialIndex:0};pi.getNormal(Cl,Rl,bl,g.normal),_.face=g,_.barycoord=v}return _}class T_ extends Pn{constructor(e=null,t=1,r=1,o,l,c,f,h,p=gn,_=gn,v,g){super(null,c,f,h,p,_,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ff=new X,w_=new X,A_=new vt;class Qr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ff.subVectors(r,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(ff),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||A_.getNormalMatrix(e),o=this.coplanarPoint(ff).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Pd,C_=new Ve(.5,.5),Dl=new X;class Ld{constructor(e=new Qr,t=new Qr,r=new Qr,o=new Qr,l=new Qr,c=new Qr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],_=l[4],v=l[5],g=l[6],x=l[7],M=l[8],C=l[9],S=l[10],y=l[11],b=l[12],L=l[13],P=l[14],B=l[15];if(o[0].setComponents(p-c,x-_,y-M,B-b).normalize(),o[1].setComponents(p+c,x+_,y+M,B+b).normalize(),o[2].setComponents(p+f,x+v,y+C,B+L).normalize(),o[3].setComponents(p-f,x-v,y-C,B-L).normalize(),r)o[4].setComponents(h,g,S,P).normalize(),o[5].setComponents(p-h,x-g,y-S,B-P).normalize();else if(o[4].setComponents(p-h,x-g,y-S,B-P).normalize(),t===Ci)o[5].setComponents(p+h,x+g,y+S,B+P).normalize();else if(t===oa)o[5].setComponents(h,g,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=C_.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jm extends Pn{constructor(e=[],t=ss,r,o,l,c,f,h,p,_){super(e,t,r,o,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eo extends Pn{constructor(e,t,r=Li,o,l,c,f=gn,h=gn,p,_=rr,v=1){if(_!==rr&&_!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,c,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class R_ extends eo{constructor(e,t=Li,r=ss,o,l,c=gn,f=gn,h,p=rr){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,r,o,l,c,f,h,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $m extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class da extends Ii{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(v,2));function M(C,S,y,b,L,P,B,N,F,T,D){const V=P/F,O=B/T,Q=P/2,le=B/2,ue=N/2,G=F+1,K=T+1;let Y=0,j=0;const oe=new X;for(let ae=0;ae<K;ae++){const U=ae*O-le;for(let J=0;J<G;J++){const qe=J*V-Q;oe[C]=qe*b,oe[S]=U*L,oe[y]=ue,p.push(oe.x,oe.y,oe.z),oe[C]=0,oe[S]=0,oe[y]=N>0?1:-1,_.push(oe.x,oe.y,oe.z),v.push(J/F),v.push(1-ae/T),Y+=1}}for(let ae=0;ae<T;ae++)for(let U=0;U<F;U++){const J=g+U+G*ae,qe=g+U+G*(ae+1),He=g+(U+1)+G*(ae+1),Fe=g+(U+1)+G*ae;h.push(J,qe,Fe),h.push(qe,He,Fe),j+=6}f.addGroup(x,j,D),x+=j,g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const _=r[o],g=r[o+1]-_,x=(c-_)/g;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Ve:new X);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new X,o=[],l=[],c=[],f=new X,h=new Jt;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new X)}l[0]=new X,c[0]=new X;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),v=Math.abs(o[0].y),g=Math.abs(o[0].z);_<=p&&(p=_,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),f.crossVectors(o[x-1],o[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Tt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(f,M))}c[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(Tt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],x*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nd extends Ui{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ve){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=h-this.aX,x=p-this.aY;h=g*_-x*v+this.aX,p=g*v+x*_+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class b_ extends Nd{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Dd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,_,v){let g=(c-l)/p-(f-l)/(p+_)+(f-c)/_,x=(f-c)/_-(h-c)/(_+v)+(h-f)/v;g*=_,x*=_,o(c,f,g,x)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const O0=new X,B0=new X,df=new Dd,hf=new Dd,pf=new Dd;class P_ extends Ui{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,_;this.closed||f>0?p=o[(f-1)%l]:(B0.subVectors(o[0],o[1]).add(o[0]),p=B0);const v=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?_=o[(f+2)%l]:(O0.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=O0),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),x),C=Math.pow(v.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(_),x);C<1e-4&&(C=1),M<1e-4&&(M=C),S<1e-4&&(S=C),df.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,M,C,S),hf.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,M,C,S),pf.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,M,C,S)}else this.curveType==="catmullrom"&&(df.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),hf.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),pf.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return r.set(df.calc(h),hf.calc(h),pf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function k0(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function L_(s,e){const t=1-s;return t*t*e}function N_(s,e){return 2*(1-s)*s*e}function D_(s,e){return s*s*e}function na(s,e,t,r){return L_(s,e)+N_(s,t)+D_(s,r)}function I_(s,e){const t=1-s;return t*t*t*e}function U_(s,e){const t=1-s;return 3*t*t*s*e}function q_(s,e){return 3*(1-s)*s*s*e}function F_(s,e){return s*s*s*e}function ia(s,e,t,r,o){return I_(s,e)+U_(s,t)+q_(s,r)+F_(s,o)}class Km extends Ui{constructor(e=new Ve,t=new Ve,r=new Ve,o=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ia(e,o.x,l.x,c.x,f.x),ia(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O_ extends Ui{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ia(e,o.x,l.x,c.x,f.x),ia(e,o.y,l.y,c.y,f.y),ia(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zm extends Ui{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends Ui{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jm extends Ui{constructor(e=new Ve,t=new Ve,r=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(na(e,o.x,l.x,c.x),na(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k_ extends Ui{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(na(e,o.x,l.x,c.x),na(e,o.y,l.y,c.y),na(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qm extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],_=o[c>o.length-2?o.length-1:c+1],v=o[c>o.length-3?o.length-1:c+2];return r.set(k0(f,h.x,p.x,_.x,v.x),k0(f,h.y,p.y,_.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ve().fromArray(o))}return this}}var dd=Object.freeze({__proto__:null,ArcCurve:b_,CatmullRomCurve3:P_,CubicBezierCurve:Km,CubicBezierCurve3:O_,EllipseCurve:Nd,LineCurve:Zm,LineCurve3:B_,QuadraticBezierCurve:Jm,QuadraticBezierCurve3:k_,SplineCurve:Qm});class z_ extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dd[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const _=h[p];r&&r.equals(_)||(t.push(_),r=_)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new dd[o.type]().fromJSON(o))}return this}}class hd extends z_{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Zm(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Jm(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Km(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o),new Ve(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Qm(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(e+p,t+_,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new Nd(e,t,r,o,l,c,f,h);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wl extends hd{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new hd().fromJSON(o))}return this}}function V_(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=e1(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(r&&(l=Y_(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let _=f,v=h;for(let g=t;g<o;g+=t){const x=s[g],M=s[g+1];x<f&&(f=x),M<h&&(h=M),x>_&&(_=x),M>v&&(v=M)}p=Math.max(_-f,v-h),p=p!==0?32767/p:0}return la(l,c,t,f,h,p,0),c}function e1(s,e,t,r,o){let l;if(o===r3(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=z0(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=z0(c/r|0,s[c],s[c+1],l);return l&&to(l,l.next)&&(ca(l),l=l.next),l}function as(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(to(t,t.next)||$t(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function la(s,e,t,r,o,l,c){if(!s)return;!c&&l&&J_(s,r,o,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?G_(s,r,o,l):H_(s)){e.push(h.i,s.i,p.i),ca(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=W_(as(s),e),la(s,e,t,r,o,l,2)):c===2&&X_(s,e,t,r,o,l):la(as(s),e,t,r,o,l,1);break}}}function H_(s){const e=s.prev,t=s,r=s.next;if($t(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,_=Math.min(o,l,c),v=Math.min(f,h,p),g=Math.max(o,l,c),x=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=_&&M.x<=g&&M.y>=v&&M.y<=x&&Jo(o,f,l,h,c,p,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function G_(s,e,t,r){const o=s.prev,l=s,c=s.next;if($t(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,_=o.y,v=l.y,g=c.y,x=Math.min(f,h,p),M=Math.min(_,v,g),C=Math.max(f,h,p),S=Math.max(_,v,g),y=pd(x,M,e,t,r),b=pd(C,S,e,t,r);let L=s.prevZ,P=s.nextZ;for(;L&&L.z>=y&&P&&P.z<=b;){if(L.x>=x&&L.x<=C&&L.y>=M&&L.y<=S&&L!==o&&L!==c&&Jo(f,_,h,v,p,g,L.x,L.y)&&$t(L.prev,L,L.next)>=0||(L=L.prevZ,P.x>=x&&P.x<=C&&P.y>=M&&P.y<=S&&P!==o&&P!==c&&Jo(f,_,h,v,p,g,P.x,P.y)&&$t(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;L&&L.z>=y;){if(L.x>=x&&L.x<=C&&L.y>=M&&L.y<=S&&L!==o&&L!==c&&Jo(f,_,h,v,p,g,L.x,L.y)&&$t(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;P&&P.z<=b;){if(P.x>=x&&P.x<=C&&P.y>=M&&P.y<=S&&P!==o&&P!==c&&Jo(f,_,h,v,p,g,P.x,P.y)&&$t(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function W_(s,e){let t=s;do{const r=t.prev,o=t.next.next;!to(r,o)&&n1(r,t,t.next,o)&&ua(r,o)&&ua(o,r)&&(e.push(r.i,t.i,o.i),ca(t),ca(t.next),t=s=o),t=t.next}while(t!==s);return as(t)}function X_(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&t3(c,f)){let h=i1(c,f);c=as(c,c.next),h=as(h,h.next),la(c,e,t,r,o,l,0),la(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function Y_(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=e1(s,f,h,r,!1);p===p.next&&(p.steiner=!0),o.push(e3(p))}o.sort(j_);for(let l=0;l<o.length;l++)t=$_(o[l],t);return t}function j_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function $_(s,e){const t=K_(s,e);if(!t)return e;const r=i1(t,s);return as(r,r.next),as(t,t.next)}function K_(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(to(s,t))return t;do{if(to(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const v=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=r&&v>l&&(l=v,c=t.x<t.next.x?t:t.next,v===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let _=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&t1(o<p?r:l,o,h,p,o<p?l:r,o,t.x,t.y)){const v=Math.abs(o-t.y)/(r-t.x);ua(t,s)&&(v<_||v===_&&(t.x>c.x||t.x===c.x&&Z_(c,t)))&&(c=t,_=v)}t=t.next}while(t!==f);return c}function Z_(s,e){return $t(s.prev,s,e.prev)<0&&$t(e.next,s,s.next)<0}function J_(s,e,t,r){let o=s;do o.z===0&&(o.z=pd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Q_(o)}function Q_(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,f--):(o=c,c=c.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function pd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function e3(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function t1(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function Jo(s,e,t,r,o,l,c,f){return!(s===c&&e===f)&&t1(s,e,t,r,o,l,c,f)}function t3(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!n3(s,e)&&(ua(s,e)&&ua(e,s)&&i3(s,e)&&($t(s.prev,s,e.prev)||$t(s,e.prev,e))||to(s,e)&&$t(s.prev,s,s.next)>0&&$t(e.prev,e,e.next)>0)}function $t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function to(s,e){return s.x===e.x&&s.y===e.y}function n1(s,e,t,r){const o=Ul($t(s,e,t)),l=Ul($t(s,e,r)),c=Ul($t(t,r,s)),f=Ul($t(t,r,e));return!!(o!==l&&c!==f||o===0&&Il(s,t,e)||l===0&&Il(s,r,e)||c===0&&Il(t,s,r)||f===0&&Il(t,e,r))}function Il(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ul(s){return s>0?1:s<0?-1:0}function n3(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&n1(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ua(s,e){return $t(s.prev,s,s.next)<0?$t(s,e,s.next)>=0&&$t(s,s.prev,e)>=0:$t(s,e,s.prev)<0||$t(s,s.next,e)<0}function i3(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function i1(s,e){const t=md(s.i,s.x,s.y),r=md(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function z0(s,e,t,r){const o=md(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ca(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function md(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r3(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class s3{static triangulate(e,t,r=2){return V_(e,t,r)}}class rs{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return rs.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];V0(e),H0(r,e);let c=e.length;t.forEach(V0);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,H0(r,t[h]);const f=s3.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function V0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function H0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Id extends Ii{constructor(e=new Wl([new Ve(.5,.5),new Ve(-.5,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];c(p)}this.setAttribute("position",new gi(o,3)),this.setAttribute("uv",new gi(l,2)),this.computeVertexNormals();function c(f){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,_=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,C=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:o3;let L,P=!1,B,N,F,T;if(y){L=y.getSpacedPoints(_),P=!0,g=!1;const me=y.isCatmullRomCurve3?y.closed:!1;B=y.computeFrenetFrames(_,me),N=new X,F=new X,T=new X}g||(S=0,x=0,M=0,C=0);const D=f.extractPoints(p);let V=D.shape;const O=D.holes;if(!rs.isClockWise(V)){V=V.reverse();for(let me=0,Ee=O.length;me<Ee;me++){const _e=O[me];rs.isClockWise(_e)&&(O[me]=_e.reverse())}}function le(me){const _e=10000000000000001e-36;let Oe=me[0];for(let Ue=1;Ue<=me.length;Ue++){const ut=Ue%me.length,q=me[ut],lt=q.x-Oe.x,$e=q.y-Oe.y,ft=lt*lt+$e*$e,we=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(Oe.x),Math.abs(Oe.y)),bt=_e*we*we;if(ft<=bt){me.splice(ut,1),Ue--;continue}Oe=q}}le(V),O.forEach(le);const ue=O.length,G=V;for(let me=0;me<ue;me++){const Ee=O[me];V=V.concat(Ee)}function K(me,Ee,_e){return Ee||Rt("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(Ee,_e)}const Y=V.length;function j(me,Ee,_e){let Oe,Ue,ut;const q=me.x-Ee.x,lt=me.y-Ee.y,$e=_e.x-me.x,ft=_e.y-me.y,we=q*q+lt*lt,bt=q*ft-lt*$e;if(Math.abs(bt)>Number.EPSILON){const R=Math.sqrt(we),E=Math.sqrt($e*$e+ft*ft),$=Ee.x-lt/R,de=Ee.y+q/R,ge=_e.x-ft/E,Te=_e.y+$e/E,be=((ge-$)*ft-(Te-de)*$e)/(q*ft-lt*$e);Oe=$+q*be-me.x,Ue=de+lt*be-me.y;const ce=Oe*Oe+Ue*Ue;if(ce<=2)return new Ve(Oe,Ue);ut=Math.sqrt(ce/2)}else{let R=!1;q>Number.EPSILON?$e>Number.EPSILON&&(R=!0):q<-Number.EPSILON?$e<-Number.EPSILON&&(R=!0):Math.sign(lt)===Math.sign(ft)&&(R=!0),R?(Oe=-lt,Ue=q,ut=Math.sqrt(we)):(Oe=q,Ue=lt,ut=Math.sqrt(we/2))}return new Ve(Oe/ut,Ue/ut)}const oe=[];for(let me=0,Ee=G.length,_e=Ee-1,Oe=me+1;me<Ee;me++,_e++,Oe++)_e===Ee&&(_e=0),Oe===Ee&&(Oe=0),oe[me]=j(G[me],G[_e],G[Oe]);const ae=[];let U,J=oe.concat();for(let me=0,Ee=ue;me<Ee;me++){const _e=O[me];U=[];for(let Oe=0,Ue=_e.length,ut=Ue-1,q=Oe+1;Oe<Ue;Oe++,ut++,q++)ut===Ue&&(ut=0),q===Ue&&(q=0),U[Oe]=j(_e[Oe],_e[ut],_e[q]);ae.push(U),J=J.concat(U)}let qe;if(S===0)qe=rs.triangulateShape(G,O);else{const me=[],Ee=[];for(let _e=0;_e<S;_e++){const Oe=_e/S,Ue=x*Math.cos(Oe*Math.PI/2),ut=M*Math.sin(Oe*Math.PI/2)+C;for(let q=0,lt=G.length;q<lt;q++){const $e=K(G[q],oe[q],ut);De($e.x,$e.y,-Ue),Oe===0&&me.push($e)}for(let q=0,lt=ue;q<lt;q++){const $e=O[q];U=ae[q];const ft=[];for(let we=0,bt=$e.length;we<bt;we++){const R=K($e[we],U[we],ut);De(R.x,R.y,-Ue),Oe===0&&ft.push(R)}Oe===0&&Ee.push(ft)}}qe=rs.triangulateShape(me,Ee)}const He=qe.length,Fe=M+C;for(let me=0;me<Y;me++){const Ee=g?K(V[me],J[me],Fe):V[me];P?(F.copy(B.normals[0]).multiplyScalar(Ee.x),N.copy(B.binormals[0]).multiplyScalar(Ee.y),T.copy(L[0]).add(F).add(N),De(T.x,T.y,T.z)):De(Ee.x,Ee.y,0)}for(let me=1;me<=_;me++)for(let Ee=0;Ee<Y;Ee++){const _e=g?K(V[Ee],J[Ee],Fe):V[Ee];P?(F.copy(B.normals[me]).multiplyScalar(_e.x),N.copy(B.binormals[me]).multiplyScalar(_e.y),T.copy(L[me]).add(F).add(N),De(T.x,T.y,T.z)):De(_e.x,_e.y,v/_*me)}for(let me=S-1;me>=0;me--){const Ee=me/S,_e=x*Math.cos(Ee*Math.PI/2),Oe=M*Math.sin(Ee*Math.PI/2)+C;for(let Ue=0,ut=G.length;Ue<ut;Ue++){const q=K(G[Ue],oe[Ue],Oe);De(q.x,q.y,v+_e)}for(let Ue=0,ut=O.length;Ue<ut;Ue++){const q=O[Ue];U=ae[Ue];for(let lt=0,$e=q.length;lt<$e;lt++){const ft=K(q[lt],U[lt],Oe);P?De(ft.x,ft.y+L[_-1].y,L[_-1].x+_e):De(ft.x,ft.y,v+_e)}}}se(),Se();function se(){const me=o.length/3;if(g){let Ee=0,_e=Y*Ee;for(let Oe=0;Oe<He;Oe++){const Ue=qe[Oe];Ze(Ue[2]+_e,Ue[1]+_e,Ue[0]+_e)}Ee=_+S*2,_e=Y*Ee;for(let Oe=0;Oe<He;Oe++){const Ue=qe[Oe];Ze(Ue[0]+_e,Ue[1]+_e,Ue[2]+_e)}}else{for(let Ee=0;Ee<He;Ee++){const _e=qe[Ee];Ze(_e[2],_e[1],_e[0])}for(let Ee=0;Ee<He;Ee++){const _e=qe[Ee];Ze(_e[0]+Y*_,_e[1]+Y*_,_e[2]+Y*_)}}r.addGroup(me,o.length/3-me,0)}function Se(){const me=o.length/3;let Ee=0;pe(G,Ee),Ee+=G.length;for(let _e=0,Oe=O.length;_e<Oe;_e++){const Ue=O[_e];pe(Ue,Ee),Ee+=Ue.length}r.addGroup(me,o.length/3-me,1)}function pe(me,Ee){let _e=me.length;for(;--_e>=0;){const Oe=_e;let Ue=_e-1;Ue<0&&(Ue=me.length-1);for(let ut=0,q=_+S*2;ut<q;ut++){const lt=Y*ut,$e=Y*(ut+1),ft=Ee+Oe+lt,we=Ee+Ue+lt,bt=Ee+Ue+$e,R=Ee+Oe+$e;rt(ft,we,bt,R)}}}function De(me,Ee,_e){h.push(me),h.push(Ee),h.push(_e)}function Ze(me,Ee,_e){wt(me),wt(Ee),wt(_e);const Oe=o.length/3,Ue=b.generateTopUV(r,o,Oe-3,Oe-2,Oe-1);at(Ue[0]),at(Ue[1]),at(Ue[2])}function rt(me,Ee,_e,Oe){wt(me),wt(Ee),wt(Oe),wt(Ee),wt(_e),wt(Oe);const Ue=o.length/3,ut=b.generateSideWallUV(r,o,Ue-6,Ue-3,Ue-2,Ue-1);at(ut[0]),at(ut[1]),at(ut[3]),at(ut[1]),at(ut[2]),at(ut[3])}function wt(me){o.push(h[me*3+0]),o.push(h[me*3+1]),o.push(h[me*3+2])}function at(me){l.push(me.x),l.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return a3(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new dd[o.type]().fromJSON(o)),new Id(r,e.options)}}const o3={generateTopUV:function(s,e,t,r,o){const l=e[t*3],c=e[t*3+1],f=e[r*3],h=e[r*3+1],p=e[o*3],_=e[o*3+1];return[new Ve(l,c),new Ve(f,h),new Ve(p,_)]},generateSideWallUV:function(s,e,t,r,o,l){const c=e[t*3],f=e[t*3+1],h=e[t*3+2],p=e[r*3],_=e[r*3+1],v=e[r*3+2],g=e[o*3],x=e[o*3+1],M=e[o*3+2],C=e[l*3],S=e[l*3+1],y=e[l*3+2];return Math.abs(f-_)<Math.abs(c-p)?[new Ve(c,1-h),new Ve(p,1-v),new Ve(g,1-M),new Ve(C,1-y)]:[new Ve(f,1-h),new Ve(_,1-v),new Ve(x,1-M),new Ve(S,1-y)]}};function a3(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class eu extends Ii{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,_=h+1,v=e/f,g=t/h,x=[],M=[],C=[],S=[];for(let y=0;y<_;y++){const b=y*g-c;for(let L=0;L<p;L++){const P=L*v-l;M.push(P,-b,0),C.push(0,0,1),S.push(L/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let b=0;b<f;b++){const L=b+p*y,P=b+p*(y+1),B=b+1+p*(y+1),N=b+1+p*y;x.push(L,P,N),x.push(P,B,N)}this.setIndex(x),this.setAttribute("position",new gi(M,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(G0(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(G0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=no(s[t]);for(const o in r)e[o]=r[o]}return e}function G0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function l3(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function r1(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const u3={clone:no,merge:bn};var c3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c3,this.fragmentShader=f3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=l3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class d3 extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class W0 extends fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h3 extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p3 extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Y0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Y0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Y0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class m3{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(_){f++,l===!1&&o.onStart!==void 0&&o.onStart(_,c,f),l=!0},this.itemEnd=function(_){c++,o.onProgress!==void 0&&o.onProgress(_,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const x=p[v],M=p[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const g3=new m3;class Ud{constructor(e){this.manager=e!==void 0?e:g3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ud.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class _3 extends Error{constructor(e,t){super(e),this.response=t}}class v3 extends Ud{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=X0.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:r,onError:o});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:r,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=Ji[e],v=p.body.getReader(),g=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),x=g?parseInt(g):0,M=x!==0;let C=0;const S=new ReadableStream({start(y){b();function b(){v.read().then(({done:L,value:P})=>{if(L)y.close();else{C+=P.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:C,total:x});for(let N=0,F=_.length;N<F;N++){const T=_[N];T.onProgress&&T.onProgress(B)}y.enqueue(P),b()}},L=>{y.error(L)})}}});return new Response(S)}else throw new _3(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,f));case"json":return p.json();default:if(f==="")return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),g=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(g);return p.arrayBuffer().then(M=>x.decode(M))}}}).then(p=>{X0.add(`file:${e}`,p);const _=Ji[e];delete Ji[e];for(let v=0,g=_.length;v<g;v++){const x=_[v];x.onLoad&&x.onLoad(p)}}).catch(p=>{const _=Ji[e];if(_===void 0)throw this.manager.itemError(e),p;delete Ji[e];for(let v=0,g=_.length;v<g;v++){const x=_[v];x.onError&&x.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class s1 extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class x3 extends s1{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mf=new Jt,j0=new X,$0=new X;class S3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;j0.setFromMatrixPosition(e.matrixWorld),t.position.copy(j0),$0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($0),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===oa||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ql=new X,Fl=new io,Ei=new X;class o1 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,Fl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Fl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ql,Fl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Fl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new X,K0=new Ve,Z0=new Ve;class hi extends o1{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,K0,Z0),t.subVectors(Z0,K0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tu extends o1{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y3 extends S3{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J0 extends s1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new y3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xs=-90,Ys=1;class M3 extends _n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new hi(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new hi(Xs,Ys,e,t);c.layers=this.layers,this.add(c);const f=new hi(Xs,Ys,e,t);f.layers=this.layers,this.add(f);const h=new hi(Xs,Ys,e,t);h.layers=this.layers,this.add(h);const p=new hi(Xs,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===oa)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,g,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class E3 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zd=class zd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};zd.prototype.isMatrix2=!0;let Q0=zd;class T3{constructor(){this.type="ShapePath",this.color=new Lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new hd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,c){return this.currentPath.bezierCurveTo(e,t,r,o,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(y){const b=[];for(let L=0,P=y.length;L<P;L++){const B=y[L],N=new Wl;N.curves=B.curves,b.push(N)}return b}function r(y,b){const L=b.length;let P=!1;for(let B=L-1,N=0;N<L;B=N++){let F=b[B],T=b[N],D=T.x-F.x,V=T.y-F.y;if(Math.abs(V)>Number.EPSILON){if(V<0&&(F=b[N],D=-D,T=b[B],V=-V),y.y<F.y||y.y>T.y)continue;if(y.y===F.y){if(y.x===F.x)return!0}else{const O=V*(y.x-F.x)-D*(y.y-F.y);if(O===0)return!0;if(O<0)continue;P=!P}}else{if(y.y!==F.y)continue;if(T.x<=y.x&&y.x<=F.x||F.x<=y.x&&y.x<=T.x)return!0}}return P}const o=rs.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,f,h;const p=[];if(l.length===1)return f=l[0],h=new Wl,h.curves=f.curves,p.push(h),p;let _=!o(l[0].getPoints());_=e?!_:_;const v=[],g=[];let x=[],M=0,C;g[M]=void 0,x[M]=[];for(let y=0,b=l.length;y<b;y++)f=l[y],C=f.getPoints(),c=o(C),c=e?!c:c,c?(!_&&g[M]&&M++,g[M]={s:new Wl,p:C},g[M].s.curves=f.curves,_&&M++,x[M]=[]):x[M].push({h:f,p:C[0]});if(!g[0])return t(l);if(g.length>1){let y=!1,b=0;for(let L=0,P=g.length;L<P;L++)v[L]=[];for(let L=0,P=g.length;L<P;L++){const B=x[L];for(let N=0;N<B.length;N++){const F=B[N];let T=!0;for(let D=0;D<g.length;D++)r(F.p,g[D].p)&&(L!==D&&b++,T?(T=!1,v[D].push(F)):y=!0);T&&v[L].push(F)}}b>0&&y===!1&&(x=v)}let S;for(let y=0,b=g.length;y<b;y++){h=g[y].s,p.push(h),S=x[y];for(let L=0,P=S.length;L<P;L++)h.holes.push(S[L].h)}return p}}function em(s,e,t,r){const o=w3(r);switch(t){case Om:return s*e;case km:return s*e/o.components*o.byteLength;case Ed:return s*e/o.components*o.byteLength;case os:return s*e*2/o.components*o.byteLength;case Td:return s*e*2/o.components*o.byteLength;case Bm:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case wd:return s*e*4/o.components*o.byteLength;case zl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Ff:return Math.max(s,16)*Math.max(e,8)/4;case If:case qf:return Math.max(s,8)*Math.max(e,8)/2;case Of:case Bf:case zf:case Vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kf:case Yl:case Hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rd:case sd:case od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ad:case ld:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jl:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w3(s){switch(s){case Xn:case Im:return{byteLength:1,components:1};case ra:case Um:case ir:return{byteLength:2,components:1};case yd:case Md:return{byteLength:2,components:4};case Li:case Sd:case Ai:return{byteLength:4,components:1};case qm:case Fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function a1(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function A3(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,v=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,_),f.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const _=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],C=v[x];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++g,v[g]=C)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const C=v[x];s.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var C3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,q3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,K3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Av=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:C3,alphahash_pars_fragment:R3,alphamap_fragment:b3,alphamap_pars_fragment:P3,alphatest_fragment:L3,alphatest_pars_fragment:N3,aomap_fragment:D3,aomap_pars_fragment:I3,batching_pars_vertex:U3,batching_vertex:q3,begin_vertex:F3,beginnormal_vertex:O3,bsdfs:B3,iridescence_fragment:k3,bumpmap_pars_fragment:z3,clipping_planes_fragment:V3,clipping_planes_pars_fragment:H3,clipping_planes_pars_vertex:G3,clipping_planes_vertex:W3,color_fragment:X3,color_pars_fragment:Y3,color_pars_vertex:j3,color_vertex:$3,common:K3,cube_uv_reflection_fragment:Z3,defaultnormal_vertex:J3,displacementmap_pars_vertex:Q3,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:rv,envmap_fragment:sv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:xv,envmap_vertex:uv,fog_vertex:cv,fog_pars_vertex:fv,fog_fragment:dv,fog_pars_fragment:hv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:vv,lights_toon_fragment:Sv,lights_toon_pars_fragment:yv,lights_phong_fragment:Mv,lights_phong_pars_fragment:Ev,lights_physical_fragment:Tv,lights_physical_pars_fragment:wv,lights_fragment_begin:Av,lights_fragment_maps:Cv,lights_fragment_end:Rv,lightprobes_pars_fragment:bv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Dv,map_fragment:Iv,map_pars_fragment:Uv,map_particle_fragment:qv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:Bv,morphinstance_vertex:kv,morphcolor_vertex:zv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Gv,normal_fragment_begin:Wv,normal_fragment_maps:Xv,normal_pars_fragment:Yv,normal_pars_vertex:jv,normal_vertex:$v,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:cx,shadowmap_vertex:fx,shadowmask_pars_fragment:dx,skinbase_vertex:hx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:_x,specularmap_pars_fragment:vx,tonemapping_fragment:xx,tonemapping_pars_fragment:Sx,transmission_fragment:yx,transmission_pars_fragment:Mx,uv_pars_fragment:Ex,uv_pars_vertex:Tx,uv_vertex:wx,worldpos_vertex:Ax,background_vert:Cx,background_frag:Rx,backgroundCube_vert:bx,backgroundCube_frag:Px,cube_vert:Lx,cube_frag:Nx,depth_vert:Dx,depth_frag:Ix,distance_vert:Ux,distance_frag:qx,equirect_vert:Fx,equirect_frag:Ox,linedashed_vert:Bx,linedashed_frag:kx,meshbasic_vert:zx,meshbasic_frag:Vx,meshlambert_vert:Hx,meshlambert_frag:Gx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:Yx,meshnormal_frag:jx,meshphong_vert:$x,meshphong_frag:Kx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:e4,points_vert:t4,points_frag:n4,shadow_vert:i4,shadow_frag:r4,sprite_vert:s4,sprite_frag:o4},Be={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:bn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:bn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:bn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:bn([Be.common,Be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:bn([Be.lights,Be.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Ol={r:0,b:0,g:0},a4=new Jt,l1=new vt;l1.set(-1,0,0,0,1,0,0,0,1);function l4(s,e,t,r,o,l){const c=new Lt(0);let f=o===!0?0:1,h,p,_=null,v=0,g=null;function x(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function M(b){let L=!1;const P=x(b);P===null?S(c,f):P&&P.isColor&&(S(P,1),L=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,L){const P=x(L);P&&(P.isCubeTexture||P.mapping===Ql)?(p===void 0&&(p=new Ni(new da(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:no(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(a4.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(l1),p.material.toneMapped=At.getTransfer(P.colorSpace)!==Ft,(_!==P||v!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Ni(new eu(2,2),new Di({name:"BackgroundMaterial",uniforms:no(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=At.getTransfer(P.colorSpace)!==Ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=P,v=P.version,g=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function S(b,L){b.getRGB(Ol,r1(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,L,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,L=1){c.set(b),f=L,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,S(c,f)},render:M,addToRenderList:C,dispose:y}}function u4(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(O,Q,le,ue,G){let K=!1;const Y=v(O,ue,le,Q);l!==Y&&(l=Y,p(l.object)),K=x(O,ue,le,G),K&&M(O,ue,le,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,P(O,Q,le,ue),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return s.createVertexArray()}function p(O){return s.bindVertexArray(O)}function _(O){return s.deleteVertexArray(O)}function v(O,Q,le,ue){const G=ue.wireframe===!0;let K=r[Q.id];K===void 0&&(K={},r[Q.id]=K);const Y=O.isInstancedMesh===!0?O.id:0;let j=K[Y];j===void 0&&(j={},K[Y]=j);let oe=j[le.id];oe===void 0&&(oe={},j[le.id]=oe);let ae=oe[G];return ae===void 0&&(ae=g(h()),oe[G]=ae),ae}function g(O){const Q=[],le=[],ue=[];for(let G=0;G<t;G++)Q[G]=0,le[G]=0,ue[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:le,attributeDivisors:ue,object:O,attributes:{},index:null}}function x(O,Q,le,ue){const G=l.attributes,K=Q.attributes;let Y=0;const j=le.getAttributes();for(const oe in j)if(j[oe].location>=0){const U=G[oe];let J=K[oe];if(J===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;Y++}return l.attributesNum!==Y||l.index!==ue}function M(O,Q,le,ue){const G={},K=Q.attributes;let Y=0;const j=le.getAttributes();for(const oe in j)if(j[oe].location>=0){let U=K[oe];U===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),G[oe]=J,Y++}l.attributes=G,l.attributesNum=Y,l.index=ue}function C(){const O=l.newAttributes;for(let Q=0,le=O.length;Q<le;Q++)O[Q]=0}function S(O){y(O,0)}function y(O,Q){const le=l.newAttributes,ue=l.enabledAttributes,G=l.attributeDivisors;le[O]=1,ue[O]===0&&(s.enableVertexAttribArray(O),ue[O]=1),G[O]!==Q&&(s.vertexAttribDivisor(O,Q),G[O]=Q)}function b(){const O=l.newAttributes,Q=l.enabledAttributes;for(let le=0,ue=Q.length;le<ue;le++)Q[le]!==O[le]&&(s.disableVertexAttribArray(le),Q[le]=0)}function L(O,Q,le,ue,G,K,Y){Y===!0?s.vertexAttribIPointer(O,Q,le,G,K):s.vertexAttribPointer(O,Q,le,ue,G,K)}function P(O,Q,le,ue){C();const G=ue.attributes,K=le.getAttributes(),Y=Q.defaultAttributeValues;for(const j in K){const oe=K[j];if(oe.location>=0){let ae=G[j];if(ae===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const U=ae.normalized,J=ae.itemSize,qe=e.get(ae);if(qe===void 0)continue;const He=qe.buffer,Fe=qe.type,se=qe.bytesPerElement,Se=Fe===s.INT||Fe===s.UNSIGNED_INT||ae.gpuType===Sd;if(ae.isInterleavedBufferAttribute){const pe=ae.data,De=pe.stride,Ze=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let rt=0;rt<oe.locationSize;rt++)y(oe.location+rt,pe.meshPerAttribute);O.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<oe.locationSize;rt++)S(oe.location+rt);s.bindBuffer(s.ARRAY_BUFFER,He);for(let rt=0;rt<oe.locationSize;rt++)L(oe.location+rt,J/oe.locationSize,Fe,U,De*se,(Ze+J/oe.locationSize*rt)*se,Se)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)y(oe.location+pe,ae.meshPerAttribute);O.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<oe.locationSize;pe++)S(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let pe=0;pe<oe.locationSize;pe++)L(oe.location+pe,J/oe.locationSize,Fe,U,J*se,J/oe.locationSize*pe*se,Se)}}else if(Y!==void 0){const U=Y[j];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}b()}function B(){D();for(const O in r){const Q=r[O];for(const le in Q){const ue=Q[le];for(const G in ue){const K=ue[G];for(const Y in K)_(K[Y].object),delete K[Y];delete ue[G]}}delete r[O]}}function N(O){if(r[O.id]===void 0)return;const Q=r[O.id];for(const le in Q){const ue=Q[le];for(const G in ue){const K=ue[G];for(const Y in K)_(K[Y].object),delete K[Y];delete ue[G]}}delete r[O.id]}function F(O){for(const Q in r){const le=r[Q];for(const ue in le){const G=le[ue];if(G[O.id]===void 0)continue;const K=G[O.id];for(const Y in K)_(K[Y].object),delete K[Y];delete G[O.id]}}}function T(O){for(const Q in r){const le=r[Q],ue=O.isInstancedMesh===!0?O.id:0,G=le[ue];if(G!==void 0){for(const K in G){const Y=G[K];for(const j in Y)_(Y[j].object),delete Y[j];delete G[K]}delete le[ue],Object.keys(le).length===0&&delete r[Q]}}}function D(){V(),c=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:V,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:b}}function c4(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let g=0;for(let x=0;x<_;x++)g+=p[x];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function f4(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const T=F===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Xn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ai&&!T)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:B,samples:N}}function d4(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new Qr,f=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||r!==0||o;return o=g,r=v.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,y=s.get(v);if(!o||M===null||M.length===0||l&&!S)l?_(null):p();else{const b=l?0:r,L=b*4;let P=y.clippingState||null;h.value=P,P=_(M,g,L,x);for(let B=0;B!==L;++B)P[B]=t[B];y.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,x,M){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=h.value,M!==!0||S===null){const y=x+C*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,P=x;L!==C;++L,P+=4)c.copy(v[L]).applyMatrix4(b,f),c.normal.toArray(S,P),S[P+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Lr=4,tm=[.125,.215,.35,.446,.526,.582],ts=20,h4=256,jo=new tu,nm=new Lt;let gf=null,_f=0,vf=0,xf=!1;const p4=new X;class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=p4}=l;gf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,_f,vf),this._renderer.xr.enabled=xf,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ir,format:mi,colorSpace:$l,depthBuffer:!1},o=rm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m4(l)),this._blurMaterial=_4(l,e,t),this._ggxMaterial=g4(l,e,t)}return o}_compileMaterial(e){const t=new Ni(new Ii,e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,r,o,l){const h=new hi(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(nm),v.toneMapping=Ri,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new da,new Ym({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,y=!0):(S.color.copy(nm),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[L],l.y,l.z)):P===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[L]));const B=this._cubeSize;js(o,P*B,L>2?B:0,B,B),v.setRenderTarget(o),y&&v.render(C,h),v.render(e,h)}v.toneMapping=x,v.autoClear=g,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ss||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;js(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,jo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,x=v*g,{_lodMax:M}=this,C=this._sizeLods[r],S=3*C*(r>M-Lr?r-M+Lr:0),y=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,js(l,S,y,3*C,2*C),o.setRenderTarget(l),o.render(f,jo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,js(e,S,y,3*C,2*C),o.setRenderTarget(e),o.render(f,jo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ts-1),C=l/M,S=isFinite(l)?1+Math.floor(_*C):ts;S>ts&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ts}`);const y=[];let b=0;for(let F=0;F<ts;++F){const T=F/C,D=Math.exp(-T*T/2);y.push(D),F===0?b+=D:F<S&&(b+=2*D)}for(let F=0;F<y.length;F++)y[F]=y[F]/b;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-r;const P=this._sizeLods[o],B=3*P*(o>L-Lr?o-L+Lr:0),N=4*(this._cubeSize-P);js(t,B,N,3*P,2*P),h.setRenderTarget(t),h.render(v,jo)}}function m4(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+tm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Lr?h=tm[c-s+Lr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,C=3,S=2,y=1,b=new Float32Array(C*M*x),L=new Float32Array(S*M*x),P=new Float32Array(y*M*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,T=N>2?0:-1,D=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];b.set(D,C*M*N),L.set(g,S*M*N);const V=[N,N,N,N,N,N];P.set(V,y*M*N)}const B=new Ii;B.setAttribute("position",new Pi(b,C)),B.setAttribute("uv",new Pi(L,S)),B.setAttribute("faceIndex",new Pi(P,y)),r.push(new Ni(B,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function rm(s,e,t){const r=new bi(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function js(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function g4(s,e,t){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function _4(s,e,t){const r=new Float32Array(ts),o=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function sm(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function om(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class u1 extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jm(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new da(5,5,5),l=new Di({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:tr});l.uniforms.tEquirect.value=t;const c=new Ni(o,l),f=t.minFilter;return t.minFilter===ns&&(t.minFilter=Tn),new M3(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function v4(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,x=!1){return g==null?null:x?c(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===kc||x===zc)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const C=new u1(M.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,M=x===kc||x===zc,C=x===ss||x===Qs;if(M||C){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new im(s)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const b=g.image;return M&&b&&b.height>0||C&&b&&h(b)?(r===null&&(r=new im(s)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function f(g,x){return x===kc?g.mapping=ss:x===zc&&(g.mapping=Qs),g}function h(g){let x=0;const M=6;for(let C=0;C<M;C++)g[C]!==void 0&&x++;return x===M}function p(g){const x=g.target;x.removeEventListener("dispose",p);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function x4(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fd("WebGLRenderer: "+r+" extension not supported."),o}}}function S4(s,e,t,r){const o={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function h(v){const g=v.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,M=v.attributes.position;let C=0;if(M===void 0)return;if(x!==null){const b=x.array;C=x.version;for(let L=0,P=b.length;L<P;L+=3){const B=b[L+0],N=b[L+1],F=b[L+2];g.push(B,N,N,F,F,B)}}else{const b=M.array;C=M.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const B=L+0,N=L+1,F=L+2;g.push(B,N,N,F,F,B)}}const S=new(M.count>=65535?Xm:Wm)(g,1);S.version=C;const y=l.get(v);y&&e.remove(y),l.set(v,S)}function _(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function y4(s,e,t){let r;function o(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,g){s.drawElements(r,g,l,v*c),t.update(g,r,1)}function p(v,g,x){x!==0&&(s.drawElementsInstanced(r,g,l,v*c,x),t.update(g,r,x))}function _(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,x);let C=0;for(let S=0;S<x;S++)C+=g[S];t.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function M4(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function E4(s,e,t){const r=new WeakMap,o=new Zt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let D=function(){F.dispose(),r.delete(f),f.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const x=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let L=0;x===!0&&(L=1),M===!0&&(L=2),C===!0&&(L=3);let P=f.attributes.position.count*L,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*B*4*v),F=new Vm(N,P,B,v);F.type=Ai,F.needsUpdate=!0;const T=L*4;for(let V=0;V<v;V++){const O=S[V],Q=y[V],le=b[V],ue=P*B*4*V;for(let G=0;G<O.count;G++){const K=G*T;x===!0&&(o.fromBufferAttribute(O,G),N[ue+K+0]=o.x,N[ue+K+1]=o.y,N[ue+K+2]=o.z,N[ue+K+3]=0),M===!0&&(o.fromBufferAttribute(Q,G),N[ue+K+4]=o.x,N[ue+K+5]=o.y,N[ue+K+6]=o.z,N[ue+K+7]=0),C===!0&&(o.fromBufferAttribute(le,G),N[ue+K+8]=o.x,N[ue+K+9]=o.y,N[ue+K+10]=o.z,N[ue+K+11]=le.itemSize===4?o.w:1)}}g={count:v,texture:F,size:new Ve(P,B)},r.set(f,g),f.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let x=0;for(let C=0;C<p.length;C++)x+=p[C];const M=f.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function T4(s,e,t,r,o){let l=new WeakMap;function c(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:c,dispose:f}}const w4={[Am]:"LINEAR_TONE_MAPPING",[Cm]:"REINHARD_TONE_MAPPING",[Rm]:"CINEON_TONE_MAPPING",[bm]:"ACES_FILMIC_TONE_MAPPING",[Lm]:"AGX_TONE_MAPPING",[Nm]:"NEUTRAL_TONE_MAPPING",[Pm]:"CUSTOM_TONE_MAPPING"};function A4(s,e,t,r,o){const l=new bi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new eo(e,t):void 0}),c=new bi(e,t,{type:ir,depthBuffer:!1,stencilBuffer:!1}),f=new Ii;f.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new gi([0,2,0,0,2,0],2));const h=new d3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(f,h),_=new tu(-1,1,1,-1,0,1);let v=null,g=null,x=!1,M,C=null,S=[],y=!1;this.setSize=function(b,L){l.setSize(b,L),c.setSize(b,L);for(let P=0;P<S.length;P++){const B=S[P];B.setSize&&B.setSize(b,L)}},this.setEffects=function(b){S=b,y=S.length>0&&S[0].isRenderPass===!0;const L=l.width,P=l.height;for(let B=0;B<S.length;B++){const N=S[B];N.setSize&&N.setSize(L,P)}},this.begin=function(b,L){if(x||b.toneMapping===Ri&&S.length===0)return!1;if(C=L,L!==null){const P=L.width,B=L.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return y===!1&&b.setRenderTarget(l),M=b.toneMapping,b.toneMapping=Ri,!0},this.hasRenderPass=function(){return y},this.end=function(b,L){b.toneMapping=M,x=!0;let P=l,B=c;for(let N=0;N<S.length;N++){const F=S[N];if(F.enabled!==!1&&(F.render(b,B,P,L),F.needsSwap!==!1)){const T=P;P=B,B=T}}if(v!==b.outputColorSpace||g!==b.toneMapping){v=b.outputColorSpace,g=b.toneMapping,h.defines={},At.getTransfer(v)===Ft&&(h.defines.SRGB_TRANSFER="");const N=w4[g];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(p,_),C=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const c1=new Pn,gd=new eo(1,1),f1=new Vm,d1=new u_,h1=new jm,am=[],lm=[],um=new Float32Array(16),cm=new Float32Array(9),fm=new Float32Array(4);function so(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=am[o];if(l===void 0&&(l=new Float32Array(o),am[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function iu(s,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function C4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function R4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function b4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function P4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function L4(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;fm.set(r),s.uniformMatrix2fv(this.addr,!1,fm),an(t,r)}}function N4(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;cm.set(r),s.uniformMatrix3fv(this.addr,!1,cm),an(t,r)}}function D4(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;um.set(r),s.uniformMatrix4fv(this.addr,!1,um),an(t,r)}}function I4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function U4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function q4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function F4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function O4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function B4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function k4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function z4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function V4(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(gd.compareFunction=t.isReversedDepthBuffer()?Cd:Ad,l=gd):l=c1,t.setTexture2D(e||l,o)}function H4(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||d1,o)}function G4(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||h1,o)}function W4(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||f1,o)}function X4(s){switch(s){case 5126:return C4;case 35664:return R4;case 35665:return b4;case 35666:return P4;case 35674:return L4;case 35675:return N4;case 35676:return D4;case 5124:case 35670:return I4;case 35667:case 35671:return U4;case 35668:case 35672:return q4;case 35669:case 35673:return F4;case 5125:return O4;case 36294:return B4;case 36295:return k4;case 36296:return z4;case 35678:case 36198:case 36298:case 36306:case 35682:return V4;case 35679:case 36299:case 36307:return H4;case 35680:case 36300:case 36308:case 36293:return G4;case 36289:case 36303:case 36311:case 36292:return W4}}function Y4(s,e){s.uniform1fv(this.addr,e)}function j4(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function $4(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function K4(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function Z4(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function J4(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Q4(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eS(s,e){s.uniform1iv(this.addr,e)}function tS(s,e){s.uniform2iv(this.addr,e)}function nS(s,e){s.uniform3iv(this.addr,e)}function iS(s,e){s.uniform4iv(this.addr,e)}function rS(s,e){s.uniform1uiv(this.addr,e)}function sS(s,e){s.uniform2uiv(this.addr,e)}function oS(s,e){s.uniform3uiv(this.addr,e)}function aS(s,e){s.uniform4uiv(this.addr,e)}function lS(s,e,t){const r=this.cache,o=e.length,l=iu(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=gd:c=c1;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function uS(s,e,t){const r=this.cache,o=e.length,l=iu(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||d1,l[c])}function cS(s,e,t){const r=this.cache,o=e.length,l=iu(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||h1,l[c])}function fS(s,e,t){const r=this.cache,o=e.length,l=iu(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||f1,l[c])}function dS(s){switch(s){case 5126:return Y4;case 35664:return j4;case 35665:return $4;case 35666:return K4;case 35674:return Z4;case 35675:return J4;case 35676:return Q4;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return fS}}class hS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=X4(t.type)}}class pS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function dm(s,e){s.seq.push(e),s.map[e.id]=e}function gS(s,e,t){const r=s.name,o=r.length;for(Sf.lastIndex=0;;){const l=Sf.exec(r),c=Sf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){dm(t,p===void 0?new hS(f,s,e):new pS(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new mS(f),dm(t,v)),t=v}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);gS(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function hm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const _S=37297;let vS=0;function xS(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const pm=new vt;function SS(s){At._getMatrix(pm,At.workingColorSpace,s);const e=`mat3( ${pm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+xS(s.getShaderSource(e),f)}else return l}function yS(s,e){const t=SS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const MS={[Am]:"Linear",[Cm]:"Reinhard",[Rm]:"Cineon",[bm]:"ACESFilmic",[Lm]:"AgX",[Nm]:"Neutral",[Pm]:"Custom"};function ES(s,e){const t=MS[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new X;function TS(){At.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function AS(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function CS(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Qo(s){return s!==""}function gm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(s){return s.replace(RS,PS)}const bS=new Map;function PS(s,e){let t=xt[e];if(t===void 0){const r=bS.get(e);if(r!==void 0)t=xt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return _d(t)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(s){return s.replace(LS,NS)}function NS(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function xm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DS={[kl]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function IS(s){return DS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const US={[ss]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function qS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":US[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const FS={[Qs]:"ENVMAP_MODE_REFRACTION"};function OS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":FS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BS={[wm]:"ENVMAP_BLENDING_MULTIPLY",[A2]:"ENVMAP_BLENDING_MIX",[C2]:"ENVMAP_BLENDING_ADD"};function kS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":BS[s.combine]||"ENVMAP_BLENDING_NONE"}function zS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function VS(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=IS(t),p=qS(t),_=OS(t),v=kS(t),g=zS(t),x=wS(t),M=AS(l),C=o.createProgram();let S,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),y.length>0&&(y+=`
`)):(S=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),y=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),TS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),c=_d(c),c=gm(c,t),c=_m(c,t),f=_d(f),f=gm(f,t),f=_m(f,t),c=vm(c),f=vm(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=b+S+c,P=b+y+f,B=hm(o,o.VERTEX_SHADER,L),N=hm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,B),o.attachShader(C,N),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(O){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(C)||"",le=o.getShaderInfoLog(B)||"",ue=o.getShaderInfoLog(N)||"",G=Q.trim(),K=le.trim(),Y=ue.trim();let j=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,B,N);else{const ae=mm(o,B,"vertex"),U=mm(o,N,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+ae+`
`+U)}else G!==""?ct("WebGLProgram: Program Info Log:",G):(K===""||Y==="")&&(oe=!1);oe&&(O.diagnostics={runnable:j,programLog:G,vertexShader:{log:K,prefix:S},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(B),o.deleteShader(N),T=new Xl(o,C),D=CS(o,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(C,_S)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=N,this}let HS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new WS(e),t.set(e,r)),r}}class WS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function XS(s){return s===os||s===Yl||s===jl}function YS(s,e,t,r,o,l){const c=new Hm,f=new GS,h=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function C(T,D,V,O,Q,le){const ue=O.fog,G=Q.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||K,Y),oe=j&&j.mapping===Ql?j.image.height:null,ae=x[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,J=U!==void 0?U.length:0;let qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let He,Fe,se,Se;if(ae){const mt=wi[ae];He=mt.vertexShader,Fe=mt.fragmentShader}else He=T.vertexShader,Fe=T.fragmentShader,f.update(T),se=f.getVertexShaderID(T),Se=f.getFragmentShaderID(T);const pe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ze=Q.isInstancedMesh===!0,rt=Q.isBatchedMesh===!0,wt=!!T.map,at=!!T.matcap,me=!!j,Ee=!!T.aoMap,_e=!!T.lightMap,Oe=!!T.bumpMap,Ue=!!T.normalMap,ut=!!T.displacementMap,q=!!T.emissiveMap,lt=!!T.metalnessMap,$e=!!T.roughnessMap,ft=T.anisotropy>0,we=T.clearcoat>0,bt=T.dispersion>0,R=T.iridescence>0,E=T.sheen>0,$=T.transmission>0,de=ft&&!!T.anisotropyMap,ge=we&&!!T.clearcoatMap,Te=we&&!!T.clearcoatNormalMap,be=we&&!!T.clearcoatRoughnessMap,ce=R&&!!T.iridescenceMap,he=R&&!!T.iridescenceThicknessMap,ke=E&&!!T.sheenColorMap,Ge=E&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Ae=!!T.specularColorMap,dt=!!T.specularIntensityMap,pt=$&&!!T.transmissionMap,St=$&&!!T.thicknessMap,z=!!T.gradientMap,Re=!!T.alphaMap,fe=T.alphaTest>0,ze=!!T.alphaHash,Ne=!!T.extensions;let ve=Ri;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Je={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:Fe,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:rt,batchingColor:rt&&Q._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Q.instanceColor!==null,instancingMorph:Ze&&Q.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:wt,matcap:at,envMap:me,envMapMode:me&&j.mapping,envMapCubeUVHeight:oe,aoMap:Ee,lightMap:_e,bumpMap:Oe,normalMap:Ue,displacementMap:ut,emissiveMap:q,normalMapObjectSpace:Ue&&T.normalMapType===P2,normalMapTangentSpace:Ue&&T.normalMapType===cd,packedNormalMap:Ue&&T.normalMapType===cd&&XS(T.normalMap.format),metalnessMap:lt,roughnessMap:$e,anisotropy:ft,anisotropyMap:de,clearcoat:we,clearcoatMap:ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:be,dispersion:bt,iridescence:R,iridescenceMap:ce,iridescenceThicknessMap:he,sheen:E,sheenColorMap:ke,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:dt,transmission:$,transmissionMap:pt,thicknessMap:St,gradientMap:z,opaque:T.transparent===!1&&T.blending===Ks&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:fe,alphaHash:ze,combine:T.combine,mapUv:wt&&M(T.map.channel),aoMapUv:Ee&&M(T.aoMap.channel),lightMapUv:_e&&M(T.lightMap.channel),bumpMapUv:Oe&&M(T.bumpMap.channel),normalMapUv:Ue&&M(T.normalMap.channel),displacementMapUv:ut&&M(T.displacementMap.channel),emissiveMapUv:q&&M(T.emissiveMap.channel),metalnessMapUv:lt&&M(T.metalnessMap.channel),roughnessMapUv:$e&&M(T.roughnessMap.channel),anisotropyMapUv:de&&M(T.anisotropyMap.channel),clearcoatMapUv:ge&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(T.sheenRoughnessMap.channel),specularMapUv:Pe&&M(T.specularMap.channel),specularColorMapUv:Ae&&M(T.specularColorMap.channel),specularIntensityMapUv:dt&&M(T.specularIntensityMap.channel),transmissionMapUv:pt&&M(T.transmissionMap.channel),thicknessMapUv:St&&M(T.thicknessMap.channel),alphaMapUv:Re&&M(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ue||ft),vertexNormals:!!G.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!G.attributes.uv&&(wt||Re),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||G.attributes.normal===void 0&&Ue===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:De,skinning:Q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:qe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:wt&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Je.vertexUv1s=h.has(1),Je.vertexUv2s=h.has(2),Je.vertexUv3s=h.has(3),h.clear(),Je}function S(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)D.push(V),D.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(y(D,T),b(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function b(T,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function L(T){const D=x[T.type];let V;if(D){const O=wi[D];V=u3.clone(O.uniforms)}else V=T.uniforms;return V}function P(T,D){let V=_.get(D);return V!==void 0?++V.usedTimes:(V=new VS(s,D,T,o),p.push(V),_.set(D,V)),V}function B(T){if(--T.usedTimes===0){const D=p.indexOf(T);p[D]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:P,releaseProgram:B,releaseShaderCache:N,programs:p,dispose:F}}function jS(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function $S(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,M,C,S,y){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:x,material:M,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:y},s[e]=b):(b.id=g.id,b.object=g,b.geometry=x,b.material=M,b.materialVariant=c(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=S,b.group=y),e++,b}function h(g,x,M,C,S,y){const b=f(g,x,M,C,S,y);M.transmission>0?r.push(b):M.transparent===!0?o.push(b):t.push(b)}function p(g,x,M,C,S,y){const b=f(g,x,M,C,S,y);M.transmission>0?r.unshift(b):M.transparent===!0?o.unshift(b):t.unshift(b)}function _(g,x){t.length>1&&t.sort(g||$S),r.length>1&&r.sort(x||Sm),o.length>1&&o.sort(x||Sm)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:v,sort:_}}function KS(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new ym,s.set(r,[c])):o>=l.length?(c=new ym,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function ZS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Lt};break;case"SpotLight":t={position:new X,direction:new X,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function JS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let QS=0;function ey(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ty(s){const e=new ZS,t=JS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new Jt,c=new Jt;function f(p){let _=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,M=0,C=0,S=0,y=0,b=0,L=0,P=0,B=0,N=0,F=0;p.sort(ey);for(let D=0,V=p.length;D<V;D++){const O=p[D],Q=O.color,le=O.intensity,ue=O.distance;let G=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===os?G=O.shadow.map.texture:G=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)_+=Q.r*le,v+=Q.g*le,g+=Q.b*le;else if(O.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(O.sh.coefficients[K],le);F++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Y=O.shadow,j=t.get(O);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=G,r.directionalShadowMatrix[x]=O.shadow.matrix,b++}r.directional[x]=K,x++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(Q).multiplyScalar(le),K.distance=ue,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,r.spot[C]=K;const Y=O.shadow;if(O.map&&(r.spotLightMap[B]=O.map,B++,Y.updateMatrices(O),O.castShadow&&N++),r.spotLightMatrix[C]=Y.matrix,O.castShadow){const j=t.get(O);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=G,P++}C++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(Q).multiplyScalar(le),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),r.rectArea[S]=K,S++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const Y=O.shadow,j=t.get(O);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=G,r.pointShadowMatrix[M]=O.shadow.matrix,L++}r.point[M]=K,M++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(le),K.groundColor.copy(O.groundColor).multiplyScalar(le),r.hemi[y]=K,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==b||T.numPointShadows!==L||T.numSpotShadows!==P||T.numSpotMaps!==B||T.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=C,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+B-N,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,T.directionalLength=x,T.pointLength=M,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=b,T.numPointShadows=L,T.numSpotShadows=P,T.numSpotMaps=B,T.numLightProbes=F,r.version=QS++)}function h(p,_){let v=0,g=0,x=0,M=0,C=0;const S=_.matrixWorldInverse;for(let y=0,b=p.length;y<b;y++){const L=p[y];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(L.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),C++}}}return{setup:f,setupView:h,state:r}}function Mm(s){const e=new ty(s),t=[],r=[],o=[];function l(g){v.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function ny(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Mm(s),e.set(o,[f])):l>=c.length?(f=new Mm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],oy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Em=new Jt,$o=new X,yf=new X;function ay(s,e,t){let r=new Ld;const o=new Ve,l=new Ve,c=new Zt,f=new h3,h=new p3,p={},_=t.maxTextureSize,v={[Nr]:Bn,[Bn]:Nr,[Qi]:Qi},g=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:iy,fragmentShader:ry}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ni(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let y=this.type;this.render=function(N,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===a2&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kl);const D=s.getRenderTarget(),V=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(tr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const le=y!==this.type;le&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(G=>G.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,G=N.length;ue<G;ue++){const K=N[ue],Y=K.shadow;if(Y===void 0){ct("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const j=Y.getFrameExtents();o.multiply(j),l.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/j.x),o.x=l.x*j.x,Y.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/j.y),o.y=l.y*j.y,Y.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=oe,Y.map===null||le===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ko){if(K.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bi(o.x,o.y,{format:os,type:ir,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new eo(o.x,o.y,Ai),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=rr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn}else K.isPointLight?(Y.map=new u1(o.x),Y.map.depthTexture=new R_(o.x,Li)):(Y.map=new bi(o.x,o.y),Y.map.depthTexture=new eo(o.x,o.y,Li)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=rr,this.type===kl?(Y.map.depthTexture.compareFunction=oe?Cd:Ad,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn);Y.camera.updateProjectionMatrix()}const ae=Y.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ae;U++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,U),s.clear();else{U===0&&(s.setRenderTarget(Y.map),s.clear());const J=Y.getViewport(U);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),Q.viewport(c)}if(K.isPointLight){const J=Y.camera,qe=Y.matrix,He=K.distance||J.far;He!==J.far&&(J.far=He,J.updateProjectionMatrix()),$o.setFromMatrixPosition(K.matrixWorld),J.position.copy($o),yf.copy(J.position),yf.add(sy[U]),J.up.copy(oy[U]),J.lookAt(yf),J.updateMatrixWorld(),qe.makeTranslation(-$o.x,-$o.y,-$o.z),Em.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Em,J.coordinateSystem,J.reversedDepth)}else Y.updateMatrices(K);r=Y.getFrustum(),P(F,T,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Ko&&b(Y,T),Y.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(D,V,O)};function b(N,F){const T=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bi(o.x,o.y,{format:os,type:ir})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,C,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,T,x,C,null)}function L(N,F,T,D){let V=null;const O=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)V=O;else if(V=T.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=V.uuid,le=F.uuid;let ue=p[Q];ue===void 0&&(ue={},p[Q]=ue);let G=ue[le];G===void 0&&(G=V.clone(),ue[le]=G,F.addEventListener("dispose",B)),V=G}if(V.visible=F.visible,V.wireframe=F.wireframe,D===Ko?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:v[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Q=s.properties.get(V);Q.light=T}return V}function P(N,F,T,D,V){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===Ko)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const le=e.update(N),ue=N.material;if(Array.isArray(ue)){const G=le.groups;for(let K=0,Y=G.length;K<Y;K++){const j=G[K],oe=ue[j.materialIndex];if(oe&&oe.visible){const ae=L(N,oe,D,V);N.onBeforeShadow(s,N,F,T,le,ae,j),s.renderBufferDirect(T,null,le,ae,N,j),N.onAfterShadow(s,N,F,T,le,ae,j)}}}else if(ue.visible){const G=L(N,ue,D,V);N.onBeforeShadow(s,N,F,T,le,G,null),s.renderBufferDirect(T,null,le,G,N,null),N.onAfterShadow(s,N,F,T,le,G,null)}}const Q=N.children;for(let le=0,ue=Q.length;le<ue;le++)P(Q[le],F,T,D,V)}function B(N){N.target.removeEventListener("dispose",B);for(const T in p){const D=p[T],V=N.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function ly(s,e){function t(){let z=!1;const Re=new Zt;let fe=null;const ze=new Zt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!z&&(s.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){z=Ne},setClear:function(Ne,ve,Je,mt,Ot){Ot===!0&&(Ne*=mt,ve*=mt,Je*=mt),Re.set(Ne,ve,Je,mt),ze.equals(Re)===!1&&(s.clearColor(Ne,ve,Je,mt),ze.copy(Re))},reset:function(){z=!1,fe=null,ze.set(-1,0,0,0)}}}function r(){let z=!1,Re=!1,fe=null,ze=null,Ne=null;return{setReversed:function(ve){if(Re!==ve){const Je=e.get("EXT_clip_control");ve?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;const mt=Ne;Ne=null,this.setClear(mt)}},getReversed:function(){return Re},setTest:function(ve){ve?pe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ve){fe!==ve&&!z&&(s.depthMask(ve),fe=ve)},setFunc:function(ve){if(Re&&(ve=k2[ve]),ze!==ve){switch(ve){case wf:s.depthFunc(s.NEVER);break;case Af:s.depthFunc(s.ALWAYS);break;case Cf:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Rf:s.depthFunc(s.EQUAL);break;case bf:s.depthFunc(s.GEQUAL);break;case Pf:s.depthFunc(s.GREATER);break;case Lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ve}},setLocked:function(ve){z=ve},setClear:function(ve){Ne!==ve&&(Ne=ve,Re&&(ve=1-ve),s.clearDepth(ve))},reset:function(){z=!1,fe=null,ze=null,Ne=null,Re=!1}}}function o(){let z=!1,Re=null,fe=null,ze=null,Ne=null,ve=null,Je=null,mt=null,Ot=null;return{setTest:function(Nt){z||(Nt?pe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Nt){Re!==Nt&&!z&&(s.stencilMask(Nt),Re=Nt)},setFunc:function(Nt,wn,Yn){(fe!==Nt||ze!==wn||Ne!==Yn)&&(s.stencilFunc(Nt,wn,Yn),fe=Nt,ze=wn,Ne=Yn)},setOp:function(Nt,wn,Yn){(ve!==Nt||Je!==wn||mt!==Yn)&&(s.stencilOp(Nt,wn,Yn),ve=Nt,Je=wn,mt=Yn)},setLocked:function(Nt){z=Nt},setClear:function(Nt){Ot!==Nt&&(s.clearStencil(Nt),Ot=Nt)},reset:function(){z=!1,Re=null,fe=null,ze=null,Ne=null,ve=null,Je=null,mt=null,Ot=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],C=null,S=!1,y=null,b=null,L=null,P=null,B=null,N=null,F=null,T=new Lt(0,0,0),D=0,V=!1,O=null,Q=null,le=null,ue=null,G=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(oe)[1]),Y=j>=1):oe.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),Y=j>=2);let ae=null,U={};const J=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),He=new Zt().fromArray(J),Fe=new Zt().fromArray(qe);function se(z,Re,fe,ze){const Ne=new Uint8Array(4),ve=s.createTexture();s.bindTexture(z,ve),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<fe;Je++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Re+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return ve}const Se={};Se[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Js),Oe(!1),Ue(p0),pe(s.CULL_FACE),Ee(tr);function pe(z){_[z]!==!0&&(s.enable(z),_[z]=!0)}function De(z){_[z]!==!1&&(s.disable(z),_[z]=!1)}function Ze(z,Re){return g[z]!==Re?(s.bindFramebuffer(z,Re),g[z]=Re,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function rt(z,Re){let fe=M,ze=!1;if(z){fe=x.get(Re),fe===void 0&&(fe=[],x.set(Re,fe));const Ne=z.textures;if(fe.length!==Ne.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Je=Ne.length;ve<Je;ve++)fe[ve]=s.COLOR_ATTACHMENT0+ve;fe.length=Ne.length,ze=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ze=!0);ze&&s.drawBuffers(fe)}function wt(z){return C!==z?(s.useProgram(z),C=z,!0):!1}const at={[es]:s.FUNC_ADD,[u2]:s.FUNC_SUBTRACT,[c2]:s.FUNC_REVERSE_SUBTRACT};at[f2]=s.MIN,at[d2]=s.MAX;const me={[h2]:s.ZERO,[p2]:s.ONE,[m2]:s.SRC_COLOR,[Ef]:s.SRC_ALPHA,[y2]:s.SRC_ALPHA_SATURATE,[x2]:s.DST_COLOR,[_2]:s.DST_ALPHA,[g2]:s.ONE_MINUS_SRC_COLOR,[Tf]:s.ONE_MINUS_SRC_ALPHA,[S2]:s.ONE_MINUS_DST_COLOR,[v2]:s.ONE_MINUS_DST_ALPHA,[M2]:s.CONSTANT_COLOR,[E2]:s.ONE_MINUS_CONSTANT_COLOR,[T2]:s.CONSTANT_ALPHA,[w2]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(z,Re,fe,ze,Ne,ve,Je,mt,Ot,Nt){if(z===tr){S===!0&&(De(s.BLEND),S=!1);return}if(S===!1&&(pe(s.BLEND),S=!0),z!==l2){if(z!==y||Nt!==V){if((b!==es||B!==es)&&(s.blendEquation(s.FUNC_ADD),b=es,B=es),Nt)switch(z){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m0:s.blendFunc(s.ONE,s.ONE);break;case g0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case g0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",z);break}L=null,P=null,N=null,F=null,T.set(0,0,0),D=0,y=z,V=Nt}return}Ne=Ne||Re,ve=ve||fe,Je=Je||ze,(Re!==b||Ne!==B)&&(s.blendEquationSeparate(at[Re],at[Ne]),b=Re,B=Ne),(fe!==L||ze!==P||ve!==N||Je!==F)&&(s.blendFuncSeparate(me[fe],me[ze],me[ve],me[Je]),L=fe,P=ze,N=ve,F=Je),(mt.equals(T)===!1||Ot!==D)&&(s.blendColor(mt.r,mt.g,mt.b,Ot),T.copy(mt),D=Ot),y=z,V=!1}function _e(z,Re){z.side===Qi?De(s.CULL_FACE):pe(s.CULL_FACE);let fe=z.side===Bn;Re&&(fe=!fe),Oe(fe),z.blending===Ks&&z.transparent===!1?Ee(tr):Ee(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const ze=z.stencilWrite;f.setTest(ze),ze&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),q(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(z){O!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),O=z)}function Ue(z){z!==s2?(pe(s.CULL_FACE),z!==Q&&(z===p0?s.cullFace(s.BACK):z===o2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),Q=z}function ut(z){z!==le&&(Y&&s.lineWidth(z),le=z)}function q(z,Re,fe){z?(pe(s.POLYGON_OFFSET_FILL),(ue!==Re||G!==fe)&&(ue=Re,G=fe,c.getReversed()&&(Re=-Re),s.polygonOffset(Re,fe))):De(s.POLYGON_OFFSET_FILL)}function lt(z){z?pe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function $e(z){z===void 0&&(z=s.TEXTURE0+K-1),ae!==z&&(s.activeTexture(z),ae=z)}function ft(z,Re,fe){fe===void 0&&(ae===null?fe=s.TEXTURE0+K-1:fe=ae);let ze=U[fe];ze===void 0&&(ze={type:void 0,texture:void 0},U[fe]=ze),(ze.type!==z||ze.texture!==Re)&&(ae!==fe&&(s.activeTexture(fe),ae=fe),s.bindTexture(z,Re||Se[z]),ze.type=z,ze.texture=Re)}function we(){const z=U[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function bt(){try{s.compressedTexImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function E(){try{s.texSubImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function $(){try{s.texSubImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function Te(){try{s.texStorage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function be(){try{s.texStorage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function ce(){try{s.texImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function he(){try{s.texImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function ke(z){return v[z]!==void 0?v[z]:s.getParameter(z)}function Ge(z,Re){v[z]!==Re&&(s.pixelStorei(z,Re),v[z]=Re)}function Pe(z){He.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Ae(z){Fe.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Fe.copy(z))}function dt(z,Re){let fe=p.get(Re);fe===void 0&&(fe=new WeakMap,p.set(Re,fe));let ze=fe.get(z);ze===void 0&&(ze=s.getUniformBlockIndex(Re,z.name),fe.set(z,ze))}function pt(z,Re){const ze=p.get(Re).get(z);h.get(Re)!==ze&&(s.uniformBlockBinding(Re,ze,z.__bindingPointIndex),h.set(Re,ze))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},ae=null,U={},g={},x=new WeakMap,M=[],C=null,S=!1,y=null,b=null,L=null,P=null,B=null,N=null,F=null,T=new Lt(0,0,0),D=0,V=!1,O=null,Q=null,le=null,ue=null,G=null,He.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:De,bindFramebuffer:Ze,drawBuffers:rt,useProgram:wt,setBlending:Ee,setMaterial:_e,setFlipSided:Oe,setCullFace:Ue,setLineWidth:ut,setPolygonOffset:q,setScissorTest:lt,activeTexture:$e,bindTexture:ft,unbindTexture:we,compressedTexImage2D:bt,compressedTexImage3D:R,texImage2D:ce,texImage3D:he,pixelStorei:Ge,getParameter:ke,updateUBOMapping:dt,uniformBlockBinding:pt,texStorage2D:Te,texStorage3D:be,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Pe,viewport:Ae,reset:St}}function uy(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,E){return M?new OffscreenCanvas(R,E):Zl("canvas")}function S(R,E,$){let de=1;const ge=bt(R);if((ge.width>$||ge.height>$)&&(de=$/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Te=Math.floor(de*ge.width),be=Math.floor(de*ge.height);g===void 0&&(g=C(Te,be));const ce=E?C(Te,be):g;return ce.width=Te,ce.height=be,ce.getContext("2d").drawImage(R,0,0,Te,be),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Te+"x"+be+")."),ce}else return"data"in R&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function y(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,E,$,de,ge,Te=!1){if(R!==null){if(s[R]!==void 0)return s[R];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let be;de&&(be=e.get("EXT_texture_norm16"),be||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8),$===s.UNSIGNED_SHORT&&be&&(ce=be.R16_EXT),$===s.SHORT&&be&&(ce=be.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),E===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8),$===s.UNSIGNED_SHORT&&be&&(ce=be.RG16_EXT),$===s.SHORT&&be&&(ce=be.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RG8UI),$===s.UNSIGNED_SHORT&&(ce=s.RG16UI),$===s.UNSIGNED_INT&&(ce=s.RG32UI),$===s.BYTE&&(ce=s.RG8I),$===s.SHORT&&(ce=s.RG16I),$===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),$===s.UNSIGNED_INT&&(ce=s.RGB32UI),$===s.BYTE&&(ce=s.RGB8I),$===s.SHORT&&(ce=s.RGB16I),$===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),$===s.UNSIGNED_INT&&(ce=s.RGBA32UI),$===s.BYTE&&(ce=s.RGBA8I),$===s.SHORT&&(ce=s.RGBA16I),$===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&be&&(ce=be.RGB16_EXT),$===s.SHORT&&be&&(ce=be.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const he=Te?Kl:At.getTransfer(ge);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=he===Ft?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&be&&(ce=be.RGBA16_EXT),$===s.SHORT&&be&&(ce=be.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function B(R,E){let $;return R?E===null||E===Li||E===sa?$=s.DEPTH24_STENCIL8:E===Ai?$=s.DEPTH32F_STENCIL8:E===ra&&($=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Li||E===sa?$=s.DEPTH_COMPONENT24:E===Ai?$=s.DEPTH_COMPONENT32F:E===ra&&($=s.DEPTH_COMPONENT16),$}function N(R,E){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function F(R){const E=R.target;E.removeEventListener("dispose",F),D(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),O(E)}function D(R){const E=r.get(R);if(E.__webglInit===void 0)return;const $=R.source,de=x.get($);if(de){const ge=de[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&V(R),Object.keys(de).length===0&&x.delete($)}r.remove(R)}function V(R){const E=r.get(R);s.deleteTexture(E.__webglTexture);const $=R.source,de=x.get($);delete de[E.__cacheKey],c.memory.textures--}function O(R){const E=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let ge=0;ge<E.__webglFramebuffer[de].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[de][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=R.textures;for(let de=0,ge=$.length;de<ge;de++){const Te=r.get($[de]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),c.memory.textures--),r.remove($[de])}r.remove(R)}let Q=0;function le(){Q=0}function ue(){return Q}function G(R){Q=R}function K(){const R=Q;return R>=o.maxTextures&&ct("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),Q+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const $=r.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const de=R.image;if(de===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{De($,R,E);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function oe(R,E){const $=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){De($,R,E);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ae(R,E){const $=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){De($,R,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function U(R,E){const $=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&$.__version!==R.version){Ze($,R,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const J={[Nf]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[Df]:s.MIRRORED_REPEAT},qe={[gn]:s.NEAREST,[R2]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Vc]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},He={[L2]:s.NEVER,[q2]:s.ALWAYS,[N2]:s.LESS,[Ad]:s.LEQUAL,[D2]:s.EQUAL,[Cd]:s.GEQUAL,[I2]:s.GREATER,[U2]:s.NOTEQUAL};function Fe(R,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===Vc||E.magFilter===gl||E.magFilter===ns||E.minFilter===Tn||E.minFilter===Vc||E.minFilter===gl||E.minFilter===ns)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,qe[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,qe[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gn||E.minFilter!==gl&&E.minFilter!==ns||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function se(R,E){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",F));const de=E.source;let ge=x.get(de);ge===void 0&&(ge={},x.set(de,ge));const Te=Y(E);if(Te!==R.__cacheKey){ge[Te]===void 0&&(ge[Te]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[Te].usedTimes++;const be=ge[R.__cacheKey];be!==void 0&&(ge[R.__cacheKey].usedTimes--,be.usedTimes===0&&V(E)),R.__cacheKey=Te,R.__webglTexture=ge[Te].texture}return $}function Se(R,E,$){return Math.floor(Math.floor(R/$)/E)}function pe(R,E,$,de){const Te=R.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,de,E.data);else{Te.sort((Ge,Pe)=>Ge.start-Pe.start);let be=0;for(let Ge=1;Ge<Te.length;Ge++){const Pe=Te[be],Ae=Te[Ge],dt=Pe.start+Pe.count,pt=Se(Ae.start,E.width,4),St=Se(Pe.start,E.width,4);Ae.start<=dt+1&&pt===St&&Se(Ae.start+Ae.count-1,E.width,4)===pt?Pe.count=Math.max(Pe.count,Ae.start+Ae.count-Pe.start):(++be,Te[be]=Ae)}Te.length=be+1;const ce=t.getParameter(s.UNPACK_ROW_LENGTH),he=t.getParameter(s.UNPACK_SKIP_PIXELS),ke=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Pe=Te.length;Ge<Pe;Ge++){const Ae=Te[Ge],dt=Math.floor(Ae.start/4),pt=Math.ceil(Ae.count/4),St=dt%E.width,z=Math.floor(dt/E.width),Re=pt,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,St),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,St,z,Re,fe,$,de,E.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ce),t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function De(R,E,$){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const ge=se(R,E),Te=E.source;t.bindTexture(de,R.__webglTexture,s.TEXTURE0+$);const be=r.get(Te);if(Te.version!==be.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=At.getPrimaries(At.workingColorSpace),ze=E.colorSpace===Pr?null:At.getPrimaries(E.colorSpace),Ne=E.colorSpace===Pr||fe===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let he=S(E.image,!1,o.maxTextureSize);he=we(E,he);const ke=l.convert(E.format,E.colorSpace),Ge=l.convert(E.type);let Pe=P(E.internalFormat,ke,Ge,E.normalized,E.colorSpace,E.isVideoTexture);Fe(de,E);let Ae;const dt=E.mipmaps,pt=E.isVideoTexture!==!0,St=be.__version===void 0||ge===!0,z=Te.dataReady,Re=N(E,he);if(E.isDepthTexture)Pe=B(E.format===is,E.type),St&&(pt?t.texStorage2D(s.TEXTURE_2D,1,Pe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,ke,Ge,null));else if(E.isDataTexture)if(dt.length>0){pt&&St&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,dt[0].width,dt[0].height);for(let fe=0,ze=dt.length;fe<ze;fe++)Ae=dt[fe],pt?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,ke,Ge,Ae.data):t.texImage2D(s.TEXTURE_2D,fe,Pe,Ae.width,Ae.height,0,ke,Ge,Ae.data);E.generateMipmaps=!1}else pt?(St&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height),z&&pe(E,he,ke,Ge)):t.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,ke,Ge,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,dt[0].width,dt[0].height,he.depth);for(let fe=0,ze=dt.length;fe<ze;fe++)if(Ae=dt[fe],E.format!==mi)if(ke!==null)if(pt){if(z)if(E.layerUpdates.size>0){const Ne=em(Ae.width,Ae.height,E.format,E.type);for(const ve of E.layerUpdates){const Je=Ae.data.subarray(ve*Ne/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,ve,Ae.width,Ae.height,1,ke,Je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,he.depth,ke,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Ae.width,Ae.height,he.depth,0,Ae.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,he.depth,ke,Ge,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Ae.width,Ae.height,he.depth,0,ke,Ge,Ae.data)}else{pt&&St&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,dt[0].width,dt[0].height);for(let fe=0,ze=dt.length;fe<ze;fe++)Ae=dt[fe],E.format!==mi?ke!==null?pt?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,ke,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,Pe,Ae.width,Ae.height,0,Ae.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,ke,Ge,Ae.data):t.texImage2D(s.TEXTURE_2D,fe,Pe,Ae.width,Ae.height,0,ke,Ge,Ae.data)}else if(E.isDataArrayTexture)if(pt){if(St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,he.width,he.height,he.depth),z)if(E.layerUpdates.size>0){const fe=em(he.width,he.height,E.format,E.type);for(const ze of E.layerUpdates){const Ne=he.data.subarray(ze*fe/he.data.BYTES_PER_ELEMENT,(ze+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,he.width,he.height,1,ke,Ge,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ke,Ge,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,ke,Ge,he.data);else if(E.isData3DTexture)pt?(St&&t.texStorage3D(s.TEXTURE_3D,Re,Pe,he.width,he.height,he.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ke,Ge,he.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,ke,Ge,he.data);else if(E.isFramebufferTexture){if(St)if(pt)t.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height);else{let fe=he.width,ze=he.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,Pe,fe,ze,0,ke,Ge,null),fe>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),he.parentNode!==fe){fe.appendChild(he),v.add(E),fe.onpaint=mt=>{const Ot=mt.changedElements;for(const Nt of v)Ot.includes(Nt.image)&&(Nt.needsUpdate=!0)},fe.requestPaint();return}const ze=0,Ne=s.RGBA,ve=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ze,Ne,ve,Je,he),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(pt&&St){const fe=bt(dt[0]);t.texStorage2D(s.TEXTURE_2D,Re,Pe,fe.width,fe.height)}for(let fe=0,ze=dt.length;fe<ze;fe++)Ae=dt[fe],pt?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ke,Ge,Ae):t.texImage2D(s.TEXTURE_2D,fe,Pe,ke,Ge,Ae);E.generateMipmaps=!1}else if(pt){if(St){const fe=bt(he);t.texStorage2D(s.TEXTURE_2D,Re,Pe,fe.width,fe.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ge,he)}else t.texImage2D(s.TEXTURE_2D,0,Pe,ke,Ge,he);y(E)&&b(de),be.__version=Te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ze(R,E,$){if(E.image.length!==6)return;const de=se(R,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+$);const Te=r.get(ge);if(ge.version!==Te.__version||de===!0){t.activeTexture(s.TEXTURE0+$);const be=At.getPrimaries(At.workingColorSpace),ce=E.colorSpace===Pr?null:At.getPrimaries(E.colorSpace),he=E.colorSpace===Pr||be===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let ve=0;ve<6;ve++)!ke&&!Ge?Pe[ve]=S(E.image[ve],!0,o.maxCubemapSize):Pe[ve]=Ge?E.image[ve].image:E.image[ve],Pe[ve]=we(E,Pe[ve]);const Ae=Pe[0],dt=l.convert(E.format,E.colorSpace),pt=l.convert(E.type),St=P(E.internalFormat,dt,pt,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,Re=Te.__version===void 0||de===!0,fe=ge.dataReady;let ze=N(E,Ae);Fe(s.TEXTURE_CUBE_MAP,E);let Ne;if(ke){z&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,St,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){Ne=Pe[ve].mipmaps;for(let Je=0;Je<Ne.length;Je++){const mt=Ne[Je];E.format!==mi?dt!==null?z?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,mt.width,mt.height,dt,mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,St,mt.width,mt.height,0,mt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,mt.width,mt.height,dt,pt,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,St,mt.width,mt.height,0,dt,pt,mt.data)}}}else{if(Ne=E.mipmaps,z&&Re){Ne.length>0&&ze++;const ve=bt(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,St,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ge){z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe[ve].width,Pe[ve].height,dt,pt,Pe[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,St,Pe[ve].width,Pe[ve].height,0,dt,pt,Pe[ve].data);for(let Je=0;Je<Ne.length;Je++){const Ot=Ne[Je].image[ve].image;z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,Ot.width,Ot.height,dt,pt,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,St,Ot.width,Ot.height,0,dt,pt,Ot.data)}}else{z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,dt,pt,Pe[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,St,dt,pt,Pe[ve]);for(let Je=0;Je<Ne.length;Je++){const mt=Ne[Je];z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,dt,pt,mt.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,St,dt,pt,mt.image[ve])}}}y(E)&&b(s.TEXTURE_CUBE_MAP),Te.__version=ge.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function rt(R,E,$,de,ge,Te){const be=l.convert($.format,$.colorSpace),ce=l.convert($.type),he=P($.internalFormat,be,ce,$.normalized,$.colorSpace),ke=r.get(E),Ge=r.get($);if(Ge.__renderTarget=E,!ke.__hasExternalTextures){const Pe=Math.max(1,E.width>>Te),Ae=Math.max(1,E.height>>Te);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Te,he,Pe,Ae,E.depth,0,be,ce,null):t.texImage2D(ge,Te,he,Pe,Ae,0,be,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),$e(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ge,Ge.__webglTexture,0,lt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ge,Ge.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(R,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const de=E.depthTexture,ge=de&&de.isDepthTexture?de.type:null,Te=B(E.stencilBuffer,ge),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$e(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(E),Te,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(E),Te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,R)}else{const de=E.textures;for(let ge=0;ge<de.length;ge++){const Te=de[ge],be=l.convert(Te.format,Te.colorSpace),ce=l.convert(Te.type),he=P(Te.internalFormat,be,ce,Te.normalized,Te.colorSpace);$e(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(E),he,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(R,E,$){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E.depthTexture);const ke=l.convert(E.depthTexture.format),Ge=l.convert(E.depthTexture.type);let Pe;E.depthTexture.format===rr?Pe=s.DEPTH_COMPONENT24:E.depthTexture.format===is&&(Pe=s.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,E.width,E.height,0,ke,Ge,null)}}else j(E.depthTexture,0);const Te=ge.__webglTexture,be=lt(E),ce=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,he=E.depthTexture.format===is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===rr)$e(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ce,Te,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,he,ce,Te,0);else if(E.depthTexture.format===is)$e(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ce,Te,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,he,ce,Te,0);else throw new Error("Unknown depthTexture format")}function me(R){const E=r.get(R),$=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const de=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=de}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)at(E.__webglFramebuffer[de],R,de);else{const de=R.texture.mipmaps;de&&de.length>0?at(E.__webglFramebuffer[0],R,0):at(E.__webglFramebuffer,R,0)}else if($){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),wt(E.__webglDepthbuffer[de],R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Te)}}else{const de=R.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),wt(E.__webglDepthbuffer,R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(R,E,$){const de=r.get(R);E!==void 0&&rt(de.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&me(R)}function _e(R){const E=R.texture,$=r.get(R),de=r.get(E);R.addEventListener("dispose",T);const ge=R.textures,Te=R.isWebGLCubeRenderTarget===!0,be=ge.length>1;if(be||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,c.memory.textures++),Te){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let he=0;he<E.mipmaps.length;he++)$.__webglFramebuffer[ce][he]=s.createFramebuffer()}else $.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)$.__webglFramebuffer[ce]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(be)for(let ce=0,he=ge.length;ce<he;ce++){const ke=r.get(ge[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),c.memory.textures++)}if(R.samples>0&&$e(R)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<ge.length;ce++){const he=ge[ce];$.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const ke=l.convert(he.format,he.colorSpace),Ge=l.convert(he.type),Pe=P(he.internalFormat,ke,Ge,he.normalized,he.colorSpace,R.isXRRenderTarget===!0),Ae=lt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Pe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),wt($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)rt($.__webglFramebuffer[ce][he],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else rt($.__webglFramebuffer[ce],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(E)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,he=ge.length;ce<he;ce++){const ke=ge[ce],Ge=r.get(ke);let Pe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Pe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ge.__webglTexture),Fe(Pe,ke),rt($.__webglFramebuffer,R,ke,s.COLOR_ATTACHMENT0+ce,Pe,0),y(ke)&&b(Pe)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,de.__webglTexture),Fe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)rt($.__webglFramebuffer[he],R,E,s.COLOR_ATTACHMENT0,ce,he);else rt($.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,ce,0);y(E)&&b(ce),t.unbindTexture()}R.depthBuffer&&me(R)}function Oe(R){const E=R.textures;for(let $=0,de=E.length;$<de;$++){const ge=E[$];if(y(ge)){const Te=L(R),be=r.get(ge).__webglTexture;t.bindTexture(Te,be),b(Te),t.unbindTexture()}}}const Ue=[],ut=[];function q(R){if(R.samples>0){if($e(R)===!1){const E=R.textures,$=R.width,de=R.height;let ge=s.COLOR_BUFFER_BIT;const Te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(R),ce=E.length>1;if(ce)for(let ke=0;ke<E.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const he=R.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ke]);const Ge=r.get(E[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,$,de,0,0,$,de,ge,s.NEAREST),h===!0&&(Ue.length=0,ut.length=0,Ue.push(s.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ue.push(Te),ut.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ke=0;ke<E.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,be.__webglColorRenderbuffer[ke]);const Ge=r.get(E[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function lt(R){return Math.min(o.maxSamples,R.samples)}function $e(R){const E=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(R){const E=c.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function we(R,E){const $=R.colorSpace,de=R.format,ge=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==$l&&$!==Pr&&(At.getTransfer($)===Ft?(de!==mi||ge!==Xn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",$)),E}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=oe,this.setTexture3D=ae,this.setTextureCube=U,this.rebindTextures=Ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cy(s,e){function t(r,o=Pr){let l;const c=At.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Md)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Im)return s.BYTE;if(r===Um)return s.SHORT;if(r===ra)return s.UNSIGNED_SHORT;if(r===Sd)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===ir)return s.HALF_FLOAT;if(r===Om)return s.ALPHA;if(r===Bm)return s.RGB;if(r===mi)return s.RGBA;if(r===rr)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===km)return s.RED;if(r===Ed)return s.RED_INTEGER;if(r===os)return s.RG;if(r===Td)return s.RG_INTEGER;if(r===wd)return s.RGBA_INTEGER;if(r===zl||r===Vl||r===Hl||r===Gl)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===If||r===Uf||r===qf||r===Ff)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===If)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Of||r===Bf||r===kf||r===zf||r===Vf||r===Yl||r===Hf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Of||r===Bf)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===zf)return l.COMPRESSED_R11_EAC;if(r===Vf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Yl)return l.COMPRESSED_RG11_EAC;if(r===Hf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Gf||r===Wf||r===Xf||r===Yf||r===jf||r===$f||r===Kf||r===Zf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Gf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$f)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ed)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===td)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===id)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rd||r===sd||r===od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===rd)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ad||r===ld||r===jl||r===ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ad)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new $m(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Di({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends ls{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,v=null,g=null,x=null,M=null;const C=typeof XRWebGLBinding<"u",S=new hy,y={},b=t.getContextAttributes();let L=null,P=null;const B=[],N=[],F=new Ve;let T=null;const D=new hi;D.viewport=new Zt;const V=new hi;V.viewport=new Zt;const O=[D,V],Q=new E3;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=B[se];return Se===void 0&&(Se=new jc,B[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=B[se];return Se===void 0&&(Se=new jc,B[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=B[se];return Se===void 0&&(Se=new jc,B[se]=Se),Se.getHandSpace()};function G(se){const Se=N.indexOf(se.inputSource);if(Se===-1)return;const pe=B[Se];pe!==void 0&&(pe.update(se.inputSource,se.frame,p||c),pe.dispatchEvent({type:se.type,data:se.inputSource}))}function K(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Y);for(let se=0;se<B.length;se++){const Se=N[se];Se!==null&&(N[se]=null,B[se].disconnect(Se))}le=null,ue=null,S.reset();for(const se in y)delete y[se];e.setRenderTarget(L),x=null,g=null,v=null,o=null,P=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,Ze=null;b.depth&&(Ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?is:rr,De=b.stencil?sa:Li);const rt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(rt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new bi(g.textureWidth,g.textureHeight,{format:mi,type:Xn,depthTexture:new eo(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new bi(x.framebufferWidth,x.framebufferHeight,{format:mi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(se){for(let Se=0;Se<se.removed.length;Se++){const pe=se.removed[Se],De=N.indexOf(pe);De>=0&&(N[De]=null,B[De].disconnect(pe))}for(let Se=0;Se<se.added.length;Se++){const pe=se.added[Se];let De=N.indexOf(pe);if(De===-1){for(let rt=0;rt<B.length;rt++)if(rt>=N.length){N.push(pe),De=rt;break}else if(N[rt]===null){N[rt]=pe,De=rt;break}if(De===-1)break}const Ze=B[De];Ze&&Ze.connect(pe)}}const j=new X,oe=new X;function ae(se,Se,pe){j.setFromMatrixPosition(Se.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const De=j.distanceTo(oe),Ze=Se.projectionMatrix.elements,rt=pe.projectionMatrix.elements,wt=Ze[14]/(Ze[10]-1),at=Ze[14]/(Ze[10]+1),me=(Ze[9]+1)/Ze[5],Ee=(Ze[9]-1)/Ze[5],_e=(Ze[8]-1)/Ze[0],Oe=(rt[8]+1)/rt[0],Ue=wt*_e,ut=wt*Oe,q=De/(-_e+Oe),lt=q*-_e;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(lt),se.translateZ(q),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ze[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const $e=wt+q,ft=at+q,we=Ue-lt,bt=ut+(De-lt),R=me*at/ft*$e,E=Ee*at/ft*$e;se.projectionMatrix.makePerspective(we,bt,R,E,$e,ft),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Se=se.near,pe=se.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),Q.near=V.near=D.near=Se,Q.far=V.far=D.far=pe,(le!==Q.near||ue!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),le=Q.near,ue=Q.far),Q.layers.mask=se.layers.mask|6,D.layers.mask=Q.layers.mask&-5,V.layers.mask=Q.layers.mask&-3;const De=se.parent,Ze=Q.cameras;U(Q,De);for(let rt=0;rt<Ze.length;rt++)U(Ze[rt],De);Ze.length===2?ae(Q,D,V):Q.projectionMatrix.copy(D.projectionMatrix),J(se,Q,De)};function J(se,Se,pe){pe===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=aa*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(se){h=se,g!==null&&(g.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(se){return y[se]};let qe=null;function He(se,Se){if(_=Se.getViewerPose(p||c),M=Se,_!==null){const pe=_.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let De=!1;pe.length!==Q.cameras.length&&(Q.cameras.length=0,De=!0);for(let at=0;at<pe.length;at++){const me=pe[at];let Ee=null;if(x!==null)Ee=x.getViewport(me);else{const Oe=v.getViewSubImage(g,me);Ee=Oe.viewport,at===0&&(e.setRenderTargetTextures(P,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(P))}let _e=O[at];_e===void 0&&(_e=new hi,_e.layers.enable(at),_e.viewport=new Zt,O[at]=_e),_e.matrix.fromArray(me.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(me.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),at===0&&(Q.matrix.copy(_e.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),De===!0&&Q.cameras.push(_e)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const at=v.getDepthInformation(pe[0]);at&&at.isValid&&at.texture&&S.init(at,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let at=0;at<pe.length;at++){const me=pe[at].camera;if(me){let Ee=y[me];Ee||(Ee=new $m,y[me]=Ee);const _e=v.getCameraImage(me);Ee.sourceTexture=_e}}}}for(let pe=0;pe<B.length;pe++){const De=N[pe],Ze=B[pe];De!==null&&Ze!==void 0&&Ze.update(De,Se,p||c)}qe&&qe(se,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),M=null}const Fe=new a1;Fe.setAnimationLoop(He),this.setAnimationLoop=function(se){qe=se},this.dispose=function(){}}}const my=new Jt,p1=new vt;p1.set(-1,0,0,0,1,0,0,0,1);function gy(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,r1(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,b,L,P){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,P)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),C(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,b,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Bn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Bn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const b=e.get(y),L=b.envMap,P=b.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(p1),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,b,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*b,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,b){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const b=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function _y(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,L){const P=L.program;r.uniformBlockBinding(b,P)}function p(b,L){let P=o[b.id];P===void 0&&(M(b),P=_(b),o[b.id]=P,b.addEventListener("dispose",S));const B=L.program;r.updateUBOMapping(b,B);const N=e.render.frame;l[b.id]!==N&&(g(b),l[b.id]=N)}function _(b){const L=v();b.__bindingPointIndex=L;const P=s.createBuffer(),B=b.__size,N=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,B,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function v(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=o[b.id],P=b.uniforms,B=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,F=P.length;N<F;N++){const T=Array.isArray(P[N])?P[N]:[P[N]];for(let D=0,V=T.length;D<V;D++){const O=T[D];if(x(O,N,D,B)===!0){const Q=O.__offset,le=Array.isArray(O.value)?O.value:[O.value];let ue=0;for(let G=0;G<le.length;G++){const K=le[G],Y=C(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,Q+ue,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):ArrayBuffer.isView(K)?O.__data.set(new K.constructor(K.buffer,K.byteOffset,O.__data.length)):(K.toArray(O.__data,ue),ue+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(b,L,P,B){const N=b.value,F=L+"_"+P;if(B[F]===void 0)return typeof N=="number"||typeof N=="boolean"?B[F]=N:ArrayBuffer.isView(N)?B[F]=N.slice():B[F]=N.clone(),!0;{const T=B[F];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return B[F]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(T.equals(N)===!1)return T.copy(N),!0}}return!1}function M(b){const L=b.uniforms;let P=0;const B=16;for(let F=0,T=L.length;F<T;F++){const D=Array.isArray(L[F])?L[F]:[L[F]];for(let V=0,O=D.length;V<O;V++){const Q=D[V],le=Array.isArray(Q.value)?Q.value:[Q.value];for(let ue=0,G=le.length;ue<G;ue++){const K=le[ue],Y=C(K),j=P%B,oe=j%Y.boundary,ae=j+oe;P+=oe,ae!==0&&B-ae<Y.storage&&(P+=B-ae),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=Y.storage}}}const N=P%B;return N>0&&(P+=B-N),b.__size=P,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",b),L}function S(b){const L=b.target;L.removeEventListener("dispose",S);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:h,update:p,dispose:y}}const vy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function xy(){return Ti===null&&(Ti=new T_(vy,16,16,os,ir),Ti.name="DFG_LUT",Ti.minFilter=Tn,Ti.magFilter=Tn,Ti.wrapS=er,Ti.wrapT=er,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Sy{constructor(e={}){const{canvas:t=O2(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Xn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const C=x,S=new Set([wd,Td,Ed]),y=new Set([Xn,Li,ra,sa,yd,Md]),b=new Uint32Array(4),L=new Int32Array(4),P=new X;let B=null,N=null;const F=[],T=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let O=!1,Q=null;this._outputColorSpace=ti;let le=0,ue=0,G=null,K=-1,Y=null;const j=new Zt,oe=new Zt;let ae=null;const U=new Lt(0);let J=0,qe=t.width,He=t.height,Fe=1,se=null,Se=null;const pe=new Zt(0,0,qe,He),De=new Zt(0,0,qe,He);let Ze=!1;const rt=new Ld;let wt=!1,at=!1;const me=new Jt,Ee=new X,_e=new Zt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ut(){return G===null?Fe:1}let q=r;function lt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xd}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",mt,!1),q===null){const W="webgl2";if(q=lt(W,A),q===null)throw lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let $e,ft,we,bt,R,E,$,de,ge,Te,be,ce,he,ke,Ge,Pe,Ae,dt,pt,St,z,Re,fe;function ze(){$e=new x4(q),$e.init(),z=new cy(q,$e),ft=new f4(q,$e,e,z),we=new ly(q,$e),ft.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),bt=new M4(q),R=new jS,E=new uy(q,$e,we,R,ft,z,bt),$=new v4(V),de=new A3(q),Re=new u4(q,de),ge=new S4(q,de,bt,Re),Te=new T4(q,ge,de,Re,bt),dt=new E4(q,ft,E),Ge=new d4(R),be=new YS(V,$,$e,ft,Re,Ge),ce=new gy(V,R),he=new KS,ke=new ny($e),Ae=new l4(V,$,we,Te,M,h),Pe=new ay(V,Te,ft),fe=new _y(q,bt,ft,we),pt=new c4(q,$e,bt),St=new y4(q,$e,bt),bt.programs=be.programs,V.capabilities=ft,V.extensions=$e,V.properties=R,V.renderLists=he,V.shadowMap=Pe,V.state=we,V.info=bt}ze(),C!==Xn&&(D=new A4(C,t.width,t.height,o,l));const Ne=new py(V,q);this.xr=Ne,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(A){A!==void 0&&(Fe=A,this.setSize(qe,He,!1))},this.getSize=function(A){return A.set(qe,He)},this.setSize=function(A,W,ie=!0){if(Ne.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,He=W,t.width=Math.floor(A*Fe),t.height=Math.floor(W*Fe),ie===!0&&(t.style.width=A+"px",t.style.height=W+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(qe*Fe,He*Fe).floor()},this.setDrawingBufferSize=function(A,W,ie){qe=A,He=W,Fe=ie,t.width=Math.floor(A*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===Xn){Rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,W,ie,te){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,W,ie,te),we.viewport(j.copy(pe).multiplyScalar(Fe).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,W,ie,te){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,W,ie,te),we.scissor(oe.copy(De).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){we.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ie=!0){let te=0;if(A){let ee=!1;if(G!==null){const Ie=G.texture.format;ee=S.has(Ie)}if(ee){const Ie=G.texture.type,Ye=y.has(Ie),Le=Ae.getClearColor(),Qe=Ae.getClearAlpha(),it=Le.r,gt=Le.g,_t=Le.b;Ye?(b[0]=it,b[1]=gt,b[2]=_t,b[3]=Qe,q.clearBufferuiv(q.COLOR,0,b)):(L[0]=it,L[1]=gt,L[2]=_t,L[3]=Qe,q.clearBufferiv(q.COLOR,0,L))}else te|=q.COLOR_BUFFER_BIT}W&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Ae.dispose(),he.dispose(),ke.dispose(),R.dispose(),$.dispose(),Te.dispose(),Re.dispose(),fe.dispose(),be.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ir),Ne.removeEventListener("sessionend",fs),Fi.stop()};function ve(A){A.preventDefault(),M0("WebGLRenderer: Context Lost."),O=!0}function Je(){M0("WebGLRenderer: Context Restored."),O=!1;const A=bt.autoReset,W=Pe.enabled,ie=Pe.autoUpdate,te=Pe.needsUpdate,ee=Pe.type;ze(),bt.autoReset=A,Pe.enabled=W,Pe.autoUpdate=ie,Pe.needsUpdate=te,Pe.type=ee}function mt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){const W=A.target;W.removeEventListener("dispose",Ot),Nt(W)}function Nt(A){wn(A),R.remove(A)}function wn(A){const W=R.get(A).programs;W!==void 0&&(W.forEach(function(ie){be.releaseProgram(ie)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,te,ee,Ie){W===null&&(W=Oe);const Ye=ee.isMesh&&ee.matrixWorld.determinant()<0,Le=ma(A,W,ie,te,ee);we.setMaterial(te,Ye);let Qe=ie.index,it=1;if(te.wireframe===!0){if(Qe=ge.getWireframeAttribute(ie),Qe===void 0)return;it=2}const gt=ie.drawRange,_t=ie.attributes.position;let tt=gt.start*it,Ct=(gt.start+gt.count)*it;Ie!==null&&(tt=Math.max(tt,Ie.start*it),Ct=Math.min(Ct,(Ie.start+Ie.count)*it)),Qe!==null?(tt=Math.max(tt,0),Ct=Math.min(Ct,Qe.count)):_t!=null&&(tt=Math.max(tt,0),Ct=Math.min(Ct,_t.count));const Bt=Ct-tt;if(Bt<0||Bt===1/0)return;Re.setup(ee,te,Le,ie,Qe);let Gt,Ut=pt;if(Qe!==null&&(Gt=de.get(Qe),Ut=St,Ut.setIndex(Gt)),ee.isMesh)te.wireframe===!0?(we.setLineWidth(te.wireframeLinewidth*ut()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(ee.isLine){let en=te.linewidth;en===void 0&&(en=1),we.setLineWidth(en*ut()),ee.isLineSegments?Ut.setMode(q.LINES):ee.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else ee.isPoints?Ut.setMode(q.POINTS):ee.isSprite&&Ut.setMode(q.TRIANGLES);if(ee.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const en=ee._multiDrawStarts,We=ee._multiDrawCounts,hn=ee._multiDrawCount,yt=Qe?de.get(Qe).bytesPerElement:1,Ln=R.get(te).currentProgram.getUniforms();for(let Nn=0;Nn<hn;Nn++)Ln.setValue(q,"_gl_DrawID",Nn),Ut.render(en[Nn]/yt,We[Nn])}else if(ee.isInstancedMesh)Ut.renderInstances(tt,Bt,ee.count);else if(ie.isInstancedBufferGeometry){const en=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,We=Math.min(ie.instanceCount,en);Ut.renderInstances(tt,Bt,We)}else Ut.render(tt,Bt)};function Yn(A,W,ie){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,ds(A,W,ie),A.side=Nr,A.needsUpdate=!0,ds(A,W,ie),A.side=Qi):ds(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),N=ke.get(ie),N.init(W),T.push(N),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),A!==ie&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const te=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Ye=0;Ye<Ie.length;Ye++){const Le=Ie[Ye];Yn(Le,ie,ee),te.add(Le)}else Yn(Ie,ie,ee),te.add(Ie)}),N=T.pop(),te},this.compileAsync=function(A,W,ie=null){const te=this.compile(A,W,ie);return new Promise(ee=>{function Ie(){if(te.forEach(function(Ye){R.get(Ye).currentProgram.isReady()&&te.delete(Ye)}),te.size===0){ee(A);return}setTimeout(Ie,10)}$e.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let qi=null;function cs(A){qi&&qi(A)}function Ir(){Fi.stop()}function fs(){Fi.start()}const Fi=new a1;Fi.setAnimationLoop(cs),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){qi=A,Ne.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},Ne.addEventListener("sessionstart",Ir),Ne.addEventListener("sessionend",fs),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;Q!==null&&Q.renderStart(A,W);const ie=Ne.enabled===!0&&Ne.isPresenting===!0,te=D!==null&&(G===null||ie)&&D.begin(V,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(W),W=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,W,G),N=ke.get(A,T.length),N.init(W),N.state.textureUnits=E.getTextureUnits(),T.push(N),me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),rt.setFromProjectionMatrix(me,Ci,W.reversedDepth),at=this.localClippingEnabled,wt=Ge.init(this.clippingPlanes,at),B=he.get(A,F.length),B.init(),F.push(B),Ne.enabled===!0&&Ne.isPresenting===!0){const Ye=V.xr.getDepthSensingMesh();Ye!==null&&oo(Ye,W,-1/0,V.sortObjects)}oo(A,W,0,V.sortObjects),B.finish(),V.sortObjects===!0&&B.sort(se,Se),Ue=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Ue&&Ae.addToRenderList(B,A),this.info.render.frame++,wt===!0&&Ge.beginShadows();const ee=N.state.shadowsArray;if(Pe.render(ee,A,W),wt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&D.hasRenderPass())===!1){const Ye=B.opaque,Le=B.transmissive;if(N.setupLights(),W.isArrayCamera){const Qe=W.cameras;if(Le.length>0)for(let it=0,gt=Qe.length;it<gt;it++){const _t=Qe[it];_i(Ye,Le,A,_t)}Ue&&Ae.render(A);for(let it=0,gt=Qe.length;it<gt;it++){const _t=Qe[it];ha(B,A,_t,_t.viewport)}}else Le.length>0&&_i(Ye,Le,A,W),Ue&&Ae.render(A),ha(B,A,W)}G!==null&&ue===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),te&&D.end(V),A.isScene===!0&&A.onAfterRender(V,A,W),Re.resetDefaultState(),K=-1,Y=null,T.pop(),T.length>0?(N=T[T.length-1],E.setTextureUnits(N.state.textureUnits),wt===!0&&Ge.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?B=F[F.length-1]:B=null,Q!==null&&Q.renderEnd()};function oo(A,W,ie,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){te&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const Ye=Te.update(A),Le=A.material;Le.visible&&B.push(A,Ye,Le,ie,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){const Ye=Te.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),_e.copy(Ye.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Le)){const Qe=Ye.groups;for(let it=0,gt=Qe.length;it<gt;it++){const _t=Qe[it],tt=Le[_t.materialIndex];tt&&tt.visible&&B.push(A,Ye,tt,ie,_e.z,_t)}}else Le.visible&&B.push(A,Ye,Le,ie,_e.z,null)}}const Ie=A.children;for(let Ye=0,Le=Ie.length;Ye<Le;Ye++)oo(Ie[Ye],W,ie,te)}function ha(A,W,ie,te){const{opaque:ee,transmissive:Ie,transparent:Ye}=A;N.setupLightsView(ie),wt===!0&&Ge.setGlobalState(V.clippingPlanes,ie),te&&we.viewport(j.copy(te)),ee.length>0&&Ur(ee,W,ie),Ie.length>0&&Ur(Ie,W,ie),Ye.length>0&&Ur(Ye,W,ie),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _i(A,W,ie,te){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[te.id]===void 0){const tt=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[te.id]=new bi(1,1,{generateMipmaps:!0,type:tt?ir:Xn,minFilter:ns,samples:Math.max(4,ft.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[te.id],Ye=te.viewport||j;Ie.setSize(Ye.z*V.transmissionResolutionScale,Ye.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),Qe=V.getActiveCubeFace(),it=V.getActiveMipmapLevel();V.setRenderTarget(Ie),V.getClearColor(U),J=V.getClearAlpha(),J<1&&V.setClearColor(16777215,.5),V.clear(),Ue&&Ae.render(ie);const gt=V.toneMapping;V.toneMapping=Ri;const _t=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),N.setupLightsView(te),wt===!0&&Ge.setGlobalState(V.clippingPlanes,te),Ur(A,ie,te),E.updateMultisampleRenderTarget(Ie),E.updateRenderTargetMipmap(Ie),$e.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ct=0,Bt=W.length;Ct<Bt;Ct++){const Gt=W[Ct],{object:Ut,geometry:en,material:We,group:hn}=Gt;if(We.side===Qi&&Ut.layers.test(te.layers)){const yt=We.side;We.side=Bn,We.needsUpdate=!0,ao(Ut,ie,te,en,We,hn),We.side=yt,We.needsUpdate=!0,tt=!0}}tt===!0&&(E.updateMultisampleRenderTarget(Ie),E.updateRenderTargetMipmap(Ie))}V.setRenderTarget(Le,Qe,it),V.setClearColor(U,J),_t!==void 0&&(te.viewport=_t),V.toneMapping=gt}function Ur(A,W,ie){const te=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Ie=A.length;ee<Ie;ee++){const Ye=A[ee],{object:Le,geometry:Qe,group:it}=Ye;let gt=Ye.material;gt.allowOverride===!0&&te!==null&&(gt=te),Le.layers.test(ie.layers)&&ao(Le,W,ie,Qe,gt,it)}}function ao(A,W,ie,te,ee,Ie){A.onBeforeRender(V,W,ie,te,ee,Ie),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(V,W,ie,te,A,Ie),ee.transparent===!0&&ee.side===Qi&&ee.forceSinglePass===!1?(ee.side=Bn,ee.needsUpdate=!0,V.renderBufferDirect(ie,W,te,ee,A,Ie),ee.side=Nr,ee.needsUpdate=!0,V.renderBufferDirect(ie,W,te,ee,A,Ie),ee.side=Qi):V.renderBufferDirect(ie,W,te,ee,A,Ie),A.onAfterRender(V,W,ie,te,ee,Ie)}function ds(A,W,ie){W.isScene!==!0&&(W=Oe);const te=R.get(A),ee=N.state.lights,Ie=N.state.shadowsArray,Ye=ee.state.version,Le=be.getParameters(A,ee.state,Ie,W,ie,N.state.lightProbeGridArray),Qe=be.getProgramCacheKey(Le);let it=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,te.fog=W.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=$.get(A.envMap||te.environment,gt),te.envMapRotation=te.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",Ot),it=new Map,te.programs=it);let _t=it.get(Qe);if(_t!==void 0){if(te.currentProgram===_t&&te.lightsStateVersion===Ye)return uo(A,Le),_t}else Le.uniforms=be.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,ie,Le),A.onBeforeCompile(Le,V),_t=be.acquireProgram(Le,Qe),it.set(Qe,_t),te.uniforms=Le.uniforms;const tt=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(tt.clippingPlanes=Ge.uniform),uo(A,Le),te.needsLights=su(A),te.lightsStateVersion=Ye,te.needsLights&&(tt.ambientLightColor.value=ee.state.ambient,tt.lightProbe.value=ee.state.probe,tt.directionalLights.value=ee.state.directional,tt.directionalLightShadows.value=ee.state.directionalShadow,tt.spotLights.value=ee.state.spot,tt.spotLightShadows.value=ee.state.spotShadow,tt.rectAreaLights.value=ee.state.rectArea,tt.ltc_1.value=ee.state.rectAreaLTC1,tt.ltc_2.value=ee.state.rectAreaLTC2,tt.pointLights.value=ee.state.point,tt.pointLightShadows.value=ee.state.pointShadow,tt.hemisphereLights.value=ee.state.hemi,tt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,tt.spotLightMatrix.value=ee.state.spotLightMatrix,tt.spotLightMap.value=ee.state.spotLightMap,tt.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=N.state.lightProbeGridArray.length>0,te.currentProgram=_t,te.uniformsList=null,_t}function lo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Xl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function uo(A,W){const ie=R.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function pa(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(W.matrixWorld);for(let ie=0,te=A.length;ie<te;ie++){const ee=A[ie];if(ee.texture!==null&&ee.boundingBox.containsPoint(P))return ee}return null}function ma(A,W,ie,te,ee){W.isScene!==!0&&(W=Oe),E.resetTextureUnits();const Ie=W.fog,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?W.environment:null,Le=G===null?V.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:At.workingColorSpace,Qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,it=$.get(te.envMap||Ye,Qe),gt=te.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,_t=!!ie.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),tt=!!ie.morphAttributes.position,Ct=!!ie.morphAttributes.normal,Bt=!!ie.morphAttributes.color;let Gt=Ri;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,en=Ut!==void 0?Ut.length:0,We=R.get(te),hn=N.state.lights;if(wt===!0&&(at===!0||A!==Y)){const qt=A===Y&&te.id===K;Ge.setState(te,A,qt)}let yt=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hn.state.version||We.outputColorSpace!==Le||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==it||te.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==gt||We.vertexTangents!==_t||We.morphTargets!==tt||We.morphNormals!==Ct||We.morphColors!==Bt||We.toneMapping!==Gt||We.morphTargetsCount!==en||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,We.__version=te.version);let Ln=We.currentProgram;yt===!0&&(Ln=ds(te,W,ee),Q&&te.isNodeMaterial&&Q.onUpdateProgram(te,Ln,We));let Nn=!1,Mt=!1,Oi=!1;const It=Ln.getUniforms(),zt=We.uniforms;if(we.useProgram(Ln.program)&&(Nn=!0,Mt=!0,Oi=!0),te.id!==K&&(K=te.id,Mt=!0),We.needsLights){const qt=pa(N.state.lightProbeGridArray,ee);We.lightProbeGrid!==qt&&(We.lightProbeGrid=qt,Mt=!0)}if(Nn||Y!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",A.projectionMatrix),It.setValue(q,"viewMatrix",A.matrixWorldInverse);const ii=It.map.cameraPosition;ii!==void 0&&ii.setValue(q,Ee.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,Mt=!0,Oi=!0)}if(We.needsLights&&(hn.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",hn.state.directionalShadowMap,E),hn.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",hn.state.spotShadowMap,E),hn.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",hn.state.pointShadowMap,E)),ee.isSkinnedMesh){It.setOptional(q,ee,"bindMatrix"),It.setOptional(q,ee,"bindMatrixInverse");const qt=ee.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),It.setValue(q,"boneTexture",qt.boneTexture,E))}ee.isBatchedMesh&&(It.setOptional(q,ee,"batchingTexture"),It.setValue(q,"batchingTexture",ee._matricesTexture,E),It.setOptional(q,ee,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",ee._indirectTexture,E),It.setOptional(q,ee,"batchingColorTexture"),ee._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",ee._colorsTexture,E));const ni=ie.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&dt.update(ee,ie,Ln),(Mt||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,It.setValue(q,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&W.environment!==null&&(zt.envMapIntensity.value=W.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=xy()),Mt){if(It.setValue(q,"toneMappingExposure",V.toneMappingExposure),We.needsLights&&ru(zt,Oi),Ie&&te.fog===!0&&ce.refreshFogUniforms(zt,Ie),ce.refreshMaterialUniforms(zt,te,Fe,He,N.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const qt=We.lightProbeGrid;zt.probesSH.value=qt.texture,zt.probesMin.value.copy(qt.boundingBox.min),zt.probesMax.value.copy(qt.boundingBox.max),zt.probesResolution.value.copy(qt.resolution)}Xl.upload(q,lo(We),zt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Xl.upload(q,lo(We),zt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(q,"center",ee.center),It.setValue(q,"modelViewMatrix",ee.modelViewMatrix),It.setValue(q,"normalMatrix",ee.normalMatrix),It.setValue(q,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const qt=te.uniformsGroups;for(let ii=0,vi=qt.length;ii<vi;ii++){const qr=qt[ii];fe.update(qr,Ln),fe.bind(qr,Ln)}}return Ln}function ru(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function su(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,W,ie){const te=R.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=W,R.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ie,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ie=R.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const Xt=q.createFramebuffer();this.setRenderTarget=function(A,W=0,ie=0){G=A,le=W,ue=ie;let te=null,ee=!1,Ie=!1;if(A){const Le=R.get(A);if(Le.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(q.FRAMEBUFFER,Le.__webglFramebuffer),j.copy(A.viewport),oe.copy(A.scissor),ae=A.scissorTest,we.viewport(j),we.scissor(oe),we.setScissorTest(ae),K=-1;return}else if(Le.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Le.__hasExternalTextures)E.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Le.__boundDepthTexture!==gt){if(gt!==null&&R.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ie=!0);const it=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[W])?te=it[W][ie]:te=it[W],ee=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=R.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?te=it[ie]:te=it,j.copy(A.viewport),oe.copy(A.scissor),ae=A.scissorTest}else j.copy(pe).multiplyScalar(Fe).floor(),oe.copy(De).multiplyScalar(Fe).floor(),ae=Ze;if(ie!==0&&(te=Xt),we.bindFramebuffer(q.FRAMEBUFFER,te)&&we.drawBuffers(A,te),we.viewport(j),we.scissor(oe),we.setScissorTest(ae),ee){const Le=R.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ie)}else if(Ie){const Le=W;for(let Qe=0;Qe<A.textures.length;Qe++){const it=R.get(A.textures[Qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Qe,it.__webglTexture,ie,Le)}}else if(A!==null&&ie!==0){const Le=R.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Le.__webglTexture,ie)}K=-1},this.readRenderTargetPixels=function(A,W,ie,te,ee,Ie,Ye,Le=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){we.bindFramebuffer(q.FRAMEBUFFER,Qe);try{const it=A.textures[Le],gt=it.format,_t=it.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!ft.textureFormatReadable(gt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(_t)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&ie>=0&&ie<=A.height-ee&&q.readPixels(W,ie,te,ee,z.convert(gt),z.convert(_t),Ie)}finally{const it=G!==null?R.get(G).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,te,ee,Ie,Ye,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe)if(W>=0&&W<=A.width-te&&ie>=0&&ie<=A.height-ee){we.bindFramebuffer(q.FRAMEBUFFER,Qe);const it=A.textures[Le],gt=it.format,_t=it.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!ft.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,tt),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(W,ie,te,ee,z.convert(gt),z.convert(_t),0);const Ct=G!==null?R.get(G).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,Ct);const Bt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await B2(q,Bt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,tt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer(tt),q.deleteSync(Bt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ie=0){const te=Math.pow(2,-ie),ee=Math.floor(A.image.width*te),Ie=Math.floor(A.image.height*te),Ye=W!==null?W.x:0,Le=W!==null?W.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ie,0,0,Ye,Le,ee,Ie),we.unbindTexture()};const ou=q.createFramebuffer(),co=q.createFramebuffer();this.copyTextureToTexture=function(A,W,ie=null,te=null,ee=0,Ie=0){let Ye,Le,Qe,it,gt,_t,tt,Ct,Bt;const Gt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(ie!==null)Ye=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,Qe=ie.isBox3?ie.max.z-ie.min.z:1,it=ie.min.x,gt=ie.min.y,_t=ie.isBox3?ie.min.z:0;else{const zt=Math.pow(2,-ee);Ye=Math.floor(Gt.width*zt),Le=Math.floor(Gt.height*zt),A.isDataArrayTexture?Qe=Gt.depth:A.isData3DTexture?Qe=Math.floor(Gt.depth*zt):Qe=1,it=0,gt=0,_t=0}te!==null?(tt=te.x,Ct=te.y,Bt=te.z):(tt=0,Ct=0,Bt=0);const Ut=z.convert(W.format),en=z.convert(W.type);let We;W.isData3DTexture?(E.setTexture3D(W,0),We=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),We=q.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),We=q.TEXTURE_2D),we.activeTexture(q.TEXTURE0),we.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),we.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),we.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=we.getParameter(q.UNPACK_ROW_LENGTH),yt=we.getParameter(q.UNPACK_IMAGE_HEIGHT),Ln=we.getParameter(q.UNPACK_SKIP_PIXELS),Nn=we.getParameter(q.UNPACK_SKIP_ROWS),Mt=we.getParameter(q.UNPACK_SKIP_IMAGES);we.pixelStorei(q.UNPACK_ROW_LENGTH,Gt.width),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Gt.height),we.pixelStorei(q.UNPACK_SKIP_PIXELS,it),we.pixelStorei(q.UNPACK_SKIP_ROWS,gt),we.pixelStorei(q.UNPACK_SKIP_IMAGES,_t);const Oi=A.isDataArrayTexture||A.isData3DTexture,It=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const zt=R.get(A),ni=R.get(W),qt=R.get(zt.__renderTarget),ii=R.get(ni.__renderTarget);we.bindFramebuffer(q.READ_FRAMEBUFFER,qt.__webglFramebuffer),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let vi=0;vi<Qe;vi++)Oi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,R.get(A).__webglTexture,ee,_t+vi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,R.get(W).__webglTexture,Ie,Bt+vi)),q.blitFramebuffer(it,gt,Ye,Le,tt,Ct,Ye,Le,q.DEPTH_BUFFER_BIT,q.NEAREST);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||R.has(A)){const zt=R.get(A),ni=R.get(W);we.bindFramebuffer(q.READ_FRAMEBUFFER,ou),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,co);for(let qt=0;qt<Qe;qt++)Oi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,zt.__webglTexture,ee,_t+qt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zt.__webglTexture,ee),It?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ni.__webglTexture,Ie,Bt+qt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ni.__webglTexture,Ie),ee!==0?q.blitFramebuffer(it,gt,Ye,Le,tt,Ct,Ye,Le,q.COLOR_BUFFER_BIT,q.NEAREST):It?q.copyTexSubImage3D(We,Ie,tt,Ct,Bt+qt,it,gt,Ye,Le):q.copyTexSubImage2D(We,Ie,tt,Ct,it,gt,Ye,Le);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(We,Ie,tt,Ct,Bt,Ye,Le,Qe,Ut,en,Gt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(We,Ie,tt,Ct,Bt,Ye,Le,Qe,Ut,Gt.data):q.texSubImage3D(We,Ie,tt,Ct,Bt,Ye,Le,Qe,Ut,en,Gt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,tt,Ct,Ye,Le,Ut,en,Gt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,tt,Ct,Gt.width,Gt.height,Ut,Gt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,tt,Ct,Ye,Le,Ut,en,Gt);we.pixelStorei(q.UNPACK_ROW_LENGTH,hn),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt),we.pixelStorei(q.UNPACK_SKIP_PIXELS,Ln),we.pixelStorei(q.UNPACK_SKIP_ROWS,Nn),we.pixelStorei(q.UNPACK_SKIP_IMAGES,Mt),Ie===0&&W.generateMipmaps&&q.generateMipmap(We),we.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){le=0,ue=0,G=null,we.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class yy extends Ud{constructor(e){super(e)}load(e,t,r,o){const l=this,c=new v3(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){const h=l.parse(JSON.parse(f));t&&t(h)},r,o)}parse(e){return new m1(e)}}class m1{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,r="ltr"){const o=[],l=My(e,t,this.data,r);for(let c=0,f=l.length;c<f;c++)o.push(...l[c].toShapes());return o}}function My(s,e,t,r){const o=Array.from(s),l=e/t.resolution,c=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*l,f=[];let h=0,p=0;(r=="rtl"||r=="tb")&&o.reverse();for(let _=0;_<o.length;_++){const v=o[_];if(v===`
`)h=0,p-=c;else{const g=Ey(v,l,h,p,t);r=="tb"?(h=0,p+=t.ascender*l):h+=g.offsetX,f.push(g.path)}}return f}function Ey(s,e,t,r,o){const l=o.glyphs[s]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const c=new T3;let f,h,p,_,v,g,x,M;if(l.o){const C=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let S=0,y=C.length;S<y;)switch(C[S++]){case"m":f=C[S++]*e+t,h=C[S++]*e+r,c.moveTo(f,h);break;case"l":f=C[S++]*e+t,h=C[S++]*e+r,c.lineTo(f,h);break;case"q":p=C[S++]*e+t,_=C[S++]*e+r,v=C[S++]*e+t,g=C[S++]*e+r,c.quadraticCurveTo(v,g,p,_);break;case"b":p=C[S++]*e+t,_=C[S++]*e+r,v=C[S++]*e+t,g=C[S++]*e+r,x=C[S++]*e+t,M=C[S++]*e+r,c.bezierCurveTo(v,g,x,M,p,_);break}}return{offsetX:l.ha*e,path:c}}class qd extends Id{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){const t=e.options;return t.font=new m1(t.font.data),new qd(t.text,t)}}const Ty=JSON.parse('{"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"\'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}'),wy="bold",Ay=1216,Cy=-100,Ry="normal",by={yMin:-333,xMin:-162,yMax:1216,xMax:1681},Py=1e3,Ly={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},Ny=-334,Dy="Helvetiker",Iy=1549,Uy=50,qy={glyphs:Ty,cssFontWeight:wy,ascender:Ay,underlinePosition:Cy,cssFontStyle:Ry,boundingBox:by,resolution:Py,original_font_information:Ly,descender:Ny,familyName:Dy,lineHeight:Iy,underlineThickness:Uy},Fy=""+new URL("monsoon-logo-long-BGcHbNwk.png",import.meta.url).href;function Oy(){const s=Mf.useRef(null);return Mf.useEffect(()=>{if(!s.current)return;const e=s.current,t=new Sy({alpha:!0,antialias:!0,canvas:e});t.setClearColor(0,0),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=new __,o=new tu(-1,1,1,-1,.1,100);o.position.set(-6.2,8.4,12.4),o.lookAt(.65,.8,-2.45);const l=new W0({color:6812472,emissive:894208,emissiveIntensity:.25,metalness:0,roughness:.46}),c=new W0({color:39688,emissive:14592,emissiveIntensity:.08,metalness:0,roughness:.68});r.add(new x3(12124026,5888,2.3));const f=new J0(12910455,6.2);f.position.set(-5.5,9.5,5.5),r.add(f);const h=new J0(1703730,2.4);h.position.set(5.5,4.2,-3.5),r.add(h);const p=new Zo,_=new yy().parse(qy),v=[],g=7;let x=0;"MON99".split("").forEach(P=>{const B=new qd(P,{font:_,size:2.42,depth:g,curveSegments:18,bevelEnabled:!0,bevelThickness:.18,bevelSize:.09,bevelOffset:0,bevelSegments:9});B.rotateX(-Math.PI/2),B.computeBoundingBox();const N=B.boundingBox,F=N?N.max.x-N.min.x:1.4;N&&(B.translate(0,-N.min.y,-N.min.z),B.computeBoundingBox());const T=new Ni(B,[l,c]);T.position.x=x,T.position.y=0,T.position.z=0,T.userData.baseY=T.position.y,p.add(T),v.push(T),x+=F*1.08});const M=new ro().setFromObject(p),C=M.getCenter(new X),S=new X(-C.x+.3,-M.min.y-.25,-C.z-.6);p.position.copy(S),p.rotation.set(0,i_.degToRad(30),0),p.scale.set(.98,.98,.98),r.add(p);const y=()=>{const P=e.clientWidth,B=e.clientHeight;t.setSize(P,B,!1);const N=P/B,F=N<1?10.4:8.2,T=F*N,D=B>0?600/B*F:0;o.left=-T/2,o.right=T/2,o.top=F/2,o.bottom=-F/2,o.updateProjectionMatrix(),p.position.copy(S),p.position.y-=D};let b=0;const L=P=>{const B=P*.001;v.forEach((N,F)=>{const T=B*3.4-F*.34,D=Math.max(0,Math.sin(T))**2,V=Math.max(0,Math.sin(T+Math.PI*.5))**2,O=N.userData.baseY;N.scale.y=.92+D*.24,N.position.y=O-V*.025}),t.render(r,o),b=requestAnimationFrame(L)};return y(),window.addEventListener("resize",y),b=requestAnimationFrame(L),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",y),t.dispose(),l.dispose(),c.dispose(),v.forEach(P=>{P.geometry.dispose()})}},[]),dn.jsx("canvas",{ref:s,className:"h-full w-full","aria-label":"MON99",role:"img"})}function By(){return dn.jsxs("section",{className:"relative h-screen w-full overflow-hidden bg-black text-white",children:[dn.jsx("div",{className:"absolute left-0 right-0 top-0 z-20 pt-6",children:dn.jsxs("nav",{className:"relative h-24",children:[dn.jsx("img",{src:Fy,alt:"monsoon",className:"absolute left-[6vw] top-0 h-[67px] w-auto md:left-[12vw] md:h-[77px]"}),dn.jsx("div",{className:"nav-links absolute top-1 items-center",style:{left:"52vw",gap:"30px"},children:["ABOUT","WORKS","TEAM","CONTACT"].map(s=>dn.jsx("button",{className:"whitespace-nowrap text-lg font-light tracking-normal text-white transition-colors hover:text-white/80",children:s},s))}),dn.jsx("button",{className:"absolute right-6 top-0 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25 md:right-10",children:"Staff"})]})}),dn.jsxs("div",{className:"relative flex h-full w-full items-center justify-center",children:[dn.jsx("div",{className:"monsoon-stage absolute inset-x-[-18%] top-[5%] h-[58vh] px-2 md:top-[4%] md:h-[72vh] md:px-10",children:dn.jsx(Oy,{})}),dn.jsxs("div",{className:"relative z-10 mt-[18vh] max-w-[88vw] text-left md:mt-[24vh] md:max-w-[76vw]",children:[dn.jsx("p",{className:"mb-5 text-xl font-semibold tracking-tight text-white md:text-3xl",children:"一家20+岁的新公司"}),dn.jsx("h1",{className:"hero-title text-[12vw] font-black text-white md:text-[6.4vw]",children:"A new company in its twenties"}),dn.jsxs("p",{className:"mt-5 text-xs font-medium tracking-tight text-white/70 md:text-sm",children:["Copyright ©1999-2026 Xiamen Monsoon Culture & Art Co., Ltd.","  ","All Rights Reserved"]})]}),dn.jsx("div",{className:"pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/45 to-black"})]})]})}r2.createRoot(document.getElementById("root")).render(dn.jsx(Zg.StrictMode,{children:dn.jsx(By,{})}));
