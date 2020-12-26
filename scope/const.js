function home(){
    const homename=[1,2,3,3];   //오류남 //var는 오류 안남
    homename = ["1","2"];
    console.log(homename);
    // const를 기본으로 사용한다.
    // 전략 : 그런데 변경이 될 수 있는 변수는 let을 사용한다.
    //        var는 사용하지 않는다.
}
home();