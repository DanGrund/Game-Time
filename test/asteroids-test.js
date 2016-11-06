var chai = require('chai');
var assert = chai.assert;

const Asteroid = require('../lib/asteroids.js')

describe("Asteroid", function(){

  it('is an Object', function(){
    var asteroid = new Asteroid();
    assert.isObject(asteroid);
  });

  it('should be a function', function () {
    assert.isFunction(Asteroid);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var asteroid = new Asteroid(15);
    assert.equal(asteroid.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var asteroid = new Asteroid(15, 30);
    assert.equal(asteroid.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function (){
    var asteroid = new Asteroid (15, 30, 20);
    assert.equal(asteroid.width, 20);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object',
  function(){
    var asteroid = new Asteroid (15, 30, 20, 25);
    assert.equal(asteroid.height, 25);
  });

  it('should take a direction property upon instantiation',
  function(){
    var asteroid = new Asteroid (15, 30, 20, 25, "direction");
    assert.equal(asteroid.direction, "direction");
  });

  it('should have a method called draw', function(){
    var asteroid = new Asteroid (15, 30, 20, 25);
    assert.isFunction(asteroid.draw)
  });


  it('should have a method called move', function(){
    var asteroid = new Asteroid (15, 30, 20, 25);
    assert.isFunction(asteroid.move)
  });


});
