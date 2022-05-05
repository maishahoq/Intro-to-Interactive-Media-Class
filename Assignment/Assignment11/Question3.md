 
 
 
 
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
