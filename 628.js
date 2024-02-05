// 628. Maximum Product of Three Numbers
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

var maximumProduct = function (nums) {
  let s = nums.sort((a, b) => a - b);
  let num = 0,
    num1 = 0;
  num = s[0] * s[1] * s[s.length - 1];
  num1 = s[s.length - 1] * s[s.length - 2] * s[s.length - 3];
  return Math.max(num, num1);
};
