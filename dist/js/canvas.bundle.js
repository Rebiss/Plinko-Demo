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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bang-circle.js":
/*!*******************************!*\
  !*** ./src/js/bang-circle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _htmlCanvas = __webpack_require__(/*! ./html-canvas */ "./src/js/html-canvas.js");

function BangCircle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.opacity = 1;
  this.ttl = 80;
}

BangCircle.prototype.draw = function () {
  _htmlCanvas.c.beginPath();
  _htmlCanvas.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  _htmlCanvas.c.fillStyle = this.color;
  _htmlCanvas.c.fill();
  _htmlCanvas.c.closePath();
};

BangCircle.prototype.update = function () {
  this.draw();
};

module.exports = BangCircle;

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _htmlCanvas = __webpack_require__(/*! ./html-canvas */ "./src/js/html-canvas.js");

var _circle = __webpack_require__(/*! ./circle */ "./src/js/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _fixedCircle = __webpack_require__(/*! ./fixed-circle */ "./src/js/fixed-circle.js");

var _fixedCircle2 = _interopRequireDefault(_fixedCircle);

var _bangCircle = __webpack_require__(/*! ./bang-circle */ "./src/js/bang-circle.js");

var _bangCircle2 = _interopRequireDefault(_bangCircle);

var _design = __webpack_require__(/*! ./design */ "./src/js/design.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_htmlCanvas.canvas.width = document.getElementById('app').offsetWidth;
_htmlCanvas.canvas.height = document.getElementById('app').offsetHeight;

var ball = {
    radius: 12
};

/**
 * Auto control
 */
var ticker = 0;

/**
 *
 * Fixed Circles
 */
var fixedCircles = [];
var fixedBallsCoordinates = _utils2.default.fixedCirclesCoordinates(_htmlCanvas.canvas.width, _htmlCanvas.canvas.height, 8);
for (var i = 0; i < fixedBallsCoordinates.length; i++) {
    var newFixedCircle = new _fixedCircle2.default(fixedBallsCoordinates[i].x, fixedBallsCoordinates[i].y, 8, _design.colors.white);

    fixedCircles.push(newFixedCircle);
}

var circles = [];
function init() {
    var newCircle = new _circle2.default(_utils2.default.randomIntFromConcreteRange(_htmlCanvas.canvas.width / 2, -_htmlCanvas.canvas.width / 13, _htmlCanvas.canvas.width / 13), 25, ball.radius, _design.colors.darkOrange);
    circles.push(newCircle);
}

addEventListener('resize', function () {
    _htmlCanvas.canvas.width = document.getElementById('app').offsetWidth;
    _htmlCanvas.canvas.height = document.getElementById('app').offsetHeight;
});

document.getElementById('auto-game').addEventListener("click", automaticallyGame);
document.getElementById('manual-game').addEventListener("click", manualGame);
document.getElementById('add-ball').addEventListener("click", addBall);

var automatically = false;

/**
 * System will create new ball every ~2 second:
 */
function automaticallyGame() {
    automatically = true;
}

/**
 * Manual Game:
 */
function manualGame() {
    automatically = false;
}

/**
 * Add ball
 * It create new ball which fall down from top of canvas tag:
 */
function addBall() {
    init();
}

var bangCircle = [];

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // c.clearRect(0, 0, canvas.width, canvas.height);
    _htmlCanvas.c.fillStyle = _design.backgroundGradient;
    _htmlCanvas.c.fillRect(0, 0, _htmlCanvas.canvas.width, _htmlCanvas.canvas.height);

    fixedCircles.forEach(function (item) {
        item.update();
    });

    if (circles.length) {
        circles.forEach(function (circle, index) {
            circle.update(fixedCircles, bangCircle);

            if (circle.radius === 0) {
                circles.splice(index, 1);
            }
        });
    }

    if (bangCircle.length) {
        bangCircle.forEach(function (bang, index) {
            bang.update();

            bang.color = 'rgba(255,255,255, ' + bang.opacity + ')';

            bang.ttl--;
            bang.radius += 0.4;
            bang.opacity -= 1 / bang.ttl;

            if (bang.ttl === 0) {
                bangCircle.splice(index, 1);
            }
        });
    }

    if (automatically === true) {
        ticker++;

        if (ticker % 75 === 0) {
            init();
        }
    }
}

animate();

/***/ }),

/***/ "./src/js/circle.js":
/*!**************************!*\
  !*** ./src/js/circle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _htmlCanvas = __webpack_require__(/*! ./html-canvas */ "./src/js/html-canvas.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _bangCircle = __webpack_require__(/*! ./bang-circle */ "./src/js/bang-circle.js");

var _bangCircle2 = _interopRequireDefault(_bangCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 5
  };
  this.mass = 1;
  this.gravity = 1;
  this.friction = 0.8;
}

Circle.prototype.draw = function () {
  _htmlCanvas.c.beginPath();
  _htmlCanvas.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  _htmlCanvas.c.fillStyle = this.color;
  _htmlCanvas.c.fill();
  _htmlCanvas.c.closePath();
};

