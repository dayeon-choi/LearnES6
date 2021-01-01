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
    }
]

function fn(tags,name,items){
    console.log(tags);

}

const template = `<div>welcome ${data[1].name}!!</div>`+`\n`+
                `<h2>주문가능항목</h2>`+`\n`+
                `<div>${data[1].items}</div>`;

console.log(template);