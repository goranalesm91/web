ar=[1,2,3,4]
ar1=[5,6,7,8];

for(let i=0;i<=ar1.length;i++){
    ar.splice(ar.length-1,i);
    let shfitArray= ar1.slice(0,i)
    console.log(ar.concat(shfitArray))
}

