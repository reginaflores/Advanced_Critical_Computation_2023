//----------Met Museum API----------//
// https://metmuseum.github.io/

// RiTa
// tools for natural language and generative writing
// https://rednoise.org/rita/
// https://github.com/dhowe/ritajs#with-p5js
// https://github.com/dhowe/ritajs#api


// Global Met variables
let id; 
let url; 

let searchUrl;
let art;
let artimage;
let objectID;

// Global RiTa variables  
let word;
let similarWords = [];

function setup() {
  //canvas setup
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 95);
  //button setup
  button = createButton('submit');
  button.position(input.x + input.width, 95);
  button.mousePressed(updateText);  
  button.style('font-family', 'Courier');

  textFont('Courier');
}

function draw() {
  background(255);

  textSize(25);
  text("Met", 200, 150);
  textSize(15);
  text("Met Returns: "+word, 200, 220);
  if(artimage){
    image(artimage, 200, 260, 300, 300);
  }  

  
  textSize(25);
  fill(0);
  text("RiTa", 550, 150);
  textSize(15);
  text("Sounds like:", 550, 220);
  // text(similarWords.join(" "), 550, 280, 350, 350);
  text(similarWords, 550, 280);
  // clear();
}

//-------------------------------------------------------//
//Call Back functions for our loadJSON functions from Met
//-------------------------------------------------------//

function updateText(){
  // txt = val
  let txt = input.value();
  print("search word", txt);
  searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="+txt;
  print(searchUrl);
  loadJSON(searchUrl, getSearchData);
}

function getSearchData(searchData){
  print("Search Data", searchData);

  // Of the thousands of Object IDs returned from searchData only
  // the first one (0th index of array) is used. 
  // This could be changed to take a random one or a specific one
  // the issue is that not every object ID has an image so logic
  // is needed to determine if the object id has a primary image

  id = searchData.objectIDs[0];
  print("id = ", id);
  url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id;
  loadJSON(url, getData);
}

function getData(data) {
  print("data", data);

  
  if(data.primaryImage == ""){
    art = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Empty_set_symbol.svg";  
  } else{
    art = data.primaryImage;
  }
  print(art);
  artimage = createImg(art); //Note: we use css display: none to make img tags in html invisible
 
  if(data.tags == null){
    word = "Null";
  } else{
    word = data.tags[0].term;
    // word = data.title;
  }
  print(word);

  //This is if you use title
  // let wordar = word.split(" ");
  // print(wordar);
  
  // for(let i=0;i<wordar.length;i++){
  //   if(RiTa.isStopWord(wordar[i])){
  //     wordar.splice(i, 1);
  //   };
  // }
  // print(wordar);

  similarWords = []; //erase the array fromt the previous search result 
  similarWords = RiTa.soundsLike(word);
  // similarWords = RiTa.randomWord();
  print(similarWords);
 
  return artimage;

}




