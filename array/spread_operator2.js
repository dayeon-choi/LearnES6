
/*
//배열 합치기

let pre = [100,200,"hello",null];
let newData = [0,1,2,3,...pre,4]//자연스럽게 합쳐짐

console.log(newData);
*/



function sum(a,b,c){
    return a+b+c;
}
let pre = [100,200,300];

console.log(sum.apply(null,pre));   //spread operate 이전의 방식 //apply : context를 바꿔주면서 함수를 실행하는 것
console.log("result=>",sum(...pre));   //... 을 사용하여 활용할 수 있음

/*
마무리 정리
spread operator(...)의 활용!
배열을 바꾸지 않고 새롭게 복사할 수 있는 방법
배열을 합치거나 함수의 파라미터로 전달해야 할 때 사용
*/