var posX, posY, spdX, spdY, canvasColor, colorBall, spd, radiusBall;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
  spd = 15;
  radiusBall = 50;
  canvasColor = color (0, 255, 255);
  colorBall = color (255, 0, 255);

  posX = width/2;
  posY = height/2;

  spdX = spd;
  spdY = spd;
}

function draw() 
{
  background(canvasColor);
  velocidade();
  colisao();
  desenha();


function velocidade() 
{

  posX += spdX;
  posY += spdY;

}

function colisao() 
{

  if (posX-radiusBall<0 || posX+radiusBall>width) spdX *= -1;
  if (posY-radiusBall<0 || posY+radiusBall>height) spdY *= -1;

}

function desenha() 
{
  noStroke();
  fill(colorBall);
  ellipseMode(RADIUS);
  ellipse(posX, posY, radiusBall, radiusBall);

}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}

}