//----------Met Museum API----------//
// https://metmuseum.github.io/

//Here is an example sketch to see the very basics of what we are doing:
//https://editor.p5js.org/johnpark1981/sketches/BkrO9cO0G

//Step 1: Call the Met API using a url provided by the Met API documetation
//Step 2: strip our the image url from the JSON object data
//Step 3: draw that image to the canvas in draw function 

//Basic Example

let id = "313386"; 
let url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id;
let art;
let artimage;

let allData;

function preload(){

    //The loadJSON function returns Object|Array: JSON data
    allData = loadJSON(url, getData);

  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    artimage = createImg(art); //Note: we use css display: none to make img tags in html invisible
  
  }

  function draw() {
    background(220);
    
    image(artimage, 0, 0, 300, 300);
  }


//Call Back function for our loadJSON functions
function getData(data) {
    print(data);
  
    art = data.primaryImage;
    print(art);

    return data;
  }