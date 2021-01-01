/*
Destructuring and Set 활용
lotto 번호 만들기
1. 유일한 값을 추출하는 과정에서 Set을 사용합니다.
2. getRandomNumber 함수에 변수를 전달하는 과정에서 destructuring을 사용해봅니다.
*/

const SETTING = {
    name : "LOTTO",
    count : 6,
    maxNum : 45
}

function getRandomNumber(){
    //랜덤한 유일한 숫자값을 추출
    const arrRanNum = new Set();
    const {count,maxNum} = SETTING;

    while(arrRanNum.size < count){
        const num = Math.floor(Math.random() * maxNum) +1;
        arrRanNum.add(num);
    }

    return Array.from(arrRanNum);
}

console.log(getRandomNumber());
