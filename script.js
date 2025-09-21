const word = "apple"; // загаданное слово

function checkWord() {
  const guess = document.getElementById("guess").value.toLowerCase();
  let result = "";

  if (guess.length !== 5) {
    alert("Слово должно быть из 5 букв!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    if (guess[i] === word[i]) {
      result += "🟩";
    } else if (word.includes(guess[i])) {
      result += "🟨";
    } else {
      result += "⬛";
    }
  }

  document.getElementById("result").innerText += guess + " " + result + "\n";

  if (guess === word) {
    alert("🎉 Ты угадал слово!");
  }
}
