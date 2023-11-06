
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





function playerChoice(){
    let playersPrompt = prompt("write rock, paper or scissors").toLowerCase();
    return playersPrompt;
   
    
}




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



function game(){
    let playerScore = 0;
    let computerScore = 0;
    let scoreboard = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;

    for(let i=0; i<5; i++){
        let result = playRound();
        if (result == winMessage) {
            console.log(winMessage);
            playerScore +=1;
            scoreboard = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
            console.log(scoreboard);
        }
        else if (result == loseMessage){
            console.log(loseMessage) ;
            computerScore +=1;
            scoreboard = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
            console.log(scoreboard);
        }
        else{
            console.log(tieMessage) ;
            console.log(scoreboard);
        }
    }
   
}

function printing(){for (let i=0;i<5;i++){
    console.log(i)
}
}