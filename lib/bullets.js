var score = 0;

function Bullet (ship, context){
  this.x = ship.x + ship.width/2 - 5;
  this.y = ship.y + ship.height/2 - 5;
  this.width = 10;
  this.height = 10;
  this.direction = ship.direction;
  this.context = context;
}

Bullet.prototype.draw = function (){
  var image = new Image();
  switch (this.direction) {
    case 'up':
      image.src = "lib/images/lasers/laser-vertical.png";
      break;
    case 'upRight':
      image.src = "lib/images/lasers/laser-45.png";
      break;
    case 'right':
      image.src = "lib/images/lasers/laser-horizontal.png";
      break;
    case 'downRight':
      image.src = "lib/images/lasers/laser-315.png";
      break;
    case 'down':
      image.src = "lib/images/lasers/laser-vertical.png";
      break;
    case 'downLeft':
      image.src = "lib/images/lasers/laser-45.png";
      break;
    case 'left':
      image.src = "lib/images/lasers/laser-horizontal.png";
      break;
    case 'upLeft':
      image.src = "lib/images/lasers/lazer-315.png";
      break;
  }
  // image.src = "lib/images/deathstar-upRight.png";
  context.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

Bullet.prototype.move = function (){
  if (this.direction === 'upRight'){this.x += 7; this.y -= 7; }
  if (this.direction === 'downRight'){this.x += 7; this.y += 7;}
  if (this.direction === 'upLeft'){this.x -= 7; this.y -= 7;}
  if (this.direction === 'downLeft'){this.x -= 7; this.y += 7;}
  if (this.direction === 'right'){this.x += 10; this.width = 40;}
  if (this.direction === 'left'){this.x -= 10; this.width = 40;}
  if (this.direction === 'up'){this.y -= 10; this.height = 40;}
  if (this.direction === 'down'){this.y += 10; this.height = 40;}
  return this;
};

Bullet.prototype.collision = function (asteroidArray) {
    for(var i=0; i<asteroidArray.length; i++) {
      var asteroid = asteroidArray[i];
      if (this.x < asteroid.x + asteroid.width && this.x + this.width > asteroid.x &&
      this.y < asteroid.y + asteroid.height && this.height + this.y > asteroid.y) {
        asteroidArray.splice(i,1);
        score++;
        }
      }
  return score;
};

function drawScore () {
  context.font = "16px Helvetica";
  context.fillStyle = 'white';
  context.fillText("Score: "+score, 8, 20);
}

function updateScore () {
  var newScore = score;
  return newScore;
}

module.exports = {Bullet, drawScore, updateScore};
