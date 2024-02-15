//total of number 
let array=[12,24,6,9,10];
 sum =array.reduce((acc,value)=>  acc+value,0);
console.log(sum);

// cancat all the element of array
chaine=array.reduce(callback,"");
function callback(acc,value){
value=value.toString();
return acc+value;
}
console.log(chaine);

//numbe of voter
let voter1 ={
    name: "hayfa",
    age:22,
    voted:"yes"
}
let voter2 ={
    name: "houyem",
    age:22,
    voted:"yes"
}
let voter3 ={
    name: "hassen",
    age:14,
    voted:"no"
}
let voter4 ={
    name: "asma",
    age:27,
    voted:"yes"
}
let voter5 ={
    name: "amira",
    age:16,
    voted:"no"
}
let voter6 ={
    name: "yosri",
    age:14,
    voted:"no"
}
let arr1=[voter1,voter2,voter3,voter4,voter5,voter6];
cnt=arr1.reduce(calc,0);

function calc (ac,val){
  
    if(val.voted=="yes"){
        return ac+1;
    };
    return ac=ac;
}
console.log(cnt);







