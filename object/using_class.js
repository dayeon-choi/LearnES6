//ES6 Class

//일반적인 방식. 
//객체를 프로토타입 안에 두면서 객체를 제너레이트 해주는 방식
/*
function Health(name){
    this.name=name;
}

Health.prototype.showHealth=function(){
    console.log(this.name+"님 안녕하세요");
}

const h = new Health("crong");
h.showHealth();
*/

class Health{
    //Health도 클래스라고 되어있을 뿐이지 내부적으로는 함수로 처리됨
    
    //constructor가 명시적으로 내장되어 있어 new를 사용해 부를 필요가 없음
    constructor(name,lastTime){
        this.name=name;
        this.lastTime=lastTime;
    }
    
    //사실 내부적으로 showHealth()는 프로토타입 안에 저장되어 있음
    showHealth(){
        console.log("안녕하세요"+this.name);
    }
}

const myHealth = new Health("crong");
myHealth.showHealth();

//[object Function] 라고 출력됨 -> 내부적으로는 함수로 실행된다는 것을 알 수있음
//class 위 주석부분 코드와 그 아래 class부분 코드는 사실 같은 것이라는 것을 알 수 있음
//모듈화가 되기 때문에 가독성 측면에서 더 좋음. 따라서 class를 활용하는 것
console.log(toString.call(Health)); 