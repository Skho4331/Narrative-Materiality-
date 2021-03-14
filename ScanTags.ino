#include <SoftwareSerial.h>
SoftwareSerial mySerial(10, 1);
char newTag;
void setup(){
  mySerial.begin(9600); // Setting the baud rate of Software Serial Library
  Serial.begin(9600);  //Setting the baud rate of Serial Monitor
 }
void loop(){
 if(mySerial.available()>0){
  newTag = mySerial.read();
  Serial.print(newTag);
  }
}
