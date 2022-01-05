function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  smooth();
  fill(60, 60, 200);
  strokeWeight(5);
  rectMode(CENTER); // to ditermine the center of the rectangle.
  rect(mouseX, mouseY, 50, 50, 10); // creates an interactive rectangle with moving mouse.
  // triangle(0, 10, 20, 5, 50, 50, 50,50); //trying triangle funtion.
}