

function matchStrig(String1,Stirng2){
    return String1===Stirng2;
}
ar=[];
function SplitString(){

}
str="my name is Siddharam i is coplited is coplited"
console.log(splitStri(str,"is"))

function splitStri(str1,splitStr){
    ar=[];
   var temp="";
    for(let i=0;i<str1.length;i++){
        str2=str1.substr(i,splitStr.length)
        if(str2!==splitStr){
            temp+=str1[i];
        }else{
            ar.push(temp)
            temp="";
            i+=splitStr-1;
        }
   

    }
    ar.push(temp);
    return ar;
}