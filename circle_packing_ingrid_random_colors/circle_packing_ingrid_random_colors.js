var Spacing = 50;
var Offset = 75;
var minSize = 2;
var maxSize = 30;
var colorss = ['#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73'];

let xPos;
let yPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
   frameRate(32);
  rectMode(CENTER);
  background ('#264654');
  xPos = random(width);
  yPos = random(height);
  //noStroke();
}

function draw() {

  var circleCountx = (windowWidth - 100 )/ Spacing;
  var circleCounty = (windowHeight - 100)/ Spacing;

  for (let c = 0; c < 12; c++) {
    for (let i = 0; i < circleCountx; i++) {
      for (let j = 0; j < circleCounty; j++) {
        let colorpicker = int(random(colorss.length));
        fill(colorss[colorpicker]);
        let size = random(minSize, maxSize);
        ellipse(random(width), Offset + Spacing * j, size, size);
        //ellipse(Offset + Spacing * i, random(height), 50, 50);
      }
    }
  }
}
