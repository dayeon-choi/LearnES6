//Object assign 메서드

const healthObj={
    showHealth:function(){
        console.log("오늘의 운동시간: "+this.healthTime);
    }
}

//JS에서 object를 만드는 가장 표준적인 방법 Object.create();
/*
const myHealth = Object.create(healthObj);

//단점은 이처럼 클래스 변수값들을 일일이 넣어주어야 한다는 불편함이 있음
myHealth.healthTime="11:20";
myHealth.name="crong";
*/

//위 코드를 개선한다면
const myHealth=Object.assign(Object.create(healthObj),{
    name:"crong",
    lastTime:"11:20"
});

console.log("myhealth is ",myHealth);