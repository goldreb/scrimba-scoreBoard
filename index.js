let homeScore = document.querySelector("#homeScore");
let guestScore = document.querySelector("#guestScore");
let reset = document.querySelector(".reset");

let hScore = 0;
let gScore = 0;

function addOneHome() {
  hScore += 1;
  homeScore.textContent = hScore;
}

function addTwoHome() {
  hScore += 2;
  homeScore.textContent = hScore;
}

function addThreeHome() {
  hScore += 3;
  homeScore.textContent = hScore;
}

function addOneGuest() {
  gScore += 1;
  guestScore.textContent = gScore;
}

function addTwoGuest() {
  gScore += 2;
  guestScore.textContent = gScore;
}

function addThreeGuest() {
  gScore += 3;
  guestScore.textContent = gScore;
}

reset.addEventListener("click", resetScore);

function resetScore() {
  hScore *= 0;
  gScore *= 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
