function frequency(arr){
    var obj={}
    var n= Math.floor(arr.length/2)
    for (let i=0;i<arr.length;i++){
        obj[arr[i]]? obj[arr[i]]++ : obj[arr[i]]=1
        if(obj[arr[i]]>=n){
            return arr[i]
        }
    }
    return false
    
}