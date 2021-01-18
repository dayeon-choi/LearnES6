setTimeout(()=>{
    console.log("settimeout arrow");
},1000);

/*
let newArr=[1,2,3,4,5].map(function(value,index,object){
    return value*2;
});
*/
let newArr=[1,2,3,4,5].map((v) => (v*2));

console.log("arror 2",newArr);