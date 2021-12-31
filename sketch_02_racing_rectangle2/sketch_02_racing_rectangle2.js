//let song;

//function preload() {
//  song = loadSound('/assets/Sat_Narayan_short_Edit_1.mp3');
//}

let song, buttton, amp;
let volHistory = [];

function preload() {
  song = loadSound("/assets/Sat_Narayan_short_Edit_1.mp3");
  getAudioContext().resume();
}

function setup() {
  createCanvas(800, 600);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volHistory.push(vol);
  for (let x = 0; x < volHistory.length; x++) {
    stroke(255);
    let y = map(volHistory[x], 0, 1, height, 0);
    point(x, y);
  }
  // ellipse(300, 300, vol*300, vol*300);
  console.log(vol);
}

function mousePressed() {
  userStartAudio();
}

// Chrome 70 will require user gestures to enable web audio api > https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}
