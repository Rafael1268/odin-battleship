/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import { computerBoard, playerBoard, computer } from './index';

let playTurn = 1;

class Player {
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  // Switches whos turn it is
  turn() {
    const playerSign = document.getElementById('player');
    const computerSign = document.getElementById('computer');
    if (playTurn === 0) {
      playTurn = 1;
      playerSign.style.backgroundColor = 'var(--background-c)';
      playerSign.style.color = 'var(--defender-c)';
      computerSign.style.backgroundColor = 'var(--attacker-c)';
      computerSign.style.color = 'var(--background-c)';
    } else {
      playTurn = 0;
      playerSign.style.backgroundColor = 'var(--defender-c)';
      playerSign.style.color = 'var(--background-c)';
      computerSign.style.backgroundColor = 'var(--background-c)';
      computerSign.style.color = 'var(--attacker-c)';
    }
  }

  // Checks whos turn it is
  checkTurn() {
    if (playTurn === this.id) {
      return true;
    }
    return false;
  }

  // Attacks a spot on the board
  attack(e) {
    if (this.type === 'player') {
      computerBoard.receiveAttack(e.target.id);
    } else {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const randLetter = Math.floor(Math.random() * 9);
      const randNumber = Math.floor(Math.random() * 9);
      const status = playerBoard.receiveAttack(
        `${letters[randLetter]}${randNumber + 1}`
      );
      if (status) return;
      computer.attack();
    }
  }
}

export default Player;
