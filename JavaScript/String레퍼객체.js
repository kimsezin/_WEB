/* 1. String Constructor */
//String 객체는 String 생성자 함수를 통해 생성할 수 있다. 이때 전달된 인자는 모두 문자열로 변환된다.

let strObj = new String('Lee');
console.log(strObj);

strObj = new String('1');
console.log(strObj);

strObj = new String(undefined);
console.log(strObj);

var x = String('Lee');
console.log(typeof x, x);

//일반적으로 문자열을 사용할 때는 원시 타입 문자열을 사용한다.
let str = 'Lee';
strObj = new String('Lee');

console.log(str == strObj);
console.log(str === strObj);

console.log(typeof str);
console.log(typeof strObj);

/* 2. String Property */
//2.1 String.length 문자열 내의 문자 갯수를 반환한다. String 객체는 length 프로퍼티를 소유하고 있으므로 유사 배열 객체이다.
let str1 = 'Hello';
console.log(str1.length);

let str2 = '안녕하세요!';
console.log(str2.length);


/* 3. String Method */
//3.1 String.prototype.charAy(pos: number): 인수로 전달한 index를 사용하여 index에 해당하는 위치의 문자를 반환한다. 
//index는 0 ~ (문자열 길이 - 1) 사이의 정수이다. 지정한 index가 문자열의 범위(0 ~ (문자열 길이 - 1))를 벗어난 경우 빈문자열을 반환한다.

str = 'Hello';
console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
//지정한 범위가 문자열을 초과할경우 빈 문자 반환
console.log(str.charAt(88)); //''

for (let i = 0; i<str.length;i++)
{
    console.log(str.charAt(i));
}

for (i=0;i<str.length;i++)
{
    console.log(str[i]);
}

//3.2 String.prototype.concat(...strings:string[]): string
//인수로 전달한 1개 이상의 문자열과 연결하여 새로운 문자열을 반환한다.
//concat 메소드를 사용하는 것보다는 +, += 할당 연산자를 사용하는 것이 성능상 유리하다.

console.log('Hello '.concat('Lee')); //Hello Lee

//3.3 String.prototype.indexOf(searchString: string, formIndex = 0):number
//인수로 전달한 문자 또는 무자열을 대상 문자열에서 검색하여 처음 발견된곳의 index 반환, 발견 못한경우 -1 반환
str = 'Hello World';

console.log(str.indexOf('l'));
console.log(str.indexOf('or'));
console.log(str.indexOf('or', 8));

if(str.indexOf('Hello' !== -1))
{
    //Hello가 있는경우에 처리할 내용
}

if(str.includes('Hello'))
{
    //Hello가 있는경우에 처리할 내용
}

//3.4 String.prototype.lastIndexOf(searchString : string, fromIndex=this.length-1): number
//인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 마지막으로 발견된 곳의 index를 반환한다.
//2번째 인수가 전달되면 검색 시작위치를 fromIndex로 이동하여 역방향으로 검색 시작 이때 범위는 0~fromIndex

str = 'Hello World';

console.log(str.lastIndexOf('World'));
console.log(str.lastIndexOf('l'));
console.log(str.lastIndexOf('o', 5));
console.log(str.lastIndexOf('o',8));
console.log(str.lastIndexOf('l',10));

console.log(str.lastIndexOf('H', 0));  // 0
console.log(str.lastIndexOf('W', 5));  // -1
console.log(str.lastIndexOf('x', 8));  // -1

//3.5 String.prototype.replace(searchValue : string | RegExp, replaceValue:String|replacer): string
//첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다. 원본은 안변하고 바뀐 새로운 문자열 반환
//검색된 문자열이 여럿 존재할 경우 첫번쨰로 검색된 문자열만 대체된다.

str = 'Hello world';
console.log(str.replace('world', 'Lee')); // Hello Lee

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
console.log(str.replace('world', '<strong>$&</strong>')); // Hello <strong>world</strong>

