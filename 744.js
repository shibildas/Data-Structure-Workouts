// 744. Find Smallest Letter Greater Than Target
// Easy
// 3.8K
// 2.1K
// Companies
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.


var nextGreatestLetter = function(letters, target) {
    if(!letters.includes(target)) letters.push(target)
    letters.sort()
    for(let i=0;i<letters.length;i++){
        if(letters[i]===target){
            if(letters[i+1]){
                if(letters[i+1]===target)continue
                return letters[i+1]
            }else{
                return letters[0]
            }
        }
    }
    
};