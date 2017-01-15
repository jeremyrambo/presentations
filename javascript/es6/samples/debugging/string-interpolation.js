
let name = 'Johnny';
console.log(`Hello ${name}, ECMAScript rocks!`);

console.log(`Hello ${name}, ECMAScript rocks!`,
    { a: 'test', b: 1, c: true});

console.log(`Hello ${name}, ECMAScript rocks!`,
    JSON.stringify({ a: 'test', b: 1, c: true}, null, 2));
