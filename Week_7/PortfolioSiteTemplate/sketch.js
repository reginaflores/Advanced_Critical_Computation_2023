
let myFont;
let nameArray = [];
let particles=[];

let bg = 0;
let txt = "";


function preload() {
  myFont = loadFont("Paskowy.ttf");
}

function setup() {
  let cnvs = createCanvas(windowWidth, windowHeight);
  // cnvs.parent('sketch-holder');
  
  textFont(myFont);
  
  nameArray = myFont.textToPoints(
    "code",
    width / 2 - 150,
    height / 2 + 65,
    500,
    {
      sampleFactor: 0.1,
    }
  );
  
  for(let i=0; i<nameArray.length;i++){
    //let particles = new Particle(nameArray[i].x, nameArray[i].y);
    particles.push(new Particle(nameArray[i].x, nameArray[i].y));
  }
  
}

function draw() {
  background(bg);
  
  for(let i=0; i<nameArray.length;i++){
    //ellipse(nameArray[i].x, nameArray[i].y, 4);
    particles[i].update();
    particles[i].arrive();
    particles[i].display();
  }

  fill(255);
  textSize(200);
  text(txt,300,300);
}

function toggleBackground(){
  if(bg == 0){
    bg = "#ff0000"
  }else{
    bg = 0
  }
}


function updateText(val){
  txt = val
}

 

class Particle{
  
  constructor(x, y){
    this.pos = createVector(random(0,width), random(0, height));
    this.acc = createVector();
    this.vel = p5.Vector.random2D();
    
    this.r = 5;
    this.target = createVector(x, y);
    this.maxSpeed = 5;
    this.maxForce = 1;
  }
  
  //this algorithm will bring random circles back to the name array spot

  arrive() {    
    //Desired Velocity:
    let desiredVel = p5.Vector.sub(this.target, this.pos);
    //get the magnitude of desired velocity vector 
    let d = desiredVel.mag();
    //scale to the max speed
    let speed = this.maxSpeed;
    
    //the magnitude of your velocity is relative to how far away you are from the target. So if youre far away your going to go faster, if youre closer you want to go slow, if youre at the target you want your desired velocity to be 0
    
    //we can pick some arbitrary threshhold 100
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
      //when the distance is 0 I want the speed to be 0
      //when the distance is 100 I want speed to be the max speed
    }
    desiredVel.setMag(speed);
    
    //steering force = desired velocity - current velocity
    let steer = p5.Vector.sub(desiredVel, this.vel);
    //limit to max force
    steer.limit(this.maxForce);
    
    this.acc.add(steer);
    
  }
  
  
  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    
    //acceleration accumulated all the forces in the steering algorithm so we want to clear the acceleration after each frame. 
    //https://natureofcode.com/book/chapter-2-forces/
    //2.3 Force Accumulation
    //we have to make sure that we clear acceleration (i.e. set it to zero) before each time update() is called. 
    this.acc.mult(0);

  }
  
  display(){
    
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r);
    
  }
  
  
  
  
  
}

