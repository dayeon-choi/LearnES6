/*
const name = "crong";
const age = 33;

const obj = {
    name : name,
    age : age
};

console.log(obj);
*/

function getObj(){
    const name = "crong";

    const getName = function(){
        return name;
    }

    const setName = function(newname){
        name = newname;
    }

    const printName = function(){
        console.log(name);
    }

    /*
    이름이 중복되니까 불필요한 코드가 됨
    return{
        getName : getName,
        setName : setName
    } 
    */  

    return{getName,setName,name}    //value도 넘길 수 있음
}

var obj = getObj();
console.log(obj.getName());
console.log(obj);

/*
const data = {
    name,
    getName(){

    }   
    //이렇게 function도 없는 형태로 만들 수 있음
    //Object 리터럴 키워드 없이 value 값만 넣어서 
    //쉽게 Object 리터럴을 만들 수 있음
}
*/