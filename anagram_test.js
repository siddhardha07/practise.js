// const string1 = ""; const string2 = ""; const expectedOutput = true;
// const string1 = ""; const string2 = "a"; const expectedOutput = false;
// const string1 = "A"; const string2 = ""; const expectedOutput = false;
// const string1 = "a"; const string2 = "A"; const expectedOutput = false;
// const string1 = "A"; const string2 = "A"; const expectedOutput = true;
// const string1 = "aab"; const string2 = "aba"; const expectedOutput = true;
// const string1 = "aab"; const string2 = "abba"; const expectedOutput = false;
// const string1 = "deno"; const string2 = "node"; const expectedOutput = true;
// const string1 = "listen"; const string2 = "silent"; const expectedOutput = true;
// const string1 = "plaster"; const string2 = "stapler"; const expectedOutput = true;
const string1 = "llssll"; const string2 = "lllsss"; const expectedOutput = false;
// const string1 = "CASE"; const string2 = "SACE"; const expectedOutput = true;
// const string1 = "astronomer"; const string2 = "moonstarer"; const expectedOutput = true;

let isAnagram = false;

if (string1.length === string2.length) {

    isAnagram = true;
    for (let index = 0; index < string1.length && isAnagram; index++) {

        let charInString1 = 0;
        for (let stringIndex = 0; stringIndex < string1.length; stringIndex++) {
            if (string1[index] === string1[stringIndex]) {
                charInString1++;
            }
        }

        let charInString2 = 0;
        for (let stringIndex = 0; stringIndex < string1.length; stringIndex++) {
            if (string1[index] === string2[stringIndex]) {
                charInString2++;
            }
        }

        if (charInString1 !== charInString2) {
            isAnagram = false;
        }
    }
}

console.log(isAnagram, isAnagram === expectedOutput);
