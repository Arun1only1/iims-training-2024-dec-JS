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

// let laptopDetails = {
//   brand: 'MSI',
//   price: 1400,
// };

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

// delete laptopDetails.brand;
// console.log(laptopDetails);

// ?read
// console.log(laptopDetails.brand);
// console.log(laptopDetails['brand']);

// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
// C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

let myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 6,
  color: 'green',
  builtYear: 1990,
  numberOfStorey: 3,
};

// delete myHouseDetails.numberOfMembers;

// myHouseDetails.numberOfRooms = myHouseDetails.numberOfRooms + 2;
// myHouseDetails.numberOfRooms += 2;

//x=x+2

// myHouseDetails.estimatedPriceOfHouse = '3 crore';
// console.log(myHouseDetails);

// console.log(`I have a ${myHouseDetails.color} colored house.`);
console.log('I have a ' + myHouseDetails.color + ' colored house.');
