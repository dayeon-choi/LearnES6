// spread operator , 펼침연산자

let pre = ["apple","orange",100];
let newData = [...pre]; //pre 배열을 복사
console.log(pre === newData); //false //=== 참조가 같은지 

/*
마무리 정리
spread operator는 '펼치는'역할을 한다.
배열에 사용하면 그대로 펼쳐 복사하는 역할을 한다.
연산자는 ... 울 사용한다.
완전한 복사로, 이것은 참조값이 다르다는 것으로 알 수 있다.
*/