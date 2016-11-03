var Bullet = require('./bullets.js');


function Ship (x,y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = 'up';
  this.context = context;
  this.bullets = [];
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
};

// Ship.prototype.shoot = function (){
//   if (shoot){
//     console.log('shoot')
//     var bullet = new Bullet(this, this.context);
//     this.bullets.push(bullet);
//   }
// }



module.exports = Ship;
