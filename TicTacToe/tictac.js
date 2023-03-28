const squares = document.querySelectorAll(".square");
const statuss = document.querySelector(".status");
let currentPlayer = "X";
let gameStatus = ["", "", "", "", "", "", "", "", ""];

function handleSquareClick(event) {
  const square = event.target;
  const index = square.getAttribute("id");
  if (gameStatus[index] === "") {
    square.classList.add(currentPlayer.toLowerCase());
    gameStatus[index] = currentPlayer;
    checkGameStatus();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statuss.textContent = `It's ${currentPlayer}'s turn...`;
}

function checkGameStatus() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let gameWon = false;
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (gameStatus[a] !== "" && gameStatus[a] === gameStatus[b] && gameStatus[b] === gameStatus[c]) {
      gameWon = true;
      break;
    }
  }
  if (gameWon) {
    document.write(`${currentPlayer} has won!`);
    squares.forEach(square => square.removeEventListener("click", handleSquareClick));
  } else if (!gameStatus.includes("")) {
    document.write("The game is a tie.");
  }
}

squares.forEach(square => square.addEventListener("click", handleSquareClick));
