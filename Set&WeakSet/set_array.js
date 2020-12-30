let mySet = new Set();
//console.log(toString.call(mySet));  //[object Set]

//set : 중복 없이 유일한 값을 저장하려고 할 때, 
//      이미 존재하는지 체크할 때 유용

mySet.add("dayeon");
mySet.add("hary");
mySet.add("dayeon");

/*
mySet.forEach(function(v){
    console.log(v);
});
// dayeon 하나와 hary 하나만
*/

/*
// "dayeon"을 가지고 있는지 체크 : true
console.log(mySet.has("dayeon"));   
*/

mySet.delete("dayeon");  //삭제
mySet.forEach(function(v){
    console.log(v);
});
// 결과로는 hary 하나만 출력됨