var ar=[["name,siddharam"],["age","23"],["palce","pune"]];
obj={};
for(let i=0;i<ar.length;i++){
  obj[ar[i][0]]=obj[ar[i][1]];
}
// console.log(obj);

ar1=[[1,2,3,4,5],[2,3,45,6,7],[34,5,6,5,7,78]]
obj1={};
for(let i=0;i<ar1.length;i++){
    let sum=0;
    for(let j=0;j<ar1[i].length;j++){
        sum+=ar1[i][j];

    }
    obj1[i]=sum;
  }
  console.log(obj1)
