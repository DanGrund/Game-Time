var lives = 3;
var deathCounter = 0;
var $ = require('jquery');
var {updateScore} = require('./bullets.js');
function Ship (x,y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = 'up';
  this.context = context;
  this.lives = 3;
}

Ship.prototype.draw = function (counter) {
  var image = new Image();
  if (deathCounter+180 > counter) {
  switch (this.direction) {
    case 'up':
      image.src = "lib/images/deathstar/redstar-up.png";
      break;
    case 'upRight':
      image.src = "lib/images/deathstar/redstar-upRight.png";
      break;
    case 'right':
      image.src = "lib/images/deathstar/redstar-right.png";
      break;
    case 'downRight':
      image.src = "lib/images/deathstar/redstar-downRight.png";
      break;
    case 'down':
      image.src = "lib/images/deathstar/redstar-down.png";
      break;
    case 'downLeft':
      image.src = "lib/images/deathstar/redstar-downLeft.png";
      break;
    case 'left':
      image.src = "lib/images/deathstar/redstar-left.png";
      break;
    case 'upLeft':
      image.src = "lib/images/deathstar/redstar-upLeft.png";
      break;
      }
  } else {
  switch (this.direction) {
    case 'up':
      image.src = "lib/images/deathstar/deathstar-up.png";
      break;
    case 'upRight':
      image.src = "lib/images/deathstar/deathstar-upRight.png";
      break;
    case 'right':
      image.src = "lib/images/deathstar/deathstar-right.png";
      break;
    case 'downRight':
      image.src = "lib/images/deathstar/deathstar-downRight.png";
      break;
    case 'down':
      image.src = "lib/images/deathstar/deathstar-down.png";
      break;
    case 'downLeft':
      image.src = "lib/images/deathstar/deathstar-downLeft.png";
      break;
    case 'left':
      image.src = "lib/images/deathstar/deathstar-left.png";
      break;
    case 'upLeft':
      image.src = "lib/images/deathstar/deathstar-upLeft.png";
      break;
    }
  }
  context.drawImage(image, this.x, this.y, this.width, this.height);
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
        if (this.lives>1){
          this.lives--;
          this.x = 300;
          this.y = 300;
          deathCounter = counter;
        }
        else{
          this.live--;
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
    $('#start-overlay').hide();
    $('#end-overlay').show(function(){$('#restart').focus();});
    $('#end-overlay').append(`<div class='info'>Your Score is: <span>${updateScore()}</span></div>`);
}

module.exports = Ship;
