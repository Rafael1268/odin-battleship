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
let cNewNumber = 0;
const newShips = [5, 4, 3, 3, 2];

const letterSelect = document.getElementById('letterSelect');
const numberSelect = document.getElementById('numberSelect');
const rotateBtn = document.getElementById('rotateBtn');
const placeBtn = document.getElementById('placeBtn');

// Attack computer board when player clicks on a grid
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

// Adds random ship to computer board
function computerShip() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const randLetter = Math.floor(Math.random() * 9);
  const randNumber = Math.floor(Math.random() * 9) + 1;
  const randRotation = Math.floor(Math.random() * 2);
  let coord2;
  if (randRotation === 0) {
    coord2 = `${letters[randLetter]}${randNumber + newShips[cNewNumber] - 1}`;
  } else {
    coord2 = `${letters[randLetter + newShips[cNewNumber] - 1]}${randNumber}`;
  }
  if (letters[randLetter + newShips[cNewNumber] - 1] === undefined) {
    computerShip();
    return;
  }
  if (randNumber + newShips[cNewNumber] - 1 > 10) {
    computerShip();
    return;
  }
  const computerStatus = computerBoard.checkClear(
    `${letters[randLetter]}${randNumber}`,
    coord2
  );
  if (computerStatus === false) {
    computerShip();
    return;
  }
  computerBoard.place(`${letters[randLetter]}${randNumber}`, coord2);
  cNewNumber++;
}

// Creates game
function createGame() {
  player = new Player('player', 0);
  computer = new Player('computer', 1);
  const enemyGrid = document.querySelector('#enemyBoard');
  enemyGrid.addEventListener('click', () => gridClick(event));
  render();
  player.turn();
}

// Previews ship while placing
function newShip() {
  let coord1 = `${letterSelect.value}${numberSelect.value}`;
  let coord2;
  if (letterSelect.value === ' ' || numberSelect.value === ' ') {
    coord1 = ' ';
    coord2 = ' ';
    playerBoard.clearPreview();
    render();
    return;
  }
  if (newRotation === 0) {
    if (Number(numberSelect.value) + newShips[newNumber] > 11) {
      coord1 = ' ';
      coord2 = ' ';
      letterSelect.value = ' ';
      numberSelect.value = ' ';
      playerBoard.clearPreview();
      render();
      return;
    }
    coord2 = `${letterSelect.value}${
      Number(numberSelect.value) + newShips[newNumber] - 1
    }`;
  } else {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const letterI = letters.indexOf(letterSelect.value);
    if (letterI + newShips[newNumber] > 10) {
      coord1 = ' ';
      coord2 = ' ';
      letterSelect.value = ' ';
      numberSelect.value = ' ';
      playerBoard.clearPreview();
      render();
      return;
    }
    coord2 = `${letters[letterI + newShips[newNumber] - 1]}${
      numberSelect.value
    }`;
  }
  const previewStatus = playerBoard.preview(coord1, coord2);
  if (previewStatus === false) {
    coord1 = ' ';
    coord2 = ' ';
    letterSelect.value = ' ';
    numberSelect.value = ' ';
    playerBoard.clearPreview();
  }
  render();
}

// Places ship on board
function placeNewShip() {
  if (letterSelect.value === ' ' || numberSelect.value === ' ') return;
  playerBoard.clearPreview();
  let coord2;
  if (newRotation === 0) {
    coord2 = `${letterSelect.value}${
      Number(numberSelect.value) + newShips[newNumber] - 1
    }`;
  } else {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const letterI = letters.indexOf(letterSelect.value);
    coord2 = `${letters[letterI + newShips[newNumber] - 1]}${
      numberSelect.value
    }`;
  }
  playerBoard.place(`${letterSelect.value}${numberSelect.value}`, coord2);
  newShip();
  newNumber++;
  if (newNumber === newShips.length) {
    const controls = document.querySelector('.controls');
    controls.classList.add('hide');
    createGame();
    newShip();
  }
}

playerBoard = new GameBoard();
computerBoard = new GameBoard();

for (let i = 0; i < newShips.length; i++) {
  computerShip();
}

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

render();
letterSelect.value = ' ';
numberSelect.value = ' ';

export { computerBoard, playerBoard, computer };
