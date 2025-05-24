
// Check if the first argument can be converted to a number
if (process.argv.length > 2) {
    const num = parseFloat(process.argv[2]);
    if (!isNaN(num)) {
        console.log(`My number: ${parseInt(num)}`);
    } else {
        console.log("Not a number");
    }
} else {
    console.log("Not a number");}
