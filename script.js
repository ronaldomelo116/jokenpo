const result = document.querySelector('.result');

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    console.log('humano: '+ human, '\nmaquina: ' + machine);

    if(human === machine) {
        result.innerHTML = 'Deu empate';
    }

    else if (human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper' ||
        human === 'paper' && machine === 'rock'){
        result.innerHTML = 'Você ganhou!';
    }

    else {
        result.innerHTML = 'Você Perdeu';
    }
}