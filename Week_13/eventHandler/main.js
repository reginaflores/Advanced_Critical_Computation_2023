
let btn = document.querySelector('button');
  
  btn.addEventListener("click", ( ) => {
    let x = Math.random( ) * 255;
    let y = Math.random( ) * 255;
    let z = Math.random( ) * 255;
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.background = bgColor;
    });

  let paragraph = document.querySelector('p');

  // Add a click event listener to the button element
  btn.addEventListener('click', function() {
    // Set the text of the paragraph element to an empty string
    paragraph.textContent = '';
  });

