
const x = 'bar';
const y = { foo: 'bar' };

let foo = function () {
  const x = 'foo';

  console.log('foo value of x: ', x);
};

console.log('value of x: ', x);
console.log('value of y: ', y);

// y = { foo : 'foo bar'}; // Fails!
y.foo = 'foo bar';
foo();
console.log('value of y: ', y);
