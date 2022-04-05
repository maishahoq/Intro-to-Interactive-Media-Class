



                                                       Creative Digital-Analogue Morse-Code
                                                  
                                                  
The youtube link to the switch: [Creative Switch]()

***     

#### Inspiration 



#### Description: 

I wanted to create a morse code generator using digital input-output where the power supply of the breadboard is controlled using a switch.
Then there is a thermal sensor, which is used as an analoge input to start the LED that will print HELP and will keep doing it as long as the thermal sensor has a vlue higher than 50 degrees Celcius.


Morse Code :

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignmnet9/Screen%20Shot%202022-04-05%20at%2012.37.55%20PM.png" alt="Sqcorner" width="500"  />  

So, if we want to print SOS, we will need 3 short blinks, 3 long blinks and then 3 short blinks
#### Code Snippets


Basic Hard Coded Morse Code With Digital Signals:
We are tryng to print SOS
```````````````````````````````````````````````

int LED = 6;
int shortTime = 400;
int longTime = 1000;

void setup () {
  // This sets the pin 6 in output mode
  pinMode(LED, OUTPUT);
  
}

void loop () {
  //This is the letter S
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);

  // This delay is to separate the letters
  delay(longTime);

  // This is the letter O
  switchLED(longTime);
  switchLED(longTime);
  switchLED(longTime);

  delay(longTime);

  // This is the letter S
  switchLED(shortTime);
  switchLED(shortTime);
  switchLED(shortTime);

  delay(longTime);
  delay(longTime);
  delay(longTime);
}

void switchLED (int timing) {
  // This sends high voltage to the specified pin
  digitalWrite(LED, HIGH);
  // This delays the next line of code by "timing"
  // This is so the user can change how long the LED is "on" for
  delay(timing);
  // This sends low voltage to the specified pin
  digitalWrite(LED, LOW);
  // This delays the next line of code by "timing"
  // I made this one short because we don't want long timing for when
  // the LED is "off"
  delay(shortTime);
}

```````````````````````````````````````````````


#### Encountered Problems

1. Arduino Software is ot working: Error message shown: 

Problem uploading to board.  See https://support.arduino.cc/hc/en-us/sections/360003198300 for suggestions.
avrdude: stk500_recv(): programmer is not responding


#### Reference
1. https://create.arduino.cc/projecthub/Jalal_Mansoori/morse-code-communication-using-arduino-f339c0
2. 
