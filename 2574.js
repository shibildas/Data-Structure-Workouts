// 2574. Left and Right Sum Differences
// Easy
// 588
// 42
// Companies
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

var leftRightDifference = function(nums) {
    let left=[]
    let right=[]
    let n=nums.length
    if (nums.length===1) return [0]
    for(let i=0;i<nums.length;i++){
        if(i==0){
       left.push(0)
       right.push(0)
        }
        else{
            left.push(left[left.length-1]+nums[i-1])
            right.unshift(right[0]+nums[n-i])
        }
    }
    for(let j=0;j<n;j++){
        right[j]=Math.abs(left[j]-right[j])
    }
    return right
}

