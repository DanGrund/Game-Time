var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Ship = require('./ship.js');
var Asteroid = require('./asteroids.js');
var Bullet = require('./bullets.js')
var gameCounter = 0;
var ship = new Ship (300, 300, 30, 30, context);
var asteroidArray = [];
var bulletArray = [];

for(i=0; i<10; i++){
  var x = Math.random()*600;
  var y = Math.random()*600;
  var asteroid=new Asteroid(x,y,50,50);
  asteroidArray.push(asteroid);
}

var shootCheck = function() {
  if (shoot){
    shoot = false;
    var bullet = new Bullet(ship, context);
    bulletArray.push(bullet);
  }
  bulletArray.forEach(function(bullet, i){
    if (bullet.x > 600 || bullet.y > 600 || bullet.x < 0 || bullet.y < 0){
      bulletArray.splice(i, 1);
    }
  });
}

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var shoot = false;
var shootWasPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39){rightPressed = true;}
    else if(e.keyCode === 37){leftPressed = true;}
    else if(e.keyCode === 38){upPressed = true;}
    else if(e.keyCode === 40){downPressed = true;}
    else if(e.keyCode === 32){
      if(shoot === false){
        shoot = true;
      }
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 39){rightPressed = false;}
    else if(e.keyCode === 37){leftPressed = false;}
    else if(e.keyCode === 38){upPressed = false;}
    else if(e.keyCode === 40){downPressed = false;}
    else if(e.keyCode === 32){shoot = false;}
}

requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  ship.draw().move(rightPressed,leftPressed,upPressed,downPressed).collision(asteroidArray, gameCounter);
  shootCheck();
  bulletArray.forEach(function(bullet){
    bullet.draw(context).move().collision(asteroidArray);
  })
  asteroidArray.forEach(function (asteroid){
  asteroid.draw().move();
  });
    addAsteroid();
    gameCounter++;
  requestAnimationFrame(gameLoop);
});


function addAsteroid (){
  if (gameCounter%30 === 0) {
    var x = Math.random()*600;
    var y = Math.random()*600;
    var asteroid=new Asteroid(x,y,50,50);
    asteroidArray.push(asteroid);
  }
}
