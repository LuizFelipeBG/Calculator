const format = (formula) =>{
  return formula.split('+')//['1-2-3','1']
    .map(x => x.trim())
    .join(' +') //['1-2-3 +1']
    .split('-')//['1','2','3 +1']
    .map(x =>x.trim())
    .join(' -')//['1 -2 -3 +1']
    .trim()//.split(' ').map(x => parseInt(x)).map(x => toString(x)).join(' ')

}

export default format
