var Bullet = require('./bullets.js');


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
  if (rightPressed){this.x = this.x+5; this.direction = 'right';}
  if (leftPressed){this.x = this.x-5; this.direction = 'left';}
  if (upPressed){this.y = this.y-5; this.direction = 'up';}
  if (downPressed){this.y = this.y+5; this.direction = 'down'}
  return this;
};

Ship.prototype.collision = function (asteroidArray, counter) {
  if (counter > 180) {
    for(i=0; i<asteroidArray.length; i++) {
      var asteroid = asteroidArray[i];
      if (this.x < asteroid.x + asteroid.width && this.x + this.width > asteroid.x &&
      this.y < asteroid.y + asteroid.height && this.height + this.y > asteroid.y) {
        alert("game over loser");
        document.location.reload();
        return this;
      }
    }
  }
  return this;
};

//
// Ship.prototype.collision = function (asteroidArray) {
//     asteroidArray.forEach(function(asteroid){
//       ship = this;
//     if (this.x < asteroid.x + asteroid.width && this.x + this.width > asteroid.x &&
//     this.y < asteroid.y + asteroid.height && this.height + this.y > asteroid.y) {
//       console.log("hit");
//       return this;
//     }
//   });
//   return this;
// };

module.exports = Ship;
