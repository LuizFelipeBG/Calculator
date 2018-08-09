import historyFormat from './formatDisplay'

test('Returns the formatted formula for display',() => {
    expect(historyFormat('1 -5 +2 +2')).toEqual('1 - 5 + 2 + 2')
}) 
test('Return the formatted formula whit negative start for display',() => {
    expect(historyFormat('-1 -5 +2 +2')).toEqual('- 1 - 5 + 2 + 2')
}) 

test('should properly format multiple digit numbers with sign - in start',() => {
    expect(historyFormat('-10 -20 -30')).toEqual('- 10 - 20 - 30')
})
test('should properly format multiple digit numbers with sign + in start',() => {
    expect(historyFormat('+10 -20 -30')).toEqual('+ 10 - 20 - 30')
})
