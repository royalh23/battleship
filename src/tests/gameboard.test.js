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

  describe('Checking ship collisions', () => {
    it("Does not place second ship at first ship's coordinates", () => {
      const gb = new Gameboard();
      const shipOne = new Ship(3);
      const shipTwo = new Ship(3);
      gb.placeShip(shipOne, 4, 4, 'horizontal');
      gb.placeShip(shipTwo, 4, 4, 'horizontal');
      for (let i = 4; i < 7; i += 1) {
        expect(gb.board[4][i].data).toBe(shipOne);
      }
    });

    it('Does not place second ship around first ship', () => {
      const gb = new Gameboard();
      const shipOne = new Ship(3);
      const shipTwo = new Ship(3);
      gb.placeShip(shipOne, 4, 4, 'horizontal');
      gb.placeShip(shipTwo, 3, 4, 'horizontal');
      for (let i = 4; i < 7; i += 1) {
        expect(gb.board[3][i].data).toEqual(null);
      }
    });
  });
});

describe('receiveAttack', () => {
  it.each([
    [0, 0],
    [4, 4],
  ])('Hits the cell at [%i, %i]', (row, col) => {
    const gb = new Gameboard();
    gb.receiveAttack(row, col);
    expect(gb.board[row][col].isHit).toEqual(true);
  });

  it('Does not hit the same cell twice', () => {
    const gb = new Gameboard();
    const ship = new Ship(3);
    ship.hit = jest.fn(); // Mock ship.hit
    gb.placeShip(ship, 4, 4, 'horizontal');
    gb.receiveAttack(4, 4);
    gb.receiveAttack(4, 4);
    expect(ship.hit).toHaveBeenCalledTimes(1);
  });

  it("Sends the 'hit' function to the attacked ship", () => {
    const gb = new Gameboard();
    const ship = new Ship(3);
    ship.hit = jest.fn(); // Mock ship.hit
    gb.placeShip(ship, 4, 4, 'horizontal');
    gb.receiveAttack(4, 4);
    expect(ship.hit).toHaveBeenCalled();
  });
});

describe('areShipsSunk', () => {
  it.each([
    {
      ships: 1,
      condition: false,
      coords: [
        [0, 0, 'horizontal', 2],
        [0, 4, 'vertical', 3],
        [4, 7, 'horizontal', 3],
        [8, 1, 'horizontal', 4],
        [2, 0, 'vertical', 5],
      ],
    },
    {
      ships: 2,
      condition: false,
      coords: [
        [0, 4, 'vertical', 2],
        [3, 0, 'vertical', 3],
        [3, 9, 'vertical', 3],
        [7, 4, 'horizontal', 4],
        [9, 0, 'horizontal', 5],
      ],
    },
    {
      ships: 3,
      condition: false,
      coords: [
        [9, 8, 'horizontal', 2],
        [9, 0, 'horizontal', 3],
        [7, 5, 'vertical', 3],
        [0, 2, 'vertical', 4],
        [4, 5, 'horizontal', 5],
      ],
    },
    {
      ships: 4,
      condition: false,
      coords: [
        [5, 4, 'horizontal', 2],
        [1, 0, 'vertical', 3],
        [6, 9, 'vertical', 3],
        [9, 3, 'horizontal', 4],
        [0, 8, 'vertical', 5],
      ],
    },
    {
      ships: 5,
      condition: true,
      coords: [
        [0, 0, 'horizontal', 2],
        [7, 9, 'vertical', 3],
        [9, 0, 'horizontal', 3],
        [5, 0, 'horizontal', 4],
        [0, 9, 'vertical', 5],
      ],
    },
  ])(
    'Returns $condition when $ships ships are sunk',
    ({ ships, condition, coords }) => {
      const gb = new Gameboard();
      const shipsArr = [];
      const shipOne = new Ship(2);
      const shipTwo = new Ship(3);
      const shipThree = new Ship(3);
      const shipFour = new Ship(4);
      const shipFive = new Ship(5);
      shipsArr.push(shipOne, shipTwo, shipThree, shipFour, shipFive);
      shipsArr.forEach((ship, i) => {
        gb.placeShip(ship, coords[i][0], coords[i][1], coords[i][2]);
      });

      for (let i = 0; i < ships; i += 1) {
        if (coords[i][2] === 'horizontal') {
          for (let j = coords[i][1]; j < coords[i][1] + coords[i][3]; j += 1) {
            gb.receiveAttack(coords[i][0], j);
          }
        } else {
          for (let j = coords[i][0]; j < coords[i][0] + coords[i][3]; j += 1) {
            gb.receiveAttack(j, coords[i][1]);
          }
        }
      }
      expect(gb.areShipsSunk()).toEqual(condition);
    },
  );
});
