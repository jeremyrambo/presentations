var log = function () {
  console.log(`ABC's >> ${abcs}`);
};

var abcs = ['b', 'c']; log();
// add items
abcs.push('d'); log();
abcs = [ 'a', ...abcs, 'e']; log();

// remove items
abcs.shift(); log();
abcs.pop(); log();
abcs.splice(1, 2); log();

abcs = [ 'a', ...abcs, 'c', 'd' ]; log();
var newAbcs = abcs.slice();
console.log(`New ABC's >>`, newAbcs);
