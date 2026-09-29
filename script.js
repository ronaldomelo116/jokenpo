const result = document.querySelector('.result');
const yourScore = document.querySelector('#youcore');
const machineScore = document.querySelector('#machinecore');

const modal = document.querySelector('#modal');
const modalResult = document.querySelector('#modal-result');
const imgHuman = document.querySelector('#img-human');
const imgMachine = document.querySelector('#img-machine');
const modalPlayer = document.querySelector('#modal-player');
const modalMachine = document.querySelector('#modal-machine');
const btnClose = document.querySelector('#modal-close');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const closeModal = () => {
    modal.classList.remove('ativo');
    modalPlayer.classList.remove('perdedor');
    modalMachine.classList.remove('perdedor');
};

btnClose.addEventListener('click', closeModal);

const openModal = (human, machine, winner) => {
    imgHuman.src = `./assets/img/${human}.webp`;
    imgMachine.src = `./assets/img/${machine}.webp`;

    if (winner === 'empate') {
        modalResult.textContent = 'Deu empate!';
        modalResult.style.color = 'blue';
        /* modalPlayer.classList.add('perdedor');
        modalMachine.classList.add('perdedor');
 */
    } else if (winner === 'humano') {
        modalResult.textContent = 'Você ganhou!';
        modalResult.style.color = 'green';
        modalMachine.classList.add('perdedor');

    } else {
        modalResult.textContent = 'Você perdeu!';
        modalResult.style.color = 'red';
        modalPlayer.classList.add('perdedor');
    }

    modal.classList.add('ativo');
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        openModal(human, machine, 'empate');
        result.innerHTML = 'Deu empate!';
        result.style.color = 'blue';

    } else if (
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper' ||
        human === 'paper' && machine === 'rock'
    ) {
        openModal(human, machine, 'humano');
        result.innerHTML = 'Você ganhou!';
        result.style.color = 'green';
        humanScoreNumber++;
        yourScore.innerHTML = humanScoreNumber;
        yourScore.style.color = 'green';

    } else {
        openModal(human, machine, 'maquina');
        result.innerHTML = 'Você perdeu!';
        result.style.color = 'red';
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        machineScore.style.color = 'red';
    }
};

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
};