
//Code taken from Coding Train Dan Shiffman Markov Chain example
//https://www.youtube.com/watch?v=eGFJ8vugIWA&t=6s
//Please watch and go through the steps for this algorithm


let order = 3;
let ngrams = {};

let button;
let tench;

function setup() {
  // createCanvas(windowWidth, windowHeight);

  for(let i=0; i<txt.length-order;i++){
    let ngram = txt.substring(i, i+order);
    // ngrams.push(ngram);
  if(!ngrams[ngram]){
    ngrams[ngram] = [];
  } 
    ngrams[ngram].push(txt.charAt(i+order));
  }
  button = createButton("generate Coding Train quick Markov Algo");
  button.mousePressed(markovIt);
  console.log(ngrams);
  
  tench = createVector(1, 1, 1);

  }


  function markovIt(){
    let currentGram = txt.substring(0,order);
    let result = currentGram;

    for(let i=0; i<100; i++){
      let possibilities = ngrams[currentGram];
      let next = random(possibilities);
       
      result += next;
      currentGram = txt.substring(result.length-order, result.length);
    }
    
    createP(result);
  }

function draw() {

}

// function mousePressed(){
//   background(getRandomColor());
// }