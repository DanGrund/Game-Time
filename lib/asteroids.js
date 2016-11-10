var directions = ["right", "left", "up", "down", "upLeft", "upRight", "downLeft", "downRight"];

function Asteroid (x, y, width, height, direction) {
  var randomDirection = parseInt(Math.random()*7);
  var randomPlanet = parseInt(Math.random()*13);
  this.planet = randomPlanet;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction || directions[randomDirection];
}

 Asteroid.prototype.draw = function () {
  var image = new Image();
  switch (this.planet) {
    case 0:
      image.src = "lib/images/planets/planet1.png";
      break;
    case 1:
      image.src = "lib/images/planets/planet2.png";
      break;
    case 2:
      image.src = "lib/images/planets/planet3.png";
      break;
    case 3:
      image.src = "lib/images/planets/planet4.png";
      break;
    case 4:
      image.src = "lib/images/planets/planet5.png";
      break;
    case 5:
      image.src = "lib/images/planets/planet6.png";
      break;
    case 6:
      image.src = "lib/images/planets/planet7.png";
      break;
    case 7:
      image.src = "lib/images/planets/planet8.png";
      break;
    case 8:
      image.src = "lib/images/planets/planet9.png";
      break;
    case 9:
      image.src = "lib/images/planets/planet10.png";
      break;
    case 10:
      image.src = "lib/images/planets/planet11.png";
      break;
    case 11:
      image.src = "lib/images/planets/planet12.png";
      break;
    case 12:
      image.src = "lib/images/planets/planet13.png";
      break;
    case 13:
      image.src = "lib/images/planets/planet14.png";
      break;
    case 14:
      image.src = "lib/images/planets/planet15.png";
      break;
    default:
      image.src = "lib/images/planets/planet15.png";
    }
  context.drawImage(image, this.x, this.y, this.width, this.height);
   return this;
 };

 Asteroid.prototype.move = function () {
   if(this.x < 600 && this.y < 600 && this.x > 0 && this.y > 0){
     if (this.direction === "right") {this.x += 1;}
     else if (this.direction === "left") {this.x -= 1;}
     else if (this.direction === "up") {this.y -= 1;}
     else if (this.direction === "down") {this.y += 1;}
     else if (this.direction === "upLeft") {this.x -= 1; this.y -= 1;}
     else if (this.direction === "upRight") {this.x += 1; this.y -= 1;}
     else if (this.direction === "downLeft") {this.x -=1; this.y +=1;}
     else if (this.direction === "downRight") {this.x +=1; this.y +=1;}
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
