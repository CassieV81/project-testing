import capitalize from './capitalize'

test('value should be Value', () => {
  expect(capitalize('value')).toBe('Value');
});