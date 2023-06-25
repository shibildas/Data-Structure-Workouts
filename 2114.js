// 2114. Maximum Number of Words Found in Sentences
// Easy
// 1.4K
// 47
// Companies
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

 

// Example 1:

var mostWordsFound = function(sentences) {
    var largest=0
    for(let i=0;i<sentences.length;i++){
        const words=sentences[i].split(' ')
        if(words.length > largest) largest= words.length
    }
    return largest
};
var mostWordsFound = function(sentences) {
    let arr=sentences.map((sentence)=>sentence.split(' ').length)
    return Math.max(...arr)
};