Circle.prototype.update = function (fixedCircles, bangCircle) {
  this.draw();

  if (this.y + this.radius + this.velocity.y > _htmlCanvas.canvas.height) {
    this.radius = 0;
    this.y = 20;

    /**
     * where the ball leaves
     */
    console.log('x - > ', this.x);
  }

  for (var i = 0; i < fixedCircles.length; i++) {
    var change = (0, _utils.distance)(this.x + this.velocity.x, this.y + this.velocity.y, fixedCircles[i].x, fixedCircles[i].y);

    if (change - this.radius - fixedCircles[i].radius < 0) {
      bangCircle.push(new _bangCircle2.default(fixedCircles[i].x, fixedCircles[i].y, 0, 'white'));

      (0, _utils.resolveCollision)(this, fixedCircles[i]);
    }
  }

  if (this.velocity.y < 0) {
    this.velocity.y = -this.velocity.y;
  } else {
    this.velocity.y += 0.2;
  }

  this.y += this.velocity.y;
  this.x += this.velocity.x;
};

module.exports = Circle;

/***/ }),

/***/ "./src/js/design.js":
/*!**************************!*\
  !*** ./src/js/design.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _htmlCanvas = __webpack_require__(/*! ./html-canvas */ "./src/js/html-canvas.js");

var backgroundGradient = _htmlCanvas.c.createLinearGradient(0, 0, 0, _htmlCanvas.canvas.height);
backgroundGradient.addColorStop(0, '#171e26');
backgroundGradient.addColorStop(1, '#1a3541');

var colors = {
  darkOrange: '#FF8C00',
  coral: '#FF7F50',
  white: '#ffffff'
};

module.exports = {
  backgroundGradient: backgroundGradient,
  colors: colors
};

/***/ }),

/***/ "./src/js/fixed-circle.js":
/*!********************************!*\
  !*** ./src/js/fixed-circle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _htmlCanvas = __webpack_require__(/*! ./html-canvas */ "./src/js/html-canvas.js");

function FixedCircle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 0
  };
  this.mass = 1;
}

FixedCircle.prototype.draw = function () {
  _htmlCanvas.c.beginPath();
  _htmlCanvas.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  _htmlCanvas.c.fillStyle = this.color;
  _htmlCanvas.c.fill();
  _htmlCanvas.c.closePath();
};

FixedCircle.prototype.update = function () {
  this.draw();
};

module.exports = FixedCircle;

/***/ }),

/***/ "./src/js/html-canvas.js":
/*!*******************************!*\
  !*** ./src/js/html-canvas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
module.exports = { canvas: canvas, c: c };

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntFromConcreteRange(value, min, max) {
  return value + Math.floor(Math.random() * (max - min + 1) + min);
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function fixedCirclesCoordinates(width, height) {
  var lines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;


  var coordinatesArray = [];
  var startCirclesCount = 3;
  var endCirclesCount = lines + 2;

  var yLineCoordinate = 0;
  var heightBetweenLines = height / (lines + 1);
  var widthBetweenCircles = (width - 200) / endCirclesCount; // - 50 from left and right sides
  var middleOfWidth = width / 2;

  for (var i = startCirclesCount; i <= endCirclesCount; i++) {

    yLineCoordinate += heightBetweenLines;

    if (i % 2 === 0) {

      var k = 0;
      for (var j = i / 2 + 1; j <= i; j++) {
        var x = void 0;

        x = middleOfWidth + widthBetweenCircles / 2 + widthBetweenCircles * k;

        coordinatesArray.push({
          x: x,
          y: yLineCoordinate
        });

        x = middleOfWidth - widthBetweenCircles / 2 - widthBetweenCircles * k;

        coordinatesArray.push({
          x: x,
          y: yLineCoordinate
        });

        k++;
      }
    } else {
      var _k = 0;
      for (var _j = Math.ceil(i / 2); _j <= i; _j++) {
        var _x2 = void 0;
        if (_j === Math.ceil(i / 2)) {
          _x2 = middleOfWidth;

          coordinatesArray.push({
            x: _x2,
            y: yLineCoordinate
          });
        } else {
          _x2 = middleOfWidth + widthBetweenCircles * _k;

          coordinatesArray.push({
            x: _x2,
            y: yLineCoordinate
          });

          _x2 = middleOfWidth - widthBetweenCircles * _k;

          coordinatesArray.push({
            x: _x2,
            y: yLineCoordinate
          });
        }
        _k++;
      }
    }
  }

  return coordinatesArray;
}

/**
 *
 * @param velocity
 * @param angle
 * @returns {{x: number, y: number}}
 */
function rotate(velocity, angle) {
  return {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };
}

/**
 *
 * @param particle
 * @param otherParticle
 */
function resolveCollision(particle, otherParticle) {
  var xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  var yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  var xDist = otherParticle.x - particle.x;
  var yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

    // Grab angle between the two colliding particles
    var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

    // Store mass in var for better readability in collision equation
    var m1 = particle.mass;
    var m2 = otherParticle.mass;

    // Velocity before equation
    var u1 = rotate(particle.velocity, angle);
    var u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    var v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
    var v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

    // Final velocity after rotating axis back to original location
    var vFinal1 = rotate(v1, -angle);
    var vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    // otherParticle.velocity.x = vFinal2.x;
    // otherParticle.velocity.y = vFinal2.y;
  }
}

module.exports = {
  randomIntFromRange: randomIntFromRange, randomIntFromConcreteRange: randomIntFromConcreteRange, fixedCirclesCoordinates: fixedCirclesCoordinates,
  distance: distance, rotate: rotate, resolveCollision: resolveCollision
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map