/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* Array who */
let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "My cat",
  "The chicken",
  "The lizard",
  "The bat"
];

/* Array action */
let action = [
  "ate",
  "peed",
  "crushed",
  "broke",
  "scratches",
  "landed on",
  "appeared",
  "hit"
];

/* Array what */
let what = [
  "my homework",
  "my phone",
  "the car",
  "the motorcycle",
  "my clothes",
  "the table",
  "in the yard of my house",
  "my bedroom window"
];

/* Array when */
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "when it was eating",
  "when I was doing exercises"
];

/* Function that generates a random integer within a specific range */
function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

/* Function that takes an array as input and returns a random element from that array */
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

/* This code will be executed every time the entire web page has loaded completely */
window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
