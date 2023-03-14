//snake
let snakeX = blockSize * Math.floor(Math.random()*19);
let snakeY = blockSize * Math.floor(Math.random()*19);
let moveX = +1;
let moveY = 0;
let snakeBody = [];

//food
let foodX, foodY;
let foodColor;

let score = 0;
let speed = 100;

let runningGame

function startGame(){
  spawnFood();
  runningGame = setInterval(update, speed);
}

function update(){
  clear();  //limpa o canvas (atualiza no tempo 'speed')
  drawBoard() //desenha o grid
  scoreboard.innerHTML = score //desenha o scoreboard
  document.onkeydown = setDirection; //Move de acordo com oq foi teclado
  
  if(snakeX == foodX && snakeY == foodY){
    spawnFood();
    snakeBody.push([foodX, foodY]);
    score++
  }
  moveSnake();
  endGame();
 
  
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

  //Removing walls
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
  for(let i = 0; i < snakeBody.length; i++){
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
      gameOver = true
    }
  }

    if(gameOver == true){
      highscore()
      console.log("Game Over")
      endScreen.style.display = "flex";
      maxScore.innerHTML = `Your Highscore is: ${window.localStorage.getItem("Highscore")}`;
      currentScore.innerHTML = `Your score: ${score}`;
      clearInterval(runningGame);
    } else {
      endScreen.style.display = "none";

  }
}

function highscore(){
  let highscore = window.localStorage.getItem("Highscore")
  if (score >= highscore){
    window.localStorage.setItem("Highscore", score)
  }
}