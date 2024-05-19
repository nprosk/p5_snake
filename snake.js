class Snake {
  constructor(x, y, next = null, velocity = { x: 0, y: 0 }) {
    this.x = x;
    this.y = y;
    this.next = next;
    this.velocity = velocity;
  }

  update() {
    if (this.next) {
      this.next.updateHelper();
      this.next.x = this.x;
      this.next.y = this.y;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.checkCollision();
    this.checkBounds();
  }

  updateHelper() {
    if (this.next) {
      this.next.updateHelper();
      this.next.x = this.x;
      this.next.y = this.y;
    }
  }

  draw() {
    strokeWeight(0.25);
    stroke(0);
    fill(255);
    rect(this.x, this.y, cell_size, cell_size);
    if (this.next) {
      this.next.draw();
    }
  }

  addTail() {
    if (this.next) {
      this.next.addTail();
    } else {
      this.next = new Snake(this.x, this.y);
      console.log("Added tail!");
      console.log(this.next);
    }
  }

  checkCollision() {
    if (this.next) {
      this.checkCollisionHelper(this.next);
    }
  }

  checkCollisionHelper(snake) {
    if (this.x === snake.x && this.y === snake.y) {
      console.log("Collision detected!");
      this.resetSnake();
      return;
    }
    if (snake.next) {
      this.checkCollisionHelper(snake.next);
    }
  }

  checkBounds() {
    if (this.x >= w_width || this.x < 0 || this.y >= w_height || this.y < 0) {
      console.log("Out of bounds!");
      this.resetSnake();
    }
    if (this.next) {
      this.next.checkBounds();
    }
  }

  resetSnake() {
    this.x = (cell_size * cell_cols) / 2;
    this.y = (cell_size * cell_rows) / 2;
    this.velocity = { x: cell_size, y: 0 };
    this.next = null;
    food.newLocation();
    if (score > highScore) {
      highScore = score;
    }
    score = 0;
  }
}
