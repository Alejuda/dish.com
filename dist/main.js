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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300;400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: system-ui, sans-serif;\\r\\n  background-color: #2d2e32;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  width: 100%;\\r\\n  height: 85px;\\r\\n  display: flex;\\r\\n  flex-direction: row-reverse;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-bottom: 10px;\\r\\n  border-bottom: 1.5px solid white;\\r\\n  order: 0;\\r\\n}\\r\\n\\r\\n.itemsCounter {\\r\\n  margin-top: 20px;\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  margin-top: 5px;\\r\\n  height: 1.5px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  height: 90%;\\r\\n  width: 170px;\\r\\n  border-radius: 70%;\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\n.navBar {\\r\\n  width: 300px;\\r\\n  margin-right: 40px;\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  font-size: 22px;\\r\\n  background-color: #2d2e32;\\r\\n}\\r\\n\\r\\n.list,\\r\\n.contact,\\r\\n.search {\\r\\n  border-bottom: 2px solid transparent;\\r\\n  transition: all 200ms;\\r\\n}\\r\\n\\r\\n.list:hover,\\r\\n.search:hover,\\r\\n.contact:hover {\\r\\n  cursor: pointer;\\r\\n  border-bottom: 2px solid white;\\r\\n}\\r\\n\\r\\nform {\\r\\n  margin-left: 30px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\noption,\\r\\nselect {\\r\\n  background-color: transparent;\\r\\n  font-weight: 600;\\r\\n  padding: 5px 10px;\\r\\n  border: 2px solid white;\\r\\n  font-size: 15px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\noption {\\r\\n  background-color: #2d2e32;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  background-color: transparent;\\r\\n  margin-left: 10px;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px 10px;\\r\\n  border: 2px solid white;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.submit:hover {\\r\\n  background-color: #2d2e32;\\r\\n  cursor: pointer;\\r\\n  border: 1.5px solid white;\\r\\n}\\r\\n\\r\\n.displayDiv {\\r\\n  width: 98.5%;\\r\\n  flex-wrap: wrap;\\r\\n  margin: 30px auto 30px auto;\\r\\n  padding-top: 10px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: stretch;\\r\\n  gap: 40px;\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  width: 280px;\\r\\n  height: 280px;\\r\\n  background-color: rgba(170, 170, 170, 0.267);\\r\\n  border-radius: 50%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  column-gap: 15px;\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n.mealPhoto {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.mealName {\\r\\n  /* background-color: rgba(170, 170, 170, 0.267); */\\r\\n  border-radius: 5px;\\r\\n  padding: 5px 20px;\\r\\n  max-width: 300px;\\r\\n  text-align: center;\\r\\n  margin-top: 15px;\\r\\n  font-size: 22px;\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\n.footerLine {\\r\\n  width: 100%;\\r\\n  height: 1px;\\r\\n  margin-bottom: 5px;\\r\\n  background: white;\\r\\n  order: 2;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  border-top: 1px solid white;\\r\\n  font-size: 30px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  order: 3;\\r\\n}\\r\\n\\r\\n.pop-up-container {\\r\\n  position: fixed;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: none;\\r\\n  place-content: center;\\r\\n  padding: 20px;\\r\\n  top: 0;\\r\\n  backdrop-filter: blur(3px);\\r\\n  background-color: rgba(165, 165, 165, 0.342);\\r\\n  z-index: 1000;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  position: relative;\\r\\n  width: 70%;\\r\\n  max-width: 900px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-radius: 6px;\\r\\n  border: 2px solid white;\\r\\n  padding: 50px;\\r\\n  overflow-x: hidden;\\r\\n  overflow-y: auto;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.dish-img {\\r\\n  width: 400px;\\r\\n  height: 200px;\\r\\n  overflow: hidden;\\r\\n  object-fit: cover;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.dish-title {\\r\\n  font-size: 28px;\\r\\n  text-align: center;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  position: absolute;\\r\\n  right: 15px;\\r\\n  top: 15px;\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.close-btn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.category-container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  gap: 50px;\\r\\n  align-items: center;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.dish-tags {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.tag-description {\\r\\n  padding: 5px 10px;\\r\\n  background-color: rgba(165, 165, 165, 0.493);\\r\\n  border-radius: 4px;\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n.dish-title,\\r\\n.category,\\r\\n.see-recipe > i,\\r\\n.see-recipe > i > a,\\r\\n.popup-header,\\r\\n.comment-description {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.see-recipe > i,\\r\\n.see-recipe > i > a {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  background-color: rgba(165, 165, 165, 0.293);\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.comment-description {\\r\\n  background-color: transparent;\\r\\n  font-size: 18px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.commit-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 10px;\\r\\n  align-items: stretch;\\r\\n  width: 80%;\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.input-control {\\r\\n  background-color: transparent;\\r\\n  color: white;\\r\\n  border: 2px solid white;\\r\\n  padding: 7px 15px;\\r\\n  border-radius: 4px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.input-control::placeholder {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.commit-input {\\r\\n  resize: none;\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.add-comment-btn {\\r\\n  font-size: 18px;\\r\\n  border-radius: 4px;\\r\\n  background-color: transparent;\\r\\n  border: 2px solid white;\\r\\n  color: white;\\r\\n  padding: 5px 10px;\\r\\n}\\r\\n\\r\\n.add-comment-btn:hover {\\r\\n  background-color: rgba(170, 170, 170, 0.17);\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  background-color: rgba(170, 170, 170, 0.267);\\r\\n  margin-top: 15px;\\r\\n  padding: 5px 7px;\\r\\n  font-size: 20px;\\r\\n  border-radius: 5px;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.comment:hover {\\r\\n  background-color: rgba(170, 170, 170, 0.17);\\r\\n}\\r\\n\\r\\n#comments-number {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  margin-left: 10px;\\r\\n  width: 35px;\\r\\n  height: 35px;\\r\\n  border-radius: 10px;\\r\\n  position: relative;\\r\\n  left: 70px;\\r\\n  top: -38px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.elementLikes {\\r\\n  margin-top: -30px;\\r\\n  margin-bottom: 20px;\\r\\n  font-size: 20px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.section-container {\\r\\n  order: 1;\\r\\n  border: 1px solid white;\\r\\n  font-size: 16px;\\r\\n  padding: 3em 2.8em;\\r\\n  width: 90vw;\\r\\n  max-width: 32em;\\r\\n  position: relative;\\r\\n  margin: auto;\\r\\n  border-radius: 0.6em;\\r\\n  margin-top: 12%;\\r\\n}\\r\\n\\r\\n.search-container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 9fr 3fr;\\r\\n  gap: 1.2em;\\r\\n}\\r\\n\\r\\n.search-container input {\\r\\n  font-size: 1em;\\r\\n  padding: 0.6em;\\r\\n  outline: none;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.search-container button {\\r\\n  font-size: 1em;\\r\\n  font-weight: 600;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.search-img {\\r\\n  display: block;\\r\\n  width: 50%;\\r\\n  margin: 1.8em auto 0 auto;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  position: relative;\\r\\n  margin: -4.3em 0 0 0;\\r\\n  text-align: center;\\r\\n  padding: 0.6em 0;\\r\\n}\\r\\n\\r\\n.details h2 {\\r\\n  font-size: 1.2em;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.details h4 {\\r\\n  font-size: 1em;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n#show-recipe {\\r\\n  font-size: 1em;\\r\\n  position: relative;\\r\\n  left: 75%;\\r\\n  padding: 0.9em 0.6em;\\r\\n  cursor: pointer;\\r\\n  border: 1px solid white;\\r\\n  top: 1.5em;\\r\\n  border-radius: 0.3em;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#recipe {\\r\\n  position: absolute;\\r\\n  background-color: #fff;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 2;\\r\\n  border-radius: 0.6em;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#recipe pre {\\r\\n  white-space: pre-wrap;\\r\\n  word-wrap: break-word;\\r\\n  padding: 2.5em 1.2em 1.2em 1.2em;\\r\\n  font-size: 0.92em;\\r\\n  border: 1px solid white;\\r\\n  line-height: 30px;\\r\\n}\\r\\n\\r\\n#hide-recipe {\\r\\n  font-size: 1em;\\r\\n  position: relative;\\r\\n  width: 1.8em;\\r\\n  height: 1.8em;\\r\\n  cursor: pointer;\\r\\n  border: 1px solid white;\\r\\n  top: 1.2em;\\r\\n  left: 90%;\\r\\n  border-radius: 0.3em;\\r\\n}\\r\\n\\r\\nul {\\r\\n  font-size: 1em;\\r\\n  position: relative;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  gap: 0.8em 1.1em;\\r\\n  padding: 1.2em 0 0 1.2em;\\r\\n  color: #303040;\\r\\n}\\r\\n\\r\\n.margin-top {\\r\\n  position: relative;\\r\\n\\r\\n  top: 320px;\\r\\n  \\r\\n}\\r\\n\\r\\n.margin {\\r\\n  position: relative;\\r\\n\\r\\n  top: 320px;\\r\\n\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.contact-margin {\\r\\n  position: absolute;\\r\\n\\r\\n  /* top: 650px; */\\r\\n  bottom: 40px;\\r\\n}\\r\\n\\r\\n.contact-margin-top {\\r\\n  position: absolute;\\r\\n\\r\\n  /* top: 650px; */\\r\\n  bottom: 90px;\\r\\n}\\r\\n\\r\\n.contact-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.contact-container {\\r\\n  position: absolute;\\r\\n  width: 600px;\\r\\n  margin-top: 100px;\\r\\n  margin-left: calc(50% - (300px));\\r\\n  border: 1px solid white;\\r\\n  padding: 50px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.contact-ul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dish.com/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dish.com/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dish.com/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dish.com/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dish.com/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/like.svg":
/*!*****************************!*\
  !*** ./src/assets/like.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed414ceb6f04f36ca618.svg\";\n\n//# sourceURL=webpack://dish.com/./src/assets/like.svg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04b10909a0983abcd322.png\";\n\n//# sourceURL=webpack://dish.com/./src/assets/logo.png?");

/***/ }),

