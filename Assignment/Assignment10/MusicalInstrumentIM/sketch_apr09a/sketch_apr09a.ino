#include "pitches.h"

const int res1 = A0;
const int res2 = A1;
const int res3 = A2;
const int res4 = A3;
const int res5 = A4;
const int res6 = A5;
const int SWITCH_PIN=3;
const int speaker = 8;

int A[] = {NOTE_A5, NOTE_A2, NOTE_A3, NOTE_A4, NOTE_A5, NOTE_A6, NOTE_A7};
int B[] = {NOTE_B5, NOTE_B2, NOTE_B3, NOTE_B4, NOTE_B5, NOTE_B6, NOTE_B7};
int C[] = {NOTE_C5, NOTE_C2, NOTE_C3, NOTE_C4, NOTE_C5, NOTE_C6, NOTE_C7};
int D[] = {NOTE_D3, NOTE_C2, NOTE_C3, NOTE_C4, NOTE_C5, NOTE_C6, NOTE_C7};
int E[] = {NOTE_E5, NOTE_E2, NOTE_E3, NOTE_E4, NOTE_E5, NOTE_E6, NOTE_E7};
int F[] = {NOTE_F5, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, NOTE_B3, NOTE_C4};

//int resVal1;
//int resVal2;
//int resVal3;
//int resVal4;
//int resVal5;
//int resVal6;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(res1, INPUT);
  pinMode(res2, INPUT);
  pinMode(res3, INPUT);
  pinMode(res4, INPUT);
  pinMode(res5, INPUT);
  pinMode(res6, INPUT);
  pinMode(speaker, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  int resVal1 = analogRead(res1);
  int resVal2 = analogRead(res2);
  int resVal3 = analogRead(res3);
  int resVal4 = analogRead(res4);
  int resVal5 = analogRead(res1);
  int resVal6 = analogRead(res6);


  int counterA = 0;
  int counterB = 0;
  int counterC = 0;
  int counterD = 0;
  int counterE = 0;
  int counterF = 0;

  

  int buttonValue = digitalRead(SWITCH_PIN);  


      if (resVal1 > resVal2 && resVal1 > resVal3 && resVal1 > resVal4 && resVal1 > resVal5 && resVal1 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal1 > (150 + counterA) && resVal1 < 250 + counterA) {
          
        tone(speaker, A[thisNote], 5);
        Serial.println("first");
      }
      counterA= counterA+100;

    }
  } else if (resVal2 > resVal1 && resVal2 > resVal3 && resVal2 > resVal4 && resVal2 > resVal5 && resVal2 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal2 > (150 + counterB) && resVal2 < 250 + counterB) {

        tone(speaker, B[thisNote], 5);
        Serial.println("2nd");
      }
      counterB= counterB+100;

    }

  } else if (resVal3 > resVal1 && resVal3 > resVal2 && resVal3 > resVal4 && resVal3 > resVal5 && resVal3 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal3 > (150 + counterC) && resVal3 < 250 + counterC) {

        tone(speaker, C[thisNote], 5);
        Serial.println("3rd");
      }
      counterC= counterC+100;

    }

  } else if (resVal4 > resVal1 && resVal4 > resVal2 && resVal4 > resVal3 && resVal4 > resVal5 && resVal4 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal4 > (150 + counterD) && resVal4 < 250 + counterD) {

        tone(speaker, D[thisNote], 5);
        Serial.println("4th");
      }
      counterD= counterD+100;

    }

  } else if (resVal5 > resVal1 && resVal5 > resVal2 && resVal5 > resVal3 && resVal5 > resVal4 && resVal5 > resVal6) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal5 > (150 + counterE) && resVal5 < 250 + counterE) {

        tone(speaker, E[thisNote], 5);
        Serial.println("5th");
      }
      counterE= counterE+100;

    }

  } else if (resVal6 > resVal1 && resVal6 > resVal2 && resVal6 > resVal3 && resVal6 > resVal4 && resVal6 > resVal5) {
    for (int thisNote = 0; thisNote < 7; thisNote++)
    {
      if (resVal6 > (150 + counterF) && resVal6 < 250 + counterF) {

        tone(speaker, F[thisNote], 5);
        Serial.println("6th");
      }
      counterF= counterF+100;

    }

  } else {
    noTone(speaker);
    //    Serial.println("hehe");
    Serial.println(resVal1);
     }


}
