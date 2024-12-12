# JavaScript Unhandled Exception

This repository demonstrates a common JavaScript error involving unhandled exceptions. The `calculate` function attempts to perform arithmetic operations based on the input operator. However, the code lacks proper exception handling, which leads to the application crashing if an invalid operation or division by zero is attempted.

The `bug.js` file contains the buggy code.  `bugSolution.js` presents a corrected version demonstrating proper exception handling and alternative approaches for robustness.

## How to Run

1. Clone the repository
2. Navigate to the repository's directory in your terminal
3. Run `node bug.js` to see the error
4. Run `node bugSolution.js` to see the improved, error-handled version