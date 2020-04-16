function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
  }
  
  var num = 100;
  var obj = {
    name: 'Lee',
    gender: 'male'
  };
  
  console.log(num); // 100
  console.log(obj); // Object {name: 'Lee', gender: 'male'}
  
  changeVal(num, obj);
  
  console.log(num); // 100
  console.log(obj); // Object {name: 'Kim', gender: 'female'}
  console.log(changeVal.primitive);
  //객체, 배열, 함수는 참조값
  //숫자, 문자열, 논리값, undefiend 등이 불