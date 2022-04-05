



                                                       Secret Digital-Analogue Morse-Code Generator
                                                  
                                                  
The youtube link to the switch: [Secret Morse-Code Generator](https://youtu.be/HdvdapxZvAI)

***     

#### Inspiration 



#### Description: 

I wanted to create a morse code generator using digital input-output where the power supply of the breadboard is controlled using a switch.

Once the switch is on, the morse code generator starts after a delay of 300 millisec, so that the user doesnot miss out on any of the signals. 

Then there is a thermal sensor, which is used as an analoge input for the disguise of the generator. When we detect suspicion or foes nearby, without giving it aaway, as in switching the power supply off, we simply place a finger on the thermal sensor, the mose code generating LED stops functioning and the Yello analogue moderated LED lits up, to fake the project as a general LED managing project. Using the serial monitor, we found that if I place my finger on the thermal sensor, the least temperature in Fahrenheits is 71 degrees.

Morse Code :

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignmnet9/Screen%20Shot%202022-04-05%20at%2012.37.55%20PM.png" alt="Sqcorner" width="500"  />  

So, if we want to print SOS, we will need 3 short blinks, 3 long blinks and then 3 short blinks

Link of the Functioning Morse Code part:    [Functioning Morse Code Generator](https://youtu.be/xYmKd7QCoA0)

#### Code Snippets

Main Part of the code
```````````````````````````````````````````````
// about this circuit
// LED in connected to PIN 7 -> controlled by digitalWrite
// SWITCH is connected to PIN 3 -> controlled by digitalRead

const int LED_PIN = 7;
const int LED_PINYellow = 5;
const int SWITCH_PIN = 3;
//for analogue input
const int sensorPin = A0;
int state = 0; //initialise the state variable to 0


//we consider the dots as short timings
int shortTime = 200;
//we consider the hyphens as long timings
int longTime = 1200;

void setup() 
{
  // set up the pin modes
  pinMode(LED_PIN, OUTPUT);
  pinMode(SWITCH_PIN, INPUT);
  Serial.begin(9600);
 
}

void loop() 
{

  int buttonValue = digitalRead(SWITCH_PIN);
  
  //variables for the thermal sensor
  int reading = analogRead(sensorPin);
  int ledValue = reading/4;
  Serial.print(ledValue);
  float voltage = reading * 5.0;
  voltage /= 1024.0;
  float temperatureC = (voltage - 0.5) * 100 ;
  float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;

  if(buttonValue == HIGH) 
  {
    //a short delay before the morse code projection using LED blinking starts
    delay(300);

    //using the serial monitor, we found that if I place my finger on the thermal sensor, the least temperature in Fahrenheits is 71 degrees.
    if(temperatureF<71)
    {
      morseGen();
    }
    else
    {
      
      analogWrite(LED_PIN, ledValue);
      analogWrite(LED_PINYellow, ledValue);
      
    }
    
  } 
  else 
  {
    digitalWrite(LED_PIN, LOW);
    analogWrite(LED_PINYellow, 0);
  }
 
  
  Serial.print(voltage); Serial.print(" volts  -  ");
  Serial.print(temperatureC); Serial.print(" degrees C  -  ");
  Serial.print(temperatureF); Serial.println(" degrees F");
  //delay(3000);
}

```````````````````````````````````````````````


Function to control the lighting timings using digital input:
```````````````````````````````````````````````
void switchLED (int timing) 
{
  // This sends high voltage to the specified pin
  digitalWrite(LED_PIN, HIGH);
  // This delays the next line of code by "timing"
  delay(timing);
  // This sends low voltage to the specified pin
  digitalWrite(LED_PIN, LOW);
  // This delays the next line of code by "timing"
  // I used smaller timing here so we don't have to wait long when light is low
  delay(shortTime);
}

```````````````````````````````````````````````



Basic Hard Coded Morse Code With Digital Signals:
We are tryng to print HELP
```````````````````````````````````````````````

void morseGen()
{
  // This is the letter H
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);
  
  // This is the letter E
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);

  // This is the letter L
  switchLED(shortTime);
  switchLED(longTime);
  switchLED(shortTime);
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);
  
  // This is the letter P
  switchLED(shortTime);
  switchLED(longTime);
  switchLED(longTime);
  switchLED(shortTime);
  

  // This delay is to separate the letters
  delay(longTime);
  delay(longTime);
  delay(longTime);
  delay(longTime);

}


```````````````````````````````````````````````



The complete code:
```````````````````````````````````````````````
// about this circuit
// LED in connected to PIN 7 -> controlled by digitalWrite
// SWITCH is connected to PIN 3 -> controlled by digitalRead

const int LED_PIN = 7;
const int LED_PINYellow = 5;
const int SWITCH_PIN = 3;
//for analogue input
const int sensorPin = A0;
int state = 0; //initialise the state variable to 0


//we consider the dots as short timings
int shortTime = 200;
//we consider the hyphens as long timings
int longTime = 1200;

void setup() 
{
  // set up the pin modes
  pinMode(LED_PIN, OUTPUT);
  pinMode(SWITCH_PIN, INPUT);
  Serial.begin(9600);
 
}

void loop() 
{

  int buttonValue = digitalRead(SWITCH_PIN);
  
  //variables for the thermal sensor
  int reading = analogRead(sensorPin);
  int ledValue = reading/4;
  Serial.print(ledValue);
  float voltage = reading * 5.0;
  voltage /= 1024.0;
  float temperatureC = (voltage - 0.5) * 100 ;
  float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;

  if(buttonValue == HIGH) 
  {
    //a short delay before the morse code projection using LED blinking starts
    delay(300);

    //using the serial monitor, we found that if I place my finger on the thermal sensor, the least temperature in Fahrenheits is 71 degrees.
    if(temperatureF<71)
    {
      morseGen();
    }
    else
    {
      
      analogWrite(LED_PIN, ledValue);
      analogWrite(LED_PINYellow, ledValue);
      
    }
    
  } 
  else 
  {
    digitalWrite(LED_PIN, LOW);
    analogWrite(LED_PINYellow, 0);
  }
 
  
  Serial.print(voltage); Serial.print(" volts  -  ");
  Serial.print(temperatureC); Serial.print(" degrees C  -  ");
  Serial.print(temperatureF); Serial.println(" degrees F");
  //delay(3000);
}

void switchLED (int timing) 
{
  // This sends high voltage to the specified pin
  digitalWrite(LED_PIN, HIGH);
  // This delays the next line of code by "timing"
  delay(timing);
  // This sends low voltage to the specified pin
  digitalWrite(LED_PIN, LOW);
  // This delays the next line of code by "timing"
  // I used smaller timing here so we don't have to wait long when light is low
  delay(shortTime);
}

void morseGen()
{
  // This is the letter H
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);
  
  // This is the letter E
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);

  // This is the letter L
  switchLED(shortTime);
  switchLED(longTime);
  switchLED(shortTime);
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);
  
  // This is the letter P
  switchLED(shortTime);
  switchLED(longTime);
  switchLED(longTime);
  switchLED(shortTime);
  

  // This delay is to separate the letters
  delay(longTime);
  delay(longTime);
  delay(longTime);
  delay(longTime);

}


```````````````````````````````````````````````

#### Encountered Problems

1. Arduino Software is ot working: Error message shown: 

Problem uploading to board.  See https://support.arduino.cc/hc/en-us/sections/360003198300 for suggestions.
avrdude: stk500_recv(): programmer is not responding[Probably it is a device specific roblem for it appears once and then goes away. Normally goes away when I reset and change the ports from the tool option]

2. The Red LED should light up as ussual using analogue signal when the thermal sensor detects temp more than 71 degrees F, but doesn't.


#### Reference
1. For Morse Code: https://create.arduino.cc/projecthub/Jalal_Mansoori/morse-code-communication-using-arduino-f339c0
2. For thermal sensors: https://www.youtube.com/watch?v=fjVbcaKW2r0
3. Using thermal sensors: https://www.youtube.com/watch?v=-jYG-qTEjiA
