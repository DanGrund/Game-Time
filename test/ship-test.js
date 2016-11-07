var chai = require('chai');
var assert = chai.assert;

const {Ship, drawLives} = require('../lib/ship.js');
const Asteroid = require('../lib/asteroids.js');

describe("Ship", function(){

  it("is an Object", function(){
    var ship = new Ship();
    assert.isObject(ship);
  });

  it('should be a function', function () {
    assert.isFunction(Ship);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var ship = new Ship(15);
    assert.equal(ship.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var ship = new Ship(15, 30);
    assert.equal(ship.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function (){
    var ship = new Ship (15, 30, 20);
    assert.equal(ship.width, 20);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object',
  function(){
    var ship = new Ship (15, 30, 20, 25);
    assert.equal(ship.height, 25);
  });

  it('should take a fifth argument that allows a user to add a canvas context', function () {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d');
  var ship = new Ship(15, 30, 20, 25, context);
  assert(ship.context === context);
});

  it('should have a default direction of up',
  function(){
    var ship = new Ship (15, 30, 20, 25);
    assert.equal(ship.direction, 'up');
  });

  it('should have a default context of context',
  function(){
    var ship = new Ship (15, 30, 20, 25, context);
    assert.equal(ship.context, context);
  });

  it('should have a method called draw', function(){
    var ship = new Ship (15, 30, 20, 25);
    assert.isFunction(ship.draw)
  })

  it('should have a method called move', function(){
    var ship = new Ship (15, 30, 20, 25);
    assert.isFunction(ship.move)
  });

  it('move with rightPressed and upPressed should increment the x and decrement the y properties by 3', function (){
    var ship = new Ship (300, 300, 30, 30, context);
    var rightPressed = true;
    var upPressed = true;
  //  if (upPressed){this.x +=3; this.y -=3; this.direction = 'upRight'}
    ship.move(rightPressed && upPressed);
    assert.equal(ship.x, 303);
    assert.equal(ship.y, 303);
    assert.equal(ship.direction, "upRight")
  });

  // it.skip('when move is called and the direction is "upRight" the x property should increment and the y property should decrement by 3', function(){
  //   var ship = new Ship (300, 300, 30, 30, context);
  //   var rightPressed = true;
  //   var upPressed = true;
  //   ship.direction = "upRight"
  //   ship.move(rightPressed && upPressed)
  //   assert.equal(ship.x, 303);
  //   assert.equal(ship.y, 303);
  // })
  // it('move with rightPressed and downPressed parameters should increment x by 5, and assign a direction of downRight', function (){
  //   var ship = new Ship (300, 300, 30, 30, context);
  //   ship.move('rightPressed && downPressed')
  //   assert.equal(ship.x, 305)
  //   assert.equal(ship.y, 300)
  //   assert.equal(ship.direction, 'right')
  // });
  //
  // it('move with leftPressed and upPressed parameters should decrement x by 5, and assign a direction of upLeft', function (){
  //   var ship = new Ship (300, 300, 30, 30, context);
  //   ship.move('leftPressed && downPressed')
  //   assert.equal(ship.x, 305)
  //   assert.equal(ship.y, 300)
  //   assert.equal(ship.direction, 'right')
  // });
  //
  // it('move with leftPressed and downPressed parameters should increment x by 5, and assign a direction of upRight', function (){
  //   var ship = new Ship (300, 300, 30, 30, context);
  //   ship.move('leftPressed && downPressed')
  //   assert.equal(ship.x, 305)
  //   assert.equal(ship.y, 300)
  //   assert.equal(ship.direction, 'right')
  // });

  it('move with rightPressed parameters should increment x by 5, and assign a direction right', function (){
    var ship = new Ship (300, 300, 30, 30, context);
    var rightPressed = true;
    ship.move(rightPressed)
    assert.equal(ship.x, 305)
    assert.equal(ship.direction, 'right')
  });

  it('move with leftPressed parameters should decrement x by 5, and assign a direction left', function (){
    var ship = new Ship (300, 300, 30, 30, context);
    var leftPressed = true;
    var rightPressed = false;
    var upPressed = false;
    var downPressed = false;
    ship.move(rightPressed, leftPressed, upPressed, downPressed);
    assert.equal(ship.x, 295);
    assert.equal(ship.direction, 'left')
  });

it('should have a method called collision', function(){
  var ship = new Ship (15, 30, 20, 25);
  assert.isFunction(ship.collision)
});

it('if collision happens within the first three seconds, nothing happens', function (){
  var deathCounter = 0;
  var counter = 3;
  var ship = new Ship (300, 300, 30, 30, context);
  var asteroid = new Asteroid (300, 300, 50, 50);
  asteroidArray = [];
  asteroidArray.push(asteroid);
  assert.equal(ship.collision(asteroidArray, counter), "collisions cannot be detected")
});

it('should lose a life when the asteroid and ship cross boundaries after the first three seconds', function(){
  var deathCounter = 0;
  var counter = 300;
  var ship = new Ship (15, 30, 20, 25, context);
  var asteroid = new Asteroid (15, 30, 20, 25);
  var asteroidArray = [];
  asteroidArray.push(asteroid);
  var output = ship.collision(asteroidArray, counter);
  assert.equal(output, 2);
});

it.skip('if there is one life and the asteroid and ship collide, collision should throw an alert of "try harder next time!"', function(){
  var counter = 200;
  var ship = new Ship (15, 30, 20, 25, context);
  var asteroid = new Asteroid (15,30,20,25);
  var asteroidOrigin = new Asteroid (300, 300, 300, 300);
  var asteroidArray = [];
  asteroidArray.push(asteroid);
  asteroidArray.push(asteroidOrigin);
  ship.collision(asteroidArray, counter);
  counter = 400;
  ship.collision(asteroidArray, counter);
  counter = 600;
  assert.equal(ship.collision(asteroidArray, counter), "game over");
});

// it.skip('if there is one life and the asteroid and ship cross boundaries, the document should reload"', function(){
//   var lives = 1;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteroid = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid);
//   ship.collision(asteroidArray, counter);
//   assert();
// });

it.skip('drawLives should be a function', function () {
  assert.isFunction(drawLives);
});

// it('drawLives should fillText with the current life value after a collision', function (){
//   var lives = 3;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteroid = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid);
//   ship.collision(asteroidArray, counter);
//   assert
// });

});
