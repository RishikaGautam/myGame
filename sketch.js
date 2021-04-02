var backgr;
var healthLogo, earthLogo, healthLogoImg, earthLogoImg, mathLogoImg, physicsLogoImg;
var albert, albertImg;
var keyBoard, keyBoardImg, mathLogo, physicsLogo;

function preload(){
  backgr = loadImage('background.jpg');
  healthLogoImg = loadImage('sprite_0.png');
  earthLogoImg = loadImage('earth0.png');
  albertImg = loadImage('boy0.png');
  keyBoardImg = loadImage('keyboard0.png');
  mathLogoImg = loadImage('mathLogo0.png');
  physicsLogoImg = loadImage('physicsLogo0.png');

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  healthLogo = createSprite(windowWidth - 200, windowHeight - 200, 75,75);
  healthLogo.scale = 0.6;
  healthLogo.addImage(healthLogoImg);
  earthLogo = createSprite(windowWidth - 200, windowHeight - 500, 75, 75);
  earthLogo.scale = 0.6;
  earthLogo.addImage(earthLogoImg);
  keyBoard = createSprite(windowWidth/2, windowHeight/2 , 75,75);
  keyBoard.scale = 1.5;
  keyBoard.addImage(keyBoardImg);
  mathLogo = createSprite(windowWidth - 1800, windowHeight - 200, 75, 75);
  mathLogo.scale = 1.0;
  mathLogo.addImage(mathLogoImg);
  physicsLogo = createSprite(windowWidth - 1800, windowHeight - 500, 75, 75);
  physicsLogo.scale = 0.25;
  physicsLogo.addImage(physicsLogoImg);
  albert = createSprite(windowWidth - 200, windowHeight - 200, 100,100);
  albert.scale = 0.9;
  albert.addImage(albertImg);


  
}

function draw() {
  background(backgr);  

 
  
  if(mousePressedOver(healthLogo)){
    albert = createSprite(windowWidth - 200, windowHeight - 200, 100,100);
    albert.scale = 0.9;
    albert.addImage(albertImg);
    healthLogo.visible = false;
    Health();
  } else {
    healthLogo.visible = true;
    albert.visible = false;
  }

  if(mousePressedOver(earthLogo)){
    albert = createSprite(windowWidth - 200, windowHeight - 600, 100,100);
    albert.scale = 0.9;
    albert.addImage(albertImg);
    earthLogo.visible = false;
    Earth();
  } else {
    earthLogo.visible = true;
    albert.visible = false;
  }

  if(mousePressedOver(mathLogo)){
    albert = createSprite(windowWidth - 1800, windowHeight - 200, 100,100);
    albert.scale = 0.9;
    albert.addImage(albertImg);
    mathLogo.visible = false;
    Mathematics();
  } else {
    mathLogo.visible = true;
    albert.visible = false;
  }
  
  if(mousePressedOver(physicsLogo)){
    albert = createSprite(windowWidth - 1800, windowHeight - 600, 100,100);
    albert.scale = 0.9;
    albert.addImage(albertImg);
    physicsLogo.visible = false;
    Physics();
  } else {
    physicsLogo.visible = true;
    albert.visible = false;

  }

  drawSprites();

  
}

function Earth (){
  var input = createInput();
  input.position(windowWidth - 630, windowHeight - 520);  
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is Earth's largest continent?", windowWidth - 525, windowHeight - 730);
    break;
    case 2: text("What is the driest place on Earth?", windowWidth - 525, windowHeight - 730);
    break;
    case 3: text("What country has the most natural lakes?", windowWidth - 625, windowHeight - 730);
    break;
    case 4: text("Which African country has the most pyramids?", windowWidth - 625, windowHeight - 730);
    break;
    case 5: text("What is the only sea without any coast?", windowWidth - 525, windowHeight - 730);
    break;
    default : break;
  }

}

function Health(){
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is the longest type of cell in the body?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("What is the hardest substance in the human body?", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("What is the largest organ in the human body?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("Which mammel can fly?", windowWidth - 525, windowHeight - 230);
    break;
    case 5: text("What is the largest known insect?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}

function Mathematics(){
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is the square root of 256?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("What is 253 multiplied by 89? ", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("What is 988 divided by 4?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("What is 23 to the power of 2?", windowWidth - 525, windowHeight - 230);
    break;
    case 5: text("What is the square root of 324?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}

function Physics(){
  var rand = Math.round(random(1,4));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("Is electromagnetism part of physics?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("Who is the father of physics?", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("Does light travel in a straight line?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("Is Light a particle or wave?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}