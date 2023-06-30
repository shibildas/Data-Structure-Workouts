// 2011. Final Value of Variable After Performing Operations
// Easy
// 1.3K
// 156
// Companies
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

var finalValueAfterOperations = function(operations) {
    let num=0
    for (let i=0;i<operations.length;i++){
        (operations[i].substr(1,1)==="-")? num--:num++
    }
    return num    
};
var finalValueAfterOperations = function(operations) {
    let num=0
    for (let i=0;i<operations.length;i++){
        (operations[i][1]==="-")? num--:num++
    }
    return num    
};