var Spacing = 125;
  var Offset = 100;
    var minSize = 20;
      var maxSize = 100;
        var colorss = ['#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73'];

let xPos;
let yPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background('#264654');
  xPos = random(width);
  yPos = random(height);
  noStroke();
}

function draw() {

  var circleCountx = (windowWidth - 100) / Spacing;
  var circleCounty = (windowHeight - 100) / Spacing;

  for (let c = 0; c < 12; c++) {
    for (let i = 0; i < circleCountx; i++) {
      for (let j = 0; j < circleCounty; j++) {
        let colorpicker = int(random(colorss.length));
        fill(colorss[colorpicker]);
        let size = random(minSize, maxSize);
        ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
      }
    }
  }
}