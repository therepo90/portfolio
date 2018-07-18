/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.scss":
/*!***********************!*\
  !*** ./src/base.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  font-size: 20px;\n  font-family: monospace;\n  margin: 0;\n  padding: 0; }\n  @media screen and (min-width: 2000px) {\n    html, body {\n      font-size: 35px; } }\n  @media screen and (min-width: 3000px) {\n    html, body {\n      font-size: 45px; } }\n\n* {\n  box-sizing: border-box; }\n\na {\n  transition: color 0.3s; }\n  a:visited, a:active, a:link {\n    color: white; }\n  a:hover {\n    color: lightgray; }\n\np {\n  margin: 0; }\n\n.icon {\n  width: 0.6rem;\n  height: 0.6rem;\n  vertical-align: middle;\n  box-sizing: content-box; }\n\n.center {\n  margin: 0 auto; }\n\n.stroke {\n  text-decoration: line-through; }\n\n.clear {\n  clear: both; }\n"

/***/ }),

/***/ "./src/components/about-me/about-me.scss":
/*!***********************************************!*\
  !*** ./src/components/about-me/about-me.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-me-img {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  box-shadow: 0 0 10px 2px #e6f3ff; }\n\n.about-me-name {\n  margin-top: 0.5rem;\n  text-align: center; }\n\n.about-me-bio {\n  display: inline-block;\n  font-size: 0.6rem; }\n"

/***/ }),

/***/ "./src/components/about-me/about-me.tsx":
/*!**********************************************!*\
  !*** ./src/components/about-me/about-me.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
class AboutMe extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section about" },
            React.createElement("div", { className: "section-header" }, "About me"),
            React.createElement("div", { className: "section-content" },
                React.createElement("div", { className: "section-highlights bordered-container" },
                    React.createElement("div", null,
                        React.createElement("img", { src: "build/assets/me.jpg", className: "about-me-img" })),
                    React.createElement("span", { className: "about-me-name" },
                        "Tomasz Szepczy\u0144ski",
                        React.createElement("br", null),
                        "-Software Developer",
                        React.createElement("br", null),
                        " ",
                        React.createElement("span", { className: "about-me-bio" }, "Born on 1990 in Cracow, Poland"),
                        React.createElement("br", null),
                        React.createElement("span", { className: "about-me-bio" },
                            React.createElement("a", { href: "mailto: tomasz.szepczynski@gmail.com" }, "tomasz.szepczynski@gmail.com")))),
                React.createElement("div", { className: "section-description bordered-container" },
                    React.createElement("p", null,
                        "Hello there, ",
                        React.createElement("br", null),
                        "I'm a passionate software developer, who likes to mess around with various technologies:"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Web development"),
                        React.createElement("li", null, "Game development"),
                        React.createElement("li", null, "Augmented Reality"),
                        React.createElement("li", null, "Hacking")),
                    React.createElement("p", null,
                        "I like bringing fancy ideas to life.",
                        React.createElement("br", null),
                        " ",
                        React.createElement("br", null),
                        "Currently living in Cracow, employeed as a web developer.",
                        React.createElement("br", null)))));
    }
}
exports.default = AboutMe;
;


/***/ }),

/***/ "./src/components/college-years-cont/college-years-cont.tsx":
/*!******************************************************************!*\
  !*** ./src/components/college-years-cont/college-years-cont.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = [
    'build/assets/games/alggen.jpg',
    'build/assets/tree3000.png',
    'build/assets/games/competence.jpg',
    'build/assets/games/droidz.png',
    'build/assets/games/logi.png',
    'build/assets/games/tanki.jpg',
    'build/assets/games/webgl.png',
    'build/assets/games/wp7.jpg',
];
class CollegeYearsCont extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section college-cont" },
            React.createElement("div", { className: "section-header" }, "College - 2010-2013"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/agh-2.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "First 3 years of college were just awesome. A lot of cool people and interesting subjects (calculus & matrixes ",
                    React.createElement("img", { src: "build/assets/icons/heart.png", className: "icon" }),
                    ").",
                    React.createElement("br", null),
                    " I participated in 2 internships, one of them included coding-dojos and  refactor workshops where using mouse was forbidden - only key shortcuts so I improved my IDE experience a lot.",
                    React.createElement("br", null),
                    React.createElement("br", null)),
                React.createElement("img", { src: "build/assets/icons/java2.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "In the end I was offered a job at telcom company where I spent a year with incredibly cool people. We've created application for managing employees competencies and room allocations tool. As a hard C++ dev I've always found JS/CSS/HTML to be for kids in kindergarten so I was doing mainly Java back-end. From time to time I was jumping into jquery / js libs functionalities to add some behaviours but I didn't want to touch html/css .",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Also I've reached my Engineer degree. It was about creating efficient TRIE trees - dictionary structures that purpose was to help finding possible words between starting string and ending strings for words correction. ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Here are some projects from college and job I have screenshots of:"),
                React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                    React.createElement("a", { href: image },
                        React.createElement("img", { src: image, className: "image-screenshot" }))))),
                React.createElement("img", { src: "build/assets/icons/csharp.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "The last one is ",
                    React.createElement("strong", null, "'SpazzyBall'"),
                    " which reached ",
                    React.createElement("strong", null, "10 000 downloads"),
                    " on Windows Mobile 7 in a year.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Worth to mention in terms of hacking is the fact I've manage to create poker card reader using OpenCV and Windows API to one of poker platforms. I also tried to write some kind of a bot but the risk was too big so I dropped it.")));
    }
}
exports.default = CollegeYearsCont;
;


/***/ }),

/***/ "./src/components/college-years/college-years.tsx":
/*!********************************************************!*\
  !*** ./src/components/college-years/college-years.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = ['build/assets/games/flash1.jpg',
    'build/assets/games/flash2.jpg',
    'build/assets/games/flash3.jpg',
    'build/assets/games/flash4.jpg',
    'build/assets/games/flash5.jpg',
    'build/assets/games/flash6.jpg',
    'build/assets/games/flash7.jpg',
    'build/assets/games/flash8.jpg',
    'build/assets/games/flash9.jpg',
    'build/assets/games/flash10.jpg'
];
class CollegeYears extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section college" },
            React.createElement("div", { className: "section-header" }, "College 2009-2010"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/agh-2.png", className: "image-near-text filled" }),
                React.createElement("p", null, "After passing my mature exam I went to IT studies where I wasn't very happy hence when a college friend of mine offered me a job as a Flash Game developer(Actionscript) I took it. It was a 7-man students company where I was paid ~2$/hour which after 2 weeks  increased to 4$ due to good results. We've created about ~30 games, here are some of them:"),
                React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                    React.createElement("a", { href: image },
                        React.createElement("img", { src: image, className: "image-screenshot" }))))),
                React.createElement("br", null),
                React.createElement("img", { src: "build/assets/icons/as2.png", className: "image-near-text" }),
                React.createElement("p", null,
                    "Due to the fact I was working remotely and I was paid per hour it was no use for me to create games that quickly as there was not much money from it. ",
                    React.createElement("br", null),
                    "Year after I quit the job and switched my major to Appliance IT on same department.")));
    }
}
exports.default = CollegeYears;
;


/***/ }),

/***/ "./src/components/cut/cut.scss":
/*!*************************************!*\
  !*** ./src/components/cut/cut.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\n  position: absolute;\n  z-index: 1;\n  bottom: 100%; }\n  .svg-container {\n    position: relative;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/components/early-years-cont/early-years-cont.tsx":
/*!**************************************************************!*\
  !*** ./src/components/early-years-cont/early-years-cont.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = ['build/assets/games/game-calc.PNG', 'build/assets/games/game-delforce.PNG', 'build/assets/games/game-gra.PNG', 'build/assets/games/game-klawisz.PNG',
    'build/assets/games/game-komorka.PNG',
    'build/assets/games/game-konkurs.PNG',
    'build/assets/games/game-strzelnica.PNG',
    'build/assets/games/game-wezyk.PNG'];
class EarlyYearsCont extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section early-years-cont" },
            React.createElement("div", { className: "section-header" }, "Early years 2003-2006"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/icons/vb.png", className: "image-near-text filled" }),
                React.createElement("p", null, "So I needed to know more about creating hence when I got Visual Basic 6 book I went full cave-programming. During 2004/2005 I've created a bunch of games:"),
                React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                    React.createElement("a", { href: image },
                        React.createElement("img", { src: image, className: "image-screenshot" }))))),
                React.createElement("p", null,
                    "And also I've created my first full webpage for my school class. It had all the html/css/js available features: fancy cursors, sounds, surveys, even falling snow. I remember doing hosting optimizations creating like 8 accounts to hold class images on free hosting to workaround bandwith limitations...",
                    React.createElement("br", null),
                    "Also Around 2005 webpage full of images/gifs was made for my Warcraft 3 clan. It was my first page that looked pretty decent and had some cohesive colors.")));
    }
}
exports.default = EarlyYearsCont;
;


/***/ }),

/***/ "./src/components/early-years/early-years.tsx":
/*!****************************************************!*\
  !*** ./src/components/early-years/early-years.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
class EarlyYears extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section early-years" },
            React.createElement("div", { className: "section-header" }, "Early years 2000-2003"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/icons/html.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "I started developing at the age of ~10 around 2000. It was a Microsoft Word webpage for my Diablo clan. After week of doing it and being so proud of my first creation(marquees, pink and purple colors all over the place) my friends told me it's a crap and they would do much better in 10 minutes with a notepad. ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "I dropped webdev for a while and around 2001 I've moved to creating client-side modifications for Counter-Strike game(custom graphics, commands, sounds, maps). It was pretty hilarious as I recall but a lot of fun surely... ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "At the age of 13 I met a friend named Lukas at school and he told me he created Calculator! I was incredibly impressed and wanted to created my own. So he showed me Visual Basic macros in Microsoft Office and during one lesson we've created simple calculator app(of course with pink buttons and icky background). I was astonished. When I went home I wanted to do it myself to mess around with it and add additional functionalities (square root ftw!).",
                    React.createElement("br", null),
                    "So i ran microsoft office and opened macros and ... I forgot what are the commands and didn't know what should I type to make it work. It was 2003 and ... there was no ISP in my home and no documentation whatsoever. So... I used landline phone and called him and asked him to tell me the exact commands and lines to type. It was hilarious but after 20 minutes of typing I had my calculator working.",
                    React.createElement("br", null),
                    "I was super happy and wanted to create even more.")));
    }
}
exports.default = EarlyYears;
;


/***/ }),

