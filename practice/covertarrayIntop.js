ar=[1,'abc',[3,2,3]]
let map={ }

let str=""
for(let i=0;i<ar.length;i++){
     let temp= typeof(ar[i]);
     if(temp=='number' ||temp=='string'){
        str+=ar[i];
     }else{
        for(let j of ar[i]){
            str+=j;
        }
     }
}
console.log(map)
console.log(ar.toString());

console.log(str)

arr1=[1,2,3,[4,5,6],[7,8,9],[9]]
let ar2=Array()
var k=0;
for(let  i=0;i<arr1.length; i++){
    let temp=typeof(arr1[i])
if(temp=="number"){
    ar2[k]=arr[i]
    k++
}else{
    for(let j of arr1[i]){
        ar2[k++]=j;

    }
}

    }
  
    


