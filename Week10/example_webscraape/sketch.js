function setup() {
  createCanvas(windowWidth, windowHeight);

  dataTable = loadTable('headlines.txt');
}

function draw() {
  background(255);
  // print(dataTable.getString(0, 0));
  textSize(20);
  for(let i=0; i<dataTable.rows.length; i++){
        text(dataTable.getString(i,0), 10, (i*30)+30);
  }
}