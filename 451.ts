// 451. Sort Characters By Frequency
// Solved
// Medium
// Topics
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
function frequencySort(s: string) : string{
    let obj:{ [key: string]: number }={}
    for(let i=0;i<s.length;i++){
        obj[s[i]]? obj[s[i]]++ : obj[s[i]]=1
    }
    const entries = Object.entries(obj);
    const sortedEntries = entries.sort((a, b) => {return b[1] - a[1]})
    let output=''
    for(let i=0;i<sortedEntries.length;i++){
        for(let j=0;j<sortedEntries[i][1];j++){
            output+=sortedEntries[i][0]
        }
    }
    return output
    };