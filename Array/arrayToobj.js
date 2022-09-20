ar=[[12,3,45,4,6,6,7],[2,4,5,5,67,7,8],[4,2,4,5,6,7,8,9]]

function sumOfArray(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum+=Arr[i];
    }
    return sum;
}
obj={}

for(let i=0;i<ar.length;i++){
    obj[i]=sumOfArray(ar[i]);
}
console.log(obj)