// 1287. Element Appearing More Than 25% In Sorted Array
// Easy
// 866
// 44
// Companies
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
 

// Constraints
var findSpecialInteger = function(arr) {
    let obj={}
    let quater= Math.floor(arr.length/4)
    for(let i=0;i<arr.length; i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]]=1
        if(obj[arr[i]]>quater) return arr[i]
    }
    
};