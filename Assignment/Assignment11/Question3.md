 
 
 
 
 The p5.js skectch for the that: [Question3](https://editor.p5js.org/maishahoq/sketches/d3b3mAFjY)

 The p5 code:
`````````````````````````````````````````````````````````````````
 function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
  applyForce(wind);
  applyForce(gravity);
  velocity.add(acceleration);
  velocity.mult(drag);
  position.add(velocity);
  acceleration.mult(0);
  ellipse(position.x,position.y,mass,mass);
  if (position.y > height-mass/2) {
      velocity.y *= -0.9;  // A little dampening when hitting the bottom
      position.y = height-mass/2;
      serial.write('l');   // send it out the serial port
    }
  if (latestData<400){ //if the potentiometer value is less than 400, the ball goes left
    wind.x=-1;
  }
  else if (latestData>400){  //if the potentiometer value is greater than 400, the ball goes left
    wind.x=1;
  }

 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }
 */
}

function keyPressed(){
  if (key==' '){
    mass=random(15,80);
    position.y=-mass;
    velocity.mult(0);
  }
}

function applyForce(force){
  // Newton's 2nd law: F = M * A
  // or A = F / M
  let f = p5.Vector.div(force, mass);
  acceleration.add(f);
}

````````````````````````````````````````````````````````````````
 
 
 Arduino Code
 ```````````````````````````````````````````````````````
 #define LED 5
#define analoguePin0 A0
int incomingByte;     // a variable to read incoming serial data into


// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(LED, OUTPUT); // Declare the LED as an output

}

// the loop routine runs over and over again forever:
void loop() {
    if (Serial.available() > 0) { // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    if (incomingByte == 'l') {    // if it's a capital H (ASCII 72),
      digitalWrite(LED, HIGH); // turn on the LED
    }
    else
    {
      digitalWrite(LED, LOW); // turn off the LED
     }
  }
  //digitalWrite(LED, HIGH); // Turn the LED on
  // read the input on analog pin 0:
  int sensorValue = analogRead(analoguePin0);
  // print out the value you read:
  Serial.println(sensorValue);//just this will send the analogue value from arduino to p5
  //delay(1);        // delay in between reads for stability
}

```````````````````````````````````````````````````````