/* 정규표현식
g(Global): 문자열 내의 모든 패턴을 검색한다.
i(Ignore case): 대소문자를 구별하지 않고 검색한다.
*/
console.log(str.replace(/hello/gi, 'Lee'));

//두번째 인수로 치환함수를 전달할 수 있다.
let camelCase = 'helloWorld';

// /.[A-Z]/g => 1문자와 대문자의 조합을 문자열 전체에서 검색한다.
console.log(camelCase.replace(/.[A-Z]/g, function(match)
{
    return match[0] + '_' + match[1].toLowerCase();
}));

// /(.)([A-Z])/g => 1문자와 대문자의 조합
// $1 => (.)
// $2 => ([A-Z])
console.log(camelCase.replace(/(.)([A-Z])/g, '$1_$2').toLowerCase());

let snakeCase = 'hello_World';

console.log(snakeCase.replace(/_./g, function(match)
{
    return match[1].toUpperCase();
}));

//3.6 String.prototype.split(separator : string | RegExp, limit?: number)
//첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환
//원본 문자열은 변경되지않음

str = 'How are you doing?'

console.log(str.split(' '));
console.log(str.split(/\s/)); //\s 는 공백 (스페이스바)
console.log(str.split());
console.log(str.split(''));
console.log(str.split(' ',3));
console.log(str.split('o'));

//3.7 String.prototype.substring(start: number, end= this.length): string
//첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 두번째 인자에 전달된 end인덱스에 해당하는 문자의 바로이전문자까지를 모두 반환

str = 'Hello World'; //str.length = 11
console.log(str.substring(1,4));

console.log(str.substring(4,1)); //첫번째 인수 > 두번째 인수 : 두 인수는 교환된다

console.log(str.substring(4)); // 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
console.log(str.substring(-2)); // 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
console.log(str.substring(1, 12)); // ello World
console.log(str.substring(11)); // ''
console.log(str.substring(20)); // ''
console.log(str.substring(0, str.indexOf(' '))); // 'Hello'
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // 'World'

//3.8 String.prototype.slice(start?: number, end?: number): string
//String.prototype.substring과 동일하다. 단, String.prototype.slice는 음수의 인수를 전달할 수 있다.

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
console.log(str.substring(-5)); // 'hello world'
// 뒤에서 5자리를 잘라내어 반환한다.
console.log(str.slice(-5)); // 'world'

// 2번째부터 마지막 문자까지 잘라내어 반환
console.log(str.substring(2)); // llo world
console.log(str.slice(2)); // llo world

// 0번째부터 5번째 이전 문자까지 잘라내어 반환
console.log(str.substring(0, 5)); // hello
console.log(str.slice(0, 5)); // hello

// 3.11 String.prototype.trim(): string ES5
// 대상 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.
str = '   foo  ';

console.log(str.trim()); // 'foo'

// String.prototype.replace
console.log(str.replace(/\s/g, ''));   // 'foo'
console.log(str.replace(/^\s+/g, '')); // 'foo  '
console.log(str.replace(/\s+$/g, '')); // '   foo'

console.log(str.trimStart()); // 'foo  '
console.log(str.trimEnd());   // '   foo'

//3.12 String.prototype.repeat(count: number): string 
console.log('abc'.repeat(0));   // ''
console.log('abc'.repeat(1));   // 'abc'
console.log('abc'.repeat(2));   // 'abcabc'
console.log('abc'.repeat(2.5)); // 'abcabc' (2.5 → 2)
//console.log('abc'.repeat(-1));  // RangeError: Invalid count value

//3.13 String​.prototype​.includes(searchString: string, position?: number): boolean
str = 'hello world';

console.log(str.includes('hello')); // true
console.log(str.includes(' '));     // true
console.log(str.includes('wo'));    // true
console.log(str.includes('wow'));   // false
console.log(str.includes(''));      // true
console.log(str.includes());        // false

// String​.prototype​.indexOf 메소드로 대체할 수 있다.
console.log(str.indexOf('hello')); // 0