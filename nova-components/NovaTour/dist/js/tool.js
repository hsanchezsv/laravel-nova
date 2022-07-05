/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ "./node_modules/intro.js/intro.module.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


__webpack_require__(/*! ../../css/introjs.css */ "./resources/css/introjs.css");


var introJS = intro_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      initialLoading: false,
      loading: false
    };
  },
  mounted: function mounted() {
    (0,intro_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".steps").setOptions({
      showProgress: true,
      steps: [{
        element: document.querySelector("div[dusk='global-search-component']"),
        title: 'Welcome',
        intro: 'Hello World! 👋'
      }, {
        element: document.querySelector('button[aria-label="Toggle Sidebar"]'),
        intro: 'This step focuses on an image'
      }, {
        title: 'Farewell!',
        element: document.querySelector('#step3'),
        intro: 'And this is our final step!'
      }]
    }).start();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": ""
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"steps\"><div id=\"step1\" data-title=\"1\" data-intro=\"Paso 1\"><img alt=\"Image alt text\" title=\"Logo Title Text 1\"></div><div id=\"step2\" data-title=\"2\" data-intro=\"Paso 2\"><img alt=\"Image alt text\" title=\"Logo Title Text 1\"></div><div id=\"step3\" data-title=\"3\" data-intro=\"Paso 3\"><h4>Quaco Lighthouse</h4><small> The Quaco Head Lighthouse is a well maintained lighthouse close to St. Martins. It is a short, beautiful walk to the lighthouse along the seashore. </small></div></div>", 1);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Tool */ "./resources/js/pages/Tool.vue");

