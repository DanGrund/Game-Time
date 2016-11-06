var directions = ["right", "left", "up", "down", "upLeft", "upRight", "downLeft", "downRight"];

function Asteroid (x, y, width, height, direction) {
  var i = parseInt(Math.random()*7);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction || directions[i];
}

 Asteroid.prototype.draw = function () {
   context.strokeRect(this.x, this.y, this.width, this.height);
   return this;
 };

 Asteroid.prototype.move = function () {
   if(this.x < 600 && this.y < 600 && this.x > 0 && this.y > 0){
     if (this.direction === "right") {this.x += 2;}
     else if (this.direction === "left") {this.x -= 2;}
     else if (this.direction === "up") {this.y -= 2;}
     else if (this.direction === "down") {this.y += 2;}
     else if (this.direction === "upLeft") {this.x -= 2; this.y -= 2;}
     else if (this.direction === "upRight") {this.x += 2; this.y -= 2;}
     else if (this.direction === "downLeft") {this.x -=2; this.y +=2;}
     else if (this.direction === "downRight") {this.x +=2; this.y +=2;}
  }
    else if (this.x > 600){
     this.x -=600;
   } else if (this.y > 600){
     this.y -=600;
   } else if (this.x < 0){
     this.x +=600;
   } else if (this.y < 0){
     this.y +=600;
   }
 };



module.exports = Asteroid;
