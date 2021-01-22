//setPrototypeOf

//parent
const healthObj={
    showHealth : function(){
        console.log("오늘의 운동시간 : "+this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime=newTime;
    }
}

//child obj
const healthChildObj={
    getAge : function(){
        return this.age;
    }
}

//healthChildObj의 프로토타입 체인으로 healthObj가 들어감
Object.setPrototypeOf(healthChildObj,healthObj);

const childObj = Object.setPrototypeOf({
    age:22
},healthObj);

//console.log("childObj is ",childObj);

childObj.setHealth("11:55");
childObj.showHealth();

