/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: rgb(69, 156, 243);
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}

.boards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 110px;
}

.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 1px solid black;
  min-height: 450px;
  min-width: 450px;
}

.text {
  margin-top: 12px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}

.ship {
  background-color: rgb(170, 170, 170);
}

.missed,
.hit,
.sunk {
  border-radius: 50%;
  width: 80%;
  height: 80%;
}

.missed {
  background-color: rgb(25, 25, 25);
}

.hit {
  background-color: red;
}

.sunk {
  background-color: rgb(39, 172, 39);
}

.btns {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.btn {
  background-color: rgb(69, 156, 243);
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  border: 0;
  border-radius: 30px;
  padding: 10px 15px;
}

.btn:active {
  transform: translateY(4px);
}

.turn {
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 65px;\n  font-size: 1.6rem;\n  font-weight: bold;\n  background-color: rgb(69, 156, 243);\n  color: white;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 110px;\n}\n\n.cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid black;\n  min-height: 450px;\n  min-width: 450px;\n}\n\n.text {\n  margin-top: 12px;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.ship {\n  background-color: rgb(170, 170, 170);\n}\n\n.missed,\n.hit,\n.sunk {\n  border-radius: 50%;\n  width: 80%;\n  height: 80%;\n}\n\n.missed {\n  background-color: rgb(25, 25, 25);\n}\n\n.hit {\n  background-color: red;\n}\n\n.sunk {\n  background-color: rgb(39, 172, 39);\n}\n\n.btns {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.btn {\n  background-color: rgb(69, 156, 243);\n  color: white;\n  cursor: pointer;\n  font-size: 1.3rem;\n  border: 0;\n  border-radius: 30px;\n  padding: 10px 15px;\n}\n\n.btn:active {\n  transform: translateY(4px);\n}\n\n.turn {\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



class Game {
  constructor() {
    this.playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.compBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

    this.playerBoard.placeRandomly();
    this.compBoard.placeRandomly();

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.compBoard);
    this.comp = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.playerBoard);
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./src/random.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



class Gameboard {
  #ships;

  constructor() {
    this.board = Gameboard.createBoard();
    this.#ships = [];
  }

  static createBoard() {
    const gb = [];

    for (let row = 0; row < 10; row += 1) {
      const rowArr = [];
      for (let col = 0; col < 10; col += 1) {
        const obj = { data: null, isHit: false, isAvailable: true };
        rowArr.push(obj);
      }
      gb.push(rowArr);
    }

    return gb;
  }

  #makeUnavailableHor(length, row, col) {
    for (let r = row - 1; r < row + 2; r += 1) {
      for (let c = col - 1; c < col + length + 1; c += 1) {
        if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
          this.board[r][c].isAvailable = false;
        }
      }
    }
  }

  #makeUnavailableVer(length, row, col) {
    for (let c = col - 1; c < col + 2; c += 1) {
      for (let r = row - 1; r < row + length + 1; r += 1) {
        if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
          this.board[r][c].isAvailable = false;
        }
      }
    }
  }

  #placeHorizontally(ship, row, col) {
    let nextCol = col;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[row][nextCol].data = ship;
      nextCol += 1;
    }
    this.#makeUnavailableHor(ship.length(), row, col);
    this.#ships.push(ship);
  }

  #placeVertically(ship, row, col) {
    let nextRow = row;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[nextRow][col].data = ship;
      nextRow += 1;
    }
    this.#makeUnavailableVer(ship.length(), row, col);
    this.#ships.push(ship);
  }

  placeShip(ship, row, col, direction) {
    if (this.board[row][col].isAvailable) {
      if (ship.length() === 5) {
        if (
          direction === 'horizontal' &&
          col + ship.length() - 1 <= 9 &&
          this.board[row][col + ship.length() - 1].isAvailable &&
          this.board[row][col + 2].isAvailable
        ) {
          this.#placeHorizontally(ship, row, col);
        } else if (
          direction === 'vertical' &&
          row + ship.length() - 1 <= 9 &&
          this.board[row + ship.length() - 1][col].isAvailable &&
          this.board[row + 2][col].isAvailable
        ) {
          this.#placeVertically(ship, row, col);
        }
      } else if (
        direction === 'horizontal' &&
        col + ship.length() - 1 <= 9 &&
        this.board[row][col + ship.length() - 1].isAvailable
      ) {
        this.#placeHorizontally(ship, row, col);
      } else if (
        direction === 'vertical' &&
        row + ship.length() - 1 <= 9 &&
        this.board[row + ship.length() - 1][col].isAvailable
      ) {
        this.#placeVertically(ship, row, col);
      }
    }
  }

  placeRandomly() {
    let ships = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3)].concat(
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
    );

    while (ships.length !== 0) {
      const curShip = ships.shift();

      let row;
      let col;
      const direction = (0,_random__WEBPACK_IMPORTED_MODULE_0__.getDirection)();

      if (direction === 'horizontal') {
        [row, col] = (0,_random__WEBPACK_IMPORTED_MODULE_0__.getCoords)(10, 11 - curShip.length());
      } else {
        [row, col] = (0,_random__WEBPACK_IMPORTED_MODULE_0__.getCoords)(11 - curShip.length(), 10);
      }

      this.placeShip(curShip, row, col, direction);

      if (this.board[row][col].data !== curShip) {
        this.board = Gameboard.createBoard();
        this.#ships = [];
        ships = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3)].concat(
          new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
        );
      }
    }
  }

  receiveAttack(row, col) {
    this.board[row][col].isHit = true;
    if (this.board[row][col].data !== null) this.board[row][col].data.hit();
  }

  areShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk() === true);
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./src/random.js");


