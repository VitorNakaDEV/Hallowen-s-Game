var rua, imgrua;
var vampirinho,imgvampirinho,velhinho,imgvelhinho;
var nope,nopeimg;
var vaso,imgvaso;
var pontuacao;
var neguinho,imgneguinho;
var venceu, imgvenceu;
function preload(){
  imgvampirinho = loadImage("Vampirinho.png");
  imgvelhinho = loadImage("Velhinho.png");
  nopeimg = loadImage("Nope.png");
  imgvaso = loadImage("Pote.png");
  imgneguinho = loadImage("Neguinho.png");
  imgvenceu = loadImage("Victory.png");
  imgrua = loadImage("Street.png");
}

function setup(){
  createCanvas(400,200);
  //rua = createSprite(200,100,500,200);
  //rua.addImage(imgrua);
  //rua.velocityX = -4
 // rua.scale = 1.5
  //vampirinho settings
  vampirinho = createSprite(50,100,32,32);
  vampirinho.addImage(imgvampirinho);
  vampirinho.scale = 1.5;
  
  velhinho = createSprite(500,Math.round(random(20,180)),32,32);
  velhinho.addImage(imgvelhinho);
  velhinho.scale = 1.5;
  velhinho.depth = vampirinho.depth + 1;
  velhinho.velocityX = -5;
  
  vaso = createSprite(500,Math.round(random(20,180)),32,32);
  vaso.addImage(imgvaso);
  vaso.velocityX = -8;
  nope = createSprite (200,100,400,200);
 nope.visible = false;
  neguinho = createSprite(400,Math.round(random(20,180),32,32))
  neguinho.addImage(imgneguinho);
  neguinho.velocityX = -6
  pontuacao = 0;
}

function draw(){
  background(imgrua);
  vampirinho.y = mouseY;
 // if (rua.x<160){
   // rua.x= rua.width/2
 // }
  fill("black")
  text("pontuação: "+ pontuacao,300,50);
  vaso.rotation=vaso.rotation+20;
  //rua.velocityX = -4
  geral();
  drawSprites();
}

function geral(){
  if (neguinho.isTouching(vampirinho)){
    pontuacao = pontuacao + 1;
    neguinho.x = 400;
    neguinho.y = Math.round(random(20,180));
    }
  if (vaso.x<10){
    vaso.x = Math.round(random(400,900));
    vaso.y = Math.round(random(20,180));  
  }
  if (vampirinho.isTouching(velhinho)){
    pontuacao = pontuacao +1
    velhinho.x = 400
    velhinho.y = Math.round(random(20,180))
  }
    else if(velhinho.x < 10|| vaso.isTouching(vampirinho)||neguinho.x<10){
      nope.addImage(nopeimg);
      nope.visible = true;
      vampirinho.destroy();
      velhinho.destroy();
      vaso.destroy();
      neguinho.destroy();
    }
  if (pontuacao >=30 && pontuacao<=79){
    vaso.scale= 0.3;
    vaso.velocityX = -20
  }
  if (pontuacao >= 80){
  venceu = createSprite(200,100,400,200);
  venceu.addImage(imgvenceu);
    vaso.destroy();
    velhinho.destroy();
    neguinho();
    vampirinho();
  }
  
}