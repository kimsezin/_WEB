//Number 객체는 원시 타입 number를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼(wrapper) 객체이다.
//원시 타입이 wrapper 객체의 메소드를 사용할 수 있는 이유는 
//원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

var x = new Number(123);
var y = new Number('123');
var z = new Number('str');

console.log(x);
console.log(y);
console.log(z);

var x = Number('123');//new 연산자 안붙이면 객체로 안만들어지고 걍 원시타입 Number로 만들어짐
console.log(typeof x,x);
console.log(typeof y,y);

/* Number Property */

//1. Number.EPSILON (javascript에서 표현할 수 있는 가장 작은 수)
console.log(0.1 + 0.2); //0.30000000000000004 미세한 오차 발생 2진수라서
console.log(0.1+0.2 == 0.3);

function isEqual(a,b){
    //Math.abs는 절댓값 반환
    //즉  a와b의 차이가 JavaScript에서 표현할 수 있는 가장 작은수인 Number.EPSILON보다 작으면 같은수로 인정할 수 있다.
    return Math.abs(a-b) < Number.EPSILON;
}

console.log(isEqual(0.1+0.2,0.3));

console.log('-----------------------------------------------------------------------');
//2. Nuber.MAX_VALUE (javascript에서 사용 가능한 가장 큰 숫자 반환)
Number.MAX_VALUE;
var num=10;
num.MAX_VALUE;
console.log(num);
console.log(Infinity > Number.MAX_VALUE);

console.log('-----------------------------------------------------------------------');

//3.Number.MIN_VALUE
Number.MIN_VALUE;

var num=10;
num.MIN_VALUE;

console.log(Number.MIN_VALUE>0);

console.log('-----------------------------------------------------------------------');
//4.Number.POSITIVE_INFINITY (양의 무한대 Infinity반환)
//5 Number.NEGATIVE_INFINITY (음의 무한대 Infinity반환)
//6 Number.NaN(숫자가 아님을 나타내는 숫자값)

/* Number Method */
//1 Number.isFinite(testValue: number): 매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.
//전역 함수 isFinite()는 인수를 숫자로 변환하여 검사를 수행하지만 Number.isFinite()는 인수를 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.

//2 Number.isInteger(testValue: number): 개변수에 전달된 값이 정수(Integer)인지 검사하여 그 결과를 Boolean으로 반환한다. 검사전에 인수를 숫자로 변환하지 않는다.

//3 Number.isNaN(testValue: number): 매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

//4 Number.isSafeInteger(testValue: number): boolean 매개변수에 전달된 값이 안전한(safe) 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 
//안전한 정수값은 -(253 - 1)와 253 - 1 사이의 정수값이다. 검사전에 인수를 숫자로 변환하지 않는다.

//5 Number.prototype.toExponential(fractionDigits?: number): string 대상을 지수 표기법으로 변환하여 문자열로 반환한다. 
//지수 표기법이란 매우 큰 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다.

//6 Number.prototype.toFixed(fractionDigits?: number): string 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

//7 Number.prototype.toPrecision(precision?: number): string 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다
//지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.

//8 Number.prototype.toString(radix?: number): string 숫자를 문자열로 변환하여 반환한다.

//9 Number.prototype.valueOf(): number Number 객체의 원시 타입 값(primitive value)을 반환한다.