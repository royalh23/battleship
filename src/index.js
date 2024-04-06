import './style.css';
import Game from './game';

const game = new Game();
const boards = document.querySelector('.boards');

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
      if (board === game.playerBoard.board && col.data !== null)
        cell.classList.add('ship');
      if (col.isHit) cell.classList.add('hit');
      grid.appendChild(cell);
    });
  });

  cont.append(grid, text);
  boards.appendChild(cont);
}

function addBtns() {
  const btns = document.createElement('div');
  const randomBtn = document.createElement('button');
  const startBtn = document.createElement('button');

  btns.classList.add('btns');
  randomBtn.classList.add('btn');
  startBtn.classList.add('btn');

  randomBtn.textContent = 'Randomize';
  startBtn.textContent = 'Start game';

  btns.append(randomBtn, startBtn);
  document.body.append(btns);

  randomBtn.addEventListener('click', () => {
    boards.textContent = '';
    game.playerBoard.placeRandomly();
    displayBoard(game.playerBoard.board);
  });
}

// Initialize display
displayBoard(game.playerBoard.board);
addBtns();
