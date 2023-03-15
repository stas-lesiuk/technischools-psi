const boardElement = document.querySelector(".board");
const boardItems = document.querySelectorAll(".board-item");
const resetButton = document.querySelector(".reset");

reactToColorChange();

boardItems.forEach(function (boardItem, index) {
  boardItem.addEventListener("click", () =>
    handleBoardItemClick(boardItem, index)
  );
});

resetButton.addEventListener("click", reset);

const points = {
  X: 0,
  O: 0,
};

const state = {
  boardItemsData: ["", "", "", "", "", "", "", "", ""],
};

let nextElement = "X";
let isGameOver = false;

function handleBoardItemClick(boardItem, index) {
  console.log("You clicked on a board item with index: " + index);

  // sprawdzamy czy element tablicy nie jest pusty
  const isFilled = state.boardItemsData[index] !== "";
  if (isFilled) {
    alert("Nie oszukuj");
    return;
  }

  if (isGameOver) {
    alert("Koniec gry");
    return;
  }

  boardItem.innerHTML = nextElement;
  state.boardItemsData[index] = nextElement;

  if (nextElement === "X") {
    nextElement = "O";
  } else if (nextElement === "O") {
    nextElement = "X";
  }

  const isXWin = checkIfWin("X");
  if (isXWin) {
    alert("Wygrał X");
    points.X++;
  }
  const isOWin = checkIfWin("O");
  if (isOWin) {
    alert("Wygrał O");
    points.O++;
  }
  if (isXWin || isOWin) {
    isGameOver = true;
    updatePoints();
    reset();
  }
}

function reset() {
  console.log("resetuje gre");
  state.boardItemsData = ["", "", "", "", "", "", "", "", ""];
  nextElement = "X";
  boardItems.forEach(function (boardItem) {
    boardItem.innerHTML = "";
  });
  isGameOver = false;
}

function checkIfWin(symbol) {
  console.log("sprawdzam czy jest wygrana...");

  const data = state.boardItemsData;

  const isFirstRowSame =
    data[0] === symbol && data[1] === symbol && data[2] === symbol;
  const isSecondRowSame =
    data[3] === symbol && data[4] === symbol && data[5] === symbol;
  const isThirdRowSame =
    data[6] === symbol && data[7] === symbol && data[8] === symbol;

  const isFirstColSame =
    data[0] === symbol && data[3] === symbol && data[6] === symbol;
  const isSecondColSame =
    data[1] === symbol && data[4] === symbol && data[7] === symbol;
  const isThirdColSame =
    data[2] === symbol && data[5] === symbol && data[8] === symbol;

  const isDiagonal1Same =
    data[0] === symbol && data[4] === symbol && data[8] === symbol;
  const isDiagonal2Same =
    data[2] === symbol && data[4] === symbol && data[6] === symbol;

  if (isFirstRowSame || isSecondRowSame || isThirdRowSame) {
    return true;
  }

  if (isFirstColSame || isSecondColSame || isThirdColSame) {
    return true;
  }

  if (isDiagonal1Same || isDiagonal2Same) {
    return true;
  }

  return false;
}

function updatePoints() {
  console.log("aktualizuje punkty");
  document.querySelector(".points-x").innerHTML = `X: ${points.X} punktów`;
  document.querySelector(".points-o").innerHTML = `O: ${points.O} punktów`;
}

function reactToColorChange() {
  const bgColorInput = document.querySelector("#board-bg-color");
  const boardItemColorInput = document.querySelector("#board-item-color");

  bgColorInput.addEventListener("change", function (event) {
    const newColor = event.target.value;
    console.log("nowy kolor tła: ", newColor);
    boardElement.style.backgroundColor = newColor;
  });

  boardItemColorInput.addEventListener("change", function (event) {
    const newColor = event.target.value;
    console.log("nowy kolor kafelków: ", newColor);
    boardItems.forEach(function (boardItem) {
      boardItem.style.backgroundColor = newColor;
    });
  });
}
