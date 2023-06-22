// 859. Buddy Strings
// Easy
// 1.8K
// 1.2K
// Companies
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false
    const arr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]!=goal[i]) arr.push(i)
        if(arr.length>2) return false
    }
    if(!arr.length) return s.length !=[...new Set(s)].length
    const [i,j]=arr;
    return s[i]==goal[j] && goal[i]==s[j]
    
};