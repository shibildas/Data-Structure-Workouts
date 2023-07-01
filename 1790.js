// 1790. Check if One String Swap Can Make Strings Equal
// Easy
// 931
// 50
// Companies
// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

var areAlmostEqual = function(s1, s2) {
    if(s1===s2)return true
    let arr=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]) {
            arr.push(s1[i],s2[i])
            }
    }
    if(arr.length===4){
    if(arr[0]===arr[3]&&arr[1]===arr[2]) return true
    }
    return false
};