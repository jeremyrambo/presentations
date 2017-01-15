
let customers = [];

const add = function (...customer) {
  let _customers = [];
  customer.forEach((c) => {
    if (c instanceof Array) {
      _customers = [..._customers, ...c];
    } else {
      _customers = [..._customers, c];
    }
  });

  customers = [...customers, ..._customers];
};

export { add };
export default function () {
  return customers;
}
