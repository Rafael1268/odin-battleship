/* eslint-disable import/no-cycle */
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

  // Place ship on board and add ship info to the ships array
  place(coord1, coord2) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord1 = [coord1.slice(0, 1), coord1.slice(1, 3)];
    const splitCoord2 = [coord2.slice(0, 1), coord2.slice(1, 3)];
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
    for (let i = 0; i < splitCoord2[1] - splitCoord1[1] + 1; i++) {
      this.board[letter1][splitCoord1[1] - 1 + i] = `${this.shipNum}`;
    }
    this.shipNum++;
  }

  // Shows a preview of a ship while placing
  preview(coord1, coord2) {
    this.clearPreview();
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord1 = [coord1.slice(0, 1), coord1.slice(1, 3)];
    const splitCoord2 = [coord2.slice(0, 1), coord2.slice(1, 3)];
    const letter1 = letters.indexOf(splitCoord1[0]);
    const letter2 = letters.indexOf(splitCoord2[0]);
    if (splitCoord2[1] - splitCoord1[1] === 0) {
      for (let i = 0; i < letter2 - letter1 + 1; i++) {
        if (this.board[letter1 + i][splitCoord1[1] - 1] !== 'E') return false;
        this.board[letter1 + i][splitCoord1[1] - 1] = 'N';
      }
    } else {
      for (let i = 0; i < splitCoord2[1] - splitCoord1[1] + 1; i++) {
        if (this.board[letter1][splitCoord1[1] - 1 + i] !== 'E') return false;
        this.board[letter1][splitCoord1[1] - 1 + i] = 'N';
      }
    }
    return true;
  }

  // Checks if space is empty
  checkClear(coord1, coord2) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord1 = [coord1.slice(0, 1), coord1.slice(1, 3)];
    const splitCoord2 = [coord2.slice(0, 1), coord2.slice(1, 3)];
    const letter1 = letters.indexOf(splitCoord1[0]);
    const letter2 = letters.indexOf(splitCoord2[0]);
    if (splitCoord2[1] - splitCoord1[1] === 0) {
      for (let i = 0; i < letter2 - letter1 + 1; i++) {
        if (this.board[letter1 + i][splitCoord1[1] - 1] !== 'E') return false;
      }
    } else {
      for (let i = 0; i < splitCoord2[1] - splitCoord1[1] + 1; i++) {
        if (this.board[letter1][splitCoord1[1] - 1 + i] !== 'E') return false;
      }
    }
    return true;
  }

  // Clears preview from board
  clearPreview() {
    let rowNum = 0;
    this.board.forEach((row) => {
      const rowTest = (each) => each === 'E' || each === 'N';
      if (row.every(rowTest)) {
        this.board[rowNum] = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
      } else {
        row.forEach((e) => {
          if (e === 'N') {
            const nIndex = row.findIndex((grid) => grid === 'N');
            if (nIndex === -1) return;
            this.board[rowNum][nIndex] = 'E';
          }
        });
      }
      rowNum++;
    });
  }

  // Check if an attack hits a ship, if true mark the ship hit
  receiveAttack(coord) {
    let coordsToSplit;
    if (coord.startsWith('X')) {
      coordsToSplit = coord.slice(1);
    } else {
      coordsToSplit = coord;
    }
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const splitCoord = [coordsToSplit.slice(0, 1), coordsToSplit.slice(1, 3)];
    const letter = letters.indexOf(splitCoord[0]);
    if (this.board[letter][splitCoord[1] - 1] === 'X') return false;
    if (this.board[letter][splitCoord[1] - 1] === 'O') return false;
    if (this.board[letter][splitCoord[1] - 1] === 'E') {
      this.board[letter][splitCoord[1] - 1] = 'O';
      return true;
    }
    const hitSpot = this.ships.find((e) => {
      if (e[3] === this.board[letter][splitCoord[1] - 1]) return true;
      return false;
    });
    if (hitSpot[0].split('')[1] === hitSpot[1].split('')[1]) {
      const letter1 = letters.indexOf(hitSpot[0].split('')[0]);
      hitSpot[2].hit(letter - letter1 + 1);
    } else {
      hitSpot[2].hit(splitCoord[1] - hitSpot[0] + 1);
    }
    this.board[letter][splitCoord[1] - 1] = 'X';
    return true;
  }

  // Check if all ships have been sunk
  shipsSunk() {
    const test = (e) => e[2].isSunk();
    const check = this.ships.every(test);
    if (check) return true;
    return false;
  }
}

export default GameBoard;
