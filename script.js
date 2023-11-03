// Define variables
const title = listTitle[iRandom(listTitle)];
const colors = ["#3DC39B", "#928CF8", "#FCC526", "#FE74A6", "#5B6DFF"];
const fonts = [
  "Poppins",
  "Bebas Neue",
  "IBM Plex Mono",
  "Lexend Mega",
  "Inter",
  "Playfair Display",
];
const fontStyles = ["normal", "italic"];
const fontWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const textTransform = ["uppercase", "lowercase", "lowercase", "capitalize"];
const words = [];
const chars = [];

// Get elements by Ids from HTML and push them into the elements array
for (let i = 1; i <= 3; i++) {
  words.push(document.getElementById(`word${i}`));
}

// Copy text when click
function copyText(id) {
  const copyText = document.getElementById(id).textContent;
  navigator.clipboard.writeText(copyText);
  alert("Hex " + copyText + " copied");
}

function addChar(text, newId, idContainer) {
  const newSpan = document.createElement("span");
  newSpan.className = "text-req-black text-7xl md:text-8xl lg:text-9xl";
  newSpan.textContent = text;
  newSpan.id = `char${newId}`;
  document.querySelector(`#${idContainer}`).appendChild(newSpan);
}

function generateTitle() {
  titleArr = title.split(" ");
  const firstTitle = titleArr[0].split("");
  const lastTitle = titleArr[1].split("");
  const totalLenght = firstTitle.length + lastTitle.length;

  firstTitle.forEach((char, i) => {
    addChar(char, i + 1, "first-title");
  });
  lastTitle.forEach((char, i) => {
    addChar(char, i + 1 + firstTitle.length, "highlighter");
  });
  for (let i = 1; i <= totalLenght; i++) {
    chars.push(document.getElementById(`char${i}`));
  }
}

// Function to generate a random index from an array
function iRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate a random value within a range
function timerRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to set font styles randomly
function setFontStyles(element) {
  element.style.fontFamily = fonts[iRandom(fonts)];
  element.style.fontStyle = fontStyles[iRandom(fontStyles)];
  element.style.fontWeight = fontWeight[iRandom(fontWeight)];
  element.style.textTransform = textTransform[iRandom(textTransform)];
}

// Function to change styles with random timers
function changeStyles(elements, min, max) {
  elements.forEach((element) => {
    setFontStyles(element);
    setInterval(() => setFontStyles(element), timerRandom(min, max));
  });
}

// Function to change background color randomly
function changeColor(idName, setTime) {
  const highlight = document.getElementById(idName);
  setInterval(
    () => (highlight.style.backgroundColor = colors[iRandom(colors)]),
    setTime,
  );
  highlight.style.backgroundColor = colors[iRandom(colors)];
}

// Initialize everything
function initialize() {
  generateTitle();
  changeStyles(chars, 5000, 30000);
  changeStyles(words, 5000, 30000);
  changeColor("highlighter", 5000);
  changeColor("projectHeading", 60000);
  changeColor("projectColor1", 60000);
  changeColor("projectColor2", 60000);
  changeColor("projectColor3", 60000);
  changeColor("projectColor4", 60000);
}

// Call initialize when the window has loaded
window.onload = initialize;
