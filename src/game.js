import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

export default class Game {
  constructor() {
    this.playerBoard = new Gameboard();
    this.compBoard = new Gameboard();

    this.playerBoard.placeShip(new Ship(2), 0, 0, 'horizontal');
    this.playerBoard.placeShip(new Ship(3), 0, 4, 'vertical');
    this.playerBoard.placeShip(new Ship(3), 4, 7, 'horizontal');
    this.playerBoard.placeShip(new Ship(4), 8, 1, 'horizontal');
    this.playerBoard.placeShip(new Ship(5), 2, 0, 'vertical');

    this.compBoard.placeShip(new Ship(2), 0, 4, 'vertical');
    this.compBoard.placeShip(new Ship(3), 3, 0, 'vertical');
    this.compBoard.placeShip(new Ship(3), 3, 9, 'vertical');
    this.compBoard.placeShip(new Ship(4), 7, 4, 'horizontal');
    this.compBoard.placeShip(new Ship(5), 9, 0, 'horizontal');

    this.player = new Player(this.compBoard);
    this.comp = new Player(this.playerBoard);
  }
}
