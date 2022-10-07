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

playRound()
//game()

function game() {
    gameWon = undefined
    playRound()
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

// function win() {
//     if (gameWon == true) {
//        return totalWins += 1
//     } else if (gameWon == false) {
//         return totalLoss += 1
//     } else {
//         return undefined;
//     }
// }
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
