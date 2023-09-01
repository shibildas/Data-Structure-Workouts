// 70. Climbing Stairs
// Easy
// 19.7K
// 650
// Companies
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
var climbStairs = function(n) {
    let step1=0;
    let step2=1;
    let i=0;
    while(i<n){
      [step1,step2]=[step2,step1+step2]
      i++
    }
    return step2
 };