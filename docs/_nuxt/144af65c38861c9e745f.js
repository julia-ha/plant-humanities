(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{396:function(e,_,t){var r=t(43);e.exports=function(e,_){if(!r(e)||e._t!==_)throw TypeError("Incompatible receiver, "+_+" required!");return e}},397:function(e,_,t){"use strict";var strong=t(398),r=t(396);e.exports=t(399)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(r(this,"Set"),e=0===e?0:e,e)}},strong)},398:function(e,_,t){"use strict";var r=t(44).f,n=t(144),o=t(235),c=t(65),l=t(233),d=t(234),f=t(170),h=t(236),E=t(171),m=t(33),v=t(168).fastKey,M=t(396),O=m?"_s":"size",P=function(e,_){var t,r=v(_);if("F"!==r)return e._i[r];for(t=e._f;t;t=t.n)if(t.k==_)return t};e.exports={getConstructor:function(e,_,t,f){var h=e((function(e,r){l(e,h,_,"_i"),e._t=_,e._i=n(null),e._f=void 0,e._l=void 0,e[O]=0,null!=r&&d(r,t,e[f],e)}));return o(h.prototype,{clear:function(){for(var e=M(this,_),data=e._i,t=e._f;t;t=t.n)t.r=!0,t.p&&(t.p=t.p.n=void 0),delete data[t.i];e._f=e._l=void 0,e[O]=0},delete:function(e){var t=M(this,_),r=P(t,e);if(r){var n=r.n,o=r.p;delete t._i[r.i],r.r=!0,o&&(o.n=n),n&&(n.p=o),t._f==r&&(t._f=n),t._l==r&&(t._l=o),t[O]--}return!!r},forEach:function(e){M(this,_);for(var t,r=c(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(r(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!P(M(this,_),e)}}),m&&r(h.prototype,"size",{get:function(){return M(this,_)[O]}}),h},def:function(e,_,t){var r,n,o=P(e,_);return o?o.v=t:(e._l=o={i:n=v(_,!0),k:_,v:t,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[O]++,"F"!==n&&(e._i[n]=o)),e},getEntry:P,setStrong:function(e,_,t){f(e,_,(function(e,t){this._t=M(e,_),this._k=t,this._l=void 0}),(function(){for(var e=this._k,_=this._l;_&&_.r;)_=_.p;return this._t&&(this._l=_=_?_.n:this._t._f)?h(0,"keys"==e?_.k:"values"==e?_.v:[_.k,_.v]):(this._t=void 0,h(1))}),t?"entries":"values",!t,!0),E(_)}}},399:function(e,_,t){"use strict";var r=t(25),n=t(24),o=t(46),c=t(235),meta=t(168),l=t(234),d=t(233),f=t(43),h=t(39),E=t(172),m=t(110),v=t(173);e.exports=function(e,_,t,M,O,P){var D=r[e],w=D,y=O?"set":"add",T=w&&w.prototype,A={},L=function(e){var _=T[e];o(T,e,"delete"==e?function(a){return!(P&&!f(a))&&_.call(this,0===a?0:a)}:"has"==e?function(a){return!(P&&!f(a))&&_.call(this,0===a?0:a)}:"get"==e?function(a){return P&&!f(a)?void 0:_.call(this,0===a?0:a)}:"add"==e?function(a){return _.call(this,0===a?0:a),this}:function(a,b){return _.call(this,0===a?0:a,b),this})};if("function"==typeof w&&(P||T.forEach&&!h((function(){(new w).entries().next()})))){var U=new w,C=U[y](P?{}:-0,1)!=U,I=h((function(){U.has(1)})),k=E((function(e){new w(e)})),B=!P&&h((function(){for(var e=new w,_=5;_--;)e[y](_,_);return!e.has(-0)}));k||((w=_((function(_,t){d(_,w,e);var r=v(new D,_,w);return null!=t&&l(t,O,r[y],r),r}))).prototype=T,T.constructor=w),(I||B)&&(L("delete"),L("has"),O&&L("get")),(B||C)&&L(y),P&&T.clear&&delete T.clear}else w=M.getConstructor(_,e,O,y),c(w.prototype,t),meta.NEED=!0;return m(w,e),A[e]=w,n(n.G+n.W+n.F*(w!=D),A),P||M.setStrong(w,e,O),w}},400:function(e,_,t){var r,a;a=this,void 0===(r=function(){return a.returnExportsGlobal=function(){"use strict";function a(){var a,b;this.q=[],this.add=function(a){this.q.push(a)},this.call=function(){for(a=0,b=this.q.length;b>a;a++)this.q[a].call()}}function e(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new a,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var r="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",g="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=r,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+r+'"><div style="'+g+'"></div></div><div class="resize-sensor-shrink" style="'+r+'"><div style="'+g+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==function(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}(e,"position")&&(e.style.position="relative");var n=e.resizeSensor.childNodes[0],i=n.childNodes[0],o=e.resizeSensor.childNodes[1],c=function(){i.style.width=1e5+"px",i.style.height=1e5+"px",n.scrollLeft=1e5,n.scrollTop=1e5,o.scrollLeft=1e5,o.scrollTop=1e5};c();var l=!1,d=function(){e.resizedAttached&&(l&&(e.resizedAttached.call(),l=!1),_(d))};_(d);var f,h,p,q,E=function(){((p=e.offsetWidth)!=f||(q=e.offsetHeight)!=h)&&(l=!0,f=p,h=q),c()},s=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,e):a.addEventListener(b,e)};s(n,"scroll",E),s(o,"scroll",E)}var _=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},t=function(a,b){var _=Object.prototype.toString.call(a),t=this._isCollectionTyped="[object Array]"===_||"[object NodeList]"===_||"[object HTMLCollection]"===_||"undefined"!=typeof jQuery&&a instanceof window.jQuery||"undefined"!=typeof Elements&&a instanceof window.Elements;if(this._element=a,t)for(var g=0,r=a.length;r>g;g++)e(a[g],b);else e(a,b)};return t.prototype.detach=function(){var b=this._isCollectionTyped,e=this._element;if(b)for(var _=0,r=e.length;r>_;_++)t.detach(e[_]);else t.detach(e)},t.detach=function(a){a.resizeSensor&&(a.removeChild(a.resizeSensor),delete a.resizeSensor,delete a.resizedAttached)},t}()}.apply(_,[]))||(e.exports=r)},401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(process){var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(111),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(237),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(50),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(238),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(112),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(109),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(397),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_10__),axios__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(73),axios__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__),resize_sensor__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(400),resize_sensor__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(resize_sensor__WEBPACK_IMPORTED_MODULE_12__);function parseUrl(e){var _=e.match(/^(https?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);return _&&{protocol:_[1],host:_[2],hostname:_[3],origin:"".concat(_[1],"://").concat(_[2]),port:_[4],pathname:_[5],search:_[6],hash:_[7]}}function parseQueryString(e){e=e||window.location.search;var _={};try{0===e.indexOf("?")&&(e=e.substr(1));for(var t=e.split("&"),i=0;i<t.length;i++){var r=t[i].split("=");if(""!==r[0]){var n=r[0];if(2===r.length){var o=r[1];o=(o=decodeURIComponent(o)).replace(/\+/g," "),_[n]=o}else _[n]="true"}}}catch(e){console.log(e)}return _}__webpack_exports__.default={name:"main-mixin",data:function(){return{essay:void 0}},computed:{html:function(){return this.$store.getters.html},baseUrl:function(){return this.$store.getters.baseUrl},navMenuItems:function(){return this.$store.getters.navigation},navPaths:function(){var e=new Set;return this.navMenuItems.forEach((function(_){return e.add(_.path)})),e},settingsLoaded:function(){return this.$store.getters.settingsLoaded}},methods:{getStaticPage:function(e){var _=this,source="/"===e.path?"/index.md":"".concat(e.path,".md"),t="".concat(this.baseUrl,"/").concat(source);return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(t).then((function(e){return _.$marked(e.data)})).then((function(html){_.$store.dispatch("setHtml",html),_.$nextTick((function(){_.addStaticPageMetadata(),_.updateLinks(),e.hash.length>1&&_.scrollToElem(e.hash.slice(1))}))}))},scrollToElem:function(e){var _=document.getElementById(e);if(_){document.querySelector("header");var t=_.offsetTop-56;document.getElementById("scrollableContent").scrollTo(0,t)}},addStaticPageMetadata:function(){var e=Array.from(this.$refs[this.$options.name].querySelectorAll("var")).find((function(e){return void 0!==e.dataset.page}));this.$store.dispatch("setTitle",e?e.title:this.$store.getters.siteTitle),this.$store.dispatch("setBanner",e?e.dataset.banner:this.$store.getters.siteBanner)},updateLinks:function(){var e=this;this.$refs[this.$options.name]&&(this.$refs[this.$options.name].querySelectorAll("a").forEach((function(link){if(link.href){var _=parseUrl(link.href);0===e.baseUrl.indexOf(_.origin)&&(link.removeAttribute("href"),link.addEventListener("click",(function(t){e.$router.push({path:_.pathname,query:parseQueryString(_.search),hash:_.hash})})))}})),this.$refs[this.$options.name].querySelectorAll("img").forEach((function(img){var _=parseUrl(img.src);0===_.pathname.indexOf("/images/")&&e.baseUrl.indexOf(0===_.origin)&&(img.src="".concat(e.baseUrl).concat(_.pathname))})))},getEssay:function(e){var _=this,t="".concat(this.baseUrl,"/content/").concat(e.params.pathMatch,".md");window.data=void 0;var r="".concat("https://us-central1-visual-essay.cloudfunctions.net","/essay?src=").concat(encodeURIComponent(t),"&nocss");process.env.context&&(r+="&context=".concat(process.env.context)),axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(r).then((function(e){return _.essay=e.data})).then((function(e){return _.onLoaded()}))},onLoaded:function onLoaded(){var _this5=this,essayElem=document.getElementById("visual-essay");if(essayElem){var _this=this;if(new resize_sensor__WEBPACK_IMPORTED_MODULE_12___default.a(essayElem,(function(){var e=document.getElementById("essay-spacer");_this.$store.dispatch("setSpacerHeight",e?e.clientHeight:0)})),window.scrollTo(0,0),!window.data){var jsonld=essayElem.querySelectorAll('script[type="application/ld+json"]');jsonld.length>0&&jsonld.forEach((function(scr){eval(scr)}))}this.addEssayMetadata(),this.updateLinks()}else setTimeout((function(){_this5.onLoaded()}),1e3)},addEssayMetadata:function(){var e=this;window.data?window.data.forEach((function(_){if("essay"===_.type&&(_.title&&e.$store.dispatch("setTitle",_.title),_.banner)){var t=0===_.banner.indexOf("/images/")?"".concat(e.baseUrl).concat(_.banner):_.banner;e.$store.dispatch("setBanner",t)}})):setTimeout((function(){e.addEssayMetadata()}),1e3)}}}}.call(this,__webpack_require__(145))},402:function(e,_,t){"use strict";t(146);var r=t(126);_.a=Object(r.a)("layout")},404:function(e,_,t){"use strict";t.r(_);var r={name:"static-page",mixins:[t(401).default],mounted:function(){this.getStaticPage(this.$route)}},n=t(84),o=t(174),c=t.n(o),l=t(388),d=t(402),component=Object(n.a)(r,(function(){var e=this.$createElement,_=this._self._c||e;return _("v-layout",[_("v-flex",[_("div",{ref:this.$options.name,domProps:{innerHTML:this._s(this.html)}})])],1)}),[],!1,null,null,null);_.default=component.exports;c()(component,{VFlex:l.a,VLayout:d.a})}}]);