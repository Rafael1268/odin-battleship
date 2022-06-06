/* eslint-disable class-methods-use-this */
import { computerBoard, playerBoard } from './index';

let playTurn = 0;

class Player {
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  turn() {
    if (playTurn === 0) {
      playTurn = 1;
    } else {
      playTurn = 0;
    }
  }

  checkTurn() {
    if (playTurn === this.id) {
      return true;
    }
    return false;
  }

  attack(e) {
    if (this.type === 'player') {
      const status = computerBoard.receiveAttack(e.target.id);
      if (status) return;
      this.attack(e);
    } else {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const randLetter = Math.floor(Math.random() * 9);
      const randNumber = Math.floor(Math.random() * 9);
      const status = playerBoard.receiveAttack(
        `${letters[randLetter]}${randNumber}`
      );
      if (status) return;
      this.attack();
    }
  }
}

export default Player;
