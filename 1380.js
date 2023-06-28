// 1380. Lucky Numbers in a Matrix
// Easy
// 1.5K
// 75
// Companies
// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 
var luckyNumbers  = function(matrix) {
      let result=[]
    let n=matrix.length
    let limit=0
    while(limit<n){
        let min=Math.min(...matrix[limit])
        for(let i=0;i<matrix[limit].length;i++){
        let arr=[]
            if(matrix[limit][i]===min){
                for(let j=0;j<n;j++){
                    arr.push(matrix[j][i])
                }
                let max= Math.max(...arr)
                if(max===min){
             result.push(max)
             }
            }
        }
        limit++
    }
    return result
};
