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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/weather.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/weather.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n@media screen and (min-width: 0px) {\\n  #inputArea h1 {\\n    font-size: 2rem;\\n  }\\n  #inputArea input {\\n    margin: 1.5rem auto 0.5rem;\\n    font-size: 1.5rem;\\n    padding: 0.25rem 1rem;\\n    font-style: italic;\\n    border: none;\\n    width: 75vw;\\n    border-bottom: 1px solid;\\n  }\\n  #inputArea input:focus {\\n    outline: none;\\n    border-bottom: 2px solid;\\n  }\\n\\n  #cityProperties .weekdays {\\n    margin: 3rem auto;\\n    font-size: 1rem;\\n  }\\n  #cityProperties div > p {\\n    margin: 0.25rem 0.5rem;\\n    padding: 0.5rem 0.5rem;\\n  }\\n\\n  .cityImage {\\n    width: 1080px;\\n    height: 480px;\\n    align-items: flex-start;\\n  }\\n  .cityImage img {\\n    max-width: 100%;\\n    max-height: 100%;\\n  }\\n\\n  #visitedCities, #visitedCities1, #visitedCities2 {\\n    margin-top: 3rem;\\n  }\\n  #visitedCities ul, #visitedCities1 ul, #visitedCities2 ul {\\n    list-style-type: none;\\n  }\\n}\\n@media screen and (min-width: 576px) {\\n  #inputArea h1 {\\n    font-size: 3rem;\\n  }\\n  #inputArea input {\\n    margin-top: 3rem;\\n    font-size: 2rem;\\n    padding: 0.25rem 1rem;\\n    width: 50vw;\\n  }\\n\\n  #cityProperties {\\n    margin-top: 2rem;\\n  }\\n  #cityProperties .weekdays {\\n    margin: 3rem auto;\\n    font-size: 1rem;\\n  }\\n  #cityProperties div > p {\\n    margin: 0.25rem 1rem;\\n    padding: 0.5rem 1rem;\\n  }\\n}\\n@media screen and (min-width: 1200px) {\\n  #inputArea input {\\n    width: 30vw;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/css/weather.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/weather.scss":
/*!******************************!*\
  !*** ./src/css/weather.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./weather.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/weather.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/css/weather.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNSPLASH_API_KEY\": () => (/* binding */ UNSPLASH_API_KEY),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst APIkey = \"c863e7658bfbe95e2049298afb62ccf5\";\r\nconst UNSPLASH_API_KEY = \"zUnlwOKlnWPBpz-PSowV3LpEUF5wuAkQ6HkssOpmaJQ\";\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIkey);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/config.js?");

/***/ }),

/***/ "./src/fetch-image.js":
/*!****************************!*\
  !*** ./src/fetch-image.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\r\n\r\nconst fetchCityImage = async (cityName) => {\r\n    const url = \"https://api.unsplash.com/search/photos?query=\" + cityName + \"&client_id=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__.UNSPLASH_API_KEY;\r\n    const getImage = await fetch(url).then(response => response.json());\r\n    const image = getImage.results[0].urls.regular;\r\n    return image;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCityImage);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/fetch-image.js?");

/***/ }),

