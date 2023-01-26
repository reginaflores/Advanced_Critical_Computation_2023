let particles = [];

function setup() {
  createCanvas(400, 400);
  
  for(let i =0; i< 50; i++){
    particles.push(new Particle());
  }
  
  console.log(particles);
}

function draw() {
  background(220);
  
  for(let i=0; i< particles.length; i++){
    particles[i].move();
    particles[i].display();
    
  }
}

class Particle{
  
  constructor(){
    this.pos = createVector(random(0, width), random(0, height));
    this.r = 5;
    this.speed = createVector(random(-2, 2), random(-1, 1));
  }
  
  display(){
    
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
  
  move(){
    this.pos.add(this.speed);
    
    //boundary conditions
    if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
      
      this.speed.mult(-1);
      
    }
    
  }
  
  
}