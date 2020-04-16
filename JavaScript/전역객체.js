//전역변수는 결국 전역객체에 선언된 프로퍼티
var ga = 'Global variable';
console.log(ga);
console.log(global.ga);

//전역함수또한 전역객체의 메소드
function foo()
{
    console.log('invoked!');
}
window.foo();

//전역 프로퍼티
//1.Infinity(양/음 무한대를 나타내는 숫자값)
console.log(window.Infinity);

//2.NaN (Not a Number 숫자가 아님) 
console.log(window.NaN); // NaN

//전역 함수
//1.eval() 가급적 쓰지 않는것이 좋음
var foo = eval('2+2');
console.log(foo);

//2.isFinite() 정상적인 유한수인지 검사
console.log(isFinite(Infinity));  // false 무한이 아니면  true

//3.isNaN() 전달된 값이 NaN인지 확인
isNaN(NaN)       // true
isNaN(new Date().toString())  // true:  String → NaN

//4.parseFloat() 문자열을 부동소수점순자로 변환
parseFloat('3.14');     // 3.14
parseFloat('10.00');    // 10

//5.parseInt() 문자열을 정수형숫자로 해석해 반환
parseInt(10);     // 10
parseInt(10.123); // 10
parseInt('10', 2);  // 2진수 10 → 10진수 2
parseInt('10', 8);  // 8진수 10 → 10진수 8
parseInt('10', 16); // 16진수 10 → 10진수 16