// 1528. Shuffle String
// Easy
// 2.4K
// 420
// Companies
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function(s, indices) {
    let string=[]
    for(let i=0;i<indices.length;i++){
        string[indices[i]]=s[i]
    }
    return string.join('')
};