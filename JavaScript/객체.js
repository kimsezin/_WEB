var emptyObject ={};
console.log(typeof emptyObject);

var person = {
    name:'lee',
    gender:'male',
    sayHello:function()
    {
        console.log('Hi My name is '+this.name);
    }
};

console.log(typeof person);
console.log(person);

person.sayHello();

//빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name ='Lee';
person.gender = 'male';
person.sayHello = function()
{
    console.log('Hi My name is '+this.name);
}

console.log(typeof person);
console.log(person);

person.sayHello();

/* 생성자 함수 */
// 생성자 함수
function Person(name,gender)
{
    this.name = name;
    this.gender = gender;
    this.sayHello = function()
    {
        console.log('My name is ~'+name);
    }
}

var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();