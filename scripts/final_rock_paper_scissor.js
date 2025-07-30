const score = {
    wins: 0,
    ties: 0,
    loses: 0
};
updateScore();
let result = '';
let playerChoose = '';
let computerMove = '';

function playGame(playerChoice) {
    playerChoose = playerChoice;
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    if (playerChoose === computerMove) {
        result = 'Tie.';
        score.ties++;
    } else if (
        (playerChoose === 'rock' && computerMove === 'scissors') ||
        (playerChoose === 'paper' && computerMove === 'rock') ||
        (playerChoose === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win.';
        score.wins++;
    } else {
        result = 'You lose.';
        score.loses++;
    }

    updateResults();
    updateMove();
    updateScore();

    //alert(`You picked ${playerChoose}. Computer picked ${computerMove}. ${result}. Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}`);
}

function updateScore() {
    document.querySelector('.js_Score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function updateResults() {
    document.querySelector('.js_result').innerHTML = result;
}

function updateMove() {
    document.querySelector('.js_move').innerHTML = `You <img src="${playerChoose}-emoji.png" class="move_icon"> Computer <img src="${computerMove}-emoji.png" class="move_icon">`;
}