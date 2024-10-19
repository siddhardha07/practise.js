const string = "aabc"
let subStringPalindrome = "";
let reverse = string.length - 1;
if (string.length <= 2) {
    subStringPalindrome = string;

} else {
    for (let index = 0; index < string.length; index++) {

        for (let reverseIndex = string.length - 1; reverseIndex >= index; reverseIndex--) {
            let starting = index;
            let ending = reverseIndex;
            while (string[starting] === string[ending] && starting < ending) {
                console.log(string[starting]);
                console.log(string[ending]);
                ending--;
                starting++;
            }
            if (starting === (ending || ending - 1)) {

                let subStringPalindrome1 = "";
                for (let subStringIndex = index; subStringIndex <= reverseIndex; subStringIndex++) {
                    subStringPalindrome1 = subStringPalindrome1 + string[subStringIndex];
                }

                if (subStringPalindrome1.length > subStringPalindrome.length) {
                    subStringPalindrome = subStringPalindrome1;
                    subStringPalindrome1 = "";
                }
            }
        }
    }
}

console.log(subStringPalindrome);
