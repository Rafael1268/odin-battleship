/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import './style.css';
import GameBoard from './gameboard';
import Player from './players';
import render from './render';

let computerBoard;
let playerBoard;

let player;
let computer;

function gridClick(event) {
  if (event.target.className !== 'grid') return;
  const turn = player.checkTurn();
  if (turn === false) return;
  player.attack(event);
  const won = computerBoard.shipsSunk();
  if (won) {
    const winScreen = document.getElementById('won');
    winScreen.classList.remove('hide');
    return;
  }
  render();
  player.turn();
  setTimeout(() => {
    computer.attack();
    render();
  }, 1000);
  setTimeout(() => {
    const lost = playerBoard.shipsSunk();
    if (lost) {
      const lostScreen = document.getElementById('lost');
      lostScreen.classList.remove('hide');
      return;
    }
    player.turn();
  }, 1100);
}

function createGame() {
  computerBoard = new GameBoard();
  computerBoard.place('A1', 'A5');
  computerBoard.place('B1', 'B4');
  computerBoard.place('C1', 'C3');
  computerBoard.place('D1', 'D3');
  computerBoard.place('E1', 'E2');
  playerBoard = new GameBoard();
  playerBoard.place('A1', 'A5');
  playerBoard.place('B1', 'B4');
  playerBoard.place('C1', 'C3');
  playerBoard.place('D1', 'D3');
  playerBoard.place('E1', 'E2');
  player = new Player('player', 0);
  computer = new Player('computer', 1);
  const enemyGrid = document.querySelector('#enemyBoard');
  enemyGrid.addEventListener('click', () => gridClick(event));
  render();
  player.turn();
}

createGame();

export { computerBoard, playerBoard, computer };
