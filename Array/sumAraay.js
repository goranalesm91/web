ar=[12,3,45,67,78,8,7]
function add(a,b){
    return a+b;
}
var sum=0;
for(let i=0;i<ar.length;i++){
    var ele=ar[i];
   sum+= add(sum,ele)
}
console.log(sum);

function sumOfArray(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum+=Arr[i];
    }
    return sum;
}


console.log(sumOfArray(ar))

let s="siddharam"
function palindrome(s){
let i=0;
let j=s.length-1;
while(i<j){
  if(s.charAt(i)!=s.charAt(j)){
    return "not palindrome"
    break
  }
  i++;
  j--;
}
return "palindrome"
}
console.log(palindrome("Siddharam"))