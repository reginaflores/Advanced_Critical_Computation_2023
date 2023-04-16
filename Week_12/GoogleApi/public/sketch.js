let searchResults;
let temp=[];
// let img=[];

function preload(){
    searchResults = loadJSON("http://localhost:8080/results");
    console.log(searchResults);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(let i=0; i< searchResults.organic_results.length;i++){
        temp[i] = searchResults.organic_results[i].title;
    //     img.push(createImg(temp, "not loaded"));
    }
}

  
  function draw() {
    // background(220);
    for(let i=0; i<searchResults.organic_results.length; i++){
        // image(img[i], 200, i*200);
        text(temp[i], 200, i*50);
    }
  }