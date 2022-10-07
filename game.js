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
let gameWon = undefined
let youWon = "You've beaten the AI!"
let youLost = "You've lost to the AI"

//playRound()
game()

function game() {
    gameWon = undefined
    playRound()
    winCounter()
}

// console.log(getPlayerChoice())
// play round
function playRound() {
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    let playerSelection = getPlayerChoice()
    console.log(playerSelection)
    let gameResult = gameOutcome(playerSelection, computerSelection)
    console.log(gameResult)
}
// wins and losses

function winCounter() {
    if (gameWon == true && totalWins < 5) {
        totalWins += 1
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
    } else if (gameWon == false && totalLoss < 5) {
        totalLoss += 1
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
    } else if (totalWins == 5) {
        console.log(youWon);
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
        totalWins = 0
        totalLoss = 0
    } else if (totalLoss === 5) {
        console.log(youLost)
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
        totalWins = 0;
        totalLoss = 0;
    } else if (gameWon == undefined) {
        gameWon = undefined;
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
    }
    }
//     console.log("Wins: " + totalWins)
//     console.log("Losses: " + totalLoss)




// function game() {

//     // playRound()
//     // win()
// }

function gameOutcome(playerSelection, computerSelection) {
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
} else if (playerSelection == "scissor" && computerSelection == "rock") {
    gameWon = false;
    return scissorLoseRock;
} else if (playerSelection == "scissor" && computerSelection == "paper") {
   gameWon = true;
   return scissorBeatPaper;
}
}

// comp selection
function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * 3);
    return hands[randNumb];
 }

//  console.log(getComputerChoice())
// player selection
function getPlayerChoice(){
    // let playerInput = prompt("Make your choice!")
    // return playerInput.toLowerCase();
    return prompt("Make your choice!").toLowerCase()
}
