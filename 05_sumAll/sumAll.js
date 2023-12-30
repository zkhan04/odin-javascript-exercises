const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    } else if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return 'ERROR';
    }

    let sum = (num1 + num2) / 2;
    sum *= Math.abs(num1 - num2) + 1;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
