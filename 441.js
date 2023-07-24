// 441. Arranging Coins
// Easy
// 3.4K
// 1.2K
// Companies
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

var arrangeCoins = function(n) {
    let count=0;
    let i=1
    while(n>0){
        n=n-i
        count++
        i++
    }
    return (n===0)? count :count-1
};
 