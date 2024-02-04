// 1189. Maximum Number of Balloons
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

var maxNumberOfBalloons = function(text) {
    let balloon='balloon';
    let textArr=text.split('');
    let j=0
    let count=0;
    while (true) {
        for (let j = 0; j < balloon.length; j++) {
            const index = textArr.indexOf(balloon[j]);
            
            if (index !== -1) {
                textArr.splice(index, 1);
            } else {
                return count;
            }
        }

        count++;
    }
};