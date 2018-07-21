const isInteger = (formula) =>{
 const form = formula.split('')//['1','a','+']

//   for(var i=0; i<formula.length;i++){
//     if((isNaN(parseInt(form[0]))===true && isNaN(parseInt(form[i>0]))===false && (form[0] ==='+' || form[0] ==='-') )){
//       return true
//     }
//     if(isNaN(parseInt(form[i]))===true && i != '+' && i != '-'){
//       return false
//     }
//   }
//
//   return true
// }
if (form[0] === '+' || form[0] ==='-' && isNaN(parseInt(form[0]))===false){
  for(var i=0; i<formula.length;i++){
        if () {
          return true
        }
        if(isNaN(parseInt(form[i]))===true && i != '+' && i != '-'){
          return false
        }
      }
        return true
  }
}
//consertar o codigo e satisfazer os testes



export default isInteger
