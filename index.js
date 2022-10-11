const choices = ["rock", "paper", "scissors"];     


function game(){
    bestOfFive();
}

function playRound(){
    const computerSelection = computerChoice();
    const playerSelection = playerChoice();        
    const winner = checkWinner(playerSelection, computerSelection);

    console.log(winner);

    return {computerSelection, playerSelection, winner};
}

function playerChoice(){
    let input = prompt("Type Rock, Paper or scissors.");
    input = input.toLowerCase();
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerSelection, computerSelection){

    if(computerSelection === "rock"){
        if(playerSelection === "rock"){
            return `Tie! You both selected ${playerSelection}`;
        }
        if(playerSelection === "paper"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        if(playerSelection === "scissors"){
            return `You lose! ${playerSelection} loses to ${computerSelection}`;
        }
    }

    if(computerSelection === "paper"){
        if(playerSelection === "rock"){
            return `You lose! ${playerSelection} loses to ${computerSelection}`;
        }
        if(playerSelection === "paper"){
            return `Tie! You both selected ${playerSelection}`;
        }
        if(playerSelection === "scissors"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    if(computerSelection === "scissors"){
        if(playerSelection === "rock"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        if(playerSelection === "paper"){
            return `You lose! ${playerSelection} loses to ${computerSelection}`;
        }
        if(playerSelection === "scissors"){
            return `Tie! You both selected ${playerSelection}`;
        }
    }
}

function bestOfFive(){
    let computerScore = 0;
    let playerScore = 0;

    while(computerScore < 3 && playerScore < 3){
        const xx = playRound();
        //console.log(xx);

        if(xx.winner == `You win! ${xx.playerSelection} beats ${xx.computerSelection}`){
            playerScore++;
        }else if(xx.winner == `You lose! ${xx.playerSelection} loses to ${xx.computerSelection}`){
                computerScore++;
        }
    }

    console.log(`Computer ${computerScore} : ${playerScore} Player`);
}

game();