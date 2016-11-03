function Ship (x,y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Ship.prototype.move = function () {
  if (rightPressed){this.x = this.x+5;}
  if (leftPressed){this.x = this.x-5;}
  if (upPressed){this.y = this.y-5;}
  if (downPressed){this.y = this.y+5;}
};

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39){rightPressed = true;}
    else if(e.keyCode === 37){leftPressed = true;}
    else if(e.keyCode === 38){upPressed = true;}
    else if(e.keyCode === 40){downPressed = true;}
}

function keyUpHandler(e) {
    if(e.keyCode === 39){rightPressed = false;}
    else if(e.keyCode === 37){leftPressed = false;}
    else if(e.keyCode === 38){upPressed = false;}
    else if(e.keyCode === 40){downPressed = false;}
}

module.exports = Ship;
