const textInInput = (formula) =>{
 const form = formula.split('')//['1','a','+']
      for(var i=0;i < form.length ;i++){
      if(form[i] != '+' && form[i] != '-' && form[i] != ' ') {
       if (isNaN(parseInt(form[i]))===true){
           return false
        }
      }
    }
    return true
  }
  




export default textInInput
