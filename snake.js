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
}
