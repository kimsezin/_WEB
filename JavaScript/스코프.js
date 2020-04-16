var x = 'global';

function foo () {
  var x = 'function scope';
  console.log(x);
}

foo(); // ?
console.log(x); // ?

console.log('--------------------------------------------');

var x=0;
{
    var x=1;
    console.log(x);
}
console.log(x);

let y=0;
{
    let y=1;
    console.log(y);
}
console.log(y);
console.log('--------------------------------------------');
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // ?
  }

  bar();
}
foo();
console.log(x); // ?

var x = 10;

function foo() {
  x = 100;
  console.log(x);
}
foo();
console.log(x); // ?
console.log('--------------------------------------------');
var x = 10;

function foo(){
  var x = 100;
  console.log(x);

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // ?
  }

  bar();
}
foo();
console.log(x); // ?