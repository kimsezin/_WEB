//1. 네이티브 객체
//1.1 Object

//변수 o에 빈 객체를 저장한다
var o = new Object();
console.log(typeof o +': ',o);

o= new Object(undefined);
console.log(typeof o +': ',o);

o = new Object(null);
console.log(typeof o +': ',o);

// String 객체를 반환한다
// var obj =  new String('String'); 과 동치이다.
var obj = new Object('String');
console.log(typeof obj + ': ',obj);
console.dir(obj);

var strObj =  new String('String');
console.log(typeof strObj +': ',strObj);

//Number 객체를 반환한다.
//var obj = new Number(123); 과 동치이다.
var obj = new Object(123);
console.log( typeof obj + ': ', obj);

var numObj = new Number(123);
console.log( typeof numObj + ': ',numObj);

//Boolean 객체를 반환한다.
//var obj = new Boolean(true); 와 동치이다.
var obj = new Object(true);
console.log(typeof obj +': ',obj);

var boolObj= new Boolean(true);
console.log(typeof boolObj +': ',boolObj );



//1.2 Function
var adder = new Function('a','b','return a+b');
adder(2,6);
//등등등 원시타입들 다 가능
console.log('-------------------------------------------------------------------');

//2.호스트 객체
//1. 전역객체 , 
//2. BOM(Browser Object Model) 최상위 window 아래
//                              document(현재 로드된 웹페이지), history(브라우저 히스트리에 기록된 웹페이지들),
//                              location(현재 페이지 URL), navigator(브라우저 관련 정보), screen(장치의 디스플레이 정보)
//3. DOM(Document Object Model) 최상위 document아래
//                              html,head,body,등


