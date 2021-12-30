function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(100);
  fill(60, 60, 200);
  strokeWeight(5);
  rectMode(CENTER); // to ditermine the center of the rectangle.
  rect (mouseX, mouseY, 50, 50, 10); // creates an interactive rectangle with moving mouse.
}
