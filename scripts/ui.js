function drawBoard() {
    ctx.strokeStyle = "#727272";
    ctx.shadowBlur = 0;
    ctx.lineWidth = 0.05;
    for (let i = 1; i < blockSize; i++) {
      let f = (boardWidth / blockSize) * i;
      ctx.beginPath();
      ctx.moveTo(f, 0);
      ctx.lineTo(f, boardHeight);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, f);
      ctx.lineTo(boardWidth, f);
      ctx.stroke();
      ctx.closePath();
    }
  }