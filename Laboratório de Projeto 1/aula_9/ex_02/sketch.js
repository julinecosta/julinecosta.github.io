var c1, c2;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 100);

  c1 = color(255, 255, 0, 100);
  c2 = corAleatoria();

  background(255);
}

function draw() 
{
  alvo (random(width), random(height), 500, 500, c1, c2);

}

function alvo(x, y, diametroMaior, numCirculos, c1, c2) 
{
    
  if (numCirculos > diametroMaior)
    {
      print ("Erro: Num de Circulos nao pode ser maior do que o diametro Maior");
      noLoop();
    }

    else
    {
      var t = diametroMaior/numCirculos;

    for(var i=numCirculos; i>0; i--)
    { 
      var c = lerpColor (c1, c2, (1/numCirculos)*i);
      stroke (c);
      ellipse(x, y, t*i, t*i);
    }
}

}

function corAleatoria() 
{
  var c = color(random(255), random(255), random(255), 0);
  return c;
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);

}