let yourChoice;
let option = ["stone", "paper", "sciccor"];
let botChoice;
let touch = false;
let youWin;
function choice(a) {
  document.getElementById("botChoice").innerText = "bot: ???";
  yourChoice = a;
  botChoice = option[Math.floor(Math.random() * 3)];
  document.getElementById(
    "youChoose"
  ).innerHTML = `You choosed : ${yourChoice}`;
  touch = true;
  youWin = false;
}
function reveal() {
  let d = false;
  if (touch) {
    if (yourChoice == botChoice) {
      d = true;
    } else if (yourChoice == "sciccor" && botChoice == "paper") {
      youWin = true;
    } else if (yourChoice == "paper" && botChoice == "stone") {
      youWin = true;
    } else if (yourChoice == "stone" && botChoice == "sciccor") {
      youWin = true;
    }

    document.getElementById("botChoice").innerText = `bot : ${botChoice}`;

    if (youWin && !d) {
      document.getElementById("winMssg").innerText = "You Won!";
    } else if (d) {
      document.getElementById("winMssg").innerText = "Draw!";
    } else if (!youWin && touch) {
      document.getElementById("winMssg").innerText = "Bot Won!";
    }
  }
}
function rst(){
    window.location.reload();
}
