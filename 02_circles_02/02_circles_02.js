var circleX = 0;
var circleY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(220);
}

function draw() {
  background(120);
  ellipse(circleY, 300, 100, 100);
  circle++;

  if (mouseX >= circleY - 50 && mouseX <= circleY + 50) {
    fill(255, 123, 255);
  } else {
    fill(255);
  }
}