/***/ "./src/close.svg":
/*!***********************!*\
  !*** ./src/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66e052bdd539410968a6.svg\";\n\n//# sourceURL=webpack://dish.com/./src/close.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _modules_renderElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderElements.js */ \"./src/modules/renderElements.js\");\n/* harmony import */ var _modules_showPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showPopup.js */ \"./src/modules/showPopup.js\");\n/* harmony import */ var _modules_closePopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/closePopup.js */ \"./src/modules/closePopup.js\");\n/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./close.svg */ \"./src/close.svg\");\n/* harmony import */ var _modules_postCommit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/postCommit.js */ \"./src/modules/postCommit.js\");\n/* harmony import */ var _modules_fetchCommits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetchCommits.js */ \"./src/modules/fetchCommits.js\");\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst submit = document.querySelector('.submit');\r\nconst header = document.querySelector('.header');\r\nconst footer = document.querySelector('.footer');\r\nconst catogray = document.getElementById('catogary');\r\nconst typeOrArea = document.getElementById('typeOrArea');\r\nconst closePopupImg = document.getElementById('close-btn');\r\nconst commentsNumber = document.getElementById('comments-number');\r\nconst searchBtn = document.getElementById('search-btn');\r\nconst listSection = document.querySelector('.list-sec');\r\nconst searchSection = document.querySelector('.search-sec');\r\nconst listButton = document.querySelector('.list');\r\nconst searchButton = document.querySelector('.search');\r\nconst footerLine = document.querySelector('.footerLine');\r\nconst contactSec = document.querySelector('.contact-section');\r\nconst contactButton = document.querySelector('.contact');\r\n\r\nconst showList = () => {\r\n  listSection.style.display = 'block';\r\n  searchSection.style.display = 'none';\r\n  contactSec.style.display = 'none';\r\n  footer.classList.remove('margin');\r\n  footerLine.classList.remove('margin-top');\r\n  footer.classList.remove('contact-margin');\r\n  footerLine.classList.remove('contact-margin-top');\r\n};\r\n\r\nconst showSeacrch = () => {\r\n  listSection.style.display = 'none';\r\n  searchSection.style.display = 'block';\r\n  contactSec.style.display = 'none';\r\n  footer.classList.add('margin');\r\n  footerLine.classList.add('margin-top');\r\n  footer.classList.remove('contact-margin');\r\n  footerLine.classList.remove('contact-margin-top');\r\n};\r\n\r\nconst showContact = () => {\r\n  listSection.style.display = 'none';\r\n  searchSection.style.display = 'none';\r\n  contactSec.style.display = 'block';\r\n  footer.classList.add('contact-margin');\r\n  footerLine.classList.add('contact-margin-top');\r\n  footer.classList.remove('margin');\r\n  footerLine.classList.remove('margin-top');\r\n};\r\n\r\nlistButton.addEventListener('click', () => {\r\n  showList();\r\n});\r\n\r\nsearchButton.addEventListener('click', () => {\r\n  showSeacrch();\r\n});\r\n\r\ncontactButton.addEventListener('click', () => {\r\n  showContact();\r\n});\r\nconst renderLogo = () => {\r\n  const myLogo = new Image();\r\n  myLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  myLogo.className = 'logo';\r\n  header.append(myLogo);\r\n};\r\n\r\nconst fillFooter = () => {\r\n  const today = new Date();\r\n  const currentYear = today.getFullYear();\r\n  footer.append(\r\n    document.createTextNode(\r\n      `Copyright © ${currentYear} Ahmed & Nacho. All Rights Reserved`,\r\n    ),\r\n  );\r\n};\r\n\r\ncatogray.addEventListener('change', () => {\r\n  typeOrArea.innerHTML = '';\r\n  (0,_modules_renderElements_js__WEBPACK_IMPORTED_MODULE_2__.selectedDrop)(catogray.value);\r\n});\r\n\r\nsubmit.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_renderElements_js__WEBPACK_IMPORTED_MODULE_2__.getMyData)();\r\n});\r\n\r\nsearchBtn.addEventListener('click', () => {\r\n  (0,_modules_search_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  renderLogo();\r\n  fillFooter();\r\n  (0,_modules_renderElements_js__WEBPACK_IMPORTED_MODULE_2__.selectedDrop)('c').then(() => {\r\n    (0,_modules_renderElements_js__WEBPACK_IMPORTED_MODULE_2__.getMyData)();\r\n  });\r\n  showList();\r\n});\r\n\r\nclosePopupImg.src = _close_svg__WEBPACK_IMPORTED_MODULE_5__;\r\nclosePopupImg.addEventListener('click', () => (0,_modules_closePopup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\nwindow.showPopup = _modules_showPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\r\nconst postForm = document.getElementById('post-comment-form');\r\nconst nameInput = document.getElementById('name');\r\nconst commentInput = document.getElementById('commit');\r\nconst commitContainer = document.getElementById('commits-container');\r\n\r\npostForm.addEventListener('submit', async (e) => {\r\n  e.preventDefault();\r\n  await (0,_modules_postCommit_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(window.popupElementd, nameInput.value, commentInput.value);\r\n  const newCommits = await (0,_modules_fetchCommits_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(window.popupElementd);\r\n  commitContainer.innerHTML = newCommits;\r\n  nameInput.value = '';\r\n  commentInput.value = '';\r\n  const numberOfComments = await (0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(window.popupElementd);\r\n  commentsNumber.innerText = numberOfComments;\r\n});\r\nwindow.postLike = _modules_likes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\r\n\n\n//# sourceURL=webpack://dish.com/./src/index.js?");

