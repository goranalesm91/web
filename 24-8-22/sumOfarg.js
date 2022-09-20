function sum(){
    console.log(arguments)
    var sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[0];
    }
    return sum;
}
console.log(sum(4,5,4,3,2))