import arrayContainsNumbers from './../arrays.js';

const testPass = [1, 1, 2, 4, 5, 6];

test('should data be array of numbers', () => {
  expect(arrayContainsNumbers(testPass)).toBe(true);
});
