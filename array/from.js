//ES2015 from method

/*
function addMark(){ //인자값을 주지 않아도 arguments의 내부 지역변수를 통해 인자값들을 받을 수 있음
    let newData = [];

    for(let i=0; i<arguments.length; i++){  //arguments도 객체임. 배열의 형태로 사용할 수 있음
        newData.push(arguments[i]+"!");
    }
    console.log(newData);
}
addMark(1,2,3,4);   //가변적인 파라미터가 들어올 때 사용
*/

/*
function addMark(){
    let newData = arguments.map(function(value){    //map은 순열하면서 필요한 값을 추가하고 새로운 배열을 반환해 줌
        return value + "!";
    });
    console.log(newData);   // arguments는 배열이 아니기 때문에 error가 남
}
addMark(1,2,3,4);
*/


//arguments는 배열이 아니기 때문에 바로 map을 사용할 수 없음
//이것을 진짜 배열로 바꿔주려면 from을 사용하여 쉽게 바꿀 수 있음
//js에는 가짜 배열의 형태가 많은데, from을 사용하여 이를 진짜 배열로 만들 수 있음

function addMark(){
    let newArray = Array.from(arguments);   //이것 말고도 nodelist같은 경우도 사용 가능
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newData);
}
addMark(1,2,3,4);

/*
마무리 정리:
- 함수에 인자값을 주지 않아도 내부에서 arguments로 처리하면 가변길이의 인자값을 받을 수 있음
- arguments는 배열의 형태로 사용할 수는 있지만 진짜 배열은 아니기 때문에 error날 수 있음
- 이때는 from을 사용하여 진짜 배열로 손쉽게 만들어줄 수 있음
- argunents 말고도 js에 존재하는 가짜 배열의 것들은 from을 통해 진짜 배열로 만들어주면 됨!
*/