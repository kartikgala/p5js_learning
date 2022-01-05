var circleX = 0;
var circleY = 0;
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape
let xspeed = 5; // Speed of the shape
let yspeed = 6; // Speed of the shape
var colors = ['#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73'];

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  // noStroke();
  strokeWeight(5);
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(50);
  smooth(1);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse((xpos), ypos, rad, rad);

  if (mouseX >= xpos-50 && mouseY <= ypos+50 && mouseY) {
    let colorpicker = int(random(colors.length));
    fill(colors[colorpicker]);
  } else {
    fill(random(50));    
  }
}
