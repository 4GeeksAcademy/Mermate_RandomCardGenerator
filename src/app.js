/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♦", "♥", "♠", "♣"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

window.onload = function() {
  getRandomCard();

  setInterval(window.onload, 5000);
};

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.getElementById("topSuit").innerHTML = randomSuit;
  document.getElementById("cardNumber").innerHTML = randomNumber;
  document.getElementById("bottomSuit").innerHTML = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector("#topSuit").style.color = "red";
    document.querySelector("#bottomSuit").style.color = "red";
  } else {
    document.querySelector("#topSuit").style.color = "black";
    document.querySelector("#bottomSuit").style.color = "black";
  }

  return randomSuit + randomSuit + randomNumber;
}

const refreshButton = document.getElementById("refresh_Button");

refreshButton.addEventListener("click", function() {
  getRandomCard();
});

function changeCardDimensions() {
  document.getElementById("card").style.width =
    document.getElementById("width").value + "px";

  document.getElementById("card").style.height =
    document.getElementById("height").value + "px";
}

const ChangeSize = document.getElementById("Change_Card_Size");

ChangeSize.addEventListener("click", function() {
  changeCardDimensions();
});
