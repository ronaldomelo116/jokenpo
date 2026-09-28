const result = document.querySelector('.result');
const yourScore = document.querySelector('#youcore');
const machineScore = document.querySelector('#machinecore');
let humanScoreNumber = 0;
let machineScoreNUmber = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human, '\nmaquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Deu empate!';
        result.style.color = 'blue';
    }

    else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) {
        result.innerHTML = 'Você ganhou!';
        result.style.color = 'green';
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber;
        yourScore.style.color = 'green';
    }

    else {
        result.innerHTML = 'Você Perdeu!';
        result.style.color = 'red';
        machineScoreNUmber++
        machineScore.innerHTML = machineScoreNUmber;
        machineScore.style.color = 'red';
    }
}