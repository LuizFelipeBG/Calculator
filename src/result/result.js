import calculator from '../calculator/calculator';
import format from '../format/format';

const result = (formula) => {
    if (calculator(format(formula)) === NaN){
      return 'unspent value'
    }
    return calculator(format(formula))

}
export default result
