//computer chooses a random number from 1-100
//1-33, computer chooses rock | 34-66, paper | 67-100, scissors

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100) + 1;
    console.log(computerChoice);
    if (computerChoice < 34) {
        return "rock";
    }
    else if (computerChoice > 33 && computerChoice < 67) {
        return "paper";
    }
    else if (computerChoice >66) {
        return "scissors";
    }
}

//Human inputs his choice: rock, paper, or scissors
function getHumanChoice() {
    let humanChoice = prompt("Choose your fighter: rock, paper, or scissors");
    return humanChoice.toLowerCase();
    console.log(humanChoice);
}

//starting the score - create score variable and initialize variable to zero
let computerScore = 0;
let humanScore = 0;

//logic for each round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors";
    } else if  (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper";
    } else if (humanChoice === computerChoice) {
        return "It's a tie! Please try again";
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(humanScore);
console.log(computerScore);