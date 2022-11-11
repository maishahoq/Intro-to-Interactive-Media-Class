//bubble sort function built after I understood the concept.
//This function was not used anywhere, but the code was used in the createBubbleCompareArr() function
function bubbleSort() {
  let n = ball.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (ball[j].value > ball[j + 1].value) {
        // swap arr[j+1] and arr[j]
        /*let temporary = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporary;*/
        print("Not Sorted \n");
        print(j + "   " + ball[j].value);
      }
    }
  }
}

//for creating the submit button
function submit() {
  fill("green");
  rect(450, 500, 80, 40);
  fill("white");
  text("Submit", 460, 525);
}

////for creating the swapped button
function swapped() {
  fill("blue");
  rect(300, 500, 80, 40);
  fill("white");
  text("Swapped", 310, 525);
}

//This part is hard coded but I want to change the swapped and submit buttons into objects and therefore use the objects instead, not their hardcoded positions found from printing mouseX,mouseY values

function mouseClicked() {
  if (mouseX > 450 && mouseX < 530 && mouseY > 500 && mouseY < 540) {
    checkAns();
  }

  if (mouseX > 300 && mouseX < 380 && mouseY > 500 && mouseY < 540) {
    //swapCtr++;
    checkSwap();
  }
}

//checks the final ball positions and compares it to the actually ascending order

function checkAns()
{
  for(let i=0;i<u;i++)
    {
      for(let j=0;j<noBalls;j++)
        {
          //print(" swappedArr["+i+"]["+j+"] =   "+ swappedArr[i][j].value);
          if(swappedArr[i][j].value!=bubblesort[i][j])
            {
              notSwapped = 1;
              break;
            }
        }
    }
  
  if (notSwapped != 1) {
    //which means the swap by the user is correct
    notSwapped = 2;
  }
  
  
  //after answe checking is done, we rest the value of u to 0
  if(u==store)
    {
      u=0;
    }
}

function checkSwap() {
  
  //this condition is here just to be safe
  if (u < store) 
  {
    sortArrayPos();
    swappedArr[u] = []; // create nested array
    //we store the steps in the 1D array only when steps come
    for (let y = 0; y < noBalls; y++) {
      swappedArr[u][y] = ball[y];
      print(" swappedArr"+u+"]["+y+"] = ball[y] :    "+ swappedArr[u][y].value);
    }

    u++;
  }
  print(store);
  
}

//Sorts the array of balls based on position after user changed position
function sortArrayPos() {
  let n = ball.length;

  //sorting the balls in the array based on their position value
  //sorting uses bubble sort here
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (ball[j].pos > ball[j + 1].pos) {
        // swap arr[j+1] and arr[j]
        let temporary = ball[j];
        ball[j] = ball[j + 1];
        ball[j + 1] = temporary;
      }
    }
  }
}

//function to drag the balls around
function mouseDragged() {
  let m = 0;
  for (m = 0; m < noBalls; m++) {
    //if I click anywhere in the circle, so x+radius
    if (
      mouseX > ball[m].x - ball[m].d / 2 &&
      mouseX < ball[m].x + ball[m].d / 2 &&
      mouseY > ball[m].y - ball[m].d / 2 &&
      mouseY < ball[m].y + ball[m].d / 2
    ) {
      ball[m].updateBallPos(mouseX, mouseY);
      changeBallPos(m, ball[m].x, ball[m].y);
      break;
    }
  }
}

//function to change the position value of the objects
function changeBallPos(m, ballX, ballY) {
  //in position 1
  /*if (ballX > 70 && ballX < 130 && ballY > 170 && ballY < 230) {
    ball[m].pos = 1;
  } else if (ballX > 170 && ballX < 230 && ballY > 170 && ballY < 230) {
    ball[m].pos = 2;
  } else if (ballX > 270 && ballX < 330 && ballY > 170 && ballY < 230) {
    ball[m].pos = 3;
  }*/
  for (let o = 0; o < noBalls; o++) {
    if (
      ballX > box[o].Cor1.x &&
      ballX < box[o].Cor2.x &&
      ballY > box[o].Cor1.y &&
      ballY < box[o].Cor3.y
    ) {
      //the potion of the ball is the position of the box in the box array+1, cuz arrays starts from 0, but position starts from 1
      ball[m].pos = o + 1;
    }
  }

  /*move = move + 0.5;

  if (move == noBalls - 1) {
    period++;
  }*/
}

