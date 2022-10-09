const choices = ["rock", "paper", "scissors"];

function playRound(){
    const computerSelection = computerChoice();
    const playerSelection = playerChoice();
    

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

function playerChoice(){
    prompt();
    if (prompt === "rock"){
        return playerSelection = "rock";
    }

    if (prompt === "paper"){
        return playerSelection = "paper";
    }

    if (prompt === "scissors"){
        return playerSelection = "scissors";
    }
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}


console.log(playRound(playerChoice(), computerChoice()));       //console displays undefined