let s="siddharam"
let i=0;
let j=s.length-1;
while(i<j){
  if(s.charAt(i)!=s.charAt(j)){
    console.log("not palindrome")
    break
  }
  i++;
  j--;
}
console.log("palindrome")