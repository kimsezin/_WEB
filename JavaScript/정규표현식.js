// 정규표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다.

// 예를 들어 회원가입 화면에서 사용자로 부터 입력 받는 전화번호가 유효한지 체크할 필요가 있다. 이때 정규표현식을 사용하면 간단히 처리할 수 있다.

const tel = '01094016841'

const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel));

let targetStr = 'This is a pen.';
let regexr = /is/ig;

// RegExp 객체의 메소드
console.log(regexr.exec(targetStr));
console.log(regexr.test(targetStr));

// String 객체의 메소드
console.log(targetStr.match(regexr));
console.log(targetStr.replace(regexr, 'IS'));

// String.prototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
console.log(targetStr.search(regexr));
console.log(targetStr.split(regexr));

/* Flag 플래그 */
//i = 대소문자를 구별하지않고 검색 g = 문자열 내의 모든패턴을 검색 m = 문자열의 행이 바뀌더라도 검색 계속

targetStr = 'Is this all there is?'

// 문자열 is 를 대소문자 구별하여 한번만 검색
regexr = /is/;

console.log(targetStr.match(regexr));
//문자열 is 를 대소문자 구별하지 않고 대상 문자열 끝까지 검색
regexr = /is/ig;

console.log(targetStr.match(regexr));
console.log(targetStr.match(regexr).length);

console.log('-----------------------------------------------------------------------------------');

/* 패턴 */

targetStr = 'AA BB Aa Bb';
regexr = /.../ig; //.은 임의의 문자 한개를 의미한다 문자의 내용은 무엇이든지 상관없다. 3자리 문자 추출
console.log(targetStr.match(regexr));

regexr = /./g; //모든 문자(한글자) 검색
console.log(targetStr.match(regexr));

//앞선 패턴을 반복하려면 패턴뒤에 + 붙임
targetStr = "AA AAA BB Aa Bb";
regexr = /A+/g;

console.log(targetStr.match(regexr));
// | 쓰면 or의미
regexr = /A|B/g;
console.log(targetStr.match(regexr));
//[] 내의 문자는 or로 동작한다 그 위에 + 를 사용하여 앞선 패턴을 한번 이상 반복
targetStr = 'AA BB Aa Bb';
regexr = /[AB]+/g;

console.log(targetStr.match(regexr));

// 범위를 지정하려면 []내에 -를 사용
targetStr = 'AA BB ZZ Aa Bb';
regexr = /[A-Z]+/g;
console.log(targetStr.match(regexr));

targetStr = 'AA BB Aa Bb 24,000';
regexr = /[0-9,]+/g;

console.log(targetStr.match(regexr));

// \d는 숫자를 의미한다 \D는 \d와 반대로 동작
targetStr = 'AA BB Aa Bb 24,000';
regexr = /[\d,]+/g;

console.log(targetStr.match(regexr));

// 0 ~ 9 가 아닌 문자들
regexr = /[\D,]+/g;
console.log(targetStr.match(regexr));

//알파벳과 숫자 또는 ,가 한번이상 반복되는 문자열
regexr = /[\w,]+/g;
console.log(targetStr.match(regexr));

//알파벳과 숫자가 아닌 문자와 ,가 한번이상 반복되는 문자열
regexr = /[\W,]+/g;
console.log(targetStr.match(regexr));
console.log('----------------------------------------------------------------------------');
//자주쓰는 정규표현식
let url = 'http://www.example.com';

regexr = /^http/; // ^은 문자열의 처음을 의미함

console.log(regexr.test(url));

let fileName = 'index.html';
regexr = /html$/ // $은 문자열의 끝을 의미함
console.log(regexr.test(fileName));

//모두 숫자인지 검사
//[^] : []내의 ^은 부정을 의미 [^a-z]는 알파벳소문자로 시작하지 않는 모든 문자
//[]^ : []바깥의 ^는 문자열의 처음을 의미한다.
targetStr = '12345';
regexr = /^\d+$/;

console.log(regexr.test(targetStr));

//하나이상의 공백으로 시작하는지 검사한다.
targetStr = ' Hi!'
// \s : 여러가지 공백문자(스페이스, 탭 등)
regexr = /^[\s]+/;
console.log(regexr.test(targetStr));

//아이디로 사용가능한지 검사 (영문자,숫자만 허용 4-10자리)
targetStr = 'rlatpwls15'
// {4,10} : 4~10글자만
regexr = /^[A-Za-z0-9]{4,10}$/;

console.log(regexr.test(targetStr));

//메일주소 형식에 맞는지 검사
let email = 'rlatpwls15@naver.com';
regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

console.log(regexr.test(email));


//핸드폰 번호 형식에 맞는지 검사
let phonenumber = '010-9401-6841';
regexr = /^\d{3}-\d{4}-\d{4}$/;

console.log(regexr.test(phonenumber));

//특수문자 포함 여부 검사
targetStr = 'abc#123';
// A-Za-z0-9 이외의 문자 검사
regexr = /[^0-9a-zA-Z]/gi;

console.log(regexr.test(targetStr));

//정규식 리터럴
/ab+c/i;

new RegExp('ab+c','i');
new RegExp(/ab+c/,'i');
new RegExp(/ab+c/i); //ES6

/* RegExp Method */

//2.2.1 RegExp.prototype.exec(target: string): RegExpExecArray | null
//문자열을 검색하여 매칭결과를 반환 : 배열 or null
let target = 'Is this all there is?';
regexp = /is/;

let res = regexp.exec(target);
console.log(res);

//2.2.2 RegExp.prototype.test(target: string): boolean ES3
//문자열을 검색하여 매칭 결과를 반환한다. 반환값은 true 또는 false이다
res = regexp.test(target);
console.log(res);