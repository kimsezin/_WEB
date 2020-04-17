/* 
1. Ajax(Asynchronous JavaScript and XML)는 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.
서버로부터 웹페이지가 반환되면 화면 전체를 갱신해야 하는데 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있도록 하는 것이 Ajax이다. 
*/

//2. JSON(JavaScript Object Notation)
//서버와 클라이언트간에는 데이터교환이 필요하다. JSON은 클라이언트와 서버 간 데이터 교환을 위한 규칙 즉 데이터 포맷을 말한다.
//JSON은 일반 텍스트 포맷보다 효과적인 데이터 구조화가 가능하며 XML포맷보다 가볍고 사용하기 간편하여 가독성도 좋다.
//JSON은 자바스크립트의 객체 리터럴과 매우 흡사하지만 순수한 텍스트로 구서된 규칙이 있는 데이터구조이다.

//2.1 JSON.stringify
//JSON.stringify 메소드는 객체를 JSON형식의 문자열로 반환한다.
let o = {name : 'Lee', gender : 'male', age: '20'};

//객체 -> JSON 형식의 문자열
let strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);

// 객체 => JSON 형식의 문자열 + prettify
let strPrettyObject = JSON.stringify(o, null,2);
console.log(typeof strPrettyObject, strPrettyObject);

//replacer
//값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
    // undefined: 반환하지 않음
    return typeof value === 'number' ? undefined : value;
  }
  
// 객체 => JSON 형식의 문자열 + replacer + prettify
const strFilteredObject = JSON.stringify(o, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

let arr = [1,5,'false'];

let strArray = JSON.stringify(arr);
console.log(typeof strArray,strArray);

//replacer 
//모든값을 대문자로 변환된 문자열을 반환한다.
function replaceToUpper(key, value)
{
    return value.toString().toUpperCase();
}

//배열 객체 -> 문자열 + replacer
let strFilteredArray = JSON.stringify(arr,replaceToUpper);
console.log(typeof strFilteredArray,strFilteredArray);


console.log('--------------------------------------------------------');
//2.2 JSON.parse
//JSON 데이터를 가진 문자열을 객체로 변환한다.
o = {name : 'Lee', gender : 'male', age:'22'};

strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);

arr = [1,5,'false'];

strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray);

let obj = JSON.parse(strObject);
console.log(typeof obj, obj);

let objArray = JSON.parse(strArray);
console.log(typeof objArray, objArray);

//배열이 JSON 형식의 문자열로 변환되어 있는 경우 JSON.parse는 문자열을 배열 객체로 변환한다. 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.
let todos = [
    {id:1, content:'HTML', completed:true},
    {id:2, content:'CSS', completed:true},
    {id:3, content:'JavaScript', completed:false}
];

let str = JSON.stringify(todos);
console.log(typeof str, str);

let parsed = JSON.parse(str);
console.log(typeof parsed, parsed);






/* XMLHttpRequest */
//브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송한다.
//서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest객체가 그 결과를 처리한다.

//3.1 Ajax request (요청)
//XMLHttpRequest 객체의 생성
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();

// 비동기 방식으로 Request를 오픈한다
//xhr.open('GET', '/users');

// Request를 전송한다
//xhr.send();

//3.1.1 XMLHttpRequset.open
//XMLHttpRequest 객체의 인스턴스를 생성하고 XMLHttpRequest.open 메소드를 사용하여 서버로의 요청을 준비한다.

//3.1.2 XMLHttpRequest.send
//XMLHttpRequest.send 메소드로 준비된 요청을 서버에 전달한다.
//기본적으로 서버로 전송하는 데이터는 GET, POST메소드에 따라 그 전송방식에 차이가 있다.
//GET의 경우 : URL의 일부분인 쿼리 문자열로 데이터를 서버로 전송한다.
//POST의 경우 : 데이터를 Request Body에 담아 전송한다.

//XMLHttpRequest.send 메소드에는 request body에 담아 전송할 인수를 전달할 수 있다.
/* xhr.send(null);
    xhr.send('string');
    xhr.send(new Blob()); //파일 업오르돠 같이 바이너리 컨텐트를 보내는 방법
    xhr.send({form : 'data'});
    xhr.send(document);

    만약 요청메소드가 GET인 경우 send 메소드의 인수는 무시되고 request Body는 null로 설정
*/

//3.1.3 XMLHttpRequest.setRequestHeader
//XMLHttpRequest.setRequestHeader 메소드는 HTTP Request Header의 값을 설정한다.
//setRequestHeader 메소드는 반드시 XMLHttpRequest.open 메소드 호출 이후에 호출한다.

//자주 사용하는건 Content-type, Accept가 있음
//Content-type은 request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다.

// JSON으로 전송하는 경우
xhr.open('POST','/users');

// 클라이언트가 서버로 전송할 데이터의 MIME-type 지정 : JSON
xhr.setRequestHeader('Content-type','application/json');

let data = {id:3, title:'Javascript',author:'Park',price:5000};

xhr.send(JSON.stringify(data));



// x-www-form-urlencoded으로 전송하는 경우
xhr.open('POST','/users');

//클라이언트가 서버로 전송할 데이터의 MIME-type 지정 : x-www-form-urlencoded
//application/x-www-form-urlencoded는 key=value&key=value ...의 형태로 전송
xhr.setRequestHeader('Content-Type', 'application/x-www-form-rulencoded');

data = {title:'JavaScript', author :'Park', price:5000};

xhr.send(Object.keys(data).map(key => `${key}=${data[key]}`).join('&'));


//Accept는 HTTP클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 Accept로 지정할 수 있다.

//서버가 센드백 할 데이터의 MIME-type 지정 : json
xhr.setRequestHeader('Accept','application/json');


// 3.2 Ajax response (응답)

xhr = new XMLHttpRequest();

/*
0	UNSENT	XMLHttpRequest.open() 메소드 호출 이전
1	OPENED	XMLHttpRequest.open() 메소드 호출 완료
2	HEADERS_RECEIVED	XMLHttpRequest.send() 메소드 호출 완료
3	LOADING	서버 응답 중(XMLHttpRequest.responseText 미완성 상태)
4	DONE	서버 응답 완료
*/
//XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때 마다 onreadystatechange 이벤트 핸들러가 호출된다.
xhr.onreadystatechange = function (e)
{
    //readyStates는 XMLHttpRequest의 상태를 반환
    //readyState : 4 => DONE(서버 응답 완료)
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    //status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(xhr.status == 200)
    {
        console.log(xhr.responseText);
    }
    else
    {
        console.log('Error!');
    }
}