import Ship from './ship';
import Gameboard from './gameboard';

describe('Ship', () => {
  describe('isSunk', () => {
    it('Returns false if ship was hit once (ship length is 4)', () => {
      const ship = new Ship(4);
      ship.hit();
      expect(ship.isSunk()).toEqual(false);
    });

    it('Returns false if ship was hit twice (ship length is 4)', () => {
      const ship = new Ship(4);
      for (let i = 0; i < 2; i += 1) ship.hit();
      expect(ship.isSunk()).toEqual(false);
    });

    it('Returns true if ship was hit 4 times (ship length is 4)', () => {
      const ship = new Ship(4);
      for (let i = 0; i < 4; i += 1) ship.hit();
      expect(ship.isSunk()).toEqual(true);
    });
  });
});

describe('Gameboard', () => {
  describe('createBoard', () => {
    it('Returns 10 as the length of the board', () => {
      expect(Gameboard.createBoard().length).toEqual(10);
    });

    it('Returns 10 as the length of the first row', () => {
      expect(Gameboard.createBoard()[0].length).toEqual(10);
    });

    it('Returns the first cell of the first row', () => {
      expect(Gameboard.createBoard()[0][0]).toEqual({
        data: null,
        isHit: false,
        isAvailable: true,
      });
    });

    it('Returns the last cell of the last row', () => {
      expect(Gameboard.createBoard()[9][9]).toEqual({
        data: null,
        isHit: false,
        isAvailable: true,
      });
    });
  });
});
