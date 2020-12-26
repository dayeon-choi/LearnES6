function home(){
    const list = ["apple","orange","watermelon"];
    list.push("banana");    //변경 됨. const가 불변의 뜻은 아님.
    console.log(list);
}
//immutable array 어떻게 만들지?
const list1=["apple","orange","watermelon"];
list2=[].concat(list1,"banana");
console.log(list1,list2);
//불변의 array인데, list를 그대로 가지고 있는 것.

//react의 state값을 바꿀 때 이런 immutable array를 사용
//->새로운 객체를 계속 만들어서 상태값을 바꾸는...