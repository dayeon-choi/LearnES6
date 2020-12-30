var news = [
    {
        "title" : "sbs",
        "imgurl" : "https://www.hellodd.com/news/userArticlePhoto.html",
        "newslist" : [
            "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
            "'리캡차'가 사라진다",
            "갤럭시S8 출시? '갤노트7' 처리 계획부터 밝혀야",
            "블로코-삼성SDS,블록체인 사업 '맞손'"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "https://www.hellodd.com/news/userArticlePhoto.html",
        "newslist" : [
            "Lorem ipsum dolor sit amet, consecttur adipisicin",
            "ipsum dolor sit amet, consectetur adipisicin",
            "dolor sit amet, consectetur adiisicin",
            "amet, consectetur adipisicin"
        ]
    }
];

function getNewsList([{newslist}]){
    console.log(newslist);
}
/* 
//두번째(mbc) 기사를 출력하고 싶은 경우
function getNewsList([,{newslist}]){
    console.log(newslist);
}
*/

getNewsList(news);