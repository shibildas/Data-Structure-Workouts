// 1313. Decompress Run-Length Encoded List
// Easy
// 1.1K
// 1.3K
// Companies
// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

var decompressRLElist = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i];j++){
            if(nums[i+1]){
                result.push(nums[i+1])
            }
        }
        i++
    }
    return result
    
};