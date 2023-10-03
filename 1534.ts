
// Code

// Testcase
// Testcase
// Result

// 1534. Count Good Triplets
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

 

// Example 1:

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// Example 2:
var countGoodTriplets = function(arr:[], a:number, b:number, c:number) {
    let count=0
   for(let i=0;i<arr.length;i++){
       let val1=arr[i]
       for(let j=i+1;j<arr.length;j++){
           let val2=arr[j]
           let diff1= Math.abs(val1-val2)
           if(diff1>a) continue
           for(let k=j+1;k<arr.length;k++){
               let val3= arr[k]
               let diff2= Math.abs(val2-val3)
               let diff3= Math.abs(val1-val3)
               if(diff2 <=b && diff3<=c ){
                   count++
               }
           }
       }
   }
   return count
};