                                         Question-1

The p5.js skectch for the that: [Question1](https://editor.p5js.org/maishahoq/sketches/TpR_S1Ane)

The youtube link: [Moving A Digital Circle Using Arduino](https://youtu.be/nsUM_Kfx544)


Arduino Code:

``````````````````````````````````````````````

void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input pin:
  int potentiometer = analogRead(A0);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.println(mappedPot);                             
  // slight delay to stabilize the ADC:
  delay(1);                                            
}
````````````````````````````````````````````````



p5.js edits to the p5.serial controller code:


````````````````````````````````````````````````
function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }
 */
  let x=latestData;
  ellipse(x, height / 2, 100, 100);

````````````````````````````````````````````````
