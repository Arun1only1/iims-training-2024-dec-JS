//  array filter
// ?  filter item based upon condition
// ? returned array size is more likely to be
// ? different from original array size

// let numList = [-15, 25, 55, -100, -25];
// ? remove negative values from numList and return new Array

// const newArray = numList.filter((item, index, array) => {
//   return item;
// });

// console.log(newArray);

// let marksList = [32, 55, 60, 78];
// generate a new array with marks greater than 55

// let newArray = marksList.filter((item) => {
//   return item > 55;
// });

// console.log(newArray);

const studentList = [
  {
    id: 1,
    userName: 'Rohan',
    isGraduated: false,
  },
  {
    id: 2,
    userName: 'Rohil',
    isGraduated: true,
  },
  {
    id: 3,
    userName: 'Ganesh',
    isGraduated: false,
  },
];

// * add id of each student by 100
// const newArray = studentList.map((item) => {
//   let newId = item.id + 100;

//   item.id = newId;

//   return item;
// });

// console.log(newArray);

// *get all students who are graduated

// const newArray = studentList.filter((item) => {
//   return item.isGraduated;
// });

// console.log(newArray);
