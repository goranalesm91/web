let array1 = ['g','e','e','k','s','t','e','r'];
const array2 = array1;
array1 = [];
console.log(array2.toString());
let arr1 = [1, 2, 3, 4,'javascript'];
let arr2 = []
for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
    }
console.log(arr2);


const check = str => {
    var arr = {}
    for (let i = 0; i < str.length; i++) {
        if (Object.keys(arr).includes(str[i])) {
            arr[str[i]] = arr[str[i]] + 1
        }
        else{
            arr[str[i]] = 1
        }
    }
    return arr
}
console.log(check("geekster"))