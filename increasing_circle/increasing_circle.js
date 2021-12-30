var sizes =10;
var colors = ['#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73'];
function setup() {
  createCanvas(windowWidth, windowHeight);
  direction = true;
  frameRate(100);
  noStroke();
  background('#227c9d');
  
}

function draw() {
  let colorpicker = int(random(colors.length));
  fill(colors[colorpicker]);
  
  sizes++;
  if (sizes > width) {
    sizes = 0;
    direction = !direction;
  }
  if (direction === true) {
  } else {
    stroke(width - sizes);
  }
  ellipse(mouseX, mouseY, sizes/4, sizes/4);
}
