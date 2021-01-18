//rest parameters

function checkNum(...argArray){
    //필요없음->//const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray));
    const result = argArray.every((v) => typeof v==="number")
    console.log(result);
}

const result1=checkNum(10,2,3,4,5,"55");
const result2=checkNum(10,2,3,4,false);