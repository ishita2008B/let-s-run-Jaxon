 var path , pathImg 
 var runner,runner_running,invisibleBoundaries1,invisibleBoundaries2;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  background("white");
  //create sprites here
 path = createSprite(200,200,50,20);
 path.addImage (pathImg);
 path.velocityY = 4;
 path.scale = 1.5;

 runner = createSprite(200,200,20,20);
 runner.addAnimation("running",runner_running);
 runner.scale = 0.08; 

 invisibleBoundaries1 = createSprite(389,397,10,790);
 invisibleBoundaries1.shapeColor = "white";

 invisibleBoundaries2 = createSprite(18,397,10,790)
 invisibleBoundaries2.shapeColor = "white";
 

 
 
}

function draw() {
 if (path.y > 400){ 

  path.y = height/2;
  path.velocityY = 4;

 } 


runner.x = World.mouseX;
 
 runner.collide(invisibleBoundaries1);
 invisibleBoundaries1.shapeColor = "white";
 runner.collide(invisibleBoundaries2);
invisibleBoundaries2.shapeColor = "white ";

 
 

 drawSprites();
}


