import format from './format'

test('Transform the string in array [x, -x, x, x]', () => {
        expect(format('1-2-3+1')).toEqual('1 -2 -3 +1')
})

test('Transform the string in array [x, -x, x, x]',() => {
        expect(format('1  -2 -3  +1')).toEqual('1 -2 -3 +1')
})

test('Transform the string in array [-x, -x, x, x]',() => {
        expect(format('-1-2-3+1')).toEqual('-1 -2 -3 +1')
})
