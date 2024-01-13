let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function moveno(cell) {
  if (board[cell] === '' && gameActive) {
    board[cell] = currentPlayer;
    document.getElementById('board').children[cell].innerText = currentPlayer;
    
    if (checkWin()) {
      gameActive = false;
      document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
    } else if (board.includes('')) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    } else {
      gameActive = false;
      document.getElementById('status').innerText = "It's a draw!";
    }
  }
}

function checkWin() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  document.getElementById('status').innerText = "Player X's turn";
  document.getElementById('board').childNodes.forEach((cell) => {
    cell.innerText = '';
  });
}

resetBoard();
