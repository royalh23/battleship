import Ship from '../ship';

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
