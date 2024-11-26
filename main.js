/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/caviardreams-webfont.woff */ \"./src/fonts/caviardreams-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: Caviar;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  }\n\n\n  ul{\n    list-style-type: none;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n\n.side-nav{\n    position: sticky;\n    top: 0;\n    height: 100vh;\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\nnav{\n    display: grid;\n}\n\nbutton{\n    background-color: none;\n    font-family: Caviar;\n}\n\n.logo-section{\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    justify-items: center;\n}\n\n\n.logo-image{\n    width: 200px;\n    height: auto;\n}\n\n.logo-text{\n    text-align: center;\n    font-family: Caviar;\n}\n\n\n.home-food-photo{\n    height: 100%;\n    width: 100%;\n}\n\n.home-photo-container{\n    height: 100vh;\n}\n\n.about-section{\n    font-family: Caviar;\n    font-size: 20px;\n    padding: 150px 0;\n    width: 50vw;\n    line-height: 1.8;\n    text-align: center;\n}\n\n.home-container{\n    display: grid;\n    justify-items: center;\n}\n\n.hours-section{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hours-text{\n    font-family: Caviar;\n    font-size: 20px;\n    line-height: 1.8;\n    \n}\n\n.hours-photo{\n    height: 100%;\n    width: 100%;\n}\n\n.map-container{\n    padding: 200px 0;\n    display: grid;\n    gap: 50px;\n}\n\n.map-title{\n    font-family: Caviar;\n    font-size: 40px;\n    text-align: center;\n}\n\n.menu-section{\n    text-align: center;\n    display: grid;\n    gap: 20px;\n    padding: 20px 0;\n    line-height: 1.8;\n    font-family: Caviar;\n}\n\n.dish-section{\n    margin: 20px;\n}\n\n.reservation-section{\n    text-align: center;\n    font-family: Caviar;\n    margin: 100px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home-content.js":
/*!*****************************!*\
  !*** ./src/home-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeContent: () => (/* binding */ homeContent)\n/* harmony export */ });\n/* harmony import */ var _bubur_ayam_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubur-ayam.jpg */ \"./src/bubur-ayam.jpg\");\n/* harmony import */ var _pangsit_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pangsit.jpg */ \"./src/pangsit.jpg\");\n\n\n\n\nconst firstSection = document.createElement(\"div\");\nfirstSection.setAttribute(\"class\", \"first-section\");\n\n\n\n\nconst foodPhotoOne = document.createElement(\"img\");\nfoodPhotoOne.src = _bubur_ayam_jpg__WEBPACK_IMPORTED_MODULE_0__;\nfoodPhotoOne.setAttribute(\"class\", \"home-food-photo\");\n\n\nconst homePhotoContainer = document.createElement(\"div\");\nhomePhotoContainer.appendChild(foodPhotoOne);\nhomePhotoContainer.setAttribute(\"class\", \"home-photo-container\");\n\n\nfirstSection.appendChild(homePhotoContainer);\n\n\nconst aboutSection = document.createElement(\"div\");\naboutSection.setAttribute(\"class\", \"about-section\");\n\nconst aboutText = document.createElement(\"p\");\naboutText.textContent = \"Welcome to Rasa, where the vibrant flavors of Indonesia come to life! At Rasa, we take pride in offering an authentic taste of Indonesia, bringing together traditional recipes passed down through generations and fresh, locally-sourced ingredients. Our menu showcases a rich array of bold, aromatic dishes—from savory rendang and fragrant nasi goreng to crispy tempeh and spicy sambals—that will transport your senses straight to the heart of Southeast Asia. Whether you're new to Indonesian cuisine or a seasoned fan, Rasa promises an unforgettable dining experience filled with warmth, flavor, and the spirit of Indonesian hospitality. Join us and discover the true essence of Rasa—where every bite tells a story.\"\n\naboutSection.appendChild(aboutText);\n\nconst hoursSection = document.createElement(\"div\");\nhoursSection.setAttribute(\"class\", \"hours-section\");\n\n\nconst hoursPhoto = document.createElement(\"img\");\nhoursPhoto.src = _pangsit_jpg__WEBPACK_IMPORTED_MODULE_1__;\nhoursPhoto.setAttribute(\"class\", \"hours-photo\");\n\n\nconst hoursPhotoContainer = document.createElement(\"div\");\nhoursPhotoContainer.appendChild(hoursPhoto);\nhoursPhotoContainer.setAttribute(\"class\", \"hours-photo-container\");\n\nhoursSection.appendChild(hoursPhotoContainer)\n\nconst hoursText = document.createElement(\"div\");\nhoursText.setAttribute(\"class\", \"hours-text\");\n\nconst hoursTitle = document.createElement(\"p\");\nhoursTitle.textContent = \"HOURS\";\n\nhoursText.appendChild(hoursTitle);\n\nconst hoursList = document.createElement(\"ul\");\n\nconst hours = [\"Monday - Friday: 4pm to 10pm\", \"Saturday - Sunday: 5pm to 1am\"];\n\nhours.forEach(hour => {\n    const item = document.createElement(\"li\");\n    const textNode = document.createTextNode(hour);\n    item.appendChild(textNode);\n    hoursList.appendChild(item);\n});\n\nhoursText.appendChild(hoursList);\n\nhoursSection.appendChild(hoursText);\n\nconst mapContainer = document.createElement(\"div\");\nmapContainer.setAttribute(\"class\", \"map-container\");\n\nconst mapTitle = document.createElement(\"p\");\nmapTitle.setAttribute(\"class\", \"map-title\");\nmapTitle.textContent = \"FIND US\"\n\nmapContainer.appendChild(mapTitle);\n\nconst map = document.createElement(\"iframe\");\n\nmap.width = \"800\"\nmap.height = \"400\"\nmap.src = \"https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8\"\n\nmapContainer.appendChild(map);\n\n// const footerSection = document.createElement(\"div\");\n// footerSection.textContent = \"© 2024 Rasa All Rights Reserved\"\n// footerSection.setAttribute(\"class\", \"footer-section\");\n\n\nconst homeContent = document.createElement(\"div\");\nhomeContent.setAttribute(\"class\", \"home-container\");\n\nhomeContent.appendChild(firstSection)\nhomeContent.appendChild(aboutSection)\nhomeContent.appendChild(hoursSection)\nhomeContent.appendChild(mapContainer);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-content.js */ \"./src/home-content.js\");\n/* harmony import */ var _menu_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-content.js */ \"./src/menu-content.js\");\n/* harmony import */ var _reservation_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-content.js */ \"./src/reservation-content.js\");\n/* harmony import */ var _rasa_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rasa-logo.png */ \"./src/rasa-logo.png\");\n\n\n\n\n\n\n\n\n\nconst logo = document.createElement(\"img\");\nlogo.src = _rasa_logo_png__WEBPACK_IMPORTED_MODULE_4__;\nlogo.setAttribute(\"class\", \"logo-image\");\n\nconst logoText = document.createElement(\"h1\");\nlogoText.setAttribute(\"class\", \"logo-text\");\nlogoText.textContent = \"Indonesian Cuisine\";\n\nconst logoSection = document.createElement(\"div\");\nlogoSection.setAttribute(\"class\", \"logo-section\");\nlogoSection.appendChild(logo);\nlogoSection.appendChild(logoText);\n\nconst sideNav = document.querySelector(\".side-nav\");\nsideNav.appendChild(logoSection);\n\n\nconst contentElement = document.querySelector(\"#content\");\n\ncontentElement.appendChild(_home_content_js__WEBPACK_IMPORTED_MODULE_1__.homeContent);\n\nconst homeButton = document.querySelector(\"#home-button\");\n\nhomeButton.addEventListener(\"click\", () => {\n    contentElement.replaceChildren();\n    contentElement.appendChild(_home_content_js__WEBPACK_IMPORTED_MODULE_1__.homeContent);\n})\n\nconst menuButton = document.querySelector(\"#menu-button\");\n\nmenuButton.addEventListener(\"click\", () => {\n    contentElement.replaceChildren();\n    contentElement.appendChild(_menu_content_js__WEBPACK_IMPORTED_MODULE_2__.menuContent);\n})\n\nconst reservationButton = document.querySelector(\"#reservation-button\");\n\nreservationButton.addEventListener(\"click\", () => {\n    contentElement.replaceChildren();\n    contentElement.appendChild(_reservation_content_js__WEBPACK_IMPORTED_MODULE_3__.reservationContent);\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-content.js":
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuContent: () => (/* binding */ menuContent)\n/* harmony export */ });\nconst menuContent = document.createElement(\"div\");\nmenuContent.setAttribute(\"class\", \"menu-section\");\n\n\nconst appetizerSection = document.createElement(\"div\");\nconst mainDishesSection = document.createElement(\"div\");\nconst dessertSection = document.createElement(\"div\");\nconst drinkSection = document.createElement(\"div\");\n\n\n\nconst appetizers = [\n    {\n        \"name\": \"Gado-Gado\",\n        \"description\": \"Indonesian salad with fresh vegetables, boiled eggs, tofu, tempeh, and a rich peanut sauce.\",\n        \"price\": \"$8.50\"\n    },\n    {\n        \"name\": \"Pisang Goreng\",\n        \"description\": \"Fried bananas coated in batter and deep-fried to crispy perfection.\",\n        \"price\": \"$6.00\"\n    },\n    {\n        \"name\": \"Sate Ayam\",\n        \"description\": \"Skewered grilled chicken served with a savory peanut dipping sauce.\",\n        \"price\": \"$9.00\"\n    },\n    {\n        \"name\": \"Pempek\",\n        \"description\": \"Traditional Palembang fish cake served with vinegar-based sweet and spicy sauce.\",\n        \"price\": \"$7.50\"\n    }\n]\n\nconst mainDishes = [\n      {\n        \"name\": \"Nasi Goreng\",\n        \"description\": \"Indonesian fried rice stir-fried with vegetables, eggs, and your choice of chicken or shrimp, topped with a fried egg.\",\n        \"price\": \"$12.50\",\n        \"addOns\": [\n          { \"item\": \"Chicken\", \"price\": \"$2.00\" },\n          { \"item\": \"Shrimp\", \"price\": \"$3.00\" }\n        ]\n      },\n      {\n        \"name\": \"Mie Goreng\",\n        \"description\": \"Indonesian fried noodles stir-fried with vegetables, eggs, and your choice of chicken or shrimp.\",\n        \"price\": \"$13.00\",\n        \"addOns\": [\n          { \"item\": \"Chicken\", \"price\": \"$2.00\" },\n          { \"item\": \"Shrimp\", \"price\": \"$3.00\" }\n        ]\n      },\n      {\n        \"name\": \"Rendang\",\n        \"description\": \"Slow-cooked beef in a rich and spicy coconut milk-based sauce, served with steamed rice.\",\n        \"price\": \"$16.00\"\n      },\n      {\n        \"name\": \"Ayam Penyet\",\n        \"description\": \"Smashed fried chicken served with sambal, fried tofu, tempeh, and steamed rice.\",\n        \"price\": \"$14.00\"\n      },\n      {\n        \"name\": \"Nasi Uduk\",\n        \"description\": \"Fragrant coconut rice served with fried chicken, sambal, fried tempeh, and peanuts.\",\n        \"price\": \"$14.50\"\n      },\n      {\n        \"name\": \"Tahu Tempe Penyet\",\n        \"description\": \"Smashed fried tofu and tempeh served with sambal, vegetables, and steamed rice.\",\n        \"price\": \"$12.00\"\n      },\n      {\n        \"name\": \"Sayur Lodeh\",\n        \"description\": \"A hearty vegetable soup made with tofu, tempeh, and mixed vegetables in a coconut milk broth.\",\n        \"price\": \"$10.50\"\n      },\n      {\n        \"name\": \"Nasi Goreng Vegetarian\",\n        \"description\": \"Vegetable stir-fried rice with tofu, tempeh, and a fried egg on top.\",\n        \"price\": \"$11.00\"\n      }\n    ]\n\nconst desserts = [\n        {\n          \"name\": \"Klepon\",\n          \"description\": \"Sweet glutinous rice balls filled with palm sugar and rolled in grated coconut.\",\n          \"price\": \"$5.00\"\n        },\n        {\n          \"name\": \"Es Cendol\",\n          \"description\": \"Traditional Indonesian dessert with green jelly noodles, coconut milk, palm sugar syrup, and shaved ice.\",\n          \"price\": \"$6.50\"\n        },\n        {\n          \"name\": \"Dadar Gulung\",\n          \"description\": \"Green pancake rolled with sweet coconut and brown sugar filling.\",\n          \"price\": \"$5.50\"\n        },\n        {\n          \"name\": \"Lapis Legit\",\n          \"description\": \"Layered spice cake made with butter, eggs, and a blend of Indonesian spices.\",\n          \"price\": \"$6.00\"\n        },\n        {\n          \"name\": \"Roti Bakar\",\n          \"description\": \"Grilled bread with chocolate, cheese, and sweet condensed milk.\",\n          \"price\": \"$4.50\"\n        }\n      ]\n\nconst drinks = [\n    {\n      \"name\": \"Teh Botol\",\n      \"description\": \"Indonesian sweetened iced tea.\",\n      \"price\": \"$3.50\"\n    },\n    {\n      \"name\": \"Es Kelapa Muda\",\n      \"description\": \"Fresh young coconut water served chilled.\",\n      \"price\": \"$4.00\"\n    },\n    {\n      \"name\": \"Kopi Bali\",\n      \"description\": \"Traditional Indonesian coffee brewed to perfection.\",\n      \"price\": \"$4.50\"\n    },\n    {\n      \"name\": \"Bandrek\",\n      \"description\": \"A warm, sweet, and spicy traditional Indonesian drink made with ginger, palm sugar, and spices.\",\n      \"price\": \"$3.00\"\n    },\n    {\n      \"name\": \"Jus Mangga\",\n      \"description\": \"Fresh mango juice, served chilled.\",\n      \"price\": \"$4.00\"\n    }\n  ]\n\nfunction addFood(array, name, container){\n\n    const sectionTitle = document.createElement(\"h3\");\n    sectionTitle.textContent = name;\n\n    container.appendChild(sectionTitle);\n\n    array.forEach(element => {\n    \n        const food = document.createElement(\"div\");\n        food.setAttribute(\"class\", \"dish-section\");\n\n    \n        const foodName = document.createElement(\"p\");\n        const foodDescription = document.createElement(\"p\");\n        const foodPrice = document.createElement(\"p\");\n    \n        foodName.textContent = element.name;\n        foodDescription.textContent = element.description;\n        foodPrice.textContent = element.price;\n    \n        food.appendChild(foodName);\n        food.appendChild(foodDescription);\n        food.appendChild(foodPrice);\n    \n        container.appendChild(food);\n    \n    })\n}\n\naddFood(appetizers, \"APPETIZER\", appetizerSection);\naddFood(mainDishes, \"MAIN DISHES\", mainDishesSection);\naddFood(desserts, \"DESSERT\", dessertSection);\naddFood(drinks, \"DRINKS\", drinkSection);\n\n\n\nmenuContent.appendChild(appetizerSection)\nmenuContent.appendChild(mainDishesSection)\nmenuContent.appendChild(dessertSection)\nmenuContent.appendChild(drinkSection)\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-content.js?");

