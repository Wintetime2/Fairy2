var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("circle",fairy.x+350,fairy.y-550, 50);

	 options ={
		isStatic:true,
	  }

	starBody = Bodies.circle(650 , 30 , 5, options);
	World.add(world, starBody);

	pos = starBody.position;

	star = createSprite(starBody.position.x, starBody.position.y );
	star.addImage(starImg);
	star.scale = 0.2;	

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = pos.x;
  star.y = pos.y; 

  if (keyDown("Right_arrow")) {
	fairy.velocityX =fairy.velocityX +2;
  }

  if (keyDown("Left_arrow")) {
	fairy.velocityX = fairy.velocityX-2;
  }

  if (keyDown("Down_arrow")) {
	Body.setStatic(starBody, false);
  }

  if (star.isTouching(fairy)) {
	Body.setStatic(starBody, true);
  }

  circle(starBody.position.x, starBody.position.y, 5, )
  
  console.log(star.position)

  drawSprites();

}