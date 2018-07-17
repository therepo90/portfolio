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

/***/ "./src/base.css":
/*!**********************!*\
  !*** ./src/base.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    font-size: 20px;\r\n    font-family: monospace;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n@media screen and (min-width: 2000px) {\r\n    html, body {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 3000px) {\r\n    html, body {\r\n        font-size: 45px;\r\n    }\r\n}\r\n\r\na, a:visited, a:hover, a:active, a:link {\r\n    color: white;\r\n}\r\n\r\n.icon {\r\n    width: 0.6rem;\r\n    height: 0.6rem;\r\n    vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/components/about-me/about-me.css":
/*!**********************************************!*\
  !*** ./src/components/about-me/about-me.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-me-img {\r\n    width: 8rem;\r\n    height: 8rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 10px 2px #e6f3ff;\r\n}\r\n\r\n.about-me-name {\r\n    margin-top: 0.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.about-me-bio {\r\n    display: inline-block;\r\n    font-size: 0.6rem;\r\n}\r\n"

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
                React.createElement("div", { className: "section-highlights dotted-container" },
                    React.createElement("div", null,
                        React.createElement("img", { src: "build/assets/me.jpg", className: "about-me-img" })),
                    React.createElement("span", { className: "about-me-name" },
                        "Tomasz Szepczy\u0144ski",
                        React.createElement("br", null),
                        "-Software Developer",
                        React.createElement("br", null),
                        " ",
                        React.createElement("span", { className: "about-me-bio" }, "Born on 1990 in Cracow, Poland"))),
                React.createElement("div", { className: "section-description dotted-container" },
                    React.createElement("p", null,
                        "Hello there, ",
                        React.createElement("br", null),
                        "I'm a passionate software developer, who likes to mess around with various technologies:",
                        React.createElement("ul", null,
                            React.createElement("li", null, "Web development"),
                            React.createElement("li", null, "Game development"),
                            React.createElement("li", null, "Augmented Reality"),
                            React.createElement("li", null, "Hacking")),
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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("div", { className: "side-images" },
                    React.createElement("img", { src: "build/assets/agh-2.png", className: "image-near-text filled" }),
                    React.createElement("img", { src: "build/assets/icons/java2.png", className: "image-near-text image-near-text-java filled" }),
                    React.createElement("img", { src: "build/assets/icons/csharp.png", className: "image-near-text image-near-text-csharp filled" })),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "First 3 years of college were just awesome. A lot of cool people and interesting subjects (calculus & matrixes ",
                        React.createElement("img", { src: "build/assets/icons/heart.png", className: "icon" }),
                        ").",
                        React.createElement("br", null),
                        " I participated in 2 internships, one of them included coding-dojos and  refactor workshops where using mouse was forbidden - only key shortcuts so I improved my IDE experience a lot.",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "In the end I was offered a job at telcom company where I spent a year with incredibly cool people. We've created application for managing employees competencies and room allocations tool. As a hard C++ dev I've always found JS/CSS/HTML to be for kids in kindergarten so I was doing mainly Java back-end. From time to time I was jumping into jquery / js libs functionalities to add some behaviours but I didn't want to touch html/css .",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "Also I've reached my Engineer degree. It was about creating efficient TRIE trees - dictionary structures that purpose was to help finding possible words between starting string and ending strings for words correction. ",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "Here are some projects from college and job I have screenshots of:",
                        React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                            React.createElement("a", { href: image },
                                React.createElement("img", { src: image, className: "image-screenshot" }))))),
                        "The last one is ",
                        React.createElement("strong", null, "'SpazzyBall'"),
                        " which reached ",
                        React.createElement("strong", null, "10 000 downloads"),
                        " on Windows Mobile 7 in a year.",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "Worth to mention in terms of hacking is the fact I've manage to create poker card reader using OpenCV and Windows API to one of poker platforms. I also tried to write some kind of a bot but the risk was too big so I dropped it."))));
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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("div", { className: "side-images" },
                    React.createElement("img", { src: "build/assets/agh-2.png", className: "image-near-text filled" }),
                    React.createElement("img", { src: "build/assets/icons/as2.png", className: "image-near-text image-near-text-as" })),
                React.createElement("p", null,
                    React.createElement("span", null,
                        "After passing my mature exam I went to IT studies where I wasn't very happy hence when a college friend of mine offered me a job as a Flash Game developer(Actionscript) I took it. It was a 7-man students company where I was paid ~2$/hour which after 2 weeks  increased to 4$ due to good results. We've created about ~30 games, here are some of them:",
                        React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                            React.createElement("a", { href: image },
                                React.createElement("img", { src: image, className: "image-screenshot" }))))),
                        React.createElement("br", null),
                        "Due to the fact I was working remotely and I was paid per hour it was no use for me to create games that quickly as there was not much money from it. ",
                        React.createElement("br", null),
                        "Year after I quit the job and switched my major to Appliance IT on same department."))));
    }
}
exports.default = CollegeYears;
;


/***/ }),

