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

let playerInput = prompt("Make your choice!")
let playerSelection = playerInput.toLowerCase();

function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * 3);
    return hands[randNumb];
 }

computerSelection = getComputerChoice();
console.log("computer: " + computerSelection)
console.log("player: " + playerSelection)
console.log(playRound())

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
    win()
  }
 console.log(win())

  function win() {
    if (gameWon == true) {
       return totalWins += 1
    } else if (gamesWon == false) {
        return totalLoss += 1
    }
}


console.log("Wins: " + totalWins)
console.log("Losses: " + totalLoss)
