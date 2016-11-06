var chai = require('chai');
var assert = chai.assert;

const {Ship, drawLives} = require('../lib/ship.js')
//var rightPressed = require('../lib/index.js')

const Asteroid = require('../lib/asteroids.js')

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

  // it('move with rightPressed and upPressed parameters should increment x by 5, and assign a direction of upRight', function (){
  //   var ship = new Ship (300, 300, 30, 30, context);
  //   ship.move('rightPressed && upPressed')
  //   assert.equal(ship.x, 305)
  //   assert.equal(ship.y, 300)
  //   assert.equal(ship.direction, 'right')
  // });
  //
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



it('should have a method called collision', function(){
  var ship = new Ship (15, 30, 20, 25);
  assert.isFunction(ship.collision)
});

// it('if collision happens within the first three seconds, nothing happens', function (){
//   var deathCounter = 0;
//   var counter = 3;
//   var ship = new Ship (300, 300, 30, 30, context);
//   var asteroid = new Asteroid (300, 300, 50, 50);
//   assert.equal(return)
// });

// it('should lose a life when the asteroid and ship cross boundaries after the first three seconds', function(){
//   var lives = 3;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteriod = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid)
//   ship.collision(asteroidArray, counter)
//   assert.equal(lives, 2);
// });
//
// it('if there is one life and the asteroid and ship cross boundaries, there is an alert of "game over loser"', function(){
//   var lives = 1;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteriod = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid);
//   ship.collision(asteroidArray, counter)
//   assert(alert, "game over loser");
// });
//
// it('if there is one life and the asteroid and ship cross boundaries, the document should reload"', function(){
//   var lives = 1;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteriod = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid);
//   ship.collision(asteroidArray, counter);
//   assert(document.location.reload());
// });

it('drawLives should be a function', function () {
  assert.isFunction(drawLives);
});
//
// it('drawLives should fillText with the current life value after a collision', function (){
//   var lives = 3;
//   var counter = 200;
//   var ship = new Ship (15, 30, 20, 25, context);
//   var asteriod = new Asteroid (15,30,20,25);
//   var asteroidArray = [];
//   asteroidArray.push(asteroid);
//   ship.collision(asteroidArray, counter);
//   assert(drawLives.context.fillText('Lives: ' + lives, 8, 40), "context.fillText('Lives: ' + lives, 8, 40)");
//});

});
