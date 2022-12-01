// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).safeCasts=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f,l=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}f=function(){return a(arguments)}();var p=f,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,g=Object.defineProperty,b=Object.prototype,m=b.toString,v=b.__defineGetter__,d=b.__defineSetter__,h=b.__lookupGetter__,j=b.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===m.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===m.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,n)||j.call(t,n)?(r=t.__proto__,t.__proto__=b,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&v&&v.call(t,n,e.get),u&&d&&d.call(t,n,e.set),t};var w=y;function x(t,n,e){w(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=r();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function I(t){return _(t)||E(t)}function T(t){return"number"==typeof t}x(I,"isPrimitive",_),x(I,"isObject",E);var P=Number,A=P.prototype.toString;var N=r();function k(t){return"object"==typeof t&&(t instanceof P||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function B(t){return T(t)||k(t)}function V(t){return t!=t}function F(t){return T(t)&&V(t)}function L(t){return k(t)&&V(t.valueOf())}function C(t){return F(t)||L(t)}x(B,"isPrimitive",T),x(B,"isObject",k),x(C,"isPrimitive",F),x(C,"isObject",L);var G=Number.POSITIVE_INFINITY,Y=P.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<G&&t>Y&&X(t)}function W(t){return T(t)&&H(t)}function D(t){return k(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}x(R,"isPrimitive",W),x(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=U.call(t,n))&&q&&I(t)?!F(n=+n)&&W(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}x(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var r,o;if(!nt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!W(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(C(n)){for(;o<r;o++)if(C(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var rt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=r();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ft(t){return ot(t)||ct(t)}function lt(){return new Function("return this;")()}x(ft,"isPrimitive",ot),x(ft,"isObject",ct);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof st?st:null;var gt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=gt.document&&gt.document.childNodes,mt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(t){var n,e,r,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=dt.exec(r.toString()))return n[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}x(vt,"REGEXP",dt);var jt="function"==typeof rt||"object"==typeof mt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?ht(t).toLowerCase():n};function wt(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===jt(_t))return!1;for(t in _t)try{-1===et(xt,t)&&u(_t,t)&&null!==_t[t]&&"object"===jt(_t[t])&&wt(_t[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et,It=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return o;e=$&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(n=function(t){if(!1===St&&!Ot)return wt(t);try{return wt(t)}catch(t){return!1}}(t),f=0;f<It.length;f++)c=It[f],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var Tt,Pt=Et,At={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function Nt(){var t,n,e,r,o,i,u,c,f;for(e={},n=(t=Pt(At)).length,f=0;f<n;f++){for(o=t[f],u=At[o],r={},c=0;c<n;c++)r[i=t[c]]=u[i];e[o]=r}return e}function kt(){var t,n,e,r,o,i,u,c,f;for(e={},n=(t=Pt(At)).length,f=0;f<n;f++){for(o=t[f],u=At[o],r=[],c=0;c<n;c++)1===u[i=t[c]]&&r.push(i);e[o]=r}return e}return function(t){return 0===arguments.length?Nt():(void 0===Tt&&(Tt=kt()),u(Tt,t)?Tt[t].slice():null)}}));
//# sourceMappingURL=browser.js.map
