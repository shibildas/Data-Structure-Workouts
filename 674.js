// 674. Longest Continuous Increasing Subsequence
// Easy
// 2.2K
// 174
// Companies
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

 
var findLengthOfLCIS = function(nums) {
    let count=1
    let result=1
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]<nums[i]){
            ++count
        if(count>result)result=count
        }else{
            count=1
        }
    }
    return result
    
};