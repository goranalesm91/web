{
    var a=10;

}

// console.log(a);

{
    let b=10;

}
// console.log(b)


function add(){
    var c=10;
}
// console.log(c);

function hello(){
    if(true){
        var n1=30;
        let n2=20;
        const n3=50;
        // console.log(n1)
        // console.log(n2)
    
        // console.log(n3)
    }
    // console.log(n1)
    // console.log(n2)
    // console.log(n3)
}
hello()
// console.log(n1)


{
function test(){
    const l=5;
    for(var i=0;i<l;i++){
        console.log(i);
    }
    console.log(l);
    console.log(i)
}
}
// test();


function print(a=10){
    console.log(a)
}
print(20)

str="s,a,f,g,h,h,j,k";
console.log(str.split(','))
