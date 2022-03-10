                                                       Algorithm Game


***     

The p5.js link to the game: [Algorithm Game](https://editor.p5js.org/maishahoq/sketches/3w7Z017ey)

***   


### Inspiration 



I was learning different algorithms to make code efficient, which included shortest path finding algorithms (ex - Dijkstra's algorithm) and sorting algorithms like Bubble Sort, Insertion Sort, Heap Sort etc. Although there are many resources online, both articles and instruction videos, I couln't find any interactive platform to 1. Learn 2. Apply my understanding i.e practice my learnings. That's why, for this project, I am planning to build an educational game.




### Game Description




The game will have two parts: `1.` Algorithm Visualizer 
                              `2.` Algorithm Game

__Visualizer:__  This part of the game is instructional and was inspired from the assignment where we did generative art without any interaction from the user. So, there will be visualization of how the different sorting algorithm works based on which algorithm the user chooses.

__Game:__ This part of the game is interactive and was inspired from the assignment where we did generative art with interactions from the user. The user will be able to play the game and try out different algorithms by moving the objects on screen using the cursor.
+ Everytime a correct path is traced, a celebration sound goes off at the background
                              
    
   + __Screen 1:__ 
[Screen 1](https://youtu.be/-dmTamqtpMo)




### Game Algorithm Explanation: 
Ball Object: Here, the ball objects have a number attribute.

To keep Track: 
1. whether the i and i+1 th are swapped or not
2. A rectangular base to hold the ball, to know that the ball has been placed in the right position.


Best part about code: it is very less hard coded, so, just changing the no of balls variable (noBalls) you can change ball umber, box number etc.



<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/275072271_1370772470013205_8721016807671305824_n.jpg" alt="Inspiration" width="300"  /> 


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/275168203_550537532748669_3906296285163047637_n.jpg" alt="Inspiration" width="500"  />                        


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/275042261_728017601908557_3536086805784017991_n.jpg" alt="Inspiration" width="500"  /> 



The algorithm for finding the corners of the box to reset the position value for balls:
<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/275248506_662801645034607_2356488830949616720_n.jpg " alt="Sqcorner" width="500"  /> 


__Bubble Sort__

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/274702081_656210328936265_2267473470743547669_n.jpg" alt="Inspiration" width="300"  /> 


__Win or Lose__

If anybody loses the game, this screen comes up, I edited the image, very proud of the background, didn't want anything sa or rude or sassy, but also not happy and colorful. So, I used an acrylic effect to edit the yello background into this and then added text, to me, this background gave off a serious tone, to pass the emotion that it is sad as well as a little disappointing because the game is just sorting.


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/pngtree-liquid-gold-with-rough-surface-texture-png-image_4355339.jpg" alt="Inspiration" width="300"  /> 


If you win, I used a party themed background from the internet which I edited and it's below. 

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/canvas.png" alt="Inspiration" width="300"  /> 






### Code Snippets: 


```````````````````````````````````````````````
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


```````````````````````````````````````````````




```````````````````````````````````````````````
//screen 1 of the game play
function screen_1() {
  ///////////the box////////////////////////////////
  background("220");
  push();
  rectMode(CENTER);
  for (let i = 0; i < noBalls; i++) {
    box[i].drawBox();
    j = j + 100;
  }
  pop();
  ///////////////////////////////////////////////////

  for (j = 0; j < noBalls; j++) {
    ball[j].drawBall();
  }
  submit();

  let swapCtr = 0;
  swapped();
}

```````````````````````````````````````````````




```````````````````````````````````````````````
//Result Display Function


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
```````````````````````````````````````````````

In order for my full song to play, I stopped the looping of the draw until it finishes
```````````````````````````````````````````````
//when song starts playing, looping of draw stops
    if (ctrSong == 0) {
      noLoop();
      ohNo.play();
      ctrSong = 1;
    }

    //when song stops playing, looping of draw starts
    loop();
    

```````````````````````````````````````````````

```````````````````````````````````````````````

//Sorts the array of balls based on position after user changed position
function sortArrayPos() {
  let n = ball.length;

  //sorting the balls in the array based on their position value
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


//checks the final ball positions and compares it to the actually ascending order

function checkAns() {
  sortArrayPos();

  for (let j = 0; j < ball.length - 1; j++) {
    if (ball[j].value > ball[j + 1].value) {
      print("Not Sorted \n");
      notSwapped = 1;
      break;
    }
  }

  if (notSwapped != 1) {
    //which means the swap by the user is correct
    notSwapped = 2;
  }
}



```````````````````````````````````````````````

```````````````````````````````````````````````

//function to change the position value of the objects
function changeBallPos(m, ballX, ballY) {
  
  for (let o = 0; o < noBalls; o++) {
    if (
      ballX > box[o].Cor1.x &&
      ballX < box[o].Cor2.x &&
      ballY > box[o].Cor1.y &&
      ballY < box[o].Cor3.y
    ) {
      //the psotion of the ball is the position of the box in the box array+1, cuz arrays starts from 0, but position starts from 1
      ball[m].pos = o + 1;
    }
  }

  move = move + 0.5;

  if (move == noBalls - 1) {
    period++;
  }
}


```````````````````````````````````````````````

```````````````````````````````````````````````
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
        }
        print("\n");
        x++;
      }
    }
  }
}
```````````````````````````````````````````````


```````````````````````````````````````````````

//to reset the arrays, the values etc.
function reset()
{
  
  
  //resetting counters
  print("in reset    " +q);q++;
  ctrResult = 0;
  ctrScreen0=0;
  ctrSong=0;
  //populating the random array with random numbers
  for (let i = 0; i < noBalls; i++) {
    //why do we not get rndom no.s everytime reset() gets called without q?
    randomNumArr[i] = int(random(1, 50+q));
    
  }
  
  ///////////the ball////////////////////////////////
  let ballCol = color(20, 150, 200);
  j = 0;
  for (let i = 0; i < noBalls; i++) {
    ball[i] = new Ball(
      width / 6 + j,
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
    box[i] = new Box(width / 6 + j, height / 3, 60, "black");
    j += 100;
  }
  ///////////////////////////////////////////////////

  //calling the array which saves the bubble sorted steps in a 2D array
  createBubbleCompareArr();
}


```````````````````````````````````````````````


+ Best Part of Code:

         + Game Modification:   The user can change the change just by changing the values in some of the variables, this will modify the whole code without it breaking anywhere. Example, just changing the no of balls variable, changes the box numbers, places the balls in equal distances, changes the comparisons of positions etc. The values have been barely hardcoded.
         
         + Resuse code from other assignments. I tried mofifying the one of the assignments to fit the game as an intro screen because the assignmnethas animation of balls to it.
         


### Encountered Problems

__1__. The balls were getting vanished behind the ball in my cursor:

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.04%20AM.png" alt="Inspiration" width="300"  />                          <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.20%20AM.png" alt="Inspiration" width="300"  />                                <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.28%20AM.png" alt="Inspiration" width="300"  />   


Solution: Used "break" keyword inside the if statement of the forloop of mouse dragged to stop from taking any other ball when a ball has been selected.


__2__ I wanted the player to be able to do the whole game play and just click on one final submit button to check answer. But I couln't implement it and the player now needs to click on a swap button after bubble swapping has been been done once 




### Future Additions

__1__.  Adding an instruction animation using code. Due to lack of expertise and time commitment since I am overloading this semester and had a lot of exams and projects due at the same time, I could't do this before. I plan to add this during Spring Break.


__2__. Add options of choosing from different algorithms like Insertion Sort, Quick Sort etc. But that might not work with the bubble design for bubble sort, so I will have to figure out a different design based on the sorting selected by the user.


### Reference



Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)

Mapping reference: [2.5: The map() Function](https://www.youtube.com/watch?v=nicMAoW6u1g)


Timer: [Timer using FrameCount](https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-)


Audio Effects: [Oh No](https://mobcup.net/ringtone/oh-no-t6cf2k15/download/mp3)




