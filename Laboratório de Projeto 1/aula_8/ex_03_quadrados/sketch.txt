
//fazer quadrados como se fosse pixel art aleatoriamente
var t, n, numLinhas, numColunas, escolheForma;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  n = 50;
  frameRate (1);
}

//repetição da forma na horizontal e na vertical para preencher o ecrã
function draw() 
{
  // n = a numero de objectos
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
