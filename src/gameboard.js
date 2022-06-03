import Ship from './ship';

class GameBoard {
  constructor() {
    this.board = [
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ];
    this.ships = [];
    this.shipNum = 1;
  }

  place(coord1, coord2) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord1 = coord1.split('');
    const splitCoord2 = coord2.split('');
    const letter1 = letters.indexOf(splitCoord1[0]);
    const letter2 = letters.indexOf(splitCoord2[0]);
    if (letter2 - letter1 === 0) {
      this.ships.push([
        coord1,
        coord2,
        new Ship(splitCoord2[1] - splitCoord1[1] + 1),
        `${this.shipNum}`,
      ]);
    } else {
      this.ships.push([
        coord1,
        coord2,
        new Ship(letter2 - letter1 + 1),
        `${this.shipNum}`,
      ]);
    }
    for (let i = 0; i < letter2 - letter1 + 1; i++) {
      this.board[letter1 + i][splitCoord1[1] - 1] = `${this.shipNum}`;
    }
    for (let i = 0; i < splitCoord2[1] - splitCoord1[1]; i++) {
      this.board[letter1][splitCoord1[1] - 1 + i] = `${this.shipNum}`;
    }
    this.shipNum++;
  }

  receiveAttack(coord) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord = coord.split('');
    const letter = letters.indexOf(splitCoord[0]);
    if (this.board[letter][splitCoord[1] - 1] === 'E') return false;
    this.board[letter][splitCoord[1] - 1] = 'X';
    return true;
  }
}

export default GameBoard;
