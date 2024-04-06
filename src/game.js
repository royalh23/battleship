import Gameboard from './gameboard';
import Player from './player';

export default class Game {
  constructor() {
    this.playerBoard = new Gameboard();
    this.compBoard = new Gameboard();

    this.playerBoard.placeRandomly();
    this.compBoard.placeRandomly();

    this.player = new Player(this.compBoard);
    this.comp = new Player(this.playerBoard);
  }
}
