/**
 * json으로 응답을 받고,
 * javascript object로 변환한 후에 어떠한 데이터 처리 조작을 한 후에 dom에 추가!
 * 데이터 + HTML 문자열의 겷합이 필요하기 때문에
 */

 const data = [
     {
         name : 'coffee - bean',
         order : true,
         items : ['americano','milk','green-tea']
     },
     {
         name : 'starbucks',
         order : false,
     }
 ]

 const template = `<div>welcome ${data[0].name}!!`;
 console.log(template);