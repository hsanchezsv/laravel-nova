/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue3_tour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-tour */ "./node_modules/vue3-tour/dist/vue3-tour.umd.js");
/* harmony import */ var vue3_tour__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue3_tour__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue3_tour_dist_vue3_tour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-tour/dist/vue3-tour.css */ "./node_modules/vue3-tour/dist/vue3-tour.css");




var app = Vue.createApp({});
app.use((vue3_tour__WEBPACK_IMPORTED_MODULE_1___default()));
app.mount('#app');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'my-tour',
  data: function data() {
    return {
      myOptions: {
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish'
        }
      },
      steps: [{
        target: '#v-step-0',
        // We're using document.querySelector() under the hood
        header: {
          title: 'Get Started'
        },
        content: "Discover <strong>Vue Tour</strong>!"
      }, {
        target: '.v-step-1',
        content: 'An awesome plugin made with Vue.js!'
      }, {
        target: '[data-v-step="2"]',
        content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        params: {
          placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements

        }
      }, {
        target: '.v-step-3',
        content: 'An awesome plugin made with Vue.js!'
      }]
    };
  },
  mounted: function mounted() {
    Nova.success(this.__('Nova tool mounted...'));
    this.$tours['myTour'].start();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "INIT VUE TOUR", -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "v-step-1"
}, "A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "data-v-step": "2"
}, "A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "v-step-3"
}, "Nuevo paso", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_v_tour = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-tour");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Nova Tour"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div id=\"v-step-0\">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _this.$tours['myTour'].start();
    }),
    "class": "docs-logo",
    id: "v-step-0"
  }, _hoisted_2), _hoisted_3, _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_tour, {
    name: "myTour",
    steps: $data.steps,
    options: $data.myOptions
  }, null, 8
  /* PROPS */
  , ["steps", "options"])]);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Tool */ "./resources/js/pages/Tool.vue");

