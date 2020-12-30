let obj = {
    name : "dayeon",
    address : "Korea",
    age : 18
};

//let {name, age} = obj;
//console.log(name,age);

let {name:myName, age:myAge} = obj;
console.log(myName,myAge);