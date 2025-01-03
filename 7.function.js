// function

//  DRY => Do not Repeat Yourself

// ? code reusability
// ? single point of control

// syntax
// function functionName(){
// some code here
// }

// we need to call a function

// function sayHi() {
//   console.log('Hi');
// }

// sayHi();
// sayHi();
// sayHi();

// function getSum(x, y) {
//   console.log(x + y);
// }

// getSum(2, 3);
// getSum(10, 20);

// * WAF which determines provided number is odd or even

// function checkOddOrEven(num) {
//   let remainder = num % 2;

//   if (remainder === 1) {
//     console.log('Odd number');
//   } else {
//     console.log('Even number');
//   }
// }

// checkOddOrEven(50);

// * WAF to calculate product of two numbers
// function getProduct(num1, num2) {
//   let product = num1 * num2;

//   return product; //45
// }

// const result = getProduct(5, 6);
// console.log(result);

// const result2 = getProduct(9, 5);
// console.log(result2);

// * WAF to calculate factorial of a number
// function getFactorial(num) {
//   let factorial = 1; //5

//   for (let i = num; i >= 1; i--) {
//     factorial = factorial * i;
//   }

//   return factorial;
// }

// const res = getFactorial(5);
// console.log(res);

// ?arrow function
// syntax
// const functionName = () => {
// some code here
// };

// const greetUser = (userName) => {
//   console.log('Good morning' + ' ' + userName);
// };

// greetUser('Rohan');

//  string concatenation

// let firstName = 'Sameer';
// let lastName = 'Subedi';
// let fullName = firstName + ' ' + lastName;

// string/template literal
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//* Write an arrow function which calculates  whether a number is
// * positive, negative or zero

// const findPolarity = (num) => {
//   let result;

//   if (num > 0) {
//     result = 'positive';
//   } else if (num < 0) {
//     result = 'negative';
//   } else {
//     result = 'zero';
//   }

//   return result;
// };

// const res = findPolarity(0);
// console.log(res);

// avg of five numbers

// one liner
// const averageCalculator = (a, b, c, d, e) => (a + b + c + d + e) / 5;

// const average = averageCalculator(5, 5, 5, 5, 5);
// console.log(average);

// WAF which converts Rupee to Paisa
// const convertRsToPaisa = (rs) => {
//   let paisa = rs * 100;

//   return paisa;
// };

// const paisa = convertRsToPaisa(5);
// console.log(paisa);

// WAF that converts dollar to cents
// const convertDollarToCents = (dollar) => {
//   let cents = dollar * 100;
//   return cents;
// };

// let res = convertDollarToCents(7);
// console.log(res);

// WAF which checks whether a number is prime or not

// WAF which prints largest of two different numbers
// const findLarge = (a, b) => {
//   if (a > b) {
//     return `${a} is largest`;
//   } else {
//     return `${b} is largest`;
//   }
// };

// console.log(findLarge(4, 5));
