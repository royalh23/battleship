import { getCoords } from '../random';

describe('getCoords', () => {
  it('Returns array of random row and col between 0 and 9', () => {
    const [row, col] = getCoords(10, 10);
    expect(row).toBeGreaterThanOrEqual(0);
    expect(row).toBeLessThanOrEqual(9);
    expect(col).toBeGreaterThanOrEqual(0);
    expect(col).toBeLessThanOrEqual(9);
  });
});
