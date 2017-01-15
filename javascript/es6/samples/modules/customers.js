
const customers = [];

const add => ( ...customer ) {

  let _customers = [];
  customers.forEach((c) => {
    if (c instanceof Array) {
      _customers = [.. _customers, ...c];
    } else {
      _customers = [.. _customers, c];
    }
  });

  customers = [...customers, ..._customers];

}

export { add };
export default customers;
