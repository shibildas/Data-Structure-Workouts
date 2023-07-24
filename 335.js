// 335. Self Crossing
// Hard
// 332
// 492
// Companies
// You are given an array of integers distance.

// You start at the point (0, 0) on an X-Y plane, and you move distance[0] meters to the north, then distance[1] meters to the west, distance[2] meters to the south, distance[3] meters to the east, and so on. In other words, after each move, your direction changes counter-clockwise.

// Return true if your path crosses itself or false if it does not.
var isSelfCrossing = function(distance) {
    
    if(distance.length <3 ) return false
    let i=2;
    while(i<distance.length && distance[i]>distance[i-2]){
        i++
    }
    if(i>=distance.length) return false
    if((i>=4 && distance[i]>=distance[i-2] - distance[i-4])||
    (i===3) && distance[i]===distance[i-2]) distance[i-1]-=distance[i-3]
    i++
    while(i<distance.length){
        if(distance[i]>=distance[i-2]) return true
        i++
    }
    return false
};