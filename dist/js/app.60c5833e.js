(function(n){function e(e){for(var o,c,u=e[0],l=e[1],a=e[2],p=0,f=[];p<u.length;p++)c=u[p],r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,a||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,u=1;u<t.length;u++){var l=t[u];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(t,o,function(e){return n[e]}.bind(null,o));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var s=l;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"40f7":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Lines")],1)},i=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"lines"},[n._v("\n  Hello from lines\n  "),t("div",{staticClass:"examples"},n._l(n.examples,function(e){return t("div",{key:e.config,staticClass:"prompt"},[n._v("\n      Preview:\n      "),t("code",[n._v(n._s(e.preview))]),t("button",{staticClass:"copy-to-clipboard",on:{click:function(t){return n.copy(e)}}},[n._v("Copy to clipboard")])])}),0)])},u=[],l=t("958d"),a=t.n(l),s={name:"lines",data:function(){return{examples:[]}},methods:{copy:function(n){console.log("going to attempt and copy this yo"),window.navigator.clipboard.writeText(n.config).then(function(){console.log("Copied!")})}},mounted:function(){console.log("Mounted lines component"),this.examples.push(a.a)}},p=s,f=(t("9019"),t("2877")),d=Object(f["a"])(p,c,u,!1,null,null,null),v=d.exports,b={name:"app",components:{Lines:v}},h=b,m=(t("7c55"),Object(f["a"])(h,r,i,!1,null,null,null)),y=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(y)}}).$mount("#app")},"5c48":function(n,e,t){},"7c55":function(n,e,t){"use strict";var o=t("5c48"),r=t.n(o);r.a},9019:function(n,e,t){"use strict";var o=t("40f7"),r=t.n(o);r.a},"958d":function(n,e){var t={preview:">",config:">"};n.exports=t}});
//# sourceMappingURL=app.60c5833e.js.map