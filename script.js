const getBoard = document.getElementById("board");
const getSquare = document.getElementsByClassName("square");
const getResult = document.getElementById("result");
const resetGame = document.getElementById("reset-button");

function createInitialGrade() {
  for (column = 0; column < 3; column += 1) {
    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    for (let row = 0; row < 3; row += 1) {
      let lineRow = document.createElement("div");
      let square = document.createElement("div");
      lineRow.classList.add("line");
      square.classList.add("square");
      lineRow.appendChild(square);
      newColumn.appendChild(lineRow);
    }
    getBoard.appendChild(newColumn);
  }
}

function markSquare() {
  let player1 = true;
  let player2 = false;
  for (let i = 0; i < getSquare.length; i += 1) {
    getSquare[i].addEventListener("click", (evt) => {
      if (player1 == true && player2 == false) {
        evt.target.style.backgroundImage = "url('/imgs/xX.png')";
        evt.target.classList.add("xImage");
        player1 = false;
        player2 = true;
        console.log(player1);
      } else {
        if (player2 == true && player1 == false) {
          evt.target.style.backgroundImage = "url('/imgs/oO.png')";
          evt.target.classList.add("oImage");
          player2 = false;
          player1 = true;
          console.log(player2);
        }
      }
      squareCheck();
    });
  }
}

function squareCheck() {
  //check X
  if (
    (getSquare[0].classList.contains("xImage") &&
      getSquare[1].classList.contains("xImage") &&
      getSquare[2].classList.contains("xImage")) ||
    (getSquare[0].classList.contains("xImage") &&
      getSquare[3].classList.contains("xImage") &&
      getSquare[6].classList.contains("xImage")) ||
    (getSquare[0].classList.contains("xImage") &&
      getSquare[4].classList.contains("xImage") &&
      getSquare[8].classList.contains("xImage")) ||
    (getSquare[3].classList.contains("xImage") &&
      getSquare[4].classList.contains("xImage") &&
      getSquare[5].classList.contains("xImage")) ||
    (getSquare[6].classList.contains("xImage") &&
      getSquare[7].classList.contains("xImage") &&
      getSquare[8].classList.contains("xImage")) ||
    (getSquare[2].classList.contains("xImage") &&
      getSquare[5].classList.contains("xImage") &&
      getSquare[8].classList.contains("xImage")) ||
    (getSquare[1].classList.contains("xImage") &&
      getSquare[4].classList.contains("xImage") &&
      getSquare[7].classList.contains("xImage")) ||
    (getSquare[6].classList.contains("xImage") &&
      getSquare[4].classList.contains("xImage") &&
      getSquare[2].classList.contains("xImage"))
  ) {
    getResult.innerHTML = "X Won";
    return;
  } else if (
    //check O
    (getSquare[0].classList.contains("oImage") &&
      getSquare[1].classList.contains("oImage") &&
      getSquare[2].classList.contains("oImage")) ||
    (getSquare[0].classList.contains("oImage") &&
      getSquare[3].classList.contains("oImage") &&
      getSquare[6].classList.contains("oImage")) ||
    (getSquare[0].classList.contains("oImage") &&
      getSquare[4].classList.contains("oImage") &&
      getSquare[8].classList.contains("oImage")) ||
    (getSquare[3].classList.contains("oImage") &&
      getSquare[4].classList.contains("oImage") &&
      getSquare[5].classList.contains("oImage")) ||
    (getSquare[6].classList.contains("oImage") &&
      getSquare[7].classList.contains("oImage") &&
      getSquare[8].classList.contains("oImage")) ||
    (getSquare[2].classList.contains("oImage") &&
      getSquare[5].classList.contains("oImage") &&
      getSquare[8].classList.contains("oImage")) ||
    (getSquare[1].classList.contains("oImage") &&
      getSquare[4].classList.contains("oImage") &&
      getSquare[7].classList.contains("oImage")) ||
    (getSquare[6].classList.contains("oImage") &&
      getSquare[4].classList.contains("oImage") &&
      getSquare[2].classList.contains("oImage"))
  ) {
    getResult.innerHTML = "O Won";
    return;
  }
}

resetGame.addEventListener("click", clearSquares);

function clearSquares() {
  for (let index = 0; index < getSquare.length; index += 1) {
    getSquare[index].style.backgroundImage = "";
    getSquare[index].classList.remove("xImage", "oImage");
    getResult.innerHTML = "";
  }
}

window.onload = function () {
  createInitialGrade();
  markSquare();
};