/***/ }),

/***/ "./src/reservation-content.js":
/*!************************************!*\
  !*** ./src/reservation-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reservationContent: () => (/* binding */ reservationContent)\n/* harmony export */ });\nconst reservationContent = document.createElement(\"p\");\nreservationContent.setAttribute(\"class\", \"reservation-section\");\n\nreservationContent.textContent = \"To make reservations, please contact +1 555 879 0011\"\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/reservation-content.js?");

/***/ }),

/***/ "./src/bubur-ayam.jpg":
/*!****************************!*\
  !*** ./src/bubur-ayam.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7ddda12120b6bbc1f93.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/bubur-ayam.jpg?");

/***/ }),

/***/ "./src/fonts/caviardreams-webfont.woff":
/*!*********************************************!*\
  !*** ./src/fonts/caviardreams-webfont.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f761e885dc1715475d29.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/caviardreams-webfont.woff?");

/***/ }),

/***/ "./src/pangsit.jpg":
/*!*************************!*\
  !*** ./src/pangsit.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"714e381d8a4bbc0540cc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pangsit.jpg?");

/***/ }),

/***/ "./src/rasa-logo.png":
/*!***************************!*\
  !*** ./src/rasa-logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"041db35ec3aaf9ed69e2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/rasa-logo.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;