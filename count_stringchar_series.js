const string = "aaskkaaknnnnwniiii";

let compressionString = "";
let charCount = 1;

for (let index = 0; index < string.length; index++) {
    const SPACE = " ";

    if (string[index] === string[index + 1]) {
        charCount++;
    } else {
        compressionString = compressionString + string[index] + "=" + charCount + SPACE;
        charCount = 1;
    }
}

console.log(compressionString);