/***/ }),

/***/ "./src/modules/closePopup.js":
/*!***********************************!*\
  !*** ./src/modules/closePopup.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closePopup = () => {\n  const popUp = document.getElementById('popup-window');\n  popUp.style.display = 'none';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closePopup);\n\n//# sourceURL=webpack://dish.com/./src/modules/closePopup.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = async (mealId) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments?item_id=${mealId}`,\n  );\n  if (response.status === 400) {\n    return 0;\n  }\n  const jsonData = await response.json();\n  return jsonData.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n\n//# sourceURL=webpack://dish.com/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/fetchCommits.js":
/*!*************************************!*\
  !*** ./src/modules/fetchCommits.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchCommmits = async (mealId) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments?item_id=${mealId}`,\n  );\n  const jsonData = await response.json();\n  let commits = '';\n  if (response.status === 400) {\n    commits = 'no comments yet.';\n  } else {\n    jsonData.forEach((commit) => {\n      commits += `<p class=\"comment-description\">${commit.creation_date} ${commit.username}: ${commit.comment}</p>`;\n    });\n  }\n  return commits;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCommmits);\n\n//# sourceURL=webpack://dish.com/./src/modules/fetchCommits.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\n  const displayDiv = document.querySelector('.displayDiv');\n  const itemsCounter = document.querySelector('.itemsCounter');\n  itemsCounter.innerHTML = `(${displayDiv.children.length}) Items`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://dish.com/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async (dataId) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/likes/', {\n    method: 'GET',\n  })\n    .then((res) => res.json())\n    .then((data) => {\n      for (let i = 0; i < data.length; i += 1) {\n        if (data[i].item_id === dataId) {\n          const elementLikes = document.getElementById(dataId);\n          elementLikes.innerHTML = `${data[i].likes} likes`;\n        }\n      }\n    });\n};\n\nconst postLike = async (dataId) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/likes/', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ item_id: dataId }),\n  })\n    .then(() => { getLikes(dataId); });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n//# sourceURL=webpack://dish.com/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/postCommit.js":
/*!***********************************!*\
  !*** ./src/modules/postCommit.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addCommit = async (mealId, user, comment) => {\n  const postBody = {\n    item_id: `${mealId}`,\n    username: `${user}`,\n    comment: `${comment}`,\n  };\n  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments';\n  await fetch(apiUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(postBody),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCommit);\n\n\n//# sourceURL=webpack://dish.com/./src/modules/postCommit.js?");

/***/ }),

