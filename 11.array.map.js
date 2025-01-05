// array
// ? map, filter,find, findIndex,reduce ,sort, every,some

// ? uses loop

// const numList = [10, 11, 12, 13, 14];

// numList.map((item, index, array) => {
//   console.log(item, index, array);
// });

// ? change
// ? returns a new array
// ? original array length === returned new array length

const numList = [10, 11, 12, 13, 14];

// const newArray = numList.map((item, index, array) => {
//   let newItem = item - 10;

//   return newItem;
// });

// console.log(newArray);

// ? decrease value of each item by 5 and return new array
// const newArray = numList.map((item, index, array) => {
//   let newItem = item - 5;

//   return newItem;
// });

// console.log(newArray);

let numbers = [5, 7, 9, 10, 12, 14, 17];

// print each number is odd or even from above array
// ? forEach

// numbers.forEach((item, index, array) => {
//   let remainder = item % 2;

//   if (remainder === 0) {
//     console.log(`${item} is even`);
//   } else {
//     console.log(`${item} is odd`);
//   }
// });

let isGraduated = [true, false, false, true];

// ? change true to false and false to true and return new array

// const newArray = isGraduated.map((item, index, array) => {
//   let newItem = !item;

//   return newItem;
// });

// console.log(newArray);

// one liner
// const newArray = isGraduated.map((item) => !item);

// console.log(newArray);

let marks = [25, 55, 60, 21, 28];

// ? add five marks to each item which is less than 32
// ? and return new array

// const newArray = marks.map((item, index, array) => {
//   if (item < 32) {
//     let newItem = item + 5;
//     return newItem;
//   } else {
//     return item;
//   }
// });

// console.log(newArray);

// one liner
// const newArray = marks.map((item) => (item < 32 ? item + 5 : item));

// console.log(newArray);
