                                         Question-1

The p5.js skectch for the that: [Question1](https://editor.p5js.org/maishahoq/sketches/TpR_S1Ane)


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
