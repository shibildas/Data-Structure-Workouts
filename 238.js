// 238. Product of Array Except Self
// Medium
// 18.6K
// 1K
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    const n= nums.length
    const answer=Array(n).fill(1)
    let prefix=1
    for(let i=0;i<n;i++){
        answer[i]*=prefix
        prefix*=nums[i]
    }
    let suffix=1
    for(let i=n-1;i>=0;i--){
        answer[i]*=suffix
        suffix*=nums[i]
    }
    return answer
    
};