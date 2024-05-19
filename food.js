class Food {
  constructor(x = Math.floor(Math.random() * cell_cols) * cell_size, y = Math.floor(Math.random() * cell_rows) * cell_size) {
    this.x = x;
    this.y = y;
  }

  draw() {
    strokeWeight(0.25);
    stroke(0);
    fill(0, 255, 0);
    rect(this.x, this.y, cell_size, cell_size);
    if (this.next) {
      this.next.draw();
    }
  }

  newLocation() {
    this.x = Math.floor(Math.random() * cell_cols) * cell_size;
    this.y = Math.floor(Math.random() * cell_rows) * cell_size;
  }
}
