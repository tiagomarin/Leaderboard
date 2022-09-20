"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/background-portrait.png */ "./src/assets/background-portrait.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/background-landscape.png */ "./src/assets/background-landscape.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \"Righteous\", cursive, sans-serif;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 54%;\n  scroll-behavior: smooth;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.heading {\n  margin: 5rem 0 3rem;\n  display: flex;\n  justify-content: center;\n}\n.heading h1 {\n  font-size: 3.4rem;\n  text-align: center;\n  color: white;\n  text-shadow: 2px 2px 3px black;\n}\n\n.start-new-game {\n  padding: 0.4rem 1.2rem;\n  width: 50%;\n  height: max-content;\n  margin-left: 25%;\n  margin-top: 2rem;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n  border: none;\n}\n\n#intro {\n  display: flex;\n  justify-content: center;\n}\n#intro div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  gap: 2rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n}\n#intro div p {\n  font-size: 2rem;\n  color: white;\n  text-shadow: 2px 2px 3px black;\n}\n#intro div input {\n  width: 100%;\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  border: none;\n  text-indent: 1rem;\n}\n#intro div button {\n  padding: 0.4rem 1.2rem;\n  width: max-content;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n  border: none;\n}\n\n#intro.hide {\n  display: none;\n}\n\n#wrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  gap: 2rem;\n}\n#wrap h2 {\n  font-size: 1.8rem;\n  line-height: 2.6rem;\n  color: white;\n  text-shadow: 2px 2px 3px black;\n}\n#wrap > * {\n  width: 80%;\n}\n\n#wrap.hide {\n  display: none;\n}\n\n#recent-scores {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n}\n#recent-scores div {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n#recent-scores button {\n  padding: 0.4rem 1.2rem;\n  width: max-content;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n  border: none;\n}\n\n#scores-placeholder {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n}\n#scores-placeholder div {\n  gap: 2rem;\n  align-items: center;\n}\n#scores-placeholder div div {\n  width: 80%;\n  padding: 0.2rem 0;\n  display: flex;\n  justify-content: flex-start;\n  gap: 0;\n  background-color: #dddedd;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n}\n#scores-placeholder div div img {\n  padding: 0 0.5rem;\n}\n#scores-placeholder div div .position {\n  text-align: center;\n  width: 30px;\n}\n#scores-placeholder div .player {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n}\n#scores-placeholder div .score {\n  width: 9rem;\n  text-align: right;\n  padding: 0.5rem 1rem;\n  font-size: 1.6rem;\n  background-color: #dddedd;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n}\n\n#add-score {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n}\n#add-score > * {\n  width: 100%;\n}\n#add-score input {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  border: none;\n  text-indent: 1rem;\n  margin-top: 2rem;\n}\n#add-score small {\n  color: orange;\n  font-size: 1.2rem;\n  margin-left: 2rem;\n}\n#add-score button {\n  padding: 0.4rem 1.2rem;\n  width: max-content;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  border: none;\n  margin-top: 2rem;\n}\n\n#start-new-game-desktop {\n  display: none;\n}\n\n#start-new-game-desktop.start-new-game.hide {\n  display: none;\n}\n\n#start-new-game-mobile.start-new-game.hide {\n  display: none;\n}\n\n#display-ID {\n  display: flex;\n  justify-content: center;\n  margin: 3rem 0;\n}\n#display-ID p {\n  width: 80%;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  color: white;\n  text-shadow: 2px 2px 3px black;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n}\n#display-ID p span {\n  color: rgb(0, 255, 242);\n}\n\n#display-ID.hide {\n  display: none;\n}\n\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 70%;\n  }\n  body {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center fixed;\n  }\n  main .heading {\n    justify-content: space-between;\n    align-items: center;\n    margin: 5rem 10% 3rem;\n  }\n  main .heading h1 {\n    font-size: 3.4rem;\n    text-align: center;\n    color: white;\n    text-shadow: 2px 2px 3px black;\n  }\n  main #intro div {\n    width: 80%;\n  }\n  main #wrap {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 5%;\n  }\n  main #wrap #recent-scores {\n    width: 50%;\n  }\n  main #wrap #scores-placeholder .position {\n    width: 35px;\n  }\n  main #wrap #add-score {\n    width: 25%;\n  }\n  main #wrap #add-score form {\n    align-items: flex-end;\n  }\n  #start-new-game-desktop {\n    display: flex;\n  }\n  #start-new-game-mobile {\n    display: none;\n  }\n  .start-new-game {\n    width: max-content;\n  }\n  #display-ID p {\n    width: 80%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Righteous', cursive, sans-serif;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 54%;\n  scroll-behavior: smooth;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-image: url(../src/assets/background-portrait.png);\n}\n\n.heading {\n  margin: 5rem 0 3rem;\n  display: flex;\n  justify-content: center;\n\n  h1 {\n    font-size: 3.4rem;\n    text-align: center;\n    color: white;\n    text-shadow: 2px 2px 3px black;\n  }\n}\n\n.start-new-game {\n  padding: 0.4rem 1.2rem;\n  width: 50%;\n  height: max-content;\n  margin-left: 25%;\n  margin-top: 2rem;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n  box-shadow: 0 0 5px 2px #3d3d3d inset;\n  border: none;\n}\n\n#intro {\n  display: flex;\n  justify-content: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 80%;\n    gap: 2rem;\n    background-color: rgba($color: black, $alpha: 0.5);\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n    -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n    box-shadow: 0 0 3px 1px #3d3d3d inset;\n    padding: 2rem;\n\n    p {\n      font-size: 2rem;\n      color: white;\n      text-shadow: 2px 2px 3px black;\n    }\n\n    input {\n      width: 100%;\n      font-size: 1.6rem;\n      line-height: 2.6rem;\n      border-radius: 10px;\n      -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n      -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n      box-shadow: 0 0 3px 1px #3d3d3d inset;\n      border: none;\n      text-indent: 1rem;\n    }\n\n    button {\n      padding: 0.4rem 1.2rem;\n      width: max-content;\n      border-radius: 10px;\n      -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n      -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n      box-shadow: 0 0 5px 2px #3d3d3d inset;\n      border: none;\n    }\n  }\n}\n\n#intro.hide {\n  display: none;\n}\n\n#wrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  gap: 2rem;\n\n  h2 {\n    font-size: 1.8rem;\n    line-height: 2.6rem;\n    color: white;\n    text-shadow: 2px 2px 3px black;\n  }\n\n  >* {\n    width: 80%;\n  }\n}\n\n#wrap.hide {\n  display: none;\n}\n\n#recent-scores {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background-color: rgba($color: black, $alpha: 0.5);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n\n  div {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    // gap: 2rem;\n  }\n\n  button {\n    padding: 0.4rem 1.2rem;\n    width: max-content;\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n    -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n    box-shadow: 0 0 5px 2px #3d3d3d inset;\n    border: none;\n  }\n}\n\n#scores-placeholder {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n\n  div {\n    gap: 2rem;\n    align-items: center;\n\n    div {\n      width: 80%;\n      padding: 0.2rem 0;\n      display: flex;\n      justify-content: flex-start;\n      gap: 0;\n      background-color: #dddedd;\n      border-radius: 10px;\n      -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n      -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n      box-shadow: 0 0 5px 2px #3d3d3d inset;\n\n      img {\n        padding: 0 0.5rem;\n      }\n\n      .position {\n        text-align: center;\n        width: 30px;\n      }\n    }\n\n    .player {\n      font-size: 1.6rem;\n      line-height: 2.6rem;\n    }\n\n    .score {\n      width: 9rem;\n      text-align: right;\n      padding: 0.5rem 1rem;\n      font-size: 1.6rem;\n      background-color: #dddedd;\n      border-radius: 10px;\n      -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n      -moz-box-shadow: 0 0 5px 2px #3d3d3d inset;\n      box-shadow: 0 0 5px 2px #3d3d3d inset;\n    }\n  }\n}\n\n#add-score {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba($color: black, $alpha: 0.5);\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n  -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n  box-shadow: 0 0 3px 1px #3d3d3d inset;\n  padding: 2rem;\n\n  >* {\n    width: 100%;\n  }\n\n  input {\n    font-size: 1.6rem;\n    line-height: 2.6rem;\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n    -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n    box-shadow: 0 0 3px 1px #3d3d3d inset;\n    border: none;\n    text-indent: 1rem;\n    margin-top: 2rem;\n  }\n\n  small {\n    color: orange;\n    font-size: 1.2rem;\n    margin-left: 2rem;\n  }\n\n  button {\n    padding: 0.4rem 1.2rem;\n    width: max-content;\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n    -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n    box-shadow: 0 0 3px 1px #3d3d3d inset;\n    border: none;\n    margin-top: 2rem;\n  }\n}\n\n#start-new-game-desktop {\n  display: none;\n}\n\n#start-new-game-desktop.start-new-game.hide {\n  display: none;\n}\n\n#start-new-game-mobile.start-new-game.hide {\n  display: none;\n}\n\n#display-ID {\n  display: flex;\n  justify-content: center;\n  margin: 3rem 0;\n\n  p {\n    width: 80%;\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n    color: white;\n    text-shadow: 2px 2px 3px black;\n    background-color: rgba($color: black, $alpha: 0.7);\n    border-radius: 10px;\n    -webkit-box-shadow: 0 0 50px 30px #3d3d3d inset;\n    -moz-box-shadow: 0 0 3px 1px #3d3d3d inset;\n    box-shadow: 0 0 3px 1px #3d3d3d inset;\n    padding: 2rem;\n\n    span {\n      color: rgb(0, 255, 242);\n    }\n  }\n}\n\n#display-ID.hide {\n  display: none;\n}\n\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 70%;\n  }\n\n  body {\n    background: url(../src/assets/background-landscape.png) center fixed;\n  }\n\n  main {\n    .heading {\n      justify-content: space-between;\n      align-items: center;\n      margin: 5rem 10% 3rem;\n\n      h1 {\n        font-size: 3.4rem;\n        text-align: center;\n        color: white;\n        text-shadow: 2px 2px 3px black;\n      }\n    }\n\n    #intro {\n      div {\n        width: 80%;\n      }\n    }\n\n    #wrap {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: center;\n      gap: 5%;\n\n      #recent-scores {\n        width: 50%;\n      }\n\n      #scores-placeholder {\n        .position {\n          width: 35px;\n        }\n      }\n\n      #add-score {\n        width: 25%;\n\n        form {\n          align-items: flex-end;\n        }\n      }\n    }\n  }\n\n  #start-new-game-desktop {\n    display: flex;\n  }\n\n  #start-new-game-mobile {\n    display: none;\n  }\n\n  .start-new-game {\n    width: max-content;\n  }\n\n  #display-ID {\n    p {\n      width: 80%;\n    }\n  }\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_saveScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/saveScore */ "./src/modules/saveScore.js");
/* harmony import */ var _modules_succesOrErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/succesOrErrorMessage */ "./src/modules/succesOrErrorMessage.js");
/* harmony import */ var _modules_renderScores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderScores */ "./src/modules/renderScores.js");
/* harmony import */ var _modules_checkGameID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkGameID */ "./src/modules/checkGameID.js");
/* harmony import */ var _modules_newGameID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/newGameID */ "./src/modules/newGameID.js");
/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/domElements */ "./src/modules/domElements.js");
/* harmony import */ var _modules_getScores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/getScores */ "./src/modules/getScores.js");
/* harmony import */ var _modules_checkInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkInput */ "./src/modules/checkInput.js");










