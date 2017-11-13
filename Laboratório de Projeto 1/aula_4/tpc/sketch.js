var frase;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frase = "nunca mais são 18h";
}

function draw() 
{
  background(255, 50);
  textStyle (ITALIC);
  textAlign(CENTER, CENTER);
  textFont("Modak");
  textSize(50);
  textLeading(100);
  text(frase, width/2, height/2, 50);
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
