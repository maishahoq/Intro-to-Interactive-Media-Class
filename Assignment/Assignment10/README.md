



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

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment10/maestro.jpg" width="500"  />  

The cups cover the photoresistors, and so no tone is produced. But when the cups are taken up, based on the distance between the cup and the photoresistor, the pitch of the tone from that specific resistor changes.
6 photoresistors control 6 differnt notes in the instrument, A to F, with the pitches ranging from 1 to 7, hence giving out 7 different pitches at 7 different distances of the cup from the photo resistor. 

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/Assignment10/maestro.jpg" width="500"  />  

So, if we want to print SOS, we will need 3 short blinks, 3 long blinks and then 3 short blinks

Link of the Functioning Morse Code part:    [Functioning Morse Code Generator](https://youtu.be/xYmKd7QCoA0)

#### Code Snippets

Main Part of the code
```````````````````````````````````````````````



```````````````````````````````````````````````

#### Encountered Problems

1. Arduino Software is ot working: Error message shown: 

Problem uploading to board.  See https://support.arduino.cc/hc/en-us/sections/360003198300 for suggestions.
avrdude: stk500_recv(): programmer is not responding[Probably it is a device specific roblem for it appears once and then goes away. Normally goes away when I reset and change the ports from the tool option]

2. The Red LED should light up as ussual using analogue signal when the thermal sensor detects temp more than 71 degrees F, but doesn't.


#### Reference

