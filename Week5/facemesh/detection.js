
//https://google.github.io/mediapipe/
//https://google.github.io/mediapipe/solutions/face_mesh#javascript-solution-api

//Check out Kazu :)
//https://www.youtube.com/watch?v=yrsxDOBL5xM

let detections = [];


const videoElement = document.getElementById('video');


function gotFaces(results) {
  detections = results;
  console.log(detections);
}

const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(gotFaces);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({image: videoElement});
  },
  width: 640,
  height: 480
});
camera.start();
