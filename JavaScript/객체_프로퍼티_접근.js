var person = 
{
    'first-name': 'sejin',
    'last name': 'kim',
    gender :'male',
    1 :10,
};

console.log(person);

//console.log(person.first-name);
//console.log(person[first-name]);
console.log(person['first-name']);

console.log(person['gender']);

console.log(person[1]);

/* 프로퍼티 값 갱신 */
person['first-name']='Kim';
console.log(person['first-name']); 

/*프로퍼티 값 추가/삭제 */
person.age = 20;
console.log(person.age);

delete person.age;
console.log(person.age);

delete person;//프로퍼티만 삭제 가능
console.log(person);

/* for-in 문 */
for (var prop in person)
{
    console.log(prop + ': ' + person[prop] + '!!');
}

var array =['one','two'];

for(var index in array)
{
    console.log(index + ': ' + array[index]);
}

/* for-of 문 */
const array2 = [1,2,3];
array2.name = 'my array';

for(const value of array2)
{
    console.log(value);
}

for (const [index,value] of array.entries())
{
    console.log(index,value);
}