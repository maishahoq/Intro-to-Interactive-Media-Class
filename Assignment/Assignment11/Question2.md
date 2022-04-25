                                           
                                            Question-2
                                            
The p5.js skectch for the that: [Question2](https://editor.p5js.org/maishahoq/sketches/A_x8fCK0K)

The youtube link: [Controlling LED Brightness from p5]()


Arduino Code:

``````````````````````````````````````````````

void setup() {
  Serial.begin(9600);             // initialize serial communication
  pinMode(ledPin, OUTPUT);        // initialize the LED pin as an output
}
 
void loop() {
  if (Serial.available() > 0) { // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    if (incomingByte == 'H') {    // if it's a capital H (ASCII 72),
      digitalWrite(ledPin, HIGH); // turn on the LED
      // if you're using a speaker instead of an LED, uncomment line below  and comment out the previous line:
      //  tone(5, 440);           // play middle A on pin 5
    }
    if (incomingByte == 'L') {    // if it's an L (ASCII 76)
      digitalWrite(ledPin, LOW);  // turn off the LED
      // if you're using a speaker instead of an LED, uncomment line below  and comment out the previous line:
      // noTone(5);
    }
  }
}
````````````````````````````````````````````````



p5.js edits to the p5.serial controller code:


````````````````````````````````````````````````
function keyPressed() {
  if (key ==='H' || key ==='L') { // if the user presses H or L
    serial.write(key);              // send it out the serial port
  }
}



function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 // Polling method
 ellipse(50,50,80);
 if (serial.available() > 0) {
  //let data = serial.read();
  ellipse(50,50,80);
 }
}

````````````````````````````````````````````````
                         
