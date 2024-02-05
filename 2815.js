// 2815. Max Pair Sum in an Array
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the maximum digit in both numbers are equal.

// Return the maximum sum or -1 if no such pair exists.

 

// Example 1:

// Input: nums = [51,71,17,24,42]
// Output: 88
// Explanation: 
// For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88. 
// For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
// It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: No pair exists in nums with equal maximum digits.
 

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let result=-1
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
                if(checkPair(nums[i],nums[j]) && result<nums[i]+nums[j]) result=nums[i]+nums[j]
        }
    }
    return result
};
function checkPair(num1,num2){
   let numArr1=numToArr(num1)
   let numArr2=numToArr(num2)
   return numArr2.includes(Math.max(...numArr1)) && numArr1.includes(Math.max(...numArr2))

}
function numToArr(num){
let arr=[]
while(num){
    arr.push(num%10)
    num=(num-(num%10))/10
}
return arr
}