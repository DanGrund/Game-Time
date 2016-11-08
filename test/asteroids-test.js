var chai = require('chai');
var assert = chai.assert;

const Asteroid = require('../lib/asteroids.js');

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
    assert.isFunction(asteroid.draw);
  });


  it('should have a method called move', function(){
    var asteroid = new Asteroid (15, 30, 20, 25);
    assert.isFunction(asteroid.move);
  });

  it('move should increment the x value by two if the asteroids direction is assigned as right', function(){
    var asteroid = new Asteroid (15, 30, 20, 25, "right");
    asteroid.move();
    assert.equal(asteroid.x, 17);
  });

  it('move should decrement the x value by two if the asteroids direction is assigned as left', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "left");
      asteroid.move();
      assert.equal(asteroid.x, 13);
    });

  it('move should decrement the y value by two if the asteroids direction is assigned as up', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "up");
      asteroid.move();
      assert.equal(asteroid.y, 28);
  });

  it('move should increment the y value by two if the asteroids direction is assigned as down', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "down");
      asteroid.move();
      assert.equal(asteroid.y, 32);
  });

  it('move should decrement the x and y value by two if the asteroids direction is assigned as upLeft', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "upLeft");
      asteroid.move();
      assert.equal(asteroid.x, 13);
      assert.equal(asteroid.y, 28);
  });

  it('move should increment the x and decrement the y value by two if the asteroids direction is assigned as upRight', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "upRight");
      asteroid.move();
      assert.equal(asteroid.x, 17);
      assert.equal(asteroid.y, 28);
  });

  it('move should decrement the x and increment the y value by two if the asteroids direction is assigned as downLeft', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "downLeft");
      asteroid.move();
      assert.equal(asteroid.x, 13);
      assert.equal(asteroid.y, 32);
  });

  it('move should increment the x and y value by two if the asteroids direction is assigned as downRight', function(){
      var asteroid = new Asteroid (15, 30, 20, 25, "downRight");
      asteroid.move();
      assert.equal(asteroid.x, 17);
      assert.equal(asteroid.y, 32);
  });

  it('if move is called and the x coordinate is greater than 600, x is decremented by 600', function(){
    var asteroid = new Asteroid (601, 30, 20, 25, "right");
    asteroid.move();
    assert.equal(asteroid.x, 1);
  });


  it('if move is called and the y coordinate is greater than 600, y is decremented by 600', function(){
      var asteroid = new Asteroid (10, 601, 20, 25, "up");
      asteroid.move();
      assert.equal(asteroid.y, 1);
    });

  it('if move is called and the x coordinate is less than 0, x is incremented by 600', function(){
    var asteroid = new Asteroid (-1, 30, 20, 25, "left");
    asteroid.move();
    assert.equal(asteroid.x, 599);
  });

  it('if move is called and the y coordinate is less than 0, y is incremented by 600', function(){
    var asteroid = new Asteroid (10, -1, 20, 25, "left");
    asteroid.move();
    assert.equal(asteroid.y, 599);
  });
});
