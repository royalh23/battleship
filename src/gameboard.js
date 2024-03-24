export default class Gameboard {
  constructor() {
    this.board = Gameboard.createBoard();
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

  #placeHorizontally(ship, row, col) {
    let nextCol = col;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[row][nextCol].data = ship;
      this.board[row][nextCol].isAvailable = false;
      nextCol += 1;
    }
  }

  #placeVertically(ship, row, col) {
    let nextRow = row;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[nextRow][col].data = ship;
      this.board[nextRow][col].isAvailable = false;
      nextRow += 1;
    }
  }

  placeShip(ship, row, col, direction) {
    if (direction === 'horizontal') {
      switch (ship.length()) {
        case 2:
          if (col + 1 <= 9) {
            this.#placeHorizontally(ship, row, col);
          }
          break;

        case 3:
          if (col + 1 <= 9 && col + 2 <= 9) {
            this.#placeHorizontally(ship, row, col);
          }
          break;

        case 4:
          if (col + 1 <= 9 && col + 2 <= 9 && col + 3 <= 9) {
            this.#placeHorizontally(ship, row, col);
          }
          break;

        case 5:
          if (col + 1 <= 9 && col + 2 <= 9 && col + 3 <= 9 && col + 4 <= 9) {
            this.#placeHorizontally(ship, row, col);
          }
          break;

        default:
      }
    } else {
      switch (ship.length()) {
        case 2:
          if (row + 1 <= 9) {
            this.#placeVertically(ship, row, col);
          }
          break;

        case 3:
          if (row + 1 <= 9 && row + 2 <= 9) {
            this.#placeVertically(ship, row, col);
          }
          break;

        case 4:
          if (row + 1 <= 9 && row + 2 <= 9 && row + 3 <= 9) {
            this.#placeVertically(ship, row, col);
          }
          break;

        case 5:
          if (row + 1 <= 9 && row + 2 <= 9 && row + 3 <= 9 && row + 4 <= 9) {
            this.#placeVertically(ship, row, col);
          }
          break;

        default:
      }
    }
  }
}
