function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) {
        return "rock";
    }
    else if (choice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

getComputerChoice();

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "Tie"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You lose. Paper beats rock";
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You win. Rock beats scissors";
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You lose. Scissors beats paper";
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You win. Paper beats rock";
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You lose. Rock beats scissors";
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You win. Scissors beats paper";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
