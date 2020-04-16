// 배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.
// 배열은 Array 생성자로 생성된 Array 타입의 객체이며 프로토타입 객체는 Array.prototype이다.

/* 1. 배열의 생성 */
//1.1 배열 리터럴
var emptyArr = [];

console.log(emptyArr[1]);
console.log(emptyArr.length);

var arr = ['zero', 'one', 'two', 'three', 'four',
'five', 'six', 'seven', 'eight', 'nine'];

console.log(arr[1]);
console.log(arr.length);
console.log(typeof arr);

var emptyArr = [];
var emptyObj = {};

console.dir(emptyArr.__proto__);
console.dir(emptyObj.__proto__);

//대부분의 프로그래밍 언어에서 배열의 요소들은 모두 같은 데이터 타입이어야 하지만, 자바스크립트 배열은 어떤 데이터 타입의 조합이라도 포함할 수 있다.
var misc = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    ['nested array'],
    { object: true },
    function () {}
  ];

var arr = [];

arr[1]=1;
arr[3]=3;
console.log(arr);
console.log(arr.length);

// 값이 할당되지 않은 인덱스 위치의 요소는 생성되지 않는다.
console.log(Object.keys(arr)); // [ '1', '3' ]

// arr[0]이 undefined를 반환한 이유는 존재하지 않는 프로퍼티에 접근했을 때 undefined를 반환하는 것과 같은 이치다.
console.log(arr[0]); // undefined

//2.2 배열 요소의 삭제
//배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다. 
//이때 length에는 변함이 없다. 해당 요소를 완전히 삭제하여 length에도 반영되게 하기 위해서는 Array.prototype.splice 메소드를 사용한다.

var numbersArr = ['zero', 'one', 'two', 'three'];

//요소의 값만 삭제
delete numbersArr[2];// (4) ["zero", "one", empty, "three"]
console.log(numbersArr);

// 요소 값만이 아니라 요소를 완전히 삭제한다
// splice(시작 인덱스, 삭제할 요소수)
numbersArr.splice(2,1);
console.log(numbersArr);

//3.배열의 순회
//배열은 객체이기 때문에 프로퍼티를 가질 수 있다, 배열의 순회에는 forEach 메소드, for 문, for…of 문을 사용하는 것이 좋다.
var arr = [0,1,2,3];
arr.foo = 10;

for(var key in arr)
{
    console.log('key: '+key, 'value: ',arr[key]);
}
// key: 0 value: 0
// key: 1 value: 1
// key: 2 value: 2
// key: 3 value: 3
// key: foo value: 10 => 불필요한 프로퍼티까지 출력

for (var i=0;i<arr.length;i++)
{
    console.log(i,arr[i]);
}
for (const item of arr)
{
    console.log(item);
}

console.log('--------------------------------------------------------------------');
//4.Array Property
//4.1 Array.length
//length 프로퍼티는 요소의 개수(배열의 길이)를 나타낸다. 

var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

arr[4294967294] = 100;
console.log(arr.length); // 4294967295
console.log(arr); // (4294967295) [1, 2, 3, 4, 5, empty × 4294967289, 100]

arr[4294967295] = 1000;
console.log(arr.length); // 4294967295
console.log(arr); // (4294967295) [1, 2, 3, 4, 5, empty × 4294967289, 100, 4294967295: 1000]

//현재 length 프로퍼티 값보다 더 큰 인덱스로 요소를 추가하면 새로운 요소를 추가할 수 있도록 자동으로 length 프로퍼티의 값이 늘어난다. 
//length 프로퍼티의 값은 가장 큰 인덱스에 1을 더한 것과 같다.

var arr = [];
console.log(arr.length);

arr[1000] = true;

console.log(arr);
console.log(arr.length);
console.log(arr[0]);

/* 5. Array Method */
//🔒 원본배열 변경 X, ✏️원본배열 변경 O
// 5.1 Array.isArray(arg: any): boolean ES5
// 객체가 배열이면 true, 배열이 아니면 false를 반환한다.

// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);

//5.2 Array.from
//이터러블을 배열로 변환하여 반환한다.
console.log(Array.from('hello'));
console.log(Array.from([1,2,3], x => x+x));

(function ()
{
    console.log(Array.from(arguments));
    console.log([...arguments]);
}(1,2,3));

//5.3 Array.of ES6
//주어진 인수로 새로운 배열을 생성하여 반환한다.
Array.of(1);
Array.of(1,2,3);

//5.4 Array.prototype.indexOf(searchElement: T, fromIndex?: number): number 🔒 ES5
//indexOf 메소드의 인자로 지정된 요소를 배열에서 검색하여 인덱스를 반환한다. 중복되는 요소가 있는 경우 첫번째 인덱스만 반환된다. 만일 해당하는 요소가 없는 경우, -1을 반환한다.

