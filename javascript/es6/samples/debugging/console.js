
console.log('Hello %s, ECMAScript rocks!', 'Johnny');

console.log('Hello %s, ECMASCript rocks!',
    'Johnny', { a: 'test', b: 1, c: true});

console.log('Hello %s, ECMASCript rocks!',
    'Johnny',
    JSON.stringify({ a: 'test', b: 1, c: true}, null, 2));
