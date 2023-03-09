// clmtrackr + p5 basic exmaple. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

//Taken from: https://advanced-critical-computation-23.glitch.me/p2.html

let capture;
let tracker;
let positions;

let img;

function preload() {
  img = loadImage('mask.png');
}

function setup() {
  // load p5 functions:
  createCanvas(600, 600);

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
  console.log(positions); // uncomment to see the list of arrays


  if (positions.length > 0) {
    fill(255, 0, 0);
    image(img, positions[20][0], positions[0][1] - 100, 200, 250);
  }

} 