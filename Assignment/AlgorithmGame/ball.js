//Ball Class

class Ball {
  //non default constructor
  constructor(xPos, yPos, diameter, color, value, pos) {
    this.x = xPos;
    this.y = yPos;
    this.c = color;
    this.d = diameter;
    this.value = int(value);
    this.pos = pos;
  }

  drawBall() {
    // push();
    noStroke();
    fill(this.c);
    circle(this.x, this.y, this.d);
    // pop();
    textSize(14);
    fill("black");
    //i+1 so we get the numbers of the ball not start from 0
    text(this.value, this.x, this.y);
  }

  updateBallPos(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
  }
}
