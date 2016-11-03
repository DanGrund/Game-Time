var chai = require('chai');
var assert = chai.assert;

const Ship = require('../lib/ship.js')


describe("Ship", function(){
  it("is an Object", function(){
    var ship = new Ship();
    assert.isObject(ship);
  });
});
