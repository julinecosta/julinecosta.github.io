
//fazer riscas como se fosse pixel art aleatoriamente
var t, n, numLinhas, numColunas, escolheForma;

var cor = [];

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  n = 20;
 
  
}

//repetição da forma na horizontal e na vertical para preencher o ecrã
function draw() 
{
  // n = a numero de objectos
  t = width/n;

  numLinhas = height/t;
  numColunas = width/t;

  for (var x = 0; x<numColunas; x++)
  {
    cor[x] = [];

    for (var y = 0; y<numLinhas; y++)
    {
      cor[x] [y] = random(255);
    }
  }


  noStroke();

  for (var x = 0; x<numColunas; x++)
  {
    for (var y = 0; y<numLinhas; y++)
    {
      fill (cor[x] [y] );
      
      rect (x*t, y*t, t, t);
    }
  }
      
  
  
}




function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
