
function getComputerChoice(){
    n = Math.floor(Math.random()*2);
    let AIChoice;

    if (n == 0){
        AIChoice = 'rock';
    } else if (n == 1){
        AIChoice= 'paper';
    } else{
        AIChoice == 'scissors';}
    return AIChoice;
}


// computerChoice();




/* 
Logic should be:
Player writes a prompt
check if prompt is correct
if correct, keep, if not, repeat.
*/

// function playerSelection((prompt("write rock, paper or scissors").toLowerCase)){
//     return playerSelection;
// }


//let playerChoice = prompt("write rock, paper or scissors").toLowerCase;
//return playerChoice;



// function playerSelection(){
//     let playerChoice = prompt("write rock, paper or scissors").toLowerCase;
//     return playerChoice;
// }

/*
// this is wokring but im trying stuff with it
function playRound(playerSelection = 'rock', computerSelection= 'scissors'){
winMessage = `You win ${playerSelection} beats ${computerSelection}`;
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')){
        return winMessage;
    }

} */


// trying in another format
function playRound(playerSelection = 'rock', computerSelection= 'scissors'){
    winMessage = `You win ${playerSelection} beats ${computerSelection}`;
    loseMessage = `You lose ${computerSelection} beats ${playerSelection}`
    tieMessage = `Tie, you both chose ${playerSelection}`
        if ((playerSelection == 'rock') && (computerSelection == 'scissors')){
            return winMessage;

    }





const playerSelection = 'rock';
const computerSelection = 'scissors'
// const computerSelection = getComputerChoice();
// console.log(PlayRound(playerSelection,computerSelection));