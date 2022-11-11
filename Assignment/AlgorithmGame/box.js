class Box {
  //non default constructor
  constructor(xPos, yPos, side, color) {
    this.x = xPos;
    this.y = yPos;
    this.c = color;
    this.s = side;
    this.Cor1={x:xPos-(side/2), y:yPos-(side/2) };
    this.Cor2={ x:xPos+(side/2), y:yPos-(side/2)};
    this.Cor3={x:xPos-(side/2), y:yPos+(side/2) };
    this.Cor4={x:xPos+(side/2), y:yPos+(side/2) };
  }
 
  
  drawBox() {
    // push();
    stroke(this.c);
    noFill();
    rect(this.x, this.y, this.s);
  }
}
