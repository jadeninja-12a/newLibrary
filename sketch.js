var fixedRect, movingRect, anything1, anything2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  anything1 = createSprite(400, 400, 50, 50);
  anything2 = createSprite(600, 600, 30, 90);
  anything1.shapeColor = "green";
  anything2.shapeColor = "green";
  // movingRect.velocityY = -5;
  // fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX; 
  // movingRect.y = World.mouseY;
  anything1.x = World.mouseX; 
  anything1.y = World.mouseY;
  if (isTouching(anything1, anything2)) {
    anything1.shapeColor = "red";
    anything2.shapeColor = "blue";
  } else {
    anything2.shapeColor = "green";
    anything1.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(sprite1, sprite2){

  if ((sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
    && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2) && 
    (sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
    && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2)) {
    return true;
  } 
    return false;
  
}