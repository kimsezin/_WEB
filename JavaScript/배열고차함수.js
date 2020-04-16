//고차 함수(Higher order function)는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다.
//다시 말해, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 
//자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.

//함수를 인자로 전달받고 함수를 반환하는 고차함수
function makeCounter(predicate)
{
    //자유변수, num의 상태는 유지되어야 한다.
    let num=0;
    //클로저, num의 상태를 유지한다.
    return function()
    {
        //predicate는 자유변수 num의 상태를 변화시킨다.
        num = predicate(num);
        return num;
    };
}

// 보조함수
function increase(n)
{
    return ++n;
}

function decrease(n)
{
    return --n;
}

//makeCounter는 함수를 인수로 전달받는다. 그리고 클로저를 반환한다.
const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());

//고차 함수는 외부 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있다.
//함수형 프로그래밍은 순수 함수(Pure function)와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다. 
//조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고, 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다.
//함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한 방법이라고 할 수 있다.
//자바스크립트는 고차 함수를 다수 지원하고 있다. 특히 Array 객체는 매우 유용한 고차 함수를 제공한다. 이들 함수에 대해 살펴보도록 하자.

// ✏️ 메소드는 this(원본 배열)를 변경한다.
// 🔒 메소드는 this(원본 배열)를 변경하지 않는다.

//1. Array.prototype.sort(compareFn?: (a: T, b: T) => number): this
//배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.
//a-b가 양수면 바꾸고 음수면 안바꿈
let fruits = ['Banana', 'Orange','Apple'];

fruits.sort();//오름차순
console.log(fruits);

fruits.reverse()//내림차순
console.log(fruits);

//숫자 할때 주의
let points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]
//기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따른다. 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후, 정렬한다.

//숫자배열 오름차순 정렬
//비교함수의 반환값이 0 보다 작은경우 a를 우선하여 정렬한다.
points = [40, 100, 1, 5, 2, 25, 10];
points.sort(function (a,b){return a-b;});
console.log(points);

//숫자 배열에서 최소값 취득
console.log(points[0]);

//숫자배열 내림차순 정렬
points = [40, 100, 1, 5, 2, 25, 10];
points.sort(function(a,b){return b-a});
console.log(points);

//숫자배열에서 최대값 취득
console.log(points[0]);

let todos = [
    {id: 4, content:'JavaScript'},
    {id: 1, content: 'HTML'},
    {id: 2, content: 'CSS'}
];

//비교함수
function compare(key)
{
    return function(a,b)
    {
        return a[key] > b[key] ? 1 : (a[key]<b[key] ? -1 : 0);
    };
}

//id기준으로 정렬
todos.sort(compare('id'));
console.log(todos);

//content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);

//2. Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void 🔒 ES5
//forEach 메소드는 for문 대신 사용가능
//배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다.
//콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, for Each 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.
//forEach메소드는 원본 배열을 변경하지 않음 하지만 콜백함수는 원본배열을 변경할 수는 있다.
//forEach메소드는 for문과 달리 break를 사용할 수 없다 다시말해 배열의 모든 요소를 순회하며 중간에 순회를 중단할 수 없다.
//forEach메소드는 for문에 비해 성능이 좋지는 않으나 기독성이 좋아 적극사용 권장.

let numbers = [1,2,3];
let pows = [];

//for문으로 순회
for(let i=0;i<numbers.length;i++)
{
    pows.push(numbers[i] **2);
}
//**2는 제곱 */

console.log(pows); //[1,4,9]

//forEach 메소드로 순회
numbers.forEach(function (item)
{
    pows.push(item**2);
})

console.log(pows);
console.log('--------------------------------------------------');
numbers = [1,3,5,7,9];
let total = 0;

//forEach 메소드는 인수로 전달한 보조함수를 호출하면서
//3개(배열 요소의 값, 요소 인덱스, this)의 인수를 전달한다.
//배열의 모든 요소를 순회하며 합산한다.

numbers.forEach(function(item,index,self)
{
    console.log(`numbers[${index}] = ${item}`);
    total += item;
});

console.log(total);
console.log(numbers);

//console.log('--------------------------------------------------');

numbers = [1,2,3,4];
//forEach 메소드는 원본 배열을 변경하지 않ㅇ므, 하지만 콜백함수는 원본배열을 변경할 수는 있다.
//원본 배열을 직접 변경하려면 콜백 함수의 3번쨰 인자(this)를 사용한다.
numbers.forEach(function(item,index,self)
{
    self[index]=Math.pow(item,2);
})

console.log(numbers);

// forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
[1, 2, 3].forEach(function (item, index, self) {
    console.log(`self[${index}] = ${item}`);
    //if (item > 1) break; // SyntaxError: Illegal break statement
  });

//forEach 메소드에 두번째 인자로 this를 전달할 수 있다.
function Square()
{
    this.array = [];
}

Square.prototype.multiply = function (arr) {
    arr.forEach(function (item)
    {
        //this를 인수로 전달하지 않으면 this=== window
        this.array.push(item * item)
    }, this);
};

const square = new Square();
square.multiply([1,2,3]);
console.log(square.array);

//같은 동작
Square.prototype.multiply = function (arr)
{
    arr.forEach(item => this.array.push(item * item));
};

