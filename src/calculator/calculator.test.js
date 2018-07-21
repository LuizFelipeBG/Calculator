import calculator from './calculator'

test('final score', () => {
    expect(calculator('1 +2 -3 +1')).toEqual(1)
})
test('final score', () => {
    expect(calculator('-1 +2 -3 +1')).toEqual(-1)
})
