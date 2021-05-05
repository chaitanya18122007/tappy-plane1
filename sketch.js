
var gr, groundRock
var gr2 , groundRock2
var plane, planeAnimation
var bow , bo
var arrow
var balloon
var redB, blueB, pinkB, greenB, arrowB
var score 
var gr3 ,groundRock3
var gr4, groundRock4
var   rockIceGroup, rockIceImg
var rockIceDownGroup ,rockIceDownImg
var score=0 
var PLAY = 1
var END = 0
var gameState = PLAY
var gameOver,go
var sound1, sound2






function preload(){
 //load your images here 
  gr = loadImage("groundRock.png");
  gr2 = loadImage("groundRock2.png");
  
  bg = loadImage("background.png");
  gr3 = loadImage("groundRock3.png")
  
  gr4 = loadImage("groundRock4.png");
  rockIceImg = loadImage("rockIce.png");
  rockIceDownImg = loadImage("rockIceDown.png")
  go = loadImage("gameOver.png")
  
  planeAnimation = loadAnimation("planeGreen1.png","planeGreen2.png","planeGreen3.png");
  
 
  
 
  
}

function setup() {
  createCanvas(800, 480);
  background("white")
  
  background1 = createSprite(400,240);
  background1.addImage("bg",bg);
  background1.scale = 1
  
  groundRock = createSprite(400,450);
  groundRock.addImage(gr);
  
  groundRock2 = createSprite(400,30)
  groundRock2.addImage(gr2);
  
  groundRock3 = createSprite(1200,450)
  groundRock3.addImage(gr3)
  
  groundRock4 = createSprite(1200,30);
  groundRock4.addImage(gr4);
  
  plane = createSprite(170,236)
  
  plane.addAnimation("p",planeAnimation);
  gameOver = createSprite(400,240)
  gameOver.addImage(go)
  
  rockIceGroup = new Group();
  rockIceDownGroup = new Group();
  score = 0
  plane.setCollider("rectangle",0,0,plane.width-40,plane.height-40)
  plane.debug = true
  
  
 
  
  

  
  //add code here
 
  
  
  
  
} 
  
  


function draw() {

  //add code here
  background("white")
  if(gameState == PLAY){
    gameOver.visible = false;
    
  
  score = score + Math.round(getFrameRate()/60);
    
      
    
  
  if(keyDown("space")){
    plane.velocityY = -10
  }
    
  plane.velocityY = plane.velocityY + 0.8
  SpawnRockIce();
  SpawnRockIceDown();
  
  
  
  groundRock.velocityX = -(7+score/100)
  if(groundRock.x < -400 ){
    groundRock.x = 400
  }
  groundRock3.velocityX = -(7+score/100)
  if(groundRock3.x < 400 ){
    groundRock3.x = 1200
  }
  
  groundRock2.velocityX = -(7+score/100)
  if(groundRock2.x < -400 ){
    groundRock2.x = 400
  }
  groundRock4.velocityX = -(7+score/100)
  if(groundRock4.x < 400 ){
    groundRock4.x = 1200
  }
  
  if(rockIceGroup.isTouching(plane)||rockIceDownGroup.isTouching(plane)||groundRock.isTouching(plane)||groundRock2.isTouching(plane)||groundRock3.isTouching(plane)||groundRock4.isTouching(plane)){
    gameState = END
    
  }
  }
  else if(gameState == END){
    
    gameOver.visible = true
    plane.velocityX = 0
    rockIceGroup.setVelocityXEach(0)
    rockIceDownGroup.setVelocityXEach(0)
    groundRock.velocityX = 0
     groundRock2.velocityX = 0
     groundRock3.velocityX = 0
     groundRock4.velocityX = 0
    plane.velocityY = 7
    
    
    
  }
  
  
  
  
    
    
 
  
  drawSprites()
  fill("blue")
  textSize(20)
  text("SCORE : " + score,10,100)

  
  
  
  
  
  
}
function SpawnRockIce(){
  if(frameCount % 70 === 0 ){
  var rockIce = createSprite(690,360,100,100)
    rockIce.y = Math.round(random(360,440))
    rockIce.x = Math.round(random(950,1000))
    rockIce.addImage(rockIceImg)
    rockIce.velocityX = -(7+score/100)
    rockIceGroup.add(rockIce);
    
  }
}
function SpawnRockIceDown(){
  if(frameCount % 70 === 0 ){
  var rockIceD = createSprite(0,0)
    rockIceD.y = Math.round(random(20,100))
    rockIceD.x = Math.round(random(800,830))
    rockIceD.addImage(rockIceDownImg);
    rockIceD.velocityX = -(7+score/100)
    rockIceDownGroup.add(rockIceD);
    
  }
}















