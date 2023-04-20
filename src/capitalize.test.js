import capitalize from './capitalize'

test('value should be Value', () => {
  expect(capitalize('value')).toBe('Value');
});

test('angel should be Angel', () => {
  expect(capitalize('angel')).toBe('Angel');
});

test('CAP should be CAP', () => {
  expect(capitalize('CAP')).toBe('CAP');
});