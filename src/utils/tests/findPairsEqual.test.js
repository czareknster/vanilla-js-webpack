import findPairsEqual from './../findPairsEqual';

const input = [1, 1, 2, 4, 5, 6];
const wrongInput = [1, 'sdf', 2, 4, 5, {}];

const expectedResult = [
  [4, 6],
  [5, 5]
];

test('should return correct value', () => {
  expect(findPairsEqual(input, 10)).toEqual(expectedResult);
});

test('should return input type error', () => {
  expect.assertions(1);
  try {
    findPairsEqual({}, 1);
  } catch (error) {
    expect(error.message).toBe('Input data is not array');
  }
});

test('should return input contains wrong data types', () => {
  expect.assertions(1);
  try {
    findPairsEqual(wrongInput, 10);
  } catch (error) {
    expect(error.message).toBe('Input array contain not only numbers');
  }
});
