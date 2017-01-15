
let customers = {

  _customers: [],

  new: function (firstName, lastName) {
    let customer = {
      firstName: firstName,
      lastName: lastName,
      id: Math.round(Math.random() * 100)
    };

    this._customers.push(customer);
    return customer;
  },

  report: function () {
    console.log(`Current customers:`);
    for (customer of this._customers) {
      console.log(`\t ${customer.lastName}, ${customer.firstName} [${customer.id}]`);
    }
  }
};

customers.new('John', 'Doe');
customers.new('Jane', 'Smith');

customers.report();
