

function buttonClicked() {
  let dice1Value = Math.floor(1 + Math.random() * 6);
  let dice2Value = Math.floor(1 + Math.random() * 6);

  let dice1Img = "./assest/images/" + dice1Value + ".png";
  let dice2Img = "./assest/images/" + dice2Value + ".png";

  let dice1Imag = document.getElementsByClassName("dice1Img");
  dice1Imag[0].src = dice1Img;
  let dice2Imag = document.getElementsByClassName("dice2Img");
  dice2Imag[0].src = dice2Img;

  let winner = document.getElementsByTagName("h1");
  if (dice1Value > dice2Value) {
    winner[0].textContent = "🚩 Player 1 WON";
  } else if (dice1Value < dice2Value) {
    winner[0].textContent = "🚩 Player 2 WON";
  } else {
    winner[0].textContent = "🏳️ DRAW";
  }
}

let btnClick=document.getElementsByClassName("reRole")
  btnClick[0].addEventListener("click", buttonClicked);
