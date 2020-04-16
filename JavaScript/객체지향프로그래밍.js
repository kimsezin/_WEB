/* 생성자 함수와 인스턴스의 생성*/
// function Person(name)
// {
//     //프로퍼티
//     this.name = name;

//     //메소드
//     this.setName = function(name)
//     {
//         this.name=name;
//     };

//     this.getName = function(name)
//     {
//         return this.name;
//     };
// }

// //인스턴스의 생성
// var me = new Person('Lee');
// console.log(me.getName());

// //메소드 호출
// me.setName('Kim');
// console.log(me.getName());

/* 프로토타입 체인과 메소드의 정의 */
function Person(name)
{
    this.name=name;
}

//프로토 타입 객체에 메소드 정의
Person.prototype.setName = function(name)
{
    this.name = name;
};

Person.prototype.getName = function(name)
{
    return this.name;
};

var me = new Person('Lee');
var you  = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);

console.log(me);
console.log(you);
console.log(him);
/**
 * 모든 생성자 함수의 프로토타입은 Function.prototype이다. 따라서 모든 생성자 함수는 Function.prototype.method()에 접근할 수 있다.
 * @method Function.prototype.method
 * @param ({string}) (name) - (메소드 이름)
 * @param ({function}) (func) - (추가할 메소드 본체)
 */
Function.prototype.method = function(name, func)
{
    // 생성자함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자 함수의 프로토 타입에 메소드를 추가
    if(!this.prototype[name])
    {
        this.prototype[name]=func;
    }
};

// 생성자 함수
function Person(name)
{
    this.name = name;
}

//생성자 함수 Person의 프로토타입에 메소드 setName을 추가
Person.method('setName',function(name){
    this.name=name;
});

//생성자 함수 Person의 프로토타입에 메소드 getName을 추가
Person.method('getName',function(name){
    return this.name;
});

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);

console.log(me);
console.log(you);
console.log(him);



console.log('-------------------------------------------------------------------');

/* 상속(Inheritance) */
//의사 클래스 패턴 상속(클래스 기반 상속방식 흉내) 많이 안씀 단점이 많다

//부모 생성자 함수
var Parent = (function () {
    //Constructor
    function Parent(name)
    {
        this.name=name;
    }

    //method
    Parent.prototype.sayHi = function() {
        console.log('Hi ' + this.name);
    };
    
    return Parent;
}());

//자식 생성자 함수
var Child  = (function () {
    //Constructor
    function Child(name)
    {
        this.name = name;
    }

    //자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체
    Child.prototype = new Parent();

    //메소드 오버라이드
    Child.prototype.sayHi = function() 
    {
        console.log('안녕하세요! ' + this.name);
    };

    //sayBye메소드는 Parent 생성자함수의 인스턴스에 위치된다.
    Child.prototype.sayBye = function()
    {
        console.log('안녕히가세요! '+this.name);
    };

    return Child;
}());

var child = new Child('child');
console.log(child);

console.log(Child.prototype);

child.sayHi();
child.sayBye();

console.log(child instanceof Parent);
console.log(child instanceof Child);

console.log('-------------------------------------------------------------------');

//프로토 타입 패턴 상속 Objcet.create 함수를 사용하여 객체에서 다른객체로 직접 상속 
// 부모 생성자 함수
var Parent = (function () {
    //Constructor

    function Parent(name) {
        this.name = name;
    }
    //method
    Parent.prototype.sayHi = function()
    {
        console.log('Hi' + this.name);
    };

    return Parent;
}());

//create 함수의 인수는 프로토타입이다.
// var child = Object.create(Parent.prototype);
// child.name = 'child';

// child.sayHi();

// console.log(child instanceof Parent);

// var parent = 
// {
//     //name :'parent';
//     sayHi : function()
//     {
//         console.log('Hi ! '+this.name);
//     }
// };

// var child = Object.create(parent.prototype);
// child.name = 'child';

// parent.sayHi();
// child.sayHi();

// console.log(parnet.isPrototypeOf(child));

console.log('-------------------------------------------------------------------');

//캡슐화와 모듈 패턴 (관련있는 멤버 변수와 메소드를 클래스와 같은 하나의 틀 안에 담고 외부에 공개될 필요가 없는 정보는 숨기는 것 다른말로 정보 은닉)

var Person = function(arg) {
    var name = arg ? arg : ''; // 이 name변수는 private 변수 var대신 this 쓰면 public

   return {
       getName: function()
       {
           return name;
       },
       setName: function()
       {
           name=arg;
       }
   }
}

var me = new Person('Lee');

var name = me.getName();

console.log(name);

me.setName('Kim');
name = me.getName();

console.log(name);

console.log('-------------------------------------------------------------------');

//이러한 방식을 모듈패턴이라고 함 (캡슐화와 정보 은닉 제공) 하지만 주의할 점이 있므
//private 멤버가 객체나 배열일 경우 반환된 해당 멤버의 변경이 가능
var person = function(personInfo)
{
    var o = personInfo;

    return {
        getPersonInfo : function()
        {
            return o;
        }
    };
};

var me = person({name:'Lee',gender:'male'});

var myInfo = me.getPersonInfo();
console.log('myInfo: ', myInfo);

myInfo.name = 'Kim';

myInfo = me.getPersonInfo();
console.log('myInfo: ', myInfo);