Nova.booting(function (app, store) {
  Nova.inertia('NovaTour', _pages_Tool__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/css/introjs.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/css/introjs.css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".introjs-overlay{position:absolute;box-sizing:content-box;z-index:999999;opacity:0;transition:all .3s ease-out}.introjs-showElement{z-index:9999999!important}tr.introjs-showElement>td{z-index:9999999!important;position:relative}tr.introjs-showElement>th{z-index:9999999!important;position:relative}.introjs-disableInteraction{z-index:99999999!important;position:absolute;background-color:#fff;opacity:0}.introjs-relativePosition{position:relative}.introjs-helperLayer{box-sizing:content-box;position:absolute;z-index:9999998;border-radius:4px;transition:all .3s ease-out}.introjs-helperLayer *{box-sizing:content-box}.introjs-helperLayer :before{box-sizing:content-box}.introjs-helperLayer :after{box-sizing:content-box}.introjs-tooltipReferenceLayer{font-family:\"Helvetica Neue\",Inter,ui-sans-serif,\"Apple Color Emoji\",Helvetica,Arial,sans-serif;box-sizing:content-box;position:absolute;visibility:hidden;z-index:100000000;background-color:transparent;transition:all .3s ease-out}.introjs-tooltipReferenceLayer *{font-family:\"Helvetica Neue\",Inter,ui-sans-serif,\"Apple Color Emoji\",Helvetica,Arial,sans-serif}.introjs-helperNumberLayer{font-family:\"Helvetica Neue\",Inter,ui-sans-serif,\"Apple Color Emoji\",Helvetica,Arial,sans-serif;color:#9e9e9e;text-align:center;padding-top:10px;padding-bottom:10px}.introjs-arrow{border:5px solid transparent;content:\"\";position:absolute}.introjs-arrow.top{top:-10px;left:10px;border-bottom-color:#fff}.introjs-arrow.top-right{top:-10px;right:10px;border-bottom-color:#fff}.introjs-arrow.top-middle{top:-10px;left:50%;margin-left:-5px;border-bottom-color:#fff}.introjs-arrow.right{right:-10px;top:10px;border-left-color:#fff}.introjs-arrow.right-bottom{bottom:10px;right:-10px;border-left-color:#fff}.introjs-arrow.bottom{bottom:-10px;left:10px;border-top-color:#fff}.introjs-arrow.bottom-right{bottom:-10px;right:10px;border-top-color:#fff}.introjs-arrow.bottom-middle{bottom:-10px;left:50%;margin-left:-5px;border-top-color:#fff}.introjs-arrow.left{left:-10px;top:10px;border-right-color:#fff}.introjs-arrow.left-bottom{left:-10px;bottom:10px;border-right-color:#fff}.introjs-tooltip{box-sizing:content-box;position:absolute;visibility:visible;background-color:#fff;min-width:250px;max-width:300px;border-radius:5px;box-shadow:0 3px 30px rgba(33,33,33,.3);transition:opacity .1s ease-out}.introjs-tooltiptext{padding:20px}.introjs-dontShowAgain{padding-left:20px;padding-right:20px}.introjs-dontShowAgain input{padding:0;margin:0;margin-bottom:2px;display:inline;width:10px;height:10px}.introjs-dontShowAgain label{font-size:14px;display:inline-block;font-weight:400;display:inline-block;margin:0 0 0 5px;padding:0;background-color:#fff;color:#616161;-webkit-user-select:none;-moz-user-select:none;user-select:none}.introjs-tooltip-title{font-size:18px;margin:0;padding:0;font-weight:700;float:left;line-height:32px}.introjs-tooltip-header{padding-left:20px;padding-right:20px;padding-top:10px}.introjs-tooltip-header:after{content:\".\";visibility:hidden;display:block;height:0;clear:both}.introjs-tooltipbuttons{border-top:1px solid #e0e0e0;padding:10px;text-align:right;white-space:nowrap}.introjs-tooltipbuttons:after{content:\"\";visibility:hidden;display:block;height:0;clear:both}.introjs-button{box-sizing:content-box;position:relative;overflow:visible;display:inline-block;padding:.5rem 1rem;border:1px solid #bdbdbd;text-decoration:none;text-shadow:1px 1px 0 #fff;font-size:14px;color:#424242;white-space:nowrap;cursor:pointer;outline:0;background-color:#f4f4f4;border-radius:.2em;zoom:1;display:inline}.introjs-button:hover{outline:0;text-decoration:none;border-color:#9e9e9e;background-color:#e0e0e0;color:#212121}.introjs-button:focus{outline:0;text-decoration:none;background-color:#eee;box-shadow:0 0 0 .2rem rgba(158,158,158,.5);border:1px solid #616161;color:#212121}.introjs-button:active{outline:0;text-decoration:none;background-color:#e0e0e0;border-color:#9e9e9e;color:#212121}.introjs-button::-moz-focus-inner{padding:0;border:0}.introjs-skipbutton{box-sizing:content-box;color:#616161;float:right;font-size:20px;cursor:pointer;font-weight:700;line-height:1;text-align:center;padding:7px 10px}.introjs-skipbutton:focus,.introjs-skipbutton:hover{color:#212121;outline:0;text-decoration:none}.introjs-prevbutton{float:left}.introjs-nextbutton{float:right}.introjs-disabled{color:#9e9e9e;border-color:#bdbdbd;box-shadow:none;cursor:default;background-color:#f4f4f4;background-image:none;text-decoration:none}.introjs-disabled:focus,.introjs-disabled:hover{color:#9e9e9e;border-color:#bdbdbd;box-shadow:none;cursor:default;background-color:#f4f4f4;background-image:none;text-decoration:none}.introjs-hidden{display:none}.introjs-bullets{text-align:center;padding-top:10px;padding-bottom:10px}.introjs-bullets ul{box-sizing:content-box;clear:both;margin:0 auto 0;padding:0;display:inline-block}.introjs-bullets ul li{box-sizing:content-box;list-style:none;float:left;margin:0 2px}.introjs-bullets ul li a{transition:width .1s ease-in;box-sizing:content-box;display:block;width:6px;height:6px;background:#ccc;border-radius:10px;text-decoration:none;cursor:pointer}.introjs-bullets ul li a:focus,.introjs-bullets ul li a:hover{width:15px;background:#999;text-decoration:none;outline:0}.introjs-bullets ul li a.active{width:15px;background:#999}.introjs-progress{box-sizing:content-box;overflow:hidden;height:10px;margin:10px;border-radius:4px;background-color:#e0e0e0}.introjs-progressbar{box-sizing:content-box;float:left;width:0%;height:100%;font-size:10px;line-height:10px;text-align:center;background-color:#08c}.introjsFloatingElement{position:absolute;height:0;width:0;left:50%;top:50%}.introjs-fixedTooltip{position:fixed}.introjs-hint{box-sizing:content-box;position:absolute;background:0 0;width:20px;height:15px;cursor:pointer}.introjs-hint:focus{border:0;outline:0}.introjs-hint:hover>.introjs-hint-pulse{background-color:rgba(60,60,60,.57)}.introjs-hidehint{display:none}.introjs-fixedhint{position:fixed}@-webkit-keyframes introjspulse{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,0,0,.7)}70%{transform:scale(1);box-shadow:0 0 0 10px transparent}100%{transform:scale(.95);box-shadow:0 0 0 0 transparent}}@keyframes introjspulse{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,0,0,.7)}70%{transform:scale(1);box-shadow:0 0 0 10px transparent}100%{transform:scale(.95);box-shadow:0 0 0 0 transparent}}.introjs-hint-pulse{box-sizing:content-box;width:15px;height:15px;border-radius:30px;background-color:rgba(136,136,136,.24);z-index:10;position:absolute;transition:all .2s ease-out;-webkit-animation:introjspulse 2s infinite;animation:introjspulse 2s infinite}.introjs-hint-no-anim .introjs-hint-pulse{-webkit-animation:none;animation:none}.introjs-hint-dot{box-sizing:content-box;background:0 0;border-radius:60px;height:50px;width:50px;position:absolute;top:-18px;left:-18px;z-index:1;opacity:0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/intro.js/intro.module.js":
/*!***********************************************!*\
  !*** ./node_modules/intro.js/intro.module.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ca)
/* harmony export */ });
/*!
 * Intro.js v5.1.0
 * https://introjs.com
 *
 * Copyright (C) 2012-2022 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Mon, 04 Apr 2022 21:20:28 GMT
 */
function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,o,r=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var o=function(){var t={};return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"introjs-stamp";return t[n]=t[n]||0,void 0===e[n]&&(e[n]=t[n]++),e[n]}}();function r(t,e,n){if(t)for(var i=0,o=t.length;i<o;i++)e(t[i],i);"function"==typeof n&&n()}var a=new function(){var t="introjs_event";this._id=function(t,e,n,i){return e+o(n)+(i?"_".concat(o(i)):"")},this.on=function(e,n,i,o,r){var a=this._id.apply(this,arguments),s=function(t){return i.call(o||e,t||window.event)};"addEventListener"in e?e.addEventListener(n,s,r):"attachEvent"in e&&e.attachEvent("on".concat(n),s),e[t]=e[t]||{},e[t][a]=s},this.off=function(e,n,i,o,r){var a=this._id.apply(this,arguments),s=e[t]&&e[t][a];s&&("removeEventListener"in e?e.removeEventListener(n,s,r):"detachEvent"in e&&e.detachEvent("on".concat(n),s),e[t][a]=null)}},s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function l(t,e){return t(e={exports:{}},e.exports),e.exports}var c,u,h=function(t){return t&&t.Math==Math&&t},f=h("object"==typeof globalThis&&globalThis)||h("object"==typeof window&&window)||h("object"==typeof self&&self)||h("object"==typeof s&&s)||function(){return this}()||Function("return this")(),p=function(t){try{return!!t()}catch(t){return!0}},d=!p((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),g=!p((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),v=Function.prototype.call,m=g?v.bind(v):function(){return v.apply(v,arguments)},b={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,w={f:y&&!b.call({1:2},1)?function(t){var e=y(this,t);return!!e&&e.enumerable}:b},_=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},S=Function.prototype,x=S.bind,j=S.call,C=g&&x.bind(j,j),A=g?function(t){return t&&C(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},k=A({}.toString),E=A("".slice),T=function(t){return E(k(t),8,-1)},I=f.Object,N=A("".split),L=p((function(){return!I("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?N(t,""):I(t)}:I,O=f.TypeError,P=function(t){if(null==t)throw O("Can't call method on "+t);return t},R=function(t){return L(P(t))},M=function(t){return"function"==typeof t},q=function(t){return"object"==typeof t?null!==t:M(t)},B=function(t){return M(t)?t:void 0},H=function(t,e){return arguments.length<2?B(f[t]):f[t]&&f[t][e]},D=A({}.isPrototypeOf),F=H("navigator","userAgent")||"",$=f.process,G=f.Deno,V=$&&$.versions||G&&G.version,z=V&&V.v8;z&&(u=(c=z.split("."))[0]>0&&c[0]<4?1:+(c[0]+c[1])),!u&&F&&(!(c=F.match(/Edge\/(\d+)/))||c[1]>=74)&&(c=F.match(/Chrome\/(\d+)/))&&(u=+c[1]);var U=u,W=!!Object.getOwnPropertySymbols&&!p((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&U&&U<41})),K=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Y=f.Object,X=K?function(t){return"symbol"==typeof t}:function(t){var e=H("Symbol");return M(e)&&D(e.prototype,Y(t))},Q=f.String,J=function(t){try{return Q(t)}catch(t){return"Object"}},Z=f.TypeError,tt=function(t){if(M(t))return t;throw Z(J(t)+" is not a function")},et=function(t,e){var n=t[e];return null==n?void 0:tt(n)},nt=f.TypeError,it=Object.defineProperty,ot=function(t,e){try{it(f,t,{value:e,configurable:!0,writable:!0})}catch(n){f[t]=e}return e},rt=f["__core-js_shared__"]||ot("__core-js_shared__",{}),at=l((function(t){(t.exports=function(t,e){return rt[t]||(rt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),st=f.Object,lt=function(t){return st(P(t))},ct=A({}.hasOwnProperty),ut=Object.hasOwn||function(t,e){return ct(lt(t),e)},ht=0,ft=Math.random(),pt=A(1..toString),dt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+pt(++ht+ft,36)},gt=at("wks"),vt=f.Symbol,mt=vt&&vt.for,bt=K?vt:vt&&vt.withoutSetter||dt,yt=function(t){if(!ut(gt,t)||!W&&"string"!=typeof gt[t]){var e="Symbol."+t;W&&ut(vt,t)?gt[t]=vt[t]:gt[t]=K&&mt?mt(e):bt(e)}return gt[t]},wt=f.TypeError,_t=yt("toPrimitive"),St=function(t,e){if(!q(t)||X(t))return t;var n,i=et(t,_t);if(i){if(void 0===e&&(e="default"),n=m(i,t,e),!q(n)||X(n))return n;throw wt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,i;if("string"===e&&M(n=t.toString)&&!q(i=m(n,t)))return i;if(M(n=t.valueOf)&&!q(i=m(n,t)))return i;if("string"!==e&&M(n=t.toString)&&!q(i=m(n,t)))return i;throw nt("Can't convert object to primitive value")}(t,e)},xt=function(t){var e=St(t,"string");return X(e)?e:e+""},jt=f.document,Ct=q(jt)&&q(jt.createElement),At=function(t){return Ct?jt.createElement(t):{}},kt=!d&&!p((function(){return 7!=Object.defineProperty(At("div"),"a",{get:function(){return 7}}).a})),Et=Object.getOwnPropertyDescriptor,Tt={f:d?Et:function(t,e){if(t=R(t),e=xt(e),kt)try{return Et(t,e)}catch(t){}if(ut(t,e))return _(!m(w.f,t,e),t[e])}},It=d&&p((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Nt=f.String,Lt=f.TypeError,Ot=function(t){if(q(t))return t;throw Lt(Nt(t)+" is not an object")},Pt=f.TypeError,Rt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,qt={f:d?It?function(t,e,n){if(Ot(t),e=xt(e),Ot(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var i=Mt(t,e);i&&i.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:i.configurable,enumerable:"enumerable"in n?n.enumerable:i.enumerable,writable:!1})}return Rt(t,e,n)}:Rt:function(t,e,n){if(Ot(t),e=xt(e),Ot(n),kt)try{return Rt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Pt("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},Bt=d?function(t,e,n){return qt.f(t,e,_(1,n))}:function(t,e,n){return t[e]=n,t},Ht=A(Function.toString);M(rt.inspectSource)||(rt.inspectSource=function(t){return Ht(t)});var Dt,Ft,$t,Gt=rt.inspectSource,Vt=f.WeakMap,zt=M(Vt)&&/native code/.test(Gt(Vt)),Ut=at("keys"),Wt=function(t){return Ut[t]||(Ut[t]=dt(t))},Kt={},Yt=f.TypeError,Xt=f.WeakMap;if(zt||rt.state){var Qt=rt.state||(rt.state=new Xt),Jt=A(Qt.get),Zt=A(Qt.has),te=A(Qt.set);Dt=function(t,e){if(Zt(Qt,t))throw new Yt("Object already initialized");return e.facade=t,te(Qt,t,e),e},Ft=function(t){return Jt(Qt,t)||{}},$t=function(t){return Zt(Qt,t)}}else{var ee=Wt("state");Kt[ee]=!0,Dt=function(t,e){if(ut(t,ee))throw new Yt("Object already initialized");return e.facade=t,Bt(t,ee,e),e},Ft=function(t){return ut(t,ee)?t[ee]:{}},$t=function(t){return ut(t,ee)}}var ne={set:Dt,get:Ft,has:$t,enforce:function(t){return $t(t)?Ft(t):Dt(t,{})},getterFor:function(t){return function(e){var n;if(!q(e)||(n=Ft(e)).type!==t)throw Yt("Incompatible receiver, "+t+" required");return n}}},ie=Function.prototype,oe=d&&Object.getOwnPropertyDescriptor,re=ut(ie,"name"),ae={EXISTS:re,PROPER:re&&"something"===function(){}.name,CONFIGURABLE:re&&(!d||d&&oe(ie,"name").configurable)},se=l((function(t){var e=ae.CONFIGURABLE,n=ne.get,i=ne.enforce,o=String(String).split("String");(t.exports=function(t,n,r,a){var s,l=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,u=!!a&&!!a.noTargetGet,h=a&&void 0!==a.name?a.name:n;M(r)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ut(r,"name")||e&&r.name!==h)&&Bt(r,"name",h),(s=i(r)).source||(s.source=o.join("string"==typeof h?h:""))),t!==f?(l?!u&&t[n]&&(c=!0):delete t[n],c?t[n]=r:Bt(t,n,r)):c?t[n]=r:ot(n,r)})(Function.prototype,"toString",(function(){return M(this)&&n(this).source||Gt(this)}))})),le=Math.ceil,ce=Math.floor,ue=function(t){var e=+t;return e!=e||0===e?0:(e>0?ce:le)(e)},he=Math.max,fe=Math.min,pe=function(t,e){var n=ue(t);return n<0?he(n+e,0):fe(n,e)},de=Math.min,ge=function(t){return t>0?de(ue(t),9007199254740991):0},ve=function(t){return ge(t.length)},me=function(t){return function(e,n,i){var o,r=R(e),a=ve(r),s=pe(i,a);if(t&&n!=n){for(;a>s;)if((o=r[s++])!=o)return!0}else for(;a>s;s++)if((t||s in r)&&r[s]===n)return t||s||0;return!t&&-1}},be={includes:me(!0),indexOf:me(!1)},ye=be.indexOf,we=A([].push),_e=function(t,e){var n,i=R(t),o=0,r=[];for(n in i)!ut(Kt,n)&&ut(i,n)&&we(r,n);for(;e.length>o;)ut(i,n=e[o++])&&(~ye(r,n)||we(r,n));return r},Se=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xe=Se.concat("length","prototype"),je={f:Object.getOwnPropertyNames||function(t){return _e(t,xe)}},Ce={f:Object.getOwnPropertySymbols},Ae=A([].concat),ke=H("Reflect","ownKeys")||function(t){var e=je.f(Ot(t)),n=Ce.f;return n?Ae(e,n(t)):e},Ee=function(t,e,n){for(var i=ke(e),o=qt.f,r=Tt.f,a=0;a<i.length;a++){var s=i[a];ut(t,s)||n&&ut(n,s)||o(t,s,r(e,s))}},Te=/#|\.prototype\./,Ie=function(t,e){var n=Le[Ne(t)];return n==Pe||n!=Oe&&(M(e)?p(e):!!e)},Ne=Ie.normalize=function(t){return String(t).replace(Te,".").toLowerCase()},Le=Ie.data={},Oe=Ie.NATIVE="N",Pe=Ie.POLYFILL="P",Re=Ie,Me=Tt.f,qe=function(t,e){var n,i,o,r,a,s=t.target,l=t.global,c=t.stat;if(n=l?f:c?f[s]||ot(s,{}):(f[s]||{}).prototype)for(i in e){if(r=e[i],o=t.noTargetGet?(a=Me(n,i))&&a.value:n[i],!Re(l?i:s+(c?".":"#")+i,t.forced)&&void 0!==o){if(typeof r==typeof o)continue;Ee(r,o)}(t.sham||o&&o.sham)&&Bt(r,"sham",!0),se(n,i,r,t)}},Be={};Be[yt("toStringTag")]="z";var He,De="[object z]"===String(Be),Fe=yt("toStringTag"),$e=f.Object,Ge="Arguments"==T(function(){return arguments}()),Ve=De?T:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=$e(t),Fe))?n:Ge?T(e):"Object"==(i=T(e))&&M(e.callee)?"Arguments":i},ze=f.String,Ue=function(t){if("Symbol"===Ve(t))throw TypeError("Cannot convert a Symbol value to a string");return ze(t)},We=function(){var t=Ot(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ke=f.RegExp,Ye=p((function(){var t=Ke("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Xe=Ye||p((function(){return!Ke("a","y").sticky})),Qe={BROKEN_CARET:Ye||p((function(){var t=Ke("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Xe,UNSUPPORTED_Y:Ye},Je=Object.keys||function(t){return _e(t,Se)},Ze=d&&!It?Object.defineProperties:function(t,e){Ot(t);for(var n,i=R(e),o=Je(e),r=o.length,a=0;r>a;)qt.f(t,n=o[a++],i[n]);return t},tn={f:Ze},en=H("document","documentElement"),nn=Wt("IE_PROTO"),on=function(){},rn=function(t){return"<script>"+t+"<\/script>"},an=function(t){t.write(rn("")),t.close();var e=t.parentWindow.Object;return t=null,e},sn=function(){try{He=new ActiveXObject("htmlfile")}catch(t){}var t,e;sn="undefined"!=typeof document?document.domain&&He?an(He):((e=At("iframe")).style.display="none",en.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(rn("document.F=Object")),t.close(),t.F):an(He);for(var n=Se.length;n--;)delete sn.prototype[Se[n]];return sn()};Kt[nn]=!0;var ln,cn,un=Object.create||function(t,e){var n;return null!==t?(on.prototype=Ot(t),n=new on,on.prototype=null,n[nn]=t):n=sn(),void 0===e?n:tn.f(n,e)},hn=f.RegExp,fn=p((function(){var t=hn(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),pn=f.RegExp,dn=p((function(){var t=pn("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),gn=ne.get,vn=at("native-string-replace",String.prototype.replace),mn=RegExp.prototype.exec,bn=mn,yn=A("".charAt),wn=A("".indexOf),_n=A("".replace),Sn=A("".slice),xn=(cn=/b*/g,m(mn,ln=/a/,"a"),m(mn,cn,"a"),0!==ln.lastIndex||0!==cn.lastIndex),jn=Qe.BROKEN_CARET,Cn=void 0!==/()??/.exec("")[1];(xn||Cn||jn||fn||dn)&&(bn=function(t){var e,n,i,o,r,a,s,l=this,c=gn(l),u=Ue(t),h=c.raw;if(h)return h.lastIndex=l.lastIndex,e=m(bn,h,u),l.lastIndex=h.lastIndex,e;var f=c.groups,p=jn&&l.sticky,d=m(We,l),g=l.source,v=0,b=u;if(p&&(d=_n(d,"y",""),-1===wn(d,"g")&&(d+="g"),b=Sn(u,l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==yn(u,l.lastIndex-1))&&(g="(?: "+g+")",b=" "+b,v++),n=new RegExp("^(?:"+g+")",d)),Cn&&(n=new RegExp("^"+g+"$(?!\\s)",d)),xn&&(i=l.lastIndex),o=m(mn,p?n:l,b),p?o?(o.input=Sn(o.input,v),o[0]=Sn(o[0],v),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:xn&&o&&(l.lastIndex=l.global?o.index+o[0].length:i),Cn&&o&&o.length>1&&m(vn,o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o&&f)for(o.groups=a=un(null),r=0;r<f.length;r++)a[(s=f[r])[0]]=o[s[1]];return o});var An=bn;qe({target:"RegExp",proto:!0,forced:/./.exec!==An},{exec:An});var kn=yt("species"),En=RegExp.prototype,Tn=function(t,e,n,i){var o=yt(t),r=!p((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=r&&!p((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[kn]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!r||!a||n){var s=A(/./[o]),l=e(o,""[t],(function(t,e,n,i,o){var a=A(t),l=e.exec;return l===An||l===En.exec?r&&!o?{done:!0,value:s(e,n,i)}:{done:!0,value:a(n,e,i)}:{done:!1}}));se(String.prototype,t,l[0]),se(En,o,l[1])}i&&Bt(En[o],"sham",!0)},In=A("".charAt),Nn=A("".charCodeAt),Ln=A("".slice),On=function(t){return function(e,n){var i,o,r=Ue(P(e)),a=ue(n),s=r.length;return a<0||a>=s?t?"":void 0:(i=Nn(r,a))<55296||i>56319||a+1===s||(o=Nn(r,a+1))<56320||o>57343?t?In(r,a):i:t?Ln(r,a,a+2):o-56320+(i-55296<<10)+65536}},Pn={codeAt:On(!1),charAt:On(!0)}.charAt,Rn=function(t,e,n){return e+(n?Pn(t,e).length:1)},Mn=f.TypeError,qn=function(t,e){var n=t.exec;if(M(n)){var i=m(n,t,e);return null!==i&&Ot(i),i}if("RegExp"===T(t))return m(An,t,e);throw Mn("RegExp#exec called on incompatible receiver")};Tn("match",(function(t,e,n){return[function(e){var n=P(this),i=null==e?void 0:et(e,t);return i?m(i,e,n):new RegExp(e)[t](Ue(n))},function(t){var i=Ot(this),o=Ue(t),r=n(e,i,o);if(r.done)return r.value;if(!i.global)return qn(i,o);var a=i.unicode;i.lastIndex=0;for(var s,l=[],c=0;null!==(s=qn(i,o));){var u=Ue(s[0]);l[c]=u,""===u&&(i.lastIndex=Rn(o,ge(i.lastIndex),a)),c++}return 0===c?null:l}]}));var Bn=Array.isArray||function(t){return"Array"==T(t)},Hn=function(t,e,n){var i=xt(e);i in t?qt.f(t,i,_(0,n)):t[i]=n},Dn=function(){},Fn=[],$n=H("Reflect","construct"),Gn=/^\s*(?:class|function)\b/,Vn=A(Gn.exec),zn=!Gn.exec(Dn),Un=function(t){if(!M(t))return!1;try{return $n(Dn,Fn,t),!0}catch(t){return!1}},Wn=function(t){if(!M(t))return!1;switch(Ve(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return zn||!!Vn(Gn,Gt(t))}catch(t){return!0}};Wn.sham=!0;var Kn=!$n||p((function(){var t;return Un(Un.call)||!Un(Object)||!Un((function(){t=!0}))||t}))?Wn:Un,Yn=yt("species"),Xn=f.Array,Qn=function(t,e){return new(function(t){var e;return Bn(t)&&(e=t.constructor,(Kn(e)&&(e===Xn||Bn(e.prototype))||q(e)&&null===(e=e[Yn]))&&(e=void 0)),void 0===e?Xn:e}(t))(0===e?0:e)},Jn=yt("species"),Zn=function(t){return U>=51||!p((function(){var e=[];return(e.constructor={})[Jn]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ti=yt("isConcatSpreadable"),ei=f.TypeError,ni=U>=51||!p((function(){var t=[];return t[ti]=!1,t.concat()[0]!==t})),ii=Zn("concat"),oi=function(t){if(!q(t))return!1;var e=t[ti];return void 0!==e?!!e:Bn(t)};qe({target:"Array",proto:!0,forced:!ni||!ii},{concat:function(t){var e,n,i,o,r,a=lt(this),s=Qn(a,0),l=0;for(e=-1,i=arguments.length;e<i;e++)if(oi(r=-1===e?a:arguments[e])){if(l+(o=ve(r))>9007199254740991)throw ei("Maximum allowed index exceeded");for(n=0;n<o;n++,l++)n in r&&Hn(s,l,r[n])}else{if(l>=9007199254740991)throw ei("Maximum allowed index exceeded");Hn(s,l++,r)}return s.length=l,s}});var ri=De?{}.toString:function(){return"[object "+Ve(this)+"]"};De||se(Object.prototype,"toString",ri,{unsafe:!0});var ai=ae.PROPER,si=RegExp.prototype,li=si.toString,ci=A(We),ui=p((function(){return"/a/b"!=li.call({source:"a",flags:"b"})})),hi=ai&&"toString"!=li.name;(ui||hi)&&se(RegExp.prototype,"toString",(function(){var t=Ot(this),e=Ue(t.source),n=t.flags;return"/"+e+"/"+Ue(void 0===n&&D(si,t)&&!("flags"in si)?ci(t):n)}),{unsafe:!0});var fi=Function.prototype,pi=fi.apply,di=fi.call,gi="object"==typeof Reflect&&Reflect.apply||(g?di.bind(pi):function(){return di.apply(pi,arguments)}),vi=yt("match"),mi=function(t){var e;return q(t)&&(void 0!==(e=t[vi])?!!e:"RegExp"==T(t))},bi=f.TypeError,yi=yt("species"),wi=function(t,e){var n,i=Ot(t).constructor;return void 0===i||null==(n=Ot(i)[yi])?e:function(t){if(Kn(t))return t;throw bi(J(t)+" is not a constructor")}(n)},_i=f.Array,Si=Math.max,xi=function(t,e,n){for(var i=ve(t),o=pe(e,i),r=pe(void 0===n?i:n,i),a=_i(Si(r-o,0)),s=0;o<r;o++,s++)Hn(a,s,t[o]);return a.length=s,a},ji=Qe.UNSUPPORTED_Y,Ci=Math.min,Ai=[].push,ki=A(/./.exec),Ei=A(Ai),Ti=A("".slice);function Ii(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";n.match(e)||t.setAttribute("class","".concat(n," ").concat(e))}else{if(void 0!==t.classList)r(e.split(" "),(function(e){t.classList.add(e)}));else t.className.match(e)||(t.className+=" ".concat(e))}}function Ni(t,e){var n="";return t.currentStyle?n=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),n&&n.toLowerCase?n.toLowerCase():n}function Li(t){var e=t.element;if(this._options.scrollToElement){var n=function(t){var e=window.getComputedStyle(t),n="absolute"===e.position,i=/(auto|scroll)/;if("fixed"===e.position)return document.body;for(var o=t;o=o.parentElement;)if(e=window.getComputedStyle(o),(!n||"static"!==e.position)&&i.test(e.overflow+e.overflowY+e.overflowX))return o;return document.body}(e);n!==document.body&&(n.scrollTop=e.offsetTop-n.offsetTop)}}function Oi(){if(void 0!==window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function Pi(t,e,n){var i,o=e.element;if("off"!==t&&(this._options.scrollToElement&&(i="tooltip"===t?n.getBoundingClientRect():o.getBoundingClientRect(),!function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}(o)))){var r=Oi().height;i.bottom-(i.bottom-i.top)<0||o.clientHeight>r?window.scrollBy(0,i.top-(r/2-i.height/2)-this._options.scrollPadding):window.scrollBy(0,i.top-(r/2-i.height/2)+this._options.scrollPadding)}}function Ri(t){t.setAttribute("role","button"),t.tabIndex=0}Tn("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=Ue(P(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!mi(t))return m(e,i,t,o);for(var r,a,s,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,h=new RegExp(t.source,c+"g");(r=m(An,h,i))&&!((a=h.lastIndex)>u&&(Ei(l,Ti(i,u,r.index)),r.length>1&&r.index<i.length&&gi(Ai,l,xi(r,1)),s=r[0].length,u=a,l.length>=o));)h.lastIndex===r.index&&h.lastIndex++;return u===i.length?!s&&ki(h,"")||Ei(l,""):Ei(l,Ti(i,u)),l.length>o?xi(l,0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:m(e,this,t,n)}:e,[function(e,n){var o=P(this),r=null==e?void 0:et(e,t);return r?m(r,e,o,n):m(i,Ue(o),e,n)},function(t,o){var r=Ot(this),a=Ue(t),s=n(i,r,a,o,i!==e);if(s.done)return s.value;var l=wi(r,RegExp),c=r.unicode,u=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(ji?"g":"y"),h=new l(ji?"^(?:"+r.source+")":r,u),f=void 0===o?4294967295:o>>>0;if(0===f)return[];if(0===a.length)return null===qn(h,a)?[a]:[];for(var p=0,d=0,g=[];d<a.length;){h.lastIndex=ji?0:d;var v,m=qn(h,ji?Ti(a,d):a);if(null===m||(v=Ci(ge(h.lastIndex+(ji?d:0)),a.length))===p)d=Rn(a,d,c);else{if(Ei(g,Ti(a,p,d)),g.length===f)return g;for(var b=1;b<=m.length-1;b++)if(Ei(g,m[b]),g.length===f)return g;d=p=v}}return Ei(g,Ti(a,p)),g}]}),!!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),ji);var Mi=Object.assign,qi=Object.defineProperty,Bi=A([].concat),Hi=!Mi||p((function(){if(d&&1!==Mi({b:1},Mi(qi({},"a",{enumerable:!0,get:function(){qi(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=Mi({},t)[n]||Je(Mi({},e)).join("")!=i}))?function(t,e){for(var n=lt(t),i=arguments.length,o=1,r=Ce.f,a=w.f;i>o;)for(var s,l=L(arguments[o++]),c=r?Bi(Je(l),r(l)):Je(l),u=c.length,h=0;u>h;)s=c[h++],d&&!m(a,l,s)||(n[s]=l[s]);return n}:Mi;function Di(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"===Ni(t,"position")||Di(e))}function Fi(t,e){var n=document.body,i=document.documentElement,o=window.pageYOffset||i.scrollTop||n.scrollTop,r=window.pageXOffset||i.scrollLeft||n.scrollLeft;e=e||n;var a=t.getBoundingClientRect(),s=e.getBoundingClientRect(),l=Ni(e,"position"),c={width:a.width,height:a.height};return"body"!==e.tagName.toLowerCase()&&"relative"===l||"sticky"===l?Object.assign(c,{top:a.top-s.top,left:a.left-s.left}):Di(t)?Object.assign(c,{top:a.top,left:a.left}):Object.assign(c,{top:a.top+o,left:a.left+r})}qe({target:"Object",stat:!0,forced:Object.assign!==Hi},{assign:Hi});var $i=Math.floor,Gi=A("".charAt),Vi=A("".replace),zi=A("".slice),Ui=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Wi=/\$([$&'`]|\d{1,2})/g,Ki=function(t,e,n,i,o,r){var a=n+t.length,s=i.length,l=Wi;return void 0!==o&&(o=lt(o),l=Ui),Vi(r,l,(function(r,l){var c;switch(Gi(l,0)){case"$":return"$";case"&":return t;case"`":return zi(e,0,n);case"'":return zi(e,a);case"<":c=o[zi(l,1,-1)];break;default:var u=+l;if(0===u)return r;if(u>s){var h=$i(u/10);return 0===h?r:h<=s?void 0===i[h-1]?Gi(l,1):i[h-1]+Gi(l,1):r}c=i[u-1]}return void 0===c?"":c}))},Yi=yt("replace"),Xi=Math.max,Qi=Math.min,Ji=A([].concat),Zi=A([].push),to=A("".indexOf),eo=A("".slice),no="$0"==="a".replace(/./,"$0"),io=!!/./[Yi]&&""===/./[Yi]("a","$0");function oo(t,e){if(t instanceof SVGElement){var n=t.getAttribute("class")||"";t.setAttribute("class",n.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function ro(t,e){var n="";if(t.style.cssText&&(n+=t.style.cssText),"string"==typeof e)n+=e;else for(var i in e)n+="".concat(i,":").concat(e[i],";");t.style.cssText=n}function ao(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],n=Fi(e.element,this._targetElement),i=this._options.helperElementPadding;Di(e.element)?Ii(t,"introjs-fixedTooltip"):oo(t,"introjs-fixedTooltip"),"floating"===e.position&&(i=0),ro(t,{width:"".concat(n.width+i,"px"),height:"".concat(n.height+i,"px"),top:"".concat(n.top-i/2,"px"),left:"".concat(n.left-i/2,"px")})}}Tn("replace",(function(t,e,n){var i=io?"$":"$0";return[function(t,n){var i=P(this),o=null==t?void 0:et(t,Yi);return o?m(o,t,i,n):m(e,Ue(i),t,n)},function(t,o){var r=Ot(this),a=Ue(t);if("string"==typeof o&&-1===to(o,i)&&-1===to(o,"$<")){var s=n(e,r,a,o);if(s.done)return s.value}var l=M(o);l||(o=Ue(o));var c=r.global;if(c){var u=r.unicode;r.lastIndex=0}for(var h=[];;){var f=qn(r,a);if(null===f)break;if(Zi(h,f),!c)break;""===Ue(f[0])&&(r.lastIndex=Rn(a,ge(r.lastIndex),u))}for(var p,d="",g=0,v=0;v<h.length;v++){for(var m=Ue((f=h[v])[0]),b=Xi(Qi(ue(f.index),a.length),0),y=[],w=1;w<f.length;w++)Zi(y,void 0===(p=f[w])?p:String(p));var _=f.groups;if(l){var S=Ji([m],y,b,a);void 0!==_&&Zi(S,_);var x=Ue(gi(o,void 0,S))}else x=Ki(m,a,b,y,_,o);b>=g&&(d+=eo(a,g,b)+x,g=b+m.length)}return d+eo(a,g)}]}),!!p((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!no||io);var so=yt("unscopables"),lo=Array.prototype;null==lo[so]&&qt.f(lo,so,{configurable:!0,value:un(null)});var co,uo=be.includes;qe({target:"Array",proto:!0},{includes:function(t){return uo(this,t,arguments.length>1?arguments[1]:void 0)}}),co="includes",lo[so][co]=!0;var ho=A([].slice),fo=Zn("slice"),po=yt("species"),go=f.Array,vo=Math.max;qe({target:"Array",proto:!0,forced:!fo},{slice:function(t,e){var n,i,o,r=R(this),a=ve(r),s=pe(t,a),l=pe(void 0===e?a:e,a);if(Bn(r)&&(n=r.constructor,(Kn(n)&&(n===go||Bn(n.prototype))||q(n)&&null===(n=n[po]))&&(n=void 0),n===go||void 0===n))return ho(r,s,l);for(i=new(void 0===n?go:n)(vo(l-s,0)),o=0;s<l;s++,o++)s in r&&Hn(i,o,r[s]);return i.length=o,i}});var mo=f.TypeError,bo=function(t){if(mi(t))throw mo("The method doesn't accept regular expressions");return t},yo=yt("match"),wo=A("".indexOf);qe({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[yo]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~wo(Ue(P(this)),Ue(bo(t)),arguments.length>1?arguments[1]:void 0)}});var _o=function(t,e){var n=[][t];return!!n&&p((function(){n.call(null,e||function(){return 1},1)}))},So=A([].join),xo=L!=Object,jo=_o("join",",");qe({target:"Array",proto:!0,forced:xo||!jo},{join:function(t){return So(R(this),void 0===t?",":t)}});var Co=A(A.bind),Ao=A([].push),ko=function(t){var e=1==t,n=2==t,i=3==t,o=4==t,r=6==t,a=7==t,s=5==t||r;return function(l,c,u,h){for(var f,p,d=lt(l),v=L(d),m=function(t,e){return tt(t),void 0===e?t:g?Co(t,e):function(){return t.apply(e,arguments)}}(c,u),b=ve(v),y=0,w=h||Qn,_=e?w(l,b):n||a?w(l,0):void 0;b>y;y++)if((s||y in v)&&(p=m(f=v[y],y,d),t))if(e)_[y]=p;else if(p)switch(t){case 3:return!0;case 5:return f;case 6:return y;case 2:Ao(_,f)}else switch(t){case 4:return!1;case 7:Ao(_,f)}return r?-1:i||o?o:_}},Eo={forEach:ko(0),map:ko(1),filter:ko(2),some:ko(3),every:ko(4),find:ko(5),findIndex:ko(6),filterReject:ko(7)},To=Eo.filter;function Io(t,e,n,i,o){return t.left+e+n.width>i.width?(o.style.left="".concat(i.width-n.width-t.left,"px"),!1):(o.style.left="".concat(e,"px"),!0)}function No(t,e,n,i){return t.left+t.width-e-n.width<0?(i.style.left="".concat(-t.left,"px"),!1):(i.style.right="".concat(e,"px"),!0)}qe({target:"Array",proto:!0,forced:!Zn("filter")},{filter:function(t){return To(this,t,arguments.length>1?arguments[1]:void 0)}});var Lo=Zn("splice"),Oo=f.TypeError,Po=Math.max,Ro=Math.min;function Mo(t,e){t.includes(e)&&t.splice(t.indexOf(e),1)}function qo(t,e,n){var i=this._options.positionPrecedence.slice(),o=Oi(),r=Fi(e).height+10,a=Fi(e).width+20,s=t.getBoundingClientRect(),l="floating";s.bottom+r>o.height&&Mo(i,"bottom"),s.top-r<0&&Mo(i,"top"),s.right+a>o.width&&Mo(i,"right"),s.left-a<0&&Mo(i,"left");var c,u,h=-1!==(u=(c=n||"").indexOf("-"))?c.substr(u):"";return n&&(n=n.split("-")[0]),i.length&&(l=i.includes(n)?n:i[0]),["top","bottom"].includes(l)&&(l+=function(t,e,n,i){var o=n.width,r=e/2,a=Math.min(o,window.screen.width),s=["-left-aligned","-middle-aligned","-right-aligned"];return a-t<e&&Mo(s,"-left-aligned"),(t<r||a-t<r)&&Mo(s,"-middle-aligned"),t<e&&Mo(s,"-right-aligned"),s.length?s.includes(i)?i:s[0]:"-middle-aligned"}(s.left,a,o,h)),l}function Bo(t,e,n,i){var o,r,a,s,l,c="";if(i=i||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,n.style.display="inherit",this._introItems[this._currentStep])switch(c="string"==typeof(o=this._introItems[this._currentStep]).tooltipClass?o.tooltipClass:this._options.tooltipClass,e.className=["introjs-tooltip",c].filter(Boolean).join(" "),e.setAttribute("role","dialog"),"floating"!==(l=this._introItems[this._currentStep].position)&&this._options.autoPosition&&(l=qo.call(this,t,e,l)),a=Fi(t),r=Fi(e),s=Oi(),Ii(e,"introjs-".concat(l)),l){case"top-right-aligned":n.className="introjs-arrow bottom-right";var u=0;No(a,u,r,e),e.style.bottom="".concat(a.height+20,"px");break;case"top-middle-aligned":n.className="introjs-arrow bottom-middle";var h=a.width/2-r.width/2;i&&(h+=5),No(a,h,r,e)&&(e.style.right=null,Io(a,h,r,s,e)),e.style.bottom="".concat(a.height+20,"px");break;case"top-left-aligned":case"top":n.className="introjs-arrow bottom",Io(a,i?0:15,r,s,e),e.style.bottom="".concat(a.height+20,"px");break;case"right":e.style.left="".concat(a.width+20,"px"),a.top+r.height>s.height?(n.className="introjs-arrow left-bottom",e.style.top="-".concat(r.height-a.height-20,"px")):n.className="introjs-arrow left";break;case"left":i||!0!==this._options.showStepNumbers||(e.style.top="15px"),a.top+r.height>s.height?(e.style.top="-".concat(r.height-a.height-20,"px"),n.className="introjs-arrow right-bottom"):n.className="introjs-arrow right",e.style.right="".concat(a.width+20,"px");break;case"floating":n.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-".concat(r.width/2,"px"),e.style.marginTop="-".concat(r.height/2,"px");break;case"bottom-right-aligned":n.className="introjs-arrow top-right",No(a,u=0,r,e),e.style.top="".concat(a.height+20,"px");break;case"bottom-middle-aligned":n.className="introjs-arrow top-middle",h=a.width/2-r.width/2,i&&(h+=5),No(a,h,r,e)&&(e.style.right=null,Io(a,h,r,s,e)),e.style.top="".concat(a.height+20,"px");break;default:n.className="introjs-arrow top",Io(a,0,r,s,e),e.style.top="".concat(a.height+20,"px")}}function Ho(){r(document.querySelectorAll(".introjs-showElement"),(function(t){oo(t,/introjs-[a-zA-Z]+/g)}))}function Do(t,e){var n=document.createElement(t);e=e||{};var i=/^(?:role|data-|aria-)/;for(var o in e){var r=e[o];"style"===o?ro(n,r):o.match(i)?n.setAttribute(o,r):n[o]=r}return n}function Fo(t,e,n){if(n){var i=e.style.opacity||"1";ro(e,{opacity:"0"}),window.setTimeout((function(){ro(e,{opacity:i})}),10)}t.appendChild(e)}function $o(){return parseInt(this._currentStep+1,10)/this._introItems.length*100}function Go(){var t=document.querySelector(".introjs-disableInteraction");null===t&&(t=Do("div",{className:"introjs-disableInteraction"}),this._targetElement.appendChild(t)),ao.call(this,t)}function Vo(t){var e=this,n=Do("div",{className:"introjs-bullets"});!1===this._options.showBullets&&(n.style.display="none");var i=Do("ul");i.setAttribute("role","tablist");var o=function(){e.goToStep(this.getAttribute("data-step-number"))};return r(this._introItems,(function(e,n){var r=e.step,a=Do("li"),s=Do("a");a.setAttribute("role","presentation"),s.setAttribute("role","tab"),s.onclick=o,n===t.step-1&&(s.className="active"),Ri(s),s.innerHTML="&nbsp;",s.setAttribute("data-step-number",r),a.appendChild(s),i.appendChild(a)})),n.appendChild(i),n}function zo(t,e){if(this._options.showBullets){var n=document.querySelector(".introjs-bullets");n&&n.parentNode.replaceChild(Vo.call(this,e),n)}}function Uo(t,e){this._options.showBullets&&(t.querySelector(".introjs-bullets li > a.active").className="",t.querySelector('.introjs-bullets li > a[data-step-number="'.concat(e.step,'"]')).className="active")}function Wo(){var t=Do("div");t.className="introjs-progress",!1===this._options.showProgress&&(t.style.display="none");var e=Do("div",{className:"introjs-progressbar"});return this._options.progressBarAdditionalClass&&(e.className+=" "+this._options.progressBarAdditionalClass),e.setAttribute("role","progress"),e.setAttribute("aria-valuemin",0),e.setAttribute("aria-valuemax",100),e.setAttribute("aria-valuenow",$o.call(this)),e.style.cssText="width:".concat($o.call(this),"%;"),t.appendChild(e),t}function Ko(t){t.querySelector(".introjs-progress .introjs-progressbar").style.cssText="width:".concat($o.call(this),"%;"),t.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow",$o.call(this))}function Yo(t){var e=this;void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var n,i,o,r=this,a=document.querySelector(".introjs-helperLayer"),s=document.querySelector(".introjs-tooltipReferenceLayer"),l="introjs-helperLayer";if("string"==typeof t.highlightClass&&(l+=" ".concat(t.highlightClass)),"string"==typeof this._options.highlightClass&&(l+=" ".concat(this._options.highlightClass)),null!==a&&null!==s){var c=s.querySelector(".introjs-helperNumberLayer"),u=s.querySelector(".introjs-tooltiptext"),h=s.querySelector(".introjs-tooltip-title"),f=s.querySelector(".introjs-arrow"),p=s.querySelector(".introjs-tooltip");o=s.querySelector(".introjs-skipbutton"),i=s.querySelector(".introjs-prevbutton"),n=s.querySelector(".introjs-nextbutton"),a.className=l,p.style.opacity=0,p.style.display="none",Li.call(r,t),ao.call(r,a),ao.call(r,s),Ho(),r._lastShowElementTimer&&window.clearTimeout(r._lastShowElementTimer),r._lastShowElementTimer=window.setTimeout((function(){null!==c&&(c.innerHTML="".concat(t.step," ").concat(e._options.stepNumbersOfLabel," ").concat(e._introItems.length)),u.innerHTML=t.intro,h.innerHTML=t.title,p.style.display="block",Bo.call(r,t.element,p,f),Uo.call(r,s,t),Ko.call(r,s),p.style.opacity=1,(null!=n&&/introjs-donebutton/gi.test(n.className)||null!=n)&&n.focus(),Pi.call(r,t.scrollTo,t,u)}),350)}else{var d=Do("div",{className:l}),g=Do("div",{className:"introjs-tooltipReferenceLayer"}),v=Do("div",{className:"introjs-arrow"}),m=Do("div",{className:"introjs-tooltip"}),b=Do("div",{className:"introjs-tooltiptext"}),y=Do("div",{className:"introjs-tooltip-header"}),w=Do("h1",{className:"introjs-tooltip-title"}),_=Do("div");if(ro(d,{"box-shadow":"0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(r._options.overlayOpacity.toString(),") 0 0 0 5000px")}),Li.call(r,t),ao.call(r,d),ao.call(r,g),Fo(this._targetElement,d,!0),Fo(this._targetElement,g),b.innerHTML=t.intro,w.innerHTML=t.title,_.className="introjs-tooltipbuttons",!1===this._options.showButtons&&(_.style.display="none"),y.appendChild(w),m.appendChild(y),m.appendChild(b),this._options.dontShowAgain){var S=Do("div",{className:"introjs-dontShowAgain"}),x=Do("input",{type:"checkbox",id:"introjs-dontShowAgain",name:"introjs-dontShowAgain"});x.onchange=function(t){e.setDontShowAgain(t.target.checked)};var j=Do("label",{htmlFor:"introjs-dontShowAgain"});j.innerText=this._options.dontShowAgainLabel,S.appendChild(x),S.appendChild(j),m.appendChild(S)}m.appendChild(Vo.call(this,t)),m.appendChild(Wo.call(this));var C=Do("div");!0===this._options.showStepNumbers&&(C.className="introjs-helperNumberLayer",C.innerHTML="".concat(t.step," ").concat(this._options.stepNumbersOfLabel," ").concat(this._introItems.length),m.appendChild(C)),m.appendChild(v),g.appendChild(m),(n=Do("a")).onclick=function(){r._introItems.length-1!==r._currentStep?Jo.call(r):/introjs-donebutton/gi.test(n.className)&&("function"==typeof r._introCompleteCallback&&r._introCompleteCallback.call(r,r._currentStep,"done"),qr.call(r,r._targetElement))},Ri(n),n.innerHTML=this._options.nextLabel,(i=Do("a")).onclick=function(){0!==r._currentStep&&Zo.call(r)},Ri(i),i.innerHTML=this._options.prevLabel,Ri(o=Do("a",{className:"introjs-skipbutton"})),o.innerHTML=this._options.skipLabel,o.onclick=function(){r._introItems.length-1===r._currentStep&&"function"==typeof r._introCompleteCallback&&r._introCompleteCallback.call(r,r._currentStep,"skip"),"function"==typeof r._introSkipCallback&&r._introSkipCallback.call(r),qr.call(r,r._targetElement)},y.appendChild(o),this._introItems.length>1&&_.appendChild(i),_.appendChild(n),m.appendChild(_),Bo.call(r,t.element,m,v),Pi.call(this,t.scrollTo,t,m)}var A=r._targetElement.querySelector(".introjs-disableInteraction");A&&A.parentNode.removeChild(A),t.disableInteraction&&Go.call(r),0===this._currentStep&&this._introItems.length>1?(null!=n&&(n.className="".concat(this._options.buttonClass," introjs-nextbutton"),n.innerHTML=this._options.nextLabel),!0===this._options.hidePrev?(null!=i&&(i.className="".concat(this._options.buttonClass," introjs-prevbutton introjs-hidden")),null!=n&&Ii(n,"introjs-fullbutton")):null!=i&&(i.className="".concat(this._options.buttonClass," introjs-prevbutton introjs-disabled"))):this._introItems.length-1===this._currentStep||1===this._introItems.length?(null!=i&&(i.className="".concat(this._options.buttonClass," introjs-prevbutton")),!0===this._options.hideNext?(null!=n&&(n.className="".concat(this._options.buttonClass," introjs-nextbutton introjs-hidden")),null!=i&&Ii(i,"introjs-fullbutton")):null!=n&&(!0===this._options.nextToDone?(n.innerHTML=this._options.doneLabel,Ii(n,"".concat(this._options.buttonClass," introjs-nextbutton introjs-donebutton"))):n.className="".concat(this._options.buttonClass," introjs-nextbutton introjs-disabled"))):(null!=i&&(i.className="".concat(this._options.buttonClass," introjs-prevbutton")),null!=n&&(n.className="".concat(this._options.buttonClass," introjs-nextbutton"),n.innerHTML=this._options.nextLabel)),null!=i&&i.setAttribute("role","button"),null!=n&&n.setAttribute("role","button"),null!=o&&o.setAttribute("role","button"),null!=n&&n.focus(),function(t){var e=t.element;Ii(e,"introjs-showElement");var n=Ni(e,"position");"absolute"!==n&&"relative"!==n&&"sticky"!==n&&"fixed"!==n&&Ii(e,"introjs-relativePosition")}(t),void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,t.element)}function Xo(t){this._currentStep=t-2,void 0!==this._introItems&&Jo.call(this)}function Qo(t){this._currentStepNumber=t,void 0!==this._introItems&&Jo.call(this)}function Jo(){var t=this;this._direction="forward",void 0!==this._currentStepNumber&&r(this._introItems,(function(e,n){e.step===t._currentStepNumber&&(t._currentStep=n-1,t._currentStepNumber=void 0)})),void 0===this._currentStep?this._currentStep=0:++this._currentStep;var e=this._introItems[this._currentStep],n=!0;return void 0!==this._introBeforeChangeCallback&&(n=this._introBeforeChangeCallback.call(this,e&&e.element)),!1===n?(--this._currentStep,!1):this._introItems.length<=this._currentStep?("function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this,this._currentStep,"end"),void qr.call(this,this._targetElement)):void Yo.call(this,e)}function Zo(){if(this._direction="backward",0===this._currentStep)return!1;--this._currentStep;var t=this._introItems[this._currentStep],e=!0;if(void 0!==this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t&&t.element)),!1===e)return++this._currentStep,!1;Yo.call(this,t)}function tr(){return this._currentStep}function er(t){var e=void 0===t.code?t.which:t.code;if(null===e&&(e=null===t.charCode?t.keyCode:t.charCode),"Escape"!==e&&27!==e||!0!==this._options.exitOnEsc){if("ArrowLeft"===e||37===e)Zo.call(this);else if("ArrowRight"===e||39===e)Jo.call(this);else if("Enter"===e||"NumpadEnter"===e||13===e){var n=t.target||t.srcElement;n&&n.className.match("introjs-prevbutton")?Zo.call(this):n&&n.className.match("introjs-skipbutton")?(this._introItems.length-1===this._currentStep&&"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this,this._currentStep,"skip"),qr.call(this,this._targetElement)):n&&n.getAttribute("data-step-number")?n.click():Jo.call(this),t.preventDefault?t.preventDefault():t.returnValue=!1}}else qr.call(this,this._targetElement)}function nr(e){if(null===e||"object"!==t(e)||void 0!==e.nodeType)return e;var n={};for(var i in e)void 0!==window.jQuery&&e[i]instanceof window.jQuery?n[i]=e[i]:n[i]=nr(e[i]);return n}function ir(t){var e=document.querySelector(".introjs-hints");return e?e.querySelectorAll(t):[]}function or(t){var e=ir('.introjs-hint[data-step="'.concat(t,'"]'))[0];pr.call(this),e&&Ii(e,"introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function rr(){var t=this;r(ir(".introjs-hint"),(function(e){or.call(t,e.getAttribute("data-step"))}))}function ar(){var t=this,e=ir(".introjs-hint");e&&e.length?r(e,(function(e){sr.call(t,e.getAttribute("data-step"))})):dr.call(this,this._targetElement)}function sr(t){var e=ir('.introjs-hint[data-step="'.concat(t,'"]'))[0];e&&oo(e,/introjs-hidehint/g)}function lr(){var t=this;r(ir(".introjs-hint"),(function(e){cr.call(t,e.getAttribute("data-step"))})),a.off(document,"click",pr,this,!1),a.off(window,"resize",gr,this,!0),this._hintsAutoRefreshFunction&&a.off(window,"scroll",this._hintsAutoRefreshFunction,this,!0)}function cr(t){var e=ir('.introjs-hint[data-step="'.concat(t,'"]'))[0];e&&e.parentNode.removeChild(e)}function ur(){var t=this,e=this,n=document.querySelector(".introjs-hints");null===n&&(n=Do("div",{className:"introjs-hints"}));r(this._introItems,(function(i,o){if(!document.querySelector('.introjs-hint[data-step="'.concat(o,'"]'))){var r=Do("a",{className:"introjs-hint"});Ri(r),r.onclick=function(t){return function(n){var i=n||window.event;i.stopPropagation&&i.stopPropagation(),null!==i.cancelBubble&&(i.cancelBubble=!0),fr.call(e,t)}}(o),i.hintAnimation||Ii(r,"introjs-hint-no-anim"),Di(i.element)&&Ii(r,"introjs-fixedhint");var a=Do("div",{className:"introjs-hint-dot"}),s=Do("div",{className:"introjs-hint-pulse"});r.appendChild(a),r.appendChild(s),r.setAttribute("data-step",o),i.targetElement=i.element,i.element=r,hr.call(t,i.hintPosition,r,i.targetElement),n.appendChild(r)}})),document.body.appendChild(n),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this),this._options.hintAutoRefreshInterval>=0&&(this._hintsAutoRefreshFunction=function(t,e){var n,i=this;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){t.apply(i,r)}),e)}}((function(){return gr.call(t)}),this._options.hintAutoRefreshInterval),a.on(window,"scroll",this._hintsAutoRefreshFunction,this,!0))}function hr(t,e,n){var i=e.style,o=Fi.call(this,n),r=20,a=20;switch(t){default:i.left="".concat(o.left,"px"),i.top="".concat(o.top,"px");break;case"top-right":i.left="".concat(o.left+o.width-r,"px"),i.top="".concat(o.top,"px");break;case"bottom-left":i.left="".concat(o.left,"px"),i.top="".concat(o.top+o.height-a,"px");break;case"bottom-right":i.left="".concat(o.left+o.width-r,"px"),i.top="".concat(o.top+o.height-a,"px");break;case"middle-left":i.left="".concat(o.left,"px"),i.top="".concat(o.top+(o.height-a)/2,"px");break;case"middle-right":i.left="".concat(o.left+o.width-r,"px"),i.top="".concat(o.top+(o.height-a)/2,"px");break;case"middle-middle":i.left="".concat(o.left+(o.width-r)/2,"px"),i.top="".concat(o.top+(o.height-a)/2,"px");break;case"bottom-middle":i.left="".concat(o.left+(o.width-r)/2,"px"),i.top="".concat(o.top+o.height-a,"px");break;case"top-middle":i.left="".concat(o.left+(o.width-r)/2,"px"),i.top="".concat(o.top,"px")}}function fr(t){var e=document.querySelector('.introjs-hint[data-step="'.concat(t,'"]')),n=this._introItems[t];void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,e,n,t);var i=pr.call(this);if(parseInt(i,10)!==t){var o=Do("div",{className:"introjs-tooltip"}),r=Do("div"),a=Do("div"),s=Do("div");o.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},r.className="introjs-tooltiptext";var l=Do("p");if(l.innerHTML=n.hint,r.appendChild(l),this._options.hintShowButton){var c=Do("a");c.className=this._options.buttonClass,c.setAttribute("role","button"),c.innerHTML=this._options.hintButtonLabel,c.onclick=or.bind(this,t),r.appendChild(c)}a.className="introjs-arrow",o.appendChild(a),o.appendChild(r),this._currentStep=e.getAttribute("data-step"),s.className="introjs-tooltipReferenceLayer introjs-hintReference",s.setAttribute("data-step",e.getAttribute("data-step")),ao.call(this,s),s.appendChild(o),document.body.appendChild(s),Bo.call(this,e,o,a,!0)}}function pr(){var t=document.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function dr(t){var e=this;if(this._introItems=[],this._options.hints)r(this._options.hints,(function(t){var n=nr(t);"string"==typeof n.element&&(n.element=document.querySelector(n.element)),n.hintPosition=n.hintPosition||e._options.hintPosition,n.hintAnimation=n.hintAnimation||e._options.hintAnimation,null!==n.element&&e._introItems.push(n)}));else{var n=t.querySelectorAll("*[data-hint]");if(!n||!n.length)return!1;r(n,(function(t){var n=t.getAttribute("data-hint-animation");n=n?"true"===n:e._options.hintAnimation,e._introItems.push({element:t,hint:t.getAttribute("data-hint"),hintPosition:t.getAttribute("data-hint-position")||e._options.hintPosition,hintAnimation:n,tooltipClass:t.getAttribute("data-tooltip-class"),position:t.getAttribute("data-position")||e._options.tooltipPosition})}))}ur.call(this),a.on(document,"click",pr,this,!1),a.on(window,"resize",gr,this,!0)}function gr(){var t=this;r(this._introItems,(function(e){var n=e.targetElement,i=e.hintPosition,o=e.element;void 0!==n&&hr.call(t,i,o,n)}))}qe({target:"Array",proto:!0,forced:!Lo},{splice:function(t,e){var n,i,o,r,a,s,l=lt(this),c=ve(l),u=pe(t,c),h=arguments.length;if(0===h?n=i=0:1===h?(n=0,i=c-u):(n=h-2,i=Ro(Po(ue(e),0),c-u)),c+n-i>9007199254740991)throw Oo("Maximum allowed length exceeded");for(o=Qn(l,i),r=0;r<i;r++)(a=u+r)in l&&Hn(o,r,l[a]);if(o.length=i,n<i){for(r=u;r<c-i;r++)s=r+n,(a=r+i)in l?l[s]=l[a]:delete l[s];for(r=c;r>c-i+n;r--)delete l[r-1]}else if(n>i)for(r=c-i;r>u;r--)s=r+n-1,(a=r+i-1)in l?l[s]=l[a]:delete l[s];for(r=0;r<n;r++)l[r+u]=arguments[r+2];return l.length=c-i+n,o}});var vr=Math.floor,mr=function(t,e){var n=t.length,i=vr(n/2);return n<8?br(t,e):yr(t,mr(xi(t,0,i),e),mr(xi(t,i),e),e)},br=function(t,e){for(var n,i,o=t.length,r=1;r<o;){for(i=r,n=t[r];i&&e(t[i-1],n)>0;)t[i]=t[--i];i!==r++&&(t[i]=n)}return t},yr=function(t,e,n,i){for(var o=e.length,r=n.length,a=0,s=0;a<o||s<r;)t[a+s]=a<o&&s<r?i(e[a],n[s])<=0?e[a++]:n[s++]:a<o?e[a++]:n[s++];return t},wr=mr,_r=F.match(/firefox\/(\d+)/i),Sr=!!_r&&+_r[1],xr=/MSIE|Trident/.test(F),jr=F.match(/AppleWebKit\/(\d+)\./),Cr=!!jr&&+jr[1],Ar=[],kr=A(Ar.sort),Er=A(Ar.push),Tr=p((function(){Ar.sort(void 0)})),Ir=p((function(){Ar.sort(null)})),Nr=_o("sort"),Lr=!p((function(){if(U)return U<70;if(!(Sr&&Sr>3)){if(xr)return!0;if(Cr)return Cr<603;var t,e,n,i,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)Ar.push({k:e+i,v:n})}for(Ar.sort((function(t,e){return e.v-t.v})),i=0;i<Ar.length;i++)e=Ar[i].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));function Or(t){var e=this,n=t.querySelectorAll("*[data-intro]"),i=[];if(this._options.steps)r(this._options.steps,(function(t){var n=nr(t);if(n.step=i.length+1,n.title=n.title||"","string"==typeof n.element&&(n.element=document.querySelector(n.element)),void 0===n.element||null===n.element){var o=document.querySelector(".introjsFloatingElement");null===o&&(o=Do("div",{className:"introjsFloatingElement"}),document.body.appendChild(o)),n.element=o,n.position="floating"}n.position=n.position||e._options.tooltipPosition,n.scrollTo=n.scrollTo||e._options.scrollTo,void 0===n.disableInteraction&&(n.disableInteraction=e._options.disableInteraction),null!==n.element&&i.push(n)}));else{var o;if(n.length<1)return[];r(n,(function(t){if((!e._options.group||t.getAttribute("data-intro-group")===e._options.group)&&"none"!==t.style.display){var n=parseInt(t.getAttribute("data-step"),10);o=t.hasAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):e._options.disableInteraction,n>0&&(i[n-1]={element:t,title:t.getAttribute("data-title")||"",intro:t.getAttribute("data-intro"),step:parseInt(t.getAttribute("data-step"),10),tooltipClass:t.getAttribute("data-tooltip-class"),highlightClass:t.getAttribute("data-highlight-class"),position:t.getAttribute("data-position")||e._options.tooltipPosition,scrollTo:t.getAttribute("data-scroll-to")||e._options.scrollTo,disableInteraction:o})}}));var a=0;r(n,(function(t){if((!e._options.group||t.getAttribute("data-intro-group")===e._options.group)&&null===t.getAttribute("data-step")){for(;void 0!==i[a];)a++;o=t.hasAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):e._options.disableInteraction,i[a]={element:t,title:t.getAttribute("data-title")||"",intro:t.getAttribute("data-intro"),step:a+1,tooltipClass:t.getAttribute("data-tooltip-class"),highlightClass:t.getAttribute("data-highlight-class"),position:t.getAttribute("data-position")||e._options.tooltipPosition,scrollTo:t.getAttribute("data-scroll-to")||e._options.scrollTo,disableInteraction:o}}}))}for(var s=[],l=0;l<i.length;l++)i[l]&&s.push(i[l]);return(i=s).sort((function(t,e){return t.step-e.step})),i}function Pr(t){var e=document.querySelector(".introjs-tooltipReferenceLayer"),n=document.querySelector(".introjs-helperLayer"),i=document.querySelector(".introjs-disableInteraction");if(ao.call(this,n),ao.call(this,e),ao.call(this,i),t&&(this._introItems=Or.call(this,this._targetElement),zo.call(this,e,this._introItems[this._currentStep]),Ko.call(this,e)),void 0!==this._currentStep&&null!==this._currentStep){var o=document.querySelector(".introjs-arrow"),r=document.querySelector(".introjs-tooltip");r&&o&&Bo.call(this,this._introItems[this._currentStep].element,r,o)}return gr.call(this),this}function Rr(){Pr.call(this)}function Mr(t,e){if(t&&t.parentElement){var n=t.parentElement;e?(ro(t,{opacity:"0"}),window.setTimeout((function(){try{n.removeChild(t)}catch(t){}}),500)):n.removeChild(t)}}function qr(t,e){var n=!0;if(void 0!==this._introBeforeExitCallback&&(n=this._introBeforeExitCallback.call(this)),e||!1!==n){var i=t.querySelectorAll(".introjs-overlay");i&&i.length&&r(i,(function(t){return Mr(t)})),Mr(t.querySelector(".introjs-helperLayer"),!0),Mr(t.querySelector(".introjs-tooltipReferenceLayer")),Mr(t.querySelector(".introjs-disableInteraction")),Mr(document.querySelector(".introjsFloatingElement")),Ho(),a.off(window,"keydown",er,this,!0),a.off(window,"resize",Rr,this,!0),void 0!==this._introExitCallback&&this._introExitCallback.call(this),this._currentStep=void 0}}function Br(t){var e=this,n=Do("div",{className:"introjs-overlay"});return ro(n,{top:0,bottom:0,left:0,right:0,position:"fixed"}),t.appendChild(n),!0===this._options.exitOnOverlayClick&&(ro(n,{cursor:"pointer"}),n.onclick=function(){qr.call(e,t)}),!0}function Hr(t){if(this.isActive()){void 0!==this._introStartCallback&&this._introStartCallback.call(this,t);var e=Or.call(this,t);return 0===e.length||(this._introItems=e,Br.call(this,t)&&(Jo.call(this),this._options.keyboardNavigation&&a.on(window,"keydown",er,this,!0),a.on(window,"resize",Rr,this,!0))),!1}}qe({target:"Array",proto:!0,forced:Tr||!Ir||!Nr||!Lr},{sort:function(t){void 0!==t&&tt(t);var e=lt(this);if(Lr)return void 0===t?kr(e):kr(e,t);var n,i,o=[],r=ve(e);for(i=0;i<r;i++)i in e&&Er(o,e[i]);for(wr(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:Ue(e)>Ue(n)?1:-1}}(t)),n=o.length,i=0;i<n;)e[i]=o[i++];for(;i<r;)delete e[i++];return e}});var Dr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Fr=At("span").classList,$r=Fr&&Fr.constructor&&Fr.constructor.prototype,Gr=$r===Object.prototype?void 0:$r,Vr=Eo.forEach,zr=_o("forEach")?[].forEach:function(t){return Vr(this,t,arguments.length>1?arguments[1]:void 0)},Ur=function(t){if(t&&t.forEach!==zr)try{Bt(t,"forEach",zr)}catch(e){t.forEach=zr}};for(var Wr in Dr)Dr[Wr]&&Ur(f[Wr]&&f[Wr].prototype);Ur(Gr);var Kr,Yr="\t\n\v\f\r                　\u2028\u2029\ufeff",Xr=A("".replace),Qr="["+Yr+"]",Jr=RegExp("^"+Qr+Qr+"*"),Zr=RegExp(Qr+Qr+"*$"),ta=function(t){return function(e){var n=Ue(P(e));return 1&t&&(n=Xr(n,Jr,"")),2&t&&(n=Xr(n,Zr,"")),n}},ea={start:ta(1),end:ta(2),trim:ta(3)},na=ae.PROPER,ia=ea.trim;function oa(t,n,i){var o,r=(e(o={},t,n),e(o,"path","/"),o);if(i){var a=new Date;a.setTime(a.getTime()+24*i*60*60*1e3),r.expires=a.toUTCString()}var s=[];for(var l in r)s.push("".concat(l,"=").concat(r[l]));return document.cookie=s.join("; "),ra(t)}function ra(t){return(e={},document.cookie.split(";").forEach((function(t){var i=n(t.split("="),2),o=i[0],r=i[1];e[o.trim()]=r})),e)[t];var e}qe({target:"String",proto:!0,forced:(Kr="trim",p((function(){return!!Yr[Kr]()||"​᠎"!=="​᠎"[Kr]()||na&&Yr[Kr].name!==Kr})))},{trim:function(){return ia(this)}});function aa(t){t?oa(this._options.dontShowAgainCookie,"true",this._options.dontShowAgainCookieDays):oa(this._options.dontShowAgainCookie,"",-1)}function sa(){var t=ra(this._options.dontShowAgainCookie);return t&&"true"===t}function la(t){this._targetElement=t,this._introItems=[],this._options={isActive:!0,nextLabel:"Next",prevLabel:"Back",skipLabel:"×",doneLabel:"Done",hidePrev:!1,hideNext:!1,nextToDone:!0,tooltipPosition:"bottom",tooltipClass:"",group:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!1,stepNumbersOfLabel:"of",keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.5,autoPosition:!0,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,dontShowAgain:!1,dontShowAgainLabel:"Don't show this again",dontShowAgainCookie:"introjs-dontShowAgain",dontShowAgainCookieDays:365,helperElementPadding:10,hintPosition:"top-middle",hintButtonLabel:"Got it",hintShowButton:!0,hintAutoRefreshInterval:10,hintAnimation:!0,buttonClass:"introjs-button",progressBarAdditionalClass:!1}}var ca=function e(n){var i;if("object"===t(n))i=new la(n);else if("string"==typeof n){var r=document.querySelector(n);if(!r)throw new Error("There is no element with given selector.");i=new la(r)}else i=new la(document.body);return e.instances[o(i,"introjs-instance")]=i,i};ca.version="5.1.0",ca.instances={},ca.fn=la.prototype={isActive:function(){return(!this._options.dontShowAgain||!sa.call(this))&&this._options.isActive},clone:function(){return new la(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=function(t,e){var n,i={};for(n in t)i[n]=t[n];for(n in e)i[n]=e[n];return i}(this._options,t),this},start:function(){return Hr.call(this,this._targetElement),this},goToStep:function(t){return Xo.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return Qo.call(this,t),this},nextStep:function(){return Jo.call(this),this},previousStep:function(){return Zo.call(this),this},currentStep:function(){return tr.call(this)},exit:function(t){return qr.call(this,this._targetElement,t),this},refresh:function(t){return Pr.call(this,t),this},setDontShowAgain:function(t){return aa.call(this,t),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onstart:function(t){if("function"!=typeof t)throw new Error("Provided callback for onstart was not a function.");return this._introStartCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},onskip:function(t){if("function"!=typeof t)throw new Error("Provided callback for onskip was not a function.");return this._introSkipCallback=t,this},onbeforeexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},addHints:function(){return dr.call(this,this._targetElement),this},hideHint:function(t){return or.call(this,t),this},hideHints:function(){return rr.call(this),this},showHint:function(t){return sr.call(this,t),this},showHints:function(){return ar.call(this),this},removeHints:function(){return lr.call(this),this},removeHint:function(t){return cr().call(this,t),this},showHintDialog:function(t){return fr.call(this,t),this}};
//# sourceMappingURL=intro.module.js.map


/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/introjs.css":
/*!***********************************!*\
  !*** ./resources/css/introjs.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_introjs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./introjs.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/css/introjs.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_introjs_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_introjs_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/pages/Tool.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Tool.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=ef10eebe */ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/pages/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_laravel_nova_nova_components_NovaTour_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_laravel_nova_nova_components_NovaTour_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=ef10eebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhchdv_nova_tour"] = self["webpackChunkhchdv_nova_tour"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;