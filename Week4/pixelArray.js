//These examples are also taken in part from:
//https://advanced-critical-computation-23.glitch.me/p2.html


let video;
let filter;

function setup() {
  createCanvas(400, 400);
  
  //FOR EXMAPLE 1:
  // createGraphics(width, height);
  // pixelDensity(1);

    //FOR EXAMPLE 2:
  filter = createGraphics(width, height);
  filter.pixelDensity(1);
  

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(220);


//EXAMPLE 1:
// loadPixels();
// for(let y=0; y<height;y++){
//     for(let x = 0; x<width; x++){
//       let index = (x+y*width)*4;

//       pixels[index] = 255;
//       pixels[index+1] = 0;
//       pixels[index+2] = 0;
//       pixels[index+3] = 150;
//     }
//   }

//   updatePixels();

  ////////////////////////////

  //EXAMPLE 2:
  filter.loadPixels();
  for(let y=0; y<height;y++){
    for(let x = 0; x<width; x++){
      let index = (x+y*width)*4;
      filter.pixels[index] = 255;
      filter.pixels[index+1] = 0;
      filter.pixels[index+2] = 0;
      filter.pixels[index+3] = 150;

    }
  }
  filter.updatePixels();
  
  image(video, 0, 0, width, height);
  image(filter, 0, 0, width, height);

  fill(0);
  ellipse(width/2, 150, 100, 20);
}