/***/ "./src/fetch-temperatures.js":
/*!***********************************!*\
  !*** ./src/fetch-temperatures.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\r\n\r\nconst fetchCityTemperature5Days = async (cityName) => {\r\n    const apiString5Days = \"https://api.openweathermap.org/data/2.5/forecast?q=\" + cityName + \"&cnt=40&units=metric&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    const response5Days = await fetch(apiString5Days).then(response => response.json());\r\n\r\n    if(response5Days.city == undefined) {\r\n        showCityName.textContent = \"City not found\";\r\n        return;\r\n    }\r\n\r\n    const responseCityName = response5Days.city.name;\r\n\r\n    const weatherDescription = [\r\n        response5Days.list[0].weather[0].main,\r\n        response5Days.list[8].weather[0].main,\r\n        response5Days.list[16].weather[0].main,\r\n        response5Days.list[24].weather[0].main,\r\n        response5Days.list[32].weather[0].main,\r\n        response5Days.list[39].weather[0].main,\r\n    ];\r\n\r\n    const responseTemperatureValues = [\r\n        response5Days.list[0].main.temp,\r\n        response5Days.list[8].main.temp,\r\n        response5Days.list[16].main.temp,\r\n        response5Days.list[24].main.temp,\r\n        response5Days.list[32].main.temp,\r\n        response5Days.list[39].main.temp,\r\n    ];\r\n\r\n    return { responseCityName, weatherDescription, responseTemperatureValues };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCityTemperature5Days);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/fetch-temperatures.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myChart\": () => (/* binding */ myChart),\n/* harmony export */   \"drawGraph\": () => (/* binding */ drawGraph),\n/* harmony export */   \"createGraphWithValues\": () => (/* binding */ createGraphWithValues)\n/* harmony export */ });\n/* harmony import */ var _set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-day-descr-temps.js */ \"./src/set-day-descr-temps.js\");\n\r\n\r\nlet myChart = null;\r\n\r\n// Get todays day\r\nconst todaysDate = new Date().getDay();\r\n\r\nconst drawGraph = (dayLabels, temperatureData) => {\r\n    const ctx = document.getElementById(\"myChart\").getContext(\"2d\");\r\n\r\n    if(myChart != null) {\r\n        myChart.destroy();\r\n    }\r\n\r\n    myChart = new Chart(ctx, {\r\n      type: \"line\",\r\n      data: {\r\n        labels: dayLabels,\r\n        datasets: [\r\n          {\r\n            label: \"Temperature\",\r\n            data: temperatureData,\r\n            backgroundColor: \"rgba(255, 99, 132, 0.2)\",\r\n            borderColor: \"rgba(255, 99, 132, 1)\",\r\n            borderWidth: 2,\r\n            fill: false,\r\n            tension: 0.1,\r\n          },\r\n        ],\r\n      },\r\n      options: {\r\n        scales: {\r\n          y: {\r\n            beginAtZero: true,\r\n          },\r\n        },\r\n      },\r\n    });\r\n};\r\n\r\nconst createGraphWithValues = (responseTemperatureValues) => {\r\n  const temperatures = (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__.setTemperatureOfDays)(responseTemperatureValues);\r\n  const dayLabels = (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__.setDayNames)(todaysDate);\r\n  dayLabels.pop();\r\n\r\n  drawGraph(dayLabels, temperatures);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.js */ \"./src/graph.js\");\n/* harmony import */ var _set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-day-descr-temps.js */ \"./src/set-day-descr-temps.js\");\n/* harmony import */ var _visited_cities_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visited-cities-functions.js */ \"./src/visited-cities-functions.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\n/* harmony import */ var _fetch_temperatures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-temperatures.js */ \"./src/fetch-temperatures.js\");\n/* harmony import */ var _fetch_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-image.js */ \"./src/fetch-image.js\");\n/* harmony import */ var _css_weather_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/weather.scss */ \"./src/css/weather.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst capitalizeFirstLetter = (string) => {\r\n    return string.charAt(0).toUpperCase() + string.slice(1);\r\n};\r\n\r\nconst resetCityValues = () => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityProperties.children[1].innerHTML = \"-\";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityProperties.children[2].innerHTML = \"-\";\r\n\r\n    for(let j = 1; j < 3; j++) {\r\n        for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_3__.dayNamesOfWeek.children.length; i++) {\r\n            _variables_js__WEBPACK_IMPORTED_MODULE_3__.dayNamesOfWeek.children[i].children[j].innerHTML = \"-\";\r\n        }\r\n    }\r\n\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityImage.src = \"\";\r\n};\r\n\r\nconst executeInput = () => {\r\n    let inputValue = capitalizeFirstLetter(_variables_js__WEBPACK_IMPORTED_MODULE_3__.cityNameInput.value);\r\n    let fetchCity = (0,_fetch_temperatures_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inputValue);\r\n    (0,_fetch_image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(inputValue).then(image => _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityImage.src = image);\r\n\r\n    fetchCity.then(cityObject => (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_1__.setCityProperties)(cityObject.responseCityName, cityObject.responseTemperatureValues, cityObject.weatherDescription));\r\n    fetchCity.then(cityObject => (0,_graph_js__WEBPACK_IMPORTED_MODULE_0__.createGraphWithValues)(cityObject.responseTemperatureValues));\r\n    fetchCity.then(cityObject => (0,_visited_cities_functions_js__WEBPACK_IMPORTED_MODULE_2__.showVisitedCities)(cityObject.responseCityName));\r\n};\r\n\r\n\r\n\r\n// Events\r\n_variables_js__WEBPACK_IMPORTED_MODULE_3__.cityNameInput.addEventListener('keyup', (event) => {\r\n    resetCityValues();\r\n    \r\n    if(_graph_js__WEBPACK_IMPORTED_MODULE_0__.myChart != null)\r\n    _graph_js__WEBPACK_IMPORTED_MODULE_0__.myChart.destroy();\r\n    \r\n    if(event.key == \"Enter\") {\r\n        executeInput();\r\n    }\r\n});\r\n\r\n_variables_js__WEBPACK_IMPORTED_MODULE_3__.submitBtn.addEventListener('click', () => {\r\n    executeInput();\r\n});\r\n\r\nconsole.log(\"I am using WEBPACK now for my scripts!\");\r\nconsole.log(\"OMG I can't believe it!!!\");\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/index.js?");

