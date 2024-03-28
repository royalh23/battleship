import Player from '../player';
import Gameboard from '../gameboard';

describe('attack', () => {
  it.each([
    [0, 0],
    [9, 9],
  ])("Gameboard receives player's attack at [%i, %i]", (row, col) => {
    const gb = new Gameboard();
    const player = new Player(gb);
    gb.receiveAttack = jest.fn();
    player.attack(row, col);
    expect(gb.receiveAttack).toHaveBeenCalledWith(row, col);
  });
});

describe('generateCoords', () => {
  it('Returns array of random row and col between 0 and 9', () => {
    expect(Player.generateCoords()[0]).toBeGreaterThanOrEqual(0);
    expect(Player.generateCoords()[0]).toBeLessThanOrEqual(9);
    expect(Player.generateCoords()[1]).toBeGreaterThanOrEqual(0);
    expect(Player.generateCoords()[1]).toBeLessThanOrEqual(9);
  });
});
