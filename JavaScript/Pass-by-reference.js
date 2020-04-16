// Pass-by-reference
var foo = {
    val: 10
}

var bar = foo;
console.log(foo.val, bar.val);
console.log(foo===bar);

bar.val=20;
console.log(foo.val, bar.val);
console.log(foo===bar);

//객체의 변수는 주소를 가르키는 값? 일것이다. 
//변수 foo는 객체를 가르키는 참조값이므로 bar에도 같은 참조값이 저장된다 그래서 bar 값을 바꾸면 foo값도 함께 바뀌는 것이다.
