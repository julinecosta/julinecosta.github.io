
var t, n, numLinhas, numColunas, escolheForma; 

/* n é numero de objectos */

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  n = 100;
  frameRate(1);
  
}

function draw() 
{
  t = width/n;

  numLinhas = height/t;
  numColunas = width/t;

  noStroke();

  
  for (var x = 0; x<numColunas; x++)
  {
    for (var y = 0; y<numLinhas; y++)
    {
      fill (random(255));
      rect (x*t, y*t, t, t);
    }
  
  } 
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
