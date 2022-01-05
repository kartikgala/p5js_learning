// Declare any variables here for example we can use these to
// represent the floor plan size
float planW, planH;

// This function is executed once and is used to initialise any 
// variables needed by the sketch.
void setup() {
  size(displayWidth, displayHeight);
  planW = 580;
  planH = 380;
}

// After setup has been executed This method is used to draw a single
//frame. Processing repeats this method 60 times a second.
void draw() {
  background(255); // clear the display with a white background
  // Draw floor plan edge
  fill(255, 255, 240); 
  stroke(0);
  strokeWeight(3); // default is 1
  rect(0, 0, planW, planH);
  // From here you can use the drawing commands to draw the rest
  // of the floor plan
  // ...
}