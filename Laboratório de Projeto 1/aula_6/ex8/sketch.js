
var x, y, vX, vY;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;

  vX = 1;
  vY = vX;
  
}


function draw() 
{
  if (frameCount%int(random(20, 100)) === 0)
  {
    vX = int(random (-2, 2));
    vY = int(random (-2, 2));

  }
    x += vx;
    vY += vY;
 
  if (x <= 0) x++;
  if (x >= width) x--;
  if (y <= 0) y++;
  if (y >= height) y--;

  point(x, y);


  noFill();
  strokeWeight(1);
  stroke(random(255), random(255),random(255));
  line(vX, vY);

}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
