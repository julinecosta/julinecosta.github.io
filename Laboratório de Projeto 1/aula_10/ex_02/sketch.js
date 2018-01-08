var anos = [];
var dados;

function preload ()
{
  dados = loadTable("assets/dados.csv", "csv", "header");
}

function setup ()
{
  createCanvas (windowWidth, windowHeight);

  print ( dados.getRowcount() );
}

function draw() 
{
  

}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);

}