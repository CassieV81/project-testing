import ceaserCipher from './ceaserCipher'

test('applies a shift of 1 to the string "abc" to get "bcd"', () => {
  expect(ceaserCipher('abc', 1)).toBe('bcd');
});

test('applies a shift of -1 to the string "bcd" to get "abc"', () => {
  expect(ceaserCipher('bcd', -1)).toBe('abc');
});

test('wraps from z to a correctly', () => {
  expect(ceaserCipher('xyz', 3)).toBe('abc');
});

test('applies a shift of 10 to the string "hello" to get "rovvy"', () => {
  expect(ceaserCipher('hello', 10)).toBe('rovvy');
});

test('handles non-alphabetic characters correctly and preserves case', () => {
  expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles shifts greater than 26 correctly', () => {
  expect(ceaserCipher('hello', 30)).toBe('lipps');
});

test('handles shifts less than -26 correctly', () => {
  expect(ceaserCipher('hello', -30)).toBe('dahhk');
});

test('handles multiple sentences correctly', () => {
  expect(ceaserCipher('The quick brown fox jumps over the lazy dog.', 3)).toBe('Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj.');
});

test('handles non string attribute as Not  valid', () => {
  expect(ceaserCipher(12345, 7)).toBe('Not a valid attribute');
});

test('handles non-nunber shift atrribute as Not valid', () => {
  expect(ceaserCipher('string', '5')).toBe('Not a valid attribute');
})

