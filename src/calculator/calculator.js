
const calculator = (string) => {
    const split1 = string.split(' ')//['1','+2','-3','+1']
    const map = split1.map(x => parseInt(x))
    const result = map.reduce((acc,value) => acc + value)
    return result
}
export default calculator
