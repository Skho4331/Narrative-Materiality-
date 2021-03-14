let serial;
let latestData = "waiting for data";

let storyOne;
let storyTwo;
let storyThree;
let storyFour;

function preload() {
  storyOne = loadSound('TheLittleRedHen.mp3');
  storyTwo = loadSound('TheGivingTree.mp3');
  storyThree = loadSound('WimberlyWorried.mp3');
  storyFour = loadSound('GrandmaTalking2.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.list();
  serial.open('COM7');

  serial.on('connected', serverConnected);

  serial.on('list', gotList);

  serial.on('data', gotData);

  serial.on('error', gotError);

  serial.on('open', gotOpen);

  serial.on('close', gotClose);
}

function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  latestData = currentString;
}

function draw() {
  background(255);
  if (latestData == 1) {
    playAudio1();
  } else if (latestData == 2) {
    playAudio2();
  } else if (latestData == 3) {
    playAudio3();
  } else if (latestData == 4) {
    playAudio4();
  } {

  }


}

function playAudio1() {
  if (!storyOne.isPlaying()) {
    storyOne.play();
  }
}

function playAudio2() {
  if (!storyTwo.isPlaying()) {
    storyTwo.play();
  }
}

function playAudio3() {
  if (!storyThree.isPlaying()) {
    storyThree.play();
  }
}

function playAudio4() {
  if (!storyFour.isPlaying()) {
    storyFour.play();
  }
}