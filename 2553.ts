// 2553. Separate the Digits in an Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
 

// Example 1:

// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation: 
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.
// Example 2
function separateDigits(nums: number[]): number[] {
    let result:number[]=[]
    for(let i=nums.length-1;i>=0;i--){
    while(nums[i]>0){
        let rem= nums[i]%10
        result.unshift(rem)
        nums[i]=(nums[i]-rem)/10
    }
    }
    return result
    };

    function separateDigits2(nums: number[]): number[] {
        let result:number[]=[]
        for(let i=0;i<nums.length;i++){
        let str= nums[i]+''
        let arr=str.split('')
        for(let j=0;j<arr.length;j++){
            result.push(parseInt(arr[j]))
        }
        }
        return result
        };