class Player {
  constructor(board) {
    this.board = board;
  }

  attack(row, col) {
    this.board.receiveAttack(row, col);
  }

  compAttack() {
    const [row, col] = (0,_random__WEBPACK_IMPORTED_MODULE_0__.getCoords)(10, 10);
    if (this.board.board[row][col].isHit) this.compAttack();
    else this.attack(row, col);
  }
}


/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoords: () => (/* binding */ getCoords),
/* harmony export */   getDirection: () => (/* binding */ getDirection)
/* harmony export */ });
function getCoords(r, c) {
  return [Math.floor(Math.random() * r), Math.floor(Math.random() * c)];
}

function getDirection() {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  #length;

  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  length() {
    return this.#length;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    if (this.#hits >= this.#length) return true;
    return false;
  }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
const content = document.querySelector('.content');
const boards = document.querySelector('.boards');
const btns = document.querySelector('.btns');
const randomBtn = document.querySelector('.btn:first-child');
const startBtn = document.querySelector('.btn:last-child');

function displayBoard(board) {
  const cont = document.createElement('div');
  const grid = document.createElement('div');
  const text = document.createElement('div');

  cont.classList.add('cont');
  grid.classList.add('grid');
  text.classList.add('text');

  text.textContent =
    board === game.playerBoard.board ? 'Your board' : "Computer's board";

  board.forEach((row) => {
    row.forEach((col) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (board === game.compBoard.board) {
        cell.dataset.row = board.indexOf(row);
        cell.dataset.col = row.indexOf(col);
      }
      if (board === game.playerBoard.board && col.data !== null)
        cell.classList.add('ship');
      if (col.isHit && col.data !== null && col.data.isSunk()) {
        const sunk = document.createElement('div');
        sunk.classList.add('sunk');
        cell.append(sunk);
      }
      if (col.isHit && col.data !== null && !col.data.isSunk()) {
        const hit = document.createElement('div');
        hit.classList.add('hit');
        cell.append(hit);
      }
      if (col.isHit && col.data === null) {
        const missed = document.createElement('div');
        missed.classList.add('missed');
        cell.append(missed);
      }
      grid.appendChild(cell);
    });
  });

  cont.append(grid, text);
  boards.appendChild(cont);
}

function waitForPlayerAttack(item, event) {
  return new Promise((resolve) => {
    const listener = (e) => {
      game.player.attack(e.target.dataset.row, e.target.dataset.col);
      item.forEach((cell) => {
        cell.removeEventListener(event, (ev) => listener(ev));
      });
      resolve();
    };

    item.forEach((cell) => {
      if (!game.compBoard.board[cell.dataset.row][cell.dataset.col].isHit) {
        cell.addEventListener(event, (e) => listener(e));
      }
    });
  });
}

