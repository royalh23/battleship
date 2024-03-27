export default class Player {
  constructor(board) {
    this.board = board;
  }

  attack(row, col) {
    this.board.receiveAttack(row, col);
  }
}
