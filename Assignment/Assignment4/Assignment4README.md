



                                                       Word Animation
                                                  
                                                  
The p5.js link to the art: [Word Animation](https://editor.p5js.org/maishahoq/sketches/uiitY2g2q)

***     

#### Inspiration 

I wanted to create a word animation inspired from my Week-2 design, but instead of using shapes, I wanted to use alphabets seperately.

#### Generative Word Art: 

The screen recording of the generative art : [Word Animation Video Recording](https://youtu.be/dzvVg-5OFR8)
   
#### Code Snippets

This specific part of the code controls the "YOU" animation

```````````````````````````````````````````````
  else 
  {
    background("#cb0606");
    frameRate(60);
    textFont(myfontB);
   
      text("Y", x, y);
      text("U", x1, y1);
      text("O", x2, y2);
      //for Y to move diagonally
  if (y < 210 && y1 < 210 && y2 > 200)
  {    
      y = x + 50;
      x++;
      
      y1 = -x1 + width+50;
      x1--;
      
      y2--;
    }
    else
    {
      x=150;y=200;y1=200;y2=200;
      x1=230;
      
    }
    
  }

```````````````````````````````````````````````


This function controls the twirling of the alphabets
```````````````````````````````````````````````
function alphabetTwirl() {
  textFont(myfont);
  frameRate(10);
  translate(200, 200);
  //prints all the alphabets in random positions
  for (let i = 0; i < alphabet.length; i++) {
    rotate(angle);
    textSize(20 + i * 2);
    text(alphabet[i], 20 + i * 5, 20 + i);
    angle = angle + 0.1;
  }

```````````````````````````````````````````````


#### Encountered Problems

I wanted to implement disappear effect on the apbhabets, which I couln't.
Also, the screens' shift from one to another was not smooth, and I tried hard to make the tansitions smoother, but to no avail.


#### Reference
Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)





            
