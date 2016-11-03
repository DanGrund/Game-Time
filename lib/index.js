var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Ship = require('./ship.js');
var Asteroid = require('./asteroids.js');
var gameCounter = 0;
var ship = new Ship (300, 300, 30, 30);
var asteroidArray = [];

for(i=0; i<10; i++){
  var x = Math.random()*600;
  var y = Math.random()*600;
  var asteroid=new Asteroid(x,y,50,50);
  asteroidArray.push(asteroid);
}

requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  ship.draw().move().collision(asteroidArray, gameCounter);
  asteroidArray.forEach(function(asteroid){
  asteroid.draw().move();
  addAsteroid();
  gameCounter++;
});
  requestAnimationFrame(gameLoop);
});

function addAsteroid (){
  if (gameCounter%3000 === 0) {
    var x = Math.random()*600;
    var y = Math.random()*600;
    var asteroid=new Asteroid(x,y,50,50);
    asteroidArray.push(asteroid);
  }
}
