let mySong;
let song, buttton, amp;
let volHistory = [];

function preload(){
  // mySong = loadSound('http://localhost/P5JS/p5js_learning/sketch_02_racing_rectangle/assets/Sat_Narayan_short_Edit_1.mp3');
  mySong = loadSound('http://127.0.0.1:5500/sketch_02_racing_rectangle/assets/Sat_Narayan_short_Edit_1.mp3');
  getAudioContext().resume();
}

function setup() {
  // createCanvas(720, 200);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  mySong.play();  
  amp = new p5.Amplitude();
  //background(255, 0, 0);
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  smooth(10);
  fill(200, 50, 50);
  ellipse(height/2, width/5, vol*300, vol*300);
  console.log(vol)
  volHistory.push(vol);
  for (let x = 0; x < volHistory.length; x++) {
    stroke(255)
    let y = map(volHistory[x], 0, 1, height, 0);
    point(x, y);
  }
  // ellipse(300, 300, vol*300, vol*300);
  console.log(vol)
}

function mousePressed() {
  if (mySong.isPlaying()) {
    // .isPlaying() returns a boolean
    mySong.stop();
    background(0);
  } else {
    mySong.play();
    background(0);
  }
}


// Chrome 70 will require user gestures to enable web audio api > https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}