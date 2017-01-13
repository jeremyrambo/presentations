
if (true && {} && 1 && 'true') {
  console.log('all coerced truthy statements');
  console.log('\tyet not true statements:', true === true, {} == true, 1 == true, 'true' == true);
  console.log('\tcertainly not type true statements:', true === true, {} === true, 1 === true, 'true' === true);
}
