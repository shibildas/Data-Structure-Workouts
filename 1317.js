// 1317. Convert Integer to the Sum of Two No-Zero Integers
// Easy
// 363
// 277
// Companies
// No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

// Given an integer n, return a list of two integers [a, b] where:

// a and b are No-Zero integers.
// a + b = n
// The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

 
var getNoZeroIntegers = function(n) {
    for(let i=1;i<n;i++){
        let j=n-i
        if(isZeroIn(j) && isZeroIn(i)){
            return [j,i]
        }
    }   
    };
    function isZeroIn(nums){
        while(nums>0){
            if(nums%10===0) return false
            nums=(nums-(nums%10))/10
        }
        return true
    }