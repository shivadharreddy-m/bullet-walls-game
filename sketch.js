var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
   car=createSprite(50,200,20,20);
  wall=createSprite(1100,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  
  drawSprites(); 
  car.velocityX=speed;
 thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
if(wall.x-car.x<(car.width+wall.width)/2){
    bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if (deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  bullet.shapeColor=color(230,230,0);
}
if(deformation<100){

  bullet.shapeColor=color(0,255,0);
}
  }
 if(hasCollided(bullet,wall) ){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColor=color(255,0,0);
}
if (damage<10){
  wall.shapeColor=color(0,255,0);
}
 }
}

function hasCollided(Lbullet,Lwall) 
{
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.X;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}















