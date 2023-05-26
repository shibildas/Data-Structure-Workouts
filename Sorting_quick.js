function pivot(arr,start=0, end=arr.length+1){
    var pivot = arr[start]
    var swapIndex=start
    for(var i= start+1; i<arr.length;i++ ){
        if(pivot>arr[i]){
            swapIndex++;
            [arr[swapIndex],arr[i]]=[arr[i],arr[swapIndex]];
        }      
    }
    [arr[start],arr[swapIndex]]=[arr[swapIndex],arr[start]]
    return swapIndex
    
}

function quickSort(arr,left=0, right = arr.length-1) {
    if(left<right){
    let pivotIndex= pivot(arr,left,right)
    quickSort(arr,left,pivotIndex-1) //left
    quickSort(arr,pivotIndex+1,right) //right   
    }
    return arr
}