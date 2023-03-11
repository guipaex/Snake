const board = document.getElementById("canvas");
const ctx = board.getContext("2d")

let blockSize = 25;
let rows = 20;
let cols = 20;

let boardHeight = rows*blockSize;
let boardWidth = cols*blockSize;

let scoreboard = document.getElementById("score");
let score = 0

let gameOver = false;

const colors = ["#f17105", "#7200FF", "#FB3640"]

//snake
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let moveX = 0;
let moveY = 0;
let snakeBody = [];

//food
let foodX, foodY;
let foodColor;


window.onload = () => {
  console.log("Rodando...")
  board.height = boardHeight;
  board.width = boardWidth;
  ctx.fillStyle = "#141414";
  ctx.fillRect(0, 0, boardWidth, boardHeight);

  
  spawnFood();
  document.onkeydown = setDirection;
  setInterval(update, 100);
}

function update(){
  clear();
  if(snakeX == foodX && snakeY == foodY){
    snakeBody.push([foodX, foodY]);
    score++
    spawnFood();
  }
  moveSnake();
  scoreboard.innerHTML = score
  endGame();
}

function draw(x, y, s, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, s, s);
}
function clear(){
  ctx.clearRect(0, 0, 800, 600);
}
function spawnFood(){
  foodX = Math.floor(Math.random()*cols)*blockSize;
  foodY = Math.floor(Math.random()*rows)*blockSize;
  foodColor = colors[Math.floor(Math.random()*3)]
}
function moveSnake(){
  for(let i = snakeBody.length-1; i > 0; i--){
    snakeBody[i] = snakeBody[i-1]
  }
  if(snakeBody.length){
    snakeBody[0] = [snakeX, snakeY];
  }

  snakeX += moveX * blockSize;
  snakeY += moveY * blockSize;

  if (snakeX == boardWidth){snakeX = 0;}
  if (snakeX == 0-blockSize){snakeX = boardWidth-blockSize;}
  if (snakeY == boardHeight){snakeY = 0;}
  if (snakeY == 0-blockSize){snakeY = boardHeight-blockSize;}

  draw(snakeX, snakeY, blockSize, "#CCFF00")

  for(let i = 0; i < snakeBody.length; i++){
    ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  draw(foodX, foodY, blockSize, foodColor)
}

function endGame(){
  for(let i = 0; i <snakeBody.length; i++){
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
      gameOver = true
      alert("Game Over")
      clear();
    }
  }
  
}

function setDirection(event){
  if (event.code == "KeyW" && moveY != 1) { moveX = 0; moveY = -1} else
  if (event.code == "KeyD" && moveX != -1) { moveX = 1; moveY = 0} else
  if (event.code == "KeyS" && moveY != -1) { moveX = 0; moveY = 1} else 
  if (event.code == "KeyA" && moveX != 1) { moveX = -1; moveY = 0}
}