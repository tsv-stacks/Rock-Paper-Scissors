let hands = ["rock", "paper", "scissors"]
const paperBeatRock = "You Win! Paper beats Rock";
const paperLoseScissor = "You Lose! Scissors beats Paper"
const rockLosePaper = "You Lose! Paper beats Rock";
const rockbeatScissor = "You Win! Rock beats Scissors";
const scissorBeatPaper = "You Win! Scissors beats Paper"
const scissorLoseRock = "You Lose! Rock beats Scissors";
const draw = "Draw!"
var totalWins = 0
var totalLoss = 0
let gameWon = undefined
let youWon = "You've beaten the AI!"
let youLost = "You've lost to the AI"
let playerChoiceOutput = document.getElementById("your-choice")
let compChoiceOutput = document.getElementById("comp-choice")
let roundResultOutput = document.getElementById("round-result")
let playerSelection = ""
let computerSelection = ""

// function playRound() {

// }

function rockSelected() {
    playerChoiceOutput.innerText = " ROCK"
    playerSelection = "rock"
    computerSelection = getComputerChoice()
    let result = gameOutcome(playerSelection, computerSelection)
    roundResultOutput.innerText = result
}

function paperSelected() {
    playerChoiceOutput.innerText = " PAPER"
    playerSelection = "paper"
    computerSelection = getComputerChoice()
    let result = gameOutcome(playerSelection, computerSelection)
    roundResultOutput.innerText = result
}

function scissorsSelected() {
    playerChoiceOutput.innerText = " SCISSORS"
    playerSelection = "scissors"
    computerSelection = getComputerChoice()
    let result = gameOutcome(playerSelection, computerSelection)
    roundResultOutput.innerText = result
}

function winCounter() {
    if (gameWon == true && totalWins < 5) {
        totalWins += 1
        if (totalWins === 5) {
            youWonFunc()
        } else {
            console.log("Wins: " + totalWins)
            console.log("Losses: " + totalLoss)
        }
    } else if (gameWon == false && totalLoss < 5) {
        totalLoss += 1
        if (totalLoss === 5) {
            youLostFunc()
        }
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
    }
    else if (gameWon == undefined) {
        gameWon = undefined;
        console.log("Wins: " + totalWins)
        console.log("Losses: " + totalLoss)
    }
}

function youLostFunc() {
    console.log(youLost)
    console.log("Wins: " + totalWins)
    console.log("Losses: " + totalLoss)
    totalWins = 0;
    totalLoss = 0;
}

function youWonFunc() {
    console.log(youWon);
    console.log("Wins: " + totalWins)
    console.log("Losses: " + totalLoss)
    totalWins = 0
    totalLoss = 0
}


function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * 3);
    computerSelection = hands[randNumb];
    return compChoiceOutput.innerText = computerSelection
}

function gameOutcome(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return draw;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        gameWon = false;
        return rockLosePaper;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        gameWon = true;
        return rockbeatScissor;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        gameWon = false;
        return paperLoseScissor;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gameWon = true;
        return paperBeatRock;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        gameWon = false;
        return scissorLoseRock;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        gameWon = true;
        return scissorBeatPaper;
    }
}
