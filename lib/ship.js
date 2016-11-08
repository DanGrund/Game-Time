var lives = 3;
var deathCounter = 0;
var $ = require('jquery');
var {Bullet, drawScore, updateScore} = require('./bullets.js');
function Ship (x,y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = 'up';
  this.context = context;
}

Ship.prototype.draw = function () {
  context.fillStyle= 'white';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Ship.prototype.move = function (rightKey, leftKey, upKey, downKey) {
   if (this.x > 600){
     this.x -=600;
   } else if (this.y > 600){
     this.y -=600;
   } else if (this.x < 0){
     this.x +=600;
   } else if (this.y < 0){
     this.y +=600;
   } else if (rightKey && upKey){this.x +=3; this.y -=3; this.direction = 'upRight';}
  else if (rightKey && downKey){this.x +=3; this.y +=3; this.direction = 'downRight';}
  else if (leftKey && upKey){this.x -=3; this.y -=3; this.direction = 'upLeft';}
  else if (leftKey && downKey){this.x -=3; this.y +=3; this.direction = 'downLeft';}
  else if (rightKey){this.x +=5; this.direction = 'right';}
  else if (leftKey){this.x -=5; this.direction = 'left';}
  else if (upKey){this.y -=5; this.direction = 'up';}
  else if (downKey){this.y +=5; this.direction = 'down';}
  return this;
};

Ship.prototype.collision = function (asteroidArray, counter) {
  if (deathCounter+180 > counter){
    return "collisions cannot be detected";
  } else if (counter > 180) {
    for(var i=0; i<asteroidArray.length; i++) {
      var asteroid = asteroidArray[i];
      if (this.x < asteroid.x + asteroid.width && this.x + this.width > asteroid.x &&
      this.y < asteroid.y + asteroid.height && this.height + this.y > asteroid.y) {
        if (lives>1){
          lives--;
          this.x = 300;
          this.y = 300;
          deathCounter = counter;
        }
        else{
          deathCounter = 10000000000;
          showRestartScreen();
          return "game over";
        }
      }
    }
  }
  return lives;
};

function showRestartScreen(){

    $('#game').hide();
    $('#overlay').hide();
    $('#end-overlay').show(function(){$('#restart').focus();});
    $('#end-overlay').on('click', function () {restartGame();});
    $('#end-overlay').append("Your Score is: "+ updateScore());
}

function restartGame (){
  location.reload();
}

function drawLives () {
  context.font = "16px Helvetica";
  context.fillText("Lives: " + lives, 8, 40);
}

module.exports = {Ship, drawLives};
