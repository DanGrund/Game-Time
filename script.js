var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function Ship (x,y, width, height) {
  this.x = x ;
  this.y = y;
  this.width = width;
  this.height = height;
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Ship.prototype.move = function () {
  if (rightPressed){
    this.x++;
  }
  if (leftPressed){
    this.x--;
  }
  if (upPressed){
    this.y++;
  }
  if (downPressed){
    this.y--;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode== 40){
        upPressed = true;
    }
    else if(e.keyCode == 38){
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode== 40){
        upPressed = false;
    }
    else if(e.keyCode == 38){
        downPressed = false;
    }
}
var ship = new Ship (300, 300, 20, 20);

requestAnimationFrame(function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  ship.draw().move();
  requestAnimationFrame(gameLoop);
})
//
