// 347. Top K Frequent Elements
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: You
function topKFrequent(nums: number[], k: number): number[] {
    let obj:{ [key: number]: number }={}
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]?obj[nums[i]]++:obj[nums[i]]=1
    }
    const entries = Object.entries(obj);
    const sortedEntries = entries.sort((a, b) => {return b[1] - a[1]}).slice(0, k);
    const result: number[] = sortedEntries.map((entry) => {return Number(entry[0])});
    return result
    };