/***/ }),

/***/ "./src/set-day-descr-temps.js":
/*!************************************!*\
  !*** ./src/set-day-descr-temps.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDayNames\": () => (/* binding */ setDayNames),\n/* harmony export */   \"setTemperatureOfDays\": () => (/* binding */ setTemperatureOfDays),\n/* harmony export */   \"setWeatherDescriptionOfDays\": () => (/* binding */ setWeatherDescriptionOfDays),\n/* harmony export */   \"setCityProperties\": () => (/* binding */ setCityProperties)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\n\r\n\r\nconst setDayNames = (today) => {\r\n    let daysOfWeek = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n\r\n    // Rearrange the array\r\n    while(today != 0) {\r\n        let day = daysOfWeek.shift();\r\n        daysOfWeek.push(day);\r\n        today--;\r\n    }\r\n\r\n    // Show correct day names on page\r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[0].innerHTML = daysOfWeek[i + 1];\r\n    }\r\n\r\n    return daysOfWeek;\r\n};\r\n\r\nconst setTemperatureOfDays = (temperatureData) => {\r\n    let temperatures = [];\r\n    \r\n    const todaysTemperature = Math.round(temperatureData[0]);\r\n    temperatures.push(todaysTemperature);\r\n\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.cityProperties.children[2].innerHTML = todaysTemperature + \"°\";\r\n    \r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[2].innerHTML = Math.round(temperatureData[i + 1]) + \"°\";\r\n        temperatures.push(Math.round(temperatureData[i + 1]));\r\n    }\r\n\r\n    return temperatures;\r\n};\r\n\r\nconst setWeatherDescriptionOfDays = (weatherDescription) => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.cityProperties.children[1].innerHTML = weatherDescription[0];\r\n\r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[1].innerHTML = weatherDescription[i + 1];\r\n    }\r\n};\r\n\r\nconst setCityProperties = (responseCityName, responseTemperatureValues, weatherDescription) => {\r\n    // Set all the weekdays in app correctly according to day\r\n    setDayNames(_variables_js__WEBPACK_IMPORTED_MODULE_0__.todaysDate);\r\n\r\n    // Show city name on top\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.showCityName.textContent = responseCityName;\r\n\r\n    // Show temperature for all days\r\n    setTemperatureOfDays(responseTemperatureValues);\r\n\r\n    // Show sky description for all days\r\n    setWeatherDescriptionOfDays(weatherDescription);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/set-day-descr-temps.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityNameInput\": () => (/* binding */ cityNameInput),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn),\n/* harmony export */   \"cityProperties\": () => (/* binding */ cityProperties),\n/* harmony export */   \"dayNamesOfWeek\": () => (/* binding */ dayNamesOfWeek),\n/* harmony export */   \"showCityName\": () => (/* binding */ showCityName),\n/* harmony export */   \"cityImage\": () => (/* binding */ cityImage),\n/* harmony export */   \"todaysDate\": () => (/* binding */ todaysDate)\n/* harmony export */ });\nconst cityNameInput = document.getElementById('inputField');\r\nconst submitBtn = document.getElementById('submit');\r\nconst cityProperties = document.getElementById('cityProperties');\r\nconst dayNamesOfWeek = document.getElementById('daysOfWeek');\r\nconst showCityName = document.getElementById('inputArea').children[0];\r\nconst cityImage = document.getElementById('cityImg');\r\n\r\n// Get todays day\r\nconst todaysDate = new Date().getDay();\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/variables.js?");

/***/ }),

/***/ "./src/visited-cities-functions.js":
/*!*****************************************!*\
  !*** ./src/visited-cities-functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showVisitedCities\": () => (/* binding */ showVisitedCities)\n/* harmony export */ });\n// Global because it'll keep the city names as long as the app is running\r\nlet visitedCities = [];\r\n\r\nconst createVisitedCitiesListItem = (visitedCities) => {\r\n    const list = document.getElementById('visitedCities').children[1];\r\n    \r\n    // Remove all list items\r\n    let child = list.lastElementChild;\r\n\r\n    while(child) { \r\n        list.removeChild(child); \r\n        child = list.lastElementChild; \r\n    }\r\n\r\n    // Update list with unique cities\r\n    visitedCities.forEach(city => {\r\n        let listItem = document.createElement('li');\r\n        listItem.appendChild(document.createTextNode(city));\r\n        list.appendChild(listItem);\r\n    });\r\n};\r\n\r\nconst showVisitedCities = (responseCityName) => {\r\n    visitedCities.push(responseCityName);\r\n    visitedCities = visitedCities.filter((value, index, city) => city.indexOf(value) === index);\r\n\r\n    createVisitedCitiesListItem(visitedCities);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/visited-cities-functions.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;