const gameID = (0,_modules_checkGameID__WEBPACK_IMPORTED_MODULE_4__["default"])();
if (gameID !== ' ') {
  (0,_modules_renderScores__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.newGameBtn.addEventListener('click', () => {
  window.localStorage.setItem('Game ID', JSON.stringify((0,_modules_newGameID__WEBPACK_IMPORTED_MODULE_5__["default"])(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.newGameName.value)));
  (0,_modules_renderScores__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.oldGameBtn.addEventListener('click', () => {
  (0,_modules_getScores__WEBPACK_IMPORTED_MODULE_7__["default"])(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.oldGameID.value);
  (0,_modules_renderScores__WEBPACK_IMPORTED_MODULE_3__["default"])();
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.gameIdSpan.innerText = _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.oldGameID.value;
  window.localStorage.setItem('Game ID', JSON.stringify(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.oldGameID.value));
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userName.addEventListener('change', () => {
  if ((0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputName)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userName.value) !== true) {
    _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.smallNameError.innerText = (0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputName)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userName.value);
  } else {
    _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.smallNameError.innerText = '';
  }
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userScore.addEventListener('change', () => {
  if ((0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputScore)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userScore.value) !== true) {
    _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.smallScoreError.innerText = (0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputScore)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userScore.value);
  } else {
    _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.smallScoreError.innerText = '';
  }
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.addScoreBtn.addEventListener('click', async () => {
  if ((0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputName)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userName.value) === true && (0,_modules_checkInput__WEBPACK_IMPORTED_MODULE_8__.checkInputScore)(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userScore.value) === true) {
    const apiReturn = await (0,_modules_saveScore__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userName.value, _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.userScore.value, gameID);
    (0,_modules_succesOrErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(apiReturn);
  }
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.refreshBtn.addEventListener('click', () => {
  (0,_modules_renderScores__WEBPACK_IMPORTED_MODULE_3__["default"])(gameID);
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.startNewGameD.addEventListener('click', () => {
  // introSection.classList.remove('hide');
  // boardSection.classList.add('hide');
  // displayID.classList.add('hide');
  // startNewGameD.classList.add('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.introSection.classList.toggle('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.boardSection.classList.toggle('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.displayID.classList.toggle('hide');
  const textValue = _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.startNewGameD.value;
  if (textValue !== 'back') {
    _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.startNewGameD.value('back');
  }
});

_modules_domElements__WEBPACK_IMPORTED_MODULE_6__.startNewGameM.addEventListener('click', () => {
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.introSection.classList.remove('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.boardSection.classList.add('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.displayID.classList.add('hide');
  _modules_domElements__WEBPACK_IMPORTED_MODULE_6__.startNewGameM.classList.add('hide');
});


/***/ }),

/***/ "./src/modules/checkGameID.js":
/*!************************************!*\
  !*** ./src/modules/checkGameID.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");


const checkGameID = () => {
  if (!window.localStorage.getItem('Game ID')) {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.boardSection.classList.add('hide');
    _domElements__WEBPACK_IMPORTED_MODULE_0__.displayID.classList.add('hide');
    return ' ';
  }
  _domElements__WEBPACK_IMPORTED_MODULE_0__.introSection.classList.add('hide');
  const gameID = JSON.parse(window.localStorage.getItem('Game ID'));
  _domElements__WEBPACK_IMPORTED_MODULE_0__.gameIdSpan.innerText = gameID;
  return gameID;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkGameID);

/***/ }),

/***/ "./src/modules/checkInput.js":
/*!***********************************!*\
  !*** ./src/modules/checkInput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInputName": () => (/* binding */ checkInputName),
/* harmony export */   "checkInputScore": () => (/* binding */ checkInputScore)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");


const checkInputName = (name) => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.newEntryStatus.innerText = '';
  const noSpaces = (str) => str.replace(/\s/g, '').length < 3;
  if (name === '') {
    return "name field can't be empty";
  } if (name.length < 3) {
    return 'name field should be at least 3 characters long';
  } if (noSpaces(name) === true) {
    return 'please put at least 3 characters disregarding empty spaces';
  } if (name.length > 15) {
    return 'name field accepts max 15 characters';
  }
  return true;
};
const checkInputScore = (score) => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.newEntryStatus.innerText = '';
  const isNum = /^[0-9]+$/;
  if (score === '') {
    return 'score cannot be empty';
  } if (!isNum.test(score)) {
    return 'score field only accepts a number with no spaces';
  } if (score.length > 6) {
    return 'name field accepts max 6 characters';
  }
  return true;
};



/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScoreBtn": () => (/* binding */ addScoreBtn),
/* harmony export */   "boardSection": () => (/* binding */ boardSection),
/* harmony export */   "displayID": () => (/* binding */ displayID),
/* harmony export */   "gameIdSpan": () => (/* binding */ gameIdSpan),
/* harmony export */   "introSection": () => (/* binding */ introSection),
/* harmony export */   "newEntryStatus": () => (/* binding */ newEntryStatus),
/* harmony export */   "newGameBtn": () => (/* binding */ newGameBtn),
/* harmony export */   "newGameName": () => (/* binding */ newGameName),
/* harmony export */   "oldGameBtn": () => (/* binding */ oldGameBtn),
/* harmony export */   "oldGameID": () => (/* binding */ oldGameID),
/* harmony export */   "refreshBtn": () => (/* binding */ refreshBtn),
/* harmony export */   "smallNameError": () => (/* binding */ smallNameError),
/* harmony export */   "smallScoreError": () => (/* binding */ smallScoreError),
/* harmony export */   "startNewGameD": () => (/* binding */ startNewGameD),
/* harmony export */   "startNewGameM": () => (/* binding */ startNewGameM),
/* harmony export */   "userName": () => (/* binding */ userName),
/* harmony export */   "userScore": () => (/* binding */ userScore)
/* harmony export */ });
const newGameBtn = document.getElementById('new-game');
const newGameName = document.getElementById('game-name-user');
const oldGameBtn = document.getElementById('old-game');
const oldGameID = document.getElementById('game-id-user');
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const addScoreBtn = document.getElementById('submit-btn');
const displayID = document.getElementById('display-ID');
const gameIdSpan = document.getElementById('game-id');
const introSection = document.getElementById('intro');
const boardSection = document.getElementById('wrap');
const startNewGameD = document.getElementById('start-new-game-desktop');
const startNewGameM = document.getElementById('start-new-game-mobile');
const smallNameError = document.getElementById('error-name');
const smallScoreError = document.getElementById('error-score');
const newEntryStatus = document.getElementById('new-entry-status');



/***/ }),

/***/ "./src/modules/getScores.js":
/*!**********************************!*\
  !*** ./src/modules/getScores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderScores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderScores */ "./src/modules/renderScores.js");


