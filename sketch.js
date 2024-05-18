let simulationStopped = document.getElementById("stop-sim").checked;

function setup() {
  const w_width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const w_height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  createCanvas(w_width, w_height);
  background(0);
  // points = [];
  // for (let i = 0; i < 60; i++) {
  //   points.push(new Point());
  // }
}

function draw() {
  // simulationStopped = document.getElementById("stop-sim").checked;
  // if (simulationStopped) {
  //   return;
  // }
  // const w_width =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  // const w_height =
  //   window.innerHeight ||
  //   document.documentElement.clientHeight ||
  //   document.body.clientHeight;
  // resizeCanvas(w_width, w_height);
  // background(0);
  // for (let i = 0; i < points.length; i++) {
  //   points[i].global_speed = map(mouseX, 0, width, 1, 150);
  //   points[i].updatePos();
  //   if (
  //     points[i].x > width ||
  //     points[i].y > height ||
  //     points[i].x < 0 ||
  //     points[i].y < 0
  //   ) {
  //     points[i] = new Point();
  //   }
  //   points[i].draw();
  // }
}
