// 100. Same Tree
// Easy
// 9.6K
// 191
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
    if(!p&&!q) return true
    else if(!p||!q) return false
    if(p.val!==q.val) return false
    return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
};
 