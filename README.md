# rock-paper-scissor
**Lesson 133 - functions**

_Main getaway for example:_ replacing `function () {...}` with `() => {...}`.


**Lesson 136 - default arguments in functions**
`const getWinner = (playerChoice = DEFAULT_USER_CHOICE, computerChoice)`.

**Lesson 137 - REST parameter - Unlimited input**
`const sumUp1 = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
console.log(
  "ELEGANT SOLUTION ...numbers UPDATED VERSION " +
    sumUp1(1, 31, 23, 12, 3, 15, 34, 4, 37, 2, 31, 23, 1)
);`