/***/ "./src/modules/renderElements.js":
/*!***************************************!*\
  !*** ./src/modules/renderElements.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMyData: () => (/* binding */ getMyData),\n/* harmony export */   likeElement: () => (/* binding */ likeElement),\n/* harmony export */   selectedDrop: () => (/* binding */ selectedDrop)\n/* harmony export */ });\n/* harmony import */ var _assets_like_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/like.svg */ \"./src/assets/like.svg\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n\r\n\r\n\r\nconst catogray = document.getElementById('catogary');\r\nconst typeOrArea = document.getElementById('typeOrArea');\r\nconst displayDiv = document.querySelector('.displayDiv');\r\n\r\nconst selectedDrop = async (selected) => {\r\n  await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${selected}=list`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const { meals } = data;\r\n\r\n      meals.forEach((element) => {\r\n        if (typeOrArea.children.length < 28) {\r\n          const choice = document.createElement('option');\r\n          if ((+Object.values(element)[0]) % 1 === 0) {\r\n            choice.append(document.createTextNode(Object.values(element)[1]));\r\n            choice.value = Object.values(element)[1];\r\n          } else {\r\n            choice.append(document.createTextNode(Object.values(element)[0]));\r\n            choice.value = Object.values(element)[0];\r\n          }\r\n\r\n          typeOrArea.append(choice);\r\n        }\r\n      });\r\n    });\r\n};\r\n\r\nlet likeElement;\r\nconst getMyData = async () => {\r\n  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${catogray.value}=${typeOrArea.value}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const { meals } = data;\r\n\r\n      displayDiv.innerHTML = '';\r\n      meals.forEach((meal) => {\r\n        const container = document.createElement('div');\r\n        container.className = 'container';\r\n        container.setAttribute('data-id', meal.idMeal);\r\n        const maelDiv = document.createElement('div');\r\n        maelDiv.className = 'meal';\r\n        maelDiv.setAttribute('data-id', meal.idMeal);\r\n        maelDiv.innerHTML = `<img src=\"${meal.strMealThumb}\" alt=\"Meal Photo\" class = \"mealPhoto\">`;\r\n        const comments = document.createElement('button');\r\n        comments.className = 'commentsButton';\r\n\r\n        const mealName = document.createElement('p');\r\n        mealName.className = 'mealName';\r\n        mealName.append(document.createTextNode(meal.strMeal));\r\n        container.append(maelDiv);\r\n        container.append(mealName);\r\n        container.innerHTML += `<button type = \"button\" data-id = ${meal.idMeal} onclick = \"showPopup(${meal.idMeal})\" class=\"comment\">comment</button>`;\r\n        container.innerHTML += `<img src=${_assets_like_svg__WEBPACK_IMPORTED_MODULE_0__} data-id = ${meal.idMeal} class=\"like\" onclick=\"postLike(${meal.idMeal})\">`;\r\n        const element = document.createElement('p');\r\n        element.className = 'elementLikes';\r\n        element.setAttribute('id', meal.idMeal);\r\n\r\n        element.append(document.createTextNode('0 likes'));\r\n\r\n        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/likes/', {\r\n          method: 'GET',\r\n        })\r\n          .then((res) => res.json())\r\n          .then((data) => {\r\n            for (let i = 0; i < data.length; i += 1) {\r\n              if (data[i].item_id == element.getAttribute('id')) {\r\n                element.innerHTML = `${data[i].likes} likes`;\r\n              }\r\n            }\r\n          });\r\n\r\n        container.appendChild(element);\r\n        displayDiv.append(container);\r\n      });\r\n    })\r\n    .then(() => { (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); });\r\n};\r\n\n\n//# sourceURL=webpack://dish.com/./src/modules/renderElements.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst result = document.getElementById('result');\r\nconst url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\r\n\r\nconst search = () => {\r\n  let userInp = document.getElementById('user-inp').value;\r\n  if (userInp.length === 0) {\r\n    result.innerHTML = '<h3 class=\"item-not-found\">Input Field Cannot Be Empty</h3>';\r\n  } else {\r\n    fetch(url + userInp)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        userInp = document.getElementById('user-inp').value = '';\r\n        const myMeal = data.meals[0];\r\n\r\n        let count = 1;\r\n        const ingredients = [];\r\n        for (const i in myMeal) {\r\n          let ingredient = '';\r\n          let measure = '';\r\n          if (i.startsWith('strIngredient') && myMeal[i]) {\r\n            ingredient = myMeal[i];\r\n            measure = myMeal[`strMeasure${count}`];\r\n            count += 1;\r\n            ingredients.push(`${measure} ${ingredient}`);\r\n          }\r\n        }\r\n\r\n        result.innerHTML = `\r\n      <img class=\"search-img\" src=${myMeal.strMealThumb}>\r\n      <div class=\"details\">\r\n          <h2>${myMeal.strMeal}</h2>\r\n          <h4>${myMeal.strArea}</h4>\r\n      </div>\r\n      <div id=\"ingredient-con\"></div>\r\n      <div id=\"recipe\">\r\n          <button id=\"hide-recipe\">X</button>\r\n          <pre id=\"instructions\">${myMeal.strInstructions}</pre>\r\n      </div>\r\n      <button id=\"show-recipe\">View Recipe</button>\r\n      `;\r\n        const ingredientCon = document.getElementById('ingredient-con');\r\n        const parent = document.createElement('ul');\r\n        const recipe = document.getElementById('recipe');\r\n        const hideRecipe = document.getElementById('hide-recipe');\r\n        const showRecipe = document.getElementById('show-recipe');\r\n\r\n        ingredients.forEach((i) => {\r\n          const child = document.createElement('li');\r\n          child.innerText = i;\r\n          parent.appendChild(child);\r\n          ingredientCon.appendChild(parent);\r\n        });\r\n\r\n        hideRecipe.addEventListener('click', () => {\r\n          recipe.style.display = 'none';\r\n          showRecipe.style.display = 'block';\r\n        });\r\n        showRecipe.addEventListener('click', () => {\r\n          recipe.style.display = 'block';\r\n          showRecipe.style.display = 'none';\r\n        });\r\n      })\r\n      .catch(() => {\r\n        result.innerHTML = '<h3 class=\"item-not-found\">Invalid Input</h3>';\r\n      });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://dish.com/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/showPopup.js":
