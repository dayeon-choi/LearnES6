//this context of Arraw function
/*
const myObj = {
    runTimeout(){
        setTimeout(() => {
            this.printData();
        },200);
    },

    printData(){
        console.log("hi condesquad!");
    }
}

myObj.runTimeout();
*/

const el=document.querySelector("p");

const myObj={
    register(){
        el.addEventListener("click",(evt)=>{
            this.printData(evt.target);
            //콜백함수를 감싸주고 있는 오브젝트, 선언된 것을 기준으로 this가 가리키로 있음
        }); //bind를 사용하지 않아도 되므로 편리함
    },
    printData(el){
        console.log('Clicked!!',el.innerText);
    }
}
//오브젝트 리터럴로 표현하고 있음

myObj.register();