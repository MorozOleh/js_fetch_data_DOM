parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api",t=function(t){return new Promise(function(e,o){fetch("".concat(n).concat(t)).then(function(n){return n.json()}).then(function(n){return e(n)}),setTimeout(function(){o(new Error("something went wrong"))},5e3)})},e=function(){return t("/phones.json")};function o(n){var e=n.map(function(n){return n.id}).map(function(n){return t("/phones/".concat(n,".json"))});return Promise.all(e)}function r(n){var t=document.querySelector("body"),e=document.createElement("ul");return n.map(function(n){return n.name}).forEach(function(n){var t=document.createElement("li");t.innerText=n,e.append(t)}),t.append(e),n}e("/phones.json").then(r).then(o).catch(function(n){return alert(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.971dd8b5.js.map