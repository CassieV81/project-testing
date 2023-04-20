import capitalize from './capitalize'

test('"value" should be "Value"', () => {
  expect(capitalize('value')).toBe('Value');
});

test('"angel" should be "Angel"', () => {
  expect(capitalize('angel')).toBe('Angel');
});

test('"ALLCAP" should be "ALLCAP"', () => {
  expect(capitalize('ALLCAP')).toBe('ALLCAP');
});

test('"1234" should be "1234"', () => {
  expect(capitalize('1234')).toBe('1234');
});

test('1234 should be "Not a string"', () => {
  expect(capitalize(1234)).toBe('Not a string');
});