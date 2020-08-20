var movingRect, fixedRect;
function setup() {
  createCanvas(800,1000);
  fixedRect = createSprite(300, 800, 50, 50);
  movingRect = createSprite(400, 200, 30, 30);
  object1 = createSprite(100, 200, 50, 50)
  object2 = createSprite(200, 200, 50, 50)
  object3 = createSprite(300, 200, 50, 50)
  movingRect.shapeColor = "blue"; 
  fixedRect.shapeColor = "green"; 
  object1.shapeColor = "green"; 
  object2.shapeColor = "green"; 
  object3.shapeColor = "orange"; 
console.log(fixedRect.depth);
console.log(movingRect.depth);
console.log(object1.depth);
console.log(object2.depth);
console.log(object3.depth);
   object3.velocityY = 5;
   fixedRect.velocityY = -3;

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect, object3)){
  movingRect.shapeColor = "red"; 
  object3.shapeColor = "red"; 
}else{
  movingRect.shapeColor = "blue"; 
  object3.shapeColor = "green"; 
}

bounceOff(fixedRect,object3)

  drawSprites();
}



