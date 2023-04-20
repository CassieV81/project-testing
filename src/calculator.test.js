import calculator from "./calculator";

test('2 + 2 should be 4', () => {
  expect(calculator().add(2, 2)).toBe(4);
});

test('3 * 2 should be 6', () => {
  expect(calculator().multiply(3, 2)).toBe(6);
});

test('234 - 30 should be 204', () => {
  expect(calculator().subtract(234, 30)).toBe(204);
});

test('2 / "1" should be Not an integer', () => {
  expect(calculator().divide(2, "1")).toBe('Not an integer');
});

test('Only one argument provided should return Not an integer', () => {
  expect(calculator().add(2, )).toBe("Not an integer");
});


