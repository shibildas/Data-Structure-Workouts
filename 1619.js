// 1619. Mean of Array After Removing Some Elements
// Easy
// 421
// 111
// Companies
// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

 

var trimMean = function(arr) {
    arr=arr.sort((a,b)=>a-b)
    var percent=Math.floor((arr.length*5)/100)
    var sum=0
    for(let i=percent;i<arr.length-percent;i++){
        sum+=arr[i]
    }
    return sum/(arr.length-(2*percent))
    
};