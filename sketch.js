var rows,cols;
var w = 50;
var boxes = [];
function setup() {
  createCanvas(500, 500);
  rows = width/w;
  cols = height/w;
  for(var i = 0 ; i < rows ; i++)
  {
    for(var j = 0 ; j < cols ; j++)
    {
      var cell = new Cell(j,i);
      boxes.push(cell);
    }
  }
}

function draw() {
  background(220);
  for(var i = 0 ; i < boxes.length; i++) boxes[i].show();
  
}

function Cell(i,j)
{
  this.i = i;
  this.j = j;
  this.show = function()
  {
    var x = this.i*w;
    var y = this.j*w;
    rect(x,y,w,w);
  }
}
