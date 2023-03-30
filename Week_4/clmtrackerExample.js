// clmtrackr + p5 basic exmaple. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

//Taken from: https://advanced-critical-computation-23.glitch.me/p2.html

let capture;
let tracker;
let positions;

function setup() {
    // load p5 functions:
    createCanvas(windowWidth, windowHeight);
  
    capture = createCapture(VIDEO);

    capture.size(width, height);
    capture.hide();

    // load clmtrackr functions:
    tracker = new clm.tracker(); // create a new clmtrackr object
    tracker.init(); // initialize the object
    tracker.start(capture.elt); // start tracking the video element capture.elt
}

function draw() {
    image(capture, 0, 0, width, height);
   
    let positions = tracker.getCurrentPosition(); // updates the tracker with current positions
//  console.log(positions); // uncomment to see the list of arrays
  
/// draw face outline
    noFill();
    stroke(255);
  
  for (let i = 0; i < positions.length; i++) {
  ellipse(positions[i][0], positions[i][1], 4, 4);
//   text(i, positions[i][0], positions[i][1]);
}
 
if (positions.length > 0) {
    fill(255, 0, 0);
    rect(positions[19][0], positions[19][1], 90, 20);
  }
  
}