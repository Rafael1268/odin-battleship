/* eslint-disable no-undef */
import Ship from './ship';
import GameBoard from './gameboard';

test('Ship length', () => {
  const ship = new Ship(4);
  expect(ship.length).toEqual(4);
});

test('Ship hits', () => {
  const ship = new Ship(3);
  expect(ship.hits).toEqual(['O', 'O', 'O']);
});

test('Ship hits 2', () => {
  const ship = new Ship(3);
  ship.hit(2);
  expect(ship.hits).toEqual(['O', 'X', 'O']);
});

test('Place ship from B2 to B6', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'B6');
  expect(gameBoard.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', '1', '1', '1', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Place ship from B2 to D2', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  expect(gameBoard.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Hit C3', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.receiveAttack('C2');
  expect(gameBoard.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'X', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Hit C3', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.receiveAttack('C2');
  expect(gameBoard.ships[0][2].hits).toEqual(['O', 'X', 'O']);
});
