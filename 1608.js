// 1608. Special Array With X Elements Greater Than or Equal X
// Easy
// 1.5K
// 241
// Companies
// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

 

// Example 1:

// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
// Example 2:
var specialArray = function(nums) {
    let max= Math.max(...nums)
    for(let i=0;i<=max;i++){
        if(i===check(nums,i)) return i
    }
    return -1

};
function check (nums,input){
    let count=0
    for(let i=0;i<nums.length;i++){
        if(input<=nums[i]){
            count++
        }
    }
    return count
}
