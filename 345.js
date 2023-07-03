// 345. Reverse Vowels of a String
// Easy
// 3.6K
// 2.5K
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 
var reverseVowels = function(s) {
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    let result= s.split('')
    let i=0
    let j=result.length-1
    while(i<j){
        if(vowels.includes(result[i] )&& vowels.includes(result[j])){
            [result[i],result[j]]=[result[j],result[i]]
            i++
            j--
        }
        if(!vowels.includes(result[i])){
            i++
        }
        if(!vowels.includes(result[j])){
            j--
        }
        
    }
    return result.join('')
};
