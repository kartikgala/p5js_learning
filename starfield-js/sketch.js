var stars = [],
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    FPS = 60, // Frames per second
    NUM_STARS = (WIDTH*5); // Number of stars

function setup() {
  createCanvas((WIDTH), (HEIGHT));
  
  // Push stars to array
  for (var i = 0; i < NUM_STARS; i++) {
    stars.push({
      x: 0,
      y: 0,
      offset: Math.random() * 360,
      // Weight orbit a little to be outside origin
      orbit: (Math.random()+0.01) * max(WIDTH, HEIGHT),
      radius: Math.random() * 2,
      vx: Math.floor(Math.random() * 10) - 5,
      vy: Math.floor(Math.random() * 10) - 5
    });
  }
  
  frameRate(FPS);
  loop();
}

function draw() {
  background(64, 64, 64);
  push();
  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  stroke(13,13,13, 1);
  strokeCap(ROUND);
  strokeWeight(1);
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    ellipse(s.x, s.y, s.radius, 0);
  }
  pop();
  update();
}

function update() {
  var originX = WIDTH / 2;
  var originY = HEIGHT / 2;
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    
    
    var rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
    s.x = (originX + cos(rad)*(s.orbit*2));
    s.y = (originY + sin(rad)*(s.orbit));
  }
}

function windowResized() {
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    resizeCanvas(WIDTH, HEIGHT);
}