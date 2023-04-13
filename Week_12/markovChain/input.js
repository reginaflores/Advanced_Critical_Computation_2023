// function setName() {
//     var name = document.getElementById("nameInput").value;
//     console.log(name); // prints the value of name to the console
//   }
  
var names = []; // array to store the entered names

function setNameAndColor() {
    var name = document.getElementById("nameInput").value;
    console.log(name); // prints the value of name to the console
    document.body.style.backgroundColor = getRandomColor(); // sets the background color to a random color
    writeName(name); // writes the name on the page

}
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var mycolor = '#';
    for (var i = 0; i < 6; i++) {
      mycolor += letters[Math.floor(Math.random() * 16)];
    }
    print(mycolor);
    return mycolor;
  } 
  
  function writeName(name) {
    var randomWord = RiTa.randomWord();
    /////////////////////////
    rm = RiTa.markov(3);
    console.log("rm", rm);
    rm.addText(txt); //addText into the model
    sentences = rm.generate(2); //Generates sentences from the model.
    console.log(sentences);
    /////////////////////
    
    names.push(name); // add the entered name to the array

    var nameOutput = document.getElementById("nameOutput");
    // nameOutput.innerHTML = name + " " + randomWord;
    var listItem = document.createElement("li"); // create a new list item for the entered name
    listItem.innerHTML = name + ", " + randomWord + ". "+ sentences[0]; // set the text of the list item to the name and a random word
    nameOutput.appendChild(listItem); // append the list item to the output element
    
}




  
  