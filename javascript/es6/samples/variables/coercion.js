
if (true && {} && 1 && 'true') {
  console.log('all coerced truthy statements');
  console.log('yet all are not true statements:',
      true === true,
      {} == true,
      1 == true,
      'true' == true);
  console.log('certainly all are not type true statements:',
      true === true,
      {} === true,
      1 === true,
      'true' === true);
}
