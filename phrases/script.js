function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const phrases = [
  "This house is beautiful",
  "It's raining cats and dogs",
  "Kill two birds with one stone",
  "My name is Robert",
  "This book is very interesting",
];
const dropField = document.getElementById("words");
const checkButton = document.getElementById("check");
const cardsField = document.getElementById("cards");

const voices = speechSynthesis.getVoices();

let phrase;
let rand;
function start() {
  msg.innerHTML = "";
  dropField.innerHTML = "";
  cardsField.innerHTML = "";

  do {
    rand = Math.floor(Math.random() * phrases.length);
  } while (rand == phrases.indexOf(phrase));
  phrase = phrases[rand];

  let parts = phrase.split(" ");
  shuffle(parts);
  for (let i = 0; i < parts.length; i++) {
    let el = document.createElement("div");
    el.id = `drag${i + 1}`;
    el.classList.add("card");
    el.draggable = "true";
    el.addEventListener("dragstart", function () {
      drag(event);
    });
    el.innerHTML = parts[i];
    cardsField.append(el);
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.innerHTML);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.innerHTML += data + " ";
}

function check() {
  let inp = dropField.innerHTML.trim();
  if (inp == phrase) {
    msg.innerHTML = "correct";
    speak(inp);
    let t = setTimeout(start, 500);
  } else {
    msg.innerHTML = "incorrect";
    console.log("incorrect", phrase, "inp:", inp);
    dropField.innerHTML = "";
  }
}

function speak(text) {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;

  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
  let selectedVoice = "Google UK English Female";
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      msg.voice = voices[i];
      break;
    }
  }
  window.speechSynthesis.speak(msg);
}
window.onload = function () {
  checkButton.addEventListener("click", check);
  start();
};
