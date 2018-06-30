const somar = require('./somar');

test('somando 1 + 2 com resultado 3', () => {
  expect(somar(1, 2)).toBe(3);
});
