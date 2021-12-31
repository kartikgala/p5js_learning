let song;

function preload() {
  song = loadSound('/assets/Electric_Ten_Broke_in_Summer.mp3');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  song.play();
}

// Chrome 70 will require user gestures to enable web audio api > https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}