let myData; 
let picArr = [];

function preload(){
    myData = loadJSON('data.json');
  }

  function setup() {
    noCanvas();
  for(let i=0; i<myData.images_results.length; i++){
    picArr.push(createImg(myData.images_results[i].thumbnail));
  }
}