var car,wall;
var speed,weight;


function setup() {
  var canvas = createCanvas(1000,600);
 

  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50)
  car.velocityX = speed;
  car.shapeColor="green"


  wall=createSprite(1000,200,60,height/2)
  wall.shapeColor="pink"

}

function draw() {
  background("orange");  
  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor="red"
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor="blue"
	}

	if(deformation<100)
	{
		car.shapeColor="purple"
	}
  }  
  drawSprites();
}