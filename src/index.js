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
}

createGame();
render();
player.turn();

const enemyGrid = document.querySelector('#enemyBoard');
enemyGrid.addEventListener('click', () => {
  if (event.target.className !== 'grid') return;
  const turn = player.checkTurn();
  if (turn === false) return;
  player.attack(event);
  const won = computerBoard.shipsSunk();
  if (won) {
    console.log('You won!');
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
      console.log('!You lost');
      return;
    }
    player.turn();
  }, 1100);
});

export { computerBoard, playerBoard, computer };
