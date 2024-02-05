// 1002. Find Common Characters
// Solved
// Easy
// Topics
// Companies
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// wor
var commonChars = function(words) {
    let result=[]
    for(let i=0;i<words[0].length;i++){
        let count= findFrequency(words[0][i],words[0])
        let flag=false
        for(let j=1;j<words.length;j++){
            let tempcount=findFrequency(words[0][i],words[j])
            if(count!==tempcount && !words[j].includes(words[0][i])) flag=true
            else if(count!==tempcount && words[j].includes(words[0][i])) count=Math.min(count,tempcount)
        }
        if(!flag && !result.includes(words[0][i])){
            for(let k=0;k<count;k++){
                result.push(words[0][i])
            }
        }
       
    }
    return result
};
var findFrequency=function(character, word){
    let count=0
    for(let i=0;i<word.length;i++){
        if(character===word[i]) count++
    }
    return count
}