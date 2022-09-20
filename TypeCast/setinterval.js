



    let count=1
const interval=setInterval(()=>{
    console.log(count)
    if(count===10){
        setTimeout(()=>{
            count=0;
        },10000)
       
         }
    count++

},1000)

setTimeout(()=>{
    clearInterval(interval)
},60000)

// let coun=1
// let count=1;
// let flag=true;
// const interval=setInterval(()=>{
//     if(flag){
//         console.log(count)
//     }
//     if(count===10){
//         flag=!flag;
//         count=0
//     }
//     if(coun===60){
//         clearInterval(interval);
//     }
//     count++;
//     coun++
// },1000)