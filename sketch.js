var fixedRect, movingRect;
var gameobj1,gameobj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameobj1 = createSprite(50,100,50,50);
gameobj1.shapeColor = "blue";
gameobj2 = createSprite(50,500,50,50);
gameobj2.shapeColor = "yellow";
movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobj2.velocityY = -2;
  gameobj2.velocityX = 2;
  gameobj1.velocityY = 2;
  gameobj1.velocityX = 2;
}

function draw() {
  background(0,0,0);  
 bounceOff(gameobj1,gameobj2);
  
  drawSprites();
}



