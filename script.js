
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random()*choices.length);
    return choices[computerChoice];
}

function playRound(playerSelection,computerSelection){
    playerSelectionUpper=playerSelection.toUpperCase();
    computerSelectionUpper=computerSelection.toUpperCase();
    if ((playerSelectionUpper == "ROCK" && computerSelectionUpper == "SCISSORS") ||
    (playerSelectionUpper == "PAPER" && computerSelectionUpper == "ROCK") ||
    (playerSelectionUpper == "SCISSORS" && computerSelectionUpper == "PAPER")){
        return (result = "UserWins");
    } else if (playerSelectionUpper == computerSelectionUpper){
        return (result = "Tie");
    } else {
        return (result = "ComputerWins");
    }

}

let counter = 1;
let userScore = 0;
let computerScore = 0;
function game(){
    while (counter <= 5) {
        let playerSelection = prompt(`Round ${counter}: Rock, paper, scissors, shoot!`);
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);
        if (result == "UserWins"){
            console.log(`Round ${counter}: You win this round! ${playerSelection} beats ${computerSelection}`);
            userScore++;
        } else if (result == "Tie"){
            console.log(`Round ${counter}: It's a tie round!`);
        } else {
            console.log(`Round ${counter}: You lose this round! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        counter++;
    }
    if (userScore >= computerScore){
        console.log("You Win!");
    }else if (userScore <= computerScore) {
        console.log("You Lose!");
    } else {
        console.log("It's a tie!")
    }
}

game();