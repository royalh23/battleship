import Gameboard from '../gameboard';
import Ship from '../ship';

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
  describe.each([
    { length: 2, num: 9 },
    { length: 3, num: 8 },
    { length: 4, num: 7 },
    { length: 5, num: 6 },
  ])('Placing ship of length $length', ({ length, num }) => {
    it.each([
      [0, 0],
      [5, 5],
    ])('Places ship horizontally at [%i, %i]', (row, col) => {
      const gb = new Gameboard();
      const ship = new Ship(length);
      gb.placeShip(ship, row, col, 'horizontal');
      for (let i = col; i < col + length; i += 1) {
        expect(gb.board[row][i].data).toBe(ship);
      }
    });

    it.each([
      [0, num],
      [9, num],
    ])('Does not place ship horizontally at [%i, %i]', (row, col) => {
      const gb = new Gameboard();
      const ship = new Ship(length);
      gb.placeShip(ship, row, col, 'horizontal');
      expect(gb.board[row][col].data).toEqual(null);
    });

    it.each([
      [0, 0],
      [5, 5],
    ])('Places ship vertically at [%i, %i]', (row, col) => {
      const gb = new Gameboard();
      const ship = new Ship(length);
      gb.placeShip(ship, row, col, 'vertical');
      for (let i = row; i < row + length; i += 1) {
        expect(gb.board[i][col].data).toBe(ship);
      }
    });

    it.each([
      [num, 0],
      [num, 9],
    ])('Does not place ship vertically at [%i, %i]', (row, col) => {
      const gb = new Gameboard();
      const ship = new Ship(length);
      gb.placeShip(ship, row, col, 'vertical');
      expect(gb.board[row][col].data).toEqual(null);
    });
  });

  describe.each([
    { length: 2, num: 8 },
    { length: 3, num: 7 },
    { length: 4, num: 6 },
    { length: 5, num: 5 },
  ])(
    'Checking cell availability around ship of length $length',
    ({ length, num }) => {
      it.each([
        [0, 0],
        [0, num],
        [9, 0],
        [9, num],
      ])(
        'Checks cell availability horizontally around ship at [%i, %i]',
        (row, col) => {
          const gb = new Gameboard();
          const ship = new Ship(length);
          gb.placeShip(ship, row, col, 'horizontal');
          for (let r = row - 1; r < row + 2; r += 1) {
            for (let c = col - 1; c < col + length + 1; c += 1) {
              if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
                expect(gb.board[r][c].isAvailable).toEqual(false);
              }
            }
          }
        },
      );

      it.each([
        [0, 0],
        [0, 9],
        [num, 0],
        [num, 9],
      ])(
        'Checks cell availability vertically around ship at [%i, %i]',
        (row, col) => {
          const gb = new Gameboard();
          const ship = new Ship(length);
          gb.placeShip(ship, row, col, 'vertical');
          for (let c = col - 1; c < col + 2; c += 1) {
            for (let r = row - 1; r < row + length + 1; r += 1) {
              if (c >= 0 && c <= 9 && r >= 0 && r <= 9) {
                expect(gb.board[r][c].isAvailable).toEqual(false);
              }
            }
          }
        },
      );
    },
  );
});
