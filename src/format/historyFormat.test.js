import historyFormat from './historyFormat'

test('Change 1 -5 +2 +2 to 1 - 5 + 2 + 2 from history',() => {
    expect(historyFormat('1 -5 +2 +2')).toEqual('1 - 5 + 2 + 2')
}) 
test('Change -1 -5 +2 +2 to -1 - 5 + 2 + 2 from history',() => {
    expect(historyFormat('- 1 -5 +2 +2')).toEqual('- 1 - 5 + 2 + 2')
}) 