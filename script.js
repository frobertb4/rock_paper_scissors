//computer returns his choice: rock, paper, or scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100) + 1;
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
console.log(getComputerChoice());

//Human inputs his choice: rock, paper, or scissors
function getHumanChoice() {
    let humanChoice = prompt("Choose your fighter: rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());

//starting the score - create score variable and initialize variable to zero
let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors";
    } else if  (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper";
    } else if (humanChoice === computerChoice) {
        return "It's a tie! Please try again";
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));