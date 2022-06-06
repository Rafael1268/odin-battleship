import GameBoard from './gameboard';
import Player from './players';

const computerBoard = new GameBoard();
const playerBoard = new GameBoard();

const player = new Player('player', 0);
const computer = new Player('computer', 1);

export { computerBoard, playerBoard };
