// 2239. Find Closest Number to Zero
// Easy
// 464
// 27
// Companies
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 
var findClosestNumber = function(nums) {
    let result=0
    let neg=0-1
    while(true){
        if(nums.includes(result)) return result
        if(nums.includes(result*neg)) return result*neg
        result++
    }
    
};
