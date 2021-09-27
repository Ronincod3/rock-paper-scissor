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