/***/ "./src/components/gate/gate.scss":
/*!***************************************!*\
  !*** ./src/components/gate/gate.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gate-container {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none; }\n\n.gate {\n  display: inline-block;\n  position: absolute;\n  width: 50vw;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"build/assets/gate/gate10.jpg\");\n  box-shadow: inset 0px 0 5rem 4rem rgba(0, 0, 0, 0.8);\n  top: 0;\n  animation-duration: 4s;\n  animation-iteration-count: 1;\n  animation-timing-function: ease;\n  animation-fill-mode: forwards;\n  animation-delay: 1s;\n  will-change: transform; }\n  .gate.left {\n    transform: translateX(0);\n    animation-name: slide-left; }\n  .gate.right {\n    transform: translateX(50vw) scaleX(-1);\n    animation-name: slide-right; }\n\n@keyframes slide-left {\n  from {\n    transform: translateX(0); }\n  to {\n    transform: translateX(-50vw); } }\n\n@keyframes slide-right {\n  from {\n    transform: translateX(50vw) scaleX(-1); }\n  to {\n    transform: translateX(100vw) scaleX(-1); } }\n\n.knocker {\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100px;\n  height: 60vh;\n  filter: drop-shadow(0rem 0rem 0.5rem #222222);\n  right: 0; }\n\n.eye {\n  z-index: 2;\n  right: 0;\n  animation-name: glow;\n  animation-duration: 5s;\n  animation-timing-function: ease;\n  animation-delay: 0.15s;\n  animation-fill-mode: forwards;\n  opacity: 0; }\n\n@keyframes glow {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 1; }\n  40% {\n    opacity: 0.8; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 0.8; }\n  100% {\n    opacity: 1; } }\n\n.shadow {\n  position: absolute;\n  width: 50vw;\n  height: 100vh;\n  z-index: 3;\n  animation-duration: 0.3s;\n  animation-name: shadow-anim;\n  animation-iteration-count: 1;\n  animation-timing-function: ease;\n  animation-fill-mode: forwards;\n  animation-delay: 1s; }\n\n@keyframes shadow-anim {\n  0% {\n    box-shadow: none; }\n  100% {\n    box-shadow: 0.5rem 0px 0.5rem 0px rgba(0, 0, 0, 0.75); } }\n"

/***/ }),

/***/ "./src/components/gate/gate.tsx":
/*!**************************************!*\
  !*** ./src/components/gate/gate.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
class Gate extends react_1.Component {
    render() {
        return React.createElement("div", { className: "gate-container" },
            React.createElement("div", { className: "gate left" },
                React.createElement("img", { src: "build/assets/gate/knocker-left.png", className: "knocker" }),
                React.createElement("img", { src: "build/assets/gate/eye-left-2.png", className: "knocker eye" }),
                React.createElement("div", { className: "shadow" })),
            React.createElement("div", { className: "gate right" },
                React.createElement("img", { src: "build/assets/gate/knocker-left.png", className: "knocker" }),
                React.createElement("img", { src: "build/assets/gate/eye-left-2.png", className: "knocker eye" }),
                React.createElement("div", { className: "shadow" })));
    }
}
exports.default = Gate;


/***/ }),

/***/ "./src/components/jobs-cont-2/jobs-cont-2.tsx":
/*!****************************************************!*\
  !*** ./src/components/jobs-cont-2/jobs-cont-2.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = [
    'build/assets/games/cv1.jpg',
    'build/assets/games/cv2.jpg',
    'build/assets/games/cv3.jpg',
    'build/assets/games/cv4.jpg',
    'build/assets/games/cv5.jpg',
];
class JobsCont2 extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section jobs-cont-2" },
            React.createElement("div", { className: "section-header" }, "Career 2017-present"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "I've started doing some hobby side-projects in Unity regarding games and computer graphics. I've even created\u00A0",
                    React.createElement("a", { href: "https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA" },
                        React.createElement("img", { src: "build/assets/icons/yt1.png", className: "icon" }),
                        "Youtube channel"),
                    "\u00A0 where I publish all computer graphics thing I do. Also I've started developing assets for Unity Asset Store: ",
                    React.createElement("a", { href: "https://assetstore.unity.com/publishers/25578" }, " My\u00A0publisher\u00A0account"),
                    "."),
                React.createElement("img", { src: "build/assets/icons/angular2.png", className: "image-near-text no-margin-top" }),
                React.createElement("p", null,
                    React.createElement("br", null),
                    "I've joined another sport booking company where currently I'm using Angular6.")));
    }
}
exports.default = JobsCont2;
;


/***/ }),

/***/ "./src/components/jobs-cont/jobs-cont.tsx":
/*!************************************************!*\
  !*** ./src/components/jobs-cont/jobs-cont.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = [
    'build/assets/games/cv1.jpg',
    'build/assets/games/cv2.jpg',
    'build/assets/games/cv3.jpg',
    'build/assets/games/cv4.jpg',
    'build/assets/games/cv5.jpg',
];
class JobsCont extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section jobs-cont" },
            React.createElement("div", { className: "section-header" }, "Career 2016-2017"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "We've traveled with our game to a game conference: \"Let's play Cz\u0119stochowa\" after which we got invited to \"Good Game Expo Warsaw\". After the GGE we created our fanpage: ",
                    React.createElement("a", { href: "https://www.facebook.com/CursedValley/" }, "Cursed Valley"),
                    " and after some investors talks we decided to transform our game to 2D: ",
                    React.createElement("br", null),
                    React.createElement("br", null)),
                React.createElement("div", { className: "center video-container" },
                    React.createElement("iframe", { width: "100%", height: "100%", src: "https://www.youtube.com/embed/o0Wxu2FK06A", allowFullScreen: true })),
                React.createElement("p", null,
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "After that we got invited to \"Digital Dragons Cracow\", but for now the development has been suspended as everyone took his own path. ",
                    React.createElement("br", null),
                    "Here is a couple of photos from this journey:",
                    React.createElement("br", null)),
                React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                    React.createElement("a", { href: image },
                        React.createElement("img", { src: image, className: "image-screenshot" }))))),
                React.createElement("br", null),
                React.createElement("img", { src: "build/assets/icons/react-redux.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "I joined sport booking company and switched to React & Redux stack. After 2 years of ng I wanted to see what's the fuss about and who Abramov is. I immediately loved JSX, yarn, ",
                    React.createElement("span", { className: "stroke" }, "webpack"),
                    ", ES7, Express, Jest, unidirectional app flow, single store, functional programming. The only thing I hated was huge boilerplate and weak performance. ",
                    React.createElement("br", null),
                    "Everytime someone wrote `reduce()` with spread operator inside I cried. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "One day when I saw clicking a checkbox in big component tree takes 200ms to select itself I felt like this is wrong direction of web development. Selecting checkbox was like this:",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Create & dispatch action, go through redux middleware, run proper saga, propagate event to ALL reducers, reacreating ImmutableJS store, running memoized reselects then re-rendering big component tree with nested tables even optimized by PureComponent to finally show me I selected a checkbox.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    " And it was 200ms on my PC with 4 cores, 16gb ram! I could run Witcher 30FPS on it and I can't select a checkbox. I decided thats not the good direction so I started looking for some freedom and maybe give a chance to Angular again.")));
    }
}
exports.default = JobsCont;
;


/***/ }),

/***/ "./src/components/jobs/jobs.tsx":
/*!**************************************!*\
  !*** ./src/components/jobs/jobs.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = [
    'build/assets/games/alggen.jpg',
    'build/assets/games/competence.jpg',
    'build/assets/games/droidz.png',
    'build/assets/games/logi.png',
    'build/assets/games/tanki.jpg',
    'build/assets/games/webgl.png',
    'build/assets/games/wp7.jpg',
];
class Jobs extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section jobs" },
            React.createElement("div", { className: "section-header" }, "Career 2014-2016"),
            React.createElement("div", { className: "section-main-description" },
                React.createElement("img", { src: "build/assets/icons/angular2.png", className: "image-near-text" }),
                React.createElement("p", null,
                    "I started working in italian company which was creating huge(200+ pages) financial reports. I was hired as back-end Java guy and I started creating SQL query wrappers for Oracle database. We were lacking front-ends so I was asked if I'm interested in doing some GUI. They told me to give it a try and it will be only time to time work... so I gave it a chance. That day I was introduced to AngularJS and was transformed to 70%/30% front-end/back-end guy.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "At the beggining I wasn't even aware about the words people used around: \"bower, npm, yeoman, SPA, grunt, less, karma\" but I remembered to create symlink for my `node_modules` directory not to spend whole day waiting for `npm install` to finish.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "I was the main front-end creator of ",
                    React.createElement("a", { href: "https://application.skyminder.com" }, "https://application.skyminder.com"),
                    " - web application that serves financial reports for all over the world companies(even on small islands you've never heard of). It was web/pdf/txt. AngularJS had super features, declarative UI, but was incredibly slow for this task due to \"ng-for\" and digest system - generating complex table was taking 60seconds, so I ended up in creating my own performant engine for generating reports that did it in 200ms. Also I've created txt terminal-like generator for 2D tables. App functionalities contained multiple languages(e.g. chinese, german), SSO authentication system, RWD, IE9+ support.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Also I've reached my Master of Science degrees. It was about creating web application for explicit solving public contests from Facebook/Twitter to prevent cheating. ",
                    React.createElement("br", null),
                    React.createElement("a", { href: "build/assets/magisterka_tsz.pdf" }, "MSc work(polish\u00A0version)"),
                    ".",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null)),
                React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text filled no-margin-top" }),
                React.createElement("p", null,
                    "I've heard there is available free version of Unity game engine with huge collection of free assets available in its store, so I've started discovering this inconceivable tool.",
                    React.createElement("br", null),
                    " I wanted to create a game with a team so I joined project called 'Cursed Valley' found on\u00A0",
                    React.createElement("a", { href: "www.gamedev.pl" }, "www.gamedev.pl"),
                    " . We've created a game, which trailer you can see below: ",
                    React.createElement("br", null),
                    React.createElement("br", null)),
                React.createElement("div", { className: "center video-container" },
                    React.createElement("iframe", { width: "100%", height: "100%", src: "https://www.youtube.com/embed/JorVn1ZvSmA", allowFullScreen: true }))));
    }
}
exports.default = Jobs;
;


/***/ }),

/***/ "./src/components/main.tsx":
/*!*********************************!*\
  !*** ./src/components/main.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const about_me_1 = __webpack_require__(/*! ./about-me/about-me */ "./src/components/about-me/about-me.tsx");
