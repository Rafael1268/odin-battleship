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

test('Hit C2 and C3', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.receiveAttack('C2');
  gameBoard.receiveAttack('C3');
  expect(gameBoard.board).toEqual([
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'X', 'O', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', '1', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ]);
});

test('Hit C2', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.receiveAttack('C2');
  expect(gameBoard.ships[0][2].hits).toEqual(['O', 'X', 'O']);
});

test('Check if all ships are sunk 1', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.place('A6', 'E6');
  gameBoard.receiveAttack('B6');
  expect(gameBoard.shipsSunk()).toEqual(false);
});

test('Check if all ships are sunk 2', () => {
  const gameBoard = new GameBoard();
  gameBoard.place('B2', 'D2');
  gameBoard.place('A6', 'C6');
  gameBoard.receiveAttack('B2');
  gameBoard.receiveAttack('C2');
  gameBoard.receiveAttack('D2');
  gameBoard.receiveAttack('A6');
  gameBoard.receiveAttack('B6');
  gameBoard.receiveAttack('C6');
  expect(gameBoard.shipsSunk()).toEqual(true);
});
