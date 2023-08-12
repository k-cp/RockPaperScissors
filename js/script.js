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
       
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        cScore.textContent = ++computerScore;
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        pScore.textContent = ++playerScore;
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        cScore.textContent = ++computerScore;
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        pScore.textContent = ++playerScore;
        console.log("You win. Paper beats rock");
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        cScore.textContent = ++computerScore;
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU LOSE<br>`
        
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        pScore.textContent = ++playerScore;
        p.innerHTML += `You played ${playerChoice} and the computer played ${computerChoice}<br> YOU WIN!<br>`
        
    }
    if (playerScore === 5) {
        p.innerHTML += `YOU  WIN THE ROUND<br>`
        pScore.textContent = 0;
        cScore.textContent = 0;

    }
    else if (computerScore === 5) {
        p.innerHTML += `COMPUTER  WIN THE ROUND<br>`
        pScore.textContent = 0;
        cScore.textContent = 0;
    }
    return
}

function game() {

 
    for (let i = 1; i <= 5; i++) {
        p.textContent += ('Round $', i);
        choices.forEach(choice => choice.addEventListener('click', playRound));
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
const play = document.querySelector('.start');
const p = document.querySelector('#test');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
pScore.textContent = 0;
cScore.textContent = 0;

play.addEventListener('click', game);
choices.forEach(choice => choice.addEventListener('click', playRound));