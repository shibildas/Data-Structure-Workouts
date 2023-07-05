// 1796. Second Largest Digit in a String
// Easy
// 451
// 109
// Companies
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

var secondHighest = function(s) {
    let arr= s.split('')
    arr=arr.filter((x)=> (x==='0') ? true: parseInt(x))
    arr=arr.sort((a,b)=>a-b)
    let largest=arr[0];
    let secondLargest=-1
    for(let i=1;i<s.length;i++){
        if(arr[i]>largest){
            if(largest!==secondLargest){
                secondLargest=largest
            }
            largest=arr[i]
        }
    }
    return secondLargest
};