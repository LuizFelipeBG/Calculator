const format = (string) =>{
  const split1 = string.split('+')//['1-2-3','1']
  const trim1 = split1.map(x => x.trim())
  const join1 = trim1.join(' +') //['1-2-3 +1']
  const split2 = join1.split('-')//['1','2','3 +1']
  const trim2 = split2.map(x =>x.trim())
  const join2 = trim2.join(' -')//['1 -2 -3 +1']
  const trim3 = join2.trim()
  return trim3
}

export default format
