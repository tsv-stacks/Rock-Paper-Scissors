//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

let hands = ["rock", "paper", "scissor"]
const paperBeatRock = "You Win! Paper beats Rock";
const paperLoseScissor = "You Lose! Scissors beats Paper"
const rockLosePaper = "You Lose! Paper beats Rock";
const rockbeatScissor = "You Win! Rock beats Scissors";
const scissorBeatPaper = "You Win! Scissors beats Paper"
const scissorLoseRock = "You Lose! Rock beats Scissors";
const draw = "Draw!"

// let isWin = false;

// if (isWin = false) {
//     return loss
// } else {
//     return win
// }
// const playerInput = "ROCk";
let playerInput = prompt("Make your choice!")

// for (let i = 0; i < hands.length; i++) {
//     return hands[i] += hands[i]
// }

let playerSelection = playerInput.toLowerCase();

function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * 3);
    return hands[randNumb];
 }

//  let computerSelection = getComputerChoice();

// function that plays a single round of Rock Paper Scissors
// two parameters - the playerSelection and computerSelection
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return paperBeatRock;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return paperLoseScissor;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return paperLoseScissor;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return paperBeatRock;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return scissorLoseRock;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return scissorBeatPaper;
    }
  }


  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


// function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK
// return the results of this function call


// function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end


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
