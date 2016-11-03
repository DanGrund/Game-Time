function Bullet (ship){
  this.x = ship.x;
  this.y = ship.y;
  this.width = 10;
  this.height = 10;
  this.direction = ship.direction;
}

Bullet.prototype.draw = function (){
  context.drawRect(this.x, this.y, this.width, this.height);
  return this;
};

Bullet.prototype.move = function (){
  if (this.direction === 'right'){debugger; this.x += 10;}
  if (this.direction === 'left'){this.x -= 10;}
  if (this.direction === 'up'){this.y -= 10;}
  if (this.direction === 'down'){this.y += 10;}
};



module.exports = Bullet;
