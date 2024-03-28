export default class Player {
  constructor(board) {
    this.board = board;
  }

  static generateCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  attack(row, col) {
    this.board.receiveAttack(row, col);
  }

  compAttack() {
    this.attack(...Player.generateCoords());
  }
}
