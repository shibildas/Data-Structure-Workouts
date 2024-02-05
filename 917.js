// 917. Reverse Only Letters
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

var reverseOnlyLetters = function(s) {
    let charArray = s.split('');
    const isCharacter=(char)=>/[a-zA-Z]/.test(char);
    let i=0;
    let j=charArray.length-1;
    while(i<j){
        while(i < j && !isCharacter(charArray[i])) i++;
        while(i < j && !isCharacter(charArray[j])) j--;
        [charArray[i],charArray[j]]=[charArray[j],charArray[i]];
        i++;
        j--;
    }
    return charArray.join('')
};