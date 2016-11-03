var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Ship = require('./ship.js');
var Asteroid = require('./asteroids.js');
var Bullet = require('./bullets.js')

var ship = new Ship (300, 300, 30, 30);
var asteroidArray = [];

for(i=0; i<10; i++){
  var x = Math.random()*600;
  var y = Math.random()*600;
  var asteroid=new Asteroid(x,y,10,10);
  asteroidArray.push(asteroid);
}
//asteroid instatiation

//asteroid/ship collision spect

requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  ship.draw().move();

  asteroidArray.forEach(function (asteroid){
  asteroid.draw().move();
});
  requestAnimationFrame(gameLoop);
});
