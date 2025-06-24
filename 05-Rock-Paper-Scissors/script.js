const buttons = document.querySelectorAll("button");
const matchResult = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result =  playGround(button.id, computerPlay());
    console.log(result);
    matchResult.textContent = result;
    playerScoreDisplay.textContent =  playerScore;
    computerScoreDisplay.textContent =computerScore;
    
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playGround(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win!  ${playerSelection}  beats ${computerSelection}`;
  } else {
    computerScore++;
    return  `You lost  ${computerSelection} beats ${playerSelection}`;
  }
}
