import calculator from '../calculator/calculator';
import format from '../format/format';

const result = (formula) => {
    return calculator(format(formula))
}
export default result 