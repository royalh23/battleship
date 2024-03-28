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
    const [row, col] = Player.generateCoords();
    expect(row).toBeGreaterThanOrEqual(0);
    expect(row).toBeLessThanOrEqual(9);
    expect(col).toBeGreaterThanOrEqual(0);
    expect(col).toBeLessThanOrEqual(9);
  });
});
