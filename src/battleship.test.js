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
      ship.hit();
      ship.hit();
      expect(ship.hits).toEqual(2);
    });

    it('Increases hits after 100 hits', () => {
      const ship = new Ship();
      for (let i = 0; i < 100; i += 1) ship.hit();
      expect(ship.hits).toEqual(100);
    });
  });
});
