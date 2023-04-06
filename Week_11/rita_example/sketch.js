function setup() {
  createCanvas(400, 400);

  input = createInput();
  input.position(20, 95);
  //button setup
  button = createButton('submit');
  button.position(input.x + input.width, 95);
  button.mousePressed(updateText);  
  button.style('font-family', 'Courier');

}

function draw() {
  background(220);



}

function updateText(){
  let txt = input.value();
  print("search word", txt);
  let output = RiTa.rhymes(txt);
  print(output);
  generateWords();
}

function generateWords(){
  let rm = RiTa.markov(2);
  rm.addText(artistConk);
  let sentences = rm.generate(2);
  print(sentences);
}