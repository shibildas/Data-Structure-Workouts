// 2133. Check if Every Row and Column Contains All Numbers
// Easy
// 823
// 45
// Companies
// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

var checkValid = function(matrix) {
    let obj={}
    for(let k=1;k<=matrix.length;k++){
        obj[k]=1
    }
    for(let i=0;i<matrix.length;i++){
        let temp={...obj}
        for(let j=0;j<matrix.length;j++){
        if(!temp[matrix[j][i]] || temp[matrix[j][i]]<1) return false
        temp[matrix[j][i]]--
        }
        temp={}
    }
    for(let i=0;i<matrix.length;i++){
        let temp={...obj}
        for(let j=0;j<matrix.length;j++){
        if(!temp[matrix[i][j]] || temp[matrix[i][j]]<1) return false
        temp[matrix[i][j]]--
        }
        temp={}
    }
    return true
};