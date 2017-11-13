

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode (HSB, 255, 255, 255, 100);
  
}


function draw() 
{
  frameRate ( int(random(1,60)) );
  print ( int(frameRate()) );

  background( random(0, 255), random(0, 255), random(0, 255) );

  fill (255);
  stroke (255, 0, 0);
  strokeWeight (8);
  rectMode (CENTER);
  noFill ();
  rect (width/2, height/2, 250, 250);

  fill (0, 255, 0);
  noFill();
  ellipseMode (CORNER);
  ellipse(width/2, height/2, 200, 200);

  
  line (0, 0, width, height);

  line (width/2, 0, width/2, height);

  point (20, 20);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
