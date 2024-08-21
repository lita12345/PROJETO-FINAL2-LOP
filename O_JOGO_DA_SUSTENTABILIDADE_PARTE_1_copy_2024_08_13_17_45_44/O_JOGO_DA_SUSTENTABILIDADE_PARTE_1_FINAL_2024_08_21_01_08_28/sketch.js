// https://youtu.be/wMGUN_DGYc4
// vídeo explicativo do código do jogo

//https://docs.google.com/document/d/1IRDZlYWr4ZQFu66Hi91EsbwF0AD8T-V7q0sk19smGbM/edit
// SGDD do jogo

var tela;


let faseinicial, sustentabilidadetelainicial, banana, maça, garrafa, papel, lixeira, luz, instructions, creditos, regarplantas, gameover, bananajogo,maçajogo,garrafajogo,papeljogo, apple;

let click, nature;

let roomlight=false;

let bananinha=false, maçazinha=false, garrafinha=false, papelzinho=false, plantinha=false, luzinha=false, lixinho=false;


var timer = 30;
let resetTime=timer;

let pontos=0;
let resetPontos=pontos;

var name;



function preload(){
  sustentabilidadetelainicial=loadImage('sustentabilidade.png')
       faseinicial=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/quarto.png');
       instructions=loadImage('instructions.png'); 
         creditos=loadImage('créditos.png');
           gameover=loadImage('gameover.png')
  
            banana=loadImage('banana.png');
            maça=loadImage('maça.png');
            garrafa=loadImage('garrafa.png');
            papel=loadImage('papel.png');
            lixeira=loadImage('lixo.png');
            luz=loadImage('luzdesligada.png');
            regarplantas=loadImage('regarplantas.png');
            bananajogo=loadImage('bananajogo.png');
              maçajogo=loadImage('maçajogo.png')
              garrafajogo=loadImage('garrafajogo.png')
              papeljogo=loadImage('papeljogo.png')


           

  nature=loadSound('nature.mp3')
    click=loadSound('click.mp3')

}


function setup() {
  

    buttonstart = createButton('Começar')
  buttonstart.mouseClicked(Começo)
  buttonstart.size(120,60);
  buttonstart.position(140,350);
  buttonstart.style("font-family", "Oswald");
  buttonstart.style("font-size", "25px");
  buttonstart.style("color", "white");
  buttonstart.style("background-color","#007800");
  
  
    buttoninstructions = createButton('Instruções')
  buttoninstructions.mousePressed(Instruções)
  buttoninstructions.size(120,60);
  buttoninstructions.position(340,350);
  buttoninstructions.style("font-family", "Oswald");
  buttoninstructions.style("font-size", "25px");
  buttoninstructions.style("color", "white");
  buttoninstructions.style("background-color","purple");
  
    buttonexit = createButton('Saída')
  buttonexit.mousePressed(Saída)
  buttonexit.size(120,60);
  buttonexit.position(540,350);
  buttonexit.style("font-family", "Oswald");
  buttonexit.style("font-size", "25px");
  buttonexit.style("color", "white");
  buttonexit.style("background-color","red");
  
    buttonexit2 = createButton('Saída')
  buttonexit2.mousePressed(Saída2)
  buttonexit2.size(100,50);
  buttonexit2.position(1570,890);
  buttonexit2.style("font-family", "Oswald");
  buttonexit2.style("font-size", "28px");
  buttonexit2.style("color", "white");
  buttonexit2.style("background-color","red");
    
    buttonmenu=createButton('Menu Principal');
  buttonmenu.mousePressed(Menu)
  buttonmenu.size(140,40);
  buttonmenu.position(6,10);
  buttonmenu.style("font-family", "Oswald");
  buttonmenu.style("font-size", "20px");
  buttonmenu.style("color", "rgb(12,11,11)");
  buttonmenu.style("background-color","rgb(19,230,19)");
  
   buttongameover=createButton('Jogar novamente');
  buttongameover.mousePressed(Gameover)
  buttongameover.size(100,60);
  buttongameover.position(50,10);
  buttongameover.style("font-family", "Oswald");
  buttongameover.style("font-size", "28px");
  buttongameover.style("color", "rgb(255,255,255)");
  buttongameover.style("background-color","rgb(19,115,230)");
  
  
  
  
  
  
    buttontrash=createButton('Colocar banana no lixo?')
  buttontrash.mouseClicked(bananalixo)
  buttontrash.size(70,50);
  buttontrash.position(15,380);
  buttontrash.style("font-family", "Oswald");
  buttontrash.style("font-size", "12px");
  buttontrash.style("color", "rgb(24,23,23)");
  buttontrash.style("background-color","rgb(245,199,11)");
  
  
    buttonmaça=createButton('')
  buttonmaça.mousePressed(maçalixo)
  buttonmaça.size(20,20)
  buttonmaça.position(90,375)
  buttonmaça.style("font-family", "Oswald");
  buttonmaça.style("font-size", "28px");
  buttonmaça.style("color", "rgb(12,11,11)");
  buttonmaça.style("background-color","rgba(73,143,46,0)");
  
  
    buttongarrafa=createButton('')
  buttongarrafa.mousePressed(garrafalixo)
  buttongarrafa.size(40,20)
  buttongarrafa.position(135,390)
  buttongarrafa.style("background-color","rgba(86,3,11,0)");
  
  
    buttonpapel=createButton('')
  buttonpapel.mousePressed(papelixo)
  buttonpapel.size(20,20)
  buttonpapel.position(100,410)
  buttonpapel.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlixo=createButton('')
  buttonlixo.mousePressed(lixo)
  buttonlixo.size(20,20)
  buttonlixo.position(140,330)
  buttonlixo.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlight=createButton('')
  buttonlight.mouseClicked(desligarluz)
  buttonlight.size(20,20)
  buttonlight.position(750,290)
  buttonlight.style("background-color","rgba(86,3,11,0)");
  
  
    buttonregarplantas=createButton('');
  buttonregarplantas.mouseClicked(regandoplantas)
  buttonregarplantas.size(30,20)
  buttonregarplantas.position(270,330)
  buttonregarplantas.style("background-color","rgba(86,3,11,0)");
  
  
  
  tela=1;
  // nature.play();
  
  
}

