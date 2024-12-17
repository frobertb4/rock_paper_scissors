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

function playGame() {
    humanScore = 0;
    computerScore = 0;
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        if (humanSelection === "rock" && computerSelection === "scissors") {
            humanScore++;
            return `You win!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if  (humanSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return `You lose!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return `You lose!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            humanScore++;
            return `You win!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return `You lose!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            humanScore++;
            return `You win!
            You chose ${humanSelection}.
            Computer chose ${computerSelection}.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (humanSelection === computerSelection) {
            return `It's a tie! Please try again.
            Computer score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());
    
    function displayResult () {
        if (humanScore > computerScore) {
            return `Congratulations! You win!
            Final score: 
            Computer: ${computerScore}
            Your score: ${humanScore}`
        } else if (computerScore > humanScore) {
            return `Ouch! You lost.
            Final Score:
            Computer: ${computerScore}
            Your score: ${humanScore}`
        } else if (computerScore === humanScore) {
            return `It's a draw. Please play again.
            Final Score:
            Computer: ${computerScore}
            Your score: ${humanScore}`
        }
    }
    alert(displayResult());
}

playGame();