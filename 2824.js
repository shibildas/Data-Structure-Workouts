// 2824. Count Pairs Whose Sum is Less than Target
// Easy
// 173
// 7
// Companies
// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

// Example 1:

// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
// - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
var countPairs = function(nums, target) {
    let count=0
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(target>nums[i]+nums[j]){
    //             count++
    //         }
    //     }
    // }
    let i=0
    let j=1
    while(i<nums.length-1){
if(target>nums[i]+nums[j]){
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