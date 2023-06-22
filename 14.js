// 14. Longest Common Prefix
// Easy
// 14.4K
// 4K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    strs.sort();
  const first = strs[0];
  const last = strs[strs.length-1];
  for(let i=0;i<first.length;i++) {
      if(first[i] !== last[i]){
          return first.substring(0,i)
      }
  }
  return first;

  
};