function nome(){
  name=prompt('Qual o seu nome?')
}
    nome()

function tempo(){
       fill('white')
  circle(755, 45, 40);
   textAlign(LEFT);
  textStyle(BOLD)
  fill('black')
  textSize(20);
  textFont('Oswald')
  text(timer, 745, 50);
    
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
   tela=16;
  }
}
function pontuacao(){
  if(bananinha===true || maçazinha===true || garrafinha===true || papelzinho===true || plantinha===true || luzinha===true || lixinho===true){
    pontos=pontos+1;
      
    bananinha=false;
    maçazinha=false;
    garrafinha=false;
    papelzinho=false;
    plantinha=false;
    luzinha=false;
        lixinho=false;

  }
  
  fill('white')
  rect(15,130, 100, 50);
   textAlign(LEFT);
  textStyle(BOLD)
  fill('black')
  textSize(20);
  textFont('Oswald')
  text('Pontuação', 20, 150)
  text(pontos, 60, 175);
  
}


function draw() {
      background(220);
      createCanvas(800, 450);
  
  if(tela==1){
    
    
    
  buttonstart.show();
  buttoninstructions.show();
  buttonexit.show();
    
     buttonexit2.hide();
     buttonmenu.hide();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
  imageMode(CORNER)
  image(sustentabilidadetelainicial,0, 0, 800, 450)
   
    
  
  }
    
  
  
  if(tela==2){
      
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();

    buttongameover.hide();
    
         buttontrash.hide();
    
         buttonmaça.hide();
         buttongarrafa.hide()
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
   
        image(faseinicial,0, 0, 800, 450)
    
    tempo();
    pontuacao();

    
     }
  
  if(tela==3){
     
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
    buttontrash.hide();
    buttonexit2.show();
    
    buttongameover.hide();
    
         buttonmenu.show();
         buttonmaça.show();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
  
    
      createCanvas(1700, 950);
    
    
   image(banana,0, 0, 800, 450)
    
  
     tempo();
    pontuacao();
  

    
  }
  
  
  
  if(tela==4){
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.show();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonlight.hide();
         buttonregarplantas.hide();


    
    
 image(maça, 0, 0, 800, 450)
     tempo();

    pontuacao();
    
  }
  
  
  
  if(tela==5){
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.show();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    image(garrafa, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==6){
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.show();
         buttonregarplantas.hide();
         buttonlight.hide();

  
    
   image(papel, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==7){
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
   
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();  
         buttonlixo.hide();
         buttonregarplantas.show();
         buttonlight.hide();
    
      
    image(lixeira, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==8){
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.hide();
     buttonmenu.hide();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();

  
    
    image(luz, 0, 0, 800, 450)
     tempo();
        pontuacao();


    
  }
  
  
  
  if(tela==9){
    
    exitbutton=true;
  
    if(exitbutton===true){
       buttonexit.hide();
       buttoninstructions.hide();
       buttonstart.hide();
       
          buttonmenu.show();
          buttonexit2.hide();
      
      buttongameover.hide();
      
            buttontrash.hide();
            buttonmaça.hide();
            buttongarrafa.hide();
            buttonpapel.hide();
            buttonlixo.hide();
                       buttonregarplantas.hide();
            buttonlight.hide();  
      
      
    background('black')
       fill('green');
       rect(100, 200, 640, 90);
          textSize(30)
          textStyle(BOLD)
          textAlign(CENTER)
          fill(255);
          text('Até outro dia meu amigo sustentável', 400, 250)
    
   }
 } 
  
  
  
  if(tela==10){
    instructionsbutton=true;
  
      if(instructionsbutton===true){
        buttonmenu.show()
        buttonexit2.show()
        buttonstart.hide()
        buttoninstructions.hide()
        buttonexit.hide()
        buttongameover.hide();
        
           buttonregarplantas.hide();

           image(instructions,0, 0, 800, 450)
              fill('green')
              rect(70, 150, 660, 150);
                  textSize(22);
                  textStyle(BOLD)
                  fill('white')
                  textAlign(CENTER)
                  textFont('Ceveat Regular')
                  text('Clique em locais presentes no cenário com o qual você poderá ter uma'+'\n'+' ação sustentável, por exemplo: clicar em um papel no chão, pra jogar'+'\n'+'no lixo, porém você só terá 30 segundos para concluir as tarefas', 400,200)
     
   }
 }
   
  
  
  if(tela==12){
     image(faseinicial,0, 0, 800, 450)
    buttontrash.show()
    buttongameover.hide();
     tempo();
       pontuacao();


  }
  
  
  
  if(tela==14){
  background('black');
    image(creditos,0, 0, 800, 450)
    
        buttonregarplantas.hide();
        buttonstart.hide();
        buttoninstructions.hide();
        buttonexit.hide();
  
            buttonexit2.hide();
            buttonmenu.show();
    
    buttongameover.hide();
    
                buttontrash.hide();
                buttonmaça.hide();
                buttongarrafa.hide();
                buttonpapel.hide();
                buttonlixo.hide();
                buttonlight.hide();
                buttonregarplantas.hide();
        pontuacao();

    
  }
  
  
  
  if(tela==15){
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
      buttonexit2.show();
      buttonmenu.show();
    
    buttongameover.hide();
    
          buttontrash.hide();
          buttonmaça.hide();
          buttongarrafa.hide();
          buttonpapel.hide();
          buttonlixo.hide();
          buttonregarplantas.hide();
          buttonlight.show();

    image(regarplantas,0, 0, 800, 450)
     tempo();
    pontuacao();


   }
  
  
  
  if(tela==16){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
      buttonexit2.hide();
      buttonmenu.hide();
  
  buttongameover.show();
    
          buttontrash.hide();
          buttonmaça.hide();
          buttongarrafa.hide();
          buttonpapel.hide();
          buttonlixo.hide();
          buttonregarplantas.hide();
          buttonlight.hide();
  
    image(gameover,0, 0, 800, 450)
    
    
}
 
image(maçajogo,mouseX,mouseY,10 ,10)
}



function Instruções(){
  click.play();
stop();

  tela=10;
}


function Saída(){
  click.play();
stop();

  tela=9;
}


function Menu(){
  click.play();
stop();

  tela=1; 

timer=resetTime
  pontos=resetPontos;
  
}

function Saída2(){
  click.play();
stop();

  tela=9;
}

  function Gameover(){
    
    click.play();
stop();

  tela=1;
    
     if(timer==0){
timer=resetTime
       
  }
    pontos=resetPontos;
    
  }



function Começo(){
   click.play();
stop();

timer=resetTime

tela=2;
  
}




function mousePressed(){
  if(mouseIsPressed===true && mouseX>0 && mouseX<50 && mouseY>400 && mouseY<600){
    click.play();
stop();

   tela=12;
   }
 }


function bananalixo(){
  click.play();
stop();
bananinha=true;
      tela=3;
  
    
}

function maçalixo(){
  click.play();
stop();
  maçazinha=true;

    tela=4;

  }

function garrafalixo(){
click.play();
stop();

  garrafinha=true;
  tela=5;
   

}

function papelixo(){
  click.play();
stop();

  tela=6;
 papelzinho=true;

}

function lixo(){
click.play();
stop();

  tela=7;
   lixinho=true;
}



function regandoplantas(){
  click.play();
stop();

plantinha=true;
  tela=15;
}
  
function desligarluz(){
  click.play();
stop();

  luzinha=true;
          buttonexit2.hide()
          tela=14;
  fill('white')
  textSize('28')
  
  alert('Parabéns '+name)
}

function keyPressed(){
     if(keyCode==ESCAPE){
       tela=1;
       pontos=resetPontos;
   }
}








