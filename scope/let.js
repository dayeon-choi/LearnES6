//블록 단위의 scope에서는 let을 지원함
//var라고 하면 블록 단위 유효하지 않음

var name="global var"
function home(){
    var homevar = "homevar";
    for(let i=0;i<100;i++){
//        console.log(i);
    }

    if(true){
        let myif = "nyif"
    }
    // console.log(myif) 찾을 수 없다고 뜸

//    console.log(i); 찾을 수 없다고 뜸!
}
home();