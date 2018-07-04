import calculator from './calculator'

test('add string 1 + 2 + 3', () => {
    const A = calculator("1 + 2 + 3")
    expect(A).toEqual(6)
})
// test('add string 1 - 2 - 3',() => {
//     expect(    calculator("1 - 2 - 3")).ToEqual(-4)       
// })
// test('add string 1 - 2 + 3',() => {
//     expect(calculator("1 - 2 + 3").ToEqual(2))
// })
// test('add string -1 + 2 + 3',() => {
//     expect(calculator("-1 + 2 + 3").ToEqual(4))
// })

