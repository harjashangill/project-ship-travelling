var ship, ship_moving, edges;
var seaImage;
var sea

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  
  ship = createSprite(50,160,40,40);
  ship.addAnimation("floating", ship_moving);
  edges = createEdgeSprites();
  
  
 ship.scale = 0.5;
  ship.x = 50

sea = createSprite(200,200,800,20)
sea.addImage(seaImage)
sea.velocityX = -20

sea.x = sea.width/2
}


function draw(){
  
  background("white");
  
  
  console.log(ship.y)
 
  if (ground.x<0){
    ground.x = ground.width/2
  }

  drawSprites();
}