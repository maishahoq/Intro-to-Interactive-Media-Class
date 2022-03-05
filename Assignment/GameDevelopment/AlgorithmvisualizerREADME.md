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
                              






### Game Algorithm Explanation: 
Ball Object: Here, the ball objects have a number attribute.

To keep Track: 
1. whether the i and i+1 th are swapped or not
2. A rectangular base to hold the ball, to know that the ball has been placed in the right position.


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/275072271_1370772470013205_8721016807671305824_n.jpg" alt="Inspiration" width="300"  /> 

__Bubble Sort__

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/274702081_656210328936265_2267473470743547669_n.jpg" alt="Inspiration" width="300"  /> 




### Code Snippets: 



```````````````````````````````````````````````
//class for bubbles


```````````````````````````````````````````````



### Encountered Problems

__1__. The balls were getting vanished behind the ball in my cursor:

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.04%20AM.png" alt="Inspiration" width="300"  />                          <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.20%20AM.png" alt="Inspiration" width="300"  />                                <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.28%20AM.png" alt="Inspiration" width="300"  />   


          Solution: Used "break" keyword inside the if statement of the forloop of mouse dragged to stop from taking any other ball when a ball has been selected.



### Reference



Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)

Mapping reference: [2.5: The map() Function](https://www.youtube.com/watch?v=nicMAoW6u1g)



