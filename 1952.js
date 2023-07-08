// 1952. Three Divisors
// Easy
// 430
// 21
// Companies
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.



var isThree = function(n) {
    let count=0
    for(let i=2;i<n;i++){
        if(n%i===0){
            ++count 
            }
        if(count>1)return false
    }
    return count
};