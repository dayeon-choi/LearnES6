//Destructuring
let data = ["dayeon","sonhyen","inwha","daile"]
/*
let dayeon = data[0];
let sonhyen = data[2];

//이 코드를 아래의 코드로 작성할 수 있음
*/
let [dayeon,,inwha] = data;
console.log(dayeon,inwha);