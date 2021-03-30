function calculate2(number1, number2, operator) {
    switch (operator) {
        case "+" : {
            return number1 + number2;
        }
        case "-" : {
            return number1 - number2;
        }
        case "x" : {
            return number1 * number2;
        }
        case "/" : {
            return number1 / number2;
        }
        case "%" : {
            return number1 % number2;
        }
        default: {
            console.log(`${operator} is not managed by our calculator`);
        }
    }
}