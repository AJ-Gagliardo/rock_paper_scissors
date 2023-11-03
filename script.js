
function computerChoice(){
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
