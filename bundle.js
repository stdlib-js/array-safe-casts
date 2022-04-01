// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).safeCasts=n()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),n}var n=function(t){return Object.keys(Object(t))},e=n;var r=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,f=c;var l=function(t){return f.call(t)},a=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&a.call(t,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",v=p,y=s,b=c;var g=l,m=function(t){var n,e,r;if(null==t)return b.call(t);e=t[y],n=v(t,y);try{t[y]=void 0}catch(n){return b.call(t)}return r=b.call(t),n?t[y]=e:delete t[y],r},d=u()?m:g,h=d;var j,w=function(t){return"[object Arguments]"===h(t)},_=w;j=function(){return _(arguments)}();var x=j,O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(t){return!1}},P=Object.defineProperty,E=Object.prototype,I=E.toString,T=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,N=E.__lookupSetter__;var B=function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(k.call(t,n)||N.call(t,n)?(r=t.__proto__,t.__proto__=E,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(t,n,e.get),u&&A&&A.call(t,n,e.set),t},V=P,F=B,G=S()?V:F;var L=function(t,n,e){G(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},M=L;var C=function(t){return"string"==typeof t},X=String.prototype.valueOf;var Y=d,D=function(t){try{return X.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===Y(t)))},W=C,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",C),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=d,nt=Z,et=function(t){try{return $.call(t),!0}catch(t){return!1}},rt=u();var it=function(t){return"object"==typeof t&&(t instanceof nt||(rt?et(t):"[object Number]"===tt(t)))},ot=Q,ut=it;var ct=M,ft=function(t){return ot(t)||ut(t)},lt=it;ct(ft,"isPrimitive",Q),ct(ft,"isObject",lt);var at=ft;var pt=function(t){return t!=t},st=at.isPrimitive,vt=pt;var yt=function(t){return st(t)&&vt(t)},bt=at.isObject,gt=pt;var mt=function(t){return bt(t)&&gt(t.valueOf())},dt=yt,ht=mt;var jt=M,wt=function(t){return dt(t)||ht(t)},_t=mt;jt(wt,"isPrimitive",yt),jt(wt,"isObject",_t);var xt=wt,Ot=Number.POSITIVE_INFINITY,St=Z.NEGATIVE_INFINITY,Pt=Math.floor;var Et=function(t){return Pt(t)===t},It=Ot,Tt=St,At=Et;var kt=function(t){return t<It&&t>Tt&&At(t)},Nt=at.isPrimitive,Bt=kt;var Vt=function(t){return Nt(t)&&Bt(t)},Ft=at.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Vt,Ct=Lt;var Xt=M,Yt=function(t){return Mt(t)||Ct(t)},Dt=Lt;Xt(Yt,"isPrimitive",Vt),Xt(Yt,"isObject",Dt);var Ht,Rt=Yt,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=xt.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,n){var e;return null!=t&&(!(e=Jt.call(t,n))&&Kt&&zt(t)?!Ut(n=+n)&&qt(n)&&n>=0&&n<t.length:e)},Zt=Qt,$t=d;var tn=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},nn=p,en=Zt,rn=tn,on=Et;var un=x?w:function(t){return null!==t&&"object"==typeof t&&!rn(t)&&"number"==typeof t.length&&on(t.length)&&t.length>=0&&t.length<=4294967295&&nn(t,"callee")&&!en(t,"callee")},cn=un,fn=n,ln=Array.prototype.slice;var an=function(t){return cn(t)?fn(ln.call(t)):fn(t)},pn=tn;var sn=function(t){return null!==t&&"object"==typeof t};M(sn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!pn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(sn));var vn=sn;var yn=Zt((function(){}),"prototype"),bn=!Zt({toString:null},"toString"),gn=Et;var mn=xt,dn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gn(t.length)&&t.length>=0&&t.length<=9007199254740991},hn=K.isPrimitive,jn=Rt.isPrimitive;var wn=function(t,n,e){var r,i;if(!dn(t)&&!hn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!jn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(mn(n)){for(;i<r;i++)if(mn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1},_n=wn,xn=/./;var On=function(t){return"boolean"==typeof t},Sn=Boolean.prototype.toString;var Pn=d,En=function(t){try{return Sn.call(t),!0}catch(t){return!1}},In=u();var Tn=function(t){return"object"==typeof t&&(t instanceof Boolean||(In?En(t):"[object Boolean]"===Pn(t)))},An=On,kn=Tn;var Nn=M,Bn=function(t){return An(t)||kn(t)},Vn=Tn;Nn(Bn,"isPrimitive",On),Nn(Bn,"isObject",Vn);var Fn=Bn;var Gn=function(){return new Function("return this;")()},Ln="object"==typeof self?self:null,Mn="object"==typeof window?window:null,Cn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xn="object"==typeof Cn?Cn:null;module.exports=Xn;var Yn=Fn.isPrimitive,Dn=Gn,Hn=Ln,Rn=Mn,Wn=t(Object.freeze({__proto__:null}));var zn=function(t){if(arguments.length){if(!Yn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Dn()}if(Hn)return Hn;if(Rn)return Rn;if(Wn)return Wn;throw new Error("unexpected error. Unable to resolve global object.")},Un=zn(),qn=Un.document&&Un.document.childNodes,Jn=Int8Array,Kn=xn,Qn=qn,Zn=Jn;var $n=function(){return"function"==typeof Kn||"object"==typeof Zn||"function"==typeof Qn};var te=function(){return/^\s*function\s*([^(]*)/i},ne=te;M(ne,"REGEXP",te());var ee=vn;var re=d,ie=ne.REGEXP,oe=function(t){return ee(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ue=function(t){var n,e,r;if(("Object"===(e=re(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=ie.exec(r.toString()))return n[1]}return oe(t)?"Buffer":e},ce=ue;var fe=ue;var le=function(t){var n;return null===t?"null":"object"===(n=typeof t)?ce(t).toLowerCase():n},ae=function(t){return fe(t).toLowerCase()},pe=$n()?ae:le;var se,ve=function(t){return t.constructor&&t.constructor.prototype===t},ye="undefined"==typeof window?void 0:window,be=p,ge=_n,me=pe,de=ve,he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],je=ye;se=function(){var t;if("undefined"===me(je))return!1;for(t in je)try{-1===ge(he,t)&&be(je,t)&&null!==je[t]&&"object"===me(je[t])&&de(je[t])}catch(t){return!0}return!1}();var we="undefined"!=typeof window,_e=se,xe=ve,Oe=we;var Se=vn,Pe=p,Ee=un,Ie=yn,Te=bn,Ae=function(t){if(!1===Oe&&!_e)return xe(t);try{return xe(t)}catch(t){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ne,Be=n,Ve=an,Fe=function(t){var n,e,r,i,o,u,c;if(i=[],Ee(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!Pe(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1===(r="function"==typeof t)&&!Se(t))return i;e=Ie&&r}for(o in t)e&&"prototype"===o||!Pe(t,o)||i.push(String(o));if(Te)for(n=Ae(t),c=0;c<ke.length;c++)u=ke[c],n&&"constructor"===u||!Pe(t,u)||i.push(String(u));return i},Ge=i?r()?Ve:Be:Fe,Le=p,Me={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function Ce(){var t,n,e,r,i,o,u,c,f;for(e={},n=(t=Ge(Me)).length,f=0;f<n;f++){for(i=t[f],u=Me[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Xe(){var t,n,e,r,i,o,u,c,f;for(e={},n=(t=Ge(Me)).length,f=0;f<n;f++){for(i=t[f],u=Me[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Ye=function(t){return 0===arguments.length?Ce():(void 0===Ne&&(Ne=Xe()),Le(Ne,t)?Ne[t].slice():null)};return Ye}));
//# sourceMappingURL=bundle.js.map
