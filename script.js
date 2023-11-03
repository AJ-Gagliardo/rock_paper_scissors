
function getComputerChoice(){
    n = Math.floor(Math.random()*3);
    let AIChoice;
    if (n == 0){
        AIChoice = 'rock';
    } else if (n == 1){
        AIChoice= 'paper';
    } else {
        AIChoice = 'scissors';}
    return AIChoice;
}


// computerChoice();






function playerChoice(){
    let playersPrompt = prompt("write rock, paper or scissors").toLowerCase();
    return playersPrompt;
   
    
}

/*
// this is wokring but im trying stuff with it
function playRound(playerSelection = 'rock', computerSelection= 'scissors'){
winMessage = `You win ${playerSelection} beats ${computerSelection}`;
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')){
        return winMessage;
    }

} */


// trying in another format
function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();
    winMessage = `You win, you chose ${playerSelection} which beats AI's ${computerSelection}`;
    loseMessage = `You lose, AI chose ${computerSelection} which beats your ${playerSelection}`;
    tieMessage = `Tie, you both chose ${playerSelection}`;
    naMessage = `${playerSelection} is not a valid option, please try again`;
        if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || 
        (playerSelection == 'paper') && (computerSelection == 'rock')||
        (playerSelection == 'scissors')&&(computerSelection == 'paper')){
            return winMessage;
    }
        else if (((playerSelection == 'rock') && (computerSelection == 'paper')) || 
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors')&& (computerSelection == 'rock')){
            return loseMessage;
        }
        else if ((playerSelection == computerSelection)){
            return tieMessage;
        }
        else { return naMessage};
    }




// const playerSelection = 'rock';
// const computerSelection = 'scissors'


// const computerSelection = getComputerChoice();
// console.log(PlayRound(playerSelection,computerSelection));