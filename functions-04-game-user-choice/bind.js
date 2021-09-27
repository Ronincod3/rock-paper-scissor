const combine = (resultHandler, operation, ...numbers) => {
  const validateNumbers = (numbers) => {
    return isNaN(numbers) ? 0 : numbers;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumbers(num);
    } else {
      sum -= validateNumbers(num);
    }
  }
  resultHandler(sum);
};

const newResult = (messageText, result) => {
 alert(messageText + '' + result);
}

combine(newResult.bind(this, 'The sum of all the numbers is: '), "ADD", 1,2,3,4,5,6,7,8,9);
combine(newResult.bind(this, 'The sum of all the numbers is: '), "ADD", 1,2,3,4,5,6,7,8,9);
combine(newResult.bind(this, 'The substraction of all the numbers is: '), "SUBSTRACT", 1,2,3,4,5,6,7,8,9);

// OPERATION_ADD = "ADD";
// OPERATION_SUBSTRACT = "SUBSTRACT";

// const sumUp = (resultHandler, operation, ...numbers) => {
//   OPERATION_ADD;
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(operation, sum);
// };

// const sumUp1 = (resultHandler, operation, ...numbers) => {
//   let operation = OPERATION_ADD;
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(operation, sum);
// };

// const substract = (resultHandler, operation, ...numbers) => {
//   let operation = OPERATION_SUBSTRACT;
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(operation, sum);
// };

// const showResult = (message, operation, result) => {
// if(operation !== OPERATION_SUBSTRACT) {

// }
//   alert(message + result);
// };

// sumUp(
//   showResult.bind(this, "The sum of all the numbers is equal to: "),
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   90
// );
// sumUp1(
//   showResult.bind(this, "The sum of all the numbers is equal to: "),
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   90
// );
// substract(
//   showResult.bind(this, "The substraction of all the numbers is equal to: "),
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   90
// );