var arr = [1,2,2,3];
console.log(arr.indexOf(2));
console.log(arr.indexOf(4));
console.log(arr.indexOf(2,2));

var foods = ['apple','banana','orange'];

if (foods.indexOf('apple') != -1)
{
    //foods에 apple이 있는 경우
}
if (foods.indexOf('apple'))
{
    //foods에 apple이 있는 경우
}

if(foods.includes('apple'))
{

}

//5.5 Array.prototype.concat(…items: Array<T[] | T>): T[] 🔒 ES3
//concat 메소드의 인수로 넘어온 값들(배열 또는 값)을 자신의 복사본에 요소로 추가하고 반환한다. 이때 원본 배열은 변경되지 않는다.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c);

var d = a.concat('string');
console.log(d);

var e = a.concat(b,true);
console.log(e);

console.log(a);

//5.6 Array.prototype.join(separator?: string): string 🔒 ES1
//배열 요소 전체를 연결하여 생성한 문자열을 반환한다. 구분자(separator)는 생략 가능하며 기본 구분자는 ,이다.
//Array.prototype.join() 메소드는 + 연산자보다 빠르다.

var arr = ['a','b','c','d'];

var x = arr.join();
console.log(x);

var y = arr.join('');
console.log(y);

var z = arr.join(':');
console.log(z);

//5.7 Array.prototype.pop(): T | undefined ✏️ ES3
// 5.8 Array.prototype.push(…items: T[]): number ✏️ ES3
//배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 만약 빈 배열일 경우 undefined를 반환한다. pop 메소드는 대상 배열 자체를 변경한다.

var a = ['a', 'b', 'c'];
var c = a.pop();

console.log(a);
console.log(c);

a.push(1);
a.push(2);
a.push(3);

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());

// 5.9 Array.prototype.reverse(): this ✏️ ES1
// 배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

var a = ['a', 'b', 'c'];
var b = a.reverse();

// 원본 배열이 변경된다
console.log(a); // [ 'c', 'b', 'a' ]
console.log(b); // [ 'c', 'b', 'a' ]

// 5.10 Array.prototype.shift(): T | undefined ✏️ ES3
// 배열에서 첫요소를 제거하고 제거한 요소를 반환한다. 만약 빈 배열일 경우 undefined를 반환한다. shift 메소드는 대상 배열 자체를 변경한다.

var a = ['a', 'b', 'c'];
var c = a.shift();

// 원본 배열이 변경된다.
console.log(a); // a --> [ 'b', 'c' ]
console.log(c); // c --> 'a'

// 5.11 Array.prototype.slice(start=0, end=this.length): T[] 🔒 ES3
// 인자로 지정된 배열의 부분을 복사하여 반환한다. 원본 배열은 변경되지 않는다.
// 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사된다.

const items = ['a','b','c'];

let res = items.slice(0,1);
console.log(res);

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
res = items.slice(1, 2);
console.log(res);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
res = items.slice(1);
console.log(res);  // [ 'b', 'c' ]

// 인자가 음수인 경우 배열의 끝에서 요소를 반환
res = items.slice(-1);
console.log(res);  // [ 'c' ]

res = items.slice(-2);
console.log(res);  // [ 'b', 'c' ]

// 모든 요소를 반환 (= 복사본(shallow copy) 생성)
res = items.slice();
console.log(res);  // [ 'a', 'b', 'c' ]

// 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]

var arr = [1, 2, 3];

// 원본 배열 arr의 새로운 복사본을 생성한다.
var copy = arr.slice();
console.log(copy, copy === arr); // [ 1, 2, 3 ] false

//이때 원본 배열의 각 요소를 얕은 복사(shallow copy)하여 새로운 복사본을 생성한다.
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
];

//shallow copy
const _todos = todos.slice();

console.log(_todos === todos);

console.log(_todos[0] === todos[0]);

//이를 이용하여 arguments, HTMLCollection, NodeList와 같은 유사 배열 객체(Array-like Object)를 배열로 변환할 수 있다.
function sum()
{
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr.reduce(function (pre, cur)
    {
        return pre +cur;
    });
}

console.log(sum(1,2,3));
console.log('-------------------------------------------------------');
// 5.12 Array.prototype.splice(start: number, deleteCount=this.length-start, …items: T[]): T[] ✏️ ES3
// 기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용된다.

const items1 = [1,2,3,4];

const res1 = items1.splice(1,2);

console.log(items1);


console.log(res1);

const items2 = [1,2,3,4];
const res2 = items2.splice(1);

console.log(items2);
console.log(res2);

var items3 = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res3 = items3.splice(1, 2, 20, 30);
// 원본 배열이 변경된다.
console.log(items3); // [ 1, 20, 30, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res3);   // [ 2, 3 ]

var items4 = [1,2,3,4];
var res4 = items4.splice(1,0,100);

console.log(items4);
console.log(res4);
