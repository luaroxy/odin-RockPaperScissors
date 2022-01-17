
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

function checkResult(result,playerSelection,computerSelection){
    if (result == "UserWins"){
        displayResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
        userScore++;
    } else if (result == "Tie"){
        displayResult.textContent = `It's a tie round!`;
    } else {
        displayResult.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    container.appendChild(displayResult);
    displayYou.textContent = `${userScore}`;
    displayComputer.textContent = `${computerScore}`;
}

function checkWinner(userScore, computerScore){
    if (userScore === 5){
      displayResult.textContent = 'Congratulations! You won!';
        disableButtons();
    }
    if (computerScore === 5){
      displayResult.textContent = `I'm sorry! You lost!`;
        disableButtons();
    }
    container.appendChild(displayResult);
}

function disableButtons(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const displayYou = document.querySelector('#displayYou');
const displayComputer = document.querySelector('#displayComputer');

const displayResult = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let playerSelection= button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    checkResult(result,playerSelection,computerSelection);
    checkWinner(userScore, computerScore);
    });
  
});