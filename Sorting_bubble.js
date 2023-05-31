function Bubble(arr){
    for (let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[i]>arr[j+1]){
                [arr[i],arr[j+1]]=[arr[j+1],arr[i]]
            }
        }
    }return arr
}
Bubble([1,4,3,6,4,7,8,5,4,8,9,0,-2,-5])