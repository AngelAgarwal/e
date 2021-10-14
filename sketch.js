var PLAY =1;
var END = 0;
var gameState = PLAY;

var rani, raniImg;
var bg,bgImg;
var br, brImg;
var bullet, bulletImg;

function preload(){
    raniImg = loadImage("rani.png");
    bgImg = loadImage("bgimg.png");
    brImg = loadImage("british1.gif");
   //br2Img = loadImage("british2.jpg");
   bulletImg = loadImage("bullet.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    bg.addAnimation("bgimg",bgImg)
    bg.scale = 2;

    rani = createSprite(displayWidth-1000,displayHeight-20, 50,50)
    rani.addAnimation("rani",raniImg)
    rani.scale = 0.7;

     //brGroup = new Group();
}

function draw(){

    if(gameState === PLAY){
        if(bullet.isTouching(rani)|| br.isTouching(rani)){
          bullet.destroyEach();
          br.destroyEach();
        }
        enemy();
        spawnBullet();
        drawSprites();
    }
    /*else if(gameState === END) {

       // bullet.destroyEach();
       // br.destroyEach();
        
    }*/
    
}

function enemy(){

    if(frameCount % 150 === 0){
    br = createSprite(displayWidth+400,displayHeight-20,40,40)
    br.addImage(brImg)
    br.scale = 0.7;
    br.velocityX = -3;
    br.lifetime = 700;
} 
}

function spawnBullet(){
    // //write code here to spawn the bullets
   
      if(frameCount % 150 === 0){
        var bullet = createSprite(displayWidth+300,displayHeight-80,50,50)
        bullet.addAnimation("bullet",bulletImg);
        bullet.scale=0.2;
        bullet.velocityX = -5;
     //assign lifetime to the variable
     bullet.lifetime = 700;
    
     //adjust the depth
     bullet.depth = rani.depth;
     rani.depth = rani.depth+1;
     
      }
   

    }

