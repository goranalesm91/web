ar=["my","name", "is","siddharam"]

str=ar.join(" ");
// for(let i=0;i<ar.length;i++){
//     str+=ar
// }
console.log(str)
ar1=[2,1,4,5,7,8,8,3]
console.log(ar1.at(-1))
console.log(ar1.sort(function(a,b){
    console.log(a , b)
    if(a>b){
        return 1;
    }else if(a===b){
        return 0
    }else{
        return -1;
    }
}))

// write the logic to sort the charactor in the array;

arr2=['a','s','f','b']
console.log(arr2.sort(function (a,b){
    console.log(a,b);
    if(a>b){
        return 1

    }else if(a===b){
        return 0
    }else{
        return -1
    }
}))



as=[[3,1],[4,1],[2,3],[4,4],[6,4],[0,6]]
console.log(as.sort(function(a,b){
    console.log(a,b)
    if(a[1]>b[1]){
        return 1;
    }else if(a[1]===b[1]){
        return 0
    }else return -1
}))
let az=[{value:(2)},{value:(14)},{value:(0)}]
console.log(az.sort(function(a,b){
    console.log(a,b)
  if(a["value"]>b["value"]){ return 1;
  }else if(a['value']=== b["value"]) return 0;
  else{
    return -1;
  }
}))





obj={
subject:["math","scince" ,"hindi","english"],
mark : [80,86,30,50]
}
obj.subject=obj.subject.sort(function( a,b){
    indexA=getMark(a);
    indexB=getMark(b);
    if(indexA>indexB){ return 1;
    }else if(indexA===indexB){ return 0;
    }else {
    return -1;
    }
})
function getMark(a){
    const indexOfSubject=obj.subject.indexOf(a);
    const indexOfMark=obj.mark[indexOfSubject]
    return indexOfMark;
}
obj.mark=obj.mark.sort(function(a,b){
if(a>b) return 1
else if(a===b) return 0
else return -1
})
console.log(obj)