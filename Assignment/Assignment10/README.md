



                                              CupTune [A Musical Instrument Using Potentiometer]
                                                  
                                                  
The youtube link to the switch: [CupTune]()

***     

#### Inspiration 
We wanted to create an instrument that will give agency to the user to create their own tune, based on their own preferece. Our inspiration was a maestro: 


<img style="float:middle;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment10/maestro.jpg" width="400"  />  


#### Description: 

Main Materials: 

1. 6 photoresistors, which capture the intensity of light.
2. 1 Arduino Uno
3. 3 Breadboards for base connection
4. 6 cups to control the amount of light the resistors get access to

The image of the instrument:

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment10/maestro.jpg" width="400"  />  

The cups cover the photoresistors, and so no tone is produced. But when the cups are taken up, based on the distance between the cup and the photoresistor, the pitch of the tone from that specific resistor changes.
6 photoresistors control 6 differnt notes in the instrument, A to F, with the pitches ranging from 1 to 7, hence giving out 7 different pitches at 7 different distances of the cup from the photo resistor. 

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment10/maestro.jpg" width="400"  />  



#### Code Snippets

The algorithm follows like this: The code calculates the photoresistor analogue output, and the resistor that has the highest output at a given time, note and pitch for that resistor for that specific distnace is played by the speaker.
The function noTone() at the end controls the no tone functionality when all the resistors are covered properly, and there's no light at all near the photo resistors

Main Part of the code
```````````````````````````````````````````````

  if (resVal1 > resVal2 && resVal1 > resVal3 && resVal1 > resVal4 && resVal1 > resVal5 && resVal1 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal1 > (150 + counterA) && resVal1 < 250 + counterA) {

        tone(speaker, A[thisNote], 5);
        Serial.println("first");
      }
      counterA = counterA + 100;

    }
  } else if (resVal2 > resVal1 && resVal2 > resVal3 && resVal2 > resVal4 && resVal2 > resVal5 && resVal2 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal2 > (150 + counterB) && resVal2 < 250 + counterB) {

        tone(speaker, B[thisNote], 5);
        Serial.println("2nd");
      }
      counterB = counterB + 100;

    }

  } else if (resVal3 > resVal1 && resVal3 > resVal2 && resVal3 > resVal4 && resVal3 > resVal5 && resVal3 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal3 > (150 + counterC) && resVal3 < 250 + counterC) {

        tone(speaker, C[thisNote], 5);
        Serial.println("3rd");
      }
      counterC = counterC + 100;

    }

  } else if (resVal4 > resVal1 && resVal4 > resVal2 && resVal4 > resVal3 && resVal4 > resVal5 && resVal4 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal4 > (150 + counterD) && resVal4 < 250 + counterD) {

        tone(speaker, D[thisNote], 5);
        Serial.println("4th");
      }
      counterD = counterD + 100;

    }

  } else if (resVal5 > resVal1 && resVal5 > resVal2 && resVal5 > resVal3 && resVal5 > resVal4 && resVal5 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal5 > (150 + counterE) && resVal5 < 250 + counterE) {

        tone(speaker, E[thisNote], 5);
        Serial.println("5th");
      }
      counterE = counterE + 100;

    }

  } else if (resVal6 > resVal1 && resVal6 > resVal2 && resVal6 > resVal3 && resVal6 > resVal4 && resVal6 > resVal5) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal6 > (150 + counterF) && resVal6 < 250 + counterF) {

        tone(speaker, F[thisNote], 5);
        Serial.println("6th");
      }
      counterF = counterF + 100;

    }

  } else {
    noTone(speaker);
    //    Serial.println("hehe");
    Serial.println(resVal1);
  }



```````````````````````````````````````````````

#### Encountered Problems

1. Arduino Software is ot working: Error message shown: 

Problem uploading to board.  See https://support.arduino.cc/hc/en-us/sections/360003198300 for suggestions.
avrdude: stk500_recv(): programmer is not responding[Probably it is a device specific roblem for it appears once and then goes away. Normally goes away when I reset and change the ports from the tool option]

2. We needed 6 speakers to create a proper melody combination, since our resistor needed to output at the same time for different levels.


#### Reference

