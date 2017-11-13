function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
}

function draw() 
{
  background (255);

//1 QUADRADO //

  if (mouseX>0 && mouseX<width/2 &&
    mouseY>0 && mouseY<height/2)
  {
    fill(0);
  }
  else
  {
    noFill();
  }
 rect (0, 0, width/2, height/2);

//2 QUADRADO //

 if (mouseX>width/2 && mouseX<width &&
  mouseY>0 && mouseY<height/2)
{
  fill(0);
}
else
{
  noFill();
}
rect (width/2, 0, width/2, height/2);

//3 QUADRADO //

if (mouseX>0 && mouseX<width/2 &&
  mouseY>height/2 && mouseY<height)
{
  fill(0);
}
else
{
  noFill();
}
rect (0, height/2, width/2, height/2);

//4 QUADRADO //

if (mouseX>0 && mouseX<width/2 &&
  mouseY>0 && mouseY<height/2)
{
  fill(0);
}
else
{
  noFill();
}
rect (width/2, height/2, width/2, height/2);
}