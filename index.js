function getWord() {
  location.href = "word.html";
}

function getRandomQuote() {
  const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
  document.getElementById("quote").innerHTML = quote;
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  let myColor = [r, g, b];
  if (
    myColor == [203, 46, 255] ||
    myColor == [0, 0, 0] ||
    myColor == [46, 53, 255]
  ) {
    randomColor();
  } else {
    return "rgb(" + myColor.toString() + ")";
  }
}

async function randomWord() {
  if (Math.random > 0.5) {
    return wordList[randomInteger(wordList.length)];
  } else {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const list = await response.json();
    return list[0];
  }
}

function randomFont() {
  const font = fontList[randomInteger(fontList.length)];
  return font;
}

async function displayRandomWord() {
  const word = await randomWord();
  const font = randomFont();
  const rgb = randomColor({ luminosity: "light" });

  const randomWordElement = document.getElementById("random-word");
  randomWordElement.style.fontFamily = font;
  randomWordElement.style.color = rgb;
  randomWordElement.innerHTML = word;
}

window.addEventListener("DOMContentLoaded", () => {
  const getWordButton = document.getElementById("get-word-button");

  if (getWordButton !== null) {
    getWordButton.addEventListener("click", () => {
      displayRandomWord();
    });
  }
});
