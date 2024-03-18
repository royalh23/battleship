import Ship from './ship';

describe('Ship', () => {
  describe('hit', () => {
    it('Increases hits after 1 hit', () => {
      const ship = new Ship();
      ship.hit();
      expect(ship.hits).toEqual(1);
    });

    it('Increases hits after 2 hits', () => {
      const ship = new Ship();
      for (let i = 0; i < 2; i += 1) ship.hit();
      expect(ship.hits).toEqual(2);
    });

    it('Increases hits after 100 hits', () => {
      const ship = new Ship();
      for (let i = 0; i < 100; i += 1) ship.hit();
      expect(ship.hits).toEqual(100);
    });
  });

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
