import reverseString from './reverseString'

test('man should be nam', () => {
  expect(reverseString('man')).toBe('nam');
});

test('"Hello World" should be "dlroW olleH"', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('"234567" should be "765432"', () => {
  expect(reverseString('234567')).toBe('765432');
});

test('"How are you???" should be "???uoy era woH"', () => {
  expect(reverseString('How are you???')).toBe('???uoy era woH');
});

test('234567 should be Not a string', () => {
  expect(reverseString(234567)).toBe('Not a string');
});