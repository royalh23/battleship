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
