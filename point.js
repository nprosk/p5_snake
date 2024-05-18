class Point {
  constructor(x = random(width), y = random(height), global_speed = 1) {
    this.x = x;
    this.y = y;
    this.speed = random(500, 1500);
    this.last_x = x;
    this.last_y = y;
    this.findDistancesToCenter();
    this.global_speed = global_speed;
  }

  updatePos() {
    this.findDistancesToCenter();
    this.last_x = this.x;
    this.last_y = this.y;
    this.x += (this.distance_to_center_x * this.global_speed) / this.speed;
    this.y += (this.distance_to_center_y * this.global_speed) / this.speed;
  }

  draw() {
    const to_center = this.singleDistanceToCenter();
    const stars = document.getElementById("stars").checked;
    const lines = document.getElementById("trail").checked;
    if (stars) {
      noStroke();
      circle(
        this.x,
        this.y,
        map(
          (to_center / this.speed) * 1000,
          0,
          dist(0, 0, width / 2, height / 2),
          1,
          15
        )
      );
    }
    if (lines) {
      stroke("white");
      line(this.x, this.y, this.last_x, this.last_y);
      strokeWeight(1);
    }
  }

  findDistancesToCenter() {
    this.distance_to_center_x = this.x - width / 2;
    this.distance_to_center_y = this.y - height / 2;
  }

  singleDistanceToCenter() {
    return dist(this.x, this.y, width / 2, height / 2);
  }
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
