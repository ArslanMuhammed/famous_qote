// ----- Creation of variables and elements ----- //
let container = document.createElement("div");
document.body.append(container);
container.innerHTML =
  '<p id="citation"></p>' +
  '<div class="horizontal-line"></div>' +
  '<p id="author"></p>';

let citation = document.querySelector("#citation"),
  horizontalLine = document.querySelector(".horizontal-line"),
  author = document.querySelector("#author"),
  last = 0,
  randomNumber = 0;

let btn = document.createElement("button");
btn.textContent = "Nouvelle citation";
document.body.append(btn);

// Table of citations
let citations = [
  [
    "La vie est un mystère qu'il faut vivre, est non un problème à résoudre",
    "Ghandi",
  ],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
  [
    "A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.",
    "Mark Twain",
  ],
  ["La mélancolie c'est le bohneur d'être triste", "Victor Hugo"],
];

// -----            Style           ----- //
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "#2980b9";

// --- container
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";

container.style.width = "60%";
container.style.height = "50%";
container.style.borderRadius = "10px";

container.style.background = "white";
container.style.boxShadow = "0px 5px 10px rgb(0, 0, 0, 0.4)";

// --- p
citation.style.display = "block";
citation.style.color = "black";
citation.style.textAlign = "center";
citation.style.margin = "0";

// --- BTN
btn.style.cursor = "pointer";
btn.style.marginTop = "10px";
btn.style.padding = "5px 10%";
btn.style.border = "none";
btn.style.boxShadow = "0px 5px 10px rgb(0, 0, 0, 0.2)";

// ---horizontal line
horizontalLine.style.margin = "10px 0";
horizontalLine.style.width = "20%";
horizontalLine.style.height = "5px";
horizontalLine.style.borderRadius = "10px";
horizontalLine.style.background = "#2980b9";

// --- Author
author.style.margin = "0";

function generatRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// --- click event
btn.addEventListener("click", () => {
  do {
    randomNumber = generatRandom(citations.length);
  } while (randomNumber == last);

  citation.textContent = citations[randomNumber][0];
  author.textContent = citations[randomNumber][1];
  last = randomNumber;
  console.log(randomNumber);
});
