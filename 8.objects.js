// object
// key value pair

// let x = {};
// console.log(x, typeof x);

// user 1
// let firstName1 = 'Raush';
// let lastName1 = 'Acharya';

// // user 2
// let firstName2 = 'Sajan';
// let lastName2 = 'Amatya';

// primitive data type=> string, number, boolean, null ,undefined
//  non-primitive data type => object
// collection of primitive data types
// let user1 = {
//   firstName: 'Raush',
//   lastName: 'Acharya',
//   isMarried: false,
// };

// let user2 = {
//   firstName: 'Sajan',
//   lastName: 'Amatya',
//   isMarried: true,
// };

// console.log(user2);

// CRUD
// Create /Add /Insert
// Read /Retrieve
// Update/ Edit
// Delete/Remove

let laptopDetails = {
  brand: 'MSI',
  price: 1400,
};

// to access object values
//1. dot operator
//2. square bracket

// ?create/insert add color of laptop
// laptopDetails.color = 'green';
// console.log(laptopDetails);
// laptopDetails['color'] = 'green';

// ? UPSERT (UPDATE OR INSERT)
// update object
// laptopDetails.brand = 'Apple';
// laptopDetails['brand'] = 'Apple';
// console.log(laptopDetails);

// ? delete

delete laptopDetails.brand;
console.log(laptopDetails);

// ?read
// console.log(laptopDetails.brand);
// console.log(laptopDetails['brand']);
