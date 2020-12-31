//map & WeakMap
//JS에서는 자료를 처리하는 것이 Array, Object
//Array -개선/발전-> Set, weakset
//Object -개선/발전-> map, weakmap

//map은 key/value
let wm = new WeakMap();
let myfun = function(){};

//위 함수가 얼마나 실행됬는지를 알아보려고 할 때
wm.set(myfun,0);
//console.log(wm);    //WeakMap {ƒ => 0}

let count=0;
for(let i=0;i<10;i++){
    count=wm.get(myfun);
    count++;
    wm.set(myfun,count);
}
console.log(wm.get(myfun)); //10

myfun=null;
console.log(wm.get(myfun)); //undefined
console.log(wm.has(myfun)); //false
