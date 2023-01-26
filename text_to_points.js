let yesillow;
let nameArray = [];

function preload(){
  yesillow = loadFont("Yesillow.otf");
}

function setup() {
  createCanvas(400, 400);
  
  textFont(yesillow);
  textSize(100)
  
  // textToPoints(txt, x, y, fontSize, [options])
  nameArray = yesillow.textToPoints("ADVCC", width/2-150, height/2, 100,{
    sampleFactor: 0.2
    });
 
  console.log(nameArray);
  console.log(nameArray[0]);
  console.log(nameArray.length);
  
}

function draw() {
  background(220);

  text("ADVCC", width/2-150, height/2);
  
  for(let i=0; i<nameArray.length;i++){
    ellipse(nameArray[i].x, nameArray[i].y, 4);
  }
  
}


