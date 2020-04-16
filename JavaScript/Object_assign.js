const obj = {a :1};
const copy = Object.assign({}, obj);
console.log(copy);
console.log(obj===copy);

const o1 = {a:1};
const o2 = {b:2};
const o3 = {c:3};

const merge1 = Object.assign(o1,o2,o3);

console.log(merge1);
console.log(o1);

const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     


//객체 내부의 객체는 shallow copy됨 같은 주소를 가르킴 참조값이 같음
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // 새로운 빈 객체에 user1을 copy한다.
  const user2 = Object.assign({}, user1);
  // user1과 user2는 참조값이 다르다.
  console.log(user1 === user2); // false
  
  user2.name = 'Kim';
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim

  console.log(user1.address === user2.address);
  user1.address.city='Busan';
  console.log(user1.address.city);
  console.log(user2.address.city);
  //같은곳을 참조하기 때문에 한개만 바꿔도 둘다 바뀜
