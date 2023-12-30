const add = function(num1 = 0, num2 = 0) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((accumulator, num) => (accumulator + num), 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, num) => (accumulator * num), 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num < 2) {
    return 1;
  } else {
    let fact = 1;
    for (i = 2; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
