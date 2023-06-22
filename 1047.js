// 1047. Remove All Adjacent Duplicates In String
// Easy
// 5.8K
// 223
// Companies
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

var removeDuplicates = function(s) {
    //     for(let i=1;i<s.length;i++){
    //         if(s[i]===s[i-1]){
    //             s=s.slice(0,i-1)+s.slice(i+1)
    //             i-=2
    //         }
    //     }
    //   return s  
    let stack=[]
    for(let str of s){
    stack.push(str)
    while(stack.length>1 && stack[stack.length-1]===stack[stack.length-2]){
        stack.pop()
        stack.pop()
    }
    }
    return stack.join('')
    };