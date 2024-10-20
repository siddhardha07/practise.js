const string = "abbabba";
let subStringpalindrome = "";

for (let index = 0; index < string.length; index++) {

    let reverseIndex = string.length;
    for (let startIndex = index; startIndex < reverseIndex; reverseIndex--) {

        let subString = "";
        let reverseString = "";
        for (let subStringIndex = startIndex; subStringIndex < reverseIndex; subStringIndex++) {
            subString = subString + string[subStringIndex];
            reverseString = string[subStringIndex] + reverseString;
        }
        
        let palindrome = "";
        if (subString === reverseString) {
            palindrome = subString;
        }

        if (palindrome.length > subStringpalindrome.length) {
            subStringpalindrome = palindrome;
        }
    }
}

console.log(subStringpalindrome);
