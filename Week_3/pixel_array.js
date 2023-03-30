
let video;


function setup() {
  createCanvas(400,400);
  video = createCapture(VIDEO); 
  video.size(400, 400);
  video.hide();
}

function draw() {
  // clear();
  background(220);

    video.loadPixels();

    let diam = map(mouseX, 0, video.width, 0, 20);

    for (let x=0; x < video.width; x+=20) {
      for (let y=0; y < video.height; y+=20) {
      
        //this is the index of the array
        let pindex = (x + (y * video.width))* 4;
        //this is the rbg value inside the index        
        let r = video.pixels[pindex + 0];
        let g = video.pixels[pindex + 1];
        let b = video.pixels[pindex + 2];

        fill(r,g,b);
        
        rect(x, y, diam, diam);

    }
  }
}