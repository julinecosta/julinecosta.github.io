var t, numLinhas, numColunas, escolheForma, meuSVG; 

function preload() 
{
  
  /*meuSVG = loadImage ("img/kiwi.svg");
  meuSVG = loadSVG ("img/kiwi.svg");*/
  meuSVG = loadShape ("img/kiwi.svg");
  
}

function setup() 
{
  size(640, 360);
  meuSVG = loadShape("img/kiwi.svg");
  frameRate(1);
  
}

function draw() 
{
  background(102);
  shape(meuSVG, 110, 90, 100, 100);  // Draw at coordinate (110, 90) at size 100 x 100
  shape(meuSVG, 280, 40);            // Draw at coordinate (280, 40) at the default size

  t = width/10;
  numLinhas = height/t;
  numColunas = width/t;
  //print(t);

  noStroke();
  fill(0);
  ellipseMode(CORNER);

  
  for (var x = 0; x<numColunas; x++)
  {
    for (var y = 0; y<numLinhas; y++)
    {
      escolheForma = int(random(1,3));
      //print(escolherForma);

      if (escolheForma === 1)
      {
        ellipse(x*t, y*t, t, t);
      }

      if (escolheForma === 2)
      {
        rect(meuSVG, x*t, t, t);
      }

    }
  
  } 

} 

function keyPressed() 
{

  if (key === " ")

  {
  noLoop();
  save("img/kiwi.svg");
  }

}
