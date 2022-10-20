const choices = ["rock", "paper", "scissors"];  
let winners = [];


function game(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>
        button.addEventListener('click', () => {
            playRound(button.id);
        })
    );
}

function playRound(playerChoice){
    const wins = checkWins();
    if(wins >= 5){
        return;
    }

    const computerSelection = computerChoice();       
    const winner = checkWinner(playerChoice, computerSelection);

    console.log(winner);
    winners.push(winner);

    updateScore();
    displayChoices(playerChoice, computerSelection, winner);

    wins;
    if(wins == 5){
        gameWinner();
    }
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC){

    if(choiceC === "rock"){
        if(choiceP === "rock"){
            return `Tie!`;
        }
        if(choiceP === "paper"){
            return `You win!`;
        }
        if(choiceP === "scissors"){
            return `You lose!`;
        }
    }

    if(choiceC === "paper"){
        if(choiceP === "rock"){
            return `You lose!`;
        }
        if(choiceP === "paper"){
            return `Tie!`;
        }
        if(choiceP === "scissors"){
            return `You win!`;
        }
    }

    if(choiceC === "scissors"){
        if(choiceP === "rock"){
            return `You win!`;
        }
        if(choiceP === "paper"){
            return `You lose!`;
        }
        if(choiceP === "scissors"){
            return `Tie!`;
        }
    }
}

function checkWins(){
    const pWinsCount = winners.filter((item) => item == `You win!`).length;
    const cWinsCount = winners.filter((item) => item == `You lose!`).length;
    return Math.max(pWinsCount, cWinsCount);
}

function updateScore(){
    const pWinsCount = winners.filter((item) => item == `You win!`).length;
    const cWinsCount = winners.filter((item) => item == `You lose!`).length;
    const ties = winners.filter((item) => item == `Tie!`).length;
    document.querySelector('.playerScore').textContent = `Player Score ${pWinsCount}`;
    document.querySelector('.computerScore').textContent = `Computer Score ${cWinsCount}`;
    document.querySelector('.tieScore').textContent = `Ties ${ties}`;
}

function displayChoices(playerChoice, computerSelection, winner){
    document.querySelector('.playerChoice').textContent = `You chose ${playerChoice}`;
    document.querySelector('.computerChoice').textContent = `Computer chose ${computerSelection}`;
    document.querySelector('.round').textContent = `${winner}`;
}

function gameWinner(){
    let playerWins = winners.filter((item) => item == `You win!`).length;
    if(playerWins == 5){
        document.querySelector('.game').textContent = 'You win the game!'
    }else{
        document.querySelector('.game').textContent = 'Computer wins the game!'
    }

}

game();