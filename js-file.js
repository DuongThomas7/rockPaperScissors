function computerPlay(){
    let randomize = Math.floor(Math.random() * 100)
    console.log(randomize);
    switch (true){
        
        case (randomize < 33):
            return "rock";

        case (randomize >= 33 && randomize < 67):
            return "paper";

        case (randomize >= 67):
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (true){
        
        case (playerSelection == "rock"):
            if (computerSelection == "paper"){
                computerScore += 1;
                return "You Lose! Paper beats Rock";
            }

            else if (computerSelection == "scissors"){
                playerScore += 1;
                return "You Win! Rock beats Scissors";
            }

            else {
                return "Rock is tied against Rock";
            }

        case (playerSelection == "paper"):
            if (computerSelection == "rock"){
                playerScore += 1;
                return "You Win! Paper beats Rock";
            }

            else if (computerSelection == "scissors"){
                computerScore += 1;
                return "You Lose! Scissors beats Paper";
            }

            else {
                return "Paper is tied against Paper";
            }

        case (playerSelection == "scissors"):
            if (computerSelection == "rock"){
                computerScore += 1;
                return "You Lose! Rock beats Scissors";
            }

            else if (computerSelection == "paper"){
                playerScore += 1;
                return "You Win! Scissors beats Paper";
            }

            else {
                return "Scissors is tied against Scissors";
            }
    }
}



function checkWinner(){
    if (playerScore == 5 || computerScore == 5){
        if (playerScore > computerScore){
            reports.textContent= `You won with ${playerScore} points compared to the computer's ${computerScore} points!`;
            alert("YOU WON!");
        }

        else if (computerScore > playerScore){
            reports.textContent = `You lost with ${playerScore} points compared to the computer's ${computerScore} points`;
            alert("YOU LOST!");
        }

        else {
            reports.textContent = `Nobody won\n Player Points: ${playerScore}\n Computer Points: ${computerScore}`;
            alert("DID THIS OCCUR");
        }
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScoreCounter = document.getElementById('player');
const computerScoreCounter = document.getElementById('computer');
const reports = document.querySelector('p');

rock.addEventListener('click', () => {
    reports.textContent = playRound("rock", computerPlay());
    playerScoreCounter.textContent = `Player Points: ${playerScore}`;
    computerScoreCounter.textContent = `Computer Points: ${computerScore}`;
    checkWinner();
})

paper.addEventListener('click', () => {
    reports.textContent = playRound("paper", computerPlay());
    playerScoreCounter.textContent = `Player Points: ${playerScore}`;
    computerScoreCounter.textContent = `Computer Points: ${computerScore}`;
    checkWinner();
})

scissors.addEventListener('click', () => {
    reports.textContent = playRound("scissors", computerPlay());
    playerScoreCounter.textContent = `Player Points: ${playerScore}`;
    computerScoreCounter.textContent = `Computer Points: ${computerScore}`;
    checkWinner();
})


//game();