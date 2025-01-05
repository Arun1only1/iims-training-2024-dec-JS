// object destructure

// let user1 = {
//   firstName: 'Raush',
//   lastName: 'Acharya',
//   address: 'Kathmandu',
// };

// let user2 = {
//   firstName: 'Ram',
//   lastName: 'Bhandari',
//   address: 'Lalitpur',
// };
// let { firstName, lastName, address } = user1;
// let { firstName: user2FirstName } = user2; //renamed firstName to user2FirstName while reading
// console.log(user2FirstName);

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.address);

let studentDetails = {
  firstName: 'Sumitra',
  lastName: 'Sapkota',
  address: {
    permanent: 'KTM',
    temporary: 'Bkt',
  },
};
// console.log(studentDetails.firstName);
// console.log(studentDetails.address.permanent);
// console.log(studentDetails.firstName);
// console.log(studentDetails['address']['permanent']);
// console.log(studentDetails['address'].permanent);
// console.log(studentDetails.address['permanent']);

delete studentDetails.address.temporary;

console.log(studentDetails);
