//ES2015 String에 새로운 메서드들

let str = "hello world ! ^^ ~~";
let matchstr = "hello";
console.log(str.startsWith(matchstr));  //true
console.log(str.endsWith(matchstr));    //false
console.log("include test ", str.includes("^"));    //include test true