// 2455. Average Value of Even Numbers That Are Divisible by Three
// Easy
// 255
// 27
// Companies
// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

var averageValue = function(nums) {
    let count=0;
    let sum=0
    for (let i=0;i<nums.length;i++){
        if(nums[i]%6===0){
            sum+=nums[i]
            count++
        }
    }
    return (sum&&count) ? Math.floor(sum/count):0
    
};