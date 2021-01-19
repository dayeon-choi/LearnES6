const previousObj={
    name:"crong",
    lastTime:"11:20"
};

const myHealth=Object.assign({},previousObj,{
    "lastTime":"12:30",
    "name":"crong"
    //"age":99
});

//age부분을 지운다고 하더라도 내용은 같지만 false가 나옴
console.log(previousObj===myHealth);            //false
console.log(previousObj.name===myHealth.name);  //true