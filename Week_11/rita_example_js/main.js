

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector('button').addEventListener("click", generateWords);

    document.querySelector('input').addEventListener("keyup", function(){
        let val = this.value;
        let output = RiTa.rhymes(val);
        document.querySelector("#output").innerHTML = output;
    })

})


function generateWords(){
    let rm = RiTa.markov(2);
    rm.addText(artistConk);
    let sentences = rm.generate(2);
    document.querySelector("#generated").innerHTML = sentences;
}