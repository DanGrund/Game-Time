var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Ship = require('./ship.js');
var Asteroid = require('./asteroids.js');

var ship = new Ship (300, 300, 30, 30);
var asteroidArray = [];


//asteroid instatiation

//asteroid/ship collision spect

requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  ship.draw().move();
  requestAnimationFrame(gameLoop);
});
