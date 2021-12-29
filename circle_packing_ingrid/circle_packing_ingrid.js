var Spacing = 115;
var Offset = 100;
var minSize = 20;
var maxSize = 100;
var colors = ['#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background ('#264654');
  noStroke();
  var circleCountx = (windowWidth - 100 )/ Spacing;
  var circleCounty = (windowHeight - 100)/ Spacing;
  
  for(let c = 0; c < 12; c++){
    for(let i = 0; i < circleCountx; i++){
      for(let j = 0; j < circleCounty; j++){
        let colorpicker = int(random(colors.length));
        fill(colors[colorpicker]);
        let size = random(20, 100);
        ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
      }   
    }
  }
}