const early_years_1 = __webpack_require__(/*! ./early-years/early-years */ "./src/components/early-years/early-years.tsx");
const early_years_cont_1 = __webpack_require__(/*! ./early-years-cont/early-years-cont */ "./src/components/early-years-cont/early-years-cont.tsx");
const mid_years_1 = __webpack_require__(/*! ./mid-years/mid-years */ "./src/components/mid-years/mid-years.tsx");
const gate_1 = __webpack_require__(/*! ./gate/gate */ "./src/components/gate/gate.tsx");
const college_years_1 = __webpack_require__(/*! ./college-years/college-years */ "./src/components/college-years/college-years.tsx");
const college_years_cont_1 = __webpack_require__(/*! ./college-years-cont/college-years-cont */ "./src/components/college-years-cont/college-years-cont.tsx");
const jobs_1 = __webpack_require__(/*! ./jobs/jobs */ "./src/components/jobs/jobs.tsx");
const jobs_cont_1 = __webpack_require__(/*! ./jobs-cont/jobs-cont */ "./src/components/jobs-cont/jobs-cont.tsx");
const jobs_cont_2_1 = __webpack_require__(/*! ./jobs-cont-2/jobs-cont-2 */ "./src/components/jobs-cont-2/jobs-cont-2.tsx");
const navbar_1 = __webpack_require__(/*! ./navbar/navbar */ "./src/components/navbar/navbar.tsx");
const preload_images_1 = __webpack_require__(/*! ./preload-images/preload-images */ "./src/components/preload-images/preload-images.tsx");
const images = [
    'build/assets/gate/gate10.jpg',
    'build/assets/gate/knocker-left.png',
    'build/assets/gate/eye-left-2.png',
    'build/assets/backgrounds/bg4.jpg',
    'build/assets/me.jpg',
    'build/assets/backgrounds/bg1.jpg',
];
const showGate = true;
class Main extends react_1.Component {
    constructor() {
        super(...arguments);
        this.loadingIndicator = React.createElement("div", null, "Loading ...");
        this.state = {
            gateVisible: showGate,
        };
        this.onImagesLoaded = () => {
            this.setState({
                gateVisible: showGate,
            });
        };
    }
    render() {
        return React.createElement(preload_images_1.default, { images: images, loadingIndicator: this.loadingIndicator, mount: true, loaded: this.onImagesLoaded },
            React.createElement(React.Fragment, null,
                this.state.gateVisible && React.createElement(gate_1.default, null),
                React.createElement(React.Fragment, null,
                    React.createElement(navbar_1.default, null),
                    React.createElement("div", { className: "page-container" },
                        React.createElement(about_me_1.default, null),
                        React.createElement(early_years_1.default, null),
                        React.createElement(early_years_cont_1.default, null),
                        React.createElement(mid_years_1.default, null),
                        React.createElement(college_years_1.default, null),
                        React.createElement(college_years_cont_1.default, null),
                        React.createElement(jobs_1.default, null),
                        React.createElement(jobs_cont_1.default, null),
                        React.createElement(jobs_cont_2_1.default, null)))));
    }
}
exports.default = Main;
;


/***/ }),

/***/ "./src/components/mid-years/mid-years.tsx":
/*!************************************************!*\
  !*** ./src/components/mid-years/mid-years.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const images = ['build/assets/games/game-civic.jpg',
    'build/assets/games/game-izo.jpg',
    'build/assets/games/game-literaki.jpg',
    'build/assets/games/game-ogl.jpg',
    'build/assets/games/game-oneproj.jpg',
    'build/assets/games/game-sudo.jpg',];
class MidYears extends react_1.Component {
    render() {
        return React.createElement("div", { className: "section mid-years" },
            React.createElement("div", { className: "section-header" }, "High school 2006-2009"),
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("img", { src: "build/assets/icons/cpp.png", className: "image-near-text" }),
                React.createElement("p", null,
                    "So after going to middle-school I switched to creating bots for MMOs like Silkroad/Knight online and I really wanted to learn creating private servers and bots. Around 2007 I found excellent Windows API ",
                    React.createElement("a", { href: "http://xion.org.pl/" }, "http://xion.org.pl/"),
                    " tutorial, but it needed C++ knowledge. Fortunately there was also full pdf containing C++ tutorial so I've read it and done all exercises including games like tic-tac-toe.",
                    React.createElement("br", null),
                    " C++ was so awesome I wanted to learn more so I've bought two C++ books 'Thinking in C++', read it and done all exercices. Also it was about time for my mature exam and I was doing a lot of math school tasks and I wanted to boost up my calculation work. I remember creating my first handy C++ app that was helpful for me:  it was \"Horner-schema solver\".",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "I've returned to game development,  join warsztat:\u00A0",
                    React.createElement("a", { href: "https://warsztat.gd/user/lastseeds/projects" },
                        React.createElement("img", { src: "build/assets/icons/warsztat-icon.jpg", className: "icon" }),
                        "My account"),
                    " and created a couple of games with C++/SFML/SDL/OpenGL(funny thing is I was still writing code in polish). I remember creating programming solutions which later I found to be ubiquitous programming patterns and rules of thumb. That was pretty fun."),
                React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                    React.createElement("a", { href: image },
                        React.createElement("img", { src: image, className: "image-screenshot" })))))));
    }
}
exports.default = MidYears;
;


/***/ }),

/***/ "./src/components/navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  background-color: transparent;\n  border: 2px solid white;\n  border-radius: 5px;\n  z-index: 10;\n  margin: 0.6rem 0.2rem; }\n  .navbar-links {\n    display: flex;\n    flex-direction: column;\n    padding: 0.3rem 0; }\n    .navbar-links > a {\n      padding: 0 0.2rem;\n      background-color: transparent; }\n  .navbar-img {\n    width: 2.5rem;\n    height: 2.5rem;\n    transition: all 0.3s ease; }\n    .navbar-img.filled {\n      background: white;\n      border-radius: 30px; }\n    .navbar-img:hover {\n      background-color: darkgray;\n      transform: scale(1.2); }\n"

/***/ }),

/***/ "./src/components/navbar/navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
class Navbar extends react_1.Component {
    render() {
        return React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "navbar-links" },
                React.createElement("a", { href: "https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA" },
                    React.createElement("img", { src: "build/assets/icons/yt2.png", className: "navbar-img filled" })),
                React.createElement("a", { href: "https://github.com/therepo90" },
                    React.createElement("img", { src: "build/assets/icons/github.png", className: "navbar-img filled" })),
                React.createElement("a", { href: "mailto: tomasz.szepczynski@gmail.com" },
                    React.createElement("img", { src: "build/assets/icons/email.png", className: "navbar-img filled" }))));
    }
}
exports.default = Navbar;


/***/ }),

/***/ "./src/components/preload-images/preload-images.tsx":
/*!**********************************************************!*\
  !*** ./src/components/preload-images/preload-images.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
class PreloadImages extends react_1.Component {
    constructor() {
        super(...arguments);
        this.imagesLoaded = 0;
        this.renderedImagesFirstTime = false;
        this.state = {
            showChildren: false,
        };
        this.onLoadImage = (src) => () => {
            const { images } = this.props;
            this.imagesLoaded++;
            if (this.imagesLoaded >= images.length) {
                setTimeout(() => this.onLoadedImages(), 0);
            }
        };
        this.onLoadedImages = () => {
            this.setState({
                showChildren: true,
            });
            this.props.loaded && this.props.loaded();
        };
    }
    componentDidMount() {
        this.renderedImagesFirstTime = true;
        setTimeout(() => {
            if (!this.state.showChildren) {
                this.onLoadedImages();
            }
        }, 3000);
    }
    render() {
        const { images, loadingIndicator, children, mount } = this.props;
        const { showChildren } = this.state;
        return React.createElement(React.Fragment, null,
            !showChildren && loadingIndicator,
            !this.renderedImagesFirstTime && !showChildren && images.map((src, i) => React.createElement("img", { key: i, src: src, onLoad: this.onLoadImage(src), onError: this.onLoadImage(src), style: { display: 'none' } })),
            !mount && showChildren && children,
            mount && React.createElement("div", { style: showChildren ? { display: 'initial' } : { display: 'none' } }, children));
    }
}
exports.default = PreloadImages;
;


/***/ }),

