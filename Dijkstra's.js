class PriorityQ{
    constructor(){
        this.values=[]
    }
    enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b)=> a.priority - b.priority)
    }
}
class weighedGraph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
     }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
        
    }
    Dijkstra(start,finish){
        const nodes= new PriorityQ()
        const distances={}
        const previous={}
        let path=[]
        let smallest;
        for(let vertex in this.adjacencyList){
            if(vertex===start){
                distances[vertex]=0
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex]=Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex]=null
        }
        while(nodes.values.length){
            smallest=nodes.dequeue().val
            if(smallest===finish){
             while(previous[smallest]){
                 path.push(smallest)
                 smallest=previous[smallest]
             }
                break;
            }
            if(smallest || distances[smallest]!== Infinity){
                for (let neighbour in this.adjacencyList[smallest]){
                    let nextNode= this.adjacencyList[smallest][neighbour]
                    let candidate = distances[smallest]+ nextNode.weight
                    if(candidate < distances[nextNode.node]){
                        distances[nextNode.node] = candidate
                        previous[nextNode.node] = smallest
                        nodes.enqueue(nextNode.node,candidate)
                        
                    }
                }
            }
            
        }
        return path.concat(smallest).reverse()
        
        
    }
    
    
}

var wgr=new weighedGraph()
wgr.addVertex('A')
wgr.addVertex('B')
wgr.addVertex('C')
wgr.addVertex('D')
wgr.addVertex('E')
wgr.addVertex('F')

wgr.addEdge("A","B",4)
wgr.addEdge("A","C",2)
wgr.addEdge("C","D",2)
wgr.addEdge("B","E",3)
wgr.addEdge("C","F",4)
wgr.addEdge("D","F",1)
wgr.addEdge("F","E",1)
wgr.addEdge("D","E",3)






