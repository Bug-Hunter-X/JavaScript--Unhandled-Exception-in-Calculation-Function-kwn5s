function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity; // or return 0; or throw a more specific error
  }
  return a / b;
}

function calculate(a, b, operation) {
  try {
    switch (operation) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error('Invalid operation');
    }
  } catch (error) {
    console.error('Error:', error.message); 
    return NaN; // Or handle the error as needed
  }
}

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: Infinity
console.log(calculate(10, 5, '%')); // Output: Error: Invalid operation
console.log(calculate(10, 'a', '+')); //Output: Error: Invalid operation