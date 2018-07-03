const result = require('./result')

test('add string 1 + 2 + 3',() => {
    expect(result("1 + 2 + 3").ToEqual(6))
})
test('add string 1 - 2 - 3',() => {
    expect(result("1 - 2 - 3").ToEqual(-4))
})
test('add string 1 - 2 + 3',() => {
    expect(result("1 - 2 + 3").ToEqual(2))
})
test('add string -1 + 2 + 3',() => {
    expect(result("-1 + 2 + 3").ToEqual(4))
})
