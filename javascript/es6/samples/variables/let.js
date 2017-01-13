
let x = 'bar';

let foo = function () {
  let x = 'foo';

  console.log('foo value of x: ', x);
};

foo();
console.log('value of x: ', x);
