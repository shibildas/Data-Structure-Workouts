class MinBinaryHeap{
    constructor(){
        this.values=[]
    }
    insert(value){
        this.values.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx=this.values.length-1
        const element=this.values[idx]
        while(idx>0){
           let parentIdx=Math.floor((idx-1)/2)
           let parent=this.values[parentIdx]
            if(element>=parent) break
            [this.values[parentIdx],this.values[idx]]=[element,parent]
            idx=parentIdx
        }
    }
    extractMin(){
        const min=this.values[0]
        const end=this.values.pop()
        if(this.values.length>0){
            this.values[0]=end
            this.sinkDown()
        }
        return min
    }
    sinkDown(){
        let idx=0
        let length= this.values.length
        let element= this.values[0]
        while(true){
            let leftChildIdx= 2*idx+1
            let rightChildIdx=2*idx+2
            let leftChild,rightChild;
            let swap=null;
            if (leftChildIdx<length){
                leftChild=this.values[leftChildIdx]
                if(leftChild<element){
                    swap= leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx]
                if (
                    (swap===null && rightChild<element)||
                    (swap!==null && rightChild<leftChild)
                   ) {
                    swap=rightChildIdx
                }
            }
            if(swap==null) break
            this.values[idx]= this.values[swap]
            this.values[swap]=element 
            idx=swap;
        }
        
    }
}
var minheap= new MinBinaryHeap()
minheap.insert(8)
minheap.insert(10)
minheap.insert(1)
minheap.insert(3)
minheap.insert(4)
minheap.insert(5)
minheap.insert(68)
minheap.insert(18)
