var rows,cols;
var w = 50;
var stack = [];
var boxes = [];
var current;
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
  current = random(boxes);
}

function draw() {
  background(220);
  for(var i = 0 ; i < boxes.length; i++) boxes[i].show();
   current.highlight();
   if(KeyIsPressed){
      if(KeyCode == RIGHT_ARROW)
      if(KeyCode == LEFT_ARROW)
      if(KeyCode == DOWN_ARROW)
      if(KeyCode == UP_ARROW)
 }

}

function Cell(i,j)
{
  this.i = i;
  this.j = j;
  this.walls = [true , true , true , true ];
  this.show = function()
  {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    noFill();
    if(this.walls[0]) line(x,y,x+w,y);     
    if(this.walls[1]) line(x+w,y,x+w,y+w);    
    if(this.walls[2])line(x+w,y+w,x,y+w);  
    if(this.walls[3])  line(x,y+w,x,y);  
    
  }
  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(255,255, 255, 200);
    rect(x, y, w, w);

  }
 
}
