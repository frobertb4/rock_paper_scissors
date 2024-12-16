//computer chooses a random number from 1-100
//1-33, computer chooses rock | 34-66, paper | 67-100, scissors

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100) + 1;
    //console.log(computerChoice);
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
    //console.log(humanChoice);
}

humanScore = 0;
computerScore = 0;

//logic for each round
function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors";
    } else if  (humanSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        return "You win! Scissors beats paper";
    } else if (humanSelection === computerSelection) {
        return "It's a tie! Please try again";
    }
}

console.log(playRound());
console.log(humanScore);
console.log(computerScore);