//WeakSet
//참조를 가지고 있는 객체만 저장이 가능하다
//객체 형태를 중복 없이 저장하려고 할 때 유용하다

let arr = [1,2,3,4];
//let ws = new WeakSet();

/*
ws.add(arr);
//ws.add(111);    //Uncaught TypeError
//ws.add("111");  //Uncaught TypeError
ws.add(function(){});   //잘 돌아감!
console.log(ws);
*/

/*
객체가 null로 되거나 필요가 없어지면 
가비지 컬렉션 대상이 됨
-> WeakSet에서도 그 정보가 자동으로 없어지게 됨
   WeakSet이 참조를 계속 모니터링 한다고 보면 됨
*/

let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null; //null로 인해 유효하지 않은 값이라고 받아들이게 됨. 객체 참조를 잃음

console.log(ws);
console.log(ws.has(arr), ws.has(arr2)); //false true

//컨스트럭때 프로토타입 생성자를 직접 다이렉트로 부르는 것을 방지할 때도 사용함