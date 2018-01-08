// este exercício faz bolinha a deslocar-se quando mexemos com o rato
var posX = [];
var posY = [];
var numCirculos;


function setup() 
{
  createCanvas (windowWidth, windowHeight);

  numCirculos = 50;

  for(var i=0; i<numCirculos; i++)
  {
    //percorre do 0 ao 50, percorre  posição inicial com as coordenadas do mouse
  posX [i] = mouseX;
  posY [i] = mouseY;
  }
  noStroke();
}

// as 50 posições vão ter mouseX(é o nosso 49) e i++ serve para ir de 1 em 1

function draw() 
{
  background(255);
//percorre os arreis  nas suas posições
  posX [posX.length-1] = mouseX;
  posY [posY.length-1] = mouseY;

  
  for(var i=0; i<numCirculos-1; i++)
  {
  posX [i] = posX [i+1];
  //aqui estão todas as posições do X
  posY [i] = posY [i+1];
  //aqui estão todas as posições do Y
  }
  
  for (var i=0; i < numCirculos; i++)
  {

  fill (map(i, 0, posX.length-1, 255, 0));
  fill(128,0,128);
  ellipse( posX [i], posY [i] , i, i);
  //o i quere dizer que o tamanho vai de 0 a 50
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
