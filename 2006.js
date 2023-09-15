// 2006. Count Number of Pairs With Absolute Difference K
// Easy
// 1.4K
// 29
// Companies
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:
var countKDifference = function(nums, k) {
    let i=0
    let j=1
    let count=0
    while(i<nums.length-1){
        if(Math.abs(nums[i]-nums[j])===k){
            count++
        }
        j++
        if(j===nums.length){
            i++
            j=i+1
        }
    }
    return count
};