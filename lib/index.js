var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var {Ship, drawLives} = require('./ship.js');
var Asteroid = require('./asteroids.js');
var $  = require('jquery');
var {Bullet, drawScore} = require('./bullets.js');
var gameCounter = 0;
var ship = new Ship (300, 300, 30, 30, context);
var asteroidArray = [];
var bulletArray = [];


$(document).ready(function() {
  $('#end-overlay').hide();
  $('#overlay').show();
  $('#game').hide();
  $('button').on('click', function () {startGame();});
})


function initiate () {
  requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  drawLives();
  drawScore();
  shooting();
  generateAsteroids();
  ship.draw().move(rightKey,leftKey,upKey,downKey).collision(asteroidArray, gameCounter);
  bulletArray.forEach(function(bullet){
    bullet.draw(context).move().collision(asteroidArray);
  });
  asteroidArray.forEach(function (asteroid){
    asteroid.draw().move();
  });
  gameCounter++;
  requestAnimationFrame(gameLoop);
});
}

function generateAsteroids(){
  if (gameCounter === 0){
    for(var i=0; i<10; i++){
      var x = Math.random()*600;
      var y = Math.random()*600;
      var asteroid=new Asteroid(x,y,50,50);
      asteroidArray.push(asteroid);
    }
  } else if (gameCounter < 500){
  addAsteroid(120);
  } else if (gameCounter < 1000){
    addAsteroid(90);
  } else if (gameCounter < 1500){
    addAsteroid(60);
  } else if (gameCounter < 3000){
    addAsteroid(30);
  } else if (gameCounter < 10000){
    addAsteroid(15);
  }
}

function addAsteroid (speed){
  if (gameCounter%speed === 0) {
    var x = Math.random()*600;
    var y = Math.random()*600;
    if (x < ship.x + ship.width && x + 50 > ship.x &&
    y < y + ship.height && 50 + y > ship.y){
      return;
    } else {
      var asteroid=new Asteroid(x,y,50,50);
      asteroidArray.push(asteroid);
    }
  }
}

var shooting = function() {
  if (spaceKey){
    spaceKey = false;
    var bullet = new Bullet(ship, context);
    bulletArray.push(bullet);
  }
  bulletArray.forEach(function(bullet, i){
    if (bullet.x > 600 || bullet.y > 600 || bullet.x < 0 || bullet.y < 0){
      bulletArray.splice(i, 1);
    }
  });
};

var leftKey = false;
var rightKey = false;
var upKey = false;
var downKey = false;
var spaceKey = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39){rightKey = true;}
    else if(e.keyCode === 37){leftKey = true;}
    else if(e.keyCode === 38){upKey = true;}
    else if(e.keyCode === 40){downKey = true;}
    else if(e.keyCode === 32){
      if(spaceKey === false){
        spaceKey = true;
      }
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 39){rightKey = false;}
    else if(e.keyCode === 37){leftKey = false;}
    else if(e.keyCode === 38){upKey = false;}
    else if(e.keyCode === 40){downKey = false;}
    else if(e.keyCode === 32){spaceKey = false;}
}

function startGame () {
  $('#end-overlay').hide();
  $('#overlay').hide();
  $('#game').show();
  initiate ();
}
