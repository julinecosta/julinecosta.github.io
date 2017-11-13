

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode (HSB, 360, 100, 100, 100);
  background(0, 0, 100);
}


function draw() 
{
  stroke( map (mouseX, 0, width, 0, 360), 100, 100 );
  strokeWeight( abs(mouseX-pmouseX) + abs(mouseY-pmouseY) );
  point(mouseX, mouseY, pmouseX, pmouseY);
  
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
