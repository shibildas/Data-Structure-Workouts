// 2778. Sum of Squares of Special Elements
// Easy
// 135
// 27
// Companies
// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

 

// Example 1:
var sumOfSquares = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        if(nums.length%(i+1)==0){
            sum+=square(nums[i])
        }
    }
  return sum  
};
function square(num){
    return num*num
}