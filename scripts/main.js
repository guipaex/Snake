//Getting HTML Items
const board = document.getElementById("canvas");
const ctx = board.getContext("2d")
let startScreen = document.getElementById("startScreen")
let scoreboard = document.getElementById("score");
let endScreen = document.getElementById("gameOver")

//declaring Variables
let blockSize = 25;
let rows = 20;
let cols = 20;

let boardHeight = rows*blockSize;
let boardWidth = cols*blockSize;

let score = 0

let gameOver = false;

const colors = ["#f17105", "#7200FF", "#FB3640"]

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
  