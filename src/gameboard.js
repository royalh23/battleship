export default class Gameboard {
  constructor() {
    this.gb = Gameboard.createBoard();
  }

  static createBoard() {
    const gb = [];

    for (let row = 0; row < 10; row += 1) {
      const rowArr = [];
      for (let col = 0; col < 10; col += 1) {
        rowArr.push(0);
      }
      gb.push(rowArr);
    }

    return gb;
  }
}