//screen 0 of the game play
function screen_0() {
  randomSeed(rs);
  time = (frameCount % frames) / float(frames);

  //I want constant supply of bubbles
  for (j = 0; j < 50; j++) {
    bubblesArr[j].drawBubble(j);
  }
  theta += TWO_PI / frames;

  push();
  stroke("white");
  push();
  noStroke();
  fill("black");
  quad(0, 480, 280, 538, 300, 600, 0, 600);
  quad(280, 538, 600, 480, 600, 600, 300, 600);
  pop();
  line(280, 538, 0, 480);
  line(280, 538, 600, 480);
  pop();

  //my head
  push();
  noStroke();
  fill("white");
  circle(width / 2, 550, 95);
  push();
  strokeWeight(2);
  stroke("black");
  noFill();
  arc(280, 538, 15, 15, PI, 0);
  arc(320, 538, 15, 15, PI, 0);
  line(282, 565, 315, 578);
  pop();
  pop();

  fill("white");
  textSize(25);

  if (millis() / 1000 < 4) {
    text("DO YOU HAVE BUBBLES", 80, 200);
    text("IN YOUR HEADSPACE?", 200, 250);
  } else if (millis() / 1000 < 8 && millis() / 1000 > 4) {
    text("SORT THEM OUT IN ASCENDING ORDER ", 80, 200);
    text("TO START THINKING CLEAR!!!", 150, 250);
  } else {
    textSize(40);

    text("Press 'S' or 's' to start sorting", 65, 250);

    textSize(20);
    text("First Click on The Screen before Pressing the Key", 80, 300);
  }
}

//screen 1 of the game play
function screen_1() {
  ///////////the box////////////////////////////////
  background("220");
  push();
  rectMode(CENTER);
  j = 0;
  for (let i = 0; i < noBalls; i++) {
    box[i].drawBox();
    j = j + 100;
  }
  pop();
  ///////////////////////////////////////////////////

  for (j = 0; j < noBalls; j++) {
    ball[j].drawBall();
    //print(ball[j].value);
  }
  submit();

  let swapCtr = 0;
  swapped();
}

//function to make the 2D array which saves the bubble sorted steps in itself

function createBubbleCompareArr() {
  let n = ball.length;
  let x = 0;
  for (let i = 0; i < n - 1; i++) {
    //let y=0;

    for (let j = 0; j < n - i - 1; j++) {
      if (randomNumArr[j] > randomNumArr[j + 1]) {
        // swap arr[j+1] and arr[j]
        let temporary = randomNumArr[j];
        randomNumArr[j] = randomNumArr[j + 1];
        randomNumArr[j + 1] = temporary;
        bubblesort[x] = []; // create nested array
        //we store the steps in the 1D array only when steps come
        for (let y = 0; y < n; y++) {
          bubblesort[x][y] = randomNumArr[y];
          print(" bubblesort[" +x+"]["+y+"] =   " +bubblesort[x][y]);
        }
        x++;
      }
    }
  }

  store = x;
}

let q = 0;

//to reset the arrays, the values etc.
function reset() {
  //resetting counters
  q++;
  ctrResult = 0;
  ctrScreen0 = 0;
  ctrSong = 0;
  u=0;
  j=0;
  //populating the random array with random numbers
  for (let i = 0; i < noBalls; i++) {
    //why do we not get rndom no.s everytime reset() gets called without q?
    randomNumArr[i] = int(random(1, 50 + q));
  }

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






//////////////////////////////////////////////////

//This code is for regular sorting. No use currently in game but will later include this for another layer of difficulty, just in case user doesn't wanna play bubble sorting.
function checkAns2() {
  sortArrayPos();

  for (let j = 0; j < ball.length - 1; j++) {
    if (ball[j].value > ball[j + 1].value) {
      notSwapped = 1;
      break;
    }
  }

  if (notSwapped != 1) {
    //which means the swap by the user is correct
    notSwapped = 2;
  }
}
