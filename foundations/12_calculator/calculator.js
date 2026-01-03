const add = function(op1, op2) {
	return op1 + op2;
};

const subtract = function(op1, op2) {
	return op1 - op2;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  	return arr.reduce((total, num) => total * num, 1);
};

const power = function(op1, op2) {
	if (op2 === 0) {
    return 1;
  }
  return op1 * power(op1, op2 - 1);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
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
