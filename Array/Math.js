// console.log(Math.random());
// conosle.log(Math.ceil(Math.random()));


let ar=[]

for(let i=0;i<10;i++){
    ar.push(Math.ceil(Math.random()*100))
}
console.log(ar)


for(let i=0;i<10;i++){
    ar.push(Math.floor(Math.random()*1))
}
console.log(ar)

console.log(Math.max('a','s','d'))
console.log(Math.min(3,2,24,4,51,1,678,8,))


while(true){
    if(Math.random()===0){
        console.log("0");
        break;
    }
}