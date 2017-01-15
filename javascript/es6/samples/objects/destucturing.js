
let customer = {

  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date(1980, 10, 3),
  phoneNumber: '555-666-7777',
  email: 'john.doe@meh.com',

  report () {
    return `${this.lastName}, ${this.firstName}`;
  }
};

let { email, phoneNumber, report } = customer;

console.log('Email:', email);
console.log('Phone Number:', phoneNumber);

// Wait, what!?
console.log('Report:', customer.report());
console.log('Report:', report());
