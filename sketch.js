var rows,cols;
var w = 50;
var stack = [];
var boxes = [];
var current;
function setup() {
  frameRate(60);
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
  background(150,205,0);
  for(var i = 0 ; i < boxes.length; i++){
    boxes[i].show();
  }
   current.highlight();
   current.visited = true;
   var link = current.check();
   if(link){
     link.visited = true;
     stack.push(current);
     eraseWalls(current , link);
     current = link;
   }else if(stack.length !== 0){
     current = stack.pop();
   }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function Cell(i,j)
{
  this.i = i;
  this.j = j;
  this.walls = [true , true , true , true ];
  this.visited = false;
  
  
  
  this.check = function() {
    var che = [];

    var top = boxes[index(i, j - 1)];
    var right = boxes[index(i + 1, j)];
    var bottom = boxes[index(i, j + 1)];
    var left = boxes[index(i - 1, j)];

    if (top && !top.visited) {
      che.push(top);
    }
    if (right && !right.visited) {
      che.push(right);
    }
    if (bottom && !bottom.visited) {
      che.push(bottom);
    }
    if (left && !left.visited) {
      che.push(left);
    }

    if (che.length > 0) {
      var r = floor(random(0, che.length));
      return che[r];
    } else {
      return undefined;
    }


  }
  
  
  
  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(255,255, 255);
    rect(x, y, w, w);

  }
  
  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      noStroke();
      fill( 1,15,180);
      rect(x, y, w, w);
    }
  }
}

function eraseWalls(a,b){
  var x = a.i - b.i
  if(x === 1){
    a.walls[3] = false;
    b.walls[1] = false;
  }
  else if(x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  }
  
  var y = a.j - b.j;
  if(y === 1){
      a.walls[0] = false;
      b.walls[2] = false;
  }
  else if(y === -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
