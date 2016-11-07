var Bullet = require('./bullets.js');
var lives = 3;
var deathCounter = 0;

function Ship (x,y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = 'up';
  this.context = context;
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Ship.prototype.move = function (rightPressed, leftPressed, upPressed, downPressed) {
  if (rightPressed && upPressed){this.x +=3; this.y -=3; this.direction = 'upRight'}
  else if (rightPressed && downPressed){this.x +=3; this.y +=3; this.direction = 'downRight'}
  else if (leftPressed && upPressed){this.x -=3; this.y -=3; this.direction = 'upLeft'}
  else if (leftPressed && downPressed){this.x -=3; this.y +=3; this.direction = 'downLeft'}
  else if (rightPressed){this.x +=5; this.direction = 'right';}
  else if (leftPressed){this.x -=5; this.direction = 'left';}
  else if (upPressed){this.y -=5; this.direction = 'up';}
  else if (downPressed){this.y +=5; this.direction = 'down'}
  return this;
};

Ship.prototype.collision = function (asteroidArray, counter) {
  if (deathCounter+180 > counter){
    return;
  } else if (counter > 180) {
    for(i=0; i<asteroidArray.length; i++) {
      var asteroid = asteroidArray[i];
      if (this.x < asteroid.x + asteroid.width && this.x + this.width > asteroid.x &&
      this.y < asteroid.y + asteroid.height && this.height + this.y > asteroid.y) {
        if (lives>1){
          lives--;
          this.x = 300;
          this.y = 300;
          deathCounter = counter;
          console.log(deathCounter);
        }
        else{
          throw alert("try harder next time!")
          document.location.reload();
        }
      }
    }
  }
  return lives;
};

function drawLives () {
  context.font = "16px Helvetica";
  context.fillText("Lives: " + lives, 8, 40);
}

module.exports = {Ship, drawLives};