/***/ "./src/components/cut/cut.css":
/*!************************************!*\
  !*** ./src/components/cut/cut.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 100%;\r\n}\r\n\r\n.svg-container {\r\n    position: relative;\r\n    width: 100%;\r\n}"

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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("img", { src: "build/assets/icons/vb.png", className: "image-near-text filled" }),
                React.createElement("p", null,
                    "So I needed to know more about creating games and had neither source of knowledge nor money to get one. So I asked my dad to buy me a book Visual Basic 6 and I went full cave-programming. During 2004/2005 I've created a bunch of games:",
                    React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                        React.createElement("a", { href: image },
                            React.createElement("img", { src: image, className: "image-screenshot" }))))),
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
            React.createElement("div", { className: "section-main-description  section-with-floating-image" },
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

/***/ "./src/components/gate/gate.css":
/*!**************************************!*\
  !*** ./src/components/gate/gate.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gate-container {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top:0;\r\n    left:0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.gate {\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 50vw;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-image: url('build/assets/gate/gate10.jpg');\r\n    box-shadow: inset 0px 0 5rem 4rem rgba(0,0,0,0.8);\r\n    top:0;\r\n    animation-duration: 4s;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: ease;\r\n    animation-fill-mode: forwards;\r\n    animation-delay: 1s;\r\n}\r\n\r\n.gate.left {\r\n    left:0;\r\n    animation-name: slide-left;\r\n}\r\n\r\n.gate.right {\r\n    right: 0;\r\n    animation-name: slide-right;\r\n    transform: scaleX(-1);\r\n}\r\n\r\n@keyframes slide-left {\r\n    from {\r\n        left: 0;\r\n    }\r\n    to {\r\n        left: -50vw;\r\n        display: none;\r\n    }\r\n}\r\n\r\n@keyframes slide-right {\r\n    from {\r\n        right: 0;\r\n    }\r\n    to {\r\n        right: -50vw;\r\n        \r\n    }\r\n}\r\n\r\n.knocker {\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: 100px;\r\n    height: 60vh;\r\n    filter: drop-shadow(0rem 0rem 0.5rem #222222);\r\n    right: 0;\r\n}\r\n\r\n.eye {\r\n    z-index: 2;\r\n    right: 0;   \r\n    animation-name: glow;\r\n    animation-duration: 5s;\r\n    animation-timing-function: ease;\r\n    animation-delay: 0.15s;\r\n    animation-fill-mode: forwards;\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes glow {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n    }\r\n    40% {\r\n        opacity: 0.8;\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0.8;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.shadow {\r\n    position: absolute;\r\n    width: 50vw;\r\n    height: 100vh;\r\n    z-index: 3;   \r\n\r\n    animation-duration: 0.3s;\r\n    animation-name: shadow-anim;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: ease;\r\n    animation-fill-mode: forwards;\r\n    animation-delay: 1s;\r\n}\r\n\r\n@keyframes shadow-anim {\r\n    0% {\r\n        box-shadow: none;\r\n    }\r\n    \r\n    100% {\r\n        box-shadow: 0.5rem 0px 0.5rem 0px rgba(0,0,0,0.75);\r\n    }\r\n}"

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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("div", { className: "side-images" },
                    React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text filled" }),
                    React.createElement("img", { src: "build/assets/icons/angular2.png", className: "image-near-text image-near-text-ang-2" })),
                React.createElement("p", null,
                    "I've started doing some hobby side-projects in Unity regarding games and computer graphics. I've even created\u00A0",
                    React.createElement("a", { href: "https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA" },
                        React.createElement("img", { src: "build/assets/icons/yt1.png", className: "icon" }),
                        "Youtube channel"),
                    "\u00A0 where I publish all computer graphics thing I do. Also I've started developing assets for Unity Asset Store: ",
                    React.createElement("a", { href: "https://assetstore.unity.com/publishers/25578" }, " My\u00A0publisher\u00A0account"),
                    ".",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("div", { className: "side-images" },
                    React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text filled" }),
                    React.createElement("img", { src: "build/assets/icons/react-redux.png", className: "image-near-text image-near-text-rr filled" })),
                React.createElement("p", null,
                    "We've traveled with our game to a game conference: \"Let's play Cz\u0119stochowa\" after which we got invited to \"Good Game Expo Warsaw\". After the GGE we created our fanpage: ",
                    React.createElement("a", { href: "https://www.facebook.com/CursedValley/" }, "Cursed Valley"),
                    " and after some investors talks we decided to transform our game to 2D: ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: "center" },
                        React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/o0Wxu2FK06A", allowFullScreen: true })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "After that we got invited to \"Digital Dragons Cracow\", but for now the development has been suspended as everyone took his own path. ",
                    React.createElement("br", null),
                    "Here is a couple of photos from this journey:",
                    React.createElement("br", null),
                    React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                        React.createElement("a", { href: image },
                            React.createElement("img", { src: image, className: "image-screenshot" }))))),
                    React.createElement("br", null),
                    React.createElement("br", null),
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
            React.createElement("div", { className: "section-main-description section-with-floating-image" },
                React.createElement("div", { className: "side-images" },
                    React.createElement("img", { src: "build/assets/icons/angular2.png", className: "image-near-text" }),
                    React.createElement("img", { src: "build/assets/icons/unity2.png", className: "image-near-text image-near-text-unity filled" })),
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
                    React.createElement("br", null),
                    "I've heard there is available free version of Unity game engine with huge collection of free assets available in its store, so I've started discovering this inconceivable tool.",
                    React.createElement("br", null),
                    " I wanted to create a game with a team so I joined project called 'Cursed Valley' found on\u00A0",
                    React.createElement("a", { href: "www.gamedev.pl" }, "www.gamedev.pl"),
                    " . We've created a trailer: ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: "center" },
                        React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/JorVn1ZvSmA", allowFullScreen: true })))));
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
class Main extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            gateVisible: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            console.log('Gate must fall.');
            this.setState({
                gateVisible: false,
            });
        }, 5000);
    }
    render() {
        return React.createElement(React.Fragment, null,
            this.state.gateVisible && React.createElement(gate_1.default, null),
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
                React.createElement(jobs_cont_2_1.default, null)));
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
                    "I remember one day dad gave me a book '\u015Aladami Pitagorasa' and I went in love with math ",
                    React.createElement("img", { src: "build/assets/icons/heart.png", className: "icon" }),
                    ". Everything seemed so pretty and I found math appliance in real world and saw its beauty.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "I've returned to game development, joined",
                    React.createElement("img", { src: "build/assets/icons/warsztat-icon.jpg", className: "icon" }),
                    "\u00A0",
                    React.createElement("a", { href: "https://warsztat.gd/user/lastseeds/projects" }, "https://warsztat.gd/user/lastseeds/projects"),
                    " and created a couple of games with C++/SFML/SDL/OpenGL(funny thing is I was still writing code in polish). I remember creating programming solutions which later I found to be ubiquitous programming patterns and rules of thumb. That was pretty fun.",
                    React.createElement("div", { className: "image-screenshots" }, images.map((image, i) => React.createElement("div", { key: i },
                        React.createElement("a", { href: image },
                            React.createElement("img", { src: image, className: "image-screenshot" }))))))));
    }
}
exports.default = MidYears;
;


/***/ }),

