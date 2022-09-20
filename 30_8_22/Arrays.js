let ar=new Array(0,0,0,0)
for(let i=0;i<ar.length;i++){
    ar[i]=i;
}
console.log(ar)



ar1=[1,3,2,1,3,2,1,2,3,2]
var e=0;
var a=0;
var r=0;
for(let i=0;i<ar1.length;i++){

     if(1==ar1[i]){
     e++ 
     }
     if(2==ar1[i]){
     a++
    }
    if(3==ar1[i]){
      r++
    }
}
console.log("1 :"+e)
console.log("2 :"+a)
console.log("3 :"+r)