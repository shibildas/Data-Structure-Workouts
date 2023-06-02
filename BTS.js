class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree {
    constructor() {
        this.root=null
        
    }
    insert(value){
        var newNode= new Node(value)
        if(!this.root) {
            this.root=newNode
            return this
        }else{
            var current= this.root
            while(true){
                if(value<current.value){
                    if(!current.left){
                        current.left=newNode
                        return this
                    }
                    current=current.left
                    
                }else if(value> current.value)
                {
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
            if(value < current.value){
                if(!current.left) return undefined
                current=current.left     
            }else if(value> current.value){
                if(!current.right) return undefined
                current=current.right
            }
        }
        return null
    }
}


var tree=new BinarySearchTree()