Nova.booting(function (app, store) {
  Nova.inertia('NovaTour', _pages_Tool__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-tour/dist/vue3-tour.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-tour/dist/vue3-tour.css ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body.v-tour--active{pointer-events:none}.v-tour{pointer-events:auto}.v-tour__target--highlighted{box-shadow:0 0 0 4px rgba(0,0,0,.4);pointer-events:auto;z-index:9999}.v-tour__target--relative{position:relative}.v-step[data-v-c1b3a65a]{background:#50596c;color:#fff;max-width:320px;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0, 0, 0, .5));padding:1rem;text-align:center;z-index:10000}.v-step .v-step__arrow[data-v-c1b3a65a]{width:0;height:0;border-style:solid;position:absolute;margin:.5rem}.v-step .v-step__arrow[data-v-c1b3a65a]{border-color:#50596c}.v-step .v-step__arrow--dark[data-v-c1b3a65a]{border-color:#454d5d}.v-step[x-placement^=top][data-v-c1b3a65a]{margin-bottom:.5rem}.v-step[x-placement^=top] .v-step__arrow[data-v-c1b3a65a]{border-width:.5rem .5rem 0 .5rem;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=bottom][data-v-c1b3a65a]{margin-top:.5rem}.v-step[x-placement^=bottom] .v-step__arrow[data-v-c1b3a65a]{border-width:0 .5rem .5rem .5rem;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=right][data-v-c1b3a65a]{margin-left:.5rem}.v-step[x-placement^=right] .v-step__arrow[data-v-c1b3a65a]{border-width:.5rem .5rem .5rem 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step[x-placement^=left][data-v-c1b3a65a]{margin-right:.5rem}.v-step[x-placement^=left] .v-step__arrow[data-v-c1b3a65a]{border-width:.5rem 0 .5rem .5rem;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step__header[data-v-c1b3a65a]{margin:-1rem -1rem .5rem;padding:.5rem;background-color:#454d5d;border-top-left-radius:3px;border-top-right-radius:3px}.v-step__content[data-v-c1b3a65a]{margin:0 0 1rem 0}.v-step__button[data-v-c1b3a65a]{background:0 0;border:.05rem solid #fff;border-radius:.1rem;color:#fff;cursor:pointer;display:inline-block;font-size:.8rem;height:1.8rem;line-height:1rem;outline:0;margin:0 .2rem;padding:.35rem .4rem;text-align:center;text-decoration:none;transition:all .2s ease;vertical-align:middle;white-space:nowrap}.v-step__button[data-v-c1b3a65a]:hover{background-color:rgba(255,255,255,.95);color:#50596c}.mask[data-v-c1b3a65a]{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.5)}.mask .tour-focus-container[data-v-c1b3a65a]{border-radius:4px;transition:opacity .2s;left:0;top:0;width:100%;height:100%;position:absolute;opacity:1;pointer-events:auto;box-shadow:0 0 0 9999px rgba(17,55,80,.4),0 0 15px rgba(0,0,0,.5)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Scoped Styles */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue3-tour/dist/vue3-tour.css":
/*!***************************************************!*\
  !*** ./node_modules/vue3-tour/dist/vue3-tour.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_tour_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./vue3-tour.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-tour/dist/vue3-tour.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_tour_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_tour_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

"use strict";

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=ef10eebe */ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/pages/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");
/* harmony import */ var _var_www_html_laravel_nova_nova_components_NovaTour_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_laravel_nova_nova_components_NovaTour_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=ef10eebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");


/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_style_index_0_id_ef10eebe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=style&index=0&id=ef10eebe&lang=css");


/***/ }),

/***/ "./node_modules/vue3-tour/dist/vue3-tour.umd.js":
/*!******************************************************!*\
  !*** ./node_modules/vue3-tour/dist/vue3-tour.umd.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __assign=Object.assign;!function(e,t){ true?module.exports=t(__webpack_require__(/*! vue */ "vue")):0}(this,(function(e){"use strict";const t={onStart:()=>{},onPreviousStep:e=>{},onNextStep:e=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},o={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,useKeyboardNavigation:!0,enabledNavigationKeys:{ESCAPE:!0,ARROW_RIGHT:!0,ARROW_LEFT:!0},debug:!1},n={ACTIVE:"v-tour--active",TARGET_HIGHLIGHTED:"v-tour__target--highlighted",TARGET_RELATIVE:"v-tour__target--relative"},r="box-shadow 0s ease-in-out 0s",i={enableScrolling:!0,highlight:o.highlight,enabledButtons:o.enabledButtons,modifiers:{arrow:{element:".v-step__arrow"}},placement:"bottom"},s=39,a=37,p=27;const l={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>o},callbacks:{type:Object,default:()=>t}},setup(n,r){const i=e.ref(-1),l=e.computed((()=>__assign(__assign({},o),n.options))),u=e.computed((()=>__assign(__assign({},t),n.callbacks))),f=e.computed((()=>i.value>-1&&i.value<h.value)),c=e.computed((()=>0===i.value)),d=e.computed((()=>i.value===n.steps.length-1)),h=e.computed((()=>n.steps.length)),m=e.computed((()=>n.steps[i.value])),v=async e=>{e=void 0!==e?parseInt(e,10):0;let t=n.steps[e];if(void 0!==t.before)try{await t.before("start")}catch(o){return Promise.reject(o)}return await new Promise(((t,o)=>{setTimeout((()=>{u.value.onStart(),i.value=e,t()}),l.value.startTimeout)})),Promise.resolve()},g=async()=>{let e=i.value-1;if(e>-1){let o=n.steps[e];if(void 0!==o.before)try{await o.before("previous")}catch(t){return Promise.reject(t)}await new Promise(((t,o)=>{u.value.onPreviousStep(i.value),i.value=e,t()}))}return Promise.resolve()},b=async()=>{let e=i.value+1;if(e<h.value&&-1!==i.value){let o=n.steps[e];if(void 0!==o.before)try{await o.before("next")}catch(t){return Promise.reject(t)}await new Promise(((t,o)=>{u.value.onNextStep(i.value),i.value=e,t()}))}return Promise.resolve()},y=()=>{u.value.onStop(),document.body.classList.remove("v-tour--active"),i.value=-1},w=()=>{u.value.onSkip(),y()},S=()=>{u.value.onFinish(),y()},k=e=>{switch(l.value.debug&&console.log("[Vue Tour] A keyup event occured:",e),e.keyCode){case s:E("ARROW_RIGHT")&&b();break;case a:E("ARROW_LEFT")&&g();break;case p:E("ESCAPE")&&y()}},E=e=>{const{enabledNavigationKeys:t}=l.value;return!t.hasOwnProperty(e)||t[e]};return e.onMounted((()=>{e.getCurrentInstance().appContext.config.globalProperties.$tours[n.name]={step:m,start:v,isRunning:f,customOptions:l,currentStep:i,isFirst:c,isLast:d,previousStep:g,nextStep:b,stop:y,skip:w,finish:S},l.value.useKeyboardNavigation&&window.addEventListener("keyup",k)})),e.onBeforeUnmount((()=>{l.value.useKeyboardNavigation&&window.removeEventListener("keyup",k)})),{customOptions:l,currentStep:i,isFirst:c,isLast:d,previousStep:g,nextStep:b,stop:y,skip:w,finish:S}}},u={class:"v-tour"};l.render=function(t,o,n,r,i,s){const a=e.resolveComponent("v-step");return e.openBlock(),e.createBlock("div",u,[e.renderSlot(t.$slots,"default",{currentStep:r.currentStep,steps:n.steps,previousStep:r.previousStep,nextStep:r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,isFirst:r.isFirst,isLast:r.isLast,labels:r.customOptions.labels,enabledButtons:r.customOptions.enabledButtons,highlight:r.customOptions.highlight,debug:r.customOptions.debug},(()=>[n.steps[r.currentStep]?(e.openBlock(),e.createBlock(a,{step:n.steps[r.currentStep],key:r.currentStep,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,"is-first":r.isFirst,"is-last":r.isLast,labels:r.customOptions.labels,"enabled-buttons":r.customOptions.enabledButtons,highlight:r.customOptions.highlight,"stop-on-fail":r.customOptions.stopOnTargetNotFound,debug:r.customOptions.debug,onTargetNotFound:o[1]||(o[1]=e=>t.$emit("targetNotFound",e))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug"])):e.createCommentVNode("",!0)]))])};
/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
var f="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,c=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(f&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var d=f&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),c))}};function h(e){return e&&"[object Function]"==={}.toString.call(e)}function m(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?o[t]:o}function v(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function g(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=m(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(o+r+n)?e:g(v(e))}function b(e){return e&&e.referenceNode?e.referenceNode:e}var y=f&&!(!window.MSInputMethodContext||!document.documentMode),w=f&&/MSIE 10/.test(navigator.userAgent);function S(e){return 11===e?y:10===e?w:y||w}function k(e){if(!e)return document.documentElement;for(var t=S(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===m(o,"position")?k(o):o:e?e.ownerDocument.documentElement:document.documentElement}function E(e){return null!==e.parentNode?E(e.parentNode):e}function x(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,r=o?t:e,i=document.createRange();i.setStart(n,0),i.setEnd(r,0);var s,a,p=i.commonAncestorContainer;if(e!==p&&t!==p||n.contains(r))return"BODY"===(a=(s=p).nodeName)||"HTML"!==a&&k(s.firstElementChild)!==s?k(p):p;var l=E(e);return l.host?x(l.host,t):x(e,E(t).host)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",o="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[o]}return e[o]}function T(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=O(t,"top"),r=O(t,"left"),i=o?-1:1;return e.top+=n*i,e.bottom+=n*i,e.left+=r*i,e.right+=r*i,e}function B(e,t){var o="x"===t?"Left":"Top",n="Left"===o?"Right":"Bottom";return parseFloat(e["border"+o+"Width"])+parseFloat(e["border"+n+"Width"])}function L(e,t,o,n){return Math.max(t["offset"+e],t["scroll"+e],o["client"+e],o["offset"+e],o["scroll"+e],S(10)?parseInt(o["offset"+e])+parseInt(n["margin"+("Height"===e?"Top":"Left")])+parseInt(n["margin"+("Height"===e?"Bottom":"Right")]):0)}function _(e){var t=e.body,o=e.documentElement,n=S(10)&&getComputedStyle(o);return{height:L("Height",t,o,n),width:L("Width",t,o,n)}}var N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),C=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function M(e){return A({},e,{right:e.left+e.width,bottom:e.top+e.height})}function P(e){var t={};try{if(S(10)){t=e.getBoundingClientRect();var o=O(e,"top"),n=O(e,"left");t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(f){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?_(e.ownerDocument):{},s=i.width||e.clientWidth||r.width,a=i.height||e.clientHeight||r.height,p=e.offsetWidth-s,l=e.offsetHeight-a;if(p||l){var u=m(e);p-=B(u,"x"),l-=B(u,"y"),r.width-=p,r.height-=l}return M(r)}function D(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=S(10),r="HTML"===t.nodeName,i=P(e),s=P(t),a=g(e),p=m(t),l=parseFloat(p.borderTopWidth),u=parseFloat(p.borderLeftWidth);o&&r&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=M({top:i.top-s.top-l,left:i.left-s.left-u,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!n&&r){var c=parseFloat(p.marginTop),d=parseFloat(p.marginLeft);f.top-=l-c,f.bottom-=l-c,f.left-=u-d,f.right-=u-d,f.marginTop=c,f.marginLeft=d}return(n&&!o?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(f=T(f,t)),f}function H(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=D(e,o),r=Math.max(o.clientWidth,window.innerWidth||0),i=Math.max(o.clientHeight,window.innerHeight||0),s=t?0:O(o),a=t?0:O(o,"left"),p={top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:r,height:i};return M(p)}function V(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===m(e,"position"))return!0;var o=v(e);return!!o&&V(o)}function I(e){if(!e||!e.parentElement||S())return document.documentElement;for(var t=e.parentElement;t&&"none"===m(t,"transform");)t=t.parentElement;return t||document.documentElement}function R(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},s=r?I(e):x(e,b(t));if("viewport"===n)i=H(s,r);else{var a=void 0;"scrollParent"===n?"BODY"===(a=g(v(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===n?e.ownerDocument.documentElement:n;var p=D(a,s,r);if("HTML"!==a.nodeName||V(s))i=p;else{var l=_(e.ownerDocument),u=l.height,f=l.width;i.top+=p.top-p.marginTop,i.bottom=u+p.top,i.left+=p.left-p.marginLeft,i.right=f+p.left}}var c="number"==typeof(o=o||0);return i.left+=c?o:o.left||0,i.top+=c?o:o.top||0,i.right-=c?o:o.right||0,i.bottom-=c?o:o.bottom||0,i}function j(e){return e.width*e.height}function W(e,t,o,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=R(o,n,i,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map((function(e){return A({key:e},a[e],{area:j(a[e])})})).sort((function(e,t){return t.area-e.area})),l=p.filter((function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight})),u=l.length>0?l[0].key:p[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function G(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=n?I(t):x(t,b(o));return D(o,r,n)}function $(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),o=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),n=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+o}}function U(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function Y(e,t,o){o=o.split("-")[0];var n=$(e),r={width:n.width,height:n.height},i=-1!==["right","left"].indexOf(o),s=i?"top":"left",a=i?"left":"top",p=i?"height":"width",l=i?"width":"height";return r[s]=t[s]+t[p]/2-n[p]/2,r[a]=o===a?t[a]-n[l]:t[U(a)],r}function q(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function K(e,t,o){return(void 0===o?e:e.slice(0,function(e,t,o){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===o}));var n=q(e,(function(e){return e[t]===o}));return e.indexOf(n)}(e,"name",o))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=e.function||e.fn;e.enabled&&h(o)&&(t.offsets.popper=M(t.offsets.popper),t.offsets.reference=M(t.offsets.reference),t=o(t,e))})),t}function z(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=G(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=W(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=Y(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=K(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function X(e,t){return e.some((function(e){var o=e.name;return e.enabled&&o===t}))}function J(e){for(var t=[!1,"ms","Webkit","Moz","O"],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var r=t[n],i=r?""+r+o:e;if(void 0!==document.body.style[i])return i}return null}function Q(){return this.state.isDestroyed=!0,X(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[J("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Z(e){var t=e.ownerDocument;return t?t.defaultView:window}function ee(e,t,o,n){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,o,{passive:!0}),r||ee(g(i.parentNode),t,o,n),n.push(i)}function te(e,t,o,n){o.updateBound=n,Z(e).addEventListener("resize",o.updateBound,{passive:!0});var r=g(e);return ee(r,"scroll",o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function oe(){this.state.eventsEnabled||(this.state=te(this.reference,this.options,this.state,this.scheduleUpdate))}function ne(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,Z(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function re(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ie(e,t){Object.keys(t).forEach((function(o){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&re(t[o])&&(n="px"),e.style[o]=t[o]+n}))}var se=f&&/Firefox/i.test(navigator.userAgent);function ae(e,t,o){var n=q(e,(function(e){return e.name===t})),r=!!n&&e.some((function(e){return e.name===o&&e.enabled&&e.order<n.order}));if(!r){var i="`"+t+"`",s="`"+o+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var pe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],le=pe.slice(3);function ue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),n=le.slice(o+1).concat(le.slice(0,o));return t?n.reverse():n}var fe="flip",ce="clockwise",de="counterclockwise";function he(e,t,o,n){var r=[0,0],i=-1!==["right","left"].indexOf(n),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(q(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var p=/\s*,\s*|\s+/,l=-1!==a?[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1]].concat(s.slice(a+1))]:[s];return(l=l.map((function(e,n){var r=(1===n?!i:i)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,o,n){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],s=r[2];if(!i)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=o;break;case"%":case"%r":default:a=n}return M(a)[t]/100*i}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,r,t,o)}))}))).forEach((function(e,t){e.forEach((function(o,n){re(o)&&(r[t]+=o*("-"===e[n-1]?-1:1))}))})),r}var me={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split("-")[0],n=t.split("-")[1];if(n){var r=e.offsets,i=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(o),p=a?"left":"top",l=a?"width":"height",u={start:C({},p,i[p]),end:C({},p,i[p]+i[l]-s[l])};e.offsets.popper=A({},s,u[n])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o=t.offset,n=e.placement,r=e.offsets,i=r.popper,s=r.reference,a=n.split("-")[0],p=void 0;return p=re(+o)?[+o,0]:he(o,i,s,a),"left"===a?(i.top+=p[0],i.left-=p[1]):"right"===a?(i.top+=p[0],i.left+=p[1]):"top"===a?(i.left+=p[0],i.top-=p[1]):"bottom"===a&&(i.left+=p[0],i.top+=p[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||k(e.instance.popper);e.instance.reference===o&&(o=k(o));var n=J("transform"),r=e.instance.popper.style,i=r.top,s=r.left,a=r[n];r.top="",r.left="",r[n]="";var p=R(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);r.top=i,r.left=s,r[n]=a,t.boundaries=p;var l=t.priority,u=e.offsets.popper,f={primary:function(e){var o=u[e];return u[e]<p[e]&&!t.escapeWithReference&&(o=Math.max(u[e],p[e])),C({},e,o)},secondary:function(e){var o="right"===e?"left":"top",n=u[o];return u[e]>p[e]&&!t.escapeWithReference&&(n=Math.min(u[o],p[e]-("right"===e?u.width:u.height))),C({},o,n)}};return l.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=A({},u,f[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,r=e.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",p=s?"left":"top",l=s?"width":"height";return o[a]<i(n[p])&&(e.offsets.popper[p]=i(n[p])-o[l]),o[p]>i(n[a])&&(e.offsets.popper[p]=i(n[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var o;if(!ae(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,s=i.popper,a=i.reference,p=-1!==["left","right"].indexOf(r),l=p?"height":"width",u=p?"Top":"Left",f=u.toLowerCase(),c=p?"left":"top",d=p?"bottom":"right",h=$(n)[l];a[d]-h<s[f]&&(e.offsets.popper[f]-=s[f]-(a[d]-h)),a[f]+h>s[d]&&(e.offsets.popper[f]+=a[f]+h-s[d]),e.offsets.popper=M(e.offsets.popper);var v=a[f]+a[l]/2-h/2,g=m(e.instance.popper),b=parseFloat(g["margin"+u]),y=parseFloat(g["border"+u+"Width"]),w=v-e.offsets.popper[f]-b-y;return w=Math.max(Math.min(s[l]-h,w),0),e.arrowElement=n,e.offsets.arrow=(C(o={},f,Math.round(w)),C(o,c,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(X(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=R(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],r=U(n),i=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case fe:s=[n,r];break;case ce:s=ue(n);break;case de:s=ue(n,!0);break;default:s=t.behavior}return s.forEach((function(a,p){if(n!==a||s.length===p+1)return e;n=e.placement.split("-")[0],r=U(n);var l=e.offsets.popper,u=e.offsets.reference,f=Math.floor,c="left"===n&&f(l.right)>f(u.left)||"right"===n&&f(l.left)<f(u.right)||"top"===n&&f(l.bottom)>f(u.top)||"bottom"===n&&f(l.top)<f(u.bottom),d=f(l.left)<f(o.left),h=f(l.right)>f(o.right),m=f(l.top)<f(o.top),v=f(l.bottom)>f(o.bottom),g="left"===n&&d||"right"===n&&h||"top"===n&&m||"bottom"===n&&v,b=-1!==["top","bottom"].indexOf(n),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),w=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),S=y||w;(c||g||S)&&(e.flipped=!0,(c||g)&&(n=s[p+1]),S&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=n+(i?"-"+i:""),e.offsets.popper=A({},e.offsets.popper,Y(e.instance.popper,e.offsets.reference,e.placement)),e=K(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split("-")[0],n=e.offsets,r=n.popper,i=n.reference,s=-1!==["left","right"].indexOf(o),a=-1===["top","left"].indexOf(o);return r[s?"left":"top"]=i[o]-(a?r[s?"width":"height"]:0),e.placement=U(t),e.offsets.popper=M(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!ae(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,o=q(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,r=e.offsets.popper,i=q(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:t.gpuAcceleration,a=k(e.instance.popper),p=P(a),l={position:r.position},u=function(e,t){var o=e.offsets,n=o.popper,r=o.reference,i=Math.round,s=Math.floor,a=function(e){return e},p=i(r.width),l=i(n.width),u=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),c=t?u||f||p%2==l%2?i:s:a,d=t?i:a;return{left:c(p%2==1&&l%2==1&&!f&&t?n.left-1:n.left),top:d(n.top),bottom:d(n.bottom),right:c(n.right)}}(e,window.devicePixelRatio<2||!se),f="bottom"===o?"top":"bottom",c="right"===n?"left":"right",d=J("transform"),h=void 0,m=void 0;if(m="bottom"===f?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-p.height+u.bottom:u.top,h="right"===c?"HTML"===a.nodeName?-a.clientWidth+u.right:-p.width+u.right:u.left,s&&d)l[d]="translate3d("+h+"px, "+m+"px, 0)",l[f]=0,l[c]=0,l.willChange="transform";else{var v="bottom"===f?-1:1,g="right"===c?-1:1;l[f]=m*v,l[c]=h*g,l.willChange=f+", "+c}var b={"x-placement":e.placement};return e.attributes=A({},b,e.attributes),e.styles=A({},l,e.styles),e.arrowStyles=A({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,o;return ie(e.instance.popper,e.styles),t=e.instance.popper,o=e.attributes,Object.keys(o).forEach((function(e){!1!==o[e]?t.setAttribute(e,o[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&ie(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,r){var i=G(r,t,e,o.positionFixed),s=W(o.placement,i,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute("x-placement",s),ie(t,{position:o.positionFixed?"fixed":"absolute"}),o},gpuAcceleration:void 0}}},ve=function(){function e(t,o){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};N(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=d(this.update.bind(this)),this.options=A({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(A({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){n.options.modifiers[t]=A({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return A({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&h(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return F(e,[{key:"update",value:function(){return z.call(this)}},{key:"destroy",value:function(){return Q.call(this)}},{key:"enableEventListeners",value:function(){return oe.call(this)}},{key:"disableEventListeners",value:function(){return ne.call(this)}}]),e}();ve.Utils=("undefined"!=typeof window?window:__webpack_require__.g).PopperUtils,ve.placements=pe,ve.Defaults=me;var ge=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye=function(){var e=void 0,t=void 0,o=void 0,n=void 0,r=void 0,i=void 0,s=void 0,a=void 0,p=void 0,l=void 0,u=void 0,f=void 0;function c(){return window.scrollY||window.pageYOffset}function d(e){return e.getBoundingClientRect().top+t}function h(o){p||(p=o),u=r(l=o-p,t,s,a),window.scrollTo(0,u),l<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,t+s),e&&i&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof f&&f();p=!1}()}return function(p){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=l.duration||1e3,n=l.offset||0,f=l.callback,r=l.easing||ge,i=l.a11y||!1,t=c(),void 0===p?"undefined":be(p)){case"number":e=void 0,i=!1,o=t+p;break;case"object":o=d(e=p);break;case"string":e=document.querySelector(p),o=d(e)}switch(s=o-t+n,be(l.duration)){case"number":a=l.duration;break;case"function":a=l.duration(s)}window.requestAnimationFrame(h)}}();function we(e,t){var o,n;if(0===t.length)return e;for(o=0,n=t.length;o<n;o++)e=(e<<5)-e+t.charCodeAt(o),e|=0;return e<0?-2*e:e}function Se(e,t,o,n){var r,i=we(we(we(e,o),(r=t,Object.prototype.toString.call(r))),typeof t);if(null===t)return we(i,"null");if(void 0===t)return we(i,"undefined");if("object"==typeof t||"function"==typeof t){if(-1!==n.indexOf(t))return we(i,"[Circular]"+o);n.push(t);var s=function(e,t,o){return Object.keys(t).sort().reduce((function(e,n){return Se(e,t[n],n,o)}),e)}(i,t,n);if(!("valueOf"in t)||"function"!=typeof t.valueOf)return s;try{return we(s,String(t.valueOf()))}catch(a){return we(s,"[valueOf exception]"+(a.stack||a.message))}}return we(i,t.toString())}var ke=function(e){return function(e,t){for(;e.length<t;)e="0"+e;return e}(Se(0,e,"",[]).toString(16),8)};const Ee={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){props.stop()}},finish:{type:Function,default:function(){props.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},displayMask:{type:Boolean,default:!1},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean}},emits:["targetNotFound"],setup(t){const o=ke(t.step.target),s=document.querySelector(t.step.target),a=e.computed((()=>__assign(__assign(__assign(__assign({},i),{highlight:t.highlight}),{enabledButtons:Object.assign({},t.enabledButtons)}),t.step.params))),p=e.ref(null),l=()=>{if(a.value.enableScrolling)if(t.step.duration||t.step.offset){let e={duration:t.step.duration||1e3,offset:t.step.offset||0,callback:void 0,a11y:!1};ye(s,e)}else s.scrollIntoView({behavior:"smooth"})},u=()=>(t.debug&&console.log(`[Vue Tour] Highlight is ${a.value.highlight?"enabled":"disabled"} for .v-step[id="${o}"]`),a.value.highlight),f=()=>{if(u()){document.body.classList.add(n.ACTIVE);const e=window.getComputedStyle(s).getPropertyValue("transition");"all 0s ease 0s"!==e&&(s.style.transition=`${e}, ${r}`),s.classList.add(n.TARGET_HIGHLIGHTED),s.style.position||s.classList.add(n.TARGET_RELATIVE)}else document.body.classList.remove(n.ACTIVE)};return e.onMounted((()=>{t.debug&&console.log("[Vue Tour] The target element "+t.step.target+' of .v-step[id="'+o+'"] is:',s),s?(l(),f(),new ve(s,p.value,a.value)):(t.debug&&console.error("[Vue Tour] The target element "+t.step.target+' of .v-step[id="'+o+'"] does not exist!'),t.$emit("targetNotFound",t.step),t.stopOnFail&&t.stop())})),e.onUnmounted((()=>{if(u()){const e=s.style.transition;s.classList.remove(n.TARGET_HIGHLIGHTED),s.classList.remove(n.TARGET_RELATIVE),e.includes(r)&&setTimeout((()=>{s.style.transition=e.replace(`, ${r}`,"")}),0)}})),{hash:o,isButtonEnabled:e=>!a.value.enabledButtons.hasOwnProperty(e)||a.value.enabledButtons[e],VStep:p}}},xe=e.withScopeId("data-v-c1b3a65a");e.pushScopeId("data-v-c1b3a65a");const Oe={key:0,class:"v-step__header"},Te={class:"v-step__content"},Be={key:1},Le={class:"v-step__buttons"};e.popScopeId();const _e=xe(((t,o,n,r,i,s)=>(e.openBlock(),e.createBlock("div",{class:"v-step",id:"v-step-"+r.hash,ref:"VStep"},[e.renderSlot(t.$slots,"header",{},(()=>[n.step.header?(e.openBlock(),e.createBlock("div",Oe,[n.step.header.title?(e.openBlock(),e.createBlock("div",{key:0,innerHTML:n.step.header.title},null,8,["innerHTML"])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)])),e.renderSlot(t.$slots,"content",{},(()=>[e.createVNode("div",Te,[n.step.content?(e.openBlock(),e.createBlock("div",{key:0,innerHTML:n.step.content},null,8,["innerHTML"])):(e.openBlock(),e.createBlock("div",Be,"props is a demo step! The id of props step is "+e.toDisplayString(r.hash)+" and it targets "+e.toDisplayString(n.step.target)+".",1))])])),e.renderSlot(t.$slots,"actions",{},(()=>[e.createVNode("div",Le,[!n.isLast&&r.isButtonEnabled("buttonSkip")?(e.openBlock(),e.createBlock("button",{key:0,onClick:o[1]||(o[1]=e.withModifiers(((...e)=>n.skip&&n.skip(...e)),["prevent"])),class:"v-step__button v-step__button-skip"},e.toDisplayString(n.labels.buttonSkip),1)):e.createCommentVNode("",!0),!n.isFirst&&r.isButtonEnabled("buttonPrevious")?(e.openBlock(),e.createBlock("button",{key:1,onClick:o[2]||(o[2]=e.withModifiers(((...e)=>n.previousStep&&n.previousStep(...e)),["prevent"])),class:"v-step__button v-step__button-previous"},e.toDisplayString(n.labels.buttonPrevious),1)):e.createCommentVNode("",!0),!n.isLast&&r.isButtonEnabled("buttonNext")?(e.openBlock(),e.createBlock("button",{key:2,onClick:o[3]||(o[3]=e.withModifiers(((...e)=>n.nextStep&&n.nextStep(...e)),["prevent"])),class:"v-step__button v-step__button-next"},e.toDisplayString(n.labels.buttonNext),1)):e.createCommentVNode("",!0),n.isLast&&r.isButtonEnabled("buttonStop")?(e.openBlock(),e.createBlock("button",{key:3,onClick:o[4]||(o[4]=e.withModifiers(((...e)=>n.finish&&n.finish(...e)),["prevent"])),class:"v-step__button v-step__button-stop"},e.toDisplayString(n.labels.buttonStop),1)):e.createCommentVNode("",!0)])])),e.createVNode("div",{class:["v-step__arrow",{"v-step__arrow--dark":n.step.header&&n.step.header.title}]},null,2)],8,["id"]))));Ee.render=_e,Ee.__scopeId="data-v-c1b3a65a";return e=>{e.config.globalProperties.$tours={},e.component(l.name,l),e.component(Ee.name,Ee)}}));


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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