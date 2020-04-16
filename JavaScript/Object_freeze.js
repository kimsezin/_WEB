const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };

  const user2 = Object.assign({},user1, {name:'KIM'});

  console.log(user1.name);
  console.log(user2.name);

  Object.freeze(user1);

  user1.name='KIm'; // freeze시켜놨으므로 무시됨.

  console.log(user1);

  console.log(Object.isFrozen(user1));

  ///////freeze시켜놨어도 객체 내부의 객체는 수정 가능하다.

  user1.address.city='Busan';

  console.log(user1.address.city);

  //객체 내부까지 안바뀌게 만들려면 Deep freeze해야함.
