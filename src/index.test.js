/* eslint-disable no-undef */
import { Ship } from './index';

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
