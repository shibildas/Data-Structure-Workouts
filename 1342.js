// 1342. Number of Steps to Reduce a Number to Zero
// Easy
// 3.5K
// 152
// Companies
// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

var numberOfSteps = function(num) {
    let step=0
    while(num>0){
        (num%2===0) ? num/=2 : num--
        step++
    }
    return step
};