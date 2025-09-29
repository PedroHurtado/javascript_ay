const a=[1,2,3,4,5,6]

const filter = a.filter(v=>v%2===0) //[2,4,6]
const find = a.find(v=>v%2===0) //2 || undefined
const map= a.map(v=>v*v) //[1,4,9,16,25,36]
const reduce = a.reduce((a,v)=>a+v)  //group by
    //1+2=3
    //3+3=6
const reduce1 = a.reduce((a,v)=>a+v,100)  //group by
    //100+1=101
    //101+2=103
    //103+3=106

const min = a.reduce((a,v)=>Math.min(a,v))  //group by
const count= a.reduce((a)=>a++,0)

new Map().set('key','value')
new Set([1,2,3,1,2,3])

new Set([{id:1},{id:1}])

/*
    1. problema de memoria
    2. codigo bloqueante
*/
const filter1= (array,predicate)=>{
  const newArray = []
  for(const value of array){
     if(predicate(value)){
        newArray.push(value)
     }   
  }
  return newArray
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
function* filter2 (array,predicate){
   for(const value of array){
     if(predicate(value)){
        yield value
     }   
  } 
}