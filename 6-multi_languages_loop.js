const phrases = ["C is fun", "Python is cool", "JavaScript is amazing"];

let i = 0;
let output = "";

while (i < phrases.length) {
  output += phrases[i] + "\n";
  i++;
}

console.log(output.trim());
