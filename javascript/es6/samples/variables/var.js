
x = 'bar';
var x;

let foo = function () {
  var x = 'foo';

  console.log('foo value of x: ', x);
};

foo();
console.log('value of x: ', x);
