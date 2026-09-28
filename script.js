const result = document.querySelector('.result');
const yourScore = document.querySelector('#youcore');
const machineScore = document.querySelector('#machinecore');
let humanScoreNumber = 0;
let machineScoreNUmber = 0;

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human, '\nmaquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Deu empate!';
        result.style.color = 'blue';
    }

    else if (human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper' ||
        human === 'paper' && machine === 'rock') {
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