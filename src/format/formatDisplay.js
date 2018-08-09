
const formatDisplay = (formula) => {//'-1 -2 -3 -4'
const formatDisplay = formula.split('+')//['-1-2-3','1']
    .map(x => x.trim())
    .join(' + ') //['-1-2-3 + 1']
    .split('-')//['1','2','3 +1']
    .map(x =>x.trim())
    .join(' - ')//'- 1 - 2 - 3 + 1'
    .trim()
    return formatDisplay

}
export default formatDisplay
