
var x, y, t, vX, vY;
// t - tamanho //

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  t = 100;
  vX = 3;
  vY = vX;
}

function draw() 
{
  background(255, 50);
  noStroke();

  if(x+t/2 > width || x-t/2 <0)
  {
    //vX = vX*-1;
    vX*=-1;
    fill(random (255), random (255), random (255) ); 

  }

  if(y+t/2 > height || y-t/2 <0)
  {
    //vY = vY*-1;
    vY*=-1;
    fill(random (255), random (255), random (255) );
  }

  //x = x + vX;
  x+=vX;
  y+=vY;

  ellipse(x, y, t, t);
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
