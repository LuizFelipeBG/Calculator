import Result from './result'

test('test compilation function', () => {
    expect(Result('1    +2 -3     +1')).toEqual(1)
})
test('test compilation function', () => {
    expect(Result('-1    +2 -3     +1')).toEqual(-1)
})
