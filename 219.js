// 219. Contains Duplicate II
// Easy
// 5K
// 2.7K
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

var containsNearbyDuplicate = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        for(j=i+1;j<=i+k && nums[j]!=null;j++){
            if(nums[i]===nums[j])return true
        }
    }
    return false
    
};