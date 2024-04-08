import './style.css';
import Game from './game';

class Display {
  #game;

  #dialog;

  #result;

  #content;

  #boards;

  #btns;

  #newGame;

  constructor() {
    this.#game = new Game();
    this.#dialog = document.querySelector('dialog');
    this.#result = document.querySelector('.result');
    this.#content = document.querySelector('.content');
    this.#boards = document.querySelector('.boards');
    this.#btns = document.querySelector('.btns');
    this.#newGame = document.querySelector('.dialog > .btn');
  }

  static #refreshContent() {
    const boards = document.querySelector('.boards');
    const btns = document.querySelector('.btns');
    const turn = document.querySelector('.turn');
    turn.remove();
    boards.textContent = '';
    btns.textContent = '';
  }

  static #restartGame() {
    Display.#refreshContent();

    const display = new Display();
    display.initializeDisplay();
  }

  #displayBoard(board) {
    const cont = document.createElement('div');
    const grid = document.createElement('div');
    const text = document.createElement('div');

    cont.classList.add('cont');
    grid.classList.add('grid');
    text.classList.add('text');

    text.textContent =
      board === this.#game.playerBoard.board
        ? 'Your board'
        : "Computer's board";

    board.forEach((row) => {
      row.forEach((col) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (board === this.#game.compBoard.board) {
          cell.dataset.row = board.indexOf(row);
          cell.dataset.col = row.indexOf(col);
        }
        if (board === this.#game.playerBoard.board && col.data !== null)
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
    this.#boards.appendChild(cont);
  }

  #addBtns() {
    const randomBtn = document.createElement('button');
    const startBtn = document.createElement('button');

    randomBtn.classList.add('btn');
    startBtn.classList.add('btn');

    randomBtn.textContent = 'Randomize';
    startBtn.textContent = 'Start game';

    this.#btns.append(randomBtn, startBtn);

    randomBtn.addEventListener('click', () => {
      this.#game.playerBoard.placeRandomly();
      this.#boards.textContent = '';
      this.#displayBoard(this.#game.playerBoard.board);
    });

    startBtn.addEventListener('click', this.#startGame.bind(this));
  }

  #waitForPlayerAttack(item, event) {
    return new Promise((resolve) => {
      const listener = (e) => {
        this.#game.player.attack(e.target.dataset.row, e.target.dataset.col);
        item.forEach((cell) => {
          cell.removeEventListener(event, (ev) => listener(ev));
        });
        resolve();
      };

      item.forEach((cell) => {
        if (
          !this.#game.compBoard.board[cell.dataset.row][cell.dataset.col].isHit
        ) {
          cell.addEventListener(event, (e) => listener(e));
        }
      });
    });
  }

  #waitForCompAttack(restartBtn, ms) {
    return new Promise((resolve) => {
      restartBtn.removeEventListener('click', Display.#restartGame);
      this.#game.comp.compAttack();
      setTimeout(() => {
        restartBtn.addEventListener('click', Display.#restartGame);
        resolve();
      }, ms);
    });
  }

  #redisplayBoards() {
    this.#boards.textContent = '';
    this.#displayBoard(this.#game.playerBoard.board);
    this.#displayBoard(this.#game.compBoard.board);
  }

  #showResult(winner) {
    this.#dialog.addEventListener('cancel', (e) => e.preventDefault());
    this.#result.textContent = `${winner} wins!`;
    this.#dialog.showModal();
    this.#newGame.addEventListener('click', () => {
      this.#dialog.close();
      Display.#restartGame();
    });
  }

  async #startGame() {
    // Display comp board
    this.#displayBoard(this.#game.compBoard.board);

    // Add restart btn
    const restartBtn = document.createElement('button');
    restartBtn.classList.add('btn');
    restartBtn.textContent = 'Restart';
    this.#btns.textContent = '';
    this.#btns.appendChild(restartBtn);
    restartBtn.addEventListener('click', Display.#restartGame);

    // Run game
    let gameOver = false;
    let turn = true;
    let winner;
    const turnText = document.createElement('div');
    turnText.classList.add('turn');
    this.#content.insertBefore(turnText, this.#boards);

    while (!gameOver) {
      const cells = document.querySelectorAll('.cont:last-child .cell');
      turnText.textContent = turn ? 'Your turn' : "Computer's turn";

      if (turn) {
        await this.#waitForPlayerAttack(cells, 'click');
        this.#redisplayBoards();
        if (this.#game.compBoard.areShipsSunk()) {
          gameOver = true;
          winner = 'Player';
        }
        turn = !turn;
      } else {
        await this.#waitForCompAttack(restartBtn, 600);
        this.#redisplayBoards();
        if (this.#game.playerBoard.areShipsSunk()) {
          gameOver = true;
          winner = 'Computer';
        }
        turn = !turn;
      }
    }

    // Declare winner
    turnText.textContent = `${winner} wins!`;
    this.#showResult(winner);
  }

  initializeDisplay() {
    this.#displayBoard(this.#game.playerBoard.board);
    this.#addBtns();
  }
}

const display = new Display();
display.initializeDisplay();
