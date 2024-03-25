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
  }

  #placeVertically(ship, row, col) {
    let nextRow = row;
    for (let i = 0; i < ship.length(); i += 1) {
      this.board[nextRow][col].data = ship;
      nextRow += 1;
    }
    this.#makeUnavailableVer(ship.length(), row, col);
  }

  placeShip(ship, row, col, direction) {
    if (this.board[row][col].isAvailable) {
      if (direction === 'horizontal' && col + ship.length() - 1 <= 9) {
        this.#placeHorizontally(ship, row, col);
      } else if (direction === 'vertical' && row + ship.length() - 1 <= 9) {
        this.#placeVertically(ship, row, col);
      }
    }
  }

  receiveAttack(row, col) {
    this.board[row][col].isHit = true;
    if (this.board[row][col].data !== null) this.board[row][col].data.hit();
  }
}
