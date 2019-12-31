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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/glRender.js":
/*!*************************!*\
  !*** ./src/glRender.js ***!
  \*************************/
/*! exports provided: glRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glRender", function() { return glRender; });
const glRender = () => {
  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");
  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
  // Set clear color to black, fully opaque
  gl.clearColor(0.2, 1.0, 0.7, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _glRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glRender */ "./src/glRender.js");



const onResize = () => {
  const redrawIfInactive = () => {
    let now = getTime();
    if (now - lastResize > 995) {
      Object(_layout__WEBPACK_IMPORTED_MODULE_0__["drawLayout"])();
      Object(_glRender__WEBPACK_IMPORTED_MODULE_1__["glRender"])();
      console.log("redraw");
    };
  };
  lastResize = getTime();
  // prevent multiple (re)renders when mutliple resizes, with 1 sec delay
  setTimeout(redrawIfInactive, 1000);
};

window.onresize = onResize;

const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastResize = 0;

Object(_layout__WEBPACK_IMPORTED_MODULE_0__["drawLayout"])();
Object(_glRender__WEBPACK_IMPORTED_MODULE_1__["glRender"])();


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/*! exports provided: drawLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLayout", function() { return drawLayout; });
const drawLayout = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const width = Math.floor(winHeight * 16 / 9);
  const panelW = (width - winHeight) / 2;
  let offset = 0;
  if (width < winWidth) {
    offset = Math.floor((winWidth - width) / 2);
  }
  let glcanvas = document.getElementById('glcanvas');
  glcanvas.style.width = `${winHeight}px`;
  glcanvas.style.height = `${winHeight}px`;
  glcanvas.style.left = `${panelW + offset}px`;
  let panels = document.getElementsByClassName("panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.width = `${panelW * 0.98}px`;
    panels[i].style.height = `${winHeight * 0.991}px`;
    panels[i].style.left = `${(panelW * 0.01) + ((winHeight + panelW) * i) + offset}px`;
    panels[i].style.top = `${winHeight * 0.0035}px`;
  };
};




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7O0FDZm5CO0FBQUE7QUFBQTtBQUFxQztBQUNBOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQVU7QUFDaEIsTUFBTSwwREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMERBQVU7QUFDViwwREFBUTs7Ozs7Ozs7Ozs7OztBQ3ZCUjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0Qyw2QkFBNkIsVUFBVTtBQUN2QywyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQywrQkFBK0IsY0FBYztBQUM3QyxnQ0FBZ0Msa0JBQWtCO0FBQ2xELDhCQUE4QixzREFBc0Q7QUFDcEYsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNBOztBQUVxQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBnbFJlbmRlciA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnbGNhbnZhc1wiKTtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgR0wgY29udGV4dFxuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG4gIC8vIE9ubHkgY29udGludWUgaWYgV2ViR0wgaXMgYXZhaWxhYmxlIGFuZCB3b3JraW5nXG4gIGlmICghZ2wpIHtcbiAgICBhbGVydChcIlVuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMLiBZb3VyIGJyb3dzZXIgb3IgbWFjaGluZSBtYXkgbm90IHN1cHBvcnQgaXQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBTZXQgY2xlYXIgY29sb3IgdG8gYmxhY2ssIGZ1bGx5IG9wYXF1ZVxuICBnbC5jbGVhckNvbG9yKDAuMiwgMS4wLCAwLjcsIDEuMCk7XG4gIC8vIENsZWFyIHRoZSBjb2xvciBidWZmZXIgd2l0aCBzcGVjaWZpZWQgY2xlYXIgY29sb3JcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG59O1xuXG5leHBvcnQgeyBnbFJlbmRlciB9XG4iLCJpbXBvcnQgeyBkcmF3TGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgeyBnbFJlbmRlciB9IGZyb20gJy4vZ2xSZW5kZXInXG5cbmNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xuICBjb25zdCByZWRyYXdJZkluYWN0aXZlID0gKCkgPT4ge1xuICAgIGxldCBub3cgPSBnZXRUaW1lKCk7XG4gICAgaWYgKG5vdyAtIGxhc3RSZXNpemUgPiA5OTUpIHtcbiAgICAgIGRyYXdMYXlvdXQoKTtcbiAgICAgIGdsUmVuZGVyKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlZHJhd1wiKTtcbiAgICB9O1xuICB9O1xuICBsYXN0UmVzaXplID0gZ2V0VGltZSgpO1xuICAvLyBwcmV2ZW50IG11bHRpcGxlIChyZSlyZW5kZXJzIHdoZW4gbXV0bGlwbGUgcmVzaXplcywgd2l0aCAxIHNlYyBkZWxheVxuICBzZXRUaW1lb3V0KHJlZHJhd0lmSW5hY3RpdmUsIDEwMDApO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gb25SZXNpemU7XG5cbmNvbnN0IGdldFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdmdW5jdGlvbicgPyBwZXJmb3JtYW5jZS5ub3cgOiBEYXRlLm5vdztcbmxldCBsYXN0UmVzaXplID0gMDtcblxuZHJhd0xheW91dCgpO1xuZ2xSZW5kZXIoKTtcbiIsImNvbnN0IGRyYXdMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3Qgd2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLmZsb29yKHdpbkhlaWdodCAqIDE2IC8gOSk7XG4gIGNvbnN0IHBhbmVsVyA9ICh3aWR0aCAtIHdpbkhlaWdodCkgLyAyO1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgaWYgKHdpZHRoIDwgd2luV2lkdGgpIHtcbiAgICBvZmZzZXQgPSBNYXRoLmZsb29yKCh3aW5XaWR0aCAtIHdpZHRoKSAvIDIpO1xuICB9XG4gIGxldCBnbGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbGNhbnZhcycpO1xuICBnbGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpbkhlaWdodH1weGA7XG4gIGdsY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3dpbkhlaWdodH1weGA7XG4gIGdsY2FudmFzLnN0eWxlLmxlZnQgPSBgJHtwYW5lbFcgKyBvZmZzZXR9cHhgO1xuICBsZXQgcGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhbmVsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgIHBhbmVsc1tpXS5zdHlsZS53aWR0aCA9IGAke3BhbmVsVyAqIDAuOTh9cHhgO1xuICAgIHBhbmVsc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHt3aW5IZWlnaHQgKiAwLjk5MX1weGA7XG4gICAgcGFuZWxzW2ldLnN0eWxlLmxlZnQgPSBgJHsocGFuZWxXICogMC4wMSkgKyAoKHdpbkhlaWdodCArIHBhbmVsVykgKiBpKSArIG9mZnNldH1weGA7XG4gICAgcGFuZWxzW2ldLnN0eWxlLnRvcCA9IGAke3dpbkhlaWdodCAqIDAuMDAzNX1weGA7XG4gIH07XG59O1xuXG5leHBvcnQgeyBkcmF3TGF5b3V0IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=