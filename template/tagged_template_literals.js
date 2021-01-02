/**
 * Tagged template literals
 * template를 이대로 쓸 수 없어 조작할 필요가 있기 때문에
 * function에서 처리를 해서 
 * 결과값을 반활하여 사용할 수 있음
 */

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano','milk','green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    },
    {
        name : 'coffee-king',
        order : true,
        items : ['americano','latte']
    }
]

function fn(tags,name,items){
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v) => {
    //template literals ``
    let template = fn`<div>welcome ${v.name}!!</div><h2>주문가능항목</h2><div>${v.items}</div>`;
    document.querySelector("#message").innerHTML += template;
});