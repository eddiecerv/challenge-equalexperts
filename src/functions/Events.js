const BASIC_OPERATORS = ['*', '/', '+', '-'];
export const INFINITE_DIVIDE_INTO_ZERO_MESSAGE = 'You cannot divide into 0';

export const operateNumbers = (numberA, numberB, type) => {
    numberA = parseFloat(numberA);
    numberB = parseFloat(numberB);
    switch(type) {
        case '-':
            return numberA - numberB;
        case '/':
            if( numberB > 0 ){
                return numberA / numberB;
            } else {
                return INFINITE_DIVIDE_INTO_ZERO_MESSAGE;
            }
        case '*':
            return numberA * numberB;
        default:
            return numberA + numberB;
    }
}

export const doOperation = (value) => {
  let newValue = value;
  BASIC_OPERATORS.forEach( operator => {
    const values = value.split(operator);
    if( values.length > 1 && !isNaN(values[0]) && !isNaN(values[1])) {
        newValue = operateNumbers(values[0], values[1], operator).toString();
    }
  })

  return newValue;
}