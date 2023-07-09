// 383. Ransom Note
// Easy
// 4.2K
// 435
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    let obj={}
    for (let i=0;i<magazine.length;i++){
        obj[magazine[i]]? obj[magazine[i]]++ : obj[magazine[i]]=1
    }
    for (let j=0;j<ransomNote.length;j++){
        if(!obj[ransomNote[j]]){
            return false
        }
        obj[ransomNote[j]]--
    }
    return true
};