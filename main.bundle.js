/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var Ship = __webpack_require__(1);

	var ship = new Ship(300, 300, 30, 30);

	// function Asteroid (x, y, width, height) {
	//   this.x = x;
	//   this.y = y;
	//   this.width = width;
	//   this.height = height;
	// }
	//
	// var asteroidArray = [];


	//asteroid instatiation

	//asteroid/ship collision spect

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  ship.draw().move();
	  requestAnimationFrame(gameLoop);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Ship(x, y, width, height) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	}

	Ship.prototype.draw = function () {
	  context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	Ship.prototype.move = function () {
	  if (rightPressed) {
	    this.x = this.x + 5;
	  }
	  if (leftPressed) {
	    this.x = this.x - 5;
	  }
	  if (upPressed) {
	    this.y = this.y - 5;
	  }
	  if (downPressed) {
	    this.y = this.y + 5;
	  }
	};

	var leftPressed = false;
	var rightPressed = false;
	var upPressed = false;
	var downPressed = false;

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {
	  if (e.keyCode === 39) {
	    rightPressed = true;
	  } else if (e.keyCode === 37) {
	    leftPressed = true;
	  } else if (e.keyCode === 38) {
	    upPressed = true;
	  } else if (e.keyCode === 40) {
	    downPressed = true;
	  }
	}

	function keyUpHandler(e) {
	  if (e.keyCode === 39) {
	    rightPressed = false;
	  } else if (e.keyCode === 37) {
	    leftPressed = false;
	  } else if (e.keyCode === 38) {
	    upPressed = false;
	  } else if (e.keyCode === 40) {
	    downPressed = false;
	  }
	}

	module.exports = Ship;

/***/ }
/******/ ]);