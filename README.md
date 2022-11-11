

1. [Algorithm Game](https://github.com/maishahoq/Intro-to-Interactive-Media-Class/tree/main/Assignment/AlgorithmGame) - JavaScript (p5.js) 
2. [Happy Panda Project](https://github.com/maishahoq/Intro-to-Interactive-Media-Class/tree/main/Assignment/FinalProject) - JavaScript (p5.js), Arduino (C++)



***     

## Project 1: Algorithms Game

   


<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/pngtree-liquid-gold-with-rough-surface-texture-png-image_4355339.jpg" alt="Inspiration" width="300"  />  <img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/GameDevelopment/Gallery/Screen%20Shot%202022-03-05%20at%2010.03.28%20AM.png" alt="Inspiration" width="300"  /> 



The p5.js link to the game: [Algorithm Game](https://editor.p5js.org/maishahoq/sketches/3w7Z017ey)




***   


         

## Project 2: Happy Panda Project




The P5JS Link: [Happy Panda Project](https://editor.p5js.org/maishahoq/sketches/2krDoMj8j)





***   




### Inspiration

<img style="float:center;"  src="https://miniso-bh.com/wp-content/uploads/2020/05/0300021151_1.jpg" alt="Inspiration" width="500"  />

We wanted to do something very meaningful for this project, something that might be a small endeavor, but something that adds meaning to the industrial products in the maret, because often times we have too many fun/cool gadgets in the market and we happen to forget an important part of our health that needs nurturing and maintenance as well as our physical health, which is our mental health.
Bato recently had finishied a book which taked about the ways to tackle anxiety and they got us more hyped to do something on mental health, adding to the fact that it was near final season for us and we were already struggling with our mental health.









### Design Explanation

**///design concept & logo///**

- After thinking over the UI design, We decided to stick with two primary colors (warm pastel yellow (252, 238, 184) and white (255,255,255) for the clean minimalistic look. One of the important reasons for choosing from the pastel palette is because e wanted our UI to be safe for people with anxiety, because multi colored palattes trigger anxiety. We had to spend substantial time to research about this color choosing issue, because for midterm, our color palattes were not suitable to our project.


- We designed the Panda logo on iPad's Procreate app. First we made a rough sketch of the panda, and followed up with more layers to polish.

<img src="https://user-images.githubusercontent.com/90750426/168308861-ebef65c0-b7cc-474f-85bc-00bbb26b7159.jpg" width="300"> <img src="https://user-images.githubusercontent.com/90750426/168308792-2bc111a4-a91f-4930-8cfb-bc69ef901b99.png" width="300">


**///font choice///**

- We chose Helvetica Oblique and Million Dreams as our main two fonts. Since Million Dreams was the fancier one, we used that for the Logo and Menu options.
Helvetica, on the other hand, is neat and easy on the eyes, so we thought it was a good choice for directions and instructions.


<img src="https://user-images.githubusercontent.com/90750426/168308495-2f73cb99-6185-4e11-b0f6-1a0ded333e4b.png" height="200"> <img width="400" alt="directions" src="https://user-images.githubusercontent.com/90750426/168314081-c9824605-7be4-430c-b47d-bfcb6984cfa6.png"> 
<img width="300" alt="helveticaa" src="https://user-images.githubusercontent.com/90750426/168313254-84ba5da7-3f7f-473a-ac41-7e773582df8d.png">


**///design assets and shapes///**

- We designed all of our assets on Adobe XD and laid it out accordingly on the P5JS. In this process, Adobe XD's coordinate function helped us greatly in finding the right placements for the assets. For the shapes of our assets, we mainly sticked to rounded corners instead of sharper ones, which resulted in softer-looking aesthetic. 

<img src="https://user-images.githubusercontent.com/90750426/168311446-d621a384-5730-41a5-a31e-777dce24f32f.png" width="200"> <img src="https://user-images.githubusercontent.com/90750426/168311522-51c3378a-0de8-4536-a056-a2ac30f56171.png" width="200">

- For our background, we used a plain white background layered with stretch of tiles. This is a prominent design choice reminiscent of 2014 Tumblr era.

<img width="400" alt="tilee" src="https://user-images.githubusercontent.com/90750426/168315089-c017fb58-87f1-4556-bb8c-b4f05ac2da72.png">


**///additional design details///**

- We added triple heart detail on every page to complete the design. To make the hearts float and blink, we usec Framecount function.

<img src="https://user-images.githubusercontent.com/90750426/168315830-8c538cf9-2956-4675-af81-394949c35aa4.png" width="100"> <img width="363" alt="blink" src="https://user-images.githubusercontent.com/90750426/168315788-730f7905-17c5-41c6-b5fa-6f05df0ca318.png">

- Finally, we duplicated the panda on Procreate and drew a different version to make an animated one. We also created an animated gradient background on Photoshop, which loops during the meditation.

<img src="https://user-images.githubusercontent.com/90750426/168316679-52634c37-12b8-4948-b619-6d6feb9dc4c9.gif" width="200"> <img src="https://user-images.githubusercontent.com/90750426/168316892-e42dd523-90f7-4ee2-a8bf-3f7865bacadd.gif" width="200"> 











### Project Roadmap and Game Description: 

1. Get the 4 sensor data from Arduino
2. The p5.js 1st screen changes to 2nd screen after 3s of starting the program (cuz it takes sometime for the pulse sensor to start taking correct values as input) .
3. Click on Anxiety Tracker, it starts processing the data from pulse. But the data collection had started already when the program starts. This means that we give ample time for the pulse meter to stablize and start giving the p5.js correct data [decided from user testing].
4. The pulse can be seen on the screen, in the yellow circular part
5. It will store all the pulse values for 1 minute, and dislay you the average pulse rate.
6. Based on the difference of the 1st and last pulse of every 10 sec interval, and if the average of these differences is greater than 30, you are very anxious; if less than 30, you are not anxious.
7. If you are anxious, takes you to Non-normal category Screen:
     

     a. Breathing Meditation[Download Audio Files From Online]
     
     b. Guided Meditation [Download Audio Files From Online] 
     
     c. Affirmation [Download Audio Files From Online]
     
8. Normal Category Screen: Always end the cycle with a hug from panda. When you hug panda, hug sensor activates and the still panda image on the screen is replaced by a panda gif which is hugging you.




   + __Screen 1:__  
   
   <img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/Screen1.png">


   
   + __Screen 2:__  
   
  <img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/Screen2.png">


   
   
   + __Screen 3:__  
   
 <img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/Screen3.png">
   
   
   
   
   + __Screen 4:__  
   
 <img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/SCreen4.png">


   
   
   + __Screen 5:__  
   
<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/Screen5.png">

   
  
  
  

### Project Growth Phases:


<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220512_121226.jpg">


<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220512_121240.jpg">


<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220512_103312.jpg">


**///stitching process///**

to learn how to sitch, we followed [GitHub Pages](https://www.youtube.com/watch?v=K3fFHV6r9Ow) from Youtube. This video demonstrates an invisible stitiching method known as "ladder sititch." This was particularly helpful for beginners like us. After putting all the sensors inside, we made small cuts on the tips of the Panda's legs and hands. This way, we could get more accurate inputs from our sensors.


**///Bag Pack Casing///**

We also made a bag pack for the panda, which e believe is the smartest part of our project, w ehave the bag pack designed in a way to allow all the wires that need to be connected to our laptop can be taken in or out through the small whole at the bottom, and the bag hides the arduino casing and the pulse meter connection which we had borrowed from the librrary, s could not solder into anything since we had to return it.

<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220512_103325.jpg">




<img width="400" alt="tilee" src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220513_191117.jpg">








### Code Snippets:

````````````````````````````````````````````````````````````````````````````````````````````````````````````````

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

````````````````````````````````````````````````````````````````````````````````````````````````````````````````




+ Best Part of Code:

         + Game Modification:   The user can change the change just by changing the values in some of the variables, this will modify the whole code without it breaking anywhere. 
         



### Encountered Problems

__1__. Since our project was a toy, we couldn't have our wiring, the soldered breadboard or the arduino hanging out or outside the panda, which was the biggest problem. So we made the panda itself our casing. The sensors stopped working inside the body of the panda, we assumed it was because of the cotton from the panda. [Solution:] we had to resolder our wires and stick the sensors outside so that the cotton mass didn't stop from taking values on the sensors.

__2__. Positioning the sensors, we had to do a lot of trial and errors and finally we were able to figure out where to put certain sensors for the sensors to get activated with touch

__3__. There was only a few force sensors left in the IM lab and the IM Lab ran out of force sensors, so we couldn't incorporate a sensor for the "affirmation" section of our project

__4__. The pulse sensor output voltage values from 0,1023, which was a problem because we needed the accurate pulse value to be mapped to these voltage values for pulse tracking. Initially, following a medical jounal we mapped the voltage value to human bpm values, but we were getting erratic values sometimes because of that, for which we  again had to use if conditions and filter out values of certain range, which esulted in inaccurancy sometimes. [Solution: ] A few days before the presentation, we found an amazing arduino library that uses thresholds to currently map voltage value to human bpm values. This saved us a lot of lines of code in our arduino, and now our arduino code is much simpler and organized for using the library. The library is called "PulseSensorPlayground ".

__5__. Our projects handles a lot of big sized and longer audio files, which causes our project to lag sometimes. We resized the files to smaller files, still it causes lag in the animation sometimes, so we have to figure this out.


### Future Additions

__1__.  Awareness About Pandas’ Extinction: Ending Part or Panda at the bottom needs animation; If you click on this panda, we will be taken to a panda awareness screen.

__2__.  We want to add some speech recognition to this interactive experience, where you can give speech commands. 

__3__.  Implementing Handshake for smooth transmission of data

__4__.  Daily Mood journal as another option if people ddo not want to use Anxiety Tracker

__5__.  Make a mobile application out of this theme to support our friends during finals and stress times


### Reference



Website to used for colors: [Color Picker](https://htmlcolorcodes.com/color-picker/)


Determining Fast Heart Rate: [British Heart Foundation](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/ask-the-experts/pulse-rate)

Create Button using Image: [createImg](https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9)



Timer: [Timer using FrameCount](https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-)



### Questions:
1. How to stop taking values from arduino?
2. How to switch between multiple inputs from arduino?
     

### Victory Picture after Interactive Media Showcase

<img style="float:center;"  src="https://github.com/maishahoq/Intro-to-IM/blob/main/Assignment/FinalProject/20220512_160359.jpg" alt="Inspiration" width="500"  /> 
