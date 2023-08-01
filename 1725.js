// 1725. Number Of Rectangles That Can Form The Largest Square
// Easy
// 518
// 57
// Companies
// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

 

// Example 1:

var countGoodRectangles = function(rectangles) {
    rectangles=rectangles.reduce((acc,curr)=>{
        let min=Math.min(...curr)
        acc.push(min)
        return acc
    },[])
    var max=Math.max(...rectangles)
    rectangles=rectangles.reduce((acc,curr)=>{
        if(max===curr){
            acc++
        }
        return acc
    },0)
    return rectangles
};