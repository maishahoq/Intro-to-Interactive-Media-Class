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
//class for bubbles


```````````````````````````````````````````````
+ Best Part of Code:

         + Game Modification:   The user can change the change just by changing the values in some of the variables, this will modify the whole code without it breaking anywhere. Example, just changing the no of balls variable, changes the box numbers, places the balls in equal distances, changes the comparisons of positions etc. The values have been barely hardcoded.
         
         + Resuse code from other assignments. I tried mofifying the one of the assignments to fit the game as an intro screen because the assignmnethas animation of balls to it.
         


### Encountered Problems

__1__. The balls were getting vanished behind the ball in my cursor:

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.04%20AM.png" alt="Inspiration" width="300"  />                          <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.20%20AM.png" alt="Inspiration" width="300"  />                                <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.28%20AM.png" alt="Inspiration" width="300"  />   


Solution: Used "break" keyword inside the if statement of the forloop of mouse dragged to stop from taking any other ball when a ball has been selected.


__2__




### Future Additions

__1__.  Adding an instruction animation using code. Due to lack of expertise and time commitment since I am overloading this semester and had a lot of exams and projects due at the same time, I could't do this before. I plan to add this during Spring Break.


__2__. Add options of choosing from different algorithms like Insertion Sort, Quick Sort etc. But that might not work with the bubble design for bubble sort, so I will have to figure out a different design based on the sorting selected by the user.


### Reference



Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)

Mapping reference: [2.5: The map() Function](https://www.youtube.com/watch?v=nicMAoW6u1g)


Timer: [Timer using FrameCount](https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-)




