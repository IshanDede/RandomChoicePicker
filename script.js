const choices = document.querySelector(".choices");
const input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  createInput(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createInput(value) {
  //this value is not the same as e.target.value. This is a parameter//
  const values = value
    .split(",")
    .map((substring) => substring.trim())
    .filter((substring) => substring !== "");

  choices.innerHTML = "";

  values.forEach((element) => {
    const choice = document.createElement("span");
    choice.classList.add("choice");
    choice.innerText = element;
    choices.appendChild(choice);
  });

  console.log(values);
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();
    addHighlight(randomChoice);

    setTimeout(() => {
      removeHighlight(randomChoice);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const decision = pickRandomChoice();
      addHighlight(decision);
    }, 100);
  }, times * 100);
}

function pickRandomChoice() {
  const allChoices = document.querySelectorAll(".choice");
  return allChoices[Math.floor(Math.random() * allChoices.length)];
}

function addHighlight(choice) {
  choice.classList.add("select");
}

function removeHighlight(choice) {
  choice.classList.remove("select");
}
