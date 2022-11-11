let ctrResult = 0;
let ctrScreen0 = 0;
let ctrSong = 0;
//screen 0 variables

let bubblesArr = [];
let time,
  theta = 0,
  frames = 300;
let rs = 0,
  offset = 0,
  strum = 1,
  move_y1 = 0,
  move_y2 = 0,
  move_y3 = 0;

//screen 1 variables
let move = 0,
  period = 0;
let j = 0;
let u=0;
let store=0;
let ball = [];
let box = [];
let noBalls = 3;
let screen = 0;
let randomNumArr = [];
let bubblesort = [];
let swappedArr = [];
let notSwapped = 0;


let imgSuccess, imgFail, imgDiff, imgIntc, applause;
let mySounds = [];
let ohNo;



//preload function
function preload() {
  imgSuccess = loadImage("image/canvas.png");
  imgFail = loadImage(
    "image/pngtree-liquid-gold-with-rough-surface-texture-png-image_4355339.jpg"
  );
  imgDiff = loadImage(
    "image/blue-abstract-hand-painted-canvas-background-texture-colorful-textured-backdrop-beautiful-blue-paint-blue-abstract-hand-painted-121467926.jpg"
  );
  
  imgIntc = loadImage(
    "image/Screen Shot 2022-03-10 at 11.49.42 PM.png");

  applause = loadSound("sound/C6D2HUN-applause.mp3");
  ohNo = loadSound("sound/OhNo.mp3");
  for (let i = 0; i < 5; i++) {
    mySounds[i] = loadSound("sound/" + i + ".mp3");
  }
}

//setup function that runs once

function setup() {
  createCanvas(600, 600);

  

  //populating the random array with random numbers
  for (let i = 0; i < noBalls; i++) {
    randomNumArr[i] = int(random(1, 50));
  }

  ////////////////screen0/////////////////////////////////

  for (let i = 0; i < width; i++) {
    bubblesArr[i] = new Bubble();
  }
  rs = random(10000);
  /////////////////////////////////////////////////////////

  ///////////the ball////////////////////////////////
  let ballCol = color(20, 150, 200);
  j = 0;
  for (let i = 0; i < noBalls; i++) {
    ball[i] = new Ball(
      width / 10 + j,
      height / 3,
      40,
      ballCol,
      randomNumArr[i],
      i + 1
    );
    j += 100;
  }
  ///////////////////////////////////////////////////

  ///////////the box////////////////////////////////
  j = 0;
  for (let i = 0; i < noBalls; i++) {
    box[i] = new Box(width / 10 + j, height / 3, 60, "black");
    j += 100;
  }
  ///////////////////////////////////////////////////

  //calling the array which saves the bubble sorted steps in a 2D array
  createBubbleCompareArr();
}




/////////////////////////////////////////////////////////////


function draw() {
  switch (screen) {
    case 0:
      background("black");

      screen_0();
      break;
//////////////to change difficulty////////////////////////
    case 0.3:
        image(imgIntc,0,0,600,600);
      break;
      
    case 0.5:
      //select difficulty which will modify the ball number
      
      image(imgDiff,0,0,600,600);
      
      break;

    ////////////////screen1/////////////////////////////////
    case 1:
      //keep the intro screen until "S or s" is pressed
      screen_1();
      break;
  }

  //Result Display
  if (notSwapped == 1) 
  {
    //I edited this image!! :-D
    image(imgFail, 80, 80, 450, 450);
    
    //when song starts playing, looping of draw stops
    if (ctrSong == 0) {
      noLoop();
      ohNo.play();
      ctrSong = 1;
    }

    //when song stops playing, looping of draw starts
    loop();
    
    
    //counter to change the result message
    ctrResult++;
    if (ctrResult > 150) 
    {
      screen = 0;
      notSwapped = 0;
      reset();
    }
  } 
  else if (notSwapped == 2) 
  {
    //I edited this image!! :-D
    image(imgSuccess, 40, 80, 500, 450);

    //when song starts playing, looping of draw stops
    if (ctrSong == 0) {
      noLoop();
      applause.play();
      ctrSong = 1;
    }

    //when song stops playing, looping of draw starts
    loop();
    //counter to change the result message
    ctrResult++;
    if (ctrResult > 150) {
      screen = 0;
      notSwapped = 0;
      reset();
    }
  }
}

//function
//to control the screen plays
function keyTyped() {
  if (key == "S" || key == "s") {
    screen = 0.3;
  }
  if (key == "N" || key == "n") {
    screen = 0.5;
  }
  if (key == 1) {
    noBalls = 3;
    //I reset here the arrays to change the arrays based off of the new number of balls
    reset();
    screen=1;
  }
  if (key == 2) {
    noBalls = 4;
    //I reset here the arrays to change the arrays based off of the new number of balls
    reset();
    screen=1;
  }
  if (key == 3) {
    noBalls = 6;
    //I reset here the arrays to change the arrays based off of the new number of balls
    reset();
    screen=1;
  }
}
