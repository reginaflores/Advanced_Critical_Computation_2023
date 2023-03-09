let imgarray = [];

function preload(){
  image1 = image('dalle_images/0989943.jpg');


  //
  for(let i=0; i<25; i++){
    imgarray = image('dalle_images/'+i+'_image1.jpg');
  }
}

function setup(){
  let cnvs = createCanvas(640, 480);
  cnvs.id('faceCanvas');
}

function draw(){
  clear();
  if(detections != undefined){
    if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
      stroke(0);
      strokeWeight(3);
      beginShape(POINTS);
      for(let j=0; j<detections.multiFaceLandmarks[0].length; j++){
        let x = detections.multiFaceLandmarks[0][j].x * width;
        let y = detections.multiFaceLandmarks[0][j].y * height;
        vertex(x, y);
      }
      endShape();
    }



    }
  }
