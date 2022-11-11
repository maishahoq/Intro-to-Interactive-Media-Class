
/*  
  ----------------What This Sketch is About------------------------------------------
         Maisha and Bato's HAPPY PANDA Project
  --------------------------------------------------------------------*/

#define USE_ARDUINO_INTERRUPTS true    // Set-up low-level interrupts for most acurate BPM math.
#include <PulseSensorPlayground.h>     // Includes the PulseSensorPlayground Library.   

//  Variables
const int PulseWire = A0;       // PulseSensor PURPLE WIRE connected to ANALOG PIN 0
const int ForceWirea2 = A2;     // ForceSensor PURPLE WIRE connected to ANALOG PIN 2
const int ForceWirea3 = A3;      // ForceSensor PURPLE WIRE connected to ANALOG PIN 3
const int ForceWirea4 = A5;      // ForceSensor PURPLE WIRE connected to ANALOG PIN 4
const int LED13 = 13;          // The on-board Arduino LED, close to PIN 13.
int Threshold = 550;           // Determine which Signal to "count as a beat" and which to ignore.
// Use the "Gettting Started Project" to fine-tune Threshold Value beyond default setting.
// Otherwise leave the default "550" value.

PulseSensorPlayground pulseSensor;  // Creates an instance of the PulseSensorPlayground object called "pulseSensor"


void setup() {

  Serial.begin(9600);          // For Serial Monitor
  // Configure the PulseSensor object, by assigning our variables to it.
  pulseSensor.analogInput(PulseWire);
  pulseSensor.blinkOnPulse(LED13);       //auto-magically blink Arduino's LED with heartbeat.
  pulseSensor.setThreshold(Threshold);

  // Double-check the "pulseSensor" object was created and "began" seeing a signal.
  if (pulseSensor.begin()) {
    Serial.println("We created a pulseSensor Object !");  //This prints one time at Arduino power-up,  or on Arduino reset.
  }

}



void loop() {

  int myBPM = pulseSensor.getBeatsPerMinute();  // Calls function on our pulseSensor object that returns BPM as an "int".

    // "myBPM" hold this BPM value now.

     if (pulseSensor.sawStartOfBeat()) {            // Constantly test to see if "a beat happened".
      Serial.print(myBPM);                        // Print the value inside of myBPM.
      Serial.print(",");
    }
    else
    {
      //if there's no heartbeat, we still get a 0 as an output so that the p5.js can have the 1st data as pulse and store it in the pulse arr.
      Serial.print(0);
      Serial.print(",");

    }
    //read the first force sensor:
    int sensorValue = analogRead(ForceWirea2);
    // print the results:
    Serial.print(sensorValue);
    Serial.print(",");

    // read the second force sensor:
    sensorValue = analogRead(ForceWirea3);
    // print the results:
    Serial.print(sensorValue);
    Serial.print(",");

    // read the third force sensor:
    sensorValue = analogRead(ForceWirea4);
    // print the results:
    Serial.println(sensorValue);

    delay(1000);                    // considered best practice in a simple sketch.

//  }
}
