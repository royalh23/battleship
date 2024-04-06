import './style.css';
import Game from './game';

class Display {
  #game;

  #boards;

  constructor() {
    this.#game = new Game();
    this.#boards = document.querySelector('.boards');
    this.#displayBoard(this.#game.playerBoard.board);
    this.#addBtns();
  }

  #displayBoard(board) {
    const boardCont = document.createElement('div');
    boardCont.classList.add('board');

    board.forEach((row) => {
      row.forEach((col) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (board === this.#game.playerBoard.board && col.data !== null)
          cell.classList.add('ship');
        if (col.isHit) cell.classList.add('hit');
        boardCont.appendChild(cell);
      });
    });

    this.#boards.appendChild(boardCont);
  }

  #addBtns() {
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
      this.#boards.textContent = '';
      this.#game.playerBoard.placeRandomly();
      this.#displayBoard(this.#game.playerBoard.board);
    });
  }
}

const display = new Display();
