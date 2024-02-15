//number>=5
let arr=[1,3,4,6,5,7,8,2];
 newarr= arr.filter(cb);


 function cb (value,index){
  if(value >=5){
    return true;
  }
  return false;
 }

console.log(newarr);



//even number
let arr1 =[1,3,4,6,8,10,9];
newarr1=arr1.filter((value)=>value%2==0); 
console.log(newarr1);



//string.length>5
let arr2=["gamer" ,"coder","user","player"];
newarr2=arr2.filter((value)=>value.length<=5);
console.log(newarr2);



// object dont belong to the club club
let people1 ={
  name: "hayfa",
  age:22,
  member:"yes"
}
let people2 ={
  name: "houyem",
  age:22,
  member:"yes"
}
let people3 ={
  name: "hassen",
  age:14,
  member:"no"
}
let people4 ={
  name: "asma",
  age:27,
  member:"no"
}
let people5 ={
  name: "amira",
  age:16,
  member:"no"
}
let people6 ={
  name: "yosri",
  age:14,
  member:"no"
}
let arr3=[people1,people2,people3,people4];
newarr3=arr3.filter((value)=>value.member=="yes");
console.log(newarr3);


//people older than 18
newarr5=arr3.filter((value)=>value.age>=18);
console.log(newarr5);