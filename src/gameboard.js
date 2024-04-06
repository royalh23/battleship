import { getCoords, getDirection } from './random';
import Ship from './ship';

export default class Gameboard {
  #ships;

  constructor() {
    this.board = Gameboard.createBoard();
    this.#ships = [];
  }

  static createBoard() {
    const gb = [];

    for (let row = 0; row < 10; row += 1) {
      const rowArr = [];
      for (let col = 0; col < 10; col += 1) {
        const obj = { data: null, isHit: false, isAvailable: true };
        rowArr.push(obj);
      }
      gb.push(rowArr);
    }

    return gb;
  }

  #makeUnavailableHor(length, row, col) {
    for (let r = row - 1; r < row + 2; r += 1) {
      for (let c = col - 1; c < col + length + 1; c += 1) {
        if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
          this.board[r][c].isAvailable = false;
        }
      }
    }
  }

  #makeUnavailableVer(length, row, col) {
    for (let c = col - 1; c < col + 2; c += 1) {
      for (let r = row - 1; r < row + length + 1; r += 1) {
        if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
          this.board[r][c].isAvailable = false;
        }
      }
    }
  }

  #placeHorizontally(ship, row, col) {
    let nextCol = col;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[row][nextCol].data = ship;
      nextCol += 1;
    }
    this.#makeUnavailableHor(ship.length(), row, col);
    this.#ships.push(ship);
  }

  #placeVertically(ship, row, col) {
    let nextRow = row;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[nextRow][col].data = ship;
      nextRow += 1;
    }
    this.#makeUnavailableVer(ship.length(), row, col);
    this.#ships.push(ship);
  }

  placeShip(ship, row, col, direction) {
    if (this.board[row][col].isAvailable) {
      if (ship.length() === 5) {
        if (
          direction === 'horizontal' &&
          col + ship.length() - 1 <= 9 &&
          this.board[row][col + ship.length() - 1].isAvailable &&
          this.board[row][col + 2].isAvailable
        ) {
          this.#placeHorizontally(ship, row, col);
        } else if (
          direction === 'vertical' &&
          row + ship.length() - 1 <= 9 &&
          this.board[row + ship.length() - 1][col].isAvailable &&
          this.board[row + 2][col].isAvailable
        ) {
          this.#placeVertically(ship, row, col);
        }
      } else if (
        direction === 'horizontal' &&
        col + ship.length() - 1 <= 9 &&
        this.board[row][col + ship.length() - 1].isAvailable
      ) {
        this.#placeHorizontally(ship, row, col);
      } else if (
        direction === 'vertical' &&
        row + ship.length() - 1 <= 9 &&
        this.board[row + ship.length() - 1][col].isAvailable
      ) {
        this.#placeVertically(ship, row, col);
      }
    }
  }

  placeRandomly() {
    let ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3)].concat(
      new Ship(2),
    );

    while (ships.length !== 0) {
      const curShip = ships.shift();

      let row;
      let col;
      const direction = getDirection();

      if (direction === 'horizontal') {
        [row, col] = getCoords(10, 11 - curShip.length());
      } else {
        [row, col] = getCoords(11 - curShip.length(), 10);
      }

      this.placeShip(curShip, row, col, direction);

      if (this.board[row][col].data !== curShip) {
        this.board = Gameboard.createBoard();
        this.#ships = [];
        ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3)].concat(
          new Ship(2),
        );
      }
    }
  }

  receiveAttack(row, col) {
    this.board[row][col].isHit = true;
    if (this.board[row][col].data !== null) this.board[row][col].data.hit();
  }

  areShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk() === true);
  }
}
