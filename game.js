// get computer choise
let RPS_TABLE = ['rock', 'paper', 'scissor']
let playerWin = 0
let playerLost = 0
let draw = 0
let computerWin = 0
function getComputerChoise() {
    return RPS_TABLE[Math.floor(Math.random() * RPS_TABLE.length)]
}
// play round
function playRound(playerSelection, computerSelection){
// get player choise 
    playerSelection = prompt(`Choose one from Rock, Paper and Scissor`).toLowerCase()  
    computerSelection = getComputerChoise()
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            alert('You Lose!')
            computerWin++
            playerLost++
        } else if(computerSelection === 'scissor'){
            alert('You Win!')
            playerWin++
        } else {
            alert('Draw!')
            draw++
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            alert('You Win!')
            playerWin++
        } else if(computerSelection === 'scissor'){
            alert('You Lose!')
            computerWin++
            playerLost++
        } else {
            alert('Draw!')
            draw++
        }
    } else {
        if (computerSelection === 'rock') {
            alert('You Lose!')
            computerWin++
            playerLost++
        } else if (computerSelection === 'paper') {
            alert('You Win!')
            playerWin++
        } else {
            alert('Draw!')
            draw++
        }
    }
}
// 5round to play
function game(round=5) {
    alert(`let's play ${round} rounds!`)
    for (let i = 0; i < round; i++){
        playRound()
    }
    if (playerWin > computerWin) {
        alert(`Congrats! You Win ${playerWin} round | Lost ${playerLost} round | Draw ${draw} round.`)
    } else if (playerWin < computerWin) {
        alert(`Ohh! You lost ${playerLost} round | Win ${playerWin} round | Draw ${draw} round.`)
    } else {
        alert(`Hah, Draw.`)
    }
}

// announce the winner
