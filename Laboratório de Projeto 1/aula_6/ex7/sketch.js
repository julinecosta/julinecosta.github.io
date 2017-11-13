
var x, y, t, v, factorCrescimento, xAnterior, yAnterior;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  xAnterior = x;
  yAnterior = y;
  
  v = 30;
  t = v;
  factorCrescimento = 2;
  
}


function draw() 
{
  if (frameCount%50) background(255, 10);
  //background(random);
  x += random(-v, v);
  y += random(-v, v);
  t += factorCrescimento;
 
  if (x <= 0) x+=t;
  if (x >= width) x-=t;
  if (y <= 0) y+=t;
  if (y >= height) y-=t;

  if (t > 30 || t < 0 )factorCrescimento *=- 1;



  noFill();
  strokeWeight(1);
  stroke(random(255), random(255),random(255));
  line(xAnterior, yAnterior, x, y);

  xAnterior = x;
  yAnterior = y;
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
