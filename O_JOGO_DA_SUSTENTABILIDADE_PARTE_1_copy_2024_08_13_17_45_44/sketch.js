// https://youtu.be/wMGUN_DGYc4
// vídeo explicativo do código do jogo

//https://docs.google.com/document/d/1IRDZlYWr4ZQFu66Hi91EsbwF0AD8T-V7q0sk19smGbM/edit
// SGDD do jogo


var tela;
var contador=0;

let faseinicial, sustentabilidadetelainicial, banana, maça, garrafa, papel, lixeira, luz, instructions, creditos, regarplantas, gameover;

let click, nature;

let roomlight=false;

var timer = 30;
let resetTime=timer;

let pontos=0;



function preload(){
  sustentabilidadetelainicial=loadImage('sustentabilidade.png')
     faseinicial=loadImage('quarto.png');
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
           

  nature=loadSound('nature.mp3')
    click=loadSound('click.mp3')

}

function setup() {
      createCanvas(1400, 750);

    buttonstart = createButton('Começar')
  buttonstart.mouseClicked(Começo)
  buttonstart.size(180,80);
  buttonstart.position(200,450);
  buttonstart.style("font-family", "Oswald");
  buttonstart.style("font-size", "38px");
  buttonstart.style("color", "white");
  buttonstart.style("background-color","rgb(59,216,123)");
  
  
    buttoninstructions = createButton('Instruções')
  buttoninstructions.mousePressed(Instruções)
  buttoninstructions.size(180,80);
  buttoninstructions.position(540,450);
  buttoninstructions.style("font-family", "Oswald");
  buttoninstructions.style("font-size", "38px");
  buttoninstructions.style("color", "white");
  buttoninstructions.style("background-color","purple");
  
    buttonexit = createButton('Saída')
  buttonexit.mousePressed(Saída)
  buttonexit.size(180,80);
  buttonexit.position(880,450);
  buttonexit.style("font-family", "Oswald");
  buttonexit.style("font-size", "38px");
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
  buttonmenu.size(200,50);
  buttonmenu.position(50,10);
  buttonmenu.style("font-family", "Oswald");
  buttonmenu.style("font-size", "28px");
  buttonmenu.style("color", "rgb(12,11,11)");
  buttonmenu.style("background-color","rgb(19,230,19)");
  
   buttongameover=createButton('Jogar novamente');
  buttongameover.mousePressed(Gameover)
  buttongameover.size(180,70);
  buttongameover.position(50,10);
  buttongameover.style("font-family", "Oswald");
  buttongameover.style("font-size", "28px");
  buttongameover.style("color", "rgb(255,255,255)");
  buttongameover.style("background-color","rgb(19,115,230)");
  
  
  
  
  
  
    buttontrash=createButton('Colocar banana no lixo?')
  buttontrash.mouseClicked(bananalixo)
  buttontrash.size(120,80);
  buttontrash.position(70,550);
  buttontrash.style("font-family", "Oswald");
  buttontrash.style("font-size", "18px");
  buttontrash.style("color", "rgb(24,23,23)");
  buttontrash.style("background-color","rgb(245,199,11)");
  
  
    buttonmaça=createButton('')
  buttonmaça.mousePressed(maçalixo)
  buttonmaça.size(20,20)
  buttonmaça.position(150,550)
  buttonmaça.style("font-family", "Oswald");
  buttonmaça.style("font-size", "28px");
  buttonmaça.style("color", "rgb(12,11,11)");
  buttonmaça.style("background-color","rgba(73,143,46,0)");
  
  
    buttongarrafa=createButton('')
  buttongarrafa.mousePressed(garrafalixo)
  buttongarrafa.size(30,30)
  buttongarrafa.position(320,850)
  buttongarrafa.style("background-color","rgba(86,3,11,0)");
  
  
    buttonpapel=createButton('')
  buttonpapel.mousePressed(papelixo)
  buttonpapel.size(30,30)
  buttonpapel.position(210,880)
  buttonpapel.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlixo=createButton('')
  buttonlixo.mousePressed(lixo)
  buttonlixo.size(30,30)
  buttonlixo.position(310,680)
  buttonlixo.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlight=createButton('')
  buttonlight.mouseClicked(desligarluz)
  buttonlight.size(30,30)
  buttonlight.position(1597,615)
  buttonlight.style("background-color","rgba(86,3,11,0)");
  
  
    buttonregarplantas=createButton('');
  buttonregarplantas.mouseClicked(regandoplantas)
  buttonregarplantas.size(80,100)
  buttonregarplantas.position(560,650)
  buttonregarplantas.style("background-color","rgba(86,3,11,0)");
  
  
  
  tela=1;
   nature.play();
  
  
}

