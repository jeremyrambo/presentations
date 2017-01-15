
import customers, { add } from './customers';

add(
   { firstName: 'John', lastName: 'Doe'},
   { firstName: 'Jane', lastName: 'Smith'});

console.log('customers:', customers);
