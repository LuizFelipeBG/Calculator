
const calculator = (formula) => {
    return formula.split(' ')//['1','+2','-3','+1']
    .map(x => parseInt(x))
    .reduce((acc,value) => acc + value)
}
export default calculator
