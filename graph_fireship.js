const airports='PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')
const routes=[
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],  
]

const adjacencyList=new Map()


function addNode(airports) {
    adjacencyList.set(airports,[])    
}

function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin)
}
airports.forEach(addNode);
routes.forEach(route=>addEdge(...route))
console.log(adjacencyList)

function BFS(start,dest){
    const visited= new Set()
   const queue=[start]

    while(queue.length>0){
        const airport= queue.shift()
        const destinations= adjacencyList.get(airport)
        for (const destination of destinations){
            if(destination===dest){
                console.log('found it')
                console.log(airport)
            }
           if(!visited.has(destination)){
               visited.add(destination)
               queue.push(destination)
               
           }
        }

    }
    
}

BFS('PHX','BKK')

function DFS(start, visited=new Set()) {
    console.log(start)
    visited.add(start)
    const destinations= adjacencyList.get(start)
    for (const destination of destinations){
        if(destination==="BKK"){
            console.log('DFS found in steps');
            return
        }
        if(!visited.has(destination)){
            DFS(destination,visited)
        }
    }
    
}
DFS('PHX')