!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=96)}({0:function(t,e,r){(function(e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new e(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}}).call(e,r(4).Buffer)},1:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],e))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(c(n.parts[i],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],i=o[0],s=o[1],a=o[2],u=o[3],f={css:s,media:a,sourceMap:u};r[i]?r[i].parts.push(f):e.push(r[i]={id:i,parts:[f]})}return e}function i(t,e){var r=v(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),i(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),i(t,e),e}function f(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function c(t,e){var r,n,o;if(e.singleton){var i=m++;r=y||(y=a(e)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=p.bind(null,r,e),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=h.bind(null,r),o=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function l(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=E(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function h(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=b(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var d={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),y=null,m=0,w=[],b=r(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=g()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var i=[],s=0;s<r.length;s++){var a=r[s],u=d[a.id];u.refs--,i.push(u)}if(t){n(o(t),e)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete d[u.id]}}}};var E=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},10:function(t,e,r){var n=r(15);"string"==typeof n&&(n=[[t.i,n,""]]);r(1)(n,{});n.locals&&(t.exports=n.locals)},14:function(t,e,r){"use strict";r(10),r(2),r(9),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(t,e,r,n,o){function i(t){var n,o;return o=r.defer(),n="/rest/site/fe/user/favor/byUser",n+="?site="+t.siteid,n+="&id="+t.id,n+="&type="+t.type,e.get(n).success(function(t){o.resolve(t.data)}),o.promise}function s(t){var n,o;return o=r.defer(),n="/rest/site/fe/user/favor/add",n+="?site="+t.siteid,n+="&id="+t.id,n+="&type="+t.type,e.get(n).success(function(t){o.resolve(t.data)}),o.promise}function a(t){var n,o;return o=r.defer(),n="/rest/site/fe/user/favor/remove",n+="?site="+t.siteid,n+="&id="+t.id,n+="&type="+t.type,e.get(n).success(function(t){o.resolve(t.data)}),o.promise}function u(t){var n,o;return o=r.defer(),n="/rest/pl/fe/site/favor/sitesByUser?site="+t.siteid+"&id="+t.id+"&type="+t.type+"&_="+1*new Date,e.get(n).success(function(t){0==t.err_code&&o.resolve(t.data)}),o.promise}function f(t,n){var o,i;return i=r.defer(),o="/rest/pl/fe/site/favor/add?id="+t.id+"&type="+t.type,e.post(o,n).success(function(t){i.resolve(t.data)}),i.promise}function c(t,n){var o,i;return i=r.defer(),o="/rest/pl/fe/site/favor/remove?id="+t.id+"&type="+t.type,e.post(o,n).success(function(t){i.resolve(t.data)}),i.promise}this.open=function(t){var r;r='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',r+='<div class="modal-body">',r+='<div class="checkbox">',r+="<label>",r+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",r+="<span>个人账户</span>",r+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",r+="</label>",r+="</div>",r+='<div class="checkbox" ng-repeat="site in mySites">',r+="<label>",r+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",r+="<span>{{site.name}}</span>",r+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",r+="</label>",r+="</div>",r+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',r+="</div>",r+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:r,controller:["$scope","$tmsModalInstance",function(r,n){i(t).then(function(t){r.person={_favored:t?"Y":"N"},r.person._selected=r.person._favored}),u(t).then(function(t){var e=t;e.forEach(function(t){t._selected=t._favored}),r.mySites=e}),r.createSite=function(){e.get("/rest/pl/fe/site/create").success(function(t){var e=t.data;e._favored=e._selected="N",r.mySites=[e]})},r.ok=function(){var t;t={person:r.person,mySites:r.mySites},n.close(t)},r.cancel=function(){n.dismiss()}}]}).result.then(function(e){var r,n;if(r=e.person,r&&r._selected!==r._favored&&("Y"===r._selected?s(t):a(t)),n=e.mySites){var o=[],i=[];n.forEach(function(t){t._selected!==t._favored&&("Y"===t._selected?o.push(t.id):i.push(t.id))}),o.length&&f(t,o),i.length&&c(t,i)}})},this.showSwitch=function(e,r){var o,i=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-favor"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),t.$apply(function(){e.loginExpire?i.open(r):n.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(t){e.loginExpire=t.loginExpire,i.open(r)})})},!0),document.body.appendChild(o)}}])},15:function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(t){return{restrict:"EA",replace:!0,link:function(e,r,n){e.$watch(n.dynamicHtml,function(n){n&&n.length&&(r.html(n),t(r.contents())(e))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(t){var e,r;e=document.createElement("style"),e.innerHTML=t,r=document.querySelector("head"),r.appendChild(e)},this.loadExtCss=function(t){var e,r;e=document.createElement("link"),e.href=t,e.rel="stylesheet",r=document.querySelector("head"),r.appendChild(e)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(t){var e,r,n=$q.defer();return r=function(){var o;o=document.createElement("script"),o.src=t[e],o.onload=function(){e++,e<t.length?r():n.resolve()},document.body.appendChild(o)},t&&(angular.isString(t)&&(t=[t]),t.length&&(e=0,r())),n.promise},this.loadExtJs=function(t,e){var r,n=this,o=$q.defer(),i=e.ext_js.length;return r=function(r){var s;s=document.createElement("script"),s.src=r.url,s.onload=function(){0===--i&&(e.js&&e.js.length&&n.loadJs(t,e.js),o.resolve())},document.body.appendChild(s)},e.ext_js&&e.ext_js.length&&e.ext_js.forEach(r),o.promise},this.loadCode=function(t,e){var r=this,n=$q.defer();return e.ext_css&&e.ext_css.length&&e.ext_css.forEach(function(t){r.loadExtCss(t.url)}),e.css&&e.css.length&&this.loadCss(e.css),e.ext_js&&e.ext_js.length?r.loadExtJs(t,e).then(function(){n.resolve()}):(e.js&&e.js.length&&r.loadJs(t,e.js),n.resolve()),n.promise},this.openPlugin=function(t){var e,r,n,o,i=$q.defer();return document.documentElement.scrollTop=0,o=document.getElementsByTagName("body")[0],o.style.cssText="overflow-y:hidden",e=document.createDocumentFragment(),r=document.createElement("div"),r.setAttribute("id","frmPlugin"),n=document.createElement("iframe"),r.appendChild(n),r.onclick=function(){r.parentNode.removeChild(r),o.style.cssText="overflow-y:auto"},e.appendChild(r),document.body.appendChild(e),0===t.indexOf("http")?(window.onClosePlugin=function(t){r.parentNode.removeChild(r),o.style.cssText="overflow-y:auto",i.resolve(t)},n.setAttribute("src",t)):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=t),i.promise}}])},3:function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function o(t){return 3*t.length/4-n(t)}function i(t){var e,r,o,i,s,a,u=t.length;s=n(t),a=new l(3*u/4-s),o=s>0?u-4:u;var f=0;for(e=0,r=0;e<o;e+=4,r+=3)i=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===s?(i=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,a[f++]=255&i):1===s&&(i=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}function s(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function a(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(s(n));return o.join("")}function u(t){for(var e,r=t.length,n=r%3,o="",i=[],s=0,u=r-n;s<u;s+=16383)i.push(a(t,s,s+16383>u?u:s+16383));return 1===n?(e=t[r-1],o+=f[e>>2],o+=f[e<<4&63],o+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],o+=f[e>>10],o+=f[e>>4&63],o+=f[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=o,e.toByteArray=i,e.fromByteArray=u;for(var f=[],c=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=h.length;p<d;++p)f[p]=h[p],c[h.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},4:function(t,e,r){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=i.prototype):(null===t&&(t=new i(e)),t.length=e),t}function i(t,e,r){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?h(t,e,r,n):"string"==typeof e?c(t,e,r):p(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e,r,n){return a(e),e<=0?o(t,e):void 0!==r?"string"==typeof n?o(t,e).fill(r,n):o(t,e).fill(r):o(t,e)}function f(t,e){if(a(e),t=o(t,e<0?0:0|d(e)),!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!i.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(e,r);t=o(t,n);var s=t.write(e,r);return s!==n&&(t=t.slice(0,s)),t}function l(t,e){var r=e.length<0?0:0|d(e.length);t=o(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function h(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),i.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=i.prototype):t=l(t,e),t}function p(t,e){if(i.isBuffer(e)){var r=0|d(e.length);return t=o(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||X(e.length)?o(t,0):l(t,e);if("Buffer"===e.type&&Q(e.data))return l(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function v(t,e){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(n)return F(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return C(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return k(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,o);if("number"==typeof e)return e&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,r/=2}var f;if(o){var c=-1;for(f=r;f<a;f++)if(i(t,f)===i(e,-1===c?0:f-c)){if(-1===c&&(c=f),f-c+1===u)return c*s}else-1!==c&&(f-=f-c),c=-1}else for(r+u>a&&(r=a-u),f=r;f>=0;f--){for(var l=!0,h=0;h<u;h++)if(i(t,f+h)!==i(e,h)){l=!1;break}if(l)return f}return-1}function E(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function x(t,e,r,n){return V(F(e,t.length-r),t,r,n)}function A(t,e,r,n){return V(J(e),t,r,n)}function _(t,e,r,n){return A(t,e,r,n)}function R(t,e,r,n){return V(G(e),t,r,n)}function U(t,e,r,n){return V(H(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=r){var u,f,c,l;switch(a){case 1:i<128&&(s=i);break;case 2:u=t[o+1],128==(192&u)&&(l=(31&i)<<6|63&u)>127&&(s=l);break;case 3:u=t[o+1],f=t[o+2],128==(192&u)&&128==(192&f)&&(l=(15&i)<<12|(63&u)<<6|63&f)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:u=t[o+1],f=t[o+2],c=t[o+3],128==(192&u)&&128==(192&f)&&128==(192&c)&&(l=(15&i)<<18|(63&u)<<12|(63&f)<<6|63&c)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=a}return P(n)}function P(t){var e=t.length;if(e<=W)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=W));return r}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function k(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function C(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=z(t[i]);return o}function M(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function Y(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,r,n,o,s){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function L(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function O(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function j(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,o){return o||j(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,o){return o||j(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,e,r,n,52,8),r+8}function $(t){if(t=q(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function z(t){return t<16?"0"+t.toString(16):t.toString(16)}function F(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function J(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function H(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function G(t){return Z.toByteArray($(t))}function V(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function X(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var Z=r(3),K=r(5),Q=r(6);e.Buffer=i,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,e,r){return s(null,t,e,r)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,e,r){return u(null,t,e,r)},i.allocUnsafe=function(t){return f(null,t)},i.allocUnsafeSlow=function(t){return f(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,s=Math.min(r,n);o<s;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=i.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var s=t[r];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},i.byteLength=v,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):y.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,e,r,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var s=o-n,a=r-e,u=Math.min(s,a),f=this.slice(n,o),c=t.slice(e,r),l=0;l<u;++l)if(f[l]!==c[l]){s=f[l],a=c[l];break}return s<a?-1:a<s?1:0},i.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},i.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},i.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return x(this,t,e,r);case"ascii":return A(this,t,e,r);case"latin1":case"binary":return _(this,t,e,r);case"base64":return R(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var W=4096;i.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=i.prototype;else{var o=e-t;n=new i(o,void 0);for(var s=0;s<o;++s)n[s]=this[s+t]}return n},i.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},i.prototype.readUInt8=function(t,e){return e||Y(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||Y(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||Y(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return e||Y(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||Y(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){e||Y(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return e||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||Y(t,4,this.length),K.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||Y(t,4,this.length),K.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||Y(t,8,this.length),K.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||Y(t,8,this.length),K.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){I(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){I(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):O(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):O(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);I(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);I(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):O(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):O(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,s=n-r;if(this===t&&r<e&&e<n)for(o=s-1;o>=0;--o)t[o+e]=this[o+r];else if(s<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},i.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var s;if("number"==typeof t)for(s=e;s<r;++s)this[s]=t;else{var a=i.isBuffer(t)?t:F(new i(t,n).toString()),u=a.length;for(s=0;s<r-e;++s)this[s+e]=a[s%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(8))},49:function(t,e,r){"use strict";r(14),/MicroMessenger/.test(navigator.userAgent)&&(signPackage.jsApiList=["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"],wx.config(signPackage)),angular.module("app",["ui.bootstrap","page.ui.xxt","favor.ui.xxt"]).config(["$locationProvider",function(t){t.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","tmsFavor","tmsDynaPage",function(t,e,r,n,o){var i,s,a;i=e.search().site,s=e.search().id,a=e.search().inviteToken,t.elSiteCard=angular.element(document.querySelector("#site-card")),t.siteCardToggled=function(t){var e;t&&(e=document.querySelector("#site-card>.dropdown-menu"))&&(e.style.left="auto",e.style.right=0)},t.favor=function(t,e){t.loginExpire?n.open(e):o.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(r){t.loginExpire=r.loginExpire,n.open(e)})},t.invite=function(t,e){t.loginExpire?location.href="/rest/site/fe/invite?matter=link,"+e.id:o.openPlugin("http://"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(r){t.loginExpire=r.loginExpire,location.href="/rest/site/fe/invite?matter=link,"+e.id})},t.siteUser=function(t){var e="http://"+location.host;e+="/rest/site/fe/user",e+="?site="+i,location.href=e},r.get("/rest/site/home/get?site="+i).success(function(e){t.siteInfo=e.data,r.get("/rest/site/fe/matter/link/get?site="+i+"&id="+s).success(function(e){if(e.data){if(t.link=e.data.link,t.user=e.data.user,t.qrcode="/rest/site/fe/matter/link/qrcode?site="+i+"&url="+encodeURIComponent(location.href),-1!==Object.keys(t.link).indexOf("invite")){var n=t.link.fullUrl.length;"?"!==t.link.fullUrl.charAt(n-1)?t.link.fullUrl=t.link.fullUrl+"&inviteToken="+a:t.link.fullUrl=t.link.fullUrl+"inviteToken="+a}document.querySelector("#link>iframe").setAttribute("src",t.link.fullUrl),r.post("/rest/site/fe/matter/logAccess?site="+i+"&id="+s+"&type=link&title="+t.link.title,{search:location.search.replace("?",""),referer:document.referrer})}}).error(function(t,e){})})}])},5:function(t,e){e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,f=u>>1,c=-7,l=r?o-1:0,h=r?-1:1,p=t[e+l];for(l+=h,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[e+l],l+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+l],l+=h,c-=8);if(0===i)i=1-f;else{if(i===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=f}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,u,f=8*i-o-1,c=(1<<f)-1,l=c>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+l>=1?h/u:h*Math.pow(2,1-l),e*u>=2&&(s++,u/=2),s+l>=c?(a=0,s=c):s+l>=1?(a=(e*u-1)*Math.pow(2,o),s+=l):(a=e*Math.pow(2,l-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,f+=o;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g}},6:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},7:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},8:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},9:function(t,e,r){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(t,e,r,n){this.open=function(o){var i,s=r.defer(),a=r.defer(),u={result:s.promise,closed:a.promise,close:function(t){document.body.removeChild(h[0]),s.resolve(t)},dismiss:function(t){document.body.removeChild(h[0]),a.resolve(t)}};i=t.$new(!0),o.controller&&n(o.controller,{$scope:i,$tmsModalInstance:u});var f,c,l,h;return f=angular.element("<div></div>"),f.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(o.template),c=angular.element("<div></div>"),c.attr({class:"modal-dialog"}).append(f),l=angular.element("<div></div>"),l.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),h=angular.element("<div></div>"),h.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(c).append(l),e(h)(i),document.body.appendChild(h[0]),u}}])},96:function(t,e,r){t.exports=r(49)}});