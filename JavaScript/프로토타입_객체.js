var student =
{
    name: 'Lee',
    score : 90
};

console.log(student.hasOwnProperty('name'));

console.dir(student);
console.log(student.__proto__ === Object.prototype);

//[[Prototype]] vs prototype 프로퍼티

function Person(name)
{
    this.name=name;
}

var foo = new Person('Lee');
console.dir(Person);
console.dir(foo);

console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype === foo.__proto___);

var student = {
    name: 'Lee',
    score: 90
  }
  console.dir(student);
  console.log(student.hasOwnProperty('name')); // true
  console.log(student.__proto__ === Object.prototype); // true
  console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

  var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function(){
      console.log('Hi! my name is ' + this.name);
    }
  };

  console.dir(person);

console.log(person.__proto__ === Object.prototype);   // ① true
console.log(Object.prototype.constructor === Object); // ② true
console.log(Object.__proto__ === Function.prototype); // ③ true
console.log(Function.prototype.__proto__ === Object.prototype); // ④ true


console.log('----------------------------------------------------------------------');
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! my name is ' + this.name);
    };
  }
  
  var foo = new Person('Lee', 'male');
  
  console.dir(Person);
  console.dir(foo);
  
  console.log(foo.__proto__ === Person.prototype);                // ① true
  console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
  console.log(Person.prototype.constructor === Person);           // ③ true
  console.log(Person.__proto__ === Function.prototype);           // ④ true
  console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true