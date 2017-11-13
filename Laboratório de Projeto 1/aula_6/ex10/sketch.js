
var x1, y1, x2, y2, t, espacamentoHorizontal, numLinhas, linhaActual;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  t=20;
  numLinhas = 40;
  espacamentoHorizontal = width/numLinhas;
  
}

function draw() 
{
  espacamentoHorizontal = width/numLinhas;
  
  /*
  for (var i = 1; i<numLinhas; i++)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;
  
    x1 = espacamentoHorizontal*i;
    x2 = x1;
  

    strokeWeight(4);
    line(x1, y1, x2, y2);
    
  }
  
  */
  
  for (var x1 =0; x1<width; x1+=10)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;

    x2 = x1;

  line(x1, y1, x2, y2);

  }
  

}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
