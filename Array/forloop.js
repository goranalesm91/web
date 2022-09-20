ar=[1,2,3,4,4,5,6,7];

for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
    if(i===4){
        break
    }
}
ar.forEach(element => {
    // console.log(element)
});

sum=0;
ar.forEach(ele=>sum+=ele)
console.log(sum)

console.log(ar.reduce(function(sum,cerent_ele){

return sum+cerent_ele},0))
console.log(ar.reduce(function(sum,cerent_ele){

    return sum*cerent_ele},1))


    console.log(ar.reduce(function(sum,cerent_ele,i){
      if(i<(ar.length)/2){
        return sum*cerent_ele
    }else{
        return sum+cerent_ele;
    }}))


    console.log(ar.reduce((sum,cerent_ele,i)=>{
        if((i<(ar.length)/2))  return sum*cerent_ele
        else return sum+cerent_ele;
        },1))