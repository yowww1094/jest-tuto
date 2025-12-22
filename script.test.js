const {sum, substract, multiply} = require('./script.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 1 from 2 to equal 1', () => {
  expect(substract(2, 1)).toBe(1);
});

test('multiply 2 by 2 to be 4', () => {
  expect(multiply(2, 2)).toBe(4);
});