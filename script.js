const rockButtonElement = document.querySelector('.js-rock-button');
const paperButtonElement = document.querySelector('.js-paper-button');
const scissorsButtonElement = document.querySelector('.js-scissors-button');
const botRockButtonElement = document.querySelector('.js-bot-rock-button');
const botPaperButtonElement = document.querySelector('.js-bot-paper-button');
const botScissorsButtonElement = document.querySelector('.js-bot-scissors-button');
const winnerText = document.querySelector('.js-winner-text');
const newGameButton = document.querySelector('.js-new-game');
let canChose = true;
let playerMove;

rockButtonElement.addEventListener('click', () => {
    if (canChose) {
        rockButtonElement.style.backgroundColor = 'green';
        rockButtonElement.style.borderColor = 'darkgreen';
        rockButtonElement.style.boxShadow = '0 0px 0px rgba(0, 229, 255, 0.4), inset 0 0 0px rgba(0, 229, 255, 0.2)';
        playerMove = 1;
        canChose = false;
        playBotMove();
    }
});

paperButtonElement.addEventListener('click', () => {
    if (canChose) {
        paperButtonElement.style.backgroundColor = 'green';
        paperButtonElement.style.borderColor = 'darkgreen';
        paperButtonElement.style.boxShadow = '0 0px 0px rgba(0, 229, 255, 0.4), inset 0 0 0px rgba(0, 229, 255, 0.2)';
        playerMove = 2;
        canChose = false;
        playBotMove();
    }
});

scissorsButtonElement.addEventListener('click', () => {
    if (canChose) {
        scissorsButtonElement.style.backgroundColor = 'green';
        scissorsButtonElement.style.borderColor = 'darkgreen';
        scissorsButtonElement.style.boxShadow = '0 0px 0px rgba(0, 229, 255, 0.4), inset 0 0 0px rgba(0, 229, 255, 0.2)';
        playerMove = 3;
        canChose = false;
        playBotMove();
    }
});

newGameButton.addEventListener('click', () => {
    location.reload();
})

function playBotMove() {
    const botMove = Math.floor(Math.random() * 3) + 1;
    if (botMove === 1) {
        botRockButtonElement.style.backgroundColor = '#a83232';
        botRockButtonElement.style.borderColor = '#420101';
    } else if (botMove === 2) {
        botPaperButtonElement.style.backgroundColor = '#a83232';
        botPaperButtonElement.style.borderColor = '#420101';
    } else {
        botScissorsButtonElement.style.backgroundColor = '#a83232';
        botScissorsButtonElement.style.borderColor = '#420101';
    }
    displayResult(botMove);
}

function displayResult(botMove) {
    if (playerMove === 1) {
        if (botMove === 1) {
            setWinner('tie');
        } else if (botMove === 2) {
            setWinner('bot');
        } else {
            setWinner('human');
        }
    } else if (playerMove === 2) {
        if (botMove === 1) {
            setWinner('human');
        } else if (botMove === 2) {
            setWinner('tie');
        } else {
            setWinner('bot');
        }
    } else if (playerMove === 3) {
        if (botMove === 1) {
            setWinner('bot');
        } else if (botMove === 2) {
            setWinner('human');
        } else {
            setWinner('tie');
        }
    }
}

function setWinner(winner) {
    if (winner === 'human') {
        winnerText.innerText = 'human wins';
        winnerText.style.backgroundImage = 'linear-gradient(90deg, #51ff00, #00ffaa)';
    } else if (winner === 'bot') {
        winnerText.innerText = 'bot wins';
        winnerText.style.backgroundImage = 'linear-gradient(90deg, #ff0000, #ff9900)';
    } else {
        winnerText.innerText = 'tie';
        winnerText.style.backgroundImage = 'linear-gradient(90deg, #999999, #4d4d4d)';
    }
}