var data = [1,2,undefined,NaN,null,""];

/*
data.forEach(function(value){
    console.log("valueis",value);
});
*/


//for in은 원래 object를 순회할 때 사용하는 것
//배열도 일종의 object이기 때문에 사용가능함
//for in은 자신에게 있지 않은, 상위에 있는 추가된 값들까지도 포함하여
//값을 나타낼 수 있음

//->이러한 점 때문에 배열에서 for in을 사용하지 않는 경우가 많음

Array.prototype.getIndex = function(){};

//for in
/*
for(let idx in data){
    console.log(data[idx]); //function도 생김
}
*/

//for of
/*
for(let value of data){
    console.log(value); //function 안나옴
}
*/

//문자 단위로 돌면서 그 값을 출력해줌 for of
var str = "hello world!!!!";
for(let value of str){
    console.log(value);
}

/*
마무리 정리

for in은 자신이 가지고 있지 않은 상위의 객체까지도 포함하여 순회함.
이러한 점 때문에 혼돈을 불러올 수 있으므로 잘 사용하지 않음.

그래서 요즘은 for of를 사용하여 순회
for of를 문자열에서 사용하면 문자 단위로 순회하게 됨
*/