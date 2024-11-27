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

function getHumanChoice() {
    let humanChoice = prompt("Choose your fighter: rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());