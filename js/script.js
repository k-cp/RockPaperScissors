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

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let playerChoice = choice.srcElement.id;

    if (playerChoice == computerChoice) {
       console.log( "Tie");
       p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> Tie!<br>`
       return
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose. Paper beats rock");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        return
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore++;
        console.log("You win. Rock beats scissors");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        return
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose. Scissors beats paper");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        return
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        console.log("You win. Paper beats rock");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        return
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose. Rock beats scissors");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        return
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        console.log("You win. Scissors beats paper");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        return
    }
}


function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        p.textContent += ('Round $', i);
        playRound();
    }
    if (playerScore > computerScore) {
        p.textContent += `Player wins with a score of ${playerScore}`;
        return
    } 
    else if (playerScore < computerScore) {
        p.textContent += `Computer wins with a score of ${computerScore}`;
        return
    }
    else {
        p.textContent += "Tie";
        return
    }
    
}

let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const p = document.querySelector('#test');

choices.forEach(choice => choice.addEventListener('click', playRound));