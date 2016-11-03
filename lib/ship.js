function Ship (x,y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = 'up'
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Ship.prototype.move = function () {
  if (rightPressed){this.x = this.x+5; this.direction = 'right';}
  if (leftPressed){this.x = this.x-5; this.direction = 'left';}
  if (upPressed){this.y = this.y-5; this.direction = 'up';}
  if (downPressed){this.y = this.y+5; this.direction = 'down'}
};

Ship.prototype.shoot = function (){
  if (shoot){
    console.log('shoot')
    //instantiate bullet
    var bullet = new Bullet(this);
    //push bullets into array
    bulletArray.push(bullet);
    //call move on bulletarray from the ship coordinates
    bulletArray.forEach(function(bullet){
      bullet.draw().move()
    })
  }
}

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var shoot = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39){rightPressed = true;}
    else if(e.keyCode === 37){leftPressed = true;}
    else if(e.keyCode === 38){upPressed = true;}
    else if(e.keyCode === 40){downPressed = true;}
    else if(e.keyCode === 32){shoot = true;}
}

function keyUpHandler(e) {
    if(e.keyCode === 39){rightPressed = false;}
    else if(e.keyCode === 37){leftPressed = false;}
    else if(e.keyCode === 38){upPressed = false;}
    else if(e.keyCode === 40){downPressed = false;}
    else if(e.keyCode === 32){shoot = false}
}


module.exports = Ship;
