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

let newRotation = 0;
let newNumber = 0;
const newShips = [5, 4, 3, 3, 2];

const letterSelect = document.getElementById('letterSelect');
const numberSelect = document.getElementById('numberSelect');
const rotateBtn = document.getElementById('rotateBtn');
const placeBtn = document.getElementById('placeBtn');

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
  computerBoard.place('A1', 'A5');
  computerBoard.place('B1', 'B4');
  computerBoard.place('C1', 'C3');
  computerBoard.place('D1', 'D3');
  computerBoard.place('E1', 'E2');
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

function newShip() {
  let coord2;
  if (newRotation === 0) {
    coord2 = `${letterSelect.value}${
      Number(numberSelect.value) + newShips[newNumber] - 1
    }`;
  }
  if (newRotation === 1) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const letterI = letters.indexOf(letterSelect.value);
    coord2 = `${letters[letterI + newShips[newNumber] - 1]}${
      numberSelect.value
    }`;
  }
  const coord1 = `${letterSelect.value}${numberSelect.value}`;
  playerBoard.preview(coord1, coord2);
  render();
}

function placeNewShip() {
  newNumber++;
  if (newNumber === 5) {
    const controls = document.querySelector('.controls');
    controls.classList.add('hide');
    createGame();
  }
}

playerBoard = new GameBoard();
computerBoard = new GameBoard();

letterSelect.addEventListener('change', () => newShip());
numberSelect.addEventListener('change', () => newShip());
rotateBtn.addEventListener('click', () => {
  if (newRotation === 0) {
    newRotation = 1;
  } else {
    newRotation = 0;
  }
  newShip();
});
placeBtn.addEventListener('click', () => placeNewShip());

newShip();

export { computerBoard, playerBoard, computer };
