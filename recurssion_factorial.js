function factorial(val){
    while(val===1) return 1
    return val*factorial(val-1)
}
function totalSum(val){
    while(val===0) return 0
    return val+totalSum(val-1)
}