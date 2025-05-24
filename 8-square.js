#!/usr/bin/node

// Get the first argument from command line
const size = parseInt(process.argv[2], 10);

// Check if the argument is a valid integer
if (isNaN(size) || size < 1) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
