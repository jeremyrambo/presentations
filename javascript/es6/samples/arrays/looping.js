
let primes = [1, 2, 3, 5, 7, 11];

primes.forEach(function (prime) {
  console.log('for...each prime', prime);
  if (prime > 3) {
    // Note that this returns from the function,
    // it does not break the loop.  Use traditional
    // for loop if "breaking" is needed.
    return;
  }
});

for( let prime of primes ) {
  console.log('for...of prime', prime);
  if (prime > 3) {
    return;
  }
}
