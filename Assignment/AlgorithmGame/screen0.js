

/*************************************************************/
//class section starts

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
/***************************************************************/