/***/ "./src/components/sections.scss":
/*!**************************************!*\
  !*** ./src/components/sections.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  color: white;\n  padding: 2rem 10rem;\n  box-shadow: inset 0px 0 2rem 1rem rgba(0, 0, 0, 0.8);\n  min-height: 30rem;\n  width: 100%; }\n  .section-highlights {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    line-height: 1.2rem; }\n  .section-description {\n    width: 25rem;\n    font-size: 0.8rem;\n    margin-left: 2rem; }\n  .section-content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5rem 0; }\n  .section-header {\n    display: inline-block;\n    font-size: 1.5rem;\n    border-bottom: 2px solid white;\n    text-shadow: 1px 1px black; }\n  .section-main-description {\n    margin-top: 1rem;\n    font-size: 0.75rem;\n    line-height: 1rem;\n    background-color: rgba(63, 63, 63, 0.55);\n    border-radius: 10px;\n    padding: 1rem; }\n  .section.about {\n    background-image: url(\"build/assets/backgrounds/bg4.jpg\"); }\n  .section.early-years {\n    background-image: url(\"build/assets/backgrounds/bg5.jpg\"); }\n  .section.early-years-cont {\n    background-image: url(\"build/assets/backgrounds/bg6.jpg\"); }\n  .section.mid-years {\n    background-image: url(\"build/assets/backgrounds/bg7.jpg\"); }\n  .section.college {\n    background-image: url(\"build/assets/backgrounds/bg22.jpg\"); }\n  .section.college-cont {\n    background-image: url(\"build/assets/backgrounds/bg15.jpg\"); }\n  .section.jobs {\n    background-image: url(\"build/assets/backgrounds/bg17.jpg\"); }\n  .section.jobs-cont {\n    background-image: url(\"build/assets/backgrounds/bg10.jpg\"); }\n  .section.jobs-cont-2 {\n    background-image: url(\"build/assets/backgrounds/bg14.jpg\"); }\n  .section-main-description > p {\n    min-height: 6rem;\n    margin-top: 0.3rem; }\n  .section-main-description > p:first-of-type:first-letter,\n  .section-description > p:first-of-type:first-letter {\n    font-size: 1.3rem; }\n\n.bordered-container {\n  border: 3px solid rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  padding: 1rem 2rem;\n  background-color: rgba(63, 63, 63, 0.5);\n  color: white; }\n\n.image-screenshots {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem 1rem;\n  border-radius: 20px;\n  clear: both;\n  justify-content: center; }\n\n.image-screenshot {\n  width: 6rem;\n  height: 6rem;\n  margin: 0 0.3rem;\n  border-radius: 5px;\n  box-shadow: 3px 3px 2px 2px black;\n  transition: transform 0.3s; }\n  .image-screenshot:hover {\n    transform: scale(1.2); }\n\n.image-near-text {\n  max-width: 6rem;\n  height: 6rem;\n  margin-right: 1.6rem;\n  margin-bottom: 0.4rem;\n  margin-top: 0.3rem;\n  float: left;\n  clear: both; }\n  .image-near-text.filled {\n    background: white;\n    border-radius: 30px; }\n\n.video-container {\n  width: 25rem;\n  max-width: 50%;\n  height: 10rem; }\n"

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const main_1 = __webpack_require__(/*! ./components/main */ "./src/components/main.tsx");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const styles = [
    __webpack_require__(/*! ./base.scss */ "./src/base.scss"),
    __webpack_require__(/*! ./components/sections.scss */ "./src/components/sections.scss"),
    __webpack_require__(/*! ./components/navbar/navbar.scss */ "./src/components/navbar/navbar.scss"),
    __webpack_require__(/*! ./components/about-me/about-me.scss */ "./src/components/about-me/about-me.scss"),
    __webpack_require__(/*! ./components/gate/gate.scss */ "./src/components/gate/gate.scss"),
    __webpack_require__(/*! ./components/cut/cut.scss */ "./src/components/cut/cut.scss")
];
const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles.reduce((acc, prev) => {
    return `${acc} \n ${prev}`;
}, '');
document.head.appendChild(stylesEl);
ReactDOM.render(React.createElement(main_1.default, null), document.getElementById("app-root"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2xsZWdlLXllYXJzLWNvbnQvY29sbGVnZS15ZWFycy1jb250LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2xsZWdlLXllYXJzL2NvbGxlZ2UteWVhcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1dC9jdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lYXJseS15ZWFycy1jb250L2Vhcmx5LXllYXJzLWNvbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Vhcmx5LXllYXJzL2Vhcmx5LXllYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYXRlL2dhdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYXRlL2dhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2pvYnMtY29udC0yL2pvYnMtY29udC0yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9qb2JzLWNvbnQvam9icy1jb250LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9qb2JzL2pvYnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21pZC15ZWFycy9taWQteWVhcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVsb2FkLWltYWdlcy9wcmVsb2FkLWltYWdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsOEJBQThCLG9CQUFvQiwyQkFBMkIsY0FBYyxlQUFlLEVBQUUsMkNBQTJDLGtCQUFrQix3QkFBd0IsRUFBRSxFQUFFLDJDQUEyQyxrQkFBa0Isd0JBQXdCLEVBQUUsRUFBRSxPQUFPLDJCQUEyQixFQUFFLE9BQU8sMkJBQTJCLEVBQUUsaUNBQWlDLG1CQUFtQixFQUFF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LGlCQUFpQixFQUFFLHdCQUF3QixrQkFBa0Isb0JBQW9CLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLDRCQUE0QixFQUFFLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsc0NBQXNDLCtCQUErQixFQUFFLDZCQUE2Qiw0QkFBNEIsRUFBRSxzQkFBc0Isb0JBQW9CLGlCQUFpQix5QkFBeUIsMEJBQTBCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLEVBQUUsNkJBQTZCLHdCQUF3QiwwQkFBMEIsRUFBRSxzQkFBc0IsaUJBQWlCLG1CQUFtQixrQkFBa0IsRUFBRSxHOzs7Ozs7Ozs7Ozs7QUNBMzNGO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksTUFBTSxLQUFLO0FBQzdCLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJodG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcXG4gICAgaHRtbCwgYm9keSB7XFxuICAgICAgZm9udC1zaXplOiAzNXB4OyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMDBweCkge1xcbiAgICBodG1sLCBib2R5IHtcXG4gICAgICBmb250LXNpemU6IDQ1cHg7IH0gfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmEge1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zczsgfVxcbiAgYTp2aXNpdGVkLCBhOmFjdGl2ZSwgYTpsaW5rIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBhOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG4gIGhlaWdodDogMC42cmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuXFxuLmNlbnRlciB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5zdHJva2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4uY2xlYXIge1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYWJvdXQtbWUtaW1nIHtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICNlNmYzZmY7IH1cXG5cXG4uYWJvdXQtbWUtbmFtZSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYWJvdXQtbWUtYmlvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC42cmVtOyB9XFxuXCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgQWJvdXRNZSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uIGFib3V0XCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiQWJvdXQgbWVcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1jb250ZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oaWdobGlnaHRzIGJvcmRlcmVkLWNvbnRhaW5lclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9tZS5qcGdcIiwgY2xhc3NOYW1lOiBcImFib3V0LW1lLWltZ1wiIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJhYm91dC1tZS1uYW1lXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUb21hc3ogU3plcGN6eVxcdTAxNDRza2lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi1Tb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiYWJvdXQtbWUtYmlvXCIgfSwgXCJCb3JuIG9uIDE5OTAgaW4gQ3JhY293LCBQb2xhbmRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiYWJvdXQtbWUtYmlvXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJtYWlsdG86IHRvbWFzei5zemVwY3p5bnNraUBnbWFpbC5jb21cIiB9LCBcInRvbWFzei5zemVwY3p5bnNraUBnbWFpbC5jb21cIikpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tZGVzY3JpcHRpb24gYm9yZGVyZWQtY29udGFpbmVyXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhlbGxvIHRoZXJlLCBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkknbSBhIHBhc3Npb25hdGUgc29mdHdhcmUgZGV2ZWxvcGVyLCB3aG8gbGlrZXMgdG8gbWVzcyBhcm91bmQgd2l0aCB2YXJpb3VzIHRlY2hub2xvZ2llczpcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIldlYiBkZXZlbG9wbWVudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiR2FtZSBkZXZlbG9wbWVudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiQXVnbWVudGVkIFJlYWxpdHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIkhhY2tpbmdcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSSBsaWtlIGJyaW5naW5nIGZhbmN5IGlkZWFzIHRvIGxpZmUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXJyZW50bHkgbGl2aW5nIGluIENyYWNvdywgZW1wbG95ZWVkIGFzIGEgd2ViIGRldmVsb3Blci5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBYm91dE1lO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2FsZ2dlbi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy90cmVlMzAwMC5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jb21wZXRlbmNlLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2Ryb2lkei5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9sb2dpLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3RhbmtpLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dlYmdsLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dwNy5qcGcnLFxyXG5dO1xyXG5jbGFzcyBDb2xsZWdlWWVhcnNDb250IGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gY29sbGVnZS1jb250XCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiQ29sbGVnZSAtIDIwMTAtMjAxM1wiKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLW1haW4tZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvYWdoLTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRmlyc3QgMyB5ZWFycyBvZiBjb2xsZWdlIHdlcmUganVzdCBhd2Vzb21lLiBBIGxvdCBvZiBjb29sIHBlb3BsZSBhbmQgaW50ZXJlc3Rpbmcgc3ViamVjdHMgKGNhbGN1bHVzICYgbWF0cml4ZXMgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvaGVhcnQucG5nXCIsIGNsYXNzTmFtZTogXCJpY29uXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIpLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBJIHBhcnRpY2lwYXRlZCBpbiAyIGludGVybnNoaXBzLCBvbmUgb2YgdGhlbSBpbmNsdWRlZCBjb2RpbmctZG9qb3MgYW5kICByZWZhY3RvciB3b3Jrc2hvcHMgd2hlcmUgdXNpbmcgbW91c2Ugd2FzIGZvcmJpZGRlbiAtIG9ubHkga2V5IHNob3J0Y3V0cyBzbyBJIGltcHJvdmVkIG15IElERSBleHBlcmllbmNlIGEgbG90LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvamF2YTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW4gdGhlIGVuZCBJIHdhcyBvZmZlcmVkIGEgam9iIGF0IHRlbGNvbSBjb21wYW55IHdoZXJlIEkgc3BlbnQgYSB5ZWFyIHdpdGggaW5jcmVkaWJseSBjb29sIHBlb3BsZS4gV2UndmUgY3JlYXRlZCBhcHBsaWNhdGlvbiBmb3IgbWFuYWdpbmcgZW1wbG95ZWVzIGNvbXBldGVuY2llcyBhbmQgcm9vbSBhbGxvY2F0aW9ucyB0b29sLiBBcyBhIGhhcmQgQysrIGRldiBJJ3ZlIGFsd2F5cyBmb3VuZCBKUy9DU1MvSFRNTCB0byBiZSBmb3Iga2lkcyBpbiBraW5kZXJnYXJ0ZW4gc28gSSB3YXMgZG9pbmcgbWFpbmx5IEphdmEgYmFjay1lbmQuIEZyb20gdGltZSB0byB0aW1lIEkgd2FzIGp1bXBpbmcgaW50byBqcXVlcnkgLyBqcyBsaWJzIGZ1bmN0aW9uYWxpdGllcyB0byBhZGQgc29tZSBiZWhhdmlvdXJzIGJ1dCBJIGRpZG4ndCB3YW50IHRvIHRvdWNoIGh0bWwvY3NzIC5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxzbyBJJ3ZlIHJlYWNoZWQgbXkgRW5naW5lZXIgZGVncmVlLiBJdCB3YXMgYWJvdXQgY3JlYXRpbmcgZWZmaWNpZW50IFRSSUUgdHJlZXMgLSBkaWN0aW9uYXJ5IHN0cnVjdHVyZXMgdGhhdCBwdXJwb3NlIHdhcyB0byBoZWxwIGZpbmRpbmcgcG9zc2libGUgd29yZHMgYmV0d2VlbiBzdGFydGluZyBzdHJpbmcgYW5kIGVuZGluZyBzdHJpbmdzIGZvciB3b3JkcyBjb3JyZWN0aW9uLiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSGVyZSBhcmUgc29tZSBwcm9qZWN0cyBmcm9tIGNvbGxlZ2UgYW5kIGpvYiBJIGhhdmUgc2NyZWVuc2hvdHMgb2Y6XCIpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90c1wiIH0sIGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBpbWFnZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpbWFnZSwgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RcIiB9KSkpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy9jc2hhcnAucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIGxhc3Qgb25lIGlzIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCInU3Bhenp5QmFsbCdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgd2hpY2ggcmVhY2hlZCBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiMTAgMDAwIGRvd25sb2Fkc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBvbiBXaW5kb3dzIE1vYmlsZSA3IGluIGEgeWVhci5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV29ydGggdG8gbWVudGlvbiBpbiB0ZXJtcyBvZiBoYWNraW5nIGlzIHRoZSBmYWN0IEkndmUgbWFuYWdlIHRvIGNyZWF0ZSBwb2tlciBjYXJkIHJlYWRlciB1c2luZyBPcGVuQ1YgYW5kIFdpbmRvd3MgQVBJIHRvIG9uZSBvZiBwb2tlciBwbGF0Zm9ybXMuIEkgYWxzbyB0cmllZCB0byB3cml0ZSBzb21lIGtpbmQgb2YgYSBib3QgYnV0IHRoZSByaXNrIHdhcyB0b28gYmlnIHNvIEkgZHJvcHBlZCBpdC5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsZWdlWWVhcnNDb250O1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDEuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2gyLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoMy5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDQuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2g1LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoNi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDcuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2g4LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoOS5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDEwLmpwZydcclxuXTtcclxuY2xhc3MgQ29sbGVnZVllYXJzIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gY29sbGVnZVwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNvbGxlZ2UgMjAwOS0yMDEwXCIpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9hZ2gtMi5wbmdcIiwgY2xhc3NOYW1lOiBcImltYWdlLW5lYXItdGV4dCBmaWxsZWRcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQWZ0ZXIgcGFzc2luZyBteSBtYXR1cmUgZXhhbSBJIHdlbnQgdG8gSVQgc3R1ZGllcyB3aGVyZSBJIHdhc24ndCB2ZXJ5IGhhcHB5IGhlbmNlIHdoZW4gYSBjb2xsZWdlIGZyaWVuZCBvZiBtaW5lIG9mZmVyZWQgbWUgYSBqb2IgYXMgYSBGbGFzaCBHYW1lIGRldmVsb3BlcihBY3Rpb25zY3JpcHQpIEkgdG9vayBpdC4gSXQgd2FzIGEgNy1tYW4gc3R1ZGVudHMgY29tcGFueSB3aGVyZSBJIHdhcyBwYWlkIH4yJC9ob3VyIHdoaWNoIGFmdGVyIDIgd2Vla3MgIGluY3JlYXNlZCB0byA0JCBkdWUgdG8gZ29vZCByZXN1bHRzLiBXZSd2ZSBjcmVhdGVkIGFib3V0IH4zMCBnYW1lcywgaGVyZSBhcmUgc29tZSBvZiB0aGVtOlwiKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdHNcIiB9LCBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogaSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogaW1hZ2UgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaW1hZ2UsIGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90XCIgfSkpKSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvYXMyLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRHVlIHRvIHRoZSBmYWN0IEkgd2FzIHdvcmtpbmcgcmVtb3RlbHkgYW5kIEkgd2FzIHBhaWQgcGVyIGhvdXIgaXQgd2FzIG5vIHVzZSBmb3IgbWUgdG8gY3JlYXRlIGdhbWVzIHRoYXQgcXVpY2tseSBhcyB0aGVyZSB3YXMgbm90IG11Y2ggbW9uZXkgZnJvbSBpdC4gXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWWVhciBhZnRlciBJIHF1aXQgdGhlIGpvYiBhbmQgc3dpdGNoZWQgbXkgbWFqb3IgdG8gQXBwbGlhbmNlIElUIG9uIHNhbWUgZGVwYXJ0bWVudC5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsZWdlWWVhcnM7XHJcbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTAwJTsgfVxcbiAgLnN2Zy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgaW1hZ2VzID0gWydidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1jYWxjLlBORycsICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1kZWxmb3JjZS5QTkcnLCAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtZ3JhLlBORycsICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1rbGF3aXN6LlBORycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUta29tb3JrYS5QTkcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9nYW1lLWtvbmt1cnMuUE5HJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1zdHJ6ZWxuaWNhLlBORycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtd2V6eWsuUE5HJ107XHJcbmNsYXNzIEVhcmx5WWVhcnNDb250IGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gZWFybHkteWVhcnMtY29udFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkVhcmx5IHllYXJzIDIwMDMtMjAwNlwiKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLW1haW4tZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvdmIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlNvIEkgbmVlZGVkIHRvIGtub3cgbW9yZSBhYm91dCBjcmVhdGluZyBoZW5jZSB3aGVuIEkgZ290IFZpc3VhbCBCYXNpYyA2IGJvb2sgSSB3ZW50IGZ1bGwgY2F2ZS1wcm9ncmFtbWluZy4gRHVyaW5nIDIwMDQvMjAwNSBJJ3ZlIGNyZWF0ZWQgYSBidW5jaCBvZiBnYW1lczpcIiksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RzXCIgfSwgaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGkgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGltYWdlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGltYWdlLCBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdFwiIH0pKSkpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmQgYWxzbyBJJ3ZlIGNyZWF0ZWQgbXkgZmlyc3QgZnVsbCB3ZWJwYWdlIGZvciBteSBzY2hvb2wgY2xhc3MuIEl0IGhhZCBhbGwgdGhlIGh0bWwvY3NzL2pzIGF2YWlsYWJsZSBmZWF0dXJlczogZmFuY3kgY3Vyc29ycywgc291bmRzLCBzdXJ2ZXlzLCBldmVuIGZhbGxpbmcgc25vdy4gSSByZW1lbWJlciBkb2luZyBob3N0aW5nIG9wdGltaXphdGlvbnMgY3JlYXRpbmcgbGlrZSA4IGFjY291bnRzIHRvIGhvbGQgY2xhc3MgaW1hZ2VzIG9uIGZyZWUgaG9zdGluZyB0byB3b3JrYXJvdW5kIGJhbmR3aXRoIGxpbWl0YXRpb25zLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxzbyBBcm91bmQgMjAwNSB3ZWJwYWdlIGZ1bGwgb2YgaW1hZ2VzL2dpZnMgd2FzIG1hZGUgZm9yIG15IFdhcmNyYWZ0IDMgY2xhbi4gSXQgd2FzIG15IGZpcnN0IHBhZ2UgdGhhdCBsb29rZWQgcHJldHR5IGRlY2VudCBhbmQgaGFkIHNvbWUgY29oZXNpdmUgY29sb3JzLlwiKSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVhcmx5WWVhcnNDb250O1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jbGFzcyBFYXJseVllYXJzIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gZWFybHkteWVhcnNcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24taGVhZGVyXCIgfSwgXCJFYXJseSB5ZWFycyAyMDAwLTIwMDNcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2h0bWwucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSBzdGFydGVkIGRldmVsb3BpbmcgYXQgdGhlIGFnZSBvZiB+MTAgYXJvdW5kIDIwMDAuIEl0IHdhcyBhIE1pY3Jvc29mdCBXb3JkIHdlYnBhZ2UgZm9yIG15IERpYWJsbyBjbGFuLiBBZnRlciB3ZWVrIG9mIGRvaW5nIGl0IGFuZCBiZWluZyBzbyBwcm91ZCBvZiBteSBmaXJzdCBjcmVhdGlvbihtYXJxdWVlcywgcGluayBhbmQgcHVycGxlIGNvbG9ycyBhbGwgb3ZlciB0aGUgcGxhY2UpIG15IGZyaWVuZHMgdG9sZCBtZSBpdCdzIGEgY3JhcCBhbmQgdGhleSB3b3VsZCBkbyBtdWNoIGJldHRlciBpbiAxMCBtaW51dGVzIHdpdGggYSBub3RlcGFkLiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSBkcm9wcGVkIHdlYmRldiBmb3IgYSB3aGlsZSBhbmQgYXJvdW5kIDIwMDEgSSd2ZSBtb3ZlZCB0byBjcmVhdGluZyBjbGllbnQtc2lkZSBtb2RpZmljYXRpb25zIGZvciBDb3VudGVyLVN0cmlrZSBnYW1lKGN1c3RvbSBncmFwaGljcywgY29tbWFuZHMsIHNvdW5kcywgbWFwcykuIEl0IHdhcyBwcmV0dHkgaGlsYXJpb3VzIGFzIEkgcmVjYWxsIGJ1dCBhIGxvdCBvZiBmdW4gc3VyZWx5Li4uIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdCB0aGUgYWdlIG9mIDEzIEkgbWV0IGEgZnJpZW5kIG5hbWVkIEx1a2FzIGF0IHNjaG9vbCBhbmQgaGUgdG9sZCBtZSBoZSBjcmVhdGVkIENhbGN1bGF0b3IhIEkgd2FzIGluY3JlZGlibHkgaW1wcmVzc2VkIGFuZCB3YW50ZWQgdG8gY3JlYXRlZCBteSBvd24uIFNvIGhlIHNob3dlZCBtZSBWaXN1YWwgQmFzaWMgbWFjcm9zIGluIE1pY3Jvc29mdCBPZmZpY2UgYW5kIGR1cmluZyBvbmUgbGVzc29uIHdlJ3ZlIGNyZWF0ZWQgc2ltcGxlIGNhbGN1bGF0b3IgYXBwKG9mIGNvdXJzZSB3aXRoIHBpbmsgYnV0dG9ucyBhbmQgaWNreSBiYWNrZ3JvdW5kKS4gSSB3YXMgYXN0b25pc2hlZC4gV2hlbiBJIHdlbnQgaG9tZSBJIHdhbnRlZCB0byBkbyBpdCBteXNlbGYgdG8gbWVzcyBhcm91bmQgd2l0aCBpdCBhbmQgYWRkIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0aWVzIChzcXVhcmUgcm9vdCBmdHchKS5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTbyBpIHJhbiBtaWNyb3NvZnQgb2ZmaWNlIGFuZCBvcGVuZWQgbWFjcm9zIGFuZCAuLi4gSSBmb3Jnb3Qgd2hhdCBhcmUgdGhlIGNvbW1hbmRzIGFuZCBkaWRuJ3Qga25vdyB3aGF0IHNob3VsZCBJIHR5cGUgdG8gbWFrZSBpdCB3b3JrLiBJdCB3YXMgMjAwMyBhbmQgLi4uIHRoZXJlIHdhcyBubyBJU1AgaW4gbXkgaG9tZSBhbmQgbm8gZG9jdW1lbnRhdGlvbiB3aGF0c29ldmVyLiBTby4uLiBJIHVzZWQgbGFuZGxpbmUgcGhvbmUgYW5kIGNhbGxlZCBoaW0gYW5kIGFza2VkIGhpbSB0byB0ZWxsIG1lIHRoZSBleGFjdCBjb21tYW5kcyBhbmQgbGluZXMgdG8gdHlwZS4gSXQgd2FzIGhpbGFyaW91cyBidXQgYWZ0ZXIgMjAgbWludXRlcyBvZiB0eXBpbmcgSSBoYWQgbXkgY2FsY3VsYXRvciB3b3JraW5nLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkkgd2FzIHN1cGVyIGhhcHB5IGFuZCB3YW50ZWQgdG8gY3JlYXRlIGV2ZW4gbW9yZS5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFYXJseVllYXJzO1xyXG47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuZ2F0ZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4uZ2F0ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYnVpbGQvYXNzZXRzL2dhdGUvZ2F0ZTEwLmpwZ1xcXCIpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDAgNXJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07IH1cXG4gIC5nYXRlLmxlZnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1sZWZ0OyB9XFxuICAuZ2F0ZS5yaWdodCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZVgoLTEpO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtcmlnaHQ7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwdncpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTB2dykgc2NhbGVYKC0xKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpIHNjYWxlWCgtMSk7IH0gfVxcblxcbi5rbm9ja2VyIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDByZW0gMHJlbSAwLjVyZW0gIzIyMjIyMik7XFxuICByaWdodDogMDsgfVxcblxcbi5leWUge1xcbiAgei1pbmRleDogMjtcXG4gIHJpZ2h0OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGdsb3c7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwLjg7IH1cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IDAuODsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbi5zaGFkb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFkb3ctYW5pbTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDFzOyB9XFxuXFxuQGtleWZyYW1lcyBzaGFkb3ctYW5pbSB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwLjVyZW0gMHB4IDAuNXJlbSAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTsgfSB9XFxuXCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgR2F0ZSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnYXRlLWNvbnRhaW5lclwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2F0ZSBsZWZ0XCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2dhdGUva25vY2tlci1sZWZ0LnBuZ1wiLCBjbGFzc05hbWU6IFwia25vY2tlclwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvZ2F0ZS9leWUtbGVmdC0yLnBuZ1wiLCBjbGFzc05hbWU6IFwia25vY2tlciBleWVcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2hhZG93XCIgfSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdhdGUgcmlnaHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvZ2F0ZS9rbm9ja2VyLWxlZnQucG5nXCIsIGNsYXNzTmFtZTogXCJrbm9ja2VyXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9nYXRlL2V5ZS1sZWZ0LTIucG5nXCIsIGNsYXNzTmFtZTogXCJrbm9ja2VyIGV5ZVwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaGFkb3dcIiB9KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhdGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2MS5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jdjIuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3YzLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2NC5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jdjUuanBnJyxcclxuXTtcclxuY2xhc3MgSm9ic0NvbnQyIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gam9icy1jb250LTJcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24taGVhZGVyXCIgfSwgXCJDYXJlZXIgMjAxNy1wcmVzZW50XCIpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy91bml0eTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSd2ZSBzdGFydGVkIGRvaW5nIHNvbWUgaG9iYnkgc2lkZS1wcm9qZWN0cyBpbiBVbml0eSByZWdhcmRpbmcgZ2FtZXMgYW5kIGNvbXB1dGVyIGdyYXBoaWNzLiBJJ3ZlIGV2ZW4gY3JlYXRlZFxcdTAwQTBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0dhTUl5aVdJbktRVjZDZUtQVGVQeUFcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy95dDEucG5nXCIsIGNsYXNzTmFtZTogXCJpY29uXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91dHViZSBjaGFubmVsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDBBMCB3aGVyZSBJIHB1Ymxpc2ggYWxsIGNvbXB1dGVyIGdyYXBoaWNzIHRoaW5nIEkgZG8uIEFsc28gSSd2ZSBzdGFydGVkIGRldmVsb3BpbmcgYXNzZXRzIGZvciBVbml0eSBBc3NldCBTdG9yZTogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vYXNzZXRzdG9yZS51bml0eS5jb20vcHVibGlzaGVycy8yNTU3OFwiIH0sIFwiIE15XFx1MDBBMHB1Ymxpc2hlclxcdTAwQTBhY2NvdW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2FuZ3VsYXIyLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IG5vLW1hcmdpbi10b3BcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSd2ZSBqb2luZWQgYW5vdGhlciBzcG9ydCBib29raW5nIGNvbXBhbnkgd2hlcmUgY3VycmVudGx5IEknbSB1c2luZyBBbmd1bGFyNi5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBKb2JzQ29udDI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3YxLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2Mi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jdjMuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3Y0LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2NS5qcGcnLFxyXG5dO1xyXG5jbGFzcyBKb2JzQ29udCBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uIGpvYnMtY29udFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNhcmVlciAyMDE2LTIwMTdcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL3VuaXR5Mi5wbmdcIiwgY2xhc3NOYW1lOiBcImltYWdlLW5lYXItdGV4dCBmaWxsZWRcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXZSd2ZSB0cmF2ZWxlZCB3aXRoIG91ciBnYW1lIHRvIGEgZ2FtZSBjb25mZXJlbmNlOiBcXFwiTGV0J3MgcGxheSBDelxcdTAxMTlzdG9jaG93YVxcXCIgYWZ0ZXIgd2hpY2ggd2UgZ290IGludml0ZWQgdG8gXFxcIkdvb2QgR2FtZSBFeHBvIFdhcnNhd1xcXCIuIEFmdGVyIHRoZSBHR0Ugd2UgY3JlYXRlZCBvdXIgZmFucGFnZTogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9DdXJzZWRWYWxsZXkvXCIgfSwgXCJDdXJzZWQgVmFsbGV5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIGFuZCBhZnRlciBzb21lIGludmVzdG9ycyB0YWxrcyB3ZSBkZWNpZGVkIHRvIHRyYW5zZm9ybSBvdXIgZ2FtZSB0byAyRDogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNlbnRlciB2aWRlby1jb250YWluZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9vMFd4dTJGSzA2QVwiLCBhbGxvd0Z1bGxTY3JlZW46IHRydWUgfSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWZ0ZXIgdGhhdCB3ZSBnb3QgaW52aXRlZCB0byBcXFwiRGlnaXRhbCBEcmFnb25zIENyYWNvd1xcXCIsIGJ1dCBmb3Igbm93IHRoZSBkZXZlbG9wbWVudCBoYXMgYmVlbiBzdXNwZW5kZWQgYXMgZXZlcnlvbmUgdG9vayBoaXMgb3duIHBhdGguIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkhlcmUgaXMgYSBjb3VwbGUgb2YgcGhvdG9zIGZyb20gdGhpcyBqb3VybmV5OlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RzXCIgfSwgaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGkgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGltYWdlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGltYWdlLCBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdFwiIH0pKSkpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL3JlYWN0LXJlZHV4LnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGZpbGxlZFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkkgam9pbmVkIHNwb3J0IGJvb2tpbmcgY29tcGFueSBhbmQgc3dpdGNoZWQgdG8gUmVhY3QgJiBSZWR1eCBzdGFjay4gQWZ0ZXIgMiB5ZWFycyBvZiBuZyBJIHdhbnRlZCB0byBzZWUgd2hhdCdzIHRoZSBmdXNzIGFib3V0IGFuZCB3aG8gQWJyYW1vdiBpcy4gSSBpbW1lZGlhdGVseSBsb3ZlZCBKU1gsIHlhcm4sIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcInN0cm9rZVwiIH0sIFwid2VicGFja1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiwgRVM3LCBFeHByZXNzLCBKZXN0LCB1bmlkaXJlY3Rpb25hbCBhcHAgZmxvdywgc2luZ2xlIHN0b3JlLCBmdW5jdGlvbmFsIHByb2dyYW1taW5nLiBUaGUgb25seSB0aGluZyBJIGhhdGVkIHdhcyBodWdlIGJvaWxlcnBsYXRlIGFuZCB3ZWFrIHBlcmZvcm1hbmNlLiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFdmVyeXRpbWUgc29tZW9uZSB3cm90ZSBgcmVkdWNlKClgIHdpdGggc3ByZWFkIG9wZXJhdG9yIGluc2lkZSBJIGNyaWVkLiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT25lIGRheSB3aGVuIEkgc2F3IGNsaWNraW5nIGEgY2hlY2tib3ggaW4gYmlnIGNvbXBvbmVudCB0cmVlIHRha2VzIDIwMG1zIHRvIHNlbGVjdCBpdHNlbGYgSSBmZWx0IGxpa2UgdGhpcyBpcyB3cm9uZyBkaXJlY3Rpb24gb2Ygd2ViIGRldmVsb3BtZW50LiBTZWxlY3RpbmcgY2hlY2tib3ggd2FzIGxpa2UgdGhpczpcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3JlYXRlICYgZGlzcGF0Y2ggYWN0aW9uLCBnbyB0aHJvdWdoIHJlZHV4IG1pZGRsZXdhcmUsIHJ1biBwcm9wZXIgc2FnYSwgcHJvcGFnYXRlIGV2ZW50IHRvIEFMTCByZWR1Y2VycywgcmVhY3JlYXRpbmcgSW1tdXRhYmxlSlMgc3RvcmUsIHJ1bm5pbmcgbWVtb2l6ZWQgcmVzZWxlY3RzIHRoZW4gcmUtcmVuZGVyaW5nIGJpZyBjb21wb25lbnQgdHJlZSB3aXRoIG5lc3RlZCB0YWJsZXMgZXZlbiBvcHRpbWl6ZWQgYnkgUHVyZUNvbXBvbmVudCB0byBmaW5hbGx5IHNob3cgbWUgSSBzZWxlY3RlZCBhIGNoZWNrYm94LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgQW5kIGl0IHdhcyAyMDBtcyBvbiBteSBQQyB3aXRoIDQgY29yZXMsIDE2Z2IgcmFtISBJIGNvdWxkIHJ1biBXaXRjaGVyIDMwRlBTIG9uIGl0IGFuZCBJIGNhbid0IHNlbGVjdCBhIGNoZWNrYm94LiBJIGRlY2lkZWQgdGhhdHMgbm90IHRoZSBnb29kIGRpcmVjdGlvbiBzbyBJIHN0YXJ0ZWQgbG9va2luZyBmb3Igc29tZSBmcmVlZG9tIGFuZCBtYXliZSBnaXZlIGEgY2hhbmNlIHRvIEFuZ3VsYXIgYWdhaW4uXCIpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gSm9ic0NvbnQ7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvYWxnZ2VuLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2NvbXBldGVuY2UuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZHJvaWR6LnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2xvZ2kucG5nJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvdGFua2kuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvd2ViZ2wucG5nJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvd3A3LmpwZycsXHJcbl07XHJcbmNsYXNzIEpvYnMgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbiBqb2JzXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiQ2FyZWVyIDIwMTQtMjAxNlwiKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLW1haW4tZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvYW5ndWxhcjIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHRcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJIHN0YXJ0ZWQgd29ya2luZyBpbiBpdGFsaWFuIGNvbXBhbnkgd2hpY2ggd2FzIGNyZWF0aW5nIGh1Z2UoMjAwKyBwYWdlcykgZmluYW5jaWFsIHJlcG9ydHMuIEkgd2FzIGhpcmVkIGFzIGJhY2stZW5kIEphdmEgZ3V5IGFuZCBJIHN0YXJ0ZWQgY3JlYXRpbmcgU1FMIHF1ZXJ5IHdyYXBwZXJzIGZvciBPcmFjbGUgZGF0YWJhc2UuIFdlIHdlcmUgbGFja2luZyBmcm9udC1lbmRzIHNvIEkgd2FzIGFza2VkIGlmIEknbSBpbnRlcmVzdGVkIGluIGRvaW5nIHNvbWUgR1VJLiBUaGV5IHRvbGQgbWUgdG8gZ2l2ZSBpdCBhIHRyeSBhbmQgaXQgd2lsbCBiZSBvbmx5IHRpbWUgdG8gdGltZSB3b3JrLi4uIHNvIEkgZ2F2ZSBpdCBhIGNoYW5jZS4gVGhhdCBkYXkgSSB3YXMgaW50cm9kdWNlZCB0byBBbmd1bGFySlMgYW5kIHdhcyB0cmFuc2Zvcm1lZCB0byA3MCUvMzAlIGZyb250LWVuZC9iYWNrLWVuZCBndXkuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkF0IHRoZSBiZWdnaW5pbmcgSSB3YXNuJ3QgZXZlbiBhd2FyZSBhYm91dCB0aGUgd29yZHMgcGVvcGxlIHVzZWQgYXJvdW5kOiBcXFwiYm93ZXIsIG5wbSwgeWVvbWFuLCBTUEEsIGdydW50LCBsZXNzLCBrYXJtYVxcXCIgYnV0IEkgcmVtZW1iZXJlZCB0byBjcmVhdGUgc3ltbGluayBmb3IgbXkgYG5vZGVfbW9kdWxlc2AgZGlyZWN0b3J5IG5vdCB0byBzcGVuZCB3aG9sZSBkYXkgd2FpdGluZyBmb3IgYG5wbSBpbnN0YWxsYCB0byBmaW5pc2guXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkkgd2FzIHRoZSBtYWluIGZyb250LWVuZCBjcmVhdG9yIG9mIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2FwcGxpY2F0aW9uLnNreW1pbmRlci5jb21cIiB9LCBcImh0dHBzOi8vYXBwbGljYXRpb24uc2t5bWluZGVyLmNvbVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAtIHdlYiBhcHBsaWNhdGlvbiB0aGF0IHNlcnZlcyBmaW5hbmNpYWwgcmVwb3J0cyBmb3IgYWxsIG92ZXIgdGhlIHdvcmxkIGNvbXBhbmllcyhldmVuIG9uIHNtYWxsIGlzbGFuZHMgeW91J3ZlIG5ldmVyIGhlYXJkIG9mKS4gSXQgd2FzIHdlYi9wZGYvdHh0LiBBbmd1bGFySlMgaGFkIHN1cGVyIGZlYXR1cmVzLCBkZWNsYXJhdGl2ZSBVSSwgYnV0IHdhcyBpbmNyZWRpYmx5IHNsb3cgZm9yIHRoaXMgdGFzayBkdWUgdG8gXFxcIm5nLWZvclxcXCIgYW5kIGRpZ2VzdCBzeXN0ZW0gLSBnZW5lcmF0aW5nIGNvbXBsZXggdGFibGUgd2FzIHRha2luZyA2MHNlY29uZHMsIHNvIEkgZW5kZWQgdXAgaW4gY3JlYXRpbmcgbXkgb3duIHBlcmZvcm1hbnQgZW5naW5lIGZvciBnZW5lcmF0aW5nIHJlcG9ydHMgdGhhdCBkaWQgaXQgaW4gMjAwbXMuIEFsc28gSSd2ZSBjcmVhdGVkIHR4dCB0ZXJtaW5hbC1saWtlIGdlbmVyYXRvciBmb3IgMkQgdGFibGVzLiBBcHAgZnVuY3Rpb25hbGl0aWVzIGNvbnRhaW5lZCBtdWx0aXBsZSBsYW5ndWFnZXMoZS5nLiBjaGluZXNlLCBnZXJtYW4pLCBTU08gYXV0aGVudGljYXRpb24gc3lzdGVtLCBSV0QsIElFOSsgc3VwcG9ydC5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxzbyBJJ3ZlIHJlYWNoZWQgbXkgTWFzdGVyIG9mIFNjaWVuY2UgZGVncmVlcy4gSXQgd2FzIGFib3V0IGNyZWF0aW5nIHdlYiBhcHBsaWNhdGlvbiBmb3IgZXhwbGljaXQgc29sdmluZyBwdWJsaWMgY29udGVzdHMgZnJvbSBGYWNlYm9vay9Ud2l0dGVyIHRvIHByZXZlbnQgY2hlYXRpbmcuIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiYnVpbGQvYXNzZXRzL21hZ2lzdGVya2FfdHN6LnBkZlwiIH0sIFwiTVNjIHdvcmsocG9saXNoXFx1MDBBMHZlcnNpb24pXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvdW5pdHkyLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGZpbGxlZCBuby1tYXJnaW4tdG9wXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSd2ZSBoZWFyZCB0aGVyZSBpcyBhdmFpbGFibGUgZnJlZSB2ZXJzaW9uIG9mIFVuaXR5IGdhbWUgZW5naW5lIHdpdGggaHVnZSBjb2xsZWN0aW9uIG9mIGZyZWUgYXNzZXRzIGF2YWlsYWJsZSBpbiBpdHMgc3RvcmUsIHNvIEkndmUgc3RhcnRlZCBkaXNjb3ZlcmluZyB0aGlzIGluY29uY2VpdmFibGUgdG9vbC5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgSSB3YW50ZWQgdG8gY3JlYXRlIGEgZ2FtZSB3aXRoIGEgdGVhbSBzbyBJIGpvaW5lZCBwcm9qZWN0IGNhbGxlZCAnQ3Vyc2VkIFZhbGxleScgZm91bmQgb25cXHUwMEEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcInd3dy5nYW1lZGV2LnBsXCIgfSwgXCJ3d3cuZ2FtZWRldi5wbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiAuIFdlJ3ZlIGNyZWF0ZWQgYSBnYW1lLCB3aGljaCB0cmFpbGVyIHlvdSBjYW4gc2VlIGJlbG93OiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY2VudGVyIHZpZGVvLWNvbnRhaW5lclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiLCB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgc3JjOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0pvclZuMVp2U21BXCIsIGFsbG93RnVsbFNjcmVlbjogdHJ1ZSB9KSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBKb2JzO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBhYm91dF9tZV8xID0gcmVxdWlyZShcIi4vYWJvdXQtbWUvYWJvdXQtbWVcIik7XHJcbmNvbnN0IGVhcmx5X3llYXJzXzEgPSByZXF1aXJlKFwiLi9lYXJseS15ZWFycy9lYXJseS15ZWFyc1wiKTtcclxuY29uc3QgZWFybHlfeWVhcnNfY29udF8xID0gcmVxdWlyZShcIi4vZWFybHkteWVhcnMtY29udC9lYXJseS15ZWFycy1jb250XCIpO1xyXG5jb25zdCBtaWRfeWVhcnNfMSA9IHJlcXVpcmUoXCIuL21pZC15ZWFycy9taWQteWVhcnNcIik7XHJcbmNvbnN0IGdhdGVfMSA9IHJlcXVpcmUoXCIuL2dhdGUvZ2F0ZVwiKTtcclxuY29uc3QgY29sbGVnZV95ZWFyc18xID0gcmVxdWlyZShcIi4vY29sbGVnZS15ZWFycy9jb2xsZWdlLXllYXJzXCIpO1xyXG5jb25zdCBjb2xsZWdlX3llYXJzX2NvbnRfMSA9IHJlcXVpcmUoXCIuL2NvbGxlZ2UteWVhcnMtY29udC9jb2xsZWdlLXllYXJzLWNvbnRcIik7XHJcbmNvbnN0IGpvYnNfMSA9IHJlcXVpcmUoXCIuL2pvYnMvam9ic1wiKTtcclxuY29uc3Qgam9ic19jb250XzEgPSByZXF1aXJlKFwiLi9qb2JzLWNvbnQvam9icy1jb250XCIpO1xyXG5jb25zdCBqb2JzX2NvbnRfMl8xID0gcmVxdWlyZShcIi4vam9icy1jb250LTIvam9icy1jb250LTJcIik7XHJcbmNvbnN0IG5hdmJhcl8xID0gcmVxdWlyZShcIi4vbmF2YmFyL25hdmJhclwiKTtcclxuY29uc3QgcHJlbG9hZF9pbWFnZXNfMSA9IHJlcXVpcmUoXCIuL3ByZWxvYWQtaW1hZ2VzL3ByZWxvYWQtaW1hZ2VzXCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhdGUvZ2F0ZTEwLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhdGUva25vY2tlci1sZWZ0LnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhdGUvZXllLWxlZnQtMi5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9iYWNrZ3JvdW5kcy9iZzQuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvbWUuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmcxLmpwZycsXHJcbl07XHJcbmNvbnN0IHNob3dHYXRlID0gdHJ1ZTtcclxuY2xhc3MgTWFpbiBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIkxvYWRpbmcgLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdhdGVWaXNpYmxlOiBzaG93R2F0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25JbWFnZXNMb2FkZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2F0ZVZpc2libGU6IHNob3dHYXRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHByZWxvYWRfaW1hZ2VzXzEuZGVmYXVsdCwgeyBpbWFnZXM6IGltYWdlcywgbG9hZGluZ0luZGljYXRvcjogdGhpcy5sb2FkaW5nSW5kaWNhdG9yLCBtb3VudDogdHJ1ZSwgbG9hZGVkOiB0aGlzLm9uSW1hZ2VzTG9hZGVkIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhdGVWaXNpYmxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZ2F0ZV8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG5hdmJhcl8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1jb250YWluZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGFib3V0X21lXzEuZGVmYXVsdCwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZWFybHlfeWVhcnNfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChlYXJseV95ZWFyc19jb250XzEuZGVmYXVsdCwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWlkX3llYXJzXzEuZGVmYXVsdCwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29sbGVnZV95ZWFyc18xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbGxlZ2VfeWVhcnNfY29udF8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGpvYnNfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChqb2JzX2NvbnRfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChqb2JzX2NvbnRfMl8xLmRlZmF1bHQsIG51bGwpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNYWluO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbJ2J1aWxkL2Fzc2V0cy9nYW1lcy9nYW1lLWNpdmljLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtaXpvLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtbGl0ZXJha2kuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1vZ2wuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1vbmVwcm9qLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtc3Vkby5qcGcnLF07XHJcbmNsYXNzIE1pZFllYXJzIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gbWlkLXllYXJzXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiSGlnaCBzY2hvb2wgMjAwNi0yMDA5XCIpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvbiBzZWN0aW9uLXdpdGgtZmxvYXRpbmctaW1hZ2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvY3BwLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU28gYWZ0ZXIgZ29pbmcgdG8gbWlkZGxlLXNjaG9vbCBJIHN3aXRjaGVkIHRvIGNyZWF0aW5nIGJvdHMgZm9yIE1NT3MgbGlrZSBTaWxrcm9hZC9LbmlnaHQgb25saW5lIGFuZCBJIHJlYWxseSB3YW50ZWQgdG8gbGVhcm4gY3JlYXRpbmcgcHJpdmF0ZSBzZXJ2ZXJzIGFuZCBib3RzLiBBcm91bmQgMjAwNyBJIGZvdW5kIGV4Y2VsbGVudCBXaW5kb3dzIEFQSSBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cDovL3hpb24ub3JnLnBsL1wiIH0sIFwiaHR0cDovL3hpb24ub3JnLnBsL1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiB0dXRvcmlhbCwgYnV0IGl0IG5lZWRlZCBDKysga25vd2xlZGdlLiBGb3J0dW5hdGVseSB0aGVyZSB3YXMgYWxzbyBmdWxsIHBkZiBjb250YWluaW5nIEMrKyB0dXRvcmlhbCBzbyBJJ3ZlIHJlYWQgaXQgYW5kIGRvbmUgYWxsIGV4ZXJjaXNlcyBpbmNsdWRpbmcgZ2FtZXMgbGlrZSB0aWMtdGFjLXRvZS5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgQysrIHdhcyBzbyBhd2Vzb21lIEkgd2FudGVkIHRvIGxlYXJuIG1vcmUgc28gSSd2ZSBib3VnaHQgdHdvIEMrKyBib29rcyAnVGhpbmtpbmcgaW4gQysrJywgcmVhZCBpdCBhbmQgZG9uZSBhbGwgZXhlcmNpY2VzLiBBbHNvIGl0IHdhcyBhYm91dCB0aW1lIGZvciBteSBtYXR1cmUgZXhhbSBhbmQgSSB3YXMgZG9pbmcgYSBsb3Qgb2YgbWF0aCBzY2hvb2wgdGFza3MgYW5kIEkgd2FudGVkIHRvIGJvb3N0IHVwIG15IGNhbGN1bGF0aW9uIHdvcmsuIEkgcmVtZW1iZXIgY3JlYXRpbmcgbXkgZmlyc3QgaGFuZHkgQysrIGFwcCB0aGF0IHdhcyBoZWxwZnVsIGZvciBtZTogIGl0IHdhcyBcXFwiSG9ybmVyLXNjaGVtYSBzb2x2ZXJcXFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJJ3ZlIHJldHVybmVkIHRvIGdhbWUgZGV2ZWxvcG1lbnQsICBqb2luIHdhcnN6dGF0OlxcdTAwQTBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly93YXJzenRhdC5nZC91c2VyL2xhc3RzZWVkcy9wcm9qZWN0c1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL3dhcnN6dGF0LWljb24uanBnXCIsIGNsYXNzTmFtZTogXCJpY29uXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTXkgYWNjb3VudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBhbmQgY3JlYXRlZCBhIGNvdXBsZSBvZiBnYW1lcyB3aXRoIEMrKy9TRk1ML1NETC9PcGVuR0woZnVubnkgdGhpbmcgaXMgSSB3YXMgc3RpbGwgd3JpdGluZyBjb2RlIGluIHBvbGlzaCkuIEkgcmVtZW1iZXIgY3JlYXRpbmcgcHJvZ3JhbW1pbmcgc29sdXRpb25zIHdoaWNoIGxhdGVyIEkgZm91bmQgdG8gYmUgdWJpcXVpdG91cyBwcm9ncmFtbWluZyBwYXR0ZXJucyBhbmQgcnVsZXMgb2YgdGh1bWIuIFRoYXQgd2FzIHByZXR0eSBmdW4uXCIpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90c1wiIH0sIGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBpbWFnZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpbWFnZSwgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RcIiB9KSkpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNaWRZZWFycztcclxuO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hdmJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luOiAwLjZyZW0gMC4ycmVtOyB9XFxuICAubmF2YmFyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7IH1cXG4gICAgLm5hdmJhci1saW5rcyA+IGEge1xcbiAgICAgIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAubmF2YmFyLWltZyB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XFxuICAgIC5uYXZiYXItaW1nLmZpbGxlZCB7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDsgfVxcbiAgICAubmF2YmFyLWltZzpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuXCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm5hdmJhclwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyLWxpbmtzXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDR2FNSXlpV0luS1FWNkNlS1BUZVB5QVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMveXQyLnBuZ1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWltZyBmaWxsZWRcIiB9KSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RoZXJlcG85MFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvZ2l0aHViLnBuZ1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWltZyBmaWxsZWRcIiB9KSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwibWFpbHRvOiB0b21hc3ouc3plcGN6eW5za2lAZ21haWwuY29tXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy9lbWFpbC5wbmdcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1pbWcgZmlsbGVkXCIgfSkpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2YmFyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgUHJlbG9hZEltYWdlcyBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZWRJbWFnZXNGaXJzdFRpbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93Q2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkxvYWRJbWFnZSA9IChzcmMpID0+ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA+PSBpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Mb2FkZWRJbWFnZXMoKSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25Mb2FkZWRJbWFnZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NoaWxkcmVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2FkZWQgJiYgdGhpcy5wcm9wcy5sb2FkZWQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlZEltYWdlc0ZpcnN0VGltZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkZWRJbWFnZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaW1hZ2VzLCBsb2FkaW5nSW5kaWNhdG9yLCBjaGlsZHJlbiwgbW91bnQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzaG93Q2hpbGRyZW4gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICFzaG93Q2hpbGRyZW4gJiYgbG9hZGluZ0luZGljYXRvcixcclxuICAgICAgICAgICAgIXRoaXMucmVuZGVyZWRJbWFnZXNGaXJzdFRpbWUgJiYgIXNob3dDaGlsZHJlbiAmJiBpbWFnZXMubWFwKChzcmMsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBrZXk6IGksIHNyYzogc3JjLCBvbkxvYWQ6IHRoaXMub25Mb2FkSW1hZ2Uoc3JjKSwgb25FcnJvcjogdGhpcy5vbkxvYWRJbWFnZShzcmMpLCBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSB9KSksXHJcbiAgICAgICAgICAgICFtb3VudCAmJiBzaG93Q2hpbGRyZW4gJiYgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIG1vdW50ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc2hvd0NoaWxkcmVuID8geyBkaXNwbGF5OiAnaW5pdGlhbCcgfSA6IHsgZGlzcGxheTogJ25vbmUnIH0gfSwgY2hpbGRyZW4pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQcmVsb2FkSW1hZ2VzO1xyXG47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMCAycmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLWhlaWdodDogMzByZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnNlY3Rpb24taGlnaGxpZ2h0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07IH1cXG4gIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07IH1cXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVyZW0gMDsgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjazsgfVxcbiAgLnNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDYzLCA2MywgMC41NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07IH1cXG4gIC5zZWN0aW9uLmFib3V0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmc0LmpwZ1xcXCIpOyB9XFxuICAuc2VjdGlvbi5lYXJseS15ZWFycyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnNS5qcGdcXFwiKTsgfVxcbiAgLnNlY3Rpb24uZWFybHkteWVhcnMtY29udCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnNi5qcGdcXFwiKTsgfVxcbiAgLnNlY3Rpb24ubWlkLXllYXJzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmc3LmpwZ1xcXCIpOyB9XFxuICAuc2VjdGlvbi5jb2xsZWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmcyMi5qcGdcXFwiKTsgfVxcbiAgLnNlY3Rpb24uY29sbGVnZS1jb250IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmcxNS5qcGdcXFwiKTsgfVxcbiAgLnNlY3Rpb24uam9icyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMTcuanBnXFxcIik7IH1cXG4gIC5zZWN0aW9uLmpvYnMtY29udCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMTAuanBnXFxcIik7IH1cXG4gIC5zZWN0aW9uLmpvYnMtY29udC0yIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmcxNC5qcGdcXFwiKTsgfVxcbiAgLnNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvbiA+IHAge1xcbiAgICBtaW4taGVpZ2h0OiA2cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07IH1cXG4gIC5zZWN0aW9uLW1haW4tZGVzY3JpcHRpb24gPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyLFxcbiAgLnNlY3Rpb24tZGVzY3JpcHRpb24gPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07IH1cXG5cXG4uYm9yZGVyZWQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgNjMsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uaW1hZ2Utc2NyZWVuc2hvdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjbGVhcjogYm90aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmltYWdlLXNjcmVlbnNob3Qge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBtYXJnaW46IDAgMC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMnB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG4gIC5pbWFnZS1zY3JlZW5zaG90OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuXFxuLmltYWdlLW5lYXItdGV4dCB7XFxuICBtYXgtd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY2xlYXI6IGJvdGg7IH1cXG4gIC5pbWFnZS1uZWFyLXRleHQuZmlsbGVkIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7IH1cXG5cXG4udmlkZW8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMHJlbTsgfVxcblwiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IG1haW5fMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbWFpblwiKTtcclxuY29uc3QgUmVhY3RET00gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xyXG5jb25zdCBzdHlsZXMgPSBbXHJcbiAgICByZXF1aXJlKCcuL2Jhc2Uuc2NzcycpLFxyXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlY3Rpb25zLnNjc3MnKSxcclxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnNjc3MnKSxcclxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5zY3NzJyksXHJcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2F0ZS9nYXRlLnNjc3MnKSxcclxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXQvY3V0LnNjc3MnKVxyXG5dO1xyXG5jb25zdCBzdHlsZXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlc0VsLmlubmVySFRNTCA9IHN0eWxlcy5yZWR1Y2UoKGFjYywgcHJldikgPT4ge1xyXG4gICAgcmV0dXJuIGAke2FjY30gXFxuICR7cHJldn1gO1xyXG59LCAnJyk7XHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzRWwpO1xyXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChtYWluXzEuZGVmYXVsdCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLXJvb3RcIikpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==