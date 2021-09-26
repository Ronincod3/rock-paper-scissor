const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WINS = "THE COMPUTER";

let nameValue = prompt("what is your name");
let gameIsRunning = false;
 
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {//function () {
  const randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (
  playerChoice,
  computerChoice //creating a new anonymous function doesnt require the word function all the time but you can start a function with "=>"
) =>
  playerChoice === computerChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && playerChoice === PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ? nameValue
    : RESULT_COMPUTER_WINS;

// if (playerChoice === computerChoice) {
//   return RESULT_DRAW;
// } else if (
//   (computerChoice === ROCK && playerChoice === PAPER) ||
//   (computerChoice === PAPER && playerChoice === SCISSORS) ||
//   (computerChoice === SCISSORS && playerChoice === ROCK)
// ) {
//   return nameValue;
// } else {
//   return RESULT_COMPUTER_WINS;
// }
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  console.log(`The Player has selected ${playerChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`The Computer has selected ${computerChoice}`);
  const winner = getWinner(playerChoice, computerChoice);
  console.log(`The winner is ${winner}`);

  gameIsRunning = false;
});
