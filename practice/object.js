let obj={
    name: "siddhu",
    age:20,
  place:"solapur"
}
console.log(obj)
 console.log(Object.keys(obj))
console.log(Object.values(obj));


let ar=[1,2,3,[1,3,4],'helo',2]

let map={};
for(let i=0;i<ar.length;i++){
    map[i]=ar[i]
}
console.log(map[4])


// console.log(4&1)
let add=(a,b)=>a+b
// function add(a,b){
//     return a+b
// }
console.log(add(2,4))

ans=[['a',1],['b',2]];
let map1={}
for(let i=0;i<ans.length;i++){
    map1[ans[i][0]]=ans[i][1]
}
console.log(map1)