function waitForCompAttack(ms) {
  return new Promise((resolve) => {
    game.comp.compAttack();
    setTimeout(resolve, ms);
  });
}

function redisplayBoards() {
  boards.textContent = '';
  displayBoard(game.playerBoard.board);
  displayBoard(game.compBoard.board);
}

async function startGame() {
  // Display comp board
  displayBoard(game.compBoard.board);

  // Add restart btn
  const restartBtn = document.createElement('button');
  restartBtn.classList.add('btn');
  restartBtn.textContent = 'Restart';
  btns.textContent = '';
  btns.appendChild(restartBtn);

  // Start game
  let gameOver = false;
  let turn = true;
  let winner;
  const turnText = document.createElement('div');
  turnText.classList.add('turn');
  content.insertBefore(turnText, boards);

  while (!gameOver) {
    const cells = document.querySelectorAll('.cont:last-child .cell');
    turnText.textContent = turn ? 'Your turn' : "Computer's turn";

    if (turn) {
      await waitForPlayerAttack(cells, 'click');
      redisplayBoards();
      if (game.compBoard.areShipsSunk()) {
        gameOver = true;
        winner = 'Player';
      }
      turn = !turn;
    } else {
      await waitForCompAttack(600);
      redisplayBoards();
      if (game.playerBoard.areShipsSunk()) {
        gameOver = true;
        winner = 'Computer';
      }
      turn = !turn;
    }
  }

  alert(`${winner} wins!`);
}

function addBtnListeners() {
  randomBtn.addEventListener('click', () => {
    game.playerBoard.placeRandomly();
    boards.textContent = '';
    displayBoard(game.playerBoard.board);
  });

  startBtn.addEventListener('click', startGame);
}

