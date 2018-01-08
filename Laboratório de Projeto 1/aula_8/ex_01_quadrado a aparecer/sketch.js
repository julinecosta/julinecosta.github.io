var cores = [];


function setup() 
{
  createCanvas (windowWidth, windowHeight);
  cores [0] = color (255, 0, 0);
  cores [1] = color (0, 255, 0);
  cores [2] = color (0, 0, 255);
}


function draw() 
{
  background(255);
  rectMode (CENTER);
    fill (cores [int (random (0,3) ) ] );
    rect( width/2, height/2, width/2, height/2);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
