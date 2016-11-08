var chai = require('chai');
var assert = chai.assert;

const {Bullet} = require('../lib/bullets.js');
const {Ship, drawLives} = require('../lib/ship.js');
const Asteroid = require('../lib/asteroids.js');


describe("Bullet", function(){

  it("is an Object", function(){
    var ship = new Ship();
    var bullet = new Bullet(ship, context);
    assert.isObject(bullet);
  });

  it('should be a function', function () {
    assert.isFunction(Bullet);
  });

  it('should base the x coordinate on the ship x coordinate', function () {
    var ship = new Ship (300, 300, 30, 30, context);
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.x, 310);
  });

  it('should base the y coordinate on the ship y coordinate', function () {
    var ship = new Ship (300, 300, 30, 30, context);
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.y, 310);
  });

  it('should have a set width of 10', function(){
    var ship = new Ship (300, 300, 30, 30, context);
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.width, 10);
  });

  it('should have a set height of 10', function(){
    var ship = new Ship (300, 300, 30, 30, context);
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.height, 10);
  });

  it('should base the direction on the ship direction', function () {
    var ship = new Ship (300, 300, 30, 30, context);
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.direction, ship.direction);
  });

  it('should take a sixth argument that allows a user to add a canvas context', function () {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var ship = new Ship(15, 30, 20, 25, context);
  var bullet = new Bullet (ship, context);
  assert(bullet.context === context);
});

it('should have a method called draw', function(){
  var ship = new Ship(15, 30, 20, 25, context);
  var bullet = new Bullet (ship, context);
  assert.isFunction(bullet.draw);
});

it('should have a method called move', function(){
  var ship = new Ship(15, 30, 20, 25, context);
  var bullet = new Bullet (ship, context);
  assert.isFunction(bullet.move);
});

it('move should increment the x and decrement the y value by seven if the ship and bullet direction is assigned as upRight', function(){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
    bullet.direction = "upRight";
    bullet.move();
    assert.equal(bullet.x, 17);
    assert.equal(bullet.y, 3);
});

it('move should increment the x and y value by seven if the bullets direction is assigned as downRight', function(){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "downRight";
    bullet.move();
    assert.equal(bullet.x, 17);
    assert.equal(bullet.y, 17);
});

it('move should decrement the x and y value by seven if the bullets direction is assigned as upLeft', function(){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "upLeft";
    bullet.move();
    assert.equal(bullet.x, 3);
    assert.equal(bullet.y, 3);
});

it('move should decrement the x and increment the y value by seven if the bullets direction is assigned as downLeft', function(){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "downLeft";
    bullet.move();
    assert.equal(bullet.x, 3);
    assert.equal(bullet.y, 17);
});

it('move should increment the x value by 10 if the direction is assigned as right', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "right";
    bullet.move();
    assert.equal(bullet.x, 20);
});

it('move should decrement the x value by 10 if the direction is assigned as left', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "left";
    bullet.move();
    assert.equal(bullet.x, 0);
});

it('move should decrement the y value by 10 if the direction is assigned as up', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "up";
    bullet.move();
    assert.equal(bullet.y, 0);
});

it('move should increment the y value by 10 if the direction is assigned as down', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  bullet.direction = "down";
    bullet.move();
    assert.equal(bullet.y, 20);
});

it('should have a method called collision', function(){
var bullet = new Bullet (15, 30);
assert.isFunction(bullet.collision);
});

it('if bullet collides with asteroid score should increase', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  var asteroid = new Asteroid (10, 10, 20, 25, "upRight");
  var asteroidArray = [];
  asteroidArray.push(asteroid);
  var output = bullet.collision(asteroidArray);
  assert.equal(output, 1);
});

it('if bullet collides with asteroid, asteroid should be removed from asteroidArray', function (){
  var ship = new Ship(10, 10, 10, 10, context);
  var bullet = new Bullet (ship, context);
  var asteroid = new Asteroid (10, 10, 20, 25, "upRight");
  var asteroidArray = [];
  asteroidArray.push(asteroid);
  bullet.collision(asteroidArray);
  assert.equal(asteroidArray.length, 0);
});

it('drawLives should be a function', function () {
  assert.isFunction(drawLives);
});

});
