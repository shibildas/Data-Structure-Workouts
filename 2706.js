// 2706. Buy Two Chocolates
// Easy
// 177
// 5
// Companies
// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

 

var buyChoco = function(prices, money) {
    lowest=-1
    for(let i=0;i<prices.length;i++){
        for(let j=0;j<prices.length;j++){
        let diff=money-prices[i]
        let sec=diff-prices[j]
            if(i!==j && (sec)>=0){
                if(sec>lowest)lowest=sec
            }
        }
    }
    return (lowest>-1) ? lowest: money
};