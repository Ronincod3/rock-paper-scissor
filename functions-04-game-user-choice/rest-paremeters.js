// Normal functon for adding numbers inside of an array instead of setting a specific amount of paremeters for ex:
// const sumUp = (a,b,c,d) => {a+b+c+d}; if we call this we can only enter the amount of numbers set by the parametes in this case it would be 4
// therefore if I want to input 5 numbers I wont be able to do it, although JS is understandable it wont be appropiate to pass the adding of dynamic numbers in such way.

//SETTING ARRAY + LOOP ADDITION

const sumUp = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(
  "UNLIMITED SUM WITH ARRAY + LOOPS " + sumUp([1, 3, 4, 5, 6, 7, 8, 9])
);

// ELEGANT SOLUTION WITH REST (...parameter);

const sumUp1 = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
console.log(
  "ELEGANT SOLUTION ...numbers UPDATED VERSION " +
    sumUp1(1, 31, 23, 12, 3, 15, 34, 4, 37, 2, 31, 23, 1)
);

// CLASSIC WAY - DEPRECATED, NOT LONGER USED "ARGUMENTS"

const sumUp2 = function () {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
};

console.log(
  'DEPRECATED STYLE OF ADDING ALL INPUTS TOGETHER "DONT USE" ' +
    sumUp2(1, 31, 23, 12, 3, 15, 34, 4, 37, 2, 31, 23, 1)
);
