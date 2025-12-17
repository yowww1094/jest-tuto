const {sum, substract} = require('./script.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 1 from 2 to equal -1', () => {
  expect(substract(1, 2)).toBe(-1);
});