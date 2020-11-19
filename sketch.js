
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(20,300,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
   Ground = createSprite(200,310,400,10);
   
   survivalTime = 0;
   //monkey.debug = true

  
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime : "+ survivalTime, 200,50);
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
   
   swampBanana();
   swampObstacles();
  
  monkey.collide(Ground);
  
   drawSprites();
}

function swampBanana(){
  if(World.frameCount%50===0){
      banana = createSprite(400,200,10,10);
      banana.addImage("Banana",bananaImage);
      banana.scale=0.1;
      banana.velocityX=-6;
   

        
    }
  }

function swampObstacles(){
  if(World.frameCount%100===0){
      obstacle = createSprite(400,275,10,10);
      obstacle.addImage("Obstacles",obstacleImage);
      obstacle.scale=0.2;
      obstacle.velocityX=-5;

    
    }
  
  }
