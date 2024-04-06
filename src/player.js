import { getCoords } from './random';

export default class Player {
  constructor(board) {
    this.board = board;
  }

  attack(row, col) {
    this.board.receiveAttack(row, col);
  }

  compAttack() {
    const [row, col] = getCoords(10, 10);
    if (this.board[row][col].isHit) this.compAttack();
    else this.attack(row, col);
  }
}
