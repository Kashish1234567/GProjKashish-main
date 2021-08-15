const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,
  world,
  backgroundImg,
  waterSound,
  pirateLaughSound,
  backgroundMusic,
  cannonExplosion;
var canvas, angle, ufo, ground, cannon, ship1,ship2,ship3;


var isGameOver = false;
var isLaughing = false;

function preload() {
  backgroundImg = loadImage("assets/space.jpg");
  ufo1=loadImage("assets/ufo.png");
  ship1=loadImage("assets/ship01.png");
  ship2=loadImage("assets/ship02.png");
  ship3=loadImage("assets/ship3.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  

  ufo=createSprite(100,300);
  ufo.addImage(ufo1);
  ufo.scale=0.7;

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);



  

  Engine.update(engine);
 // ground.display();

  drawSprites();
 
}

function keyPressed() {
  
}

function showCannonBalls(ball, index) {
  
}



// function gameOver() {
//   swal(
//     {
//       title: `Game Over!!!`,
//       text: "Thanks for playing!!",
//       imageUrl:
//         "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
//       imageSize: "150x150",
//       confirmButtonText: "Play Again"
//     },
//     function(isConfirm) {
//       if (isConfirm) {
//         location.reload();
//       }
//     }
//   );
// }
