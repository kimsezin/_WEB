// var foo = function()
// {
//     console.dir(this);
// }

// foo();

// var obj = {foo: foo};
// obj.foo();

// var instance = new foo();

// var bar = {name : 'bar'};
// foo.call(bar);
// foo.apply(bar);
// foo.bind(bar)();

function foo() {
    console.log("foo's this: ",  this);  // window
    function bar() {
      console.log("bar's this: ", this); // window
    }
    bar();
  }
  foo();
  //다시봐라