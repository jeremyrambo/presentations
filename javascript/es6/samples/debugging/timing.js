
console.time('my timer');

let sum = 0;
for (let i = 1; i < 10000; i++) {
  sum += i;
}
console.log('Sum of integers between 1 and 10,000 is %d', sum);
console.timeEnd('my timer');
