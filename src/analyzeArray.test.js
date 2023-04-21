import analyzeArray from './analyzeArray';

test('returns correct object for array [1, 2, 3]', () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  });
});

test('returns correct object for array [-1, -2, -3]', () => {
  expect(analyzeArray([-1, -2, -3])).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3
  });
});

test('returns correct object for array [10, 20, 30, 40, 50]', () => {
  expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5
  });
});

test('returns correct object for array [0]', () => {
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1
  });
});

test('throws error for invalid input', () => {
  expect(() => analyzeArray('not an array')).toThrow('Input is not an array');
  expect(() => analyzeArray([1, 2, 'not a number'])).toThrow('Array contains non-number elements');
  expect(() => analyzeArray([NaN, 2, 3])).toThrow('Array contains non-number elements');
});


