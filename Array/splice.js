ar=[3,4,5,6,7,8,[3,3,2,1,45],6,78,8]
ar.splice(ar.length-3,3)
ar[6].splice(4,4)
console.log(ar)
ar[6].sort();
console.log(ar[6])


ar1=[2,34,5,5]
ar1.splice(3,0,10,3,5,6,"siddharam")
ar1.splice(-4,9)
console.log(ar1)



ar2=[1,2,3,4,5,5,6,67,78,]
// ar2.splice(2,2,9,10)
ar2.shift()
console.log(ar2)
ar2.unshift(1,2,3)
console.log(ar2)
// console.log(revers(ar2))

ar3=[1,2,3,4]
ar4=[5,6,7,8]
for(let i=0;i<ar3.length;i++){
    // console.log(ar3)
   console.log( ar3.splice) ,ar4.splice(0,i);
    
}