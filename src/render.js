/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import { computerBoard, playerBoard } from './index';

// Renders board
function render() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let num1 = 0;
  let num2 = 1;
  playerBoard.board.forEach((row) => {
    row.forEach((grid) => {
      const gridS = document.getElementById(`${letters[num1]}${num2}`);
      switch (grid) {
        case 'E':
          gridS.style.backgroundColor = 'var(--background-d-c)';
          break;
        case 'O':
          gridS.style.backgroundColor = 'var(--attacker-l-c)';
          break;
        case 'X':
          gridS.style.backgroundColor = 'var(--attacker-c)';
          break;
        case 'N':
          gridS.style.backgroundColor = 'var(--defender-l-c)';
          break;
        default:
          gridS.style.backgroundColor = 'var(--defender-c)';
          break;
      }
      num2++;
    });
    num1++;
    num2 = 1;
  });
  num1 = 0;
  num2 = 1;
  computerBoard.board.forEach((row) => {
    row.forEach((grid) => {
      const gridS = document.getElementById(`X${letters[num1]}${num2}`);
      switch (grid) {
        case 'O':
          gridS.style.backgroundColor = 'var(--defender-l-c)';
          break;
        case 'X':
          gridS.style.backgroundColor = 'var(--defender-c)';
          break;
        default:
          break;
      }
      num2++;
    });
    num1++;
    num2 = 1;
  });
}

export default render;
