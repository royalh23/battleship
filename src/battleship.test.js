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

  describe('placeShip', () => {
    describe('Length 2', () => {
      it('Places ship of length 2 horizontally at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 0, 0, 'horizontal');
        for (let i = 0; i < 2; i += 1) {
          expect(gb.board[0][i].data).toStrictEqual(ship);
          expect(gb.board[0][i].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 2 horizontally at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 5, 5, 'horizontal');
        for (let i = 5; i < 7; i += 1) {
          expect(gb.board[5][i].data).toStrictEqual(ship);
          expect(gb.board[5][i].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 2 horizontally at [0, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 0, 9, 'horizontal');
        expect(gb.board[0][9].data).toEqual(null);
        expect(gb.board[0][9].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 2 horizontally at [9, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 9, 9, 'horizontal');
        expect(gb.board[9][9].data).toEqual(null);
        expect(gb.board[9][9].isAvailable).toEqual(true);
      });

      it('Places ship of length 2 vertically at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 0, 0, 'vertical');
        for (let i = 0; i < 2; i += 1) {
          expect(gb.board[i][0].data).toStrictEqual(ship);
          expect(gb.board[i][0].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 2 vertically at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 5, 5, 'vertical');
        for (let i = 5; i < 7; i += 1) {
          expect(gb.board[i][5].data).toStrictEqual(ship);
          expect(gb.board[i][5].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 2 vertically at [9, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 9, 0, 'vertical');
        expect(gb.board[9][0].data).toEqual(null);
        expect(gb.board[9][0].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 2 vertically at [9, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(2);
        gb.placeShip(ship, 9, 9, 'vertical');
        expect(gb.board[9][9].data).toEqual(null);
        expect(gb.board[9][9].isAvailable).toEqual(true);
      });
    });

    describe('Length 3', () => {
      it('Places ship of length 3 horizontally at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 0, 0, 'horizontal');
        for (let i = 0; i < 3; i += 1) {
          expect(gb.board[0][i].data).toStrictEqual(ship);
          expect(gb.board[0][i].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 3 horizontally at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 5, 5, 'horizontal');
        for (let i = 5; i < 8; i += 1) {
          expect(gb.board[5][i].data).toStrictEqual(ship);
          expect(gb.board[5][i].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 3 horizontally at [0, 8]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 0, 8, 'horizontal');
        expect(gb.board[0][8].data).toEqual(null);
        expect(gb.board[0][8].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 3 horizontally at [9, 8]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 9, 8, 'horizontal');
        expect(gb.board[9][8].data).toEqual(null);
        expect(gb.board[9][8].isAvailable).toEqual(true);
      });

      it('Places ship of length 3 vertically at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 0, 0, 'vertical');
        for (let i = 0; i < 3; i += 1) {
          expect(gb.board[i][0].data).toStrictEqual(ship);
          expect(gb.board[i][0].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 3 vertically at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 5, 5, 'vertical');
        for (let i = 5; i < 8; i += 1) {
          expect(gb.board[i][5].data).toStrictEqual(ship);
          expect(gb.board[i][5].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 3 vertically at [8, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 8, 0, 'vertical');
        expect(gb.board[8][0].data).toEqual(null);
        expect(gb.board[8][0].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 3 vertically at [8, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(3);
        gb.placeShip(ship, 8, 9, 'vertical');
        expect(gb.board[8][9].data).toEqual(null);
        expect(gb.board[8][9].isAvailable).toEqual(true);
      });
    });

    describe('Length 4', () => {
      it('Places ship of length 4 horizontally at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 0, 0, 'horizontal');
        for (let i = 0; i < 4; i += 1) {
          expect(gb.board[0][i].data).toStrictEqual(ship);
          expect(gb.board[0][i].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 4 horizontally at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 5, 5, 'horizontal');
        for (let i = 5; i < 9; i += 1) {
          expect(gb.board[5][i].data).toStrictEqual(ship);
          expect(gb.board[5][i].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 4 horizontally at [0, 7]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 0, 7, 'horizontal');
        expect(gb.board[0][7].data).toEqual(null);
        expect(gb.board[0][7].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 4 horizontally at [9, 7]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 9, 7, 'horizontal');
        expect(gb.board[9][7].data).toEqual(null);
        expect(gb.board[9][7].isAvailable).toEqual(true);
      });

      it('Places ship of length 4 vertically at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 0, 0, 'vertical');
        for (let i = 0; i < 4; i += 1) {
          expect(gb.board[i][0].data).toStrictEqual(ship);
          expect(gb.board[i][0].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 4 vertically at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 5, 5, 'vertical');
        for (let i = 5; i < 9; i += 1) {
          expect(gb.board[i][5].data).toStrictEqual(ship);
          expect(gb.board[i][5].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 4 vertically at [7, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 7, 0, 'vertical');
        expect(gb.board[7][0].data).toEqual(null);
        expect(gb.board[7][0].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 4 vertically at [7, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(4);
        gb.placeShip(ship, 7, 9, 'vertical');
        expect(gb.board[7][9].data).toEqual(null);
        expect(gb.board[7][9].isAvailable).toEqual(true);
      });
    });

    describe('Length 5', () => {
      it('Places ship of length 5 horizontally at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 0, 0, 'horizontal');
        for (let i = 0; i < 5; i += 1) {
          expect(gb.board[0][i].data).toStrictEqual(ship);
          expect(gb.board[0][i].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 5 horizontally at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 5, 5, 'horizontal');
        for (let i = 5; i < 10; i += 1) {
          expect(gb.board[5][i].data).toStrictEqual(ship);
          expect(gb.board[5][i].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 5 horizontally at [0, 6]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 0, 6, 'horizontal');
        expect(gb.board[0][6].data).toEqual(null);
        expect(gb.board[0][6].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 5 horizontally at [9, 6]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 9, 6, 'horizontal');
        expect(gb.board[9][6].data).toEqual(null);
        expect(gb.board[9][6].isAvailable).toEqual(true);
      });

      it('Places ship of length 5 vertically at [0, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 0, 0, 'vertical');
        for (let i = 0; i < 5; i += 1) {
          expect(gb.board[i][0].data).toStrictEqual(ship);
          expect(gb.board[i][0].isAvailable).toEqual(false);
        }
      });

      it('Places ship of length 5 vertically at [5, 5]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 5, 5, 'vertical');
        for (let i = 5; i < 10; i += 1) {
          expect(gb.board[i][5].data).toStrictEqual(ship);
          expect(gb.board[i][5].isAvailable).toEqual(false);
        }
      });

      it('Does not place ship of length 5 vertically at [6, 0]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 6, 0, 'vertical');
        expect(gb.board[6][0].data).toEqual(null);
        expect(gb.board[6][0].isAvailable).toEqual(true);
      });

      it('Does not place ship of length 5 vertically at [6, 9]', () => {
        const gb = new Gameboard();
        const ship = new Ship(5);
        gb.placeShip(ship, 6, 9, 'vertical');
        expect(gb.board[6][9].data).toEqual(null);
        expect(gb.board[6][9].isAvailable).toEqual(true);
      });
    });
  });
});
