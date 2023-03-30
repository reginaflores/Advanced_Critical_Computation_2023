//----------Met Museum API----------//
// https://metmuseum.github.io/

//Here is an example sketch to see the very basics of what we are doing:
//https://editor.p5js.org/johnpark1981/sketches/BkrO9cO0G

//General principle: 
//Call the Met API using a url provided by the Met API documetation and return an image

//Step 1: User inputs in a search term 
//Step 2: Search term is used to get search URL from API and returns a list of object IDs 
//Step 3: getSearchData selects the first element in the array and returns that object ID
//Step 4: getdata function selects the image url from the JSON object data and creates and image in p5
//Step 5: p5 draws that image to the canvas in draw function 



let id; 
let url; 

let searchUrl;
let art;
let artimage;
let objectID;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(updateText);  
  button.style('font-family', 'Courier');
}

function draw() {
  background(255);
  
  if(artimage){
    image(artimage, 200, 200, 300, 300);
  }  
}

//Call Back functions for our loadJSON functions
function getData(data) {
  print(data);

  art = data.primaryImage;
  print(art);
  artimage = createImg(art); //Note: we use css display: none to make img tags in html invisible
  return artimage;
}

function getSearchData(searchData){
  print("Search Data", searchData);

  // let index = int(random(0, 20000));
  // print(index);
  id = searchData.objectIDs[0];
  print("id = ", id);
  url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id;
  loadJSON(url, getData);
}

function updateText(){
  // txt = val
  let txt = input.value();
  print("search word", txt);
  searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="+txt;
  print(searchUrl);
  loadJSON(searchUrl, getSearchData);
}
