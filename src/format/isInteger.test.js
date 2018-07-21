import isInteger from './isInteger';

test('isInteger function string in end', () => {
  expect(isInteger('1ns')).toEqual(false)
})
test('isInteger function string in start', () => {
  expect(isInteger('ns1')).toEqual(false)
})
test('string full number', () => {
  expect(isInteger('123')).toEqual(true)
})
test('string full number ,operator in end', () => {
  expect(isInteger('123-')).toEqual(false)
})
test('only operator', () => {
  expect(isInteger('-')).toEqual(false)
})
test('number with operator start', () => {
  expect(isInteger('+123')).toEqual(true)
  expect(isInteger('-123')).toEqual(true)
})
test('isInteger function operator in start the string', () => {
  expect(isInteger('+ns1')).toEqual(false)
})
