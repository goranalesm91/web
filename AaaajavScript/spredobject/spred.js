arr1=[[1,2,3],3,4,[5,[6,7]]]
arr2=[...arr1]

console.log(arr2)
arr2[1]=5;
arr2[0]=6;
arr2[3][1][1]=9

console.log(arr2)
console.log(arr1)


let [a,b,c,[d,[e,g,[f]]]]=[[1,2,[3]],[4],[5,[6,7,[8]]]];

console.log(g);