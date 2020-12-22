var wall, thickness;
var bullets, speed, weight ;




function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullets=createSprite(50,200,50,50);
  bullets.shapeColor="white";
  bullets.velocityX=speed;

  wall=createSprite(1200,200, thickness,height/2);
  wall.shapeColor="grey";



}

function draw() {
  background("black"); 
  

  if(hasCollided(bullets,wall)){
    bullets.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor=color(250,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

  }
  drawSprites();
}

function hasCollided(lbullets, lwall){
  bulletRightEdge=lbullets.x+lbullets.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  } 
  else{
    return false;
  }
}