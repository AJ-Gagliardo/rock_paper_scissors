
// Computer random choice
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






function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    winMessage = `You win, you chose ${playerSelection} which beats AI's ${computerSelection}`;
    loseMessage = `You lose, AI chose ${computerSelection} which beats your ${playerSelection}`;
    tieMessage = `Tie, you both chose ${playerSelection}`;
    naMessage = `${playerSelection} is not a valid option, please try again`;
    if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || 
    (playerSelection == 'paper') && (computerSelection == 'rock')||
    (playerSelection == 'scissors')&&(computerSelection == 'paper')){
        results.textContent= winMessage;
        playerScore +=1
        playerScoreQuery.textContent = playerScore;
        image.src="img/win.jpg";
        // return winMessage;
        if (playerScore ===  5){
            alert('You won!');
            resetGame();
        }
        else return;
        
    }
    else if (((playerSelection == 'rock') && (computerSelection == 'paper')) || 
    (playerSelection == 'paper') && (computerSelection == 'scissors') ||
    (playerSelection == 'scissors')&& (computerSelection == 'rock')){
        results.textContent= loseMessage;
        aiScore +=1;
        aiScoreQuery.textContent = aiScore
        image.src="img/lose.jpg";
        // return loseMessage;
        if(aiScore ===5){
            alert("AI won :( this is the beginning of machine's revolution")
        }

    }
    else if ((playerSelection == computerSelection)){
        results.textContent= tieMessage;
        image.src="img/tie.jpg";
        // return tieMessage;
    }
    else { return naMessage};
}



// playerChoice();

const rock = document.querySelector('.rock-btn');
rock.addEventListener("click", function(){
    const result = playRound('rock', getComputerChoice());

});


const paper = document.querySelector('.paper-btn');
paper.addEventListener("click",function(){
    const result = playRound('paper', getComputerChoice());

})

const scissors = document.querySelector('.scissors-btn');
scissors.addEventListener("click", function(){
    const result = playRound('scissors', getComputerChoice());


})

// UI results

const results = document.querySelector('.results');
console.log(results);
const image = document.querySelector('.image');
console.log(image)

const playerScoreQuery = document.querySelector('.player-score');
console.log(playerScoreQuery);
let playerScore = 0;
playerScoreQuery.textContent = playerScore;

let aiScore = 0;
const aiScoreQuery = document.querySelector('.ai-score');
aiScoreQuery.textContent = aiScore;


// reset function
function resetGame(){
    playerScore = 0;
    aiScore = 0;
    playerScoreQuery.textContent = playerScore;
    aiScoreQuery.textContent = aiScore;


}

