class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null
    }
    insert(value){
        var newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return this
        }else{
             var current=this.root
             while(true){
                 if(value<current.value){
                     if(!current.left){
                         current.left=newNode
                         return this
                     }
                     current=current.left
                 }else if(value>current.value){
                     if(!current.right){
                         current.right=newNode
                         return this
                     }
                     current=current.right
                 }else{
                     return undefined
                 }
             }
        }
        
    }
    find(value){
        if(!this.root) return undefined
        var current=this.root
        while(current){
            if(current.value===value) return current
            if(value<current.value) {
            if (!current.left) return undefined;
            current=current.left
            }else if(value> current.value){
            if (!current.right) return undefined;
            current=current.right  
            }
        }
        return null
    }
    BFS(){
        var node = this.root,
        data=[],
        queue=[];
        queue.push(node)
        while(queue.length){
            node= queue.unshift()
            data.push(node.value)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
            
        }
        return data
    }
    DFS_pre(){
        var data=[]
        let current=this.root
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            
        }
        traverse(current)
        return data
    }
    DFS_post(){
        var data=[]
        var current=this.root
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data
        
    }
    DFS_inOrder(){
        var data=[]
        var current=this.root
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right) 
        }
        traverse(current)
        return data
        
    }
    closest(value){
        var closestValue=null
        var minDifference=Infinity
        function traverse(node){
            if(node===null) return
        
        const difference=Math.abs(value-node.value)
        if(difference<minDifference){
            minDifference=difference
            closestValue=node.value  
        }
        if(value<node.value) traverse(node.left)
        else if(value>node.value) traverse(node.right)
        }
        traverse(this.root)
        return closestValue
    }
    validate(){
        function IsBTS(node,min,max){
        if(node ===null) return true
        if(node.value<=min || node.value >= max)return false
        return( IsBTS(node.left,min,node.value) && IsBTS(node.right,node.value,max))       
    }
        return(IsBTS(this.root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER))
   }
    depthMin(){
        function minDepth(root){
            if(!root) return 0
            if(!root.left && root.right) return 1
        let minDepthValue=Infinity
        if(root.left){
            minDepthValue=Math.min(minDepthValue,minDepth(root.left))
        }
        if(root.right){
            minDepthValue=Math.min(minDepthValue,minDepth(root.right))
        }
            return minDepthValue+1
        }
        return minDepth(this.root)
    }
    depthMax(){
        function maxDepth(root){
          if(!root) return 0
          if(!root.left && root.right) return 1  
          let maxDepthValue=0
        if(root.left){
            maxDepthValue=Math.max(maxDepthValue,maxDepth(root.left))
        }
            if(root.right){
            maxDepthValue=Math.max(maxDepthValue,maxDepth(root.right))
        }
         return maxDepthValue+1   
        }
        return maxDepth(this.root)
    }

}


var tree=new BinarySearchTree()
