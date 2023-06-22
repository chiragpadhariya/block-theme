/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    Heading,
    Content01,
    mediaID,
    mediaURL
  } = attributes;
  const onChangeHeading = newHeading => {
    setAttributes({
      Heading: newHeading
    });
  };
  const onChangeContent01 = newContent01 => {
    setAttributes({
      Content01: newContent01
    });
  };
  const onSelectMedia = media => {
    setAttributes({
      mediaID: media.id,
      mediaURL: media.url
    });
  };
  const onRemoveMedia = () => {
    setAttributes({
      mediaID: null,
      mediaURL: null
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "about-us"
  }, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us__inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us__inner_details"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h2",
    value: Heading,
    onChange: onChangeHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter about heading text...", "your-theme")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: Content01,
    onChange: onChangeContent01,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter about content...", "your-theme")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--autograph"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectMedia,
    allowedTypes: ["image"],
    value: mediaID,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, !mediaID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        isDefault: true
      }, "Select Media"), mediaID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: mediaURL,
        alt: "Selected Media"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        isDefault: true
      }, "Replace Media"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onRemoveMedia,
        isLink: true,
        isDestructive: true
      }, "Remove Media")));
    }
  })))))))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    Heading,
    Content01,
    mediaURL
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "about-us"
  }, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us__inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "about-us__inner_details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: Heading
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: Content01
  })), mediaURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "about-us__inner_details--autograph"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: mediaURL,
    alt: "Selected Media"
  })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Cannot find module '../font/Montserrat-Regular.ttf'\n    at tryRunOrWebpackError (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5066:12)\n    at __webpack_require__ (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5023:18)\n    at C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5094:20\n    at symbolIterator (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5001:43\n    at symbolIterator (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\neo-async\\async.js:2297:7)\n-- inner error --\nError: Cannot find module '../font/Montserrat-Regular.ttf'\n    at webpackMissingModule (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\src\\style.scss:15:113)\n    at Module.<anonymous> (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\src\\style.scss:15:218)\n    at C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:439:10\n    at Hook.eval [as call] (eval at create (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5068:39\n    at tryRunOrWebpackError (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5066:12)\n    at __webpack_require__ (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5023:18)\n    at C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\webpack\\lib\\Compilation.js:5094:20\n    at symbolIterator (C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\neo-async\\async.js:3485:9)\n\nGenerated code for C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\xampp\\htdocs\\piroll-block\\wordpress\\wp-content\\themes\\piroll-block\\about\\src\\style.scss\n  1 | __webpack_require__.r(__webpack_exports__);\n  2 | /* harmony export */ __webpack_require__.d(__webpack_exports__, {\n  3 | /* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n  4 | /* harmony export */ });\n  5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"C:\\\\xampp\\\\htdocs\\\\piroll-block\\\\wordpress\\\\wp-content\\\\themes\\\\piroll-block\\\\about\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\sourceMaps.js\");\n  6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n  7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"C:\\\\xampp\\\\htdocs\\\\piroll-block\\\\wordpress\\\\wp-content\\\\themes\\\\piroll-block\\\\about\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\api.js\");\n  8 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n  9 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"C:\\\\xampp\\\\htdocs\\\\piroll-block\\\\wordpress\\\\wp-content\\\\themes\\\\piroll-block\\\\about\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\getUrl.js\");\n 10 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n 11 | // Imports\n 12 | \n 13 | \n 14 | \n 15 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../font/Montserrat-Regular.ttf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n 16 | var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../font/Montserrat-Medium.ttf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n 17 | var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../font/NunitoSans_7pt_Condensed-Regular.ttf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n 18 | var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../font/NunitoSans_7pt_Condensed-Bold.ttf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n 19 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n 20 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n 21 | var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n 22 | var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n 23 | var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n 24 | // Module\n 25 | ___CSS_LOADER_EXPORT___.push([module.id, `/**\n 26 |  * The following styles get applied inside the editor only.\n 27 |  *\n 28 |  * Replace them with your own styles or remove the file completely.\n 29 |  */\n 30 | /**\n 31 |  * SCSS Variables.\n 32 |  *\n 33 |  * Please use variables from this sheet to ensure consistency across the UI.\n 34 |  * Don't add to this sheet unless you're pretty sure the value will be reused in many places.\n 35 |  * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.\n 36 |  */\n 37 | /**\n 38 | *  Converts a hex value into the rgb equivalent.\n 39 | *\n 40 | * @param {string} hex - the hexadecimal value to convert\n 41 | * @return {string} comma separated rgb values\n 42 | */\n 43 | /**\n 44 |  * Colors\n 45 |  */\n 46 | /**\n 47 |  * Fonts & basic variables.\n 48 |  */\n 49 | /**\n 50 |  * Grid System.\n 51 |  * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/\n 52 |  */\n 53 | /**\n 54 |  * Dimensions.\n 55 |  */\n 56 | /**\n 57 |  * Shadows.\n 58 |  */\n 59 | /**\n 60 |  * Editor widths.\n 61 |  */\n 62 | /**\n 63 |  * Block & Editor UI.\n 64 |  */\n 65 | /**\n 66 |  * Block paddings.\n 67 |  */\n 68 | /**\n 69 |  * React Native specific.\n 70 |  * These variables do not appear to be used anywhere else.\n 71 |  */\n 72 | @font-face {\n 73 |   font-family: \"Montserrat\";\n 74 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n 75 | }\n 76 | @font-face {\n 77 |   font-family: \"Montserrat-medium\";\n 78 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n 79 | }\n 80 | @font-face {\n 81 |   font-family: \"NunitoSans-Regular\";\n 82 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n 83 | }\n 84 | @font-face {\n 85 |   font-family: \"NunitoSans-Bold\";\n 86 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n 87 | }\n 88 | .about-us__inner {\n 89 |   padding: 100px 0;\n 90 |   display: flex;\n 91 |   flex-wrap: wrap;\n 92 |   justify-content: center;\n 93 | }\n 94 | .about-us__inner_details--heading h2 {\n 95 |   font-size: 30px;\n 96 |   line-height: 35px;\n 97 |   color: #191919;\n 98 |   font-family: \"Montserrat\";\n 99 |   font-weight: 550 !important;\n100 |   text-align: center;\n101 |   justify-content: center;\n102 | }\n103 | .about-us__inner_details--text {\n104 |   padding: 10px 0 40px 0;\n105 | }\n106 | .about-us__inner_details--text P {\n107 |   font-size: 16px;\n108 |   line-height: 21px;\n109 |   text-align: center;\n110 |   color: #787878;\n111 | }\n112 | .about-us__inner_details--autograph {\n113 |   display: flex;\n114 |   justify-content: center;\n115 |   align-items: center;\n116 | }\n117 | .about-us__inner_details--autograph img {\n118 |   align-items: center;\n119 |   display: flex;\n120 | }`, \"\",{\"version\":3,\"sources\":[\"webpack://./src/style.scss\",\"webpack://./node_modules/@wordpress/base-styles/_variables.scss\",\"webpack://./node_modules/@wordpress/base-styles/_functions.scss\",\"webpack://./node_modules/@wordpress/base-styles/_colors.scss\"],\"names\":[],\"mappings\":\"AAAA;;;;EAAA;ACAA;;;;;;EAAA;ACAA;;;;;CAAA;ACEA;;EAAA;AFQA;;EAAA;AAeA;;;EAAA;AAiBA;;EAAA;AAsBA;;EAAA;AAOA;;EAAA;AAUA;;EAAA;AAkBA;;EAAA;AASA;;;EAAA;AAwBA;EACI,yBAAA;EACA,4CAAA;ADpFJ;ACsFE;EACE,gCAAA;EACA,4CAAA;ADpFJ;ACsFE;EACE,iCAAA;EACA,4CAAA;ADpFJ;ACsFE;EACE,8BAAA;EACA,4CAAA;ADpFJ;AAvDI;EACI,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;AAyDR;AAtDgB;EACI,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,2BAAA;EACA,kBAAA;EACA,uBAAA;AAwDpB;AArDY;EACI,sBAAA;AAuDhB;AAtDgB;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAwDpB;AArDY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAuDhB;AAtDgB;EACI,mBAAA;EACA,aAAA;AAwDpB\",\"sourcesContent\":[\"/**\\n * The following styles get applied inside the editor only.\\n *\\n * Replace them with your own styles or remove the file completely.\\n */\\n @import '../node_modules/@wordpress/base-styles/variables';\\n .about-us {\\n    &__inner {\\n        padding: 100px 0;\\n        display: flex;\\n        flex-wrap: wrap;\\n        justify-content: center;\\n        &_details {\\n            &--heading {\\n                h2 {\\n                    font-size: 30px;\\n                    line-height: 35px;\\n                    color: #191919;\\n                    font-family: \\\"Montserrat\\\";\\n                    font-weight: 550!important;\\n                    text-align: center;\\n                    justify-content: center;\\n                }\\n            }\\n            &--text {\\n                padding: 10px 0 40px 0;\\n                P {\\n                    font-size: 16px;\\n                    line-height: 21px;\\n                    text-align: center;\\n                    color: #787878;\\n                }\\n            }\\n            &--autograph {\\n                display: flex;\\n                justify-content: center;\\n                align-items: center;\\n                img {\\n                    align-items: center;\\n                    display: flex;\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"/**\\n * SCSS Variables.\\n *\\n * Please use variables from this sheet to ensure consistency across the UI.\\n * Don't add to this sheet unless you're pretty sure the value will be reused in many places.\\n * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.\\n */\\n\\n@import \\\"./colors\\\";\\n\\n/**\\n * Fonts & basic variables.\\n */\\n\\n$default-font: -apple-system, BlinkMacSystemFont,\\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell,\\\"Helvetica Neue\\\", sans-serif;\\n$default-font-size: 13px;\\n$default-line-height: 1.4;\\n$editor-html-font: Menlo, Consolas, monaco, monospace;\\n$editor-font-size: 16px;\\n$default-block-margin: 28px; // This value provides a consistent, contiguous spacing between blocks.\\n$text-editor-font-size: 15px;\\n$editor-line-height: 1.8;\\n$mobile-text-min-font-size: 16px; // Any font size below 16px will cause Mobile Safari to \\\"zoom in\\\".\\n\\n\\n/**\\n * Grid System.\\n * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/\\n */\\n\\n$grid-unit: 8px;\\n$grid-unit-05: 0.5 * $grid-unit;\\t// 4px\\n$grid-unit-10: 1 * $grid-unit;\\t\\t// 8px\\n$grid-unit-15: 1.5 * $grid-unit;\\t// 12px\\n$grid-unit-20: 2 * $grid-unit;\\t\\t// 16px\\n$grid-unit-30: 3 * $grid-unit;\\t\\t// 24px\\n$grid-unit-40: 4 * $grid-unit;\\t\\t// 32px\\n$grid-unit-50: 5 * $grid-unit;\\t\\t// 40px\\n$grid-unit-60: 6 * $grid-unit;\\t\\t// 48px\\n$grid-unit-70: 7 * $grid-unit;\\t\\t// 56px\\n$grid-unit-80: 8 * $grid-unit;\\t\\t// 64px\\n\\n/**\\n * Dimensions.\\n */\\n\\n$icon-size: 24px;\\n$button-size: 36px;\\n$button-size-next-default-40px: 40px; // transitionary variable for next default button size\\n$button-size-small: 24px;\\n$button-size-small-next-default-32px: 32px; // transitionary variable for next small button size\\n$header-height: 60px;\\n$panel-header-height: $grid-unit-60;\\n$nav-sidebar-width: 360px;\\n$admin-bar-height: 32px;\\n$admin-bar-height-big: 46px;\\n$admin-sidebar-width: 160px;\\n$admin-sidebar-width-big: 190px;\\n$admin-sidebar-width-collapsed: 36px;\\n$modal-min-width: 360px;\\n$spinner-size: 16px;\\n$canvas-padding: $grid-unit-30;\\n\\n\\n/**\\n * Shadows.\\n */\\n\\n$shadow-popover: 0 0.7px 1px rgba($black, 0.1), 0 1.2px 1.7px -0.2px rgba($black, 0.1), 0 2.3px 3.3px -0.5px rgba($black, 0.1);\\n$shadow-modal: 0 0.7px 1px rgba($black, 0.15), 0 2.7px 3.8px -0.2px rgba($black, 0.15), 0 5.5px 7.8px -0.3px rgba($black, 0.15), 0.1px 11.5px 16.4px -0.5px rgba($black, 0.15);\\n\\n/**\\n * Editor widths.\\n */\\n\\n$sidebar-width: 280px;\\n$content-width: 840px;\\n$wide-content-width: 1100px;\\n$widget-area-width: 700px;\\n\\n\\n/**\\n * Block & Editor UI.\\n */\\n\\n$block-toolbar-height: $grid-unit-60;\\n$border-width: 1px;\\n$border-width-focus-fallback: 2px; // This exists as a fallback, and is ideally overridden by var(--wp-admin-border-width-focus) unless in some SASS math cases.\\n$border-width-tab: 1.5px;\\n$helptext-font-size: 12px;\\n$radius-round: 50%;\\n$radius-block-ui: 2px;\\n$radio-input-size: 20px;\\n$radio-input-size-sm: 24px; // Width & height for small viewports.\\n\\n// Deprecated, please avoid using these.\\n$block-padding: 14px; // Used to define space between block footprint and surrouding borders.\\n\\n\\n/**\\n * Block paddings.\\n */\\n\\n// Padding for blocks with a background color (e.g. paragraph or group).\\n$block-bg-padding--v: 1.25em;\\n$block-bg-padding--h: 2.375em;\\n\\n\\n/**\\n * React Native specific.\\n * These variables do not appear to be used anywhere else.\\n */\\n\\n// Dimensions.\\n$mobile-header-toolbar-height: 44px;\\n$mobile-header-toolbar-expanded-height: 52px;\\n$mobile-floating-toolbar-height: 44px;\\n$mobile-floating-toolbar-margin: 8px;\\n$mobile-color-swatch: 48px;\\n\\n// Block UI.\\n$mobile-block-toolbar-height: 44px;\\n$dimmed-opacity: 1;\\n$block-edge-to-content: 16px;\\n$solid-border-space: 12px;\\n$dashed-border-space: 6px;\\n$block-selected-margin: 3px;\\n$block-selected-border-width: 1px;\\n$block-selected-padding: 0;\\n$block-selected-child-margin: 5px;\\n$block-selected-to-content: $block-edge-to-content - $block-selected-margin - $block-selected-border-width;\\n\\n@font-face {\\n    font-family:\\\"Montserrat\\\";\\n    src: url(../font/Montserrat-Regular.ttf);\\n  }\\n  @font-face {\\n    font-family:\\\"Montserrat-medium\\\";\\n    src: url(../font/Montserrat-Medium.ttf);\\n  }\\n  @font-face {\\n    font-family:\\\"NunitoSans-Regular\\\";\\n    src: url(../font/NunitoSans_7pt_Condensed-Regular.ttf);\\n  }\\n  @font-face {\\n    font-family:\\\"NunitoSans-Bold\\\";\\n    src: url(../font/NunitoSans_7pt_Condensed-Bold.ttf);\\n  }\\n  \\n  //media queries breck point\\n\\n  @mixin max-1199 {\\n    @media screen and (max-width: 1199px) {\\n      @content;\\n    }\\n  }\\n  \\n  @mixin max-991 {\\n    @media screen and (max-width: 991px) {\\n      @content;\\n    }\\n  }\\n  \\n  @mixin max-767 {\\n    @media screen and (max-width: 767px) {\\n      @content;\\n    }\\n  }\\n  \\n  @mixin max-575 {\\n    @media screen and (max-width: 575px) {\\n      @content;\\n    }\\n  }\\n  \\n  @mixin max-425 {\\n    @media screen and (max-width: 425px) {\\n      @content;\\n    }\\n  }\\n  \\n\\n\",\"/**\\n*  Converts a hex value into the rgb equivalent.\\n*\\n* @param {string} hex - the hexadecimal value to convert\\n* @return {string} comma separated rgb values\\n*/\\n@function hex-to-rgb($hex) {\\n\\t@return red($hex), green($hex), blue($hex);\\n}\\n\",\"@import \\\"./functions\\\";\\n\\n/**\\n * Colors\\n */\\n\\n// WordPress grays.\\n$black: #000;\\t\\t\\t// Use only when you truly need pure black. For UI, use $gray-900.\\n$gray-900: #1e1e1e;\\n$gray-800: #2f2f2f;\\n$gray-700: #757575;\\t\\t// Meets 4.6:1 text contrast against white.\\n$gray-600: #949494;\\t\\t// Meets 3:1 UI or large text contrast against white.\\n$gray-400: #ccc;\\n$gray-300: #ddd;\\t\\t// Used for most borders.\\n$gray-200: #e0e0e0;\\t\\t// Used sparingly for light borders.\\n$gray-100: #f0f0f0;\\t\\t// Used for light gray backgrounds.\\n$white: #fff;\\n\\n// Opacities & additional colors.\\n$dark-theme-focus: $white;\\t// Focus color when the theme is dark.\\n$dark-gray-placeholder: rgba($gray-900, 0.62);\\n$medium-gray-placeholder: rgba($gray-900, 0.55);\\n$light-gray-placeholder: rgba($white, 0.65);\\n\\n// Alert colors.\\n$alert-yellow: #f0b849;\\n$alert-red: #cc1818;\\n$alert-green: #4ab866;\\n\"],\"sourceRoot\":\"\"}]);\n121 | // Exports\n122 | /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n123 | ");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/about","version":"0.1.0","title":"About","category":"widgets","icon":"id","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"Heading":{"type":"string","source":"html","selector":"h2"},"Content01":{"type":"string","source":"html","selector":"p"},"buttonText":{"type":"string","source":"text","selector":"a.button"},"mediaID":{"type":"number","default":null},"mediaURL":{"type":"string","default":null}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map