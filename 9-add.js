#!/usr/bin/node

// Define the function
function add(a, b) {
  return a + b;
}

// Get arguments from command line
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

// Check if both arguments are valid numbers
if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  console.log(add(a, b));
}
