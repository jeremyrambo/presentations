
let customer = {

  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date(1980, 10, 3),
  phoneNumber: '555-666-7777',
  email: 'john.doe@meh.com'
};

Object.keys(customer)
  .forEach(key => console.log(`${key} => ${customer[key]}`));

// ...or...

for (key in customer) {
  console.log(`${key} => ${customer[key]}`);
}