/***/ "./src/components/navbar/navbar.css":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    color: white;\r\n    background-color: transparent;\r\n    border: 2px solid white;\r\n    border-radius: 5px;\r\n    z-index: 10;\r\n    margin: 0.6rem 0.2rem;\r\n}\r\n\r\n.navbar-links {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0.3rem 0;\r\n}\r\n\r\n.navbar-links > a{\r\n    padding: 0 0.2rem;\r\n    background-color: transparent;\r\n}\r\n\r\n.navbar-img {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.navbar-img.filled {\r\n    background: white;\r\n    border-radius: 30px;\r\n}\r\n\r\n.navbar-img:hover {\r\n    background-color: darkgray;\r\n}\r\n\r\n"

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

/***/ "./src/components/sections.css":
/*!*************************************!*\
  !*** ./src/components/sections.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    color: white;\r\n    padding: 2rem 10rem;\r\n    box-shadow: inset 0px 0 2rem 1rem rgba(0,0,0,0.8);\r\n    min-height: 30rem;\r\n    width: 100%;\r\n}\r\n\r\n.dotted-container {\r\n    border: 3px solid rgba(255, 255, 255, 0.8);\r\n    border-radius: 20px;\r\n    padding: 1rem 2rem;\r\n    background-color: rgba(63, 63, 63, 0.5);\r\n    color: white;\r\n}\r\n\r\n.section-highlights {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    line-height: 1.2rem;\r\n}\r\n\r\n.section-description {\r\n    width: 25rem;\r\n    font-size: 0.8rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.section-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 5rem 0;\r\n}\r\n\r\n.section-header {\r\n    display: inline-block;\r\n    font-size: 1.5rem;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.section.about {\r\n    background-image: url('build/assets/backgrounds/bg4.jpg');\r\n}\r\n\r\n.section.early-years {\r\n    background-image: url('build/assets/backgrounds/bg1.jpg');\r\n}\r\n\r\n.section.early-years-cont {\r\n    background-image: url('build/assets/backgrounds/bg5.jpg');\r\n}\r\n\r\n.section.mid-years {\r\n    background-image: url('build/assets/backgrounds/bg19.jpg');\r\n}\r\n\r\n.section.college {\r\n    background-image: url('build/assets/backgrounds/bg17.png');\r\n}\r\n\r\n.section.college-cont {\r\n    background-image: url('build/assets/backgrounds/bg15.jpg');\r\n}\r\n\r\n.section.jobs {\r\n    background-image: url('build/assets/backgrounds/bg17.jpg');\r\n}\r\n\r\n.section.jobs-cont {\r\n    background-image: url('build/assets/backgrounds/bg10.jpg');\r\n}\r\n\r\n.section.jobs-cont-2 {\r\n    background-image: url('build/assets/backgrounds/bg12.jpg');\r\n}\r\n\r\n.section-main-description {\r\n    margin-top: 1rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    background-color: rgba(63, 63, 63, 0.55);\r\n    border-radius: 10px;\r\n    padding: 1rem;\r\n}\r\n\r\n.section-main-description > p:first-letter,\r\n.section-description > p:first-letter {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.image-screenshots {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0.2rem 0;\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 20px;\r\n}\r\n\r\n.image-screenshot {\r\n    width: 6rem;\r\n    height: 6rem;\r\n    margin: 0 0.3rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.image-near-text {\r\n    max-width: 6rem;\r\n    height: 6rem;\r\n    margin-right: 1.6rem;\r\n}\r\n\r\n.image-near-text-unity {\r\n    margin-top: 19rem;\r\n}\r\n\r\n.image-near-text-as {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.image-near-text-csharp {\r\n    margin-top: 19rem;\r\n}\r\n\r\n.image-near-text-java {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.image-near-text-rr {\r\n    margin-top: 30rem;\r\n}\r\n\r\n.image-near-text-ang-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.image-near-text.filled {\r\n    background: white;\r\n    border-radius: 30px;\r\n}\r\n\r\n.section-with-floating-image {\r\n    display: flex;\r\n}\r\n\r\n.side-images {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.center {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.stroke {\r\n    text-decoration: line-through;\r\n}"

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
    __webpack_require__(/*! ./base.css */ "./src/base.css"),
    __webpack_require__(/*! ./components/sections.css */ "./src/components/sections.css"),
    __webpack_require__(/*! ./components/navbar/navbar.css */ "./src/components/navbar/navbar.css"),
    __webpack_require__(/*! ./components/about-me/about-me.css */ "./src/components/about-me/about-me.css"),
    __webpack_require__(/*! ./components/gate/gate.css */ "./src/components/gate/gate.css"),
    __webpack_require__(/*! ./components/cut/cut.css */ "./src/components/cut/cut.css")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sbGVnZS15ZWFycy1jb250L2NvbGxlZ2UteWVhcnMtY29udC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sbGVnZS15ZWFycy9jb2xsZWdlLXllYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXQvY3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lYXJseS15ZWFycy1jb250L2Vhcmx5LXllYXJzLWNvbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Vhcmx5LXllYXJzL2Vhcmx5LXllYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYXRlL2dhdGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhdGUvZ2F0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvam9icy1jb250LTIvam9icy1jb250LTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2pvYnMtY29udC9qb2JzLWNvbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2pvYnMvam9icy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWlkLXllYXJzL21pZC15ZWFycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw4QkFBOEIsd0JBQXdCLCtCQUErQixrQkFBa0IsbUJBQW1CLEtBQUssV0FBVywrQkFBK0IsS0FBSywrQ0FBK0Msb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssK0NBQStDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLGlEQUFpRCxxQkFBcUIsS0FBSyxlQUFlLHNCQUFzQix1QkFBdUIsK0JBQStCLEtBQUssSzs7Ozs7Ozs7Ozs7QUNBbmpCLGlDQUFpQyxvQkFBb0IscUJBQXFCLDJCQUEyQix5Q0FB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LHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaHRtbCwgYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XFxyXFxuICAgIGh0bWwsIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMDBweCkge1xcclxcbiAgICBodG1sLCBib2R5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5hLCBhOnZpc2l0ZWQsIGE6aG92ZXIsIGE6YWN0aXZlLCBhOmxpbmsge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDAuNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjZyZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5hYm91dC1tZS1pbWcge1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjZTZmM2ZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtbmFtZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtYmlvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgQWJvdXRNZSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uIGFib3V0XCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiQWJvdXQgbWVcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1jb250ZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oaWdobGlnaHRzIGRvdHRlZC1jb250YWluZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvbWUuanBnXCIsIGNsYXNzTmFtZTogXCJhYm91dC1tZS1pbWdcIiB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiYWJvdXQtbWUtbmFtZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVG9tYXN6IFN6ZXBjenlcXHUwMTQ0c2tpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImFib3V0LW1lLWJpb1wiIH0sIFwiQm9ybiBvbiAxOTkwIGluIENyYWNvdywgUG9sYW5kXCIpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tZGVzY3JpcHRpb24gZG90dGVkLWNvbnRhaW5lclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWxsbyB0aGVyZSwgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJJ20gYSBwYXNzaW9uYXRlIHNvZnR3YXJlIGRldmVsb3Blciwgd2hvIGxpa2VzIHRvIG1lc3MgYXJvdW5kIHdpdGggdmFyaW91cyB0ZWNobm9sb2dpZXM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiV2ViIGRldmVsb3BtZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiR2FtZSBkZXZlbG9wbWVudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIkF1Z21lbnRlZCBSZWFsaXR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiSGFja2luZ1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSSBsaWtlIGJyaW5naW5nIGZhbmN5IGlkZWFzIHRvIGxpZmUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXJyZW50bHkgbGl2aW5nIGluIENyYWNvdywgZW1wbG95ZWVkIGFzIGEgd2ViIGRldmVsb3Blci5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBYm91dE1lO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2FsZ2dlbi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy90cmVlMzAwMC5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jb21wZXRlbmNlLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2Ryb2lkei5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9sb2dpLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3RhbmtpLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dlYmdsLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dwNy5qcGcnLFxyXG5dO1xyXG5jbGFzcyBDb2xsZWdlWWVhcnNDb250IGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gY29sbGVnZS1jb250XCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiQ29sbGVnZSAtIDIwMTAtMjAxM1wiKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLW1haW4tZGVzY3JpcHRpb24gc2VjdGlvbi13aXRoLWZsb2F0aW5nLWltYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2lkZS1pbWFnZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2FnaC0yLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGZpbGxlZFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2phdmEyLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGltYWdlLW5lYXItdGV4dC1qYXZhIGZpbGxlZFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2NzaGFycC5wbmdcIiwgY2xhc3NOYW1lOiBcImltYWdlLW5lYXItdGV4dCBpbWFnZS1uZWFyLXRleHQtY3NoYXJwIGZpbGxlZFwiIH0pKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGaXJzdCAzIHllYXJzIG9mIGNvbGxlZ2Ugd2VyZSBqdXN0IGF3ZXNvbWUuIEEgbG90IG9mIGNvb2wgcGVvcGxlIGFuZCBpbnRlcmVzdGluZyBzdWJqZWN0cyAoY2FsY3VsdXMgJiBtYXRyaXhlcyBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvaGVhcnQucG5nXCIsIGNsYXNzTmFtZTogXCJpY29uXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBJIHBhcnRpY2lwYXRlZCBpbiAyIGludGVybnNoaXBzLCBvbmUgb2YgdGhlbSBpbmNsdWRlZCBjb2RpbmctZG9qb3MgYW5kICByZWZhY3RvciB3b3Jrc2hvcHMgd2hlcmUgdXNpbmcgbW91c2Ugd2FzIGZvcmJpZGRlbiAtIG9ubHkga2V5IHNob3J0Y3V0cyBzbyBJIGltcHJvdmVkIG15IElERSBleHBlcmllbmNlIGEgbG90LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbiB0aGUgZW5kIEkgd2FzIG9mZmVyZWQgYSBqb2IgYXQgdGVsY29tIGNvbXBhbnkgd2hlcmUgSSBzcGVudCBhIHllYXIgd2l0aCBpbmNyZWRpYmx5IGNvb2wgcGVvcGxlLiBXZSd2ZSBjcmVhdGVkIGFwcGxpY2F0aW9uIGZvciBtYW5hZ2luZyBlbXBsb3llZXMgY29tcGV0ZW5jaWVzIGFuZCByb29tIGFsbG9jYXRpb25zIHRvb2wuIEFzIGEgaGFyZCBDKysgZGV2IEkndmUgYWx3YXlzIGZvdW5kIEpTL0NTUy9IVE1MIHRvIGJlIGZvciBraWRzIGluIGtpbmRlcmdhcnRlbiBzbyBJIHdhcyBkb2luZyBtYWlubHkgSmF2YSBiYWNrLWVuZC4gRnJvbSB0aW1lIHRvIHRpbWUgSSB3YXMganVtcGluZyBpbnRvIGpxdWVyeSAvIGpzIGxpYnMgZnVuY3Rpb25hbGl0aWVzIHRvIGFkZCBzb21lIGJlaGF2aW91cnMgYnV0IEkgZGlkbid0IHdhbnQgdG8gdG91Y2ggaHRtbC9jc3MgLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBbHNvIEkndmUgcmVhY2hlZCBteSBFbmdpbmVlciBkZWdyZWUuIEl0IHdhcyBhYm91dCBjcmVhdGluZyBlZmZpY2llbnQgVFJJRSB0cmVlcyAtIGRpY3Rpb25hcnkgc3RydWN0dXJlcyB0aGF0IHB1cnBvc2Ugd2FzIHRvIGhlbHAgZmluZGluZyBwb3NzaWJsZSB3b3JkcyBiZXR3ZWVuIHN0YXJ0aW5nIHN0cmluZyBhbmQgZW5kaW5nIHN0cmluZ3MgZm9yIHdvcmRzIGNvcnJlY3Rpb24uIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIZXJlIGFyZSBzb21lIHByb2plY3RzIGZyb20gY29sbGVnZSBhbmQgam9iIEkgaGF2ZSBzY3JlZW5zaG90cyBvZjpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90c1wiIH0sIGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGltYWdlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaW1hZ2UsIGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90XCIgfSkpKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBsYXN0IG9uZSBpcyBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIidTcGF6enlCYWxsJ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgd2hpY2ggcmVhY2hlZCBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIjEwIDAwMCBkb3dubG9hZHNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9uIFdpbmRvd3MgTW9iaWxlIDcgaW4gYSB5ZWFyLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXb3J0aCB0byBtZW50aW9uIGluIHRlcm1zIG9mIGhhY2tpbmcgaXMgdGhlIGZhY3QgSSd2ZSBtYW5hZ2UgdG8gY3JlYXRlIHBva2VyIGNhcmQgcmVhZGVyIHVzaW5nIE9wZW5DViBhbmQgV2luZG93cyBBUEkgdG8gb25lIG9mIHBva2VyIHBsYXRmb3Jtcy4gSSBhbHNvIHRyaWVkIHRvIHdyaXRlIHNvbWUga2luZCBvZiBhIGJvdCBidXQgdGhlIHJpc2sgd2FzIHRvbyBiaWcgc28gSSBkcm9wcGVkIGl0LlwiKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsZWdlWWVhcnNDb250O1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDEuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2gyLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoMy5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDQuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2g1LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoNi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDcuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZmxhc2g4LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2ZsYXNoOS5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9mbGFzaDEwLmpwZydcclxuXTtcclxuY2xhc3MgQ29sbGVnZVllYXJzIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gY29sbGVnZVwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNvbGxlZ2UgMjAwOS0yMDEwXCIpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvbiBzZWN0aW9uLXdpdGgtZmxvYXRpbmctaW1hZ2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaWRlLWltYWdlc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvYWdoLTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvYXMyLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGltYWdlLW5lYXItdGV4dC1hc1wiIH0pKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBZnRlciBwYXNzaW5nIG15IG1hdHVyZSBleGFtIEkgd2VudCB0byBJVCBzdHVkaWVzIHdoZXJlIEkgd2Fzbid0IHZlcnkgaGFwcHkgaGVuY2Ugd2hlbiBhIGNvbGxlZ2UgZnJpZW5kIG9mIG1pbmUgb2ZmZXJlZCBtZSBhIGpvYiBhcyBhIEZsYXNoIEdhbWUgZGV2ZWxvcGVyKEFjdGlvbnNjcmlwdCkgSSB0b29rIGl0LiBJdCB3YXMgYSA3LW1hbiBzdHVkZW50cyBjb21wYW55IHdoZXJlIEkgd2FzIHBhaWQgfjIkL2hvdXIgd2hpY2ggYWZ0ZXIgMiB3ZWVrcyAgaW5jcmVhc2VkIHRvIDQkIGR1ZSB0byBnb29kIHJlc3VsdHMuIFdlJ3ZlIGNyZWF0ZWQgYWJvdXQgfjMwIGdhbWVzLCBoZXJlIGFyZSBzb21lIG9mIHRoZW06XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdHNcIiB9LCBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogaSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBpbWFnZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGltYWdlLCBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdFwiIH0pKSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkR1ZSB0byB0aGUgZmFjdCBJIHdhcyB3b3JraW5nIHJlbW90ZWx5IGFuZCBJIHdhcyBwYWlkIHBlciBob3VyIGl0IHdhcyBubyB1c2UgZm9yIG1lIHRvIGNyZWF0ZSBnYW1lcyB0aGF0IHF1aWNrbHkgYXMgdGhlcmUgd2FzIG5vdCBtdWNoIG1vbmV5IGZyb20gaXQuIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWWVhciBhZnRlciBJIHF1aXQgdGhlIGpvYiBhbmQgc3dpdGNoZWQgbXkgbWFqb3IgdG8gQXBwbGlhbmNlIElUIG9uIHNhbWUgZGVwYXJ0bWVudC5cIikpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGVnZVllYXJzO1xyXG47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuc3ZnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBib3R0b206IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zdmctY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgaW1hZ2VzID0gWydidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1jYWxjLlBORycsICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1kZWxmb3JjZS5QTkcnLCAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtZ3JhLlBORycsICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1rbGF3aXN6LlBORycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUta29tb3JrYS5QTkcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9nYW1lLWtvbmt1cnMuUE5HJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1zdHJ6ZWxuaWNhLlBORycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtd2V6eWsuUE5HJ107XHJcbmNsYXNzIEVhcmx5WWVhcnNDb250IGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gZWFybHkteWVhcnMtY29udFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkVhcmx5IHllYXJzIDIwMDMtMjAwNlwiKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLW1haW4tZGVzY3JpcHRpb24gc2VjdGlvbi13aXRoLWZsb2F0aW5nLWltYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL3ZiLnBuZ1wiLCBjbGFzc05hbWU6IFwiaW1hZ2UtbmVhci10ZXh0IGZpbGxlZFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNvIEkgbmVlZGVkIHRvIGtub3cgbW9yZSBhYm91dCBjcmVhdGluZyBnYW1lcyBhbmQgaGFkIG5laXRoZXIgc291cmNlIG9mIGtub3dsZWRnZSBub3IgbW9uZXkgdG8gZ2V0IG9uZS4gU28gSSBhc2tlZCBteSBkYWQgdG8gYnV5IG1lIGEgYm9vayBWaXN1YWwgQmFzaWMgNiBhbmQgSSB3ZW50IGZ1bGwgY2F2ZS1wcm9ncmFtbWluZy4gRHVyaW5nIDIwMDQvMjAwNSBJJ3ZlIGNyZWF0ZWQgYSBidW5jaCBvZiBnYW1lczpcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RzXCIgfSwgaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBpbWFnZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaW1hZ2UsIGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90XCIgfSkpKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kIGFsc28gSSd2ZSBjcmVhdGVkIG15IGZpcnN0IGZ1bGwgd2VicGFnZSBmb3IgbXkgc2Nob29sIGNsYXNzLiBJdCBoYWQgYWxsIHRoZSBodG1sL2Nzcy9qcyBhdmFpbGFibGUgZmVhdHVyZXM6IGZhbmN5IGN1cnNvcnMsIHNvdW5kcywgc3VydmV5cywgZXZlbiBmYWxsaW5nIHNub3cuIEkgcmVtZW1iZXIgZG9pbmcgaG9zdGluZyBvcHRpbWl6YXRpb25zIGNyZWF0aW5nIGxpa2UgOCBhY2NvdW50cyB0byBob2xkIGNsYXNzIGltYWdlcyBvbiBmcmVlIGhvc3RpbmcgdG8gd29ya2Fyb3VuZCBiYW5kd2l0aCBsaW1pdGF0aW9ucy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkFsc28gQXJvdW5kIDIwMDUgd2VicGFnZSBmdWxsIG9mIGltYWdlcy9naWZzIHdhcyBtYWRlIGZvciBteSBXYXJjcmFmdCAzIGNsYW4uIEl0IHdhcyBteSBmaXJzdCBwYWdlIHRoYXQgbG9va2VkIHByZXR0eSBkZWNlbnQgYW5kIGhhZCBzb21lIGNvaGVzaXZlIGNvbG9ycy5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFYXJseVllYXJzQ29udDtcclxuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY2xhc3MgRWFybHlZZWFycyBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uIGVhcmx5LXllYXJzXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uLWhlYWRlclwiIH0sIFwiRWFybHkgeWVhcnMgMjAwMC0yMDAzXCIpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24tbWFpbi1kZXNjcmlwdGlvbiAgc2VjdGlvbi13aXRoLWZsb2F0aW5nLWltYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2h0bWwucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSBzdGFydGVkIGRldmVsb3BpbmcgYXQgdGhlIGFnZSBvZiB+MTAgYXJvdW5kIDIwMDAuIEl0IHdhcyBhIE1pY3Jvc29mdCBXb3JkIHdlYnBhZ2UgZm9yIG15IERpYWJsbyBjbGFuLiBBZnRlciB3ZWVrIG9mIGRvaW5nIGl0IGFuZCBiZWluZyBzbyBwcm91ZCBvZiBteSBmaXJzdCBjcmVhdGlvbihtYXJxdWVlcywgcGluayBhbmQgcHVycGxlIGNvbG9ycyBhbGwgb3ZlciB0aGUgcGxhY2UpIG15IGZyaWVuZHMgdG9sZCBtZSBpdCdzIGEgY3JhcCBhbmQgdGhleSB3b3VsZCBkbyBtdWNoIGJldHRlciBpbiAxMCBtaW51dGVzIHdpdGggYSBub3RlcGFkLiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSBkcm9wcGVkIHdlYmRldiBmb3IgYSB3aGlsZSBhbmQgYXJvdW5kIDIwMDEgSSd2ZSBtb3ZlZCB0byBjcmVhdGluZyBjbGllbnQtc2lkZSBtb2RpZmljYXRpb25zIGZvciBDb3VudGVyLVN0cmlrZSBnYW1lKGN1c3RvbSBncmFwaGljcywgY29tbWFuZHMsIHNvdW5kcywgbWFwcykuIEl0IHdhcyBwcmV0dHkgaGlsYXJpb3VzIGFzIEkgcmVjYWxsIGJ1dCBhIGxvdCBvZiBmdW4gc3VyZWx5Li4uIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdCB0aGUgYWdlIG9mIDEzIEkgbWV0IGEgZnJpZW5kIG5hbWVkIEx1a2FzIGF0IHNjaG9vbCBhbmQgaGUgdG9sZCBtZSBoZSBjcmVhdGVkIENhbGN1bGF0b3IhIEkgd2FzIGluY3JlZGlibHkgaW1wcmVzc2VkIGFuZCB3YW50ZWQgdG8gY3JlYXRlZCBteSBvd24uIFNvIGhlIHNob3dlZCBtZSBWaXN1YWwgQmFzaWMgbWFjcm9zIGluIE1pY3Jvc29mdCBPZmZpY2UgYW5kIGR1cmluZyBvbmUgbGVzc29uIHdlJ3ZlIGNyZWF0ZWQgc2ltcGxlIGNhbGN1bGF0b3IgYXBwKG9mIGNvdXJzZSB3aXRoIHBpbmsgYnV0dG9ucyBhbmQgaWNreSBiYWNrZ3JvdW5kKS4gSSB3YXMgYXN0b25pc2hlZC4gV2hlbiBJIHdlbnQgaG9tZSBJIHdhbnRlZCB0byBkbyBpdCBteXNlbGYgdG8gbWVzcyBhcm91bmQgd2l0aCBpdCBhbmQgYWRkIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0aWVzIChzcXVhcmUgcm9vdCBmdHchKS5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTbyBpIHJhbiBtaWNyb3NvZnQgb2ZmaWNlIGFuZCBvcGVuZWQgbWFjcm9zIGFuZCAuLi4gSSBmb3Jnb3Qgd2hhdCBhcmUgdGhlIGNvbW1hbmRzIGFuZCBkaWRuJ3Qga25vdyB3aGF0IHNob3VsZCBJIHR5cGUgdG8gbWFrZSBpdCB3b3JrLiBJdCB3YXMgMjAwMyBhbmQgLi4uIHRoZXJlIHdhcyBubyBJU1AgaW4gbXkgaG9tZSBhbmQgbm8gZG9jdW1lbnRhdGlvbiB3aGF0c29ldmVyLiBTby4uLiBJIHVzZWQgbGFuZGxpbmUgcGhvbmUgYW5kIGNhbGxlZCBoaW0gYW5kIGFza2VkIGhpbSB0byB0ZWxsIG1lIHRoZSBleGFjdCBjb21tYW5kcyBhbmQgbGluZXMgdG8gdHlwZS4gSXQgd2FzIGhpbGFyaW91cyBidXQgYWZ0ZXIgMjAgbWludXRlcyBvZiB0eXBpbmcgSSBoYWQgbXkgY2FsY3VsYXRvciB3b3JraW5nLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkkgd2FzIHN1cGVyIGhhcHB5IGFuZCB3YW50ZWQgdG8gY3JlYXRlIGV2ZW4gbW9yZS5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFYXJseVllYXJzO1xyXG47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuZ2F0ZS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2dhdGUvZ2F0ZTEwLmpwZycpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMCA1cmVtIDRyZW0gcmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxufVxcclxcblxcclxcbi5nYXRlLmxlZnQge1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1sZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F0ZS5yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtcmlnaHQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGxlZnQ6IC01MHZ3O1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICByaWdodDogLTUwdnc7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ua25vY2tlciB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcmVtIDByZW0gMC41cmVtICMyMjIyMjIpO1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV5ZSB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHJpZ2h0OiAwOyAgIFxcclxcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ2xvdyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICA4MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC44O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgei1pbmRleDogMzsgICBcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogc2hhZG93LWFuaW07XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWRvdy1hbmltIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwLjVyZW0gMHB4IDAuNXJlbSAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgfVxcclxcbn1cIiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jbGFzcyBHYXRlIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdhdGUtY29udGFpbmVyXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnYXRlIGxlZnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvZ2F0ZS9rbm9ja2VyLWxlZnQucG5nXCIsIGNsYXNzTmFtZTogXCJrbm9ja2VyXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9nYXRlL2V5ZS1sZWZ0LTIucG5nXCIsIGNsYXNzTmFtZTogXCJrbm9ja2VyIGV5ZVwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaGFkb3dcIiB9KSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2F0ZSByaWdodFwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9nYXRlL2tub2NrZXItbGVmdC5wbmdcIiwgY2xhc3NOYW1lOiBcImtub2NrZXJcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2dhdGUvZXllLWxlZnQtMi5wbmdcIiwgY2xhc3NOYW1lOiBcImtub2NrZXIgZXllXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNoYWRvd1wiIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2F0ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3YxLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2Mi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jdjMuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3Y0LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2NS5qcGcnLFxyXG5dO1xyXG5jbGFzcyBKb2JzQ29udDIgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbiBqb2JzLWNvbnQtMlwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNhcmVlciAyMDE3LXByZXNlbnRcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uIHNlY3Rpb24td2l0aC1mbG9hdGluZy1pbWFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNpZGUtaW1hZ2VzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy91bml0eTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvYW5ndWxhcjIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgaW1hZ2UtbmVhci10ZXh0LWFuZy0yXCIgfSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkkndmUgc3RhcnRlZCBkb2luZyBzb21lIGhvYmJ5IHNpZGUtcHJvamVjdHMgaW4gVW5pdHkgcmVnYXJkaW5nIGdhbWVzIGFuZCBjb21wdXRlciBncmFwaGljcy4gSSd2ZSBldmVuIGNyZWF0ZWRcXHUwMEEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNHYU1JeWlXSW5LUVY2Q2VLUFRlUHlBXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMveXQxLnBuZ1wiLCBjbGFzc05hbWU6IFwiaWNvblwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIllvdXR1YmUgY2hhbm5lbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIlxcdTAwQTAgd2hlcmUgSSBwdWJsaXNoIGFsbCBjb21wdXRlciBncmFwaGljcyB0aGluZyBJIGRvLiBBbHNvIEkndmUgc3RhcnRlZCBkZXZlbG9waW5nIGFzc2V0cyBmb3IgVW5pdHkgQXNzZXQgU3RvcmU6IFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2Fzc2V0c3RvcmUudW5pdHkuY29tL3B1Ymxpc2hlcnMvMjU1NzhcIiB9LCBcIiBNeVxcdTAwQTBwdWJsaXNoZXJcXHUwMEEwYWNjb3VudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIi5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSd2ZSBqb2luZWQgYW5vdGhlciBzcG9ydCBib29raW5nIGNvbXBhbnkgd2hlcmUgY3VycmVudGx5IEknbSB1c2luZyBBbmd1bGFyNi5cIikpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBKb2JzQ29udDI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3YxLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2Mi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jdjMuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvY3Y0LmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2N2NS5qcGcnLFxyXG5dO1xyXG5jbGFzcyBKb2JzQ29udCBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzZWN0aW9uIGpvYnMtY29udFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNhcmVlciAyMDE2LTIwMTdcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uIHNlY3Rpb24td2l0aC1mbG9hdGluZy1pbWFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNpZGUtaW1hZ2VzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy91bml0eTIucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgZmlsbGVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvcmVhY3QtcmVkdXgucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHQgaW1hZ2UtbmVhci10ZXh0LXJyIGZpbGxlZFwiIH0pKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXZSd2ZSB0cmF2ZWxlZCB3aXRoIG91ciBnYW1lIHRvIGEgZ2FtZSBjb25mZXJlbmNlOiBcXFwiTGV0J3MgcGxheSBDelxcdTAxMTlzdG9jaG93YVxcXCIgYWZ0ZXIgd2hpY2ggd2UgZ290IGludml0ZWQgdG8gXFxcIkdvb2QgR2FtZSBFeHBvIFdhcnNhd1xcXCIuIEFmdGVyIHRoZSBHR0Ugd2UgY3JlYXRlZCBvdXIgZmFucGFnZTogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9DdXJzZWRWYWxsZXkvXCIgfSwgXCJDdXJzZWQgVmFsbGV5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIGFuZCBhZnRlciBzb21lIGludmVzdG9ycyB0YWxrcyB3ZSBkZWNpZGVkIHRvIHRyYW5zZm9ybSBvdXIgZ2FtZSB0byAyRDogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgeyB3aWR0aDogXCI1NjBcIiwgaGVpZ2h0OiBcIjMxNVwiLCBzcmM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbzBXeHUyRkswNkFcIiwgYWxsb3dGdWxsU2NyZWVuOiB0cnVlIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWZ0ZXIgdGhhdCB3ZSBnb3QgaW52aXRlZCB0byBcXFwiRGlnaXRhbCBEcmFnb25zIENyYWNvd1xcXCIsIGJ1dCBmb3Igbm93IHRoZSBkZXZlbG9wbWVudCBoYXMgYmVlbiBzdXNwZW5kZWQgYXMgZXZlcnlvbmUgdG9vayBoaXMgb3duIHBhdGguIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkhlcmUgaXMgYSBjb3VwbGUgb2YgcGhvdG9zIGZyb20gdGhpcyBqb3VybmV5OlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImltYWdlLXNjcmVlbnNob3RzXCIgfSwgaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBpbWFnZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaW1hZ2UsIGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90XCIgfSkpKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJIGpvaW5lZCBzcG9ydCBib29raW5nIGNvbXBhbnkgYW5kIHN3aXRjaGVkIHRvIFJlYWN0ICYgUmVkdXggc3RhY2suIEFmdGVyIDIgeWVhcnMgb2YgbmcgSSB3YW50ZWQgdG8gc2VlIHdoYXQncyB0aGUgZnVzcyBhYm91dCBhbmQgd2hvIEFicmFtb3YgaXMuIEkgaW1tZWRpYXRlbHkgbG92ZWQgSlNYLCB5YXJuLCBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzdHJva2VcIiB9LCBcIndlYnBhY2tcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsIEVTNywgRXhwcmVzcywgSmVzdCwgdW5pZGlyZWN0aW9uYWwgYXBwIGZsb3csIHNpbmdsZSBzdG9yZSwgZnVuY3Rpb25hbCBwcm9ncmFtbWluZy4gVGhlIG9ubHkgdGhpbmcgSSBoYXRlZCB3YXMgaHVnZSBib2lsZXJwbGF0ZSBhbmQgd2VhayBwZXJmb3JtYW5jZS4gXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXZlcnl0aW1lIHNvbWVvbmUgd3JvdGUgYHJlZHVjZSgpYCB3aXRoIHNwcmVhZCBvcGVyYXRvciBpbnNpZGUgSSBjcmllZC4gXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIk9uZSBkYXkgd2hlbiBJIHNhdyBjbGlja2luZyBhIGNoZWNrYm94IGluIGJpZyBjb21wb25lbnQgdHJlZSB0YWtlcyAyMDBtcyB0byBzZWxlY3QgaXRzZWxmIEkgZmVsdCBsaWtlIHRoaXMgaXMgd3JvbmcgZGlyZWN0aW9uIG9mIHdlYiBkZXZlbG9wbWVudC4gU2VsZWN0aW5nIGNoZWNrYm94IHdhcyBsaWtlIHRoaXM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkNyZWF0ZSAmIGRpc3BhdGNoIGFjdGlvbiwgZ28gdGhyb3VnaCByZWR1eCBtaWRkbGV3YXJlLCBydW4gcHJvcGVyIHNhZ2EsIHByb3BhZ2F0ZSBldmVudCB0byBBTEwgcmVkdWNlcnMsIHJlYWNyZWF0aW5nIEltbXV0YWJsZUpTIHN0b3JlLCBydW5uaW5nIG1lbW9pemVkIHJlc2VsZWN0cyB0aGVuIHJlLXJlbmRlcmluZyBiaWcgY29tcG9uZW50IHRyZWUgd2l0aCBuZXN0ZWQgdGFibGVzIGV2ZW4gb3B0aW1pemVkIGJ5IFB1cmVDb21wb25lbnQgdG8gZmluYWxseSBzaG93IG1lIEkgc2VsZWN0ZWQgYSBjaGVja2JveC5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIEFuZCBpdCB3YXMgMjAwbXMgb24gbXkgUEMgd2l0aCA0IGNvcmVzLCAxNmdiIHJhbSEgSSBjb3VsZCBydW4gV2l0Y2hlciAzMEZQUyBvbiBpdCBhbmQgSSBjYW4ndCBzZWxlY3QgYSBjaGVja2JveC4gSSBkZWNpZGVkIHRoYXRzIG5vdCB0aGUgZ29vZCBkaXJlY3Rpb24gc28gSSBzdGFydGVkIGxvb2tpbmcgZm9yIHNvbWUgZnJlZWRvbSBhbmQgbWF5YmUgZ2l2ZSBhIGNoYW5jZSB0byBBbmd1bGFyIGFnYWluLlwiKSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEpvYnNDb250O1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2FsZ2dlbi5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9jb21wZXRlbmNlLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL2Ryb2lkei5wbmcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9sb2dpLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3RhbmtpLmpwZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dlYmdsLnBuZycsXHJcbiAgICAnYnVpbGQvYXNzZXRzL2dhbWVzL3dwNy5qcGcnLFxyXG5dO1xyXG5jbGFzcyBKb2JzIGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24gam9ic1wiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1oZWFkZXJcIiB9LCBcIkNhcmVlciAyMDE0LTIwMTZcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uIHNlY3Rpb24td2l0aC1mbG9hdGluZy1pbWFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNpZGUtaW1hZ2VzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy9hbmd1bGFyMi5wbmdcIiwgY2xhc3NOYW1lOiBcImltYWdlLW5lYXItdGV4dFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL3VuaXR5Mi5wbmdcIiwgY2xhc3NOYW1lOiBcImltYWdlLW5lYXItdGV4dCBpbWFnZS1uZWFyLXRleHQtdW5pdHkgZmlsbGVkXCIgfSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkkgc3RhcnRlZCB3b3JraW5nIGluIGl0YWxpYW4gY29tcGFueSB3aGljaCB3YXMgY3JlYXRpbmcgaHVnZSgyMDArIHBhZ2VzKSBmaW5hbmNpYWwgcmVwb3J0cy4gSSB3YXMgaGlyZWQgYXMgYmFjay1lbmQgSmF2YSBndXkgYW5kIEkgc3RhcnRlZCBjcmVhdGluZyBTUUwgcXVlcnkgd3JhcHBlcnMgZm9yIE9yYWNsZSBkYXRhYmFzZS4gV2Ugd2VyZSBsYWNraW5nIGZyb250LWVuZHMgc28gSSB3YXMgYXNrZWQgaWYgSSdtIGludGVyZXN0ZWQgaW4gZG9pbmcgc29tZSBHVUkuIFRoZXkgdG9sZCBtZSB0byBnaXZlIGl0IGEgdHJ5IGFuZCBpdCB3aWxsIGJlIG9ubHkgdGltZSB0byB0aW1lIHdvcmsuLi4gc28gSSBnYXZlIGl0IGEgY2hhbmNlLiBUaGF0IGRheSBJIHdhcyBpbnRyb2R1Y2VkIHRvIEFuZ3VsYXJKUyBhbmQgd2FzIHRyYW5zZm9ybWVkIHRvIDcwJS8zMCUgZnJvbnQtZW5kL2JhY2stZW5kIGd1eS5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXQgdGhlIGJlZ2dpbmluZyBJIHdhc24ndCBldmVuIGF3YXJlIGFib3V0IHRoZSB3b3JkcyBwZW9wbGUgdXNlZCBhcm91bmQ6IFxcXCJib3dlciwgbnBtLCB5ZW9tYW4sIFNQQSwgZ3J1bnQsIGxlc3MsIGthcm1hXFxcIiBidXQgSSByZW1lbWJlcmVkIHRvIGNyZWF0ZSBzeW1saW5rIGZvciBteSBgbm9kZV9tb2R1bGVzYCBkaXJlY3Rvcnkgbm90IHRvIHNwZW5kIHdob2xlIGRheSB3YWl0aW5nIGZvciBgbnBtIGluc3RhbGxgIHRvIGZpbmlzaC5cIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSB3YXMgdGhlIG1haW4gZnJvbnQtZW5kIGNyZWF0b3Igb2YgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vYXBwbGljYXRpb24uc2t5bWluZGVyLmNvbVwiIH0sIFwiaHR0cHM6Ly9hcHBsaWNhdGlvbi5za3ltaW5kZXIuY29tXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gd2ViIGFwcGxpY2F0aW9uIHRoYXQgc2VydmVzIGZpbmFuY2lhbCByZXBvcnRzIGZvciBhbGwgb3ZlciB0aGUgd29ybGQgY29tcGFuaWVzKGV2ZW4gb24gc21hbGwgaXNsYW5kcyB5b3UndmUgbmV2ZXIgaGVhcmQgb2YpLiBJdCB3YXMgd2ViL3BkZi90eHQuIEFuZ3VsYXJKUyBoYWQgc3VwZXIgZmVhdHVyZXMsIGRlY2xhcmF0aXZlIFVJLCBidXQgd2FzIGluY3JlZGlibHkgc2xvdyBmb3IgdGhpcyB0YXNrIGR1ZSB0byBcXFwibmctZm9yXFxcIiBhbmQgZGlnZXN0IHN5c3RlbSAtIGdlbmVyYXRpbmcgY29tcGxleCB0YWJsZSB3YXMgdGFraW5nIDYwc2Vjb25kcywgc28gSSBlbmRlZCB1cCBpbiBjcmVhdGluZyBteSBvd24gcGVyZm9ybWFudCBlbmdpbmUgZm9yIGdlbmVyYXRpbmcgcmVwb3J0cyB0aGF0IGRpZCBpdCBpbiAyMDBtcy4gQWxzbyBJJ3ZlIGNyZWF0ZWQgdHh0IHRlcm1pbmFsLWxpa2UgZ2VuZXJhdG9yIGZvciAyRCB0YWJsZXMuIEFwcCBmdW5jdGlvbmFsaXRpZXMgY29udGFpbmVkIG11bHRpcGxlIGxhbmd1YWdlcyhlLmcuIGNoaW5lc2UsIGdlcm1hbiksIFNTTyBhdXRoZW50aWNhdGlvbiBzeXN0ZW0sIFJXRCwgSUU5KyBzdXBwb3J0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbHNvIEkndmUgcmVhY2hlZCBteSBNYXN0ZXIgb2YgU2NpZW5jZSBkZWdyZWVzLiBJdCB3YXMgYWJvdXQgY3JlYXRpbmcgd2ViIGFwcGxpY2F0aW9uIGZvciBleHBsaWNpdCBzb2x2aW5nIHB1YmxpYyBjb250ZXN0cyBmcm9tIEZhY2Vib29rL1R3aXR0ZXIgdG8gcHJldmVudCBjaGVhdGluZy4gXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJidWlsZC9hc3NldHMvbWFnaXN0ZXJrYV90c3oucGRmXCIgfSwgXCJNU2Mgd29yayhwb2xpc2hcXHUwMEEwdmVyc2lvbilcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkkndmUgaGVhcmQgdGhlcmUgaXMgYXZhaWxhYmxlIGZyZWUgdmVyc2lvbiBvZiBVbml0eSBnYW1lIGVuZ2luZSB3aXRoIGh1Z2UgY29sbGVjdGlvbiBvZiBmcmVlIGFzc2V0cyBhdmFpbGFibGUgaW4gaXRzIHN0b3JlLCBzbyBJJ3ZlIHN0YXJ0ZWQgZGlzY292ZXJpbmcgdGhpcyBpbmNvbmNlaXZhYmxlIHRvb2wuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIEkgd2FudGVkIHRvIGNyZWF0ZSBhIGdhbWUgd2l0aCBhIHRlYW0gc28gSSBqb2luZWQgcHJvamVjdCBjYWxsZWQgJ0N1cnNlZCBWYWxsZXknIGZvdW5kIG9uXFx1MDBBMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJ3d3cuZ2FtZWRldi5wbFwiIH0sIFwid3d3LmdhbWVkZXYucGxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgLiBXZSd2ZSBjcmVhdGVkIGEgdHJhaWxlcjogXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgeyB3aWR0aDogXCI1NjBcIiwgaGVpZ2h0OiBcIjMxNVwiLCBzcmM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSm9yVm4xWnZTbUFcIiwgYWxsb3dGdWxsU2NyZWVuOiB0cnVlIH0pKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBKb2JzO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBhYm91dF9tZV8xID0gcmVxdWlyZShcIi4vYWJvdXQtbWUvYWJvdXQtbWVcIik7XHJcbmNvbnN0IGVhcmx5X3llYXJzXzEgPSByZXF1aXJlKFwiLi9lYXJseS15ZWFycy9lYXJseS15ZWFyc1wiKTtcclxuY29uc3QgZWFybHlfeWVhcnNfY29udF8xID0gcmVxdWlyZShcIi4vZWFybHkteWVhcnMtY29udC9lYXJseS15ZWFycy1jb250XCIpO1xyXG5jb25zdCBtaWRfeWVhcnNfMSA9IHJlcXVpcmUoXCIuL21pZC15ZWFycy9taWQteWVhcnNcIik7XHJcbmNvbnN0IGdhdGVfMSA9IHJlcXVpcmUoXCIuL2dhdGUvZ2F0ZVwiKTtcclxuY29uc3QgY29sbGVnZV95ZWFyc18xID0gcmVxdWlyZShcIi4vY29sbGVnZS15ZWFycy9jb2xsZWdlLXllYXJzXCIpO1xyXG5jb25zdCBjb2xsZWdlX3llYXJzX2NvbnRfMSA9IHJlcXVpcmUoXCIuL2NvbGxlZ2UteWVhcnMtY29udC9jb2xsZWdlLXllYXJzLWNvbnRcIik7XHJcbmNvbnN0IGpvYnNfMSA9IHJlcXVpcmUoXCIuL2pvYnMvam9ic1wiKTtcclxuY29uc3Qgam9ic19jb250XzEgPSByZXF1aXJlKFwiLi9qb2JzLWNvbnQvam9icy1jb250XCIpO1xyXG5jb25zdCBqb2JzX2NvbnRfMl8xID0gcmVxdWlyZShcIi4vam9icy1jb250LTIvam9icy1jb250LTJcIik7XHJcbmNvbnN0IG5hdmJhcl8xID0gcmVxdWlyZShcIi4vbmF2YmFyL25hdmJhclwiKTtcclxuY2xhc3MgTWFpbiBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ2F0ZVZpc2libGU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYXRlIG11c3QgZmFsbC4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYXRlVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdhdGVWaXNpYmxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZ2F0ZV8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG5hdmJhcl8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtY29udGFpbmVyXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoYWJvdXRfbWVfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZWFybHlfeWVhcnNfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZWFybHlfeWVhcnNfY29udF8xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtaWRfeWVhcnNfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29sbGVnZV95ZWFyc18xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb2xsZWdlX3llYXJzX2NvbnRfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoam9ic18xLmRlZmF1bHQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChqb2JzX2NvbnRfMS5kZWZhdWx0LCBudWxsKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoam9ic19jb250XzJfMS5kZWZhdWx0LCBudWxsKSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1haW47XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IGltYWdlcyA9IFsnYnVpbGQvYXNzZXRzL2dhbWVzL2dhbWUtY2l2aWMuanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1pem8uanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1saXRlcmFraS5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9nYW1lLW9nbC5qcGcnLFxyXG4gICAgJ2J1aWxkL2Fzc2V0cy9nYW1lcy9nYW1lLW9uZXByb2ouanBnJyxcclxuICAgICdidWlsZC9hc3NldHMvZ2FtZXMvZ2FtZS1zdWRvLmpwZycsXTtcclxuY2xhc3MgTWlkWWVhcnMgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbiBtaWQteWVhcnNcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNlY3Rpb24taGVhZGVyXCIgfSwgXCJIaWdoIHNjaG9vbCAyMDA2LTIwMDlcIiksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uIHNlY3Rpb24td2l0aC1mbG9hdGluZy1pbWFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy9jcHAucG5nXCIsIGNsYXNzTmFtZTogXCJpbWFnZS1uZWFyLXRleHRcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTbyBhZnRlciBnb2luZyB0byBtaWRkbGUtc2Nob29sIEkgc3dpdGNoZWQgdG8gY3JlYXRpbmcgYm90cyBmb3IgTU1PcyBsaWtlIFNpbGtyb2FkL0tuaWdodCBvbmxpbmUgYW5kIEkgcmVhbGx5IHdhbnRlZCB0byBsZWFybiBjcmVhdGluZyBwcml2YXRlIHNlcnZlcnMgYW5kIGJvdHMuIEFyb3VuZCAyMDA3IEkgZm91bmQgZXhjZWxsZW50IFdpbmRvd3MgQVBJIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJodHRwOi8veGlvbi5vcmcucGwvXCIgfSwgXCJodHRwOi8veGlvbi5vcmcucGwvXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIHR1dG9yaWFsLCBidXQgaXQgbmVlZGVkIEMrKyBrbm93bGVkZ2UuIEZvcnR1bmF0ZWx5IHRoZXJlIHdhcyBhbHNvIGZ1bGwgcGRmIGNvbnRhaW5pbmcgQysrIHR1dG9yaWFsIHNvIEkndmUgcmVhZCBpdCBhbmQgZG9uZSBhbGwgZXhlcmNpc2VzIGluY2x1ZGluZyBnYW1lcyBsaWtlIHRpYy10YWMtdG9lLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBDKysgd2FzIHNvIGF3ZXNvbWUgSSB3YW50ZWQgdG8gbGVhcm4gbW9yZSBzbyBJJ3ZlIGJvdWdodCB0d28gQysrIGJvb2tzICdUaGlua2luZyBpbiBDKysnLCByZWFkIGl0IGFuZCBkb25lIGFsbCBleGVyY2ljZXMuIEFsc28gaXQgd2FzIGFib3V0IHRpbWUgZm9yIG15IG1hdHVyZSBleGFtIGFuZCBJIHdhcyBkb2luZyBhIGxvdCBvZiBtYXRoIHNjaG9vbCB0YXNrcyBhbmQgSSB3YW50ZWQgdG8gYm9vc3QgdXAgbXkgY2FsY3VsYXRpb24gd29yay4gSSByZW1lbWJlciBjcmVhdGluZyBteSBmaXJzdCBoYW5keSBDKysgYXBwIHRoYXQgd2FzIGhlbHBmdWwgZm9yIG1lOiAgaXQgd2FzIFxcXCJIb3JuZXItc2NoZW1hIHNvbHZlclxcXCIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSSByZW1lbWJlciBvbmUgZGF5IGRhZCBnYXZlIG1lIGEgYm9vayAnXFx1MDE1QWxhZGFtaSBQaXRhZ29yYXNhJyBhbmQgSSB3ZW50IGluIGxvdmUgd2l0aCBtYXRoIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2hlYXJ0LnBuZ1wiLCBjbGFzc05hbWU6IFwiaWNvblwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLiBFdmVyeXRoaW5nIHNlZW1lZCBzbyBwcmV0dHkgYW5kIEkgZm91bmQgbWF0aCBhcHBsaWFuY2UgaW4gcmVhbCB3b3JsZCBhbmQgc2F3IGl0cyBiZWF1dHkuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkkndmUgcmV0dXJuZWQgdG8gZ2FtZSBkZXZlbG9wbWVudCwgam9pbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJidWlsZC9hc3NldHMvaWNvbnMvd2Fyc3p0YXQtaWNvbi5qcGdcIiwgY2xhc3NOYW1lOiBcImljb25cIiB9KSxcclxuICAgICAgICAgICAgICAgICAgICBcIlxcdTAwQTBcIixcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly93YXJzenRhdC5nZC91c2VyL2xhc3RzZWVkcy9wcm9qZWN0c1wiIH0sIFwiaHR0cHM6Ly93YXJzenRhdC5nZC91c2VyL2xhc3RzZWVkcy9wcm9qZWN0c1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBcIiBhbmQgY3JlYXRlZCBhIGNvdXBsZSBvZiBnYW1lcyB3aXRoIEMrKy9TRk1ML1NETC9PcGVuR0woZnVubnkgdGhpbmcgaXMgSSB3YXMgc3RpbGwgd3JpdGluZyBjb2RlIGluIHBvbGlzaCkuIEkgcmVtZW1iZXIgY3JlYXRpbmcgcHJvZ3JhbW1pbmcgc29sdXRpb25zIHdoaWNoIGxhdGVyIEkgZm91bmQgdG8gYmUgdWJpcXVpdG91cyBwcm9ncmFtbWluZyBwYXR0ZXJucyBhbmQgcnVsZXMgb2YgdGh1bWIuIFRoYXQgd2FzIHByZXR0eSBmdW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZS1zY3JlZW5zaG90c1wiIH0sIGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogaW1hZ2UgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGltYWdlLCBjbGFzc05hbWU6IFwiaW1hZ2Utc2NyZWVuc2hvdFwiIH0pKSkpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNaWRZZWFycztcclxuO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgbWFyZ2luOiAwLjZyZW0gMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGlua3MgPiBhe1xcclxcbiAgICBwYWRkaW5nOiAwIDAuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItaW1nLmZpbGxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWltZzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cIiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibmF2YmFyXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJuYXZiYXItbGlua3NcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNHYU1JeWlXSW5LUVY2Q2VLUFRlUHlBXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy95dDIucG5nXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItaW1nIGZpbGxlZFwiIH0pKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdGhlcmVwbzkwXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImJ1aWxkL2Fzc2V0cy9pY29ucy9naXRodWIucG5nXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItaW1nIGZpbGxlZFwiIH0pKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJtYWlsdG86IHRvbWFzei5zemVwY3p5bnNraUBnbWFpbC5jb21cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiYnVpbGQvYXNzZXRzL2ljb25zL2VtYWlsLnBuZ1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWltZyBmaWxsZWRcIiB9KSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZiYXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEwcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMCAycmVtIDFyZW0gcmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMHJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kb3R0ZWQtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDYzLCA2MywgMC41KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1oaWdobGlnaHRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLmFib3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmc0LmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5lYXJseS15ZWFycyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMS5qcGcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24uZWFybHkteWVhcnMtY29udCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnNS5qcGcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ubWlkLXllYXJzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdidWlsZC9hc3NldHMvYmFja2dyb3VuZHMvYmcxOS5qcGcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24uY29sbGVnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMTcucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLmNvbGxlZ2UtY29udCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMTUuanBnJyk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLmpvYnMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2J1aWxkL2Fzc2V0cy9iYWNrZ3JvdW5kcy9iZzE3LmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5qb2JzLWNvbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2J1aWxkL2Fzc2V0cy9iYWNrZ3JvdW5kcy9iZzEwLmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5qb2JzLWNvbnQtMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYnVpbGQvYXNzZXRzL2JhY2tncm91bmRzL2JnMTIuanBnJyk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLW1haW4tZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgNjMsIDAuNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1tYWluLWRlc2NyaXB0aW9uID4gcDpmaXJzdC1sZXR0ZXIsXFxyXFxuLnNlY3Rpb24tZGVzY3JpcHRpb24gPiBwOmZpcnN0LWxldHRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Utc2NyZWVuc2hvdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbjogMC4ycmVtIDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Utc2NyZWVuc2hvdCB7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwLjNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dCB7XFxyXFxuICAgIG1heC13aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dC11bml0eSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE5cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtbmVhci10ZXh0LWFzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dC1jc2hhcnAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dC1qYXZhIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dC1yciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtbmVhci10ZXh0LWFuZy0yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW5lYXItdGV4dC5maWxsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24td2l0aC1mbG9hdGluZy1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0cm9rZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cIiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBtYWluXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL21haW5cIik7XHJcbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcclxuY29uc3Qgc3R5bGVzID0gW1xyXG4gICAgcmVxdWlyZSgnLi9iYXNlLmNzcycpLFxyXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlY3Rpb25zLmNzcycpLFxyXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY3NzJyksXHJcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY3NzJyksXHJcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2F0ZS9nYXRlLmNzcycpLFxyXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2N1dC9jdXQuY3NzJylcclxuXTtcclxuY29uc3Qgc3R5bGVzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5zdHlsZXNFbC5pbm5lckhUTUwgPSBzdHlsZXMucmVkdWNlKChhY2MsIHByZXYpID0+IHtcclxuICAgIHJldHVybiBgJHthY2N9IFxcbiAke3ByZXZ9YDtcclxufSwgJycpO1xyXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc0VsKTtcclxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQobWFpbl8xLmRlZmF1bHQsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1yb290XCIpKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=