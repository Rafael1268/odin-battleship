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
  }

  place(coord1, coord2) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord1 = coord1.split('');
    const splitCoord2 = coord2.split('');
    const letter1 = letters.indexOf(splitCoord1[0]);
    const letter2 = letters.indexOf(splitCoord2[0]);
    if (letter2 - letter1 === 0) {
      this.ships.push(new Ship(splitCoord2[1] - splitCoord1[1] + 1));
    } else {
      this.ships.push(new Ship(letter2 - letter1 + 1));
    }
    for (let i = 0; i < letter2 - letter1 + 1; i++) {
      this.board[letter1 + i][splitCoord1[1] - 1] = 'O';
    }
    for (let i = 0; i < splitCoord2[1] - splitCoord1[1]; i++) {
      this.board[letter1][splitCoord1[1] - 1 + i] = 'O';
    }
  }
}

export default GameBoard;
