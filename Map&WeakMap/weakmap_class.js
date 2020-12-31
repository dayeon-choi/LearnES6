//WeakMap 활용

/**/ //이 주석 부분이 WeakMap() 사용 전 코드
const wm = new WeakMap();  

//WeakMap의 전역 공간에 두게 됨
function Area(height,width){
    /*
    this.height = height;
    this.width = width;
    */
    //위 코드를 이렇게!
    wm.set(this,{height,width});
}

Area.prototype.getArea = function(){
    /*
    return this.height * this.width;
    */
    //위 코드를 이렇게!
    const {height,width} = wm.get(this);
    return height * width;
}

let myArea = new Area(10,20);
console.log(myArea.getArea());
/*
console.log(myArea.height); //WeakMap() 사용시 undefined가 뜸(즉, 외부에서 직접 접근X)
*/

//인스턴스 삭제 시 확인
console.log("삭제 이전",wm.has(myArea)); //true
console.log("삭제 이전",wm.get(myArea));
myArea = null;
console.log("삭제 이후",wm);    //10과 20이 보이긴 함
console.log("삭제 이후",wm.has(myArea));    //WeakMap에 myArea가 존재하는지 확인 -> false
console.log("삭제 이후",wm.get(myArea));    //undefined
