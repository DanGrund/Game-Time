var chai = require('chai');
var assert = chai.assert;

const {Bullet, drawScore} = require('../lib/bullets.js')
const {Ship, drawLives} = require('../lib/ship.js')

describe("Bullet", function(){

  it("is an Object", function(){
    var ship = new Ship
    var bullet = new Bullet(ship, context);
    assert.isObject(bullet);
  });

  it('should be a function', function () {
    assert.isFunction(Bullet);
  });

  it('should base the x coordinate on the ship x coordinate', function () {
    var ship = new Ship (300, 300, 30, 30, context)
    var bullet = new Bullet (ship, context)
    assert.equal(bullet.x, 310);
  });

  it('should base the y coordinate on the ship y coordinate', function () {
    var ship = new Ship (300, 300, 30, 30, context)
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.y, 310);
  });

  it('should have a set width of 10', function(){
    var ship = new Ship (300, 300, 30, 30, context)
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.width, 10)
  })

  it('should have a set height of 10', function(){
    var ship = new Ship (300, 300, 30, 30, context)
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.height, 10)
  })

  it('should base the direction on the ship direction', function () {
    var ship = new Ship (300, 300, 30, 30, context)
    var bullet = new Bullet (ship, context);
    assert.equal(bullet.direction, ship.direction);
  });

  it('should take a sixth argument that allows a user to add a canvas context', function () {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d');
  var ship = new Ship(15, 30, 20, 25, context);
  var bullet = new Bullet (ship, context)
  assert(bullet.context === context);
});

it('should have a method called draw', function(){
  var bullet = new Bullet (15, 30, 20, 25);
  assert.isFunction(bullet.draw)
})

it('should have a method called move', function(){
  var bullet = new Bullet (15, 30, 20, 25);
  assert.isFunction(bullet.move)
})

it('should have a method called collision', function(){
var bullet = new Bullet (15, 30, 20, 25);
assert.isFunction(bullet.collision)
})


it('drawLives should be a function', function () {
  assert.isFunction(drawLives);
});

});
