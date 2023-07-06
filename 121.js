// 121. Best Time to Buy and Sell Stock
// Easy
// 26.5K
// 839
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let max=0
    let min=prices[0]
    for(let i=1;i<prices.length;i++){
        let currentPrice=prices[i]
        let currentProfit=currentPrice-min
        if(currentProfit>max)max=currentProfit
        if(currentPrice<min)min=currentPrice
    }
    return max


};