//forEach 메소드의 이해를 돕기 위해 forEach의 동작을 흉내낸 myForEach 메소드를 작성해 보자.
// Array.prototype.myForEach = function (f) {
//     //첫번째 매개변수에 함수가 전달되었는지 확인
//     // console.log((function(){}).toString()); // function(){}
//     // console.log(Object.prototype.toString.call(function(){})); // [object Function]
//     // poiemaweb.com/js-type-check 참고

//     if(!f || {}.toString.call(f) !== '[object Function]')
//     {
//         throw new TypeError(f + ' is not a function.');
//     }
//     for (let i = 0; i < this.length; i++) {
//         // 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열, 즉 this를 매개변수에 전달하고 콜백 함수 호출
//         f(this[i], i, this);
//       }
//     };

    
//     total = 0;

//     [0, 1, 2, 3].myForEach(function (item, index, array) {
//     console.log(`[${index}]: ${item} of [${array}]`);
//     total += item;
//     });

//     console.log('Total: ', total);
// }






//3. Array.prototype.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] 🔒 ES5
//배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값으로 새로운 배열을 생성하여 반환한다.
//forEach 메소드는 배열을 순회하며 요소값을 참조하여 무언가를 하기 위한 함수이며 map메소드는 배열을 순회하며 요소값을 다른값으로 맵핑하기위한 함수이다.
//콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스 ,map 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

numbers = [1,4,9];

//배열을 순회하며 각 요소에 ㄷㅐ하여 인자로 주어진 콜백함수를 실행
let roots = numbers.map(function (item) {
    return Math.sqrt(item);
});

//위 코드의 축약표현
//roots = numbers.map(Math.sqrt);

console.log(roots);
console.log(numbers);

//map메소드에 두번째 인자로 this를 전달할 수 있다.
function Prefixer(prefix)
{
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr)
{
    return arr.map(function (x)
    {
        //x는 배열 요소의 값
        return this.prefix +x;
    }, this);
};

const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);




//4. Array.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[] 🔒 ES5
//filter문을 쓰면 if문을 대체 할 수 있다.
//배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행결과가 ture인 배열 요소의 값만 추출한 새로운 배열을 반환한다.
//배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용한다. 원본 배열은 변하지않음
//콜백함수의 매개변수를 통해 배열 요소의 값, 요소인덱스,filter 메소드를 호출한 배열 즉 this를 전달 받을 수 있다.

let result = [1,2,3,4,5].filter(function (item, index , self)
{
    console.log(`[${index}] = ${item}`);
    return item % 2;
});

console.log(result);

//5. Array.prototype.reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U 🔒 ES5
//배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환한다. IE 9 이상에서 정상 동작한다.

let arr = [1,2,3,4,5];
/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 메소드를 호출한 배열, 즉 this
*/
// 합산
let sum = arr.reduce(function (previousValue, currentValue, currentIndex, self)
{
    console.log(previousValue +'+'+currentValue +'=' +(previousValue + currentValue));
    return previousValue+currentValue;
})

console.log(sum);

let max = arr.reduce(function (pre,cur)
{
    return pre > cur ? pre: cur;
});

console.log(max);

//Array.prototype.reduce의 두번째 인수로 초기값을 전달할 수 있다. 이 값은 콜백 함수에 최초로 전달된다
sum = [1, 2, 3, 4, 5].reduce(function (pre, cur) {
    return pre + cur;
  }, 5);
  
  console.log(sum); // 20

//객체의 프로퍼티 값을 합산하는 경우
let products = [
    {id: 1, price:100},
    {id: 2, price:200},
    {id: 3, price:300}
];

//프로퍼티값을 합산
let priceSum = products.reduce(function (pre,cur)
{
    console.log(pre, cur.price);
    //숫자값이 두번째 콜백함수 호출의 인수로 전달된다. 이때 pre.price는 undefined이다.
    return pre + cur.price;
},0)

console.log(priceSum);
//reduce는 초기값이 중요 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//6. Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
//배열 내 일부요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
//콜백함수의 매개변수를 통해 배열요소값, 배열 index, this(메소드 호출 배열)를 전달받을수 있다.

let res = [2,5,8,1,4].some(function (item)
{
    return item>10;
});
console.log(res);

res = [12,5,8,1,4].some(function (item)
{
    return item > 10;
});
console.log(res);

res = ['apple','banana','mango'].some(function (item)
{
    return item === 'banana';
});
console.log(res);


//7. Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
//배열 내 모든 요소가 콜백함수를 통과하는지 확인하여 Boolean값으로 반환
res = [21,15,89,1,44].every(function (item)
{
    return item>10;
});
console.log(res);

res = [21,15,89,100,14].every(function (item)
{
    return item>0;
});
console.log(res);


//8. Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined 🔒 ES6
//배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번쨰 요소반환
//참고로 filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 따라서 filter의 반환값은 언제나 배열이다. 
//하지만 find는 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값이다.

let users = [
    {id: 1, name:'Lee'},
    {id: 2, name:'Kim'},
    {id: 2, name:'Choi'},
    {id: 3, name:'Park'}
];

let result2 = users.find(function (item)
{
    return item.id === 2;
});

console.log(result2);

//9. Array.prototype.findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number 🔒 ES6
//배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환한다.

users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];

function predicate(key, value)
{
    return function(item)
    {
        return item[key] === value;
    };
}

let index = users.findIndex(predicate('id',2));
console.log(index);