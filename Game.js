// Paths to the images for rock, paper, and scissors
const choices = {
    rock: 'computer_rock.png',
    paper: 'computer_paper.png',
    scissors: 'computer_scissors.png'
};

// DOM elements
const playerChoiceBox = document.getElementById('playerChoice');
const computerChoiceBox = document.getElementById('computerChoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const resultMessage = document.getElementById('resultMessage');
const turnCount = document.getElementById('turnCount');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Initialize scores and turn count
let playerScoreCount = 0;
let computerScoreCount = 0;
let turns = 0;

// Event listeners for the buttons
rockButton.addEventListener('click', () => handleChoice('rock'));
paperButton.addEventListener('click', () => handleChoice('paper'));
scissorsButton.addEventListener('click', () => handleChoice('scissors'));

function handleChoice(playerSelection) {
    const computerSelection = getComputerChoice();

    playerChoiceBox.innerHTML = `<img src="${choices[playerSelection]}" alt="${playerSelection}" style="width: 100px; height: 100px;">`;
    computerChoiceBox.innerHTML = `<img src="${choices[computerSelection]}" alt="${computerSelection}" style="width: 100px; height: 100px;">`;
    const result = determineWinner(playerSelection, computerSelection);
    
    if (result === 'Player wins') {
        playerScoreCount++;
        resultMessage.textContent = 'Congratulations, you win!';
    } else if (result === 'Computer wins') {
        computerScoreCount++;
        resultMessage.textContent = 'Computer Wins!Try Again..';
    } else {
        resultMessage.textContent = 'It\'s a draw!';
    }

    playerScore.value = playerScoreCount;
    computerScore.value = computerScoreCount;
    turns++;
    turnCount.value = turns;
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return 'rock';
    if (randomNum === 1) return 'paper';
    return 'scissors';
}

// DOM element for the Replay button
const replayButton = document.getElementById('replayButton');

// Add event listener for the Replay button
replayButton.addEventListener('click', resetGame);

function resetGame() {
    // Reset scores
    playerScoreCount = 0;
    computerScoreCount = 0;
    turns = 0;

    // Reset displayed values
    playerScore.value = playerScoreCount;
    computerScore.value = computerScoreCount;
    turnCount.value = turns;

    // Clear choices and result message
    playerChoiceBox.innerHTML = 'Player\'s choice';
    computerChoiceBox.innerHTML = 'Computer\'s choice';
    resultMessage.textContent = 'Let the game begin!';
}


function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'Draw';
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'Player wins';
    }
    return 'Computer wins';
}
