//Getting HTML Items
const board = document.getElementById("canvas");
const ctx = board.getContext("2d")
let startScreen = document.getElementById("startScreen")
let scoreboard = document.getElementById("score");
let endScreen = document.getElementById("gameOver");
let maxScore = document.getElementById("maxScore");
let currentScore = document.getElementById("finalScore");

//declaring Variables
let blockSize = 20;
let rows = 20;
let cols = 20;

let boardHeight = board.height;
let boardWidth = board.width;

let gameOver;

const colors = ["#f17105", "#7200FF", "#FB3640"]

window.onload = function () {
    startGame();
}

function draw(x, y, s, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, s, s);
}
function clear(){
    ctx.clearRect(0, 0, 800, 600);
}
function setDirection(event){
    // W, A, S, D commands
    if (event.code == "KeyW" && moveY != 1) { moveX = 0; moveY = -1} else
    if (event.code == "KeyD" && moveX != -1) { moveX = 1; moveY = 0} else
    if (event.code == "KeyS" && moveY != -1) { moveX = 0; moveY = 1} else 
    if (event.code == "KeyA" && moveX != 1) { moveX = -1; moveY = 0} else
  
    //Arrow commands (↑, →, ↓ ←) 
    if (event.code == "ArrowUp" && moveY != 1) { moveX = 0; moveY = -1} else
    if (event.code == "ArrowRight" && moveX != -1) { moveX = 1; moveY = 0} else
    if (event.code == "ArrowDown" && moveY != -1) { moveX = 0; moveY = 1} else 
    if (event.code == "ArrowLeft" && moveX != 1) { moveX = -1; moveY = 0};
}
function reset(){
    gameOver = false;
    score = 0;
    snakeBody = [];
    draw(snakeX, snakeY, blockSize, "#CCFF00")
    snakeX = blockSize * Math.floor(Math.random()*19);
    snakeY = blockSize * Math.floor(Math.random()*19);
    moveX = +1
    moveY = 0
    startGame();
}