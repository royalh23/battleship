import Ship from '../ship';

describe('isSunk', () => {
  it.each([
    [false, 1],
    [false, 2],
    [false, 3],
    [true, 4],
  ])(
    'Returns %p if ship was hit %p times (ship length is 4)',
    (condition, hits) => {
      const ship = new Ship(4);
      for (let i = 0; i < hits; i += 1) ship.hit();
      expect(ship.isSunk()).toEqual(condition);
    },
  );
});
