//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

let hands = ["rock", "paper", "scissor"]
const paperBeatRock = "You Win! Paper beats Rock";
const paperLoseScissor = "You Lose! Scissors beats Paper"
const rockLosePaper = "You Lose! Paper beats Rock";
const rockbeatScissor = "You Win! Rock beats Scissors";
const scissorBeatPaper = "You Win! Scissors beats Paper"
const scissorLoseRock = "You Lose! Rock beats Scissors";
const draw = "Draw!"

let totalWins = 0
let totalLoss = 0
let gameWon = ""

function game() {
    playerPrompt()
    playRound()
    win()
}

game()

let roundResult = document.getElementById("round-result")
// let isWin = false;

// if (isWin = false) {
//     return loss
// } else {
//     return win
// }
// const playerInput = "ROCk";



// for (let i = 0; i < hands.length; i++) {
//     return hands[i] += hands[i]
// }
function playerPrompt() {
    let playerInput = prompt("Make your choice!")
    let playerSelection = playerInput.toLowerCase();
}


console.log(playerSelection)

function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * 3);
    return hands[randNumb];
 }

computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound());




//  let computerSelection = getComputerChoice();

// function that plays a single round of Rock Paper Scissors
// two parameters - the playerSelection and computerSelection
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// let compChoice = document.getElementById("computer-choice")



function playRound() {
    if (playerSelection == computerSelection) {
         return draw;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        gameWon = false;
        return rockLosePaper;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        gameWon = true;
        return rockbeatScissor;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        gameWon = false;
        return paperLoseScissor;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gameWon = true;
        return paperBeatRock;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {   gameWon = false;
        return scissorLoseRock;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        gameWon = true;
        return scissorBeatPaper;
    }
  }


// function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
// if win = true, let wins = 0, then wins++


function win() {
    if (gameWon == true) {
       return totalWins += 1
    } else {
        return totalLoss += 1
    }
}


console.log("Wins: " + totalWins)
console.log("Losses: " + totalLoss)
// Use prompt() to get input from the user

//  console.log(randomItem())

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return "Draw!"
//     } else if
//   }

//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