const getScores = async (gameid) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`);
    let data = await response.json();
    data = data.result;
    data.sort((a, b) => b.score - a.score);
    window.localStorage.setItem('scoresDatabase', JSON.stringify(data));
    (0,_renderScores__WEBPACK_IMPORTED_MODULE_0__["default"])();
    return data;
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);


/***/ }),

/***/ "./src/modules/newGameID.js":
/*!**********************************!*\
  !*** ./src/modules/newGameID.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newGameID = async (str) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify(
      {
        name: str,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    const json = await response.json();
    window.localStorage.setItem('Game ID', JSON.stringify(json.result.split(' ')[3]));
    return json.result.split(' ')[3];
  }
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGameID);

/***/ }),

/***/ "./src/modules/renderScores.js":
/*!*************************************!*\
  !*** ./src/modules/renderScores.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");
/* harmony import */ var _assets_medalbg1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/medalbg1.png */ "./src/assets/medalbg1.png");
/* harmony import */ var _assets_medalbg2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/medalbg2.png */ "./src/assets/medalbg2.png");
/* harmony import */ var _assets_medalbg3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/medalbg3.png */ "./src/assets/medalbg3.png");





const renderScores = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.introSection.classList.add('hide');
  _domElements__WEBPACK_IMPORTED_MODULE_0__.boardSection.classList.remove('hide');
  _domElements__WEBPACK_IMPORTED_MODULE_0__.displayID.classList.remove('hide');
  const scores = JSON.parse(window.localStorage.getItem('scoresDatabase')) || [];
  const scoresPlaceholder = document.getElementById('scores-placeholder');
  while (scoresPlaceholder.firstChild) {
    scoresPlaceholder.removeChild(scoresPlaceholder.firstChild);
  }

  // 1st place
  if (scores.length > 0) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = _assets_medalbg1_png__WEBPACK_IMPORTED_MODULE_1__;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[0].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[0].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }
  // 2nd place
  if (scores.length > 1) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = _assets_medalbg2_png__WEBPACK_IMPORTED_MODULE_2__;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[1].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[1].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }
  // 3rd place
  if (scores.length > 1) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = _assets_medalbg3_png__WEBPACK_IMPORTED_MODULE_3__;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[2].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[2].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }

  if (scores.length > 2) {
    for (let i = 3; i < scores.length; i += 1) {
      const wrap = document.createElement('div');
      const wrap2 = document.createElement('div');
      const position = document.createElement('span');
      position.classList = 'position';
      position.innerText = i + 1;
      const name = document.createElement('span');
      name.classList = 'player';
      name.innerText = `${scores[i].user}`;
      const score = document.createElement('span');
      score.classList = 'score';
      score.innerText = `${scores[i].score}`;
      scoresPlaceholder.appendChild(wrap);
      wrap.appendChild(wrap2);
      wrap2.appendChild(position);
      wrap2.appendChild(name);
      wrap.appendChild(score);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderScores);


/***/ }),

/***/ "./src/modules/saveScore.js":
/*!**********************************!*\
  !*** ./src/modules/saveScore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getScores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScores */ "./src/modules/getScores.js");


const saveScore = async (name, score, gameID) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    (0,_getScores__WEBPACK_IMPORTED_MODULE_0__["default"])(gameID);
    const message = await response.json();
    return message.result;
  } catch (error) {
    return error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveScore);


/***/ }),

/***/ "./src/modules/succesOrErrorMessage.js":
/*!*********************************************!*\
  !*** ./src/modules/succesOrErrorMessage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");


const successOrErrorMessage = (str) => {
  if (str === 'Leaderboard score created correctly.') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.userName.value = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.userScore.value = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.newEntryStatus.innerText = 'Score added successfully.';
  } else {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.newEntryStatus.innerText = 'Score not added, please try again.';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (successOrErrorMessage);

/***/ }),

/***/ "./src/assets/background-landscape.png":
/*!*********************************************!*\
  !*** ./src/assets/background-landscape.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "056dac04be287ef9dc02.png";

/***/ }),

/***/ "./src/assets/background-portrait.png":
/*!********************************************!*\
  !*** ./src/assets/background-portrait.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a5d1ed00fa9c37cda53.png";

/***/ }),

/***/ "./src/assets/medalbg1.png":
/*!*********************************!*\
  !*** ./src/assets/medalbg1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e819c3cd542b3d74216.png";

/***/ }),

/***/ "./src/assets/medalbg2.png":
/*!*********************************!*\
  !*** ./src/assets/medalbg2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eabfc14a90961ea1912c.png";

/***/ }),

/***/ "./src/assets/medalbg3.png":
/*!*********************************!*\
  !*** ./src/assets/medalbg3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12882d9db3c4813bc30c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map