import isInteger from './textInInputEnd';

test('isInteger function string in end', () => {
  expect(isInteger('1ns')).toEqual(false)
})

test('string full number', () => {
  expect(isInteger('123')).toEqual(true)
})

test('string and operator complet', () => {
  expect(isInteger('123- 43 +43 -65')).toEqual(true)
})