/*!**********************************!*\
  !*** ./src/modules/showPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchCommits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchCommits.js */ \"./src/modules/fetchCommits.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst showPopup = async (mealId) => {\n  window.popupElementd = mealId;\n  const response = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,\n  );\n  const jsonData = await response.json();\n  const foodName = jsonData.meals[0].strMeal;\n  const foodCategory = jsonData.meals[0].strCategory;\n  const foodArea = jsonData.meals[0].strArea;\n  const dishTags = jsonData.meals[0].strTags;\n  const imgSrc = jsonData.meals[0].strMealThumb;\n  const linkToRecipe = jsonData.meals[0].strSource;\n\n  const commitContainer = document.getElementById('commits-container');\n  const popUp = document.getElementById('popup-window');\n  const dishImg = document.getElementById('dish-img');\n  const dishTitle = document.getElementById('dish-title');\n  const dishArea = document.getElementById('dish-area');\n  const dishCategory = document.getElementById('dish-category');\n  const dishTagsElement = document.getElementById('dish-tags');\n  const recipeLink = document.getElementById('recipe-link');\n  const commentsNumber = document.getElementById('comments-number');\n  const numberOfComments = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window.popupElementd);\n\n  commentsNumber.innerText = numberOfComments;\n\n  let tagsHtml = '';\n  if (dishTags !== null) {\n    const tagsLoop = dishTags.split(',');\n    tagsLoop.forEach((tag) => {\n      tagsHtml += `<p class=\"tag-description\">${tag}</p>`;\n    });\n  }\n\n  commitContainer.innerHTML = await (0,_fetchCommits_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealId);\n  dishImg.src = imgSrc;\n  dishTitle.innerText = foodName;\n  dishArea.innerText = `Area: ${foodArea}`;\n  dishCategory.innerText = `Category: ${foodCategory}`;\n  dishTagsElement.innerHTML = tagsHtml;\n  recipeLink.setAttribute('href', linkToRecipe);\n  popUp.style.display = 'flex';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n\n//# sourceURL=webpack://dish.com/./src/modules/showPopup.js?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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