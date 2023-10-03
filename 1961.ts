// 1961. Check If String Is a Prefix of Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

 

// Example 1:

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
var isPrefixString = function(s:string, words:string[]) {
    let string=''
    for(let i=0;i<words.length;i++){
        string+=words[i]
        if(string===s) return true
    }
    return false
};