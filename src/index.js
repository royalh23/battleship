import './style.css';
import Game from './game';

const game = new Game();
const content = document.querySelector('.content');
const boards = document.querySelector('.boards');
const btns = document.querySelector('.btns');
const randomBtn = document.querySelector('.btn:first-child');
const startBtn = document.querySelector('.btn:last-child');

function displayBoard(board) {
  const cont = document.createElement('div');
  const grid = document.createElement('div');
  const text = document.createElement('div');

  cont.classList.add('cont');
  grid.classList.add('grid');
  text.classList.add('text');

  text.textContent =
    board === game.playerBoard.board ? 'Your board' : "Computer's board";

  board.forEach((row) => {
    row.forEach((col) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (board === game.compBoard.board) {
        cell.dataset.row = board.indexOf(row);
        cell.dataset.col = row.indexOf(col);
      }
      if (board === game.playerBoard.board && col.data !== null)
        cell.classList.add('ship');
      if (col.isHit && col.data !== null && col.data.isSunk()) {
        const sunk = document.createElement('div');
        sunk.classList.add('sunk');
        cell.append(sunk);
      }
      if (col.isHit && col.data !== null && !col.data.isSunk()) {
        const hit = document.createElement('div');
        hit.classList.add('hit');
        cell.append(hit);
      }
      if (col.isHit && col.data === null) {
        const missed = document.createElement('div');
        missed.classList.add('missed');
        cell.append(missed);
      }
      grid.appendChild(cell);
    });
  });

  cont.append(grid, text);
  boards.appendChild(cont);
}

function waitForPlayerAttack(item, event) {
  return new Promise((resolve) => {
    const listener = (e) => {
      game.player.attack(e.target.dataset.row, e.target.dataset.col);
      item.forEach((cell) => {
        cell.removeEventListener(event, (ev) => listener(ev));
      });
      resolve();
    };

    item.forEach((cell) => {
      if (!game.compBoard.board[cell.dataset.row][cell.dataset.col].isHit) {
        cell.addEventListener(event, (e) => listener(e));
      }
    });
  });
}

function waitForCompAttack(ms) {
  return new Promise((resolve) => {
    game.comp.compAttack();
    setTimeout(resolve, ms);
  });
}

function redisplayBoards() {
  boards.textContent = '';
  displayBoard(game.playerBoard.board);
  displayBoard(game.compBoard.board);
}

async function startGame() {
  // Display comp board
  displayBoard(game.compBoard.board);

  // Add restart btn
  const restartBtn = document.createElement('button');
  restartBtn.classList.add('btn');
  restartBtn.textContent = 'Restart';
  btns.textContent = '';
  btns.appendChild(restartBtn);

  // Start game
  let gameOver = false;
  let turn = true;
  let winner;
  const turnText = document.createElement('div');
  turnText.classList.add('turn');
  content.insertBefore(turnText, boards);

  while (!gameOver) {
    const cells = document.querySelectorAll('.cont:last-child .cell');
    turnText.textContent = turn ? 'Your turn' : "Computer's turn";

    if (turn) {
      await waitForPlayerAttack(cells, 'click');
      redisplayBoards();
      if (game.compBoard.areShipsSunk()) {
        gameOver = true;
        winner = 'Player';
      }
      turn = !turn;
    } else {
      await waitForCompAttack(600);
      redisplayBoards();
      if (game.playerBoard.areShipsSunk()) {
        gameOver = true;
        winner = 'Computer';
      }
      turn = !turn;
    }
  }

  alert(`${winner} wins!`);
}

function addBtnListeners() {
  randomBtn.addEventListener('click', () => {
    game.playerBoard.placeRandomly();
    boards.textContent = '';
    displayBoard(game.playerBoard.board);
  });

  startBtn.addEventListener('click', startGame);
}

// Initialize display
displayBoard(game.playerBoard.board);
addBtnListeners();
