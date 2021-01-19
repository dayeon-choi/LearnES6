//setPrototypeOf

const healthObj={
    showHealth:function(){
        console.log("오늘의 운동시간:"+this.healthTime);
    }
}

/*
const myHealth={
    name:"crong",
    lastTime:"11:20"
};

console.log("myhealth is",myHealth);
*/

const newobj = Object.setPrototypeOf({
    name:"crong",
    lastTime:"11:20"
},healthObj);

console.log("newobj is "+newobj);