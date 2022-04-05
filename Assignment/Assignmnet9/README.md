



                                                       Creative Digital-Analogue Morse-Code
                                                  
                                                  
The youtube link to the switch: [Creative Switch](https://www.youtube.com/watch?v=3vkCj-aCHm0&list=PLTmPfB4_-Sg4foF8PGk_3zhtN3fRoP_Z-&index=8)

***     

#### Inspiration 

When the small led bulb lit up for the first time, my brain went back to the 'Eureka' moment with a flashing light bulb that's used in cartoons. 
And the original 'Eureka' moment was a discovery, so I used a book, when opened, the light of knowledge lights and when closed, the bulb dims down to a stop.

#### Stages of Progress: 


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment8/20220328_092727.jpg " alt="Sqcorner" width="500"  />  



<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment8/20220328_092738_001.jpg" alt="Sqcorner" width="500"  />  


#### Code Snippets


Basic Morse Code With Digital Signals:
We are tryng to print SOS
```````````````````````````````````````````````

int LED = 6;
int shortTime = 300;
int longTime = 900;

void setup () {
  // This sets the pin 6 in output mode
  pinMode(LED, OUTPUT);
  
}

void loop () {
  // This is the letter S
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




#### Reference
