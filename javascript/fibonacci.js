function fibonacci(num) {
  // type your code here
  let current = 0;
  let value1 = 0;
  let value2 = 1;
  let i = 0;
  while (i <= num) {
    current = current + value1;
    value1 = value2
    value2 = current
    i += 1;
  }
  return current;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// set first value to 0 second value to 1, then add sums together and set that number as the new second number and the second number
// as the new first number
// do this in a while loop until hit the nth element in the series then return that value

// And a written explanation of your solution
