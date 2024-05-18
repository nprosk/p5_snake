let gamePaused = document.getElementById("pause-game").checked;
let w_width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let w_height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
let cell_size = 20;
let snake = new Snake(0, 0);
snake.velocity = { x: 0, y: 0 };

function setup() {
  createCanvas(w_width, w_height);
  background(0);
  frameRate(10);
  // points = [];
  // for (let i = 0; i < 60; i++) {
  //   points.push(new Point());
  // }
}

function draw() {
  gamePaused = document.getElementById("pause-game").checked;
  if (gamePaused) {
    return;
  }
  w_width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  w_height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  w_width = 600;
  w_height = 400;
  resizeCanvas(w_width, w_height);
  background(0);
  for (let rows = 0; rows < w_width; rows += cell_size) {
    for (let cols = 0; cols < w_height; cols += cell_size) {
      let x = rows;
      let y = cols;
      strokeWeight(0.25);
      stroke(255);
      fill(0);
      rect(x, y, cell_size, cell_size);
    }
  }
  snake.update();
  snake.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.velocity = { x: 0, y: -cell_size };
  } else if (keyCode === DOWN_ARROW) {
    snake.velocity = { x: 0, y: cell_size };
  } else if (keyCode === LEFT_ARROW) {
    snake.velocity = { x: -cell_size, y: 0 };
  } else if (keyCode === RIGHT_ARROW) {
    snake.velocity = { x: cell_size, y: 0 };
  }
  if (key === 'e') {
    snake.addTail();
    console.log("pressed e")
  }
}