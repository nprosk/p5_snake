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
let snake = [];
let snake_velocity = {x: 0, y: 0};

function setup() {
  createCanvas(w_width, w_height);
  background(0);
  frameRate(10);
  // points = [];
  // for (let i = 0; i < 60; i++) {
  //   points.push(new Point());
  // }
  snake.push({ x: 0, y: 0 });
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
  for (let i = 0; i < snake.length; i++) {
    let x = snake[i].x;
    let y = snake[i].y;
    strokeWeight(0.25);
    stroke(255);
    fill(255);
    rect(x, y, cell_size, cell_size);
  }

  updateSnake();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake_velocity = { x: 0, y: -cell_size };
  } else if (keyCode === DOWN_ARROW) {
    snake_velocity = { x: 0, y: cell_size };
  } else if (keyCode === LEFT_ARROW) {
    snake_velocity = { x: -cell_size, y: 0 };
  } else if (keyCode === RIGHT_ARROW) {
    snake_velocity = { x: cell_size, y: 0 };
  }
}

function updateSnake() {
  for (let i = 0; i < snake.length; i++) {
    snake[i].x += snake_velocity.x;
    snake[i].y += snake_velocity.y;
  }
}