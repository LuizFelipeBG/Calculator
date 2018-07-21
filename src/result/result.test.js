import result from './result';

test('test compilation function', () => {
    expect(result('1    +2 -3     +1')).toEqual(1)
})
test('test compilation function', () => {
    expect(result('-1    +2 -3     +1')).toEqual(-1)
})
test('test string return NaN', () => {
    expect(result('-1 --2 +3')).toEqual(NaN)
})