function tempo(){
       fill('white')
  rect(130,160, 100, 50);
   textAlign(LEFT);
  textStyle(BOLD)
  fill('black')
  textSize(40);
  textFont('Oswald')
  text(timer, 150, 200);
    
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
   tela=16;
  }
}



function draw() {
      background(220);
      createCanvas(1700, 950);
  contador++;
  
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
    
  
  background(220);
  createCanvas(1200, 650);

    
  image(sustentabilidadetelainicial,0, 0, 1200, 650)
  
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
   

      createCanvas(1700, 950);
    
    
         image(faseinicial,0, 0, 1200, 650)
    tempo();

    
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
    
    
   image(banana,0, 0, 1200, 650)
     tempo();

    
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

  
      createCanvas(1700, 950);
    
    
 image(maça, 0,0,1700,950)
     tempo();

    
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
    
  
      createCanvas(1700, 950);
    
    
    image(garrafa, 0, 0,1700,950)
     tempo();

    
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

  
      createCanvas(1700, 950);
    
   image(papel, 0, 0, 1700, 950);
     tempo();

    
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
    
  
      createCanvas(1700, 950);
    
    image(lixeira, 0, 0, 1700, 950)
     tempo();

    
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

  
      createCanvas(1700, 950);
    
    image(luz, 0, 0, 1700, 950);
     tempo();

    
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
      
      
    createCanvas(1700, 850);
    background('black')
       fill('green');
       rect(220, 360, 1250, 90);
          textSize(70)
          textStyle(BOLD)
          textAlign(CENTER)
          fill(255);
          text('Até outro dia meu amigo sustentável',850,425);
    
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

           image(instructions,0,0,1800,950)
              fill('green')
              rect(150, 310, 1500, 200);
                  textSize(45);
                  textStyle(BOLD)
                  fill('white')
                  textAlign(CENTER)
                  textFont('Ceveat Regular')
                  text('Clique em locais presentes no cenário com o qual você poderá ter uma'+'\n'+' ação sustentável, por exemplo: clicar em um papel no chão, pra jogar'+'\n'+'no lixo, porém você só terá 30 segundos para concluir as tarefas', 885,375)
     
   }
 }
   
  
  
  if(tela==12){
     image(faseinicial,0, 0, 1200, 650)
    buttontrash.show()
    buttongameover.hide();
     tempo();
   

  }
  
  
  
  if(tela==14){
  background('black');
    image(creditos,0,0,1800,950)
    
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

    image(regarplantas,0,0,1700,950)
     tempo();


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
  
    image(gameover,0,0,1800,950)
}

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
    
  }



function Começo(){
   click.play();
stop();

timer=resetTime

tela=2;
  
}




function mousePressed(){
  if(mouseIsPressed===true && mouseX>0 && mouseX<100 && mouseY>500 && mouseY<700){
    click.play();
stop();

   tela=12;
   }
 }


function bananalixo(){
  click.play();
stop();

      tela=3;
  alert("+1")
pontos=pontos+1;
}

function maçalixo(){
  click.play();
stop();

    tela=4;
    alert("+1")
  pontos=pontos+1;

  }

function garrafalixo(){
click.play();
stop();

  tela=5;
    alert("+1")
  pontos=pontos+1;

}

function papelixo(){
  click.play();
stop();

  tela=6;
    alert("+1")
  pontos=pontos+1;

}

function lixo(){
click.play();
stop();

  tela=7;
     alert("+1")
  pontos=pontos+1;
}



function regandoplantas(){
  click.play();
stop();

  pontos=pontos+1;
  alert("+1");
  tela=15;
}
  
function desligarluz(){
  click.play();
stop();

  pontos=pontos+1;
   alert("+1")
  tela=8;  

if (pontos>=7){
          buttonexit2.hide()
          tela=14;
   }
}

function keyPressed(){
     if(keyCode==ESCAPE){
       tela=1;
       
   }
}








