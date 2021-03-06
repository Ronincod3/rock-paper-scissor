# rock-paper-scissor
[**Lesson 133 - functions**](https://github.com/Ronincod3/rock-paper-scissor/commit/125505759e51fc83953b49c8fb49811ecb242bf3#diff-121e49e10011f5633119c6f50a531ed188fd825b837e57e609860634c2b9a19c)
_Main getaway for example:_ replacing 
```
function () {...}` 
with `() => {...}
```


[**Lesson 136 - default arguments in functions**](https://github.com/Ronincod3/rock-paper-scissor/commit/0773eea2f81bd6da3cb32846550cfc6ce64e0b26#diff-121e49e10011f5633119c6f50a531ed188fd825b837e57e609860634c2b9a19c)

```
const getWinner = (playerChoice = DEFAULT_USER_CHOICE, computerChoice)
```

[**Lesson 137 - REST parameter - Unlimited input**](https://github.com/Ronincod3/rock-paper-scissor/commit/9dcd4850cae8d1e5525282cfbadff010d6bd2db3#diff-121e49e10011f5633119c6f50a531ed188fd825b837e57e609860634c2b9a19c)
```
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
```

[**Lesson 138 - FUNCTION INSIDE FUNCTIONt**](https://github.com/Ronincod3/rock-paper-scissor/commit/874c41cee79db61f3136e283f955d3fb2da585de)
```
const sumUp1 = (...numbers) => {
const validateNumber = (number) => {
  return isNaN(number) ? 2 : number;
}
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  for(const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};
```

[**Lesson 139 - CREATING CALLBACK FUNCTION**](https://github.com/Ronincod3/rock-paper-scissor/commit/874c41cee79db61f3136e283f955d3fb2da585de)
```
const sumUp1 = (resultHandler, ...numbers) => {  //first parameter acts as a function
const validateNumber = (number) => {
  return isNaN(number) ? 2 : number;
}
  let sum = 0;
  for(const num of numbers) {
    sum += validateNumber(num);
  }
resultHandler(sum);  //result handler parameter is called
}
```

```
const showResult = (result) => {    //a new function is defined
  alert(`The result is ` + result);
}
```

```
    sumUp1(showResult, 31, 23, 12, 3, 15, 34, 4, 37, 2, 31, 23, 1); //the first parameter passed "showResult" takes the first parameter of sumUp1 function
    //it then takes the sum result and passes it as a parameter to "showReult" as "result".
```

[**Lesson 140 - BINDING**](https://github.com/Ronincod3/rock-paper-scissor/commit/c783ab39dd5599eeec16ef8824b691c07846a6dc?branch=c783ab39dd5599eeec16ef8824b691c07846a6dc&diff=unified)
```
combine(par1, operation, ...numbers);
combine(newResult.bind(this, 'The sum of all the numbers is: '), "ADD", 1,2,3,4,5,6,7,8,9);
```
