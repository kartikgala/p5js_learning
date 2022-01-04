var circleX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#999');
}

function draw() {
  circle(circleX, 300, 100, 100);
  circleX++;

  if (mouseX == circleX) {
    fill(255, 123, 255);
  } else 255;
}
