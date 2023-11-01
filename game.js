let RPS_TABLE = ['scissor', 'paper', 'rock']; // To navigate what string are we using 
const IMAGES_SOURCES = [
    './sources/images/hand-scissor.png',
    './sources/images/hand-paper.png',
    './sources/images/hand-rock.png',
];
let playerChoosenInd = 0; //To provide RPS_TABLE 
let computerChoosenInd = 0; //To provide RPS_TABLE
let gameRound = 0;
let playerMarks = 0;
let computerMarks = 0;
let leftHand = document.querySelector('#left-hand');
let rightHand = document.querySelector('#right-hand');
let handButtons = document.querySelectorAll('.hand-buttons'); // Array of buttons to shorten the code

function getComputerChoise() {
    computerChoosenInd = Math.floor(Math.random() * RPS_TABLE.length);
    rightHand.src = IMAGES_SOURCES[computerChoosenInd];
}

function playRound() {

    let round = document.querySelector('.game-round'); // span tag for game round
    let playerScore = document.querySelector('.player-score'); // span tag for player score
    let computerScore = document.querySelector('.computer-score'); // span tag for computer score
    let gameResult = document.querySelector('.game-result'); // Game results for playing 5 rounds

    handButtons.forEach((eachVal, ind) => {
        eachVal.addEventListener('click', () => {
            if(eachVal){
                leftHand.src = IMAGES_SOURCES[ind];
                playerChoosenInd = ind;
                getComputerChoise();
                round.textContent = `${++gameRound}`
            }
            if(gameRound <= 5){
                if(playerChoosenInd !== computerChoosenInd){
                    if(RPS_TABLE[playerChoosenInd] === 'rock') {
                        if(RPS_TABLE[computerChoosenInd] === 'paper'){
                            computerMarks++;
                            computerScore.textContent = computerMarks;
                        } else {
                            playerMarks++;
                            playerScore.textContent = playerMarks;
                        }
                    } else if(RPS_TABLE[playerChoosenInd] === 'paper'){
                        if(RPS_TABLE[computerChoosenInd] === 'rock') {
                            playerMarks++;
                            playerScore.textContent = playerMarks;
                        } else {
                            computerMarks++;
                            computerScore.textContent = computerMarks;
                        }
                    } else {
                        if(RPS_TABLE[computerChoosenInd] === 'rock') {
                            computerMarks++;
                            computerScore.textContent = computerMarks;
                        } else {
                            playerMarks++;
                            playerScore.textContent = playerMarks;
                        }
                    }
                }               
            } else {
                if(playerMarks !== computerMarks){
                    if(playerMarks > computerMarks){
                        gameResult.textContent = 'You Win!';
                    } else {
                        gameResult.textContent = 'You Lose!';
                    }
                } else {
                    gameResult.textContent = 'Tie'
                }
            }
        })
    })
}

playRound()