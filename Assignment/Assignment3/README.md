
                                               OOP Generative Art: Bubbles in My Headspace
                                                  
                                                  
The p5.js link to the art: [Bubbles in My Head](https://editor.p5js.org/maishahoq/sketches/cvFCaD4Db)

***     

#### Inspiration 

I couldn't think of anything creative last week, and either from the stress of workload or my migraine, I felt like I was in a creative block, with bubbles crowding  in my headspace. Thus, I just decided to draw what I felt like, using colors I felt matched my situation.
The bubles have a trasparent feauture because of how foggy and clody they are in my head.
I used two quadrilaterals to cover up the front part and to give off an imagery of the bubbles coming out from the background of the head.
My eyes are happy but I have an "ok" mouth shape because my head is all clouded with randomest ideas and thoughts.

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment3/273815152_470724207876264_2122613047034017782_n.jpg" alt="Inspiration" width="300"  /> 
#### Generative Pattern Art: 


   <img style="float:center;" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment3/Screen%20Shot%202022-02-17%20at%205.54.17%20PM.png" alt="Shot-1" width="300" />         <img style="float:center;"   src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment3/Screen%20Shot%202022-02-17%20at%205.55.36%20PM.png" alt="Shot-2" width="300"  />  

Since it's a generative art piece, I would recommend going to the p5.js link and enjoying the wane and wax of the bubbles, the way their pop in and then shrik and fluff up again, i.e smooth change in their sizes.

#### Code Snippets

The bubble class that controls and creates the bubble objects

```````````````````````````````````````````````
//class for bubbles
class Bubble {
  //default constructor
  constructor() {
    this.x=0;
    this.y=0;
    this.c=0;
    this.s=0;
  }
  //non default constructor
  constructor1(xPos, yPos, size, color) {
    this.x = xPos;
    this.y = yPos;
    this.c = color;
    this.s = size;
  }

  drawBubble(index) {
    let x = random(width);
    let y = random(height);
    let sc = random(1, 3);
    //using sine instead of random to create a smooth wave pattern in the float
    //map was used to make the size transformation,more smooth, so I tried some values and mapped the sine out of -1 and 1 to a range of 0.5 and 1.3 because it looked the nicest. :-)
    let m = map(sin(theta + (TWO_PI / 50) * index), -1, 1, 0.5, 1.3);
    //let m=sin(theta + (TWO_PI / 50) * index);
    let p = random(20, 50) * m;
    push();
    noStroke();
    scale(sc);
    //translate(50-index*3, 50+index);
    translate(x, y);
    let ellipseColor = color(random(1, 200), random(50, 100), random(100, 255));
    //let ellipseColor = color(235,137,204);
    ellipseColor.setAlpha(180);
    fill(ellipseColor);
    move_y1 = -time * height + height;
    ellipse(0, move_y1, p, p);
    move_y2 = -time * height - 10;
    ellipse(0, move_y2, p, p);
    move_y3 = -time * height * 2;
    ellipse(0, move_y3, p - 20, p - 20);
    pop();
  }
}
```````````````````````````````````````````````

#### Encountered Problems

I wanted to use the sine curve for the boundary of my headspace, and to also give off a structure of hair, but was not able to coordinate the translate function to the sine curve to get a diagonal hair structure or diagonally moving sine wave, so, used a line instead. I would work to incorporate trigonometric curves and different equations of curves in my future assignments


#### Reference
Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)

Mapping reference: [2.5: The map() Function](https://www.youtube.com/watch?v=nicMAoW6u1g)