// Initialize display
displayBoard(game.playerBoard.board);
addBtnListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsUUFBUTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCAxNTYsIDI0Myk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTEwcHg7XG59XG5cbi5jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBtaW4td2lkdGg6IDQ1MHB4O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcbn1cblxuLm1pc3NlZCxcbi5oaXQsXG4uc3VuayB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5taXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDI1LCAyNSk7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAxNzIsIDM5KTtcbn1cblxuLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMDBweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgMTU2LCAyNDMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4udHVybiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNjVweDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDE1NiwgMjQzKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMTBweDtcXG59XFxuXFxuLmNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0NTBweDtcXG59XFxuXFxuLnRleHQge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxufVxcblxcbi5taXNzZWQsXFxuLmhpdCxcXG4uc3VuayB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyNSwgMjUpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAxNzIsIDM5KTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDE1NiwgMjQzKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi50dXJuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmNvbXBCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIHRoaXMucGxheWVyQm9hcmQucGxhY2VSYW5kb21seSgpO1xuICAgIHRoaXMuY29tcEJvYXJkLnBsYWNlUmFuZG9tbHkoKTtcblxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvbXBCb2FyZCk7XG4gICAgdGhpcy5jb21wID0gbmV3IFBsYXllcih0aGlzLnBsYXllckJvYXJkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q29vcmRzLCBnZXREaXJlY3Rpb24gfSBmcm9tICcuL3JhbmRvbSc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAjc2hpcHM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEdhbWVib2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuI3NoaXBzID0gW107XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgZ2IgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgY29uc3Qgcm93QXJyID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb2JqID0geyBkYXRhOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzQXZhaWxhYmxlOiB0cnVlIH07XG4gICAgICAgIHJvd0Fyci5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgICBnYi5wdXNoKHJvd0Fycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdiO1xuICB9XG5cbiAgI21ha2VVbmF2YWlsYWJsZUhvcihsZW5ndGgsIHJvdywgY29sKSB7XG4gICAgZm9yIChsZXQgciA9IHJvdyAtIDE7IHIgPCByb3cgKyAyOyByICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGMgPSBjb2wgLSAxOyBjIDwgY29sICsgbGVuZ3RoICsgMTsgYyArPSAxKSB7XG4gICAgICAgIGlmIChjID49IDAgJiYgYyA8PSA5ICYmIHIgPj0gMCAmJiByIDw9IDkpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3JdW2NdLmlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjbWFrZVVuYXZhaWxhYmxlVmVyKGxlbmd0aCwgcm93LCBjb2wpIHtcbiAgICBmb3IgKGxldCBjID0gY29sIC0gMTsgYyA8IGNvbCArIDI7IGMgKz0gMSkge1xuICAgICAgZm9yIChsZXQgciA9IHJvdyAtIDE7IHIgPCByb3cgKyBsZW5ndGggKyAxOyByICs9IDEpIHtcbiAgICAgICAgaWYgKGMgPj0gMCAmJiBjIDw9IDkgJiYgciA+PSAwICYmIHIgPD0gOSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbcl1bY10uaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNwbGFjZUhvcml6b250YWxseShzaGlwLCByb3csIGNvbCkge1xuICAgIGxldCBuZXh0Q29sID0gY29sO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bbmV4dENvbF0uZGF0YSA9IHNoaXA7XG4gICAgICBuZXh0Q29sICs9IDE7XG4gICAgfVxuICAgIHRoaXMuI21ha2VVbmF2YWlsYWJsZUhvcihzaGlwLmxlbmd0aCgpLCByb3csIGNvbCk7XG4gICAgdGhpcy4jc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gICNwbGFjZVZlcnRpY2FsbHkoc2hpcCwgcm93LCBjb2wpIHtcbiAgICBsZXQgbmV4dFJvdyA9IHJvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ib2FyZFtuZXh0Um93XVtjb2xdLmRhdGEgPSBzaGlwO1xuICAgICAgbmV4dFJvdyArPSAxO1xuICAgIH1cbiAgICB0aGlzLiNtYWtlVW5hdmFpbGFibGVWZXIoc2hpcC5sZW5ndGgoKSwgcm93LCBjb2wpO1xuICAgIHRoaXMuI3NoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgcm93LCBjb2wsIGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5pc0F2YWlsYWJsZSkge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoKCkgPT09IDUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmXG4gICAgICAgICAgY29sICsgc2hpcC5sZW5ndGgoKSAtIDEgPD0gOSAmJlxuICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2wgKyBzaGlwLmxlbmd0aCgpIC0gMV0uaXNBdmFpbGFibGUgJiZcbiAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sICsgMl0uaXNBdmFpbGFibGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4jcGxhY2VIb3Jpem9udGFsbHkoc2hpcCwgcm93LCBjb2wpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJlxuICAgICAgICAgIHJvdyArIHNoaXAubGVuZ3RoKCkgLSAxIDw9IDkgJiZcbiAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIHNoaXAubGVuZ3RoKCkgLSAxXVtjb2xdLmlzQXZhaWxhYmxlICYmXG4gICAgICAgICAgdGhpcy5ib2FyZFtyb3cgKyAyXVtjb2xdLmlzQXZhaWxhYmxlXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuI3BsYWNlVmVydGljYWxseShzaGlwLCByb3csIGNvbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmXG4gICAgICAgIGNvbCArIHNoaXAubGVuZ3RoKCkgLSAxIDw9IDkgJiZcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbCArIHNoaXAubGVuZ3RoKCkgLSAxXS5pc0F2YWlsYWJsZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuI3BsYWNlSG9yaXpvbnRhbGx5KHNoaXAsIHJvdywgY29sKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJlxuICAgICAgICByb3cgKyBzaGlwLmxlbmd0aCgpIC0gMSA8PSA5ICYmXG4gICAgICAgIHRoaXMuYm9hcmRbcm93ICsgc2hpcC5sZW5ndGgoKSAtIDFdW2NvbF0uaXNBdmFpbGFibGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLiNwbGFjZVZlcnRpY2FsbHkoc2hpcCwgcm93LCBjb2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlUmFuZG9tbHkoKSB7XG4gICAgbGV0IHNoaXBzID0gW25ldyBTaGlwKDUpLCBuZXcgU2hpcCg0KSwgbmV3IFNoaXAoMyksIG5ldyBTaGlwKDMpXS5jb25jYXQoXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICApO1xuXG4gICAgd2hpbGUgKHNoaXBzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgY3VyU2hpcCA9IHNoaXBzLnNoaWZ0KCk7XG5cbiAgICAgIGxldCByb3c7XG4gICAgICBsZXQgY29sO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBbcm93LCBjb2xdID0gZ2V0Q29vcmRzKDEwLCAxMSAtIGN1clNoaXAubGVuZ3RoKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW3JvdywgY29sXSA9IGdldENvb3JkcygxMSAtIGN1clNoaXAubGVuZ3RoKCksIDEwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wbGFjZVNoaXAoY3VyU2hpcCwgcm93LCBjb2wsIGRpcmVjdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5kYXRhICE9PSBjdXJTaGlwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBHYW1lYm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICAgICAgc2hpcHMgPSBbbmV3IFNoaXAoNSksIG5ldyBTaGlwKDQpLCBuZXcgU2hpcCgzKSwgbmV3IFNoaXAoMyldLmNvbmNhdChcbiAgICAgICAgICBuZXcgU2hpcCgyKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNIaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5kYXRhICE9PSBudWxsKSB0aGlzLmJvYXJkW3Jvd11bY29sXS5kYXRhLmhpdCgpO1xuICB9XG5cbiAgYXJlU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldENvb3JkcyB9IGZyb20gJy4vcmFuZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICBhdHRhY2socm93LCBjb2wpIHtcbiAgICB0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICB9XG5cbiAgY29tcEF0dGFjaygpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gZ2V0Q29vcmRzKDEwLCAxMCk7XG4gICAgaWYgKHRoaXMuYm9hcmQuYm9hcmRbcm93XVtjb2xdLmlzSGl0KSB0aGlzLmNvbXBBdHRhY2soKTtcbiAgICBlbHNlIHRoaXMuYXR0YWNrKHJvdywgY29sKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gZ2V0Q29vcmRzKHIsIGMpIHtcbiAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYyldO1xufVxuXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbn1cblxuZXhwb3J0IHsgZ2V0Q29vcmRzLCBnZXREaXJlY3Rpb24gfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAjbGVuZ3RoO1xuXG4gICNoaXRzO1xuXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLiNoaXRzID0gMDtcbiAgfVxuXG4gIGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuI2hpdHMgKz0gMTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy4jaGl0cyA+PSB0aGlzLiNsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5zJyk7XG5jb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuOmZpcnN0LWNoaWxkJyk7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG46bGFzdC1jaGlsZCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmQpIHtcbiAgY29uc3QgY29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250LmNsYXNzTGlzdC5hZGQoJ2NvbnQnKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gIHRleHQudGV4dENvbnRlbnQgPVxuICAgIGJvYXJkID09PSBnYW1lLnBsYXllckJvYXJkLmJvYXJkID8gJ1lvdXIgYm9hcmQnIDogXCJDb21wdXRlcidzIGJvYXJkXCI7XG5cbiAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBpZiAoYm9hcmQgPT09IGdhbWUuY29tcEJvYXJkLmJvYXJkKSB7XG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKHJvdyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSByb3cuaW5kZXhPZihjb2wpO1xuICAgICAgfVxuICAgICAgaWYgKGJvYXJkID09PSBnYW1lLnBsYXllckJvYXJkLmJvYXJkICYmIGNvbC5kYXRhICE9PSBudWxsKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIGlmIChjb2wuaXNIaXQgJiYgY29sLmRhdGEgIT09IG51bGwgJiYgY29sLmRhdGEuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3Qgc3VuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdW5rLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgY2VsbC5hcHBlbmQoc3Vuayk7XG4gICAgICB9XG4gICAgICBpZiAoY29sLmlzSGl0ICYmIGNvbC5kYXRhICE9PSBudWxsICYmICFjb2wuZGF0YS5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBoaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICBjZWxsLmFwcGVuZChoaXQpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbC5pc0hpdCAmJiBjb2wuZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtaXNzZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWlzc2VkLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICBjZWxsLmFwcGVuZChtaXNzZWQpO1xuICAgICAgfVxuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29udC5hcHBlbmQoZ3JpZCwgdGV4dCk7XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChjb250KTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvclBsYXllckF0dGFjayhpdGVtLCBldmVudCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICBnYW1lLnBsYXllci5hdHRhY2soZS50YXJnZXQuZGF0YXNldC5yb3csIGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgIGl0ZW0uZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIChldikgPT4gbGlzdGVuZXIoZXYpKTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBpdGVtLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmICghZ2FtZS5jb21wQm9hcmQuYm9hcmRbY2VsbC5kYXRhc2V0LnJvd11bY2VsbC5kYXRhc2V0LmNvbF0uaXNIaXQpIHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4gbGlzdGVuZXIoZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvckNvbXBBdHRhY2sobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZ2FtZS5jb21wLmNvbXBBdHRhY2soKTtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZGlzcGxheUJvYXJkcygpIHtcbiAgYm9hcmRzLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlCb2FyZChnYW1lLnBsYXllckJvYXJkLmJvYXJkKTtcbiAgZGlzcGxheUJvYXJkKGdhbWUuY29tcEJvYXJkLmJvYXJkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAvLyBEaXNwbGF5IGNvbXAgYm9hcmRcbiAgZGlzcGxheUJvYXJkKGdhbWUuY29tcEJvYXJkLmJvYXJkKTtcblxuICAvLyBBZGQgcmVzdGFydCBidG5cbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICBidG5zLnRleHRDb250ZW50ID0gJyc7XG4gIGJ0bnMuYXBwZW5kQ2hpbGQocmVzdGFydEJ0bik7XG5cbiAgLy8gU3RhcnQgZ2FtZVxuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgbGV0IHR1cm4gPSB0cnVlO1xuICBsZXQgd2lubmVyO1xuICBjb25zdCB0dXJuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0dXJuVGV4dC5jbGFzc0xpc3QuYWRkKCd0dXJuJyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHR1cm5UZXh0LCBib2FyZHMpO1xuXG4gIHdoaWxlICghZ2FtZU92ZXIpIHtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250Omxhc3QtY2hpbGQgLmNlbGwnKTtcbiAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IHR1cm4gPyAnWW91ciB0dXJuJyA6IFwiQ29tcHV0ZXIncyB0dXJuXCI7XG5cbiAgICBpZiAodHVybikge1xuICAgICAgYXdhaXQgd2FpdEZvclBsYXllckF0dGFjayhjZWxscywgJ2NsaWNrJyk7XG4gICAgICByZWRpc3BsYXlCb2FyZHMoKTtcbiAgICAgIGlmIChnYW1lLmNvbXBCb2FyZC5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHdpbm5lciA9ICdQbGF5ZXInO1xuICAgICAgfVxuICAgICAgdHVybiA9ICF0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB3YWl0Rm9yQ29tcEF0dGFjayg2MDApO1xuICAgICAgcmVkaXNwbGF5Qm9hcmRzKCk7XG4gICAgICBpZiAoZ2FtZS5wbGF5ZXJCb2FyZC5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHdpbm5lciA9ICdDb21wdXRlcic7XG4gICAgICB9XG4gICAgICB0dXJuID0gIXR1cm47XG4gICAgfVxuICB9XG5cbiAgYWxlcnQoYCR7d2lubmVyfSB3aW5zIWApO1xufVxuXG5mdW5jdGlvbiBhZGRCdG5MaXN0ZW5lcnMoKSB7XG4gIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnYW1lLnBsYXllckJvYXJkLnBsYWNlUmFuZG9tbHkoKTtcbiAgICBib2FyZHMudGV4dENvbnRlbnQgPSAnJztcbiAgICBkaXNwbGF5Qm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5ib2FyZCk7XG4gIH0pO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbn1cblxuLy8gSW5pdGlhbGl6ZSBkaXNwbGF5XG5kaXNwbGF5Qm9hcmQoZ2FtZS5wbGF5ZXJCb2FyZC5ib2FyZCk7XG5hZGRCdG5MaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==