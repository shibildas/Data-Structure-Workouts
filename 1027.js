// 1027. Longest Arithmetic Subsequence
// Medium
// 3.1K
// 144
// Companies
// Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

// Note that:

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
// A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).

var longestArithSeqLength = function(nums) {
    var max=0
    var obj= new Map()
    for(var i=0;i<nums.length;i++){
        obj.set(i,new Map())
        for(var j=0;j<i;j++){
            var diff= nums[i]-nums[j]
            var count= (obj.get(j).get(diff) ||1)+1
            obj.get(i).set(diff,count)
            max= Math.max(max,count)
        }
    }
    return max
};