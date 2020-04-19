// Constantes
const LOSS = 'DERROTA';
const TIE = 'EMPATE';
const VICTORY = 'VICTORIA';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const ELEMENTS = [ROCK, PAPER, SCISSORS];

const decisionTree = {
  [ROCK]: {
    [PAPER]: LOSS,
    [ROCK]: TIE,
    [SCISSORS]: VICTORY,
  },
  [PAPER]: {
    [SCISSORS]: LOSS,
    [PAPER]: TIE,
    [ROCK]: VICTORY,
  },
  [SCISSORS]: {
    [ROCK]: LOSS,
    [SCISSORS]: TIE,
    [PAPER]: VICTORY,
  },
};

const choose = (userChoice) => {
  const machineChoice = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];

  const result = decisionTree[userChoice][machineChoice];

  const textTree = {
    [VICTORY]: `Felicidades!!! Escogiste ${userChoice} y la máquina perdio al elegir ${machineChoice}. Adelante juega otra vez`,
    [LOSS]: `Lo siento! Escogiste ${userChoice} y la máquina ganó al elegir ${machineChoice} Vuelve a intentarlo`,
    [TIE]: `A ver, esta vez "Empataron". Tu y la Máquina eligieron igual: ${machineChoice} y ${userChoice}; ¡Vamos Gánale! intentalo de nuevo`,
  };
  const resultMessage = textTree[result];
  console.log(resultMessage);
};

document.addEventListener('load', () => {
  document.getElementById('rock').addEventListener('click', () => {
    choose(ROCK);
  });
  document.getElementById('paper').addEventListener('click', () => {
    choose(PAPER);
  });
  document.getElementById('scissors').addEventListener('click', () => {
    choose(SCISSORS);
  });
});
