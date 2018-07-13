
const calculator = (string) => {
    const split1 = string.split(' ')//['1','+2','-3','+1']
    const map = split1.map(x => x.Number())
    const reduce = map.reduce((acc,value) => acc + value)
    return reduce
}
export default calculator