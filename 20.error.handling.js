// error handling

console.log('HI');
const x = 2;

try {
  x = 5;

  console.log(x);
} catch (error) {
  console.log('error aayo');
  console.log(error.message);
}

console.log('Hello');
