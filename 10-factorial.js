#!/usr/bin/node

// Define the recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from command line
const num = parseInt(process.argv[2], 10);

// Print the computed factorial
console.log(factorial(num));

