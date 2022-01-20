let playerScore = 0;
let computerScore = 0;

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
    playerSelection = playerSelection.toLowerCase();

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



function game(){
    for (let i = 0; i < 5; i++){
        let player = prompt("Rock, Paper or Scissors?");
        const computer = computerPlay();
        console.log(playRound(player, computer));
    }

    if (playerScore > computerScore){
        console.log(`You won with ${playerScore} points compared to the computer's ${computerScore} points!`);
    }

    else if (computerScore > playerScore){
        console.log(`You lost with ${playerScore} points compared to the computer's ${computerScore} points`);
    }

    else {
        console.log(`Nobody won\n Player Points: ${playerScore}\n Computer Points: ${computerScore}`);
    }

}

game();