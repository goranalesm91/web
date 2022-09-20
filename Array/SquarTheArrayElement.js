ar=[1,2,3,4,5];


// for(let i=0;i<ar.length;i++){
//     ar[i]=ar[i]*ar[i]
// }
console.log(ar);


console.log(ar.map(function(ele){
    return ele*ele
}))
// console.log(ar);


ar1=[1,2,3,4,5,5,6,6,7,8]
temp=ar1;
let n=ar1.length;
for(let i=0;i<n;i++){
    if(ar1[i]%2!=0){
        ar1.splice(i,1)
    }
}
// console.log(temp)


ar2=[1,2,3,4,54,5,6]
console.log(ar2.filter(ele=> ele%2===0))