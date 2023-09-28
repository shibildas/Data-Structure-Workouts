// 2180. Count Integers With Even Digit Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

 

// Example 1:

// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    
var countEven = function(num:number) {
    let count=0
    function isDigitEven(numb:number){
        let sum=0
        while(numb){
            sum+=numb%10
            numb=(numb-(numb%10))/10
        }
        return (sum%2===0)
    }
    for (let i=2;i<=num;i++){
       if(isDigitEven(i)){
           count++
       } 
    }
    return count
};