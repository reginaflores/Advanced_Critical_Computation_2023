//These Examples are directly from the reading:
//https://cdn.glitch.me/5dd99b18-3ebb-45c5-90fb-b4b67dc2e128%2FGenerative_Design_Revised_Visualize%2C_Program%2C_and_..._----_(Pg_188--225).pdf

let img;
let imgTiles = [];

let tileCountX = 10;
let tileCountY = 10;


let cropX, cropY, stepX, stepY;
//tileWidth, tileHeight;

function preload() {
  img = loadImage('test.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   stepX = windowWidth / tileCountX;
   stepY = windowHeight / tileCountY;

  
  ///////////////////////////////
 //THIS IS FOR EXAMPLE 3:
   for (let y = 0; y < tileCountY; y++) {
    for (let x = 0; x < tileCountX; x++) {

      //note: https://p5js.org/reference/#/p5.Image
      //Get a region of pixels from an image.
      //get(x, y, w, h)
      // imgTiles.push(img.get(cropX, cropY, tileWidth, tileHeight));
      cropX = int(random(0, width));
      cropY = int(random(0, height));
      let temp = img.get(cropX, cropY, stepX, stepY)
      imgTiles.push(temp);

   
    }
  }
  ///////////////////////////////
}

function draw() {

  // //Example 1:
  //  for (let y = 0; y < height; y += stepY) {
  //    for (let x = 0; x < width; x += stepX) {
  //      image(img, x, y, stepX, stepY);
  //    }
  //  }
   
  //Example 2:
  //let piece = img.get(50, 100, 50, 50 );
  //image(piece, 0, 0, stepX, stepY);

  //  for (let y = 0; y < height; y += stepY) {
  //    for (let x = 0; x < width; x += stepX) {
  //      image(piece, x, y, stepX, stepY);
  //    }
  //  }

  //Example 3:
  let i = 0;
   for (let y = 0; y < windowHeight; y += stepY) {
     for (let x = 0; x < windowWidth; x += stepX) {
      image(imgTiles[i], x, y, stepX, stepY);
        i++;
      }
   }  



}