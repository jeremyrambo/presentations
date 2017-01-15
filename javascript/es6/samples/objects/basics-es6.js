
let customers = {

  _customers: [],

  new (firstName, lastName) {
    let customer = {
      firstName, lastName,
      id: Math.round(Math.random() * 100) };
    this._customers.push(customer);
    return customer;
  },

  report () {
    console.log(`Current customers:`);
    this._customers.forEach(customer => console.log(`\t ${customer.lastName}, ${customer.firstName} [${customer.id}]`));
  }
};

customers.new('John', 'Doe');
customers.new('Jane', 'Smith');

customers.report();
