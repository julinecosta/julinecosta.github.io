//Júlia Costa (nº 3150438), Mariana Silva (nº3150374), Miriam Conceição (nº3160515) , 2016/2017 , 1º Semestre , Laboratório de Projecto 1, Design Gráfico e Multimédia, ESAD.CR, Marco Heleno, 8.Jan.2018//

//VARIÁVEIS

var decadas = [];
var dados;
var x = 0;
var y = 0;
var posX = [];
var posY = [];
var numCirculos;
var c1;

function preload()
{
  //CARREGAR TABELA .CSV 

  dados = loadTable ("assets/bandas.csv", "csv", "header");
}

function setup() 

{
  //CRIAR E DEFINIR TAMANHO DA JANELA

  createCanvas (windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 100);
  c1 = color(128, 0, 128, 60);

//CRIAR CURSOR MOUSE OVER

 numCirculos = 40;

  for(var i=0; i<numCirculos; i++)
  {
    //PERCORRE (0 - 40) POSIÇÃO INICIAL COM COODERNADAS DO MOUSE
  posX [i] = mouseX;
  posY [i] = mouseY;
  }
  noStroke();

//CRIAR TABELA .CVS

 for (var linha=0; linha<dados.getRowCount(); linha++)
 {
   for (var coluna=0; coluna<dados.getColumnCount(); coluna++)
   {
     var decadaInicio = dados.getNum (linha,0);
     var decadaFim = dados.getNum (linha,1);
     var numBandas = dados.getNum (linha,2);
     var genero = dados.getString (linha,3);

     decadas[linha] = new decada (decadaInicio, decadaFim, numBandas, genero);
     
    } 
  } 
} 

function draw() 
{

  //COR DE FUNDO

  background(250,243,227);

  //FUNÇÃO DO CURSOR MOUSE OVER//

   //PERCORRE OS ARRAYS NAS SUAS POSIÇÕES
   posX [posX.length-1] = mouseX;
   posY [posY.length-1] = mouseY;
   
   for(var i=0; i<numCirculos-1; i++)
   {
   posX [i] = posX [i+1];
   //POSIÇÕES X
   posY [i] = posY [i+1];
   //POSIÇÕES Y
   }
   

   for (var i=0; i < numCirculos; i++)
   {
   fill (map(i, 0, posX.length-1, 255, 1));
   //COR DA ELIPSE
   fill(c1);
   ellipse( posX [i], posY [i] , i, i);
   //I (TAMANHO) = 0 A 50)
   }
  
   //FIM DA FUNÇÃO DO CURSOR MOUSE OVER//

   //TÍTULOS//

   textSize(30);
   fill(0);

   //TÍTULO PRINCIPAL (FONT, ESTILO, POSIÇÃO)
   textFont("Futura");
   textStyle(BOLD);
   text ("MUSIC DATA", 550, 50);
 
   //60-70 (FONT, POSIÇÃO)
   textFont("'Roboto Slab', serif");
   text ("60's — 70's", 240, 115);
 
   //80-90 (FONT, ESTILO, POSIÇÃO)
   textFont("AprilFatface");
   textStyle(BOLD);
   text ("80's — 90's", 560, 115);
 
   //00-10 (FONT, POSIÇÃO)
   textFont("'Signika Negative', sans-serif");
   text ("00's — 10's", 900, 115);
 
   //LEGENDA //
   
   //TAMANHO DO TEXTO
   
   textSize(15);
   
   //---ROCK---//
   
    //ELIPSE (COR, POSIÇÃO, TAMANHO)

    fill(46, 47, 50);
    ellipse(250, 600, 25, 25);

    //TEXTO (COR, FONT, POSIÇÃO)

    fill(46, 47, 50);
    textFont("Futura");
    text ("ROCK", 280, 605);
 
   //---POP---//

    //ELIPSE (COR, POSIÇÃO, TAMANHO)

     fill(128,0,128);
     ellipse(380, 600, 25, 25);

    //TEXTO (COR, FONT, POSIÇÃO)

    fill(0);
    textFont("Futura");
    text ("POP", 410, 605);
 
   //---INDIE---//
   
    //ELIPSE (COR, POSIÇÃO, TAMANHO)

    fill(255,215,0);
    ellipse(500, 600, 25, 25);
  
   //TEXTO (COR, FONT, POSIÇÃO)

    fill(0);
    textFont("Futura");
    text ("INDIE", 530, 605);
 
   //---ELECTRÓNICA---//

    //ELIPSE (COR, POSIÇÃO, TAMANHO)
    
    fill(154,205,50);
    ellipse(640, 600, 25, 25);

    //TEXTO (COR, FONT, POSIÇÃO)

    fill(0);
    textFont("Futura");
    text ("ELECTRÓNICA", 670, 605);
 
    //---PUNK---//

    //ELIPSE (COR, POSIÇÃO, TAMANHO)

    fill(220,20,60);
    ellipse(830, 600, 25, 25);

    //TEXTO (COR, FONT, POSIÇÃO)

    fill(0);
    textFont("Futura");
    text ("PUNK", 860, 605);
 
    //---METAL---//

    //ELIPSE (COR, POSIÇÃO, TAMANHO)

    fill(57, 73, 155);
    ellipse(960, 600, 25, 25);

    //TEXTO (COR, FONT, POSIÇÃO)

    fill(0);
    textFont("Futura");
    text ("METAL", 990, 605); 

  //DESENHAR TABELA .CVS//

  for (var i=0; i<dados.getRowCount(); i++) 
  {
    decadas[i].desenha();
  }
  
  fill(0);
  noStroke();

}

//DEFINIR ELEMENTOS PARA CRIAÇÃO DA TABELA "MUSIC DATA" (DÉCADAS (INÍCIO E FIM), BANDAS, GÉNERO, COR E TAMANHO)//

class decada
{
  constructor (decadaInicio_, decadaFim_, numBandas_, genero_)
  {
    this.decadaInicio = decadaInicio_;
    this.decadaFim = decadaFim_;
    this.numBandas = numBandas_;
    this.genero = genero_;
    this.cor = color (0);
    this.x = 0;
    this.y = height/2;
  }

  //FUNÇÃO DA TABELA "MUSIC DATA"//

  desenha()
  {
  //print (this.decadaInicio + " - " + this.decadaFim + " - " + this.numBandas + " - " + this.genero);
  noFill();

  //GÉNERO DE MÚSICA CORRESPONDE A UMA COR//

  if (this.genero === "ROCK") this.cor = color (46, 47, 50);
  if (this.genero === "POP") this.cor = color (128,0,128);
  if (this.genero === "INDIE") this.cor = color (255,215,0);
  if (this.genero === "ELECTRONICA") this.cor = color (154,205,50);
  if (this.genero === "PUNK") this.cor = color (220,20,60);
  if (this.genero === "METAL") this.cor = color (57, 73, 155);

  stroke(this.cor);
  strokeWeight(15);

//Nº BANDAS CONSOANTE AS DÉCADAS CORRESPONDEM A UM TAMANHO//

  if (this.decadaInicio === 60 && this.decadaFim === 70) this.x = width/4*1;
  if (this.decadaInicio === 80 && this.decadaFim === 90) this.x = width/4*2;
  if (this.decadaInicio === 0 && this.decadaFim === 10) this.x = width/4*3;
  
  ellipse (this.x, this.y, this.numBandas);
  
}

//FIM FUNÇÃO DA TABELA "MUSIC DATA"//

}

function windowResized() 
  {
    //AJUSTA TAMANHO DA JANELA

   resizeCanvas (windowWidth, windowHeight);
  }