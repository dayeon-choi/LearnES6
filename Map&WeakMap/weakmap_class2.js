//WeakMap을 안쓰는 경우
const obj = {};

function Area(height,width){
    obj["height"] = height;
    obj["width"] = width;
}

Area.prototype.getArea = function(){
    return obj.height * obj.width;
}

let myArea = new Area(10,20);
console.log(myArea.getArea());  //200

//삭제 시
console.log("삭제 전",obj);
myArea = null;
console.log("삭제 후",obj);   //제대로 나옴. 그냥 존재함. 가비지컬렉션 대상이 안됨. 오브젝트 값이 그대로 유지