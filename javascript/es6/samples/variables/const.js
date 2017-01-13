
const x = 'bar';
const y = { foo: 'bar' };

console.log('value of x: ', x);
console.log('value of y: ', y);

// y = { foo : 'foo bar'}; // Fails!
y.foo = 'foo bar';
console.log('value of y: ', y);
